import { readFile, writeFile, readdir, mkdir, cp, rm, mkdtemp, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Marked } from 'marked';
import katex from 'katex';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const content = path.join(root, 'content');
const release = path.join(root, 'dist');
let out;
const title = '半導體・電子・電機工程';
const sections = [
  [1, 7, '數理與電路基礎', '把物理現象轉成可計算的模型'],
  [8, 13, '材料與半導體元件', '從能帶走到電晶體的工作條件'],
  [14, 21, '製程與積體化', '理解材料、結構與電路的製造約束'],
  [22, 25, '品質與製造工程', '以量測與統計建立可驗證的證據'],
  [26, 35, '電路與電子系統', '將元件組成類比、數位與混合訊號系統'],
  [36, 40, '實驗與整合專題', '用設計、量測與審查檢驗理解'],
  [41, 46, '微奈米與生醫感測', '連接力學、傳輸、界面與電子讀出'],
  [90, 99, '查詢與延伸閱讀', '符號、術語與可追溯的學術資料'],
];
const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const plain = (s) => s.replace(/<[^>]*>/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*#$`]/g, '').replace(/\s+/g, ' ').trim();
const json = (v) => JSON.stringify(v).replaceAll('<', '\\u003c');
function figureURL(href, full = false) {
  if (!/^\.\.\/assets\/figures\/[a-z0-9][a-z0-9._-]*\.(svg|png)$/i.test(href)) throw new Error(`Unsupported textbook figure URL: ${href}`);
  return full ? href.slice(3) : href;
}
const figureSizes = new Map();
for (const name of await readdir(path.join(root,'assets','figures'))) {
  if (!/\.(svg|png)$/i.test(name)) continue;
  const data = await readFile(path.join(root,'assets','figures',name));
  let width, height;
  if (name.endsWith('.png')) {
    if (data.subarray(0,8).toString('hex') !== '89504e470d0a1a0a') throw new Error(`Invalid PNG: ${name}`);
    width=data.readUInt32BE(16); height=data.readUInt32BE(20);
  } else {
    const box=data.toString().match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
    if (!box) throw new Error(`Figure requires zero-origin viewBox: ${name}`);
    width=Number(box[1]); height=Number(box[2]);
  }
  if (!(width>0 && height>0)) throw new Error(`Invalid figure dimensions: ${name}`);
  figureSizes.set(name,{width,height});
}
const names = (await readdir(content)).filter(n => /^\d{2}-[a-z0-9-]+\.md$/.test(n)).sort();
const docs = await Promise.all(names.map(async file => {
  const md = await readFile(path.join(content, file), 'utf8');
  const num = Number(file.slice(0, 2));
  const fullTitle = md.match(/^# (.+)$/m)?.[1];
  if (!fullTitle) throw new Error(`Missing title: ${file}`);
  const name = fullTitle.replace(/^第\s*\d+\s*章[\s　]*/, '');
  const group = sections.find(([a,b]) => num >= a && num <= b);
  if (!group) throw new Error(`No group: ${file}`);
  return { file, id: file.replace('.md',''), num, name, fullTitle, md, group: group[2], text: plain(md), count: (md.match(/\p{Script=Han}/gu) || []).length };
}));
const chapters = docs.filter(d => d.num < 90);
if (!process.argv.includes('--draft') && (chapters.length !== 46 || chapters.some((d,i) => d.num !== i+1))) throw new Error(`Expected consecutive chapters 01–46, got ${chapters.length}`);
let equationCount = 0;
function render(doc, full = false) {
  const prefix = full ? `${doc.id}--` : '';
  const headings = [];
  const counts = new Map();
  const md = new Marked({ gfm: true });
  const formula = (text, displayMode) => {
    equationCount++;
    try { return katex.renderToString(text, {displayMode, throwOnError: true, trust: false, strict: 'ignore', output: 'htmlAndMathml'}); }
    catch(e) { throw new Error(`${doc.file}: ${text}\n${e.message}`); }
  };
  md.use({ extensions: [
    { name:'blockMath', level:'block', start:s=>s.indexOf('$$'), tokenizer(s){ const m=/^\$\$\s*\n([\s\S]*?)\n\$\$(?:\n|$)/.exec(s); if(m)return {type:'blockMath',raw:m[0],text:m[1]}; }, renderer:t=>`<div class="equation">${formula(t.text,true)}</div>\n` },
    { name:'inlineMath', level:'inline', start:s=>s.indexOf('$'), tokenizer(s){ const m=/^\$([^$\n]+?)\$(?!\$)/.exec(s); if(m)return {type:'inlineMath',raw:m[0],text:m[1]}; }, renderer:t=>formula(t.text,false) },
  ], renderer: {
    image({href,title,text}) {
      const alt=String(text).replace(/<[^>]*>/g,'').trim();
      if (!alt) throw new Error(`${doc.file}: figure requires descriptive alt text`);
      const url=figureURL(href,full);
      const size=figureSizes.get(path.basename(href));
      if (!size) throw new Error(`${doc.file}: missing figure ${href}`);
      return `<a class="figure-link" href="${esc(url)}"><img class="book-figure" src="${esc(url)}" alt="${esc(alt)}" width="${size.width}" height="${size.height}"${title?` title="${esc(title)}"`:''} loading="lazy" decoding="async"><span class="figure-hint">開啟原尺寸圖 ↗</span></a>`;
    },
    heading({tokens,depth}) {
      const text = this.parser.parseInline(tokens);
      const slug = plain(text).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'');
      const n = counts.get(slug)||0; counts.set(slug,n+1);
      const id = prefix+slug+(n?`-${n}`:'');
      if (depth === 2) headings.push({id,text:plain(text)});
      return `<h${depth} id="${esc(id)}">${text}</h${depth}>\n`;
    },
    link({href,title,tokens}) {
      let url = href;
      const [linkPath, linkHash] = href.split('#');
      if (linkPath.endsWith('.md')) {
        const target = docs.find(d => d.file === path.basename(linkPath));
        if (target) url = full ? `#${target.id}${linkHash ? '--'+linkHash : ''}` : `${target.id}.html${linkHash ? '#'+linkHash : ''}`;
      } else if (full && href.startsWith('#')) url = '#'+prefix+href.slice(1);
      if (/^javascript:/i.test(url)) throw new Error('Unsafe link');
      return `<a href="${esc(url)}"${title?` title="${esc(title)}"`:''}${/^https?:/.test(url)?' target="_blank" rel="noopener noreferrer"':''}>${this.parser.parseInline(tokens)}</a>`;
    },
    table(token){
      const head = token.header.map((c)=>`<th scope="col">${this.parser.parseInline(c.tokens)}</th>`).join('');
      const rows = token.rows.map(r=>`<tr>${r.map(c=>`<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`).join('');
      return `<div class="table-wrap" tabindex="0" role="region" aria-label="資料表，可橫向捲動"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
    },
  }});
  const html = md.parse(doc.md);
  return {html,headings};
}
const searchIndex = docs.map(d=>({title:d.fullTitle,group:d.group,url:`chapters/${d.id}.html`,text:d.text}));
function sidebar(active, base) {
  return `<button class="sidebar-close" id="menuClose" type="button">關閉目錄 ×</button><a class="brand" href="${base}index.html"><span class="brand-icon">Si</span><span>半導體・電子・電機<small>ENGINEERING FIELDNOTES</small></span></a><nav aria-label="全書目錄"><a class="nav-overview" href="${base}index.html">學習地圖</a>${sections.map(([a,b,label])=>`<section class="nav-group"><h2>${label}</h2>${docs.filter(d=>d.num>=a&&d.num<=b).map(d=>`<a ${active===d.id?'aria-current="page"':''} href="${base}chapters/${d.id}.html"><span>${d.num<90?String(d.num).padStart(2,'0'):'附'}</span>${esc(d.name)}</a>`).join('')}</section>`).join('')}</nav>`;
}
function shell({active='',name=title,body='',toc='',base='',kind=''}) {
  return `<!doctype html><html lang="zh-Hant" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="從工程數學與電路，連接半導體物理、製程、積體電路及微奈米感測的繁體中文教材。"><title>${esc(name)}｜工程教材</title><link rel="stylesheet" href="${base}assets/book.css"><link rel="stylesheet" href="${base}assets/katex/katex.min.css"><script>try{document.documentElement.dataset.theme=localStorage.getItem('engineering-theme')||'light'}catch(e){}</script></head><body class="${kind}" data-base="${base}"><a class="skip" href="#main">跳至正文</a><div class="reading-progress" id="progress"></div><aside class="sidebar" id="sidebar">${sidebar(active,base)}</aside><button class="nav-shade" id="navShade" aria-label="關閉目錄" hidden></button><header class="toolbar"><button class="menu-toggle" id="menuToggle" aria-controls="sidebar" aria-expanded="false">目錄</button><a class="toolbar-home" href="${base}index.html">工程教材 <span>／</span> 學習版</a><div class="toolbar-actions"><button id="searchOpen" aria-label="搜尋全書">搜尋 <kbd>⌘ K</kbd></button><a href="${base}all.html">整本閱讀</a><button id="themeToggle" aria-label="切換深淺色">深／淺</button><button id="printPage">列印</button></div></header><main id="main" tabindex="-1">${body}<footer><span>半導體・電子・電機工程 · 2026 學習版</span><a href="${base}quality.html">檢查紀錄</a><a href="${base}chapters/92-bibliography.html">學術資料與編寫說明</a></footer></main>${toc}<dialog id="searchDialog" class="search-dialog" aria-labelledby="searchLabel"><form method="dialog"><button aria-label="關閉搜尋">關閉</button></form><label id="searchLabel" for="searchInput">搜尋章節、術語與全文</label><input id="searchInput" type="search" placeholder="例如：跨導、混疊、Debye、良率" autocomplete="off"><p id="searchCount" aria-live="polite"></p><div id="searchResults"></div></dialog><script defer src="${base}assets/search-index.js"></script><script defer src="${base}assets/models.js"></script><script defer src="${base}assets/book.js"></script></body></html>`;
}

// Render every equation before writing, then build in a unique staging directory.
const rendered = docs.map(doc => ({single:render(doc),full:render(doc,true)}));
out = await mkdtemp(path.join(root,'.book-build-'));
await mkdir(path.join(out,'chapters'),{recursive:true});
await mkdir(path.join(out,'assets','katex'),{recursive:true});
await cp(path.join(root,'src','book.css'),path.join(out,'assets','book.css'));
await cp(path.join(root,'src','book.js'),path.join(out,'assets','book.js'));
await cp(path.join(root,'src','models.js'),path.join(out,'assets','models.js'));
await cp(path.join(root,'assets','figures'),path.join(out,'assets','figures'),{recursive:true});
await writeFile(path.join(out,'assets','search-index.js'),`window.BOOK_INDEX=${json(searchIndex)};\n`);
await cp(path.join(root,'node_modules','katex','dist','katex.min.css'),path.join(out,'assets','katex','katex.min.css'));
await cp(path.join(root,'node_modules','katex','dist','fonts'),path.join(out,'assets','katex','fonts'),{recursive:true});
await cp(path.join(root,'node_modules','katex','LICENSE'),path.join(out,'assets','katex','LICENSE.txt'));

const fullParts=[];
for (const [i,doc] of docs.entries()) {
  const {html,headings}=rendered[i].single;
  const prev=docs[i-1],next=docs[i+1];
  const pager=`<nav class="pager" aria-label="章節翻頁">${prev?`<a href="${prev.id}.html"><small>上一章</small>${esc(prev.name)}</a>`:'<span></span>'}${next?`<a href="${next.id}.html"><small>下一章</small>${esc(next.name)} →</a>`:''}</nav>`;
  const tools=doc.num===40?calculatorMarkup():'';
  await writeFile(path.join(out,'chapters',`${doc.id}.html`),shell({active:doc.id,name:doc.fullTitle,base:'../',kind:'chapter-page',body:`<div class="eyebrow">${esc(doc.group)}<span>約 ${Math.max(3,Math.round(doc.count/320))} 分鐘正文</span></div><article class="prose">${html}</article>${tools}${pager}`,toc:`<aside class="page-toc" aria-label="本章段落"><strong>本章內容</strong>${headings.map(h=>`<a href="#${esc(h.id)}">${esc(h.text)}</a>`).join('')}</aside>`}));
  fullParts.push(`<section class="book-section" id="${doc.id}"><div class="eyebrow">${esc(doc.group)}</div>${rendered[i].full.html}</section>`);
}

const map=sections.filter(g=>g[0]<90).map(([a,b,label,desc],i)=>`<section class="curriculum-section"><div class="section-label"><span>${String(i+1).padStart(2,'0')}</span><h2>${label}</h2><p>${desc}</p></div><ol class="chapter-list">${chapters.filter(d=>d.num>=a&&d.num<=b).map(d=>`<li><a href="chapters/${d.id}.html"><span>${String(d.num).padStart(2,'0')}</span><strong>${esc(d.name)}</strong><em>閱讀 →</em></a></li>`).join('')}</ol></section>`).join('');
const count=chapters.reduce((a,d)=>a+d.count,0);
const home=`<section class="hero"><div class="eyebrow">ENGINEERING · FROM MODELS TO EVIDENCE</div><h1>從一條方程式，<br>理解一顆晶片。</h1><p>半導體・電子・電機工程<br><span>把數學、物理、製造與系統，接成一條能夠推理與實作的學習路徑。</span></p><div class="hero-actions"><a class="primary" href="chapters/01-engineering-map.html">從第一章開始 →</a><a href="all.html">開啟整本教材</a><a class="offline-download" href="engineering-textbook-html.zip" download>下載離線 HTML</a></div><div class="book-facts"><span><strong>${chapters.length}</strong>章完整正文</span><span><strong>${(count/10000).toFixed(1)}萬</strong>中文字</span><span><strong>例題＋解答</strong>從模型走向驗證</span></div></section><section class="reading-note"><h2>怎麼使用這本書</h2><p>從高中代數與基礎物理出發，逐步銜接大學工程課程。先讀模型與假設，再親手做一次例題，最後在看解答前完成練習。這是一部跨學科自學教材；深入專業課、實驗資格與實際製程設計仍需搭配正式課程與設備規範。</p><div class="routes"><a href="chapters/01-engineering-map.html"><b>基礎扎根</b><span>01–13 · 數理、電路、元件</span></a><a href="chapters/${chapters.find(d=>d.num===14)?.id}.html"><b>半導體工程</b><span>14–25 · 製程、量測、良率</span></a><a href="chapters/${chapters.find(d=>d.num===26)?.id}.html"><b>電路與系統</b><span>26–40 · 設計、實驗、專題</span></a><a href="chapters/${chapters.find(d=>d.num===41)?.id}.html"><b>跨域感測</b><span>41–46 · 微奈米、界面、生醫</span></a></div></section><div id="curriculum">${map}</div><section class="reading-note"><h2>查詢與延伸</h2><p>${docs.filter(d=>d.num>=90).map(d=>`<a href="chapters/${d.id}.html">${esc(d.name)}</a>`).join('　／　')}</p><p>各章列出可追溯的大學課程、期刊或官方技術資料；完整書籍未取得全文時，列為延伸閱讀，不宣稱已逐頁驗證。</p></section>`;
const homeHTML = shell({body:home,kind:'home-page'});
const offlineHome = homeHTML.replace(/<a class="offline-download"[^>]*>[^<]*<\/a>/,'<span>離線教材 · 已下載</span>');
await writeFile(path.join(out,'index.html'),offlineHome);
const fullToc=`<details class="full-toc"><summary>全書目錄（${chapters.length}章與附錄）</summary>${docs.map(d=>`<a href="#${d.id}">${esc(d.fullTitle)}</a>`).join('')}</details>`;
await writeFile(path.join(out,'all.html'),shell({name:'整本教材',kind:'full-book',body:`<header class="book-title"><div class="eyebrow">完整閱讀與列印版</div><h1>${title}</h1><p>數理基礎 · 元件物理 · 製程 · 電子系統 · 微奈米感測</p></header>${fullToc}<article class="prose">${fullParts.join('')}</article>`}));
const qualityMD=await readFile(path.join(root,'research','quality-report.md'),'utf8');
await writeFile(path.join(out,'quality.html'),shell({name:'教材檢查紀錄',kind:'home-page',body:`<article class="prose">${new Marked().parse(qualityMD)}</article>`}));
await writeFile(path.join(out,'book.md'),docs.map(d=>d.md.replace(/(!\[(?:\\.|[^\]\\])*\]\()\.\.\/assets\/figures\//g,'$1assets/figures/')).join('\n\n---\n\n'));
const manifest={title,chapters:chapters.length,appendices:docs.length-chapters.length,hanCharacters:count,equations:equationCount/2,generatedPages:docs.length+3,documents:docs.map(d=>({file:d.file,title:d.fullTitle,characters:d.count,group:d.group}))};
await writeFile(path.join(out,'book-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
const offline=spawnSync('zip',['-q','-r',path.join(out,'engineering-textbook-html.zip'),'index.html','all.html','quality.html','chapters','assets','book.md','book-manifest.json'],{cwd:out,encoding:'utf8'});
if(offline.status!==0)throw new Error(`Offline archive failed: ${offline.stderr}`);
await writeFile(path.join(out,'index.html'),homeHTML);
// Only replace the generated dist after the complete staged book and ZIP exist.
if (release !== path.join(root,'dist')) throw new Error('Unexpected release directory');
await rm(release,{recursive:true,force:true});
await rename(out,release);
console.log(JSON.stringify({chapters:manifest.chapters,appendices:manifest.appendices,hanCharacters:count,equations:manifest.equations,pages:manifest.generatedPages}));

function calculatorMarkup(){return `<section class="model-lab" aria-labelledby="modelLab"><h2 id="modelLab">模型試算：把假設變成可調參數</h2><p>教學估算，不含漏電、缺陷群聚或產品規格。改變一個參數，觀察量級如何變化。</p><div class="model-grid"><form data-model="power"><h3>CMOS動態功耗</h3><label>活動因子 α<input name="alpha" type="number" min="0" max="1" step="0.01" value="0.2"></label><label>有效電容（pF）<input name="c" type="number" min="0" value="20"></label><label>電壓（V）<input name="v" type="number" min="0" step="0.1" value="0.8"></label><label>頻率（MHz）<input name="f" type="number" min="0" value="100"></label><output aria-live="polite"></output></form><form data-model="yield"><h3>Poisson隨機缺陷良率</h3><label>晶粒面積（cm²）<input name="area" type="number" min="0" step="0.1" value="0.4"></label><label>致命缺陷密度（cm⁻²）<input name="density" type="number" min="0" step="0.1" value="0.3"></label><output aria-live="polite"></output><p>假設均勻獨立缺陷；不含參數失效與測試誤判。</p></form></div></section>`;}
