/* ============================================================
   AKADEMY — Calculations tab (batch 1: Unit 3)
   Every card has ONE build(v) function. It makes the worked example
   (fixed values) AND the "Your turn" question (random values), so the
   numbers shown can never disagree with the method.
   Red  = formula / scenario taken word for word from Mr. Akram's OneNote.
   Grey = written by Claude.
   ============================================================ */
(function(){
"use strict";
function R(a,b,step){step=step||1;var n=Math.floor((b-a)/step);return a+step*Math.floor(Math.random()*(n+1));}
function f(x,d){d=d||0;var s=Math.abs(x).toLocaleString('en-GB',{minimumFractionDigits:d,maximumFractionDigits:d});return (x<0?'−':'')+s;}
function r1(x){return Math.round(x*10)/10;}
function r2(x){return Math.round(x*100)/100;}
function sum(a){return a.reduce(function(p,c){return p+c;},0);}
function gbp(x,d){return (x<0?'−':'')+'£'+f(Math.abs(x),d||0);}
function gbpm(x,d){return (x<0?'−':'')+'£'+f(Math.abs(x),d||0)+'m';}

/* ---------- shared maths helpers ---------- */
function payback(init,flows){var cum=-init,cums=[];for(var i=0;i<flows.length;i++){var prev=cum;cum+=flows[i];cums.push(cum);
  if(prev<0&&cum>=0){var m=Math.round(-prev/flows[i]*12),y=i;if(m>=12){y++;m=0;}return {years:y,months:m,total:y*12+m,cums:cums,left:-prev,flow:flows[i],yr:i+1};}}return null;}
var DF=[1,0.909,0.826,0.751,0.683,0.621];
var CPA_PRED={A:[],B:['A'],C:['B'],D:['C'],E:['C'],F:['D'],G:['F']};
var CPA_ORDER=['A','B','C','D','E','F','G'];
function cpa(dur){var est={},ef={},lft={},fl={},k,i,end=0;
  CPA_ORDER.forEach(function(a){var p=CPA_PRED[a];est[a]=p.length?Math.max.apply(null,p.map(function(x){return ef[x];})):0;ef[a]=est[a]+dur[a];end=Math.max(end,ef[a]);});
  var succ={};CPA_ORDER.forEach(function(a){succ[a]=[];});CPA_ORDER.forEach(function(a){CPA_PRED[a].forEach(function(p){succ[p].push(a);});});
  for(i=CPA_ORDER.length-1;i>=0;i--){var a=CPA_ORDER[i];lft[a]=succ[a].length?Math.min.apply(null,succ[a].map(function(s){return lft[s]-dur[s];})):end;fl[a]=lft[a]-dur[a]-est[a];}
  return {est:est,ef:ef,lft:lft,fl:fl,end:end,succ:succ};}
function cpaTable(dur,c,withFloat){var head=['Activity','Duration','Comes after','EST','LFT'].concat(withFloat?['Total float (LFT − Duration − EST)','Critical?']:[]);
  var rows=CPA_ORDER.map(function(a){var r=[a,dur[a],CPA_PRED[a].join(', ')||'—',c.est[a],c.lft[a]];if(withFloat)r=r.concat([c.lft[a]+' − '+dur[a]+' − '+c.est[a]+' = '+c.fl[a],c.fl[a]===0?'Yes':'No']);return r;});return {head:head,rows:rows};}
function critPath(dur,c){return CPA_ORDER.filter(function(a){return c.fl[a]===0;}).join(' → ');}
function ev(o){return o.ps*o.so+o.pf*o.fo;}
function moneyEV(x){return gbp(x);}
function neg(x){return x<0?'−'+gbp(-x):gbp(x);}

/* ---------- the cards ---------- */
var C={};

/* ===== 3.3.3.1 Quantitative sales forecasting ===== */
C['3.3.3.1']=[
{id:'ma3',title:'Three-period moving average',spec:'3.3.3.1 a',
 formula:[{s:'Moving Average = Add up the total for the average required /number of years',red:1}],
 when:'The question gives a run of yearly sales and asks you to smooth them, find the trend or find the variation from the trend.',
 steps:['Add up the first three figures and divide by 3. This is the trend for the <b>middle</b> year of the three.','Drop the first figure, add the next one, and repeat.','Variation = actual sales − trend for that year.','Average variation = add the variations up and divide by how many there are.'],
 vals:{y0:2016,s:[14,16,18,21,19,21,24]},
 rand:function(){var s=[],b=R(10,40);for(var i=0;i<7;i++){b+=R(0,4);s.push(b+R(-3,3));}return {y0:R(2015,2019),s:s};},
 build:function(v){var s=v.s,rows=[],tr=[],va=[],i;
  for(i=1;i<s.length-1;i++){var t=s[i-1]+s[i]+s[i+1],m=t/3;tr.push(m);va.push(s[i]-m);rows.push([String(v.y0+i),f(s[i],0),f(s[i-1],0)+' + '+f(s[i],0)+' + '+f(s[i+1],0)+' = '+f(t,0),f(m,2),f(s[i]-m,2)]);}
  var pick=R(0,tr.length-1),yr=v.y0+pick+1,avg=sum(va)/va.length;
  return {scn:'Sales (£m): '+s.map(function(x,j){return (v.y0+j)+': '+x;}).join(', ')+'.',
   head:['Year','Sales (£m)','3-year total','Trend (÷ 3)','Variation (actual − trend)'],rows:rows,
   post:['Average variation = ('+va.map(function(x){return x<0?'('+f(x,2)+')':f(x,2);}).join(' + ')+') \u00f7 '+va.length+' = '+f(avg,2)+'.'],
   answer:'The trend runs from £'+f(tr[0],2)+'m to £'+f(tr[tr.length-1],2)+'m.',
   ask:'Using the sales figures above, what is the three-year moving average (trend) for '+yr+'? Give £m to 2 decimal places.',
   ask_scn:'Sales (£m): '+s.map(function(x,j){return (v.y0+j)+': '+x;}).join(', ')+'.',key:tr[pick],tol:0.011,unit:'£m',
   interp:'The trend rises by about £'+f((tr[tr.length-1]-tr[0])/(tr.length-1),2)+'m a year, so sales are growing steadily. The average variation is '+f(avg,2)+', close to zero, which is what a good trend should give. The trend is only a guide to the future: it assumes past growth continues.'};},
 mistakes:['Plotting or labelling the average against the first year instead of the <b>middle</b> year.','Dividing by the number of years in the whole data set instead of by 3.','Forgetting the sign of the variation (actual − trend, so a negative means below trend).'],
 decide:[{q:'Sales have grown steadily for five years. A manager wants to use the trend to set next year’s stock order. How far should she trust it, and what else should she check first?',hint:'Link to the data: the trend assumes the same growth. Challenge it: external changes (competitors, economy, fashion), only seven data points. Judgement: use it as a starting point and adjust for known changes.'},
        {q:'The average variation is close to zero. Does that mean the forecast will be accurate? Justify your view.',hint:'A small average hides large swings that cancel out. Look at the size of individual variations. A forecast is only as good as the assumption that the pattern repeats.'}],
 src:{formula:'akram',example:'akram',note:'Formula and the 2016–2022 sales data: your OneNote “(3) Quantitative sales forecasting (Three Period Moving Average)”. Working by Claude.'}},

{id:'ma4',title:'Four-quarter centred moving average',spec:'3.3.3.1 a',
 formula:[{s:'Moving Average = Add up the total for the average required /number of years',red:1},{s:'Four-quarter average is centred: add two consecutive four-quarter totals, then ÷ 8. Variation = actual − centred average.',red:0}],
 when:'Quarterly sales data with seasonal ups and downs. A four-quarter average has no middle quarter, so it must be centred.',
 steps:['Add four quarters at a time to get a four-quarter total.','Add each pair of neighbouring four-quarter totals to get an eight-quarter total.','Divide the eight-quarter total by 8. This is the centred trend, and it lines up with a real quarter.','Variation = actual sales − centred trend. Average the variations for the same quarter (all the Q1s, and so on) to see the seasonal pattern.'],
 vals:{q:[400,500,770,900,600,700,1100,1500,600,800,1200,1400]},
 rand:function(){var q=[],b=R(300,700,10),sea=[-150,-80,120,110];for(var i=0;i<12;i++){q.push(Math.max(50,Math.round((b+i*R(15,40)+sea[i%4]+R(-40,40))/10)*10));}return {q:q};},
 build:function(v){var q=v.q,i,lab=function(i){return (2018+Math.floor(i/4))+' Q'+(i%4+1);},four=[],rows=[],cen=[];
  for(i=0;i<=8;i++)four.push(q[i]+q[i+1]+q[i+2]+q[i+3]);
  for(i=0;i<8;i++){var e=four[i]+four[i+1],c=e/8;cen.push(c);rows.push([lab(i+2),f(q[i+2]),f(four[i])+' + '+f(four[i+1]),f(e),f(c,2),f(q[i+2]-c,2)]);}
  var pick=R(0,7);
  return {scn:'Quarterly sales (units), 2018 Q1 to 2020 Q4: '+q.map(function(x){return f(x);}).join(', ')+'.',
   head:['Quarter','Sales','Two four-quarter totals','Eight-quarter total','Centred average (÷ 8)','Variation (actual − trend)'],rows:rows,
   post:['The first centred figure belongs to 2018 Q3, because it sits in the middle of eight quarters.'],
   answer:'Trend runs from '+f(cen[0],2)+' to '+f(cen[7],2)+' units.',
   ask:'Using the quarterly sales above, what is the centred four-quarter moving average for '+lab(pick+2)+'? Give your answer to 2 decimal places.',
   ask_scn:'Quarterly sales (units), 2018 Q1 to 2020 Q4: '+q.map(function(x){return f(x);}).join(', ')+'.',key:cen[pick],tol:0.011,unit:'units',
   interp:'The trend rises from '+f(cen[0],2)+' to '+f(cen[7],2)+' units, so underlying demand is growing. Variations are positive in the busy quarters and negative in the quiet ones, so the business is seasonal and should plan stock and staff by quarter, not by year.'};},
 mistakes:['Using a plain four-quarter average and plotting it between two quarters. It must be centred.','Dividing the eight-quarter total by 4 instead of 8.','Averaging the variations of different quarters together. Seasonal variation uses the same quarter each year.'],
 decide:[{q:'Q3 and Q4 are always above trend. How should the business use this when it plans staffing, stock and cash flow for next year?',hint:'Use the seasonal pattern: hire temporary staff and build stock before the peak, plan cash for the stock build-up. Evaluate: only two cycles of data, so the pattern may be unreliable.'},
        {q:'Underlying demand is rising. Should the business expand capacity now? What else would you need to know?',hint:'Trend growth supports expansion, but a decision needs more: how long growth will last, cost and payback of expansion, competitor moves. Make a clear recommendation.'}],
 src:{formula:'akram',example:'akram',note:'Formula and the 12-quarter sales data: your OneNote “(4) Quantitative sales forecasting (Four Quarter Moving Average)”. Centring steps and working by Claude.'}}
];

/* ===== 3.3.3.2 Investment appraisal ===== */
C['3.3.3.2']=[
{id:'payback',title:'Payback period',spec:'3.3.3.2 a',
 formula:[{s:'Payback period = [Income required (in payback year) / Contribution per month]',red:1}],
 when:'You are asked how long a project takes to earn back its initial cost, or which of two projects recovers its money sooner.',
 steps:['Write the initial cost as a negative in Year 0.','Add each year’s net cash flow to get the cumulative cash flow.','Find the year when the cumulative figure turns positive. Payback is in that year.','Months = amount still to recover at the start of that year ÷ that year’s cash flow × 12. Round to the nearest month.'],
 vals:{init:135,flows:[50,45,35,25,20]},
 rand:function(){for(var k=0;k<200;k++){var init=R(100,200,5),fl=[],j;var up=Math.random()<0.5,b=R(20,50,5);for(j=0;j<5;j++){fl.push(Math.max(5,b+(up?1:-1)*j*R(3,10,1)));}
   var p=payback(init,fl);if(p&&p.months>0&&p.years>=2)return {init:init,flows:fl};}return {init:135,flows:[50,45,35,25,20]};},
 build:function(v){var p=payback(v.init,v.flows),rows=[['0',gbpm(-v.init),gbpm(-v.init)]],i,cum=-v.init;for(i=0;i<v.flows.length;i++){cum+=v.flows[i];rows.push([String(i+1),gbpm(v.flows[i]),gbpm(cum)]);}
  var yrs=p.yr-1;
  return {scn:'A project costs '+gbpm(v.init)+'. Net cash flows: '+v.flows.map(function(x,j){return 'Year '+(j+1)+': '+gbpm(x);}).join(', ')+'.',
   head:['Year','Net cash flow','Cumulative cash flow'],rows:rows,
   post:['After Year '+yrs+', '+gbpm(p.left)+' is still to recover. '+gbpm(p.left)+' ÷ '+gbpm(p.flow)+' × 12 = '+f(p.left/p.flow*12,1)+' months, so payback = <b>'+p.years+' years '+p.months+' months</b>.'],
   answer:p.years+' years '+p.months+' months',
   ask:'A project costs '+gbpm(v.init)+'. Net cash flows are '+v.flows.map(function(x,j){return 'Year '+(j+1)+': '+gbpm(x);}).join(', ')+'. What is the payback period in <b>months</b> (years × 12 plus months, nearest month)?',
   key:p.total,tol:0.01,unit:'months',
   interp:'Cash is at risk for '+p.years+' years '+p.months+' months. A shorter payback means less risk and better liquidity, but payback ignores cash flows after the payback year and the time value of money.'};},
 mistakes:['Using the whole year’s cash flow instead of the cash flow of the payback year.','Forgetting to multiply by 12 for months.','Treating payback as a profit measure. It is a time measure.'],
 decide:[{q:'Project A pays back 5 months sooner than Project B, but B has twice the total net return. Which would you recommend and why?',hint:'Payback favours A (less risk, faster cash). Total return favours B. A strong answer weighs risk against reward, and says what would change the choice (e.g. a cash shortage favours A).'},
        {q:'A firm is short of cash and has high borrowing costs. How useful is payback to it compared with ARR or NPV?',hint:'Payback is simple and focuses on liquidity, so useful when cash is tight. But it ignores later cash flows and the time value of money, so use it alongside NPV.'}],
 src:{formula:'akram',example:'akram',note:'Formula: your Unit 3 formulas sheet. Project A figures: your OneNote “Greggs Investment Appraisal” files (illustrative cash flows). Working by Claude.'}},

{id:'arr',title:'Average (accounting) rate of return (ARR)',spec:'3.3.3.2 b',
 formula:[{s:'ARR = [Total net average Return (income − cost/no of years) / Initial cost of invest] x 100',red:1}],
 when:'You are asked for the average yearly return on a project as a percentage of its cost, or to compare it with a target return.',
 steps:['Add up all the net cash inflows over the life of the project.','Subtract the initial cost to get the total net return.','Divide by the number of years to get the average annual return.','Divide by the initial cost and multiply by 100.'],
 vals:{init:120,flows:[20,30,40,50,60]},
 rand:function(){var init=R(80,200,5),n=5,tot=init+R(30,120,5),fl=[],i,left=tot;for(i=0;i<n-1;i++){var x=Math.round(tot/n/5)*5+R(-10,10,5);if(x<5)x=5;fl.push(x);left-=x;}fl.push(Math.max(5,left));return {init:init,flows:fl};},
 build:function(v){var inflow=sum(v.flows),net=inflow-v.init,n=v.flows.length,avg=net/n,arr=avg/v.init*100;
  return {scn:'A project costs '+gbpm(v.init)+' and lasts '+n+' years. Net cash flows: '+v.flows.map(function(x,j){return 'Year '+(j+1)+': '+gbpm(x);}).join(', ')+'.',
   head:['Step','Working','Result'],rows:[['1. Total net cash inflows',v.flows.map(function(x){return f(x);}).join(' + '),gbpm(inflow)],['2. Total net return',f(inflow)+' − '+f(v.init),gbpm(net)],['3. Average annual return',gbpm(net)+' ÷ '+n,gbpm(avg,1)],['4. ARR',f(avg,1)+' ÷ '+f(v.init)+' × 100',f(arr,1)+'%']],
   post:[],answer:'ARR = '+f(arr,1)+'%',
   ask:'A project costs '+gbpm(v.init)+' and lasts '+n+' years. Net cash flows are '+v.flows.map(function(x,j){return 'Year '+(j+1)+': '+gbpm(x);}).join(', ')+'. What is the ARR? Give your answer as a % to 1 decimal place.',
   key:arr,tol:0.051,unit:'%',
   interp:'The project earns an average of '+f(arr,1)+'% a year on its cost. Compare this with the target return or the cost of borrowing. ARR uses all the years, but it ignores when the cash arrives.'};},
 mistakes:['Forgetting to subtract the initial cost before dividing by the number of years.','Dividing by the number of years but not by the initial cost.','Giving a £ figure when the question asks for a percentage.'],
 decide:[{q:'A project has an ARR of 13.3%. The firm’s target return is 16%. Should it go ahead? What else would you consider?',hint:'Below target on this measure, so on its own it fails. But consider NPV and payback, qualitative gains (capacity, jobs, strategy), risk of the cash-flow forecasts. Make a judgement.'},
        {q:'Why might two projects with the same ARR still not be equally attractive?',hint:'ARR ignores timing of cash flows. Earlier cash is worth more and can be reinvested. Link to payback and NPV.'}],
 src:{formula:'akram',example:'akram',note:'Formula: your Unit 3 formulas sheet. Project B figures: your OneNote “Greggs Investment Appraisal” files (illustrative cash flows). Working by Claude.'}},

{id:'npv',title:'Net present value (NPV)',spec:'3.3.3.2 c',
 formula:[{s:'NPV = [Cashflow x discount factor] = Present value',red:1},{s:'Add up all present value for each year − cost = NPV',red:1}],
 when:'You are given discount factors and asked whether a project adds value once the time value of money is allowed for.',
 steps:['Multiply each year’s net cash flow by its discount factor. This is the present value.','Add up the present values for all the years.','Subtract the initial cost. The result is the NPV.','Positive NPV: the project earns more than the required return. Negative: it does not.'],
 vals:{init:135,flows:[50,45,35,25,20]},
 rand:function(){var init=R(100,200,5),b=R(30,60,5),fl=[],j;for(j=0;j<5;j++)fl.push(Math.max(5,b+R(-15,10,5)-j*R(0,5,5)));return {init:init,flows:fl};},
 build:function(v){var pv=v.flows.map(function(x,i){return r2(x*DF[i+1]);}),tp=r2(sum(pv)),npv=r2(tp-v.init),rows=v.flows.map(function(x,i){return ['Year '+(i+1),gbpm(x),DF[i+1].toFixed(3),f(x)+' × '+DF[i+1].toFixed(3),gbpm(pv[i],2)];});
  return {scn:'A project costs '+gbpm(v.init)+'. Discount rate 10%. Net cash flows: '+v.flows.map(function(x,j){return 'Year '+(j+1)+': '+gbpm(x);}).join(', ')+'. Discount factors: '+[1,2,3,4,5].map(function(i){return 'Year '+i+' '+DF[i].toFixed(3);}).join(', ')+'.',
   head:['Year','Net cash flow','Discount factor (10%)','Working','Present value'],rows:rows,
   post:['Total present value = '+pv.map(function(x){return f(x,2);}).join(' + ')+' = '+gbpm(tp,2)+'.','NPV = '+f(tp,2)+' − '+f(v.init)+' = <b>'+gbpm(npv,2)+'</b>.'],
   answer:'NPV = '+gbpm(npv,2),
   ask:'A project costs '+gbpm(v.init)+'. Discount rate 10% (factors Year 1 to 5: 0.909, 0.826, 0.751, 0.683, 0.621). Net cash flows: '+v.flows.map(function(x,j){return 'Year '+(j+1)+': '+gbpm(x);}).join(', ')+'. Calculate the NPV in £m to 2 decimal places (round each present value to 2 decimal places first).',
   key:npv,tol:0.051,unit:'£m',
   interp:npv>=0?'The NPV is positive ('+gbpm(npv,2)+'), so the project is forecast to earn more than the 10% required return and adds value in today’s money.':'The NPV is negative ('+gbpm(npv,2)+'), so the project is forecast to earn less than the 10% required return and destroys value in today’s money.'};},
 mistakes:['Subtracting the initial cost from each year instead of once at the end.','Multiplying Year 0 by a discount factor. Year 0 is already in today’s money.','Using the wrong year’s discount factor.'],
 decide:[{q:'Project B has a higher NPV than Project A but pays back a year later. The firm is short of cash. Which would you recommend?',hint:'NPV favours B (more value). Payback favours A (liquidity and risk). Weigh up: can the firm survive the extra year? Recommend and state what would change your mind.'},
        {q:'The discount rate rises from 10% to 14%. What happens to NPV and why? Does it change your decision?',hint:'Higher rate means later cash is worth less, so NPV falls, especially for projects with late cash flows. Link to the project’s cash-flow timing and to the firm’s borrowing costs.'}],
 src:{formula:'akram',example:'akram',note:'Formula: your Unit 3 formulas sheet. Project A cash flows and 10% discount factors: your OneNote “Greggs Investment Appraisal” files (illustrative). Working by Claude.'}}
];

/* ===== 3.3.3.3 Decision trees ===== */
C['3.3.3.3']=[
{id:'ev',title:'Expected value and net gain',spec:'3.3.3.3 b',
 formula:[{s:'Chance Node (EV) - Probability x Value of decision',red:1},{s:'EV of node = Add up all EV’s',red:1},{s:'Decision Node (Decision) = EV − Cost (highest value is your decision)',red:1}],
 when:'You are given costs, probabilities and possible outcomes for two or more options and asked which to choose.',
 steps:['For each option, multiply each outcome by its probability.','Add the results to get the expected value (EV) of the option.','Subtract the cost of the option to get the net gain.','Choose the option with the highest net gain, then comment on the risk.'],
 vals:{o:[{n:'New product',c:60000,ps:0.6,so:150000,pf:0.4,fo:65000},{n:'Modify existing product',c:75000,ps:0.7,so:220000,pf:0.3,fo:-25000}]},
 rand:function(){var mk=function(n){var ps=R(4,8)/10;return {n:n,c:R(40,90,5)*1000,ps:ps,so:R(120,240,10)*1000,pf:Math.round((1-ps)*10)/10,fo:R(-30,70,5)*1000};};return {o:[mk('Option A'),mk('Option B')]};},
 build:function(v){var rows=[],best=-1e12,bn='',nets=[];v.o.forEach(function(o){var e=ev(o),net=e-o.c;nets.push(net);rows.push([o.n,'('+gbp(o.so)+' × '+o.ps+') + ('+neg(o.fo)+' × '+o.pf+')',gbp(e),gbp(o.c),neg(net)]);if(net>best){best=net;bn=o.n;}});
  var k=R(0,1),o=v.o[k];
  return {scn:'A firm chooses between two options. '+v.o.map(function(o){return o.n+': cost '+gbp(o.c)+'; success '+Math.round(o.ps*100)+'% gives '+gbp(o.so)+'; failure '+Math.round(o.pf*100)+'% gives '+neg(o.fo)+'.';}).join(' '),
   head:['Option','Expected value working','Expected value','Cost','Net gain (EV − cost)'],rows:rows,post:[],
   answer:'Choose '+bn+' (net gain '+neg(best)+').',
   ask:'Option '+(k?'B':'A')+': cost '+gbp(o.c)+'; success ('+Math.round(o.ps*100)+'%) gives '+gbp(o.so)+'; failure ('+Math.round(o.pf*100)+'%) gives '+neg(o.fo)+'. What is the net gain? Give £.',
   key:ev(o)-o.c,tol:1.01,unit:'£',
   interp:'On expected net gain, '+bn+' is better ('+neg(best)+' against '+neg(Math.min.apply(null,nets))+'). But expected value is an average. A single decision can end well above or below it, and the probabilities are only estimates.'};},
 mistakes:['Forgetting to subtract the cost of the option from the expected value.','Using percentages (60) instead of decimals (0.6) in the multiplication.','Dropping the minus sign on a negative outcome.'],
 decide:[{q:'Option 2 has the higher net gain, but it can lose money if it fails and Option 1 cannot. The firm has little cash. What would you recommend?',hint:'Numbers favour the higher net gain, but compare the downside risk against what the firm can afford to lose. Mention that probabilities are estimates. State a clear decision and the condition that would change it.'},
        {q:'How could the firm improve the reliability of the probabilities in this tree before committing £75,000?',hint:'Market research, a pilot or test market, past data on similar launches. Evaluate the cost and time against the value of better information.'}],
 src:{formula:'akram',example:'akram',note:'Formulas and the New product / Modify existing product data and answers (£116,000 and £146,500): your OneNote “Construct a decision tree”. Layout by Claude.'}}
];

/* ===== 3.3.3.4 Critical path analysis ===== */
var CPA0={A:2,B:4,C:2,D:3,E:1,F:3,G:1};
function cpaRand(){return {A:R(1,4),B:R(2,5),C:R(1,3),D:R(2,4),E:R(1,3),F:R(2,4),G:R(1,2)};}
var CPA_SCN=function(d){return 'Product launch project (months): A Conduct customer research '+d.A+'; B Design product concept '+d.B+' (after A); C Design and test prototype '+d.C+' (after B); D Develop and test production tooling '+d.D+' (after C); E Notify suppliers '+d.E+' (after C); F Commence production '+d.F+' (after D); G Conduct launch promotion '+d.G+' (after F). Activity E has nothing after it, so it must finish by the end of the project.';};
C['3.3.3.4']=[
{id:'cpa1',title:'Earliest start time (EST) and latest finish time (LFT)',spec:'3.3.3.4 c',
 formula:[{s:'EST = the earliest an activity can start = the largest earliest finish of the activities before it',red:0},{s:'LFT = the latest an activity can finish without delaying the project = the smallest (LFT − duration) of the activities after it',red:0}],
 when:'You are given activities, durations and what must come first, and asked for the project time or for EST and LFT.',
 steps:['<b>Forward pass</b> (left to right): EST of the first activity is 0. EST of each later activity = largest EST + duration of the activities before it.','The project duration is the biggest finish time at the end of the network.','<b>Backward pass</b> (right to left): LFT of the last activity = project duration.','LFT of an earlier activity = smallest (LFT − duration) of the activities that follow it.'],
 vals:{d:CPA0},rand:function(){return {d:cpaRand()};},
 build:function(v){var d=v.d,c=cpa(d),t=cpaTable(d,c,false),acts=CPA_ORDER.filter(function(a){return a!=='G';}),a=acts[R(0,acts.length-1)];
  return {scn:CPA_SCN(d),head:t.head,rows:t.rows,post:['Project duration = '+c.end+' months (the largest finish time at the end of the network).'],
   answer:'Project duration = '+c.end+' months.',
   ask:'What is the latest finish time (LFT) of activity '+a+'? Give your answer in months.',ask_scn:CPA_SCN(d),key:c.lft[a],tol:0.01,unit:'months',
   interp:'The earliest the project can finish is month '+c.end+'. Any activity that cannot start earlier or finish later without changing that date is critical.'};},
 mistakes:['Adding up every duration instead of following the paths. Activities that run side by side do not add.','On the backward pass, taking the largest figure instead of the smallest when an activity has two followers.','Forgetting that an activity with nothing after it must finish by the end of the project.'],
 decide:[{q:'The project must be ready in 12 months but the network shows a longer duration. Which activities should the manager look at first, and what could she do?',hint:'Focus on the critical path only. Options: add resources, run activities in parallel, cut scope. Weigh cost against the value of finishing on time.'},
        {q:'A supplier says activity D will take an extra month. Does the launch date change? Explain.',hint:'Check total float of D. If D is critical, the whole project slips by a month. If not, compare the delay with its float.'}],
 src:{formula:'ai',example:'akram',note:'Activities, order and durations: your OneNote “(4) Critical Path Analysis”. The EST/LFT rules and working are written by Claude (your formula sheet gives only total float).'}},

{id:'cpa2',title:'Total float and the critical path',spec:'3.3.3.4 c',
 formula:[{s:'Total Float = LFT − Duration − EST',red:1}],
 when:'You are asked how long an activity can be delayed without delaying the project, or which activities are critical.',
 steps:['Complete the EST and LFT for every activity first.','For each activity: total float = LFT − duration − EST.','Activities with a total float of 0 are critical. They make up the critical path.','An activity with float can be delayed by up to that many months without delaying the project.'],
 vals:{d:CPA0},rand:function(){return {d:cpaRand()};},
 build:function(v){var d=v.d,c=cpa(d),t=cpaTable(d,c,true),a=CPA_ORDER[R(0,CPA_ORDER.length-1)];
  return {scn:CPA_SCN(d),head:t.head,rows:t.rows,post:['Critical path (float = 0): '+critPath(d,c)+'. Project duration = '+c.end+' months.'],
   answer:'Critical path '+critPath(d,c)+'.',
   ask:'What is the total float of activity '+a+'? Give your answer in months.',ask_scn:CPA_SCN(d),key:c.fl[a],tol:0.01,unit:'months',
   interp:'The critical path is '+critPath(d,c)+', so any delay to these activities delays the whole project by the same amount. Activities with float give the manager flexibility to move resources.'};},
 mistakes:['Using the finish time of the activity instead of LFT − duration − EST.','Saying an activity with float cannot be late. It can, up to its float.','Forgetting that total float is shared along a path, so using it on one activity can remove it from the next.'],
 decide:[{q:'Activity E has float. A manager wants to move two of its workers onto a critical activity. Is this a good idea?',hint:'Yes if E stays within its float and the move shortens a critical activity. Check the risks: E may become critical, skills may not transfer. Make a recommendation.'},
        {q:'The critical path is vital for planning, but what are the limits of critical path analysis for a new product launch?',hint:'It relies on accurate duration estimates and ignores resource limits and cost. Delays and changes in the market can change the critical path. Evaluate how useful it is anyway.'}],
 src:{formula:'akram',example:'akram',note:'Total float formula: your Unit 3 formulas sheet. Activities, order and durations: your OneNote “(4) Critical Path Analysis”. Working by Claude.'}}
];

/* ===== 3.3.3.5 Contribution ===== */
C['3.3.3.5']=[
{id:'contrib',title:'Contribution and profit',spec:'3.3.3.5 b',
 formula:[{s:'Contribution = Selling price − Variable costs',red:1},{s:'Profit = Total contribution − Fixed costs',red:1}],
 when:'You are asked how much each unit adds towards fixed costs, or for the profit from a product when you know the fixed costs.',
 steps:['Contribution per unit = selling price per unit − variable cost per unit.','Total contribution = contribution per unit × units sold.','Profit = total contribution − fixed costs.'],
 vals:{p:30,vc:18,u:15000,fc:116000},
 rand:function(){var p=R(20,60),vc=p-R(6,14);return {p:p,vc:vc,u:R(8,20,500)*1,fc:R(60,160,2)*1000};},
 build:function(v){var c=v.p-v.vc,tc=c*v.u,pr=tc-v.fc;
  return {scn:'A business sells one product. Selling price per unit '+gbp(v.p)+'; variable cost per unit '+gbp(v.vc)+'; units sold '+f(v.u)+'; fixed costs '+gbp(v.fc)+'.',
   head:['Step','Working','Result'],rows:[['Contribution per unit',gbp(v.p)+' − '+gbp(v.vc),gbp(c)],['Total contribution',gbp(c)+' × '+f(v.u),gbp(tc)],['Profit',gbp(tc)+' − '+gbp(v.fc),neg(pr)]],post:[],
   answer:'Profit = '+neg(pr),
   ask:'Selling price per unit '+gbp(v.p)+'; variable cost per unit '+gbp(v.vc)+'; units sold '+f(v.u)+'; fixed costs '+gbp(v.fc)+'. What is the profit? Give £.',key:pr,tol:1.01,unit:'£',
   interp:'Each unit contributes '+gbp(c)+' towards fixed costs. '+(pr>=0?'Total contribution covers the fixed costs with '+gbp(pr)+' left as profit.':'Total contribution does not cover the fixed costs, so the business makes a loss of '+gbp(-pr)+'.')};},
 mistakes:['Subtracting fixed costs per unit when calculating contribution. Only <b>variable</b> costs come off.','Forgetting to multiply by the number of units for total contribution.','Calling contribution “profit”. Fixed costs still have to be covered.'],
 decide:[{q:'A supermarket stocks many products with different contributions. Why does it use contribution to decide which products to keep, and what else should it consider?',hint:'Contribution shows which products add most towards fixed costs, per unit or per shelf space. Also consider customer loyalty, products bought together, and shelf space limits.'},
        {q:'A product has a positive contribution but the business makes a loss overall. Should it stop selling it? Justify your answer.',hint:'Positive contribution still helps cover fixed costs, so dropping it can make things worse in the short term. Consider whether fixed costs could be cut and whether the capacity could earn more.'}],
 src:{formula:'akram',example:'akram',note:'Formulas and the £30 / £18 / 15,000 units / £116,000 example: your OneNote “(5) Contribution”. Working by Claude.'}},

{id:'special',title:'Special order decision',spec:'3.3.3.5 b',
 formula:[{s:'Contribution = Selling price − Variable costs',red:1},{s:'Accept a special order if its contribution per unit is positive and there is spare capacity (fixed costs do not change).',red:0}],
 when:'A customer offers a one-off order at a lower price and the business has to decide whether to accept it.',
 steps:['Special order contribution per unit = special price − variable cost per unit.','Extra profit = contribution per unit × units in the order. Fixed costs are already covered, so they do not change.','Check there is spare capacity. If not, the order may displace full-price sales.','Make the decision and comment on the risks.'],
 vals:{p:25,vc:14,spare:2000,q:1500,x:19},
 rand:function(){var p=R(20,45),vc=p-R(8,15),x=vc+R(2,8);return {p:p,vc:vc,spare:R(1,3)*1000,q:R(5,10)*100,x:x};},
 build:function(v){var c=v.x-v.vc,extra=c*v.q,normal=v.p-v.vc;
  return {scn:'A business normally sells at '+gbp(v.p)+' per unit; variable cost is '+gbp(v.vc)+' per unit. It has spare capacity of '+f(v.spare)+' units. A customer offers to buy '+f(v.q)+' units at '+gbp(v.x)+' each.',
   head:['Step','Working','Result'],rows:[['Normal contribution per unit',gbp(v.p)+' − '+gbp(v.vc),gbp(normal)],['Special order contribution per unit',gbp(v.x)+' − '+gbp(v.vc),gbp(c)],['Extra profit from the order',gbp(c)+' × '+f(v.q),gbp(extra)],['Spare capacity check',f(v.q)+' units needed, '+f(v.spare)+' available',v.q<=v.spare?'Enough':'Not enough']],post:[],
   answer:'Extra profit = '+gbp(extra),
   ask:'Normal price '+gbp(v.p)+'; variable cost '+gbp(v.vc)+' per unit; spare capacity '+f(v.spare)+' units. A customer offers '+f(v.q)+' units at '+gbp(v.x)+' each. How much extra profit would the order add? Give £.',key:extra,tol:1.01,unit:'£',
   interp:'The order is priced below normal but above variable cost, so it adds '+gbp(extra)+' to profit'+(v.q<=v.spare?' using spare capacity.':', but there is not enough spare capacity, so some full-price sales could be lost.')+' The risk is that regular customers hear about the lower price.'};},
 mistakes:['Comparing the special price with the normal selling price instead of with variable cost.','Including fixed costs in the decision when they do not change.','Ignoring whether there is spare capacity.'],
 decide:[{q:'The special order has a positive contribution and there is spare capacity. Give two reasons the business might still refuse it.',hint:'Existing customers may demand the same price; it could damage the brand or set a precedent; spare capacity might be better used or needed for growth. Weigh these against the extra profit.'},
        {q:'The customer wants a regular order at this lower price. How does that change your advice?',hint:'A one-off uses spare capacity; a regular order may need capacity that full-price customers could use, and fixed costs may rise. Check the long-term contribution and the risk of dependence on one customer.'}],
 src:{formula:'akram',example:'ai',note:'Contribution formula: your Unit 3 formulas sheet. The special-order example is written by Claude (your OneNote order table is an image and could not be read).'}}
];

/* ===== 3.3.5.2 Ratio analysis (VGL data) ===== */
var VGL={y24:{rev:33.0,gp:16.2,op:12.2,np:11.0,ca:22,inv:14,cl:14,ncl:60,eq:49},y23:{rev:30.1,gp:10.5,op:6.5,np:5.2,ca:32,inv:15,cl:17,ncl:63,eq:48}};
function rnd2(){var rev=R(20,80),gp=Math.round(rev*R(30,60)/100*10)/10,op=Math.round((gp-rev*R(8,25)/100)*10)/10,np=Math.round((op-R(5,30)/10)*10)/10;return {rev:rev,gp:gp,op:op,np:np};}
C['3.3.5.2']=[
{id:'margins',title:'Profitability: gross, operating and profit for the year margins',spec:'3.3.5.2 a',
 formula:[{s:'Gross profit margin = (Gross profit / revenue) x 100',red:1},{s:'Operating profit margin = (Operating profit / revenue) x 100',red:1},{s:'Profit for year margin = (profit for year / revenue) x 100',red:1}],
 when:'You are asked how much profit a business keeps from each £ of sales, or to compare years.',
 steps:['Find gross profit, operating profit and profit for the year on the statement of comprehensive income.','Divide each by sales revenue and multiply by 100.','Compare with the previous year or a rival and say why it changed.'],
 vals:{a:VGL.y24,b:VGL.y23},rand:function(){return {a:rnd2(),b:null};},
 build:function(v){var a=v.a,b=v.b;function m(x,y){return x/y*100;}
  var rows=[['Gross profit margin',f(a.gp,1)+' ÷ '+f(a.rev,1)+' × 100',f(m(a.gp,a.rev),1)+'%'],['Operating profit margin',f(a.op,1)+' ÷ '+f(a.rev,1)+' × 100',f(m(a.op,a.rev),1)+'%'],['Profit for the year margin',f(a.np,1)+' ÷ '+f(a.rev,1)+' × 100',f(m(a.np,a.rev),1)+'%']];
  var head=['Ratio','Working (2024)','2024'];
  if(b){head.push('2023');rows[0].push(f(m(b.gp,b.rev),1)+'%');rows[1].push(f(m(b.op,b.rev),1)+'%');rows[2].push(f(m(b.np,b.rev),1)+'%');}
  return {scn:b?'VGL, £m. 2024: revenue 33.0, cost of sales 16.8, gross profit 16.2, operating expenses 4.0, operating profit 12.2, interest 1.2, profit for the year 11.0. 2023: revenue 30.1, gross profit 10.5, operating profit 6.5, profit for the year 5.2.':'',
   head:head,rows:rows,post:[],answer:'Gross margin '+f(m(a.gp,a.rev),1)+'%, profit for the year margin '+f(m(a.np,a.rev),1)+'%.',
   ask:'A business has revenue of £'+f(a.rev,1)+'m, gross profit of £'+f(a.gp,1)+'m, operating profit of £'+f(a.op,1)+'m and profit for the year of £'+f(a.np,1)+'m. What is the profit for the year margin? Give a % to 1 decimal place.',
   key:m(a.np,a.rev),tol:0.051,unit:'%',
   interp:b?'All three margins improved. Revenue rose from 30.1 to 33.0 while cost of sales fell from 19.6 to 16.8, so VGL kept much more of each £ of sales. Part of that may be a one-off or lower prices paid to suppliers, so check it is sustainable.':'The margin shows how many pence of profit the business keeps from each £1 of sales. Compare it with last year and with rivals to judge whether it is good.'};},
 mistakes:['Using the wrong profit for each margin. Gross, operating and profit for the year are different lines.','Dividing by cost of sales instead of revenue.','Giving the answer as a decimal (0.49) instead of a percentage (49.1%).'],
 decide:[{q:'Profit for the year margin more than doubled in one year. Is this good news? What would you want to find out?',hint:'Positive on the numbers, but check why: lower costs, higher prices, one-off gains? Is it sustainable? Compare with rivals and consider customers’ reaction if prices rose. Judge how reliable the improvement is.'},
        {q:'VGL’s gross margin is 49.1% but operating costs are low. Suggest two ways it could use this strength, and a risk of each.',hint:'Options: invest in growth, cut prices to win share, pay dividends. For each, link to the risk (rivals copy, margin falls, less cash for later).'}],
 src:{formula:'akram',example:'akram',note:'Formulas and VGL 2023–2024 statements: your OneNote “(2) Ratio Analysis”. Working by Claude.'}},

{id:'liq',title:'Liquidity: current ratio and acid test ratio',spec:'3.3.5.2 a',
 formula:[{s:'Current ratio = Current Assets / Current Liabilities',red:1},{s:'Acid Test = (Current Assets − Stock) / Current liabilities',red:1}],
 when:'You are asked whether a business can pay its short-term debts.',
 steps:['Find current assets, inventory (stock) and current liabilities on the statement of financial position.','Current ratio = current assets ÷ current liabilities.','Acid test = (current assets − inventory) ÷ current liabilities.','Compare: roughly 1.5–2 is healthy for the current ratio and about 1 for the acid test.'],
 vals:{a:VGL.y24,b:VGL.y23},rand:function(){var cl=R(8,30),inv=R(5,20),rest=R(4,25),ca=inv+rest;return {a:{ca:ca,inv:inv,cl:cl},b:null};},
 build:function(v){var a=v.a,b=v.b,cr=a.ca/a.cl,at=(a.ca-a.inv)/a.cl;
  var rows=[['Current ratio',f(a.ca)+' ÷ '+f(a.cl),f(cr,2)],['Acid test ratio','('+f(a.ca)+' − '+f(a.inv)+') ÷ '+f(a.cl),f(at,2)]],head=['Ratio','Working (2024)','2024'];
  if(b){head.push('2023');rows[0].push(f(b.ca/b.cl,2));rows[1].push(f((b.ca-b.inv)/b.cl,2));}
  return {scn:b?'VGL, £m. 2024: current assets 22 (inventory 14), current liabilities 14. 2023: current assets 32 (inventory 15), current liabilities 17.':'',
   head:head,rows:rows,post:[],answer:'Current ratio '+f(cr,2)+', acid test '+f(at,2)+'.',
   ask:'A business has current assets of £'+f(a.ca)+'m (including inventory of £'+f(a.inv)+'m) and current liabilities of £'+f(a.cl)+'m. What is the acid test ratio? Give your answer to 2 decimal places.',
   key:at,tol:0.0051,unit:'',
   interp:b?'The current ratio fell from 1.88 to 1.57 and the acid test fell from 1.00 to 0.57. VGL relies heavily on inventory to cover its short-term debts. Cash fell from 10 to 4, so liquidity is weakening.':'A ratio below 1 on the acid test means the business could struggle to pay its short-term debts without selling inventory.'};},
 mistakes:['Leaving inventory in the acid test.','Dividing current liabilities by current assets (the wrong way round).','Treating a higher ratio as always better. Too high can mean cash is sitting idle.'],
 decide:[{q:'VGL’s acid test has fallen to 0.57. What should the finance director do, and what is the risk of each option?',hint:'Options: improve cash collection, negotiate longer supplier credit, sell inventory (JIT), or arrange short-term finance. For each, consider cost and effect on suppliers or customers. Recommend one.'},
        {q:'A supermarket has an acid test of 0.4 and is very successful. Does low liquidity matter for every business?',hint:'Supermarkets sell for cash quickly and pay suppliers later, so a low ratio can be normal. Compare with the sector rather than a rule of thumb. Evaluate the limits of using one ratio.'}],
 src:{formula:'akram',example:'akram',note:'Formulas and VGL balance sheets: your OneNote “(2) Ratio Analysis”. Working by Claude.'}},

{id:'gearing',title:'Gearing ratio',spec:'3.3.5.2 a',
 formula:[{s:'Gearing Ratio = [Non-Current liabilities / (Total equity + non-current liabilities)] x 100',red:1}],
 when:'You are asked how much of the business’s finance comes from long-term borrowing.',
 steps:['Find non-current liabilities (long-term loans) and total equity on the statement of financial position.','Capital employed = total equity + non-current liabilities.','Gearing = non-current liabilities ÷ capital employed × 100.','Above about 50% is highly geared. Below about 25% is low geared.'],
 vals:{a:VGL.y24,b:VGL.y23},rand:function(){return {a:{ncl:R(20,90,5),eq:R(20,90,5)},b:null};},
 build:function(v){var a=v.a,b=v.b,ce=a.eq+a.ncl,g=a.ncl/ce*100;
  var rows=[['Capital employed',f(a.eq)+' + '+f(a.ncl),gbpm(ce)],['Gearing',f(a.ncl)+' ÷ '+f(ce)+' × 100',f(g,1)+'%']],head=['Step','Working (2024)','2024'];
  if(b){head.push('2023');rows[0].push(gbpm(b.eq+b.ncl));rows[1].push(f(b.ncl/(b.eq+b.ncl)*100,1)+'%');}
  return {scn:b?'VGL, £m. 2024: non-current liabilities 60, total equity 49. 2023: non-current liabilities 63, total equity 48.':'',
   head:head,rows:rows,post:[],answer:'Gearing = '+f(g,1)+'%',
   ask:'A business has non-current liabilities of £'+f(a.ncl)+'m and total equity of £'+f(a.eq)+'m. What is the gearing ratio? Give a % to 1 decimal place.',key:g,tol:0.051,unit:'%',
   interp:g>50?'The business is highly geared: over half its finance is borrowed. It must keep paying interest even when profits fall, so it is vulnerable to rising interest rates.':'The business is not highly geared, so borrowing is a smaller part of its finance and interest costs are less of a risk.'};},
 mistakes:['Dividing by equity alone instead of equity plus non-current liabilities.','Including current liabilities in the calculation.','Assuming high gearing is always bad. It can fund growth without selling shares.'],
 decide:[{q:'VGL’s gearing is 55%. It wants to open ten new stores. Should it borrow more or issue shares? Justify your choice.',hint:'Already highly geared, so more debt raises risk and interest. Shares dilute ownership but cost nothing to repay. Consider interest rates, profit stability, and what the owners want.'},
        {q:'When would high gearing be a sensible choice for a business?',hint:'Stable profits and cash flow make borrowing affordable; low interest rates; owners wish to keep control. Link to risk if profits fall.'}],
 src:{formula:'akram',example:'akram',note:'Gearing formula: your Unit 3 formulas sheet. VGL balance sheets: your OneNote “(2) Ratio Analysis”. Working by Claude.'}},

{id:'roce',title:'Return on capital employed (ROCE)',spec:'3.3.5.2 a',
 formula:[{s:'ROCE = [Operating profit / Capital Employed] X100',red:1},{s:'Capital employed = total equity + non-current liabilities',red:0}],
 when:'You are asked how well a business turns the finance invested in it into operating profit.',
 steps:['Operating profit comes from the statement of comprehensive income.','Capital employed = total equity + non-current liabilities, from the statement of financial position.','ROCE = operating profit ÷ capital employed × 100.','Compare with the previous year, with rivals, and with the interest rate on borrowing.'],
 vals:{a:{op:12.2,eq:49,ncl:60},b:{op:6.5,eq:48,ncl:63}},rand:function(){return {a:{op:R(5,40,1)+R(0,9)/10,eq:R(30,100,5),ncl:R(20,90,5)},b:null};},
 build:function(v){var a=v.a,b=v.b,ce=a.eq+a.ncl,r=a.op/ce*100;
  var rows=[['Capital employed',f(a.eq)+' + '+f(a.ncl),gbpm(ce)],['ROCE',f(a.op,1)+' ÷ '+f(ce)+' × 100',f(r,1)+'%']],head=['Step','Working (2024)','2024'];
  if(b){head.push('2023');rows[0].push(gbpm(b.eq+b.ncl));rows[1].push(f(b.op/(b.eq+b.ncl)*100,1)+'%');}
  return {scn:b?'VGL, £m. 2024: operating profit 12.2, total equity 49, non-current liabilities 60. 2023: operating profit 6.5, total equity 48, non-current liabilities 63.':'',
   head:head,rows:rows,post:[],answer:'ROCE = '+f(r,1)+'%',
   ask:'A business has operating profit of £'+f(a.op,1)+'m, total equity of £'+f(a.eq)+'m and non-current liabilities of £'+f(a.ne||a.ncl)+'m. What is ROCE? Give a % to 1 decimal place.',key:r,tol:0.051,unit:'%',
   interp:b?'ROCE almost doubled, from 5.9% to 11.2%. Operating profit rose strongly while capital employed was almost unchanged, so VGL is using its finance much more effectively. Whether 11.2% is good depends on rivals and on the cost of borrowing.':'ROCE shows the operating profit earned for every £100 of finance invested. It should be higher than the cost of borrowing.'};},
 mistakes:['Using profit for the year instead of operating profit.','Using only equity as capital employed.','Not comparing the result with anything. A ratio only means something against a benchmark.'],
 decide:[{q:'ROCE is 11.2% and the bank charges 8% interest. Should VGL borrow more to expand? What would change your answer?',hint:'11.2% above 8% suggests borrowing can pay if new projects earn a similar return. But new projects may earn less, and gearing is already high. Make a clear call.'},
        {q:'Two businesses have the same ROCE but different gearing. Which is the better investment and why?',hint:'Lower gearing means less financial risk for the same return. But the highly geared one might give shareholders a higher return in good years. Link risk to return.'}],
 src:{formula:'akram',example:'akram',note:'ROCE formula: your Unit 3 formulas sheet. VGL statements: your OneNote “(2) Ratio Analysis”. Working by Claude.'}}
];

/* ===== 3.3.5.3 Human resources ===== */
C['3.3.5.3']=[
{id:'lprod',title:'Labour productivity',spec:'3.3.5.3 a',
 formula:[{s:'Labour productivity = [Output per period (units) / Number of employees at work]',red:1}],
 when:'You are asked how much each worker produces, or whether productivity has improved.',
 steps:['Divide total output for the period by the number of employees at work.','Do the same for the other period.','Find the percentage change = (new − old) ÷ old × 100.','Comment on the cause and what the business should do.'],
 vals:{o1:12000,e1:40,o2:13650,e2:39},rand:function(){var e1=R(20,80),o1=e1*R(150,400,10),e2=e1+R(-3,3),o2=Math.round(o1*(1+R(-5,15)/100)/10)*10;return {o1:o1,e1:e1,o2:o2,e2:e2};},
 build:function(v){var p1=v.o1/v.e1,p2=v.o2/v.e2,ch=(p2-p1)/p1*100;
  return {scn:'Year 1: output '+f(v.o1)+' units with '+v.e1+' employees at work. Year 2: output '+f(v.o2)+' units with '+v.e2+' employees at work.',
   head:['Year','Working','Labour productivity (units per employee)'],rows:[['Year 1',f(v.o1)+' ÷ '+v.e1,f(p1,1)],['Year 2',f(v.o2)+' ÷ '+v.e2,f(p2,1)],['Change',f(p2,1)+' − '+f(p1,1)+' ÷ '+f(p1,1)+' × 100',(ch>=0?'+':'')+f(ch,1)+'%']],post:[],
   answer:'Productivity '+f(p1,1)+' → '+f(p2,1)+' units per employee ('+(ch>=0?'+':'')+f(ch,1)+'%).',
   ask:'Year 2 output was '+f(v.o2)+' units with '+v.e2+' employees at work. What is labour productivity in units per employee? Give your answer to 1 decimal place.',key:p2,tol:0.051,unit:'units per employee',
   interp:'Productivity '+(ch>=0?'rose':'fell')+' by '+f(Math.abs(ch),1)+'%. Rising productivity lowers unit labour costs and helps competitiveness, but check quality did not suffer and whether the rise came from better methods or from staff working harder.'};},
 mistakes:['Using total employees on the payroll instead of employees at work.','Mixing periods, for example monthly output with annual staff numbers.','Forgetting that a rise in output alone does not prove productivity rose if staff numbers rose too.'],
 decide:[{q:'Productivity has risen but quality complaints are up. What should the HR director recommend?',hint:'Link productivity to quality: pressure or targets may be too high. Options: adjust incentives to reward quality, training, better equipment. Weigh short-term output against long-term reputation.'},
        {q:'How could the firm raise productivity without cutting staff? Which method would you pick?',hint:'Training, better technology, improved motivation (pay, empowerment), better work organisation. Pick one and justify using cost, speed of effect and staff reaction.'}],
 src:{formula:'akram',example:'ai',note:'Formula: your Unit 3 formulas sheet. Example written by Claude.'}},

{id:'lturn',title:'Labour turnover and retention',spec:'3.3.5.3 a',
 formula:[{s:'Labour turnover = (staff leaving ÷ average number employed) × 100',red:0},{s:'Labour retention = (staff staying ÷ average number employed) × 100',red:0}],
 when:'You are asked what proportion of staff leave in a year, or whether the business is keeping its workforce.',
 steps:['Find the number of staff who left in the period and the average number employed.','Divide staff leaving by the average number employed and multiply by 100.','Retention = 100% − turnover (staff staying ÷ average employed × 100).','Compare with last year and with the industry, and look for causes.'],
 vals:{l1:12,a1:80,l2:20,a2:80},rand:function(){var a=R(40,200,10);return {l1:R(3,20),a1:a,l2:R(5,40),a2:a};},
 build:function(v){var t1=v.l1/v.a1*100,t2=v.l2/v.a2*100;
  return {scn:'Year 1: '+v.l1+' staff left; average employed '+v.a1+'. Year 2: '+v.l2+' staff left; average employed '+v.a2+'.',
   head:['Year','Labour turnover working','Turnover','Retention'],rows:[['Year 1',v.l1+' ÷ '+v.a1+' × 100',f(t1,1)+'%',f(100-t1,1)+'%'],['Year 2',v.l2+' ÷ '+v.a2+' × 100',f(t2,1)+'%',f(100-t2,1)+'%']],post:[],
   answer:'Turnover '+f(t1,1)+'% → '+f(t2,1)+'%.',
   ask:'In Year 2, '+v.l2+' staff left and the average number employed was '+v.a2+'. What is labour turnover? Give a % to 1 decimal place.',key:t2,tol:0.051,unit:'%',
   interp:'Turnover '+(t2>t1?'rose':'fell')+' from '+f(t1,1)+'% to '+f(t2,1)+'%. '+(t2>t1?'Higher turnover raises recruitment and training costs and can lower morale and service quality.':'Lower turnover cuts recruitment and training costs.')+' Some turnover is healthy because it brings in new ideas.'};},
 mistakes:['Dividing by the number of staff at the end instead of the average number employed.','Treating all turnover as bad. A little brings fresh ideas.','Not comparing with the industry. Retail turnover is normally higher than in banking.'],
 decide:[{q:'Labour turnover has risen from 15% to 25%. Recommend one HR strategy to fix this and explain the risk.',hint:'Pick one: financial rewards, share ownership, consultation or empowerment. Link it to the likely cause of leaving, state the cost, and say how you would know it worked.'},
        {q:'Is a labour turnover of 25% always a problem? Evaluate.',hint:'Depends on the sector (retail, hospitality are high), who is leaving (key staff or leavers who were weak), and the cost of replacing them. Make a judgement.'}],
 src:{formula:'ai',example:'ai',note:'Not on your Unit 3 formulas sheet. Formula follows the site’s existing 3.3.5.3 notes. Example written by Claude.'}},

{id:'absent',title:'Absenteeism',spec:'3.3.5.3 a',
 formula:[{s:'Absenteeism Formula = [Number of staff absent during period / Number employed during period] x 100',red:1}],
 when:'You are asked what proportion of the workforce is absent, or whether absence is a problem.',
 steps:['Find the number of staff absent during the period and the number employed in the same period.','Divide absent staff by staff employed and multiply by 100.','Compare with last period, with the industry, and think about the cause.'],
 vals:{a1:6,e1:120,a2:9,e2:120},rand:function(){var e=R(60,300,10);return {a1:R(2,12),e1:e,a2:R(3,20),e2:e};},
 build:function(v){var r1_=v.a1/v.e1*100,r2_=v.a2/v.e2*100;
  return {scn:'Month 1: '+v.a1+' staff absent out of '+v.e1+' employed. Month 2: '+v.a2+' staff absent out of '+v.e2+' employed.',
   head:['Month','Working','Absenteeism'],rows:[['Month 1',v.a1+' ÷ '+v.e1+' × 100',f(r1_,1)+'%'],['Month 2',v.a2+' ÷ '+v.e2+' × 100',f(r2_,1)+'%']],post:[],
   answer:'Absenteeism '+f(r1_,1)+'% → '+f(r2_,1)+'%.',
   ask:'In Month 2, '+v.a2+' staff were absent out of '+v.e2+' employed. What is the absenteeism rate? Give a % to 1 decimal place.',key:r2_,tol:0.051,unit:'%',
   interp:'Absenteeism '+(r2_>r1_?'rose':'fell')+' from '+f(r1_,1)+'% to '+f(r2_,1)+'%. '+(r2_>r1_?'Rising absence cuts output, increases cover costs and may point to low morale or stress.':'Falling absence suggests morale and working conditions are improving.')+' One month is only a short-term figure, so look for a trend.'};},
 mistakes:['Dividing by total staff at the end of the year instead of staff employed in the period.','Reading one month as a trend.','Assuming all absence is avoidable. Illness and genuine emergencies are included.'],
 decide:[{q:'Absenteeism has risen for three months. Should the manager introduce strict penalties or talk to staff first? Justify your choice.',hint:'Penalties may reduce absence short term but harm morale. Consultation finds the cause (stress, workload, illness). Balance speed against long-term engagement and make a recommendation.'},
        {q:'What limits the usefulness of the absenteeism figure when making HR decisions?',hint:'The figure hides reasons (sickness vs. unhappiness), is short-term, and varies by season and sector. Use it alongside surveys and interviews.'}],
 src:{formula:'akram',example:'ai',note:'Formula: your Unit 3 formulas sheet. Example written by Claude.'}}
];

window.CALCS=C;

/* ---------- rendering ---------- */
var STATE={};
function esc(s){return String(s).replace(/&(?!amp;|lt;|gt;|#)/g,'&amp;');}
function chip(kind,txt){return '<span class="cs-chip '+(kind==='akram'?'red':'ai')+'">'+txt+'</span>';}
function table(head,rows){return '<div class="calc-tw"><table class="calc-t"><thead><tr>'+head.map(function(h){return '<th>'+h+'</th>';}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr>'+r.map(function(c,i){return '<td'+(i===r.length-1&&r.length===3?' class="res"':'')+'>'+c+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';}
function turnHtml(code,c){var st=STATE[code+'/'+c.id],b=st.b;
  return '<div class="calc-turn" id="ct-'+c.id+'"><p class="calc-q">'+(b.ask_scn?esc(b.ask_scn)+' ':'')+'<b>'+esc(b.ask)+'</b></p>'+
   '<div class="calc-in"><input type="text" inputmode="decimal" id="ci-'+c.id+'" placeholder="Your answer" aria-label="Your answer" onkeydown="if(event.key===\'Enter\')calcCheck(\''+code+'\',\''+c.id+'\')"><span class="calc-unit">'+b.unit+'</span>'+
   '<button class="btn-ghost" onclick="calcCheck(\''+code+'\',\''+c.id+'\')">Check</button><button class="btn-ghost" onclick="calcShow(\''+code+'\',\''+c.id+'\')">Show working</button><button class="btn-ghost" onclick="calcNew(\''+code+'\',\''+c.id+'\')">New numbers</button></div>'+
   '<div class="calc-fb" id="cf-'+c.id+'" aria-live="polite"></div><div class="calc-wk" id="cw-'+c.id+'"></div></div>';}
function cardHtml(code,c){var w=c.build(c.vals),k=c.id;STATE[code+'/'+k]={b:c.build(c.rand())};
  var fm=c.formula.map(function(x){return '<div class="calc-fml'+(x.red?' red':'')+'">'+esc(x.s)+'</div>';}).join('');
  var h='<div class="card calc-card" id="cc-'+k+'"><h2>'+c.title+' <span class="calc-spec">'+c.spec+'</span></h2>'+
   '<div class="calc-src">'+chip(c.src.formula,'Formula: '+(c.src.formula==='akram'?'Mr. Akram’s sheet':'written by Claude'))+chip(c.src.example,'Example: '+(c.src.example==='akram'?'from Mr. Akram’s OneNote':'written by Claude'))+'</div>'+
   '<div class="calc-box">'+fm+'</div><p class="calc-when"><b>When to use it:</b> '+c.when+'</p>'+
   '<h3>Steps</h3><ol class="calc-steps">'+c.steps.map(function(s){return '<li>'+s+'</li>';}).join('')+'</ol>'+
   '<h3>Worked example</h3><p class="calc-scn">'+esc(w.scn)+'</p>'+table(w.head,w.rows)+w.post.map(function(p){return '<p class="calc-post">'+p+'</p>';}).join('')+
   '<p class="calc-ans"><b>Answer:</b> '+w.answer+'</p><h3>Interpret it</h3><p>'+w.interp+'</p>'+
   '<h3>Your turn</h3>'+turnHtml(code,c)+
   '<h3>Common mistakes</h3><ul class="calc-mis">'+c.mistakes.map(function(m){return '<li>'+m+'</li>';}).join('')+'</ul>'+
   '<h3>Decision prompts <span class="calc-spec">A-grade thinking</span></h3><p class="calc-dp-note">Now use the numbers. Write a short paragraph for each: make a judgement, give a reason from the data, and say what would change your mind.</p>'+
   '<ol class="calc-dp">'+c.decide.map(function(d,i){return '<li>'+d.q+'<br><button class="btn-ghost calc-hintbtn" onclick="var e=document.getElementById(\'dh-'+k+'-'+i+'\');e.style.display=e.style.display===\'block\'?\'none\':\'block\'">What a strong answer covers</button><div class="calc-hint" id="dh-'+k+'-'+i+'">'+d.hint+'</div></li>';}).join('')+'</ol>'+
   '<p class="calc-srcnote">Source: '+c.src.note+'</p></div>';
  return h;}
window.calcRender=function(code){var arr=C[code];if(!arr)return '';
  var intro='<div class="card calc-intro"><h2>Calculations</h2><p>Learn the formula, follow one worked example, then try it with new numbers. The last part of each card is the one that wins A grades: use the figures to make and justify a decision.</p>'+
  '<p class="akram-key" style="margin-top:8px!important"><span class="k"><i></i><b class="red">Red = from Mr. Akram’s own OneNote</b></span><span class="k"><i class="ai"></i>Grey = written by Claude (AI)</span></p></div>';
  return intro+arr.map(function(c){return cardHtml(code,c);}).join('');};
function find(code,id){return C[code].filter(function(c){return c.id===id;})[0];}
window.calcNew=function(code,id){var c=find(code,id);STATE[code+'/'+id]={b:c.build(c.rand())};document.getElementById('ct-'+id).outerHTML=turnHtml(code,c);};
function parse(s){var t=String(s).replace(/[£%,\s]|AED|units|months|m$/gi,'').replace(/−/g,'-');var n=parseFloat(t);return isNaN(n)?null:n;}
window.calcCheck=function(code,id){var st=STATE[code+'/'+id].b,el=document.getElementById('ci-'+id),fb=document.getElementById('cf-'+id),n=parse(el.value);
  if(n===null){fb.className='calc-fb';fb.textContent='Type a number first.';return;}
  if(Math.abs(n-st.key)<=st.tol){fb.className='calc-fb ok';fb.innerHTML='Correct. Now ask yourself what this number means for the business.';}
  else{fb.className='calc-fb bad';fb.textContent='Not quite. Check each step, or press Show working.';}};
window.calcShow=function(code,id){var st=STATE[code+'/'+id].b,w=document.getElementById('cw-'+id);
  w.innerHTML=table(st.head,st.rows)+st.post.map(function(p){return '<p class="calc-post">'+p+'</p>';}).join('')+'<p class="calc-ans"><b>Answer:</b> '+st.answer+'</p>';};
})();
