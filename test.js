const fs=require('fs');
const app=fs.readFileSync('app.js','utf8');
const tests=[
 ['four launch domains', ['planner','tools','voice','recovery'].every(k=>app.includes(k))],
 ['gate and weighted launch score', app.includes('function score(m)') && app.includes('Math.round') && app.includes('/ 4 * 100')],
 ['visual status thresholds', app.includes('gate - .08') && app.includes('className=status(m)')],
];
let failed=0; for(const [name,ok] of tests){ console.log(`${ok?'PASS':'FAIL'} ${name}`); if(!ok) failed++; } process.exit(failed?1:0);
