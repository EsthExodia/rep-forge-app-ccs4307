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
const wdaysOf=p=>p.wdays&&p.wdays.length?p.wdays:(PAT[p.days]||PAT[3]);
function schedule(p){const r=recPlan(p).rot,a=Array(7).fill(null);wdaysOf(p).forEach((di,k)=>a[di]=r[k%r.length]);return a}
const wdChips=(sel,act)=>`<div class="wdchips" role="group" aria-label="Training days">${DAYS.map((n,i)=>`<button type="button" data-act="${act}" data-d="${i}" aria-pressed="${sel.includes(i)}">${n}</button>`).join('')}</div>`;
const wdText=w=>w.length<2?'Pick at least 2 days.':w.length>6?'Pick 6 days or fewer so you have a rest day.':`<b>${w.length} days a week</b> · ${w.map(i=>DAYS[i]).join(', ')}`;
function editDays(){ui.tmpW=[...wdaysOf(data.profile)];drawDays()}
function drawDays(){const w=ui.tmpW,ok=w.length>=2&&w.length<=6;openModal(`<div class="sheet-head"><div style="flex:1;min-width:0"><div class="eyebrow">Your schedule</div><h2>Training days</h2></div><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body"><p class="muted" style="margin:0">Pick the days you can train. Your routines and 12-week plan follow these days.</p>${wdChips(w,'dm-wday')}<p class="wd-count" style="margin:0">${wdText(w)}</p></div>
  <div class="sheet-foot"><button class="btn" data-act="close">Cancel</button><button class="btn primary" data-act="days-save" ${ok?'':'disabled'}>Save days</button></div>`)}
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
 lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
 crown:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8 4.5 4L12 5l4.5 7L21 8l-2 11H5z"/></svg>',
 'a-overview':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
 'a-users':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c1-3.5 3.5-5 6.5-5s5.5 1.5 6.5 5"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 15c2 .6 3.2 2.2 3.6 5"/></svg>',
 'a-tx':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg>',
 logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10"/></svg>',
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
  if(u.disabled)return err('#login-err','This account has been disabled by an administrator.');
  if(u.role==='admin')return enterAdmin(em);
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
function showOnboard(edit){ob.edit=!!edit;ob.step=1;ob.err='';ob.p=Object.assign({goals:[],level:null,days:3,bw:''},JSON.parse(JSON.stringify(data.profile||{})));if(!ob.p.goals)ob.p.goals=ob.p.goal?[ob.p.goal]:[];ob.p.follow=data.program?(following()?'yes':'no'):'yes';ob.p.wdays=[...(data.profile?wdaysOf(data.profile):PAT[3])];if(ob.p.bw==null)ob.p.bw='';
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
    <p class="q">Which days can you train?</p>${wdChips(p.wdays,'ob-wday')}<p class="wd-count">${wdText(p.wdays)}</p>
    <div class="ob-nav"><button type="button" class="btn" data-act="ob-back">Back</button><button type="button" class="btn primary" data-act="ob-next" ${p.level&&p.wdays.length>=2&&p.wdays.length<=6?'':'disabled'}>Continue</button></div>`;
  if(st===3)h=`<h1>Almost done</h1><p class="subtitle">Your bodyweight is optional. We use it for your protein target and a rough calorie estimate.</p>
    <div class="field"><label for="ob-bw">Bodyweight</label><div class="unit"><input class="input" id="ob-bw" inputmode="decimal" placeholder="e.g. 70" value="${esc(p.bw)}"><span>kg</span></div></div>
    <p class="q">Follow a 12-week plan?</p><div class="opts" role="group" aria-label="Follow a plan">${opt('follow','yes','Yes, follow a plan'+(isPro()?'':' · Premium'),'RepForge sets your sets, reps and weights every week. Easy weeks are built in.'+(isPro()?'':' You can check out after setup.'))}${opt('follow','no','No, I\'ll train my own way','Use routines and log freely. You can start a plan any time.')}</div>
    ${ob.err?`<div class="err">${esc(ob.err)}</div>`:''}
    <div class="ob-nav"><button type="button" class="btn" data-act="ob-back">Back</button><button type="button" class="btn primary" data-act="ob-done">${ob.edit?'Update my plan':'Build my plan'}</button></div>`;
  $('#v-onboard').innerHTML=bar+h}
function obDone(){const raw=String(ob.p.bw).trim();const bw=raw?parseFloat(raw):null;
  if(raw&&!(bw>=30&&bw<=300)){ob.err='Enter a bodyweight between 30 and 300 kg, or leave it blank.';drawOnboard();return}
  data.profile={goal:ob.p.goals[0],goals:[...ob.p.goals],level:ob.p.level,days:ob.p.wdays.length,wdays:[...ob.p.wdays].sort((a,b)=>a-b),bw};ensureProgress();let goPro=false;if(ob.p.follow==='yes'&&!following()&&!isPro()){ui.pendingPlan=true;goPro=true}else if(ob.p.follow==='yes'&&!following()){data.program={start:weekStart(Date.now()),active:true,block:(data.program&&data.program.block||0)+1};ui.pw=null}else if(ob.p.follow==='no'&&following())data.program.active=false;if(bw){const l=data.weighins[data.weighins.length-1];if(!l||l.kg!==bw)data.weighins.push({t:Date.now(),kg:bw})}save();enterApp();if(goPro){ui.proReason='The 12-week plan';ui.view='premium';render();toast('Your goal plan is ready. The 12-week plan needs Premium.');return}toast(ob.edit?'Plan updated':following()?'Your 12-week plan starts this week':'Your plan is ready')}
function signOut(){store.del('rf_session');me=data=null;ui.admin=false;closeModal();applyAccent(null);ui.view='home';stopRest();$('#app').hidden=true;$('#resume').hidden=true;$('#auth').hidden=false;showAuth('login');$('#login-password').value=''}
async function demo(){const em='demo@repforge.app';
  if(!users[em]){users[em]={name:'Alex Reyes',gender:'male',dob:'2003-05-14',pw:await hash('repforge123'),created:Date.now()-30*DAY,data:{history:seedHistory(),routines:[mkRoutine(TPL[1]),mkRoutine(TPL[2])],active:null}};store.set('rf_users',users)}
  if(!users[em].data.profile){users[em].data.profile={goal:'muscle',goals:['muscle','strength'],level:'mid',days:4,bw:72};store.set('rf_users',users)}
  {const d=users[em].data;if(d.program&&d.program.active==null)d.program.active=true;if(!d.program){d.program={start:weekStart(Date.now())-4*7*DAY,active:true};d.liftGoals=[{id:uid(),ex:'bench',target:85,from:76,created:Date.now()-28*DAY},{id:uid(),ex:'squat',target:120,from:100,created:Date.now()-28*DAY}];d.bwGoal={target:75,from:70.5,created:Date.now()-28*DAY};d.weighins=[[28,70.5],[21,70.9],[14,71.4],[7,71.6],[1,72]].map(([a,kg])=>({t:Date.now()-a*DAY,kg}));d.baselines={};store.set('rf_users',users)}}
  {const u=users[em];if(!u.tx){const t=Date.now()-20*DAY;u.tx=[{id:'RF-'+new Date(t).getFullYear()+'-104233',t,plan:'yearly',base:1290,discount:258,promo:'STUDENT20',amount:1032,method:'card',detail:'Visa •••• 4242',status:'paid',from:t,to:addMonths(t,12)}];u.sub={plan:'yearly',status:'active',since:t,until:addMonths(t,12),tx:u.tx[0].id};store.set('rf_users',users)}}
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

/* ---------------- Glossary ---------------- */
const GLOSS=[
 ['Basics','rep','Rep','repetition','One full movement of an exercise, like lowering and pressing the bar once on bench press.','10 reps = doing the movement 10 times in a row.'],
 ['Basics','set','Set','','A group of reps done back to back before resting.','"3 × 10" means 3 sets of 10 reps.'],
 ['Basics','sxr','Sets × reps','','How RepForge writes a prescription: sets first, then reps, then the weight.','4 × 8 · 60 kg = 4 sets of 8 reps with 60 kg.'],
 ['Basics','working','Working set','','A set that counts toward your training, done at the planned weight. Warm-up sets don\'t count.',''],
 ['Basics','warmup','Warm-up set','','Lighter sets before your working sets to get your body ready and practise the movement.','Before 4 × 8 at 80 kg: empty bar × 10, 40 kg × 5, 60 kg × 3.'],
 ['Basics','rest','Rest period','','The time you rest between sets. Heavy, low-rep sets need longer rest than light ones.','Main lifts 2–5 minutes, accessories 60–90 seconds.'],
 ['Basics','compound','Compound / main lift','main lift','An exercise that works several joints and muscles at once and lets you move the most weight. Your program is built around these.','Squat, bench press, deadlift, overhead press, barbell row.'],
 ['Basics','accessory','Accessory exercise','isolation','A smaller exercise that targets one muscle to support the main lifts or build a specific body part. Done for more reps with lighter weight.','Lateral raise, curls, leg extension, triceps pushdown.'],
 ['Basics','bw','Bodyweight exercise','','An exercise where your own body is the weight. Progress by adding reps, then adding weight with a belt or vest.','Push-ups, pull-ups, dips, planks.'],
 ['Basics','rom','Range of motion','ROM','How far you move during a rep. Full range of motion usually builds more strength and muscle.',''],
 ['Effort','1rm','1RM','one-rep max','The most weight you can lift for a single rep with good form.','If your best squat for 1 rep is 120 kg, your 1RM is 120 kg.'],
 ['Effort','e1rm','Estimated 1RM','e1RM','Your 1RM worked out from a heavier set of several reps, so you don\'t have to test a true max. RepForge uses the Epley formula.','100 kg × 5 reps → e1RM ≈ 117 kg.'],
 ['Effort','epley','Epley formula','','The formula RepForge uses to estimate your 1RM: weight × (1 + reps ÷ 30). It is most accurate for sets of 10 reps or fewer.','80 kg × 8 → 80 × (1 + 8/30) ≈ 101 kg.'],
 ['Effort','pct','% of 1RM','percent of max','How heavy a set is compared to your max. Higher % means heavier weight and fewer reps.','75% of a 100 kg max = 75 kg.'],
 ['Effort','rir','RIR','reps in reserve','How many more reps you could have done when you stop the set. Lower RIR means the set was harder.','Stopping at 8 reps when you could do 10 = 2 RIR.'],
 ['Effort','rpe','RPE','rate of perceived exertion','A 1–10 score for how hard a set felt. RPE 10 = nothing left, RPE 8 = about 2 reps left. It is RIR counted the other way.',''],
 ['Effort','failure','Failure','','The point where you can\'t complete another rep with good form. Going to failure on every set makes recovery harder.',''],
 ['Effort','amrap','AMRAP','as many reps as possible','One set where you do as many good reps as you can at a set weight. Used in test weeks to measure progress.','AMRAP at 60 kg → you got 11 reps.'],
 ['Effort','pr','PR','personal record','Your best ever performance on a lift, such as the heaviest weight you have lifted.',''],
 ['Programming','volume','Volume','','How much work you do. RepForge counts it as weight × reps added up for every completed set.','3 × 10 at 50 kg = 1,500 kg of volume.'],
 ['Programming','intensity','Intensity','','How heavy the weight is, usually as a % of your 1RM. It does not mean how tired you feel.',''],
 ['Programming','overload','Progressive overload','','Doing a little more over time: more weight, more reps or more sets. This is what makes you stronger and bigger.','Bench 60 kg × 8 this week, 62.5 kg × 8 next week.'],
 ['Programming','periodization','Periodization','','Planning your training in stages instead of doing the same thing every week. Each stage has a job, and they build on each other.','RepForge splits 12 weeks into 3 phases of 4 weeks.'],
 ['Programming','block','Training block','mesocycle','A planned stretch of training, here 12 weeks, that ends with a test to see how much you improved. Then you start a new block.',''],
 ['Programming','phase','Phase','','A 4-week part of your block with one focus, like building volume or lifting heavier.',''],
 ['Programming','accumulation','Accumulation','volume phase','A phase with more sets and reps at moderate weight. It builds muscle and work capacity for the heavier phases.',''],
 ['Programming','intensification','Intensification','overload phase','A phase where the weight goes up and the reps come down, turning your base into strength.',''],
 ['Programming','peak','Peak','realization','The final, heaviest phase before a test. Few reps, high weight, low volume so you are fresh.',''],
 ['Programming','deload','Deload','D','A planned easy week with lighter weights and fewer sets. It lets your body recover so you come back stronger. Shown as D in your block.',''],
 ['Programming','test','Test week','T','The last week of a block where you test a new max or do an AMRAP set to measure progress. Shown as T in your block.',''],
 ['Programming','hypertrophy','Hypertrophy','','The scientific word for muscle growth. Usually trained with 6–15 reps close to failure.',''],
 ['Programming','split','Training split','','How you divide your exercises across the week.','Full body (everything each session), Upper / Lower, Push / Pull / Legs.'],
 ['Programming','frequency','Frequency','','How many times a week you train a muscle or lift. Twice a week is a good target for most people.',''],
 ['Nutrition','calories','Calories','kcal','The energy in food. Eating more or less than you burn decides whether you gain or lose weight.',''],
 ['Nutrition','maintenance','Maintenance calories','','How many calories you need to stay the same weight. RepForge gives a rough estimate from your bodyweight, gender and age.',''],
 ['Nutrition','deficit','Calorie deficit','cut','Eating fewer calories than maintenance so you lose weight.','Maintenance 2,400 → eat 2,000 for a 400 kcal deficit.'],
 ['Nutrition','surplus','Calorie surplus','bulk','Eating more calories than maintenance so you gain weight and have energy to build muscle.',''],
 ['Nutrition','recomp','Recomp','body recomposition','Losing fat and building muscle at the same time with a small deficit, high protein and hard training. Works best for beginners.',''],
 ['Nutrition','protein','Protein target','g/kg','How much protein to eat a day, given per kg of bodyweight. 1.6–2.2 g/kg supports muscle growth.','70 kg × 2 g/kg = 140 g of protein a day.'],
 ['Nutrition','macros','Macros','macronutrients','Protein, carbs and fat: the three nutrients that make up your calories. Protein 4 kcal/g, carbs 4 kcal/g, fat 9 kcal/g.',''],
 ['In the app','previous','Previous column','','In the workout logger, shows what you lifted for that set last time, so you know what to beat.',''],
 ['In the app','projection','Projection','','RepForge\'s estimate of where your lift or bodyweight is heading, based on your logs, experience level and goal. It is a guide, not a promise.',''],
 ['In the app','streak','Streak','','How many weeks in a row you have logged at least one workout.','']
];
const GLM=Object.fromEntries(GLOSS.map(g=>[g[1],g]));
const T=(k,label)=>`<button type="button" class="term" data-act="term" data-k="${k}">${label||GLM[k][2]}</button>`;
function termModal(k){const g=GLM[k];
  openModal(`<div class="sheet-head"><div style="flex:1;min-width:0"><div class="eyebrow">${g[0]}</div><h2>${esc(g[2])}${g[3]?` <small class="muted" style="font-size:14px;font-weight:600">${esc(g[3])}</small>`:''}</h2></div><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body"><p style="margin:0;font-size:15.5px">${esc(g[4])}</p>${g[5]?`<p class="muted" style="margin:0"><b style="color:var(--fg)">Example:</b> ${esc(g[5])}</p>`:''}</div>
  <div class="sheet-foot"><button class="btn" data-act="glossary">Open glossary</button><button class="btn primary" data-act="close">Got it</button></div>`)}
function vGlossary(){const q=(ui.gq||'').toLowerCase(),cat=ui.gc||'All',cats=['All',...new Set(GLOSS.map(g=>g[0]))];
  const list=GLOSS.filter(g=>(cat==='All'||g[0]===cat)&&(!q||(g[2]+' '+g[3]+' '+g[4]).toLowerCase().includes(q)));
  let last='',body='';list.forEach(g=>{if(g[0]!==last){body+=`<div class="gl-cat">${g[0]}</div>`;last=g[0]}
    body+=`<article class="panel gl-item" id="gl-${g[1]}"><h3>${esc(g[2])}${g[3]?`<small>${esc(g[3])}</small>`:''}</h3><p>${esc(g[4])}</p>${g[5]?`<p class="ex"><b>Example:</b> ${esc(g[5])}</p>`:''}</article>`});
  return `<div class="head"><div><h1>Glossary</h1><p>${GLOSS.length} training and nutrition terms explained in plain language.</p></div><button class="btn" data-act="go" data-v="${ui.glBack||'progress'}">Back</button></div>
  <div class="filters"><div class="search">${ICON.search}<input class="input" id="gl-search" placeholder="Search terms like RIR, deload, 1RM" value="${esc(ui.gq||'')}" autocomplete="off"></div>
  <div class="chips">${cats.map(c=>`<button class="chip" data-act="gl-cat" data-c="${c}" aria-pressed="${cat===c}">${c}</button>`).join('')}</div></div>
  <div class="gl-list">${body||'<div class="panel empty"><b>No matches</b>Try another word.</div>'}</div>`}

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
function ensureProgress(){data.liftGoals=data.liftGoals||[];data.weighins=data.weighins||[];data.baselines=data.baselines||{};
  if(data.profile&&data.profile.bw&&!data.weighins.length)data.weighins.push({t:Date.now(),kg:data.profile.bw})}
function blockType(p){return {strength:'str',muscle:'hyp',gain:'hyp',lose:'cut',fit:'fit'}[p.goal]||'hyp'}
const following=()=>!!(data.program&&data.program.active);
const progStart=()=>following()?data.program.start:weekStart(Date.now());
const curWeek=()=>Math.floor((Date.now()-progStart())/(7*DAY))+1;
const segbar=cw=>`<div class="segbar" aria-hidden="true">${[...Array(12)].map((_,i)=>`<i class="${i+1<cw?'done':i+1===cw?'now':''}"></i>`).join('')}</div>`;
const blockNo=()=>data.program&&data.program.block||1;
const tdaysOf=()=>schedule(data.profile).map((t,i)=>t?i:-1).filter(i=>i>=0);
const dayDate=(week,d)=>progStart()+(week-1)*7*DAY+d*DAY;
function dayDone(week,dn){return following()&&data.history.some(h=>h.plan&&h.plan.week===week&&h.plan.day===dn&&(h.plan.blockNo||1)===blockNo()&&h.start>=progStart())}
function nextPlanDay(){const sc=schedule(data.profile),td=tdaysOf(),ti=(new Date().getDay()+6)%7;for(let k=0;k<7;k++){const d=(ti+k)%7;if(sc[d]){const week=Math.floor((Date.now()+k*DAY-progStart())/(7*DAY))+1;return{d,k,t:TPLM[sc[d]],week,dn:td.indexOf(d)+1}}}return null}
function startPlanDay(){const n=nextPlanDay();if(!n)return;ui.pw=Math.min(Math.max(n.week,1),12);ui.pday=n.d;startWeekDay()}
function planHero(){const p=data.profile,B=BLOCKS[blockType(p)],cw=curWeek();
  if(cw>12)return `<div class="hero-card"><div style="position:relative;z-index:1"><span class="plan-badge">Following a plan</span><h2>${B.name} complete</h2>${segbar(13)}<p>You finished all 12 weeks. Check your progress, then start the next block to keep going.</p></div><div class="hero-acts"><button class="btn on-navy" data-act="go" data-v="progress">See progress</button><button class="btn primary" data-act="block-restart">Start next block</button></div></div>`;
  const n=nextPlanDay(),wk=Math.min(Math.max(n.week,1),12),R=weekRx(wk),when=n.k===0?'Today':n.k===1?'Tomorrow':DAYS[n.d];
  const main=R.test&&R.main.reps===1?'test your new max':R.main.reps==='AMRAP'?`max reps @ ${R.main.pct}%`:`${R.main.sets} × ${R.main.reps} @ ${R.main.pct}%`;
  return `<div class="hero-card"><div style="position:relative;z-index:1;min-width:0"><span class="plan-badge">Following your 12-week plan</span><h2 style="margin-top:12px">Block ${blockNo()} · Week ${cw} of 12</h2>${segbar(cw)}
    <p><b style="color:#fff">${when}: Day ${n.dn} · ${esc(n.t.name)}</b> · ${B.ph[R.ph]} phase · main lifts ${main}${R.dl?' · deload week, go light':''}</p></div>
    <div class="hero-acts"><button class="btn on-navy" data-act="go" data-v="progress">View plan</button><button class="btn primary" data-act="plan-start">${n.k===0?"Start today's workout":'Start next workout'}</button></div></div>`}
function planOffer(){const B=BLOCKS[blockType(data.profile)];
  return `<div class="panel offer"><div style="min-width:0"><div class="eyebrow">${isPro()?'Included in Premium':'Premium'}</div><h3>Follow a 12-week plan</h3><p>Get a ${B.name.toLowerCase()} built around your goal (${esc(goalNames(data.profile))}). RepForge sets your sets, reps and weights every week, with easy weeks built in. You're not following a plan right now.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="go" data-v="progress">See how it works</button><button class="btn primary" data-act="plan-follow">Follow the plan</button></div></div>`}
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

const ACC={str:[[3,10],[3,8],[3,8]],hyp:[[3,15],[3,12],[3,10]],cut:[[3,15],[3,12],[3,10]],fit:[[3,15],[3,12],[3,12]]};
const PLAIN={
 str:['Lots of sets of 5 at a medium weight. You build muscle and practise the lifts.','Fewer reps, more weight. Sets of 3 get heavier each week.','Very heavy sets of 1–2. In week 12 you test your new max.'],
 hyp:['Sets of 10 with a few reps left in the tank. Lots of work to build muscle.','Sets of 8, a bit heavier, pushing closer to failure.','Sets of 6, heavy and hard. Week 12 is a max-reps test.'],
 cut:['Sets of 10 at a steady weight while your diet starts.','Sets of 8. Keep the weight heavy so you keep your muscle.','Sets of 6, heavy with fewer sets so you can recover on less food.'],
 fit:['Light sets of 12. Learn the movements and build the habit.','Sets of 10. Add a little weight each week.','Sets of 8 to lock in your progress.']
};
function weekRx(sel){const bt=blockType(data.profile),B=BLOCKS[bt],w=B.w[sel-1],ph=Math.floor((sel-1)/4),k=(sel-1)%4,dl=w[4]==='D',test=w[4]==='T';
  const [as,ar]=ACC[bt][ph];return{bt,B,w,ph,dl,test,main:{sets:w[0],reps:w[1],pct:w[2],rir:w[3]},acc:{sets:dl?2:as,reps:ar,rir:dl?'4+':['3','2','1','2'][k],sec:dl?30:[30,40,45][ph]}}}
const isMainLift=id=>EXM[id].e==='Barbell'&&MAIN.includes(id);
const rnd=(kg)=>kg<10?Math.round(kg):r25(kg);
function rxFor(id,R,ahead){const e=EXM[id],main=isMainLift(id),cur=curE1(id),proj=cur?projE1(id,ahead):0;
  if(e.u)return{type:'acc',sets:R.acc.sets,reps:R.acc.sec,unit:'s',w:'Bodyweight',kg:'',rest:'60 s'};
  if(main){const rest=R.bt==='str'?'3–5 min':'2–3 min';
    if(R.test&&R.main.reps===1)return{type:'main',sets:1,reps:1,w:proj?`≈ ${r25(proj)} kg`:'New max',kg:proj?r25(proj):'',rest,note:'test'};
    if(R.main.reps==='AMRAP')return{type:'main',sets:1,reps:'Max',w:proj?`${r25(proj*R.main.pct/100)} kg`:`${R.main.pct}% of max`,kg:proj?r25(proj*R.main.pct/100):'',rest};
    return{type:'main',sets:R.main.sets,reps:R.main.reps,w:proj?`${r25(proj*R.main.pct/100)} kg`:`${R.main.pct}% of max`,kg:proj?r25(proj*R.main.pct/100):'',rest}}
  const reps=R.acc.reps,rir=parseInt(R.acc.rir)||2;
  if(e.e==='Bodyweight')return{type:'acc',sets:R.acc.sets,reps,w:'Bodyweight',kg:'',rest:'60–90 s'};
  if(!cur)return{type:'acc',sets:R.acc.sets,reps,w:'—',kg:'',rest:'60–90 s',nolog:true};
  const kg=rnd(proj/(1+(reps+rir)/30)*(R.dl?.85:1));return{type:'acc',sets:R.acc.sets,reps,w:kg+' kg',kg,rest:'60–90 s'}}
function vProgress(){ensureProgress();const fol=following(),p=data.profile,cw=curWeek(),done=cw>12,cwc=Math.min(Math.max(cw,1),12);
  const sel=ui.pw&&ui.pw<=12?ui.pw:cwc,R=weekRx(sel),B=R.B,wk=R.w,phase=R.ph,lifts=progressLifts();
  if(!ui.pl||!lifts.includes(ui.pl))ui.pl=lifts[0];
  const wDate=progStart()+(sel-1)*7*DAY,ahead=Math.max(0,Math.round((wDate-Date.now())/(7*DAY)));
  const kind=R.dl?'Deload':R.test?'Test week':'';
  // day plan
  const sc=schedule(p),tdays=sc.map((t,i)=>t?i:-1).filter(i=>i>=0),ti=(new Date().getDay()+6)%7;
  if(ui.pday==null||!tdays.includes(ui.pday))ui.pday=tdays.includes(ti)?ti:tdays[0];
  const dayT=TPLM[sc[ui.pday]],dk=tdays.indexOf(ui.pday),dTs=dayDate(sel,ui.pday),todayTs=weekStart(Date.now())+ti*DAY;
  const dStat=!fol?'':dayDone(sel,dk+1)?'<span class="st done">✓ Done</span>':dTs===todayTs?'<span class="st today">Today</span>':dTs<todayTs?'<span class="st">Not logged</span>':'<span class="st">Upcoming</span>';const dayRows=dayT.x.map(([id])=>({id,...rxFor(id,R,ahead)}));
  const anyNoLog=dayRows.some(r=>r.nolog);
  const mainLine=R.test&&R.main.reps===1?`Work up to a new 1-rep max (${T('1rm','1RM')}).`:R.main.reps==='AMRAP'?`1 set of as many reps as you can (${T('amrap','AMRAP')}) at ${R.main.pct}% of your max.`:`${R.main.sets} sets × ${R.main.reps} reps at ${R.main.pct}% of your max. Stop with ${R.main.rir==='1'?'1 rep':R.main.rir+' reps'} left (${T('rir','RIR')}).`;
  const accLine=`${R.acc.sets} sets × ${R.acc.reps} reps. Stop with ${R.acc.rir==='1'?'1 rep':R.acc.rir+' reps'} left.`;
  // chart
  let liftChart='';if(ui.pl){const id=ui.pl,pts=liftPts(id).filter(q=>q.x>=Date.now()-16*7*DAY),end=Math.max(progStart()+12*7*DAY,Date.now()+8*7*DAY),wks=Math.ceil((end-Date.now())/(7*DAY));
    const proj=[];for(let i=0;i<=wks;i++)proj.push({x:Date.now()+i*7*DAY,y:projE1(id,i)});
    const lg=data.liftGoals.find(g=>g.ex===id);const endV=proj[proj.length-1].y;
    liftChart=`<div class="panel chartbox"><div class="rx" style="margin-bottom:12px"><div><span class="lbl">${T('e1rm','Est. 1RM')} now</span><span class="big">${Math.round(curE1(id))} kg</span></div><div><span class="lbl">Projected ${new Date(end).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</span><span class="big">${Math.round(endV)} kg</span></div><div><span class="lbl">Rate</span><span class="big">+${(liftRate(id)*100).toFixed(1)}%<small class="muted" style="font-size:14px"> /wk</small></span></div></div>
      ${lineChart({series:[{pts,cls:'ch-act',dots:true},{pts:proj,cls:'ch-proj',end:Math.round(endV)+' kg'}],goal:lg?lg.target:null,label:EXM[id].name+' projection'})}
      <div class="legend"><span><i></i>Est. 1RM from your best set each session</span><span><i class="p"></i>Projection</span>${lg?'<span><i class="g"></i>Goal</span>':''}</div></div>`}
  const gCards=data.liftGoals.map(g=>{const cur=curE1(g.ex),w=weeksToLift(g.ex,g.target),pct=Math.max(0,Math.min(100,(cur-g.from)/(g.target-g.from)*100||0)),ok=cur>=g.target;
    return `<article class="panel goal"><div class="goal-top"><div class="ava">${initials(EXM[g.ex].name)}</div><div class="grow"><div class="t">${esc(EXM[g.ex].name)}</div><div class="s muted" style="font-size:13px">${T('e1rm','Estimated 1RM')} goal</div></div><div class="big">${g.target} kg</div><button class="x" aria-label="Delete goal" data-act="goal-del" data-id="${g.id}">✕</button></div>
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
  const phaseKeys={str:['accumulation','intensification','peak'],hyp:['accumulation','intensification','peak'],cut:['accumulation','intensification','peak'],fit:['accumulation','intensification','peak']}[R.bt];
  return `<div class="head"><div>${fol?'<span class="plan-badge" style="margin-bottom:10px">Following · Block '+blockNo()+' · '+B.name+'</span>':`<div class="eyebrow">Preview · ${B.name}</div>`}<h1>Progress</h1><p>${!fol?'You\'re not following a plan. This is what your 12 weeks would look like if you started this week.':done?'Your 12-week block is complete. Start the next one to keep progressing.':`Week ${cw<1?1:cw} of 12 · ${B.ph[Math.floor((cwc-1)/4)]} phase · started ${new Date(progStart()).toLocaleDateString(undefined,{month:'short',day:'numeric'})}`}</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="glossary">Glossary</button>${fol?`<button class="btn" data-act="block-restart">${done?'Start next block':'Restart block'}</button><button class="btn danger" data-act="plan-stop">Stop plan</button>`:'<button class="btn primary" data-act="plan-follow">Follow this plan</button>'}</div></div>
  <section><div class="section-title"><h2>How your block works</h2><small>${T('periodization','what is periodization?')}</small></div>
    <div class="panel blk-panel">
      <p style="margin:0;font-size:15px">${fol?'':'If you follow it, '}your next 12 weeks are split into 3 phases of 4 weeks. Each week the main lifts get a little heavier. The 4th week of each phase is an easy week so you recover, and week 12 tests how much stronger you got.</p>
      <div class="how">${B.ph.map((n,i)=>`<div class="how-card ${i===phase?'on':''}"><span class="k">Weeks ${i*4+1}–${i*4+4}</span><b>${T(phaseKeys[i],n)}</b><p>${PLAIN[R.bt][i]}</p><span class="sch">Main lifts: ${B.w[i*4][0]} × ${B.w[i*4][1]} at ${B.w[i*4][2]}–${B.w[i*4+2][2]}%</span><span class="sch">Accessories: ${ACC[R.bt][i][0]} × ${ACC[R.bt][i][1]}</span></div>`).join('')}</div>
      <div class="legend-row"><span><b>Main lifts</b> = big barbell lifts (${T('compound','what?')})</span><span><b>Accessories</b> = everything else (${T('accessory','what?')})</span><span><b>D</b> = ${T('deload','deload')}</span><span><b>T</b> = ${T('test','test week')}</span><span><b>%</b> = ${T('pct','% of your max')}</span></div>
    </div></section>
  <section><div class="section-title"><h2>Week by week</h2><small>tap a week</small></div>
    <div class="panel blk-panel">
      <div class="blk">${B.ph.map((n,i)=>`<div class="ph ${i===phase?'on':''}">${n}</div>`).join('')}
        ${B.w.map((w,i)=>{const n=i+1;return `<button class="wk ${fol&&n<cw?'past':''} ${fol&&n===cw?'now':''} ${w[4]?'dl':''}" data-act="pw-sel" data-w="${n}" aria-pressed="${n===sel}" aria-label="Week ${n}"><span>${n}</span><small class="${w[4]?'':'pc'}">${w[4]||w[2]+'%'}</small></button>`}).join('')}</div>
      <div class="wk-sum"><h3>Week ${sel} · ${B.ph[phase]}${kind?' · '+kind:''}${fol&&sel===cw?' <span class="tag g" style="vertical-align:3px">This week</span>':''}</h3>
        ${kind==='Deload'?'<p class="muted" style="margin:0">Easy week: lighter weights and fewer sets. Don\'t push hard; the goal is to recover.</p>':''}
        <div class="wk-line"><span class="tag g">Main lifts</span><span>${mainLine}</span></div>
        <div class="wk-line"><span class="tag">Accessories</span><span>${accLine}</span></div></div>
      <div class="days-row"><span class="muted">Training days:</span><b>${tdays.map(i=>DAYS[i]).join(', ')}</b><button class="linkbtn" data-act="days-edit">Change days</button></div>
      <div class="daynav"><div class="crumb">Block ${blockNo()}<span class="sep">›</span>Week ${sel}<span class="sep">›</span>Day ${dk+1}<span>of ${tdays.length} · ${DAYS[ui.pday]}, ${new Date(dayDate(sel,ui.pday)).toLocaleDateString(undefined,{month:'short',day:'numeric'})}</span>${dStat}</div>
        <div class="arrows"><button class="btn sm" data-act="day-step" data-dir="-1" aria-label="Previous day" ${sel===1&&dk===0?'disabled':''}>‹</button><button class="btn sm" data-act="day-step" data-dir="1" aria-label="Next day" ${sel===12&&dk===tdays.length-1?'disabled':''}>›</button></div></div>
      <div class="day-tabs">${tdays.map((i,k)=>`<button class="chip" data-act="pday" data-d="${i}" aria-pressed="${ui.pday===i}"><span>Day ${k+1} · ${esc(TPLM[sc[i]].name)}</span><small>${DAYS[i]} ${new Date(dayDate(sel,i)).toLocaleDateString(undefined,{month:'short',day:'numeric'})}${dayDone(sel,k+1)?' · ✓ Done':''}</small></button>`).join('')}</div>
      <div style="overflow-x:auto"><table class="tbl daytbl"><thead><tr><th>Exercise</th><th class="r">Sets × reps</th><th class="r">Weight</th><th class="r rcol">Rest</th></tr></thead><tbody>
        ${dayRows.map(r=>`<tr class="${r.type}"><td>${esc(EXM[r.id].name)}<span class="kind">${r.type==='main'?'Main':'Acc'}</span></td><td class="r">${r.sets} × ${r.reps}${r.unit||''}</td><td class="r"><b>${r.w}</b></td><td class="r rcol">${r.rest}</td></tr>`).join('')}</tbody></table></div>
      ${anyNoLog?'<p class="hint" style="margin:0">— means you haven\'t logged that exercise yet. Pick a weight you can lift for the reps shown with 2 reps to spare; next time RepForge will suggest one.</p>':''}
      <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" data-act="start-week-day">Start Week ${sel} · Day ${dk+1} with these numbers</button></div>
    </div></section>
  ${!isPro()?`<section><div class="section-title"><h2>Lift projection and goals</h2></div>${lockPanel('Projections and goal predictions','See where your lifts are heading, set goals like a 100 kg bench, and get a predicted date for reaching them. Track your bodyweight against a target too.','Lift projections and goal predictions')}</section>${reportSection()}`:`
  <section><div class="section-title"><h2>Lift projection</h2><small>based on your logs, level and goal</small></div>
    ${lifts.length?`<div class="chips" style="margin-bottom:12px">${lifts.map(id=>`<button class="chip" data-act="pl-sel" data-id="${id}" aria-pressed="${ui.pl===id}">${esc(EXM[id].name)}</button>`).join('')}</div>${liftChart}`:'<div class="panel empty"><b>Nothing to project yet</b>Log a few workouts and your estimated maxes and projections show up here.</div>'}</section>
  <section><div class="section-title"><h2>Goals</h2><button class="btn sm primary" data-act="goal-add">Add goal</button></div>
    ${gCards||bwCard?`<div class="goals">${bwCard}${gCards}</div>`:'<div class="panel empty"><b>No goals yet</b>Set a target like a 100 kg bench or a bodyweight of 75 kg and RepForge predicts when you will hit it.</div>'}</section>${reportSection()}`}
  <p class="muted" style="font-size:12.5px;margin:0">${T('e1rm','Estimated 1RM')} uses the ${T('epley','Epley formula')} on your best set each session. Projections assume you train consistently and slow down over time; real progress varies.</p>`}
function startWeekDay(){const p=data.profile,sel=ui.pw&&ui.pw<=12?ui.pw:Math.min(Math.max(curWeek(),1),12),R=weekRx(sel),sc=schedule(p),t=TPLM[sc[ui.pday]];
  const ahead=Math.max(0,Math.round((progStart()+(sel-1)*7*DAY-Date.now())/(7*DAY)));
  const dn=tdaysOf().indexOf(ui.pday)+1;startWorkout(`${t.name} · W${sel} D${dn}`,t.x.map(([id])=>{const r=rxFor(id,R,ahead);return [id,r.sets,typeof r.reps==='number'?r.reps:'',r.kg]}),following()?{week:sel,day:dn,block:R.B.name,blockNo:blockNo()}:null)}
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

/* ---------------- Premium, billing & customization ---------------- */
const PRICES={monthly:{name:'Monthly',price:149,per:'month',months:1},yearly:{name:'Yearly',price:1290,per:'year',months:12}};
const PROMOS={STUDENT20:{pct:20,label:'Student discount (20%)'},FORGE10:{pct:10,label:'Launch promo (10%)'}};
const peso=n=>'₱'+Number(n).toLocaleString('en-PH',{minimumFractionDigits:2,maximumFractionDigits:2});
const pesoR=n=>'₱'+Math.round(n).toLocaleString('en-PH');
function addMonths(t,m){const d=new Date(t);d.setMonth(d.getMonth()+m);return d.getTime()}
const isProU=u=>{const x=u&&u.sub;return !!(x&&x.until>Date.now()&&x.status!=='refunded'&&x.status!=='revoked')};
const isPro=()=>!!me&&isProU(users[me]);
const FREE_ROUTINES=3;
const FEATS=[['Workout logging and history',1,1],['Exercise library with video tutorials',1,1],['Suggested templates and goal-based tips',1,1],['Custom routines','Up to 3','Unlimited'],['Basic stats: volume, streak, PRs',1,1],['12-week periodized plan',0,1],['Lift projections and 1RM trends',0,1],['Goal predictions and bodyweight tracking',0,1],['Monthly training reports',0,1],['Custom app colors',0,1]];
const CHK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg>';
function lockPanel(title,text,reason){return `<div class="panel lock"><div class="lock-ic">${ICON.lock}</div><div class="grow"><b>${title}</b><p>${text}</p></div><button class="btn primary" data-act="go-premium" data-r="${esc(reason||title)}">See Premium</button></div>`}
function needPro(reason){if(isPro())return false;closeModal();ui.proReason=reason;ui.view='premium';render();window.scrollTo(0,0);return true}
function cycleCost(){const pl=PRICES[ui.bill||'yearly'],pr=ui.promo&&PROMOS[ui.promo],disc=pr?Math.round(pl.price*pr.pct)/100:0,total=Math.round((pl.price-disc)*100)/100;return{pl,pr,disc,total,vat:Math.round(total*12/112*100)/100}}

function vPremium(){const u=users[me],pro=isPro(),bill=ui.bill||'yearly',save=Math.round((1-PRICES.yearly.price/(PRICES.monthly.price*12))*100);
  const reason=ui.proReason?`<div class="notice"><div class="lock-ic" style="width:36px;height:36px">${ICON.lock}</div><div><b>${esc(ui.proReason)} is part of Premium</b>Upgrade to unlock it, along with everything below.</div></div>`:'';
  const feats=FEATS.map(([n,f,p])=>`<tr><td>${n}</td><td>${f===1?'<span class="yes">✓</span>':f===0?'<span class="no">—</span>':f}</td><td>${p===1?'<span class="yes">✓</span>':p}</td></tr>`).join('');
  const sub=u.sub;
  const top=pro?`<div class="hero-card"><div style="position:relative;z-index:1"><span class="pro-badge">${ICON.crown} Premium</span><h2 style="margin-top:12px">You're on RepForge Premium</h2><p>${PRICES[sub.plan]?PRICES[sub.plan].name+' plan':'Complimentary access'} · ${sub.status==='cancelled'?'cancelled, access until ':'renews on '}${new Date(sub.until).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}</p></div><div class="hero-acts"><button class="btn primary" data-act="go" data-v="profile">Manage billing</button></div></div>`
   :`${reason}<div class="seg" style="max-width:320px"><button type="button" data-act="bill" data-b="monthly" aria-pressed="${bill==='monthly'}">Monthly</button><button type="button" data-act="bill" data-b="yearly" aria-pressed="${bill==='yearly'}">Yearly · save ${save}%</button></div>
   <div class="price-grid">
    <div class="panel price"><h3>Free</h3><div class="amt">₱0<small> forever</small></div><p class="muted" style="margin:0">Everything you need to plan and log workouts.</p><ul>${FEATS.filter(f=>f[1]).map(f=>`<li>${CHK}<span>${f[0]}${f[1]!==1?' ('+f[1].toLowerCase()+')':''}</span></li>`).join('')}</ul><button class="btn" disabled style="opacity:.6">Your current plan</button></div>
    <div class="panel price pro"><span class="pro-badge ribbon">${ICON.crown} Most popular</span><h3>Premium</h3>
      <div class="amt">${pesoR(PRICES[bill].price)}<small> / ${PRICES[bill].per}</small></div>
      <p class="muted" style="margin:0">${bill==='yearly'?`That's ${peso(PRICES.yearly.price/12)} a month, billed yearly.`:'Billed monthly. Cancel anytime.'}</p>
      <ul><li>${CHK}<span>Everything in Free</span></li>${FEATS.filter(f=>f[2]&&f[1]!==1).map(f=>`<li>${CHK}<span>${f[0]}${f[2]!==1?' ('+String(f[2]).toLowerCase()+')':''}</span></li>`).join('')}</ul>
      <button class="btn primary block" data-act="go" data-v="checkout">Continue to checkout</button></div>
   </div>
   <p class="muted" style="margin:0;font-size:13.5px">Students get 20% off with the code <b style="color:var(--fg)">STUDENT20</b> at checkout.</p>`;
  return `<div class="head"><div><div class="eyebrow">RepForge Premium</div><h1>${pro?'Your plan':'Train with a plan that adapts to you'}</h1><p>The 12-week plan, projections and reports. Free stays free.</p></div></div>
  ${top}
  <section><div class="section-title"><h2>Compare plans</h2></div><div class="panel" style="overflow-x:auto"><table class="tbl feat-tbl"><thead><tr><th>Feature</th><th>Free</th><th>Premium</th></tr></thead><tbody>${feats}</tbody></table></div></section>
  <section><div class="section-title"><h2>Questions</h2></div><div class="tips">
    <div class="tip"><span class="k">Billing</span><b>Can I cancel anytime?</b><p>Yes. Cancel from Profile and you keep Premium until the end of the period you paid for.</p></div>
    <div class="tip"><span class="k">Data</span><b>What happens to my data if I downgrade?</b><p>Nothing is deleted. Your logs, routines and goals stay; Premium sections lock until you upgrade again.</p></div>
    <div class="tip"><span class="k">Payment</span><b>How can I pay?</b><p>Credit or debit card, or an e-wallet such as GCash or Maya.</p></div></div></section>`}

function vCheckout(){if(isPro()){ui.view='premium';return vPremium()}
  const c=ui.co=ui.co||{},bill=ui.bill||'yearly',pm=ui.pm||'card',k=cycleCost(),u=users[me];
  const renew=addMonths(Date.now(),k.pl.months);
  return `<div class="head"><div><div class="eyebrow">Checkout</div><h1>Upgrade to Premium</h1><p>${esc(u.name)} · ${esc(me)}</p></div><button class="btn" data-act="go" data-v="premium">Back</button></div>
  <div class="notice"><div class="lock-ic" style="width:36px;height:36px">${ICON.lock}</div><div style="flex:1;min-width:0"><b>Demo checkout</b>This is a class prototype. No real payment is processed and nothing you type leaves this browser. Don't enter real card details; use the test card 4242 4242 4242 4242.</div><button class="btn sm" data-act="co-test">Fill test card</button></div>
  <div class="co-grid">
   <div style="display:grid;gap:14px;min-width:0">
    <div class="panel co-step"><h3><span class="n">1</span>Choose your billing</h3>
      <div class="opts" style="margin:0">${['monthly','yearly'].map(b=>`<button type="button" class="opt" data-act="bill" data-b="${b}" aria-pressed="${bill===b}"><span class="grow"><b>${PRICES[b].name} · ${pesoR(PRICES[b].price)}/${PRICES[b].per}</b><small>${b==='yearly'?`${peso(PRICES.yearly.price/12)} a month · save ${pesoR(PRICES.monthly.price*12-PRICES.yearly.price)} a year`:'Most flexible. Cancel anytime.'}</small></span><span class="ord">${bill===b?'✓':''}</span></button>`).join('')}</div></div>
    <div class="panel co-step"><h3><span class="n">2</span>Payment method</h3>
      <div class="seg"><button type="button" data-act="pm" data-m="card" aria-pressed="${pm==='card'}">Credit / debit card</button><button type="button" data-act="pm" data-m="ewallet" aria-pressed="${pm==='ewallet'}">E-wallet</button></div>
      ${pm==='card'?`<div class="field"><label for="co-name">Name on card</label><input class="input" id="co-name" autocomplete="off" placeholder="${esc(u.name)}" value="${esc(c['co-name']||'')}"></div>
      <div class="field"><label for="co-card">Card number</label><input class="input" id="co-card" inputmode="numeric" autocomplete="off" placeholder="4242 4242 4242 4242" maxlength="19" value="${esc(c['co-card']||'')}"></div>
      <div class="field-row"><div class="field"><label for="co-exp">Expiry</label><input class="input" id="co-exp" inputmode="numeric" autocomplete="off" placeholder="MM/YY" maxlength="5" value="${esc(c['co-exp']||'')}"></div><div class="field"><label for="co-cvc">CVC</label><input class="input" id="co-cvc" inputmode="numeric" autocomplete="off" placeholder="123" maxlength="4" value="${esc(c['co-cvc']||'')}"></div></div>`
      :`<div class="field"><label for="co-wallet">E-wallet</label><select class="input" id="co-wallet"><option value="GCash" ${c['co-wallet']!=='Maya'?'selected':''}>GCash</option><option value="Maya" ${c['co-wallet']==='Maya'?'selected':''}>Maya</option></select></div>
      <div class="field"><label for="co-mobile">Mobile number</label><input class="input" id="co-mobile" inputmode="numeric" autocomplete="off" placeholder="09XX XXX XXXX" maxlength="11" value="${esc(c['co-mobile']||'')}"></div>
      <p class="hint" style="margin:0">In a real app you would be sent to the e-wallet to approve the payment. Here it is approved instantly.</p>`}</div>
   </div>
   <aside class="panel co-sum"><h3 style="font-size:16px;font-weight:850">Order summary</h3>
     <div class="sum-row"><span>RepForge Premium · ${k.pl.name}</span><span>${peso(k.pl.price)}</span></div>
     ${k.pr?`<div class="sum-row" style="color:var(--green-ink)"><span>${k.pr.label}</span><span>−${peso(k.disc)}</span></div>`:''}
     <div class="promo"><input class="input" id="co-promo" placeholder="Promo code" value="${esc(c['co-promo']||ui.promo||'')}" aria-label="Promo code"><button class="btn" data-act="promo">${ui.promo?'Remove':'Apply'}</button></div>
     ${ui.promoMsg?`<p class="${ui.promoOk?'ok-msg':'err'}" style="margin:0">${esc(ui.promoMsg)}</p>`:''}
     <div class="sum-row total"><span>Total today</span><span>${peso(k.total)}</span></div>
     <div class="sum-row"><span class="muted">Includes 12% VAT</span><span class="muted">${peso(k.vat)}</span></div>
     <p class="muted" style="margin:0;font-size:13px">Renews on ${new Date(renew).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})} at ${peso(k.pl.price)}. Cancel anytime from Profile.</p>
     <p id="co-err" class="err" hidden style="margin:0"></p>
     <button class="btn primary block" id="co-pay" data-act="pay">Pay ${peso(k.total)}</button>
   </aside>
  </div>`}
function luhn(n){let s=0,d=false;for(let i=n.length-1;i>=0;i--){let x=+n[i];if(d){x*=2;if(x>9)x-=9}s+=x;d=!d}return s%10===0}
function pay(){const c=ui.co||{},pm=ui.pm||'card',E=m=>{const e=$('#co-err');e.textContent=m;e.hidden=false};let detail;
  if(pm==='card'){const name=(c['co-name']||'').trim(),num=(c['co-card']||'').replace(/\D/g,''),exp=c['co-exp']||'',cvc=c['co-cvc']||'';
    if(!name)return E('Enter the name on the card.');
    if(num.length!==16||!luhn(num))return E('Enter a valid 16-digit card number. For this demo use 4242 4242 4242 4242.');
    const m=exp.match(/^(\d{2})\/(\d{2})$/);if(!m||+m[1]<1||+m[1]>12)return E('Enter the expiry date as MM/YY.');
    if(new Date(2000+ +m[2],+m[1],1)<=new Date())return E('This card has expired. Check the expiry date.');
    if(!/^\d{3,4}$/.test(cvc))return E('Enter the 3- or 4-digit CVC on the back of the card.');
    detail=(num[0]==='4'?'Visa':num[0]==='5'?'Mastercard':'Card')+' •••• '+num.slice(-4)}
  else{const mob=(c['co-mobile']||'').replace(/\D/g,'');if(!/^09\d{9}$/.test(mob))return E('Enter an 11-digit mobile number starting with 09.');detail=(c['co-wallet']||'GCash')+' · '+mob.slice(0,4)+' ••• '+mob.slice(-4)}
  const b=$('#co-pay');b.disabled=true;b.textContent='Processing payment…';
  setTimeout(()=>{const k=cycleCost(),u=users[me],t=Date.now(),id='RF-'+new Date().getFullYear()+'-'+String(Math.floor(100000+Math.random()*899999));
    const tx={id,t,plan:ui.bill||'yearly',base:k.pl.price,discount:k.disc,promo:k.pr?ui.promo:null,amount:k.total,method:pm,detail,status:'paid',from:t,to:addMonths(t,k.pl.months)};
    u.tx=(u.tx||[]).concat(tx);u.sub={plan:tx.plan,status:'active',since:t,until:tx.to,tx:id};
    if(ui.pendingPlan&&!following()){ensureProgress();data.program={start:weekStart(Date.now()),active:true,block:(data.program&&data.program.block||0)+1};ui.pw=null}
    save();ui.co={};ui.promo=null;ui.promoMsg='';ui.proReason=null;ui.lastTx=id;ui.view='receipt';render();window.scrollTo(0,0);toast('Payment successful')},1200)}
function receiptHtml(u,tx,em){return `<dl>
  <dt>Receipt no.</dt><dd>${tx.id}</dd><dt>Date</dt><dd>${new Date(tx.t).toLocaleString(undefined,{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'})}</dd>
  <dt>Billed to</dt><dd>${esc(u.name)}<br><span class="muted" style="font-weight:500">${esc(em)}</span></dd>
  <dt>Plan</dt><dd>RepForge Premium · ${PRICES[tx.plan]?PRICES[tx.plan].name:'Complimentary'}</dd>
  <dt>Period</dt><dd>${new Date(tx.from).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})} – ${new Date(tx.to).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}</dd>
  <dt>Payment method</dt><dd>${esc(tx.detail)}</dd></dl><hr><dl>
  <dt>Subtotal</dt><dd>${peso(tx.base)}</dd>${tx.discount?`<dt>Discount${tx.promo?' ('+tx.promo+')':''}</dt><dd>−${peso(tx.discount)}</dd>`:''}
  <dt style="color:var(--fg);font-weight:800">Total paid</dt><dd style="font-size:17px;font-weight:850">${peso(tx.amount)}</dd>
  <dt>VAT included (12%)</dt><dd>${peso(Math.round(tx.amount*12/112*100)/100)}</dd>
  <dt>Status</dt><dd>${tx.status==='refunded'?'<span class="pill bad">Refunded</span>':'<span class="pill pro">Paid</span>'}</dd></dl>`}
function vReceipt(){const u=users[me],tx=(u.tx||[]).find(x=>x.id===ui.lastTx);if(!tx){ui.view='premium';return vPremium()}
  return `<div class="panel rcpt"><div class="rcpt-ok">${CHK}</div><div><div class="eyebrow">Payment successful</div><h1 style="font-size:28px;font-weight:850;margin-top:6px">Welcome to Premium, ${esc(u.name.split(' ')[0])}.</h1><p class="muted" style="margin:6px 0 0">${following()?'Your 12-week plan is set up and starts this week.':'Projections, reports, the 12-week plan and custom colors are now unlocked.'}</p></div>
   ${receiptHtml(u,tx,me)}
   <p class="hint" style="margin:0">Prototype receipt. No real payment was made.</p>
   <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn primary" data-act="go" data-v="${following()?'home':'progress'}">${following()?'See my plan':'Explore Premium features'}</button><button class="btn" data-act="go" data-v="profile">View billing</button></div></div>`}
function rcptModal(u,tx,em){openModal(`<div class="sheet-head"><div style="flex:1;min-width:0"><div class="eyebrow">Receipt</div><h2>${tx.id}</h2></div><button class="x" data-act="close" aria-label="Close">✕</button></div><div class="sheet-body rcpt" style="padding:18px 20px">${receiptHtml(u,tx,em)}</div><div class="sheet-foot"><button class="btn primary" data-act="close">Close</button></div>`)}
const ACCENTS={forge:{name:'Forge',c:'#88bd72'},
 ember:{name:'Ember',c:'#e8955a',l:['#e8955a','#f0a874','#a4531c','#fbe9dc','#2b1406'],d:['#f3b184','#3a2213']},
 ocean:{name:'Ocean',c:'#6aa9d8',l:['#6aa9d8','#86bae2','#22618f','#e1eef8','#08223a'],d:['#9cc9ec','#13293b']},
 violet:{name:'Violet',c:'#a58be0',l:['#a58be0','#b7a1e8','#5f3fb0','#eee8fa','#1d1240'],d:['#c6b4f2','#251c3d']}};
function applyAccent(k){let el=document.getElementById('accent-style');if(!el){el=document.createElement('style');el.id='accent-style';(document.head||document.body).appendChild(el)}
  const a=ACCENTS[k];if(!a||!a.l){el.textContent='';return}
  const dk=`--green-ink:${a.d[0]};--green-soft:${a.d[1]}`;
  el.textContent=`:root{--green:${a.l[0]};--green-hover:${a.l[1]};--green-ink:${a.l[2]};--green-soft:${a.l[3]};--on-green:${a.l[4]}}@media (prefers-color-scheme: dark){:root:not([data-theme="light"]){${dk}}}:root[data-theme="dark"]{${dk}}`}
const curAccent=()=>isPro()&&data&&data.accent?data.accent:'forge';

/* ---------------- Monthly report (Premium) ---------------- */
function monthRange(off){const d=new Date();d.setDate(1);d.setHours(0,0,0,0);d.setMonth(d.getMonth()-off);const a=d.getTime();d.setMonth(d.getMonth()+1);return[a,d.getTime()]}
function monthStats(off){const[a,b]=monthRange(off),ws=data.history.filter(w=>w.start>=a&&w.start<b),mus={};
  ws.forEach(w=>w.ex.forEach(x=>{const m=EXM[x.id]&&EXM[x.id].m;if(m)mus[m]=(mus[m]||0)+x.sets.filter(z=>z.done).length}));
  const weeks=new Set(ws.map(w=>weekStart(w.start))).size,tw=Math.max(1,Math.ceil((Math.min(b,Date.now())-weekStart(a))/(7*DAY)));
  const lifts={};ws.slice().sort((p,q)=>p.start-q.start).forEach(w=>w.ex.forEach(x=>{let m=0;x.sets.forEach(z=>{if(z.done&&+z.kg>0)m=Math.max(m,e1(+z.kg,+z.reps||1))});if(m&&!EXM[x.id].u){lifts[x.id]=lifts[x.id]||{first:m,last:m};lifts[x.id].last=m}}));
  const imp=Object.entries(lifts).map(([id,v])=>({id,d:v.last-v.first,last:v.last})).filter(x=>x.d>0).sort((p,q)=>q.d-p.d).slice(0,3);
  return{a,n:ws.length,vol:ws.reduce((s,w)=>s+vol(w),0),time:ws.reduce((s,w)=>s+(w.end-w.start),0),sets:ws.reduce((s,w)=>s+w.ex.reduce((t,x)=>t+x.sets.filter(z=>z.done).length,0),0),mus,weeks,tw:Math.min(tw,5),imp}}
function reportSection(){if(!isPro())return `<section><div class="section-title"><h2>Monthly report</h2></div>${lockPanel('Monthly training reports','See each month at a glance: workouts, volume, time trained, muscles worked and your biggest strength gains, compared with the month before.','Monthly reports')}</section>`;
  const off=ui.rm||0,m=monthStats(off),pm=monthStats(off+1),dl=(x,y,f)=>{if(!y)return '';const d=(x-y)/y*100;return `<div class="delta ${d>=0?'up':'down'}">${d>=0?'▲':'▼'} ${Math.abs(d).toFixed(0)}% vs last month</div>`};
  const mx=Math.max(1,...Object.values(m.mus));
  return `<section><div class="section-title"><h2>Monthly report</h2><div class="seg" style="width:auto"><button type="button" data-act="rm" data-o="0" aria-pressed="${off===0}">This month</button><button type="button" data-act="rm" data-o="1" aria-pressed="${off===1}">Last month</button></div></div>
   <div class="panel blk-panel"><div class="eyebrow">${new Date(m.a).toLocaleDateString(undefined,{month:'long',year:'numeric'})}</div>
    <div class="stats"><div class="stat" style="padding:0"><div class="lbl">Workouts</div><div class="v num">${m.n}</div>${dl(m.n,pm.n)}</div><div class="stat" style="padding:0"><div class="lbl">Volume</div><div class="v num">${kfmt(m.vol)}<small>kg</small></div>${dl(m.vol,pm.vol)}</div><div class="stat" style="padding:0"><div class="lbl">Time trained</div><div class="v num">${fmtDur(m.time)}</div>${dl(m.time,pm.time)}</div><div class="stat" style="padding:0"><div class="lbl">Consistency</div><div class="v num">${m.weeks}<small>of ${m.tw} wks</small></div></div></div>
    <div class="two"><div><div class="lbl" style="margin-bottom:10px">Sets per muscle group</div><div style="display:grid;gap:8px">${Object.keys(m.mus).length?Object.entries(m.mus).sort((p,q)=>q[1]-p[1]).map(([k,v])=>`<div class="mbar"><span>${k}</span><span class="tr"><i style="width:${v/mx*100}%"></i></span><span>${v} sets</span></div>`).join(''):'<p class="muted" style="margin:0">No sets logged this month yet.</p>'}</div></div>
     <div><div class="lbl" style="margin-bottom:10px">Biggest strength gains</div>${m.imp.length?`<div class="list">${m.imp.map(x=>`<div class="row" style="padding:10px 0"><div class="grow"><div class="t">${esc(EXM[x.id].name)}</div><div class="s">${T('e1rm','Est. 1RM')} now ${Math.round(x.last)} kg</div></div><b class="num" style="color:var(--green-ink)">+${x.d.toFixed(1)} kg</b></div>`).join('')}</div>`:'<p class="muted" style="margin:0">Log the same lift more than once this month to see gains.</p>'}</div></div>
   </div></section>`}

/* ---------------- Admin ---------------- */
const ADMIN_EMAIL='admin@repforge.app';
async function ensureAdmin(){if(!users[ADMIN_EMAIL]){users[ADMIN_EMAIL]={name:'RepForge Admin',role:'admin',pw:await hash('admin1234'),created:Date.now()};store.set('rf_users',users)}}
function prng(seed){return()=>{seed=(seed*1664525+1013904223)%4294967296;return seed/4294967296}}
function seedSample(){const R=prng(42),pick=a=>a[Math.floor(R()*a.length)];
  const names=['Maria Santos','Joshua Dela Cruz','Andrea Reyes','Paolo Garcia','Bea Mendoza','Carlo Bautista','Nicole Villanueva','Miguel Ramos','Kim Navarro','Jerome Castillo','Trisha Aquino','Ralph Fernandez','Janelle Torres','Enzo Lim'];
  const goals=Object.keys(GOALS),now=Date.now();
  names.forEach((n,i)=>{const em=n.toLowerCase().replace(/ /g,'.').replace('dela.','dela')+'@example.com';if(users[em])return;
    const created=now-Math.floor((8+R()*170))*DAY,nw=Math.floor(R()*55),hist=[];
    for(let j=0;j<nw;j++){const st=created+R()*(now-created);hist.push({id:uid(),name:'Workout',start:st,end:st+(40+R()*40)*6e4,ex:[]})}hist.sort((a,b)=>b.start-a.start);
    const g=pick(goals),u={name:n,gender:i%2?'male':'female',dob:`${1996+Math.floor(R()*10)}-0${1+Math.floor(R()*9)}-1${Math.floor(R()*9)}`,pw:'x',created,sample:true,
      data:{history:hist,routines:[],active:null,profile:{goal:g,goals:[g],level:pick(['new','mid','adv']),days:3+Math.floor(R()*3)}},tx:[]};
    if(R()<.48){const plan=R()<.55?'monthly':'yearly',since=created+R()*(now-created)*.6,P=PRICES[plan];let t=since,last;
      const promo=R()<.3?'STUDENT20':null;
      while(t<now){const disc=promo?Math.round(P.price*20)/100:0,amt=P.price-disc,id='RF-'+new Date(t).getFullYear()+'-'+String(100000+Math.floor(R()*899999));
        last={id,t,plan,base:P.price,discount:disc,promo,amount:amt,method:R()<.6?'card':'ewallet',detail:R()<.6?'Visa •••• '+(1000+Math.floor(R()*8999)):(R()<.5?'GCash':'Maya')+' · 0917 ••• '+(1000+Math.floor(R()*8999)),status:'paid',from:t,to:addMonths(t,P.months)};
        u.tx.push(last);t=last.to}
      u.sub={plan,status:R()<.15?'cancelled':'active',since,until:last.to,tx:last.id}}
    users[em]=u});
  const al=users['joshua.delacruz@example.com'];if(al&&al.tx.length){const t=al.tx[al.tx.length-1];t.status='refunded';al.sub.status='refunded';al.sub.until=now-DAY}
  const dis=users['enzo.lim@example.com'];if(dis)dis.disabled=true;
  store.set('rf_users',users);store.set('rf_sample_seeded',true)}
const allUsers=()=>Object.entries(users).filter(([e,u])=>u.role!=='admin');
const allTx=()=>allUsers().flatMap(([em,u])=>(u.tx||[]).map(t=>({...t,em,u}))).sort((a,b)=>b.t-a.t);
const lastActive=u=>{const h=u.data&&u.data.history;return h&&h.length?Math.max(...h.map(w=>w.start)):null};
const ago=t=>{if(!t)return '—';const d=Math.floor((Date.now()-t)/DAY);return d<1?'Today':d===1?'Yesterday':d<30?d+' days ago':new Date(t).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})};
const planPill=u=>isProU(u)?`<span class="pill pro">Premium · ${PRICES[u.sub.plan]?PRICES[u.sub.plan].name:'Comp'}</span>`:'<span class="pill">Free</span>';
const statusPill=u=>u.disabled?'<span class="pill bad">Disabled</span>':u.sub&&u.sub.status==='cancelled'&&isProU(u)?'<span class="pill warn">Cancelling</span>':'<span class="pill pro" style="background:var(--surface2);color:var(--fg)">Active</span>';
const ADMIN_NAV=[['a-overview','Overview'],['a-users','Users'],['a-tx','Transactions']];
function enterAdmin(em){me=em;data=null;ui.admin=true;store.set('rf_session',em);if(!store.get('rf_sample_seeded'))seedSample();applyAccent(null);
  ui.view='a-overview';$('#auth').hidden=true;$('#app').hidden=false;renderAdmin();window.scrollTo(0,0)}
function renderAdmin(){const nav=ADMIN_NAV.map(([v,l])=>`<button type="button" data-act="go" data-v="${v}" ${ui.view===v?'aria-current="page"':''}>${ICON[v]}<span>${l}</span></button>`).join('')+`<button type="button" data-act="logout">${ICON.logout}<span>Log out</span></button>`;
  $('#nav').innerHTML=nav;$('#tabbar').innerHTML=nav;$('#tabbar').style.gridTemplateColumns='repeat(4,1fr)';
  $('#side-plan').hidden=true;$('#side-pro').innerHTML='<span class="pro-badge">Admin console</span>';$('#side-name').textContent=users[me].name;$('#side-email').textContent=me;$('#resume').hidden=true;
  $('#view').innerHTML=({'a-users':vAUsers,'a-tx':vATx}[ui.view]||vAOverview)()}
function vAOverview(){const us=allUsers(),pro=us.filter(([,u])=>isProU(u)),tx=allTx(),paid=tx.filter(t=>t.status==='paid'),[ma]=monthRange(0);
  const rev=paid.reduce((s,t)=>s+t.amount,0),revM=paid.filter(t=>t.t>=ma).reduce((s,t)=>s+t.amount,0);
  const mrr=pro.filter(([,u])=>u.sub.status==='active').reduce((s,[,u])=>s+(u.sub.plan==='yearly'?PRICES.yearly.price/12:PRICES[u.sub.plan]?PRICES.monthly.price:0),0);
  const wk=us.reduce((s,[,u])=>s+(u.data&&u.data.history?u.data.history.length:0),0),newM=us.filter(([,u])=>u.created>=ma).length;
  const months=[...Array(6)].map((_,i)=>{const[a,b]=monthRange(5-i);return{a,v:paid.filter(t=>t.t>=a&&t.t<b).reduce((s,t)=>s+t.amount,0)}}),mx=niceMax(Math.max(1,...months.map(m=>m.v)));
  const mon=pro.filter(([,u])=>u.sub.plan==='monthly').length,yr=pro.filter(([,u])=>u.sub.plan==='yearly').length;
  return `<div class="head"><div><div class="eyebrow">Admin console</div><h1>Overview</h1><p>${us.length} accounts in this browser${us.some(([,u])=>u.sample)?' · includes sample accounts for the demo':''}.</p></div><button class="btn" data-act="a-reseed">Reset sample data</button></div>
  <div class="kpis">
   <div class="panel stat kpi"><div class="lbl">Total users</div><div class="v num">${us.length}</div><div class="sub">+${newM} this month</div></div>
   <div class="panel stat kpi"><div class="lbl">Premium members</div><div class="v num">${pro.length}</div><div class="sub">${us.length?Math.round(pro.length/us.length*100):0}% conversion</div></div>
   <div class="panel stat kpi"><div class="lbl">MRR</div><div class="v num">${pesoR(mrr)}</div><div class="sub">monthly recurring revenue</div></div>
   <div class="panel stat kpi"><div class="lbl">Revenue this month</div><div class="v num">${pesoR(revM)}</div><div class="sub">${(n=>n+(n===1?' payment':' payments'))(paid.filter(t=>t.t>=ma).length)}</div></div>
   <div class="panel stat kpi"><div class="lbl">All-time revenue</div><div class="v num">${pesoR(rev)}</div><div class="sub">${tx.filter(t=>t.status==='refunded').length} refunded</div></div>
   <div class="panel stat kpi"><div class="lbl">Workouts logged</div><div class="v num">${fmtN(wk)}</div><div class="sub">across all users</div></div></div>
  <div class="two"><section><div class="section-title"><h2>Revenue</h2><small>last 6 months, paid only</small></div>
    <div class="panel chart"><div class="bars" style="grid-template-columns:repeat(6,1fr)"><div class="gl" style="bottom:100%"><span class="num">${pesoR(mx)}</span></div><div class="gl" style="bottom:50%"><span class="num">${pesoR(mx/2)}</span></div>
     ${months.map((m,i)=>`<div class="bar ${i===5?'now':''}" style="height:${m.v/mx*100}%" title="${pesoR(m.v)}">${m.v?`<b class="num">${m.v>=1000?'₱'+(m.v/1000).toFixed(1)+'k':pesoR(m.v)}</b>`:''}</div>`).join('')}</div>
     <div class="xlabels" style="grid-template-columns:repeat(6,1fr)">${months.map(m=>`<span>${new Date(m.a).toLocaleDateString(undefined,{month:'short'})}</span>`).join('')}</div></div></section>
   <section><div class="section-title"><h2>Plan mix</h2><small>all users</small></div><div class="panel blk-panel" style="gap:12px">
    ${[['Monthly',mon],['Yearly',yr],['Free',us.length-pro.length]].map(([k,v])=>`<div class="mbar"><span>${k}</span><span class="tr"><i style="width:${us.length?v/us.length*100:0}%"></i></span><span>${v}</span></div>`).join('')}
    <p class="muted" style="margin:0;font-size:13px">${tx.filter(t=>t.promo).length} payments used a promo code.</p></div></section></div>
  <div class="two"><section><div class="section-title"><h2>Recent transactions</h2><button class="linkbtn" data-act="go" data-v="a-tx">View all</button></div>
    <div class="panel list">${tx.slice(0,5).map(t=>`<button class="row click" data-act="a-rcpt" data-id="${t.id}"><div class="grow"><div class="t">${esc(t.u.name)}</div><div class="s">${t.id} · ${ago(t.t)}</div></div><b class="num">${peso(t.amount)}</b></button>`).join('')||'<div class="empty">No transactions yet.</div>'}</div></section>
   <section><div class="section-title"><h2>Newest users</h2><button class="linkbtn" data-act="go" data-v="a-users">View all</button></div>
    <div class="panel list">${us.sort((a,b)=>b[1].created-a[1].created).slice(0,5).map(([em,u])=>`<button class="row click" data-act="a-user" data-em="${esc(em)}"><div class="ava">${initials(u.name)}</div><div class="grow"><div class="t">${esc(u.name)}</div><div class="s">Joined ${ago(u.created)}</div></div>${planPill(u)}</button>`).join('')}</div></section></div>`}
function vAUsers(){const q=(ui.aq||'').toLowerCase(),f=ui.af||'All';
  const list=allUsers().filter(([em,u])=>(!q||(u.name+' '+em).toLowerCase().includes(q))&&(f==='All'||(f==='Premium'&&isProU(u))||(f==='Free'&&!isProU(u))||(f==='Disabled'&&u.disabled))).sort((a,b)=>b[1].created-a[1].created);
  return `<div class="head"><div><div class="eyebrow">Admin console</div><h1>Users</h1><p>${list.length} shown · click a user to manage their account.</p></div></div>
  <div class="filters"><div class="search">${ICON.search}<input class="input" id="a-search" placeholder="Search by name or email" value="${esc(ui.aq||'')}" autocomplete="off"></div>
   <div class="chips">${['All','Premium','Free','Disabled'].map(c=>`<button class="chip" data-act="a-filter" data-f="${c}" aria-pressed="${f===c}">${c}</button>`).join('')}</div></div>
  <div class="panel" style="overflow-x:auto"><table class="tbl adm-tbl"><thead><tr><th>User</th><th>Plan</th><th>Goal</th><th>Joined</th><th class="r">Workouts</th><th>Last active</th><th>Status</th><th></th></tr></thead><tbody>
   ${list.map(([em,u])=>{const p=u.data&&u.data.profile;return `<tr><td class="u"><b>${esc(u.name)}${u.sample?' <span class="pill" style="font-size:10px;padding:1px 6px">Sample</span>':''}</b><span>${esc(em)}</span></td><td>${planPill(u)}</td><td>${p?esc(goalNames(p)):'<span class="muted">Not set</span>'}</td><td>${new Date(u.created).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}</td><td class="r num">${u.data&&u.data.history?u.data.history.length:0}</td><td>${ago(lastActive(u))}</td><td>${statusPill(u)}</td><td class="r"><button class="btn sm" data-act="a-user" data-em="${esc(em)}">Manage</button></td></tr>`}).join('')||'<tr><td colspan="8" class="muted">No users match.</td></tr>'}
  </tbody></table></div>`}
function vATx(){const q=(ui.tq||'').toLowerCase(),f=ui.tf||'All';
  const list=allTx().filter(t=>(f==='All'||(f==='Paid'&&t.status==='paid')||(f==='Refunded'&&t.status==='refunded'))&&(!q||(t.id+' '+t.u.name+' '+t.em).toLowerCase().includes(q)));
  const sum=list.filter(t=>t.status==='paid').reduce((s,t)=>s+t.amount,0);
  return `<div class="head"><div><div class="eyebrow">Admin console</div><h1>Transactions</h1><p>${list.length} transactions · ${peso(sum)} paid in this view</p></div></div>
  <div class="filters"><div class="search">${ICON.search}<input class="input" id="t-search" placeholder="Search receipt no., name or email" value="${esc(ui.tq||'')}" autocomplete="off"></div>
   <div class="chips">${['All','Paid','Refunded'].map(c=>`<button class="chip" data-act="a-tfilter" data-f="${c}" aria-pressed="${f===c}">${c}</button>`).join('')}</div></div>
  <div class="panel" style="overflow-x:auto"><table class="tbl adm-tbl"><thead><tr><th>Receipt</th><th>Customer</th><th>Plan</th><th>Method</th><th class="r">Amount</th><th>Status</th><th>Date</th><th></th></tr></thead><tbody>
   ${list.map(t=>`<tr><td class="num"><button class="linkbtn" data-act="a-rcpt" data-id="${t.id}">${t.id}</button></td><td class="u"><b>${esc(t.u.name)}</b><span>${esc(t.em)}</span></td><td>${PRICES[t.plan]?PRICES[t.plan].name:'Comp'}${t.promo?` <span class="pill" style="font-size:10px">${t.promo}</span>`:''}</td><td>${esc(t.detail)}</td><td class="r num"><b>${peso(t.amount)}</b></td><td>${t.status==='refunded'?'<span class="pill bad">Refunded</span>':'<span class="pill pro">Paid</span>'}</td><td>${new Date(t.t).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}</td><td class="r">${t.status==='paid'&&t.amount>0?`<button class="btn sm danger" data-act="a-refund" data-id="${t.id}">Refund</button>`:''}</td></tr>`).join('')||'<tr><td colspan="8" class="muted">No transactions match.</td></tr>'}
  </tbody></table></div>`}
function aUserModal(em){const u=users[em];if(!u)return;const p=u.data&&u.data.profile,h=(u.data&&u.data.history)||[];
  openModal(`<div class="sheet-head"><div class="ava">${initials(u.name)}</div><div style="flex:1;min-width:0"><h2>${esc(u.name)}</h2><div class="muted" style="font-size:13.5px;overflow-wrap:anywhere">${esc(em)}</div></div><button class="x" data-act="close" aria-label="Close">✕</button></div>
  <div class="sheet-body"><div style="display:flex;gap:6px;flex-wrap:wrap">${planPill(u)}${statusPill(u)}${u.sample?'<span class="pill">Sample account</span>':''}</div>
   <div class="kv"><div><span>Workouts</span><b>${h.length}</b></div><div><span>Last active</span><b style="font-size:14px">${ago(lastActive(u))}</b></div><div><span>Paid</span><b>${pesoR((u.tx||[]).filter(t=>t.status==='paid').reduce((s,t)=>s+t.amount,0))}</b></div></div>
   <dl class="rcpt" style="padding:0;display:grid;grid-template-columns:auto 1fr;gap:8px 16px;font-size:14px;margin:0">
    <dt class="muted">Joined</dt><dd style="margin:0;text-align:right">${new Date(u.created).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}</dd>
    <dt class="muted">Gender · age</dt><dd style="margin:0;text-align:right">${GENDER[u.gender]||'—'} · ${u.dob?ageOf(u.dob):'—'}</dd>
    <dt class="muted">Goal</dt><dd style="margin:0;text-align:right">${p?esc(goalNames(p)):'Not set'}</dd>
    <dt class="muted">Experience</dt><dd style="margin:0;text-align:right">${p&&LEVELS[p.level]?LEVELS[p.level].name+' · '+p.days+' days/wk':'—'}</dd>
    <dt class="muted">Subscription</dt><dd style="margin:0;text-align:right">${u.sub?`${PRICES[u.sub.plan]?PRICES[u.sub.plan].name:'Complimentary'} · ${u.sub.status} · until ${new Date(u.sub.until).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}`:'None'}</dd></dl>
   ${(u.tx||[]).length?`<div><div class="lbl" style="margin-bottom:6px">Payments</div><div class="list">${u.tx.slice().reverse().map(t=>`<button class="row click" style="padding:9px 0" data-act="a-rcpt" data-id="${t.id}"><div class="grow"><div class="t" style="font-size:14px">${t.id}</div><div class="s">${new Date(t.t).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})} · ${t.status}</div></div><b class="num">${peso(t.amount)}</b></button>`).join('')}</div></div>`:''}</div>
  <div class="sheet-foot" style="justify-content:flex-start">${isProU(u)?`<button class="btn sm" data-act="a-revoke" data-em="${esc(em)}">Revoke Premium</button>`:`<button class="btn sm" data-act="a-grant" data-em="${esc(em)}">Grant 1 month Premium</button>`}
   <button class="btn sm" data-act="a-toggle" data-em="${esc(em)}">${u.disabled?'Enable account':'Disable account'}</button><button class="btn sm danger" data-act="a-del" data-em="${esc(em)}">Delete user</button></div>`)}
function aSave(msg){store.set('rf_users',users);closeModal();renderAdmin();if(msg)toast(msg)}

/* ---------------- Render ---------------- */
function render(){if(ui.admin)return renderAdmin();
  $('#tabbar').style.gridTemplateColumns='';applyAccent(curAccent());
  {const sp=$('#side-pro');sp.innerHTML=isPro()?`<span class="pro-badge">${ICON.crown} Premium</span>`:`<button class="btn primary sm" data-act="go" data-v="premium">${ICON.crown} Go Premium</button>`}
  const navHtml=NAV.map(([v,l])=>`<button type="button" data-act="go" data-v="${v}" ${ui.view===v||(v==='workout'&&ui.view==='log')||(v==='progress'&&ui.view==='glossary')||(v==='profile'&&['premium','checkout','receipt'].includes(ui.view))?'aria-current="page"':''}>${ICON[v]}<span>${l}</span></button>`).join('');
  $('#nav').innerHTML=navHtml;$('#tabbar').innerHTML=navHtml;
  {const sp=$('#side-plan');if(data.profile&&following()){const cw=curWeek();sp.innerHTML=`<span>Following 12-week plan</span><b>${cw>12?'Block '+blockNo()+' complete':'Block '+blockNo()+' · Week '+cw+' of 12'}</b>${segbar(cw)}`;sp.hidden=false}else sp.hidden=true}
  const v=$('#view');
  v.innerHTML=({premium:vPremium,checkout:vCheckout,receipt:vReceipt,glossary:vGlossary,progress:vProgress,home:vHome,workout:vWorkout,exercises:vExercises,history:vHistory,profile:vProfile,log:vLog}[ui.view]||vHome)();
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
  ${data.active?`<div class="hero-card"><div><div class="eyebrow">In progress</div><h2>${esc(data.active.name)}</h2><p>Started ${clock(now-data.active.start)} ago · ${data.active.ex.length} exercises</p></div><button class="btn primary" data-act="go" data-v="log">Resume workout</button></div>`:following()?planHero():
  `<div class="hero-card"><div><div class="eyebrow">${nextLbl}</div><h2>${esc(next.name)}</h2><p>${next.x.length} exercises · about ${next.x.reduce((a,x)=>a+x[1],0)*3} min</p><div class="chips-inline">${next.x.map(x=>`<span>${esc(EXM[x[0]].name)}</span>`).join('')}</div></div><button class="btn primary" data-act="start-plan" data-src="${nextSrc}" data-id="${next.id}">Start workout</button></div>`}
  ${following()?'':planOffer()}
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
  return `<section><div class="section-title"><h2>Your plan</h2><div style="display:flex;gap:6px"><button class="linkbtn" data-act="glossary">Glossary</button><button class="linkbtn" data-act="change-goal">Change goal</button></div></div>
  <div class="panel plan">
    <div class="plan-top"><div class="plan-goal"><span class="gi">${GI[p.goal]}</span><div style="min-width:0"><div class="eyebrow">${gl(p).length>1?'Your goals':'Your goal'}</div><h3>${goalNames(p)}</h3><div class="muted" style="font-size:13.5px">${LEVELS[p.level].name} · ${p.days} days a week${p.bw?` · ${p.bw} kg`:''}</div></div></div>
      <div class="targets"><div class="target"><span>${T('protein','Protein')} / day</span><b>${t.prot}</b></div><div class="target"><span>${T('calories','Calories')} / day</span><b>${t.cal}${p.bw?'':' kcal'}</b></div><div class="target"><span>Reps</span><b>${G.reps}</b></div></div></div>
    <p class="note">${p.bw?'Calories are a rough estimate from your bodyweight, gender and age. Weigh yourself weekly and adjust by how your weight trends.':'Calories are relative to your maintenance. Add your bodyweight in Change goal to get exact gram and calorie targets.'}</p>
    <div><div class="lbl" style="margin-bottom:8px;display:flex;justify-content:space-between;gap:10px">Your week<button class="linkbtn" style="font-size:12px;letter-spacing:0;text-transform:none" data-act="days-edit">Change days</button></div><div class="week">${DAYS.map((n,i)=>`<div class="day ${sc[i]?'on':''} ${i===ti?'today':''}" title="${sc[i]?esc(TPLM[sc[i]].name):'Rest day'}"><span>${n}</span><b>${sc[i]?TPLM[sc[i]].s:'Rest'}</b></div>`).join('')}</div></div>
    <div><div class="lbl" style="margin-bottom:8px">Tips for your goal</div><div class="tips">${tipsFor(p).map(x=>`<div class="tip"><span class="k">${x.k}</span><b>${esc(x.b)}</b><p>${esc(x.p)}</p></div>`).join('')}</div></div>
  </div></section>
  <section><div class="section-title"><h2>Recommended routines</h2><small>for ${goalNames(p).toLowerCase()}</small></div>
    <div class="grid">${recIds(p).map(id=>tplCard(TPLM[id],false,true)).join('')}</div></section>`}
function niceMax(m){const p=Math.pow(10,Math.floor(Math.log10(m)));for(const f of[1,2,2.5,5,10])if(f*p>=m)return f*p;return 10*p}
function histRow(w,extra=''){return `<div class="row"><div class="ava">${initials(w.name)}</div><div class="grow"><div class="t">${esc(w.name)}</div><div class="s">${w.plan?`<span class="tag g" style="padding:1px 7px;margin-right:6px">Plan · W${w.plan.week}${w.plan.day?' D'+w.plan.day:''}</span>`:''}${fmtDate(w.start)} · ${fmtDur(w.end-w.start)} · ${w.ex.length} exercises</div></div><div class="num" style="font-weight:800">${kfmt(vol(w))} kg</div>${extra}</div>`}

function tplCard(t,mine,rec){
  return `<article class="panel tpl"><div class="meta">${mine?'<span class="tag g">My routine</span>':`${rec?'<span class="tag g">Recommended</span>':''}<span class="tag ${rec?'':'g'}">${t.lvl}</span><span class="tag">${t.freq}</span>`}</div>
  <h3>${esc(t.name)}</h3>${t.d?`<p>${esc(t.d)}</p>`:''}
  <ul>${t.x.map(([id,s,r])=>`<li><span>${esc(EXM[id].name)}</span><span>${s} × ${r}${EXM[id].u?' s':''}</span></li>`).join('')}</ul>
  <div class="acts">${mine?`<button class="btn sm danger" data-act="del-routine" data-id="${t.id}">Delete</button>`:`<button class="btn sm" data-act="preview" data-id="${t.id}">Preview</button>`}<button class="btn sm primary" data-act="start-plan" data-src="${mine?'r':'t'}" data-id="${t.id}">Start</button></div></article>`}
function vWorkout(){
  return `<div class="head"><div><h1>Start a workout</h1><p>Pick one of your routines, a suggested template, or log freestyle.</p></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" data-act="new-routine">New routine</button><button class="btn primary" data-act="start-empty">Start empty workout</button></div></div>
  ${following()&&curWeek()<=12?(()=>{const n=nextPlanDay(),wk=Math.min(Math.max(n.week,1),12),R=weekRx(wk);return `<section><div class="section-title"><h2>From your 12-week plan</h2><button class="linkbtn" data-act="go" data-v="progress">View plan</button></div>
    <div class="panel plan-card"><div><span class="tag g">Week ${wk} · ${R.B.ph[R.ph]}${R.dl?' · Deload':R.test?' · Test':''}</span></div><h3>${n.k===0?'Today':n.k===1?'Tomorrow':DAYS[n.d]}: ${esc(n.t.name)}</h3>
    <div class="muted" style="font-size:14px">Main lifts ${R.main.reps==='AMRAP'?'max reps @ '+R.main.pct+'%':R.test&&R.main.reps===1?'test your max':R.main.sets+' × '+R.main.reps+' @ '+R.main.pct+'%'} · Accessories ${R.acc.sets} × ${R.acc.reps}. Weights are filled in for you.</div>
    <div><button class="btn primary" data-act="plan-start">Start this workout</button></div></div></section>`})():''}
  <section><div class="section-title"><h2>Recommended for you</h2><small>${goalNames(data.profile)} · ${data.profile.days} days a week</small></div>
    <div class="grid">${recIds(data.profile).map(id=>tplCard(TPLM[id],false,true)).join('')}</div></section>
  <section><div class="section-title"><h2>My routines</h2><small>${data.routines.length}${isPro()?'':' of '+FREE_ROUTINES} saved</small></div>
    ${data.routines.length?`<div class="grid">${data.routines.map(r=>tplCard(r,true)).join('')}</div>`:'<div class="panel empty"><b>No routines yet</b>Save a template below or build your own with New routine.</div>'}</section>
  <section><div class="section-title"><h2>All templates</h2><small>${TPL.length} routines</small></div>
    <div class="grid">${TPL.filter(t=>!recIds(data.profile).includes(t.id)).map(t=>tplCard(t)).join('')}</div></section>`;
}
function filtered(){const q=ui.q.toLowerCase();return EX.filter(e=>(ui.muscle==='All'||e.m===ui.muscle)&&(!q||(e.name+' '+e.e+' '+e.m).toLowerCase().includes(q)))}
function vExercises(){const list=filtered();
  return `<div class="head"><div><h1>Exercise library</h1><p>${EX.length} exercises with form cues and video tutorials.</p></div><button class="btn" data-act="glossary">Glossary</button></div>
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
  <section><div class="section-title"><h2>Subscription</h2></div>
   <div class="panel list"><div class="row"><div class="lock-ic" style="width:42px;height:42px">${ICON.crown}</div><div class="grow"><div class="t">${isPro()?'RepForge Premium · '+(PRICES[u.sub.plan]?PRICES[u.sub.plan].name:'Complimentary'):'Free plan'}</div><div class="s">${isPro()?(u.sub.status==='cancelled'?'Cancelled · Premium until ':'Renews on ')+new Date(u.sub.until).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}):'Upgrade for the 12-week plan, projections, reports and more'}</div></div>
    ${isPro()?(u.sub.status==='cancelled'?'<button class="btn sm primary" data-act="sub-resume">Resume</button>':(PRICES[u.sub.plan]?'<button class="btn sm" data-act="sub-cancel">Cancel</button>':'')):'<button class="btn sm primary" data-act="go" data-v="premium">Upgrade</button>'}</div>
    ${(u.tx||[]).slice().reverse().map(t=>`<button class="row click" data-act="my-rcpt" data-id="${t.id}"><div class="grow"><div class="t">${PRICES[t.plan]?'Premium · '+PRICES[t.plan].name:'Complimentary Premium'}</div><div class="s">${t.id} · ${new Date(t.t).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}${t.status==='refunded'?' · Refunded':''}</div></div><b class="num">${peso(t.amount)}</b><span class="muted">Receipt ›</span></button>`).join('')}</div></section>
  <section><div class="section-title"><h2>App color</h2><small>${isPro()?'Premium':'Premium feature'}</small></div>
   <div class="panel blk-panel" style="padding:16px 18px"><div class="swatches">${Object.entries(ACCENTS).map(([k,a])=>`<button class="swatch" data-act="accent" data-k="${k}" aria-pressed="${curAccent()===k}"><i style="background:${a.c}">${!isPro()&&k!=='forge'?ICON.lock:''}</i>${a.name}</button>`).join('')}</div></div></section>
  <section><div class="panel list"><button class="row click" data-act="glossary"><div class="ava">Aa</div><div class="grow"><div class="t">Glossary</div><div class="s">${GLOSS.length} training and nutrition terms explained</div></div><span class="muted">›</span></button></div></section>
  <section><div class="section-title"><h2>About you</h2></div>
  <div class="panel list"><div class="row"><div class="grow"><div class="s">Gender</div><div class="t">${GENDER[u.gender]||'Not set'}</div></div><div class="grow"><div class="s">Birthday</div><div class="t">${u.dob?new Date(u.dob+'T00:00:00').toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}):'Not set'}</div></div><div class="grow"><div class="s">Age</div><div class="t">${u.dob?ageOf(u.dob):'—'}</div></div></div></div></section>
  <section><div class="section-title"><h2>${gl(data.profile).length>1?'Goals':'Goal'}</h2></div>
  <div class="panel list"><div class="row"><div class="ava" style="background:var(--green);color:var(--on-green);border-color:var(--green)">${GI[data.profile.goal].replace('<svg','<svg width="22" height="22"')}</div><div class="grow"><div class="t" style="white-space:normal">${goalNames(data.profile)}</div><div class="s">${LEVELS[data.profile.level].name} · ${data.profile.days} days a week${data.profile.bw?' · '+data.profile.bw+' kg':''}</div></div><button class="btn sm" data-act="change-goal">Change goal</button></div></div></section>
  <section><div class="section-title"><h2>Best lifts</h2><small>heaviest completed set</small></div>
  <div class="panel list">${(()=>{const l=EX.filter(e=>!e.u).map(e=>[e,bestKg(e.id)]).filter(a=>a[1]).sort((a,b)=>b[1]-a[1]).slice(0,6);return l.length?l.map(([e,b])=>`<div class="row"><div class="ava">${initials(e.name)}</div><div class="grow"><div class="t">${esc(e.name)}</div><div class="s">${e.m}</div></div><div class="num" style="font-weight:800">${b} kg</div></div>`).join(''):'<div class="empty"><b>No lifts yet</b>Your heaviest sets will be listed here.</div>'})()}</div></section>
  <div style="display:flex;gap:10px;flex-wrap:wrap"><label class="btn sm" for="rest-sel">Rest timer <select id="rest-sel" style="border:0;background:none;font-weight:700">${[60,90,120,180].map(s=>`<option value="${s}" ${ui.restTotal===s?'selected':''}>${s}s</option>`).join('')}</select></label><button class="btn sm danger" data-act="logout">Log out</button></div>`;
}
function vLog(){const a=data.active;if(!a){ui.view='workout';return vWorkout()}
  return `<div class="log-head"><div style="flex:1;min-width:200px">${a.plan?`<span class="plan-badge" style="margin-bottom:6px">Block ${a.plan.blockNo||1} · Week ${a.plan.week}${a.plan.day?' · Day '+a.plan.day:''}</span>`:''}<input class="log-name" id="log-name" value="${esc(a.name)}" aria-label="Workout name"><div class="log-meta"><div>Duration<b class="num" data-elapsed>${clock(Date.now()-a.start)}</b></div><div>Volume<b class="num" id="log-vol">${kfmt(vol(a))} kg</b></div><div>Sets<b class="num" id="log-sets">${a.ex.reduce((n,x)=>n+x.sets.filter(s=>s.done).length,0)}</b></div></div></div>
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
function startWorkout(name,items,meta){
  const go=()=>{data.active={name,plan:meta||null,start:Date.now(),ex:items.map(([id,s,r,kg])=>{const prev=lastSets(id);return{id,sets:Array.from({length:s},(_,j)=>({kg:kg!=null&&kg!==''?kg:(prev[j]?prev[j].kg:''),reps:r,done:false}))}})};save();closeModal();ui.view='log';render();window.scrollTo(0,0)};
  if(data.active)confirmBox('Replace current workout?',`“${esc(data.active.name)}” is still in progress. Starting a new one discards it.`,'Discard and start',go);else go()}
function updateLogStats(){const a=data.active;if(!a)return;const v=$('#log-vol'),s=$('#log-sets');if(v)v.textContent=kfmt(vol(a))+' kg';if(s)s.textContent=a.ex.reduce((n,x)=>n+x.sets.filter(z=>z.done).length,0)}
function finish(){const a=data.active;const ex=a.ex.map(x=>({id:x.id,sets:x.sets.filter(s=>s.done)})).filter(x=>x.sets.length);
  if(!ex.length){const e=$('#finish-err');e.textContent='Tick at least one completed set before finishing, or discard the workout.';e.hidden=false;e.scrollIntoView({block:'center'});return}
  const before=prCount();
  data.history.unshift({id:uid(),plan:a.plan||null,name:a.name.trim()||'Workout',start:a.start,end:Date.now(),ex});data.active=null;save();stopRest();
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
  go:b=>{closeModal();if(b.dataset.v==='premium'&&ui.view!=='checkout')ui.proReason=null;ui.view=b.dataset.v;render();window.scrollTo(0,0)},
  logout:signOut,close:closeModal,
  'confirm-yes':()=>{const f=modalCb;closeModal();f&&f()},
  muscle:b=>{ui.muscle=b.dataset.m;render()},
  'ex-detail':b=>exDetail(b.dataset.id),
  preview:b=>preview(b.dataset.id),
  'save-tpl':b=>{if(!isPro()&&data.routines.length>=FREE_ROUTINES)return needPro('Unlimited custom routines');const t=TPL.find(x=>x.id===b.dataset.id);data.routines.unshift(mkRoutine(t));save();closeModal();render();toast(`“${t.name}” added to My routines`)},
  'del-routine':b=>{const r=data.routines.find(x=>x.id===b.dataset.id);confirmBox('Delete routine?',`“${esc(r.name)}” will be removed. Your logged workouts stay in History.`,'Delete',()=>{data.routines=data.routines.filter(x=>x!==r);save();render();toast('Routine deleted')})},
  'del-hist':b=>confirmBox('Delete workout?','This removes it from your history and stats.','Delete',()=>{data.history=data.history.filter(x=>x.id!==b.dataset.id);save();render();toast('Workout deleted')}),
  'new-routine':()=>{if(!isPro()&&data.routines.length>=FREE_ROUTINES)return needPro('Unlimited custom routines');builder()},
  'change-goal':()=>showOnboard(true),
  'pw-sel':b=>{ui.pw=+b.dataset.w;render()},
  'pday':b=>{ui.pday=+b.dataset.d;render()},
  'day-step':b=>{const td=tdaysOf(),dir=+b.dataset.dir,sel=ui.pw&&ui.pw<=12?ui.pw:Math.min(Math.max(curWeek(),1),12);let k=td.indexOf(ui.pday)+dir,w=sel;
    if(k<0){if(w===1)return;w--;k=td.length-1}else if(k>=td.length){if(w===12)return;w++;k=0}ui.pw=w;ui.pday=td[k];render()},
  'days-edit':editDays,
  'dm-wday':b=>{const d=+b.dataset.d,w=ui.tmpW,i=w.indexOf(d);i>=0?w.splice(i,1):w.push(d);w.sort((a,b)=>a-b);drawDays()},
  'days-save':()=>{const w=ui.tmpW;if(w.length<2||w.length>6)return;data.profile.wdays=[...w];data.profile.days=w.length;ui.pday=null;save();closeModal();render();toast('Training days updated')},
  'ob-wday':b=>{const d=+b.dataset.d,w=ob.p.wdays,i=w.indexOf(d);i>=0?w.splice(i,1):w.push(d);w.sort((a,b)=>a-b);drawOnboard()},
  'start-week-day':()=>{if(!following()&&!isPro())return needPro('The 12-week plan');startWeekDay()},
  term:b=>termModal(b.dataset.k),
  glossary:()=>{closeModal();if(ui.view!=='glossary')ui.glBack=ui.view==='log'?'workout':ui.view;ui.view='glossary';render();window.scrollTo(0,0)},
  'gl-cat':b=>{ui.gc=b.dataset.c;render()},
  'pl-sel':b=>{ui.pl=b.dataset.id;render()},
  'goal-add':()=>addGoal('lift'),'goal-type':b=>addGoal(b.dataset.t),'goal-save':b=>goalSave(b.dataset.t),
  'goal-del':b=>confirmBox('Delete goal?','This removes the goal. Your logged workouts are not affected.','Delete',()=>{data.liftGoals=data.liftGoals.filter(g=>g.id!==b.dataset.id);save();render()}),
  'bw-del':()=>confirmBox('Delete bodyweight goal?','Your weigh-ins stay saved.','Delete',()=>{data.bwGoal=null;save();render()}),
  'plan-start':startPlanDay,
  'go-premium':b=>{ui.proReason=b.dataset.r;ui.view='premium';render();window.scrollTo(0,0)},
  bill:b=>{ui.bill=b.dataset.b;render()},
  pm:b=>{ui.pm=b.dataset.m;render()},
  'co-test':()=>{ui.pm='card';Object.assign(ui.co=ui.co||{},{'co-name':users[me].name,'co-card':'4242 4242 4242 4242','co-exp':'12/29','co-cvc':'123'});render()},
  promo:()=>{if(ui.promo){ui.promo=null;ui.promoMsg='';(ui.co||{})['co-promo']='';render();return}const c=($('#co-promo').value||'').trim().toUpperCase();
    if(PROMOS[c]){ui.promo=c;ui.promoOk=true;ui.promoMsg=PROMOS[c].label+' applied.'}else{ui.promoOk=false;ui.promoMsg=c?`“${c}” isn't a valid promo code.`:'Enter a promo code first.'}render()},
  pay,
  'my-rcpt':b=>{const u=users[me];rcptModal(u,u.tx.find(t=>t.id===b.dataset.id),me)},
  'sub-cancel':()=>confirmBox('Cancel Premium?',`You'll keep Premium until ${new Date(users[me].sub.until).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'})}. After that your account moves to Free. Your data stays.`,'Cancel subscription',()=>{users[me].sub.status='cancelled';save();render();toast('Subscription cancelled')}),
  'sub-resume':()=>{users[me].sub.status='active';save();render();toast('Subscription resumed')},
  accent:b=>{if(b.dataset.k!=='forge'&&!isPro())return needPro('Custom app colors');data.accent=b.dataset.k;save();render();toast(ACCENTS[b.dataset.k].name+' color applied')},
  rm:b=>{ui.rm=+b.dataset.o;render()},
  'a-filter':b=>{ui.af=b.dataset.f;renderAdmin()},'a-tfilter':b=>{ui.tf=b.dataset.f;renderAdmin()},
  'a-user':b=>aUserModal(b.dataset.em),
  'a-rcpt':b=>{const t=allTx().find(x=>x.id===b.dataset.id);if(t)rcptModal(t.u,t,t.em)},
  'a-grant':b=>{const u=users[b.dataset.em],t=Date.now(),base=isProU(u)?u.sub.until:t,id='RF-'+new Date(t).getFullYear()+'-'+String(100000+Math.floor(Math.random()*899999));
    u.tx=(u.tx||[]).concat({id,t,plan:'comp',base:0,discount:0,promo:null,amount:0,method:'comp',detail:'Granted by admin',status:'paid',from:t,to:addMonths(base,1)});u.sub={plan:'comp',status:'active',since:t,until:addMonths(base,1),tx:id};aSave('1 month of Premium granted')},
  'a-revoke':b=>{const u=users[b.dataset.em];confirmBox('Revoke Premium?',`${esc(u.name)} moves to the Free plan right away. Payments are not refunded.`,'Revoke',()=>{u.sub.status='revoked';u.sub.until=Date.now();aSave('Premium revoked')})},
  'a-toggle':b=>{const u=users[b.dataset.em];u.disabled=!u.disabled;aSave(u.disabled?'Account disabled':'Account enabled')},
  'a-del':b=>{const em=b.dataset.em,u=users[em];confirmBox('Delete this user?',`${esc(u.name)} and all their workouts, routines and payment records will be permanently removed from this browser.`,'Delete user',()=>{delete users[em];aSave('User deleted')})},
  'a-refund':b=>{const t=allTx().find(x=>x.id===b.dataset.id);confirmBox('Refund this payment?',`${peso(t.amount)} will be refunded to ${esc(t.u.name)} (${esc(t.detail)}). If it paid for their current subscription, Premium ends now.`,'Refund',()=>{const r=t.u.tx.find(x=>x.id===t.id);r.status='refunded';if(t.u.sub&&t.u.sub.tx===t.id){t.u.sub.status='refunded';t.u.sub.until=Date.now()}aSave('Payment refunded')})},
  'a-reseed':()=>confirmBox('Reset sample data?','Sample accounts and their payments are removed and recreated. Real accounts made in this browser are not touched.','Reset',()=>{Object.keys(users).forEach(k=>{if(users[k].sample)delete users[k]});seedSample();aSave('Sample data reset')}),
  'plan-follow':()=>{if(!isPro()){ui.pendingPlan=true;return needPro('The 12-week plan')}const B=BLOCKS[blockType(data.profile)];confirmBox('Follow the 12-week plan?',`Week 1 starts this week. RepForge will set your sets, reps and weights every week in a ${B.name.toLowerCase()} built around your goal (${esc(goalNames(data.profile))}). You can stop any time.`,'Start the plan',()=>{ensureProgress();data.program={start:weekStart(Date.now()),active:true,block:(data.program&&data.program.block||0)+1};ui.pw=null;ui.pday=null;save();render();toast('You\'re now following the 12-week plan')})},
  'plan-stop':()=>confirmBox('Stop following the plan?','Your logs, maxes and goals stay saved. You can start a new plan any time.','Stop plan',()=>{data.program.active=false;ui.pw=null;save();render();toast('Plan stopped')}),
  'block-restart':()=>confirmBox(curWeek()>12?'Start the next block?':'Restart your block?','Week 1 starts this week. Your logs, maxes and goals stay the same.',curWeek()>12?'Start next block':'Restart',()=>{const nb=blockNo()+(curWeek()>12?1:0);data.program={start:weekStart(Date.now()),active:true,block:nb};ui.pw=null;ui.pday=null;save();render();toast(`Block ${nb} started`)}),
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
  if(t.id&&t.id.startsWith('co-')){let v=t.value;if(t.id==='co-card'){v=v.replace(/\D/g,'').slice(0,16).replace(/(.{4})(?=.)/g,'$1 ');t.value=v}
    if(t.id==='co-exp'){v=v.replace(/\D/g,'').slice(0,4);if(v.length>2)v=v.slice(0,2)+'/'+v.slice(2);t.value=v}if(t.id==='co-cvc'||t.id==='co-mobile'){v=v.replace(/\D/g,'');t.value=v}
    (ui.co=ui.co||{})[t.id]=v;const e=$('#co-err');if(e)e.hidden=true;return}
  if(t.id==='a-search'){ui.aq=t.value;renderAdmin();const g=$('#a-search');g.focus();g.setSelectionRange(g.value.length,g.value.length);return}
  if(t.id==='t-search'){ui.tq=t.value;renderAdmin();const g=$('#t-search');g.focus();g.setSelectionRange(g.value.length,g.value.length);return}
  if(t.id==='gl-search'){ui.gq=t.value;render();const g=$('#gl-search');g.focus();g.setSelectionRange(g.value.length,g.value.length);return}
  if(t.id==='ex-search'){ui.q=t.value;ui.focusSearch=true;render();return}
  if(t.id==='log-name'&&data.active){data.active.name=t.value;save();return}
  if(t.dataset.f&&data.active){const s=data.active.ex[+t.dataset.i].sets[+t.dataset.j];s[t.dataset.f]=t.value.replace(/[^\d.]/g,'');save();updateLogStats()}});
document.addEventListener('submit',e=>{if(e.target.dataset.form==='weighin'){e.preventDefault();const kg=parseFloat($('#wi-kg').value);if(!(kg>=30&&kg<=300)){toast('Enter a weight between 30 and 300 kg');return}
  data.weighins.push({t:Date.now(),kg});data.profile.bw=kg;save();render();toast('Weight logged')}});
document.addEventListener('change',e=>{if(e.target.id==='co-wallet')(ui.co=ui.co||{})['co-wallet']=e.target.value;if(e.target.id==='g-ex')goalHint();if(e.target.id==='rest-sel'){ui.restTotal=+e.target.value;toast(`Rest timer set to ${ui.restTotal}s`)}});

/* ---------------- Boot ---------------- */
(async()=>{await ensureAdmin();const s=store.get('rf_session');if(s&&users[s]&&!users[s].disabled){users[s].role==='admin'?enterAdmin(s):signIn(s)}})();
