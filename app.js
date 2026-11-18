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

TPL.push(
 {id:'t_circuit',name:'Fat Burn Circuit',lvl:'Beginner',freq:'2–4× / week',d:'Higher reps and short rests to keep your heart rate up while you build muscle.',x:[['goblet',3,15],['pushup',3,12],['db_row',3,12],['lunge',3,12],['russian',3,20],['plank',3,45]]},
 {id:'t_mass',name:'Mass Builder',lvl:'Beginner',freq:'3× / week',d:'Full-body compound lifts in the 8–12 rep range for adding size.',x:[['squat',4,8],['bench',4,8],['row',4,8],['rdl',3,10],['db_shoulder',3,10],['bb_curl',3,12]]},
 {id:'t_fit',name:'Total Body Fitness',lvl:'Beginner',freq:'2–3× / week',d:'Balanced full-body session for general health and posture.',x:[['goblet',3,12],['pushup',3,10],['cable_row',3,12],['lunge',2,10],['facepull',2,15],['plank',3,30]]}
);
const SHORT={t_full:'Full',t_upper:'Upper',t_lower:'Lower',t_push:'Push',t_pull:'Pull',t_legs:'Legs',t_5a:'5×5 A',t_5b:'5×5 B',t_big3:'Big 3',t_db:'DB',t_circuit:'Circuit',t_mass:'Mass',t_fit:'Fit'};
TPL.forEach(t=>t.s=SHORT[t.id]);
const TPLM=Object.fromEntries(TPL.map(t=>[t.id,t]));
const GI={
 lose:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l6 6 4-4 8 8"/><path d="M21 11v6h-6"/></svg>',
 muscle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10v4m3-6v8m12-8v8m3-6v4M6 12h12"/></svg>',
 strength:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20M5 8v8M8 5v14M16 5v14M19 8v8"/></svg>',
 gain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M21 13V7h-6"/></svg>',
 fit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>'
};
const GOALS={
 lose:{name:'Lose fat',sub:'Drop body fat while keeping your muscle.',kcal:[-500,-300],cal:'300–500 under',prot:[1.8,2.2],reps:'8–15, short rests'},
 muscle:{name:'Build muscle',sub:'Get bigger and more defined.',kcal:[200,300],cal:'200–300 over',prot:[1.6,2.2],reps:'6–12, near failure'},
 strength:{name:'Get stronger',sub:'Lift heavier on squat, bench and deadlift.',kcal:[0,250],cal:'0–250 over',prot:[1.6,2.2],reps:'1–6, long rests'},
 gain:{name:'Gain weight',sub:'Put on size if you struggle to eat enough.',kcal:[300,500],cal:'300–500 over',prot:[1.6,2],reps:'6–10, heavy compounds'},
 fit:{name:'Stay fit and healthy',sub:'Feel good, move well and build the habit.',kcal:[0,0],cal:'Maintenance',prot:[1.2,1.6],reps:'10–15, 2–3 in reserve'}
};
const LEVELS={new:{name:'New to lifting',sub:'Less than 6 months of training'},mid:{name:'Some experience',sub:'6 months to 2 years'},adv:{name:'Experienced',sub:'More than 2 years of consistent training'}};
const TIPS={
 lose:[
  ['Nutrition','Eat in a small deficit','Eat about 300–500 kcal below maintenance. Losing 0.5–1% of your bodyweight a week is fast enough; faster than that costs muscle.'],
  ['Protein','Prioritise protein','Eat {prot}. It protects your muscle while you diet and keeps you full. Spread it over 3–4 meals.'],
  ['Training','Keep lifting heavy','Lifting is what tells your body to keep muscle. Don\'t switch to only light weights and high reps.'],
  ['Activity','Walk every day','Aim for 7,000–10,000 steps. Walking burns calories without eating into your recovery.'],
  ['Recovery','Sleep 7–9 hours','Short sleep raises hunger and makes cravings harder to resist.']],
 muscle:[
  ['Nutrition','Eat a small surplus','Eat about 200–300 kcal above maintenance. Gaining 0.25–0.5% of bodyweight a week keeps most of the gain as muscle.'],
  ['Protein','Hit your protein daily','Eat {prot}, split across 3–5 meals.'],
  ['Training','Train hard','Take most sets to 1–3 reps short of failure in the 6–12 rep range. Easy sets don\'t build muscle.'],
  ['Progress','Beat last week','When you hit the top of the rep range on every set, add 2.5 kg or a rep. The Previous column in the logger shows what to beat.'],
  ['Volume','10–20 sets per muscle','Do 10–20 hard sets per muscle group each week, spread over at least 2 sessions.']],
 strength:[
  ['Training','Practise the big lifts','Squat, bench and deadlift 2–3 times a week, mostly in the 1–6 rep range.'],
  ['Rest','Rest longer between sets','Take 3–5 minutes between heavy sets so every set is a quality one. Set the rest timer to 180s in Profile.'],
  ['Progress','Add weight in small jumps','Add 2.5 kg to upper-body lifts and 5 kg to lower-body lifts while you keep hitting your reps.'],
  ['Nutrition','Eat enough','Eat at maintenance or slightly above. Strength stalls quickly in a big calorie deficit.'],
  ['Protein','Recover between sessions','Eat {prot} to recover between heavy sessions.'],
  ['Technique','Film your top sets','Recording your heaviest set each session is the fastest way to catch form breakdowns.']],
 gain:[
  ['Nutrition','Eat more than feels normal','Eat about 300–500 kcal above maintenance and aim for +0.25–0.5 kg a week. If the scale hasn\'t moved in 2 weeks, add another 200 kcal.'],
  ['Food','Use calorie-dense foods','Rice, oats, bananas, peanut butter, eggs, whole milk and cooking oil add calories without filling you up too much.'],
  ['Meals','Eat 4–5 times a day','Don\'t skip breakfast. A shake of milk, oats, banana and peanut butter is an easy 600+ kcal.'],
  ['Protein','Build muscle, not just weight','Eat {prot} so more of the weight you gain is muscle.'],
  ['Training','Focus on compound lifts','Squats, presses, rows and deadlifts in the 6–10 rep range, adding weight every week.']],
 fit:[
  ['Training','Lift 2–4 times a week','Full-body sessions cover everything. Leave 2–3 reps in the tank; showing up consistently matters more than intensity.'],
  ['Cardio','Add some cardio','Get 150 minutes of moderate cardio a week: brisk walks, cycling, swimming or sports.'],
  ['Protein','Eat enough protein','Eat {prot} to recover well and stay strong as you age.'],
  ['Nutrition','Eat mostly whole foods','Eat around maintenance with plenty of vegetables, fruit, lean protein and water.'],
  ['Recovery','Sleep and stay mobile','Sleep 7–9 hours and spend 5–10 minutes on mobility on rest days.']]
};
const LVTIP={
 new:['Form','Learn the movements first','Start light and watch the video tutorial for each exercise. Beginners can add weight almost every session.'],
 mid:['Tracking','Log every set','Progress slows after the first year. Beating your Previous numbers is how you know the plan is working.'],
 adv:['Recovery','Plan deload weeks','Every 4–8 weeks, halve your sets for a week to let your joints and nervous system recover.']
};
const PAT={2:[0,3],3:[0,2,4],4:[0,1,3,4],5:[0,1,2,4,5],6:[0,1,2,3,4,5]};
const DAYS=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
function recPlan(p){const d=p.days,l=p.level,R=(rot,extra=[])=>({rot,extra});
  switch(p.goal){
   case 'lose':return d<=3?R(['t_circuit','t_full'],['t_db']):d===4?R(['t_upper','t_lower'],['t_circuit']):R(['t_push','t_pull','t_legs'],['t_circuit']);
   case 'muscle':return d<=3?R([l==='new'?'t_full':'t_mass'],[l==='new'?'t_mass':'t_full','t_db']):d===4?R(['t_upper','t_lower'],['t_mass']):R(['t_push','t_pull','t_legs'],['t_upper','t_lower']);
   case 'strength':return l==='new'||d<=3?R(['t_5a','t_5b'],l==='new'?['t_full']:['t_big3']):R(['t_big3','t_upper','t_lower'],['t_5a']);
   case 'gain':return d<=3?R(['t_mass'],['t_5a','t_5b']):d===4?R(['t_upper','t_lower'],['t_mass']):R(['t_push','t_pull','t_legs'],['t_mass']);
   default:return d<=3?R(['t_fit','t_full'],['t_db']):R(['t_upper','t_lower','t_fit'],['t_circuit']);
  }}
