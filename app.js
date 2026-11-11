/* ---------------- Data ---------------- */
const EX=[
 {id:'bench',name:'Barbell Bench Press',m:'Chest',e:'Barbell',c:['Lie with eyes under the bar, feet planted, shoulder blades pinched back.','Lower the bar under control to your mid-chest, elbows about 45° from your body.','Press back up and slightly toward your face until arms are locked.']},
 {id:'incline_db',name:'Incline Dumbbell Press',m:'Chest',e:'Dumbbell',c:['Set the bench to 30–45° and kick the dumbbells up to your shoulders.','Lower until the dumbbells sit beside your upper chest.','Press up and slightly in, without clanking the weights together.']},
 {id:'db_bench',name:'Dumbbell Bench Press',m:'Chest',e:'Dumbbell',c:['Lie flat with dumbbells over your chest, palms facing forward.','Lower with control until your elbows are just below the bench.','Drive up to full lockout and squeeze your chest.']},
 {id:'pushup',name:'Push-Up',m:'Chest',e:'Bodyweight',c:['Hands slightly wider than shoulders, body in one straight line.','Lower until your chest is a fist away from the floor.','Push the floor away and keep your hips from sagging.']},
 {id:'cable_fly',name:'Cable Fly',m:'Chest',e:'Cable',c:['Set pulleys at shoulder height and step forward into a split stance.','With a soft bend in the elbows, open your arms wide.','Bring your hands together in a hugging arc and squeeze.']},
 {id:'dips',name:'Chest Dip',m:'Chest',e:'Bodyweight',c:['Support yourself on the bars with arms locked.','Lean slightly forward and lower until shoulders are just below elbows.','Press back up without shrugging.']},
 {id:'deadlift',name:'Conventional Deadlift',m:'Back',e:'Barbell',c:['Bar over mid-foot, hip-width stance, grip just outside the legs.','Pull the slack out, brace hard, and push the floor away with your legs.','Stand tall with hips and knees locking together; return the bar along your legs.']},
 {id:'row',name:'Barbell Row',m:'Back',e:'Barbell',c:['Hinge until your torso is around 45°, back flat.','Pull the bar to your lower ribs, leading with the elbows.','Lower under control without letting your chest rise.']},
 {id:'pullup',name:'Pull-Up',m:'Back',e:'Bodyweight',c:['Hang from the bar with an overhand grip, slightly wider than shoulders.','Pull your elbows down toward your ribs until your chin clears the bar.','Lower all the way to a dead hang.']},
 {id:'latpull',name:'Lat Pulldown',m:'Back',e:'Cable',c:['Lock your thighs under the pad and grab the bar wide.','Pull the bar to your upper chest while keeping your chest up.','Let it rise slowly until your arms are straight.']},
 {id:'cable_row',name:'Seated Cable Row',m:'Back',e:'Cable',c:['Sit tall with a slight knee bend and arms extended.','Row the handle to your stomach, squeezing your shoulder blades.','Reach forward under control without rounding your back.']},
 {id:'db_row',name:'One-Arm Dumbbell Row',m:'Back',e:'Dumbbell',c:['Brace one hand and knee on a bench, back flat.','Pull the dumbbell toward your hip.','Lower until your arm is fully stretched.']},
 {id:'facepull',name:'Face Pull',m:'Shoulders',e:'Cable',c:['Set a rope at upper-chest height and grab it with thumbs facing back.','Pull toward your face, spreading the rope apart.','Finish with hands beside your ears and elbows high.']},
 {id:'ohp',name:'Overhead Press',m:'Shoulders',e:'Barbell',c:['Bar on your front delts, grip just outside shoulders, glutes squeezed.','Press straight up, moving your head back then through once the bar passes.','Lock out overhead with the bar over mid-foot.']},
 {id:'db_shoulder',name:'Seated Dumbbell Shoulder Press',m:'Shoulders',e:'Dumbbell',c:['Sit upright with dumbbells at shoulder height.','Press overhead until arms are straight.','Lower back to ear level with control.']},
 {id:'lat_raise',name:'Lateral Raise',m:'Shoulders',e:'Dumbbell',c:['Stand with dumbbells at your sides, slight bend in the elbows.','Raise your arms out to shoulder height, leading with the elbows.','Lower slowly; avoid swinging.']},
 {id:'rear_delt',name:'Reverse Pec Deck',m:'Shoulders',e:'Machine',c:['Face the machine with handles at shoulder height.','Sweep your arms back in a wide arc.','Return slowly until you feel a stretch in the rear delts.']},
 {id:'squat',name:'Back Squat',m:'Legs',e:'Barbell',c:['Bar on your upper back, feet shoulder-width, brace your core.','Sit down between your hips until your hip crease is below the knee.','Drive up, keeping your chest up and knees tracking over toes.']},
 {id:'front_squat',name:'Front Squat',m:'Legs',e:'Barbell',c:['Rack the bar on your front delts with elbows high.','Squat straight down, keeping your torso upright.','Stand up driving your elbows toward the ceiling.']},
 {id:'goblet',name:'Goblet Squat',m:'Legs',e:'Dumbbell',c:['Hold a dumbbell vertically against your chest.','Squat down with elbows inside your knees.','Stand tall and squeeze your glutes at the top.']},
 {id:'leg_press',name:'Leg Press',m:'Legs',e:'Machine',c:['Feet shoulder-width in the middle of the platform.','Lower until knees reach about 90° without your lower back lifting.','Press up without locking your knees hard.']},
 {id:'rdl',name:'Romanian Deadlift',m:'Legs',e:'Barbell',c:['Stand tall holding the bar, knees softly bent.','Push your hips back and slide the bar down your thighs until you feel a hamstring stretch.','Drive your hips forward to stand back up.']},
 {id:'lunge',name:'Walking Lunge',m:'Legs',e:'Dumbbell',c:['Hold dumbbells at your sides and step forward.','Lower until the back knee nearly touches the floor.','Push through the front heel into the next step.']},
 {id:'bss',name:'Bulgarian Split Squat',m:'Legs',e:'Dumbbell',c:['Rest your back foot on a bench, front foot a stride ahead.','Lower straight down until the front thigh is parallel.','Drive up through the front heel.']},
 {id:'leg_ext',name:'Leg Extension',m:'Legs',e:'Machine',c:['Align your knee with the machine pivot, pad on your shins.','Extend your legs until straight and squeeze the quads.','Lower slowly.']},
 {id:'leg_curl',name:'Lying Leg Curl',m:'Legs',e:'Machine',c:['Lie face down with the pad just above your heels.','Curl your heels toward your glutes.','Lower with control to almost straight.']},
 {id:'calf',name:'Standing Calf Raise',m:'Legs',e:'Machine',c:['Balls of your feet on the edge, heels hanging.','Rise as high as you can and pause.','Lower into a full stretch.']},
 {id:'hip_thrust',name:'Barbell Hip Thrust',m:'Glutes',e:'Barbell',c:['Upper back on a bench, padded bar across your hips.','Drive through your heels until hips are level with your torso.','Pause, squeeze your glutes, and lower.']},
 {id:'bb_curl',name:'Barbell Curl',m:'Arms',e:'Barbell',c:['Stand with the bar at your thighs, palms forward.','Curl up keeping elbows pinned to your sides.','Lower slowly to full extension.']},
 {id:'hammer',name:'Hammer Curl',m:'Arms',e:'Dumbbell',c:['Hold dumbbells with palms facing each other.','Curl up without letting the elbows drift forward.','Lower under control.']},
 {id:'pushdown',name:'Triceps Rope Pushdown',m:'Arms',e:'Cable',c:['Grip the rope with elbows tucked at your sides.','Push down and spread the rope at the bottom.','Let it rise until forearms are just above parallel.']},
 {id:'skull',name:'EZ-Bar Skull Crusher',m:'Arms',e:'Barbell',c:['Lie on a bench holding the bar over your shoulders.','Bend at the elbows to lower the bar toward your forehead.','Extend back up while keeping elbows still.']},
 {id:'oh_ext',name:'Overhead Triceps Extension',m:'Arms',e:'Dumbbell',c:['Hold one dumbbell overhead with both hands.','Lower it behind your head, elbows pointing up.','Extend to lockout.']},
 {id:'plank',name:'Plank',m:'Core',e:'Bodyweight',u:'sec',c:['Forearms under shoulders, body in a straight line.','Brace your abs and squeeze your glutes.','Hold without letting your hips sag or rise. Log seconds.']},
 {id:'hanging_leg',name:'Hanging Leg Raise',m:'Core',e:'Bodyweight',c:['Hang from a bar with straight arms.','Raise your legs by curling your pelvis up.','Lower slowly without swinging.']},
 {id:'cable_crunch',name:'Cable Crunch',m:'Core',e:'Cable',c:['Kneel facing the stack holding a rope beside your head.','Crunch down, bringing your elbows toward your thighs.','Return slowly while keeping hips still.']},
 {id:'russian',name:'Russian Twist',m:'Core',e:'Bodyweight',c:['Sit leaning back with feet raised or on the floor.','Rotate your torso to touch each side.','Each touch counts as one rep.']}
];
const EXM=Object.fromEntries(EX.map(e=>[e.id,e]));
const MUSCLES=['All','Chest','Back','Shoulders','Legs','Glutes','Arms','Core'];
const TPL=[
 {id:'t_full',name:'Full Body Starter',lvl:'Beginner',freq:'3× / week',d:'Simple movements that hit every major muscle. Good first routine.',x:[['goblet',3,10],['db_bench',3,10],['latpull',3,10],['rdl',3,10],['plank',3,30]]},
 {id:'t_upper',name:'Upper Body',lvl:'Intermediate',freq:'Upper / Lower split',d:'Chest, back, shoulders and arms in one session.',x:[['bench',3,5],['incline_db',3,10],['latpull',3,10],['db_row',3,10],['lat_raise',3,15],['pushdown',3,12]]},
 {id:'t_lower',name:'Lower Body',lvl:'Intermediate',freq:'Upper / Lower split',d:'Squat-focused leg day with hamstring and core work.',x:[['squat',3,5],['rdl',3,8],['bss',3,10],['leg_ext',3,12],['calf',3,15],['hanging_leg',3,12]]},
 {id:'t_push',name:'Push Day',lvl:'Intermediate',freq:'Push / Pull / Legs',d:'Chest, shoulders and triceps.',x:[['bench',4,6],['incline_db',3,10],['db_shoulder',3,10],['lat_raise',3,15],['pushdown',3,12],['dips',2,10]]},
 {id:'t_pull',name:'Pull Day',lvl:'Intermediate',freq:'Push / Pull / Legs',d:'Back, rear delts and biceps.',x:[['deadlift',3,5],['pullup',3,8],['cable_row',3,10],['facepull',3,15],['bb_curl',3,10],['hammer',2,12]]},
 {id:'t_legs',name:'Leg Day',lvl:'Intermediate',freq:'Push / Pull / Legs',d:'Quads, hamstrings and calves.',x:[['squat',4,6],['rdl',3,8],['leg_press',3,12],['leg_curl',3,12],['calf',4,12]]},
 {id:'t_5a',name:'5×5 Strength A',lvl:'Beginner',freq:'Alternate A / B',d:'Three heavy compounds. Add weight each session.',x:[['squat',5,5],['bench',5,5],['row',5,5]]},
 {id:'t_5b',name:'5×5 Strength B',lvl:'Beginner',freq:'Alternate A / B',d:'Pairs with A. One heavy set of deadlifts.',x:[['squat',5,5],['ohp',5,5],['deadlift',1,5]]},
 {id:'t_big3',name:'Big Three',lvl:'Advanced',freq:'1–2× / week',d:'Squat, bench and deadlift at low reps for strength.',x:[['squat',5,3],['bench',5,3],['deadlift',3,3]]},
 {id:'t_db',name:'Dumbbells Only',lvl:'Beginner',freq:'Home or hotel gym',d:'A full workout with just a pair of dumbbells.',x:[['goblet',3,12],['db_bench',3,10],['db_row',3,10],['db_shoulder',3,10],['lunge',3,10],['hammer',3,12]]}
];

