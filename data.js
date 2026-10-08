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
{
  code:"3.3.3", subtheme:"3.3", title:"Decision trees",
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
  code:"3.3.4", subtheme:"3.3", title:"Critical path analysis",
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
  code:"3.3.5", subtheme:"3.3", title:"Contribution",
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
}
];