const CONFLICT={lose:['gain'],gain:['lose']};
function blockedBy(k,goals){return (CONFLICT[k]||[]).find(c=>goals.includes(c))}
const gl=p=>p.goals&&p.goals.length?p.goals:[p.goal];
const goalNames=p=>gl(p).map(g=>GOALS[g].name).join(' + ');
const isRecomp=p=>gl(p).includes('lose')&&(gl(p).includes('muscle')||gl(p).includes('strength'));
function recIds(p){return [...new Set(gl(p).flatMap(g=>{const r=recPlan({...p,goal:g});return [...r.rot,...r.extra]}))].slice(0,6)}
function schedule(p){const r=recPlan(p).rot,a=Array(7).fill(null);(PAT[p.days]||PAT[3]).forEach((di,k)=>a[di]=r[k%r.length]);return a}
const fmtN=n=>n.toLocaleString('en-US');
function energyGoal(p){const g=gl(p);
  if(isRecomp(p))return{kcal:[-300,-200],cal:'200–300 under'};
  for(const k of['lose','gain','muscle','strength','fit'])if(g.includes(k))return GOALS[k]}
function maintFactor(){const u=users[me]||{},f={male:31,female:27}[u.gender]||29,a=u.dob?ageOf(u.dob):30;return f*(a>=60?.9:a>=40?.95:1)}
function targets(p){const E=energyGoal(p),bw=+p.bw||0,gs=gl(p).map(g=>GOALS[g]);
  const G={kcal:E.kcal,cal:E.cal,prot:[Math.max(...gs.map(x=>x.prot[0])),Math.max(...gs.map(x=>x.prot[1]))]};
  const prot=bw?`${Math.round(bw*G.prot[0])}–${Math.round(bw*G.prot[1])} g`:`${G.prot[0]}–${G.prot[1]} g/kg`;
  let cal=G.cal;if(bw){const m=Math.round(bw*maintFactor()/50)*50,lo=m+G.kcal[0],hi=m+G.kcal[1];cal=lo===hi?'≈ '+fmtN(lo):`≈ ${fmtN(lo)}–${fmtN(hi)}`}
  return{prot,cal,protText:bw?`${Math.round(bw*G.prot[0])}–${Math.round(bw*G.prot[1])} g of protein a day (${G.prot[0]}–${G.prot[1]} g per kg)`:`${G.prot[0]}–${G.prot[1]} g of protein per kg of bodyweight a day`}}
function tipsFor(p){const t=targets(p),out=[],seenK=new Set(),seenB=new Set();
  if(isRecomp(p)){out.push(['Nutrition','Lose fat and build muscle together','Eat about 200–300 kcal below maintenance, hit your protein and train hard. Progress is slower than chasing one goal at a time, but it works, especially for beginners.']);seenK.add('Nutrition')}
  const multi=gl(p).length>1;
  gl(p).forEach((g,gi)=>TIPS[g].forEach(tp=>{const[k,b]=tp;
    if((k==='Nutrition'||k==='Protein')&&seenK.has(k))return;if(seenB.has(b))return;
    if(multi&&gi>0&&out.filter(x=>x._g===g).length>=2)return;
    seenK.add(k);seenB.add(b);const c=[...tp];c._g=g;out.push(c)}));
  out.push(LVTIP[p.level]);
  return out.map(([k,b,x])=>({k,b,p:x.replace('{prot}',t.protText)}))}

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
 progress:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 6-7"/></svg>',
 history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></svg>',
 profile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>',
 play:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
 yt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></svg>'
};
const NAV=[['home','Home'],['workout','Workout'],['progress','Progress'],['exercises','Exercises'],['history','History'],['profile','Profile']];

/* ---------------- State ---------------- */
let users=store.get('rf_users')||{};
let me=null,data=null;
const ui={view:'home',q:'',muscle:'All',rest:null,restTotal:90,flash:''};
function save(){if(!me)return;users[me].data=data;store.set('rf_users',users)}
function toast(msg){const t=$('#toast');t.textContent=msg;t.hidden=false;clearTimeout(toast.h);toast.h=setTimeout(()=>t.hidden=true,2200)}

/* ---------------- Auth ---------------- */
function showAuth(which){$('#v-login').hidden=which!=='login';$('#v-register').hidden=which!=='register';$('#v-onboard').hidden=true;$('#auth-fine').hidden=false;$('#login-err').hidden=$('#reg-err').hidden=true}
function err(id,msg){const e=$(id);e.textContent=msg;e.hidden=false}
$('#login-form').addEventListener('submit',async e=>{e.preventDefault();
  const em=$('#login-email').value.trim().toLowerCase(),pw=$('#login-password').value;
  if(!em||!pw)return err('#login-err','Enter your email and password.');
  const u=users[em];if(!u||u.pw!==await hash(pw))return err('#login-err','That email and password don\'t match an account in this browser.');
  signIn(em)});
try{$('#reg-dob').max=new Date().toISOString().slice(0,10)}catch(e){}
$('#register-form').addEventListener('submit',async e=>{e.preventDefault();
  const name=$('#reg-name').value.trim(),em=$('#reg-email').value.trim().toLowerCase(),pw=$('#reg-password').value,cf=$('#reg-confirm').value,gender=$('#reg-gender').value,dob=$('#reg-dob').value;
  if(!name)return err('#reg-err','Enter your name.');
  if(!/^\S+@\S+\.\S+$/.test(em))return err('#reg-err','Enter a valid email address, like you@example.com.');
  if(!gender)return err('#reg-err','Select your gender, or choose Prefer not to say.');
  if(!dob)return err('#reg-err','Enter your birthday.');
  const age=ageOf(dob);
  if(isNaN(age)||age<0||age>100)return err('#reg-err','Enter a valid birthday.');
  if(age<13)return err('#reg-err','You need to be at least 13 years old to create an account.');
  if(pw.length<8)return err('#reg-err','Use at least 8 characters for your password.');
  if(pw!==cf)return err('#reg-err','The two passwords don\'t match.');
  if(users[em])return err('#reg-err','An account with this email already exists. Log in instead.');
  users[em]={name,gender,dob,pw:await hash(pw),created:Date.now(),data:{history:[],routines:[],active:null}};store.set('rf_users',users);
  signIn(em)});