/* ---------------- Utils ---------------- */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid=()=>Math.random().toString(36).slice(2,10);
const DAY=864e5;
const store={mem:{},get(k){try{const v=localStorage.getItem(k);if(v!=null)return JSON.parse(v)}catch(e){}return this.mem[k]??null},set(k,v){this.mem[k]=v;try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},del(k){delete this.mem[k];try{localStorage.removeItem(k)}catch(e){}}};
async function hash(s){try{const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('rf:'+s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}catch(e){let h=0;for(const c of 'rf:'+s)h=(h*31+c.charCodeAt(0))|0;return 'f'+h}}
const yt=n=>'https://www.youtube.com/results?search_query='+encodeURIComponent(n+' proper form tutorial');
const initials=n=>n.split(/[\s-]+/).filter(w=>/[A-Za-z]/.test(w[0])).slice(0,2).map(w=>w[0].toUpperCase()).join('');
const fmtDate=t=>new Date(t).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'});
const fmtDur=ms=>{const m=Math.round(ms/6e4);return m>=60?Math.floor(m/60)+'h '+(m%60)+'m':m+' min'};
const clock=ms=>{const s=Math.max(0,Math.floor(ms/1000)),h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+':'+String(m).padStart(2,'0'):m)+':'+String(x).padStart(2,'0')};
const kfmt=v=>v>=1000?(v/1000).toFixed(v>=10000?0:1)+'k':String(Math.round(v));
const vol=w=>w.ex.reduce((a,x)=>a+x.sets.filter(s=>s.done).reduce((b,s)=>b+(+s.kg||0)*(+s.reps||0),0),0);
const weekStart=t=>{const d=new Date(t);d.setHours(0,0,0,0);d.setDate(d.getDate()-((d.getDay()+6)%7));return d.getTime()};
const ICON={
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z"/></svg>',
 workout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4m3-6v8m12-8v8m3-6v4M6 12h12"/></svg>',
 exercises:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
 history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></svg>',
 profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>',
 play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
 yt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></svg>'
};
const NAV=[['home','Home'],['workout','Workout'],['exercises','Exercises'],['history','History'],['profile','Profile']];

