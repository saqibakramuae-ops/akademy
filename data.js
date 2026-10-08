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
  code:"3.3.2", subtheme:"3.3", title:"Investment appraisal",
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
{code:"3.3.3", subtheme:"3.3", title:"Decision trees", business:"Expected values & probability", status:"soon"},
{code:"3.3.4", subtheme:"3.3", title:"Critical path analysis", business:"EST · LFT · total float", status:"soon"},
{code:"3.3.5", subtheme:"3.3", title:"Contribution", business:"Contribution as a decision tool", status:"soon"}
];