function ageOf(dob){const d=new Date(dob+'T00:00:00'),n=new Date();let a=n.getFullYear()-d.getFullYear();const m=n.getMonth()-d.getMonth();if(m<0||(m===0&&n.getDate()<d.getDate()))a--;return a}
const GENDER={male:'Male',female:'Female',other:'Prefer not to say'};
function signIn(em){me=em;data=users[em].data;store.set('rf_session',em);
  if(data.profile&&!data.profile.goals){data.profile.goals=[data.profile.goal];save()}
  $('#side-name').textContent=users[em].name;$('#side-email').textContent=em;
  if(!data.profile){showOnboard(false);return}
  enterApp()}
function enterApp(){ui.view='home';$('#auth').hidden=true;$('#app').hidden=false;render();window.scrollTo(0,0)}

/* ---------------- Onboarding ---------------- */
const ob={step:1,edit:false,p:{}};
function showOnboard(edit){ob.edit=!!edit;ob.step=1;ob.err='';ob.p=Object.assign({goals:[],level:null,days:3,bw:''},JSON.parse(JSON.stringify(data.profile||{})));if(!ob.p.goals)ob.p.goals=ob.p.goal?[ob.p.goal]:[];if(ob.p.bw==null)ob.p.bw='';
  closeModal();$('#app').hidden=true;$('#resume').hidden=true;$('#rest').hidden=true;$('#auth').hidden=false;
  $('#v-login').hidden=$('#v-register').hidden=true;$('#auth-fine').hidden=true;$('#v-onboard').hidden=false;drawOnboard();window.scrollTo(0,0)}
function drawOnboard(){const p=ob.p,st=ob.step,first=esc(users[me].name.split(' ')[0]);
  const bar=`<div class="steps" aria-hidden="true">${[1,2,3].map(i=>`<i class="${i<=st?'on':''}"></i>`).join('')}</div><div class="eyebrow" style="margin-bottom:8px">Step ${st} of 3</div>`;
  const opt=(k,v,title,sub,icon)=>`<button type="button" class="opt" data-act="ob-pick" data-k="${k}" data-v="${v}" aria-pressed="${p[k]===v}">${icon?`<span class="gi">${icon}</span>`:''}<span class="grow"><b>${title}</b><small>${sub}</small></span></button>`;
  let h='';
  if(st===1)h=`<h1>${ob.edit?'Change your goals':'What are your goals, '+first+'?'}</h1><p class="subtitle">Pick one or more. Your first pick is your main focus. You can change this any time in Profile.</p>
    <div class="opts" role="group" aria-label="Goals">${Object.entries(GOALS).map(([k,g])=>{const i=p.goals.indexOf(k),bl=i<0&&blockedBy(k,p.goals);
      return `<button type="button" class="opt" data-act="ob-goal" data-v="${k}" aria-pressed="${i>=0}" ${bl?'disabled':''}><span class="gi">${GI[k]}</span><span class="grow"><b>${g.name}</b><small>${bl?`<span class="why">Can't combine with ${GOALS[bl].name}</span>`:g.sub}</small></span><span class="ord">${i>=0?i+1:''}</span></button>`}).join('')}</div>
    <div class="ob-nav">${ob.edit?'<button type="button" class="btn" data-act="ob-cancel">Cancel</button>':''}<button type="button" class="btn primary" data-act="ob-next" ${p.goals.length?'':'disabled'}>Continue</button></div>`;
  if(st===2)h=`<h1>How do you train?</h1><p class="subtitle">This sets the difficulty and how your week is split.</p>
    <p class="q">Experience</p><div class="opts" role="group" aria-label="Experience">${Object.entries(LEVELS).map(([k,l])=>opt('level',k,l.name,l.sub)).join('')}</div>
    <p class="q">Days per week</p><div class="daychips" role="group" aria-label="Days per week">${[2,3,4,5,6].map(d=>`<button type="button" data-act="ob-pick" data-k="days" data-v="${d}" aria-pressed="${p.days===d}">${d}</button>`).join('')}</div>
    <div class="ob-nav"><button type="button" class="btn" data-act="ob-back">Back</button><button type="button" class="btn primary" data-act="ob-next" ${p.level?'':'disabled'}>Continue</button></div>`;
  if(st===3)h=`<h1>Your bodyweight</h1><p class="subtitle">Optional. We use it to work out your daily protein target and a rough calorie estimate.</p>
    <div class="field"><label for="ob-bw">Bodyweight</label><div class="unit"><input class="input" id="ob-bw" inputmode="decimal" placeholder="e.g. 70" value="${esc(p.bw)}"><span>kg</span></div></div>
    ${ob.err?`<div class="err">${esc(ob.err)}</div>`:''}
    <div class="ob-nav"><button type="button" class="btn" data-act="ob-back">Back</button><button type="button" class="btn primary" data-act="ob-done">${ob.edit?'Update my plan':'Build my plan'}</button></div>`;
  $('#v-onboard').innerHTML=bar+h}
function obDone(){const raw=String(ob.p.bw).trim();const bw=raw?parseFloat(raw):null;
  if(raw&&!(bw>=30&&bw<=300)){ob.err='Enter a bodyweight between 30 and 300 kg, or leave it blank.';drawOnboard();return}
  data.profile={goal:ob.p.goals[0],goals:[...ob.p.goals],level:ob.p.level,days:ob.p.days,bw};ensureProgress();if(bw){const l=data.weighins[data.weighins.length-1];if(!l||l.kg!==bw)data.weighins.push({t:Date.now(),kg:bw})}save();enterApp();toast(ob.edit?'Plan updated':'Your plan is ready')}