/* ---------------- State ---------------- */
let users=store.get('rf_users')||{};
let me=null,data=null;
const ui={view:'home',q:'',muscle:'All',rest:null,restTotal:90,flash:''};
function save(){if(!me)return;users[me].data=data;store.set('rf_users',users)}
function toast(msg){const t=$('#toast');t.textContent=msg;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(()=>t.hidden=true,2200)}

/* ---------------- Auth ---------------- */
function showAuth(which){$('#v-login').hidden=which!=='login';$('#v-register').hidden=which!=='register';$('#login-err').hidden=$('#reg-err').hidden=true}
function err(id,msg){const e=$(id);e.textContent=msg;e.hidden=false}
$('#login-form').addEventListener('submit',async e=>{e.preventDefault();
  const em=$('#login-email').value.trim().toLowerCase(),pw=$('#login-password').value;
  if(!em||!pw)return err('#login-err','Enter your email and password.');
  const u=users[em];if(!u||u.pw!==await hash(pw))return err('#login-err','That email and password don\'t match an account in this browser.');
  signIn(em)});
$('#register-form').addEventListener('submit',async e=>{e.preventDefault();
  const name=$('#reg-name').value.trim(),em=$('#reg-email').value.trim().toLowerCase(),pw=$('#reg-password').value,cf=$('#reg-confirm').value;
  if(!name)return err('#reg-err','Enter your name.');
  if(!/^\S+@\S+\.\S+$/.test(em))return err('#reg-err','Enter a valid email address, like you@example.com.');
  if(pw.length<8)return err('#reg-err','Use at least 8 characters for your password.');
  if(pw!==cf)return err('#reg-err','The two passwords don\'t match.');
  if(users[em])return err('#reg-err','An account with this email already exists. Log in instead.');
  users[em]={name,pw:await hash(pw),created:Date.now(),data:{history:[],routines:[],active:null}};store.set('rf_users',users);
  signIn(em,true)});
function signIn(em,isNew){me=em;data=users[em].data;store.set('rf_session',em);ui.view='home';
  $('#auth').hidden=true;$('#app').hidden=false;$('#side-name').textContent=users[em].name;$('#side-email').textContent=em;
  render();if(isNew)toast('Account created. Pick a routine to start.')}
function signOut(){store.del('rf_session');me=data=null;stopRest();$('#app').hidden=true;$('#resume').hidden=true;$('#auth').hidden=false;showAuth('login');$('#login-password').value=''}
async function demo(){const em='demo@repforge.app';
  if(!users[em]){users[em]={name:'Alex Reyes',pw:await hash('repforge123'),created:Date.now()-30*DAY,data:{history:seedHistory(),routines:[mkRoutine(TPL[1]),mkRoutine(TPL[2])],active:null}};store.set('rf_users',users)}
  signIn(em)}
function seedHistory(){const base={bench:60,incline_db:22,latpull:50,db_row:24,lat_raise:8,pushdown:20,squat:80,rdl:70,bss:14,leg_ext:40,calf:60,hanging_leg:0};
  const days=[24,22,19,17,15,12,10,8,5,3,1];const out=[];
  days.forEach((d,i)=>{const t=TPL[i%2?2:1];const start=Date.now()-d*DAY-(2+i%3)*36e5;const prog=Math.floor(i/2)*2.5;
    out.push({id:uid(),name:t.name,start,end:start+(52+(i*7)%18)*6e4,ex:t.x.map(([id,s,r])=>({id,sets:Array.from({length:s},()=>({kg:base[id]?base[id]+(base[id]>=40?prog:prog/2.5):0,reps:r,done:true}))}))})});
  return out.reverse()}
function mkRoutine(t){return{id:uid(),name:t.name,x:t.x.map(a=>[...a])}}

