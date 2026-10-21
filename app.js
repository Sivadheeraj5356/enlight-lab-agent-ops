const metrics = {
  planner: { label: 'Plan pass rate', value: 0.94, gate: 0.9, detail: '47/50 multi-step plans' },
  tools: { label: 'Tool success', value: 0.97, gate: 0.95, detail: 'CRM/API retries healthy' },
  voice: { label: 'Voice latency', value: 0.89, gate: 0.85, detail: '610 ms p95 round trip' },
  recovery: { label: 'Fallback recovery', value: 0.92, gate: 0.9, detail: '11/12 degraded runs recovered' }
};
function status(m){ if(m.value >= m.gate) return 'good'; if(m.value >= m.gate - .08) return 'warn'; return 'bad'; }
function score(m){ return Math.round((m.planner.value + m.tools.value + m.voice.value + m.recovery.value) / 4 * 100); }
function renderChecks(){ const list = document.getElementById('checks'); list.innerHTML = ''; Object.entries(metrics).forEach(([key,m])=>{ const li=document.createElement('li'); li.className=status(m); li.textContent=`${m.label}: ${m.detail}`; list.appendChild(li); const target=document.getElementById(key); if(target) target.textContent=Math.round(m.value*100)+'%'; }); }
function renderMetrics(){ const wrap=document.getElementById('metrics'); wrap.innerHTML=''; Object.values(metrics).forEach(m=>{ const card=document.createElement('article'); card.className='metric'; card.innerHTML=`<small>${m.label}</small><b>${m.label.includes('latency')?m.detail:Math.round(m.value*100)+'%'}</b>`; wrap.appendChild(card); }); document.getElementById('score').textContent=score(metrics)+'/100'; }
renderChecks(); renderMetrics();
