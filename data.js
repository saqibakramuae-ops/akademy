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

window.SUBTHEME_TITLE = {"3.3.1":"Business objectives & strategy","3.3.3":"Decision-making techniques","3.3.4":"Influences on business decisions","3.3.5":"Assessing competitiveness","3.3.6":"Managing change"};
window.SUBTHEME_SUB = {"3.3.1":"Theme 3: Business decisions and strategy \u2014 corporate objectives and mission, theories of corporate strategy, SWOT and external influences.","3.3.6":"Theme 3: Business decisions and strategy \u2014 the key factors in managing change and how businesses plan for risk through contingency and succession planning.","3.3.5":"Theme 3: Business decisions and strategy \u2014 interpreting financial statements, ratio analysis and human-resource measures to judge competitiveness.","3.3.3":"Theme 3: Business decisions and strategy \u2014 the quantitative tools used to make and justify business decisions.","3.3.4":"Theme 3: Business decisions and strategy \u2014 corporate culture, stakeholders, ethics and CSR, and how they shape business decisions."};
window.ICONS = {"3.3.3.1":"📈","3.3.3.2":"💷","3.3.3.3":"🌳","3.3.3.4":"🧭","3.3.3.5":"➗","3.3.4.5":"⚖️","3.3.4.6":"♻️","3.3.4.1":"🏢","3.3.4.2":"🗂️","3.3.4.3":"🔄","3.3.4.7":"🤝","3.3.4.4":"👥","3.3.5.1":"📄","3.3.5.2":"📊","3.3.5.3":"👔","3.3.6.1":"🔄","3.3.6.2":"🛡️","3.3.1.1":"🎯","3.3.1.2":"♟️","3.3.1.3":"🧩","3.3.1.4":"🌍"};