/* ---------------- Derived ---------------- */
function bestKg(id){let b=0;for(const w of data.history)for(const x of w.ex)if(x.id===id)for(const s of x.sets)if(s.done&&+s.kg>b)b=+s.kg;return b}
function lastSets(id){for(const w of data.history)for(const x of w.ex)if(x.id===id)return x.sets.filter(s=>s.done);return[]}
function prCount(){const best={};let n=0;[...data.history].sort((a,b)=>a.start-b.start).forEach(w=>w.ex.forEach(x=>x.sets.forEach(s=>{if(!s.done||!(+s.kg))return;if(best[x.id]!=null&&+s.kg>best[x.id])n++;if(best[x.id]==null||+s.kg>best[x.id])best[x.id]=+s.kg})));return n}
function streak(){const weeks=new Set(data.history.map(w=>weekStart(w.start)));let k=weekStart(Date.now());if(!weeks.has(k))k-=7*DAY;let n=0;while(weeks.has(k)){n++;k-=7*DAY}return n}

/* ---------------- Render ---------------- */
function render(){
  const navHtml=NAV.map(([v,l])=>`<button type="button" data-act="go" data-v="${v}" ${ui.view===v||(v==='workout'&&ui.view==='log')?'aria-current="page"':''}>${ICON[v]}<span>${l}</span></button>`).join('');
  $('#nav').innerHTML=navHtml;$('#tabbar').innerHTML=navHtml;
  const v=$('#view');
  v.innerHTML=({home:vHome,workout:vWorkout,exercises:vExercises,history:vHistory,profile:vProfile,log:vLog}[ui.view]||vHome)();
  const r=$('#resume');r.hidden=!(data.active&&ui.view!=='log');
  if(!r.hidden)r.innerHTML=`<span>${esc(data.active.name)} in progress</span><span class="num" data-elapsed>${clock(Date.now()-data.active.start)}</span>`;
  if(ui.view==='exercises'){const s=$('#ex-search');if(s&&ui.focusSearch){s.focus();s.setSelectionRange(s.value.length,s.value.length);ui.focusSearch=false}}
}
function greet(){const h=new Date().getHours();return h<12?'Good morning':h<18?'Good afternoon':'Good evening'}

