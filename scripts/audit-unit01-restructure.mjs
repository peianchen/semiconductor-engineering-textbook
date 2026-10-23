// One-time editorial regression audit against the pre-restructure Git baseline.
// Requires this repository's history; not part of offline-reader runtime.
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const baselineCommit='84728572b3b18a44bb32549f8a09b4b2b43eecd5';
const file='content/01-engineering-map.md';
const before=execFileSync('git',['show',baselineCommit+':'+file],{cwd:root,encoding:'utf8'});
const after=readFileSync(path.join(root,file),'utf8');
const norm=s=>s.replace(/圖 1-\d+/g,'圖 1-X').replace(/\s+/g,' ').trim();
const flat=norm(after);
const paragraphs=before.trim().split(/\n\s*\n/).filter(s=>!s.startsWith('#'));
const errors=[];
let unchanged=0,edited=0,split=0;
for(const [i,paragraph] of paragraphs.entries()){
  if(flat.includes(norm(paragraph))){unchanged++;continue;}
  const adjusted=paragraph
    .replace('訊號鏈也是同樣道理。','沿著這條訊號鏈檢查資訊是否仍被保留。')
    .replace('路徑變更與 Recipe 追蹤','路徑變更與設備程序（Recipe，下一小節說明）追蹤')
    .replace('想像某批產品在薄膜量測時超出規格。','延續剛才的薄膜量測超規案例，');
  if(adjusted!==paragraph&&flat.includes(norm(adjusted))){edited++;continue;}
  let required;
  if(paragraph.startsWith('![溫度記錄器的訊號鏈')){
    required=[
      '溫度記錄器訊號鏈：感測元件、偏壓保護與類比調理、ADC取樣量化、MCU韌體與運算、選配RF收發器及天線',
      '跨層工程模型：材料製程、元件、電路、架構韌體與產品驗證依序傳遞模型與限制',
      '../assets/figures/unit01-signal-chain.svg','../assets/figures/unit01-system-map.svg'
    ];
  }else if(paragraph.startsWith('圖 1-5　同一個產品')){
    required=[
      'ADC 前是連續電訊號，後是數位碼；選配 RF 收發器到天線的介面則是類比射頻訊號。',
      '圖中框線是功能分解，不代表每一塊都必須是獨立晶片；電源、時脈、熱與接地會同時影響多個方塊。',
      '圖示是分析層級，不是製造次序',
      '方格連接圖只代表抽象材料模型，不是矽的真實晶體結構。'
    ];
  }
  if(required&&required.every(s=>flat.includes(norm(s)))){split++;continue;}
  errors.push({block:i+1,start:paragraph.slice(0,120)});
}
const section=(text,name)=>text.split('## '+name+'\n')[1]?.split('\n## ')[0].trim();
if(section(before,'練習與參考解答')!==section(after,'練習與參考解答'))errors.push('Eight exercises and solutions changed');
const tables=before.match(/^\|.*(?:\n\|.*)*/gm)||[];
for(const t of tables)if(!after.includes(t))errors.push('Original table changed');
const equations=before.match(/\$\$\n[\s\S]*?\n\$\$/g)||[];
for(const eq of equations)if(!after.includes(eq))errors.push('Original display equation changed');
const references=before.match(/^\d+\. \[.*$/gm)||[];
for(const ref of references)if(!after.includes(ref))errors.push('Original reference or scope changed');
const report={
  baselineCommit,file,
  baselineNonHeadingBlocks:paragraphs.length,
  unchangedBlocksIgnoringWhitespaceAndFigureNumber:unchanged,
  connectionOnlyEdits:edited,combinedFigureBlocksSplitAndChecked:split,
  originalTablesPreserved:tables.length,originalDisplayEquationsPreserved:equations.length,
  originalReferencesPreserved:references.length,exerciseSectionUnchanged:section(before,'練習與參考解答')===section(after,'練習與參考解答'),
  currentFigureCount:(after.match(/^!\[/gm)||[]).length,
  baselineHanCharacters:(before.match(/\p{Script=Han}/gu)||[]).length,
  currentHanCharacters:(after.match(/\p{Script=Han}/gu)||[]).length,
  errors
};
console.log(JSON.stringify(report,null,2));
if(errors.length)process.exitCode=1;
