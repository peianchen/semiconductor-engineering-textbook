// Editorial preservation audit; requires the pre-expansion Git history.
import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const baselineCommit='9cbbe40bc9a0f9713a4d6dc47934b7cb4d54387f';
const file='content/02-engineering-mathematics.md';
const before=execFileSync('git',['show',baselineCommit+':'+file],{cwd:root,encoding:'utf8'});
const after=readFileSync(path.join(root,file),'utf8');
const norm=s=>s.replace(/\s+/g,' ').trim();
const blocks=before.trim().split(/\n\s*\n/).filter(p=>!p.startsWith('#'));
const errors=[];let unchanged=0,terminologyCorrection=0;
for(const [i,p] of blocks.entries()){
  if(norm(after).includes(norm(p))){unchanged++;continue;}
  const corrected=p.replace('電流對電壓的斜率是小訊號導納','靜態 I–V 曲線在工作點的斜率是小訊號電導');
  if(corrected!==p&&norm(after).includes(norm(corrected))){terminologyCorrection++;continue;}
  errors.push({block:i+1,start:p.slice(0,120)});
}
const section=(md,h)=>md.split('## '+h+'\n')[1]?.split('\n## ')[0].trim();
const oldPractice=section(before,'練習與完整參考解答');
if(!after.includes(oldPractice))errors.push('Original two exercises or full solutions changed');
const oldExample=section(before,'逐步例題：電容節點的建立時間');
if(!after.includes(oldExample))errors.push('Original worked RC example changed');
const equations=before.match(/\$\$\n[\s\S]*?\n\$\$/g)||[];
for(const eq of equations)if(!after.includes(eq))errors.push('Original display equation changed');
const refs=[...before.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].map(m=>m[1]);
for(const url of refs)if(!after.includes(url))errors.push('Original source missing');
const report={
  baselineCommit,file,baselineNonHeadingBlocks:blocks.length,
  unchangedBlocksIgnoringWhitespace:unchanged,
  terminologyCorrection,originalExerciseAndSolutionsPreserved:2,
  originalWorkedExampleUnchanged:after.includes(oldExample),
  originalDisplayEquationsPreserved:equations.length,
  originalReferencesPreserved:refs.length,
  currentExercises:(after.match(/\*\*練習 \d+。/g)||[]).length,
  currentFigures:(after.match(/^!\[/gm)||[]).length,
  baselineHanCharacters:(before.match(/\p{Script=Han}/gu)||[]).length,
  currentHanCharacters:(after.match(/\p{Script=Han}/gu)||[]).length,errors
};
console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