function signOut(){store.del('rf_session');me=data=null;stopRest();$('#app').hidden=true;$('#resume').hidden=true;$('#auth').hidden=false;showAuth('login');$('#login-password').value=''}
async function demo(){const em='demo@repforge.app';
  if(!users[em]){users[em]={name:'Alex Reyes',gender:'male',dob:'2003-05-14',pw:await hash('repforge123'),created:Date.now()-30*DAY,data:{history:seedHistory(),routines:[mkRoutine(TPL[1]),mkRoutine(TPL[2])],active:null}};store.set('rf_users',users)}
  if(!users[em].data.profile){users[em].data.profile={goal:'muscle',goals:['muscle','strength'],level:'mid',days:4,bw:72};store.set('rf_users',users)}
  {const d=users[em].data;if(!d.program){d.program={start:weekStart(Date.now())-4*7*DAY};d.liftGoals=[{id:uid(),ex:'bench',target:85,from:76,created:Date.now()-28*DAY},{id:uid(),ex:'squat',target:120,from:100,created:Date.now()-28*DAY}];d.bwGoal={target:75,from:70.5,created:Date.now()-28*DAY};d.weighins=[[28,70.5],[21,70.9],[14,71.4],[7,71.6],[1,72]].map(([a,kg])=>({t:Date.now()-a*DAY,kg}));d.baselines={};store.set('rf_users',users)}}
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

/* ---------------- Progress & periodization ---------------- */
const BLOCKS={
 str:{name:'Strength block',ph:['Accumulation','Intensification','Peak'],pd:['Moderate weight, more sets. Builds the base you will peak from.','Heavier triples. Fewer reps, more weight on the bar.','Heavy doubles and singles, then test your new max in week 12.'],
  w:[[5,5,75,'2–3'],[5,5,77.5,'2'],[5,5,80,'1–2'],[3,5,65,'4+','D'],[4,3,85,'2'],[4,3,87.5,'1–2'],[4,3,90,'1'],[3,3,70,'4+','D'],[3,2,90,'1–2'],[3,2,92.5,'1'],[2,1,95,'0–1'],[1,1,100,'0','T']]},
 hyp:{name:'Hypertrophy block',ph:['Volume','Overload','Intensity'],pd:['Higher reps with a few reps in reserve. Build work capacity.','Heavier sets of 8, pushing closer to failure.','Heavier sets of 6 near failure, then an AMRAP test in week 12.'],
  w:[[4,10,67.5,'3'],[4,10,70,'2'],[4,10,72.5,'1'],[2,10,60,'4+','D'],[4,8,72.5,'2–3'],[4,8,75,'2'],[4,8,77.5,'1'],[2,8,62.5,'4+','D'],[4,6,77.5,'2'],[4,6,80,'1'],[4,6,82.5,'0–1'],[1,'AMRAP',80,'0','T']]},
 cut:{name:'Fat-loss block',ph:['Base','Build','Sharpen'],pd:['Keep lifting with solid volume while the diet starts.','Keep the weight heavy. Volume drops slightly as recovery gets harder.','Heavy, low-volume work to hold on to strength through the end of the cut.'],
  w:[[3,10,67.5,'3'],[3,10,70,'2'],[3,10,72.5,'2'],[2,10,60,'4+','D'],[3,8,72.5,'2'],[3,8,75,'2'],[3,8,77.5,'1–2'],[2,8,62.5,'4+','D'],[3,6,77.5,'2'],[3,6,80,'1–2'],[3,6,82.5,'1'],[2,6,65,'4+','D']]},
 fit:{name:'Foundation block',ph:['Foundation','Build','Progress'],pd:['Learn the lifts with light, controlled sets.','Add weight while keeping 2–3 reps in reserve.','Slightly heavier sets of 8 to lock in your progress.'],
  w:[[3,12,60,'3'],[3,12,62.5,'3'],[3,12,65,'2–3'],[2,12,55,'4+','D'],[3,10,67.5,'2–3'],[3,10,70,'2'],[3,10,72.5,'2'],[2,10,60,'4+','D'],[3,8,72.5,'2'],[3,8,75,'2'],[3,8,77.5,'1–2'],[2,8,65,'3+','D']]}
};
const MAIN=['squat','bench','deadlift','ohp','row','front_squat','incline_db','rdl','hip_thrust','pullup'];
function ensureProgress(){if(!data.program)data.program={start:weekStart(Date.now())};data.liftGoals=data.liftGoals||[];data.weighins=data.weighins||[];data.baselines=data.baselines||{};
  if(data.profile&&data.profile.bw&&!data.weighins.length)data.weighins.push({t:Date.now(),kg:data.profile.bw})}
function blockType(p){return {strength:'str',muscle:'hyp',gain:'hyp',lose:'cut',fit:'fit'}[p.goal]||'hyp'}
const curWeek=()=>Math.floor((Date.now()-data.program.start)/(7*DAY))+1;
const e1=(kg,r)=>r<=1?kg:kg*(1+Math.min(r,12)/30);
const r25=x=>Math.round(x/2.5)*2.5;
function liftPts(id){const pts=[],b=data.baselines[id];if(b)pts.push({x:b.t,y:e1(b.kg,b.reps)});
  data.history.forEach(w=>{let m=0;w.ex.forEach(x=>{if(x.id===id)x.sets.forEach(s=>{if(s.done&&+s.kg>0)m=Math.max(m,e1(+s.kg,+s.reps||1))})});if(m)pts.push({x:w.start,y:m})});
  return pts.sort((a,b)=>a.x-b.x)}
function curE1(id){const pts=liftPts(id);if(!pts.length)return 0;const rec=pts.filter(p=>p.x>=Date.now()-42*DAY);return Math.max(...(rec.length?rec:pts.slice(-1)).map(p=>p.y))}
function goalFactor(p){const g=gl(p);if(isRecomp(p))return .7;if(g.includes('lose'))return .5;if(p.goal==='gain')return 1.2;if(g.length===1&&g[0]==='fit')return .6;return 1}
function liftRate(id){const p=data.profile,base={new:.025,mid:.01,adv:.004}[p.level]*goalFactor(p),pts=liftPts(id),cur=curE1(id);
  if(pts.length>=3&&pts[pts.length-1].x-pts[0].x>=14*DAY&&cur){const n=pts.length,xs=pts.map(q=>(q.x-pts[0].x)/(7*DAY)),mx=xs.reduce((a,b)=>a+b)/n,my=pts.reduce((a,q)=>a+q.y,0)/n;
    let num=0,den=0;xs.forEach((x,i)=>{num+=(x-mx)*(pts[i].y-my);den+=(x-mx)**2});const obs=den?num/den/cur:0;return Math.min(base*2,Math.max(base*.25,.5*base+.5*obs))}
  return base}
function projE1(id,weeks){let v=curE1(id);const r=liftRate(id);for(let i=0;i<weeks;i++)v*=1+r*Math.pow(.97,i);return v}
function weeksToLift(id,t){let v=curE1(id);const r=liftRate(id);if(!v)return null;for(let i=0;i<=156;i++){if(v>=t)return i;v*=1+r*Math.pow(.97,i)}return null}
const curBW=()=>{const w=data.weighins;return w.length?w[w.length-1].kg:(data.profile.bw||0)};
function bwRate(){const p=data.profile,g=gl(p),bw=curBW();if(isRecomp(p))return -.004*bw;if(g.includes('lose'))return -.0075*bw;if(g.includes('gain'))return .375;if(g.includes('muscle'))return .003*bw;return 0}
function progressLifts(){const ids=EX.filter(e=>!e.u&&curE1(e.id)).map(e=>e.id);data.liftGoals.forEach(g=>ids.includes(g.ex)||ids.push(g.ex));
  const sorted=ids.sort((a,b)=>{const ia=MAIN.indexOf(a),ib=MAIN.indexOf(b);return (ia<0?99:ia)-(ib<0?99:ib)||curE1(b)-curE1(a)}).filter(id=>curE1(id));const main=sorted.filter(id=>MAIN.includes(id)||data.liftGoals.some(g=>g.ex===id));return (main.length>=3?main:sorted).slice(0,6)}
const fmtWhen=w=>{if(w===0)return 'Reached';const d=new Date(Date.now()+w*7*DAY);return d.toLocaleDateString(undefined,{month:'short',year:'numeric'})+` · ~${w} wk${w>1?'s':''}`};

function lineChart(o){const W=640,H=230,L=46,R=70,T=14,B=26;
  const all=o.series.flatMap(s=>s.pts);if(!all.length)return '';
  let x0=Math.min(...all.map(p=>p.x)),x1=Math.max(...all.map(p=>p.x));if(x1-x0<7*DAY)x1=x0+7*DAY;
  const ys=all.map(p=>p.y).concat(o.goal!=null?[o.goal]:[]);let y0=Math.min(...ys),y1=Math.max(...ys);const pad=Math.max((y1-y0)*.12,o.minPad||2.5);y0-=pad;y1+=pad;
  const st=niceMax((y1-y0)/4)||1;y0=Math.floor(y0/st)*st;y1=Math.ceil(y1/st)*st;
  const X=x=>L+(x-x0)/(x1-x0)*(W-L-R),Y=y=>T+(1-(y-y0)/(y1-y0))*(H-T-B);
  let g='';for(let v=y0;v<=y1+1e-9;v+=st)g+=`<line class="ch-grid" x1="${L}" x2="${W-R}" y1="${Y(v)}" y2="${Y(v)}"/><text class="ch-txt" x="${L-8}" y="${Y(v)+4}" text-anchor="end">${+v.toFixed(1)}</text>`;
  const n=5;for(let i=0;i<n;i++){const x=x0+(x1-x0)*i/(n-1);g+=`<text class="ch-txt" x="${X(x)}" y="${H-6}" text-anchor="${i===0?'start':i===n-1?'end':'middle'}">${new Date(x).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</text>`}
  const now=Date.now();if(now>x0&&now<x1)g+=`<line class="ch-now" x1="${X(now)}" x2="${X(now)}" y1="${T}" y2="${H-B}"/><text class="ch-txt" x="${X(now)+4}" y="${T+10}">Today</text>`;
  if(o.goal!=null)g+=`<line class="ch-goal" x1="${L}" x2="${W-R}" y1="${Y(o.goal)}" y2="${Y(o.goal)}"/><text class="ch-lbl" x="${W-R+6}" y="${Y(o.goal)+4}">Goal ${o.goal}</text>`;
  o.series.forEach(s=>{if(!s.pts.length)return;const d=s.pts.map((p,i)=>(i?'L':'M')+X(p.x).toFixed(1)+' '+Y(p.y).toFixed(1)).join(' ');
    g+=`<path class="${s.cls}" d="${d}"/>`;if(s.dots)g+=s.pts.map(p=>`<circle class="ch-dot" cx="${X(p.x)}" cy="${Y(p.y)}" r="3.5"/>`).join('');
    if(s.end){const q=s.pts[s.pts.length-1];if(o.goal==null||Math.abs(Y(q.y)-Y(o.goal))>14)g+=`<text class="ch-lbl" x="${X(q.x)+6}" y="${Y(q.y)+4}">${s.end}</text>`}});
  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(o.label||'Chart')}">${g}</svg>`}

function vProgress(){ensureProgress();const p=data.profile,B=BLOCKS[blockType(p)],cw=curWeek(),done=cw>12,cwc=Math.min(Math.max(cw,1),12);
  const sel=ui.pw&&ui.pw<=12?ui.pw:cwc,wk=B.w[sel-1],phase=Math.floor((sel-1)/4),lifts=progressLifts();
  if(!ui.pl||!lifts.includes(ui.pl))ui.pl=lifts[0];
  const wDate=data.program.start+(sel-1)*7*DAY,ahead=Math.max(0,Math.round((wDate-Date.now())/(7*DAY)));
  const kind=wk[4]==='D'?'Deload':wk[4]==='T'?'Test':'';
  const rxTxt=`${wk[0]} × ${wk[1]} @ ${wk[2]}%`;
  let rows=lifts.map(id=>{const now=curE1(id),at=projE1(id,ahead);let tgt;
    if(wk[4]==='T'&&wk[1]===1)tgt=`Max ≈ ${r25(at)} kg`;else if(wk[1]==='AMRAP')tgt=`AMRAP @ ${r25(at*wk[2]/100)} kg`;else tgt=`${wk[0]} × ${wk[1]} @ ${r25(at*wk[2]/100)} kg`;
    return `<tr><td>${esc(EXM[id].name)}</td><td class="r">${Math.round(now)} kg</td><td class="r"><b>${tgt}</b></td></tr>`}).join('');
  // chart for selected lift
  let liftChart='';if(ui.pl){const id=ui.pl,pts=liftPts(id).filter(q=>q.x>=Date.now()-16*7*DAY),end=Math.max(data.program.start+12*7*DAY,Date.now()+8*7*DAY),wks=Math.ceil((end-Date.now())/(7*DAY));
    const proj=[];for(let i=0;i<=wks;i++)proj.push({x:Date.now()+i*7*DAY,y:projE1(id,i)});
    const lg=data.liftGoals.find(g=>g.ex===id);const endV=proj[proj.length-1].y;
    liftChart=`<div class="panel chartbox"><div class="rx" style="margin-bottom:12px"><div><span class="lbl">Est. 1RM now</span><span class="big">${Math.round(curE1(id))} kg</span></div><div><span class="lbl">Projected ${new Date(end).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</span><span class="big">${Math.round(endV)} kg</span></div><div><span class="lbl">Rate</span><span class="big">+${(liftRate(id)*100).toFixed(1)}%<small class="muted" style="font-size:14px"> /wk</small></span></div></div>
      ${lineChart({series:[{pts,cls:'ch-act',dots:true},{pts:proj,cls:'ch-proj',end:Math.round(endV)+' kg'}],goal:lg?lg.target:null,label:EXM[id].name+' projection'})}
      <div class="legend"><span><i></i>Est. 1RM from your best set each session</span><span><i class="p"></i>Projection</span>${lg?'<span><i class="g"></i>Goal</span>':''}</div></div>`}
  // goals
  const gCards=data.liftGoals.map(g=>{const cur=curE1(g.ex),w=weeksToLift(g.ex,g.target),pct=Math.max(0,Math.min(100,(cur-g.from)/(g.target-g.from)*100||0)),ok=cur>=g.target;
    return `<article class="panel goal"><div class="goal-top"><div class="ava">${initials(EXM[g.ex].name)}</div><div class="grow"><div class="t">${esc(EXM[g.ex].name)}</div><div class="s muted" style="font-size:13px">Estimated 1RM goal</div></div><div class="big">${g.target} kg</div><button class="x" aria-label="Delete goal" data-act="goal-del" data-id="${g.id}">✕</button></div>
      <div class="pbar"><i style="width:${ok?100:pct}%"></i></div>
      <div class="goal-meta"><span>Now <b>${Math.round(cur)} kg</b> · started ${Math.round(g.from)} kg</span><span>${ok?'<b style="color:var(--green-ink)">Goal reached</b>':w==null?'Over 3 years at this rate':'Predicted <b>'+fmtWhen(w)+'</b>'}</span></div></article>`}).join('');
  let bwCard='';const bg=data.bwGoal,bw=curBW();
  if(bg){const r=bwRate(),diff=bg.target-bw,ok=Math.abs(diff)<.3,wks=ok?0:r&&Math.sign(r)===Math.sign(diff)?Math.ceil(diff/r):null,tot=bg.target-bg.from,pct=tot?Math.max(0,Math.min(100,(bw-bg.from)/tot*100)):100;
    const pts=data.weighins.filter(w=>w.t>=Date.now()-16*7*DAY).map(w=>({x:w.t,y:w.kg}));const proj=[];if(!ok&&wks!=null){const n=Math.min(wks,52);for(let i=0;i<=n;i++)proj.push({x:Date.now()+i*7*DAY,y:bw+r*i})}
    bwCard=`<article class="panel goal" style="grid-column:1/-1"><div class="goal-top"><div class="ava">BW</div><div class="grow"><div class="t">Bodyweight</div><div class="s muted" style="font-size:13px">${diff<0?'Weight loss':'Weight gain'} goal · ${r?`${r>0?'+':''}${r.toFixed(2)} kg/week expected`:'no expected change for your goals'}</div></div><div class="big">${bg.target} kg</div><button class="x" aria-label="Delete goal" data-act="bw-del">✕</button></div>
      <div class="pbar"><i style="width:${ok?100:pct}%"></i></div>
      <div class="goal-meta"><span>Now <b>${bw} kg</b> · started ${bg.from} kg</span><span>${ok?'<b style="color:var(--green-ink)">Goal reached</b>':wks==null?'<b style="color:var(--danger)">Your current goals won\'t move your weight this way. Change goal to match.</b>':'Predicted <b>'+fmtWhen(wks)+'</b>'}</span></div>
      ${pts.length?lineChart({series:[{pts,cls:'ch-act',dots:true},{pts:proj,cls:'ch-proj'}],goal:bg.target,minPad:.5,label:'Bodyweight'}):''}
      <form class="inline-form" data-form="weighin"><div class="unit"><input class="input" id="wi-kg" inputmode="decimal" placeholder="Today's weight" aria-label="Today's weight"><span>kg</span></div><button class="btn primary sm" style="height:40px" type="submit">Log weight</button></form></article>`}
  return `<div class="head"><div><div class="eyebrow">${B.name}</div><h1>Progress</h1><p>${done?'Your 12-week block is complete. Start the next one to keep progressing.':`Week ${cw<1?1:cw} of 12 · ${B.ph[Math.floor((cwc-1)/4)]} phase · started ${new Date(data.program.start).toLocaleDateString(undefined,{month:'short',day:'numeric'})}`}</p></div>
    <button class="btn" data-act="block-restart">${done?'Start next block':'Restart block'}</button></div>
  <section><div class="section-title"><h2>Your 12-week block</h2><small>tap a week to see its plan</small></div>
    <div class="panel blk-panel">
      <div class="blk">${B.ph.map((n,i)=>`<div class="ph ${i===phase?'on':''}">${n}</div>`).join('')}
        ${B.w.map((w,i)=>{const n=i+1;return `<button class="wk ${n<cw?'past':''} ${n===cw?'now':''} ${w[4]?'dl':''}" data-act="pw-sel" data-w="${n}" aria-pressed="${n===sel}" aria-label="Week ${n}"><span>${n}</span><small class="${w[4]?'':'pc'}">${w[4]||w[2]+'%'}</small></button>`}).join('')}</div>
      <div class="rx"><div><span class="lbl">Week ${sel}${kind?' · '+kind:''}${sel===cw?' · this week':''}</span><span class="big">${wk[4]==='T'&&wk[1]===1?'Test your 1RM':wk[1]==='AMRAP'?'AMRAP @ '+wk[2]+'%':rxTxt}</span></div><div><span class="lbl">Reps in reserve</span><span class="big">${wk[3]}</span></div></div>
      <p class="muted" style="margin:-6px 0 0;font-size:14px">${kind==='Deload'?'Lighter week. Cut volume and weight so you recover and come back stronger.':kind==='Test'?(wk[1]===1?'Work up in singles to a new max. Stop when your form breaks down.':'Do one set of as many good reps as you can. This shows how much you have improved.'):B.pd[phase]} Apply this to your main lifts; keep accessories in their usual rep range.</p>
      ${lifts.length?`<div style="overflow-x:auto"><table class="tbl"><thead><tr><th>Lift</th><th class="r">Est. 1RM now</th><th class="r">Week ${sel} target</th></tr></thead><tbody>${rows}</tbody></table></div>`:'<div class="empty" style="padding:12px"><b>No lift data yet</b>Log a workout or add a lift goal, and this table fills in your working weights.</div>'}
    </div></section>
  <section><div class="section-title"><h2>Lift projection</h2><small>based on your logs, level and goal</small></div>
    ${lifts.length?`<div class="chips" style="margin-bottom:12px">${lifts.map(id=>`<button class="chip" data-act="pl-sel" data-id="${id}" aria-pressed="${ui.pl===id}">${esc(EXM[id].name)}</button>`).join('')}</div>${liftChart}`:'<div class="panel empty"><b>Nothing to project yet</b>Log a few workouts and your estimated maxes and projections show up here.</div>'}</section>
  <section><div class="section-title"><h2>Goals</h2><button class="btn sm primary" data-act="goal-add">Add goal</button></div>
    ${gCards||bwCard?`<div class="goals">${bwCard}${gCards}</div>`:'<div class="panel empty"><b>No goals yet</b>Set a target like a 100 kg bench or a bodyweight of 75 kg and RepForge predicts when you will hit it.</div>'}</section>
  <p class="muted" style="font-size:12.5px;margin:0">Estimated 1RM uses the Epley formula on your best set each session. Projections assume you train consistently and slow down over time; real progress varies.</p>`}

function addGoal(type){type=type||'lift';const bw=curBW();
  const opts=EX.filter(e=>!e.u).map(e=>`<option value="${e.id}">${esc(e.name)}</option>`).join('');
  openModal(`<div class="sheet-head"><h2>Add goal</h2><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body"><div class="seg"><button type="button" data-act="goal-type" data-t="lift" aria-pressed="${type==='lift'}">Lift</button><button type="button" data-act="goal-type" data-t="bw" aria-pressed="${type==='bw'}">Bodyweight</button></div>
  ${type==='lift'?`<div class="field" style="margin:0"><label for="g-ex">Exercise</label><select class="input" id="g-ex">${opts}</select></div><p class="hint" id="g-hint"></p>
   <div class="field" style="margin:0"><label for="g-target">Target 1-rep max</label><div class="unit"><input class="input" id="g-target" inputmode="decimal" placeholder="e.g. 100"><span>kg</span></div></div>
   <div><div class="lbl" style="margin-bottom:8px">Recent best set (optional if you've logged this lift)</div><div class="field-row"><div class="unit"><input class="input" id="g-bkg" inputmode="decimal" placeholder="Weight" aria-label="Weight"><span>kg</span></div><div class="unit"><input class="input" id="g-breps" inputmode="numeric" placeholder="Reps" aria-label="Reps"><span>reps</span></div></div></div>`
  :`${bw?`<p class="hint" style="margin:0">Current bodyweight: <b>${bw} kg</b></p>`:`<div class="field" style="margin:0"><label for="g-bwnow">Current bodyweight</label><div class="unit"><input class="input" id="g-bwnow" inputmode="decimal" placeholder="e.g. 70"><span>kg</span></div></div>`}
   <div class="field" style="margin:0"><label for="g-bwt">Target bodyweight</label><div class="unit"><input class="input" id="g-bwt" inputmode="decimal" placeholder="e.g. 75"><span>kg</span></div></div>`}
  <p id="g-err" class="err" hidden style="margin:0"></p></div>
  <div class="sheet-foot"><button class="btn" data-act="close">Cancel</button><button class="btn primary" data-act="goal-save" data-t="${type}">Save goal</button></div>`);
  if(type==='lift'){$('#g-ex').value=progressLifts()[0]||'bench';goalHint()}}
function goalHint(){const h=$('#g-hint');if(!h)return;const c=curE1($('#g-ex').value);h.textContent=c?`Your estimated 1RM: ${Math.round(c)} kg`:'No logs for this lift yet. Enter a recent best set below.'}
function goalSave(t){const E=m=>{const e=$('#g-err');e.textContent=m;e.hidden=false};
  if(t==='lift'){const id=$('#g-ex').value,tg=parseFloat($('#g-target').value),bk=parseFloat($('#g-bkg').value),br=parseInt($('#g-breps').value);
    if(!(tg>0&&tg<600))return E('Enter a target weight in kg.');
    if($('#g-bkg').value||$('#g-breps').value){if(!(bk>0)||!(br>=1&&br<=30))return E('Enter the set as weight in kg and reps between 1 and 30.');data.baselines[id]={kg:bk,reps:br,t:Date.now()}}
    const cur=curE1(id);if(!cur)return E('Enter a recent best set so we can estimate your current max.');
    if(tg<=cur)return E(`Your estimated 1RM is already ${Math.round(cur)} kg. Set a higher target.`);
    data.liftGoals=data.liftGoals.filter(g=>g.ex!==id);data.liftGoals.push({id:uid(),ex:id,target:tg,from:Math.round(cur*10)/10,created:Date.now()});ui.pl=id}
  else{let bw=curBW();if(!bw){bw=parseFloat($('#g-bwnow').value);if(!(bw>=30&&bw<=300))return E('Enter your current bodyweight between 30 and 300 kg.');data.weighins.push({t:Date.now(),kg:bw});data.profile.bw=bw}
    const tg=parseFloat($('#g-bwt').value);if(!(tg>=30&&tg<=300))return E('Enter a target between 30 and 300 kg.');if(Math.abs(tg-bw)<.3)return E('Pick a target different from your current weight.');
    data.bwGoal={target:tg,from:bw,created:Date.now()}}
  save();closeModal();render();toast('Goal added')}

/* ---------------- Render ---------------- */
function render(){
  const navHtml=NAV.map(([v,l])=>`<button type="button" data-act="go" data-v="${v}" ${ui.view===v||(v==='workout'&&ui.view==='log')?'aria-current="page"':''}>${ICON[v]}<span>${l}</span></button>`).join('');
  $('#nav').innerHTML=navHtml;$('#tabbar').innerHTML=navHtml;
  const v=$('#view');
  v.innerHTML=({progress:vProgress,home:vHome,workout:vWorkout,exercises:vExercises,history:vHistory,profile:vProfile,log:vLog}[ui.view]||vHome)();
  const r=$('#resume');r.hidden=!(data.active&&ui.view!=='log');
  if(!r.hidden)r.innerHTML=`<span>${esc(data.active.name)} in progress</span><span class="num" data-elapsed>${clock(Date.now()-data.active.start)}</span>`;
  if(ui.view==='exercises'){const s=$('#ex-search');if(s&&ui.focusSearch){s.focus();s.setSelectionRange(s.value.length,s.value.length);ui.focusSearch=false}}
}
function greet(){const h=new Date().getHours();return h<12?'Good morning':h<18?'Good afternoon':'Good evening'}

function vHome(){
  const now=Date.now(),ws=weekStart(now);
  const wk=data.history.filter(w=>w.start>=ws);
  const pr=data.profile,sched=schedule(pr),ti=(new Date().getDay()+6)%7,todayT=sched[ti]&&TPLM[sched[ti]];
  const next=todayT||data.routines[0]||TPLM[recPlan(pr).rot[0]];const nextSrc=todayT||!data.routines[0]?'t':'r';
  const nextLbl=todayT?'Today · '+goalNames(pr):data.routines[0]?'Up next':'Suggested for you';
  const weeks=[...Array(8)].map((_,i)=>{const s=ws-(7-i)*7*DAY;const list=data.history.filter(w=>w.start>=s&&w.start<s+7*DAY);return{s,v:list.reduce((a,w)=>a+vol(w),0)}});
  const max=Math.max(1,...weeks.map(w=>w.v));const gl=niceMax(max);
  const recent=data.history.slice(0,4);
  return `
  <div class="head"><div><div class="eyebrow">${new Date().toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</div><h1>${greet()}, ${esc(users[me].name.split(' ')[0])}.</h1></div></div>
  ${data.active?`<div class="hero-card"><div><div class="eyebrow">In progress</div><h2>${esc(data.active.name)}</h2><p>Started ${clock(now-data.active.start)} ago · ${data.active.ex.length} exercises</p></div><button class="btn primary" data-act="go" data-v="log">Resume workout</button></div>`:
  `<div class="hero-card"><div><div class="eyebrow">${nextLbl}</div><h2>${esc(next.name)}</h2><p>${next.x.length} exercises · about ${next.x.reduce((a,x)=>a+x[1],0)*3} min</p><div class="chips-inline">${next.x.map(x=>`<span>${esc(EXM[x[0]].name)}</span>`).join('')}</div></div><button class="btn primary" data-act="start-plan" data-src="${nextSrc}" data-id="${next.id}">Start workout</button></div>`}
  ${planSection()}
  <div class="stats">
    <div class="panel stat"><div class="lbl">Workouts this week</div><div class="v num">${wk.length}</div></div>
    <div class="panel stat"><div class="lbl">Volume this week</div><div class="v num">${kfmt(wk.reduce((a,w)=>a+vol(w),0))}<small>kg</small></div></div>
    <div class="panel stat"><div class="lbl">Streak</div><div class="v num">${streak()}<small>${streak()===1?'week':'weeks'}</small></div></div>
    <div class="panel stat"><div class="lbl">Personal records</div><div class="v num">${prCount()}</div></div>
  </div>
  <section><div class="section-title"><h2>Weekly volume</h2><small>kg lifted, last 8 weeks</small></div>
    <div class="panel chart"><div class="bars">
      ${weeks.some(w=>w.v)?`<div class="gl" style="bottom:100%"><span class="num">${kfmt(gl)}</span></div><div class="gl" style="bottom:50%"><span class="num">${kfmt(gl/2)}</span></div>`:''}
      ${weeks.map((w,i)=>`<div class="bar ${i===7?'now':''}" style="height:${w.v/gl*100}%" title="${kfmt(w.v)} kg">${w.v?`<b class="num">${kfmt(w.v)}</b>`:''}</div>`).join('')}
    </div><div class="xlabels">${weeks.map((w,i)=>`<span>${i===7?'This wk':new Date(w.s).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</span>`).join('')}</div></div></section>
  <section><div class="section-title"><h2>Recent workouts</h2>${data.history.length?'<button class="linkbtn" data-act="go" data-v="history">View all</button>':''}</div>
    <div class="panel list">${recent.length?recent.map(histRow).join(''):'<div class="empty"><b>No workouts yet</b>Finish your first session and it will show up here.</div>'}</div></section>`;
}
function planSection(){const p=data.profile,G=GOALS[p.goal],t=targets(p),sc=schedule(p),ti=(new Date().getDay()+6)%7;
  return `<section><div class="section-title"><h2>Your plan</h2><button class="linkbtn" data-act="change-goal">Change goal</button></div>
  <div class="panel plan">
    <div class="plan-top"><div class="plan-goal"><span class="gi">${GI[p.goal]}</span><div style="min-width:0"><div class="eyebrow">${gl(p).length>1?'Your goals':'Your goal'}</div><h3>${goalNames(p)}</h3><div class="muted" style="font-size:13.5px">${LEVELS[p.level].name} · ${p.days} days a week${p.bw?` · ${p.bw} kg`:''}</div></div></div>
      <div class="targets"><div class="target"><span>Protein / day</span><b>${t.prot}</b></div><div class="target"><span>Calories / day</span><b>${t.cal}${p.bw?'':' kcal'}</b></div><div class="target"><span>Reps</span><b>${G.reps}</b></div></div></div>
    <p class="note">${p.bw?'Calories are a rough estimate from your bodyweight, gender and age. Weigh yourself weekly and adjust by how your weight trends.':'Calories are relative to your maintenance. Add your bodyweight in Change goal to get exact gram and calorie targets.'}</p>
    <div><div class="lbl" style="margin-bottom:8px">Your week</div><div class="week">${DAYS.map((n,i)=>`<div class="day ${sc[i]?'on':''} ${i===ti?'today':''}" title="${sc[i]?esc(TPLM[sc[i]].name):'Rest day'}"><span>${n}</span><b>${sc[i]?TPLM[sc[i]].s:'Rest'}</b></div>`).join('')}</div></div>
    <div><div class="lbl" style="margin-bottom:8px">Tips for your goal</div><div class="tips">${tipsFor(p).map(x=>`<div class="tip"><span class="k">${x.k}</span><b>${esc(x.b)}</b><p>${esc(x.p)}</p></div>`).join('')}</div></div>
  </div></section>
  <section><div class="section-title"><h2>Recommended routines</h2><small>for ${goalNames(p).toLowerCase()}</small></div>
    <div class="grid">${recIds(p).map(id=>tplCard(TPLM[id],false,true)).join('')}</div></section>`}
function niceMax(m){const p=Math.pow(10,Math.floor(Math.log10(m)));for(const f of[1,2,2.5,5,10])if(f*p>=m)return f*p;return 10*p}
function histRow(w,extra=''){return `<div class="row"><div class="ava">${initials(w.name)}</div><div class="grow"><div class="t">${esc(w.name)}</div><div class="s">${fmtDate(w.start)} · ${fmtDur(w.end-w.start)} · ${w.ex.length} exercises</div></div><div class="num" style="font-weight:800">${kfmt(vol(w))} kg</div>${extra}</div>`}

function tplCard(t,mine,rec){
  return `<article class="panel tpl"><div class="meta">${mine?'<span class="tag g">My routine</span>':`${rec?'<span class="tag g">Recommended</span>':''}<span class="tag ${rec?'':'g'}">${t.lvl}</span><span class="tag">${t.freq}</span>`}</div>
  <h3>${esc(t.name)}</h3>${t.d?`<p>${esc(t.d)}</p>`:''}
  <ul>${t.x.map(([id,s,r])=>`<li><span>${esc(EXM[id].name)}</span><span>${s} × ${r}${EXM[id].u?' s':''}</span></li>`).join('')}</ul>
  <div class="acts">${mine?`<button class="btn sm danger" data-act="del-routine" data-id="${t.id}">Delete</button>`:`<button class="btn sm" data-act="preview" data-id="${t.id}">Preview</button>`}<button class="btn sm primary" data-act="start-plan" data-src="${mine?'r':'t'}" data-id="${t.id}">Start</button></div></article>`}
function vWorkout(){
  return `<div class="head"><div><h1>Start a workout</h1><p>Pick one of your routines, a suggested template, or log freestyle.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="new-routine">New routine</button><button class="btn primary" data-act="start-empty">Start empty workout</button></div></div>
  <section><div class="section-title"><h2>Recommended for you</h2><small>${goalNames(data.profile)} · ${data.profile.days} days a week</small></div>
    <div class="grid">${recIds(data.profile).map(id=>tplCard(TPLM[id],false,true)).join('')}</div></section>
  <section><div class="section-title"><h2>My routines</h2><small>${data.routines.length} saved</small></div>
    ${data.routines.length?`<div class="grid">${data.routines.map(r=>tplCard(r,true)).join('')}</div>`:'<div class="panel empty"><b>No routines yet</b>Save a template below or build your own with New routine.</div>'}</section>
  <section><div class="section-title"><h2>All templates</h2><small>${TPL.length} routines</small></div>
    <div class="grid">${TPL.filter(t=>!recIds(data.profile).includes(t.id)).map(t=>tplCard(t)).join('')}</div></section>`;
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
  <section><div class="section-title"><h2>About you</h2></div>
  <div class="panel list"><div class="row"><div class="grow"><div class="s">Gender</div><div class="t">${GENDER[u.gender]||'Not set'}</div></div><div class="grow"><div class="s">Birthday</div><div class="t">${u.dob?new Date(u.dob+'T00:00:00').toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}):'Not set'}</div></div><div class="grow"><div class="s">Age</div><div class="t">${u.dob?ageOf(u.dob):'—'}</div></div></div></div></section>
  <section><div class="section-title"><h2>${gl(data.profile).length>1?'Goals':'Goal'}</h2></div>
  <div class="panel list"><div class="row"><div class="ava" style="background:var(--green);color:var(--on-green);border-color:var(--green)">${GI[data.profile.goal].replace('<svg','<svg width="22" height="22"')}</div><div class="grow"><div class="t" style="white-space:normal">${goalNames(data.profile)}</div><div class="s">${LEVELS[data.profile.level].name} · ${data.profile.days} days a week${data.profile.bw?' · '+data.profile.bw+' kg':''}</div></div><button class="btn sm" data-act="change-goal">Change goal</button></div></div></section>
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
  'change-goal':()=>showOnboard(true),
  'pw-sel':b=>{ui.pw=+b.dataset.w;render()},
  'pl-sel':b=>{ui.pl=b.dataset.id;render()},
  'goal-add':()=>addGoal('lift'),'goal-type':b=>addGoal(b.dataset.t),'goal-save':b=>goalSave(b.dataset.t),
  'goal-del':b=>confirmBox('Delete goal?','This removes the goal. Your logged workouts are not affected.','Delete',()=>{data.liftGoals=data.liftGoals.filter(g=>g.id!==b.dataset.id);save();render()}),
  'bw-del':()=>confirmBox('Delete bodyweight goal?','Your weigh-ins stay saved.','Delete',()=>{data.bwGoal=null;save();render()}),
  'block-restart':()=>confirmBox(curWeek()>12?'Start the next block?':'Restart your block?','Week 1 starts this week. Your logs, maxes and goals stay the same.',curWeek()>12?'Start next block':'Restart',()=>{data.program.start=weekStart(Date.now());ui.pw=null;save();render();toast('New block started')}),
  'ob-goal':b=>{const g=ob.p.goals,k=b.dataset.v,i=g.indexOf(k);if(i>=0)g.splice(i,1);else if(!blockedBy(k,g))g.push(k);drawOnboard()},
  'ob-pick':b=>{const k=b.dataset.k;ob.p[k]=k==='days'?+b.dataset.v:b.dataset.v;drawOnboard()},
  'ob-next':()=>{ob.step++;drawOnboard();window.scrollTo(0,0)},
  'ob-back':()=>{ob.step--;ob.err='';drawOnboard();window.scrollTo(0,0)},
  'ob-cancel':enterApp,
  'ob-done':obDone,
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
  if(t.id==='ob-bw'){ob.p.bw=t.value;return}
  if(t.id==='ex-search'){ui.q=t.value;ui.focusSearch=true;render();return}
  if(t.id==='log-name'&&data.active){data.active.name=t.value;save();return}
  if(t.dataset.f&&data.active){const s=data.active.ex[+t.dataset.i].sets[+t.dataset.j];s[t.dataset.f]=t.value.replace(/[^\d.]/g,'');save();updateLogStats()}});
document.addEventListener('submit',e=>{if(e.target.dataset.form==='weighin'){e.preventDefault();const kg=parseFloat($('#wi-kg').value);if(!(kg>=30&&kg<=300)){toast('Enter a weight between 30 and 300 kg');return}
  data.weighins.push({t:Date.now(),kg});data.profile.bw=kg;save();render();toast('Weight logged')}});
document.addEventListener('change',e=>{if(e.target.id==='g-ex')goalHint();if(e.target.id==='rest-sel'){ui.restTotal=+e.target.value;toast(`Rest timer set to ${ui.restTotal}s`)}});

/* ---------------- Boot ---------------- */
(()=>{const s=store.get('rf_session');if(s&&users[s])signIn(s)})();