window.CURRICULUM = [
{
  code:"3.3.3.1", subtheme:"3.3.3", title:"Quantitative sales forecasting",
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
      </ul>`},
  {h:"Extrapolation — and adjusting for variance", html:`
      <p>Once you have the moving-average trend, you can <b>extrapolate</b>: draw a line of best fit through the moving-average points and extend it forward to read off a future forecast. (You won't be asked to draw the line in an exam — just to understand and use it.)</p>
      <p>The line of best fit smooths out the real peaks and troughs, so a sharper forecast <b>adjusts for the average variance from the trend</b>:</p>
      <ol>
        <li>For each year, find the <b>variation</b> = actual sales − moving average.</li>
        <li>Add the variations and divide by how many there are → the <b>average variance from trend</b>.</li>
        <li>Add that average variance to the extrapolated forecast.</li>
      </ol>
      <div class="note-ex">Worked example: an extrapolated forecast of <b>£42.50m</b> with an average variance of <b>−£0.08m</b> gives an adjusted forecast of <b>£42.42m</b>.</div>
      <p>Exam tip: this full calculation is rarely set from scratch — you're usually given most of the working and asked to finish or interpret it.</p>`},
  {h:"Four-quarter (centred) moving average", html:`
      <p>Seasonal businesses smooth their data over the <b>four quarters</b> of the year. But with four (an even number) there is <b>no middle quarter</b> to plot the average against — so you <b>centre</b> it:</p>
      <ol>
        <li>Add four consecutive quarters → a <b>4-quarter total</b> (sits between Q2 and Q3 of the group).</li>
        <li>Add two consecutive 4-quarter totals → an <b>8-quarter total</b>.</li>
        <li>Divide the 8-quarter total by <b>8</b> → the <b>centred moving average</b> (the trend), now lined up with a real quarter.</li>
        <li><b>Variation</b> = actual sales − centred average (trend).</li>
      </ol>
      <div class="note-ex">Example: for 2018 Q3, (2570 + 2770) ÷ 8 = <b>667.5</b>, so variation = 770 − 667.5 = <b>+102.5</b>.</div>
      <table class="datatable">
        <tr><th>Quarter</th><th>Sales</th><th>Centred 4-qtr avg (trend)</th><th>Variation</th></tr>
        <tr><td>2018 Q3</td><td>770</td><td>667.50</td><td>+102.50</td></tr>
        <tr><td>2018 Q4</td><td>900</td><td>717.50</td><td>+182.50</td></tr>
        <tr><td>2019 Q1</td><td>600</td><td>783.75</td><td>−183.75</td></tr>
        <tr><td>2019 Q2</td><td>700</td><td>900.00</td><td>−200.00</td></tr>
        <tr><td>2019 Q3</td><td>1,100</td><td>975.00</td><td>+125.00</td></tr>
        <tr><td>2019 Q4</td><td>1,500</td><td>987.50</td><td>+512.50</td></tr>
      </table>
      <p><b>Seasonal (cyclical) variation</b> averages the variations for the <i>same quarter</i> across years — e.g. Q3 = (+102.5 + 125) ÷ 2 = <b>+113.75</b> — showing how much each quarter typically runs above or below trend.</p>`}
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
     fb:"Reward the application of 'line of best fit / extrapolation' and credit the correlation-≠-causation point — it lifts the answer into analysis."},
  {marks:4, q:"Sales (£m): 2016=14, 2017=16, 2018=18, 2019=21, 2020=19, 2021=21, 2022=24. Calculate the three-period moving average (plotted against the middle year).",
     model:`2017 = (14+16+18)÷3 = <b>16.00</b> <span class="pt">1</span>. 2018 = (16+18+21)÷3 = <b>18.33</b> <span class="pt">1</span>. 2019 = (18+21+19)÷3 = <b>19.33</b>. 2020 = (21+19+21)÷3 = <b>20.33</b> <span class="pt">1</span>. 2021 = (19+21+24)÷3 = <b>21.33</b> <span class="pt">1</span>. (2016 and 2022 have no moving average — they are the end points.)`,
     fb:"Each average sits against the MIDDLE year of its three. The first and last years can't have a three-period average."},
  {marks:4, q:"Using those three-period moving averages, calculate the variation (actual − moving average) for each year, then the average variation.",
     model:`2017: 16−16.00 = 0 <span class="pt">1</span>. 2018: 18−18.33 = −0.33. 2019: 21−19.33 = +1.67. 2020: 19−20.33 = −1.33. 2021: 21−21.33 = −0.33 <span class="pt">1</span>. Sum = 0 − 0.33 + 1.67 − 1.33 − 0.33 = −0.32 <span class="pt">1</span>. Average variation = −0.32 ÷ 5 = <b>−0.064</b> <span class="pt">1</span>.`,
     fb:"Variation = actual sales − moving average. Average variation = sum of variations ÷ number of variations; here −0.064."},
  {marks:4, q:"The four-quarter totals for a seasonal business are 2,570, 2,770 and 2,970. Calculate the centred four-quarter moving average and the variation for 2018 Q3 (sales 770) and 2018 Q4 (sales 900).",
     model:`2018 Q3: centred average = (2570 + 2770) ÷ 8 = <b>667.5</b> <span class="pt">1</span>; variation = 770 − 667.5 = <b>+102.5</b> <span class="pt">1</span>. 2018 Q4: centred average = (2770 + 2970) ÷ 8 = <b>717.5</b> <span class="pt">1</span>; variation = 900 − 717.5 = <b>+182.5</b> <span class="pt">1</span>.`,
     fb:"Centre by averaging two consecutive 4-quarter totals over 8. Variation = actual − centred trend."},
  {marks:2, q:"The Q3 variations are +102.5 and +125.0; the Q4 variations are +182.5 and +512.5. Calculate the seasonal (cyclical) variation for Q3 and Q4.",
     model:`Q3 = (+102.5 + 125.0) ÷ 2 = <b>+113.75</b> <span class="pt">1</span>. Q4 = (+182.5 + 512.5) ÷ 2 = <b>+347.5</b> <span class="pt">2</span>.`,
     fb:"Seasonal variation = the average of the variations for the same quarter across years."},
  {marks:4, q:"VoltRide sales (£m): 2020=8.0, 2021=9.6, 2022=11.2, 2023=13.5, 2024=12.1, 2025=14.4. Calculate the three-period moving average for 2023 and the average variation from trend for 2021–2024.",
     model:`2023 moving average = (11.2 + 13.5 + 12.1) ÷ 3 = <b>£12.27m</b> <span class="pt">1</span>. Variations: 2021 = 0.00, 2022 = −0.23, 2023 = +1.23, 2024 = −1.23 <span class="pt">1</span>. Sum = −0.23 <span class="pt">1</span>; average variation = −0.23 ÷ 4 = <b>−£0.06m</b> <span class="pt">1</span>.`,
     fb:"1 mark for the moving-average method, 1 for £12.27m, 1 for the variation values/total, 1 for the average of −£0.06m."},
  {marks:4, q:"Explain one conclusion VoltRide could draw from its variation figures.",
     model:`Sales were £1.23m <b>above</b> the trend in 2023 <span class="pt">1</span>, suggesting a year of particularly strong demand <span class="pt">2</span>. However, sales were £1.23m <b>below</b> trend in 2024 <span class="pt">3</span>, showing external changes such as higher interest rates and competitor entry can push actual sales away from the forecast — so VoltRide should treat the forecast as a guide, not a guaranteed figure <span class="pt">4</span>.`,
     fb:"Reward a specific conclusion drawn from the actual variation figures, developed into a consequence for how VoltRide uses the forecast."}
  ],
  caseStudy:{
    business:"Greggs plc",
    intro:`<p><b>Greggs plc</b>, the UK food-on-the-go bakery chain, has strongly seasonal sales — demand peaks around festive periods and dips in quieter quarters. Its planning team uses quantitative forecasting to set staffing, stock and cash-flow budgets.</p>
    <p class="note-ex"><b>Illustrative quarterly sales (£m)</b> — figures simplified for revision.</p>
    <table class="datatable">
      <tr><th>Quarter</th><th>Y1 Q1</th><th>Y1 Q2</th><th>Y1 Q3</th><th>Y1 Q4</th><th>Y2 Q1</th><th>Y2 Q2</th><th>Y2 Q3</th><th>Y2 Q4</th></tr>
      <tr><td>Sales (£m)</td><td>320</td><td>360</td><td>380</td><td>460</td><td>340</td><td>380</td><td>400</td><td>480</td></tr>
    </table>
    <p>Q4 is consistently the strongest quarter (festive trading); Q1 is the weakest. Sales are also drifting upward year on year.</p>
      <hr style="border:none;border-top:2px solid var(--line);margin:22px 0">
      <h2 style="font-family:var(--serif)">Second case: VoltRide Ltd</h2>
      <p><b>VoltRide Ltd</b> is a UK retailer of electric bikes, batteries and accessories, selling online and through two city-centre stores. Sales grew strongly to 2023, fell in 2024 (a low-price online rival entered and higher interest rates cut spending), then recovered in 2025 after new cycle lanes and a compact commuter e-bike launch. The directors are weighing a larger warehouse lease costing <b>£0.8m a year</b> for 2026.</p>
      <p class="note-ex">Annual sales revenue, with three-period moving average and variation (variation = actual − moving average).</p>
      <table class="datatable">
        <tr><th>Year</th><th>Sales (£m)</th><th>3-period MA (£m)</th><th>Variation (£m)</th></tr>
        <tr><td>2020</td><td>8.0</td><td>—</td><td>—</td></tr>
        <tr><td>2021</td><td>9.6</td><td>9.60</td><td>0.00</td></tr>
        <tr><td>2022</td><td>11.2</td><td>11.43</td><td>−0.23</td></tr>
        <tr><td>2023</td><td>13.5</td><td>12.27</td><td>+1.23</td></tr>
        <tr><td>2024</td><td>12.1</td><td>13.33</td><td>−1.23</td></tr>
        <tr><td>2025</td><td>14.4</td><td>—</td><td>—</td></tr>
      </table>
      <p>A trend line gives an extrapolated 2026 forecast of <b>£15.10m</b>; adjusted for the average variation (−£0.06m) this becomes <b>£15.04m</b>.</p>`
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
     fb:"Full 5×5: FOR → AGAINST → ALTERNATIVE → LIMITATION OF ALTERNATIVE → 4Ws. Each body paragraph is a complete PECAN chain ending in judgement. The conclusion must make a supported decision and say what it depends on."},
  {marks:12, q:"Assess the limitations of relying on quantitative sales forecasting for a business such as Pets at Home. (12)",
     model:`<p><span class="tag t-P">POINT</span>One limitation is that it assumes past trends will continue, because it relies on historical data. <span class="tag t-C">CHAIN</span>This leads to inaccurate predictions if unusual events — such as the sharp rise in pet ownership in 2021 — do not continue; therefore, if Pets at Home forecasts on this one-off increase it could overestimate demand, and as a result may overstock products and incur higher costs.</p>
     <p><span class="tag t-P">POINT</span>A second limitation is that external factors, such as economic changes or social trends, can make forecasts unreliable because these influences are hard to predict. <span class="tag t-C">CHAIN</span>This leads to a risk that sales fall below forecast if, for example, customers cut back during a recession; therefore forecasts based only on past data may not reflect real future conditions, and as a result decisions could be flawed and resources misallocated.</p>
     <p><span class="tag t-J">HOWEVER</span>However, one benefit is that quantitative forecasting provides clear, objective data, because it uses numerical analysis of trends over time. This leads to more informed decisions on stock, staffing and promotions, so Pets at Home can plan for predictable seasonal demand (e.g. winter pet accessories), reducing waste and improving availability. On balance, forecasting is a useful planning tool but should not be relied on alone, especially where demand is volatile or shaped by one-off events.</p>`,
     fb:"Mr. Akram's exemplar (Pets at Home). Note the house chain — 'because → this leads to → therefore → as a result' — and the balanced 'however' before a supported judgement."},
  {marks:20, q:"Evaluate whether Live the Adventure Ltd should offer winter activity holidays in Europe or expand its existing operations. Use the sales-forecasting data in your answer. (20)",
     model:`<p><span class="tag t-P">FOR WINTER</span>One benefit of offering winter activity holidays in Europe is that it could reduce the seasonal variation Live the Adventure Ltd currently experiences, because the 2015–2017 data shows Q1 and Q4 consistently underperform Q2 and Q3 (Q4 2016 and Q1 2017 had negative variations of −13.75 and −16.25). This means the firm relies heavily on spring and summer for revenue, which leads to volatile income and underused winter staff; therefore skiing and snowboarding holidays could generate off-season income, and as a result stabilise cash flow and improve year-round staff utilisation.</p>
     <p><span class="tag t-J">AGAINST WINTER</span>However, a drawback is the added operational complexity and cost, because winter sports need specialist instructors, costly safety equipment and facilities in remote, colder regions. This leads to higher upfront investment and unfamiliar logistics for a UK firm; therefore it may be stretched beyond its capabilities, and as a result could damage its brand and reduce profitability if the ventures underperform.</p>
     <p><span class="tag t-P">FOR EXPANDING</span>One benefit of expanding existing operations in Shropshire and Nepal is that the current model is already working well, because the 4-quarter moving average rose steadily from 61.25 (2015 Q3) to 78.75 (2017 Q2). This is clear evidence of rising demand; therefore focusing on proven sites supports growth with less risk, and as a result brings economies of scale, stronger loyalty and more consistent returns.</p>
     <p><span class="tag t-J">AGAINST EXPANDING</span>A drawback of expanding only within current sites is that it does not fix the winter underutilisation, because Q1 sales stay flat at £40,000–£60,000 despite overall growth. This leads to low winter activity for staff and facilities; therefore the firm suffers off-peak inefficiencies, and as a result its long-term growth could be more limited than a diversified strategy.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, although winter holidays could reduce seasonal variation, expanding existing operations is more likely to bring long-term success, because the business already has a proven model with steady growth and rising demand, making it lower-risk and more sustainable. Success depends on whether Live the Adventure Ltd can keep scaling efficiently while maintaining quality. It is recommended the business prioritises expanding current sites to build loyalty and economies of scale, while cautiously exploring winter diversification to improve year-round use later.</p>`,
     fb:"Mr. Akram's exemplar (Live the Adventure Ltd): two options each argued and challenged, ending in a recommendation plus 'success depends on'. Note the house chain throughout."},
  {marks:12, q:"Assess the usefulness of quantitative sales forecasting for VoltRide Ltd. (12)",
     model:`<p><span class="tag t-P">POINT</span>Quantitative forecasting is useful for VoltRide's planning. <span class="tag t-E">EXPLAIN</span>Its moving-average trend is rising, which lets it estimate future sales. <span class="tag t-C">CHAIN</span>This means VoltRide can plan stock, warehouse space, delivery capacity and cash flow; the adjusted 2026 forecast of £15.04m gives a clear numerical starting point for the warehouse decision, and the near-zero average variation shows the trend fits the period reasonably well. <span class="tag t-J">JUDGE</span>So for initial planning it is valuable.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the forecast can mislead. The 2023 and 2024 variations are large (+£1.23m and −£1.23m), so the near-zero average hides big year-to-year swings; interest rates, inflation, a new low-price competitor and technology change can all break the past pattern, and only six years of data exist.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> forecasting is useful for initial, short-term planning. <b>Why:</b> it gives a numerical starting point and a reasonable trend fit. <b>Why (develop):</b> but the large variations and external volatility limit its reliability. <b>What (depends on):</b> VoltRide should combine it with current market research, competitor intelligence and cash-flow analysis before committing to the fixed £0.8m lease.</p>`,
     fb:"VoltRide case. Balanced 12-marker: a developed benefit, a genuine limitation using the ±£1.23m variations, and a 4Ws conclusion that states what the usefulness depends on."},
  {marks:12, q:"Evaluate whether VoltRide should use its adjusted 2026 forecast to lease a larger warehouse and increase delivery capacity. (12)",
     model:`<p><span class="tag t-P">POINT</span>There is a case for leasing the larger warehouse. <span class="tag t-E">EXPLAIN</span>The adjusted forecast of about £15.04m suggests continued growth from £14.4m in 2025. <span class="tag t-C">CHAIN</span>Extra warehouse and delivery capacity would prevent stock shortages, improve delivery times and let VoltRide meet rising demand; this protects sales and reputation as the market grows. <span class="tag t-J">JUDGE</span>So leasing is justified if the growth holds.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the decision is risky. The 2024 fall and −£1.23m variation show demand can drop quickly; if sales come in below forecast, VoltRide still pays the fixed £0.8m lease while holding unsold stock, raising costs and straining cash flow. A flexible short-term contract or a staged increase in stock would cut that risk.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> lease only if current orders, consumer confidence and competitor information support the forecast. <b>Why:</b> the forecast alone is not enough given recent volatility. <b>Why (develop):</b> the £0.8m is a fixed annual cost whatever the actual sales. <b>What (depends on):</b> the decision is more justified if VoltRide can negotiate flexibility in the lease or scale capacity gradually.</p>`,
     fb:"Links the forecast to a real decision. Credit using at least one variation figure, weighing the fixed £0.8m cost against uncertain demand, and a judgement conditional on market evidence."}
  ],
  resources:[
    {label:"Lesson notes: 3-period moving average & extrapolation (PDF)", file:"resources/3-3-1-qsf-lesson-notes.pdf"},
    {label:"Lesson notes: 4-quarter (centred) moving average & extrapolation (PDF)", file:"resources/3-3-1-qsf-4quarter-notes.pdf"},
    {label:"VoltRide QSF case study & questions (PDF)", file:"resources/3-3-1-voltride-case-student.pdf"}
  ]
},
{
  code:"3.3.3.2", subtheme:"3.3.3", title:"Investment appraisal",
  business:"Case study: Greggs plc — Kettering vs Derby", status:"live",
  notes:[
    {h:"What is investment appraisal?", html:`
      <p>Investment appraisal is how a business judges whether a major investment — a new site, machinery, a project — is <b>worthwhile</b>, by comparing the <b>initial cost</b> with the <b>future net cash flows</b> it is expected to generate.</p>
      <p>The spec covers three methods, each showing something different:</p>
      <ul>
        <li><b>Payback</b> — how quickly the cost is recovered (risk & liquidity).</li>
        <li><b>Average rate of return (ARR)</b> — how profitable the project is (%).</li>
        <li><b>Net present value (NPV)</b> — how much value it adds in today's money.</li>
      </ul>`},
    {h:"Simple payback", html:`
      <p><b>Payback</b> is the time taken to recover the initial cost from net cash flows. Work out the <b>cumulative</b> net cash flow year by year; find the year it turns positive; then use the fraction:</p>
      <div class="note-ex">Months into the final year = (amount still to recover ÷ that year's cash flow) × 12</div>
      <p><b>Greggs Project A</b>: cumulative reaches −£5m by the end of Year 3, with £25m coming in Year 4 → £5m ÷ £25m × 12 = 2 months → <b>3 years 2 months</b>.</p>
      <p><b>Use it for:</b> judging risk and liquidity — a shorter payback means cash is at risk for less time. <b>Weakness:</b> it ignores all cash after payback, ignores the time value of money, and doesn't measure profitability.</p>`},
    {h:"Average rate of return (ARR)", html:`
      <p><b>ARR</b> shows the average annual profit as a percentage of the initial cost:</p>
      <div class="note-ex">ARR = ( (total net cash inflow − initial cost) ÷ project life ) ÷ initial cost × 100</div>
      <p><b>Greggs Project B</b>: (£200m − £120m) = £80m total return ÷ 5 = £16m a year; £16m ÷ £120m × 100 = <b>13.3%</b>.</p>
      <p><b>Use it for:</b> comparing against a target return or the firm's ROCE. <b>Weakness:</b> it's an average that ignores <i>when</i> cash arrives (the time value of money).</p>`},
    {h:"Discounted cash flow & Net Present Value (NPV)", html:`
      <p>A pound today is worth more than a pound in the future — the <b>time value of money</b>. <b>Discount factors</b> convert future cash into today's value:</p>
      <div class="note-ex">Present value = net cash flow × discount factor &nbsp;&middot;&nbsp; NPV = total present value − initial cost</div>
      <p>A <b>positive NPV</b> means the project is forecast to earn <i>more</i> than the required return, so it adds value. <b>Greggs</b>: Project A NPV = <b>+£3.41m</b>; Project B NPV = <b>+£24.41m</b>.</p>
      <p><b>Use it for:</b> the most complete measure — it uses all cash flows and allows for timing. <b>Weakness:</b> more complex, and sensitive to the forecasts and the chosen discount rate.</p>`},
    {h:"Which method, and limitations", html:`
      <ul>
        <li>Payback → <b>risk & liquidity</b>; ARR → <b>profitability</b>; NPV → <b>value added</b> (usually carries the most weight).</li>
        <li>All three rely on <b>forecast</b> cash flows — only as good as the estimates.</li>
        <li>They ignore <b>qualitative factors</b>: strategy, capacity, staff, risk, sustainability.</li>
        <li>Best used <b>together</b>, alongside judgement about the wider situation.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Investment appraisal", marks:2, body:`The process a business uses to judge whether a major investment is worthwhile <span class="pt">1</span> by comparing its initial cost with the future cash flows it is expected to generate <span class="pt">2</span>.`},
    {term:"Payback period", marks:2, body:`The length of time it takes a project to recover its initial cost from its net cash flows <span class="pt">1</span>; a shorter payback means cash is at risk for less time, reducing risk <span class="pt">2</span>.`},
    {term:"Average rate of return (ARR)", marks:2, body:`The average annual profit of a project expressed as a percentage of its initial investment <span class="pt">1</span>, which can be compared against a target return or other projects to judge profitability <span class="pt">2</span>.`},
    {term:"Net present value (NPV)", marks:2, body:`The total present value of a project's future cash flows minus its initial investment <span class="pt">1</span>; a positive NPV means the project is forecast to earn more than the required return, so it adds value <span class="pt">2</span>.`},
    {term:"Discounted cash flow (DCF)", marks:2, body:`A technique that reduces future cash flows to their value today using discount factors <span class="pt">1</span>, because money received in the future is worth less than money received now <span class="pt">2</span>.`},
    {term:"Discount factor", marks:2, body:`A number less than one used to convert a future cash flow into its present value <span class="pt">1</span>; the further in the future the cash flow, and the higher the discount rate, the smaller the factor <span class="pt">2</span>.`},
    {term:"Time value of money", marks:2, body:`The principle that a sum of money is worth more today than the same sum in the future <span class="pt">1</span>, because today's money can be invested to earn a return or is eroded by inflation <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:3, q:"Project A (Kettering) has an initial cost of £135m and net cash flows of £50m, £45m, £35m, £25m, £20m (Years 1–5). Calculate the payback period in years and months.",
     model:`Cumulative net cash flow: Year 1 (−85), Year 2 (−40), Year 3 (−5), Year 4 +20 <span class="pt">1</span>. So £5m is still to be recovered going into Year 4; £5m ÷ £25m × 12 = 2 months <span class="pt">1</span>. Payback = <b>3 years 2 months</b> <span class="pt">1</span>.`,
     fb:"3 marks: cumulative flows + the fraction (£5m ÷ £25m × 12) + the answer. If no working is shown but the answer is 3 years 2 months, award full marks."},
    {marks:2, q:"Project B (Derby) pays back in 3 years 7 months. State which project payback favours, and by how many months.",
     model:`Payback favours <b>Project A</b> <span class="pt">1</span>, by <b>5 months</b> (3 years 2 months versus 3 years 7 months) <span class="pt">2</span>.`,
     fb:"1 mark for identifying Project A, 1 for the correct difference of 5 months."},
    {marks:4, q:"Explain one benefit and one drawback of using payback to appraise these projects. Refer to Greggs in your answer.",
     model:`<b>Benefit:</b> payback is simple to calculate and focuses on how quickly cash is recovered <span class="pt">1</span>; this matters to Greggs because it spent around £300m on capital projects in 2025 and its ROCE fell from 20.3% to 16.0%, so getting cash back sooner reduces risk <span class="pt">2</span>. <b>Drawback:</b> payback ignores cash flows after the payback point <span class="pt">3</span> — Project B earns £110m in Years 4–5 against just £45m for A, so payback undervalues B <span class="pt">4</span>.`,
     fb:"1 mark each for a benefit and a drawback (knowledge), 1 for Greggs application, 1 for development."},
    {marks:4, q:"Project B (Derby) costs £120m and has total net cash inflows of £200m over 5 years. Calculate its Average Rate of Return (ARR) to one decimal place.",
     model:`Total net return = £200m − £120m = £80m <span class="pt">1</span>. Average annual profit = £80m ÷ 5 = £16m <span class="pt">1</span>. ARR = £16m ÷ £120m × 100 <span class="pt">1</span> = <b>13.3%</b> <span class="pt">1</span>.`,
     fb:"4 marks: formula + total return + average profit + answer. 13.3% = full marks; 13.33% or 13% = 3 marks."},
    {marks:4, q:"Explain one benefit and one drawback of using ARR to appraise these projects. Refer to Greggs in your answer.",
     model:`<b>Benefit:</b> ARR gives a single percentage that can be compared with a target return <span class="pt">1</span>; Greggs can compare Project B's 13.3% with its underlying ROCE of 16.0% to see whether it lifts or dilutes returns <span class="pt">2</span>. <b>Drawback:</b> ARR ignores the timing of cash flows and the time value of money <span class="pt">3</span> — Project A's cash flows fall over time while B's rise, which an average completely hides <span class="pt">4</span>.`,
     fb:"1 mark each for benefit and drawback, 1 for Greggs application, 1 for development."},
    {marks:4, q:"Using the 10% discount factors (0.909, 0.826, 0.751, 0.683, 0.621), calculate the NPV of Project A (cash flows £50m, £45m, £35m, £25m, £20m; cost £135m). Give £m to two decimal places.",
     model:`Present values: 50×0.909 = 45.45; 45×0.826 = 37.17; 35×0.751 = 26.29; 25×0.683 = 17.08; 20×0.621 = 12.42 <span class="pt">1</span><span class="pt">2</span>. Total PV = £138.41m <span class="pt">1</span>. NPV = £138.41m − £135m = <b>+£3.41m</b> <span class="pt">1</span>.`,
     fb:"4 marks: method + present values (allow one slip) + total PV + NPV. +£3.41m = full marks."},
    {marks:2, q:"Project A's NPV is +£3.41m and Project B's is +£24.41m. State which project NPV favours, and explain what a positive NPV means for Greggs.",
     model:`NPV favours <b>Project B</b> <span class="pt">1</span>. A positive NPV means the project is forecast to earn more than the 10% required return, and B adds about £21m more value in today's money than A <span class="pt">2</span>.`,
     fb:"1 mark for Project B, 1 for a developed explanation of what a positive NPV means."}
  ],
  caseStudy:{
    business:"Greggs plc — Kettering (Project A) vs Derby (Project B)",
    intro:`<p><b>Greggs plc</b> is a UK food-to-go retailer with over 2,600 shops, aiming to grow the estate beyond 3,000. 2025 was the peak year of a multi-year investment programme, with capital expenditure of around <b>£300m</b>. Underlying <b>ROCE fell from 20.3% (2024) to 16.0% (2025)</b> because of the planned rise in capital employed, so returns on new investment matter.</p>
    <p><b>Project A — Kettering National Distribution Centre:</b> £30m land + £105m further investment (£135m total), operational 2027. Enables around <b>900 further net new shops</b> and relieves existing distribution centres. Cash flows are <b>front-loaded</b>, falling each year.</p>
    <p><b>Project B — Derby frozen production & logistics site:</b> around £120m of fit-out, equipment and automation, operational by end 2026. Adds production capacity, new product lines and up to <b>600 jobs</b>. Cash flows start low and <b>rise</b> as the site ramps up.</p>
    <p class="note-ex"><b>Forecast net cash flows & 10% discount factors</b> (illustrative — invented for this exercise).</p>
    <table class="datatable">
      <tr><th>Year</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr>
      <tr><td>Project A (£m)</td><td>(135)</td><td>50</td><td>45</td><td>35</td><td>25</td><td>20</td></tr>
      <tr><td>Project B (£m)</td><td>(120)</td><td>20</td><td>30</td><td>40</td><td>50</td><td>60</td></tr>
      <tr><td>Discount factor</td><td>1.000</td><td>0.909</td><td>0.826</td><td>0.751</td><td>0.683</td><td>0.621</td></tr>
    </table>
    <p class="note-ex"><b>Results summary</b> — Payback: A 3y 2m, B 3y 7m (A faster) &middot; ARR: A 5.9%, B 13.3% (B higher) &middot; NPV: A +£3.41m, B +£24.41m (B higher). Full student worksheet and extra past-paper questions are in the <b>Resources</b> tab.</p>`
  },
  exam:[
    {marks:4, q:"Project A (Kettering) costs £135m and has total net cash inflows of £175m over 5 years. Calculate its Average Rate of Return (ARR) to one decimal place. (4)",
     model:`Total net return = £175m − £135m = £40m <span class="pt">1</span>. Average annual profit = £40m ÷ 5 = £8m <span class="pt">1</span>. ARR = £8m ÷ £135m × 100 <span class="pt">1</span> = <b>5.9%</b> <span class="pt">1</span>.`,
     fb:"4 marks: formula + total return + average profit + answer. 5.9% = full marks. Note this is well below Greggs' 16.0% ROCE."},
    {marks:8, q:"Assess the usefulness of payback to Greggs when deciding between Project A and Project B. (8)",
     model:`<p><span class="tag t-P">POINT</span>Payback is useful to Greggs as a quick measure of <b>risk and liquidity</b>. <span class="tag t-E">EXPLAIN</span>It shows how long each project takes to return its initial cost. <span class="tag t-C">CHAIN</span>Project A recovers its £135m in 3 years 2 months versus 3 years 7 months for B, so A returns cash 5 months sooner; this means Greggs' money is at risk for less time, which matters while it is spending heavily (≈£300m capex in 2025) and ROCE has fallen from 20.3% to 16.0%. <span class="tag t-A">APPLY</span>With cash under pressure, faster recovery protects liquidity. <span class="tag t-J">JUDGE</span>So on payback, Project A looks the safer choice.</p>
     <p><span class="tag t-J">HOWEVER</span><b>However</b>, payback ignores all cash flows <i>after</i> the payback point — Project B earns £110m in Years 4–5 against just £45m for A — and it ignores the time value of money, so it badly undervalues B and says nothing about profitability. The 5-month gap is small next to B's far larger total return (£80m vs £40m), so Greggs should treat payback as one input, not the deciding factor.</p>`,
     fb:"8-mark 'assess' must be balanced even though it looks one-sided — the 'however' is essential. Reward use of the figures (3y2m vs 3y7m; £110m vs £45m) and a judgement on when payback is most/least useful."},
    {marks:12, q:"Using NPV and ARR, assess which project Greggs should choose: Project A (Kettering) or Project B (Derby). (12)",
     model:`<p><span class="tag t-P">POINT</span>On NPV and ARR, Project B is the stronger choice. <span class="tag t-E">EXPLAIN</span>NPV shows value added today and ARR shows profitability relative to cost. <span class="tag t-C">CHAIN</span>B's NPV is +£24.41m against A's +£3.41m (about £21m more), and its ARR is 13.3% versus 5.9%; this means B earns far more for each pound invested and is close to Greggs' ROCE of 16.0%, whereas A's 5.9% would dilute returns. <span class="tag t-A">APPLY</span>B's cash flows grow to £60m by Year 5, which NPV rewards even after discounting. <span class="tag t-J">JUDGE</span>So on both profitability measures, B wins clearly.</p>
     <p><span class="tag t-P">POINT</span>However, B's advantage rests on uncertain, back-loaded forecasts. <span class="tag t-E">EXPLAIN</span>Both NPV and ARR depend on forecast cash flows. <span class="tag t-C">CHAIN</span>B's cash arrives later, from a new automated site, so commissioning delays could hit it; A's front-loaded cash flows are easier to forecast and it pays back 5 months sooner. <span class="tag t-A">APPLY</span>If distribution capacity is the real constraint on Greggs' growth, Kettering's strategic value may matter more than its weak NPV. <span class="tag t-J">JUDGE</span>So A remains defensible on risk and strategy.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> overall Greggs should choose Project B. <b>Why:</b> its NPV is about £21m higher and its ARR more than double A's, so it adds far more value. <b>Why (develop):</b> this matters because Greggs must invest limited capital where returns are highest while ROCE is under pressure. <b>What (depends on):</b> however, this depends on B's ramp-up going to plan — if distribution capacity is what limits new shop openings, Project A becomes the better choice.</p>`,
     fb:"12-mark = trimmed 5×5: one developed FOR, one AGAINST/caution, then the 4Ws conclusion. Reward correct figures and a supported decision that states what it depends on."},
    {marks:20, q:"Evaluate which investment is likely to be the most successful for Greggs: Project A (Kettering) or Project B (Derby). Use investment appraisal and other factors in your answer. (20)",
     model:`<p><span class="tag t-P">P1 · FOR B</span>The most complete measure, NPV, clearly favours Project B. <span class="tag t-E">EXPLAIN</span>NPV uses all the cash flows, discounted to today's value. <span class="tag t-C">CHAIN</span>B's NPV of +£24.41m against A's +£3.41m means B adds roughly £21m more value; as a result it creates far more wealth from a similar outlay, which is what Greggs needs while ROCE is falling. <span class="tag t-A">APPLY</span>B's back-loaded cash flows rising to £60m are rewarded even after discounting. <span class="tag t-J">JUDGE</span>So on value added, B is the stronger project.</p>
     <p><span class="tag t-P">P2 · FOR A</span>However, Project A has genuine merits. <span class="tag t-E">EXPLAIN</span>Its cash flows are front-loaded and recovered sooner. <span class="tag t-C">CHAIN</span>A pays back in 3 years 2 months versus 3 years 7 months, so cash is at risk for less time, and front-loaded forecasts are more reliable than B's later ones; Kettering also unlocks around 900 further shops and relieves distribution bottlenecks. <span class="tag t-A">APPLY</span>If capacity is what limits new openings, that strategic value is large. <span class="tag t-J">JUDGE</span>So A has real appeal on risk and strategy.</p>
     <p><span class="tag t-P">P3 · LIMITATION OF A</span>But A's financial case is thin and fragile. <span class="tag t-E">EXPLAIN</span>Its NPV margin is only about 2.5% of its cost. <span class="tag t-C">CHAIN</span>A's NPV turns negative (−£10.44m) if cash flows fall 10%, and −£2.32m at a 12% discount rate, and its 5.9% ARR is below Greggs' 16.0% ROCE; B, by contrast, stays positive even if cash flows fall 15% (+£2.75m) or costs rise 15%. <span class="tag t-A">APPLY</span>So A risks destroying value if forecasts slip, while B is robust. <span class="tag t-J">JUDGE</span>A's apparent safety is therefore misleading.</p>
     <p><span class="tag t-P">P4 · OTHER FACTORS</span>Non-financial factors also matter. <span class="tag t-E">EXPLAIN</span>Appraisal ignores strategy, jobs, sustainability and risk. <span class="tag t-C">CHAIN</span>B adds production capacity, new product lines and up to 600 jobs; A enables around 900 shops and eases distribution; both depend on automation that could be delayed, and both are designed for lower emissions. <span class="tag t-A">APPLY</span>Which matters more depends on whether capacity or production is the binding constraint on Greggs' growth. <span class="tag t-J">JUDGE</span>So the numbers are not the whole story.</p>
     <p><span class="tag t-J">P5 · CONCLUSION (4Ws)</span><b>Which:</b> Project B, the Derby site. <b>Why stronger:</b> NPV +£24.41m vs +£3.41m and ARR 13.3% vs 5.9%, and it stays positive even if cash flows fall 15% or costs rise 15%. <b>Why reject A:</b> although payback is 5 months faster, A's NPV is thin and turns negative on a 10% shortfall, and its 5.9% ARR would dilute ROCE. <b>What it depends on:</b> B's ramp-up going to plan and secure funding for the £120m outlay — A becomes preferable only if distribution capacity is the binding constraint on new shop openings. Extra evidence needed: Greggs' true cost of capital and B's commissioning risk.</p>`,
     fb:"Full 5×5 PECAN: FOR B → FOR A → LIMITATION OF A → OTHER FACTORS → 4Ws. Every paragraph ends on a judgement. Top band weighs the figures, challenges each side with 'however', and the conclusion states what the decision depends on. A fully reasoned case for A is also creditable."}
  ],
  resources:[
    {label:"Greggs student consolidation worksheet (PDF)", file:"resources/3-3-2-greggs-student-questions.pdf"},
    {label:"Investment appraisal — exam questions (PDF)", file:"resources/3-3-2-exam-questions.pdf"},
    {label:"Jaguar Land Rover — 20-mark extract (PDF)", file:"resources/3-3-2-land-rover-extract.pdf"}
  ]
},
{
  code:"3.3.3.3", subtheme:"3.3.3", title:"Decision trees",
  business:"Case studies: Center Parcs, Tata & noon (UAE)", status:"live",
  notes:[
    {h:"What is a decision tree?", html:`
      <p>A <b>decision tree</b> is a diagram that maps out a decision, the options available, and the possible outcomes — each with a <b>probability</b> and a <b>financial value</b>. It helps a business choose the option with the best expected financial return, while making the risks visible.</p>
      <ul><li>It <b>structures</b> a complex decision clearly.</li><li>It <b>quantifies risk</b> using probabilities and expected values.</li></ul>`},
    {h:"The building blocks", html:`
      <ul>
        <li><b>Decision node</b> — a <b>square</b>. Where the business chooses between options.</li>
        <li><b>Chance node</b> — a <b>circle</b>. Where an uncertain outcome happens (e.g. success or failure). The probabilities on its branches must add up to <b>1</b>.</li>
        <li><b>Branches</b> — the options (from a square) or the outcomes (from a circle).</li>
        <li><b>End values</b> — the financial outcome at the tip of each branch.</li>
      </ul>`},
    {h:"How to calculate", html:`
      <p><b>Step 1 — Expected value (EV / EMV).</b> For each option, multiply every outcome by its probability and add them up. The EV sits at the <b>chance node (circle)</b>.</p>
      <div class="note-ex">EV = (outcome₁ × probability₁) + (outcome₂ × probability₂)</div>
      <p><b>Step 2 — Net gain.</b> Subtract the cost of the option from its EV. The net gain sits at the <b>decision node (square)</b>.</p>
      <div class="note-ex">Net gain = expected value − cost</div>
      <p><b>Step 3 — Decide.</b> Choose the option with the <b>highest net gain</b>; the rejected options are crossed off with a single line.</p>`},
    {h:"Worked example: Buy local vs Import", html:`
      <p>A manufacturer can <b>buy local</b> (cost £5,000) or <b>import</b> (cost £4,000):</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 760 420" style="min-width:560px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <!-- branches -->
        <line x1="58" y1="210" x2="301" y2="110" stroke="var(--muted)" stroke-width="2"/>
        <line x1="58" y1="210" x2="301" y2="310" stroke="var(--muted)" stroke-width="2"/>
        <!-- cross-off buy local -->
        <line x1="120" y1="176" x2="132" y2="192" stroke="#c92a2a" stroke-width="2.5"/>
        <line x1="128" y1="172" x2="140" y2="188" stroke="#c92a2a" stroke-width="2.5"/>
        <!-- outcome branches: buy local -->
        <line x1="339" y1="110" x2="560" y2="62" stroke="var(--muted)" stroke-width="1.6"/>
        <line x1="339" y1="110" x2="560" y2="158" stroke="var(--muted)" stroke-width="1.6"/>
        <!-- outcome branches: import -->
        <line x1="339" y1="310" x2="560" y2="262" stroke="var(--muted)" stroke-width="1.6"/>
        <line x1="339" y1="310" x2="560" y2="358" stroke="var(--muted)" stroke-width="1.6"/>
        <!-- decision node -->
        <rect x="30" y="196" width="28" height="28" rx="3" fill="none" stroke="var(--amber)" stroke-width="2.6"/>
        <!-- chance nodes -->
        <circle cx="320" cy="110" r="19" fill="none" stroke="var(--emerald)" stroke-width="2.4"/>
        <circle cx="320" cy="310" r="19" fill="none" stroke="var(--emerald)" stroke-width="2.4"/>
        <!-- labels -->
        <text x="110" y="150" font-size="13" fill="var(--ink)" font-weight="700">Buy local</text>
        <text x="110" y="166" font-size="11.5" fill="var(--muted)">cost £5,000</text>
        <text x="110" y="286" font-size="13" fill="var(--ink)" font-weight="700">Import</text>
        <text x="110" y="302" font-size="11.5" fill="var(--muted)">cost £4,000</text>
        <text x="320" y="70" font-size="12" fill="var(--ink)" text-anchor="middle" font-weight="700">EV £10,500</text>
        <text x="320" y="356" font-size="12" fill="var(--ink)" text-anchor="middle" font-weight="700">EV £12,500</text>
        <text x="455" y="78" font-size="11" fill="var(--muted)">0.5</text>
        <text x="455" y="150" font-size="11" fill="var(--muted)">0.5</text>
        <text x="455" y="278" font-size="11" fill="var(--muted)">0.7</text>
        <text x="455" y="350" font-size="11" fill="var(--muted)">0.3</text>
        <text x="568" y="66" font-size="12.5" fill="var(--ink)">£15,000</text>
        <text x="568" y="162" font-size="12.5" fill="var(--ink)">£6,000</text>
        <text x="568" y="266" font-size="12.5" fill="var(--ink)">£20,000</text>
        <text x="568" y="362" font-size="12.5" fill="var(--ink)">−£5,000</text>
        <text x="150" y="124" font-size="11.5" fill="#c92a2a" font-weight="700">Net gain £5,500</text>
        <text x="150" y="258" font-size="11.5" fill="var(--emerald)" font-weight="800">Net gain £8,500 ✓</text>
      </svg>
      </div>
      <p><b>Buy local:</b> EV = (£15,000 × 0.5) + (£6,000 × 0.5) = <b>£10,500</b>; net gain = 10,500 − 5,000 = <b>£5,500</b>.<br>
      <b>Import:</b> EV = (£20,000 × 0.7) + (−£5,000 × 0.3) = <b>£12,500</b>; net gain = 12,500 − 4,000 = <b>£8,500</b>.</p>
      <p>The highest net gain is <b>Import (£8,500)</b>, so the business would import; buy local is crossed off.</p>`},
    {h:"Advantages & limitations", html:`
      <h3>Advantages</h3>
      <ul>
        <li><b>Considers risk</b> — probabilities let the business weigh the chance of success or failure before committing money.</li>
        <li><b>Compares options objectively</b> — expected values give a consistent numerical basis for choosing.</li>
        <li><b>Includes costs</b> — net gain shows whether the likely return justifies the outlay.</li>
        <li><b>Structures complex decisions</b> — the diagram makes the options and outcomes clear to stakeholders.</li>
      </ul>
      <h3>Limitations</h3>
      <ul>
        <li><b>Probabilities can be unreliable</b> — they are estimates; if conditions change, the EVs mislead.</li>
        <li><b>EV is not a guaranteed outcome</b> — it is a probability-weighted average; a one-off project with a positive EV can still make a large loss.</li>
        <li><b>Ignores qualitative factors</b> — morale, brand and ethics are left out, so the highest-return option may still harm the business.</li>
        <li><b>Depends on the assumptions</b> — a small change in a forecast can flip which option looks best.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Decision tree", marks:2, body:`A diagram that maps a decision, its options and the possible outcomes with their probabilities and financial values <span class="pt">1</span>, used to choose the option with the best expected financial return <span class="pt">2</span>.`},
    {term:"Expected value (EMV)", marks:2, body:`The probability-weighted average financial outcome of an option <span class="pt">1</span>, found by multiplying each outcome by its probability and adding the results <span class="pt">2</span>.`},
    {term:"Net gain", marks:2, body:`The expected value of an option minus the cost of taking it <span class="pt">1</span>; the option with the highest net gain is normally chosen <span class="pt">2</span>.`},
    {term:"Chance node", marks:2, body:`A point on a decision tree, shown as a circle, where an uncertain outcome occurs <span class="pt">1</span>; the probabilities on its branches must add up to 1 <span class="pt">2</span>.`},
    {term:"Decision node", marks:2, body:`A point on a decision tree, shown as a square, where the business chooses between options <span class="pt">1</span>; the chosen option is the one with the highest net gain <span class="pt">2</span>.`},
    {term:"Probability", marks:2, body:`A measure of how likely an outcome is, between 0 and 1 <span class="pt">1</span>; on a chance node the probabilities of all outcomes must total 1 <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:4, q:"Option A (New product) has a 60% chance of £150,000 and a 40% chance of £65,000. Option B (Modify existing) has a 70% chance of £220,000 and a 30% chance of −£25,000. Calculate the expected value of each option.",
     model:`New product: (£150,000 × 0.6) + (£65,000 × 0.4) = 90,000 + 26,000 = <b>£116,000</b> <span class="pt">1</span><span class="pt">2</span>. Modify existing: (£220,000 × 0.7) + (−£25,000 × 0.3) = 154,000 − 7,500 = <b>£146,500</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"EV = sum of (outcome × probability). Watch the negative failure outcome for Modify (−£25,000 × 0.3 = −£7,500)."},
    {marks:4, q:"New product costs £60,000 (EV £116,000); Modify existing costs £75,000 (EV £146,500). Calculate the net gain of each and recommend which to choose.",
     model:`New product: £116,000 − £60,000 = <b>£56,000</b> <span class="pt">1</span>. Modify existing: £146,500 − £75,000 = <b>£71,500</b> <span class="pt">1</span>. The higher net gain is Modify existing <span class="pt">1</span>, so the business should <b>modify the existing product</b> <span class="pt">1</span>.`,
     fb:"Net gain = EV − cost. The recommendation follows the highest net gain — here Modify (£71,500 vs £56,000)."},
    {marks:4, q:"Launch new product: 40% chance of +£30m, 60% chance of −£8m, cost £5m. Modify existing: 80% chance of +£3m, 20% chance of +£1.5m, cost £1m. Calculate the expected value and net gain of each.",
     model:`Launch: EV = (30 × 0.4) + (−8 × 0.6) = 12 − 4.8 = <b>£7.2m</b>; net gain = 7.2 − 5 = <b>£2.2m</b> <span class="pt">1</span><span class="pt">2</span>. Modify: EV = (3 × 0.8) + (1.5 × 0.2) = 2.4 + 0.3 = <b>£2.7m</b>; net gain = 2.7 − 1 = <b>£1.7m</b> <span class="pt">1</span><span class="pt">2</span>. Launching has the higher net gain.`,
     fb:"Full marks for both EVs and both net gains. Launch wins on net gain (£2.2m vs £1.7m) despite its 60% chance of a loss."},
  {marks:4, q:"noon Option A: cost AED 85m; 0.6 chance of AED 190m, 0.4 chance of −AED 20m. Calculate its total expected value and net gain. (Option B's net gain is AED 46.5m.)",
     model:`Expected value = (0.6 × 190) + (0.4 × −20) = 114 − 8 = <b>AED 106m</b> <span class="pt">1</span><span class="pt">2</span>. Net gain = 106 − 85 = <b>AED 21m</b> <span class="pt">1</span>. This is below Option B's AED 46.5m, so on the figures Option B is preferred <span class="pt">1</span>.`,
     fb:"Net gain = total expected value − cost. Watch the negative weak-demand result (0.4 × −20 = −8). Full marks for AED 21m with units."},
  {marks:4, q:"Sensitivity check: if noon's probability of strong demand for Option B falls from 0.7 to 0.3, recalculate Option B's net gain and state whether the recommendation changes.",
     model:`New expected value = (0.3 × 125) + (0.7 × 30) = 37.5 + 21 = AED 58.5m <span class="pt">1</span>. Net gain = 58.5 − 50 = <b>AED 8.5m</b> <span class="pt">1</span>. This is now below Option A's AED 21m <span class="pt">1</span>, so the recommendation would change to Option A <span class="pt">1</span>.`,
     fb:"Shows how sensitive the decision is to a single probability estimate — a key limitation of decision trees."}
  ],
  caseStudy:{
    business:"Center Parcs & Tata Motors",
    intro:`<p>Two decision-tree scenarios used in the exam questions.</p>
      <h3>Center Parcs — build vs takeover</h3>
      <p>Center Parcs is deciding between <b>building a new holiday village</b> and a <b>takeover</b> of an existing operator.</p>
      <table class="datatable">
        <tr><th>Option</th><th>Cost</th><th>If it succeeds</th><th>If it fails</th><th>Net gain</th></tr>
        <tr><td>Build new village</td><td>€520m</td><td>80% → revenue €780m</td><td>20% → €120m loss</td><td>+€80m</td></tr>
        <tr><td>Takeover</td><td>€100m</td><td>70% success</td><td>30% → €70m loss</td><td>+€33m</td></tr>
      </table>
      <p>Building has the higher net gain (€80m vs €33m) <i>and</i> the lower failure probability (20% vs 30%).</p>
      <h3>Tata Motors — the Nano</h3>
      <p>Tata Motors is deciding how to revive its Nano city car. Extract F notes the Nano sold poorly in rural India (a weak dealership network) and suffered a "cheap" brand image. The two options:</p>
      <table class="datatable">
        <tr><th>Option</th><th>Success probability</th><th>Expected value</th></tr>
        <tr><td>Expand the dealership network</td><td>0.4</td><td>$2.2m</td></tr>
        <tr><td>Relaunch the Nano as a premium car</td><td>0.2</td><td>$1.4m</td></tr>
      </table>
      <p>The dealership option has the higher expected value <i>and</i> the higher chance of success.</p>
      <hr style="border:none;border-top:2px solid var(--line);margin:22px 0">
      <h3>noon Minutes (UAE) — dark stores vs ADNOC hubs</h3>
      <p><b>noon</b> is an Emirati-founded platform (launched 2017); its quick-commerce service <b>noon Minutes</b> delivers in under 15 minutes from small "dark stores." noon wants to extend the promise across the UAE. <b>Option A</b>: open more noon-owned dark stores (full control, large up-front cost, slower to build). <b>Option B</b>: place noon Minutes hubs inside <b>ADNOC</b> service stations (551 stations) — faster, wider reach, but only an MoU so far. It can also do nothing (net gain AED 0).</p>
      <table class="datatable">
        <tr><th></th><th>Option A: own dark stores</th><th>Option B: ADNOC hubs</th></tr>
        <tr><td>Cost (AED m)</td><td>85</td><td>50</td></tr>
        <tr><td>Strong demand</td><td>0.6 → 190</td><td>0.7 → 125</td></tr>
        <tr><td>Weak demand</td><td>0.4 → (20)</td><td>0.3 → 30</td></tr>
        <tr><td>Expected value (AED m)</td><td>106</td><td>96.5</td></tr>
        <tr><td>Net gain (AED m)</td><td>21</td><td><b>46.5</b></td></tr>
      </table>
      <p>Option B has the higher net gain (AED 46.5m vs 21m), a smaller worst case (−AED 20m vs −AED 105m) and needs less capital — but below a strong-demand probability of about <b>0.43</b> the decision flips to Option A.</p>`
  },
  exam:[
    {marks:4, q:"A decision tree gives Option A an expected value of £116,000 (cost £60,000) and Option B an expected value of £146,500 (cost £75,000). Calculate the net gain of each option and recommend which the business should choose. (4)",
     model:`Option A net gain = £116,000 − £60,000 = <b>£56,000</b> <span class="pt">1</span>. Option B net gain = £146,500 − £75,000 = <b>£71,500</b> <span class="pt">1</span>. Option B has the higher net gain <span class="pt">1</span>, so the business should choose <b>Option B</b> <span class="pt">2</span>.`,
     fb:"2 marks for the two net-gain calculations, 2 for a recommendation justified by the higher net gain."},
    {marks:12, q:"Assess the usefulness of decision trees as a decision-making tool for a business. (12)",
     model:`<p><span class="tag t-P">POINT</span>Decision trees are useful because they bring risk and cost into one clear comparison. <span class="tag t-E">EXPLAIN</span>They attach probabilities to outcomes and calculate an expected value, then subtract cost to give a net gain. <span class="tag t-C">CHAIN</span>This means managers can compare options on a consistent numerical basis and pick the highest net gain; as a result the decision is more objective and easier to justify to stakeholders than a gut-feel choice. <span class="tag t-A">APPLY</span>For a large, risky investment this structure is valuable. <span class="tag t-J">JUDGE</span>So for framing a financial decision they are effective.</p>
     <p><span class="tag t-J">HOWEVER</span>However, their usefulness depends on the quality of the estimates. The probabilities and outcomes are forecasts, and the expected value is only a probability-weighted average — a one-off project with a positive EV can still make a large loss if the unlikely outcome happens. They also ignore qualitative factors such as brand, morale and ethics, and a small change in an assumption can flip which option looks best.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> decision trees are a useful starting point, not a final answer. <b>Why:</b> they quantify and structure risk better than judgement alone. <b>Why (develop):</b> but they rely on uncertain estimates and miss non-financial factors. <b>What (depends on):</b> their value depends on the reliability of the data and on combining them with other appraisal methods and management judgement.</p>`,
     fb:"Balanced 12-marker: developed benefits, a genuine limitation (EV not guaranteed / qualitative factors), and a 4Ws conclusion on what the usefulness depends on."},
    {marks:20, q:"Evaluate whether Center Parcs should build a new holiday village or pursue a takeover. Use the decision-tree data in your answer. (20)",
     model:`<p><span class="tag t-P">BUILD · FOR</span>Building a new village offers a net gain of €80m and a lower failure probability of 20%, because it has a higher expected monetary value and a lower chance of loss than the alternative. This means the business is more likely to achieve strong returns with less risk; therefore building is a more secure and profitable choice, and as a result could create greater long-term value for shareholders. In contrast, the takeover gives a net gain of only €33m with a higher 30% failure rate.</p>
     <p><span class="tag t-P">USES OF DTA</span>Decision-tree analysis also helps managers understand the full range of outcomes, because it shows not only profits but risks — the 20% chance of a €120m loss if building fails, or the 30% chance of a €70m loss on the takeover. This means decision-makers can prepare for both success and failure; therefore they can set up contingency plans such as cash reserves, and as a result the business is better protected against shocks.</p>
     <p><span class="tag t-J">LIMITATION</span>However, decision trees can be unreliable, because the figures for success, failure and revenue are only estimates. This means the €780m revenue from the build depends on continued staycation demand; therefore external shocks — another health crisis, poor weather, supply problems or aggressive competitors — could lower actual income, and as a result the probabilities may be misleading.</p>
     <p><span class="tag t-J">OTHER METHODS</span>Other appraisal methods such as payback should also be used, because DTA shows how much a project returns but not how quickly. This means the €100m takeover might pay back faster than the €520m build; therefore combining DTA with payback or NPV gives a fuller picture of return and liquidity.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, building a new village is the stronger option, because it offers the higher expected net gain (€80m), the lower failure risk (20%) and the highest individual return (€780m), fitting Center Parcs' strategy to expand rural locations. Success depends on managing delays, site availability and labour shortages, and on planning approvals and demand. It is therefore recommended that Center Parcs proceeds with the build but uses CPA to plan timelines and payback/NPV to confirm financial viability.</p>`,
     fb:"Mr. Akram's exemplar (Center Parcs). Note it uses the figures, explains what DTA adds, challenges it (estimates / qualitative), brings in other methods, and ends with a recommendation plus 'success depends on'."},
    {marks:20, q:"Evaluate whether Tata Motors should expand its dealership network or relaunch the Nano as a premium car. Use the decision-tree data in your answer. (20)",
     model:`<p><span class="tag t-P">DEALERSHIP · FOR</span>One benefit of expanding the dealership network is that it directly tackles Tata's distribution weakness in rural India, because Extract F states the Nano's poor sales were partly due to a weak dealership network where most of the target market lives. This means rural customers could not easily view or buy the car; therefore more dealerships would boost availability and convenience, and as a result Nano sales could rise — supported by the higher expected value of $2.2m versus $1.4m.</p>
     <p><span class="tag t-J">DEALERSHIP · AGAINST</span>However, a drawback is the time and cost of implementation, because building physical locations across a vast country is logistically and financially demanding. This means the benefits may take years to appear; therefore Tata could keep suffering weak short-term sales, and as a result face cash-flow strain while the network is built.</p>
     <p><span class="tag t-P">RELAUNCH · FOR</span>One benefit of relaunching the Nano as a premium car is that it could fix the brand image, because Extract F notes consumers saw the Nano as "cheap" and undesirable. This means repositioning it as a stylish compact car could attract urban professionals; therefore demand and margins could rise.</p>
     <p><span class="tag t-J">RELAUNCH · AGAINST</span>A drawback is the low 0.2 probability of success, because consumers may reject the Nano in a premium segment given its past reputation. This means even heavy advertising may not shift perceptions; therefore the relaunch could fail despite high spend, and as a result Tata could incur heavy losses and further brand damage.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, expanding the dealership network is the better option, because it has the higher expected return ($2.2m vs $1.4m) and the higher success probability (0.4 vs 0.2). While the relaunch could improve brand image, its low success chance makes it riskier. Success depends on how quickly and affordably Tata can roll out dealerships while sustaining interest in the Nano. It is recommended Tata conducts further analysis, including payback period, to minimise financial risk before deciding.</p>`,
     fb:"Mr. Akram's exemplar (Tata Motors). Both options are argued and challenged, the EV and probability figures are used, and the conclusion recommends with 'success depends on'."},
  {marks:8, q:"Assess the limitations of using decision trees to help noon decide between Option A and Option B. (8)",
     model:`<p><span class="tag t-P">POINT</span>A decision tree shows the options, probabilities and financial results so the net gain of each can be compared — for noon, AED 46.5m for Option B against AED 21m for Option A. <span class="tag t-J">HOWEVER</span>However, the probabilities are only managers' estimates in a fast-changing market where rivals such as Talabat and Careem can respond. <span class="tag t-C">CHAIN</span>This matters because the decision is sensitive: if the chance of strong demand for Option B fell to 0.3, its net gain would drop to AED 8.5m and Option A would become the better option.</p>
     <p>The tree also reduces demand to just two outcomes and gives an average that neither option will actually deliver, and it ignores qualitative factors such as noon's control of the customer experience under Option A or its dependence on ADNOC under Option B. <span class="tag t-J">JUDGE</span>Overall, these limitations mean noon should not rely on the tree alone, but it remains a useful starting point if the probabilities are tested and combined with managers' judgement.</p>`,
     fb:"8-mark 'assess limitations' still needs balance and a judgement. Reward the sensitivity point (0.3 → AED 8.5m) and qualitative factors, applied to noon."},
  {marks:12, q:"Using the case data, assess the usefulness of decision trees to noon when deciding how to expand noon Minutes. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that a decision tree puts a number on each option, because it combines probabilities with financial results to give a net gain: AED 46.5m for Option B and AED 21m for Option A. <span class="tag t-C">CHAIN</span>This means noon can see the ADNOC hubs are forecast to earn more than double its own dark stores; therefore managers can justify Option B with evidence rather than opinion, and as a result noon is more likely to make a profitable decision.</p>
     <p><span class="tag t-P">POINT</span>Another benefit is that the tree shows risk as well as return, because every outcome is displayed: Option A has a 40% chance of a AED 105m loss, whereas Option B's worst case is a AED 20m loss. <span class="tag t-C">CHAIN</span>This means noon can see which option is riskier; therefore it can plan contingencies such as phasing the roll-out, and as a result is better protected if demand is low.</p>
     <p><span class="tag t-J">HOWEVER</span>However, decision trees depend on estimates in a fast-changing market. If the probability of strong demand for Option B fell to 0.3, its net gain would fall to AED 8.5m and Option A would be better. The tree also ignores qualitative factors — noon's dependence on an MoU with ADNOC whose terms are not final — and the timing of returns, so noon should not rely on it alone.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, decision trees are useful to noon as a starting point, because they support Option B with clear figures and show each option's risk. Their usefulness depends on how reliable the estimates are, so it is recommended noon tests the probabilities and also uses payback and NPV before the final decision.</p>`,
     fb:"Mr. Akram's exemplar (noon). Two developed benefits using the figures, a limitation built on the sensitivity point, and a conclusion on what usefulness depends on."},
  {marks:20, q:"Evaluate which option noon should choose to extend its 15-minute delivery promise: Option A (new noon-owned dark stores) or Option B (noon Minutes hubs in ADNOC service stations). (20)",
     model:`<p><span class="tag t-P">FOR B</span>Option B offers a higher expected net gain of AED 46.5m against AED 21m for Option A, and a lower chance of weak demand (30% vs 40%), because its expected value of AED 96.5m is only AED 9.5m below Option A's AED 106m while it costs AED 35m less. <span class="tag t-C">CHAIN</span>This means noon earns a stronger return on each dirham with less capital at risk; therefore the ADNOC hubs are the more profitable and secure choice, and as a result noon could free up funds and reach customers sooner.</p>
     <p><span class="tag t-P">RISK</span>The tree also shows the range of outcomes, because if demand is weak Option A loses AED 105m whereas Option B loses only AED 20m. <span class="tag t-C">CHAIN</span>This means Option A carries a 40% chance of a very large loss; therefore noon can prepare by phasing the roll-out or holding reserves, and as a result is better protected if demand disappoints.</p>
     <p><span class="tag t-J">HOWEVER</span>However, decision trees can be unreliable, because probabilities and results are estimates. If the probability of strong demand for Option B fell from 0.7 to 0.3, its net gain would drop to AED 8.5m and Option A would be better; a response from rivals such as Talabat or Careem could make the forecasts wrong, so AED 46.5m is a guide, not a guarantee.</p>
     <p><span class="tag t-J">QUALITATIVE</span>The tree also ignores qualitative factors and timing. Option B depends on an MoU whose terms are not final, so noon has less control, whereas Option A gives full control of layout, stock and customer data. noon should also use payback and NPV: Option B costs AED 35m less and could open sooner, so it likely recovers its cost faster.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Option B is the stronger option, because it has a higher net gain (AED 46.5m vs 21m), a lower chance of weak demand, a far smaller worst case and a lower investment, and it could reach customers quickly through ADNOC's 551 stations. Option A is rejected because its net gain is only AED 21m, ties up AED 85m and risks a AED 105m loss. Success depends on ADNOC agreeing final terms and on strong demand staying likely (a probability above about 0.43). It is recommended noon proceeds with Option B but uses payback and NPV and re-tests the probabilities before committing.</p>`,
     fb:"Mr. Akram's exemplar (noon): figures interpreted throughout, each side challenged with a 'however', the break-even probability (0.43) used, and a full 4Ws conclusion with recommendation."}
  ],
  resources:[
    {label:"Decision trees — lesson notes (PDF)", file:"resources/3-3-3-decision-trees-notes.pdf"},
    {label:"noon Minutes decision-tree case study & questions (PDF)", file:"resources/3-3-3-noon-case-student.pdf"}
  ]
},
{
  code:"3.3.3.4", subtheme:"3.3.3", title:"Critical path analysis",
  business:"Case studies: Coca-Cola & Tottenham Hotspur", status:"live",
  notes:[
    {h:"What is critical path analysis?", html:`
      <p><b>Critical path analysis (CPA)</b> identifies the order in which activities must be completed when planning a complex project. It shows which activities can run <b>at the same time</b> and which <b>depend</b> on earlier ones, so a business can find the <b>shortest time</b> in which the project can be finished.</p>
      <p>To build the network you need: a <b>list of activities</b>, the <b>duration</b> of each, and the <b>dependencies</b> (which activity must finish before another can start).</p>`},
    {h:"Reading the network", html:`
      <ul>
        <li><b>Nodes</b> are circles that mark a point in time. Each is split into three: the <b>node number</b>, the <b>earliest start time (EST)</b> and the <b>latest finish time (LFT)</b>.</li>
        <li><b>Activities</b> are arrows between nodes, labelled with a letter and a duration.</li>
        <li>The <b>critical path</b> runs through the activities with <b>no float</b> — it sets the minimum project time.</li>
      </ul>`},
    {h:"Calculating EST, LFT and float", html:`
      <p><b>1. Earliest start time (EST)</b> — work left to right (forward pass). A node's EST is the <b>highest</b> of (previous node's EST + activity duration).</p>
      <p><b>2. Latest finish time (LFT)</b> — work right to left (backward pass). A node's LFT is the <b>lowest</b> of (next node's LFT − activity duration).</p>
      <p><b>3. Total float</b> — how long an activity can be delayed without delaying the project:</p>
      <div class="note-ex">Total float = LFT (at the activity's end node) − duration − EST (at its start node)</div>
      <p>Critical activities have a float of <b>zero</b>.</p>`},
    {h:"Worked network", html:`
      <p>Four activities: A (4 days) → then B (5 days) and C (2 days) run in parallel → then D (3 days).</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 720 300" style="min-width:560px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ahm" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--muted)"/></marker>
          <marker id="aha" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--amber)"/></marker>
        </defs>
        <!-- activities -->
        <line x1="84" y1="150" x2="222" y2="150" stroke="var(--amber)" stroke-width="3" marker-end="url(#aha)"/>
        <path d="M274,140 Q365,86 456,140" fill="none" stroke="var(--amber)" stroke-width="3" marker-end="url(#aha)"/>
        <path d="M274,162 Q365,224 456,162" fill="none" stroke="var(--muted)" stroke-width="2" marker-end="url(#ahm)"/>
        <line x1="508" y1="150" x2="636" y2="150" stroke="var(--amber)" stroke-width="3" marker-end="url(#aha)"/>
        <!-- nodes -->
        <g stroke="var(--ink)" stroke-width="1.6" fill="none">
          <circle cx="56" cy="150" r="26"/><line x1="56" y1="124" x2="56" y2="176"/><line x1="56" y1="150" x2="82" y2="150"/>
          <circle cx="250" cy="150" r="26"/><line x1="250" y1="124" x2="250" y2="176"/><line x1="250" y1="150" x2="276" y2="150"/>
          <circle cx="480" cy="150" r="26"/><line x1="480" y1="124" x2="480" y2="176"/><line x1="480" y1="150" x2="506" y2="150"/>
          <circle cx="664" cy="150" r="26"/><line x1="664" y1="124" x2="664" y2="176"/><line x1="664" y1="150" x2="690" y2="150"/>
        </g>
        <g fill="var(--ink)" font-weight="700" font-size="13" text-anchor="middle">
          <text x="43" y="155">1</text><text x="237" y="155">2</text><text x="467" y="155">3</text><text x="651" y="155">4</text>
        </g>
        <g fill="var(--ink)" font-size="11.5" text-anchor="middle">
          <text x="69" y="142">0</text><text x="69" y="170">0</text>
          <text x="263" y="142">4</text><text x="263" y="170">4</text>
          <text x="493" y="142">9</text><text x="493" y="170">9</text>
          <text x="677" y="142">12</text><text x="677" y="170">12</text>
        </g>
        <g font-weight="700" font-size="12.5">
          <text x="150" y="140" fill="var(--amber-d)" text-anchor="middle">A (4)</text>
          <text x="365" y="80" fill="var(--amber-d)" text-anchor="middle">B (5)</text>
          <text x="365" y="246" fill="var(--muted)" text-anchor="middle">C (2) · float 3</text>
          <text x="572" y="140" fill="var(--amber-d)" text-anchor="middle">D (3)</text>
        </g>
        <text x="360" y="288" fill="var(--ink)" font-size="12.5" text-anchor="middle">Critical path: A → B → D = 12 days · C can be delayed up to 3 days</text>
      </svg>
      </div>
      <p><b>EST (forward):</b> node 2 = 0 + 4 = 4; node 3 = higher of (4+5) and (4+2) = <b>9</b>; node 4 = 9 + 3 = <b>12</b> days.<br>
      <b>LFT (backward):</b> node 3 = 12 − 3 = 9; node 2 = 9 − 5 = 4.<br>
      <b>Float on C</b> = 9 − 2 − 4 = <b>3 days</b>. A, B and D have zero float, so the <b>critical path is A → B → D</b> and the project takes <b>12 days</b>.</p>`},
    {h:"Advantages & limitations", html:`
      <h3>Advantages</h3>
      <ul>
        <li>Shows the <b>minimum time</b> to complete the project and a clear deadline.</li>
        <li>Identifies the <b>critical activities</b> that must not slip.</li>
        <li><b>Float</b> lets managers move staff and resources to the tasks that matter most.</li>
        <li>Improves <b>coordination and motivation</b> — everyone sees the timeline and their role.</li>
      </ul>
      <h3>Limitations</h3>
      <ul>
        <li>Relies on <b>accurate time estimates</b> — if durations are wrong, the whole plan is wrong.</li>
        <li>Ignores <b>resource and cost constraints</b> (labour, materials, budget).</li>
        <li>A delay on the <b>critical path</b> delays the entire project.</li>
        <li>Can encourage <b>rushing</b>, cutting corners on quality to hit the deadline.</li>
      </ul>`},
  {h:"Total float vs free float", html:`
      <p><b>Total float</b> is the spare time an activity has without delaying the <b>whole project</b>:</p>
      <div class="note-ex">Total float = LFT − duration − EST</div>
      <p><b>Free float</b> is the spare time without delaying the <b>next activity</b>:</p>
      <div class="note-ex">Free float = EST at the end of the activity − (EST at the start + duration)</div>
      <p>Any activity with <b>zero total float</b> lies on the critical path, so a delay to it makes the whole project overrun.</p>`}
  ],
  definitions:[
    {term:"Critical path analysis (CPA)", marks:2, body:`A planning technique that identifies the order and timing of the activities in a project <span class="pt">1</span>, in order to find the shortest time in which the project can be completed <span class="pt">2</span>.`},
    {term:"Critical path", marks:2, body:`The sequence of activities that determines the shortest possible time to complete a project <span class="pt">1</span>; these activities have no float, so any delay to them delays the whole project <span class="pt">2</span>.`},
    {term:"Earliest start time (EST)", marks:2, body:`The earliest time at which an activity can begin, given that all the activities before it are complete <span class="pt">1</span>; it is found by working forwards through the network <span class="pt">2</span>.`},
    {term:"Latest finish time (LFT)", marks:2, body:`The latest time by which an activity must finish without delaying the whole project <span class="pt">1</span>; it is found by working backwards through the network <span class="pt">2</span>.`},
    {term:"Total float", marks:2, body:`The amount of time a non-critical activity can be delayed without delaying the project <span class="pt">1</span>, calculated as LFT − duration − EST <span class="pt">2</span>.`},
    {term:"Node", marks:2, body:`A circle on a network diagram marking a point in time between activities <span class="pt">1</span>; it shows the node number, the earliest start time and the latest finish time <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:4, q:"A project has: A (2 months, start); B (4, after A); C (2, after B); D (3, after C); E (1, after C); F (3, after D); G (1, after F). Identify the critical path and the minimum project time.",
     model:`Forward pass: A 0→2; B 2→6; C 6→8; D 8→11; E 8→9; F 11→14; G 14→15 <span class="pt">1</span><span class="pt">2</span>. The longest route is A→B→C→D→F→G, so the critical path is <b>A, B, C, D, F, G</b> <span class="pt">1</span> and the minimum project time is <b>15 months</b> <span class="pt">1</span>. E (notify suppliers) runs in parallel with D, is shorter, and so is not on the critical path (it has float).`,
     fb:"Add durations along each route; the longest route is the critical path and its length is the minimum project time. Only one activity here (E) is non-critical."},
    {marks:4, q:"On a network, an activity has a duration of 2 weeks. Its start node has an EST of 4 and its end node has an LFT of 9. Calculate the total float, and state whether the activity is critical.",
     model:`Total float = LFT − duration − EST = 9 − 2 − 4 = <b>3 weeks</b> <span class="pt">1</span><span class="pt">2</span>. Because the float is greater than zero <span class="pt">1</span>, the activity is <b>not critical</b> — it can be delayed up to 3 weeks without delaying the project <span class="pt">1</span>.`,
     fb:"Float = LFT − duration − EST. Any activity with zero float lies on the critical path."},
    {marks:4, q:"A (5, start); B (3, after A); C (4, after A); D (2, after both B and C). Calculate the EST at each node and the minimum project duration.",
     model:`A: 0→5 <span class="pt">1</span>. B: 5→8; C: 5→9 <span class="pt">1</span>. D cannot start until both B and C finish, so its EST is the higher of 8 and 9 = 9; D: 9→11 <span class="pt">1</span>. Minimum project duration = <b>11</b>, on the critical path A→C→D <span class="pt">1</span>.`,
     fb:"Where paths merge, the EST is the HIGHEST incoming value — the project waits for the slowest route in."},
  {marks:4, q:"The total float of each activity is: A 1, B 1, C 1, D 0, E 0, F 1, G 0, H 0, I 1, J 0, K 4, L 0. State the critical path and explain how you identified it.",
     model:`The activities with <b>zero total float</b> are D, E, G, H, J and L <span class="pt">1</span><span class="pt">2</span>. So the critical path is <b>D – E – G – H – J – L</b> <span class="pt">1</span>. These have no spare time, so any delay to them would delay the whole project <span class="pt">1</span>.`,
     fb:"The critical path is every activity with zero total float. A, B, C, F, I and K all carry float, so they are not critical."},
  {marks:4, q:"Activity F: duration 16, EST 15, LFT 32, next node EST 32. Activity K: duration 3, EST 25, LFT 32, next node EST 32. Calculate the total float and free float of F and K.",
     model:`F: total float = 32 − 16 − 15 = <b>1</b>; free float = 32 − (15 + 16) = <b>1</b> <span class="pt">1</span><span class="pt">2</span>. K: total float = 32 − 3 − 25 = <b>4</b>; free float = 32 − (25 + 3) = <b>4</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"Total float = LFT − duration − EST. Free float = (EST at end) − (EST at start + duration)."}
  ],
  caseStudy:{
    business:"Coca-Cola & Tottenham Hotspur",
    intro:`<p>Two CPA scenarios used in the exam questions.</p>
      <h3>Coca-Cola — launching a new drink</h3>
      <p>Coca-Cola is planning the launch of a new soft drink for a <b>September</b> deadline. Its network gives a critical path of <b>A → B → D → E → F → G</b> and a minimum project time of <b>32 weeks</b>. Key activities include B (recipe development, 12 weeks), E (designing the final recipe, 4 weeks) and F (distributing the final recipe, 2 weeks). Activity C has float, so it can be delayed without affecting the deadline.</p>
      <h3>Tottenham Hotspur — building the new stadium</h3>
      <p>Tottenham Hotspur used CPA to manage the construction of its new stadium. The completed network gives a critical path of <b>D – E – G – H – J – L</b> and a project time of <b>33</b> periods, with several non-critical activities carrying float (for example a node with an EST of 5 but an LFT of 6 has one period of float). The real stadium famously overran its planned opening date.</p>
      <hr style="border:none;border-top:2px solid var(--line);margin:22px 0">
      <h3>Buy it Direct — new IT system</h3>
      <p><b>Buy it Direct's</b> new Operations Director is installing a new IT system for the warehouses, a project that must be completed within <b>45 weeks</b>. A network diagram has been produced and CPA used to manage the installation.</p>
      <h3>Sunny Dale Farm — total & free float</h3>
      <p>A worked float table for a 12-activity project. The critical path (the zero-total-float activities) is <b>D – E – G – H – J – L</b>, giving a project time of <b>33 weeks</b>.</p>
      <table class="datatable">
        <tr><th>Activity</th><th>Duration</th><th>EST</th><th>LFT</th><th>Free float</th><th>Total float</th></tr>
        <tr><td>A</td><td>5</td><td>0</td><td>6</td><td>0</td><td>1</td></tr>
        <tr><td>B</td><td>5</td><td>5</td><td>11</td><td>0</td><td>1</td></tr>
        <tr><td>C</td><td>4</td><td>10</td><td>15</td><td>0</td><td>1</td></tr>
        <tr><td>D</td><td>10</td><td>0</td><td>10</td><td>0</td><td>0</td></tr>
        <tr><td>E</td><td>5</td><td>10</td><td>15</td><td>0</td><td>0</td></tr>
        <tr><td>F</td><td>16</td><td>15</td><td>32</td><td>1</td><td>1</td></tr>
        <tr><td>G</td><td>6</td><td>15</td><td>21</td><td>0</td><td>0</td></tr>
        <tr><td>H</td><td>5</td><td>21</td><td>26</td><td>0</td><td>0</td></tr>
        <tr><td>I</td><td>4</td><td>21</td><td>29</td><td>0</td><td>1</td></tr>
        <tr><td>J</td><td>6</td><td>26</td><td>32</td><td>0</td><td>0</td></tr>
        <tr><td>K</td><td>3</td><td>25</td><td>32</td><td>4</td><td>4</td></tr>
        <tr><td>L</td><td>1</td><td>32</td><td>33</td><td>0</td><td>0</td></tr>
      </table>`
  },
  exam:[
    {marks:4, q:"On a network diagram, an activity has a duration of 4 weeks. Its start node has an EST of 12 and its end node has an LFT of 20. Calculate the total float of the activity. (4)",
     model:`Total float = LFT − duration − EST <span class="pt">1</span> = 20 − 4 − 12 <span class="pt">1</span> = <b>4 weeks</b> <span class="pt">1</span>. As the float is above zero, the activity is not on the critical path <span class="pt">1</span>.`,
     fb:"2 marks for the method and substitution, 2 for the correct answer with units and a brief interpretation."},
    {marks:12, q:"Assess the usefulness of critical path analysis to a business managing a complex project. (12)",
     model:`<p><span class="tag t-P">POINT</span>CPA is useful because it reveals the minimum project time and the activities that control it. <span class="tag t-E">EXPLAIN</span>By finding the critical path, it shows which tasks have no float. <span class="tag t-C">CHAIN</span>This means managers can focus attention and resources on the activities that must stay on schedule, and move staff from tasks with float to critical ones; as a result the project is more likely to finish on time and on budget. <span class="tag t-J">JUDGE</span>So for coordinating a complex project it is valuable.</p>
     <p><span class="tag t-J">HOWEVER</span>However, CPA is only as good as its estimates. The durations are forecasts, and it ignores resource and cost constraints, so a single wrong estimate or a shortage of labour or materials can make the whole plan unreliable. It can also push teams to rush critical tasks and cut corners on quality.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> CPA is a useful planning aid, not a guarantee. <b>Why:</b> it structures the schedule and highlights the critical activities. <b>Why (develop):</b> but it depends on accurate estimates and ignores resources. <b>What (depends on):</b> its value depends on the reliability of the durations and on building in contingency for the critical path.</p>`,
     fb:"Balanced 12-marker: developed benefits (minimum time, float, coordination), genuine limitations (estimates, resources, rushing), and a 4Ws conclusion."},
    {marks:20, q:"Evaluate the usefulness of critical path analysis to Coca-Cola when launching a new drink. Use the network in your answer. (20)",
     model:`<p><span class="tag t-P">BENEFIT</span>One benefit of CPA is that it shows the minimum time needed to finish the project — here 32 weeks — based on the critical path A → B → D → E → F → G. These tasks must be completed on time, as any delay will delay the whole project, whereas tasks like C have float and can be delayed without affecting the deadline. This leads to better use of staff and resources, as workers can help with more urgent tasks; therefore knowing the critical path helps Coca-Cola plan effectively, and as a result the project is more likely to meet the September launch.</p>
     <p><span class="tag t-P">BENEFIT</span>Another benefit is that CPA motivates teams by showing the full timeline and the most important tasks, because staff can see which activities are critical, such as B (recipe development, 12 weeks), and understand their role. This means greater accountability and focus; therefore CPA helps maintain discipline and encourages collaboration, and as a result the project is more likely to stay on schedule.</p>
     <p><span class="tag t-J">HOWEVER</span>However, CPA carries risks because it relies on estimated durations that might not be realistic. For example, activity E (designing the final recipe, 4 weeks) may overrun due to taste-testing or regulatory issues. This leads to overconfidence in the timeline; therefore if any critical activity is delayed the whole schedule slips, and as a result the drink could miss its September launch, damaging retailer relationships.</p>
     <p><span class="tag t-J">LIMITATION</span>Another drawback is the risk of rushing development, because staff may focus on the 32-week target and cut corners — activity F (distribute final recipe, 2 weeks) might leave too little time for quality control. This means a poorer-quality drink could reach the market; therefore CPA may encourage speed over care, and as a result brand reputation could suffer.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, CPA is valuable to Coca-Cola because it improves scheduling, coordination and deadline awareness — but only if used carefully. Success depends on how accurately time estimates are made and how well managers balance speed with quality. It is recommended Coca-Cola keeps using CPA but combines it with other tools, builds in contingency time for critical activities and does not compromise quality for speed.</p>`,
     fb:"Mr. Akram's exemplar (Coca-Cola). Uses the critical path and specific activities, argues both sides with the house chain, and ends with a recommendation plus 'success depends on'."},
    {marks:20, q:"Evaluate the usefulness of critical path analysis to Tottenham Hotspur when managing the construction of its new stadium. Use the network in your answer. (20)",
     model:`<p><span class="tag t-P">BENEFIT</span>One benefit of CPA is that it shows the minimum time to build the stadium — here 33 periods on the critical path D–E–G–H–J–L — because those activities have no float, so any delay to them delays the whole build. This means Tottenham can see exactly which trades must stay on schedule to hit the opening date; therefore it can prioritise and monitor them, and as a result is more likely to open on time and start earning matchday and event income.</p>
     <p><span class="tag t-P">BENEFIT</span>Another benefit is that float on non-critical activities allows efficient use of resources, because tasks with spare time can be delayed or have workers moved to critical trades. This means labour and equipment go where delay would be most costly; therefore the project runs more smoothly, and as a result costly overtime and idle time are reduced.</p>
     <p><span class="tag t-J">HOWEVER</span>However, CPA relies on accurate duration estimates, which are hard to get right on a large construction project, because weather, supply problems, planning issues or design changes can all extend activities. This means the critical path and 33-period forecast could be wrong; therefore Tottenham could still overrun, and as a result face penalty costs and lost fixtures — as happened with the stadium's real opening delays.</p>
     <p><span class="tag t-J">LIMITATION</span>CPA also ignores resource and cost constraints and can encourage rushing, because it focuses on time rather than on whether enough skilled labour, materials or budget are available. This means quality or safety could suffer on a complex build; therefore the network must be combined with careful cost, resource and risk planning.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, CPA is highly useful to Tottenham for coordinating a complex build and protecting the opening date, but it is a planning aid, not a guarantee. Success depends on how realistic the estimates are and how much contingency is built into the critical activities. It is recommended Tottenham uses CPA alongside strong project and risk management, with buffer time on the critical path.</p>`,
     fb:"Model answer (Tottenham stadium): uses the critical path D–E–G–H–J–L and 33-period duration, applies benefits and limitations to a construction project, and ends with a supported recommendation."},
  {marks:12, q:"Assess the likely value of critical path analysis for the effective management of the installation of Buy it Direct's new IT system. (12)",
     model:`<p><span class="tag t-P">POINT</span>CPA is valuable because it shows the minimum time to install the new IT system and whether the 45-week deadline is achievable. <span class="tag t-E">EXPLAIN</span>Building the network reveals the critical path — the activities with no float that must stay on schedule. <span class="tag t-C">CHAIN</span>This means the Operations Director can focus on those activities and move staff from tasks with float onto critical ones; as a result the installation is more likely to finish within 45 weeks without disrupting warehouse operations. <span class="tag t-J">JUDGE</span>So for coordinating the project it is useful.</p>
     <p><span class="tag t-J">HOWEVER</span>However, CPA depends on accurate time estimates, which are notoriously hard to get right for IT projects — testing, data migration or supplier delays can overrun. It also ignores resource constraints such as the availability of IT specialists, and a single delay on the critical path would push back the whole installation.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> CPA is valuable but not a guarantee. <b>Why:</b> it structures the installation and protects the 45-week deadline. <b>Why (develop):</b> but IT time estimates are uncertain and resources may be limited. <b>What (depends on):</b> its value depends on realistic durations and on contingency time built into the critical activities.</p>`,
     fb:"12-mark 'assess value', applied to an IT installation. Reward the 45-week deadline context, benefits of the critical path/float, and IT-specific limitations."}
  ],
  resources:[
    {label:"Critical path analysis — lesson notes (PDF)", file:"resources/3-3-4-cpa-notes.pdf"},
    {label:"Buy it Direct CPA 12-mark question (PDF)", file:"resources/3-3-4-buy-it-direct-cpa.pdf"}
  ]
},
{
  code:"3.3.3.5", subtheme:"3.3.3", title:"Contribution",
  business:"Case studies: SmartSnacks, Kings Move & Snowdon Sweets", status:"live",
  notes:[
    {h:"What is contribution?", html:`
      <p><b>Contribution</b> is the amount each unit sold contributes towards paying off <b>fixed costs</b>, and then towards <b>profit</b>. It focuses on the return a business makes from each unit after its variable costs are covered.</p>
      <div class="note-ex">Contribution per unit = selling price per unit − variable cost per unit<br>Total contribution = contribution per unit × number of units sold<br>Profit = total contribution − fixed costs</div>
      <p><b>Worked example.</b> A product sells for £30, variable cost £18, selling 15,000 units, with fixed costs of £116,000:</p>
      <ul>
        <li>Contribution per unit = £30 − £18 = <b>£12</b></li>
        <li>Total contribution = £12 × 15,000 = <b>£180,000</b></li>
        <li>Profit = £180,000 − £116,000 = <b>£64,000</b></li>
      </ul>`},
    {h:"Using contribution to make decisions", html:`
      <ul>
        <li><b>Order prioritisation</b> — with limited capacity, accept the orders that generate the <b>highest total contribution</b>.</li>
        <li><b>Special orders</b> — a one-off order at a lower price is still worth accepting if the price is <b>above variable cost</b> (positive contribution) <i>and</i> there is genuine <b>spare capacity</b>. Beware if it displaces full-price sales or adds fixed costs.</li>
        <li><b>Pricing</b> — contribution shows the <b>minimum price</b> a business can accept (anything above variable cost adds something towards fixed costs).</li>
        <li><b>Product decisions</b> — whether to keep, drop or promote a product based on the contribution it earns.</li>
      </ul>`},
    {h:"Advantages & limitations", html:`
      <h3>Advantages</h3>
      <ul>
        <li>Simple and quick to calculate.</li>
        <li>Focuses on the <b>extra</b> each unit or order adds — useful for short-term decisions.</li>
        <li>Identifies the <b>minimum acceptable price</b> and supports special-order and make-or-buy choices.</li>
      </ul>
      <h3>Limitations</h3>
      <ul>
        <li>Ignores <b>fixed costs</b> in the decision — accepting low-contribution work can still leave fixed costs uncovered.</li>
        <li>Assumes there is genuine <b>spare capacity</b> and that selling price and variable cost stay constant.</li>
        <li>Ignores <b>qualitative factors</b> — brand image, customer service, long-term relationships.</li>
        <li>A narrow contribution per unit is <b>vulnerable</b> to small cost rises.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Contribution", marks:2, body:`The amount of sales revenue left once variable costs have been deducted <span class="pt">1</span>; it contributes towards paying fixed costs and, once those are covered, towards profit <span class="pt">2</span>.`},
    {term:"Contribution per unit", marks:2, body:`The selling price of one unit minus its variable cost <span class="pt">1</span>; it shows how much each unit sold adds towards fixed costs and profit <span class="pt">2</span>.`},
    {term:"Total contribution", marks:2, body:`The contribution per unit multiplied by the number of units sold <span class="pt">1</span>; subtracting fixed costs from it gives the business's profit <span class="pt">2</span>.`},
    {term:"Variable cost", marks:2, body:`A cost that changes directly with the level of output <span class="pt">1</span>, such as raw materials; it is deducted from the selling price to find contribution <span class="pt">2</span>.`},
    {term:"Fixed cost", marks:2, body:`A cost that does not change with the level of output in the short run <span class="pt">1</span>, such as rent; total contribution must cover it before the business makes a profit <span class="pt">2</span>.`},
    {term:"Special order", marks:2, body:`A one-off order, often at a price below the normal selling price <span class="pt">1</span>; it is worth accepting if the price still exceeds variable cost and there is spare capacity to fulfil it <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:4, q:"SmartSnacks sells a snack bar for £2.50 with variable cost £1.10. Fixed costs are £11,000 a month and it sells 10,000 units a month. Calculate the contribution per unit, the total contribution and the profit.",
     model:`Contribution per unit = £2.50 − £1.10 = <b>£1.40</b> <span class="pt">1</span>. Total contribution = £1.40 × 10,000 = <b>£14,000</b> <span class="pt">1</span><span class="pt">2</span>. Profit = £14,000 − £11,000 = <b>£3,000</b> <span class="pt">1</span>.`,
     fb:"Contribution per unit = price − variable cost. Profit = total contribution − fixed costs."},
    {marks:4, q:"A product sells for £30 with a variable cost of £18. The firm sells 15,000 units and has fixed costs of £116,000. Calculate the contribution per unit, total contribution and profit.",
     model:`Contribution per unit = £30 − £18 = <b>£12</b> <span class="pt">1</span>. Total contribution = £12 × 15,000 = <b>£180,000</b> <span class="pt">1</span><span class="pt">2</span>. Profit = £180,000 − £116,000 = <b>£64,000</b> <span class="pt">1</span>.`,
     fb:"Three-step calculation: per-unit contribution, total contribution, then subtract fixed costs for profit."},
    {marks:4, q:"Snowdon Sweets normally sells a pack for 50p with variable cost 30p. A publisher offers a special order at 38p per pack for one million packs. Calculate the contribution per pack and the total contribution of (a) the special order and (b) one million normal sales.",
     model:`Special order: 38p − 30p = <b>8p</b> per pack; × 1,000,000 = <b>£80,000</b> <span class="pt">1</span><span class="pt">2</span>. Normal sales: 50p − 30p = <b>20p</b> per pack; × 1,000,000 = <b>£200,000</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"The special order earns far less per pack (8p vs 20p). If it displaces normal sales, Snowdon would sacrifice £120,000 of contribution."}
  ],
  caseStudy:{
    business:"SmartSnacks, Kings Move & Snowdon Sweets",
    intro:`<p>Four contribution scenarios used in the exam questions.</p>
      <h3>SmartSnacks Ltd — a premium bar</h3>
      <p>SmartSnacks sells a snack bar for £2.50 (variable cost £1.10), with fixed costs of £11,000 a month on 10,000 units. It is considering a <b>premium bar</b> at £3.50 (variable cost £1.80), expecting 3,000 extra units. Premium contribution = £1.70/unit → <b>£5,100</b> extra, all profit since fixed costs are already covered.</p>
      <h3>Kings Move plc (KM plc) — Amazon spare-capacity order</h3>
      <p>KM plc, a house-removals firm, is offered a contract to make 1,000 guaranteed monthly deliveries for Amazon at $2 each (variable cost $1.50), against its normal price of $5. Contribution = <b>$0.50</b> per delivery → <b>$500</b> a month from otherwise idle lorries and staff.</p>
      <h3>Snowdon Sweets Ltd — a special order</h3>
      <p>Snowdon normally sells a pack for 50p (variable cost 30p). A publisher offers a special order of one million packs at 38p (contribution 8p, total £80,000) as free magazine gifts. Normal sales earn 20p, so displacing them would cost £120,000 of contribution.</p>
      <h3>Sepal / Li & Fung / Asda — contribution along a supply chain</h3>
      <p>For one pair of jeans: Sepal earns $0.26 ($7.28 − $7.02), Li & Fung $3.75 ($11.61 − $7.28 − $0.58 shipping), and Asda $6.79 ($18.44 − $11.65) — showing how contribution per unit differs along the chain.</p>`
  },
  exam:[
    {marks:4, q:"SmartSnacks is considering a premium bar selling at £3.50 with a variable cost of £1.80, expecting 3,000 extra units a month. Its existing fixed costs are already covered. Calculate the extra contribution and state the effect on profit. (4)",
     model:`Contribution per unit = £3.50 − £1.80 = <b>£1.70</b> <span class="pt">1</span>. Extra total contribution = £1.70 × 3,000 = <b>£5,100</b> a month <span class="pt">1</span><span class="pt">2</span>. As fixed costs are already covered, the whole £5,100 is <b>extra profit</b> <span class="pt">1</span>.`,
     fb:"When fixed costs are already covered, additional contribution flows straight through to profit."},
    {marks:8, q:"Assess one qualitative factor KM plc should consider before accepting Amazon's delivery proposal. (8)",
     model:`<p><span class="tag t-P">POINT</span>One qualitative factor is whether working with Amazon could build KM plc's reputation as a reliable delivery business. Successfully completing the guaranteed 1,000 monthly deliveries would show it can serve a major business customer, which could attract other distribution contracts and reduce reliance on house removals, where demand fluctuates with the housing market. It could also develop employees' skills in parcel handling, routing and tracking, making the workforce more flexible when removal demand falls.</p>
     <p><span class="tag t-J">HOWEVER</span>However, accepting the proposal could worsen KM plc's existing customer-service problems. Committing lorries and staff to Amazon could leave fewer resources for house removals if the market recovers, causing delays and complaints. As customer service is central to KM plc's reputation, losing existing customers could outweigh the benefits — so suitability depends on whether KM plc can meet Amazon's requirements while maintaining service standards.</p>`,
     fb:"8-mark 'assess one qualitative factor' — develop one factor fully, then balance it with a 'however' and a conditional judgement."},
    {marks:12, q:"Assess whether SmartSnacks Ltd should introduce the premium snack bar. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that the premium bar would generate extra contribution. It sells for £3.50 with £1.80 variable cost, giving £1.70 per unit; with 3,000 extra units, extra contribution is £5,100. As fixed costs of £11,000 are already covered, this £5,100 is additional profit — higher profitability without raising overheads or cutting existing sales.</p>
     <p><span class="tag t-P">POINT</span>Another benefit is a stronger brand. A higher-quality product at £3.50 positions SmartSnacks in a more upmarket segment, attracting customers willing to pay more and raising perceived value. This differentiates it from low-cost rivals and could build loyalty and reduce price sensitivity over time.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the business may have overestimated demand. The 3,000 figure is only a forecast; if it sells only 1,000–1,500, the extra contribution falls well below £5,100, and the launch may not deliver the expected uplift.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the premium bar could be beneficial, provided the 3,000 units are truly additional. It offers a strong £1.70 margin, enhances the brand and adds no fixed costs — but success depends on avoiding a fall in existing sales. It is recommended SmartSnacks launches it if market research confirms unmet demand.</p>`,
     fb:"Mr. Akram's exemplar (SmartSnacks). Uses the £1.70 / £5,100 figures, two benefits, a limitation on the demand estimate, and a conditional recommendation."},
    {marks:12, q:"A business can accept Order A (contribution £10,000, fixed costs £5,000, from an existing customer) or Order B (profit £3,000, from a new customer). Assess which order it should accept. (12)",
     model:`<p><span class="tag t-P">POINT</span>One reason to choose Order A is its higher profit of £5,000 against £3,000 for Order B, because Order A's £10,000 contribution less £5,000 fixed costs leaves £5,000. This means better short-term returns; therefore it improves immediate cash flow, and as a result the business has more funds to reinvest or save.</p>
     <p><span class="tag t-P">POINT</span>In addition, Order A is from an existing customer, which carries less risk because there is an established relationship and payment history. This means more reliable payment and continued business; therefore it strengthens loyalty and helps build consistent future revenue.</p>
     <p><span class="tag t-J">HOWEVER</span>However, Order B offers the chance to win a new customer and grow, possibly in a new market, who may place larger orders in future. This could open new regions or sectors and reduce dependence on a few existing clients, lowering risk if one stops ordering.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Order A is better for immediate return (£5,000 vs £3,000), lower risk and keeping a key customer. Success depends on the business's strategic priorities: if it can only choose one, it should take Order A for secure short-term gains, but if long-term expansion is the priority and resources allow, Order B could deliver greater value over time.</p>`,
     fb:"Mr. Akram's exemplar (Order A vs B). Compares the figures, weighs short-term profit against long-term growth, and reaches a conditional recommendation."},
    {marks:12, q:"Assess whether KM plc should accept Amazon's proposal to make 1,000 guaranteed monthly deliveries at $2 each (variable cost $1.50). (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that KM plc could use spare capacity to generate extra contribution. Amazon's $2 price covers the $1.50 variable cost, leaving $0.50 per delivery and $500 a month from 1,000 deliveries. Otherwise idle lorries and staff would earn revenue towards existing fixed costs; if those stay unchanged, the extra contribution raises profit — so accepting a price below the usual $5 is worthwhile when the alternative is unused capacity.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is more predictable revenue. KM plc's removals income is unsteady because demand follows house purchases; a guaranteed $2,000 a month helps it plan work, schedule staff in quieter periods and forecast receipts — though this depends on Amazon paying promptly, as KM plc must fund fuel and costs first.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the contribution is narrow and could worsen existing customer-service problems. Each delivery earns only $0.50 against $3.50 at the normal price, so a $0.50 rise in variable cost would wipe out the entire $500. Committing resources to Amazon could also delay removals if demand recovers, causing complaints and lost higher-value work.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, KM plc should accept only as a carefully controlled use of genuine spare capacity. The deliveries add contribution and reduce reliance on unpredictable removals, but protecting customer service matters more than $500 a month, since reputational damage could cost more long term. KM plc should confirm full costs, payment terms and service requirements, and negotiate flexibility — or reject if they cannot be met without disruption.</p>`,
     fb:"Mr. Akram's exemplar (KM plc). Uses the $0.50 / $500 contribution, a second benefit, a limitation (narrow margin, service), and a controlled recommendation."},
    {marks:20, q:"Evaluate whether Snowdon Sweets should accept the publisher's special order of one million packs at 38p each (variable cost 30p). (20)",
     model:`<p><span class="tag t-P">FOR</span>Snowdon should consider accepting, because the order generates positive contribution. The publisher offers 38p against 30p variable cost, giving 8p per pack and £80,000 across one million packs. If Snowdon has spare capacity and fixed costs stay unchanged, this improves its result versus rejecting the order, helping offset rising sugar prices and the cost of developing herbal lozenges — so it is financially attractive in the short term, provided the £80,000 is not eaten up by extra costs.</p>
     <p><span class="tag t-J">AGAINST</span>However, the order could reduce profit if it displaces normal sales. Normal packs earn 20p (50p − 30p) against only 8p here, so displacing one million normal sales would earn £80,000 instead of £200,000 — sacrificing £120,000 of contribution and possibly delaying existing customers' orders. The decision therefore depends on genuine spare capacity and expected normal demand.</p>
     <p><span class="tag t-P">MARKETING</span>The order could also be a marketing opportunity. One million packs as magazine gifts could introduce the herbal lozenges to health-conscious readers who may later buy at the normal 50p price, earning a higher contribution and improving the return on R&D — though only if the readers match Snowdon's target customers and become repeat buyers.</p>
     <p><span class="tag t-J">RISK</span>Conversely, operational problems create risk. The herbal line already has wastage and low morale, and one million packs are needed within two months; meeting this could need overtime or extra materials, pushing variable cost above 30p and shrinking the £80,000. Free gifts could also weaken the luxury image, reducing willingness to pay premium prices.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Snowdon should accept only if it can use spare capacity without displacing more profitable normal sales or harming quality. The strongest reason is the £80,000 extra contribution and the new-customer exposure, but the narrow 8p margin means extra costs could erode the benefit, and displacement could cost £120,000. The directors should confirm realistic costs, capacity and packaging that protects the brand; if these cannot be met, they should negotiate a higher price, smaller quantity or longer deadline, because positive contribution alone does not prove this is the best use of resources.</p>`,
     fb:"Mr. Akram's exemplar (Snowdon Sweets). Weighs the £80,000 contribution against £120,000 displacement and qualitative risks, with a fully conditional recommendation."},
    {marks:20, q:"Using the figures, evaluate which business (Sepal, Li & Fung or Asda) is best protected financially, and the usefulness of contribution per pair for judging this. (20)",
     model:`<p><span class="tag t-P">SEPAL</span>Contribution is sales revenue minus variable costs, covering fixed costs before profit. Sepal earns only $0.26 per pair ($7.28 − $7.02), so each sale adds very little towards overheads and large volumes are needed before profit — falling orders could leave fixed costs uncovered. However, a low contribution is not unsustainable if orders are consistently high and fixed costs low.</p>
     <p><span class="tag t-J">SEPAL RISK</span>Sepal is especially vulnerable to variable-cost rises because its margin is so thin: a $0.30 cost increase would turn +$0.26 into −$0.04, so every pair sold would fail to cover its variable cost. It may need to raise productivity or prices — but raising prices depends on bargaining power, as buyers could switch supplier.</p>
     <p><span class="tag t-P">LI & FUNG / ASDA</span>Li & Fung earns $3.75 ($11.61 − $7.28 − $0.58 shipping) and Asda the most at $6.79 ($18.44 − $11.65). Higher contribution gives a larger buffer against cost rises and, for Asda, scope to discount while staying positive — a targeted discount could lift volume and total contribution, though sales must rise enough to compensate and Asda must still cover store overheads.</p>
     <p><span class="tag t-J">LIMITATION</span>However, contribution per pair alone does not show which owner earns most profit, because that depends on total contribution minus fixed costs. Sepal could still profit through high volume and low fixed costs, while large retail overheads could absorb much of Asda's contribution.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Asda has the strongest contribution per pair and Sepal is most exposed to cost increases, since even a small rise could wipe out its $0.26. Asda's $6.79 is a much larger buffer. Nevertheless, a firm judgement about profit needs sales volumes and fixed-cost figures — so contribution per pair is useful for comparing margins and sensitivity to cost, but not sufficient on its own to decide which owners earn the most.</p>`,
     fb:"Mr. Akram's exemplar (supply chain). Interprets each contribution figure, tests sensitivity, and crucially notes contribution per unit alone can't decide profit — fixed costs and volume matter."}
  ],
  resources:[
    {label:"Contribution — lesson notes (PDF)", file:"resources/3-3-5-contribution-notes.pdf"}
  ]
},
{
  code:"3.3.4.5", subtheme:"3.3.4", title:"Business ethics",
  business:"Case studies: Stellantis, Tesco & Boohoo", status:"live",
  notes:[
    {h:"What are business ethics?", html:`
      <p><b>Ethics</b> are moral guidelines that govern good behaviour, so behaving ethically means <b>doing what is morally right</b>. For a business this usually means adopting the <b>stakeholder approach</b> — trying to meet the objectives of groups such as employees, customers, suppliers and local communities, not only shareholders.</p>
      <p>Ethics influence strategic decisions on sustainability, fair sourcing and the treatment of employees. Acting ethically can protect <b>reputation</b>, lift <b>employee morale</b> and strengthen <b>stakeholder relationships</b> — but it can also raise costs.</p>`},
    {h:"The ethics vs profit trade-off", html:`
      <p>Many ethical choices involve a <b>trade-off</b>: the ethical option often costs more in the short term, while the cheaper option may raise profit but risk harm.</p>
      <ul>
        <li><b>Fair sourcing</b> (e.g. Fairtrade) raises input costs but protects suppliers and brand image.</li>
        <li><b>Fair pay and conditions</b> raise the wage bill but improve morale, productivity and retention.</li>
        <li><b>Cutting corners</b> (underpaying workers, misleading labelling) boosts short-term profit but risks scandal, fines and lost customers.</li>
      </ul>
      <div class="note-ex">Key idea: unethical behaviour can look cheaper on paper, but the long-term cost to reputation and trust can far outweigh the saving.</div>`},
    {h:"Pay and rewards, and executive pay", html:`
      <p>Ethical questions around <b>pay and rewards</b> include paying a <b>fair wage</b>, fair conditions, and the size of <b>executive (CEO) pay</b>.</p>
      <p>High CEO pay becomes an ethical issue when it rises sharply while ordinary employees face restructuring or limited pay rises — it can look unfair and damage morale. But supporters argue large, performance-linked packages are needed to <b>attract and retain</b> talented executives in a competitive market.</p>`},
    {h:"Real examples", html:`
      <ul>
        <li><b>Tesco "fake farms":</b> marketing products under invented farm names, raising questions about honesty with customers.</li>
        <li><b>Boohoo:</b> allegations that clothes were made by workers paid as little as 29p an hour — a supply-chain ethics issue.</li>
        <li><b>Stellantis:</b> in April 2022 just over 52% of shareholders voted against the CEO's €19m pay package (a 17.6% rise) during a period of restructuring.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Business ethics", marks:2, body:`The moral principles and guidelines that govern how a business behaves <span class="pt">1</span>; acting ethically means doing what is morally right, such as treating stakeholders fairly, even where it is not the cheapest option <span class="pt">2</span>.`},
    {term:"Stakeholder approach", marks:2, body:`An approach in which a business tries to meet the objectives of all its stakeholder groups — employees, customers, suppliers and the community — not only shareholders <span class="pt">1</span>; it is central to behaving ethically <span class="pt">2</span>.`},
    {term:"Ethical trade-off", marks:2, body:`A situation where acting ethically conflicts with another objective such as profit <span class="pt">1</span>; for example, fair sourcing raises costs now but protects reputation and relationships later <span class="pt">2</span>.`},
    {term:"Executive pay", marks:2, body:`The total reward paid to senior managers such as the CEO, often including bonuses and shares <span class="pt">1</span>; it becomes an ethical issue when large rises occur while employees face pay restraint <span class="pt">2</span>.`},
    {term:"Fair wage", marks:2, body:`A level of pay considered reasonable for the work done and enough to live on <span class="pt">1</span>; paying it raises costs but can improve morale, productivity and retention <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define business ethics.",
     model:`Business ethics are the moral principles that govern how a business behaves <span class="pt">1</span>; acting ethically means doing what is morally right, such as treating stakeholders fairly, even when it is not the cheapest option <span class="pt">2</span>.`,
     fb:"Two linked points — what ethics are, and what acting ethically involves. An example alone would not earn the second mark."},
    {marks:4, q:"Explain one way acting ethically could benefit a business.",
     model:`Acting ethically — for example paying fair wages — can raise employee morale <span class="pt">1</span>. This is because staff feel valued and treated fairly <span class="pt">2</span>. As a result, productivity rises and labour turnover falls <span class="pt">3</span>, lowering recruitment costs and improving the quality of output <span class="pt">4</span>.`,
     fb:"A 4-mark 'explain' wants one point developed through a chain, not several undeveloped points."},
    {marks:4, q:"Explain one reason high CEO pay can be seen as an ethical issue.",
     model:`High CEO pay can seem unfair when it rises while ordinary staff face pay restraint <span class="pt">1</span>. This is because employees may feel undervalued if executives are rewarded while their own conditions worsen <span class="pt">2</span>. This can damage morale and motivation <span class="pt">3</span>, raising turnover and harming the firm's reputation for fairness <span class="pt">4</span>.`,
     fb:"Reward the link from the pay gap to a stakeholder consequence (morale, reputation)."}
  ],
  caseStudy:{
    business:"Stellantis, Tesco & Boohoo",
    intro:`<p>Three ethics scenarios used in the exam questions and discussion.</p>
      <h3>Stellantis — executive pay</h3>
      <p>In <b>April 2022</b>, just over <b>52% of Stellantis shareholders voted against</b> the proposed <b>€19m</b> salary for CEO Carlos Tavares — a <b>17.6% increase</b> at a time when many employees had faced restructuring and limited pay rises. However, Tavares had delivered strong results: from 2020 to 2021 revenue rose <b>213%</b>, profits <b>602%</b>, and earnings per share tripled; rival CEOs (e.g. Ford's) earned even more, raising the risk of losing him.</p>
      <h3>Tesco — "fake farms"</h3>
      <p>Tesco marketed products under invented farm names, raising the question of whether it was being honest with customers.</p>
      <h3>Boohoo — supply-chain labour</h3>
      <p>Boohoo faced allegations that clothes were made by workers paid as little as <b>29p an hour</b> — an ethics issue in how it treats and monitors its supply chain.</p>`
  },
  exam:[
    {marks:8, q:"Assess two possible trade-offs a business may face between behaving ethically and maximising profit. (8)",
     model:`<p><span class="tag t-P">POINT</span>One trade-off is between <b>fair sourcing and cost</b>. <span class="tag t-E">EXPLAIN</span>Buying from fairly paid, sustainable suppliers (e.g. Fairtrade) usually costs more than the cheapest alternative. <span class="tag t-C">CHAIN</span>This means ethical sourcing raises variable costs and could reduce profit margins in the short term; however, it protects brand image and supplier relationships, which can lift sales among ethically minded customers and secure supply long term. <span class="tag t-J">JUDGE</span>So the trade-off is short-term cost against long-term reputation.</p>
     <p><span class="tag t-P">POINT</span>A second trade-off is between <b>fair pay/conditions and the wage bill</b>. <span class="tag t-E">EXPLAIN</span>Paying fair wages and investing in good conditions increases costs. <span class="tag t-C">CHAIN</span>This means profit per unit may fall; however, better-treated staff tend to be more productive and loyal, cutting turnover and recruitment costs.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the balance depends on the business and its customers: a premium, values-led brand gains more from ethical choices than a price-led one, so ethics and profit are not always in conflict — over time, acting ethically can protect the profit that cutting corners would eventually destroy.</p>`,
     fb:"8-mark 'assess' needs two developed trade-offs plus a balancing judgement — the point that ethics and profit can align over the long term lifts it to the top band."},
    {marks:20, q:"Evaluate whether the Board of Directors should accept the shareholders' vote against the CEO's €19m pay package at Stellantis. (20)",
     model:`<p><span class="tag t-P">ACCEPT · FOR</span>One reason to accept the vote is that shareholder interests must be prioritised, because shareholders own the company and take on the financial risk, so they expect responsible governance. In April 2022 just over 52% voted against the €19m salary. This means the Board is expected to respect their decision; therefore ignoring it could trigger falling investor confidence and share selling, and as a result Stellantis' reputation for good governance could be harmed.</p>
     <p><span class="tag t-P">ACCEPT · FOR</span>A second reason is protecting employee morale, because the €19m included a 17.6% rise while many staff faced restructuring and limited pay rises. This means employees could feel undervalued; therefore accepting the vote to limit the pay could improve motivation and loyalty, and as a result reduce turnover and lift productivity.</p>
     <p><span class="tag t-J">REJECT · AGAINST</span>However, one reason to reject the vote is that Tavares delivered very strong results — 2020–2021 revenue up 213%, profit up 602%, EPS tripled. This means a performance-based reward can be justified; therefore the Board may feel a higher salary is deserved to retain an effective CEO.</p>
     <p><span class="tag t-J">REJECT · AGAINST</span>Another reason is the risk of losing him, because rival CEOs such as Ford's earn even more. This means Tavares could leave for a competitor if he feels undervalued; therefore a competitive salary could retain him and maintain leadership stability through the EV transition.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the Board should accept the shareholders' vote, because the €19m package appears excessive and damaging to stakeholder confidence, with a 17.6% rise during restructuring looking out of touch. Success depends on whether the Board can retain Tavares with a package that rewards him appropriately while addressing shareholder concerns. It is recommended the Board negotiates a revised, more clearly performance-linked package rather than simply imposing or ignoring the original.</p>`,
     fb:"Mr. Akram's exemplar (Stellantis). Two reasons each way using the figures, then a conclusion that decides, says what it depends on, and recommends — the house structure for a 20-mark evaluation."}
  ],
  resources:[
    {label:"Business ethics — lesson notes (PDF)", file:"resources/3-4-1-business-ethics-notes.pdf"}
  ]
},
{
  code:"3.3.4.6", subtheme:"3.3.4", title:"Corporate social responsibility (CSR)",
  business:"Case study: Cadbury / Mondēlez",
  status:"live",
  notes:[
    {h:"What is CSR?", html:`
      <p><b>Corporate social responsibility (CSR)</b> means running a business in a way that is <b>ethical</b> — taking account of its <b>social, economic and environmental impact</b> and respecting human rights, rather than only chasing profit.</p>
      <p>CSR activities can include:</p>
      <ul>
        <li>Working in <b>partnership with local communities</b>.</li>
        <li>Building strong relationships with <b>employees, suppliers and customers</b>.</li>
        <li><b>Environmental protection</b> and sustainability.</li>
      </ul>`},
    {h:"Social enterprises", html:`
      <p>Some businesses exist mainly to achieve <b>social or environmental goals</b> rather than to maximise profit — these are <b>social enterprises</b>. This contrasts with a conventional firm that pursues financial goals while trying to <i>minimise</i> its negative impact on society and the environment.</p>`},
    {h:"Advantages & limitations of CSR", html:`
      <h3>Advantages</h3>
      <ul>
        <li><b>Improved brand image and customer loyalty</b> — appeals to socially conscious consumers.</li>
        <li><b>Higher employee motivation and retention</b> — staff feel proud and valued.</li>
        <li>Can attract investors and reduce the risk of regulation or reputational damage.</li>
      </ul>
      <h3>Limitations</h3>
      <ul>
        <li><b>Increased costs</b> — ethical sourcing and community projects are expensive.</li>
        <li><b>Not all customers notice or value it</b> — many purchases are impulse buys driven by price, brand and taste.</li>
        <li><b>Greenwashing</b> risk — overstating CSR credentials can backfire badly if exposed.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Corporate social responsibility (CSR)", marks:2, body:`The idea that a business should operate ethically and take account of its social, economic and environmental impact <span class="pt">1</span>, rather than focusing only on maximising profit for shareholders <span class="pt">2</span>.`},
    {term:"Stakeholder", marks:2, body:`Any individual or group affected by, or with an interest in, a business <span class="pt">1</span> — such as employees, customers, suppliers and the local community — whose interests CSR aims to consider <span class="pt">2</span>.`},
    {term:"Social enterprise", marks:2, body:`A business whose main purpose is to achieve social or environmental goals rather than to maximise profit <span class="pt">1</span>; any surplus is typically reinvested to further that social mission <span class="pt">2</span>.`},
    {term:"Greenwashing", marks:2, body:`When a business overstates or misrepresents how environmentally or socially responsible it is <span class="pt">1</span>; if exposed, it can seriously damage trust and reputation <span class="pt">2</span>.`},
    {term:"Fairtrade", marks:2, body:`A scheme that guarantees producers in developing countries a minimum price for their goods <span class="pt">1</span>; it raises a firm's input costs but supports suppliers and strengthens its ethical image <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define corporate social responsibility (CSR).",
     model:`CSR is the idea that a business should operate ethically and consider its social, economic and environmental impact <span class="pt">1</span>, rather than focusing only on maximising profit for shareholders <span class="pt">2</span>.`,
     fb:"Two linked points — what CSR is, and how it differs from pure profit maximisation."},
    {marks:4, q:"Explain one benefit to a business of acting in a socially responsible way.",
     model:`Acting responsibly can improve brand image and customer loyalty <span class="pt">1</span>. This is because socially conscious consumers prefer firms seen to act ethically <span class="pt">2</span>. As a result, customers may choose it over rivals <span class="pt">3</span>, increasing sales and positive word-of-mouth and supporting long-term profitability <span class="pt">4</span>.`,
     fb:"Develop one benefit through a chain to a commercial outcome (sales, loyalty, profit)."},
    {marks:4, q:"Explain one drawback of a business investing heavily in CSR.",
     model:`CSR raises costs, and not all customers value it <span class="pt">1</span>. This is because many purchases are impulse buys driven by price, brand and taste rather than ethics <span class="pt">2</span>. As a result, heavy CSR spending may not change buying behaviour <span class="pt">3</span>, so the money could fail to deliver a clear commercial return and reduce profitability <span class="pt">4</span>.`,
     fb:"Reward the link from 'customers don't always notice' to a wasted-spend / lower-profit consequence."}
  ],
  caseStudy:{
    business:"Cadbury / Mondēlez International",
    intro:`<p><b>Cadbury</b> was long associated with socially responsible behaviour, but its record is mixed — making it a classic CSR case.</p>
      <ul>
        <li><b>Fairtrade → Cocoa Life:</b> Cadbury had committed to Fairtrade cocoa, guaranteeing up to 200,000 farmers in Ghana and Ivory Coast a minimum of £1,600 per tonne. In November 2016 it switched to <b>Cocoa Life</b>, which does not apply the same price rules or guarantee that other ingredients (nuts, sugar, raisins) are responsibly sourced.</li>
        <li><b>Raisins → sultanas:</b> after 90 years, the Fruit & Nut bar's raisins were replaced with cheaper sultanas "to give more variation."</li>
        <li><b>Retirement gifts scrapped:</b> Mondēlez ended the tradition of Christmas chocolate gifts to former employees, citing the need to plug a pension deficit.</li>
        <li><b>Health pledge:</b> Mondēlez pledged that standard single-serve bars would contain under 250 calories, responding to UK anti-obesity policy.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the likely value of corporate social responsibility to a business such as Cadbury. (10)",
     model:`<p><span class="tag t-P">POINT</span>One value of CSR is improved <b>brand image and customer loyalty</b>, because acting ethically — such as Cadbury's former Fairtrade commitment and support for obesity targets — appeals to socially conscious consumers. This means customers may choose Cadbury over rivals with weaker values; as a result CSR can raise sales and positive word-of-mouth, supporting long-term profitability through repeat purchases.</p>
     <p><span class="tag t-P">POINT</span>A second value is improved <b>employee motivation and retention</b>, because traditions such as looking after staff in retirement made employees feel valued. This means productivity and commitment may rise, reducing turnover and recruitment costs.</p>
     <p><span class="tag t-J">HOWEVER</span>However, not all consumers notice or value CSR, because many chocolate purchases are impulse buys driven by price, brand familiarity and taste. This means heavy CSR spending might not change buying behaviour or deliver a clear commercial return, especially if the ethical credentials are not communicated at the point of sale.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, CSR can clearly benefit Cadbury — brand loyalty, morale and reputation — and is worthwhile when it matches customer values without damaging profitability. Its success depends on whether Cadbury chooses initiatives that genuinely matter to customers and employees while managing the cost. It is recommended Cadbury prioritises CSR that supports its commercial goals, such as ethical sourcing that maintains quality.</p>`,
     fb:"Mr. Akram's exemplar (Cadbury). Two developed benefits, a genuine limitation (impulse buying), and a conclusion on what the value of CSR depends on."},
    {marks:12, q:"Evaluate whether becoming more socially responsible is likely to benefit a consumer-facing business. (12)",
     model:`<p><span class="tag t-P">POINT</span>Greater social responsibility can strengthen a consumer-facing brand, because ethical and environmental action differentiates it from rivals. <span class="tag t-C">CHAIN</span>This means it can attract socially conscious customers and justify a premium price; as a result sales and loyalty can rise, and the firm is better protected from reputational and regulatory risk.</p>
     <p><span class="tag t-P">POINT</span>It can also lift the workforce, because employees take pride in a responsible employer. <span class="tag t-C">CHAIN</span>This means higher motivation and lower turnover, cutting recruitment costs and improving service.</p>
     <p><span class="tag t-J">HOWEVER</span>However, CSR raises costs and its payback is uncertain, because many customers buy on price, brand and convenience, and any gap between claims and behaviour risks accusations of greenwashing that damage trust more than silence would. So the benefit is not guaranteed.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> social responsibility usually benefits the business, but only when it is genuine and well targeted. <b>Why:</b> it builds loyalty and morale that support long-term profit. <b>Why (develop):</b> but it adds cost and can backfire if overstated. <b>What (depends on):</b> the benefit depends on matching initiatives to what customers actually value and communicating them honestly.</p>`,
     fb:"A 12-mark CSR evaluation built on the notes. Balanced, with greenwashing as the key limitation and a 4Ws conclusion."}
  ],
  resources:[
    {label:"CSR — lesson notes (PDF)", file:"resources/3-4-2-csr-notes.pdf"}
  ]
},
{
  code:"3.3.4.1", subtheme:"3.3.4", title:"Organisational culture",
  business:"Case study: Dunelm", status:"live",
  notes:[
    {h:"What is organisational culture?", html:`
      <p><b>Corporate (organisational) culture</b> is often summed up as <b>“the way we do things around here.”</b> More formally, it is the <b>shared values, beliefs and norms</b> of a business that affect every aspect of work life.</p>
      <p>Culture is reflected in many visible ways:</p>
      <ul>
        <li><b>Leadership style</b> — e.g. autocratic vs laissez-faire.</li>
        <li><b>Communication methods</b> — e.g. heavy use of Teams.</li>
        <li><b>Organisational structure</b> — tall vs flat, centralised vs decentralised.</li>
        <li><b>Dress code and office layout</b> — open-plan often signals a more relaxed culture.</li>
        <li><b>Incentives, rewards, training and work–life balance.</b></li>
      </ul>`},
    {h:"Strong vs weak culture", html:`
      <p><b>Strong culture</b> — shared values, high engagement and a clear identity. Staff know what the business stands for and behave consistently, which supports good service and quick, aligned decisions.</p>
      <p><b>Weak culture</b> — lack of direction, low motivation and inconsistency. Behaviour varies from person to person and from site to site.</p>
      <div class="note-ex">A strong culture is an asset when it fits the strategy — but it can also make a business harder to change (see 3.3.4.3).</div>`}
  ],
  definitions:[
    {term:"Corporate (organisational) culture", marks:2, body:`The shared values, beliefs and norms of a business that affect every aspect of work life <span class="pt">1</span> — often summed up as “the way we do things around here” <span class="pt">2</span>.`},
    {term:"Strong culture", marks:2, body:`A culture where values are widely shared and staff are highly engaged with a clear identity <span class="pt">1</span>; this produces consistent behaviour and aligned decision-making <span class="pt">2</span>.`},
    {term:"Weak culture", marks:2, body:`A culture lacking shared direction, with low motivation and inconsistency <span class="pt">1</span>; behaviour varies between individuals and sites, which can harm performance <span class="pt">2</span>.`},
    {term:"Values", marks:2, body:`The core principles a business stands for and expects its people to follow <span class="pt">1</span>; shared values are the foundation of a strong corporate culture <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define corporate culture.",
     model:`Corporate culture is the shared values, beliefs and norms of a business that affect every aspect of work life <span class="pt">1</span> — in short, “the way we do things around here” <span class="pt">2</span>.`,
     fb:"Two linked points — the formal definition plus the shorthand. The phrase alone is not enough for both marks."},
    {marks:4, q:"Explain one way a strong corporate culture can benefit a business.",
     model:`A strong culture means staff share the same values <span class="pt">1</span>. This is because everyone understands what the business stands for and how to behave <span class="pt">2</span>. As a result, behaviour and service are consistent and decisions are aligned <span class="pt">3</span>, improving customer experience and performance <span class="pt">4</span>.`,
     fb:"Develop one benefit through a chain to a performance outcome."}
  ],
  caseStudy:{
    business:"Dunelm",
    intro:`<p><b>Dunelm</b>, the UK homewares retailer, is often cited for a strong, family-style culture. It <b>treats employees like family</b>, offering flexible working, mentoring and above-minimum-wage pay. Staff feel valued, which supports loyalty, lower turnover and good customer service — contributing to an operating profit of around <b>£126.9m</b>. As it has grown to <b>172 stores and ~9,000 employees</b>, the challenge is keeping that culture consistent in every store.</p>`
  },
  exam:[
    {marks:12, q:"Assess how Dunelm's corporate culture contributes to its success. (12)",
     model:`<p><span class="tag t-P">POINT</span>One way Dunelm's culture drives success is through <b>employee motivation and loyalty</b>, because it treats staff like family with flexible working, mentoring and above-minimum-wage pay. <span class="tag t-C">CHAIN</span>This means staff feel valued and stay longer, so turnover and recruitment costs fall and teams become more experienced; as a result performance improves, supporting an operating profit of around £126.9m.</p>
     <p><span class="tag t-P">POINT</span>It also supports <b>customer service</b>, because motivated staff help customers well. <span class="tag t-C">CHAIN</span>This means shoppers enjoy visiting, return, and recommend Dunelm — lifting sales.</p>
     <p><span class="tag t-J">HOWEVER</span>However, as the business grows to 172 stores and 9,000 employees, the culture is harder to keep strong everywhere, because not every manager upholds the same values. This means some staff feel less supported, so the family-style culture could fade and service become inconsistent.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> Dunelm's culture clearly contributes to success. <b>Why:</b> it improves retention, service and performance. <b>Why (develop):</b> but culture alone cannot guarantee success — product, pricing and service matter too. <b>What (depends on):</b> it depends on maintaining the culture across all 172 stores, so regular manager training and monitoring are recommended.</p>`,
     fb:"Mr. Akram's exemplar (Dunelm). Uses the Extract figures (£126.9m, 172 stores, 9,000 staff), two benefits, a growth limitation, and a 4Ws conclusion."}
  ],
  resources:[
    {label:"Organisational culture — lesson notes (PDF)", file:"resources/3-5-1-org-culture-notes.pdf"}
  ]
},
{
  code:"3.3.4.2", subtheme:"3.3.4", title:"Handy's types of culture",
  business:"Case study: Zappos (task culture)", status:"live",
  notes:[
    {h:"Charles Handy's four culture types", html:`
      <p>Charles Handy classified corporate culture into <b>four types</b>:</p>
      <table class="datatable">
        <tr><th>Type</th><th>In a nutshell</th><th>Typical of</th></tr>
        <tr><td><b>Power</b></td><td>A central figure or small group makes all decisions</td><td>Small, entrepreneur-led firms</td></tr>
        <tr><td><b>Role</b></td><td>Based on rules; power comes from your position/job title</td><td>Large bureaucracies, the civil service</td></tr>
        <tr><td><b>Task</b></td><td>Small empowered teams; power shifts to whoever has the needed expertise</td><td>Project / matrix organisations</td></tr>
        <tr><td><b>Person</b></td><td>Individuals see themselves as superior to the organisation</td><td>Law firms, doctors' surgeries</td></tr>
      </table>`},
    {h:"Power & role cultures", html:`
      <p><b>Power culture</b> — a central figure makes the decisions. <b>Benefit:</b> fast decision-making and quick adaptation to change. <b>Drawback:</b> little chance for workers to share views or take responsibility, which can demotivate.</p>
      <p><b>Role culture</b> — built on rules, with everyone's role set in their contract; power comes from job title. <b>Benefits:</b> clear control, easy to spot underperformers, and (with narrow spans of control) promotion opportunities. <b>Drawbacks:</b> skilled workers may dislike being controlled; more supervisors raise labour costs; a tall structure slows decisions.</p>`},
    {h:"Task & person cultures", html:`
      <p><b>Task culture</b> — focuses on creativity and empowering workers in small project teams (a matrix structure); power shifts to whoever has the relevant expertise. <b>Benefits:</b> highly productive and creative with the right mix; encourages intrapreneurship. <b>Drawbacks:</b> some dislike teamwork, decisions can be slow or stall, and it is harder for managers to control.</p>
      <p><b>Person culture</b> — individuals see themselves as unique and superior to the organisation, which exists so they can work (e.g. a law firm). <b>Benefits:</b> highly creative, customer-focused and quick to adapt. <b>Drawbacks:</b> staff pursue individual goals and are hard to manage if those differ from the business.</p>`}
  ],
  definitions:[
    {term:"Power culture", marks:2, body:`A culture where a central figure or small group makes all the decisions <span class="pt">1</span>; this allows fast decisions but gives other workers little say or responsibility <span class="pt">2</span>.`},
    {term:"Role culture", marks:2, body:`A culture based on rules where power comes from a person's position in the hierarchy <span class="pt">1</span>; everyone knows their role, giving strong control but slower, taller decision-making <span class="pt">2</span>.`},
    {term:"Task culture", marks:2, body:`A culture focused on small empowered project teams, where power shifts to whoever has the needed expertise <span class="pt">1</span>; it encourages creativity and intrapreneurship but is harder to control <span class="pt">2</span>.`},
    {term:"Person culture", marks:2, body:`A culture where skilled individuals see themselves as superior to the organisation, which exists so they can work <span class="pt">1</span>, such as a law firm; creative but hard to manage toward shared goals <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define a role culture.",
     model:`A role culture is based on rules, where everyone knows their set role and power comes from a person's position in the hierarchy <span class="pt">1</span>; this gives strong management control but tends to slow decision-making <span class="pt">2</span>.`,
     fb:"Two linked points — the defining feature (rules/position) plus a consequence."},
    {marks:4, q:"Explain one drawback of a power culture.",
     model:`In a power culture, workers have little chance to share views or take responsibility <span class="pt">1</span>. This is because all decisions sit with a central figure <span class="pt">2</span>. As a result, many workers feel demotivated <span class="pt">3</span>, which can lower productivity and raise staff turnover <span class="pt">4</span>.`,
     fb:"Link the concentration of power to a motivation/performance consequence."}
  ],
  caseStudy:{
    business:"Zappos.com — task culture",
    intro:`<p><b>Zappos.com</b>, the US online shoe and clothing retailer, is a well-known example of a <b>task culture</b>. It adopted <b>Holacracy</b>, a system that lets any employee form a team to tackle a business issue, and gives all employees a chance to speak in weekly meetings. Innovation is not restricted to senior leaders; teams form around tasks and expertise, which supports Zappos' fast response to the market and its strong customer-service reputation — though the lack of hierarchy can blur accountability.</p>`
  },
  exam:[
    {marks:20, q:"Evaluate the benefits and drawbacks of a task culture for a business such as Zappos.com. (20)",
     model:`<p><span class="tag t-P">BENEFIT</span>One benefit of a task culture is that it encourages teamwork and innovation across the business, because it is built on collaborative problem-solving with cross-department project teams. At Zappos this shows in Holacracy, which lets any employee form a team to tackle an issue. This means innovation is not restricted to senior leaders but becomes part of everyday decision-making; therefore Zappos can respond quickly to the market and protect its customer experience, and as a result employees feel empowered, boosting motivation and service quality.</p>
     <p><span class="tag t-P">BENEFIT</span>Another benefit is higher employee satisfaction and lower turnover, because a task culture gives people purpose and involvement. Zappos lets all employees speak in weekly meetings, so ideas are heard regardless of position; therefore staff take ownership of their work, and as a result Zappos builds a loyal workforce, cutting recruitment costs and lifting productivity.</p>
     <p><span class="tag t-J">DRAWBACK</span>However, a task culture can cause confusion without clear leadership, because shared power can blur accountability and slow decisions. At Zappos, Holacracy removes hierarchy but can leave responsibilities unclear; therefore in high-pressure situations decisions may be slow, and as a result mistakes or missed opportunities can follow, especially if teams disagree.</p>
     <p><span class="tag t-J">DRAWBACK</span>Another drawback is that it does not suit everyone, because some staff prefer structure and clear direction. At Zappos employees must form teams and act proactively; therefore new staff or those from traditional backgrounds may feel overwhelmed, and as a result could disengage or underperform.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, a task culture benefits Zappos by boosting innovation, satisfaction and adaptability in a fast-changing retail market, which suits a rapidly grown, service-led business. Success depends on how well it manages the lack of hierarchy and supports staff uncomfortable with that freedom, and on team members' skills and communication. It is recommended Zappos provides additional training and structured guidance so all teams perform well.</p>`,
     fb:"Mr. Akram's exemplar (Zappos). Two benefits and two drawbacks, each applied with the house chain, and a conclusion that decides and states what success depends on."}
  ],
  resources:[
    {label:"Handy's types of corporate culture — lesson notes (PDF)", file:"resources/3-5-2-handy-notes.pdf"}
  ]
},
{
  code:"3.3.4.3", subtheme:"3.3.4", title:"Difficulties in changing culture",
  business:"Case studies: Pure Gym & Burberry", status:"live",
  notes:[
    {h:"Why change culture, and why it's hard", html:`
      <p>A business may need to change its culture after a <b>merger or takeover</b>, during <b>growth or market change</b>, or because its current culture is <b>weak</b>.</p>
      <p>But an established culture is hard to shift because of <b>resistance to change</b>: entrenched behaviours ("the way we've always done it"), fear and job insecurity, loss of autonomy, and weak or inconsistent leadership. Cultural change can hit morale, communication and performance in the short term.</p>`},
    {h:"Kotter & Schlesinger — six approaches to resistance", html:`
      <ol>
        <li><b>Education & communication</b> — explain clearly why change is needed; tackles misconceptions.</li>
        <li><b>Participation & involvement</b> — involving people builds commitment, not just compliance.</li>
        <li><b>Facilitation & support</b> — training, counselling, mentoring and listening ease "adjustment problems" where fear drives resistance.</li>
        <li><b>Co-option & manipulation</b> — give resistant individuals a role in the change, or use selective information (can be seen as unethical).</li>
        <li><b>Negotiation & bargaining</b> — offer incentives to accept change, or enhanced rewards to leave (e.g. voluntary redundancy).</li>
        <li><b>Explicit & implicit coercion</b> — a last resort; spelling out (or implying) the consequences of resisting. Damages trust and morale.</li>
      </ol>`}
  ],
  definitions:[
    {term:"Resistance to change", marks:2, body:`The reluctance of employees to accept changes to their working culture or practices <span class="pt">1</span>, often caused by fear, loss of autonomy or entrenched habits <span class="pt">2</span>.`},
    {term:"Cultural change", marks:2, body:`The process of altering the shared values, beliefs and norms of a business <span class="pt">1</span>, often needed after a merger, period of growth or poor performance <span class="pt">2</span>.`},
    {term:"Education & communication (Kotter & Schlesinger)", marks:2, body:`Explaining clearly why change is needed <span class="pt">1</span>; it addresses misconceptions and is the starting point for reducing resistance to cultural change <span class="pt">2</span>.`},
    {term:"Coercion (Kotter & Schlesinger)", marks:2, body:`Forcing change by stating or implying the negative consequences of resisting <span class="pt">1</span>; a last resort that usually damages trust and morale <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:4, q:"Explain one reason employees might resist a change to their organisation's culture.",
     model:`Employees may resist because they fear losing their job or status <span class="pt">1</span>. This is because cultural change often follows mergers or restructuring that threaten roles <span class="pt">2</span>. As a result, staff feel insecure and demotivated <span class="pt">3</span>, making them less willing to adopt new ways of working and harder to lead through the change <span class="pt">4</span>.`,
     fb:"Reward a clear reason developed into a morale/behaviour consequence."},
    {marks:4, q:"Explain one Kotter & Schlesinger approach a business could use to overcome resistance to cultural change.",
     model:`The business could use education and communication <span class="pt">1</span>, clearly explaining why the change is needed <span class="pt">2</span>. As a result, misconceptions are addressed and staff understand the reasons <span class="pt">3</span>, reducing resistance and helping the change succeed <span class="pt">4</span>.`,
     fb:"Name a specific approach and develop how it reduces resistance."}
  ],
  caseStudy:{
    business:"Pure Gym & Burberry",
    intro:`<p><b>Pure Gym</b> — founded 2009, now Britain's largest gym chain by membership. It runs a <b>low-cost, highly centralised</b> model: each site employs just <b>two staff</b> plus up to 12 self-employed trainers, with 24-hour PIN access and no contracts. In 2016 it bought <b>LA Fitness</b> (established 25+ years, 43 clubs) for £60–£80m. LA Fitness had <b>qualified teams in each gym and a decentralised</b> approach, so most sites must be rebranded and working practices changed — a major culture clash.</p>
      <p><b>Burberry</b> — changing its established culture and brand identity (e.g. altering its iconic red, black and beige check) risks alienating loyal customers who value its heritage and British luxury image.</p>`
  },
  exam:[
    {marks:12, q:"Assess whether Pure Gym is likely to overcome the difficulties of changing LA Fitness's culture following the takeover. (12)",
     model:`<p><span class="tag t-P">POINT</span>One reason Pure Gym may overcome the difficulties is that most LA Fitness staff will be made redundant, because Pure Gym's centralised model uses just two employed staff per gym plus self-employed trainers, versus LA Fitness's qualified teams. <span class="tag t-C">CHAIN</span>This means much of the resistance that usually comes from retained employees will not apply, as the workforce is largely replaced; as a result Pure Gym can impose its own systems and values from the outset without retraining or winning over resistant staff.</p>
     <p><span class="tag t-P">POINT</span>A second reason is Pure Gym's experience, because it has rolled out its model across many UK sites. This means it likely has effective systems for managing transitions and training, so it is better prepared to handle the change smoothly.</p>
     <p><span class="tag t-J">HOWEVER</span>However, remaining staff may still resist, because Pure Gym's low-cost, centralised model removes the autonomy LA Fitness staff had. This means insecurity and lower morale, which could raise turnover and disrupt service and membership retention in the short term.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Pure Gym is likely to overcome the cultural difficulties, because most existing staff will not be retained, removing a main source of resistance. Success depends on how well it manages remaining staff and customers through the transition — using communication, participation and support. It is recommended Pure Gym invests in clear communication and support during integration to reduce resistance and protect service quality.</p>`,
     fb:"Mr. Akram's exemplar (Pure Gym). Two reasons it may succeed, a genuine counter, and a conclusion that decides and names change-management strategies."},
    {marks:4, q:"Explain one likely difficulty for Burberry when changing its established culture and brand identity.",
     model:`One difficulty is the risk of alienating loyal customers <span class="pt">1</span>. This is because Burberry's traditional red, black and beige check has been its most recognisable trademark for over 20 years and is tied to its British luxury heritage <span class="pt">2</span>. By changing this iconic design, long-term customers who value tradition may feel disconnected <span class="pt">3</span>, so they may stop buying Burberry products, reducing sales and damaging the brand's reputation <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Burberry). A developed difficulty linking the change to a clear customer/sales consequence."}
  ],
  resources:[
    {label:"Difficulties in changing culture — lesson notes (PDF)", file:"resources/3-5-3-changing-culture-notes.pdf"}
  ]
},
{
  code:"3.3.4.7", subtheme:"3.3.4", title:"Trade-off between ethics & profit",
  business:"Case study: David Lloyd", status:"live",
  notes:[
    {h:"The ethics–profit trade-off", html:`
      <p>A <b>trade-off</b> arises where having more of one thing means having less of another. Behaving ethically often means <b>lower profits</b> — because it raises costs or reduces revenue — at least in the short term.</p>
      <p>Common examples of an ethical choice and its profit trade-off:</p>
      <table class="datatable">
        <tr><th>Ethical decision</th><th>Trade-off with profit</th></tr>
        <tr><td>Treat suppliers fairly</td><td>Higher input costs</td></tr>
        <tr><td>Pay taxes in the UK</td><td>Higher tax bill than aggressive avoidance</td></tr>
        <tr><td>Don't exploit workers</td><td>Higher wage and compliance costs</td></tr>
        <tr><td>Limit "pester-power" product placement</td><td>Lower impulse sales</td></tr>
        <tr><td>Pay above the living wage</td><td>Higher labour costs</td></tr>
        <tr><td>Ethically sourced ingredients</td><td>Higher material costs</td></tr>
      </table>
      <div class="note-ex">Key idea: the ethical option usually costs more now, but can protect reputation, trust and revenue in the long term — so the trade-off differs over the short vs long run.</div>`},
    {h:"When ethics and profit collide", html:`
      <p>Some industries face sharp ethical dilemmas. In <b>health and fitness</b>, for example, firms like <b>David Lloyd</b> rely on long-term membership contracts for revenue, and staff are trusted to give honest advice:</p>
      <ul>
        <li><b>Contracts</b> secure revenue even when members stop attending — but members may feel trapped.</li>
        <li><b>Personal trainers</b> should set realistic goals, not just keep a customer happy (e.g. not promising a triathlon in a month).</li>
        <li><b>Sales incentives</b> on products like energy bars must not lead staff to overstate benefits.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Trade-off", marks:2, body:`A situation where having more of one thing means having less of another <span class="pt">1</span>; for a business, acting more ethically often means accepting lower short-term profit <span class="pt">2</span>.`},
    {term:"Ethical dilemma", marks:2, body:`A situation where a business must choose between the more profitable option and the more ethical one <span class="pt">1</span>, such as using cheaper non-ethically-sourced materials versus fair but costlier ones <span class="pt">2</span>.`},
    {term:"Living wage", marks:2, body:`A wage set at the level needed to meet basic living costs, usually above the legal minimum <span class="pt">1</span>; paying it is more ethical but raises labour costs and can reduce profit <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define a trade-off.",
     model:`A trade-off is where having more of one thing means having less of another <span class="pt">1</span>; for a business, acting more ethically often means accepting lower short-term profit <span class="pt">2</span>.`,
     fb:"Two linked points — the general definition plus the ethics/profit application."},
    {marks:4, q:"Explain one trade-off a business may face between acting ethically and maximising profit.",
     model:`A business that uses ethically sourced ingredients faces higher material costs <span class="pt">1</span>. This is because fair, sustainable suppliers charge more than the cheapest alternatives <span class="pt">2</span>. As a result, profit margins fall in the short term <span class="pt">3</span>, though the stronger ethical image can protect sales and reputation over the longer term <span class="pt">4</span>.`,
     fb:"Develop one trade-off, ideally noting the short- vs long-term difference."}
  ],
  caseStudy:{
    business:"David Lloyd — health & fitness clubs",
    intro:`<p><b>David Lloyd</b> clubs rely on <b>membership contracts</b> for much of their revenue, often committing customers for months or years. Members trust staff to help them meet fitness goals, and staff are sometimes given <b>incentives</b> to promote product lines such as energy bars. This creates two ethical pressure points: whether long contracts are fair to members who stop attending, and whether sales incentives lead staff to overstate product benefits or set unrealistic goals.</p>`
  },
  exam:[
    {marks:8, q:"Assess two possible trade-offs between profits and ethics for David Lloyd. Make sure your answer has application throughout. (8)",
     model:`<p><span class="tag t-P">POINT</span>One trade-off is between <b>revenue security and customer fairness</b> through long-term fixed contracts. <span class="tag t-E">EXPLAIN</span>Locking members into annual agreements guarantees income even if they stop attending. <span class="tag t-C">CHAIN</span>This improves financial stability and reduces the impact of seasonal drops, so David Lloyd can invest with confidence in services and equipment; however, it raises ethical concerns, as some members may feel trapped in contracts they no longer want, reducing their sense of fairness. <span class="tag t-J">JUDGE</span>So profit rises but at a cost to member goodwill.</p>
     <p><span class="tag t-P">POINT</span>A second trade-off is between <b>secondary revenue and honesty</b> when staff promote energy bars or plans for commission. <span class="tag t-E">EXPLAIN</span>Employees may exaggerate health claims to boost sales. <span class="tag t-C">CHAIN</span>This lifts short-term profit, but customers may buy unsuitable products and feel misled, which could damage trust and the brand.</p>
     <p><span class="tag t-J">HOWEVER</span>However, not all members view contracts or promotions negatively — some value the structure and commitment, and well-trained, responsible staff can give honest advice while still offering extra services. So the ethics–profit trade-off can be reduced or avoided altogether where staff are guided by strong values and supported by the business.</p>`,
     fb:"Mr. Akram's exemplar (David Lloyd). An 8-mark 'assess two trade-offs' needs both developed with application, plus a balancing 'however' that lifts it to the top band."}
  ],
  resources:[
    {label:"Trade-off between ethics and profit — lesson notes (PDF)", file:"resources/3-4-3-tradeoff-notes.pdf"}
  ]
},
{
  code:"3.3.4.4", subtheme:"3.3.4", title:"Stakeholder vs shareholder approach",
  business:"Case studies: Starbucks & Peloton", status:"live",
  notes:[
    {h:"Stakeholders vs shareholders", html:`
      <p>A <b>shareholder</b> owns part of the company and wants strong returns. A <b>stakeholder</b> is anyone with an interest in the business — a much wider group:</p>
      <ul>
        <li><b>Internal:</b> shareholders/owners, managers, employees.</li>
        <li><b>External:</b> customers, suppliers, government, local communities, pressure groups.</li>
      </ul>
      <p>Each group has different objectives — e.g. employees want fair pay and security, customers want quality and value, suppliers want prompt payment, communities want jobs with minimal harm.</p>`},
    {h:"The two approaches", html:`
      <p><b>Shareholder approach</b> — the business is run to <b>maximise returns for shareholders</b> (profit, dividends, share price) above other interests.</p>
      <p><b>Stakeholder approach</b> — decisions are made in the interests of <b>all stakeholder groups</b>, balancing profit against the needs of employees, customers, suppliers and the community.</p>
      <div class="note-ex">The two often conflict: cutting costs to lift profit (shareholders) can mean job losses or supplier pressure (other stakeholders). It is difficult for a large firm to satisfy every group at once.</div>`},
    {h:"Conflicts between groups", html:`
      <p>Because resources are limited, meeting one group's objectives can harm another's:</p>
      <ul>
        <li>Higher pay for employees vs higher dividends for shareholders.</li>
        <li>Lower prices for customers vs higher margins for owners.</li>
        <li>Expansion/profit vs the local community's environmental concerns.</li>
      </ul>
      <p>Managers must weigh these trade-offs, and the "right" balance often depends on the firm's objectives and time horizon.</p>`}
  ],
  definitions:[
    {term:"Stakeholder", marks:2, body:`Any individual or group with an interest in, or affected by, a business <span class="pt">1</span> — such as employees, customers, suppliers, the community and shareholders — each with their own objectives <span class="pt">2</span>.`},
    {term:"Shareholder", marks:2, body:`A person or institution that owns shares in a company <span class="pt">1</span>; shareholders carry financial risk and generally want strong returns through profit, dividends and a rising share price <span class="pt">2</span>.`},
    {term:"Shareholder approach", marks:2, body:`Running a business primarily to maximise returns for its shareholders <span class="pt">1</span>, prioritising profit and share price above wider stakeholder interests <span class="pt">2</span>.`},
    {term:"Stakeholder approach", marks:2, body:`Making business decisions in the interests of all stakeholder groups, not just owners <span class="pt">1</span>, balancing profit against the needs of employees, customers, suppliers and the community <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Explain the difference between a shareholder and a stakeholder.",
     model:`A shareholder owns part of the company and wants strong financial returns <span class="pt">1</span>; a stakeholder is anyone with an interest in the business — employees, customers, suppliers and the community as well as shareholders <span class="pt">2</span>.`,
     fb:"Two linked points — define each and show the stakeholder group is wider."},
    {marks:4, q:"Explain one conflict that can arise between a business's shareholders and another stakeholder group.",
     model:`Shareholders may want higher dividends, which pushes the firm to cut costs <span class="pt">1</span>. This is because lower costs raise profit available to distribute <span class="pt">2</span>. As a result, the business may cut jobs or press suppliers on price <span class="pt">3</span>, harming employees or suppliers even as shareholder returns rise <span class="pt">4</span>.`,
     fb:"Reward a clear conflict developed to show the loss to the other group."}
  ],
  caseStudy:{
    business:"Starbucks & Peloton",
    intro:`<p>Two scenarios showing how a decision affects internal stakeholders differently.</p>
      <h3>Starbucks — expanding the Pickup service</h3>
      <p>Starbucks expanded its app-based <b>Pickup</b> service (pre-order and pay, no queue), tested in cities like Manhattan and Toronto, at a time when earnings had fallen from <b>$4,681.1m to $2,805.5m</b>. The share price rose <b>6%</b> on the news (good for shareholders and convenience-seeking customers), but the model reduces face-to-face roles — a risk to <b>employees</b> and to customers who value the traditional café experience.</p>
      <h3>Peloton — the treadmill recall</h3>
      <p>Peloton recalled <b>126,000 treadmills</b> over safety concerns, wiping <b>$4.1bn</b> (a 15% share-price fall) off its value; the CEO admitted it had been slow to respond to safety warnings. The share price later recovered toward $120 by late July 2021 as the firm accepted responsibility and demand stayed strong — suggesting the impact on internal stakeholders may be short-term.</p>
      <hr style="border:none;border-top:2px solid var(--line);margin:22px 0">
      <h3>Heathrow — the third runway (a stakeholder conflict)</h3>
      <p>Expanding <b>Heathrow</b> with a third runway pits stakeholder groups sharply against each other:</p>
      <ul>
        <li><b>For (business, government, airport owner):</b> Heathrow runs at ~100% capacity; a third runway is said to be worth <b>£7bn a year</b>, create tens of thousands of jobs, and protect London's position as a trading hub. Heathrow already supports ~250,000 jobs.</li>
        <li><b>Against (local residents, environmental groups):</b> Heathrow generates ~50% of UK aviation emissions; ~725,000 people live under the flight path; the village of <b>Sipson</b> (700 homes) would be demolished; noise and air-pollution limits could be breached. Critics call the economic case overstated (only ~12% of travel is business).</li>
      </ul>
      <p>A classic case of a decision where <b>shareholder/economic objectives conflict with wider stakeholder interests</b>.</p>`
  },
  exam:[
    {marks:12, q:"Assess the likely impact of the treadmill recall on Peloton's internal stakeholders. (12)",
     model:`<p><span class="tag t-P">POINT</span>One impact on shareholders is a fall in confidence, because the recall of 126,000 treadmills wiped $4.1bn (a 15% fall) off Peloton's value and the CEO admitted the firm was slow to act. <span class="tag t-C">CHAIN</span>This means shareholders may doubt the board's decision-making and sell shares; as a result the share price could fall further, limiting Peloton's ability to raise capital.</p>
     <p><span class="tag t-P">POINT</span>Employees could also be affected, because demand for the treadmill line may fall in the short term. <span class="tag t-C">CHAIN</span>This means staff in product development, customer service or logistics may fear job insecurity, so morale and productivity could drop.</p>
     <p><span class="tag t-J">HOWEVER</span>However, Peloton's share price recovered toward $120 by late July 2021, because it accepted responsibility and demand in the growing online-fitness market stayed strong. This means investor confidence returned, so the impact on internal stakeholders may be short-term rather than lasting.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, shareholders and employees were hit by lost confidence and job insecurity, but the share-price recovery and continued growth suggest the impact is likely short-term. Success depends on whether Peloton learns from the incident. It is recommended it introduces stronger quality control, safety audits and transparent communication to rebuild trust.</p>`,
     fb:"Mr. Akram's exemplar (Peloton). Impact on two internal groups with the figures, a recovery counter-point, and a conclusion on short- vs long-term with a recommendation."},
    {marks:12, q:"Assess the likely impact on Starbucks' internal stakeholders of expanding its Pickup service. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is improved customer convenience, because customers can pre-order and pay via the app and skip queues. <span class="tag t-C">CHAIN</span>This suits busy city customers (tested in Manhattan and Toronto), so Starbucks attracts time-conscious consumers and lifts satisfaction, strengthening loyalty and repeat purchases.</p>
     <p><span class="tag t-P">POINT</span>It also helps shareholders, because it opens new revenue as earnings had fallen from $4,681.1m to $2,805.5m. <span class="tag t-C">CHAIN</span>This means investors may see a growth opportunity; as a result the share price rose 6% on the announcement, signalling stronger confidence.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the model threatens employees and traditional customers, because less face-to-face service means fewer staff hours and a loss of the friendly in-store experience. This means staff may feel insecure (raising turnover and training costs) and some loyal customers may feel Starbucks has become too transactional, hurting its brand.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the expansion has mixed effects: clear gains for convenience-seeking customers and shareholders, but risks for employees and café-loving customers. Success depends on whether Starbucks can balance digital innovation with service quality and staff morale — so a measured roll-out that protects the in-store experience is recommended.</p>`,
     fb:"Mr. Akram's exemplar (Starbucks). Weighs gains for shareholders/customers against losses for employees/traditional customers, with the figures and a balanced conclusion."}  ,{marks:20, q:"Evaluate whether the Commonwealth Games' Directors should prioritise jobs and investment, or instead meet the needs of all stakeholders. (20)",
     model:`<p><span class="tag t-P">JOBS & INVESTMENT</span>Prioritising jobs and investment can deliver clear, measurable local benefits, because the Games are a major driver of construction, employment and regeneration. <span class="tag t-C">CHAIN</span>This means spending targeted at venues, housing and transport creates jobs and leaves a lasting economic legacy; as a result the host region gains skills, income and infrastructure that outlast the event.</p>
     <p><span class="tag t-J">LIMITATION</span>However, focusing on jobs and investment alone can ignore other groups, because it may push through decisions that harm residents, the environment or taxpayers. This means local communities could face disruption, displacement or long-term debt, so narrow objectives risk a public backlash that damages the Games' reputation.</p>
     <p><span class="tag t-P">ALL STAKEHOLDERS</span>Meeting the needs of all stakeholders balances these interests, because it weighs athletes, residents, taxpayers, sponsors and the environment together. <span class="tag t-C">CHAIN</span>This means decisions are more widely accepted and sustainable; as a result the Games are more likely to deliver a positive, lasting legacy rather than short-term gain for some groups only.</p>
     <p><span class="tag t-J">LIMITATION</span>Yet satisfying every stakeholder is difficult and can slow decisions, because groups' objectives conflict and resources are limited. This means compromise may dilute the economic impact that justified hosting the Games in the first place.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the Directors should pursue a stakeholder approach but keep jobs and investment central, because the economic legacy is the main public justification for the Games while resident, environmental and taxpayer interests protect long-term reputation. Success depends on consulting stakeholders early and setting measurable legacy targets. It is recommended the Directors prioritise jobs and investment within a framework that safeguards the key wider-stakeholder interests. <i>(Model answer written in the Akademy house style — no official mark scheme was supplied for this question.)</i></p>`,
     fb:"Commonwealth Games stakeholder evaluation. Weighs a narrow (jobs/investment) objective against the stakeholder approach, with a supported recommendation. House-style exemplar — replace with the official mark scheme if you have one."}
  ,{marks:20, q:"Morrisons aims to regain market share by either cutting prices further or improving its overall customer experience. Evaluate these two options and recommend which Morrisons' shareholders would prefer. (20)",
     model:`<p><span class="tag t-P">CUT PRICES</span>Cutting prices could quickly rebuild market share, because grocery demand is price-sensitive and shoppers compare the big chains closely. <span class="tag t-C">CHAIN</span>This means lower prices can win back customers from discounters and lift volume; as a result sales revenue may rise and Morrisons regains scale. <span class="tag t-J">JUDGE</span>But shareholders care about profit, not just share.</p>
     <p><span class="tag t-J">LIMITATION</span>However, price cuts squeeze margins, because lower prices reduce the profit on every item sold. This means that unless volume rises enough to compensate, profit and dividends could fall — the opposite of what shareholders want, and a price war with rivals could make it worse.</p>
     <p><span class="tag t-P">CUSTOMER EXPERIENCE</span>Improving customer experience could build share more profitably, because better service, quality and stores differentiate Morrisons without cutting price. <span class="tag t-C">CHAIN</span>This means it can protect margins while increasing loyalty and repeat visits; as a result profit per customer and long-term value can rise, which better suits shareholder returns.</p>
     <p><span class="tag t-J">LIMITATION</span>Yet improving experience is slower and costly, because it needs investment in staff, stores and systems and takes time to show in sales. This means short-term profit could dip, and the payback depends on customers actually noticing and valuing the change.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, shareholders would most likely prefer improving the customer experience, because it defends margins and builds durable value rather than triggering a margin-eroding price war. Success depends on Morrisons communicating the improvements and funding them without over-stretching finances. It is recommended Morrisons prioritises customer experience, using targeted price positioning only where it must match rivals. <i>(Model answer written in the Akademy house style — no official mark scheme was supplied for this question.)</i></p>`,
     fb:"Morrisons shareholder-preference evaluation: price cuts (share, thin margin) vs customer experience (margin, slower). Recommends with shareholder returns as the lens. House-style exemplar."}
  ],
  resources:[
    {label:"Stakeholder vs shareholder approach — lesson notes (PDF)", file:"resources/3-5-4-stakeholder-notes.pdf"},
    {label:"Heathrow third-runway case (PDF)", file:"resources/3-5-4-heathrow-case.pdf"},
    {label:"Commonwealth Games 20-mark question (PDF)", file:"resources/3-5-4-commonwealth-games.pdf"},
    {label:"Morrisons 20-mark question (PDF)", file:"resources/3-5-4-morrisons.pdf"}
  ]
},
{
  code:"3.3.5.1", subtheme:"3.3.5", title:"Interpretation of financial statements",
  business:"Case study: VGL accounts", status:"live",
  notes:[
    {h:"Statement of comprehensive income", html:`
      <p>The <b>statement of comprehensive income</b> (profit and loss account) shows how much a business earned and spent over a period, working down from revenue to profit:</p>
      <ul>
        <li><b>Sales revenue</b> − <b>cost of sales</b> = <b>gross profit</b></li>
        <li>gross profit − <b>operating expenses</b> = <b>operating profit</b></li>
        <li>operating profit − <b>interest</b> = <b>profit for the year (net profit)</b></li>
      </ul>
      <p class="note-ex">VGL example (2024): revenue £33.0m − cost of sales £16.8m = gross profit <b>£16.2m</b>; − operating expenses £4.0m = operating profit <b>£12.2m</b>; − interest £1.2m = <b>£11.0m</b> profit for the year (up from £5.2m in 2023).</p>`},
    {h:"Statement of financial position", html:`
      <p>The <b>statement of financial position</b> (balance sheet) is a snapshot of what the business owns and owes on one day:</p>
      <ul>
        <li><b>Non-current (fixed) assets</b> — kept over a year (e.g. property, machinery).</li>
        <li><b>Current assets</b> — inventory, trade receivables, cash.</li>
        <li><b>Current liabilities</b> — owed within a year (e.g. trade payables).</li>
        <li><b>Net current assets (working capital)</b> = current assets − current liabilities.</li>
        <li><b>Non-current liabilities</b> — long-term loans.</li>
        <li><b>Net assets</b> = total assets − total liabilities, which equals <b>total equity</b> (share capital + retained profit).</li>
      </ul>
      <p class="note-ex">VGL (2024): non-current assets £101m; current assets £22m − current liabilities £14m = working capital <b>£8m</b>; net assets £49m = equity (£4m share capital + £45m retained profit).</p>`},
    {h:"Who uses these statements — and their limits", html:`
      <p>Different stakeholders read the accounts for different reasons:</p>
      <ul>
        <li><b>Shareholders</b> — profit, dividends and whether their investment is growing.</li>
        <li><b>Managers</b> — performance, to guide decisions.</li>
        <li><b>Creditors/suppliers</b> — whether the firm can pay (liquidity, working capital).</li>
        <li><b>Employees</b> — job security and scope for pay rises.</li>
        <li><b>Government</b> — tax due.</li>
      </ul>
      <p><b>Limitations:</b> they are <b>historic</b> (past, not future), a <b>snapshot</b> that can be window-dressed, ignore <b>qualitative</b> factors (brand, staff morale), and mean little without <b>comparison</b> (previous years, competitors, or ratios).</p>`}
  ],
  definitions:[
    {term:"Statement of comprehensive income", marks:2, body:`A financial statement showing a business's revenue, costs and profit over a period of time <span class="pt">1</span>; it works down from sales revenue to the profit for the year <span class="pt">2</span>.`},
    {term:"Statement of financial position", marks:2, body:`A financial statement showing a business's assets, liabilities and equity at a single point in time <span class="pt">1</span>; it shows what the business owns and owes on that day <span class="pt">2</span>.`},
    {term:"Gross profit", marks:2, body:`Sales revenue minus the cost of sales <span class="pt">1</span>; it shows how much profit is made on trading before operating expenses are deducted <span class="pt">2</span>.`},
    {term:"Working capital (net current assets)", marks:2, body:`Current assets minus current liabilities <span class="pt">1</span>; it shows whether a business can meet its short-term debts, a key measure of liquidity <span class="pt">2</span>.`},
    {term:"Retained profit", marks:2, body:`Profit kept in the business rather than paid out to shareholders <span class="pt">1</span>; it is reinvested and appears within equity on the statement of financial position <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"VGL has sales revenue of £33.0m and cost of sales of £16.8m. Calculate its gross profit.",
     model:`Gross profit = sales revenue − cost of sales = £33.0m − £16.8m <span class="pt">1</span> = <b>£16.2m</b> <span class="pt">2</span>.`,
     fb:"Gross profit = revenue − cost of sales. One mark for method, one for the answer."},
    {marks:4, q:"VGL has operating profit of £12.2m and interest of £1.2m. Calculate the profit for the year, and comment on performance given 2023's profit was £5.2m.",
     model:`Profit for the year = operating profit − interest = £12.2m − £1.2m = <b>£11.0m</b> <span class="pt">1</span><span class="pt">2</span>. This is more than double the £5.2m earned in 2023 <span class="pt">3</span>, showing a strong improvement in profitability — useful to shareholders judging their returns <span class="pt">4</span>.`,
     fb:"2 marks for the calculation, 2 for a developed interpretation (direction + what it means for a stakeholder)."},
    {marks:4, q:"VGL has current assets of £22m and current liabilities of £14m. Calculate its working capital and explain what it shows.",
     model:`Working capital = current assets − current liabilities = £22m − £14m = <b>£8m</b> <span class="pt">1</span><span class="pt">2</span>. A positive figure means VGL can comfortably cover its short-term debts <span class="pt">3</span>, suggesting healthy liquidity that reassures suppliers and creditors <span class="pt">4</span>.`,
     fb:"Working capital = current assets − current liabilities; develop what a positive figure means for liquidity."}
  ],
  caseStudy:{
    business:"VGL — reading the accounts",
    intro:`<p><b>VGL's</b> accounts show a business improving strongly year on year.</p>
      <p class="note-ex"><b>Statement of comprehensive income (£m)</b></p>
      <table class="datatable">
        <tr><th></th><th>2024</th><th>2023</th></tr>
        <tr><td>Sales revenue</td><td>33.0</td><td>30.1</td></tr>
        <tr><td>Cost of sales</td><td>16.8</td><td>19.6</td></tr>
        <tr><td>Gross profit</td><td>16.2</td><td>10.5</td></tr>
        <tr><td>Operating expenses</td><td>4.0</td><td>4.0</td></tr>
        <tr><td>Operating profit</td><td>12.2</td><td>6.5</td></tr>
        <tr><td>Interest</td><td>1.2</td><td>1.3</td></tr>
        <tr><td><b>Profit for the year</b></td><td><b>11.0</b></td><td><b>5.2</b></td></tr>
      </table>
      <p class="note-ex"><b>Statement of financial position (£m)</b></p>
      <table class="datatable">
        <tr><th></th><th>2024</th><th>2023</th></tr>
        <tr><td>Non-current assets</td><td>101</td><td>96</td></tr>
        <tr><td>Current assets (inventory + receivables + cash)</td><td>22</td><td>32</td></tr>
        <tr><td>Current liabilities</td><td>14</td><td>17</td></tr>
        <tr><td>Working capital</td><td>8</td><td>15</td></tr>
        <tr><td>Non-current liabilities (loans)</td><td>60</td><td>63</td></tr>
        <tr><td>Net assets</td><td>49</td><td>48</td></tr>
        <tr><td>Equity (share capital + retained profit)</td><td>49</td><td>48</td></tr>
      </table>`
  },
  exam:[
    {marks:12, q:"Using VGL's financial statements, assess the usefulness of these statements to VGL's stakeholders. (12)",
     model:`<p><span class="tag t-P">POINT</span>The statements are useful because they show clear performance trends, because VGL's profit for the year rose from £5.2m to £11.0m and gross profit from £10.5m to £16.2m. <span class="tag t-C">CHAIN</span>This means shareholders can see their investment is growing and managers can judge which decisions worked; as a result both can make better-informed decisions about dividends and strategy.</p>
     <p><span class="tag t-P">POINT</span>They also reveal financial health to creditors, because the statement of financial position shows working capital of £8m and loans falling from £63m to £60m. <span class="tag t-C">CHAIN</span>This means suppliers and lenders can see VGL can meet its short-term debts, so they are more willing to extend credit.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the statements have real limits: they are historic and a single snapshot, can be window-dressed, and ignore qualitative factors such as brand and staff morale. Working capital has actually fallen from £15m to £8m, so the figures need comparing over time and with rivals — ideally through ratio analysis — before firm conclusions are drawn.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> the statements are useful but not sufficient alone. <b>Why:</b> they show performance and financial health to every stakeholder group. <b>Why (develop):</b> but they are backward-looking and omit qualitative factors. <b>What (depends on):</b> their usefulness depends on comparing across years and competitors and combining them with ratio analysis. <i>(House-style model answer — no official mark scheme supplied for this question.)</i></p>`,
     fb:"Uses the VGL figures (profit £5.2m→£11.0m, working capital £15m→£8m) with two benefits, a limitations paragraph, and a 4Ws conclusion. House-style exemplar — swap in an official mark scheme if you have one."}
  ],
  resources:[
    {label:"Financial statements — lesson notes (PDF)", file:"resources/3-3-5-1-financial-statements-notes.pdf"}
  ]
},
{
  code:"3.3.5.2", subtheme:"3.3.5", title:"Ratio analysis",
  business:"Case study: Smith PLC", status:"live",
  notes:[
    {h:"What is ratio analysis?", html:`
      <p><b>Ratio analysis</b> uses figures from the financial statements to judge a business's performance and financial health, and to make decisions (investing, lending, comparing years or rivals). The spec covers four groups: <b>profitability</b>, <b>liquidity</b>, <b>gearing</b> and <b>ROCE</b>.</p>
      <div class="note-ex"><b>Capital employed</b> = total equity (share capital + retained profit) + non-current liabilities (long-term loans) — i.e. all the finance invested in the business. Needed for ROCE and gearing.</div>`},
    {h:"Profitability ratios", html:`
      <ul>
        <li><b>Gross profit margin</b> = gross profit ÷ sales revenue × 100</li>
        <li><b>Operating profit margin</b> = operating profit ÷ sales revenue × 100</li>
        <li><b>Profit for the year (net) margin</b> = (operating profit − interest) ÷ sales revenue × 100</li>
        <li><b>ROCE</b> = operating profit ÷ capital employed × 100 — how well the firm turns invested finance into profit</li>
      </ul>
      <p class="note-ex">VGL 2024: gross margin = 16.2 ÷ 33.0 × 100 = <b>49.1%</b>; net margin = 11.0 ÷ 33.0 × 100 = <b>33.3%</b>; ROCE = 12.2 ÷ 109 × 100 = <b>11.2%</b> (capital employed = 49 + 60).</p>`},
    {h:"Liquidity ratios", html:`
      <ul>
        <li><b>Current ratio</b> = current assets ÷ current liabilities. Around <b>1.5–2</b> is usually healthy.</li>
        <li><b>Acid test (quick) ratio</b> = (current assets − inventory) ÷ current liabilities. Strips out stock that can't be turned to cash quickly; around <b>1</b> is comfortable.</li>
      </ul>
      <p class="note-ex">VGL 2024: current ratio = 22 ÷ 14 = <b>1.57</b>; acid test = (22 − 14) ÷ 14 = <b>0.57</b> — showing VGL relies heavily on inventory for its liquidity.</p>`},
    {h:"Gearing", html:`
      <p><b>Gearing ratio</b> = non-current liabilities (long-term loans) ÷ capital employed × 100. It shows how much of the finance comes from <b>borrowing</b> rather than equity.</p>
      <ul>
        <li><b>Above ~50%</b> = highly geared — reliant on debt, so vulnerable to interest-rate rises, but can fund growth without diluting ownership.</li>
        <li><b>Below ~25%</b> = low geared — lower risk but may be under-using cheap finance.</li>
      </ul>
      <p class="note-ex">VGL 2024: gearing = 60 ÷ 109 × 100 = <b>55.0%</b> — highly geared.</p>`},
    {h:"Benefits & limitations of ratio analysis", html:`
      <h3>Benefits</h3>
      <ul><li>Turns raw figures into comparable measures (over time, against rivals, against targets).</li>
      <li>Highlights strengths and problems (e.g. weak liquidity) to guide decisions.</li></ul>
      <h3>Limitations</h3>
      <ul>
        <li>Based on <b>historic</b> data — past performance, not future.</li>
        <li>Ignores <b>qualitative</b> factors (brand, staff, market conditions).</li>
        <li><b>Comparability</b> issues — firms use different accounting policies and operate in different sectors.</li>
        <li>A single ratio means little — they must be read together and in context.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Gross profit margin", marks:2, body:`Gross profit as a percentage of sales revenue (gross profit ÷ revenue × 100) <span class="pt">1</span>; it shows how much profit a business makes on trading before operating costs <span class="pt">2</span>.`},
    {term:"Return on capital employed (ROCE)", marks:2, body:`Operating profit as a percentage of capital employed (operating profit ÷ capital employed × 100) <span class="pt">1</span>; it shows how efficiently a business turns the finance invested into profit <span class="pt">2</span>.`},
    {term:"Current ratio", marks:2, body:`Current assets divided by current liabilities <span class="pt">1</span>; it measures whether a business can meet its short-term debts, with around 1.5–2 seen as healthy <span class="pt">2</span>.`},
    {term:"Acid test ratio", marks:2, body:`Current assets minus inventory, divided by current liabilities <span class="pt">1</span>; a stricter liquidity measure that excludes stock which cannot be turned into cash quickly <span class="pt">2</span>.`},
    {term:"Gearing ratio", marks:2, body:`Non-current liabilities as a percentage of capital employed (long-term loans ÷ capital employed × 100) <span class="pt">1</span>; it shows how reliant a business is on borrowed finance, with over ~50% considered highly geared <span class="pt">2</span>.`},
    {term:"Capital employed", marks:2, body:`The total finance invested in a business: total equity plus non-current liabilities <span class="pt">1</span>; it is the base used to calculate ROCE and gearing <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:4, q:"VGL has gross profit £16.2m, operating profit £12.2m, interest £1.2m and sales revenue £33.0m. Calculate its gross profit margin and net profit margin (to 1 dp).",
     model:`Gross profit margin = 16.2 ÷ 33.0 × 100 = <b>49.1%</b> <span class="pt">1</span><span class="pt">2</span>. Net profit margin = (12.2 − 1.2) ÷ 33.0 × 100 = 11.0 ÷ 33.0 × 100 = <b>33.3%</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"Margins are always ÷ sales revenue × 100. Net margin uses profit for the year (operating profit − interest)."},
    {marks:4, q:"VGL has operating profit £12.2m, equity £49m and long-term loans £60m. Calculate ROCE and the gearing ratio (to 1 dp).",
     model:`Capital employed = 49 + 60 = £109m <span class="pt">1</span>. ROCE = 12.2 ÷ 109 × 100 = <b>11.2%</b> <span class="pt">2</span>. Gearing = 60 ÷ 109 × 100 = <b>55.0%</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"Both use capital employed = equity + long-term loans. ROCE uses operating profit; gearing uses the loans."},
    {marks:4, q:"VGL has current assets £22m, inventory £14m and current liabilities £14m. Calculate the current ratio and acid test ratio, and comment.",
     model:`Current ratio = 22 ÷ 14 = <b>1.57</b> <span class="pt">1</span>. Acid test = (22 − 14) ÷ 14 = <b>0.57</b> <span class="pt">1</span>. The current ratio looks healthy, but the acid test of 0.57 is well below 1 <span class="pt">1</span>, showing VGL depends heavily on selling inventory to cover its short-term debts — a possible liquidity risk <span class="pt">2</span>.`,
     fb:"Acid test strips out inventory. A big gap between the two ratios flags reliance on stock."}
  ],
  caseStudy:{
    business:"Smith PLC (property developer)",
    intro:`<p><b>Smith PLC</b> is a property developer. Its ratios, calculated from its accounts for both years, show a strengthening financial position:</p>
      <table class="datatable">
        <tr><th>Ratio</th><th>2024</th><th>2023</th></tr>
        <tr><td>Gross profit margin</td><td>33.66%</td><td>30.10%</td></tr>
        <tr><td>Operating profit margin</td><td>19.20%</td><td>14.26%</td></tr>
        <tr><td>Net profit margin</td><td>18.55%</td><td>13.75%</td></tr>
        <tr><td>ROCE</td><td>64.60%</td><td>42.93%</td></tr>
        <tr><td>Current ratio</td><td>1.62</td><td>1.58</td></tr>
        <tr><td>Acid test ratio</td><td>1.19</td><td>1.08</td></tr>
        <tr><td>Gearing</td><td>40.81%</td><td>43.20%</td></tr>
      </table>
      <p>Every profitability ratio has risen, liquidity is healthy and improving, and gearing has fallen — a strong, improving position. (Capital employed 2024 = £586.1m.)</p>
      <p class="note-ex"><b>Contrast — Thomas Cook:</b> before it collapsed in 2019, its accounts showed falling profit (net profit £126m in 2018 vs £183m in 2017) and, critically, <b>current liabilities (£4,222m) far exceeding current assets (£2,113m)</b> — a current ratio of just 0.5, signalling a severe liquidity crisis.</p>`
  },
  exam:[
    {marks:12, q:"Using ratio analysis, assess whether ASOS's survival plan is likely to improve its financial position. (12)",
     model:`<p><span class="tag t-P">POINT</span>One reason the plan could help is that it cuts costs significantly, because ASOS plans to stock fewer products, cut spending and reduce investment in robotic warehouses. <span class="tag t-C">CHAIN</span>This means improved cash flow and lower debt (£153m in 2022); as a result ASOS could strengthen its current ratio, which fell from 1.56 (2021) to 1.49 (2022), improving its ability to meet short-term obligations.</p>
     <p><span class="tag t-P">POINT</span>A second reason is that it targets over-reliance on discounting, because heavy promotions cut the gross margin from 45.4% to 43.6% and turned a £128.4m profit into a £30.8m loss. <span class="tag t-C">CHAIN</span>This means focusing on more profitable lines could lift margins and return ASOS to profit.</p>
     <p><span class="tag t-J">HOWEVER</span>However, cutting stock variety and promotions could reduce sales and damage the brand, because it may make ASOS less attractive in a competitive fashion market where revenue barely grew (£3,910.5m to £3,936.5m). This means cost savings could be offset by falling income and weaker loyalty, so liquidity and margins might not recover.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the plan has clear financial logic given the £30.8m loss and a current ratio of 1.49, but success depends on balancing cost reduction with keeping ASOS attractive to customers. It is recommended ASOS follows the plan while continuing to invest in its most profitable products and its brand.</p>`,
     fb:"Mr. Akram's exemplar (ASOS). Ratio-driven: uses current ratio (1.56→1.49), gross margin (45.4%→43.6%) and the £30.8m loss, with a balanced judgement."},
    {marks:12, q:"Assess the financial performance of Kellogg's using the profitability ratios you can calculate from its income statement. (12)",
     model:`<p><span class="tag t-P">POINT</span>Gross profit margin is a good starting point, because it shows how efficiently revenue becomes profit after cost of sales. <span class="tag t-C">CHAIN</span>With revenue of $12,923m and cost of sales of $7,901m, gross profit is $5,022m, a margin of about 38.9% — Kellogg keeps nearly 39 cents per dollar of sales before other costs, suggesting strong demand or pricing power.</p>
     <p><span class="tag t-P">POINT</span>Operating profit margin gives a fuller view, because it also allows for expenses. <span class="tag t-C">CHAIN</span>With operating profit of $1,946m, the operating margin is about 15.1%, so Kellogg makes ~15 cents of profit per dollar after overheads — evidence it manages costs such as marketing and R&D reasonably well.</p>
     <p><span class="tag t-J">HOWEVER</span>However, only one year's income statement is provided, so we cannot see whether performance is improving or declining, and with no statement of financial position we cannot assess liquidity. This means the assessment is incomplete.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Kellogg's 2017 profitability looks strong on gross and operating margins, but the analysis is limited without a second year or liquidity data. Success in judging it depends on a fuller picture. It is recommended Kellogg's performance be assessed with multi-year data and liquidity ratios such as the current and acid test ratios.</p>`,
     fb:"Mr. Akram's exemplar (Kellogg). Calculates and interprets gross (38.9%) and operating (15.1%) margins, then rightly flags the limitation of one year / no balance sheet."}  ,{marks:12, q:"Using the data and ratio analysis, assess the main financial reasons Thomas Cook ceased trading in 2019. (12)",
     model:`<p><span class="tag t-P">LIQUIDITY</span>The clearest reason is a severe liquidity crisis, because Thomas Cook's current liabilities of £4,222m hugely exceeded its current assets of £2,113m in 2018. <span class="tag t-C">CHAIN</span>This gives a current ratio of just 0.50 (2,113 ÷ 4,222), far below the healthy ~1.5; this means it could not cover even half of its short-term debts from short-term assets, so it was constantly at risk of running out of cash to pay suppliers and lenders.</p>
     <p><span class="tag t-P">GEARING</span>A second reason is very high gearing, because long-term loans of £2,001m sat against capital employed of about £2,292m. <span class="tag t-C">CHAIN</span>That is gearing of roughly 87%, so the business was overwhelmingly financed by debt; this means large interest payments (£129m) drained cash and left it extremely vulnerable to any downturn or rise in borrowing costs.</p>
     <p><span class="tag t-P">FALLING PROFITABILITY</span>Profitability was also weakening, because net profit fell from £183m (2017) to £126m (2018) and operating profit from £326m to £250m. <span class="tag t-C">CHAIN</span>With a net margin of only ~1.3%, there was almost no cushion to absorb shocks or service the debt.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Thomas Cook collapsed mainly because chronic illiquidity (current ratio 0.50) met crippling gearing (~87%) and thin, falling profit, leaving it unable to meet its obligations. The ratios show the business had no financial resilience; the trigger was its inability to raise the further funds lenders demanded. <i>(House-style model answer — no official mark scheme supplied.)</i></p>`,
     fb:"Thomas Cook collapse: liquidity (current ratio 0.50), gearing (~87%) and falling profit built from the real accounts. House-style exemplar — swap in an official mark scheme if you have one."}
  ],
  resources:[
    {label:"Ratio analysis — lesson notes (PDF)", file:"resources/3-3-5-2-ratio-notes.pdf"},
    {label:"Ratio helpsheet — all formulas (PDF)", file:"resources/3-3-5-2-ratio-helpsheet.pdf"},
    {label:"Smith PLC ratio practice & accounts (PDF)", file:"resources/3-3-5-2-smith-plc.pdf"}
  ]
},
{
  code:"3.3.5.3", subtheme:"3.3.5", title:"Human resources",
  business:"Case study: Richer Sounds", status:"live",
  notes:[
    {h:"HR performance measures", html:`
      <p>Businesses use HR data to judge how well their workforce is performing and to spot problems. The three key measures:</p>
      <table class="datatable">
        <tr><th>Measure</th><th>What it shows</th><th>Formula</th></tr>
        <tr><td>Labour productivity</td><td>Output per worker</td><td>total output ÷ number of employees</td></tr>
        <tr><td>Labour turnover</td><td>% of staff leaving in a year</td><td>(staff leaving ÷ average number employed) × 100</td></tr>
        <tr><td>Labour retention</td><td>% of staff kept</td><td>(staff staying ÷ average number employed) × 100</td></tr>
        <tr><td>Absenteeism (daily)</td><td>% of staff absent</td><td>(number absent ÷ total employed) × 100</td></tr>
      </table>
      <p>High turnover and absenteeism raise recruitment, training and cover costs and disrupt output; high productivity lowers unit costs and improves competitiveness.</p>`},
    {h:"HR strategies to improve performance", html:`
      <p>The spec names four strategies a business can use to raise productivity and retention and cut turnover and absenteeism:</p>
      <ul>
        <li><b>Financial rewards</b> — bonuses, commission, performance-related pay to motivate and retain.</li>
        <li><b>Employee share ownership</b> — giving staff shares so they share in success and think like owners.</li>
        <li><b>Consultation strategies</b> — involving staff in decisions so they feel heard and valued.</li>
        <li><b>Empowerment strategies</b> — giving staff more responsibility and autonomy over their work.</li>
      </ul>`},
    {h:"Limitations of HR data", html:`
      <ul>
        <li>The figures lack <b>context</b> — a "high" turnover is normal in some sectors (e.g. retail) and alarming in others.</li>
        <li>They show <b>short-term variation</b> that may not reflect a real trend.</li>
        <li>Some labour turnover is <b>healthy</b> — it brings in fresh ideas and can cut costs if higher-paid staff leave.</li>
        <li>Numbers alone don't explain <b>why</b> — they must be read alongside qualitative insight.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Labour turnover", marks:2, body:`The percentage of a workforce that leaves a business over a period, usually a year <span class="pt">1</span>, calculated as staff leaving ÷ average number employed × 100 <span class="pt">2</span>.`},
    {term:"Labour retention", marks:2, body:`The percentage of employees a business keeps over a period <span class="pt">1</span>; high retention reduces recruitment and training costs and preserves experience <span class="pt">2</span>.`},
    {term:"Absenteeism", marks:2, body:`The proportion of the workforce absent from work over a period <span class="pt">1</span>, calculated as the number absent ÷ total employed × 100; high absenteeism disrupts output and raises costs <span class="pt">2</span>.`},
    {term:"Labour productivity", marks:2, body:`The output produced per employee over a period <span class="pt">1</span>, calculated as total output ÷ number of employees; higher productivity lowers unit costs <span class="pt">2</span>.`},
    {term:"Employee share ownership", marks:2, body:`Giving employees shares in the company they work for <span class="pt">1</span>; it can boost motivation and retention because staff benefit directly from the firm's success <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"A factory employs 250 people on average and 30 leave during the year. Calculate its labour turnover.",
     model:`Labour turnover = (staff leaving ÷ average number employed) × 100 = (30 ÷ 250) × 100 <span class="pt">1</span> = <b>12%</b> <span class="pt">2</span>.`,
     fb:"Turnover = leavers ÷ average employed × 100."},
    {marks:2, q:"A distribution centre employs 200 staff; on one day 8 are absent. Calculate the absenteeism rate for that day.",
     model:`Absenteeism = (number absent ÷ total employed) × 100 = (8 ÷ 200) × 100 <span class="pt">1</span> = <b>4%</b> <span class="pt">2</span>.`,
     fb:"Daily absenteeism = absent ÷ total employed × 100."},
    {marks:4, q:"A clothing manufacturer produces 100,000 units a month with 50 employees. Calculate labour productivity, and explain one benefit of improving it.",
     model:`Labour productivity = total output ÷ number of employees = 100,000 ÷ 50 = <b>2,000 units per employee</b> <span class="pt">1</span><span class="pt">2</span>. Improving it spreads fixed costs over more output <span class="pt">3</span>, lowering unit costs and making the firm more price-competitive or more profitable <span class="pt">4</span>.`,
     fb:"Productivity = output ÷ employees; develop the unit-cost / competitiveness benefit."}
  ],
  caseStudy:{
    business:"Richer Sounds",
    intro:`<p><b>Richer Sounds</b>, the UK hi-fi and TV retailer, is known for strong staff loyalty and for moving toward <b>employee ownership</b>. Key figures from its accounts:</p>
      <ul>
        <li>Net profit margin <b>6.2%</b> (2018), slightly below <b>6.8%</b> (2017).</li>
        <li>Return on capital employed (ROCE) fell from <b>52.1%</b> (2016) to <b>33.6%</b> (2018).</li>
        <li>Profit per employee <b>£19,690</b> (2018), down from <b>£21,187</b> (2017).</li>
        <li>Earnings per share fell from <b>210.6p</b> (2017) to <b>193.75p</b> (2018).</li>
        <li><b>Very low staff turnover</b> — 39 employees have worked there 20+ years, some 40+.</li>
      </ul>`
  },
  exam:[
    {marks:12, q:"Assess whether giving employees shares is likely to improve productivity at Richer Sounds. (12)",
     model:`<p><span class="tag t-P">POINT</span>One way share ownership could raise productivity is through greater employee ownership, because staff who are shareholders benefit directly from the firm's success. <span class="tag t-C">CHAIN</span>This means stronger motivation to improve performance, service and sales efficiency, so employees take more responsibility for outcomes; as a result gross and net profit margins could improve — there is scope, as net margin slipped to 6.2% from 6.8%.</p>
     <p><span class="tag t-P">POINT</span>It could also improve how efficiently resources are used, because staff gain an interest in ROCE, which fell from 52.1% (2016) to 33.6% (2018). <span class="tag t-C">CHAIN</span>This means a more entrepreneurial mindset and less waste, so profit per employee could rise above the 2018 figure of £19,690.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the strategy may not improve retention, because Richer Sounds already has very low turnover (39 staff of 20+ years). It may also fall flat if share value drops — EPS fell from 210.6p to 193.75p — so staff could lose confidence in the scheme, meaning non-financial motivators like recognition and job satisfaction may matter more.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, employee ownership is likely to raise productivity because it links employee effort to business performance, but its success depends on being supported by non-financial motivators such as recognition, training and clear communication. It is recommended Richer Sounds continues employee ownership but strengthens it with regular updates and staff training on how shares work.</p>`,
     fb:"Mr. Akram's exemplar (Richer Sounds). Uses the margin, ROCE, profit-per-employee and EPS figures; two benefits, a limitation on an already-loyal workforce, and a supported recommendation."}
  ],
  resources:[
    {label:"Human resources (employee contributions) — lesson notes (PDF)", file:"resources/3-3-5-3-hr-notes.pdf"}
  ]
},
{
  code:"3.3.6.1", subtheme:"3.3.6", title:"Key factors in change",
  business:"Case studies: Tesco & Riverton Retail", status:"live",
  notes:[
    {h:"The key internal factors", html:`
      <p>Beyond leadership, four internal factors strongly affect how well a business manages change:</p>
      <ul>
        <li><b>Organisational culture</b> — a <b>strong</b> culture with shared values (e.g. Premier Inn's focus on service) helps staff embrace change; a <b>weak</b> culture, poor employer–employee relations, or long-serving staff with embedded habits breeds resistance.</li>
        <li><b>Size of the organisation</b> — the more employees, the wider the geographical spread, and the more layers of hierarchy, the harder change is to push through. Large multinationals form "pockets of culture" that must each be handled differently, slowing decisions.</li>
        <li><b>Time / speed of change</b> — <b>incremental</b> (gradual) change lets staff understand and take ownership; <b>step</b> (rapid) change is riskier and causes problems if not well managed.</li>
        <li><b>Managing resistance to change</b> — identifying who will resist and why, then tailoring the change (communication, involvement, support) so the majority accept it (see Kotter & Schlesinger in <b>3.3.4.3</b>).</li>
      </ul>`},
    {h:"Transformational leadership", html:`
      <p>A <b>transformational leader</b> inspires and motivates staff with a clear, exciting <b>vision</b> of the future, driving innovation and change. Key characteristics: <b>vision, inspiration, individualised consideration</b> (caring about each person) and <b>intellectual stimulation</b> (encouraging new ideas). They lead by example and win hearts and minds, rather than just managing tasks.</p>
      <ul>
        <li><b>Steve Jobs (Apple)</b> — imparted a clear vision that excited employees, sparking the iPod and iPhone.</li>
        <li><b>Jeff Bezos (Amazon)</b> — a visionary risk-taker behind the Kindle and Amazon's expansion.</li>
        <li><b>Oprah Winfrey</b> — extended her brand across media, leading by example and inspiring loyalty.</li>
      </ul>
      <p>In a period of change, a transformational leader reduces resistance because staff trust the leader and buy into the goal.</p>`},
    {h:"Case: Riverton Retail", html:`
      <p><b>Riverton Retail Ltd</b> (1,200+ stores) faced falling sales and online competition, so it introduced major change — a new online platform, automated checkouts and cost-cutting. But it struggled because of a <b>weak culture</b>, poor head-office–store communication, inconsistent store management, and its <b>large size</b> and the <b>speed</b> of change, which left staff anxious and unmotivated. It shows how culture, size, speed and communication combine to make change hard.</p>`}
  ],
  definitions:[
    {term:"Transformational leadership", marks:2, body:`A leadership style based on inspiring staff with a clear, exciting vision and motivating them to embrace change <span class="pt">1</span>; such leaders drive innovation and reduce resistance because employees trust them and buy into the goal <span class="pt">2</span>.`},
    {term:"Organisational culture (in change)", marks:2, body:`The shared values and norms of a business <span class="pt">1</span>; a strong, aligned culture makes change easier to implement, while a weak one increases resistance <span class="pt">2</span>.`},
    {term:"Incremental change", marks:2, body:`Change introduced gradually in small steps <span class="pt">1</span>; it gives staff time to understand and take ownership, so it usually meets less resistance than rapid step change <span class="pt">2</span>.`},
    {term:"Resistance to change", marks:2, body:`The reluctance of employees to accept change to their working practices or culture <span class="pt">1</span>, often driven by fear of job losses, loss of autonomy or loyalty to the old ways <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:4, q:"Explain one way a business's size can make change more difficult to implement.",
     model:`A large business has more employees, sites and layers of hierarchy <span class="pt">1</span>. This is because change must be communicated and coordinated across all of them <span class="pt">2</span>. As a result, "pockets of culture" form and decisions slow down <span class="pt">3</span>, so the change is harder to push through and may arrive too late — as at Riverton's 1,200 stores <span class="pt">4</span>.`,
     fb:"Link size to coordination/communication difficulty and a slower, harder change."},
    {marks:4, q:"Explain one characteristic of a transformational leader and how it supports change.",
     model:`A transformational leader provides an inspiring vision <span class="pt">1</span>. This is because they focus on exciting and motivating staff about the future rather than just giving instructions <span class="pt">2</span>. As a result, employees buy into the change and trust the leader <span class="pt">3</span>, reducing resistance and keeping morale and productivity up during the transition <span class="pt">4</span>.`,
     fb:"Name a characteristic (vision/inspiration/individualised consideration/intellectual stimulation) and link it to reduced resistance."}
  ],
  caseStudy:{
    business:"Tesco (Dave Lewis) & Riverton Retail",
    intro:`<p><b>Tesco — Dave Lewis's turnaround.</b> When Dave Lewis became CEO, Tesco was in crisis. He cut non-core, loss-making activities (garden centres, online streaming), refocused on core groceries, rebuilt a customer-focused culture, updated own-brand products and delivered <b>£1.6bn</b> in cost savings — taking Tesco from a <b>£6.4bn loss</b> toward an expected <b>£2bn profit</b> by 2019, with margins around 3.7%.</p>
      <p class="note-ex"><b>Tesco financial turnaround (2017 → 2022)</b></p>
      <table class="datatable">
        <tr><th>Ratio</th><th>2017</th><th>2022</th></tr>
        <tr><td>Gross profit margin</td><td>5.79%</td><td>8.92%</td></tr>
        <tr><td>Profit for year margin</td><td>−2.18%</td><td>4.20%</td></tr>
        <tr><td>Current ratio</td><td>0.96</td><td>1.16</td></tr>
        <tr><td>Acid test ratio</td><td>0.72</td><td>0.90</td></tr>
        <tr><td>Gearing</td><td>41.81%</td><td>22.98%</td></tr>
      </table>
      <p>However, external factors also helped: UK interest rates were historically low (2014–2019), cutting the cost of servicing Tesco's £22bn debt, and the wider retail market was recovering — so leadership may not have been the <i>only</i> reason.</p>
      <p><b>Riverton Retail Ltd</b> (1,200 stores) shows the opposite: weak culture, poor communication, large size and rapid change left staff anxious and the transformation at risk.</p>`
  },
  exam:[
    {marks:20, q:"Evaluate the extent to which the transformational leadership of Dave Lewis was the main reason for Tesco's improved financial position. (20)",
     model:`<p><span class="tag t-P">FOR · STRATEGY</span>One reason Lewis's leadership was the main factor is that he changed Tesco's strategic direction immediately, because he cut non-core, loss-making activities such as garden centres and online streaming. <span class="tag t-C">CHAIN</span>This let Tesco refocus on core groceries and allocate resources better, so costs fell and efficiency rose; <span class="tag t-A">APPLY</span>as a result margins reached 3.7% and Tesco moved from a £6.4bn loss toward an expected £2bn profit by 2019. <span class="tag t-J">JUDGE</span>So leadership had a direct financial impact.</p>
     <p><span class="tag t-J">AGAINST · EXTERNAL</span>However, external conditions also helped, because UK interest rates fell to historic lows from 2014–2019. <span class="tag t-C">CHAIN</span>This cut the cost of servicing Tesco's £22bn debt, improving liquidity and reducing debt even without Lewis's reforms, so leadership was not the sole driver.</p>
     <p><span class="tag t-P">FOR · CULTURE</span>Lewis also transformed Tesco's culture and product offering, because he rebuilt a customer-focused culture and updated own-brand products. <span class="tag t-C">CHAIN</span>This made staff more effective and customers more loyal just as Aldi and Lidl were gaining share; as a result customer satisfaction hit multi-year highs and Tesco achieved £1.6bn of cost savings.</p>
     <p><span class="tag t-J">AGAINST · MARKET</span>Yet the wider retail market was also recovering in this period, so rising consumer spending would have lifted Tesco's sales regardless of who led it — making it hard to isolate leadership as the single cause.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Dave Lewis's transformational leadership was the <b>main</b> reason for Tesco's recovery — the strategic and cultural changes drove the margin improvement (PFY margin −2.18% → 4.20%) and £1.6bn savings that external factors alone cannot explain. However, low interest rates and a recovering market clearly supported it, so leadership was necessary but not sufficient. Success depended on Lewis's reforms landing <i>while</i> conditions were favourable. It is recommended any judgement credits leadership as the primary driver within a supportive external environment.</p>`,
     fb:"Mr. Akram's exemplar (Tesco/Dave Lewis). Full 5-paragraph evaluation weighing leadership against external factors (interest rates, market recovery), using the £6.4bn→£2bn and ratio figures, ending with a supported 'main reason' judgement."},
    {marks:12, q:"Assess the likely extent of resistance to change among employees following a new CEO's appointment, using Starbucks as an example. (12)",
     model:`<p><span class="tag t-P">POINT</span>Some resistance is likely because employees loved the old culture under Howard Schultz, who built a caring, people-focused environment where staff ("partners") felt valued. <span class="tag t-C">CHAIN</span>This means loyalty to Schultz could make staff wary that things will change under Laxman Narasimhan, so they may be less open to new ideas.</p>
     <p><span class="tag t-P">POINT</span>Resistance may also come from fear for jobs, because Narasimhan came from efficiency-focused firms like PepsiCo. <span class="tag t-C">CHAIN</span>This means staff may worry about cost-cutting reducing hours or security, lowering motivation if changes aren't communicated clearly.</p>
     <p><span class="tag t-J">HOWEVER</span>However, resistance is likely to be <b>limited</b>, because Narasimhan has a strong track record and — crucially — showed respect for the culture by working as a barista for six months and keeping "partner-first" values. This builds trust, so many staff feel confident and even excited about the future.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, there may be short-term resistance from employees loyal to the old culture or fearful for jobs, but the extent is likely low because Narasimhan has respected Starbucks' people-first values and built trust. Success depends on continued clear communication and involving staff in the change.</p>`,
     fb:"Mr. Akram's exemplar (Starbucks). Balances reasons for and against resistance, applied to the CEO transition, with a judgement on how much resistance is likely."},
    {marks:12, q:"Assess the likely causes and extent of resistance to change during a major restructuring, using Disney as an example. (12)",
     model:`<p><span class="tag t-P">POINT</span>One cause of resistance is fear of job losses or altered roles, because restructuring often means redundancies. <span class="tag t-C">CHAIN</span>This means employees worry about security and may resist to protect their positions, lowering morale and productivity during the transition.</p>
     <p><span class="tag t-P">POINT</span>A second cause is the speed of change, because Bob Iger wants the restructuring done quickly. <span class="tag t-C">CHAIN</span>This gives staff little time to adjust, creating uncertainty and stress, so even those who accept the change in principle may push back if it feels rushed.</p>
     <p><span class="tag t-J">HOWEVER</span>However, resistance may be lower because Iger communicated his plans clearly and early, including preserving Disney's core creative values, and — having been CEO for 15 years — understands the culture deeply. This builds trust, so employees feel their identity and creativity are protected and are more willing to accept change.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, resistance at Disney is likely to be significant given its size and job-security fears, but Iger's experience, clear communication and respect for the culture should reduce it. Success depends on managing the pace of change and reassuring staff throughout.</p>`,
     fb:"Mr. Akram's exemplar (Disney). Causes of resistance (job fears, speed) weighed against mitigating factors (communication, Iger's experience), with a judgement on extent."}
  ],
  resources:[
    {label:"Key factors in change — lesson notes (PDF)", file:"resources/3-3-6-1-key-factors-notes.pdf"},
    {label:"Transformational leadership — lesson notes (PDF)", file:"resources/3-3-6-1-transformational-leadership.pdf"}
  ]
},
{
  code:"3.3.6.2", subtheme:"3.3.6", title:"Contingency planning",
  business:"Case studies: ASOS, Alibaba & IKEA", status:"live",
  notes:[
    {h:"What is contingency planning?", html:`
      <p><b>Contingency planning</b> (also called <b>scenario planning</b>) is anticipating different business situations — emergencies or otherwise — and deciding in advance how to manage them. Businesses use risk-and-probability techniques (e.g. decision trees) to judge which scenarios are most likely and most threatening.</p>`},
    {h:"Risk mitigation — four approaches", html:`
      <p><b>Risk mitigation</b> is planning for disasters and finding ways to lessen their impact. A good plan weighs the impact of each risk and prioritises accordingly. Four main approaches:</p>
      <ul>
        <li><b>Risk acceptance</b> — (often a small firm) accepts the risk because preventing it costs more than the impact.</li>
        <li><b>Risk avoidance</b> — move away from the risk entirely (e.g. leave a war-torn region, or stop using low-wage-country suppliers to avoid an unethical association).</li>
        <li><b>Risk limitation</b> — accept the risk exists but act to reduce its effects (e.g. anti-virus software against a computer virus).</li>
        <li><b>Risk transference</b> — hand the risk to someone else, e.g. outsourcing IT.</li>
      </ul>`},
    {h:"Key risks & business continuity", html:`
      <p>Edexcel focuses on three key risks a continuity plan must cover:</p>
      <ul>
        <li><b>Natural disasters</b> — earthquakes, flooding, etc. (e.g. Japan's 2011 earthquake and tsunami).</li>
        <li><b>IT systems failure</b> — e.g. a major outage like BA's.</li>
        <li><b>Loss of key staff</b> — e.g. Apple losing Steve Jobs in 2011.</li>
      </ul>
      <p>A <b>business continuity plan</b> sets out the response to a crisis — e.g. for a virus: assess the damage, agree a prepared strategy, then notify staff/press and bring in backups — so the business keeps operating.</p>`},
    {h:"Succession planning", html:`
      <p><b>Succession planning</b> prepares internal candidates to step into key roles before they fall vacant, so leadership transitions smoothly. It protects the business from the <b>loss of key staff</b> and reassures employees and investors — but it can't guard against external shocks, and an internal successor may lack a founder's charisma.</p>`}
  ],
  definitions:[
    {term:"Contingency planning", marks:2, body:`Anticipating possible future situations or emergencies and deciding in advance how to manage them <span class="pt">1</span>; it helps a business respond quickly and limit disruption when a crisis occurs <span class="pt">2</span>.`},
    {term:"Risk mitigation", marks:2, body:`The process of planning for potential disasters and finding ways to lessen their negative impact <span class="pt">1</span>; a good plan prioritises risks by their likely impact <span class="pt">2</span>.`},
    {term:"Business continuity plan", marks:2, body:`A plan setting out how a business will keep operating during and after a crisis <span class="pt">1</span>, such as an IT failure or natural disaster, so disruption to customers is minimised <span class="pt">2</span>.`},
    {term:"Succession planning", marks:2, body:`Identifying and preparing internal candidates to take over key roles when they become vacant <span class="pt">1</span>; it ensures leadership continuity and reassures staff and investors <span class="pt">2</span>.`},
    {term:"Risk transference", marks:2, body:`Handing a business risk to another party <span class="pt">1</span>, for example by outsourcing IT or taking out insurance, so the business is less exposed to that risk <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define contingency planning.",
     model:`Contingency planning is anticipating possible future situations or emergencies and deciding in advance how to manage them <span class="pt">1</span>; it lets a business respond quickly and limit disruption when a crisis occurs <span class="pt">2</span>.`,
     fb:"Two linked points — what it is and what it achieves."},
    {marks:4, q:"Explain one of the four risk-mitigation approaches with an example.",
     model:`<b>Risk transference</b> means handing a risk to another party <span class="pt">1</span>. This is because the business decides someone else is better placed to manage it <span class="pt">2</span>. For example, outsourcing its IT systems passes the risk of system failure to a specialist provider <span class="pt">3</span>, reducing the firm's own exposure while keeping operations running <span class="pt">4</span>.`,
     fb:"Name one approach (acceptance/avoidance/limitation/transference), define it, and apply an example."},
    {marks:4, q:"Explain one benefit of succession planning for a business.",
     model:`Succession planning ensures continuity of leadership <span class="pt">1</span>. This is because an internal successor is already familiar with the company's operations and values <span class="pt">2</span>. As a result, when a key figure leaves the handover is smooth and controlled <span class="pt">3</span>, avoiding disruption and protecting staff morale and investor confidence <span class="pt">4</span>.`,
     fb:"Link the prepared successor to a smooth-transition consequence."}
  ],
  caseStudy:{
    business:"ASOS, Alibaba & IKEA",
    intro:`<p>Three scenarios used in the exam questions.</p>
      <h3>ASOS — warehouse fires (scenario planning)</h3>
      <p>In May 2017 a fire at ASOS's <b>Berlin</b> warehouse damaged two million products worth <b>£6m</b>. Its contingency plan kicked in immediately and it fulfilled orders from its <b>Barnsley</b> warehouse, so the website operated as normal and the share price soon recovered. By contrast, an earlier Barnsley fire in 2014 disrupted business for three days and cost <b>£30m</b> in lost sales — showing how much a good plan helped the second time.</p>
      <h3>Alibaba — succession (Jack Ma → Daniel Zhang)</h3>
      <p>Alibaba prepared <b>Daniel Zhang</b>, already serving as CEO, to take over as chairman when founder <b>Jack Ma</b> stepped down — a planned, controlled leadership transition that protected investor confidence and morale.</p>
      <h3>IKEA — contingency planning</h3>
      <p>IKEA uses contingency planning (backup IT systems, alternative supply routes) to stay flexible through supply-chain disruption and fluctuating demand — though it still misjudged demand during the energy crisis, showing planning reduces but cannot remove risk.</p>`
  },
  exam:[
    {marks:12, q:"Assess the usefulness of contingency (scenario) planning to a business such as ASOS. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that it helps ASOS prepare for unexpected events and reduce disruption, because it can anticipate risks such as warehouse fires and prepare alternative plans. <span class="tag t-C">CHAIN</span>This means a faster, more organised response: when the Berlin warehouse was damaged in 2017, ASOS switched to fulfilling orders from Barnsley, so operations continued, revenue loss was limited and customers stayed satisfied.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is maintaining investor confidence, because quick action after a crisis signals strong management. <span class="tag t-C">CHAIN</span>This means investors are reassured the business can cope; although ASOS's share price dipped after the fire, it quickly recovered.</p>
     <p><span class="tag t-J">HOWEVER</span>However, contingency planning cannot eliminate all loss, because some events still cause damage even when well managed. ASOS lost £6m of stock in the Berlin fire — the plan avoided service disruption by rerouting orders but could not prevent the direct financial hit, so planning only reduces, not removes, risk.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, scenario planning is clearly useful to ASOS — it limited disruption, protected online sales and reassured investors — but should be part of a wider risk-management system, not relied on alone. Its success depends on how well ASOS identifies the most likely and most damaging risks. It is recommended ASOS keeps using it for high-impact, high-likelihood risks but combines it with insurance, flexible operations and safety measures.</p>`,
     fb:"Mr. Akram's exemplar (ASOS). Uses the Berlin/Barnsley fires and £6m figure; two benefits, a 'reduces not removes risk' limitation, and a recommendation."},
    {marks:12, q:"Assess the benefits of succession planning for a business such as Alibaba. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is leadership continuity, because a succession plan prepares an internal candidate already familiar with the company — Daniel Zhang, who was CEO before taking over as chairman from Jack Ma. <span class="tag t-C">CHAIN</span>This means the handover was predictable and controlled, so Alibaba kept operating effectively without denting investor confidence or staff morale.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is protecting morale, because an internal successor is more likely to continue the founder's vision. <span class="tag t-C">CHAIN</span>This means employees feel confident about the direction and are less likely to resist change, supporting a smoother transition.</p>
     <p><span class="tag t-J">HOWEVER</span>However, succession planning cannot eliminate external threats such as a trade war or recession, and it does not guarantee the successor will inspire the same confidence as a founder. So it must sit alongside wider risk management and ongoing leadership development.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, succession planning reduces risk for Alibaba by ensuring stable leadership transitions, but its value depends on developing successors well and combining it with broader risk strategies. It is recommended Alibaba supports succession with ongoing leadership development and performance review.</p>`,
     fb:"Mr. Akram's exemplar (Alibaba). Jack Ma → Daniel Zhang continuity and morale benefits, with external-threat and successor-calibre limitations."},
    {marks:12, q:"Assess the likely benefits of contingency planning for a business such as IKEA. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is greater flexibility in uncertain conditions, because contingency planning prepares IKEA for a range of scenarios. <span class="tag t-C">CHAIN</span>This means quicker responses to supply-chain disruption or demand swings — adjusting pricing, stock or sourcing — so IKEA keeps operating smoothly and avoids stockouts or overstocking.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is maintaining business continuity, because IKEA can invest in backup IT and alternative supply routes. <span class="tag t-C">CHAIN</span>This means fewer delays or shutdowns during outages or system failures, so customer satisfaction and revenue are protected and trust is maintained.</p>
     <p><span class="tag t-J">HOWEVER</span>However, not all outcomes can be predicted — IKEA still misjudged demand during the energy crisis — and contingency planning is costly and time-consuming, diverting resources from product development or marketing. If the risks never occur, that spend can look wasted.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, contingency planning is valuable to IKEA for flexibility, faster decisions and continuity, but it is not a guarantee of success. Its value depends on how regularly it is reviewed, how realistic the assumptions are, and whether IKEA can act on the plans quickly. It is recommended IKEA keeps investing in it for high-impact, high-likelihood risks while combining it with other strategies.</p>`,
     fb:"Mr. Akram's exemplar (IKEA). Flexibility and continuity benefits, with unpredictability and cost as limitations, and a review-dependent judgement."}
  ],
  resources:[
    {label:"Contingency planning — lesson notes (PDF)", file:"resources/3-3-6-contingency-notes.pdf"}
  ]
},
{
  code:"3.3.1.1", subtheme:"3.3.1", title:"Corporate objectives & mission",
  business:"Case studies: Lego, Patagonia & Morrisons", status:"live",
  notes:[
    {h:"Mission → objectives → strategy", html:`
      <p>A business sets its direction through a hierarchy:</p>
      <ul>
        <li><b>Mission statement</b> — a brief written statement of the <b>purpose</b> of the business; it guides actions, spells out the overall goal and gives a sense of direction for all levels of management.</li>
        <li><b>Corporate (strategic) objectives</b> — the clearly defined, business-wide targets the mission is broken down into.</li>
        <li><b>Functional objectives</b> — department targets (marketing, HR, operations, finance) that flow from the corporate objectives.</li>
        <li><b>Strategies</b> — the plans devised to achieve those targets.</li>
      </ul>`},
    {h:"SMART objectives", html:`
      <p>Good corporate objectives are <b>SMART</b>:</p>
      <ul>
        <li><b>S</b>pecific — aimed at what the business does (e.g. a hotel filling 60% of beds in October).</li>
        <li><b>M</b>easurable — a value can be attached (e.g. £10,000 of sales this half-year).</li>
        <li><b>A</b>greed / attainable — by all those involved.</li>
        <li><b>R</b>ealistic — challenging but achievable with the resources available.</li>
        <li><b>T</b>ime-specific — has a deadline.</li>
      </ul>
      <div class="note-ex"><b>Lego</b> set five corporate objectives: zero product recalls, a top-10 firm for employee safety, support learning for 101 million children by 2022, 100% renewable energy by 2023, and a zero-waste mindset — clear, measurable, time-bound targets flowing from its mission to "inspire and develop the builders of tomorrow."</div>`},
    {h:"Appraising mission statements", html:`
      <h3>Benefits</h3>
      <ul>
        <li>Gives the business a clear sense of <b>direction</b> and helps guide decisions.</li>
        <li>Can <b>motivate employees</b> who share its values and feel proud of the purpose.</li>
        <li>Helps build a <b>brand image</b> and attract customers who share those values (e.g. ethics, sustainability).</li>
      </ul>
      <h3>Limitations</h3>
      <ul>
        <li>Can be <b>vague PR</b> — fine words with no real action behind them.</li>
        <li>Not all customers or staff value or even read it.</li>
        <li>If the business is seen to <b>break</b> its stated values, it can backfire and damage trust.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Mission statement", marks:2, body:`A brief written statement of the overall purpose of a business <span class="pt">1</span>; it guides decision-making and gives the organisation a clear sense of direction <span class="pt">2</span>.`},
    {term:"Corporate objective", marks:2, body:`A clearly defined, business-wide target that the mission is broken down into <span class="pt">1</span>; functional (departmental) objectives and strategies then flow from it <span class="pt">2</span>.`},
    {term:"Functional objective", marks:2, body:`A target set for a particular department, such as marketing or finance <span class="pt">1</span>; it is derived from the corporate objectives so that each function supports the wider goal <span class="pt">2</span>.`},
    {term:"SMART objective", marks:2, body:`An objective that is Specific, Measurable, Agreed, Realistic and Time-specific <span class="pt">1</span>; setting objectives this way makes success clear to measure and more likely to be achieved <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define a mission statement.",
     model:`A mission statement is a brief written statement of the overall purpose of a business <span class="pt">1</span>; it guides decision-making and gives the organisation a clear sense of direction <span class="pt">2</span>.`,
     fb:"Two linked points — what it is and what it does."},
    {marks:4, q:"Lego set an objective to 'support learning for 101 million children by 2022'. Explain how this meets the SMART criteria.",
     model:`The objective is <b>specific</b> (supporting children's learning) and <b>measurable</b> (101 million) <span class="pt">1</span><span class="pt">2</span>. It is <b>time-specific</b> (by 2022) <span class="pt">3</span>, and — given Lego's global scale and resources — realistic and agreed across the business, making progress easy to track <span class="pt">4</span>.`,
     fb:"Link the objective to at least three SMART elements with the figures/date."},
    {marks:4, q:"Explain one benefit to a business of breaking its mission down into corporate and functional objectives.",
     model:`It gives every department a clear target to work towards <span class="pt">1</span>. This is because functional objectives flow from the corporate objectives, which flow from the mission <span class="pt">2</span>. As a result, all parts of the business pull in the same direction <span class="pt">3</span>, improving coordination and the chance of achieving the overall goal <span class="pt">4</span>.`,
     fb:"Reward the link from the objectives hierarchy to coordination/alignment."}
  ],
  caseStudy:{
    business:"Lego, Patagonia & Morrisons",
    intro:`<p>Three mission/objectives scenarios used in the exam questions.</p>
      <h3>Lego</h3>
      <p>Mission: <b>"inspire and develop the builders of tomorrow."</b> Five SMART corporate objectives (zero recalls, top-10 employee safety, learning for 101m children by 2022, 100% renewable energy by 2023, zero waste). A later review found zero recalls, high employee satisfaction, millions educated (short of 101m), and sharply lower waste — strong but not total success.</p>
      <h3>Patagonia</h3>
      <p>Mission: <b>"to save our home planet."</b> It pays fair wages to 75,000+ factory workers and ensures environmental responsibility across 67 factories, farms and mills — a mission that motivates staff and attracts ethically minded customers, but may raise costs and prices.</p>
      <h3>Morrisons</h3>
      <p>Mission highlights being <b>human, ethical and ecological</b> and "one team" — differentiating it from price-focused rivals Aldi and Lidl by presenting a values-driven supermarket.</p>`
  },
  exam:[
    {marks:4, q:"Explain one benefit to Morrisons of having a mission statement. (4)",
     model:`Morrisons' mission can help create a strong brand image <span class="pt">1</span>. This is because it highlights values such as being human, ethical and ecological and being "one team" <span class="pt">2</span>. This appeals to customers who care about sustainability and responsible business <span class="pt">3</span>, so Morrisons differentiates itself from price-focused rivals like Aldi and Lidl and attracts ethically conscious shoppers <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Morrisons). Note the Year-2 rule: mark 1 is for identifying a benefit, not a definition. Two developed points with application."},
    {marks:12, q:"Assess the likely importance of its mission statement to a business such as Patagonia. (12)",
     model:`<p><span class="tag t-P">POINT</span>One reason the mission is important is that it motivates employees, because Patagonia's purpose — "to save our home planet" — shows a deep commitment to environmental and ethical values. <span class="tag t-C">CHAIN</span>This means staff feel proud to work for a company that matches their beliefs, especially as it pays fair wages to 75,000+ workers; as a result motivation and retention rise, giving a more loyal, productive workforce.</p>
     <p><span class="tag t-P">POINT</span>A second reason is that it attracts loyal, ethical customers, because many consumers choose brands that share their values. <span class="tag t-C">CHAIN</span>Patagonia's actions across 67 factories, farms and mills reinforce its image, so customers may pay more for its products.</p>
     <p><span class="tag t-J">HOWEVER</span>However, not all customers value the mission, because some focus on price over ethics. Its commitment to fair labour and the environment raises production costs, so its prices may be too high for price-sensitive markets, slowing growth where cost matters most.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Patagonia's mission is likely to be highly important — motivating staff and attracting ethical customers for a clear competitive edge. However, success depends on enough consumers paying premium prices and on Patagonia continuing to deliver on its promises. It is recommended Patagonia keeps its ethical focus but considers more affordable lines to widen its appeal without diluting its values.</p>`,
     fb:"Mr. Akram's exemplar (Patagonia). Two developed benefits, a price/ethics limitation, and a conclusion that states what the importance depends on."}
  ],
  resources:[
    {label:"Corporate objectives — knowledge recall (PDF)", file:"resources/3-3-1-1-corporate-objectives.pdf"},
    {label:"Mission statements — lesson notes (PDF)", file:"resources/3-3-1-1-mission-statements.pdf"},
    {label:"Unilever \u2014 Growth Action Plan source booklet (PDF)", file:"resources/3-3-1-1-unilever-source.pdf"}
  ]
},
{
  code:"3.3.1.2", subtheme:"3.3.1", title:"Theories of corporate strategy",
  business:"Case studies: McDonald's, Lush, Five Guys & Coca-Cola", status:"live",
  notes:[
    {h:"Strategic vs tactical decisions", html:`
      <p><b>Strategic decisions</b> are major, long-term choices made by senior management that set the direction of the whole business (e.g. entering a new market, a major product launch). They are costly and hard to reverse.</p>
      <p><b>Tactical decisions</b> are shorter-term, smaller choices (often by middle management) that put the strategy into action (e.g. a seasonal promotion). They are easier and cheaper to reverse.</p>`},
    {h:"Porter's Strategic Matrix", html:`
      <p>Michael Porter argued a business needs a clear <b>competitive strategy</b>, choosing its source of advantage (cost vs differentiation) and its scope (broad market vs narrow niche):</p>
      <table class="datatable">
        <tr><th></th><th>Low cost</th><th>Differentiation</th></tr>
        <tr><td><b>Broad market</b></td><td>Cost leadership (e.g. a supermarket cutting prices to undercut rivals)</td><td>Differentiation (a distinctive product sold widely)</td></tr>
        <tr><td><b>Narrow (niche)</b></td><td>Cost focus</td><td>Differentiation focus (e.g. a boutique roaster selling rare beans to connoisseurs)</td></tr>
      </table>
      <p>Porter warned against being "stuck in the middle" — a business with no clear strategy. (<b>Ansoff's Matrix</b> — market penetration, market development, product development, diversification — is the other key framework — see below.)</p>`},,
    {h:"Ansoff's Matrix", html:`
      <p><b>Ansoff's Matrix</b> plots growth strategies against two axes — products (existing vs new) and markets (existing vs new) — giving four options of rising risk:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 300" style="min-width:420px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <text x="260" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)">PRODUCTS</text>
        <text x="150" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Existing</text>
        <text x="380" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">New</text>
        <text x="20" y="110" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" transform="rotate(-90 20 150)">MARKETS</text>
        <text x="50" y="110" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Existing</text>
        <text x="50" y="225" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">New</text>
        <rect x="80" y="50" width="200" height="110" rx="6" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="290" y="50" width="200" height="110" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)" stroke-width="2"/>
        <rect x="80" y="170" width="200" height="110" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)" stroke-width="2"/>
        <rect x="290" y="170" width="200" height="110" rx="6" fill="rgba(201,42,42,.12)" stroke="#c92a2a" stroke-width="2"/>
        <text x="180" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Market</text>
        <text x="180" y="118" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">penetration</text>
        <text x="180" y="138" text-anchor="middle" font-size="10.5" fill="var(--muted)">lowest risk</text>
        <text x="390" y="100" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Product</text>
        <text x="390" y="118" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">development</text>
        <text x="180" y="220" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Market</text>
        <text x="180" y="238" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">development</text>
        <text x="390" y="220" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Diversification</text>
        <text x="390" y="238" text-anchor="middle" font-size="10.5" fill="var(--muted)">highest risk</text>
      </svg>
      </div>
      <ul>
        <li><b>Market penetration</b> — existing products into existing markets (lowest risk). E.g. Carrefour driving more sales from current stores; Aldi opening more UK stores.</li>
        <li><b>Market development</b> — existing products into new markets. E.g. Burberry expanding abroad; Aldi moving into online grocery.</li>
        <li><b>Product development</b> — new products into existing markets. E.g. Samsung's new phones; Tesla's Cybertruck.</li>
        <li><b>Diversification</b> — new products into new markets (highest risk). E.g. Virgin entering unrelated industries.</li>
      </ul>`},
    {h:"Effect on human, physical & financial resources", html:`
      <p>Strategic and tactical decisions ripple through a firm's three resource types:</p>
      <ul>
        <li><b>Human resources</b> — staffing, recruitment, training and skills (e.g. needing more skilled chefs).</li>
        <li><b>Physical resources</b> — equipment, facilities, space and technology (e.g. new grills or kitchen layouts).</li>
        <li><b>Financial resources</b> — budgeting, investment and cash flow (e.g. higher marketing or capital spend).</li>
      </ul>
      <p>A major decision usually affects all three at once, so managers must balance them — a product launch may need new equipment (physical), trained staff (human) and upfront investment (financial) before any sales are made.</p>`}
  ],
  definitions:[
    {term:"Strategic decision", marks:2, body:`A major, long-term decision made by senior management that sets the direction of the whole business <span class="pt">1</span>; it is costly and difficult to reverse <span class="pt">2</span>.`},
    {term:"Tactical decision", marks:2, body:`A shorter-term, smaller-scale decision that puts a strategy into action <span class="pt">1</span>; it is usually easier and cheaper to reverse than a strategic decision <span class="pt">2</span>.`},
    {term:"Cost leadership (Porter)", marks:2, body:`A strategy of becoming the lowest-cost producer in a broad market <span class="pt">1</span>, allowing a business to compete on price while protecting its margins <span class="pt">2</span>.`},
    {term:"Differentiation (Porter)", marks:2, body:`A strategy of offering a distinctive product that stands out from rivals <span class="pt">1</span>, allowing a business to attract customers and often charge a premium rather than compete on price <span class="pt">2</span>.`},
    {term:"Market penetration", marks:2, body:`A growth strategy of selling more existing products into existing markets <span class="pt">1</span>; it is the lowest-risk option because the business already knows both the product and the market <span class="pt">2</span>.`},
    {term:"Market development", marks:2, body:`A growth strategy of selling existing products into new markets <span class="pt">1</span>, such as a new country or customer segment; riskier than penetration because the market is unfamiliar <span class="pt">2</span>.`},
    {term:"Product development", marks:2, body:`A growth strategy of launching new products into existing markets <span class="pt">1</span>; it uses the firm's known customer base but carries the risk and cost of developing new products <span class="pt">2</span>.`},
    {term:"Diversification", marks:2, body:`A growth strategy of selling new products in new markets <span class="pt">1</span>; it is the highest-risk Ansoff option because both the product and the market are unfamiliar <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Distinguish between a strategic and a tactical decision.",
     model:`A strategic decision is a major, long-term choice by senior management that sets the whole firm's direction and is hard to reverse <span class="pt">1</span>; a tactical decision is a shorter-term, smaller choice that implements the strategy and is easier to reverse <span class="pt">2</span>.`,
     fb:"Two linked points contrasting scale, timescale and reversibility."},
    {marks:4, q:"A supermarket chain lowers prices across all regions to undercut competitors. Identify the Porter strategy and explain one resource implication.",
     model:`This is a <b>cost-leadership</b> strategy (low cost, broad market) <span class="pt">1</span>. To sustain the lower prices it must cut costs elsewhere — a financial-resource effect <span class="pt">2</span>: tighter budgeting and investment in efficiency (e.g. automation) <span class="pt">3</span>, so margins are protected even as prices fall <span class="pt">4</span>.`,
     fb:"Identify cost leadership, then link it to a resource (financial/physical) consequence."}
  ],
  caseStudy:{
    business:"McDonald's, Lush, Five Guys & Coca-Cola",
    intro:`<p>Four decisions and how they hit a firm's resources.</p>
      <ul>
        <li><b>McDonald's — plant-based launch (physical):</b> the PLT burger needs separate grills, fridges and utensils to avoid contamination, so capital spend and kitchen-layout changes rise — though its existing vegan infrastructure in Germany/Sweden softens the cost.</li>
        <li><b>Lush — quitting social media (financial):</b> closing its accounts gave up 10.6m followers, risking a ~£10m short-term sales loss and higher-cost marketing alternatives — but may deepen ethical brand loyalty long term.</li>
        <li><b>Five Guys — no timers/machines (human):</b> staff judge food by sight, aroma and texture, needing more skilled, well-trained employees, so recruitment and training costs rise.</li>
        <li><b>Coca-Cola — "Spiced" launch:</b> developed in just seven weeks to catch the bold-flavour trend and appeal to Gen Z — showing innovation, but risking alienating classic-taste loyalists and diluting the brand.</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Assess the likely effect on McDonald's physical resources of launching plant-based products such as the PLT burger. (8)",
     model:`<p><span class="tag t-P">POINT</span>One effect is increased equipment costs, because plant-based items need separate grills, fridges and utensils to avoid contamination with meat. <span class="tag t-C">CHAIN</span>This means additional or specialised equipment across many restaurants, so McDonald's faces significant capital expenditure — raising short-term costs before any sales are made.</p>
     <p><span class="tag t-P">POINT</span>A second effect is on kitchen layout and space, because existing kitchens may lack room for new prep stations. <span class="tag t-C">CHAIN</span>This could mean building work and temporary closures, adding further cost and disruption.</p>
     <p><span class="tag t-J">HOWEVER</span>However, these challenges may be reduced because McDonald's already offers vegan products in Germany and Sweden, so it owns suitable equipment and proven layouts to replicate. This means the cost of adapting physical resources may be far lower than expected, letting it roll out more cost-effectively than smaller rivals.</p>`,
     fb:"Mr. Akram's exemplar (McDonald's). Two physical-resource effects plus a mitigating 'however' — the balance lifts it to the top band."},
    {marks:8, q:"Assess the likely effect on Lush's financial resources of its decision to stop using social media. (8)",
     model:`<p><span class="tag t-P">POINT</span>One effect is a likely drop in sales, because Lush closed its Facebook, Instagram, TikTok and Snapchat accounts, giving up 10.6m followers. <span class="tag t-C">CHAIN</span>This makes it harder to promote products and reach customers, so awareness and engagement fall, reducing sales revenue and pressuring Lush's finances (a ~£10m short-term loss).</p>
     <p><span class="tag t-P">POINT</span>A second effect is higher marketing costs, because social media is a low-cost channel. <span class="tag t-C">CHAIN</span>Without it, Lush must spend more on in-store promotions or print, raising the cost per customer reached.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the decision could support long-term loyalty and reduce reputational risk, because it acted on ethical concerns about social media's impact on teenage girls — a key market. This protects its brand values and may attract loyal, ethically minded buyers, supporting stable or growing revenue despite the short-term hit.</p>`,
     fb:"Mr. Akram's exemplar (Lush). Financial-resource effects (sales, marketing cost) balanced against long-term brand benefit."},
    {marks:12, q:"Assess the advantages and disadvantages to Coca-Cola of launching a new product such as Coca-Cola Spiced. (12)",
     model:`<p><span class="tag t-P">ADVANTAGE</span>One advantage is appealing to younger consumers, because Spiced matches the trend for bold, unusual flavours. <span class="tag t-C">CHAIN</span>This makes Coca-Cola look modern and in tune with Gen Z and Millennial tastes, so it can grow its customer base and protect market share from rivals.</p>
     <p><span class="tag t-P">ADVANTAGE</span>A second advantage is showing innovation and speed, because the flavour was developed in just seven weeks. <span class="tag t-C">CHAIN</span>This earns positive media attention and signals that Coca-Cola listens and adapts, building trust and loyalty and helping it keep its market lead.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the spicy flavour may not appeal to all, because it differs from the classic taste, risking alienating loyal or older customers — so the money spent developing and marketing it may not pay back. Launching too many flavours could also dilute the brand, weakening Coca-Cola's identity over time.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, launching Spiced is a bold, strategic move that keeps Coca-Cola competitive and relevant, and its scale and marketing reduce the risk. But success depends on whether the flavour genuinely attracts new customers without alienating the core, so a limited-edition approach that protects the classic brand is sensible.</p>`,
     fb:"Mr. Akram's exemplar (Coca-Cola Spiced). Two advantages and two disadvantages of a strategic launch decision, with a balanced conclusion."}  ,{marks:12, q:"Assess Aldi's use of Ansoff's Matrix growth strategies (opening more stores and moving online). (12)",
     model:`<p><span class="tag t-P">PENETRATION</span>One reason Aldi opens more stores is to boost sales through <b>market penetration</b>, because more stores put its low-cost products within reach of new customers. <span class="tag t-C">CHAIN</span>This means more shoppers buy everyday essentials and own-brand products, so Aldi grows UK market share against Tesco and Sainsbury's and reinvests the revenue into yet more stores.</p>
     <p><span class="tag t-J">HOWEVER</span>However, opening 400 stores needs huge capital investment (premises, stock, 5,000 jobs), raising fixed costs and risk — if demand weakens, some stores underperform, so even penetration is risky at scale.</p>
     <p><span class="tag t-P">MARKET DEVELOPMENT</span>Moving online is <b>market development</b> — existing products through a new channel — reaching convenience-focused customers as online grocery doubled from 3% to 6%. <span class="tag t-C">CHAIN</span>This could win urban professionals and families who can't visit stores, keeping Aldi competitive.</p>
     <p><span class="tag t-J">CONCLUSION</span>However, online conflicts with Aldi's low-cost model, which relies on in-store simplicity and bulk buying; warehousing and delivery costs could undermine its "top quality at low prices" promise. Overall, penetration fits Aldi best; it should expand online cautiously so it does not erode its cost advantage.</p>`,
     fb:"Mr. Akram's exemplar (Aldi). Identifies penetration and market development with the figures, balances each, and judges which fits Aldi's model."},
  {marks:20, q:"Evaluate the growth options available to Tesla using Ansoff's Matrix (market penetration vs product development). (20)",
     model:`<p><span class="tag t-P">PENETRATION</span>One option is <b>market penetration</b> of the electric-car market — selling more Model 3 and Model Y within the current market. <span class="tag t-C">CHAIN</span>This is relatively low risk as Tesla leads BEV sales (21% global share in 2021; Model 3 the first EV to pass 1m units), so building on brand strength and loyalty could lift sales. <span class="tag t-A">APPLY</span>It also drives economies of scale — Tesla made 1.37m vehicles in 2022 (+47%) — raising capacity utilisation and margins. <span class="tag t-J">JUDGE</span>So penetration is a solid base.</p>
     <p><span class="tag t-J">LIMITATION</span>However, the EV market is saturating as Ford and Volkswagen enter, so growth by selling the same models may need price cuts or heavier marketing, and a demand slowdown would stall it.</p>
     <p><span class="tag t-P">PRODUCT DEVELOPMENT</span>An alternative is <b>product development</b> — launching new EVs such as the Cybertruck. <span class="tag t-C">CHAIN</span>The electric-truck market is forecast to grow from 101,499 units (2022) to over 1m by 2030 ($3.86bn), so early-mover advantage could build a strong position before rivals crowd in, and it fits Tesla's innovative culture. <span class="tag t-J">JUDGE</span>So product development offers higher growth potential.</p>
     <p><span class="tag t-J">LIMITATION</span>But new products are riskier and costly — development, tooling and uncertain demand — and could divert resources from the proven core range.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Tesla should pursue both: penetration to defend its lucrative core while product development opens the fast-growing truck segment. Success depends on funding innovation without over-stretching, and on how fast rivals catch up — so a staged approach, protecting the core while scaling the Cybertruck, is recommended.</p>`,
     fb:"Mr. Akram's exemplar (Tesla). Full evaluation of two Ansoff options with the extract figures, each challenged, ending in a 'both, staged' recommendation."}
  ],
  resources:[
    {label:"Effect of strategic & tactical decisions on resources — lesson notes (PDF)", file:"resources/3-3-1-2-strategic-tactical-resources.pdf"},
    {label:"Ansoff\u2019s Matrix \u2014 lesson notes (PDF)", file:"resources/3-3-1-2-ansoff-matrix.pdf"}
  ]
},
{code:"3.3.1.3", subtheme:"3.3.1", title:"SWOT analysis", business:"Strengths · weaknesses · opportunities · threats", status:"soon"},
{code:"3.3.1.4", subtheme:"3.3.1", title:"Impact of external influences", business:"PESTLE · competitive environment · Porter's five forces", status:"soon"}
];
