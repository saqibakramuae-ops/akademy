/* ============================================================================
   AKADEMY — CONTENT FILE.  This is the only file you edit to grow the site.
   ----------------------------------------------------------------------------
   ADD A TOPIC : copy a { } block in CURRICULUM, set status:"live", fill the
                 notes / definitions / practice / caseStudy / exam arrays.
   ADD A PAST PAPER / RESOURCE :
                 1) drop the PDF into the  resources/  folder
                 2) add a line to that topic's  resources: [ ... ]  array, e.g.
                    resources:[{label:"Jun 2023 Paper 3", file:"resources/jun23-p3.pdf"}]
   Then upload this file (and any PDFs) to GitHub — the site rebuilds itself.
============================================================================ */

window.SUBTHEME_TITLE = {"3.3":"Decision-making techniques"};
window.SUBTHEME_SUB = {"3.3":"Theme 3: Business decisions and strategy — the quantitative tools used to make and justify business decisions."};
window.ICONS = {"3.3.1":"📈","3.3.2":"💷","3.3.3":"🌳","3.3.4":"🧭","3.3.5":"➗"};

window.CURRICULUM = [
{
  code:"3.3.1", subtheme:"3.3", title:"Quantitative sales forecasting",
  business:"Case study: Greggs plc", status:"live",
  notes:[
    {h:"What is quantitative sales forecasting?", html:`
      <p>Forecasting means <b>predicting future sales</b> using numerical, past data so a business can plan production, staffing, cash flow and stock. The spec covers two techniques:</p>
      <ul><li><b>Time-series analysis</b> — using moving averages to find the trend in data over time.</li>
      <li><b>Scatter graphs & line of best fit</b> — extrapolating past data into the future.</li></ul>`},
    {h:"Time-series analysis", html:`
      <p>Past data recorded over time is broken into components:</p>
      <ul>
        <li><b>Trend</b> — the long-term underlying direction (up, down or flat).</li>
        <li><b>Seasonal variation</b> — regular ups and downs <i>within</i> a year (e.g. festive peaks).</li>
        <li><b>Cyclical variation</b> — longer swings tied to the economic cycle.</li>
        <li><b>Random/residual</b> — one-off, unpredictable movements.</li>
      </ul>`},
    {h:"Moving averages", html:`
      <p>A moving average <b>smooths out</b> seasonal and random noise so the trend is clear.</p>
      <h3>Three-period moving average</h3>
      <p>Average each group of 3 consecutive periods, then move forward one period at a time. It sits against the <i>middle</i> period.</p>
      <div class="note-ex">Jan 100, Feb 130, Mar 160 → 3-month average = (100+130+160)/3 = <b>130</b> (placed at Feb).</div>
      <h3>Four-quarter moving average</h3>
      <p>For quarterly data, total 4 quarters and divide by 4. Because 4 is even, the figure falls <i>between</i> quarters, so a <b>centred</b> moving average (averaging two consecutive 4-quarter totals ÷ 8) is used to line it up with a quarter.</p>`},
    {h:"Scatter graphs, correlation & line of best fit", html:`
      <p>Plot two variables to see their relationship:</p>
      <ul>
        <li><b>Positive correlation</b> — both rise together.</li>
        <li><b>Negative correlation</b> — one rises as the other falls.</li>
        <li><b>No correlation</b> — no clear link.</li>
      </ul>
      <p>Draw a <b>line of best fit</b> through the points. Extending it <i>within</i> the known data is interpolation; extending it <i>beyond</i> the data to forecast the future is <b>extrapolation</b>.</p>
      <div class="note-ex">⚠ Correlation ≠ causation. A link between two variables does not prove one causes the other.</div>`},
    {h:"Limitations", html:`
      <ul>
        <li>Assumes the past pattern continues — but tastes, competitors and the economy change.</li>
        <li>Extrapolation gets <b>less reliable the further ahead</b> you forecast.</li>
        <li>Ignores <b>qualitative factors</b> (brand, PESTLE shocks, new rivals).</li>
        <li>Only as good as the <b>quality and quantity</b> of past data.</li>
        <li>Sudden shocks (recession, pandemic) break the trend entirely.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Sales forecasting", marks:2, body:`Predicting a firm's future sales levels <span class="pt">1</span> using past data and market information to inform decisions such as production and staffing <span class="pt">2</span>.`},
    {term:"Time-series analysis", marks:2, body:`A forecasting method that uses past sales data recorded over time <span class="pt">1</span> to identify patterns such as the trend and seasonal variation, which are then projected forward <span class="pt">2</span>.`},
    {term:"Trend", marks:2, body:`The underlying long-term direction of data over time <span class="pt">1</span>; identifying it lets a business see whether sales are generally rising or falling once short-term fluctuations are removed <span class="pt">2</span>.`},
    {term:"Moving average", marks:2, body:`A technique that averages data over a set number of periods, moving forward one period at a time <span class="pt">1</span>, smoothing out seasonal and random fluctuations so the underlying trend is clearer <span class="pt">2</span>.`},
    {term:"Seasonal variation", marks:2, body:`Regular, predictable fluctuations in sales that recur at the same point each year <span class="pt">1</span>, such as festive peaks, which a business can plan its stock and staffing around <span class="pt">2</span>.`},
    {term:"Extrapolation", marks:2, body:`Extending the past trend or line of best fit beyond the known data <span class="pt">1</span> to predict future values, assuming the existing pattern continues <span class="pt">2</span>.`},
    {term:"Correlation", marks:2, body:`The strength of the relationship between two variables <span class="pt">1</span>; a strong positive correlation means that as one increases the other tends to increase too, which can support forecasting <span class="pt">2</span>.`},
    {term:"Line of best fit", marks:2, body:`A straight line drawn through the points on a scatter graph that best represents the overall relationship <span class="pt">1</span>, which can be extended to estimate or forecast future values <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define extrapolation.",
     model:`Extrapolation is extending the past trend or line of best fit beyond the known data <span class="pt">1</span> to forecast future values, on the assumption the existing pattern continues <span class="pt">2</span>.`,
     fb:"Two linked points earn the two marks. An example on its own does <b>not</b> earn the second mark — Edexcel wants a developed point, not an illustration."},
    {marks:4, q:"Jan 100, Feb 130, Mar 160, Apr 190 (sales, £000s). Calculate the three-month moving average for February and for March, and state what the trend shows.",
     model:`February = (100 + 130 + 160) / 3 = <b>£130,000</b> <span class="pt">1</span>. March = (130 + 160 + 190) / 3 = <b>£160,000</b> <span class="pt">1</span>. The moving average rises from £130k to £160k <span class="pt">1</span>, showing a clear <b>upward trend</b> in underlying sales once monthly fluctuations are smoothed out <span class="pt">1</span>.`,
     fb:"2 marks for correct calculations, 2 for interpretation. The interpretation needs a developed point (direction + what it means), not just restating the numbers."},
    {marks:2, q:"State two limitations of extrapolation.",
     model:`It assumes the past trend will continue, but an external shock such as a recession can break the pattern <span class="pt">1</span>; and the further into the future you extrapolate, the less reliable the forecast becomes <span class="pt">2</span>.`,
     fb:"Two distinct limitations = two marks. Watch for students writing one limitation twice in different words."},
    {marks:4, q:"Explain one benefit of using moving averages for a business.",
     model:`Moving averages smooth out seasonal and random fluctuations <span class="pt">1</span> so the underlying trend becomes clearer <span class="pt">2</span>. This helps managers make better stock and staffing decisions <span class="pt">3</span> because they plan around the real direction of sales rather than one-off spikes <span class="pt">4</span>.`,
     fb:"A 4-mark 'explain' wants a point developed through a chain — knowledge (mark 1) built into applied consequence (marks 3–4)."},
    {marks:4, q:"A scatter graph shows a strong positive correlation between a firm's advertising spend and its sales. Analyse what this suggests.",
     model:`As advertising spend rises, sales tend to rise with it <span class="pt">1</span>, suggesting advertising may be driving demand <span class="pt">2</span>. The firm could extrapolate the line of best fit to estimate the sales effect of a larger budget <span class="pt">3</span> — though a strong correlation does not prove advertising <i>causes</i> the sales, so the link should be treated with caution <span class="pt">4</span>.`,
     fb:"Reward the application of 'line of best fit / extrapolation' and credit the correlation-≠-causation point — it lifts the answer into analysis."}
  ],
  caseStudy:{
    business:"Greggs plc",
    intro:`<p><b>Greggs plc</b>, the UK food-on-the-go bakery chain, has strongly seasonal sales — demand peaks around festive periods and dips in quieter quarters. Its planning team uses quantitative forecasting to set staffing, stock and cash-flow budgets.</p>
    <p class="note-ex"><b>Illustrative quarterly sales (£m)</b> — figures simplified for revision.</p>
    <table class="datatable">
      <tr><th>Quarter</th><th>Y1 Q1</th><th>Y1 Q2</th><th>Y1 Q3</th><th>Y1 Q4</th><th>Y2 Q1</th><th>Y2 Q2</th><th>Y2 Q3</th><th>Y2 Q4</th></tr>
      <tr><td>Sales (£m)</td><td>320</td><td>360</td><td>380</td><td>460</td><td>340</td><td>380</td><td>400</td><td>480</td></tr>
    </table>
    <p>Q4 is consistently the strongest quarter (festive trading); Q1 is the weakest. Sales are also drifting upward year on year.</p>`
  },
  exam:[
    {marks:4, q:"Using the data, calculate the first two four-quarter moving average figures for Greggs and state what the trend shows. (4)",
     model:`First four-quarter total (Y1 Q1–Q4) = 320+360+380+460 = 1520; average = 1520/4 = <b>£380m</b> <span class="pt">1</span>. Second total (Y1 Q2–Y2 Q1) = 360+380+460+340 = 1540; average = 1540/4 = <b>£385m</b> <span class="pt">1</span>. The moving average rises from £380m to £385m <span class="pt">1</span>, showing a gentle <b>upward underlying trend</b> once the seasonal swings are smoothed out <span class="pt">2</span>.`,
     fb:"2 marks calculation, 2 interpretation. Full marks need the trend direction <i>and</i> a developed comment (the seasonality has been removed)."},
    {marks:8, q:"Assess the benefits to Greggs of using quantitative sales forecasting. (8)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is far better <b>stock and staff planning</b>. <span class="tag t-E">EXPLAIN</span>This is because time-series analysis uses Greggs' past seasonal data to predict demand quarter by quarter. <span class="tag t-C">CHAIN</span>This means Greggs can order the right volume of ingredients and schedule enough staff ahead of its Q4 festive peak; as a result it cuts both waste from over-ordering and lost sales from stockouts, protecting margins and service. <span class="tag t-A">APPLY</span>With Q4 sales reaching roughly £480m versus £340m in Q1, that difference is large enough to plan around. <span class="tag t-J">JUDGE</span>So forecasting is valuable for operational efficiency.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is stronger <b>cash-flow and budgeting</b> decisions. <span class="tag t-E">EXPLAIN</span>Because the trend shows sales drifting upward year on year, Greggs can budget with more confidence. <span class="tag t-C">CHAIN</span>This means it can time investment such as new store openings to match rising demand, improving the chance those stores are profitable quickly.</p>
     <p><span class="tag t-J">HOWEVER</span><b>However</b>, these benefits depend on conditions staying stable. Forecasts built on past data can be badly wrong if an external shock — a cost-of-living squeeze, say — changes consumer spending on food-to-go, so Greggs should treat the forecast as a guide rather than a guarantee.</p>`,
     fb:"8-mark answers must stay <b>balanced even when the command is 'benefits'</b> — the 'however' is what moves it into the top band. Two developed benefits + one genuine limitation."},
    {marks:12, q:"Evaluate whether Greggs should rely on extrapolation to forecast its future sales. (12)",
     model:`<p><span class="tag t-P">POINT</span>Extrapolation is useful for Greggs in the short term. <span class="tag t-E">EXPLAIN</span>This is because it has a clear, stable seasonal and upward trend in its past data. <span class="tag t-C">CHAIN</span>A reliable historic pattern means projecting it forward gives a reasonable short-term estimate; this leads to better staffing and stock decisions, which reduces waste and protects profit. <span class="tag t-A">APPLY</span>Greggs' consistent Q4 festive peak (≈£480m) is exactly the kind of repeating pattern extrapolation handles well. <span class="tag t-J">JUDGE</span>So for short, stable horizons it is effective.</p>
     <p><span class="tag t-P">POINT</span>However, relying on extrapolation <i>alone</i> is risky, and Greggs should combine it with market research. <span class="tag t-E">EXPLAIN</span>This is because extrapolation assumes the past simply continues. <span class="tag t-C">CHAIN</span>It ignores PESTLE shocks and changing tastes; this means a sudden event — a recession or a shift toward healthier eating — breaks the trend, so the forecast misleads and Greggs over-orders, raising costs. <span class="tag t-A">APPLY</span>A cost-of-living squeeze cutting discretionary food-to-go spend would not show up in the historic line at all. <span class="tag t-J">JUDGE</span>So it is far less effective in volatile conditions.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> Overall, extrapolation is worth using but should not be relied on alone. <b>Why:</b> because its accuracy falls the further ahead and the more volatile the market. <b>Why (develop):</b> this matters because Greggs operates in a competitive, trend-sensitive sector where one shock can be costly. <b>What (depends on):</b> however, this depends on the time horizon and economic stability — reliable for next quarter, risky for next year.</p>`,
     fb:"12-mark = trimmed 5×5: one developed FOR paragraph, one AGAINST/alternative, then the 4Ws conclusion. Every paragraph <b>must end on a judgement</b>."},
    {marks:20, q:"Evaluate the usefulness of quantitative sales forecasting techniques to a business such as Greggs. (20)",
     model:`<p><span class="tag t-P">P1 · FOR</span>Quantitative forecasting is highly useful for planning. <span class="tag t-E">EXPLAIN</span>It converts Greggs' past seasonal data into clear demand predictions. <span class="tag t-C">CHAIN</span>This means stock and staff can be matched to each quarter; as a result waste and stockouts fall, cutting costs and lifting customer service, which protects profit. <span class="tag t-A">APPLY</span>Planning for a £480m Q4 versus a £340m Q1 is only possible with a reliable forecast. <span class="tag t-J">JUDGE</span>So for operational efficiency it is very effective.</p>
     <p><span class="tag t-P">P2 · AGAINST</span>However, quantitative techniques ignore qualitative reality. <span class="tag t-E">EXPLAIN</span>They assume the numerical past repeats. <span class="tag t-C">CHAIN</span>They cannot see new competitors, changing diets or a recession; this means the forecast can be confidently wrong, leading Greggs to mis-allocate resources. <span class="tag t-A">APPLY</span>The pandemic, invisible in any prior trend line, collapsed food-to-go sales overnight. <span class="tag t-J">JUDGE</span>So in fast-changing conditions the techniques are weak.</p>
     <p><span class="tag t-P">P3 · ALTERNATIVE</span>A better approach may be to combine forecasting with market research and scenario planning. <span class="tag t-E">EXPLAIN</span>Primary research captures customer intentions the data cannot. <span class="tag t-C">CHAIN</span>This means Greggs can spot a shift — e.g. demand for healthier options — early; as a result it adapts its range before sales fall, turning a threat into an opportunity. <span class="tag t-A">APPLY</span>Greggs' vegan sausage roll launch came from reading changing tastes, not extrapolating old data. <span class="tag t-J">JUDGE</span>So qualitative insight strengthens the quantitative forecast.</p>
     <p><span class="tag t-P">P4 · LIMITATION OF ALTERNATIVE</span>Yet market research has its own weaknesses. <span class="tag t-E">EXPLAIN</span>It is costly, slower and can be biased. <span class="tag t-C">CHAIN</span>Surveys may be unrepresentative and what customers say they will buy differs from what they do; this means decisions built on it can also be flawed, wasting the research spend. <span class="tag t-A">APPLY</span>For a high-volume, low-margin chain like Greggs, large research budgets eat into thin margins. <span class="tag t-J">JUDGE</span>So the alternative is not a complete fix either.</p>
     <p><span class="tag t-J">P5 · CONCLUSION (4Ws)</span><b>Which:</b> Overall, quantitative forecasting is useful but most effective when combined with qualitative judgement, rather than used alone. <b>Why:</b> because the numbers plan the predictable while research and judgement handle the unpredictable. <b>Why (develop):</b> this matters because Greggs' profit depends on getting high-volume operational decisions right every single quarter. <b>What (depends on):</b> however, it depends on the stability of the market and the quality of the data — in a stable period the quantitative forecast alone may suffice, but in a volatile one the qualitative overlay becomes essential.</p>`,
     fb:"Full 5×5: FOR → AGAINST → ALTERNATIVE → LIMITATION OF ALTERNATIVE → 4Ws. Each body paragraph is a complete PECAN chain ending in judgement. The conclusion must make a supported decision and say what it depends on."}
  ]
},
{code:"3.3.2", subtheme:"3.3", title:"Investment appraisal", business:"Payback · ARR · NPV", status:"soon"},
{code:"3.3.3", subtheme:"3.3", title:"Decision trees", business:"Expected values & probability", status:"soon"},
{code:"3.3.4", subtheme:"3.3", title:"Critical path analysis", business:"EST · LFT · total float", status:"soon"},
{code:"3.3.5", subtheme:"3.3", title:"Contribution", business:"Contribution as a decision tool", status:"soon"}
];