function vHome(){
  const now=Date.now(),ws=weekStart(now);
  const wk=data.history.filter(w=>w.start>=ws);
  const next=data.routines[0]||TPL[0];
  const weeks=[...Array(8)].map((_,i)=>{const s=ws-(7-i)*7*DAY;const list=data.history.filter(w=>w.start>=s&&w.start<s+7*DAY);return{s,v:list.reduce((a,w)=>a+vol(w),0)}});
  const max=Math.max(1,...weeks.map(w=>w.v));const gl=niceMax(max);
  const recent=data.history.slice(0,4);
  return `
  <div class="head"><div><div class="eyebrow">${new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div><h1>${greet()}, ${esc(users[me].name.split(' ')[0])}.</h1></div></div>
  ${data.active?`<div class="hero-card"><div><div class="eyebrow">In progress</div><h2>${esc(data.active.name)}</h2><p>Started ${clock(now-data.active.start)} ago · ${data.active.ex.length} exercises</p></div><button class="btn primary" data-act="go" data-v="log">Resume workout</button></div>`:
  `<div class="hero-card"><div><div class="eyebrow">${data.routines[0]?'Up next':'Suggested for you'}</div><h2>${esc(next.name)}</h2><p>${next.x.length} exercises · about ${next.x.reduce((a,x)=>a+x[1],0)*3} min</p><div class="chips-inline">${next.x.map(x=>`<span>${esc(EXM[x[0]].name)}</span>`).join('')}</div></div><button class="btn primary" data-act="start-plan" data-src="${data.routines[0]?'r':'t'}" data-id="${next.id}">Start workout</button></div>`}
  <div class="stats">
    <div class="panel stat"><div class="lbl">Workouts this week</div><div class="v num">${wk.length}</div></div>
    <div class="panel stat"><div class="lbl">Volume this week</div><div class="v num">${kfmt(wk.reduce((a,w)=>a+vol(w),0))}<small>kg</small></div></div>
    <div class="panel stat"><div class="lbl">Streak</div><div class="v num">${streak()}<small>${streak()===1?'week':'weeks'}</small></div></div>
    <div class="panel stat"><div class="lbl">Personal records</div><div class="v num">${prCount()}</div></div>
  </div>
  <section><div class="section-title"><h2>Weekly volume</h2><small>kg lifted, last 8 weeks</small></div>
    <div class="panel chart"><div class="bars">
      <div class="gl" style="bottom:100%"><span class="num">${kfmt(gl)}</span></div><div class="gl" style="bottom:50%"><span class="num">${kfmt(gl/2)}</span></div>
      ${weeks.map((w,i)=>`<div class="bar ${i===7?'now':''}" style="height:${w.v/gl*100}%" title="${kfmt(w.v)} kg">${w.v?`<b class="num">${kfmt(w.v)}</b>`:''}</div>`).join('')}
    </div><div class="xlabels">${weeks.map((w,i)=>`<span>${i===7?'This wk':new Date(w.s).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</span>`).join('')}</div></div></section>
  <section><div class="section-title"><h2>Recent workouts</h2>${data.history.length?'<button class="linkbtn" data-act="go" data-v="history">View all</button>':''}</div>
    <div class="panel list">${recent.length?recent.map(histRow).join(''):'<div class="empty"><b>No workouts yet</b>Finish your first session and it will show up here.</div>'}</div></section>`;
}
function niceMax(m){const p=Math.pow(10,Math.floor(Math.log10(m)));for(const f of[1,2,2.5,5,10])if(f*p>=m)return f*p;return 10*p}
function histRow(w,extra=''){return `<div class="row"><div class="ava">${initials(w.name)}</div><div class="grow"><div class="t">${esc(w.name)}</div><div class="s">${fmtDate(w.start)} · ${fmtDur(w.end-w.start)} · ${w.ex.length} exercises</div></div><div class="num" style="font-weight:800">${kfmt(vol(w))} kg</div>${extra}</div>`}

function tplCard(t,mine){
  return `<article class="panel tpl"><div class="meta">${mine?'<span class="tag g">My routine</span>':`<span class="tag g">${t.lvl}</span><span class="tag">${t.freq}</span>`}</div>
  <h3>${esc(t.name)}</h3>${t.d?`<p>${esc(t.d)}</p>`:''}
  <ul>${t.x.map(([id,s,r])=>`<li><span>${esc(EXM[id].name)}</span><span>${s} × ${r}${EXM[id].u?' s':''}</span></li>`).join('')}</ul>
  <div class="acts">${mine?`<button class="btn sm danger" data-act="del-routine" data-id="${t.id}">Delete</button>`:`<button class="btn sm" data-act="preview" data-id="${t.id}">Preview</button>`}<button class="btn sm primary" data-act="start-plan" data-src="${mine?'r':'t'}" data-id="${t.id}">Start</button></div></article>`}
function vWorkout(){
  return `<div class="head"><div><h1>Start a workout</h1><p>Pick one of your routines, a suggested template, or log freestyle.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="new-routine">New routine</button><button class="btn primary" data-act="start-empty">Start empty workout</button></div></div>
  <section><div class="section-title"><h2>My routines</h2><small>${data.routines.length} saved</small></div>
    ${data.routines.length?`<div class="grid">${data.routines.map(r=>tplCard(r,true)).join('')}</div>`:'<div class="panel empty"><b>No routines yet</b>Save a template below or build your own with New routine.</div>'}</section>
  <section><div class="section-title"><h2>Suggested templates</h2><small>${TPL.length} routines</small></div>
    <div class="grid">${TPL.map(t=>tplCard(t)).join('')}</div></section>`;
}
function filtered(){const q=ui.q.toLowerCase();return EX.filter(e=>(ui.muscle==='All'||e.m===ui.muscle)&&(!q||(e.name+' '+e.e+' '+e.m).toLowerCase().includes(q)))}
function vExercises(){const list=filtered();
  return `<div class="head"><div><h1>Exercise library</h1><p>${EX.length} exercises with form cues and video tutorials.</p></div></div>
  <div class="filters"><div class="search">${ICON.search}<input class="input" id="ex-search" placeholder="Search exercises or equipment" value="${esc(ui.q)}" autocomplete="off"></div>
  <div class="chips">${MUSCLES.map(m=>`<button class="chip" data-act="muscle" data-m="${m}" aria-pressed="${ui.muscle===m}">${m}</button>`).join('')}</div></div>
  <div class="panel list">${list.length?list.map(e=>{const b=bestKg(e.id);return `<div class="row hov"><button class="rowbtn" data-act="ex-detail" data-id="${e.id}"><span class="ava">${initials(e.name)}</span><span class="grow"><span class="t">${esc(e.name)}</span><span class="s">${e.m} · ${e.e}${b?` · best ${b} kg`:''}</span></span></button><a class="vid" href="${yt(e.name)}" target="_blank" rel="noopener">${ICON.yt}<span>Video</span></a></div>`}).join(''):'<div class="empty"><b>No matches</b>Try another name or clear the muscle filter.</div>'}</div>`;
}
function vHistory(){
  return `<div class="head"><div><h1>History</h1><p>${data.history.length} workouts logged · ${kfmt(data.history.reduce((a,w)=>a+vol(w),0))} kg total volume</p></div></div>
  ${data.history.length?`<div class="list" style="gap:12px">${data.history.map(w=>`<article class="panel">${histRow(w,`<button class="x" aria-label="Delete workout" data-act="del-hist" data-id="${w.id}">✕</button>`)}
    <div class="hist-ex">${w.ex.map(x=>{const d=x.sets.filter(s=>s.done);const top=d.reduce((a,s)=>+s.kg>+a.kg?s:a,d[0]||{kg:0,reps:0});return `<div><span>${d.length} × ${esc(EXM[x.id]?.name||'Exercise')}</span><span>${EXM[x.id]?.u?top.reps+' s':`${top.kg} kg × ${top.reps}`}</span></div>`}).join('')}</div></article>`).join('')}</div>`
  :'<div class="panel empty"><b>Nothing logged yet</b>Finished workouts appear here with every set.</div>'}`;
}
function vProfile(){const u=users[me];
  return `<div class="head"><div><h1>${esc(u.name)}</h1><p>${esc(me)} · member since ${new Date(u.created).toLocaleDateString(undefined,{month:'long',year:'numeric'})}</p></div></div>
  <div class="stats"><div class="panel stat"><div class="lbl">Workouts</div><div class="v num">${data.history.length}</div></div>
  <div class="panel stat"><div class="lbl">Total volume</div><div class="v num">${kfmt(data.history.reduce((a,w)=>a+vol(w),0))}<small>kg</small></div></div>
  <div class="panel stat"><div class="lbl">Time trained</div><div class="v num">${fmtDur(data.history.reduce((a,w)=>a+(w.end-w.start),0))}</div></div>
  <div class="panel stat"><div class="lbl">Routines</div><div class="v num">${data.routines.length}</div></div></div>
  <section><div class="section-title"><h2>Best lifts</h2><small>heaviest completed set</small></div>
  <div class="panel list">${(()=>{const l=EX.filter(e=>!e.u).map(e=>[e,bestKg(e.id)]).filter(a=>a[1]).sort((a,b)=>b[1]-a[1]).slice(0,6);return l.length?l.map(([e,b])=>`<div class="row"><div class="ava">${initials(e.name)}</div><div class="grow"><div class="t">${esc(e.name)}</div><div class="s">${e.m}</div></div><div class="num" style="font-weight:800">${b} kg</div></div>`).join(''):'<div class="empty"><b>No lifts yet</b>Your heaviest sets will be listed here.</div>'})()}</div></section>
  <div style="display:flex;gap:10px;flex-wrap:wrap"><label class="btn sm" for="rest-sel">Rest timer <select id="rest-sel" style="border:0;background:none;font-weight:700">${[60,90,120,180].map(s=>`<option value="${s}" ${ui.restTotal===s?'selected':''}>${s}s</option>`).join('')}</select></label><button class="btn sm danger" data-act="logout">Log out</button></div>`;
}
function vLog(){const a=data.active;if(!a){ui.view='workout';return vWorkout()}
  return `<div class="log-head"><div style="flex:1;min-width:200px"><input class="log-name" id="log-name" value="${esc(a.name)}" aria-label="Workout name"><div class="log-meta"><div>Duration<b class="num" data-elapsed>${clock(Date.now()-a.start)}</b></div><div>Volume<b class="num" id="log-vol">${kfmt(vol(a))} kg</b></div><div>Sets<b class="num" id="log-sets">${a.ex.reduce((n,x)=>n+x.sets.filter(s=>s.done).length,0)}</b></div></div></div>
    <div style="display:flex;gap:8px"><button class="btn sm ghost" data-act="discard">Discard</button><button class="btn primary" data-act="finish">Finish</button></div></div>
  ${a.ex.length?a.ex.map((x,i)=>{const e=EXM[x.id];const prev=lastSets(x.id);return `<article class="panel ex-card"><div class="ex-top"><div class="ava">${initials(e.name)}</div><div class="grow"><button class="ex-title" data-act="ex-detail" data-id="${e.id}">${esc(e.name)}</button><div><a class="vid" href="${yt(e.name)}" target="_blank" rel="noopener">${ICON.yt}<span>Watch tutorial</span></a></div></div><button class="x" aria-label="Remove ${esc(e.name)}" data-act="rm-ex" data-i="${i}">✕</button></div>
    <div style="overflow-x:auto"><table class="sets"><thead><tr><th>Set</th><th>Previous</th><th>${e.u?'—':'kg'}</th><th>${e.u?'Sec':'Reps'}</th><th>✓</th></tr></thead><tbody>
    ${x.sets.map((s,j)=>`<tr class="${s.done?'done':''}"><td class="setno">${j+1}</td><td class="prev">${prev[j]?(e.u?prev[j].reps+' s':`${prev[j].kg}×${prev[j].reps}`):'—'}</td>
      <td>${e.u?'':`<input id="kg-${i}-${j}" inputmode="decimal" data-f="kg" data-i="${i}" data-j="${j}" value="${esc(s.kg)}" placeholder="${prev[j]?prev[j].kg:'0'}" aria-label="Weight set ${j+1}">`}</td>
      <td><input id="reps-${i}-${j}" inputmode="numeric" data-f="reps" data-i="${i}" data-j="${j}" value="${esc(s.reps)}" placeholder="${prev[j]?prev[j].reps:'0'}" aria-label="${e.u?'Seconds':'Reps'} set ${j+1}"></td>
      <td><button class="check" data-act="toggle-set" data-i="${i}" data-j="${j}" aria-label="Complete set ${j+1}" aria-pressed="${!!s.done}">${ICON.check}</button></td></tr>`).join('')}
    </tbody></table></div><button class="add-set" data-act="add-set" data-i="${i}">+ Add set</button></article>`}).join(''):'<div class="panel empty"><b>No exercises yet</b>Add exercises from the library to start logging sets.</div>'}
  <button class="btn block" data-act="add-ex">+ Add exercise</button>
  <p id="finish-err" class="err" hidden></p>`;
}

/* ---------------- Modal ---------------- */
let modalCb=null;
function openModal(html){const m=$('#modal');m.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;m.hidden=false;const f=m.querySelector('input,button');f&&f.focus()}
function closeModal(){$('#modal').hidden=true;$('#modal').innerHTML='';modalCb=null}
function exDetail(id){const e=EXM[id],b=bestKg(id),ls=lastSets(id);
  openModal(`<div class="sheet-head"><div style="flex:1;min-width:0"><div class="eyebrow">${e.m} · ${e.e}</div><h2>${esc(e.name)}</h2></div><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body">
    <a class="video-cta" href="${yt(e.name)}" target="_blank" rel="noopener"><span class="play">${ICON.play}</span><span style="min-width:0"><b>Watch video tutorial</b><span>Opens form tutorials on YouTube</span></span></a>
    <div><div class="lbl" style="margin-bottom:10px">How to do it</div><ol class="cues">${e.c.map(c=>`<li>${esc(c)}</li>`).join('')}</ol></div>
    <div class="kv"><div><span>Best</span><b>${e.u?'—':b?b+' kg':'—'}</b></div><div><span>Last time</span><b>${ls.length?ls.length+' sets':'—'}</b></div><div><span>Top set</span><b>${ls.length?(e.u?Math.max(...ls.map(s=>+s.reps))+' s':Math.max(...ls.map(s=>+s.kg))+'×'+ls[0].reps):'—'}</b></div></div>
  </div>
  <div class="sheet-foot">${data.active?`<button class="btn primary" data-act="add-to-active" data-id="${id}">Add to current workout</button>`:`<button class="btn" data-act="close">Close</button>`}</div>`)}
function preview(id){const t=TPL.find(x=>x.id===id);
  openModal(`<div class="sheet-head"><div style="flex:1;min-width:0"><div class="eyebrow">${t.lvl} · ${t.freq}</div><h2>${esc(t.name)}</h2></div><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body"><p class="muted" style="margin:0">${esc(t.d)}</p><div class="list">${t.x.map(([x,s,r])=>`<div class="row" style="padding:12px 0"><div class="ava">${initials(EXM[x].name)}</div><div class="grow"><div class="t">${esc(EXM[x].name)}</div><div class="s">${s} sets × ${r}${EXM[x].u?' sec':' reps'}</div></div><a class="vid" href="${yt(EXM[x].name)}" target="_blank" rel="noopener">${ICON.yt}<span>Video</span></a></div>`).join('')}</div></div>
  <div class="sheet-foot"><button class="btn" data-act="save-tpl" data-id="${id}">Save to my routines</button><button class="btn primary" data-act="start-plan" data-src="t" data-id="${id}">Start workout</button></div>`)}
function picker(cb,title='Add exercises'){const sel=new Set();let q='',m='All';modalCb=cb;
  const draw=()=>{const l=EX.filter(e=>(m==='All'||e.m===m)&&(!q||e.name.toLowerCase().includes(q.toLowerCase())));
    $('#pick-list').innerHTML=l.map(e=>`<button class="pick" data-pick="${e.id}" aria-pressed="${sel.has(e.id)}"><span class="ava">${initials(e.name)}</span><span class="grow"><span class="t" style="display:block;font-weight:700">${esc(e.name)}</span><span class="s" style="font-size:13px;color:var(--muted)">${e.m} · ${e.e}</span></span><span class="box">${ICON.check}</span></button>`).join('')||'<div class="empty">No matches.</div>';
    $('#pick-go').textContent=sel.size?`Add ${sel.size} exercise${sel.size>1?'s':''}`:'Select exercises';$('#pick-go').disabled=!sel.size;
    document.querySelectorAll('#pick-chips .chip').forEach(c=>c.setAttribute('aria-pressed',c.dataset.m===m))};
  openModal(`<div class="sheet-head"><h2>${title}</h2><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body" style="gap:12px"><div class="search">${ICON.search}<input class="input" id="pick-q" placeholder="Search exercises" autocomplete="off"></div><div class="chips" id="pick-chips">${MUSCLES.map(x=>`<button class="chip" data-m="${x}">${x}</button>`).join('')}</div><div id="pick-list"></div></div>
  <div class="sheet-foot"><button class="btn primary" id="pick-go" disabled>Select exercises</button></div>`);
  $('#pick-q').addEventListener('input',e=>{q=e.target.value;draw()});
  $('#pick-chips').addEventListener('click',e=>{const c=e.target.closest('.chip');if(c){m=c.dataset.m;draw()}});
  $('#pick-list').addEventListener('click',e=>{const p=e.target.closest('[data-pick]');if(!p)return;const id=p.dataset.pick;sel.has(id)?sel.delete(id):sel.add(id);draw()});
  $('#pick-go').addEventListener('click',()=>{const f=modalCb;closeModal();f([...sel])});
  draw()}
function builder(rt){rt=rt||{name:'',x:[]};
  const draw=()=>{$('#b-list').innerHTML=rt.x.length?rt.x.map(([id,s,r],i)=>`<div class="builder-row"><span class="n">${esc(EXM[id].name)}</span><input class="input" id="bs-${i}" data-b="1" data-i="${i}" inputmode="numeric" value="${s}" aria-label="Sets"><input class="input" id="br-${i}" data-b="2" data-i="${i}" inputmode="numeric" value="${r}" aria-label="Reps"><button class="x" data-brm="${i}" aria-label="Remove">✕</button></div>`).join(''):'<div class="empty" style="padding:14px">No exercises added yet.</div>'};
  openModal(`<div class="sheet-head"><h2>New routine</h2><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body"><div class="field" style="margin:0"><label for="b-name">Routine name</label><input class="input" id="b-name" placeholder="e.g. Monday Push" value="${esc(rt.name)}"></div>
  <div style="display:grid;gap:8px"><div class="builder-row lbl"><span>Exercise</span><span style="text-align:center">Sets</span><span style="text-align:center">Reps</span><span></span></div><div id="b-list" style="display:grid;gap:8px"></div></div>
  <button class="add-set" id="b-add">+ Add exercises</button><p id="b-err" class="err" hidden style="margin:0"></p></div>
  <div class="sheet-foot"><button class="btn" data-act="close">Cancel</button><button class="btn primary" id="b-save">Save routine</button></div>`);
  draw();
  $('#b-list').addEventListener('input',e=>{const t=e.target;if(t.dataset.b)rt.x[+t.dataset.i][+t.dataset.b]=Math.max(1,parseInt(t.value)||1)});
  $('#b-list').addEventListener('click',e=>{const b=e.target.closest('[data-brm]');if(b){rt.x.splice(+b.dataset.brm,1);draw()}});
  $('#b-name').addEventListener('input',e=>rt.name=e.target.value);
  $('#b-add').addEventListener('click',()=>picker(ids=>{ids.forEach(id=>rt.x.push([id,3,EXM[id].u?30:10]));builder(rt)}));
  $('#b-save').addEventListener('click',()=>{if(!rt.name.trim()){const e=$('#b-err');e.textContent='Give the routine a name.';e.hidden=false;return}
    if(!rt.x.length){const e=$('#b-err');e.textContent='Add at least one exercise.';e.hidden=false;return}
    data.routines.unshift({id:uid(),name:rt.name.trim(),x:rt.x});save();closeModal();ui.view='workout';render();toast('Routine saved')})}
function confirmBox(title,msg,label,fn){modalCb=fn;openModal(`<div class="sheet-head"><h2>${title}</h2></div><div class="sheet-body"><p style="margin:0" class="muted">${msg}</p></div><div class="sheet-foot"><button class="btn" data-act="close">Cancel</button><button class="btn primary" data-act="confirm-yes">${label}</button></div>`)}

/* ---------------- Workout logic ---------------- */
function startWorkout(name,items){
  const go=()=>{data.active={name,start:Date.now(),ex:items.map(([id,s,r])=>{const prev=lastSets(id);return{id,sets:Array.from({length:s},(_,j)=>({kg:prev[j]?prev[j].kg:'',reps:r,done:false}))}})};save();closeModal();ui.view='log';render();window.scrollTo(0,0)};
  if(data.active)confirmBox('Replace current workout?',`“${esc(data.active.name)}” is still in progress. Starting a new one discards it.`,'Discard and start',go);else go()}
function updateLogStats(){const a=data.active;if(!a)return;const v=$('#log-vol'),s=$('#log-sets');if(v)v.textContent=kfmt(vol(a))+' kg';if(s)s.textContent=a.ex.reduce((n,x)=>n+x.sets.filter(z=>z.done).length,0)}
function finish(){const a=data.active;const ex=a.ex.map(x=>({id:x.id,sets:x.sets.filter(s=>s.done)})).filter(x=>x.sets.length);
  if(!ex.length){const e=$('#finish-err');e.textContent='Tick at least one completed set before finishing, or discard the workout.';e.hidden=false;e.scrollIntoView({block:'center'});return}
  const before=prCount();
  data.history.unshift({id:uid(),name:a.name.trim()||'Workout',start:a.start,end:Date.now(),ex});data.active=null;save();stopRest();
  const prs=prCount()-before;ui.view='home';render();window.scrollTo(0,0);toast(prs>0?`Workout saved · ${prs} new PR${prs>1?'s':''}`:'Workout saved')}
function startRest(){ui.rest=Date.now()+ui.restTotal*1000;drawRest()}
function stopRest(){ui.rest=null;$('#rest').hidden=true}
function drawRest(){const r=$('#rest');if(!ui.rest){r.hidden=true;return}const left=ui.rest-Date.now();
  if(left<=0){stopRest();toast('Rest over. Next set.');return}
  r.hidden=false;if(!r.firstChild)r.innerHTML='<div class="t"><small>REST</small><span id="rest-t"></span></div><button data-act="rest-adj" data-d="-15">−15</button><button data-act="rest-adj" data-d="15">+15</button><button class="go" data-act="rest-skip">Skip</button>';
  $('#rest-t').textContent=clock(left)}
setInterval(()=>{if(!data)return;if(data.active)document.querySelectorAll('[data-elapsed]').forEach(el=>el.textContent=clock(Date.now()-data.active.start));if(ui.rest)drawRest()},1000);

/* ---------------- Events ---------------- */
const A={
  'show-register':()=>showAuth('register'),'show-login':()=>showAuth('login'),demo,
  go:b=>{ui.view=b.dataset.v;render();window.scrollTo(0,0)},
  logout:signOut,close:closeModal,
  'confirm-yes':()=>{const f=modalCb;closeModal();f&&f()},
  muscle:b=>{ui.muscle=b.dataset.m;render()},
  'ex-detail':b=>exDetail(b.dataset.id),
  preview:b=>preview(b.dataset.id),
  'save-tpl':b=>{const t=TPL.find(x=>x.id===b.dataset.id);data.routines.unshift(mkRoutine(t));save();closeModal();render();toast(`“${t.name}” added to My routines`)},
  'del-routine':b=>{const r=data.routines.find(x=>x.id===b.dataset.id);confirmBox('Delete routine?',`“${esc(r.name)}” will be removed. Your logged workouts stay in History.`,'Delete',()=>{data.routines=data.routines.filter(x=>x!==r);save();render();toast('Routine deleted')})},
  'del-hist':b=>confirmBox('Delete workout?','This removes it from your history and stats.','Delete',()=>{data.history=data.history.filter(x=>x.id!==b.dataset.id);save();render();toast('Workout deleted')}),
  'new-routine':()=>builder(),
  'start-plan':b=>{const t=b.dataset.src==='r'?data.routines.find(x=>x.id===b.dataset.id):TPL.find(x=>x.id===b.dataset.id);startWorkout(t.name,t.x)},
  'start-empty':()=>startWorkout('Evening Workout'.replace('Evening',greet().split(' ')[1].replace(/^./,c=>c.toUpperCase())),[]),
  'add-ex':()=>picker(ids=>{ids.forEach(id=>{const p=lastSets(id);data.active.ex.push({id,sets:[0,1,2].map(j=>({kg:p[j]?p[j].kg:'',reps:p[j]?p[j].reps:(EXM[id].u?30:10),done:false}))})});save();render()}),
  'add-to-active':b=>{const id=b.dataset.id,p=lastSets(id);data.active.ex.push({id,sets:[0,1,2].map(j=>({kg:p[j]?p[j].kg:'',reps:p[j]?p[j].reps:10,done:false}))});save();closeModal();ui.view='log';render();toast(EXM[id].name+' added')},
  'rm-ex':b=>{data.active.ex.splice(+b.dataset.i,1);save();render()},
  'add-set':b=>{const x=data.active.ex[+b.dataset.i];const l=x.sets[x.sets.length-1]||{kg:'',reps:10};x.sets.push({kg:l.kg,reps:l.reps,done:false});save();render();const n=$(`#kg-${b.dataset.i}-${x.sets.length-1}`)||$(`#reps-${b.dataset.i}-${x.sets.length-1}`);n&&n.focus()},
  'toggle-set':b=>{const s=data.active.ex[+b.dataset.i].sets[+b.dataset.j];s.done=!s.done;if(s.done&&s.reps==='')s.reps=0;save();
    const tr=b.closest('tr');tr.classList.toggle('done',s.done);b.setAttribute('aria-pressed',s.done);updateLogStats();if(s.done)startRest()},
  discard:()=>confirmBox('Discard workout?','Sets you logged in this session will be lost.','Discard',()=>{data.active=null;save();stopRest();ui.view='workout';render()}),
  finish,
  'rest-adj':b=>{ui.rest+= +b.dataset.d*1000;drawRest()},'rest-skip':stopRest
};
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-toggle]');if(t){const i=document.getElementById(t.dataset.toggle);i.type=i.type==='password'?'text':'password';t.textContent=i.type==='password'?'Show':'Hide';return}
  if(e.target.id==='modal'){closeModal();return}
  const b=e.target.closest('[data-act]');if(b&&A[b.dataset.act]){e.preventDefault();A[b.dataset.act](b,e)}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#modal').hidden)closeModal()});
document.addEventListener('input',e=>{const t=e.target;
  if(t.id==='ex-search'){ui.q=t.value;ui.focusSearch=true;render();return}
  if(t.id==='log-name'&&data.active){data.active.name=t.value;save();return}
  if(t.dataset.f&&data.active){const s=data.active.ex[+t.dataset.i].sets[+t.dataset.j];s[t.dataset.f]=t.value.replace(/[^\d.]/g,'');save();updateLogStats()}});
document.addEventListener('change',e=>{if(e.target.id==='rest-sel'){ui.restTotal=+e.target.value;toast(`Rest timer set to ${ui.restTotal}s`)}});

/* ---------------- Boot ---------------- */
(()=>{const s=store.get('rf_session');if(s&&users[s])signIn(s)})();
