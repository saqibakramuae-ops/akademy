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

window.SUBTHEME_TITLE = {"1.3.1":"Meeting customer needs","1.3.2":"The market (demand & supply)","1.3.3":"Marketing mix and strategy","1.3.4":"Managing people","1.3.5":"Entrepreneurs and leaders","2.3.1":"Planning a business & raising finance","2.3.2":"Financial planning","2.3.3":"Managing finance","2.3.4":"Resource management","2.3.5":"External influences","3.3.1":"Business objectives & strategy","3.3.2":"Business growth","3.3.3":"Decision-making techniques","3.3.4":"Influences on business decisions","3.3.5":"Assessing competitiveness","3.3.6":"Managing change"};
window.SUBTHEME_SUB = {"2.3.1":"Unit 2: Managing business activities \u2014 business plans, internal and external sources and methods of finance, forms of business, and limited vs unlimited liability.","2.3.2":"Unit 2: Managing business activities \u2014 sales, revenue and costs, sales forecasting, break-even, cash-flow forecasts and budgets.","2.3.3":"Unit 2: Managing business activities \u2014 profit and profitability, liquidity and working capital, and the internal and external causes of business failure.","2.3.4":"Unit 2: Managing business activities \u2014 production, productivity and efficiency, capacity utilisation, inventory control and quality management.","2.3.5":"Unit 2: Managing business activities \u2014 economic influences, legislation and the competitive environment.","1.3.5":"Unit 1: Marketing and people \u2014 the role of the entrepreneur (including intrapreneurship and barriers), entrepreneurial motives and characteristics, business objectives and business choices.","1.3.4":"Unit 1: Marketing and people \u2014 approaches to staffing (staff as asset or cost), the flexible workforce and contracts, and employer/employee relationships including collective bargaining.","1.3.3":"Unit 1: Marketing and people \u2014 marketing objectives and strategy, product and service design, promotion and branding, pricing strategies and distribution.","1.3.2":"Unit 1: Marketing and people \u2014 demand, supply and how they interact to set market price, plus price and income elasticity of demand.","1.3.1":"Unit 1: Marketing and people \u2014 understanding the market, market research and market positioning to meet customer needs.","3.3.2":"Theme 3: Business decisions and strategy \u2014 reasons for growth, economies and diseconomies of scale, organic and inorganic growth, and the types of integration through mergers and takeovers.","3.3.1":"Theme 3: Business decisions and strategy \u2014 corporate objectives and mission, theories of corporate strategy, SWOT and external influences.","3.3.6":"Theme 3: Business decisions and strategy \u2014 the key factors in managing change and how businesses plan for risk through contingency and succession planning.","3.3.5":"Theme 3: Business decisions and strategy \u2014 interpreting financial statements, ratio analysis and human-resource measures to judge competitiveness.","3.3.3":"Theme 3: Business decisions and strategy \u2014 the quantitative tools used to make and justify business decisions.","3.3.4":"Theme 3: Business decisions and strategy \u2014 corporate culture, stakeholders, ethics and CSR, and how they shape business decisions."};
window.ICONS = {"1.3.3.1":"\ud83e\udded","1.3.3.2":"\ud83c\udfa8","1.3.3.3":"\ud83d\udce3","1.3.3.4":"\ud83c\udff7\ufe0f","1.3.3.5":"\ud83d\ude9a","1.3.2.1":"\ud83d\udcc9","1.3.2.2":"\ud83d\udcc8","1.3.2.3":"\u2696\ufe0f","1.3.2.4":"\ud83d\udcb9","1.3.2.5":"\ud83d\udcb0","1.3.1.1":"\ud83d\uded2","1.3.1.2":"\ud83d\udd0d","1.3.1.3":"\ud83c\udfAF","1.3.4.1":"\ud83d\udc65","1.3.4.2":"\ud83d\udccb","1.3.4.3":"\ud83c\udfe2","1.3.4.4":"\ud83d\ude80","1.3.4.5":"\ud83d\udc54","1.3.5.1":"\ud83d\udca1","1.3.5.2":"\ud83e\udde0","1.3.5.3":"\ud83c\udfc1","1.3.5.4":"\ud83d\udd00","2.3.1.1":"📝","2.3.1.2":"💵","2.3.1.3":"🏦","2.3.1.4":"🏛️","2.3.1.5":"⚖️","2.3.2.1":"🧾","2.3.2.2":"🔮","2.3.2.3":"📐","2.3.2.4":"💧","2.3.2.5":"📋","2.3.3.1":"💰","2.3.3.2":"🪙","2.3.3.3":"📉","2.3.4.1":"⚙️","2.3.4.2":"🏭","2.3.4.3":"📦","2.3.4.4":"⭐","2.3.5.1":"🌐","2.3.5.2":"📜","2.3.5.3":"🥊","3.3.2.1":"\ud83c\udf31","3.3.2.2":"\ud83c\udf3f","3.3.2.3":"\ud83d\udd17","3.3.2.4":"\ud83c\udfd7\ufe0f","3.3.2.5":"\u26a0\ufe0f","3.3.3.1":"📈","3.3.3.2":"💷","3.3.3.3":"🌳","3.3.3.4":"🧭","3.3.3.5":"➗","3.3.4.5":"⚖️","3.3.4.6":"♻️","3.3.4.1":"🏢","3.3.4.2":"🗂️","3.3.4.3":"🔄","3.3.4.7":"🤝","3.3.4.4":"👥","3.3.5.1":"📄","3.3.5.2":"📊","3.3.5.3":"👔","3.3.6.1":"🔄","3.3.6.2":"🛡️","3.3.1.1":"🎯","3.3.1.2":"♟️","3.3.1.3":"🧩","3.3.1.4":"🌍"};
window.PAPERS = [{"year": "2020", "series": [{"label": "January", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2020-jan-qu.pdf", "ms": "resources/papers/wbs13-2020-jan-ms.pdf", "er": "resources/papers/wbs13-2020-jan-er.pdf"}, {"label": "October", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2020-oct-qu.pdf", "ms": "resources/papers/wbs13-2020-oct-ms.pdf", "er": "resources/papers/wbs13-2020-oct-er.pdf"}]}, {"year": "2021", "series": [{"label": "January", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2021-jan-qu.pdf", "ms": "resources/papers/wbs13-2021-jan-ms.pdf", "er": "resources/papers/wbs13-2021-jan-er.pdf"}, {"label": "June", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2021-jun-qu.pdf", "ms": "resources/papers/wbs13-2021-jun-ms.pdf"}, {"label": "October", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2021-oct-qu.pdf", "ms": "resources/papers/wbs13-2021-oct-ms.pdf", "er": "resources/papers/wbs13-2021-oct-er.pdf"}]}, {"year": "2022", "series": [{"label": "January", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2022-jan-qu.pdf", "ms": "resources/papers/wbs13-2022-jan-ms.pdf", "er": "resources/papers/wbs13-2022-jan-er.pdf"}, {"label": "June", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2022-jun-qu.pdf", "ms": "resources/papers/wbs13-2022-jun-ms.pdf", "er": "resources/papers/wbs13-2022-jun-er.pdf"}, {"label": "October", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2022-oct-qu.pdf", "ms": "resources/papers/wbs13-2022-oct-ms.pdf", "er": "resources/papers/wbs13-2022-oct-er.pdf"}]}, {"year": "2023", "series": [{"label": "January", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2023-jan-qu.pdf", "ms": "resources/papers/wbs13-2023-jan-ms.pdf", "er": "resources/papers/wbs13-2023-jan-er.pdf"}, {"label": "June", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2023-jun-qu.pdf", "ms": "resources/papers/wbs13-2023-jun-ms.pdf", "er": "resources/papers/wbs13-2023-jun-er.pdf"}, {"label": "October", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2023-oct-qu.pdf", "ms": "resources/papers/wbs13-2023-oct-ms.pdf", "er": "resources/papers/wbs13-2023-oct-er.pdf"}]}, {"year": "2024", "series": [{"label": "January", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2024-jan-qu.pdf", "ms": "resources/papers/wbs13-2024-jan-ms.pdf", "er": "resources/papers/wbs13-2024-jan-er.pdf"}, {"label": "June", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2024-jun-qu.pdf", "ms": "resources/papers/wbs13-2024-jun-ms.pdf", "er": "resources/papers/wbs13-2024-jun-er.pdf"}, {"label": "October", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2024-oct-qu.pdf", "ms": "resources/papers/wbs13-2024-oct-ms.pdf", "er": "resources/papers/wbs13-2024-oct-er.pdf"}]}, {"year": "2025", "series": [{"label": "January", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2025-jan-qu.pdf", "ms": "resources/papers/wbs13-2025-jan-ms.pdf", "er": "resources/papers/wbs13-2025-jan-er.pdf"}, {"label": "June", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2025-jun-qu.pdf", "ms": "resources/papers/wbs13-2025-jun-ms.pdf", "er": "resources/papers/wbs13-2025-jun-er.pdf"}, {"label": "October", "paper": "WBS13/01", "qu": "resources/papers/wbs13-2025-oct-qu.pdf", "ms": "resources/papers/wbs13-2025-oct-ms.pdf", "er": "resources/papers/wbs13-2025-oct-er.pdf"}, {"label": "October (Paper A)", "paper": "WBS13/01A", "qu": "resources/papers/wbs13-2025-oct-a-qu.pdf", "ms": "resources/papers/wbs13-2025-oct-a-ms.pdf", "er": "resources/papers/wbs13-2025-oct-a-er.pdf"}]}];
window.PAPERS_BANK = {"questions": "resources/papers/wbs13-20mark-questions.pdf", "ms": "resources/papers/wbs13-20mark-markscheme.pdf"};
window.REVISION = {"unit": [{"label": "Theme 3 — full revision notes", "icon": "📘", "file": "resources/revision/rev-unit3-theme3-notes.pdf"}, {"label": "Unit 3 — mind maps", "icon": "🧠", "file": "resources/revision/rev-unit3-mind-maps.pdf"}, {"label": "Unit 3 formula sheet", "icon": "🧮", "file": "resources/revision/rev-unit3-formulas.pdf"}, {"label": "Exam structure & answering guide (2026-27)", "icon": "🧭", "file": "resources/revision/rev-ial-answering-guide.pdf"}, {"label": "Exam structure grid — all papers", "icon": "🗂️", "file": "resources/revision/rev-ial-structure-grid.pdf"}], "sections": [{"code": "3.3.1", "title": "Business objectives & strategy", "docs": [{"label": "One-page summary", "icon": "📄", "file": "resources/revision/rev-3-3-1-summary.pdf"}, {"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-1-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-3-3-1-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-3-3-1-exam-patterns.pdf"}]}, {"code": "3.3.2", "title": "Business growth", "docs": [{"label": "One-page summary", "icon": "📄", "file": "resources/revision/rev-3-3-2-summary.pdf"}, {"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-2-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-3-3-2-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-3-3-2-exam-patterns.pdf"}]}, {"code": "3.3.3", "title": "Decision-making techniques", "docs": [{"label": "One-page summary", "icon": "📄", "file": "resources/revision/rev-3-3-3-summary.pdf"}, {"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-3-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-3-3-3-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-3-3-3-exam-patterns.pdf"}, {"label": "Rapid-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-3-rapid-fire.pdf"}]}, {"code": "3.3.4", "title": "Influences on business decisions", "docs": [{"label": "One-page summary", "icon": "📄", "file": "resources/revision/rev-3-3-4-summary.pdf"}, {"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-4-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-3-3-4-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-3-3-4-exam-patterns.pdf"}]}, {"code": "3.3.5", "title": "Assessing competitiveness", "docs": [{"label": "One-page summary", "icon": "📄", "file": "resources/revision/rev-3-3-5-summary.pdf"}, {"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-5-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-3-3-5-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-3-3-5-exam-patterns.pdf"}]}, {"code": "3.3.6", "title": "Managing change", "docs": [{"label": "One-page summary", "icon": "📄", "file": "resources/revision/rev-3-3-6-summary.pdf"}, {"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-3-3-6-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-3-3-6-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-3-3-6-exam-patterns.pdf"}]}]};
window.UNITS = [
 {"id":"1","qual":"IAL","paper":"WBS11","title":"Marketing and people","icon":"\ud83d\udCe3","sub":"Unit 1 (IAS) \u2014 customers and markets, the marketing mix & strategy, managing people, and entrepreneurs & leaders."},
 {"id":"2","qual":"IAL","paper":"WBS12","title":"Managing business activities","icon":"\ud83e\uddEE","sub":"Unit 2 (IAS) \u2014 planning & raising finance, financial planning, managing finance, resource management, and external influences."},
 {"id":"3","qual":"IAL","paper":"WBS13","title":"Business decisions and strategy","icon":"\u265F\ufe0f","sub":"Unit 3 (IA2) \u2014 objectives & strategy, growth, decision-making techniques, influences, competitiveness, and managing change."},
 {"id":"4","qual":"IAL","paper":"WBS14","title":"Global business","icon":"\ud83c\udf0d","sub":"Unit 4 (IA2) \u2014 globalisation, global markets & expansion, global marketing, and multinationals."}
];
window.PAPERS_U1 = [{"year": "2019", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2019-jan-qu.pdf", "ms": "resources/papers/wbs11-2019-jan-ms.pdf", "er": "resources/papers/wbs11-2019-jan-er.pdf"}, {"label": "June", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2019-jun-qu.pdf", "ms": "resources/papers/wbs11-2019-jun-ms.pdf", "er": "resources/papers/wbs11-2019-jun-er.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2019-oct-qu.pdf", "ms": "resources/papers/wbs11-2019-oct-ms.pdf", "er": "resources/papers/wbs11-2019-oct-er.pdf"}]}, {"year": "2020", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2020-jan-qu.pdf", "ms": "resources/papers/wbs11-2020-jan-ms.pdf", "er": "resources/papers/wbs11-2020-jan-er.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2020-oct-qu.pdf", "ms": "resources/papers/wbs11-2020-oct-ms.pdf", "er": "resources/papers/wbs11-2020-oct-er.pdf"}]}, {"year": "2021", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2021-jan-qu.pdf", "ms": "resources/papers/wbs11-2021-jan-ms.pdf", "er": "resources/papers/wbs11-2021-jan-er.pdf"}, {"label": "June", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2021-jun-qu.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2021-oct-qu.pdf", "ms": "resources/papers/wbs11-2021-oct-ms.pdf", "er": "resources/papers/wbs11-2021-oct-er.pdf"}]}, {"year": "2022", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2022-jan-qu.pdf", "ms": "resources/papers/wbs11-2022-jan-ms.pdf", "er": "resources/papers/wbs11-2022-jan-er.pdf"}, {"label": "June", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2022-jun-qu.pdf", "ms": "resources/papers/wbs11-2022-jun-ms.pdf", "er": "resources/papers/wbs11-2022-jun-er.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2022-oct-qu.pdf", "ms": "resources/papers/wbs11-2022-oct-ms.pdf", "er": "resources/papers/wbs11-2022-oct-er.pdf"}]}, {"year": "2023", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2023-jan-qu.pdf", "ms": "resources/papers/wbs11-2023-jan-ms.pdf", "er": "resources/papers/wbs11-2023-jan-er.pdf"}, {"label": "June", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2023-jun-qu.pdf", "ms": "resources/papers/wbs11-2023-jun-ms.pdf", "er": "resources/papers/wbs11-2023-jun-er.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2023-oct-qu.pdf", "ms": "resources/papers/wbs11-2023-oct-ms.pdf", "er": "resources/papers/wbs11-2023-oct-er.pdf"}]}, {"year": "2024", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2024-jan-qu.pdf", "ms": "resources/papers/wbs11-2024-jan-ms.pdf", "er": "resources/papers/wbs11-2024-jan-er.pdf"}, {"label": "June", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2024-jun-qu.pdf", "ms": "resources/papers/wbs11-2024-jun-ms.pdf", "er": "resources/papers/wbs11-2024-jun-er.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2024-oct-qu.pdf", "ms": "resources/papers/wbs11-2024-oct-ms.pdf", "er": "resources/papers/wbs11-2024-oct-er.pdf"}]}, {"year": "2025", "series": [{"label": "January", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2025-jan-qu.pdf", "ms": "resources/papers/wbs11-2025-jan-ms.pdf", "er": "resources/papers/wbs11-2025-jan-er.pdf"}, {"label": "June", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2025-jun-qu.pdf", "ms": "resources/papers/wbs11-2025-jun-ms.pdf", "er": "resources/papers/wbs11-2025-jun-er.pdf"}, {"label": "October", "paper": "WBS11/01", "qu": "resources/papers/wbs11-2025-oct-qu.pdf", "ms": "resources/papers/wbs11-2025-oct-ms.pdf", "er": "resources/papers/wbs11-2025-oct-er.pdf"}, {"label": "October (Paper A)", "paper": "WBS11/01A", "qu": "resources/papers/wbs11-2025-oct-a-qu.pdf", "ms": "resources/papers/wbs11-2025-oct-a-ms.pdf", "er": "resources/papers/wbs11-2025-oct-a-er.pdf"}]}];
window.PAPERS_BY_UNIT = {"1": window.PAPERS_U1, "3": window.PAPERS};
window.PAPERS_BANK_BY_UNIT = {"3": window.PAPERS_BANK};
window.REVISION_U1 = {"unit": [{"label": "Theme 1 — full revision notes", "icon": "📘", "file": "resources/revision/rev-unit1-theme1-notes.pdf"}, {"label": "Unit 1 — mind maps", "icon": "🧠", "file": "resources/revision/rev-unit1-mind-maps.pdf"}, {"label": "50 rapid-fire questions", "icon": "⚡", "file": "resources/revision/rev-unit1-50-rapid-fire.pdf"}, {"label": "Rapid-fire Q&A", "icon": "⚡", "file": "resources/revision/rev-unit1-rapid-fire-qa.pdf"}, {"label": "Rapid-fire by section", "icon": "⚡", "file": "resources/revision/rev-unit1-rapid-fire-by-section.pdf"}, {"label": "Quick-revision question bank", "icon": "✏️", "file": "resources/revision/rev-unit1-quick-revision-questions.pdf"}, {"label": "Knowledge check booklet (2–6 marks)", "icon": "📝", "file": "resources/revision/rev-unit1-knowledge-check.pdf"}, {"label": "Exam structure — one page", "icon": "🧭", "file": "resources/revision/rev-unit1-exam-structure.pdf"}, {"label": "20-mark evaluation chain", "icon": "🏅", "file": "resources/revision/rev-unit1-evaluation-chain.pdf"}, {"label": "Unit 1 formula sheet", "icon": "🧮", "file": "resources/revision/rev-unit1-formulas.pdf"}, {"label": "Exam structure & answering guide (2026-27)", "icon": "🧭", "file": "resources/revision/rev-ial-answering-guide.pdf"}, {"label": "Exam structure grid — all papers", "icon": "🗂️", "file": "resources/revision/rev-ial-structure-grid.pdf"}], "sections": [{"code": "1.3.1", "title": "Meeting customer needs", "docs": [{"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-1-3-1-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-1-3-1-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-1-3-1-exam-patterns.pdf"}]}, {"code": "1.3.2", "title": "The market (demand & supply)", "docs": [{"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-1-3-2-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-1-3-2-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-1-3-2-exam-patterns.pdf"}]}, {"code": "1.3.3", "title": "Marketing mix and strategy", "docs": [{"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-1-3-3-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-1-3-3-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-1-3-3-exam-patterns.pdf"}]}, {"code": "1.3.4", "title": "Managing people", "docs": [{"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-1-3-4-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-1-3-4-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-1-3-4-exam-patterns.pdf"}]}, {"code": "1.3.5", "title": "Entrepreneurs and leaders", "docs": [{"label": "Quick-fire questions", "icon": "⚡", "file": "resources/revision/rev-1-3-5-quickfire.pdf"}, {"label": "Mixed-topic practice", "icon": "✏️", "file": "resources/revision/rev-1-3-5-practice.pdf"}, {"label": "Exam patterns & trends", "icon": "📊", "file": "resources/revision/rev-1-3-5-exam-patterns.pdf"}]}]};
window.REVISION_BY_UNIT = {"1": window.REVISION_U1, "3": window.REVISION};

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
    {marks:4, q:"Using the data, calculate the first two four-quarter moving average figures for Greggs and state what the trend shows. (4)", caseImg:"resources/casestudies/cs-3-3-3-1-greggs-forecast.png",
     model:`First four-quarter total (Y1 Q1–Q4) = 320+360+380+460 = 1520; average = 1520/4 = <b>£380m</b> <span class="pt">1</span>. Second total (Y1 Q2–Y2 Q1) = 360+380+460+340 = 1540; average = 1540/4 = <b>£385m</b> <span class="pt">1</span>. The moving average rises from £380m to £385m <span class="pt">1</span>, showing a gentle <b>upward underlying trend</b> once the seasonal swings are smoothed out <span class="pt">2</span>.`,
     fb:"2 marks calculation, 2 interpretation. Full marks need the trend direction <i>and</i> a developed comment (the seasonality has been removed)."},
    {marks:8, q:"Assess the benefits to Greggs of using quantitative sales forecasting. (8)", caseImg:"resources/casestudies/cs-3-3-3-1-greggs-forecast.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is far better <b>stock and staff planning</b>. <span class="tag t-E">EXPLAIN</span>This is because time-series analysis uses Greggs' past seasonal data to predict demand quarter by quarter. <span class="tag t-C">CHAIN</span>This means Greggs can order the right volume of ingredients and schedule enough staff ahead of its Q4 festive peak; as a result it cuts both waste from over-ordering and lost sales from stockouts, protecting margins and service. <span class="tag t-A">APPLY</span>With Q4 sales reaching roughly £480m versus £340m in Q1, that difference is large enough to plan around. <span class="tag t-J">JUDGE</span>So forecasting is valuable for operational efficiency.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is stronger <b>cash-flow and budgeting</b> decisions. <span class="tag t-E">EXPLAIN</span>Because the trend shows sales drifting upward year on year, Greggs can budget with more confidence. <span class="tag t-C">CHAIN</span>This means it can time investment such as new store openings to match rising demand, improving the chance those stores are profitable quickly.</p>
     <p><span class="tag t-J">HOWEVER</span><b>However</b>, these benefits depend on conditions staying stable. Forecasts built on past data can be badly wrong if an external shock — a cost-of-living squeeze, say — changes consumer spending on food-to-go, so Greggs should treat the forecast as a guide rather than a guarantee.</p>`,
     fb:"8-mark answers must stay <b>balanced even when the command is 'benefits'</b> — the 'however' is what moves it into the top band. Two developed benefits + one genuine limitation."},
    {marks:12, q:"Evaluate whether Greggs should rely on extrapolation to forecast its future sales. (12)", caseImg:"resources/casestudies/cs-3-3-3-1-greggs-forecast.png",
     model:`<p><span class="tag t-P">POINT</span>Extrapolation is useful for Greggs in the short term. <span class="tag t-E">EXPLAIN</span>This is because it has a clear, stable seasonal and upward trend in its past data. <span class="tag t-C">CHAIN</span>A reliable historic pattern means projecting it forward gives a reasonable short-term estimate; this leads to better staffing and stock decisions, which reduces waste and protects profit. <span class="tag t-A">APPLY</span>Greggs' consistent Q4 festive peak (≈£480m) is exactly the kind of repeating pattern extrapolation handles well. <span class="tag t-J">JUDGE</span>So for short, stable horizons it is effective.</p>
     <p><span class="tag t-P">POINT</span>However, relying on extrapolation <i>alone</i> is risky, and Greggs should combine it with market research. <span class="tag t-E">EXPLAIN</span>This is because extrapolation assumes the past simply continues. <span class="tag t-C">CHAIN</span>It ignores PESTLE shocks and changing tastes; this means a sudden event — a recession or a shift toward healthier eating — breaks the trend, so the forecast misleads and Greggs over-orders, raising costs. <span class="tag t-A">APPLY</span>A cost-of-living squeeze cutting discretionary food-to-go spend would not show up in the historic line at all. <span class="tag t-J">JUDGE</span>So it is far less effective in volatile conditions.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> Overall, extrapolation is worth using but should not be relied on alone. <b>Why:</b> because its accuracy falls the further ahead and the more volatile the market. <b>Why (develop):</b> this matters because Greggs operates in a competitive, trend-sensitive sector where one shock can be costly. <b>What (depends on):</b> however, this depends on the time horizon and economic stability — reliable for next quarter, risky for next year.</p>`,
     fb:"12-mark = trimmed 5×5: one developed FOR paragraph, one AGAINST/alternative, then the 4Ws conclusion. Every paragraph <b>must end on a judgement</b>."},
    {marks:20, q:"Evaluate the usefulness of quantitative sales forecasting techniques to a business such as Greggs. (20)", caseImg:"resources/casestudies/cs-3-3-3-1-greggs-forecast.png",
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
  {marks:20, q:"Evaluate whether Live the Adventure Ltd should offer winter activity holidays in Europe or expand its existing operations. Use the sales-forecasting data in your answer. (20)", caseImg:"resources/casestudies/cs-3-3-3-1-live-the-adventure.png",
     model:`<p><span class="tag t-P">FOR WINTER</span>One benefit of offering winter activity holidays in Europe is that it could reduce the seasonal variation Live the Adventure Ltd currently experiences, because the 2015–2017 data shows Q1 and Q4 consistently underperform Q2 and Q3 (Q4 2016 and Q1 2017 had negative variations of −13.75 and −16.25). This means the firm relies heavily on spring and summer for revenue, which leads to volatile income and underused winter staff; therefore skiing and snowboarding holidays could generate off-season income, and as a result stabilise cash flow and improve year-round staff utilisation.</p>
     <p><span class="tag t-J">AGAINST WINTER</span>However, a drawback is the added operational complexity and cost, because winter sports need specialist instructors, costly safety equipment and facilities in remote, colder regions. This leads to higher upfront investment and unfamiliar logistics for a UK firm; therefore it may be stretched beyond its capabilities, and as a result could damage its brand and reduce profitability if the ventures underperform.</p>
     <p><span class="tag t-P">FOR EXPANDING</span>One benefit of expanding existing operations in Shropshire and Nepal is that the current model is already working well, because the 4-quarter moving average rose steadily from 61.25 (2015 Q3) to 78.75 (2017 Q2). This is clear evidence of rising demand; therefore focusing on proven sites supports growth with less risk, and as a result brings economies of scale, stronger loyalty and more consistent returns.</p>
     <p><span class="tag t-J">AGAINST EXPANDING</span>A drawback of expanding only within current sites is that it does not fix the winter underutilisation, because Q1 sales stay flat at £40,000–£60,000 despite overall growth. This leads to low winter activity for staff and facilities; therefore the firm suffers off-peak inefficiencies, and as a result its long-term growth could be more limited than a diversified strategy.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, although winter holidays could reduce seasonal variation, expanding existing operations is more likely to bring long-term success, because the business already has a proven model with steady growth and rising demand, making it lower-risk and more sustainable. Success depends on whether Live the Adventure Ltd can keep scaling efficiently while maintaining quality. It is recommended the business prioritises expanding current sites to build loyalty and economies of scale, while cautiously exploring winter diversification to improve year-round use later.</p>`,
     fb:"Mr. Akram's exemplar (Live the Adventure Ltd): two options each argued and challenged, ending in a recommendation plus 'success depends on'. Note the house chain throughout."},
  {marks:12, q:"Assess the usefulness of quantitative sales forecasting for VoltRide Ltd. (12)", caseImg:"resources/casestudies/cs-3-3-3-1-voltride.png",
     model:`<p><span class="tag t-P">POINT</span>Quantitative forecasting is useful for VoltRide's planning. <span class="tag t-E">EXPLAIN</span>Its moving-average trend is rising, which lets it estimate future sales. <span class="tag t-C">CHAIN</span>This means VoltRide can plan stock, warehouse space, delivery capacity and cash flow; the adjusted 2026 forecast of £15.04m gives a clear numerical starting point for the warehouse decision, and the near-zero average variation shows the trend fits the period reasonably well. <span class="tag t-J">JUDGE</span>So for initial planning it is valuable.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the forecast can mislead. The 2023 and 2024 variations are large (+£1.23m and −£1.23m), so the near-zero average hides big year-to-year swings; interest rates, inflation, a new low-price competitor and technology change can all break the past pattern, and only six years of data exist.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> forecasting is useful for initial, short-term planning. <b>Why:</b> it gives a numerical starting point and a reasonable trend fit. <b>Why (develop):</b> but the large variations and external volatility limit its reliability. <b>What (depends on):</b> VoltRide should combine it with current market research, competitor intelligence and cash-flow analysis before committing to the fixed £0.8m lease.</p>`,
     fb:"VoltRide case. Balanced 12-marker: a developed benefit, a genuine limitation using the ±£1.23m variations, and a 4Ws conclusion that states what the usefulness depends on."},
  {marks:12, q:"Evaluate whether VoltRide should use its adjusted 2026 forecast to lease a larger warehouse and increase delivery capacity. (12)", caseImg:"resources/casestudies/cs-3-3-3-1-voltride.png",
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
    {marks:4, q:"Project A (Kettering) costs £135m and has total net cash inflows of £175m over 5 years. Calculate its Average Rate of Return (ARR) to one decimal place. (4)", caseImg:"resources/casestudies/cs-3-3-3-2-greggs-investment.png",
     model:`Total net return = £175m − £135m = £40m <span class="pt">1</span>. Average annual profit = £40m ÷ 5 = £8m <span class="pt">1</span>. ARR = £8m ÷ £135m × 100 <span class="pt">1</span> = <b>5.9%</b> <span class="pt">1</span>.`,
     fb:"4 marks: formula + total return + average profit + answer. 5.9% = full marks. Note this is well below Greggs' 16.0% ROCE."},
    {marks:8, q:"Assess the usefulness of payback to Greggs when deciding between Project A and Project B. (8)", caseImg:"resources/casestudies/cs-3-3-3-2-greggs-investment.png",
     model:`<p><span class="tag t-P">POINT</span>Payback is useful to Greggs as a quick measure of <b>risk and liquidity</b>. <span class="tag t-E">EXPLAIN</span>It shows how long each project takes to return its initial cost. <span class="tag t-C">CHAIN</span>Project A recovers its £135m in 3 years 2 months versus 3 years 7 months for B, so A returns cash 5 months sooner; this means Greggs' money is at risk for less time, which matters while it is spending heavily (≈£300m capex in 2025) and ROCE has fallen from 20.3% to 16.0%. <span class="tag t-A">APPLY</span>With cash under pressure, faster recovery protects liquidity. <span class="tag t-J">JUDGE</span>So on payback, Project A looks the safer choice.</p>
     <p><span class="tag t-J">HOWEVER</span><b>However</b>, payback ignores all cash flows <i>after</i> the payback point — Project B earns £110m in Years 4–5 against just £45m for A — and it ignores the time value of money, so it badly undervalues B and says nothing about profitability. The 5-month gap is small next to B's far larger total return (£80m vs £40m), so Greggs should treat payback as one input, not the deciding factor.</p>`,
     fb:"8-mark 'assess' must be balanced even though it looks one-sided — the 'however' is essential. Reward use of the figures (3y2m vs 3y7m; £110m vs £45m) and a judgement on when payback is most/least useful."},
    {marks:12, q:"Using NPV and ARR, assess which project Greggs should choose: Project A (Kettering) or Project B (Derby). (12)", caseImg:"resources/casestudies/cs-3-3-3-2-greggs-investment.png",
     model:`<p><span class="tag t-P">POINT</span>On NPV and ARR, Project B is the stronger choice. <span class="tag t-E">EXPLAIN</span>NPV shows value added today and ARR shows profitability relative to cost. <span class="tag t-C">CHAIN</span>B's NPV is +£24.41m against A's +£3.41m (about £21m more), and its ARR is 13.3% versus 5.9%; this means B earns far more for each pound invested and is close to Greggs' ROCE of 16.0%, whereas A's 5.9% would dilute returns. <span class="tag t-A">APPLY</span>B's cash flows grow to £60m by Year 5, which NPV rewards even after discounting. <span class="tag t-J">JUDGE</span>So on both profitability measures, B wins clearly.</p>
     <p><span class="tag t-P">POINT</span>However, B's advantage rests on uncertain, back-loaded forecasts. <span class="tag t-E">EXPLAIN</span>Both NPV and ARR depend on forecast cash flows. <span class="tag t-C">CHAIN</span>B's cash arrives later, from a new automated site, so commissioning delays could hit it; A's front-loaded cash flows are easier to forecast and it pays back 5 months sooner. <span class="tag t-A">APPLY</span>If distribution capacity is the real constraint on Greggs' growth, Kettering's strategic value may matter more than its weak NPV. <span class="tag t-J">JUDGE</span>So A remains defensible on risk and strategy.</p>
     <p><span class="tag t-J">CONCLUSION (4Ws)</span><b>Which:</b> overall Greggs should choose Project B. <b>Why:</b> its NPV is about £21m higher and its ARR more than double A's, so it adds far more value. <b>Why (develop):</b> this matters because Greggs must invest limited capital where returns are highest while ROCE is under pressure. <b>What (depends on):</b> however, this depends on B's ramp-up going to plan — if distribution capacity is what limits new shop openings, Project A becomes the better choice.</p>`,
     fb:"12-mark = trimmed 5×5: one developed FOR, one AGAINST/caution, then the 4Ws conclusion. Reward correct figures and a supported decision that states what it depends on."},
    {marks:20, q:"Evaluate which investment is likely to be the most successful for Greggs: Project A (Kettering) or Project B (Derby). Use investment appraisal and other factors in your answer. (20)", caseImg:"resources/casestudies/cs-3-3-3-2-greggs-investment.png",
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
    {marks:20, q:"Evaluate whether Center Parcs should build a new holiday village or pursue a takeover. Use the decision-tree data in your answer. (20)", caseImg:"resources/casestudies/cs-3-3-3-3-center-parcs.png",
     model:`<p><span class="tag t-P">BUILD · FOR</span>Building a new village offers a net gain of €80m and a lower failure probability of 20%, because it has a higher expected monetary value and a lower chance of loss than the alternative. This means the business is more likely to achieve strong returns with less risk; therefore building is a more secure and profitable choice, and as a result could create greater long-term value for shareholders. In contrast, the takeover gives a net gain of only €33m with a higher 30% failure rate.</p>
     <p><span class="tag t-P">USES OF DTA</span>Decision-tree analysis also helps managers understand the full range of outcomes, because it shows not only profits but risks — the 20% chance of a €120m loss if building fails, or the 30% chance of a €70m loss on the takeover. This means decision-makers can prepare for both success and failure; therefore they can set up contingency plans such as cash reserves, and as a result the business is better protected against shocks.</p>
     <p><span class="tag t-J">LIMITATION</span>However, decision trees can be unreliable, because the figures for success, failure and revenue are only estimates. This means the €780m revenue from the build depends on continued staycation demand; therefore external shocks — another health crisis, poor weather, supply problems or aggressive competitors — could lower actual income, and as a result the probabilities may be misleading.</p>
     <p><span class="tag t-J">OTHER METHODS</span>Other appraisal methods such as payback should also be used, because DTA shows how much a project returns but not how quickly. This means the €100m takeover might pay back faster than the €520m build; therefore combining DTA with payback or NPV gives a fuller picture of return and liquidity.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, building a new village is the stronger option, because it offers the higher expected net gain (€80m), the lower failure risk (20%) and the highest individual return (€780m), fitting Center Parcs' strategy to expand rural locations. Success depends on managing delays, site availability and labour shortages, and on planning approvals and demand. It is therefore recommended that Center Parcs proceeds with the build but uses CPA to plan timelines and payback/NPV to confirm financial viability.</p>`,
     fb:"Mr. Akram's exemplar (Center Parcs). Note it uses the figures, explains what DTA adds, challenges it (estimates / qualitative), brings in other methods, and ends with a recommendation plus 'success depends on'."},
    {marks:20, q:"Evaluate whether Tata Motors should expand its dealership network or relaunch the Nano as a premium car. Use the decision-tree data in your answer. (20)", caseImg:"resources/casestudies/cs-3-3-3-3-tata-nano.png",
     model:`<p><span class="tag t-P">DEALERSHIP · FOR</span>One benefit of expanding the dealership network is that it directly tackles Tata's distribution weakness in rural India, because Extract F states the Nano's poor sales were partly due to a weak dealership network where most of the target market lives. This means rural customers could not easily view or buy the car; therefore more dealerships would boost availability and convenience, and as a result Nano sales could rise — supported by the higher expected value of $2.2m versus $1.4m.</p>
     <p><span class="tag t-J">DEALERSHIP · AGAINST</span>However, a drawback is the time and cost of implementation, because building physical locations across a vast country is logistically and financially demanding. This means the benefits may take years to appear; therefore Tata could keep suffering weak short-term sales, and as a result face cash-flow strain while the network is built.</p>
     <p><span class="tag t-P">RELAUNCH · FOR</span>One benefit of relaunching the Nano as a premium car is that it could fix the brand image, because Extract F notes consumers saw the Nano as "cheap" and undesirable. This means repositioning it as a stylish compact car could attract urban professionals; therefore demand and margins could rise.</p>
     <p><span class="tag t-J">RELAUNCH · AGAINST</span>A drawback is the low 0.2 probability of success, because consumers may reject the Nano in a premium segment given its past reputation. This means even heavy advertising may not shift perceptions; therefore the relaunch could fail despite high spend, and as a result Tata could incur heavy losses and further brand damage.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, expanding the dealership network is the better option, because it has the higher expected return ($2.2m vs $1.4m) and the higher success probability (0.4 vs 0.2). While the relaunch could improve brand image, its low success chance makes it riskier. Success depends on how quickly and affordably Tata can roll out dealerships while sustaining interest in the Nano. It is recommended Tata conducts further analysis, including payback period, to minimise financial risk before deciding.</p>`,
     fb:"Mr. Akram's exemplar (Tata Motors). Both options are argued and challenged, the EV and probability figures are used, and the conclusion recommends with 'success depends on'."},
  {marks:8, q:"Assess the limitations of using decision trees to help noon decide between Option A and Option B. (8)", caseImg:"resources/casestudies/cs-3-3-3-3-noon.png",
     model:`<p><span class="tag t-P">POINT</span>A decision tree shows the options, probabilities and financial results so the net gain of each can be compared — for noon, AED 46.5m for Option B against AED 21m for Option A. <span class="tag t-J">HOWEVER</span>However, the probabilities are only managers' estimates in a fast-changing market where rivals such as Talabat and Careem can respond. <span class="tag t-C">CHAIN</span>This matters because the decision is sensitive: if the chance of strong demand for Option B fell to 0.3, its net gain would drop to AED 8.5m and Option A would become the better option.</p>
     <p>The tree also reduces demand to just two outcomes and gives an average that neither option will actually deliver, and it ignores qualitative factors such as noon's control of the customer experience under Option A or its dependence on ADNOC under Option B. <span class="tag t-J">JUDGE</span>Overall, these limitations mean noon should not rely on the tree alone, but it remains a useful starting point if the probabilities are tested and combined with managers' judgement.</p>`,
     fb:"8-mark 'assess limitations' still needs balance and a judgement. Reward the sensitivity point (0.3 → AED 8.5m) and qualitative factors, applied to noon."},
  {marks:12, q:"Using the case data, assess the usefulness of decision trees to noon when deciding how to expand noon Minutes. (12)", caseImg:"resources/casestudies/cs-3-3-3-3-noon.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that a decision tree puts a number on each option, because it combines probabilities with financial results to give a net gain: AED 46.5m for Option B and AED 21m for Option A. <span class="tag t-C">CHAIN</span>This means noon can see the ADNOC hubs are forecast to earn more than double its own dark stores; therefore managers can justify Option B with evidence rather than opinion, and as a result noon is more likely to make a profitable decision.</p>
     <p><span class="tag t-P">POINT</span>Another benefit is that the tree shows risk as well as return, because every outcome is displayed: Option A has a 40% chance of a AED 105m loss, whereas Option B's worst case is a AED 20m loss. <span class="tag t-C">CHAIN</span>This means noon can see which option is riskier; therefore it can plan contingencies such as phasing the roll-out, and as a result is better protected if demand is low.</p>
     <p><span class="tag t-J">HOWEVER</span>However, decision trees depend on estimates in a fast-changing market. If the probability of strong demand for Option B fell to 0.3, its net gain would fall to AED 8.5m and Option A would be better. The tree also ignores qualitative factors — noon's dependence on an MoU with ADNOC whose terms are not final — and the timing of returns, so noon should not rely on it alone.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, decision trees are useful to noon as a starting point, because they support Option B with clear figures and show each option's risk. Their usefulness depends on how reliable the estimates are, so it is recommended noon tests the probabilities and also uses payback and NPV before the final decision.</p>`,
     fb:"Mr. Akram's exemplar (noon). Two developed benefits using the figures, a limitation built on the sensitivity point, and a conclusion on what usefulness depends on."},
  {marks:20, q:"Evaluate which option noon should choose to extend its 15-minute delivery promise: Option A (new noon-owned dark stores) or Option B (noon Minutes hubs in ADNOC service stations). (20)", caseImg:"resources/casestudies/cs-3-3-3-3-noon.png",
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
    {marks:20, q:"Evaluate the usefulness of critical path analysis to Coca-Cola when launching a new drink. Use the network in your answer. (20)", caseImg:"resources/casestudies/cs-3-3-3-4-coca-cola.png",
     model:`<p><span class="tag t-P">BENEFIT</span>One benefit of CPA is that it shows the minimum time needed to finish the project — here 32 weeks — based on the critical path A → B → D → E → F → G. These tasks must be completed on time, as any delay will delay the whole project, whereas tasks like C have float and can be delayed without affecting the deadline. This leads to better use of staff and resources, as workers can help with more urgent tasks; therefore knowing the critical path helps Coca-Cola plan effectively, and as a result the project is more likely to meet the September launch.</p>
     <p><span class="tag t-P">BENEFIT</span>Another benefit is that CPA motivates teams by showing the full timeline and the most important tasks, because staff can see which activities are critical, such as B (recipe development, 12 weeks), and understand their role. This means greater accountability and focus; therefore CPA helps maintain discipline and encourages collaboration, and as a result the project is more likely to stay on schedule.</p>
     <p><span class="tag t-J">HOWEVER</span>However, CPA carries risks because it relies on estimated durations that might not be realistic. For example, activity E (designing the final recipe, 4 weeks) may overrun due to taste-testing or regulatory issues. This leads to overconfidence in the timeline; therefore if any critical activity is delayed the whole schedule slips, and as a result the drink could miss its September launch, damaging retailer relationships.</p>
     <p><span class="tag t-J">LIMITATION</span>Another drawback is the risk of rushing development, because staff may focus on the 32-week target and cut corners — activity F (distribute final recipe, 2 weeks) might leave too little time for quality control. This means a poorer-quality drink could reach the market; therefore CPA may encourage speed over care, and as a result brand reputation could suffer.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, CPA is valuable to Coca-Cola because it improves scheduling, coordination and deadline awareness — but only if used carefully. Success depends on how accurately time estimates are made and how well managers balance speed with quality. It is recommended Coca-Cola keeps using CPA but combines it with other tools, builds in contingency time for critical activities and does not compromise quality for speed.</p>`,
     fb:"Mr. Akram's exemplar (Coca-Cola). Uses the critical path and specific activities, argues both sides with the house chain, and ends with a recommendation plus 'success depends on'."},
    {marks:20, q:"Evaluate the usefulness of critical path analysis to Tottenham Hotspur when managing the construction of its new stadium. Use the network in your answer. (20)", caseImg:"resources/casestudies/cs-3-3-3-4-tottenham.png",
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
    {marks:8, q:"Assess one qualitative factor KM plc should consider before accepting Amazon's delivery proposal. (8)", caseImg:"resources/casestudies/cs-3-3-3-5-kings-move.png",
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
    {marks:12, q:"Assess whether KM plc should accept Amazon's proposal to make 1,000 guaranteed monthly deliveries at $2 each (variable cost $1.50). (12)", caseImg:"resources/casestudies/cs-3-3-3-5-kings-move.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that KM plc could use spare capacity to generate extra contribution. Amazon's $2 price covers the $1.50 variable cost, leaving $0.50 per delivery and $500 a month from 1,000 deliveries. Otherwise idle lorries and staff would earn revenue towards existing fixed costs; if those stay unchanged, the extra contribution raises profit — so accepting a price below the usual $5 is worthwhile when the alternative is unused capacity.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is more predictable revenue. KM plc's removals income is unsteady because demand follows house purchases; a guaranteed $2,000 a month helps it plan work, schedule staff in quieter periods and forecast receipts — though this depends on Amazon paying promptly, as KM plc must fund fuel and costs first.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the contribution is narrow and could worsen existing customer-service problems. Each delivery earns only $0.50 against $3.50 at the normal price, so a $0.50 rise in variable cost would wipe out the entire $500. Committing resources to Amazon could also delay removals if demand recovers, causing complaints and lost higher-value work.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, KM plc should accept only as a carefully controlled use of genuine spare capacity. The deliveries add contribution and reduce reliance on unpredictable removals, but protecting customer service matters more than $500 a month, since reputational damage could cost more long term. KM plc should confirm full costs, payment terms and service requirements, and negotiate flexibility — or reject if they cannot be met without disruption.</p>`,
     fb:"Mr. Akram's exemplar (KM plc). Uses the $0.50 / $500 contribution, a second benefit, a limitation (narrow margin, service), and a controlled recommendation."},
    {marks:20, q:"Evaluate whether Snowdon Sweets should accept the publisher's special order of one million packs at 38p each (variable cost 30p). (20)", caseImg:"resources/casestudies/cs-3-3-3-5-snowdon.png",
     model:`<p><span class="tag t-P">FOR</span>Snowdon should consider accepting, because the order generates positive contribution. The publisher offers 38p against 30p variable cost, giving 8p per pack and £80,000 across one million packs. If Snowdon has spare capacity and fixed costs stay unchanged, this improves its result versus rejecting the order, helping offset rising sugar prices and the cost of developing herbal lozenges — so it is financially attractive in the short term, provided the £80,000 is not eaten up by extra costs.</p>
     <p><span class="tag t-J">AGAINST</span>However, the order could reduce profit if it displaces normal sales. Normal packs earn 20p (50p − 30p) against only 8p here, so displacing one million normal sales would earn £80,000 instead of £200,000 — sacrificing £120,000 of contribution and possibly delaying existing customers' orders. The decision therefore depends on genuine spare capacity and expected normal demand.</p>
     <p><span class="tag t-P">MARKETING</span>The order could also be a marketing opportunity. One million packs as magazine gifts could introduce the herbal lozenges to health-conscious readers who may later buy at the normal 50p price, earning a higher contribution and improving the return on R&D — though only if the readers match Snowdon's target customers and become repeat buyers.</p>
     <p><span class="tag t-J">RISK</span>Conversely, operational problems create risk. The herbal line already has wastage and low morale, and one million packs are needed within two months; meeting this could need overtime or extra materials, pushing variable cost above 30p and shrinking the £80,000. Free gifts could also weaken the luxury image, reducing willingness to pay premium prices.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Snowdon should accept only if it can use spare capacity without displacing more profitable normal sales or harming quality. The strongest reason is the £80,000 extra contribution and the new-customer exposure, but the narrow 8p margin means extra costs could erode the benefit, and displacement could cost £120,000. The directors should confirm realistic costs, capacity and packaging that protects the brand; if these cannot be met, they should negotiate a higher price, smaller quantity or longer deadline, because positive contribution alone does not prove this is the best use of resources.</p>`,
     fb:"Mr. Akram's exemplar (Snowdon Sweets). Weighs the £80,000 contribution against £120,000 displacement and qualitative risks, with a fully conditional recommendation."},
    {marks:20, q:"Using the figures, evaluate which business (Sepal, Li & Fung or Asda) is best protected financially, and the usefulness of contribution per pair for judging this. (20)", caseImg:"resources/casestudies/cs-3-3-3-5-asda-contribution.png",
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
    {marks:8, q:"Assess two possible trade-offs a business may face between behaving ethically and maximising profit. (8)", caseImg:"resources/casestudies/cs-3-3-4-5-ethics-boohoo-tesco.png",
     model:`<p><span class="tag t-P">POINT</span>One trade-off is between <b>fair sourcing and cost</b>. <span class="tag t-E">EXPLAIN</span>Buying from fairly paid, sustainable suppliers (e.g. Fairtrade) usually costs more than the cheapest alternative. <span class="tag t-C">CHAIN</span>This means ethical sourcing raises variable costs and could reduce profit margins in the short term; however, it protects brand image and supplier relationships, which can lift sales among ethically minded customers and secure supply long term. <span class="tag t-J">JUDGE</span>So the trade-off is short-term cost against long-term reputation.</p>
     <p><span class="tag t-P">POINT</span>A second trade-off is between <b>fair pay/conditions and the wage bill</b>. <span class="tag t-E">EXPLAIN</span>Paying fair wages and investing in good conditions increases costs. <span class="tag t-C">CHAIN</span>This means profit per unit may fall; however, better-treated staff tend to be more productive and loyal, cutting turnover and recruitment costs.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the balance depends on the business and its customers: a premium, values-led brand gains more from ethical choices than a price-led one, so ethics and profit are not always in conflict — over time, acting ethically can protect the profit that cutting corners would eventually destroy.</p>`,
     fb:"8-mark 'assess' needs two developed trade-offs plus a balancing judgement — the point that ethics and profit can align over the long term lifts it to the top band."},
    {marks:20, q:"Evaluate whether the Board of Directors should accept the shareholders' vote against the CEO's €19m pay package at Stellantis. (20)", caseImg:"resources/casestudies/cs-3-3-4-5-stellantis.png",
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
    {marks:10, q:"Assess the likely value of corporate social responsibility to a business such as Cadbury. (10)", caseImg:"resources/casestudies/cs-3-3-4-6-cadbury.png",
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
    {marks:12, q:"Assess how Dunelm's corporate culture contributes to its success. (12)", caseImg:"resources/casestudies/cs-3-3-4-1-dunelm.png",
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
    {marks:12, q:"Assess whether Pure Gym is likely to overcome the difficulties of changing LA Fitness's culture following the takeover. (12)", caseImg:"resources/casestudies/cs-3-3-4-3-puregym.png",
     model:`<p><span class="tag t-P">POINT</span>One reason Pure Gym may overcome the difficulties is that most LA Fitness staff will be made redundant, because Pure Gym's centralised model uses just two employed staff per gym plus self-employed trainers, versus LA Fitness's qualified teams. <span class="tag t-C">CHAIN</span>This means much of the resistance that usually comes from retained employees will not apply, as the workforce is largely replaced; as a result Pure Gym can impose its own systems and values from the outset without retraining or winning over resistant staff.</p>
     <p><span class="tag t-P">POINT</span>A second reason is Pure Gym's experience, because it has rolled out its model across many UK sites. This means it likely has effective systems for managing transitions and training, so it is better prepared to handle the change smoothly.</p>
     <p><span class="tag t-J">HOWEVER</span>However, remaining staff may still resist, because Pure Gym's low-cost, centralised model removes the autonomy LA Fitness staff had. This means insecurity and lower morale, which could raise turnover and disrupt service and membership retention in the short term.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Pure Gym is likely to overcome the cultural difficulties, because most existing staff will not be retained, removing a main source of resistance. Success depends on how well it manages remaining staff and customers through the transition — using communication, participation and support. It is recommended Pure Gym invests in clear communication and support during integration to reduce resistance and protect service quality.</p>`,
     fb:"Mr. Akram's exemplar (Pure Gym). Two reasons it may succeed, a genuine counter, and a conclusion that decides and names change-management strategies."},
    {marks:4, q:"Explain one likely difficulty for Burberry when changing its established culture and brand identity.", caseImg:"resources/casestudies/cs-3-3-4-3-burberry.png",
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
    {marks:8, q:"Assess two possible trade-offs between profits and ethics for David Lloyd. Make sure your answer has application throughout. (8)", caseImg:"resources/casestudies/cs-3-3-4-7-david-lloyd.png",
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
    {marks:12, q:"Assess the likely impact of the treadmill recall on Peloton's internal stakeholders. (12)", caseImg:"resources/casestudies/cs-3-3-4-4-peloton.png",
     model:`<p><span class="tag t-P">POINT</span>One impact on shareholders is a fall in confidence, because the recall of 126,000 treadmills wiped $4.1bn (a 15% fall) off Peloton's value and the CEO admitted the firm was slow to act. <span class="tag t-C">CHAIN</span>This means shareholders may doubt the board's decision-making and sell shares; as a result the share price could fall further, limiting Peloton's ability to raise capital.</p>
     <p><span class="tag t-P">POINT</span>Employees could also be affected, because demand for the treadmill line may fall in the short term. <span class="tag t-C">CHAIN</span>This means staff in product development, customer service or logistics may fear job insecurity, so morale and productivity could drop.</p>
     <p><span class="tag t-J">HOWEVER</span>However, Peloton's share price recovered toward $120 by late July 2021, because it accepted responsibility and demand in the growing online-fitness market stayed strong. This means investor confidence returned, so the impact on internal stakeholders may be short-term rather than lasting.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, shareholders and employees were hit by lost confidence and job insecurity, but the share-price recovery and continued growth suggest the impact is likely short-term. Success depends on whether Peloton learns from the incident. It is recommended it introduces stronger quality control, safety audits and transparent communication to rebuild trust.</p>`,
     fb:"Mr. Akram's exemplar (Peloton). Impact on two internal groups with the figures, a recovery counter-point, and a conclusion on short- vs long-term with a recommendation."},
    {marks:12, q:"Assess the likely impact on Starbucks' internal stakeholders of expanding its Pickup service. (12)", caseImg:"resources/casestudies/cs-3-3-4-4-starbucks.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is improved customer convenience, because customers can pre-order and pay via the app and skip queues. <span class="tag t-C">CHAIN</span>This suits busy city customers (tested in Manhattan and Toronto), so Starbucks attracts time-conscious consumers and lifts satisfaction, strengthening loyalty and repeat purchases.</p>
     <p><span class="tag t-P">POINT</span>It also helps shareholders, because it opens new revenue as earnings had fallen from $4,681.1m to $2,805.5m. <span class="tag t-C">CHAIN</span>This means investors may see a growth opportunity; as a result the share price rose 6% on the announcement, signalling stronger confidence.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the model threatens employees and traditional customers, because less face-to-face service means fewer staff hours and a loss of the friendly in-store experience. This means staff may feel insecure (raising turnover and training costs) and some loyal customers may feel Starbucks has become too transactional, hurting its brand.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the expansion has mixed effects: clear gains for convenience-seeking customers and shareholders, but risks for employees and café-loving customers. Success depends on whether Starbucks can balance digital innovation with service quality and staff morale — so a measured roll-out that protects the in-store experience is recommended.</p>`,
     fb:"Mr. Akram's exemplar (Starbucks). Weighs gains for shareholders/customers against losses for employees/traditional customers, with the figures and a balanced conclusion."}  ,{marks:20, q:"Evaluate whether the Commonwealth Games' Directors should prioritise jobs and investment, or instead meet the needs of all stakeholders. (20)", caseImg:"resources/casestudies/cs-3-3-4-4-commonwealth.png",
     model:`<p><span class="tag t-P">JOBS & INVESTMENT</span>Prioritising jobs and investment can deliver clear, measurable local benefits, because the Games are a major driver of construction, employment and regeneration. <span class="tag t-C">CHAIN</span>This means spending targeted at venues, housing and transport creates jobs and leaves a lasting economic legacy; as a result the host region gains skills, income and infrastructure that outlast the event.</p>
     <p><span class="tag t-J">LIMITATION</span>However, focusing on jobs and investment alone can ignore other groups, because it may push through decisions that harm residents, the environment or taxpayers. This means local communities could face disruption, displacement or long-term debt, so narrow objectives risk a public backlash that damages the Games' reputation.</p>
     <p><span class="tag t-P">ALL STAKEHOLDERS</span>Meeting the needs of all stakeholders balances these interests, because it weighs athletes, residents, taxpayers, sponsors and the environment together. <span class="tag t-C">CHAIN</span>This means decisions are more widely accepted and sustainable; as a result the Games are more likely to deliver a positive, lasting legacy rather than short-term gain for some groups only.</p>
     <p><span class="tag t-J">LIMITATION</span>Yet satisfying every stakeholder is difficult and can slow decisions, because groups' objectives conflict and resources are limited. This means compromise may dilute the economic impact that justified hosting the Games in the first place.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the Directors should pursue a stakeholder approach but keep jobs and investment central, because the economic legacy is the main public justification for the Games while resident, environmental and taxpayer interests protect long-term reputation. Success depends on consulting stakeholders early and setting measurable legacy targets. It is recommended the Directors prioritise jobs and investment within a framework that safeguards the key wider-stakeholder interests. <i>(Model answer written in the Akademy house style — no official mark scheme was supplied for this question.)</i></p>`,
     fb:"Commonwealth Games stakeholder evaluation. Weighs a narrow (jobs/investment) objective against the stakeholder approach, with a supported recommendation. House-style exemplar — replace with the official mark scheme if you have one."}
  ,{marks:20, q:"Morrisons aims to regain market share by either cutting prices further or improving its overall customer experience. Evaluate these two options and recommend which Morrisons' shareholders would prefer. (20)", caseImg:"resources/casestudies/cs-1-3-1-1-morrisons-market-share.png",
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
    {marks:12, q:"Using VGL's financial statements, assess the usefulness of these statements to VGL's stakeholders. (12)", caseImg:"resources/casestudies/cs-3-3-5-1-vgl.png",
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
    {marks:12, q:"Using ratio analysis, assess whether ASOS's survival plan is likely to improve its financial position. (12)", caseImg:"resources/casestudies/cs-3-3-5-2-asos.png",
     model:`<p><span class="tag t-P">POINT</span>One reason the plan could help is that it cuts costs significantly, because ASOS plans to stock fewer products, cut spending and reduce investment in robotic warehouses. <span class="tag t-C">CHAIN</span>This means improved cash flow and lower debt (£153m in 2022); as a result ASOS could strengthen its current ratio, which fell from 1.56 (2021) to 1.49 (2022), improving its ability to meet short-term obligations.</p>
     <p><span class="tag t-P">POINT</span>A second reason is that it targets over-reliance on discounting, because heavy promotions cut the gross margin from 45.4% to 43.6% and turned a £128.4m profit into a £30.8m loss. <span class="tag t-C">CHAIN</span>This means focusing on more profitable lines could lift margins and return ASOS to profit.</p>
     <p><span class="tag t-J">HOWEVER</span>However, cutting stock variety and promotions could reduce sales and damage the brand, because it may make ASOS less attractive in a competitive fashion market where revenue barely grew (£3,910.5m to £3,936.5m). This means cost savings could be offset by falling income and weaker loyalty, so liquidity and margins might not recover.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the plan has clear financial logic given the £30.8m loss and a current ratio of 1.49, but success depends on balancing cost reduction with keeping ASOS attractive to customers. It is recommended ASOS follows the plan while continuing to invest in its most profitable products and its brand.</p>`,
     fb:"Mr. Akram's exemplar (ASOS). Ratio-driven: uses current ratio (1.56→1.49), gross margin (45.4%→43.6%) and the £30.8m loss, with a balanced judgement."},
    {marks:12, q:"Assess the financial performance of Kellogg's using the profitability ratios you can calculate from its income statement. (12)", caseImg:"resources/casestudies/cs-3-3-5-2-kelloggs.png",
     model:`<p><span class="tag t-P">POINT</span>Gross profit margin is a good starting point, because it shows how efficiently revenue becomes profit after cost of sales. <span class="tag t-C">CHAIN</span>With revenue of $12,923m and cost of sales of $7,901m, gross profit is $5,022m, a margin of about 38.9% — Kellogg keeps nearly 39 cents per dollar of sales before other costs, suggesting strong demand or pricing power.</p>
     <p><span class="tag t-P">POINT</span>Operating profit margin gives a fuller view, because it also allows for expenses. <span class="tag t-C">CHAIN</span>With operating profit of $1,946m, the operating margin is about 15.1%, so Kellogg makes ~15 cents of profit per dollar after overheads — evidence it manages costs such as marketing and R&D reasonably well.</p>
     <p><span class="tag t-J">HOWEVER</span>However, only one year's income statement is provided, so we cannot see whether performance is improving or declining, and with no statement of financial position we cannot assess liquidity. This means the assessment is incomplete.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Kellogg's 2017 profitability looks strong on gross and operating margins, but the analysis is limited without a second year or liquidity data. Success in judging it depends on a fuller picture. It is recommended Kellogg's performance be assessed with multi-year data and liquidity ratios such as the current and acid test ratios.</p>`,
     fb:"Mr. Akram's exemplar (Kellogg). Calculates and interprets gross (38.9%) and operating (15.1%) margins, then rightly flags the limitation of one year / no balance sheet."}  ,{marks:12, q:"Using the data and ratio analysis, assess the main financial reasons Thomas Cook ceased trading in 2019. (12)", caseImg:"resources/casestudies/cs-3-3-5-2-thomas-cook.png",
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
    {marks:12, q:"Assess whether giving employees shares is likely to improve productivity at Richer Sounds. (12)", caseImg:"resources/casestudies/cs-3-3-5-3-richer-sounds.png",
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
    {marks:20, q:"Evaluate the extent to which the transformational leadership of Dave Lewis was the main reason for Tesco's improved financial position. (20)", caseImg:"resources/casestudies/cs-3-3-6-1-tesco-dave-lewis.png",
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
    {marks:12, q:"Assess the usefulness of contingency (scenario) planning to a business such as ASOS. (12)", caseImg:"resources/casestudies/cs-3-3-6-2-asos-fire.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that it helps ASOS prepare for unexpected events and reduce disruption, because it can anticipate risks such as warehouse fires and prepare alternative plans. <span class="tag t-C">CHAIN</span>This means a faster, more organised response: when the Berlin warehouse was damaged in 2017, ASOS switched to fulfilling orders from Barnsley, so operations continued, revenue loss was limited and customers stayed satisfied.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is maintaining investor confidence, because quick action after a crisis signals strong management. <span class="tag t-C">CHAIN</span>This means investors are reassured the business can cope; although ASOS's share price dipped after the fire, it quickly recovered.</p>
     <p><span class="tag t-J">HOWEVER</span>However, contingency planning cannot eliminate all loss, because some events still cause damage even when well managed. ASOS lost £6m of stock in the Berlin fire — the plan avoided service disruption by rerouting orders but could not prevent the direct financial hit, so planning only reduces, not removes, risk.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, scenario planning is clearly useful to ASOS — it limited disruption, protected online sales and reassured investors — but should be part of a wider risk-management system, not relied on alone. Its success depends on how well ASOS identifies the most likely and most damaging risks. It is recommended ASOS keeps using it for high-impact, high-likelihood risks but combines it with insurance, flexible operations and safety measures.</p>`,
     fb:"Mr. Akram's exemplar (ASOS). Uses the Berlin/Barnsley fires and £6m figure; two benefits, a 'reduces not removes risk' limitation, and a recommendation."},
    {marks:12, q:"Assess the benefits of succession planning for a business such as Alibaba. (12)", caseImg:"resources/casestudies/cs-3-3-6-2-alibaba.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is leadership continuity, because a succession plan prepares an internal candidate already familiar with the company — Daniel Zhang, who was CEO before taking over as chairman from Jack Ma. <span class="tag t-C">CHAIN</span>This means the handover was predictable and controlled, so Alibaba kept operating effectively without denting investor confidence or staff morale.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is protecting morale, because an internal successor is more likely to continue the founder's vision. <span class="tag t-C">CHAIN</span>This means employees feel confident about the direction and are less likely to resist change, supporting a smoother transition.</p>
     <p><span class="tag t-J">HOWEVER</span>However, succession planning cannot eliminate external threats such as a trade war or recession, and it does not guarantee the successor will inspire the same confidence as a founder. So it must sit alongside wider risk management and ongoing leadership development.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, succession planning reduces risk for Alibaba by ensuring stable leadership transitions, but its value depends on developing successors well and combining it with broader risk strategies. It is recommended Alibaba supports succession with ongoing leadership development and performance review.</p>`,
     fb:"Mr. Akram's exemplar (Alibaba). Jack Ma → Daniel Zhang continuity and morale benefits, with external-threat and successor-calibre limitations."},
    {marks:12, q:"Assess the likely benefits of contingency planning for a business such as IKEA. (12)", caseImg:"resources/casestudies/cs-3-3-6-2-ikea.png",
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
    {marks:4, q:"Explain one benefit to Morrisons of having a mission statement. (4)", caseImg:"resources/casestudies/cs-3-3-1-1-morrisons-mission.png",
     model:`Morrisons' mission can help create a strong brand image <span class="pt">1</span>. This is because it highlights values such as being human, ethical and ecological and being "one team" <span class="pt">2</span>. This appeals to customers who care about sustainability and responsible business <span class="pt">3</span>, so Morrisons differentiates itself from price-focused rivals like Aldi and Lidl and attracts ethically conscious shoppers <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Morrisons). Note the Year-2 rule: mark 1 is for identifying a benefit, not a definition. Two developed points with application."},
    {marks:12, q:"Assess the likely importance of its mission statement to a business such as Patagonia. (12)", caseImg:"resources/casestudies/cs-3-3-1-1-patagonia.png",
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
  business:"Case studies: McDonald's, Lush, Five Guys, Coca-Cola, Under Armour & Detox",
 status:"live",
  notes:[
    {h:"Strategic vs tactical decisions", html:`
      <p><b>Strategic decisions</b> are major, long-term choices made by senior management that set the direction of the whole business (e.g. entering a new market, a major product launch). They are costly and hard to reverse.</p>
      <p><b>Tactical decisions</b> are shorter-term, smaller choices (often by middle management) that put the strategy into action (e.g. a seasonal promotion). They are easier and cheaper to reverse.</p>`},
    {h:"Porter's Strategic Matrix (generic strategies)", html:`
      <p>In 1979 Michael Porter argued a business needs a clear <b>competitive strategy</b> to gain a competitive advantage. It must choose its <b>source of advantage</b> (lower cost vs differentiation) and its <b>scope</b> (a broad/mass market vs a narrow niche) — giving four generic strategies:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 300" style="min-width:420px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)">COMPETITIVE ADVANTAGE</text>
        <text x="180" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Lower cost</text>
        <text x="392" y="38" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Differentiation</text>
        <text x="18" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" transform="rotate(-90 18 150)">SCOPE</text>
        <text x="50" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Broad</text>
        <text x="50" y="222" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Narrow</text>
        <rect x="80" y="48" width="200" height="112" rx="6" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="290" y="48" width="205" height="112" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)" stroke-width="2"/>
        <rect x="80" y="170" width="200" height="112" rx="6" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="290" y="170" width="205" height="112" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)" stroke-width="2"/>
        <text x="180" y="98" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Cost</text>
        <text x="180" y="116" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">leadership</text>
        <text x="180" y="138" text-anchor="middle" font-size="10" fill="var(--muted)">Ryanair · Walmart · Amazon</text>
        <text x="392" y="98" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Differentiation</text>
        <text x="392" y="120" text-anchor="middle" font-size="10" fill="var(--muted)">Apple · Mercedes · Nike</text>
        <text x="180" y="218" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Cost focus</text>
        <text x="180" y="240" text-anchor="middle" font-size="10" fill="var(--muted)">budget gym · resort excursions</text>
        <text x="392" y="212" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Differentiation</text>
        <text x="392" y="230" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">focus</text>
        <text x="392" y="250" text-anchor="middle" font-size="10" fill="var(--muted)">Rolex · Aston Martin · Tyrrells</text>
      </svg>
      </div>
      <ul>
        <li><b>Cost leadership</b> — making products for a <b>broad (mass) market at the lowest cost</b>, so the firm can win on price while protecting margins. E.g. Ryanair, Walmart, Amazon.</li>
        <li><b>Differentiation</b> — a <b>unique product in a broad market</b> whose USP adds value, so the firm can charge a premium rather than compete on price. E.g. Apple, Mercedes, Nike.</li>
        <li><b>Cost focus</b> — serving a <b>narrow segment/niche at low cost</b>. E.g. a local budget gym, a low-cost excursion company in a holiday resort.</li>
        <li><b>Differentiation focus</b> — a <b>unique product for a narrow niche</b>, with a USP that adds value within that segment. E.g. Rolex and Aston Martin (luxury), Tyrrells (premium crisps).</li>
      </ul>
      <p>Porter warned against being <b>"stuck in the middle"</b> — a firm with no clear strategy, neither the cheapest nor distinctive enough, which fails to attract a defined customer base and loses competitiveness. (<b>Ansoff's Matrix</b> — penetration, market development, product development, diversification — is the other key framework, below.)</p>`},
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
    {h:"Portfolio analysis — the Boston Matrix", html:`
      <p><b>Portfolio analysis</b> uses the <b>Boston (BCG) Matrix</b> to assess a firm's range of products on two axes — market growth and relative market share:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 300" style="min-width:420px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <text x="260" y="18" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)">MARKET SHARE</text>
        <text x="150" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">High</text>
        <text x="385" y="36" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Low</text>
        <text x="18" y="150" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" transform="rotate(-90 18 150)">MARKET GROWTH</text>
        <text x="48" y="100" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">High</text>
        <text x="48" y="220" text-anchor="middle" font-size="12" font-weight="700" fill="var(--ink)">Low</text>
        <rect x="75" y="46" width="205" height="112" rx="6" fill="rgba(245,166,35,.14)" stroke="var(--amber)" stroke-width="2"/>
        <rect x="290" y="46" width="205" height="112" rx="6" fill="rgba(27,79,214,.12)" stroke="#1b4fd6" stroke-width="2"/>
        <rect x="75" y="168" width="205" height="112" rx="6" fill="rgba(15,163,127,.14)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="290" y="168" width="205" height="112" rx="6" fill="rgba(201,42,42,.12)" stroke="#c92a2a" stroke-width="2"/>
        <text x="177" y="98" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">★ Star</text>
        <text x="177" y="120" text-anchor="middle" font-size="10.5" fill="var(--muted)">high growth, high share — invest</text>
        <text x="392" y="98" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">? Question mark</text>
        <text x="392" y="120" text-anchor="middle" font-size="10.5" fill="var(--muted)">high growth, low share — decide</text>
        <text x="177" y="220" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">🐄 Cash cow</text>
        <text x="177" y="242" text-anchor="middle" font-size="10.5" fill="var(--muted)">low growth, high share — harvest</text>
        <text x="392" y="220" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">🐕 Dog</text>
        <text x="392" y="242" text-anchor="middle" font-size="10.5" fill="var(--muted)">low growth, low share — divest</text>
      </svg>
      </div>
      <ul>
        <li><b>Stars</b> — high growth, high share; need heavy investment, later become cash cows.</li>
        <li><b>Cash cows</b> — low growth, high share; mature, profitable, fund the stars.</li>
        <li><b>Question marks</b> — high growth, low share; potential but need investment — back them or drop them.</li>
        <li><b>Dogs</b> — low growth, low share; rarely worth investing in, usually sold or closed.</li>
      </ul>
      <p>The aim is a <b>balanced portfolio</b> — cash cows funding stars and selected question marks — guiding invest / hold / harvest / divest decisions. But it judges products only on share and growth, ignoring links between products (e.g. a "dog" service that drives loyalty), so use it alongside other tools.</p>`},
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
    {term:"Differentiation (Porter)", marks:2, body:`A strategy of offering a distinctive product that stands out from rivals in a broad market <span class="pt">1</span>, allowing a business to attract customers and often charge a premium rather than compete on price <span class="pt">2</span>.`},
    {term:"Cost focus (Porter)", marks:2, body:`A strategy of being the lowest-cost producer within a narrow market segment or niche <span class="pt">1</span>, gaining advantage by serving that niche more cheaply than broad-market rivals <span class="pt">2</span>.`},
    {term:"Differentiation focus (Porter)", marks:2, body:`A strategy of offering a distinctive product to a narrow niche segment <span class="pt">1</span>, where the USP adds value and allows a premium price within that segment, e.g. Rolex <span class="pt">2</span>.`},
    {term:"Stuck in the middle", marks:2, body:`Where a business fails to commit clearly to either cost leadership or differentiation <span class="pt">1</span>, so it has no clear competitive advantage and struggles to attract a defined customer base <span class="pt">2</span>.`},
    {term:"Market penetration", marks:2, body:`A growth strategy of selling more existing products into existing markets <span class="pt">1</span>; it is the lowest-risk option because the business already knows both the product and the market <span class="pt">2</span>.`},
    {term:"Market development", marks:2, body:`A growth strategy of selling existing products into new markets <span class="pt">1</span>, such as a new country or customer segment; riskier than penetration because the market is unfamiliar <span class="pt">2</span>.`},
    {term:"Product development", marks:2, body:`A growth strategy of launching new products into existing markets <span class="pt">1</span>; it uses the firm's known customer base but carries the risk and cost of developing new products <span class="pt">2</span>.`},
    {term:"Diversification", marks:2, body:`A growth strategy of selling new products in new markets <span class="pt">1</span>; it is the highest-risk Ansoff option because both the product and the market are unfamiliar <span class="pt">2</span>.`},
    {term:"Portfolio analysis", marks:2, body:`Assessing the range of products a business sells, using the Boston Matrix <span class="pt">1</span>, to decide where to invest, hold, harvest or divest across the portfolio <span class="pt">2</span>.`},
    {term:"Cash cow", marks:2, body:`A product with high market share in a low-growth market <span class="pt">1</span>; it is mature and profitable with little need for investment, generating cash to fund stars <span class="pt">2</span>.`},
    {term:"Star (Boston Matrix)", marks:2, body:`A product with high market share in a high-growth market <span class="pt">1</span>; it needs heavy investment to sustain growth and should later become a cash cow <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Distinguish between a strategic and a tactical decision.",
     model:`A strategic decision is a major, long-term choice by senior management that sets the whole firm's direction and is hard to reverse <span class="pt">1</span>; a tactical decision is a shorter-term, smaller choice that implements the strategy and is easier to reverse <span class="pt">2</span>.`,
     fb:"Two linked points contrasting scale, timescale and reversibility."},
    {marks:4, q:"A supermarket chain lowers prices across all regions to undercut competitors. Identify the Porter strategy and explain one resource implication.",
     model:`This is a <b>cost-leadership</b> strategy (low cost, broad market) <span class="pt">1</span>. To sustain the lower prices it must cut costs elsewhere — a financial-resource effect <span class="pt">2</span>: tighter budgeting and investment in efficiency (e.g. automation) <span class="pt">3</span>, so margins are protected even as prices fall <span class="pt">4</span>.`,
     fb:"Identify cost leadership, then link it to a resource (financial/physical) consequence."},
    {marks:4, q:"Explain, using Porter's Strategic Matrix, how a luxury watchmaker such as Rolex gains a competitive advantage.",
     model:`Rolex uses a <b>differentiation focus</b> strategy — a unique product aimed at a narrow, premium niche <span class="pt">1</span>. This is because its watches carry a strong USP of craftsmanship, status and exclusivity <span class="pt">2</span>. As a result it can charge very high premium prices to loyal luxury buyers <span class="pt">3</span>, gaining an advantage rivals cannot easily copy and avoiding price competition with mass-market brands <span class="pt">4</span>.`,
     fb:"Name the quadrant (differentiation focus) and link the USP/niche to premium pricing."}
  ],
  caseStudy:{
    business:"McDonald's, Lush, Five Guys, Coca-Cola, Under Armour & Detox",
    intro:`<p>Decisions and how they hit a firm's resources and competitive strategy.</p>
      <ul>
        <li><b>McDonald's — plant-based launch (physical):</b> the PLT burger needs separate grills, fridges and utensils to avoid contamination, so capital spend and kitchen-layout changes rise — though its existing vegan infrastructure in Germany/Sweden softens the cost.</li>
        <li><b>Lush — quitting social media (financial):</b> closing its accounts gave up 10.6m followers, risking a ~£10m short-term sales loss and higher-cost marketing alternatives — but may deepen ethical brand loyalty long term.</li>
        <li><b>Five Guys — no timers/machines (human):</b> staff judge food by sight, aroma and texture, needing more skilled, well-trained employees, so recruitment and training costs rise.</li>
        <li><b>Coca-Cola — "Spiced" launch:</b> developed in just seven weeks to catch the bold-flavour trend and appeal to Gen Z — showing innovation, but risking alienating classic-taste loyalists and diluting the brand.</li>
        <li><b>Under Armour — Porter's strategies:</b> cutting jobs, closing stores and shortening delivery times points to <b>cost leadership</b>, yet its Recovery range (infrared technology) shows <b>differentiation</b> — the risk is being "stuck in the middle" against Nike and Adidas.</li>
        <li><b>Detox Clothes — declining footfall:</b> a West-London designer brand weighing three options — discounting (cost leadership), expanding specialist lines (differentiation) or staying with unique women's fashion (differentiation focus).</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Using Porter's Strategic Matrix, assess how cost leadership could help Under Armour compete with rivals such as Nike and Adidas. (8)", caseImg:"resources/casestudies/cs-3-3-1-2-under-armour.png",
     model:`<p><span class="tag t-P">POINT</span>One way is operating more efficiently, because Under Armour is cutting costs by removing jobs, closing underperforming stores and shortening delivery times. <span class="tag t-C">CHAIN</span>This reduces expenses and improves margins, so it can keep prices low and appeal to cost-conscious consumers — becoming more price-competitive against larger rivals like Nike and Adidas and potentially winning market share.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is resilience in a downturn, because customers cut spending on premium sportswear in tough times. <span class="tag t-C">CHAIN</span>Lower-priced brands are more likely to retain those customers, so cost leadership helps Under Armour stay profitable when demand is weak.</p>
     <p><span class="tag t-J">HOWEVER</span>However, relying only on cost leadership could be risky, because Under Armour's advantage comes partly from differentiation — e.g. its Recovery range with infrared technology that customers will pay more for. Competing on price against giants with far greater economies of scale may leave it "stuck in the middle", so in the long term combining cost efficiency with differentiation is more likely to keep it competitive.</p>`,
     fb:"Mr. Akram's exemplar (Under Armour, 8). Two cost-leadership benefits with application, balanced by a 'stuck in the middle' limitation — the balance lifts it to the top band."},
    {marks:12, q:"Assess how Porter's Strategic Matrix could help Detox Clothes choose between its three options (discounting, more specialist products, or focusing on unique women's fashion). (12)", caseImg:"resources/casestudies/cs-3-3-1-2-detox.png",
     model:`<p><span class="tag t-P">COST LEADERSHIP</span>Option 1, discounting, is a <b>cost-leadership</b> move, because lower prices could attract a broader, cost-conscious customer base. <span class="tag t-C">CHAIN</span>This may boost volume sales in the short term and help Detox compete with high-street brands facing the same declining footfall in West London. <span class="tag t-J">HOWEVER</span>However, designer fashion relies on image and exclusivity, so cutting prices could damage perceived value and the ability to charge premiums later — risky long term.</p>
     <p><span class="tag t-P">DIFFERENTIATION</span>Option 2, expanding specialist lines, reflects a <b>differentiation</b> strategy — unique or limited-edition women's clothing customers can't find elsewhere. <span class="tag t-C">CHAIN</span>This reinforces premium positioning, supports higher prices and builds loyalty, though it needs more investment in design, marketing and supply chains and risks the new designs not appealing.</p>
     <p><span class="tag t-P">DIFFERENTIATION FOCUS</span>Option 3, staying with unique women's fashion, is a <b>differentiation focus</b> on a niche. <span class="tag t-C">CHAIN</span>It fits Detox's original vision and core customers, building expertise and a strong identity — but could limit growth if the niche is too small or tastes shift.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Porter's matrix is a useful tool because it maps clear strategic routes back to competitive advantage. But the right choice depends on Detox's resources and brand: discounting conflicts with a designer identity, so a differentiation or focus route is likely to protect long-term value better than competing on price.</p>`,
     fb:"Mr. Akram's exemplar (Detox, 12). Maps the three options onto cost leadership / differentiation / differentiation focus, balances each, and judges which fits a designer brand."},
    {marks:20, q:"Evaluate the strategies Under Armour could use, under Porter's Strategic Matrix, to gain a competitive advantage (differentiation vs differentiation focus). (20)", caseImg:"resources/casestudies/cs-3-3-1-2-under-armour.png",
     model:`<p><span class="tag t-P">DIFFERENTIATION</span>One strategy is <b>differentiation</b>, as Under Armour already positions itself as a high-performance brand built on innovation such as compression wear and moisture-wicking fabrics. <span class="tag t-E">EXPLAIN</span>By developing smart textiles and connected fitness apps it can justify premium pricing and attract serious athletes who prioritise quality. <span class="tag t-C">CHAIN</span>This could also support global growth through region-specific products (e.g. breathable fabrics for warmer climates) and partnerships with elite athletes that reinforce exclusivity. <span class="tag t-A">APPLY</span>That strengthens brand appeal in new markets while reducing price sensitivity. <span class="tag t-J">JUDGE</span>So differentiation plays to Under Armour's core identity.</p>
     <p><span class="tag t-J">LIMITATION</span>However, differentiation is costly: competing with Nike and Adidas requires heavy, sustained investment in innovation and marketing, and Under Armour lacks their economies of scale. If consumers don't see enough added value it could end up "stuck in the middle" — too expensive to win on price, not distinct enough to win on uniqueness. Past moves into broad lifestyle fashion diluted the brand, showing the danger of overstretching.</p>
     <p><span class="tag t-P">DIFFERENTIATION FOCUS</span>An alternative is <b>differentiation focus</b> — targeting niches with specific needs such as elite training gear, military performance clothing or collegiate/youth athletic programmes. <span class="tag t-C">CHAIN</span>Serving loyal segments with tailored innovation lets Under Armour charge higher prices and face less direct competition from the giants. <span class="tag t-A">APPLY</span>Dominating collegiate sportswear or professional training kits, where function beats fashion, builds a strong reputation within specialist markets. <span class="tag t-J">JUDGE</span>So focus reduces the head-on battle with Nike and Adidas.</p>
     <p><span class="tag t-J">LIMITATION</span>But a narrow focus caps the size of the prize — niche markets are smaller, so growth may be limited, and heavy reliance on a few segments is risky if their demand falls.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Under Armour should lead with differentiation around its proven performance innovation, but apply it through a focus on defensible niches rather than competing broadly against far larger rivals. Success depends on sustaining genuine product innovation and resisting brand dilution; a disciplined, focused differentiation strategy is therefore recommended over trying to out-market Nike and Adidas across the mass market.</p>`,
     fb:"Mr. Akram's exemplar (Under Armour, 20). Full 5×5 PECAN evaluation of two Porter strategies, each challenged (including 'stuck in the middle'), ending in a focused-differentiation recommendation."},
    {marks:20, q:"Evaluate whether SHEIN should continue to rely on a cost-leadership strategy under Porter's Strategic Matrix. (20)", caseImg:"resources/casestudies/cs-3-3-1-2-shein.png",
     model:`<p><span class="tag t-P">COST LEADERSHIP</span>One argument for continuing is that cost leadership is the core of SHEIN's model — a global, online-only fast-fashion brand selling at very low prices. <span class="tag t-E">EXPLAIN</span>Operating online-only avoids store costs, and an agile, data-driven supply chain lets it produce in high volume cheaply. <span class="tag t-C">CHAIN</span>This keeps prices below rivals and, powered by social media, drives huge demand among price-sensitive Gen Z shoppers. <span class="tag t-A">APPLY</span>Against Zara and H&M, SHEIN wins clearly on price and speed to trend. <span class="tag t-J">JUDGE</span>So cost leadership is what built its competitive advantage.</p>
     <p><span class="tag t-J">LIMITATION</span>However, competing only on cost is increasingly risky, because SHEIN faces growing pressure over ethics, quality and sustainability and holds the lowest sustainability rating of the three. As regulators and consumers turn against throwaway fashion, a pure low-cost image could become a liability and invite legal or reputational damage.</p>
     <p><span class="tag t-P">DIFFERENTIATION SHIFT</span>An alternative is to move towards differentiation by investing in sustainability, quality and faster, more reliable delivery. <span class="tag t-C">CHAIN</span>This could protect SHEIN from ethical criticism, justify slightly higher prices and build longer-term loyalty rather than one-off bargain purchases. <span class="tag t-A">APPLY</span>It would also close the gap on Zara/H&M, whose delivery and ethics currently score better. <span class="tag t-J">JUDGE</span>So some differentiation reduces SHEIN's biggest strategic risk.</p>
     <p><span class="tag t-J">LIMITATION</span>But abandoning low cost is dangerous: SHEIN's entire appeal and scale rest on rock-bottom prices, and raising costs to improve sustainability could push away the price-driven Gen Z customers it depends on — risking being "stuck in the middle".</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, SHEIN should keep cost leadership as its foundation but gradually layer in targeted sustainability and quality improvements, rather than a full switch. Success depends on protecting its price advantage while defusing ethical and regulatory threats; a phased "cost leadership plus visible sustainability gains" approach is therefore recommended over competing on price alone.</p>`,
     fb:"Mr. Akram's exemplar (SHEIN, 20). Full 5×5 PECAN evaluation of staying cost-leader vs shifting toward differentiation, using the Zara/H&M and sustainability-rating evidence, ending in a phased recommendation."}
  ],
  resources:[
    {label:"Porter's Strategic Matrix — lesson notes (PDF)", file:"resources/3-3-1-2-porters-strategic-matrix.pdf"},
    {label:"Effect of strategic & tactical decisions on resources — lesson notes (PDF)", file:"resources/3-3-1-2-strategic-tactical-resources.pdf"},
    {label:"Ansoff’s Matrix — lesson notes (PDF)", file:"resources/3-3-1-2-ansoff-matrix.pdf"},
    {label:"Portfolio analysis / Boston Matrix — lesson notes (PDF)", file:"resources/3-3-1-2-boston-matrix.pdf"}
  ]
},
{
  code:"3.3.1.3", subtheme:"3.3.1", title:"SWOT analysis",
  business:"Case studies: a local Chinese restaurant, Bluebells B&B & Amazon", status:"live",
  notes:[
    {h:"What is SWOT analysis?", html:`
      <p><b>SWOT analysis</b> is a strategic-planning tool that helps a business identify its <b>S</b>trengths, <b>W</b>eaknesses, <b>O</b>pportunities and <b>T</b>hreats before choosing a strategy. It splits into two halves:</p>
      <ul>
        <li><b>Strengths &amp; Weaknesses — internal</b> factors the business can control.</li>
        <li><b>Opportunities &amp; Threats — external</b> factors it cannot control (often found using <b>PESTLE</b>).</li>
      </ul>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 300" style="min-width:420px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <text x="150" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)">HELPFUL</text>
        <text x="385" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)">HARMFUL</text>
        <text x="18" y="100" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" transform="rotate(-90 18 100)">INTERNAL</text>
        <text x="18" y="225" text-anchor="middle" font-size="12" font-weight="800" fill="var(--muted)" transform="rotate(-90 18 225)">EXTERNAL</text>
        <rect x="40" y="30" width="230" height="120" rx="8" fill="rgba(15,163,127,.14)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="280" y="30" width="230" height="120" rx="8" fill="rgba(201,42,42,.12)" stroke="#c92a2a" stroke-width="2"/>
        <rect x="40" y="162" width="230" height="120" rx="8" fill="rgba(15,163,127,.14)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="280" y="162" width="230" height="120" rx="8" fill="rgba(201,42,42,.12)" stroke="#c92a2a" stroke-width="2"/>
        <text x="155" y="78" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">Strengths</text>
        <text x="155" y="100" text-anchor="middle" font-size="10.5" fill="var(--muted)">strong brand, loyal</text>
        <text x="155" y="116" text-anchor="middle" font-size="10.5" fill="var(--muted)">customers, finances</text>
        <text x="395" y="78" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">Weaknesses</text>
        <text x="395" y="100" text-anchor="middle" font-size="10.5" fill="var(--muted)">high debt, weak brand,</text>
        <text x="395" y="116" text-anchor="middle" font-size="10.5" fill="var(--muted)">poor supply chain</text>
        <text x="155" y="210" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">Opportunities</text>
        <text x="155" y="232" text-anchor="middle" font-size="10.5" fill="var(--muted)">new markets, tariff</text>
        <text x="155" y="248" text-anchor="middle" font-size="10.5" fill="var(--muted)">cuts, new tech</text>
        <text x="395" y="210" text-anchor="middle" font-size="16" font-weight="800" fill="var(--ink)">Threats</text>
        <text x="395" y="232" text-anchor="middle" font-size="10.5" fill="var(--muted)">rising costs, new</text>
        <text x="395" y="248" text-anchor="middle" font-size="10.5" fill="var(--muted)">rivals, tight labour</text>
      </svg>
      </div>
      <ul>
        <li><b>Strengths</b> (internal) — what the firm excels at: a strong brand, loyal customers, a healthy financial position, a skilled workforce, unique technology.</li>
        <li><b>Weaknesses</b> (internal) — what holds it back: a weak brand, high labour turnover, high debt, a poor supply chain, lack of capital.</li>
        <li><b>Opportunities</b> (external) — favourable outside factors: e.g. a country cutting tariffs lets a car maker export into a new market, lifting sales and share.</li>
        <li><b>Threats</b> (external) — harmful outside factors: e.g. a drought threatens a wheat producer; rising material costs, more competition, tight labour supply.</li>
      </ul>`},
    {h:"Worked example — a local Chinese restaurant", html:`
      <p>A restaurant sets the SMART objective: <b>increase profits by 20% by 31 Dec 2025</b>. It is weighing four strategies: (1) spend more on promotion, (2) raise menu prices, (3) switch to cheaper suppliers, (4) cut the workforce. A SWOT helps it choose.</p>
      <table class="datatable">
        <tr><th>Strengths</th><th>Weaknesses</th></tr>
        <tr><td>Good high-street location; strong finances; reputation for high-quality food.</td><td>Only 50% capacity Mon–Thu; limited promotion; already at 100% capacity Fri–Sun.</td></tr>
        <tr><th>Opportunities</th><th>Threats</th></tr>
        <tr><td>The only other Chinese restaurant in the area is closing.</td><td>Many other restaurants on the high street (fish & chips, Mexican, Indian).</td></tr>
      </table>
      <p>Reading the SWOT: with spare midweek capacity, a closing rival and a quality reputation but weak promotion, <b>investing in promotion (strategy 1)</b> looks strongest — it fills quiet midweek tables and captures the closing rival's customers. Raising prices or cutting quality/staff risks the restaurant's core strength (its reputation), so those are rejected.</p>`},
    {h:"Using SWOT — and its limits", html:`
      <p>SWOT turns scattered information into a structure managers can act on, linking <b>internal capability</b> to <b>external change</b> so strategic and tactical decisions are evidence-based. Good practice is to <b>match</b> strengths to opportunities and plan to defend against threats.</p>
      <p>But it has real limits:</p>
      <ul>
        <li>It is only a <b>snapshot</b> — the environment keeps changing, so it dates quickly.</li>
        <li>It can be <b>subjective</b>, relying on opinion rather than hard data, and may just produce long unranked lists.</li>
        <li><b>Small businesses</b> often struggle to use it well — limited time, expertise and market data mean owners rely on personal judgement rather than objective evidence.</li>
      </ul>
      <p>So SWOT is best used <b>regularly</b> and <b>alongside other tools</b> (e.g. PESTLE for the external side), not on its own.</p>`}
  ],
  definitions:[
    {term:"SWOT analysis", marks:2, body:`A strategic-planning tool that identifies a business's internal strengths and weaknesses and its external opportunities and threats <span class="pt">1</span>; it is used to inform strategy and decision-making <span class="pt">2</span>.`},
    {term:"Strength (SWOT)", marks:2, body:`An internal factor a business does well that sets it apart from rivals <span class="pt">1</span>, such as a strong brand or loyal customer base, which it can build on <span class="pt">2</span>.`},
    {term:"Weakness (SWOT)", marks:2, body:`An internal factor that stops a business performing at its best <span class="pt">1</span>, such as high debt or a weak supply chain, which it needs to improve to stay competitive <span class="pt">2</span>.`},
    {term:"Opportunity (SWOT)", marks:2, body:`A favourable external factor a business could exploit <span class="pt">1</span>, such as a new market opening up or a change in technology, giving it a potential advantage <span class="pt">2</span>.`},
    {term:"Threat (SWOT)", marks:2, body:`An unfavourable external factor that could harm a business <span class="pt">1</span>, such as rising costs or new competition, which it must plan to defend against <span class="pt">2</span>.`},
    {term:"Internal factor", marks:2, body:`A factor within a business's own control <span class="pt">1</span>, such as its finances, staff or brand; these make up the strengths and weaknesses of a SWOT <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"State what each letter of SWOT stands for.",
     model:`<b>S</b>trengths, <b>W</b>eaknesses, <b>O</b>pportunities, <b>T</b>hreats <span class="pt">1</span> — strengths and weaknesses are internal, opportunities and threats are external <span class="pt">2</span>.`,
     fb:"All four letters expanded, plus the internal/external split."},
    {marks:4, q:"Explain one benefit to a small restaurant of carrying out a SWOT analysis.",
     model:`One benefit is making a better strategic choice <span class="pt">1</span>. This is because SWOT structures what the business knows about itself and its market <span class="pt">2</span>. As a result, the restaurant can match a strength (e.g. spare midweek capacity and a good reputation) to an opportunity (a rival closing) <span class="pt">3</span>, so it picks a strategy — such as investing in promotion — that is most likely to hit its profit objective <span class="pt">4</span>.`,
     fb:"Link SWOT's structure to matching a strength to an opportunity and a better decision."},
    {marks:4, q:"Sports Direct is reviewing its position in the sportswear market. Identify one strength and one threat it might list in a SWOT analysis, and justify each.",
     model:`A <b>strength</b> is its large scale and buying power as the UK's biggest sports retailer <span class="pt">1</span>, which lets it stock a wide range cheaply and undercut rivals on price <span class="pt">2</span>. A <b>threat</b> is growing online competition from specialist and brand-direct sellers <span class="pt">3</span>, which could pull price-sensitive and brand-loyal customers away from its stores and squeeze margins <span class="pt">4</span>.`,
     fb:"One internal strength and one external threat, each developed (not just listed) to the two-point standard."}
  ],
  caseStudy:{
    business:"A local Chinese restaurant, Bluebells B&B & Amazon",
    intro:`<p>Businesses used in the SWOT exam questions.</p>
      <ul>
        <li><b>Local Chinese restaurant:</b> weighing four strategies to raise profit 20% — a classic SWOT decision (see the worked example above).</li>
        <li><b>Bluebells B&amp;B (Keswick):</b> a small, owner-managed guesthouse run by Les and Liz since 2006, with consistent 5-star TripAdvisor reviews and a busy May–Sep season — but limited business expertise, and facing online platforms like Booking.com.</li>
        <li><b>Amazon:</b> a huge, complex global business — useful for discussing both the <b>advantages</b> of SWOT (structure, strategic focus) and its <b>limits</b> (too big and fast-changing for one snapshot to capture).</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Assess the usefulness of a SWOT analysis to a small business such as a local Chinese restaurant. (8)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is clearer strategic choices, because SWOT sets internal strengths and weaknesses against external opportunities and threats. <span class="tag t-C">CHAIN</span>The restaurant can see it has spare midweek capacity and a strong reputation (strengths) while a rival is closing (opportunity), so it can justify investing in promotion rather than guessing — making its 20% profit target more achievable.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is avoiding damaging options, because SWOT exposes what a strategy would risk. <span class="tag t-C">CHAIN</span>Raising prices or cutting food quality threatens the restaurant's core strength — its reputation — so SWOT helps it reject those and protect long-term custom.</p>
     <p><span class="tag t-J">HOWEVER</span>However, SWOT is less useful for a small business because it is only a subjective snapshot. With limited time, data and expertise, the owners may rely on personal opinion and unranked lists, and the analysis dates quickly as the high street changes — so it should be used regularly and alongside PESTLE, not alone.</p>`,
     fb:"Mr. Akram's exemplar. Two uses applied to the restaurant, balanced by the subjectivity/snapshot limitation that hits small firms hardest."},
    {marks:12, q:"Assess the usefulness of SWOT analysis to the owners of a small B&B such as Bluebells. (12)",
     model:`<p><span class="tag t-P">POINT</span>One use is building on clear strengths, because Bluebells has an excellent reputation and consistent 5-star TripAdvisor reviews since 2006. <span class="tag t-C">CHAIN</span>Customers value trusted, high-quality accommodation, so this drives repeat business and word of mouth in the busy May–September season — letting Les and Liz attract visitors without heavy advertising spend and keep occupancy and revenue high.</p>
     <p><span class="tag t-P">POINT</span>A second use is spotting opportunities, such as online travel platforms like Booking.com. <span class="tag t-C">CHAIN</span>These widen Bluebells' reach beyond its usual market, so the owners could attract tourists who'd never have found the B&B and boost bookings in quieter months like March and October.</p>
     <p><span class="tag t-J">HOWEVER</span>However, a weakness of SWOT here is the owners' limited business expertise, because as a small owner-managed B&B they may lack training in strategic planning. This risks an analysis built on personal opinion rather than market evidence, so they could misjudge competition from other Keswick guesthouses or miss shifts in customer behaviour — leading to poorly prioritised decisions.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, SWOT is useful for Bluebells, especially when used regularly to review strengths, weaknesses, opportunities and threats. But its success depends on Les and Liz gathering accurate information and acting on it — so combining SWOT with a PESTLE analysis (economic tourism trends, online reviews and booking tech) would give a fuller, more objective picture and support long-term success.</p>`,
     fb:"Mr. Akram's exemplar (Bluebells). Two uses applied (reputation strength, Booking.com opportunity), the expertise weakness as the limitation, and a 'combine with PESTLE' conclusion."}
  ],
  resources:[
    {label:"SWOT analysis — lesson notes (PDF)", file:"resources/3-3-1-3-swot-notes.pdf"}
  ]
},
{
  code:"3.3.1.4", subtheme:"3.3.1", title:"Impact of external influences",
  business:"Case studies: Burberry (China), Toyota, easyJet & Bramwell Brown", status:"live",
  notes:[
    {h:"PESTLE analysis", html:`
      <p>The <b>opportunities and threats</b> in a SWOT come from the <b>external environment</b>. <b>PESTLE</b> is a framework for breaking that environment down:</p>
      <ul>
        <li><b>P</b>olitical — government policy, stability, trade policy (e.g. restrictions on foreign firms).</li>
        <li><b>E</b>conomic — interest rates, inflation, exchange rates, growth, incomes (e.g. falling petrol prices).</li>
        <li><b>S</b>ocial — demographics, tastes, lifestyles, ethics.</li>
        <li><b>T</b>echnological — new tech, e-commerce, automation (e.g. mobile commerce, WeChat).</li>
        <li><b>L</b>egal — employment, consumer, health & safety and environmental law.</li>
        <li><b>E</b>nvironmental — climate, sustainability pressure, resource scarcity.</li>
      </ul>
      <p>A business uses PESTLE to anticipate change and adapt its strategy, but factors interact and some matter far more to one firm than another.</p>`},
    {h:"The changing competitive environment & Porter's five forces", html:`
      <p>The competitive environment shifts as new rivals, technologies and global players arrive. Michael Porter identified <b>five forces</b> that together determine the nature of competition — and so how profitable (attractive) an industry is. A business uses the model to <b>assess a new market</b> (e.g. before market development or diversification) or to <b>monitor an existing one</b> and devise strategies to compete or protect its position.</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 360" style="min-width:440px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="ff-arr" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 z" fill="var(--muted)"/>
          </marker>
        </defs>
        <rect x="170" y="150" width="180" height="70" rx="8" fill="rgba(201,42,42,.14)" stroke="#c92a2a" stroke-width="2.5"/>
        <text x="260" y="180" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">Competitive</text>
        <text x="260" y="198" text-anchor="middle" font-size="13" font-weight="800" fill="var(--ink)">rivalry</text>
        <rect x="160" y="18" width="200" height="60" rx="8" fill="rgba(27,79,214,.10)" stroke="#1b4fd6" stroke-width="2"/>
        <text x="260" y="44" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Threat of</text>
        <text x="260" y="62" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">new entrants</text>
        <rect x="160" y="292" width="200" height="60" rx="8" fill="rgba(27,79,214,.10)" stroke="#1b4fd6" stroke-width="2"/>
        <text x="260" y="318" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Threat of</text>
        <text x="260" y="336" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">substitutes</text>
        <rect x="8" y="150" width="140" height="70" rx="8" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <text x="78" y="178" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Bargaining</text>
        <text x="78" y="194" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">power of</text>
        <text x="78" y="210" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">suppliers</text>
        <rect x="372" y="150" width="140" height="70" rx="8" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <text x="442" y="178" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">Bargaining</text>
        <text x="442" y="194" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">power of</text>
        <text x="442" y="210" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--ink)">buyers</text>
        <line x1="260" y1="78" x2="260" y2="148" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#ff-arr)"/>
        <line x1="260" y1="290" x2="260" y2="222" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#ff-arr)"/>
        <line x1="148" y1="185" x2="168" y2="185" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#ff-arr)"/>
        <line x1="372" y1="185" x2="352" y2="185" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#ff-arr)"/>
      </svg>
      </div>
      <ul>
        <li><b>Threat of new entrants</b> — existing firms are stronger where <b>barriers to entry</b> are high (brand strength, economies of scale, distribution, high start-up cost). Low barriers → high threat, and vice versa.</li>
        <li><b>Bargaining power of suppliers</b> — powerful suppliers raise input prices and squeeze industry profit. Power is high when there are few suppliers, the input is unique/essential or switching is costly (e.g. De Beers in diamonds).</li>
        <li><b>Bargaining power of buyers</b> — powerful buyers push prices down or demand more for the same price. The big UK supermarkets have huge power over suppliers because they buy in vast volume and can switch supplier easily.</li>
        <li><b>Threat of substitutes</b> — a substitute meets the <b>same need</b> a different way (a bus vs a train). Many credible substitutes cap the price a firm can charge and reduce profit.</li>
        <li><b>Competitive rivalry</b> — the central force; intense rivalry forces firms into costly strategies (price cuts, heavy marketing) that lower profits.</li>
      </ul>
      <p><b>Strong forces squeeze profit; weak forces make an industry attractive.</b> Firms use this to choose which markets to enter and how to compete — though in a very niche or differentiated market some forces (e.g. rivalry) matter far less than others.</p>`}
  ],
  definitions:[
    {term:"PESTLE analysis", marks:2, body:`A framework for analysing the external environment under six headings — political, economic, social, technological, legal and environmental <span class="pt">1</span>; it helps a business spot the opportunities and threats that shape its strategy <span class="pt">2</span>.`},
    {term:"External environment", marks:2, body:`The factors outside a business's control that affect it <span class="pt">1</span>, such as the economy, technology and the law; these generate the opportunities and threats in a SWOT analysis <span class="pt">2</span>.`},
    {term:"Porter's five forces", marks:2, body:`A model assessing the competitiveness and profitability of an industry <span class="pt">1</span> through rivalry, new entrants, substitutes, and the bargaining power of buyers and suppliers <span class="pt">2</span>.`},
    {term:"Competitive environment", marks:2, body:`The nature and intensity of competition a business faces <span class="pt">1</span>; it changes as new rivals, technologies and global players enter the market <span class="pt">2</span>.`},
    {term:"Barriers to entry", marks:2, body:`Obstacles that make it hard for new firms to enter a market <span class="pt">1</span>, such as strong existing brands, economies of scale or high start-up costs; high barriers lower the threat of new entrants <span class="pt">2</span>.`},
    {term:"Substitute product", marks:2, body:`A different product that meets the same customer need <span class="pt">1</span>, e.g. a bus instead of a train; many credible substitutes limit the price a firm can charge and reduce its profit <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"State what each letter of PESTLE stands for.",
     model:`<b>P</b>olitical, <b>E</b>conomic, <b>S</b>ocial, <b>T</b>echnological, <b>L</b>egal, <b>E</b>nvironmental <span class="pt">1</span> — the six categories of external factors a business analyses <span class="pt">2</span>.`,
     fb:"All six letters correctly expanded."},
    {marks:2, q:"State the five forces in Porter's five forces model.",
     model:`Competitive rivalry; the threat of new entrants; the threat of substitutes; the bargaining power of buyers; and the bargaining power of suppliers <span class="pt">1</span> — together they determine how competitive and profitable an industry is <span class="pt">2</span>.`,
     fb:"All five forces named."},
    {marks:4, q:"Explain one way the external economic environment could affect a car manufacturer such as Toyota.",
     model:`Falling petrol prices reduce the cost of running a petrol car <span class="pt">1</span>. This is because cheaper fuel makes petrol models more attractive to price-sensitive buyers <span class="pt">2</span>. As a result, demand may shift from expensive electric/hybrid cars towards petrol models <span class="pt">3</span>, so Toyota may need to adjust its product mix and could see higher use of its petrol-model capacity <span class="pt">4</span>.`,
     fb:"Link an economic factor to a developed demand/strategy consequence."},
    {marks:4, q:"Explain one reason the bargaining power of buyers is high in the budget-airline market.",
     model:`Buyer power is high because customers can easily compare fares online and switch between airlines <span class="pt">1</span>. This is because flights are a near-identical service and price-sensitive travellers have low switching costs <span class="pt">2</span>. As a result, carriers like easyJet are pressured to keep fares low and add perks <span class="pt">3</span>, which squeezes profit margins because they cannot raise prices without losing customers to rivals like Ryanair <span class="pt">4</span>.`,
     fb:"Link easy price comparison / low switching costs to downward pressure on margins."}
  ],
  caseStudy:{
    business:"Burberry (China), Toyota, easyJet & Bramwell Brown",
    intro:`<p>External-environment and competitive-force scenarios used in the exam questions.</p>
      <h3>Burberry — technology in China</h3>
      <p>In China, <b>80% of online purchases</b> are made via smartphone or tablet. Burberry's <b>mobile app</b> (in 33 countries) and integration with <b>WeChat</b> (booking appointments with sales staff) let it fit local consumer habits — a technological opportunity — though political/economic risks (e.g. restrictions on foreign firms) could limit it.</p>
      <h3>Toyota — economic factors</h3>
      <p>UK petrol prices fell from <b>£1.42 to £1.34</b> per litre, which could lift demand for petrol models made at Toyota's Burnaston plant — but with <b>77.2%</b> of UK-made cars exported (49.1% to the EU), domestic price changes affect only a small share of sales.</p>
      <h3>easyJet — competitive forces</h3>
      <p>Customers compare fares online and switch between Ryanair, Wizz Air and British Airways, so <b>buyer power</b> is strong; <b>94%</b> of customers worry about the environmental impact of flying; and jet fuel (<b>~⅓ of operating costs</b>) is volatile — above <b>$120/barrel</b> in 2014, below <b>$20</b> in 2020 — so <b>supplier power</b> matters too.</p>
      <h3>Bramwell Brown — a niche maker</h3>
      <p>Bramwell Brown makes mechanical weather clocks from <b>150 parts</b> sourced globally (Germany, Yorkshire), using job production with limited editions of <b>250 clocks</b> per design — a highly differentiated, IP-protected niche where some five forces apply more than others.</p>
      <p class="note-ex">A rich local source on external influences — the <b>Emirates</b> source booklet and questions — is in the downloads.</p>`
  },
  exam:[
    {marks:12, q:"Assess how the external technological environment could support Burberry's growth in China. (12)", caseImg:"resources/casestudies/cs-3-3-1-4-burberry-china.png",
     model:`<p><span class="tag t-P">POINT</span>One way technology supports growth is through mobile commerce, because 80% of online purchases in China are made on smartphones or tablets. <span class="tag t-C">CHAIN</span>Burberry's app (already in 33 countries) lets Chinese customers browse and buy directly, raising convenience and potentially sales, helping it grow market presence.</p>
     <p><span class="tag t-P">POINT</span>A second opportunity is integration with WeChat, China's biggest social platform, because customers can book appointments with sales staff through it. <span class="tag t-C">CHAIN</span>This adapts to local habits and offers a personalised digital experience, giving Burberry an edge over luxury rivals that don't.</p>
     <p><span class="tag t-J">HOWEVER</span>However, technology alone may not guarantee growth, because other external factors can matter more. If the Chinese government restricts foreign firms, Burberry's digital options could be limited — so political risk could blunt the benefit of its technology investment.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the technological environment offers strong opportunities — mobile and WeChat fit Chinese habits and boost convenience and loyalty — but success depends on adapting to local regulation and political/economic risk. It is recommended Burberry strengthens its digital presence while monitoring government policy.</p>`,
     fb:"Mr. Akram's exemplar (Burberry China). Two technological opportunities with the 80%/WeChat evidence, a political-risk limitation, and a conclusion on what success depends on."},
    {marks:12, q:"Assess the likely impact on Toyota of falling petrol prices in the UK. (12)",
     model:`<p><span class="tag t-P">POINT</span>One impact is higher demand for petrol cars, because cheaper fuel (£1.42 → £1.34/litre) cuts running costs. <span class="tag t-C">CHAIN</span>Price-sensitive buyers may choose petrol over pricier electric/hybrid models, so Toyota's petrol models at Burnaston could see higher sales and capacity use.</p>
     <p><span class="tag t-P">POINT</span>However, it could slow demand for Toyota's hybrids and EVs, because running costs become less of a concern. <span class="tag t-C">CHAIN</span>This could delay the green transition and pressure Toyota's long-term sustainability plans, forcing a change in product mix and marketing.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the impact may be limited, because 77.2% of UK-made cars are exported (49.1% to the EU), so UK petrol prices touch only a small share of sales — and other factors (EU environmental rules, exchange rates) may matter more.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, falling UK petrol prices create short-term opportunities to sell more petrol models, but because most output is exported and Toyota is committed to hybrids, the overall impact is likely modest unless the trend spreads to export markets.</p>`,
     fb:"Mr. Akram's exemplar (Toyota). Uses the price and export figures; opportunity, a hybrid/EV downside, and an 'impact is limited because exports' judgement."},
    {marks:12, q:"Assess which external influence (bargaining power of buyers or suppliers) is most significant for easyJet. (12)",
     model:`<p><span class="tag t-P">POINT</span>The bargaining power of buyers is a major influence, because customers can easily compare fares online and switch to Ryanair, Wizz Air or British Airways. <span class="tag t-C">CHAIN</span>Demand drops when prices rise, so easyJet faces intense pressure to offer low fares, flexible booking and extras — it introduced easyJet holidays, full refunds and a best-price guarantee to retain customers, even where that trims margins.</p>
     <p><span class="tag t-P">POINT</span>Buyer power also now includes values: 94% of customers are concerned about the environmental impact of flying. <span class="tag t-C">CHAIN</span>This pressures easyJet to invest in cleaner technology (electric/hydrogen aircraft) and balance affordability with sustainability — a costly, long-term challenge.</p>
     <p><span class="tag t-J">HOWEVER</span>However, supplier power is also serious, because jet fuel is about one-third of operating costs and is highly volatile (above $120/barrel in 2014, below $20 in 2020), and easyJet has little control over it. When fuel prices rise it must absorb the cost or raise fares — both hurt profitability.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the bargaining power of buyers is the most significant external influence, because it shapes pricing, product choices, customer service and environmental strategy all at once. Supplier (fuel) power is a real risk, but easyJet can hedge fuel and improve efficiency, whereas it cannot escape price-sensitive, switchable customers — so managing buyer power should stay its priority.</p>`,
     fb:"Mr. Akram's exemplar (easyJet). Buyer power (price comparison + 94% environmental concern) weighed against volatile fuel supplier power, concluding buyer power dominates because it can't be hedged away."},
    {marks:12, q:"Evaluate the usefulness of Porter's five forces model to a niche business such as Bramwell Brown. (12)", caseImg:"resources/casestudies/cs-3-3-1-4-bramwell-brown.png",
     model:`<p><span class="tag t-P">POINT</span>One use is assessing the threat of substitutes, because the model prompts Bramwell Brown to ask whether digital weather devices could replace its mechanical weather clocks. <span class="tag t-C">CHAIN</span>This highlights the need to stress its uniqueness and craftsmanship in marketing, building loyalty that protects it from substitutes.</p>
     <p><span class="tag t-P">POINT</span>A second use is supplier power, because its clocks use 150 parts sourced globally (Germany, Yorkshire). <span class="tag t-C">CHAIN</span>It is reliant on suppliers for quality parts and exposed to shortages or price rises, so the model helps it assess and manage that dependence.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the model is less useful on competitive rivalry, because Bramwell Brown's product is highly differentiated and hand-assembled by job production, with limited editions of 250 clocks per design. It does not compete on mass-market terms, so Porter's focus on intense rivalry — and the threat of new entrants — adds little insight for such a niche, low-volume, IP-protected product.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Porter's five forces is useful for Bramwell Brown mainly on supplier power and substitutes, which stay relevant even in a niche. But its usefulness is partial: because output is low and products are protected and distinctive, rivalry and new entrants matter little, so the model should be used selectively alongside other tools.</p>`,
     fb:"Mr. Akram's exemplar (Bramwell Brown). Applies substitutes and supplier power to the niche, then judges rivalry/new-entrants add little — a balanced 'useful but partial' evaluation."}
  ],
  resources:[
    {label:"Porter's five forces — lesson notes (PDF)", file:"resources/3-3-1-4-porters-five-forces.pdf"},
    {label:"PESTLE analysis — lesson notes (PDF)", file:"resources/3-3-1-4-pestle-notes.pdf"},
    {label:"Emirates — external influences source booklet (PDF)", file:"resources/3-3-1-4-emirates-source.pdf"},
    {label:"Emirates — exam questions (PDF)", file:"resources/3-3-1-4-emirates-questions.pdf"}
  ]
},
{
  code:"3.3.2.1", subtheme:"3.3.2", title:"Growth objectives & economies of scale",
  business:"Case studies: Volkswagen, Dubai Silicon Oasis & Brompton Bikes", status:"live",
  notes:[
    {h:"Why businesses grow — organic vs inorganic", html:`
      <p>Businesses such as Starbucks constantly seek to <b>grow</b> to win <b>lower unit costs</b> (economies of scale), greater <b>market power</b> over customers and suppliers, more <b>market share and brand recognition</b>, higher <b>profit</b>, and long-term <b>competitive advantage</b> and survival.</p>
      <ul>
        <li><b>Organic (internal) growth</b> — growing from the firm's own operations: more stores, new products, more customers. Slower but lower-risk and easier to control.</li>
        <li><b>Inorganic (external) growth</b> — growing through <b>mergers and takeovers</b>. Faster, but costlier and riskier (culture clashes, integration problems).</li>
      </ul>`},
    {h:"Economies of scale", html:`
      <p><b>Internal economies of scale</b> are the cost advantages a business enjoys as it increases the scale of its operations: as output rises, the <b>cost per unit (average cost) falls</b>. Lower unit costs let a firm either <b>cut prices and sell more at the same margin</b>, or <b>keep prices and earn more profit per unit</b> — both make it more competitive.</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 290" style="min-width:420px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="40" x2="60" y2="240" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="60" y1="240" x2="490" y2="240" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="20" y="140" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" transform="rotate(-90 20 140)">Unit cost</text>
        <text x="275" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Output (scale)</text>
        <path d="M90,80 Q275,300 460,90" fill="none" stroke="var(--amber)" stroke-width="3"/>
        <line x1="275" y1="193" x2="275" y2="240" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="275" y="256" text-anchor="middle" font-size="9.5" fill="var(--muted)">min. efficient scale</text>
        <text x="150" y="150" text-anchor="middle" font-size="11" font-weight="800" fill="var(--emerald)">Economies</text>
        <text x="150" y="165" text-anchor="middle" font-size="11" font-weight="800" fill="var(--emerald)">of scale ↓</text>
        <text x="400" y="150" text-anchor="middle" font-size="11" font-weight="800" fill="#c92a2a">Diseconomies</text>
        <text x="400" y="165" text-anchor="middle" font-size="11" font-weight="800" fill="#c92a2a">of scale ↑</text>
      </svg>
      </div>
      <p>The <b>VW Group</b> — the world's largest car maker, with twelve brands (VW, Audi, SEAT, ŠKODA, Porsche, Lamborghini, Bentley, Bugatti, Ducati, MAN, Scania, VW Commercial) — gains big cost advantages over smaller rivals through internal economies:</p>
      <ul>
        <li><b>Purchasing (bulk-buying)</b> — buying components in huge volume secures big discounts per unit.</li>
        <li><b>Production (technical)</b> — large, specialised plant and robotics spread cost over far more cars.</li>
        <li><b>Financial</b> — large firms borrow more cheaply and on better terms.</li>
        <li><b>Marketing</b> — the cost of a campaign is spread across millions of units.</li>
        <li><b>Managerial</b> — it can afford specialist managers (finance, IT, marketing) who raise efficiency.</li>
      </ul>`},
    {h:"External economies of scale", html:`
      <p><b>External economies of scale</b> are lower unit costs that come from <b>factors outside the firm</b> — the whole industry growing, or firms <b>clustering</b> geographically. A strong UAE example is <b>Dubai Silicon Oasis</b>, home to more than <b>900 start-ups from 72 countries</b>, many working on blockchain and AI:</p>
      <ul>
        <li><b>Expertise</b> — a local pool of skilled labour and specialist knowledge to recruit from.</li>
        <li><b>Co-operation</b> — nearby firms share ideas, suppliers and infrastructure.</li>
        <li><b>Support services</b> — specialist suppliers, finance and services grow up around the cluster.</li>
      </ul>`},
    {h:"Diseconomies of scale", html:`
      <p>Growth is not always cheaper. If a business grows <b>too big or too fast</b>, unit costs can start to <b>rise</b> again — <b>diseconomies of scale</b>:</p>
      <ul>
        <li><b>Communication</b> — more layers and staff make messages slower and easier to distort.</li>
        <li><b>Co-ordination &amp; control</b> — harder to manage many sites/people; confusion over responsibilities.</li>
        <li><b>Motivation</b> — workers can feel like a small cog, lowering morale and productivity.</li>
      </ul>
      <p>This is why the long-run average cost curve is U-shaped — the firm should aim for its <b>minimum efficient scale</b>, not just maximum size.</p>`}
  ],
  definitions:[
    {term:"Economies of scale", marks:2, body:`The cost advantages a business gains as it grows and output rises <span class="pt">1</span>, so that the average cost per unit falls <span class="pt">2</span>.`},
    {term:"Internal economies of scale", marks:2, body:`Falling unit costs that come from a business increasing the scale of its own operations <span class="pt">1</span>, such as bulk-buying, technical or managerial economies <span class="pt">2</span>.`},
    {term:"External economies of scale", marks:2, body:`Falling unit costs that come from factors outside the firm <span class="pt">1</span>, such as the industry growing or firms clustering together geographically <span class="pt">2</span>.`},
    {term:"Diseconomies of scale", marks:2, body:`Rising average unit costs that occur when a business grows too large to manage efficiently <span class="pt">1</span>, caused by communication, co-ordination and motivation problems <span class="pt">2</span>.`},
    {term:"Organic growth", marks:2, body:`Growth generated from a business's own internal operations <span class="pt">1</span>, such as opening more outlets or launching new products, rather than through acquisition <span class="pt">2</span>.`},
    {term:"Inorganic growth", marks:2, body:`Growth achieved externally through mergers and takeovers <span class="pt">1</span>; it is faster than organic growth but carries higher cost and risk <span class="pt">2</span>.`},
    {term:"Purchasing economies", marks:2, body:`A fall in unit cost from buying inputs in large quantities <span class="pt">1</span>, because suppliers give bulk-buying discounts to large purchasers <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'economies of scale'.",
     model:`Economies of scale are the cost advantages a business gains as it grows and output increases <span class="pt">1</span>, so that the average cost per unit falls <span class="pt">2</span>.`,
     fb:"Links growth/rising output to a fall in unit (average) cost — two developed points, not an example."},
    {marks:2, q:"Distinguish between organic and inorganic growth.",
     model:`Organic growth comes from a firm's own operations, such as opening new stores or launching products <span class="pt">1</span>; inorganic growth comes externally through mergers and takeovers, which is faster but riskier <span class="pt">2</span>.`,
     fb:"Two contrasting points — internal expansion vs growth by acquisition."},
    {marks:4, q:"Explain one internal economy of scale a large car manufacturer such as VW could benefit from.",
     model:`VW benefits from purchasing (bulk-buying) economies <span class="pt">1</span>. This is because ordering components in huge volumes lets it negotiate large per-unit discounts <span class="pt">2</span>. As a result, the cost of each car falls <span class="pt">3</span>, so VW can either price below smaller rivals or keep prices and earn a higher margin, strengthening its competitiveness <span class="pt">4</span>.`,
     fb:"Name a specific internal economy and develop the unit-cost consequence."}
  ],
  caseStudy:{
    business:"Volkswagen, Dubai Silicon Oasis & Brompton Bikes",
    intro:`<p>Growth and scale in real businesses.</p>
      <ul>
        <li><b>Volkswagen</b> — the world's largest car maker (twelve brands); its scale delivers purchasing, technical, financial, marketing and managerial economies that smaller rivals cannot match.</li>
        <li><b>Dubai Silicon Oasis</b> — 900+ start-ups from 72 countries clustered together, giving external economies (shared expertise, co-operation and support services) in blockchain and AI.</li>
        <li><b>Brompton Bikes</b> — raising capacity from 80,000 to 200,000 bikes a year at a new factory and hiring 650 staff: a chance for internal economies, but also a risk of diseconomies if growth outruns management.</li>
      </ul>`
  },
  exam:[
    {marks:12, q:"Assess the likely impact on Brompton Bikes of expanding production capacity at its new factory. (12)", caseImg:"resources/casestudies/cs-3-3-2-1-brompton.png",
     model:`<p><span class="tag t-P">POINT</span>One impact is internal economies of scale, because the new factory lifts capacity from 80,000 to 200,000 bikes a year. <span class="tag t-C">CHAIN</span>Spreading fixed costs (rent, equipment, overheads) across far more units lowers the average cost per bike, so Brompton can either cut prices to compete or hold prices and widen margins — strengthening its position in the UK and growing global market for eco-friendly transport.</p>
     <p><span class="tag t-P">POINT</span>A second impact is managerial economies, because Brompton is hiring 650 staff including marketing, IT and social-media specialists. <span class="tag t-C">CHAIN</span>These roles smaller firms can't afford raise efficiency, brand visibility and customer engagement, so productivity and responsiveness to market trends improve.</p>
     <p><span class="tag t-J">HOWEVER</span>However, there is a risk of diseconomies of scale if the firm grows faster than it can manage. A sharp rise in staff and output can cause poor communication, slow decisions, unclear responsibilities and lower morale — pushing unit costs up instead of down, eroding the cost advantage and making it harder to compete with lower-cost rivals.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, expansion should cut unit costs and support Brompton's growth, but the benefit depends on managing the scale-up well. It is recommended Brompton grows in controlled stages and invests in management systems so it captures economies without triggering diseconomies.</p>`,
     fb:"Mr. Akram's exemplar (Brompton Bikes). Internal + managerial economies with the 80k→200k and 650-staff figures, balanced by a diseconomies risk and a 'manage the scale-up' conclusion."},
    {marks:8, q:"Assess the benefits to a discount supermarket such as Aldi of achieving economies of scale. (8)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is purchasing economies, because buying stock in vast volumes secures large per-unit discounts. <span class="tag t-C">CHAIN</span>This lowers Aldi's unit costs, so it can sustain very low shelf prices and still protect margins — central to its cost-leadership model against Tesco and Sainsbury's.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is technical and distribution economies, because large, efficient warehouses and a streamlined range spread costs over huge throughput. <span class="tag t-C">CHAIN</span>This keeps operating cost per item low, reinforcing the price advantage that drives footfall and market share.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the benefit has limits, because beyond a point rapid expansion can bring diseconomies — co-ordination and communication problems across many stores can raise costs. So economies of scale help most when growth is well managed and the simple, low-cost model is preserved.</p>`,
     fb:"Mr. Akram's exemplar (Aldi). Two economies linked to cost leadership, balanced by a diseconomies caveat — house-style model answer."}
  ],
  resources:[
    {label:"Growth objectives & economies of scale — lesson notes (PDF)", file:"resources/3-3-2-1-economies-of-scale-notes.pdf"}
  ]
},
{
  code:"3.3.2.2", subtheme:"3.3.2", title:"Organic growth",
  business:"Case studies: Spotify, Mumtaz Food Group & Five Guys", status:"live",
  notes:[
    {h:"What is organic growth?", html:`
      <p><b>Organic (internal) growth</b> is growth a business achieves by increasing output and sales <b>using its own resources</b> — <b>not</b> through mergers or takeovers. It is the opposite of inorganic growth.</p>
      <p>Common <b>methods</b> of growing organically:</p>
      <ul>
        <li><b>Increasing output</b> — producing and selling more to existing and new customers.</li>
        <li><b>Opening new locations</b> — more stores, branches or factories (e.g. Five Guys opening new outlets).</li>
        <li><b>Expanding the product range</b> — developing new products or features for existing customers.</li>
        <li><b>Entering new markets</b> — new regions or countries through the firm's own expansion.</li>
        <li><b>Franchising</b> — growing the brand through franchisees without buying other firms.</li>
      </ul>`},
    {h:"Organic growth in action", html:`
      <ul>
        <li><b>Spotify</b> grew organically to <b>299m monthly users</b> and <b>138m premium subscribers</b> (≈30% market share) by developing its own features and expanding its customer base — not by acquiring rivals.</li>
        <li><b>Mumtaz Food Group</b> (Bradford) grew from a 1979 takeaway to three restaurants and ready-meal factories using only <b>internal finance</b>, launching new ranges (e.g. Halal baby food) and opening a second factory to meet 15–20% annual growth.</li>
        <li><b>Five Guys</b> expands by opening new branches and keeping tight control of its simple, consistent model.</li>
      </ul>`},
    {h:"Advantages & disadvantages", html:`
      <table class="datatable">
        <tr><th>Advantages</th><th>Disadvantages</th></tr>
        <tr><td>Lower risk than mergers/takeovers; easier to manage and control; owners keep control and avoid outside investors; no clash of corporate cultures; funded from the firm's own resources; steady, sustainable expansion that protects brand and quality.</td><td>Slower than inorganic growth; limited by the firm's own resources and retained profit; can hit market saturation; rivals growing by acquisition may seize new markets or technologies faster.</td></tr>
      </table>
      <p>So organic growth suits firms that value <b>control, culture and brand quality</b>, while inorganic growth suits those needing to <b>scale fast</b>. Many firms do both.</p>`}
  ],
  definitions:[
    {term:"Organic growth", marks:2, body:`Growth generated from a business's own internal operations <span class="pt">1</span>, such as increasing output, opening new outlets or launching new products, rather than through mergers or takeovers <span class="pt">2</span>.`},
    {term:"Inorganic growth", marks:2, body:`Growth achieved externally through mergers and takeovers <span class="pt">1</span>; it is faster than organic growth but carries higher cost and risk <span class="pt">2</span>.`},
    {term:"Market saturation", marks:2, body:`The point where a market has little room left for growth because most potential customers already buy the product <span class="pt">1</span>, making further organic growth from that market difficult <span class="pt">2</span>.`},
    {term:"Product development", marks:2, body:`Launching new or improved products to existing customers <span class="pt">1</span>; it is a common method of organic growth that uses the firm's known market <span class="pt">2</span>.`},
    {term:"Franchising", marks:2, body:`Growing a brand by letting franchisees run their own outlets under the business's name and system <span class="pt">1</span>, allowing organic expansion without the cost of owning every outlet <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'organic growth'.",
     model:`Organic growth is growth achieved from a business's own internal operations, such as increasing output or opening new outlets <span class="pt">1</span>, rather than through mergers or takeovers <span class="pt">2</span>.`,
     fb:"Internal expansion from own resources, explicitly contrasted with mergers/takeovers."},
    {marks:4, q:"Morrisons is reviewing how to grow. Identify one method of organic growth and one method of inorganic growth it could use, and briefly justify each.",
     model:`<b>Organic:</b> opening more of its own stores or online delivery <span class="pt">1</span>, which grows sales using Morrisons' own resources while keeping full control <span class="pt">2</span>. <b>Inorganic:</b> taking over a smaller rival or convenience chain <span class="pt">3</span>, which adds market share and new locations far more quickly than building them from scratch <span class="pt">4</span>.`,
     fb:"One internal and one external method, each with a developed justification."},
    {marks:4, q:"Explain one advantage to a family-owned firm such as Mumtaz of growing organically.",
     model:`Organic growth lets the Akbar family keep full control <span class="pt">1</span>. This is because it avoids bringing in external investors or merging with another firm <span class="pt">2</span>. As a result, the family can make independent decisions in line with its values, like launching Halal baby food <span class="pt">3</span>, protecting brand identity and quality and building long-term customer trust <span class="pt">4</span>.`,
     fb:"Link organic growth to retained control and protected brand/values."}
  ],
  caseStudy:{
    business:"Spotify, Mumtaz Food Group & Five Guys",
    intro:`<p>Businesses that have grown mainly from within.</p>
      <ul>
        <li><b>Spotify:</b> 299m monthly users, 138m premium subscribers, ~30% share — built by product development and customer growth, staying independent and avoiding culture clashes, but reporting a €167m operating loss in Q2 2020 on €1.89bn revenue.</li>
        <li><b>Mumtaz Food Group:</b> a family-run Bradford food producer (sales ~£25m) growing 15–20% a year in ready meals, sold under its own premium brand in 40+ countries, funded by internal finance.</li>
        <li><b>Five Guys:</b> grows by opening new outlets while protecting a simple, consistent, quality-led model.</li>
      </ul>`
  },
  exam:[
    {marks:12, q:"Assess whether expanding by organic growth was the right decision for Mumtaz. (12)", caseImg:"resources/casestudies/cs-3-3-2-2-mumtaz.png",
     model:`<p><span class="tag t-P">POINT</span>One reason it was right is that organic growth lets Mumtaz retain full control, because it is a family-run private limited company owned by the Akbars since 1979. <span class="tag t-C">CHAIN</span>This means it can make independent decisions — launching Halal baby food, opening a second factory — without pressure from outside investors, keeping the business aligned with its values and protecting brand identity, quality and customer trust.</p>
     <p><span class="tag t-P">POINT</span>A second reason is that organic growth supports brand building and premium positioning, because Mumtaz sells under its own name rather than making supermarket own-label. <span class="tag t-C">CHAIN</span>This builds a brand recognised in 40+ countries with 15–20% ready-meal growth, giving time to invest in its reputation.</p>
     <p><span class="tag t-J">HOWEVER</span>However, organic growth can be slow and limit expansion, because Mumtaz has stayed within Asian food since 1979 and avoided external finance or mergers. This risks missing faster-growing sectors (e.g. plant-based or international ready meals) where rivals using inorganic growth can enter and scale more quickly — so Mumtaz could lose ground despite a strong brand.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, organic growth has suited Mumtaz by protecting family control, brand identity and premium positioning. But success depends on whether it can grow fast enough globally — so it is recommended Mumtaz keeps its organic core while exploring limited external funding or partnerships in key regions like Asia to accelerate expansion.</p>`,
     fb:"Mr. Akram's exemplar (Mumtaz). Control + brand-building advantages balanced against the speed/limits of organic growth, with a 'keep organic, add selective funding' conclusion."},
    {marks:20, q:"Evaluate whether Spotify should continue to grow organically rather than through mergers and takeovers. (20)", caseImg:"resources/casestudies/cs-3-3-2-2-spotify.png",
     model:`<p><span class="tag t-P">ORGANIC — STRENGTH</span>One argument for staying organic is that it builds on a proven model. <span class="tag t-E">EXPLAIN</span>Spotify reached 299m monthly users and 138m premium subscribers with ~30% share by developing its own features. <span class="tag t-C">CHAIN</span>Continuing organically avoids the disruption and culture clashes of takeovers. <span class="tag t-A">APPLY</span>So Spotify stays focused on innovation and user experience. <span class="tag t-J">JUDGE</span>This protects quality and brand identity.</p>
     <p><span class="tag t-P">ORGANIC — STRENGTH</span>A second benefit is cultural continuity, because growing its own features and customer base means staff keep working within a familiar culture. <span class="tag t-C">CHAIN</span>Less conflict, resistance and communication breakdown supports morale and productivity, and consistent long-term performance.</p>
     <p><span class="tag t-J">LIMITATION</span>However, relying only on organic growth may cap expansion, because Spotify already leads at 30% while Apple Music and Amazon Music grow fast. It may not win users as quickly as rivals using acquisitions, risking lost ground and stagnation.</p>
     <p><span class="tag t-J">LIMITATION</span>There is also a financial constraint: a €167m operating loss in Q2 2020 (on €1.89bn revenue) means limited retained profit to reinvest, so major expansion may need external finance and investor pressure for faster returns — making selective acquisitions attractive.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, organic growth has built Spotify's brand, user base and innovation while keeping it independent and in control, so it should remain the core strategy. But because the market moves fast and rivals can scale through deals, success depends on growing quickly enough — so it is recommended Spotify stays mainly organic but adds selective inorganic moves (acquiring start-ups or forming alliances) to access new technology and emerging markets faster.</p>`,
     fb:"Mr. Akram's exemplar (Spotify, 20). Full 5×5 PECAN — two organic strengths vs expansion-speed and financial limits — concluding 'mainly organic plus selective inorganic', with the user/subscriber and loss figures applied."}
  ],
  resources:[
    {label:"Organic growth — lesson notes (PDF)", file:"resources/3-3-2-2-organic-growth-notes.pdf"}
  ]
},
{
  code:"3.3.2.3", subtheme:"3.3.2", title:"Mergers & takeovers",
  business:"Case studies: Kraft–Cadbury, Disney, AG Barr–Funkin & LVMH–Tiffany", status:"live",
  notes:[
    {h:"Inorganic growth — mergers vs takeovers", html:`
      <p><b>Inorganic (external) growth</b> happens when one business joins with another through a <b>merger</b> or a <b>takeover</b>, achieved through integration. It is faster than organic growth but costlier and riskier.</p>
      <ul>
        <li><b>Merger</b> — two firms <b>agree</b> to join together to form a single new business. Recent examples: British Airways + Iberia → <b>IAG</b> (2010); Glaxo Wellcome + SmithKline Beecham → <b>GSK</b> (2000); Dixons + Carphone Warehouse → <b>Dixons Carphone</b> (2014); Heinz + Kraft → <b>Kraft Heinz</b> (2015).</li>
        <li><b>Takeover (acquisition)</b> — one firm <b>buys a controlling stake</b> in another. The buyer gains control, usually to grow fast or enter a new market.</li>
      </ul>`},
    {h:"Takeovers — the Disney example", html:`
      <p>Walt Disney grew from a 1923 cartoon studio into a media giant largely by <b>acquisition</b>. Since 1990 it has spent around <b>$114bn</b> on 12 major takeovers to strengthen its content and reach:</p>
      <ul>
        <li><b>Pixar</b> (2006), <b>Marvel</b> (2009), <b>Lucasfilm / Star Wars</b> (2012) and <b>21st Century Fox</b> (2019) — plus Miramax, Capital Cities/ABC, Maker Studios and BAMTech.</li>
      </ul>
      <p>Each deal bought Disney ready-made brands, audiences and intellectual property far faster than building them organically.</p>`},
    {h:"Hostile takeovers — Kraft & Cadbury", html:`
      <p>A <b>hostile takeover</b> is where one company buys another <b>despite objections from the target's board</b> — the opposite of a friendly takeover where both sides agree.</p>
      <p>In September 2009 Kraft Foods announced it wanted to buy Britain's <b>Cadbury</b>. Its $16.3bn offer was rejected by chair Sir Roger Carr, who assembled a hostile-defence team calling it "unattractive, unwanted and undervalued"; even the UK government (Lord Mandelson) opposed a low offer. Kraft raised its bid to about <b>$19.6bn</b> and the takeover completed in March 2010. Other notable hostile deals: AOL–Time Warner and Sanofi-Aventis–Genzyme.</p>`},
    {h:"Reasons, financial risks & rewards", html:`
      <p>Firms merge or take over for <b>synergy</b> (the combined firm worth more than the parts), faster <b>growth</b> and market share, <b>cost savings</b> and economies of scale, and quick <b>entry to new markets</b>.</p>
      <table class="datatable">
        <tr><th>Financial rewards</th><th>Financial risks</th></tr>
        <tr><td>Rapid growth and higher market share; synergy and cost savings; reduced competition; new markets and revenue streams.</td><td>High purchase price may take years to recoup; culture clashes and integration problems; diseconomies of scale; overpaying; promised synergies may not appear.</td></tr>
      </table>`}
  ],
  definitions:[
    {term:"Inorganic growth", marks:2, body:`Growth achieved externally when one business joins another through a merger or takeover <span class="pt">1</span>; it is faster than organic growth but carries higher cost and risk <span class="pt">2</span>.`},
    {term:"Merger", marks:2, body:`When two businesses agree to join together to form a single new business <span class="pt">1</span>, usually to gain scale, market share or synergy <span class="pt">2</span>.`},
    {term:"Takeover (acquisition)", marks:2, body:`When one business buys a controlling stake in another <span class="pt">1</span>, gaining control in order to grow quickly or enter a new market <span class="pt">2</span>.`},
    {term:"Hostile takeover", marks:2, body:`A takeover carried out despite objections from the target company's board of directors <span class="pt">1</span>, the opposite of a friendly takeover where both sides agree <span class="pt">2</span>.`},
    {term:"Synergy", marks:2, body:`The idea that two combined businesses are worth more than the sum of their parts <span class="pt">1</span>, because merging cuts costs or raises revenue beyond what each could achieve alone <span class="pt">2</span>.`},
    {term:"Friendly takeover", marks:2, body:`A takeover in which the target company's board agrees to the deal and co-operates with the buyer <span class="pt">1</span>, making integration smoother than a hostile takeover <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Distinguish between a merger and a takeover.",
     model:`A merger is when two businesses agree to join to form a single new business <span class="pt">1</span>; a takeover is when one business buys a controlling stake in another, gaining control over it <span class="pt">2</span>.`,
     fb:"Two contrasting points — mutual agreement vs one firm acquiring control."},
    {marks:2, q:"Define the term 'hostile takeover'.",
     model:`A hostile takeover is when one company buys another despite objections from the target's board of directors <span class="pt">1</span>, rather than with the board's agreement as in a friendly takeover <span class="pt">2</span>.`,
     fb:"Against the board's wishes, contrasted with a friendly deal."},
    {marks:4, q:"Explain one reason a soft-drinks firm such as AG Barr might grow by takeover rather than organically.",
     model:`A takeover lets AG Barr enter a new market quickly <span class="pt">1</span>. This is because buying an established brand like Funkin gives instant access to the cocktail-mixer market and its customers <span class="pt">2</span>. As a result, AG Barr avoids the slow, uncertain process of building a new brand from scratch <span class="pt">3</span>, so it can diversify and start earning revenue in the new market far sooner <span class="pt">4</span>.`,
     fb:"Link takeover to speed of market entry and an established customer base."}
  ],
  caseStudy:{
    business:"Kraft–Cadbury, Disney, AG Barr–Funkin & LVMH–Tiffany",
    intro:`<p>Mergers and takeovers in the real world.</p>
      <ul>
        <li><b>Kraft–Cadbury (2010):</b> a famous <b>hostile takeover</b> — Kraft's rejected $16.3bn bid was raised to ~$19.6bn and completed despite the Cadbury board's and UK government's objections.</li>
        <li><b>Disney:</b> grew by serial acquisition — Pixar, Marvel, Lucasfilm and 21st Century Fox — buying brands and audiences rather than building them.</li>
        <li><b>AG Barr–Funkin (2015):</b> the IrnBru maker bought cocktail-mixer brand Funkin for up to £21m (£16.5m cash + £4.5m on targets) to diversify into a new, growing market using its own distribution network.</li>
        <li><b>LVMH–Tiffany (2021):</b> LVMH paid <b>$15.8bn</b> for Tiffany &amp; Co. — a high price, but a strong global luxury brand (value up from under $5bn in 2018 to over $7bn in 2021; the US is 26% of LVMH revenue).</li>
      </ul>`
  },
  exam:[
    {marks:12, q:"Assess the likely effects for AG Barr of taking over Funkin, the cocktail-mixer business. (12)", caseImg:"resources/casestudies/cs-3-3-2-3-agbarr-funkin.png",
     model:`<p><span class="tag t-P">POINT</span>One effect is diversification into a new, growing market, because Funkin operates in cocktail mixers — different from AG Barr's soft-drinks core. <span class="tag t-C">CHAIN</span>AG Barr is no longer solely dependent on IrnBru, so it spreads risk across consumer tastes; if soft-drink demand falls, Funkin revenue can cushion it, giving greater long-term financial stability.</p>
     <p><span class="tag t-P">POINT</span>A second effect is economies of scale, because AG Barr plans to sell Funkin through its existing distribution network. <span class="tag t-C">CHAIN</span>Using infrastructure it already owns means Funkin mixers are transported more cheaply, so average costs fall and profit margins improve.</p>
     <p><span class="tag t-J">HOWEVER</span>However, AG Barr lacks experience in the premium, fast-changing cocktail-mixer market, which needs different marketing and consumer insight. This means it may struggle to innovate or promote Funkin effectively, so the £21m investment could underperform and expected sales growth may not materialise.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, taking over Funkin is a promising strategic move, letting AG Barr diversify and use existing assets to enter a growing market. But success depends on how well it adapts to the cocktail-mixer segment — so it is recommended AG Barr invests in specialist marketing and consumer insight; if it does, the deal should grow revenues and earn a return.</p>`,
     fb:"Mr. Akram's exemplar (AG Barr/Funkin). Diversification + distribution economies balanced against the lack-of-experience risk, with a 'build specialist capability' conclusion."},
    {marks:12, q:"Assess the financial risks and rewards to LVMH of its takeover of Tiffany & Co. (12)", caseImg:"resources/casestudies/cs-3-3-2-3-lvmh-tiffany.png",
     model:`<p><span class="tag t-P">RISK</span>One financial risk is the high purchase price of $15.8bn, because such a large outlay needs Tiffany to generate significant revenue to justify it. <span class="tag t-C">CHAIN</span>If sales growth is weak it could take many years to recoup, squeezing profitability in any luxury downturn and limiting investment elsewhere or shareholder returns.</p>
     <p><span class="tag t-P">RISK</span>A second concern is modest growth so far, because the Watches & Jewellery division rose only from €10,581m (2022) to €10,902m (2023) — just €321m. <span class="tag t-C">CHAIN</span>This means the acquisition hasn't yet delivered a strong revenue uplift, so the payback may take longer than hoped.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the risk is reduced by Tiffany's strong global brand, which grew in value from under $5bn (2018) to over $7bn (2021). With a loyal customer base and a strong US presence (26% of LVMH revenue), LVMH is buying a proven, revenue-generating brand, not an unknown — so the chance of outright failure is low.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, despite the high cost and slow early growth, the financial risk to LVMH is relatively low and the deal is more likely to strengthen than harm it. Success depends on LVMH managing the brand, stimulating demand and keeping premium standards — so it is recommended LVMH invests in Tiffany's brand development and monitors performance closely.</p>`,
     fb:"Mr. Akram's exemplar (LVMH/Tiffany). Two financial risks (price, slow growth) weighed against the strong-brand reward, concluding the risk is low — with the figures applied throughout."}
  ],
  resources:[
    {label:"Mergers & takeovers — lesson notes (PDF)", file:"resources/3-3-2-3-mergers-takeovers-notes.pdf"}
  ]
},
{
  code:"3.3.2.4", subtheme:"3.3.2", title:"Integration & conglomerates",
  business:"Case studies: Ferrero (Oltan & Thorntons), Heineken & GlobalReach", status:"live",
  notes:[
    {h:"Integration through mergers & takeovers", html:`
      <p>Inorganic growth happens through <b>mergers</b> (two firms agree to join) and <b>takeovers/acquisitions</b> (one firm buys control of another). The type of <b>integration</b> depends on where the two firms sit — the same stage of production or different stages, the same market or an unrelated one.</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 250" style="min-width:440px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="int-arr" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--muted)"/></marker>
        </defs>
        <rect x="20" y="70" width="130" height="56" rx="8" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <text x="85" y="94" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Suppliers</text>
        <text x="85" y="112" text-anchor="middle" font-size="9.5" fill="var(--muted)">raw materials</text>
        <rect x="195" y="70" width="130" height="56" rx="8" fill="rgba(245,166,35,.16)" stroke="var(--amber)" stroke-width="2.5"/>
        <text x="260" y="94" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Manufacturer</text>
        <text x="260" y="112" text-anchor="middle" font-size="9.5" fill="var(--muted)">our business</text>
        <rect x="370" y="70" width="130" height="56" rx="8" fill="rgba(15,163,127,.12)" stroke="var(--emerald)" stroke-width="2"/>
        <text x="435" y="94" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Retailers</text>
        <text x="435" y="112" text-anchor="middle" font-size="9.5" fill="var(--muted)">distribution</text>
        <line x1="195" y1="98" x2="152" y2="98" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#int-arr)"/>
        <line x1="325" y1="98" x2="368" y2="98" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#int-arr)"/>
        <text x="172" y="58" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--muted)">backward</text>
        <text x="348" y="58" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--muted)">forward</text>
        <text x="260" y="40" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)">VERTICAL integration</text>
        <rect x="195" y="168" width="130" height="50" rx="8" fill="none" stroke="var(--muted)" stroke-width="1.8" stroke-dasharray="5 3"/>
        <text x="260" y="190" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Rival manufacturer</text>
        <text x="260" y="206" text-anchor="middle" font-size="9.5" fill="var(--muted)">same stage &amp; market</text>
        <line x1="260" y1="126" x2="260" y2="166" stroke="var(--muted)" stroke-width="1.6" marker-end="url(#int-arr)"/>
        <text x="330" y="150" text-anchor="start" font-size="9.5" font-weight="700" fill="var(--muted)">HORIZONTAL</text>
      </svg>
      </div>`},
    {h:"Horizontal integration", html:`
      <p><b>Horizontal integration</b> — joining with a firm at the <b>same stage of production in the same market</b> (e.g. the mobile operators T-Mobile and Orange merging to form <b>EE</b>).</p>
      <ul>
        <li><b>Benefits:</b> bigger market share, reduced competition, economies of scale, and access to the rival's customers and expertise.</li>
        <li><b>Drawbacks:</b> may be blocked by competition regulators; culture clashes; diseconomies if the combined firm is hard to manage.</li>
      </ul>`},
    {h:"Vertical integration", html:`
      <p><b>Vertical integration</b> — joining with a firm at a <b>different stage</b> of the same supply chain. Think of brewing: production → distribution → retail.</p>
      <ul>
        <li><b>Backward vertical</b> — buying a <b>supplier</b> (e.g. a car maker buying its tyre supplier; Nescafé acquiring coffee growers). Secures supply, quality and better margins.</li>
        <li><b>Forward vertical</b> — buying a <b>distributor/retailer</b> (e.g. a coffee-bean producer buying a chain of coffee shops to sell its own beans). Secures routes to market and captures retail profit.</li>
      </ul>
      <p><b>Drawbacks:</b> the firm may lack expertise in the new stage, integration is costly, and it can reduce flexibility. <b>Heineken</b> has used both vertical and horizontal integration to control supply and expand.</p>`},
    {h:"Conglomerate integration", html:`
      <p>A <b>conglomerate</b> is formed when <b>two unrelated businesses</b> integrate.</p>
      <ul>
        <li><b>Advantages:</b> diversification spreads risk — if one market slumps, another can balance it, giving more stable overall profit.</li>
        <li><b>Disadvantages:</b> no expertise in the new industry, management attention is split, and the firm can be distracted from its core business, causing inefficiency.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Merger", marks:2, body:`When two businesses agree to join together to form a single new business <span class="pt">1</span>, usually to gain scale, market share or synergy <span class="pt">2</span>.`},
    {term:"Takeover (acquisition)", marks:2, body:`When one business buys a controlling stake in another <span class="pt">1</span>, so the acquiring firm gains control, often to grow quickly or enter a new market <span class="pt">2</span>.`},
    {term:"Horizontal integration", marks:2, body:`When a business merges with or acquires another at the same stage of production in the same market <span class="pt">1</span>, increasing market share and reducing competition <span class="pt">2</span>.`},
    {term:"Vertical integration", marks:2, body:`When a business merges with or acquires a firm at a different stage of its supply chain <span class="pt">1</span> — a supplier (backward) or a distributor (forward) <span class="pt">2</span>.`},
    {term:"Backward vertical integration", marks:2, body:`When a business acquires one of its suppliers <span class="pt">1</span>, giving it greater control over the cost, quality and reliability of its inputs <span class="pt">2</span>.`},
    {term:"Forward vertical integration", marks:2, body:`When a business acquires a firm further along its supply chain, such as a distributor or retailer <span class="pt">1</span>, securing its route to market and capturing retail profit <span class="pt">2</span>.`},
    {term:"Conglomerate", marks:2, body:`A business formed by the integration of two unrelated businesses in different industries <span class="pt">1</span>; it diversifies operations to spread risk <span class="pt">2</span>.`},
    {term:"Synergy", marks:2, body:`The idea that two combined businesses are worth more than the sum of their parts <span class="pt">1</span>, because merging cuts costs or boosts revenue beyond what each could achieve alone <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define 'horizontal integration'.",
     model:`Horizontal integration is when a business merges with or acquires another firm at the same stage of production in the same market <span class="pt">1</span>, increasing its market share and reducing competition <span class="pt">2</span>.`,
     fb:"Same stage + same market, plus the market-share/competition consequence."},
    {marks:2, q:"Distinguish between backward and forward vertical integration.",
     model:`Backward vertical integration is acquiring a supplier to control inputs <span class="pt">1</span>; forward vertical integration is acquiring a distributor or retailer to control the route to market <span class="pt">2</span>.`,
     fb:"Two contrasting points — upstream (supplier) vs downstream (distributor)."},
    {marks:4, q:"Explain one benefit to Nescafé of backward vertical integration with coffee growers.",
     model:`It gives Nescafé greater control over its supply of coffee beans <span class="pt">1</span>. This is because owning the growers secures a reliable source and removes dependence on third parties <span class="pt">2</span>. As a result, Nescafé is less exposed to price spikes or shortages <span class="pt">3</span>, so it can protect its production costs and profit margins over the long term <span class="pt">4</span>.`,
     fb:"Link owning the supplier to secure supply and protected margins."}
  ],
  caseStudy:{
    business:"Ferrero (Oltan & Thorntons), Heineken & GlobalReach",
    intro:`<p>Integration decisions in real and applied cases.</p>
      <ul>
        <li><b>Ferrero — Oltan Group (2014):</b> Ferrero (global revenue £8bn+) bought the world's largest hazelnut processor (Turkey, £600m turnover) — <b>backward vertical integration</b> securing a key commodity for Nutella, Kinder Bueno and Ferrero Rocher.</li>
        <li><b>Ferrero — Thorntons (2015):</b> bought the struggling British chocolate maker for £112m to enter the £6bn UK market — a British brand already losing sales and closing stores.</li>
        <li><b>Heineken:</b> has used both vertical and horizontal integration to control supply and expand share.</li>
        <li><b>GlobalReach Inc. &amp; FunTime Games:</b> a construction/pharma/renewables conglomerate acquiring a video-game developer — diversification vs the risk of entering a market where it has no expertise.</li>
      </ul>`
  },
  exam:[
    {marks:12, q:"Discuss whether GlobalReach Inc.'s decision to acquire FunTime Games (a conglomerate takeover) is likely to be beneficial. (12)",
     model:`<p><span class="tag t-P">POINT</span>One benefit is diversification, because FunTime operates in video games — unrelated to GlobalReach's construction, pharmaceuticals and renewable energy. <span class="tag t-C">CHAIN</span>This reduces reliance on any one sector, so if one industry underperforms, FunTime's success can offset the losses — making GlobalReach more financially stable and reducing overall business risk.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is access to a high-growth, profitable market, because demand for mobile and online gaming has risen sharply. <span class="tag t-C">CHAIN</span>FunTime could generate strong future revenues and reach a younger, tech-savvy audience, improving GlobalReach's long-term financial performance and brand appeal.</p>
     <p><span class="tag t-J">HOWEVER</span>However, GlobalReach has no experience in gaming, which needs different skills, leadership and culture. This means it may struggle with creative and design decisions in a fast-moving market, risking poor performance, internal clashes and wasted investment — a classic conglomerate danger of being distracted from the core business.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the acquisition could help GlobalReach diversify and grow if managed carefully, because it opens a high-growth sector and spreads risk. Success depends on balancing control with autonomy and protecting its existing units — so it is recommended GlobalReach proceeds cautiously, invests in gaming expertise and keeps its core operations stable.</p>`,
     fb:"Mr. Akram's exemplar (GlobalReach/FunTime). Conglomerate diversification + high-growth market balanced against the no-expertise risk, with a 'proceed with caution' conclusion."},
    {marks:20, q:"Using the data on Ferrero, evaluate the takeovers of the Oltan Group and Thorntons, and recommend which is most likely to have improved Ferrero's profits. (20)", caseImg:"resources/casestudies/cs-3-3-2-4-ferrero.png",
     model:`<p><span class="tag t-P">OLTAN — ADVANTAGE</span>Taking over the Oltan Group gave Ferrero more control over its supply chain, because hazelnuts are central to Nutella, Kinder Bueno and Ferrero Rocher. <span class="tag t-E">EXPLAIN</span>Acquiring the world's largest hazelnut processor secures a reliable source. <span class="tag t-C">CHAIN</span>This reduces the risk of price spikes or shortages from third-party suppliers. <span class="tag t-A">APPLY</span>So Ferrero can lower and stabilise production costs. <span class="tag t-J">JUDGE</span>This backward vertical integration directly protects long-term margins.</p>
     <p><span class="tag t-J">OLTAN — LIMITATION</span>However, Ferrero may lack expertise in agricultural processing, as Oltan was a family nut-harvesting and export business. Managing operations outside confectionery could bring inefficiency, so some expected cost savings might not materialise.</p>
     <p><span class="tag t-P">THORNTONS — ADVANTAGE</span>Buying Thorntons gave Ferrero a ready-made UK retail presence, because Thorntons already had stores and supermarket listings. <span class="tag t-C">CHAIN</span>This let Ferrero raise visibility fast in the £6bn UK chocolate market without building a brand from scratch. <span class="tag t-J">JUDGE</span>So UK share and revenue could rise in the short term.</p>
     <p><span class="tag t-J">THORNTONS — LIMITATION</span>However, Thorntons was already underperforming — losing sales and closing stores — so Ferrero took on a business needing major, costly restructuring, delaying or reducing any profit gain in a saturated market.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the Oltan acquisition was the better decision for profits, because it secures a key raw material and cuts long-term costs across Ferrero's biggest products, whereas Thorntons is a failing brand in a competitive market with no guaranteed turnaround. Success of the Oltan deal depends on managing agricultural operations and smooth integration; it is recommended Ferrero maximises the Oltan value and limits further investment in Thorntons unless UK performance clearly improves.</p>`,
     fb:"Mr. Akram's exemplar (Ferrero, 20). Full 5×5 PECAN comparing a backward-vertical deal (Oltan) with a forward/retail deal (Thorntons), each challenged, recommending Oltan on profit grounds."}
  ],
  resources:[
    {label:"Horizontal/vertical integration & conglomerates — lesson notes (PDF)", file:"resources/3-3-2-4-integration-notes.pdf"}
  ]
},
{
  code:"3.3.2.5", subtheme:"3.3.2", title:"Problems that can arise from growth",
  business:"Case studies: EasyJet, Emily's business, Microsoft–Nokia & Tesla–Grohmann", status:"live",
  notes:[
    {h:"Diseconomies of scale", html:`
      <p>Growing bigger does not always cut costs — sometimes a business gets <b>too big</b>. <b>Diseconomies of scale</b> occur when output grows too fast and the <b>cost per unit rises</b> (the upward arm of the U-shaped cost curve in 3.3.2.1). As a budget airline like <b>EasyJet</b> expanded rapidly it risked:</p>
      <ul>
        <li><b>Co-ordination &amp; control</b> — more routes, aircraft, sites and staff are harder to manage, so mistakes and inefficiency rise.</li>
        <li><b>Communication problems</b> — more layers and people mean messages are slower and more easily distorted.</li>
        <li><b>Motivation</b> — workers can feel like a small cog in a huge firm, lowering morale and productivity.</li>
      </ul>
      <p>Each of these pushes <b>unit costs up</b>, undoing the cost advantage growth was meant to deliver.</p>`},
    {h:"Internal communication problems", html:`
      <p>Communication breakdown is one of the clearest symptoms of a firm growing too large or too fast. When <b>Microsoft took over Nokia's handset division</b>, absorbing around <b>32,000 new employees</b> across new industries and locations, co-ordinating tasks, sharing updates and aligning decisions became far harder.</p>
      <p>The result can be <b>confusion, duplicated effort and slower product development</b> — all of which raise average costs and can let more focused rivals move faster.</p>`},
    {h:"Overtrading", html:`
      <p><b>Overtrading</b> is where a business <b>expands too quickly without the finance to support it</b>. It is a problem of <b>working capital and cash flow</b> — running out of cash — and can happen <b>even when the business is profitable</b>. Without suitable finance, overtrading can cause business failure.</p>
      <p><b>Worked example — Emily's business:</b> turnover £200k, profit £18k, £25k overdraft. She wins a £40k-a-month contract (paid 75 days after delivery) and orders all her supplies at once:</p>
      <ul>
        <li><b>Months 1–2:</b> deliveries go well; she raises her overdraft.</li>
        <li><b>Month 3:</b> overdraft at the limit; unpaid suppliers start calling.</li>
        <li><b>Month 4:</b> she can't pay suppliers; some stop delivering and threaten legal action.</li>
        <li><b>Months 5–6:</b> over the overdraft limit, suppliers sue, the bank stops paying cheques, a customer payment is late — and the business collapses.</li>
      </ul>
      <p>Emily was <b>profitable</b> but ran out of <b>cash</b>. Overtrading is most likely when a firm grows sales rapidly, gives customers long credit, pays suppliers quickly, and holds too little working capital.</p>`},
    {h:"Managing the problems of growth", html:`
      <p>Businesses can reduce these risks by:</p>
      <ul>
        <li><b>Controlled, staged growth</b> — expanding at a pace management and cash flow can support.</li>
        <li><b>Delegation &amp; decentralisation</b> — pushing decisions down to keep the firm responsive.</li>
        <li><b>Better communication systems</b> — clear structures and technology to keep information flowing.</li>
        <li><b>Securing finance first</b> — arranging enough working capital and funding before expanding, and negotiating supplier/customer payment terms to protect cash flow.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Diseconomies of scale", marks:2, body:`Rising average unit costs that occur when a business grows too large or too fast to manage efficiently <span class="pt">1</span>, caused by communication, co-ordination and motivation problems <span class="pt">2</span>.`},
    {term:"Overtrading", marks:2, body:`When a business expands too quickly without enough finance to support it <span class="pt">1</span>, causing cash-flow problems that can lead to failure even when the business is profitable <span class="pt">2</span>.`},
    {term:"Working capital", marks:2, body:`The day-to-day finance a business has to meet its short-term debts <span class="pt">1</span>, calculated as current assets minus current liabilities; too little can trigger overtrading <span class="pt">2</span>.`},
    {term:"Internal communication problem", marks:2, body:`A breakdown in sharing information within a growing business <span class="pt">1</span>, as extra layers and staff slow and distort messages, causing confusion and higher costs <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'diseconomies of scale'.",
     model:`Diseconomies of scale occur when a business grows too fast or too large to manage efficiently <span class="pt">1</span>, so its average cost per unit rises rather than falls <span class="pt">2</span>.`,
     fb:"Links over-rapid/over-large growth to rising unit cost — the opposite of economies of scale."},
    {marks:2, q:"Define the term 'overtrading'.",
     model:`Overtrading is when a business expands too quickly without the finance to support it <span class="pt">1</span>, causing cash-flow problems that can lead to failure even if it is profitable <span class="pt">2</span>.`,
     fb:"Rapid expansion + insufficient finance, with the cash-flow/failure consequence."},
    {marks:4, q:"Explain one reason diseconomies of scale might affect Microsoft after taking over Nokia's handset division.",
     model:`One reason is poor communication <span class="pt">1</span>. This is because Microsoft is absorbing around 32,000 new Nokia employees across new industries and locations, making it harder to co-ordinate tasks and align decisions <span class="pt">2</span>. As a result, confusion or duplicated effort may arise <span class="pt">3</span>, slowing product development and pushing average costs up rather than down <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Microsoft/Nokia). Links the 32,000-employee scale to a communication breakdown and higher unit costs."}
  ],
  caseStudy:{
    business:"EasyJet, Emily's business, Microsoft–Nokia & Tesla–Grohmann",
    intro:`<p>Where growth creates problems.</p>
      <ul>
        <li><b>EasyJet:</b> rapid expansion risked co-ordination, communication and motivation problems that raise unit costs.</li>
        <li><b>Emily's business:</b> a profitable firm that collapsed through overtrading — a £40k/month contract paid 75 days in arrears drained its cash.</li>
        <li><b>Microsoft–Nokia:</b> absorbing ~32,000 employees created clear communication diseconomies.</li>
        <li><b>Tesla–Grohmann (2016):</b> Tesla bought automation supplier Grohmann Engineering (backward vertical integration) to hit its Model 3 target of 500,000 vehicles (from ~84,000). It gained ~700 specialist engineers and technology for ~$109.5m cash (plus a $25.8m incentive) — but founder Klaus Grohmann left, staff (paid 25–30% below the industry rate) feared for pay and jobs, and key customers BMW, Daimler and Bosch were at risk.</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Discuss the extent to which the problems of rapid growth may have been managed by Tended Ltd. (8)",
     model:`<p><span class="tag t-P">POINT</span>Tended managed the financial problems of rapid growth fairly well, because although it ran out of cash on a few occasions it secured £50,000 from Enterprise Loans. <span class="tag t-C">CHAIN</span>This let it keep developing the Tended Protect device, create jobs and fulfil initial orders, so the impact of cash-flow shortages was reduced and the business could keep growing.</p>
     <p><span class="tag t-P">POINT</span>It also managed operational problems well, because staff worked as a team, put in long hours and kept innovating despite development issues. <span class="tag t-C">CHAIN</span>Problems were fixed and the firm stayed agile, so it overcame development delays and continued to expand.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the problems may not have been fully managed, because the business ran out of cash several times and faced development issues taking months to resolve. This points to weak growth planning and forecasting, so Tended could have faced a serious threat to survival had the finance not been secured.</p>`,
     fb:"Mr. Akram's exemplar (Tended Ltd). Financial and operational problems judged as 'managed, but not fully' — the balance and 'depended on securing finance' judgement lift it."},
    {marks:12, q:"Discuss the likely problems Tesla may experience following its takeover of Grohmann Engineering. (12)", caseImg:"resources/casestudies/cs-3-3-2-5-tesla-grohmann.png",
     model:`<p><span class="tag t-P">POINT</span>One problem is leadership and cultural conflict, because founder Klaus Grohmann left after a strategic disagreement over whether to prioritise Tesla or existing customers. <span class="tag t-C">CHAIN</span>Losing his leadership and unsettling 700 employees could cut motivation and productivity or prompt skilled engineers to quit, delaying Model 3 production machinery and making the 500,000-vehicle target harder to hit. <span class="tag t-J">HOWEVER</span>However, the founder's exit might let Tesla impose its strategy faster, with remaining managers focused fully on Tesla projects.</p>
     <p><span class="tag t-P">POINT</span>A second problem is employee costs and industrial relations, because pay was reportedly 25–30% below the industry agreement. <span class="tag t-C">CHAIN</span>Tesla had to offer pay rises, share options and job guarantees to avoid industrial action; this raises operating costs and erodes the savings the takeover was meant to bring, and any strike could delay machinery and lost sales. <span class="tag t-J">HOWEVER</span>However, better pay and security could lift motivation and help retain the specialist engineers Tesla needs.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the most serious problem is likely the risk of losing specialist employees and disrupting automation projects, because Tesla's production target depends on Grohmann's expertise. The financial and customer risks matter, but they are more manageable if the takeover genuinely speeds up production — so success depends on Tesla retaining and motivating the engineers it has bought.</p>`,
     fb:"Mr. Akram's exemplar (Tesla/Grohmann, 12). Two problems each with a counter, and a judgement that the people/expertise risk is the most serious."},
    {marks:20, q:"Evaluate whether Tesla should have grown its automation capability through the takeover of Grohmann Engineering rather than through organic growth. (20)", caseImg:"resources/casestudies/cs-3-3-2-5-tesla-grohmann.png",
     model:`<p><span class="tag t-P">TAKEOVER — SPEED</span>The takeover gave Tesla immediate access to an established automation business. <span class="tag t-E">EXPLAIN</span>Grohmann already had ~700 specialist employees and automation technology. <span class="tag t-C">CHAIN</span>Tesla needed to lift output from ~84,000 to 500,000 vehicles fast, and building that expertise organically would need years of recruitment, training and research. <span class="tag t-A">APPLY</span>So the deal shortened the time to develop Model 3 production systems. <span class="tag t-J">JUDGE</span>Speed was the takeover's biggest advantage.</p>
     <p><span class="tag t-P">TAKEOVER — CONTROL</span>It also gave greater control, because Grohmann had split its resources between Tesla and rivals like BMW and Daimler. <span class="tag t-C">CHAIN</span>Owning it (backward vertical integration) let Tesla prioritise its own machinery and protect the technology from competitors. <span class="tag t-J">JUDGE</span>So control over a critical input improved.</p>
     <p><span class="tag t-J">ORGANIC — FINANCE</span>However, organic growth would have eased cash-flow pressure, because the deal cost ~$109.5m cash plus a $25.8m incentive while Tesla was already planning ~$2bn of capex (incl. the Nevada Gigafactory). Avoiding it would leave more finance for factory expansion and cut borrowing — though building the capability in-house would still cost heavily and could eventually exceed the purchase price.</p>
     <p><span class="tag t-J">ORGANIC — INTEGRATION</span>Organic growth would also avoid integration problems, because Tesla could hire people who accepted its culture from the start, sidestepping the leadership clash and pay disputes that followed the takeover — but that could take years, risking the Model 3 targets and lost sales.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the takeover was probably the right strategy because Tesla faced an urgent production target and Grohmann already had the people and technology it needed — speed organic growth could not match. But success depended on retaining Grohmann's engineers, resolving pay concerns and converting the technology into higher output. Had the deadline been less pressing, organic growth would have been the less risky, more controlled route.</p>`,
     fb:"Mr. Akram's exemplar (Tesla/Grohmann, 20). Full 5×5 PECAN comparing takeover vs organic on speed, control, finance and integration, concluding the takeover fits Tesla's urgent target."}
  ],
  resources:[
    {label:"Problems that can arise from growth — lesson notes (PDF)", file:"resources/3-3-2-5-problems-of-growth-notes.pdf"},
    {label:"Tesla & Grohmann Engineering — case study & questions (PDF)", file:"resources/3-3-2-5-tesla-grohmann-case.pdf"}
  ]
},
{
  code:"1.3.1.1", subtheme:"1.3.1", title:"The market",
  business:"Case studies: Coca-Cola, Primark, Lehman's, Ocado, Oppo & Spotify", status:"live",
  notes:[
    {h:"Mass & niche markets", html:`
      <p>A <b>market</b> is where buyers and sellers meet to trade. Businesses choose the <b>scope</b> of the market they serve:</p>
      <ul>
        <li><b>Mass market</b> — selling a standardised product to a very large, broad audience (e.g. Coca-Cola). <b>Pros:</b> high sales volume, economies of scale, strong brand awareness. <b>Cons:</b> intense competition, pressure to keep prices and margins low, harder to stand out.</li>
        <li><b>Niche market</b> — serving a small, specific segment with particular needs (e.g. Ferrari; Lehman's handmade, non-electrical goods). <b>Pros:</b> less competition, premium prices, strong loyalty. <b>Cons:</b> limited sales volume, higher risk if tastes shift, vulnerable if a big firm enters.</li>
      </ul>`},
    {h:"Market size, share & growth", html:`
      <p>Three key measures let a business judge a market and its position in it:</p>
      <ul>
        <li><b>Market size</b> — the total sales in a market, measured by <b>value</b> (average selling price × quantity sold) or <b>volume</b> (total quantity sold). Value suits a luxury maker; volume suits a high-turnover product.</li>
        <li><b>Market share</b> — a firm's sales as a percentage of the whole market: <b>(firm's sales ÷ total market sales) × 100</b>. E.g. 100,000 units out of 500,000 = <b>20%</b>.</li>
        <li><b>Market growth</b> — how fast the market is expanding: <b>((New − Old) ÷ Old) × 100</b>. E.g. sporting clothing rising from £1.2bn (2010) to £2.9bn (2020) = <b>+141.7%</b>.</li>
      </ul>
      <p>Rising share in a growing market is the strongest position; a steady share of a shrinking market is a warning sign.</p>`},
    {h:"Adding value", html:`
      <p><b>Added value</b> is the difference between the <b>price a customer pays</b> and the <b>cost of the inputs</b> (bought-in materials and components) used to make the product or service. The more value a business adds, the more it can charge and the better it competes.</p>
      <p>Businesses add value in many ways:</p>
      <ul>
        <li><b>Branding</b> — a trusted name customers will pay more for.</li>
        <li><b>Design &amp; quality</b> — a better-made or better-looking product.</li>
        <li><b>Convenience</b> — making the product easier to buy or use (e.g. Ocado's online ordering, flexible delivery slots and reminder texts).</li>
        <li><b>Customer service</b> — a personalised, reliable experience that builds loyalty.</li>
        <li><b>USP</b> — a unique feature rivals can't easily copy.</li>
      </ul>
      <p>Adding value raises revenue and loyalty, but the extra services (tech, staffing, logistics) also raise costs — so a firm must add value <b>efficiently</b> to protect its margins.</p>`},
    {h:"Product differentiation", html:`
      <p><b>Product differentiation</b> means making a product <b>different from its competitors</b> through one or more characteristics, which increases <b>brand loyalty, sales and growth</b>. It lets a business stand out, attract customers and often justify a higher price instead of competing only on price.</p>
      <p>Firms differentiate through:</p>
      <ul>
        <li><b>Design &amp; features</b> — e.g. Aston Martin designing cars with higher driver's seats and greater durability to appeal to new buyers.</li>
        <li><b>Quality or ingredients</b> — e.g. Oppo's lower-calorie ice cream using fresh milk, coconut oil and stevia instead of cream and sugar.</li>
        <li><b>Branding &amp; image</b> — premium packaging or an ethical/eco positioning (the bottled-water test: plain vs "glacier-sourced" vs eco-charity brand).</li>
      </ul>
      <p>A strong <b>unique selling point (USP)</b> is the goal — but differentiation costs money, and if the price premium is too high, price-sensitive customers may still choose cheaper rivals.</p>`},
    {h:"Competition & dynamic markets", html:`
      <p>Competition comes in two forms:</p>
      <ul>
        <li><b>Direct competition</b> — two or more businesses offer the <b>same</b> product for the same market (e.g. Nike vs Adidas).</li>
        <li><b>Indirect competition (substitutes)</b> — businesses offer <b>different</b> products that meet the <b>same need</b> (e.g. Eurotunnel vs British Airways for London–Paris travel).</li>
      </ul>
      <p>The <b>degree of competition</b> strongly influences strategy — intense rivalry (like sportswear) pushes firms to innovate, differentiate or cut prices, while small independents (e.g. corner shops facing supermarket convenience stores) must find niches or service advantages. For customers, more competition usually means <b>lower prices, more choice and better quality</b>, but can bring confusion, aggressive marketing, or less choice later if weaker firms exit.</p>
      <p><b>Dynamic markets</b> change rapidly as tastes, technology and competition shift. <b>Online retailing</b> is a classic example — over half of purchases are now made online, with "clicks" (online-only) and "bricks and clicks" retailers (e.g. Argos, Next, H&M selling in-store and online). <b>Music streaming</b> (e.g. Spotify) is another. Firms must keep adapting their products and channels to survive.</p>`},
    {h:"Risk & uncertainty", html:`
      <p>Business decisions involve both risk and uncertainty — and the difference matters:</p>
      <ul>
        <li><b>Risk</b> is something an entrepreneur can <b>plan for</b>: the probabilities of outcomes can be estimated, the entrepreneur controls how much risk to take, and strategies can reduce it (e.g. "£100,000 profit if we hit X sales, £20,000 loss if we don't").</li>
        <li><b>Uncertainty</b> is caused by <b>unexpected external factors outside the entrepreneur's control</b> — competitor behaviour, natural disasters, pandemics (e.g. COVID), economic, cultural or political change. The outcomes can't be accurately estimated, so strategies can only be devised once the change has happened.</li>
      </ul>
      <p>Managers reduce risk through research, planning, forecasting, diversification and contingency planning — but uncertainty can only be managed, never removed.</p>`}
  ],
  definitions:[
    {term:"Mass market", marks:2, body:`A large, broad market where a business sells a standardised product to as many customers as possible <span class="pt">1</span>; it offers high volume and economies of scale but intense competition and low margins <span class="pt">2</span>.`},
    {term:"Niche market", marks:2, body:`A small, specific segment of a market with particular needs <span class="pt">1</span>; it faces less competition and can charge premium prices, but has limited sales volume <span class="pt">2</span>.`},
    {term:"Market size", marks:2, body:`The total sales in a market, measured by value (price × quantity) or volume (quantity sold) <span class="pt">1</span>; it shows how large the opportunity is and whether a market is worth entering <span class="pt">2</span>.`},
    {term:"Market share", marks:2, body:`A firm's sales as a percentage of total market sales <span class="pt">1</span>, calculated as (firm's sales ÷ total market sales) × 100; a higher share signals a stronger competitive position <span class="pt">2</span>.`},
    {term:"Market growth", marks:2, body:`The percentage change in the size of a market over a period <span class="pt">1</span>, calculated as ((new − old) ÷ old) × 100; a growing market offers more opportunity for sales <span class="pt">2</span>.`},
    {term:"Added value", marks:2, body:`The difference between the price a customer pays and the cost of the inputs used to make a product or service <span class="pt">1</span>; a business adds it through branding, design, quality, convenience or service, letting it charge more and compete <span class="pt">2</span>.`},
    {term:"Product differentiation", marks:2, body:`Making a product stand out from competitors through a distinctive characteristic <span class="pt">1</span>; this builds brand loyalty and can support higher prices, sales and growth <span class="pt">2</span>.`},
    {term:"Unique selling point (USP)", marks:2, body:`A feature that makes a product distinct from its rivals and hard to copy <span class="pt">1</span>; it gives customers a clear reason to choose it rather than competing on price alone <span class="pt">2</span>.`},
    {term:"Direct competition", marks:2, body:`When two or more businesses offer the same product for the same market <span class="pt">1</span>, such as Nike and Adidas competing for the same customers <span class="pt">2</span>.`},
    {term:"Indirect competition", marks:2, body:`When businesses offer different products that satisfy the same customer need <span class="pt">1</span>, such as the Eurotunnel train versus a flight for London–Paris travel; also called substitutes <span class="pt">2</span>.`},
    {term:"Dynamic market", marks:2, body:`A market that changes rapidly as tastes, technology and competition shift <span class="pt">1</span>, forcing businesses to keep adapting their products and strategies to survive <span class="pt">2</span>.`},
    {term:"Risk", marks:2, body:`A situation where the probabilities of outcomes can be estimated and planned for <span class="pt">1</span>; the entrepreneur controls how much risk to take and can use strategies to reduce it <span class="pt">2</span>.`},
    {term:"Uncertainty", marks:2, body:`A situation caused by unexpected external factors outside the entrepreneur's control, such as a pandemic or competitor action <span class="pt">1</span>; the outcomes cannot be accurately predicted, so they can only be managed once they occur <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'added value'.",
     model:`Added value is the difference between the price a customer pays and the cost of the inputs used to make the product <span class="pt">1</span>; businesses raise it through branding, design, quality or convenience so they can charge more and compete <span class="pt">2</span>.`,
     fb:"Price-minus-input-cost, plus how a firm adds it — two developed points, not just an example."},
    {marks:2, q:"Distinguish between a mass market and a niche market.",
     model:`A mass market sells a standardised product to a large, broad audience (e.g. Coca-Cola) <span class="pt">1</span>; a niche market serves a small, specific segment with particular needs (e.g. Ferrari), facing less competition but lower volume <span class="pt">2</span>.`,
     fb:"Two contrasting points — broad/standardised vs small/specific."},
    {marks:2, q:"A business sells 120,000 units in a market where total sales are 800,000 units. Calculate its market share.",
     model:`Market share = (firm's sales ÷ total market sales) × 100 <span class="pt">1</span> = (120,000 ÷ 800,000) × 100 = <b>15%</b> <span class="pt">2</span>.`,
     fb:"Correct formula and a correctly computed percentage."},
    {marks:4, q:"A market was worth £1.2bn in 2010 and £2.9bn in 2020. Calculate the market growth over the period and briefly interpret it.",
     model:`Market growth = ((new − old) ÷ old) × 100 <span class="pt">1</span> = ((2.9 − 1.2) ÷ 1.2) × 100 = <b>+141.7%</b> <span class="pt">2</span>. This is very rapid growth <span class="pt">3</span>, signalling a strong opportunity but likely attracting new entrants and intensifying competition <span class="pt">4</span>.`,
     fb:"Formula, correct figure (~141.7%), and a short interpretation of what it means."},
    {marks:2, q:"Define the term 'uncertainty' in a business context.",
     model:`Uncertainty is caused by unexpected external factors outside a business's control, such as a pandemic or competitor action <span class="pt">1</span>; the outcomes cannot be accurately estimated, so they can only be managed once they occur <span class="pt">2</span>.`,
     fb:"External/unpredictable, contrasted implicitly with plannable risk."},
    {marks:4, q:"Explain one way changing consumer tastes could affect a business operating in a dynamic market.",
     model:`A shift towards healthier eating reduces demand for high-sugar products <span class="pt">1</span>. This is because health-conscious consumers switch to lower-calorie alternatives <span class="pt">2</span>. As a result, a traditional ice-cream maker could lose sales and market share <span class="pt">3</span>, so it must reformulate or launch healthier lines to stay competitive in a fast-changing market <span class="pt">4</span>.`,
     fb:"Link a taste change to a demand effect and a developed business consequence."},
    {marks:4, q:"Explain how Aston Martin uses product differentiation to gain a competitive advantage. (4)",
     model:`Aston Martin differentiates by designing cars that appeal to younger buyers and women — e.g. higher driver's seats and greater durability <span class="pt">1</span>. These features make its vehicles more practical and distinct from traditional sports cars <span class="pt">2</span>. This gives a competitive advantage over premium rivals like Bentley and Rolls-Royce <span class="pt">3</span>, helping Aston Martin attract new customers and grow market share <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Aston Martin). A specific differentiating feature linked to a competitive-advantage consequence."}
  ],
  caseStudy:{
    business:"Coca-Cola, Primark, Lehman's, Ocado, Oppo & Spotify",
    intro:`<p>Real businesses used in the exam questions.</p>
      <ul>
        <li><b>Coca-Cola</b> — a classic <b>mass-market</b> business selling a standardised product worldwide.</li>
        <li><b>Primark</b> — a mass-market fashion retailer facing intense competition (Next, M&amp;S) and thin margins, with no online sales.</li>
        <li><b>Lehman's</b> — a <b>niche</b> seller of handmade, non-electrical goods (wooden toys, oil lamps) charging premium prices.</li>
        <li><b>Ocado</b> — adds value through convenience; weekly orders grew from 120,000 (2012) to 230,000 (2016), revenue £680m → £1,258m.</li>
        <li><b>Oppo</b> — differentiates on a healthier, lower-calorie recipe; grew to 1,600+ stores.</li>
        <li><b>Spotify</b> — operating in the fast-changing, <b>dynamic</b> music-streaming market.</li>
      </ul>`
  },
  exam:[
    {marks:6, q:"Assess the difficulties Primark might face from operating in a mass market. (6)", caseImg:"resources/casestudies/cs-1-3-1-1-primark-mass-market.png",
     model:`<p><span class="tag t-P">POINT</span>One difficulty is high competition, because the mass market has many large fashion retailers such as Next and M&amp;S. <span class="tag t-C">CHAIN</span>This forces Primark to keep differentiating through price and fast fashion to retain market share, so it faces constant pressure to innovate while still keeping prices low.</p>
     <p><span class="tag t-P">POINT</span>A second difficulty is low profit margins, because Primark sells at very low prices to appeal to a wide audience and does not sell online, limiting its sales channels. <span class="tag t-C">CHAIN</span>It must keep costs very low (e.g. little advertising) to stay profitable, so it may struggle to respond to changing consumer behaviour or invest in long-term growth.</p>`,
     fb:"Mr. Akram's exemplar (Primark). Two mass-market difficulties — competition and thin margins/no online — each developed to a business consequence."},
    {marks:6, q:"Analyse two possible benefits to a niche business such as Lehman's of selling to a niche market. (6)", caseImg:"resources/casestudies/cs-1-3-1-1-lehmans.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is higher prices, because Lehman's sells unique, handmade, low-tech products not widely available elsewhere. <span class="tag t-C">CHAIN</span>With less competition in the niche and customers valuing traditional items like wooden toys and oil lamps, Lehman's can charge premium prices and protect higher profit margins.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is strong brand loyalty, because many products are made locally by long-serving skilled workers, so customers see the brand as trustworthy and authentic. <span class="tag t-C">CHAIN</span>This drives repeat purchases and positive word of mouth, giving Lehman's a steady customer base and supporting long-term stability and growth.</p>`,
     fb:"Mr. Akram's exemplar (Lehman's). Two niche benefits — premium pricing and loyalty — each developed; strong application to the handmade product."},
    {marks:8, q:"Assess how successfully Ocado has added value to its grocery service. (8)", caseImg:"resources/casestudies/cs-1-3-1-1-ocado.png",
     model:`<p><span class="tag t-P">POINT</span>Ocado has added value through convenience and personalised service, because it lets customers shop online with flexible delivery slots and reminder texts naming the driver. <span class="tag t-C">CHAIN</span>This creates a more customer-friendly experience than traditional supermarkets, so Ocado stands out in a competitive market; weekly orders grew from 120,000 (2012) to 230,000 (2016) and revenue from £680m to £1,258m, building strong brand loyalty.</p>
     <p><span class="tag t-J">HOWEVER</span>However, these extra services raise Ocado's operating costs, because colour-coded bag packing, delivery accuracy and in-house technology need major financial and human resources. This means that, even though customers value the service, Ocado could struggle to protect profit margins if prices can't rise enough to cover the costs.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Ocado has added value very successfully in terms of customer experience and growth, but its success depends on improving efficiency so the added value does not make the business model unsustainable.</p>`,
     fb:"Mr. Akram's exemplar (Ocado). Convenience/service added value with the order and revenue figures, balanced by the cost-to-margins risk and an efficiency-dependent judgement."},
    {marks:10, q:"Assess the importance of product differentiation to the success of Oppo. (10)",
     model:`<p><span class="tag t-P">POINT</span>One key benefit is that differentiation let Oppo target a clear gap for healthier ice cream, because traditional ice cream is high in sugar and calories that put off health-conscious consumers. <span class="tag t-C">CHAIN</span>Oppo's lower-calorie recipe (fresh milk, coconut oil, stevia) created a strong USP versus Häagen-Dazs or Ben &amp; Jerry's, so it attracted health-aware buyers and supermarket interest — expanding from trials to over 1,600 stores.</p>
     <p><span class="tag t-J">HOWEVER</span>However, setting the right price is also very important, because Oppo competes with large global brands that can offer lower prices and wide promotions. If Oppo's prices are much higher, price-sensitive customers may still pick cheaper alternatives, making it hard to turn interest into repeat sales.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, differentiation is the most important factor in Oppo's success, because its unique health positioning gives a strong competitive edge. But success depends on continuing to innovate while keeping pricing competitive — so it is recommended Oppo combines health-driven innovation with competitive pricing to widen its market and secure long-term growth.</p>`,
     fb:"Mr. Akram's exemplar (Oppo, 10). Differentiation benefit with the recipe/1,600-stores evidence, balanced against pricing, concluding differentiation matters most but depends on price."},
    {marks:10, q:"Assess the consequences to a business such as Spotify of operating in a dynamic market. (10)", caseImg:"resources/casestudies/cs-1-3-1-1-spotify.png",
     model:`<p><span class="tag t-P">POINT</span>One positive consequence is the chance to grow fast, because a dynamic market like music streaming constantly offers new customers and ways to consume. <span class="tag t-C">CHAIN</span>Spotify can keep adding features (playlists, podcasts) and reach new segments, so it can expand its subscriber base and revenue quickly.</p>
     <p><span class="tag t-P">POINT</span>A second positive is that innovation builds competitive advantage, because adapting faster than rivals keeps Spotify relevant. <span class="tag t-C">CHAIN</span>Continuous product development strengthens customer loyalty and brand image in a market where tastes shift quickly.</p>
     <p><span class="tag t-J">HOWEVER</span>However, a dynamic market also raises costs and risk, because Spotify must invest heavily and constantly in technology and content to keep up, and new rivals (Apple Music, Amazon Music) can erode its lead. Failing to adapt could quickly make it obsolete.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, operating in a dynamic market offers Spotify strong growth but demands relentless, costly innovation — so success depends on funding continual development without sacrificing profitability.</p>`,
     fb:"Mr. Akram's exemplar (Spotify). Growth and innovation upsides balanced against the cost/risk of constant change, with a funding-dependent judgement."},
{marks:20, q:"Evaluate whether operating in a dynamic market will prove successful for Shoe2U, a 3D-printed custom-shoe business. (20)", caseImg:"resources/casestudies/cs-1-3-1-1-shoe2u.png",
     model:`<p><span class="tag t-P">POINT</span>One reason it could succeed is that Shoe2U fits fast-changing consumer tastes, because a dynamic footwear market constantly chases the latest trends. <span class="tag t-E">EXPLAIN</span>Shoe2U uses apps and 3D-printing technology to let customers design their own shoes. <span class="tag t-C">CHAIN</span>This differentiation gives a clear USP that mass rivals lack, so it can charge a little above competitors and appeal to trend-driven buyers. <span class="tag t-J">JUDGE</span>So the dynamic market plays to Shoe2U's uniqueness.</p>
     <p><span class="tag t-P">POINT</span>A second strength is the sheer size of the market, worth around £6bn. <span class="tag t-C">CHAIN</span>Even a small niche within such a large market could generate enough revenue for Shoe2U to survive and grow, and its market research suggests the product will appeal. <span class="tag t-J">JUDGE</span>So there is genuine room to establish itself.</p>
     <p><span class="tag t-J">LIMITATION</span>However, a fashion market usually relies on top designers producing the latest styles, which sits awkwardly with letting customers design shoes — unless only the basic shape is customised. The market research is also unconvincing given its small sample size, so demand is uncertain.</p>
     <p><span class="tag t-J">LIMITATION</span>Competition is a bigger threat: once 3D-printing becomes widespread, large high-street retailers could add in-store shoe-scanning, creating intense, direct competition. As an unknown brand with a limited promotional budget and low barriers to entry online, Shoe2U may struggle to build awareness.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the dynamic market offers Shoe2U real opportunity through its customisation USP, but success depends on protecting that USP before rivals copy it and on building brand awareness on a small budget. It is recommended Shoe2U focuses on a defensible niche and invests in marketing early, because without awareness and a protected USP the intense competition of a dynamic market could overwhelm it.</p>`,
     fb:"Mr. Akram's exemplar (Shoe2U, 20). Customisation USP and market size weighed against demand uncertainty and fast-arriving competition, concluding success depends on protecting the USP and building awareness."},
  {marks:10, q:"Assess the consequences to Aston Martin of adapting to changes in the dynamic car market. (10)", caseImg:"resources/casestudies/cs-1-3-1-1-aston-martin.png",
     model:`<p><span class="tag t-P">POINT</span>One positive consequence is attracting new customer segments and lifting sales, because Aston Martin is targeting younger buyers and women with new models that challenge old stereotypes. <span class="tag t-C">CHAIN</span>This widens its audience beyond its historic base of older, wealthier men, so the brand stays relevant and competitive in a fast-changing premium market, growing sales, share and long-term revenue.</p>
   <p><span class="tag t-J">HOWEVER</span>However, adapting carries cost and risk, because new models and new segments need heavy investment in design, marketing and production. If the cars miss their target audience, Aston Martin wastes resources and could dilute its premium image — even alienating loyal customers and eroding exclusivity.</p>
   <p><span class="tag t-J">CONCLUSION</span>Overall, adapting is positive because it keeps Aston Martin competitive and relevant, but success depends on balancing innovation with protecting its exclusive, high-quality brand. It is recommended Aston Martin keeps investing in market research and customer feedback so new models reach new audiences without upsetting loyal buyers.</p>`,
     fb:"Mr. Akram's exemplar (Aston Martin, 10). New-segment growth balanced against cost/brand-dilution risk, concluding it depends on protecting exclusivity."}
  ,{marks:20, q:"Morrisons aims to regain market share. Evaluate whether it should cut prices further or improve its overall customer experience. (20)", caseImg:"resources/casestudies/cs-1-3-1-1-morrisons-market-share.png",
     model:`<p><span class="tag t-P">CUT PRICES</span>Cutting prices could help Morrisons regain share from discounters, because Aldi and Lidl made the biggest 2015 gains (17.6% and 17.9%) while Morrisons lost 1%. <span class="tag t-C">CHAIN</span>Many shoppers have shifted to low-cost rivals amid tighter budgets, so competing on value could win back price-conscious customers and recover sales and share.</p>
   <p><span class="tag t-J">LIMITATION</span>However, price cuts hit profit margins, because lower prices reduce profit per product — unsustainable when Aldi and Lidl have lower cost structures. Morrisons could then struggle to invest in technology, staff or stores, weakening long-term competitiveness.</p>
   <p><span class="tag t-P">CUSTOMER EXPERIENCE</span>Improving customer experience could build long-term loyalty and attract different shoppers, because some customers will pay a little more for better service, choice and environment. <span class="tag t-C">CHAIN</span>This differentiates Morrisons from discounters and attracts families and more affluent consumers, protecting margins while growing sales.</p>
   <p><span class="tag t-J">LIMITATION</span>However, experience improvements are slow and costly — store layouts, training and technology take time and may not lift footfall quickly, risking further share loss to aggressive price-cutters in the short term.</p>
   <p><span class="tag t-J">CONCLUSION</span>Overall, Morrisons should prioritise improving customer experience, because it builds lasting loyalty and attracts affluent shoppers for sustainable growth, whereas price-cutting alone risks margins and wins only temporary custom. Rejecting a pure price-cut, success depends on investing effectively in staff, layout and range while keeping key-item prices competitive — so a customer-experience strategy, with sharp prices on essentials, is recommended.</p>`,
     fb:"Mr. Akram's exemplar (Morrisons, 20). Full evaluation of price-cutting vs customer experience with the Aldi/Lidl share figures, recommending experience with competitive key prices."}
  ],
  resources:[
    {label:"The market (mass/niche, size & share, competition, risk) — lesson notes (PDF)", file:"resources/1-3-1-1-the-market-notes.pdf"},
    {label:"Market size, share & growth — calculation practice (PDF)", file:"resources/1-3-1-1-market-calcs-practice.pdf"}
  ]
},
{
  code:"1.3.1.2", subtheme:"1.3.1", title:"Market research",
  business:"Case studies: McDonald's, Superdry, Nando's (China) & Innocent", status:"live",
  notes:[
    {h:"Purpose & types of market research", html:`
      <p><b>Market research</b> is the collection and analysis of data and information to inform a business about its market — identifying customer needs, estimating demand and understanding consumer behaviour before committing resources.</p>
      <ul>
        <li><b>Primary (field) research</b> — collecting <b>first-hand, original data</b> that did not exist before, straight from the market.</li>
        <li><b>Secondary (desk) research</b> — gathering <b>existing data</b> that has already been produced, from <b>internal</b> sources (sales records, loyalty data) or <b>external</b> sources (reports, government data).</li>
      </ul>`},
    {h:"Methods of research", html:`
      <table class="datatable">
        <tr><th>Primary (field)</th><th>Secondary (desk)</th></tr>
        <tr><td>Surveys &amp; questionnaires</td><td>Internet &amp; databases</td></tr>
        <tr><td>Focus groups &amp; interviews</td><td>Market &amp; industry reports</td></tr>
        <tr><td>Observation</td><td>Government reports</td></tr>
        <tr><td>Test marketing &amp; product trials</td><td>Newspapers &amp; social media</td></tr>
      </table>
      <p><b>Primary</b> is tailored and up to date but costly and slow; <b>secondary</b> is cheap and quick but may be out of date or not specific to the business. Firms often use both — e.g. McDonald's uses surveys and focus groups alongside industry reports.</p>`},
    {h:"Quantitative vs qualitative data", html:`
      <ul>
        <li><b>Quantitative</b> research collects <b>numerical</b> data — the <b>who, where, how much, how many, how often</b>. It measures trends, demand and behaviour (e.g. survey statistics).</li>
        <li><b>Qualitative</b> research explores <b>opinions, reasons and motivations</b> — the <b>why, would, how</b>. It gives depth of understanding (e.g. focus-group discussion).</li>
      </ul>
      <p>Quantitative data is easy to measure and compare but lacks the "why"; qualitative data is rich and insightful but harder to analyse and more subjective. Strong research usually blends both.</p>`},
    {h:"Sampling", html:`
      <p>Rather than ask the whole target market (expensive and slow), a business questions a smaller <b>sample</b> chosen to represent it:</p>
      <ul>
        <li><b>Random sampling</b> — everyone has an equal chance of selection (e.g. a computer picks names from a database). Cheap and quick, but may not be representative and needs a full customer list.</li>
        <li><b>Stratified sampling</b> — the market is split into sub-groups (age, gender, income, location) and a <b>random</b> sample is taken from each, sized in proportion (e.g. 70 males : 30 females if sales are 70% male).</li>
        <li><b>Quota sampling</b> — like stratified, but researchers use <b>convenience</b> within each sub-group (asking anyone who fits the profile, e.g. in a shopping mall).</li>
      </ul>
      <p><b>Sampling bias</b> happens when the chosen sample doesn't represent the target market — from the wrong participants or too small a sample. Quota and stratified sampling reduce this risk; sample size must be chosen carefully.</p>`},
    {h:"Using ICT to support research", html:`
      <ul>
        <li><b>Loyalty-card programmes</b> — customers share data (age, location, preferences) stored on a database in return for personalised offers, letting a firm link purchases to identities and understand buyer behaviour.</li>
        <li><b>Social media</b> — a low-cost way to engage target customers, test ideas and get instant feedback on products and campaigns.</li>
      </ul>
      <p>ICT makes research faster, cheaper and more detailed, but raises data-accuracy and privacy considerations.</p>`}
  ],
  definitions:[
    {term:"Market research", marks:2, body:`The collection and analysis of data about a market <span class="pt">1</span>; it helps a business identify customer needs, estimate demand and reduce the risk of its decisions <span class="pt">2</span>.`},
    {term:"Primary research", marks:2, body:`The collection of first-hand, original data straight from the market, e.g. surveys or focus groups <span class="pt">1</span>; it is specific and up to date but costly and time-consuming <span class="pt">2</span>.`},
    {term:"Secondary research", marks:2, body:`Gathering data that already exists, from internal or external sources such as reports and databases <span class="pt">1</span>; it is cheap and quick but may be out of date or not specific to the business <span class="pt">2</span>.`},
    {term:"Quantitative data", marks:2, body:`Numerical data that answers how much, how many or how often <span class="pt">1</span>; it lets a business measure trends and demand but does not explain the reasons behind them <span class="pt">2</span>.`},
    {term:"Qualitative data", marks:2, body:`Descriptive, opinion-based data about what people think and why <span class="pt">1</span>; it gives depth of insight into motivations but is subjective and harder to analyse <span class="pt">2</span>.`},
    {term:"Sampling", marks:2, body:`Questioning a smaller group chosen to represent the whole target market <span class="pt">1</span>; it saves the time and cost of surveying everyone, provided the sample is representative <span class="pt">2</span>.`},
    {term:"Random sampling", marks:2, body:`A sample in which every member of the target market has an equal chance of being selected <span class="pt">1</span>; it is quick and cheap but may not be fully representative <span class="pt">2</span>.`},
    {term:"Stratified sampling", marks:2, body:`Dividing the target market into sub-groups and taking a random sample from each in proportion to its size <span class="pt">1</span>; this makes the sample more representative and reduces bias <span class="pt">2</span>.`},
    {term:"Quota sampling", marks:2, body:`Like stratified sampling but using convenience selection within each sub-group — asking anyone who fits the profile <span class="pt">1</span>; it is faster and cheaper but less random and more open to bias <span class="pt">2</span>.`},
    {term:"Sampling bias", marks:2, body:`When the views of the chosen sample do not accurately represent the target market <span class="pt">1</span>, caused by the wrong participants or too small a sample, making the results unreliable <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'market research'.",
     model:`Market research is the collection and analysis of data about a market <span class="pt">1</span>; it helps a business identify customer needs and estimate demand, reducing the risk of its decisions <span class="pt">2</span>.`,
     fb:"Collection/analysis of market data plus its purpose — two developed points."},
    {marks:2, q:"Distinguish between primary and secondary market research.",
     model:`Primary research collects new first-hand data straight from the market, such as a survey <span class="pt">1</span>; secondary research uses data that already exists, such as reports or databases <span class="pt">2</span>.`,
     fb:"First-hand/original vs existing/already-produced — two contrasting points."},
    {marks:4, q:"Explain one limitation of relying on secondary market research.",
     model:`One limitation is that the data may be out of date <span class="pt">1</span>. For example, extract data showing 63.2% of US coffee consumers were aged 40–59 was from 2016, so habits may have since changed <span class="pt">2</span>. This means the business could target the wrong group <span class="pt">3</span>, leading to poor decisions and missed opportunities in the current market <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar. Out-of-date data linked, with the coffee evidence, to a poor-targeting consequence."},
    {marks:4, q:"Explain one benefit to a hotel chain such as Yotel of using primary research.",
     model:`Primary research gives Yotel data specific to its own guests <span class="pt">1</span>. This is because surveys and interviews ask Yotel's actual and target customers directly, rather than relying on general data <span class="pt">2</span>. As a result, Yotel learns exactly what its guests value — e.g. tech-enabled, compact rooms <span class="pt">3</span>, so it can tailor its service and reduce the risk of investing in features customers don't want <span class="pt">4</span>.`,
     fb:"Link first-hand, business-specific data to a tailored decision and reduced risk."}
  ],
  caseStudy:{
    business:"McDonald's, Superdry, Nando's (China) & Innocent",
    docs:[
      {label:"Superdry — primary research (Q1)", file:"resources/casestudies/cs-1-3-1-2-superdry-primary-research.png"},
      {label:"Innocent — test marketing (Q2)", file:"resources/casestudies/cs-1-3-1-2-innocent-test-marketing.png"},
      {label:"Nando's (China) — extracts A–D: random sampling (Q3)", file:"resources/casestudies/cs-1-3-1-2-nandos-sampling.png"},
      {label:"BYD UAE — stratified sampling (Q4)", file:"resources/casestudies/cs-1-3-1-2-byd-uae-sampling.png"},
      {label:"That's Entertainment — market research (extra practice)", file:"resources/casestudies/cs-1-3-1-2-thats-entertainment.png"},
      {label:"Yotel — primary research (extra practice)", file:"resources/casestudies/cs-1-3-1-2-yotel-primary-research.png"}
    ],
    intro:`<p>Businesses used in the market-research questions.</p>
      <ul>
        <li><b>McDonald's</b> — uses a mix of primary methods (surveys, focus groups) and secondary sources (industry and government reports) to understand its market.</li>
        <li><b>Superdry</b> — weighing primary research methods to understand its specific fashion customers.</li>
        <li><b>Nando's (China)</b> — used random sampling of chefs, owners and managers to research food preferences before expanding across a large, diverse country.</li>
        <li><b>Innocent</b> — using test marketing to trial drinks with real customers before a full national launch.</li>
      </ul>`
  },
  exam:[
    {marks:6, q:"Assess the benefits to Superdry of using primary research to understand its customers. (6)", caseImg:"resources/casestudies/cs-1-3-1-2-superdry-primary-research.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is data specific to Superdry's own customers, because primary methods like surveys and focus groups ask its actual target market directly. <span class="tag t-C">CHAIN</span>This gives up-to-date, relevant insight into what Superdry shoppers want (styles, price points), so it can design ranges that fit demand and avoid wasting money on products that won't sell.</p>
     <p><span class="tag t-J">HOWEVER</span>However, primary research is costly and slow, and a small sample may not represent all Superdry customers. So the benefit depends on using a large enough, well-chosen sample — otherwise the findings could mislead rather than guide decisions.</p>`,
     fb:"Mr. Akram's exemplar (Superdry). Specific, up-to-date data benefit balanced by cost/sample-size limitation."},
    {marks:10, q:"Assess the value to Innocent of using test marketing before a full product launch. (10)", caseImg:"resources/casestudies/cs-1-3-1-2-innocent-test-marketing.png",
     model:`<p><span class="tag t-P">POINT</span>One value is reducing launch risk, because test marketing trials the product with real customers in a limited area first. <span class="tag t-C">CHAIN</span>Innocent gets genuine feedback on taste, price and packaging, so it can refine the drink before a national rollout — avoiding the heavy cost of a full launch that flops.</p>
     <p><span class="tag t-P">POINT</span>A second value is better forecasting, because actual trial sales indicate likely demand. <span class="tag t-C">CHAIN</span>This helps Innocent plan production and distribution more accurately, protecting cash flow and supplier relationships.</p>
     <p><span class="tag t-J">HOWEVER</span>However, test marketing has drawbacks: it is costly and slow, the test area may not represent the whole market, and it warns competitors who can copy the idea before the full launch.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, test marketing is valuable for Innocent because it lowers the risk of an expensive failure, but its worth depends on choosing a representative test area and acting quickly before rivals respond.</p>`,
     fb:"Mr. Akram's exemplar (Innocent). Risk-reduction and forecasting benefits balanced against cost, representativeness and tipping off competitors."},
    {marks:12, q:"Assess the use of random sampling in Nando's market research when entering China. (12)", caseImg:"resources/casestudies/cs-1-3-1-2-nandos-sampling.png",
     model:`<p><span class="tag t-P">POINT</span>One disadvantage is that random sampling may not reflect China's diversity, because even with equal selection chances the sample could miss key groups like rural chefs or specific dietary traditions. <span class="tag t-C">CHAIN</span>This means the results could lack insight into important regional preferences, so Nando's might make menu decisions that don't appeal everywhere, leading to under-performing store launches and weaker brand recognition in some regions.</p>
     <p><span class="tag t-P">POINT</span>A second disadvantage is the high cost and time of random sampling across such a large, diverse country, because Nando's had to survey a wide mix of owners, chefs and managers. <span class="tag t-C">CHAIN</span>This needs a big budget and planning, so delays could slow decisions and rollout — letting competitors enter first.</p>
     <p><span class="tag t-J">HOWEVER</span>However, random sampling did reduce bias and improve reliability, because every chef or manager had an equal chance of inclusion. This gave a fairer, more balanced picture of Chinese food habits, so Nando's could base menu and marketing choices on a wide range of insights.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, random sampling showed a strong effort to understand the market, but its success depends on how well it was managed and whether the sample truly reflected all key groups. In such a complex market it may not be enough alone — so it is recommended Nando's combines it with stratified or quota sampling to ensure every key segment is represented.</p>`,
     fb:"Mr. Akram's exemplar (Nando's, 12). Two disadvantages (representativeness, cost/time) balanced by the bias-reduction advantage, concluding 'combine with stratified/quota'."},
  {marks:10, q:"Assess whether stratified sampling is the most appropriate sampling method for BYD UAE's research into a new electric SUV. (10)", caseImg:"resources/casestudies/cs-1-3-1-2-byd-uae-sampling.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that stratified sampling would represent BYD's customer groups accurately, because its database of 10,000 interested buyers splits 25% aged 18–29, 55% aged 30–49 and 20% aged 50+. <span class="tag t-C">CHAIN</span>Selecting in proportion to these age groups (and randomly within each) means the views of every key group are captured fairly, so BYD gets a reliable estimate of demand for the new SUV and which features (range, price, charging, technology) matter to each group — supporting better product and marketing decisions.</p>
   <p><span class="tag t-J">HOWEVER</span>However, stratified sampling may take longer and cost more than quota sampling at showrooms, because it needs accurate database information and random selection within each stratum. A quicker showroom survey would be cheaper but would over-represent people who already favour electric vehicles, biasing the results.</p>
   <p><span class="tag t-J">CONCLUSION</span>Overall, stratified sampling is the most appropriate method for BYD because representativeness matters most when estimating demand for a major new launch. But its value depends on BYD's database being accurate and on having the time and budget — so if a fast, low-cost decision were needed, quota sampling could be a reasonable alternative.</p>`,
     fb:"Mr. Akram's exemplar (BYD UAE, 10). Uses the 25/55/20 age split to justify stratified sampling's representativeness, balanced against its cost/time vs quota, with a conditional judgement."}
  ],
  resources:[
    {label:"Market research, data types & sampling — lesson notes (PDF)", file:"resources/1-3-1-2-market-research-notes.pdf"},
    {label:"Sampling methods \u2014 quick guide (PDF)", file:"resources/1-3-1-2-sampling-quick-guide.pdf"}
  ]
},
{
  code:"1.3.1.3", subtheme:"1.3.1", title:"Market positioning",
  business:"Case studies: Ferrari, Wizz Air, Emirates, Rolex & global chocolate", status:"live",
  notes:[
    {h:"Market positioning", html:`
      <p><b>Market positioning</b> is the process of establishing the <b>image or identity</b> of a brand or product so that consumers perceive it in a certain way relative to rivals. It answers "what does this brand stand for in the customer's mind?"</p>
      <ul>
        <li><b>Ferrari</b> is positioned as an expensive, exclusive luxury car maker.</li>
        <li><b>Wizz Air</b> is positioned as a low-cost, low-frills airline.</li>
      </ul>
      <p>Clear positioning differentiates a business, guides its marketing mix and helps it attract and keep the right customers.</p>`},
    {h:"Market mapping (perceptual maps)", html:`
      <p>A <b>market map</b> (perceptual map) plots competitors and their products on a graph using two chosen criteria (e.g. price and quality). It shows who the competition is and helps <b>spot a gap in the market</b>.</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 440 320" style="min-width:380px;width:100%;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="30" x2="60" y2="270" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="60" y1="150" x2="410" y2="150" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="60" y="20" text-anchor="middle" font-size="11" font-weight="800" fill="var(--muted)">HIGH PRICE</text>
        <text x="60" y="288" text-anchor="middle" font-size="11" font-weight="800" fill="var(--muted)">LOW PRICE</text>
        <text x="95" y="145" text-anchor="start" font-size="11" font-weight="800" fill="var(--muted)">LOW QUALITY</text>
        <text x="405" y="145" text-anchor="end" font-size="11" font-weight="800" fill="var(--muted)">HIGH QUALITY</text>
        <circle cx="140" cy="90" r="7" fill="#c92a2a"/><text x="140" y="78" text-anchor="middle" font-size="9.5" fill="var(--ink)">Overpriced</text>
        <circle cx="350" cy="70" r="7" fill="var(--emerald)"/><text x="350" y="58" text-anchor="middle" font-size="9.5" fill="var(--ink)">Premium</text>
        <circle cx="150" cy="215" r="7" fill="var(--amber)"/><text x="150" y="233" text-anchor="middle" font-size="9.5" fill="var(--ink)">Budget</text>
        <circle cx="350" cy="220" r="9" fill="none" stroke="#1b4fd6" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="350" y="245" text-anchor="middle" font-size="9.5" font-weight="700" fill="#1b4fd6">Gap? (value)</text>
      </svg>
      </div>
      <p>The firm chooses the criteria — price vs quality, necessity vs luxury, lo-tech vs high-tech, and so on. <b>Benefits:</b> reveals gaps/opportunities and shows how crowded a position is. <b>Drawbacks:</b> it's a snapshot, based on perception not fact, and a "gap" may exist because there's no demand there.</p>`},
    {h:"Market segmentation", html:`
      <p><b>Market segmentation</b> is dividing a market into groups of customers with similar characteristics, so products and marketing can be <b>targeted</b>. Common bases:</p>
      <ul>
        <li><b>Demographic</b> — age, gender, income, family (e.g. toys by age).</li>
        <li><b>Geographic</b> — region or country (e.g. McDonald's tailoring menus locally).</li>
        <li><b>Psychographic</b> — lifestyle, values, personality (e.g. Coca-Cola's lifestyle branding).</li>
        <li><b>Behavioural</b> — usage, loyalty, occasion (e.g. Nike targeting committed athletes).</li>
      </ul>
      <p><b>Advantages:</b> tailored products and promotions, higher sales, less wasted marketing, and spotting new segments. <b>Drawbacks:</b> research and multiple product lines are costly, segments can be too small, and focusing narrowly may miss the wider market.</p>`},
    {h:"Product vs market orientation", html:`
      <ul>
        <li><b>Product orientation</b> — the business leads with the <b>product's design, quality or performance</b>, confident it will sell without much market research (e.g. Apple iPhones, Gillette razors, Rolex). Drives innovation and strong USPs, but risks making something customers don't want.</li>
        <li><b>Market orientation</b> — the business <b>reacts to what customers want</b>, basing decisions on market research into needs and wants. Most successful firms are market-orientated: it lowers the risk of failure, though it can make a firm reactive and less radically innovative.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Market positioning", marks:2, body:`The process of establishing the image or identity of a brand so consumers perceive it in a certain way relative to rivals <span class="pt">1</span>; it differentiates the business and guides its marketing <span class="pt">2</span>.`},
    {term:"Market mapping", marks:2, body:`Plotting competitors and their products on a graph using two criteria such as price and quality <span class="pt">1</span>; it helps a business see the competition and spot a gap in the market <span class="pt">2</span>.`},
    {term:"Market segmentation", marks:2, body:`Dividing a market into groups of customers with similar characteristics <span class="pt">1</span>, so a business can target each group with suitable products and marketing <span class="pt">2</span>.`},
    {term:"Market segment", marks:2, body:`A group of customers within a market who share similar needs or characteristics <span class="pt">1</span>, such as an age group or income band, that a business can target <span class="pt">2</span>.`},
    {term:"Product orientation", marks:2, body:`An approach that prioritises the product's design, quality or performance, confident it will sell <span class="pt">1</span>; it drives innovation but risks ignoring what customers actually want <span class="pt">2</span>.`},
    {term:"Market orientation", marks:2, body:`An approach where decisions are based on market research into customer needs and wants <span class="pt">1</span>; it reduces the risk of failure but can make a business reactive rather than innovative <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'market positioning'.",
     model:`Market positioning is establishing the image or identity of a brand so customers perceive it in a certain way relative to rivals <span class="pt">1</span>, such as Ferrari as a luxury brand; this differentiates the business and guides its marketing <span class="pt">2</span>.`,
     fb:"Image/identity in the customer's mind, plus its purpose — two developed points."},
    {marks:2, q:"Distinguish between product orientation and market orientation.",
     model:`Product orientation leads with the product's design and quality, confident it will sell (e.g. Apple) <span class="pt">1</span>; market orientation bases decisions on market research into what customers want, reducing the risk of failure <span class="pt">2</span>.`,
     fb:"Product-led vs customer/research-led — two contrasting points."},
    {marks:4, q:"Explain how product orientation suits a business such as Rolex.",
     model:`Product orientation means Rolex focuses on designing and producing a high-quality product before considering customer needs <span class="pt">1</span>. This fits Rolex because it emphasises craftsmanship and precision — each watch is made by skilled Swiss engineers to founder Hans Wilsdorf's quality standards <span class="pt">2</span>. As a result, Rolex builds a global reputation for luxury and quality <span class="pt">3</span>, so customers buy for the brand and craftsmanship, driving strong sales and premium prices <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Rolex). Links product-led focus on quality/craftsmanship to brand reputation and premium sales."},
    {marks:4, q:"Explain one way a fast-food business such as McDonald's could use market segmentation.",
     model:`McDonald's can use geographic segmentation, tailoring its menu to each region <span class="pt">1</span>. This is because tastes and dietary rules differ by country, so it offers local items (e.g. different menus in different markets) <span class="pt">2</span>. As a result, products match local preferences <span class="pt">3</span>, increasing relevance, customer satisfaction and sales in each market <span class="pt">4</span>.`,
     fb:"Name a segmentation base and link it to tailored products and higher sales."}
  ],
  caseStudy:{
    business:"Ferrari, Wizz Air, Emirates, Rolex & global chocolate",
    intro:`<p>Businesses used in the positioning questions.</p>
      <ul>
        <li><b>Ferrari &amp; Wizz Air</b> — opposite positions: exclusive luxury vs low-cost, low-frills.</li>
        <li><b>Emirates</b> — a premium airline whose positioning underpins its success.</li>
        <li><b>Rolex</b> — product-orientated, leading on craftsmanship and quality.</li>
        <li><b>Global chocolate market</b> — heavily segmented (age, income, occasion, lifestyle) by large and small manufacturers.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the likely importance of its market positioning to the success of a business such as Emirates. (10)", caseImg:"resources/casestudies/cs-1-3-1-3-emirates-source-booklet.png",
     model:`<p><span class="tag t-P">POINT</span>One reason positioning is important is that it differentiates Emirates as a premium airline, because it is known for superior service, modern aircraft and in-flight experience. <span class="tag t-C">CHAIN</span>This makes travellers perceive Emirates as higher quality than budget rivals, so it can charge premium fares and attract loyal, less price-sensitive customers — supporting revenue and brand strength.</p>
     <p><span class="tag t-P">POINT</span>Positioning also guides its whole marketing mix, because a premium image shapes pricing, sponsorships and advertising. <span class="tag t-C">CHAIN</span>Consistency across these reinforces the brand, helping Emirates stand out in a crowded global market and win repeat custom.</p>
     <p><span class="tag t-J">HOWEVER</span>However, positioning alone doesn't guarantee success, because a premium image is costly to maintain (new aircraft, service standards) and vulnerable to recessions or fuel-price shocks when customers trade down. Operational reliability and cost control may matter just as much.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, market positioning is very important to Emirates because it underpins its premium pricing and loyalty, but its success depends on consistently delivering the quality the position promises while managing costs — so positioning works only alongside strong operations.</p>`,
     fb:"Mr. Akram's exemplar (Emirates). Premium differentiation and marketing-mix consistency balanced against the cost/vulnerability of a premium position."},
    {marks:10, q:"Assess the benefits to a large chocolate manufacturer of using market segmentation. (10)", caseImg:"resources/casestudies/cs-1-3-1-3-global-chocolate.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is tailored products and promotions, because segmenting by age, income or occasion lets the firm design different bars and campaigns for each group. <span class="tag t-C">CHAIN</span>Marketing is more relevant and less wasted, so conversion and sales rise across multiple segments rather than relying on one product for everyone.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is spotting and filling gaps, because segmentation reveals under-served groups (e.g. healthier or premium gifting segments). <span class="tag t-C">CHAIN</span>Launching targeted products there wins new customers and can command higher prices, growing market share.</p>
     <p><span class="tag t-J">HOWEVER</span>However, segmentation is costly, because research and running many product lines and campaigns raise expenses, and some segments may be too small to be profitable. A large firm risks spreading itself too thin versus a focused rival.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, segmentation benefits a large chocolate manufacturer by lifting sales and reach, but its value depends on each segment being big enough to justify the cost — so it should target the most profitable segments rather than all of them.</p>`,
     fb:"Mr. Akram's exemplar (chocolate). Tailored marketing and gap-filling benefits balanced against cost and small-segment risk."},
    {marks:10, q:"Assess whether a product-orientated approach is the best strategy for a technology business such as Apple. (10)", caseImg:"resources/casestudies/cs-1-3-1-3-devanisoft-orientation.png",
     model:`<p><span class="tag t-P">POINT</span>One strength is innovation and strong USPs, because a product-orientated firm leads with cutting-edge design rather than following research. <span class="tag t-C">CHAIN</span>Apple can create products customers didn't know they wanted (e.g. category-defining devices), building a premium brand and loyal following that supports high prices and margins.</p>
     <p><span class="tag t-P">POINT</span>It also enables first-mover advantage, because launching ahead of rivals sets the standard. <span class="tag t-C">CHAIN</span>This strengthens brand leadership and lets Apple capture the market before competitors respond.</p>
     <p><span class="tag t-J">HOWEVER</span>However, product orientation is risky, because without market research the firm may misjudge demand and invest heavily in products that flop. A market-orientated approach lowers this risk by grounding decisions in customer needs — and most successful firms blend both.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, product orientation suits Apple because innovation is its core advantage, but it is best combined with market insight to avoid costly misses — so a largely product-led approach, informed by customer feedback, is strongest.</p>`,
     fb:"Mr. Akram's exemplar (Apple). Innovation/first-mover strengths of product orientation balanced against its risk, concluding a blend works best."},
  {marks:10, q:"Assess the benefits and drawbacks to Innocent of using market segmentation. (10)", caseImg:"resources/casestudies/cs-1-3-1-3-innocent-segmentation.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is products that match specific groups, because Innocent targets health-conscious consumers and children with items like vegetable lunch pots and natural smoothies. <span class="tag t-C">CHAIN</span>This raises satisfaction and loyalty, so Innocent builds a loyal customer base that supports long-term sales.</p>
   <p><span class="tag t-P">POINT</span>A second benefit is more effective marketing, because Innocent can design campaigns that speak directly to each segment, such as school visits for children's drinks. <span class="tag t-C">CHAIN</span>This makes promotion more targeted and efficient, raising conversion and cutting wasted marketing spend.</p>
   <p><span class="tag t-J">HOWEVER</span>However, segmentation raises costs, because creating different products for different groups needs more research, production and promotion, lowering economies of scale and squeezing margins if volumes are low. Tastes can also shift quickly, so a targeted segment may shrink and cost Innocent sales if it doesn't adapt in time.</p>
   <p><span class="tag t-J">CONCLUSION</span>Overall, segmentation benefits Innocent by lifting loyalty and marketing efficiency, but its value depends on each segment being large and stable enough to cover the extra cost — so it should focus on its strongest health and family segments rather than over-segmenting.</p>`,
     fb:"Mr. Akram's exemplar (Innocent, 10). Tailored products and targeted marketing benefits balanced against cost/economies-of-scale and shifting-trends drawbacks."}
  ,{marks:10, q:"Assess the extent to which market mapping may have been useful to Emirates in growing its business. (10)", caseImg:"resources/casestudies/cs-1-3-1-3-emirates-source-booklet.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is identifying new opportunities, because market mapping lets Emirates compare itself to competitors and find gaps — under-served routes or weaker in-flight experiences. <span class="tag t-C">CHAIN</span>This informs where to fly and what to improve, so Emirates can expand into positions with less direct competition, raising customer satisfaction and revenue.</p>
   <p><span class="tag t-J">HOWEVER</span>However, market mapping has limits, because a gap may look attractive but exist for valid reasons — low demand, political instability or flight restrictions. Relying only on visual gaps without deeper research risks poor decisions, wasted resources on unviable routes, and reputational damage if services are later cancelled.</p>
   <p><span class="tag t-J">CONCLUSION</span>Overall, market mapping has been useful to Emirates for spotting gaps and guiding growth, but its usefulness depends on backing it with thorough research — a gap is only worth pursuing if real demand exists behind it.</p>`,
     fb:"Mr. Akram's exemplar (Emirates, 10). Gap-spotting benefit of market mapping balanced against the risk that gaps exist for valid reasons, concluding it needs deeper research."}
  ],
  resources:[
    {label:"Market positioning, mapping & segmentation — lesson notes (PDF)", file:"resources/1-3-1-3-market-positioning-notes.pdf"}
  ]
},
{
  code:"1.3.2.1", subtheme:"1.3.2", title:"Demand",
  business:"Case studies: Ape Snacks & Ocado", status:"live",
  notes:[
    {h:"What is demand?", html:`
      <p>A <b>market</b> is any place where buyers and sellers meet to trade. The <b>market price</b> depends on <b>demand</b> and <b>supply</b>. <b>Demand</b> is the quantity of a product customers are willing to buy at a given price.</p>
      <p>The <b>demand curve</b> slopes downward: as price falls, quantity demanded rises. A change in <b>price only</b> causes a <b>movement along</b> the curve (e.g. price £50 → 30 units; price £100 → 25 units). A change in any <b>non-price factor</b> causes the whole curve to <b>shift</b>.</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 340 250" style="min-width:300px;width:100%;max-width:420px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="20" x2="50" y2="215" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="50" y1="215" x2="320" y2="215" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="30" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" transform="rotate(-90 30 120)">Price</text>
        <text x="185" y="238" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Quantity</text>
        <line x1="70" y1="40" x2="250" y2="200" stroke="var(--navy)" stroke-width="2.5"/>
        <text x="256" y="200" font-size="11" font-weight="800" fill="var(--navy)">D1</text>
        <line x1="130" y1="40" x2="310" y2="200" stroke="var(--emerald)" stroke-width="2.5" stroke-dasharray="6 4"/>
        <text x="300" y="196" font-size="11" font-weight="800" fill="var(--emerald)">D2</text>
        <path d="M175,70 q40,0 55,8" fill="none" stroke="var(--amber)" stroke-width="2" marker-end="url(#akar)"/>
        <defs><marker id="akar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 z" fill="var(--amber)"/></marker></defs>
        <text x="186" y="60" font-size="10" fill="var(--amber-d)">increase in demand</text>
      </svg>
      </div>
      <p>An <b>increase in demand</b> shifts the curve right (D1→D2); a <b>decrease</b> shifts it left.</p>`},
    {h:"What shifts the demand curve?", html:`
      <ul>
        <li><b>Consumer incomes</b> — for a <b>normal good</b>, higher income raises demand; for a <b>luxury good</b> demand rises more than proportionally; for an <b>inferior good</b> higher income <i>reduces</i> demand.</li>
        <li><b>Tastes, fashion &amp; preferences</b> — e.g. the surge in demand for healthy products and smoothies.</li>
        <li><b>Advertising &amp; branding</b> — persuasive advertising raises demand and builds loyalty.</li>
        <li><b>Demographics</b> — population size/structure, e.g. an ageing population lifting demand for healthcare and holidays.</li>
        <li><b>Seasonality</b> — e.g. a UK holiday park busy in summer, quiet in winter.</li>
        <li><b>External shocks</b> — surprise events (e.g. a pandemic) causing sudden rises or falls.</li>
        <li><b>Substitutes &amp; complements</b> — a substitute replaces another good (fresh vs instant coffee); complements are bought together (lamb &amp; mint sauce), so a change in the price of one shifts demand for the other.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Demand", marks:2, body:`The quantity of a product or service that customers are willing and able to buy at a given price <span class="pt">1</span>; it rises as price falls, shown by a downward-sloping demand curve <span class="pt">2</span>.`},
    {term:"Shift in demand", marks:2, body:`A movement of the whole demand curve caused by a non-price factor such as income or tastes <span class="pt">1</span>; a right shift is an increase and a left shift a decrease in demand, unlike a movement along the curve caused by price <span class="pt">2</span>.`},
    {term:"Normal good", marks:2, body:`A good for which demand rises as consumer incomes rise <span class="pt">1</span>, and falls when incomes fall — the usual relationship for most products <span class="pt">2</span>.`},
    {term:"Inferior good", marks:2, body:`A good for which demand falls as consumer incomes rise <span class="pt">1</span>, because customers switch to higher-quality alternatives they can now afford <span class="pt">2</span>.`},
    {term:"Substitute good", marks:2, body:`A product that can replace another to meet the same need <span class="pt">1</span>; if the price of one rises, demand for its substitute tends to rise (e.g. fresh vs instant coffee) <span class="pt">2</span>.`},
    {term:"Complementary good", marks:2, body:`A product bought together with another, in joint demand <span class="pt">1</span>; if demand for one rises so does the other (e.g. lamb and mint sauce) <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'demand'.",
     model:`Demand is the quantity of a product customers are willing and able to buy at a given price <span class="pt">1</span>; it increases as price falls, shown by a downward-sloping demand curve <span class="pt">2</span>.`,
     fb:"Quantity willing/able to buy at a price, plus the price relationship."},
    {marks:2, q:"Distinguish between a substitute good and a complementary good.",
     model:`A substitute replaces another good to meet the same need, so a rise in one's price raises demand for the other (fresh vs instant coffee) <span class="pt">1</span>; complements are bought together, so a rise in demand for one raises demand for the other (lamb and mint sauce) <span class="pt">2</span>.`,
     fb:"Two contrasting points — replacement vs joint demand, each with an example."},
    {marks:4, q:"Explain the difference between a movement along and a shift in the demand curve.",
     model:`A movement along the demand curve is caused only by a change in the product's own price <span class="pt">1</span>, changing the quantity demanded (e.g. a price rise reduces quantity demanded) <span class="pt">2</span>. A shift of the whole curve is caused by a non-price factor such as income or tastes <span class="pt">3</span>, changing demand at every price — right for an increase, left for a decrease <span class="pt">4</span>.`,
     fb:"Price → movement; non-price factor → shift, each developed."},
    {marks:4, q:"Explain one way changing consumer preferences have affected demand for Ocado.",
     model:`Changing preferences towards online grocery shopping increased demand for Ocado <span class="pt">1</span>. This is because more customers now prefer ordering online to visiting stores <span class="pt">2</span>. As Extract D shows, average weekly orders rose from 120,000 (2012) to 230,000 (2016) — a 92% rise <span class="pt">3</span>, lifting revenue from £680m to £1,258m and boosting growth <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Ocado). Links a preference shift to the order/revenue figures."}
  ],
  caseStudy:{
    business:"Ape Snacks & Ocado",
    intro:`<p>Businesses used in the demand questions.</p>
      <ul>
        <li><b>Ape Snacks</b> — a health-focused coconut-snack brand in a market where global coconut demand rose 500%; demand is shaped by celebrity endorsement, trends and new competition.</li>
        <li><b>Ocado</b> — online grocer whose demand rose with the shift to online shopping (120,000 → 230,000 weekly orders, 2012–16).</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the factors that could increase or decrease demand for Ape Snacks. (10)",
     model:`<p><span class="tag t-P">POINT</span>One factor that could increase demand is celebrity endorsement, because celebrities shape preferences in health-conscious markets. <span class="tag t-C">CHAIN</span>If a popular athlete is seen eating coconut-based snacks, public interest and trust rise, so more consumers associate Ape Snacks with a healthy, trendy lifestyle and try the product. <span class="tag t-J">HOWEVER</span>However, not everyone is swayed by endorsements — some dislike coconut or avoid trend-driven products — so the boost may be short-lived unless taste, quality and price deliver.</p>
     <p><span class="tag t-P">POINT</span>A factor that could decrease demand is rising competition, because a 500% rise in global coconut demand has attracted new entrants with similar or cheaper products. <span class="tag t-C">CHAIN</span>More options make it easier for customers to switch, so without continued innovation or a clear USP, Ape Snacks' share could fall. <span class="tag t-J">HOWEVER</span>However, its early-mover, ethical, health-focused brand may have built loyalty that makes customers harder for rivals to win.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, demand for Ape Snacks is most influenced by tastes and competition. Endorsements and trends can lift demand quickly, but sustaining it depends on protecting its USP and brand loyalty as the market grows.</p>`,
     fb:"Mr. Akram's exemplar (Ape Snacks, 10). An increasing factor (endorsement) and a decreasing factor (competition), each with a counter, and a tastes/competition judgement."}
  ],
  resources:[
    {label:"Theory of demand — lesson notes (PDF)", file:"resources/1-3-2-1-demand-notes.pdf"}
  ]
},
{
  code:"1.3.2.2", subtheme:"1.3.2", title:"Supply",
  business:"Case studies: Beaverbrooks & the car market", status:"live",
  notes:[
    {h:"What is supply?", html:`
      <p><b>Supply</b> is the quantity of a product that suppliers are willing to offer for sale at a given price. The <b>supply curve</b> slopes <b>upward</b>: as price rises, firms are willing to supply more because higher prices mean higher potential profit.</p>
      <p>As with demand, a change in the product's own <b>price</b> causes a <b>movement along</b> the supply curve, while a change in a non-price factor causes the whole curve to <b>shift</b>.</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 340 250" style="min-width:300px;width:100%;max-width:420px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="20" x2="50" y2="215" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="50" y1="215" x2="320" y2="215" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="30" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" transform="rotate(-90 30 120)">Price</text>
        <text x="185" y="238" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Quantity</text>
        <line x1="70" y1="200" x2="250" y2="40" stroke="var(--navy)" stroke-width="2.5"/>
        <text x="252" y="44" font-size="11" font-weight="800" fill="var(--navy)">S1</text>
        <line x1="130" y1="200" x2="310" y2="40" stroke="var(--emerald)" stroke-width="2.5" stroke-dasharray="6 4"/>
        <text x="300" y="52" font-size="11" font-weight="800" fill="var(--emerald)">S2</text>
        <path d="M150,130 q45,-6 70,-2" fill="none" stroke="var(--amber)" stroke-width="2" marker-end="url(#akar2)"/>
        <defs><marker id="akar2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L7,4 L0,8 z" fill="var(--amber)"/></marker></defs>
        <text x="150" y="122" font-size="10" fill="var(--amber-d)">increase in supply</text>
      </svg>
      </div>
      <p>An <b>increase in supply</b> shifts the curve right (S1→S2); a <b>decrease</b> shifts it left.</p>`},
    {h:"What shifts the supply curve?", html:`
      <ul>
        <li><b>Costs of production</b> — higher input costs (e.g. raw materials, wages) make supplying dearer, so supply falls (shift left); cheaper inputs raise supply (shift right).</li>
        <li><b>New technology</b> — makes firms more efficient and lowers unit costs, raising supply.</li>
        <li><b>Indirect taxes</b> — a tax on goods (e.g. VAT, customs duty) raises production cost, so supply falls.</li>
        <li><b>Subsidies</b> — government payments make producing cheaper, so supply rises; withdrawing a subsidy reduces supply.</li>
        <li><b>External shocks</b> — events like COVID, poor weather, disasters or conflict can sharply cut supply.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Supply", marks:2, body:`The quantity of a product that suppliers are willing to offer for sale at a given price <span class="pt">1</span>; it rises as price rises, shown by an upward-sloping supply curve <span class="pt">2</span>.`},
    {term:"Shift in supply", marks:2, body:`A movement of the whole supply curve caused by a non-price factor such as costs, technology or taxes <span class="pt">1</span>; a right shift is an increase and a left shift a decrease in supply <span class="pt">2</span>.`},
    {term:"Indirect tax", marks:2, body:`A tax placed on goods and services, such as VAT or customs duty <span class="pt">1</span>; it raises the cost of production, reducing the quantity firms are willing to supply <span class="pt">2</span>.`},
    {term:"Subsidy", marks:2, body:`A payment from government to producers to encourage output <span class="pt">1</span>; it lowers production costs, increasing the quantity supplied <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'supply'.",
     model:`Supply is the quantity of a product suppliers are willing to offer for sale at a given price <span class="pt">1</span>; it rises as price rises, shown by an upward-sloping supply curve <span class="pt">2</span>.`,
     fb:"Quantity offered at a price, plus the upward price relationship."},
    {marks:4, q:"Explain how a government subsidy to electric-car producers would affect the supply of electric cars.",
     model:`A subsidy lowers producers' costs <span class="pt">1</span>. This is because the government payment reduces the cost of producing each electric car <span class="pt">2</span>. As a result, higher profit margins encourage firms to make more <span class="pt">3</span>, so the supply of electric cars increases and the supply curve shifts right <span class="pt">4</span>.`,
     fb:"Link the subsidy to lower cost, higher margin and a rightward supply shift."},
    {marks:4, q:"Explain how an increase in indirect taxes would affect the supply of a product.",
     model:`An increase in indirect tax raises the cost of supplying the product <span class="pt">1</span>. This is because the firm must pay more per unit sold <span class="pt">2</span>. As a result, less profit can be made at each price <span class="pt">3</span>, so firms reduce output and the supply curve shifts left <span class="pt">4</span>.`,
     fb:"Tax → higher cost → lower output → leftward shift."}
  ],
  caseStudy:{
    business:"Beaverbrooks & the car market",
    intro:`<p>Businesses used in the supply questions.</p>
      <ul>
        <li><b>Beaverbrooks</b> — a UK jeweller whose silver-jewellery supply is affected by the price of silver and by new production technology.</li>
        <li><b>The car market</b> — supply shifts from steel/rubber price changes, indirect-tax changes, subsidies for EVs, and new factory robotics.</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Assess two factors that could affect the supply of Beaverbrooks' silver jewellery. (8)",
     model:`<p><span class="tag t-P">POINT</span>One factor is the price of silver, the main input. <span class="tag t-C">CHAIN</span>If global silver prices rise (higher demand or less mining), Beaverbrooks' production costs rise, so it may cut the quantity it produces and see thinner margins — reducing supply. <span class="tag t-J">HOWEVER</span>However, if it holds a large silver inventory, it can keep producing without buying at higher prices, giving a temporary buffer that protects supply.</p>
     <p><span class="tag t-P">POINT</span>A second factor is new production technology, such as automation or 3D printing. <span class="tag t-C">CHAIN</span>This raises speed and efficiency and cuts reliance on skilled labour, so Beaverbrooks could produce more at a lower unit cost — increasing supply. <span class="tag t-J">HOWEVER</span>However, the high upfront cost of such technology may be unaffordable, delaying modernisation and limiting any rise in supply.</p>`,
     fb:"Mr. Akram's exemplar (Beaverbrooks, 8). Input price (silver) and technology, each developed and balanced with a counter."}
  ],
  resources:[
    {label:"Theory of supply — lesson notes (PDF)", file:"resources/1-3-2-2-supply-notes.pdf"}
  ]
},
{
  code:"1.3.2.3", subtheme:"1.3.2", title:"Markets (demand & supply)",
  business:"Case studies: Sony, the car market & interactive equilibrium", status:"live",
  notes:[
    {h:"Market equilibrium", html:`
      <p>Demand and supply can be shown on one diagram. <b>Market equilibrium</b> is the point where the demand and supply curves cross — the <b>equilibrium price</b> and <b>equilibrium quantity</b>. At this price, buyers can buy exactly what they want and sellers sell exactly what they want, so there is no shortage or surplus.</p>
      <p>Above the equilibrium price there is <b>excess supply</b> (a surplus), pushing price down; below it there is <b>excess demand</b> (a shortage), pushing price up. Any change in demand or supply creates a <b>new equilibrium</b>.</p>`},
    {h:"Try it — interactive equilibrium", html:`
      <p>Drag the sliders to <b>shift demand or supply</b> and watch the equilibrium price and quantity change.</p>
      <div class="ds-interactive">
      <svg id="akDSsvg" viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" font-family="inherit">
        <line x1="55" y1="20" x2="55" y2="250" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="55" y1="250" x2="335" y2="250" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="30" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)" transform="rotate(-90 30 135)">Price</text>
        <text x="195" y="272" text-anchor="middle" font-size="11" font-weight="700" fill="var(--muted)">Quantity</text>
        <line id="akEgx" x1="192.5" y1="115" x2="192.5" y2="250" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"/>
        <line id="akEgy" x1="55" y1="115" x2="192.5" y2="115" stroke="var(--muted)" stroke-width="1" stroke-dasharray="4 3"/>
        <line id="akD" x1="55" y1="25" x2="330" y2="205" stroke="var(--navy)" stroke-width="2.5"/>
        <line id="akS" x1="55" y1="205" x2="330" y2="25" stroke="var(--emerald)" stroke-width="2.5"/>
        <circle id="akE" cx="192.5" cy="115" r="5.5" fill="var(--amber)" stroke="#fff" stroke-width="1.5"/>
        <text x="322" y="214" font-size="11" font-weight="800" fill="var(--navy)">D</text>
        <text x="322" y="34" font-size="11" font-weight="800" fill="var(--emerald)">S</text>
      </svg>
      <div class="ds-controls">
        <label><span>Shift demand</span><input type="range" id="akDS_d" min="-30" max="30" value="0" step="1" oninput="akDS()"></label>
        <label><span>Shift supply</span><input type="range" id="akDS_s" min="-30" max="30" value="0" step="1" oninput="akDS()"></label>
        <div id="akDSout">Equilibrium price ≈ <b>60</b> &middot; quantity ≈ <b>50</b></div>
        <button class="ds-reset" onclick="akDSreset()">Reset</button>
      </div>
      </div>`},
    {h:"Shifts and the new equilibrium", html:`
      <table class="datatable">
        <tr><th>Change</th><th>Equilibrium price</th><th>Equilibrium quantity</th></tr>
        <tr><td>Demand rises (shift right)</td><td>Up</td><td>Up</td></tr>
        <tr><td>Demand falls (shift left)</td><td>Down</td><td>Down</td></tr>
        <tr><td>Supply rises (shift right)</td><td>Down</td><td>Up</td></tr>
        <tr><td>Supply falls (shift left)</td><td>Up</td><td>Down</td></tr>
      </table>
      <p>Worked scenarios: a Sony console promotion (demand right → higher price &amp; quantity); a new Hilton opening near a Marriott (demand for Marriott left); a fall in steel costs for car makers (supply right → lower price, higher quantity); a government report on vaping risks (demand for e-cigarettes left); EV subsidies (supply right); new factory robotics (supply right); UAE unemployment hitting luxury holidays (demand left).</p>`}
  ],
  definitions:[
    {term:"Market equilibrium", marks:2, body:`The point where the demand and supply curves cross, so quantity demanded equals quantity supplied <span class="pt">1</span>; there is no shortage or surplus at this price <span class="pt">2</span>.`},
    {term:"Equilibrium price", marks:2, body:`The market price at which demand equals supply <span class="pt">1</span>; at this price buyers buy exactly what they want and sellers sell exactly what they want <span class="pt">2</span>.`},
    {term:"Excess demand (shortage)", marks:2, body:`When price is below equilibrium so quantity demanded exceeds quantity supplied <span class="pt">1</span>; the shortage pushes the price upward towards equilibrium <span class="pt">2</span>.`},
    {term:"Excess supply (surplus)", marks:2, body:`When price is above equilibrium so quantity supplied exceeds quantity demanded <span class="pt">1</span>; the surplus pushes the price downward towards equilibrium <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'market equilibrium'.",
     model:`Market equilibrium is the point where the demand and supply curves cross, so quantity demanded equals quantity supplied <span class="pt">1</span>; at this equilibrium price there is no shortage or surplus <span class="pt">2</span>.`,
     fb:"Where D=S, no shortage/surplus — two developed points."},
    {marks:4, q:"Analyse the effect on the market for Sony games consoles of a successful promotional campaign.",
     model:`A successful campaign increases demand, shifting the demand curve right <span class="pt">1</span>. This is because advertising raises consumers' desire to buy at every price <span class="pt">2</span>. As a result, at the old price there is excess demand, pushing the price up <span class="pt">3</span>, so the new equilibrium has both a higher price and a higher quantity of consoles traded <span class="pt">4</span>.`,
     fb:"Demand shifts right → higher equilibrium price and quantity, clearly chained."},
    {marks:4, q:"Analyse the effect on the market for cars of a fall in the cost of steel.",
     model:`A fall in steel costs lowers production costs, increasing supply and shifting the supply curve right <span class="pt">1</span>. This is because cars become cheaper to make, so firms supply more at each price <span class="pt">2</span>. As a result, there is downward pressure on price <span class="pt">3</span>, so the new equilibrium has a lower price and a higher quantity of cars sold <span class="pt">4</span>.`,
     fb:"Lower input cost → supply right → lower price, higher quantity."}  ,{marks:4, q:"Dubai's population keeps growing as more people move to the city for work. Construct/analyse the effect on the market for rental apartments in Dubai.",
     model:`Population growth increases demand for rental apartments, shifting the demand curve right <span class="pt">1</span>. This is because more residents need somewhere to live at every price level <span class="pt">2</span>. As a result, at the old rent there is excess demand <span class="pt">3</span>, so the new equilibrium has a higher rent (price) and a higher quantity of apartments rented <span class="pt">4</span>.`,
     fb:"Demand shifts right \u2192 higher price and quantity. Use the interactive diagram to check."}
  ,{marks:4, q:"The UAE Government gives solar-panel producers a subsidy per panel. Construct/analyse the effect on the market for solar panels.",
     model:`A subsidy lowers producers' costs, increasing supply and shifting the supply curve right <span class="pt">1</span>. This is because each panel is cheaper to make, so firms supply more at every price <span class="pt">2</span>. As a result, there is downward pressure on price <span class="pt">3</span>, so the new equilibrium has a lower price and a higher quantity of solar panels <span class="pt">4</span>.`,
     fb:"Subsidy \u2192 supply right \u2192 lower price, higher quantity. Check it on the interactive diagram."}
  ],
  caseStudy:{
    business:"Sony, the car market & market scenarios",
    intro:`<p>Scenarios used to practise demand/supply diagrams:</p>
      <ul>
        <li><b>Demand shifts:</b> Sony console promotion (right); a new Hilton near a Marriott (Marriott demand left); a government vaping-risk report (e-cigarettes left); UAE unemployment (luxury holidays left).</li>
        <li><b>Supply shifts:</b> falling steel/rubber costs for cars (right); EV producer subsidies (right); new Nissan factory robotics (right).</li>
      </ul>
      <p class="note-ex">Use the interactive diagram above to test each scenario — shift the right curve and read off the new equilibrium.</p>`
  },
  exam:[
    {marks:8, q:"A gym chain sees a sudden surge in demand for memberships. Analyse the likely effect on the market, using a demand and supply diagram. (8)", caseImg:"resources/casestudies/cs-1-3-2-3-gym-surge.png",
     model:`<p><span class="tag t-P">POINT</span>The surge increases demand, shifting the demand curve to the right. <span class="tag t-C">CHAIN</span>At the original price there is now excess demand (a shortage), because more people want memberships than are available, so price is pushed up and the market moves to a new equilibrium with a higher price and higher quantity of memberships.</p>
     <p><span class="tag t-P">POINT</span>In the short run supply is hard to expand, because gyms have fixed space and equipment. <span class="tag t-C">CHAIN</span>So most of the adjustment shows up as a higher price rather than much extra quantity, raising revenue per member but risking some customers being priced out.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the effect depends on how long the surge lasts and whether gyms can add capacity. If it is seasonal (e.g. a January spike), investing in more space is risky; if demand is sustained, expanding capacity shifts supply right and moderates the price rise.</p>`,
     fb:"Mr. Akram's exemplar (gym surge). Demand-right analysis plus fixed short-run supply, judged on how lasting the surge is."}
  ],
  resources:[
    {label:"Interaction of demand & supply (equilibrium) — lesson notes (PDF)", file:"resources/1-3-2-3-equilibrium-notes.pdf"},
    {label:"Supply & demand shifts \u2014 construct practice (PDF)", file:"resources/1-3-2-3-construct-practice.pdf"}
  ]
},
{
  code:"1.3.2.4", subtheme:"1.3.2", title:"Price elasticity of demand (PED)",
  business:"Case studies: LEGO, M&S & Oppo", status:"live",
  notes:[
    {h:"What is PED?", html:`
      <p><b>Price elasticity of demand (PED)</b> measures how <b>responsive</b> demand is to a change in price. Because price and demand move in opposite directions, PED is normally <b>negative</b> (ignore the minus sign when interpreting).</p>
      <p style="text-align:center;font-weight:700">PED = % change in quantity demanded ÷ % change in price</p>
      <ul>
        <li><b>Inelastic</b> (|PED| &lt; 1) — demand changes <b>less</b> than proportionally; not very sensitive to price.</li>
        <li><b>Elastic</b> (|PED| &gt; 1) — demand changes <b>more</b> than proportionally; very sensitive to price.</li>
        <li><b>Unitary</b> (|PED| = 1) — demand changes exactly in proportion to price.</li>
      </ul>
      <p><b>Worked example:</b> a newsagent sells 200 cans at £0.50; raising the price to £0.60 cuts demand to 180. %ΔQd = −10%, %ΔP = +20%, so PED = −0.5 — <b>inelastic</b>.</p>`},
    {h:"Try it — PED calculator", html:`
      <p>Enter the original and new price and quantity to calculate PED, see whether demand is elastic or inelastic, and what happens to revenue.</p>
      <div class="ds-interactive">
        <div class="ped-calc">
          <label>Original price (£)<input type="number" id="akP1" value="0.50" step="0.01" min="0" oninput="akPED()"></label>
          <label>Original quantity<input type="number" id="akQ1" value="200" step="1" min="0" oninput="akPED()"></label>
          <label>New price (£)<input type="number" id="akP2" value="0.60" step="0.01" min="0" oninput="akPED()"></label>
          <label>New quantity<input type="number" id="akQ2" value="180" step="1" min="0" oninput="akPED()"></label>
        </div>
        <div id="akPEDout">Enter all four values.</div>
      </div>`},
    {h:"Factors affecting PED", html:`
      <ul>
        <li><b>Availability of substitutes</b> — more substitutes → more elastic (customers can switch).</li>
        <li><b>Necessity vs luxury</b> — necessities are more inelastic; luxuries more elastic.</li>
        <li><b>Proportion of income</b> — cheap items (a small % of income) are more inelastic.</li>
        <li><b>Time</b> — demand is often more elastic over the long run as buyers find alternatives.</li>
        <li><b>Brand loyalty / habit / addiction</b> — strong loyalty makes demand more inelastic.</li>
      </ul>`},
    {h:"PED, pricing & total revenue", html:`
      <p>PED guides pricing because it tells a firm what a price change does to <b>total revenue</b> (price × quantity):</p>
      <table class="datatable">
        <tr><th>Demand is…</th><th>Raise price →</th><th>Cut price →</th></tr>
        <tr><td>Inelastic (|PED|&lt;1)</td><td>Revenue rises</td><td>Revenue falls</td></tr>
        <tr><td>Elastic (|PED|&gt;1)</td><td>Revenue falls</td><td>Revenue rises</td></tr>
      </table>
      <p>So a firm with inelastic demand can raise price to lift revenue, while one with elastic demand may cut price to win enough extra sales. <b>%ΔQd = PED × %ΔP</b> — e.g. PED −2 and a 25% price cut gives +50% quantity demanded.</p>`}
  ],
  definitions:[
    {term:"Price elasticity of demand (PED)", marks:2, body:`A measure of how responsive quantity demanded is to a change in price <span class="pt">1</span>, calculated as % change in quantity demanded ÷ % change in price <span class="pt">2</span>.`},
    {term:"Price inelastic demand", marks:2, body:`Where demand changes less than proportionally to a price change, so |PED| is less than 1 <span class="pt">1</span>; demand is not very sensitive to price, so a firm can raise price to increase revenue <span class="pt">2</span>.`},
    {term:"Price elastic demand", marks:2, body:`Where demand changes more than proportionally to a price change, so |PED| is greater than 1 <span class="pt">1</span>; demand is very sensitive to price, so cutting price can increase revenue <span class="pt">2</span>.`},
    {term:"Total revenue", marks:2, body:`The total income from sales, calculated as price × quantity sold <span class="pt">1</span>; PED predicts whether a price change will raise or lower it <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'price elasticity of demand'.",
     model:`Price elasticity of demand measures how responsive quantity demanded is to a change in price <span class="pt">1</span>, calculated as the % change in quantity demanded divided by the % change in price <span class="pt">2</span>.`,
     fb:"Responsiveness of demand to price, plus the formula."},
    {marks:4, q:"A watch's demand rises from 20 to 25 units when price falls from £8 to £7. Calculate PED and state whether demand is elastic or inelastic.",
     model:`%ΔQd = (25−20)/20 × 100 = +25% <span class="pt">1</span>; %ΔP = (7−8)/8 × 100 = −12.5% <span class="pt">2</span>. PED = 25 ÷ −12.5 = −2 <span class="pt">3</span>. As |PED| &gt; 1, demand is <b>price elastic</b> <span class="pt">4</span>.`,
     fb:"Correct %changes, PED = −2, classified elastic."},
    {marks:4, q:"The PED for LEGO City sets is −2. If LEGO cuts the price by 25%, calculate the effect on quantity demanded and explain it.",
     model:`%ΔQd = PED × %ΔP = −2 × −25% = <b>+50%</b> <span class="pt">1</span>. So demand rises 50% <span class="pt">2</span>. This is because the sets are price elastic, so a price cut causes a more than proportional rise in sales <span class="pt">3</span>, which could raise LEGO's total revenue if the extra volume outweighs the lower price <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (LEGO). Uses %ΔQd = PED × %ΔP to get +50% and links to revenue."}  ,{marks:4, q:"Superdry cuts the price of a t-shirt by 10% and sales rise from 120,000 to 150,000. Calculate the PED and state whether demand is elastic or inelastic.",
     model:`%ΔQd = (150,000−120,000)/120,000 × 100 = +25% <span class="pt">1</span>; %ΔP = −10% <span class="pt">2</span>. PED = 25 ÷ −10 = <b>−2.5</b> <span class="pt">3</span>. As |PED| &gt; 1, demand is <b>price elastic</b>, so the price cut raises total revenue <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Superdry). %ΔQd +25%, PED −2.5, elastic — revenue rises on a price cut."}
  ],
  caseStudy:{
    business:"LEGO, M&S & Oppo",
    intro:`<p>Businesses used in the PED questions.</p>
      <ul>
        <li><b>LEGO</b> — elastic demand (PED −2): a price cut raises quantity demanded more than proportionally.</li>
        <li><b>M&amp;S</b> — clothing PED shaped by substitutes (Next) and brand loyalty among older customers.</li>
        <li><b>Oppo</b> — ice-cream PED shaped by substitutes (Häagen-Dazs, Ben &amp; Jerry's) and its luxury/health positioning.</li>
      </ul>`
  },
  exam:[
    {marks:6, q:"Assess the factors that affect the price elasticity of demand for Oppo's ice cream. (6)", caseImg:"resources/casestudies/cs-1-3-2-4-oppo-ped.png",
     model:`<p><span class="tag t-P">POINT</span>One factor is the number of substitutes, because ice cream has many rivals such as Häagen-Dazs and Ben &amp; Jerry's. <span class="tag t-C">CHAIN</span>If Oppo raises its price, customers can easily switch, so demand is relatively elastic and sensitive to price changes.</p>
     <p><span class="tag t-P">POINT</span>A second factor is whether it is a necessity or a luxury. <span class="tag t-C">CHAIN</span>As a luxury treat, demand is more elastic because buyers can cut back if prices rise — though Oppo's healthier, lower-calorie recipe may make demand slightly less elastic, as health-conscious customers keep buying even at higher prices.</p>`,
     fb:"Mr. Akram's exemplar (Oppo, 6). Substitutes and necessity/luxury, each applied, with the health-positioning nuance."},
    {marks:8, q:"Assess the factors that could influence the PED of M&S clothing, and how useful PED is to M&S. (8)",
     model:`<p><span class="tag t-P">POINT</span>One factor is the availability of substitutes, because the clothing market is highly competitive with rivals like Next. <span class="tag t-C">CHAIN</span>If M&amp;S raises prices, customers can switch, so demand is more elastic — meaning a small price rise could cause a proportionately larger fall in sales, so M&amp;S must stay competitively priced.</p>
     <p><span class="tag t-P">POINT</span>A second factor is brand loyalty, because some older customers trust M&amp;S for quality and tradition. <span class="tag t-C">CHAIN</span>They may keep buying even when prices rise, making demand more inelastic for this group, so M&amp;S can charge them slightly higher prices without losing all sales.</p>
     <p><span class="tag t-J">HOWEVER</span>However, PED may not be the most useful guide, because M&amp;S has struggled to stay iconic — non-price factors like fashion, style and relevance to younger shoppers may matter more. Even if PED suggests cutting prices, success depends on offering products customers actually want.</p>`,
     fb:"Mr. Akram's exemplar (M&S, 8). Substitutes and loyalty shape PED, balanced by a judgement that non-price factors may matter more."}
  ],
  resources:[
    {label:"Price elasticity of demand (PED) — lesson notes (PDF)", file:"resources/1-3-2-4-ped-notes.pdf"},
    {label:"PED & YED \u2014 calculation practice (PDF)", file:"resources/1-3-2-ped-yed-calc-practice.pdf"}
  ]
},
{
  code:"1.3.2.5", subtheme:"1.3.2", title:"Income elasticity of demand (YED)",
  business:"Case studies: iPads, trainers & bus travel", status:"live",
  notes:[
    {h:"What is YED?", html:`
      <p><b>Income elasticity of demand (YED)</b> measures how responsive demand is to a change in <b>consumer income</b>. Unlike PED, YED can be <b>positive or negative</b> — income and demand can move the same way or opposite ways.</p>
      <p style="text-align:center;font-weight:700">YED = % change in quantity demanded ÷ % change in income</p>
      <p><b>Worked example:</b> incomes rise 15% and iPad demand rises 20%, so YED = 20 ÷ 15 = <b>+1.33</b> — a normal, income-elastic good.</p>`},
    {h:"Normal, luxury & inferior goods", html:`
      <ul>
        <li><b>Normal good (YED positive)</b> — demand rises as income rises. If YED &gt; 1 the good is a <b>luxury</b> (income elastic); if 0 &lt; YED &lt; 1 it is a necessity (income inelastic).</li>
        <li><b>Inferior good (YED negative)</b> — demand <b>falls</b> as income rises, because customers trade up to better alternatives.</li>
      </ul>
      <p>YED is strongly <b>positive</b> for fine wines, luxury holidays, consumer durables and gym memberships; <b>low positive</b> for staples like bread and public transport; and <b>negative</b> for cheap own-label brands.</p>`},
    {h:"Why YED matters to a business", html:`
      <p>YED helps a business plan production, pricing and which markets to target:</p>
      <ul>
        <li><b>Luxury (high YED)</b> firms boom when the economy grows but suffer most in a recession — so they must plan for volatile demand.</li>
        <li><b>Inferior / staple (low or negative YED)</b> firms are more recession-proof, as demand holds up or even rises when incomes fall.</li>
        <li>A balanced product range across different YED values helps a business stay stable through the economic cycle.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Income elasticity of demand (YED)", marks:2, body:`A measure of how responsive quantity demanded is to a change in consumer income <span class="pt">1</span>, calculated as % change in quantity demanded ÷ % change in income <span class="pt">2</span>.`},
    {term:"Normal good (YED)", marks:2, body:`A good with positive YED, so demand rises as income rises <span class="pt">1</span>; if YED is above 1 it is income-elastic (a luxury), if between 0 and 1 it is income-inelastic (a necessity) <span class="pt">2</span>.`},
    {term:"Inferior good (YED)", marks:2, body:`A good with negative YED, so demand falls as income rises <span class="pt">1</span>, because customers switch to higher-quality alternatives they can now afford (e.g. own-label brands) <span class="pt">2</span>.`},
    {term:"Luxury good", marks:2, body:`A good with YED greater than 1 <span class="pt">1</span>, so demand rises more than proportionally as income rises — and falls sharply in a downturn <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'income elasticity of demand'.",
     model:`Income elasticity of demand measures how responsive quantity demanded is to a change in consumer income <span class="pt">1</span>, calculated as the % change in quantity demanded divided by the % change in income <span class="pt">2</span>.`,
     fb:"Responsiveness of demand to income, plus the formula."},
    {marks:4, q:"Demand for trainers rises from 20,000 to 25,000 after incomes rise 15%. Calculate YED and classify the good.",
     model:`%ΔQd = (25,000−20,000)/20,000 × 100 = +25% <span class="pt">1</span>. YED = 25 ÷ 15 = <b>+1.67</b> <span class="pt">2</span>. YED is positive, so trainers are a <b>normal good</b> <span class="pt">3</span>; as it is greater than 1, they are income-elastic (a luxury) <span class="pt">4</span>.`,
     fb:"Correct %ΔQd, YED = +1.67, classified normal/luxury."},
    {marks:4, q:"Demand for bus travel falls from 12,000 to 9,000 after incomes rise 10%. Calculate YED and classify the good.",
     model:`%ΔQd = (9,000−12,000)/12,000 × 100 = −25% <span class="pt">1</span>. YED = −25 ÷ 10 = <b>−2.5</b> <span class="pt">2</span>. YED is negative, so bus travel is an <b>inferior good</b> <span class="pt">3</span> — as incomes rise, people switch to cars or taxis, cutting demand <span class="pt">4</span>.`,
     fb:"Correct negative %ΔQd, YED = −2.5, classified inferior."}  ,{marks:4, q:"Approved Food, a budget discount-food retailer, saw demand rise from 2,000 to 3,500 orders when average incomes fell 2.2%. Calculate the YED and interpret it.",
     model:`%ΔQd = (3,500−2,000)/2,000 × 100 = +75% <span class="pt">1</span>. YED = 75 ÷ −2.2 = <b>−34.09</b> <span class="pt">2</span>. The strongly negative value means it is an <b>inferior good</b> <span class="pt">3</span> whose demand is extremely sensitive to income — a 1% fall in income raises demand by about 34%, so Approved Food is very recession-proof and should plan extra stock and deliveries when incomes fall <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Approved Food). %ΔQd +75%, YED −34.09, interpreted as a strongly inferior, recession-proof good."}  ,{marks:4, q:"European incomes rise 4% and Meqnes' travel-bag sales rise from 1,000 to 1,120 a week. Calculate the YED and classify the good.",
     model:`%ΔQd = (1,120−1,000)/1,000 × 100 = +12% <span class="pt">1</span>. YED = 12 ÷ 4 = <b>+3</b> <span class="pt">2</span>. The value is positive, so travel bags are a <b>normal good</b> <span class="pt">3</span>; as it is well above 1 they are income-elastic (a luxury) — demand will swing sharply with the economy <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Meqnes). %ΔQd +12%, YED +3, normal/income-elastic luxury."}
  ,{marks:4, q:"Japanese incomes rise 3.5% and Sony console sales rise from 3.0m to 3.21m. Calculate the YED and classify the good.",
     model:`%ΔQd = (3.21−3.0)/3.0 × 100 = +7% <span class="pt">1</span>. YED = 7 ÷ 3.5 = <b>+2</b> <span class="pt">2</span>. Positive, so consoles are a <b>normal good</b> <span class="pt">3</span>; above 1 means income-elastic, so demand rises more than proportionally as incomes grow <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Sony). %ΔQd +7%, YED +2, normal/income-elastic."}
  ],
  caseStudy:{
    business:"iPads, trainers & bus travel",
    intro:`<p>Products used in the YED questions, showing the range of income elasticities:</p>
      <ul>
        <li><b>iPads</b> — income +15% → demand +20%, YED +1.33 (normal, luxury).</li>
        <li><b>Trainers</b> — income +15% → demand +25%, YED +1.67 (normal, income-elastic).</li>
        <li><b>Bus travel</b> — income +10% → demand −25%, YED −2.5 (inferior).</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the usefulness of income elasticity of demand (YED) to a business planning its product range. (10)",
     model:`<p><span class="tag t-P">POINT</span>YED is useful for forecasting demand over the economic cycle, because it shows how sensitive each product is to income changes. <span class="tag t-C">CHAIN</span>A firm selling luxuries (high positive YED) knows demand will surge in a boom but fall sharply in a recession, so it can plan production, stock and cash flow around that volatility rather than being caught out.</p>
     <p><span class="tag t-P">POINT</span>YED also guides a balanced product range, because combining high-YED luxuries with low- or negative-YED staples smooths total demand. <span class="tag t-C">CHAIN</span>When incomes fall and luxury sales drop, steady or rising demand for value/inferior lines cushions revenue, making the business more resilient.</p>
     <p><span class="tag t-J">HOWEVER</span>However, YED has limits: the values are estimates based on past data, other factors (tastes, competition, price) also shift demand, and real income changes are hard to predict. So YED is a useful guide, not a precise forecast.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, YED is useful for planning a resilient product range and anticipating the economic cycle, but its usefulness depends on reliable data and on being used alongside PED and wider market analysis rather than on its own.</p>`,
     fb:"Mr. Akram's exemplar (YED, 10). Forecasting and balanced-range uses, balanced against the limits of estimated YED values, with a 'use alongside other tools' judgement."}
  ],
  resources:[
    {label:"Income elasticity of demand (YED) — lesson notes (PDF)", file:"resources/1-3-2-5-yed-notes.pdf"},
    {label:"PED & YED \u2014 calculation practice (PDF)", file:"resources/1-3-2-ped-yed-calc-practice.pdf"}
  ]
},
{
  code:"1.3.3.1", subtheme:"1.3.3", title:"Marketing objectives & strategy",
  business:"Case studies: TPC, Skechers, Motiongate & Apple", status:"live",
  notes:[
    {h:"Marketing strategy for different markets", html:`
      <p>A <b>marketing strategy</b> is a long-term plan for how a business will meet its <b>marketing objectives</b> (e.g. growing market share, sales or brand awareness). The strategy — and the marketing mix behind it — changes with the <b>type of market</b>:</p>
      <ul>
        <li><b>Mass market</b> (e.g. Coca-Cola) — broad appeal, competitive pricing, wide distribution and mass advertising.</li>
        <li><b>Niche market</b> (e.g. a left-handed shop) — specialist product, premium pricing, targeted promotion to a specific segment.</li>
        <li><b>B2B (business-to-business)</b> — selling to other firms (e.g. a stationery supplier to schools); relationship-led selling, negotiated pricing, trade channels.</li>
        <li><b>B2C (business-to-consumer)</b> — selling direct to the public; emotional branding, retail/online distribution, consumer advertising.</li>
      </ul>`},
    {h:"The product life cycle", html:`
      <p>The <b>product life cycle (PLC)</b> is a model of the stages a product passes through over its life, each needing a different marketing mix:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 400 250" style="min-width:340px;width:100%;max-width:460px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="20" x2="40" y2="205" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="40" y1="205" x2="384" y2="205" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="22" y="115" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--muted)" transform="rotate(-90 22 115)">Sales</text>
        <text x="212" y="243" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--muted)">Time</text>
        <path d="M44,200 L78,198 C104,194 116,182 138,168 C172,126 184,92 214,74 C250,64 276,62 306,66 C338,72 352,120 372,150" fill="none" stroke="var(--amber)" stroke-width="3"/>
        <g stroke="var(--line)" stroke-width="1" stroke-dasharray="4 3">
          <line x1="78" y1="40" x2="78" y2="205"/><line x1="138" y1="40" x2="138" y2="205"/><line x1="214" y1="40" x2="214" y2="205"/><line x1="306" y1="40" x2="306" y2="205"/>
        </g>
        <g font-size="9" fill="var(--muted)" text-anchor="middle">
          <text x="59" y="222">Dev.</text><text x="108" y="222">Intro</text><text x="176" y="222">Growth</text><text x="260" y="222">Maturity</text><text x="345" y="222">Decline</text>
        </g>
      </svg>
      </div>
      <ul>
        <li><b>Development</b> — the product is designed and tested; costs but no sales yet.</li>
        <li><b>Introduction</b> — launch; low sales, heavy promotion, often high price (skimming) or low (penetration).</li>
        <li><b>Growth</b> — sales rise fast; build distribution and brand.</li>
        <li><b>Maturity</b> — sales peak and level off; competition is intense, focus on differentiation.</li>
        <li><b>Decline</b> — sales fall; harvest, withdraw, or extend.</li>
      </ul>
      <p><b>Extension strategies</b> prolong the maturity stage by tweaking the marketing mix — new features or packaging (product), new promotion, new prices, or new markets/channels (e.g. a theme park like Motiongate adding rides or seasonal events). PLC length varies — a smartphone's is short; Heinz Baked Beans' is very long.</p>`},
    {h:"The Boston Matrix (portfolio)", html:`
      <p>The <b>Boston Matrix</b> helps a business manage its <b>product portfolio</b> by plotting each product on market growth vs relative market share:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 440 300" style="min-width:380px;width:100%;max-width:460px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <text x="240" y="16" text-anchor="middle" font-size="11" font-weight="800" fill="var(--muted)">MARKET SHARE</text>
        <text x="150" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">High</text>
        <text x="360" y="34" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Low</text>
        <text x="16" y="160" text-anchor="middle" font-size="11" font-weight="800" fill="var(--muted)" transform="rotate(-90 16 160)">MARKET GROWTH</text>
        <text x="46" y="105" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">High</text>
        <text x="46" y="230" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--ink)">Low</text>
        <rect x="70" y="44" width="175" height="112" rx="6" fill="rgba(245,166,35,.14)" stroke="var(--amber)" stroke-width="2"/>
        <rect x="255" y="44" width="175" height="112" rx="6" fill="rgba(27,79,214,.12)" stroke="#1b4fd6" stroke-width="2"/>
        <rect x="70" y="166" width="175" height="112" rx="6" fill="rgba(15,163,127,.14)" stroke="var(--emerald)" stroke-width="2"/>
        <rect x="255" y="166" width="175" height="112" rx="6" fill="rgba(201,42,42,.12)" stroke="#c92a2a" stroke-width="2"/>
        <text x="157" y="96" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">★ Star</text>
        <text x="157" y="116" text-anchor="middle" font-size="9.5" fill="var(--muted)">high growth, high share</text>
        <text x="342" y="96" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">? Question mark</text>
        <text x="342" y="116" text-anchor="middle" font-size="9.5" fill="var(--muted)">high growth, low share</text>
        <text x="157" y="218" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">🐄 Cash cow</text>
        <text x="157" y="238" text-anchor="middle" font-size="9.5" fill="var(--muted)">low growth, high share</text>
        <text x="342" y="218" text-anchor="middle" font-size="14" font-weight="800" fill="var(--ink)">🐕 Dog</text>
        <text x="342" y="238" text-anchor="middle" font-size="9.5" fill="var(--muted)">low growth, low share</text>
      </svg>
      </div>
      <ul>
        <li><b>Stars</b> — high growth, high share; need heavy investment, later become cash cows.</li>
        <li><b>Cash cows</b> — low growth, high share; mature and profitable, fund the stars.</li>
        <li><b>Question marks</b> — high growth, low share; decide whether to back or drop.</li>
        <li><b>Dogs</b> — low growth, low share; usually sold or closed.</li>
      </ul>
      <p>The aim is a <b>balanced portfolio</b>. But the matrix ignores profit and links between products, and is only a snapshot — a "dog" may still drive loyalty or support other sales, so use it with financial data and research.</p>`}
  ],
  definitions:[
    {term:"Marketing strategy", marks:2, body:`A long-term plan for how a business will achieve its marketing objectives <span class="pt">1</span>, by targeting the right customers with a suitable marketing mix <span class="pt">2</span>.`},
    {term:"Mass marketing", marks:2, body:`Aiming a product at a large, broad market with a single marketing mix <span class="pt">1</span>, using competitive pricing, wide distribution and mass advertising to maximise sales <span class="pt">2</span>.`},
    {term:"Niche marketing", marks:2, body:`Targeting a small, specific segment of a market <span class="pt">1</span> with a specialist product, often premium-priced and promoted directly to that segment <span class="pt">2</span>.`},
    {term:"B2B (business-to-business)", marks:2, body:`When a business sells its products to other businesses rather than to consumers <span class="pt">1</span>, typically using relationship selling, negotiated prices and trade channels <span class="pt">2</span>.`},
    {term:"B2C (business-to-consumer)", marks:2, body:`When a business sells directly to final consumers <span class="pt">1</span>, using consumer branding, retail or online distribution and mass promotion <span class="pt">2</span>.`},
    {term:"Product life cycle", marks:2, body:`A model of the stages a product passes through over its life — development, introduction, growth, maturity and decline <span class="pt">1</span>; each stage needs a different marketing mix <span class="pt">2</span>.`},
    {term:"Extension strategy", marks:2, body:`A tactic used to prolong the maturity stage of the product life cycle <span class="pt">1</span>, such as new features, packaging, promotion or markets, to keep sales up before decline <span class="pt">2</span>.`},
    {term:"Boston Matrix", marks:2, body:`A portfolio tool that plots products on market growth versus relative market share <span class="pt">1</span>, classifying them as stars, cash cows, question marks or dogs to guide investment <span class="pt">2</span>.`},
    {term:"Product portfolio", marks:2, body:`The full range of products a business sells <span class="pt">1</span>; a balanced portfolio spreads risk and uses profitable products to fund growing ones <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'marketing strategy'.",
     model:`A marketing strategy is a long-term plan for achieving a business's marketing objectives <span class="pt">1</span> by targeting the right customers with a suitable marketing mix <span class="pt">2</span>.`,
     fb:"Long-term plan + achieving marketing objectives via the mix."},
    {marks:2, q:"Distinguish between B2B and B2C marketing.",
     model:`B2B marketing sells to other businesses using relationship selling and negotiated prices <span class="pt">1</span>; B2C marketing sells directly to consumers using branding, retail/online channels and mass promotion <span class="pt">2</span>.`,
     fb:"Two contrasting points — selling to firms vs to consumers."},
    {marks:4, q:"Explain one way a theme park such as Motiongate Dubai could use an extension strategy to prolong its product life cycle.",
     model:`Motiongate could add new rides or seasonal events (a product-based extension) <span class="pt">1</span>. This is because refreshing the attraction gives visitors a reason to return <span class="pt">2</span>. As a result, interest and visitor numbers are revived as the park reaches maturity <span class="pt">3</span>, prolonging the maturity stage and delaying decline in ticket sales <span class="pt">4</span>.`,
     fb:"Name a specific extension (new rides/events) and link it to prolonged maturity."},
    {marks:4, q:"A business's product has high market share in a low-growth market. Identify its Boston Matrix category and explain how the business should manage it.",
     model:`This is a <b>cash cow</b> <span class="pt">1</span>. It is mature and profitable with little need for investment <span class="pt">2</span>, so the business should manage it for steady cash flow <span class="pt">3</span> and use that cash to fund its stars and promising question marks <span class="pt">4</span>.`,
     fb:"Identify cash cow and link to harvesting cash to fund stars."}
  ],
  caseStudy:{
    business:"TPC, Skechers, Motiongate & Apple",
    intro:`<p>Businesses used in the marketing-strategy questions.</p>
      <ul>
        <li><b>The Trade Publishing Company (TPC)</b> — launching a celebrity-chef cookbook (print only, no ebook) into the competitive consumer market: a Boston Matrix placement question.</li>
        <li><b>Skechers</b> — uses the product life cycle to manage its shoe-line portfolio and spot decline.</li>
        <li><b>Motiongate Dubai</b> — a theme park using extension strategies (new rides, events) to prolong its life cycle.</li>
        <li><b>Apple</b> — a broad portfolio (iPhone, iPad, Watch, Vision Pro) analysed with the Boston Matrix.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Analyse which part of the Boston Matrix 'The Reilly Perfect Way to Cook' is likely to be in as it launches into the cookbook market. (10)",
     model:`<p><span class="tag t-P">POINT</span>The book is most likely a <b>question mark</b> at launch, because it is a new product entering the competitive consumer cookbook market for the first time. <span class="tag t-C">CHAIN</span>It needs high marketing spend to build awareness and, without an ebook format, may miss digital readers — so it starts with low market share in a growing market, generating little immediate profit and needing heavy investment to grow.</p>
     <p><span class="tag t-J">HOWEVER</span>However, it could become a <b>star</b> if it leverages Eoghan Reilly's celebrity-chef reputation and strong consumer interest in cookbooks. The established retail market (WH Smith selling popular titles weekly) offers rapid-growth potential, so effective marketing could lift sales fast enough to win a high share of a growing market.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, it most likely starts as a question mark because of high marketing costs, strong competition and no ebook. Success depends on TPC promoting it well, using Reilly's celebrity, and developing an ebook — so it is recommended TPC produces a quality ebook alongside the print version to capture the digital market.</p>`,
     fb:"Mr. Akram's exemplar (TPC, 10). Question-mark placement with a star counter and an ebook-dependent conclusion."},
    {marks:10, q:"Assess the usefulness of the product life cycle to a business such as Skechers in developing its product portfolio. (10)",
     model:`<p><span class="tag t-P">POINT</span>One use is spotting decline early, because Skechers can track each shoe line's sales and see when demand falls. <span class="tag t-C">CHAIN</span>This informs when to withdraw older styles or launch updated versions, so it avoids excess stock and can redirect resources to new designs — keeping the portfolio responsive and competitive.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the model is hard to predict accurately, because the length of each stage varies with fashion trends, competitor launches and the economy. Relying on it too heavily risks withdrawing a product too early or backing a line that quickly dates, wasting development and marketing spend.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the product life cycle is useful for timing portfolio decisions, but its usefulness depends on using it alongside regular market research and customer feedback rather than on its own.</p>`,
     fb:"Mr. Akram's exemplar (Skechers, 10). Decline-spotting/portfolio use balanced against the model's unpredictability, concluding 'use with research'."},
    {marks:8, q:"Assess how far a business's marketing strategy should differ between a mass market and a niche market. (8)",
     model:`<p><span class="tag t-P">POINT</span>The strategy should differ a lot on targeting and the mix, because the markets have different customers. <span class="tag t-C">CHAIN</span>A mass-market firm (e.g. Coca-Cola) uses competitive prices, wide distribution and broad advertising for volume, while a niche firm uses premium pricing and targeted promotion to a specific segment — so the mixes are built for opposite goals.</p>
     <p><span class="tag t-P">POINT</span>Branding and positioning also differ, because a niche relies on specialism and exclusivity whereas a mass market relies on broad appeal. <span class="tag t-C">CHAIN</span>This shapes very different messages, channels and price points.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the core principles are the same — both must research customers, meet their needs and build a coherent mix — so the strategy differs in execution more than in fundamentals. The extent depends on how distinct the two target segments really are.</p>`,
     fb:"Mr. Akram's exemplar. Differences in mix/branding balanced against shared marketing principles, judged on how distinct the segments are."}
  ],
  resources:[
    {label:"Marketing strategy, PLC & Boston Matrix — lesson notes (PDF)", file:"resources/1-3-3-1-marketing-strategy-notes.pdf"},
    {label:"Boston Matrix — activity pack with answer key (PDF)", file:"resources/1-3-3-1-boston-matrix-activity.pdf"}
  ]
},
{
  code:"1.3.3.2", subtheme:"1.3.3", title:"Product/service design",
  business:"Case studies: Lehman's, Aston Martin & IKEA", status:"live",
  notes:[
    {h:"The design mix", html:`
      <p><b>Product</b> is the first element of the marketing mix. When designing a product, a business balances the <b>design mix</b> — three elements that often pull against each other:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 360 230" style="min-width:300px;width:100%;max-width:420px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <polygon points="180,30 60,195 300,195" fill="rgba(245,166,35,.10)" stroke="var(--amber)" stroke-width="2.5"/>
        <circle cx="180" cy="30" r="5" fill="var(--navy)"/><circle cx="60" cy="195" r="5" fill="var(--navy)"/><circle cx="300" cy="195" r="5" fill="var(--navy)"/>
        <text x="180" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Function</text>
        <text x="180" y="52" text-anchor="middle" font-size="9" fill="var(--muted)">does it work well?</text>
        <text x="52" y="212" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Aesthetics</text>
        <text x="52" y="225" text-anchor="middle" font-size="9" fill="var(--muted)">how it looks/feels</text>
        <text x="308" y="212" text-anchor="middle" font-size="12" font-weight="800" fill="var(--ink)">Cost</text>
        <text x="308" y="225" text-anchor="middle" font-size="9" fill="var(--muted)">economic manufacture</text>
      </svg>
      </div>
      <ul>
        <li><b>Function</b> — how well the product works and meets the customer's practical needs (vital for a kettle or farm tool).</li>
        <li><b>Aesthetics</b> — how it looks, feels, sounds or smells (vital for an Audi or a Canada Goose coat).</li>
        <li><b>Cost (economic manufacture)</b> — keeping production cost low enough to sell at a profit at the target price.</li>
      </ul>
      <p>The <b>most important element depends on the product and market</b> — a luxury car leans on aesthetics, a budget kettle on cost, a safety tool on function. Trade-offs are unavoidable: more features or better looks usually raise cost.</p>`},
    {h:"The design mix & social trends", html:`
      <p>Social trends increasingly shape design. Businesses adapt the design mix for:</p>
      <ul>
        <li><b>Sustainability &amp; resource depletion</b> — designing for <b>waste minimisation, re-use and recycling</b> (e.g. clothing made from recycled plastics).</li>
        <li><b>Ethical sourcing</b> — materials and labour that meet ethical standards, appealing to conscientious consumers.</li>
        <li><b>Durability &amp; repairability</b> — longer-lasting products that reduce waste.</li>
      </ul>
      <p>Designing for these trends can add value, justify a premium and protect brand reputation — but often <b>raises costs</b>, so the firm must judge whether customers will pay for it.</p>`}
  ],
  definitions:[
    {term:"Design mix", marks:2, body:`The balance of three elements in designing a product — function, aesthetics and cost (economic manufacture) <span class="pt">1</span>; a business weights them differently depending on the product and its market <span class="pt">2</span>.`},
    {term:"Function (design mix)", marks:2, body:`How well a product works and meets the customer's practical needs <span class="pt">1</span>; strong function supports quality, satisfaction and repeat purchases <span class="pt">2</span>.`},
    {term:"Aesthetics (design mix)", marks:2, body:`How a product appeals to the senses — how it looks, feels, sounds or smells <span class="pt">1</span>; strong aesthetics can differentiate a product and justify a premium price <span class="pt">2</span>.`},
    {term:"Economic manufacture", marks:2, body:`Designing a product so it can be made at a low enough cost to sell profitably at the target price <span class="pt">1</span>; it trades off against adding more function or better aesthetics <span class="pt">2</span>.`},
    {term:"Ethical sourcing", marks:2, body:`Obtaining materials and labour in a way that meets ethical and environmental standards <span class="pt">1</span>; it can add value and protect reputation but usually raises costs <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'design mix'.",
     model:`The design mix is the balance of function, aesthetics and cost (economic manufacture) in designing a product <span class="pt">1</span>; a business weights these differently depending on the product and its target market <span class="pt">2</span>.`,
     fb:"Names the three elements plus the idea of balancing them by product/market."},
    {marks:4, q:"Explain how Aston Martin could use the design mix to appeal to a new target market of younger buyers and women. (4)",
     model:`Aston Martin could prioritise aesthetics, redesigning the interior and exterior with more stylish, modern looks — new colour options and high-tech features <span class="pt">1</span>. This is because younger and female buyers often value appearance and innovation in their decision <span class="pt">2</span>. As a result, the cars feel more relevant and attractive to this audience <span class="pt">3</span>, increasing interest and sales among the new target market <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Aston Martin). Uses aesthetics element, applied to the new target market and linked to sales."},
    {marks:4, q:"Explain one way a social trend could influence a business's design mix.",
     model:`Growing concern for sustainability pushes firms to design for recycling <span class="pt">1</span>. This is because consumers increasingly prefer eco-friendly products <span class="pt">2</span>. As a result, a clothing firm might use recycled plastics in its materials <span class="pt">3</span>, adding value and protecting its reputation, though at a higher production cost <span class="pt">4</span>.`,
     fb:"Links a named social trend (sustainability) to a design change and its cost/value trade-off."}
  ],
  caseStudy:{
    business:"Lehman's, Aston Martin & IKEA",
    intro:`<p>Businesses used in the design-mix questions.</p>
      <ul>
        <li><b>Lehman's</b> — sells simple, non-electrical tools (farm equipment, oil lamps, wood heaters) that must work reliably, so <b>function</b> dominates its design mix.</li>
        <li><b>Aston Martin</b> — uses <b>aesthetics</b> to appeal to younger buyers and women.</li>
        <li><b>IKEA</b> — balances function, aesthetics and low cost, and designs for sustainability.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the importance of function to Lehman's when considering the design mix for new products. (10)", caseImg:"resources/casestudies/cs-1-3-1-1-lehmans.png",
     model:`<p><span class="tag t-P">POINT</span>Function is especially important to Lehman's because it specialises in simple, non-electrical tools — farm equipment, oil lamps, wood-powered heaters. <span class="tag t-C">CHAIN</span>These must work reliably in everyday use without modern technology, so they need to be durable and effective to uphold the brand's reputation for quality — leading to satisfied customers, repeat purchases and long-term loyalty.</p>
     <p><span class="tag t-J">HOWEVER</span>However, Lehman's must also consider aesthetics, because some goods are bought as gifts or used as set pieces in historical films. Focusing only on function and ignoring appearance could lose customers who want traditional, beautifully designed items, reducing sales among those who value design as well as practicality.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, function is likely the most important element for Lehman's because its customers rely on durable, practical goods — ignoring it would undermine the brand's identity. But success depends on balancing function with aesthetics and affordable cost, so it is recommended Lehman's keeps function first while ensuring products are attractive and affordable to widen its appeal.</p>`,
     fb:"Mr. Akram's exemplar (Lehman's, 10). Function as dominant (durability/reputation) balanced against aesthetics, concluding 'function first, but balanced'."}
  ],
  resources:[
    {label:"The design mix — lesson notes (PDF)", file:"resources/1-3-3-2-design-mix-notes.pdf"}
  ]
},
{
  code:"1.3.3.3", subtheme:"1.3.3", title:"Promotion and branding",
  business:"Case study: Deliveroo & emotional branding", status:"live",
  notes:[
    {h:"The promotional mix", html:`
      <p><b>Promotion</b> is the marketing activity used to communicate with customers to <b>inform and persuade</b> them to buy. Firms blend several methods — the <b>promotional mix</b>:</p>
      <ul>
        <li><b>Advertising</b> — paid messages through TV, radio, social media or billboards (e.g. McDonald's global campaigns).</li>
        <li><b>Sales promotion</b> — short-term incentives: coupons, app-exclusive deals, free samples, product trials (e.g. H&amp;M seasonal discounts).</li>
        <li><b>Personal selling</b> — staff selling face to face, common for high-value goods (e.g. Rolex boutique staff).</li>
        <li><b>Public relations (PR)</b> — managing the firm's public image through press releases, events and coverage (e.g. Apple's iPhone launch events generate huge free publicity).</li>
        <li><b>Direct &amp; digital marketing</b> — tailored emails, app notifications and social media (e.g. Amazon's personalised recommendations, Starbucks campaigns).</li>
      </ul>
      <p><b>Above-the-line (ATL)</b> promotion is advertising through <b>mass media</b> to reach a wide audience (e.g. Pepsi's Super Bowl TV ads). <b>Below-the-line (BTL)</b> promotion is communication the firm controls directly and does not use mass media (e.g. personal selling, sales promotions, direct marketing).</p>`},
    {h:"Technology in promotion", html:`
      <p>Technology has transformed promotion, especially for reaching targeted audiences cheaply:</p>
      <ul>
        <li><b>Targeted online advertising</b> — ads aimed at customers whose online activity shows interest (e.g. Amazon's recommendations based on past purchases).</li>
        <li><b>Viral advertising</b> — eye-catching, shareable content spread by users themselves (e.g. the ALS Ice Bucket Challenge; Nike's "Dream Crazy").</li>
        <li><b>E-newsletters</b> — email lists sending offers to people who opted in (e.g. IKEA's personalised recommendations).</li>
      </ul>
      <p>These methods are low-cost and highly targeted, but firms have less control over how messages spread and must avoid overwhelming customers.</p>`},
    {h:"What is a brand?", html:`
      <p>A <b>brand</b> is a unique design, sign, symbol, word, or combination of these, used to create an image that identifies a product and <b>differentiates it from competitors</b>. Branding turns a product into something customers recognise, trust and feel loyal to.</p>
      <p>There are three main <b>types of branding</b>:</p>
      <ul>
        <li><b>Corporate branding</b> — the whole business trades under one brand name (e.g. <b>Netflix</b>, Apple). Every product benefits from the company's reputation, but one scandal can damage everything.</li>
        <li><b>Product (individual) branding</b> — each product has its own identity (e.g. <b>Mars UK</b> sells Mars, Snickers, Twix, Galaxy as separate brands). A problem with one brand needn't harm the others, but it is expensive to market each one.</li>
        <li><b>Own-label (own-brand) branding</b> — a retailer sells products under its <i>own</i> name rather than the manufacturer's (e.g. <b>Carrefour</b> or Tesco own-label). Cheaper for the retailer and higher margins, but usually seen as lower quality than big-name brands.</li>
      </ul>`},
    {h:"Benefits of a strong brand & how to build one", html:`
      <p>A strong brand delivers real commercial advantages:</p>
      <ul>
        <li><b>Added value</b> — customers will pay more for a trusted brand than an identical unbranded product.</li>
        <li><b>Premium pricing</b> — the brand justifies a higher price and higher profit margins.</li>
        <li><b>Reduced price elasticity of demand</b> — loyal customers are less sensitive to price rises, so the firm can raise prices without losing many sales.</li>
        <li><b>Customer loyalty &amp; repeat purchases</b> — a recognised brand keeps customers coming back and makes it harder for rivals to win them away.</li>
      </ul>
      <p>Building a strong brand is a <b>long-term strategy</b> needing sustained effort over years. Firms usually combine several methods at once:</p>
      <ul>
        <li><b>Differentiation</b> — a clear USP that sets the brand apart.</li>
        <li><b>Advertising</b> — repeated, consistent messaging to build awareness.</li>
        <li><b>Sponsorship</b> — linking the brand to events, teams or causes (e.g. Emirates and football).</li>
        <li><b>Social media</b> — engaging customers directly and cheaply.</li>
      </ul>
      <p><b>Rebranding</b> is changing a brand's image, name or identity — used to refresh a tired image, recover from bad publicity or reach a new market. It is risky: it can alienate existing loyal customers if handled badly.</p>`},
    {h:"Promotion & branding and social trends", html:`
      <p>Promotion and branding adapt to changing <b>social trends</b>, especially the rise of social media:</p>
      <ul>
        <li><b>Viral marketing</b> — using existing social networks (Instagram, TikTok, YouTube) so consumers share a message with each other, spreading it like a virus. The firm posts the original content; customers do the distribution <b>for free</b> through word of mouth. It can reach a huge audience cheaply, but the firm has little control over how the message spreads.</li>
        <li><b>Emotional branding</b> — creating a bond by provoking an <b>emotional response</b> (joy, trust, nostalgia) rather than relying on logical factors like price. A long-lasting emotional attachment builds strong brand loyalty — for example Deliveroo's <i>"food happiness"</i> idea.</li>
      </ul>
      <p>These trends let smaller or newer firms compete with established brands, but only if the emotional message is backed by a genuinely good product or service.</p>`}
  ],
  definitions:[
    {term:"Promotion", marks:2, body:`The marketing activity used to communicate with customers to inform and persuade them to buy a product <span class="pt">1</span>; it combines methods such as advertising, sales promotion, PR and direct marketing <span class="pt">2</span>.`},
    {term:"Above-the-line promotion", marks:2, body:`Advertising through mass media such as TV, radio and billboards to reach a wide audience <span class="pt">1</span>; it builds awareness quickly but is costly and less targeted than below-the-line methods <span class="pt">2</span>.`},
    {term:"Brand", marks:2, body:`A unique design, sign, symbol or name that identifies a product and sets it apart from competitors <span class="pt">1</span>; it creates an image customers recognise, trust and stay loyal to <span class="pt">2</span>.`},
    {term:"Corporate branding", marks:2, body:`When a business markets all of its products under one single company brand name <span class="pt">1</span>; every product shares the firm's reputation, so success — or scandal — affects them all together <span class="pt">2</span>.`},
    {term:"Own-label branding", marks:2, body:`When a retailer sells products under its own name rather than the manufacturer's <span class="pt">1</span>; it gives the retailer higher margins and control but is often seen as lower quality than big-name brands <span class="pt">2</span>.`},
    {term:"Viral marketing", marks:2, body:`A strategy that uses existing social networks so consumers share a promotional message with each other <span class="pt">1</span>; the business avoids distribution costs because customers spread the message for free <span class="pt">2</span>.`},
    {term:"Emotional branding", marks:2, body:`Creating a bond between consumer and product by provoking an emotional response to the promotion <span class="pt">1</span>; a lasting emotional attachment builds strong brand loyalty <span class="pt">2</span>.`},
    {term:"Rebranding", marks:2, body:`Changing a brand's name, image or identity to refresh it or reach a new market <span class="pt">1</span>; it can modernise a tired brand but risks alienating existing loyal customers <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'brand'.",
     model:`A brand is a unique design, symbol or name that identifies a product and differentiates it from competitors <span class="pt">1</span>; it builds an image that customers recognise and stay loyal to <span class="pt">2</span>.`,
     fb:"Identification/differentiation plus the loyalty/image idea — two developed points, no example needed."},
    {marks:2, q:"Define the term 'viral marketing'.",
     model:`Viral marketing uses existing social networks so consumers share a promotional message with one another <span class="pt">1</span>; because customers spread it themselves, the business avoids distribution costs <span class="pt">2</span>.`,
     fb:"Mechanism (sharing via social networks) plus the free-distribution benefit."},
    {marks:4, q:"Explain one benefit to a business of having a strong brand.",
     model:`A strong brand reduces the price elasticity of demand for the product <span class="pt">1</span>. This is because loyal customers trust the brand and are less sensitive to price changes <span class="pt">2</span>. As a result, the business can raise its price without losing many sales <span class="pt">3</span>, increasing its profit margin and revenue <span class="pt">4</span>.`,
     fb:"Names a benefit (reduced PED), explains why, and chains to profit — a clean 4-mark build."}
  ],
  caseStudy:{
    business:"Deliveroo",
    intro:`<p><b>Deliveroo</b> is a food-delivery app competing in a saturated market against Just Eat and Uber Eats. It ran an <b>emotional branding</b> campaign built around the idea of <i>"food happiness"</i>, linking the brand to positive feelings rather than just price or speed.</p>
      <p>The campaign lifted Deliveroo's <b>brand awareness from 3.1% to 6.6%</b>. However, the firm still ranked <b>lower than competitors</b> on customer satisfaction and reputation — showing that emotional branding attracts users but cannot keep them loyal on its own.</p>`
  },
  exam:[
    {marks:12, q:"Assess the importance of emotional branding to Deliveroo. (12)",
     model:`<p><span class="tag t-P">POINT</span>One reason emotional branding is important to Deliveroo is that it helps build a stronger connection with customers. <span class="tag t-C">CHAIN</span>This is because emotional branding appeals to feelings such as joy and trust, which influence loyalty more than logical factors like price. <span class="tag t-A">APPLY</span>Deliveroo linked its campaign to the concept of "food happiness", helping customers associate the brand with positive emotions. <span class="tag t-C">CHAIN</span>This creates a more emotionally engaged customer base, so customers may be more likely to choose Deliveroo over rivals like Just Eat or Uber Eats. As a result, emotional branding could increase brand awareness and sales — as seen in the rise from 3.1% to 6.6% awareness — improving its competitive position in a saturated market.</p>
     <p><span class="tag t-J">HOWEVER</span>However, emotional branding may not be the most important factor influencing customer choice. <span class="tag t-C">CHAIN</span>This is because some customers prioritise price, delivery speed or app functionality over emotional appeal. <span class="tag t-A">APPLY</span>The extract shows Deliveroo still ranked lower than competitors on satisfaction and reputation. <span class="tag t-C">CHAIN</span>This creates the risk that customers try the service because of the branding but do not stay loyal if the experience disappoints, so Deliveroo could lose them to rivals.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, emotional branding is likely to help Deliveroo stand out and attract new users, especially those switching from other apps. However, success depends on whether the emotional message is supported by an equally strong user experience. It is recommended that Deliveroo focuses not only on emotional messaging but also on improving delivery reliability and customer satisfaction, so that users stay loyal after trying the service.</p>`,
     fb:"Mr. Akram's exemplar (Deliveroo, 12). One developed argument for, one against — both applied to the extract data — and a supported recommendation."},
    {marks:12, q:"Mars is launching a new range of protein bars aimed at health-conscious consumers. Evaluate the methods of promotion Mars could use to launch the new range. (12)", caseImg:"resources/casestudies/cs-1-3-3-3-mars-protein.png",
     model:`<p><span class="tag t-P">POINT</span>One method Mars could use is <b>celebrity endorsement</b>. <span class="tag t-C">CHAIN</span>Using a well-known athlete or influencer from the health or cycling community would make the protein bars appear credible and desirable, building strong brand recognition among health-conscious consumers. <span class="tag t-A">APPLY</span>The product could therefore gain rapid attention in a competitive market and stand out from other protein snacks. <span class="tag t-J">HOWEVER</span>However, this is expensive and its success depends on the celebrity's reputation — if they are caught in a scandal it could damage the brand's image, reduce consumer trust and harm long-term sales.</p>
     <p><span class="tag t-P">POINT</span>A second method is <b>in-store sales promotion</b>, such as free samples in supermarkets or gyms. <span class="tag t-C">CHAIN</span>Letting consumers try the bar before buying overcomes concerns about taste or unfamiliar ingredients, driving product trial and impulse purchases. <span class="tag t-A">APPLY</span>This could boost Mars's short-term sales and quickly raise awareness of the new range. <span class="tag t-J">HOWEVER</span>However, sampling is costly and complex to run across many stores, needing enough staff and stock, and those who try the bar may not become repeat buyers — so the return on investment might be limited.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the best approach is likely to combine both — using sampling to drive trial at launch while a credible endorsement builds longer-term brand image — provided Mars monitors the cost against the sales each method generates.</p>`,
     fb:"Mr. Akram's exemplar (Mars, 12). Two promotion methods, each with a developed benefit and a counter, plus a combined judgement."}
  ],
  resources:[
    {label:"Promotion — lesson notes (PDF)", file:"resources/1-3-3-3-promotion-notes.pdf"},
    {label:"Branding — lesson notes (PDF)", file:"resources/1-3-3-3-branding-notes.pdf"}
  ]
},
{
  code:"1.3.3.4", subtheme:"1.3.3", title:"Pricing strategies",
  business:"Case studies: Pfizer, Ryanair & UK supermarkets", status:"live",
  notes:[
    {h:"The main pricing strategies", html:`
      <p><b>Price</b> is the element of the marketing mix that directly earns revenue. The main strategies are:</p>
      <ul>
        <li><b>Cost-plus pricing</b> — add a fixed profit mark-up to the unit cost (e.g. Tata Motors). Simple and guarantees a margin, but ignores what customers and competitors are doing.</li>
        <li><b>Price skimming</b> — launch a new product at a <b>high price</b>, then lower it over time (e.g. Microsoft, Apple). Recovers R&amp;D costs quickly from early adopters, but only works with a strong USP and few rivals.</li>
        <li><b>Penetration pricing</b> — launch at a <b>low price</b> to win market share fast, then raise it (e.g. Disney+). Builds a customer base quickly, but means low margins at first.</li>
        <li><b>Competitive pricing</b> — set prices in line with or just below rivals (e.g. supermarkets). Keeps the firm attractive in a mature market, but limits margins and can spark price wars.</li>
        <li><b>Psychological pricing</b> — prices set to <i>feel</i> lower (£9.99 not £10; e.g. Huawei, Apple). Encourages purchases, but looks gimmicky for premium brands.</li>
        <li><b>Predatory pricing</b> — set prices very low to drive rivals out, then raise them. Effective but <b>illegal</b> in many markets.</li>
      </ul>
      <p><b>Skimming vs penetration</b> take opposite paths over a product's life:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 420 240" style="min-width:360px;width:100%;max-width:480px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <line x1="50" y1="20" x2="50" y2="200" stroke="var(--muted)" stroke-width="1.5"/>
        <line x1="50" y1="200" x2="395" y2="200" stroke="var(--muted)" stroke-width="1.5"/>
        <text x="14" y="110" font-size="11" font-weight="700" fill="var(--muted)" transform="rotate(-90 14 110)" text-anchor="middle">Price</text>
        <text x="222" y="228" font-size="11" font-weight="700" fill="var(--muted)" text-anchor="middle">Time since launch</text>
        <!-- skimming: high then falling -->
        <polyline points="60,40 150,55 240,95 330,130 385,145" fill="none" stroke="var(--amber)" stroke-width="2.6"/>
        <text x="150" y="44" font-size="10" font-weight="800" fill="var(--amber)">Skimming</text>
        <!-- penetration: low then rising to settle -->
        <polyline points="60,180 150,150 240,125 330,118 385,116" fill="none" stroke="var(--navy)" stroke-width="2.6"/>
        <text x="150" y="172" font-size="10" font-weight="800" fill="var(--navy)">Penetration</text>
      </svg>
      </div>`},
    {h:"Factors in the choice & social trends", html:`
      <p>Which strategy fits depends on several <b>factors</b>:</p>
      <ul>
        <li><b>USPs / differentiation</b> — a strong USP allows skimming or premium pricing.</li>
        <li><b>Price elasticity of demand</b> — inelastic demand lets a firm charge more without losing many sales.</li>
        <li><b>Level of competition</b> — crowded markets push firms towards competitive pricing.</li>
        <li><b>Strength of brand</b> — a powerful brand supports premium prices.</li>
        <li><b>Stage of the product life cycle</b> — skimming/penetration at launch, competitive pricing at maturity.</li>
        <li><b>Costs &amp; the need for profit</b> — price must cover costs over time.</li>
      </ul>
      <p><b>Social and technological trends</b> have squeezed pricing:</p>
      <ul>
        <li><b>Online selling</b> lets customers compare and buy anywhere, forcing prices down and increasing transparency.</li>
        <li><b>Price comparison sites</b> make it easy to switch to the cheapest supplier, so firms must price keenly or compete on non-price factors like delivery speed and loyalty schemes.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Cost-plus pricing", marks:2, body:`Setting price by adding a fixed profit mark-up to the unit cost of a product <span class="pt">1</span>; it guarantees a margin and is simple to apply but ignores competitors' prices and what customers will pay <span class="pt">2</span>.`},
    {term:"Price skimming", marks:2, body:`Charging a high price for a new product at launch, then lowering it over time <span class="pt">1</span>; it recovers development costs quickly from early adopters but relies on a strong USP and few competitors <span class="pt">2</span>.`},
    {term:"Penetration pricing", marks:2, body:`Launching a product at a deliberately low price to win market share quickly <span class="pt">1</span>; it attracts price-sensitive customers fast but means low profit margins at first <span class="pt">2</span>.`},
    {term:"Competitive pricing", marks:2, body:`Setting prices in line with, or just below, those of main rivals <span class="pt">1</span>; it keeps the firm attractive in a mature market but limits margins and can trigger price wars <span class="pt">2</span>.`},
    {term:"Psychological pricing", marks:2, body:`Setting a price that makes a product feel cheaper than it is, such as £9.99 rather than £10 <span class="pt">1</span>; it nudges customers to buy but can look gimmicky for a premium brand <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'penetration pricing'.",
     model:`Penetration pricing launches a product at a deliberately low price to win market share quickly <span class="pt">1</span>; it attracts price-sensitive customers fast but means low margins until prices are later raised <span class="pt">2</span>.`,
     fb:"Mechanism (low launch price for share) plus the margin trade-off — two developed points."},
    {marks:2, q:"Define the term 'price skimming'.",
     model:`Price skimming charges a high price for a new product at launch and lowers it over time <span class="pt">1</span>; it recovers development costs quickly from early adopters while competition is limited <span class="pt">2</span>.`,
     fb:"High launch price falling over time, plus the cost-recovery purpose."},
    {marks:4, q:"Explain how Pfizer could benefit from using a price skimming strategy. (4)",
     model:`Price skimming means charging a high price for a new product at launch, then lowering it over time <span class="pt">1</span>. Pfizer could use this for a new drug gained through the Allergan merger, such as a new Alzheimer's treatment, charging a premium to customers willing to pay for early access <span class="pt">2</span>. This is because there are few or no competitors initially, so demand is relatively inelastic <span class="pt">3</span>. As a result, Pfizer recovers its high research and development costs faster — vital in the pharmaceutical industry <span class="pt">4</span>.`,
     fb:"Mr. Akram's exemplar (Pfizer, 4). Definition (1) + two extract-linked application points (Allergan, new drug) + a developed chain to R&D recovery."}
  ],
  caseStudy:{
    business:"Pfizer, Ryanair & UK supermarkets",
    intro:`<p>Businesses used in the pricing questions.</p>
      <ul>
        <li><b>Pfizer</b> — merged with Allergan ($160bn, 2015), gaining drugs like Botox and the Alzheimer's drug Namenda; uses <b>skimming</b> to recover R&amp;D costs.</li>
        <li><b>Ryanair &amp; Air Europa</b> — 2017 partnership opening long-haul routes from Madrid to the Americas, competing with Iberia and Vueling; choosing between <b>competitive</b> and <b>penetration</b> pricing.</li>
        <li><b>UK supermarkets</b> — Tesco, Asda, Sainsbury's and Morrisons face discounters Aldi and Lidl, price comparison sites and demand for one-hour delivery.</li>
      </ul>`
  },
  exam:[
    {marks:12, q:"Assess how changing social trends are likely to affect pricing decisions for UK supermarkets. (12)",
     model:`<p><span class="tag t-P">POINT</span>One likely impact is increased pressure to adapt operations and services. <span class="tag t-C">CHAIN</span>Consumers shop more frequently for fresh groceries and increasingly use online services for convenience, so supermarkets must invest in delivery infrastructure and digital platforms. <span class="tag t-A">APPLY</span>Major chains like Tesco have introduced one-hour delivery to stay competitive, meaning firms that fail to adapt could lose customers to more responsive rivals.</p>
     <p><span class="tag t-P">POINT</span>A second influence is growing competition from discounters like Aldi and Lidl. <span class="tag t-C">CHAIN</span>Their lower prices attract price-sensitive shoppers, forcing Tesco, Asda, Sainsbury's and Morrisons to review pricing and rely less on brand loyalty — and price comparison sites make switching even easier. <span class="tag t-A">APPLY</span>Traditional supermarkets may lose market share unless they offer better value.</p>
     <p><span class="tag t-J">HOWEVER</span>However, some supermarkets can hold loyalty through non-price factors — one-hour delivery, a wider range and loyalty schemes add value beyond low prices, so firms that invest in convenience may keep customers even at slightly higher prices. <span class="tag t-J">CONCLUSION</span>In conclusion, UK supermarkets must respond to shifting behaviour and rising competition; success depends on balancing low prices with high service levels, so it is recommended they invest in faster delivery, digital platforms and loyalty-building to protect their market position.</p>`,
     fb:"Mr. Akram's exemplar (supermarkets, 12). Two applied impacts (online/delivery, discounters & comparison sites) balanced by non-price differentiation, with a judged recommendation."},
    {marks:20, q:"For long-haul flights to the Americas, Ryanair and Air Europa could use competitive pricing or penetration pricing. Evaluate these two strategies and recommend which should be used to maximise profit. (20)", caseImg:"resources/casestudies/cs-1-3-3-4-ryanair-air-europa.png",
     model:`<p><span class="tag t-P">POINT</span>Penetration pricing launches a service at a low price to attract customers and gain market share quickly. <span class="tag t-A">APPLY</span>This could benefit Ryanair and Air Europa as they break into the competitive long-haul market to the Americas: offering much cheaper fares than Iberia and Vueling could attract price-sensitive passengers who do not normally book long-haul. <span class="tag t-C">CHAIN</span>The partnership could fill planes quickly and build brand awareness, then later raise prices once loyalty and market share have grown, leading to long-term profitability.</p>
     <p><span class="tag t-J">HOWEVER</span>However, low prices may not cover the high fixed costs of long-haul flights — fuel, airport charges, in-flight services. <span class="tag t-C">CHAIN</span>The partnership might suffer short-term losses or very slim margins, and if competitors also cut prices it could trigger a damaging price war; customers won on price alone may not stay loyal when prices rise.</p>
     <p><span class="tag t-P">POINT</span>In contrast, competitive pricing sets fares similar to rivals to stay attractive while keeping sustainable margins. <span class="tag t-C">CHAIN</span>Ryanair and Air Europa could match rivals' fares while still covering operating costs, growing steadily without compromising financial stability. <span class="tag t-J">HOWEVER</span>However, matching prices may not persuade customers to switch from established brands like Iberia, so growth could be slow and gaining market share could take much longer.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, penetration pricing may be more effective in the short term for rapid market entry, but success depends on whether customers stay loyal once prices rise; competitive pricing is safer financially but grows more slowly. The best choice depends on how much financial risk the partnership will take and how important fast entry is. It is recommended that a combined approach — starting with penetration pricing, then shifting to competitive pricing — offers the best balance of growth and sustainability, supported by Ryanair's 130-million-customer digital reach and Air Europa's long-haul expertise.</p>`,
     fb:"Mr. Akram's exemplar (Ryanair, 20). Both strategies developed with a benefit and a drawback, applied to the extract, and a justified combined recommendation."}
  ],
  resources:[
    {label:"Pricing strategies — lesson notes (PDF)", file:"resources/1-3-3-4-pricing-notes.pdf"}
  ]
},
{
  code:"1.3.3.5", subtheme:"1.3.3", title:"Distribution (place)",
  business:"Case studies: MAC, Nike & Ocado", status:"live",
  notes:[
    {h:"Channels of distribution", html:`
      <p><b>Place</b> is the element of the marketing mix that gets the product from the producer to the final customer. A <b>distribution channel</b> is the link between production and consumption — it can be short (producer straight to consumer) or long (passing through several <b>intermediaries</b>).</p>
      <p>Each layer that helps move the product to the final buyer is a <b>channel level</b>. The three classic channels are:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 220" style="min-width:480px;width:100%;max-width:620px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <!-- row labels -->
        <text x="6" y="36" font-size="10" font-weight="700" fill="var(--muted)">4-stage</text>
        <text x="6" y="108" font-size="10" font-weight="700" fill="var(--muted)">3-stage</text>
        <text x="6" y="180" font-size="10" font-weight="700" fill="var(--muted)">2-stage</text>
        <!-- helper: boxes -->
        <!-- 4-stage: Producer Wholesaler Retailer Consumer -->
        <g font-size="10" font-weight="700" text-anchor="middle">
          <rect x="70" y="18" width="86" height="30" rx="6" fill="rgba(15,42,74,.08)" stroke="var(--navy)"/><text x="113" y="37" fill="var(--ink)">Producer</text>
          <rect x="188" y="18" width="92" height="30" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)"/><text x="234" y="37" fill="var(--ink)">Wholesaler</text>
          <rect x="312" y="18" width="80" height="30" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)"/><text x="352" y="37" fill="var(--ink)">Retailer</text>
          <rect x="424" y="18" width="86" height="30" rx="6" fill="rgba(15,157,88,.10)" stroke="var(--emerald)"/><text x="467" y="37" fill="var(--ink)">Consumer</text>
          <!-- 3-stage -->
          <rect x="70" y="90" width="86" height="30" rx="6" fill="rgba(15,42,74,.08)" stroke="var(--navy)"/><text x="113" y="109" fill="var(--ink)">Producer</text>
          <rect x="312" y="90" width="80" height="30" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)"/><text x="352" y="109" fill="var(--ink)">Retailer</text>
          <rect x="424" y="90" width="86" height="30" rx="6" fill="rgba(15,157,88,.10)" stroke="var(--emerald)"/><text x="467" y="109" fill="var(--ink)">Consumer</text>
          <!-- 2-stage -->
          <rect x="70" y="162" width="86" height="30" rx="6" fill="rgba(15,42,74,.08)" stroke="var(--navy)"/><text x="113" y="181" fill="var(--ink)">Producer</text>
          <rect x="424" y="162" width="86" height="30" rx="6" fill="rgba(15,157,88,.10)" stroke="var(--emerald)"/><text x="467" y="181" fill="var(--ink)">Consumer</text>
        </g>
        <g stroke="var(--muted)" stroke-width="1.5" marker-end="url(#ah)">
          <line x1="156" y1="33" x2="186" y2="33"/><line x1="280" y1="33" x2="310" y2="33"/><line x1="392" y1="33" x2="422" y2="33"/>
          <line x1="156" y1="105" x2="310" y2="105"/><line x1="392" y1="105" x2="422" y2="105"/>
          <line x1="156" y1="177" x2="422" y2="177"/>
        </g>
        <defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--muted)"/></marker></defs>
      </svg>
      </div>
      <ul>
        <li><b>Four-stage (indirect)</b> — producer &rarr; wholesaler &rarr; retailer &rarr; consumer. Suits mass producers like <b>Coca-Cola</b>: wholesalers break bulk and supply thousands of small shops, but each layer takes a margin.</li>
        <li><b>Three-stage (indirect)</b> — producer &rarr; retailer &rarr; consumer. A big retailer like <b>Carrefour</b> buys in huge quantities, so it can skip the wholesaler and go straight to the producer, cutting cost.</li>
        <li><b>Two-stage (direct)</b> — producer &rarr; consumer. Firms like <b>ASOS</b> sell straight to the customer, keeping full control and margin but handling all logistics themselves.</li>
      </ul>`},
    {h:"E-tailing and changes in distribution", html:`
      <p>Distribution has shifted sharply towards <b>online retailing</b> and <b>direct-to-consumer (D2C)</b> selling:</p>
      <ul>
        <li><b>E-tailers</b> sell entirely online — e.g. <b>Amazon</b> (the largest), ASOS (fashion), eBay (marketplace), Etsy (handmade). No physical stores means lower overheads and a global reach, but heavy reliance on logistics and delivery.</li>
        <li><b>Direct-to-consumer</b> — producers cut out intermediaries, selling through their own website or app to keep more profit, own the customer relationship and collect data (e.g. Nike's app and NikePlus).</li>
      </ul>
      <p>These changes raise <b>customer convenience</b> (shop anytime, home delivery) and can cut costs, but increase competition and make reliable, fast logistics essential to satisfaction.</p>`}
  ],
  definitions:[
    {term:"Distribution channel", marks:2, body:`The route a product takes from producer to final consumer, linking production and consumption <span class="pt">1</span>; it may be direct or pass through intermediaries such as wholesalers and retailers <span class="pt">2</span>.`},
    {term:"Direct distribution", marks:2, body:`A two-stage channel where the producer sells straight to the consumer with no intermediaries <span class="pt">1</span>; the producer keeps the full margin and controls the customer experience but must handle all logistics itself <span class="pt">2</span>.`},
    {term:"Wholesaler", marks:2, body:`An intermediary that buys in bulk from producers and breaks it into smaller quantities for retailers <span class="pt">1</span>; this lets small shops stock goods they could not buy direct, but adds a margin to the price <span class="pt">2</span>.`},
    {term:"E-tailer", marks:2, body:`A retailer that sells goods entirely online through a website or app, such as Amazon or ASOS <span class="pt">1</span>; it avoids the overheads of physical stores and reaches customers globally but depends heavily on delivery logistics <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'distribution channel'.",
     model:`A distribution channel is the route a product takes from producer to final consumer <span class="pt">1</span>; it may go directly or pass through intermediaries such as wholesalers and retailers <span class="pt">2</span>.`,
     fb:"Route producer→consumer plus the direct/intermediary distinction — two developed points."},
    {marks:4, q:"Explain one advantage to a business of using direct (two-stage) distribution.",
     model:`Direct distribution lets the producer keep the full profit margin <span class="pt">1</span>. This is because there are no wholesalers or retailers taking a cut of the selling price <span class="pt">2</span>. As a result, a firm like ASOS earns more per sale <span class="pt">3</span>, which it can reinvest in logistics or lower prices to stay competitive <span class="pt">4</span>.`,
     fb:"Names the advantage (full margin), explains why, applies to a real e-tailer and chains to a benefit."},
    {marks:4, q:"Explain one reason a large retailer such as Carrefour can buy directly from producers.",
     model:`Carrefour buys in very large quantities <span class="pt">1</span>. This is because it runs hundreds of large stores and needs huge volumes of stock <span class="pt">2</span>. As a result, producers are willing to deal with it directly and skip the wholesaler <span class="pt">3</span>, cutting out a margin so Carrefour can offer lower prices than small corner shops <span class="pt">4</span>.`,
     fb:"Links bulk-buying power to cutting the wholesaler and a price advantage."}
  ],
  caseStudy:{
    business:"MAC, Nike & Ocado",
    intro:`<p>Businesses used in the distribution questions.</p>
      <ul>
        <li><b>MAC Cosmetics</b> — sells through its own branded stores, department stores (Macy's, Nordstrom), beauty retailers (Sephora, Ulta) and online — a <b>multi-channel</b> strategy.</li>
        <li><b>Nike</b> — moving to a <b>direct-to-consumer</b> model: fewer, larger retailers (JD Sports, Amazon) plus its own app and NikePlus, cutting over 60% of small retailers.</li>
        <li><b>Ocado</b> — an online-only grocer whose entire model depends on efficient home delivery (orders rose from 120,000/week in 2012 to 230,000 by 2016).</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Discuss the importance of using different distribution channels to MAC Cosmetics. (8)",
     model:`<p><span class="tag t-P">POINT</span>Using different distribution channels is likely to be very important to MAC because it helps the business reach a wider customer base and increase sales. <span class="tag t-A">APPLY</span>MAC has its own branded stores run by professional makeup artists, which give a high-end, personalised service that enhances its premium image, while also selling through department stores such as Macy's and Nordstrom and beauty retailers like Sephora and Ulta. <span class="tag t-C">CHAIN</span>This lets MAC reach customers who may never visit a standalone store, boosting availability and convenience — especially valuable during launches like the Selena and Aaliyah collections that sold out quickly — and selling online supports global, round-the-clock access in a competitive market.</p>
     <p><span class="tag t-J">HOWEVER</span>However, a wide range of channels has drawbacks. Selling through third-party retailers like Ulta or Sephora gives MAC less control over how its brand is presented, and they may not match the personalised service of MAC's own stores, which could dilute its premium image. <span class="tag t-C">CHAIN</span>There is also a risk of inconsistent service or stock shortages, and partners take a share of revenue and add logistics costs, reducing MAC's profit margins.</p>`,
     fb:"Mr. Akram's exemplar (MAC, 8). Two developed sides — wider reach vs loss of control/margin — applied throughout, no conclusion (right for an 8-mark 'Discuss')."},
    {marks:12, q:"Assess the importance of place to Ocado's marketing mix. (12)", caseImg:"resources/casestudies/cs-1-3-1-1-ocado.png",
     model:`<p><span class="tag t-P">POINT</span>Place refers to how a product is distributed and made available to customers, and for Ocado it is especially important because the business operates entirely online and delivers directly to homes. <span class="tag t-C">CHAIN</span>One reason place matters is that it provides convenience and flexibility: Ocado takes orders through its website or app and delivers from distribution centres using its own fleet, letting customers choose hourly slots and track deliveries. <span class="tag t-A">APPLY</span>This meets the needs of busy customers and encourages repeat purchases — orders per week rose from 120,000 in 2012 to 230,000 by 2016 — showing how its place strategy supports strong demand and growth.</p>
     <p><span class="tag t-J">HOWEVER</span>However, other elements of the marketing mix also play a crucial role, such as product. <span class="tag t-A">APPLY</span>Ocado offers over 46,000 products — fresh, frozen and non-food — giving customers more choice so they can do all their shopping in one place. <span class="tag t-C">CHAIN</span>Even with excellent delivery, customers would not use Ocado if the product range did not meet their needs, so success depends on more than place alone.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, place is a vital part of Ocado's marketing mix because it underpins the online delivery model that defines the business. However, its effectiveness relies on being combined with a wide product range and competitive pricing, so while place is central, long-term success depends on how well all elements of the mix work together to meet customer needs.</p>`,
     fb:"Mr. Akram's exemplar (Ocado, 12). Place as central (convenience, growth data) balanced against product, with a 'depends on the whole mix' judgement."},
    {marks:20, q:"Nike is reducing its retail partners by over 60% to focus on fewer, larger retailers and direct-to-consumer sales. Evaluate whether this new distribution strategy is likely to contribute to Nike's future success. (20)", caseImg:"resources/casestudies/cs-1-3-3-5-nike.png",
     model:`<p><span class="tag t-P">POINT</span>Nike's new distribution strategy is likely to contribute significantly to its future success because it allows greater control over the customer experience. <span class="tag t-C">CHAIN</span>By selling through fewer, larger retailers such as JD Sports and Amazon that offer a premium service — including Nike staff giving product advice — Nike can ensure its quality standards are met wherever customers buy. <span class="tag t-A">APPLY</span>This gives a more consistent, high-quality experience, so customer satisfaction and brand loyalty could rise, lifting repeat purchases, revenue and brand image globally.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is the focus on digital innovation and direct-to-consumer sales. <span class="tag t-A">APPLY</span>Nike is investing in its own app and the NikePlus loyalty programme, letting it collect customer data and understand shopping habits. <span class="tag t-C">CHAIN</span>It can therefore tailor promotions and launches more effectively while cutting out intermediaries and keeping more profit — strengthening relationships and margins, which funds further innovation and a more efficient model.</p>
     <p><span class="tag t-J">HOWEVER</span>However, removing over 60% of small retailers — currently the majority of Nike's North American sales — could damage short-term revenue. <span class="tag t-C">CHAIN</span>Loyal customers who buy from local shops may lose easy access, so Nike could lose them to Adidas or Puma if availability falls, and sales might drop in some regions before the new model pays off.</p>
     <p><span class="tag t-J">HOWEVER</span>A further risk is that the strategy relies on a small number of major partners delivering high service. If even one large retailer underperforms it could damage Nike's brand, and depending on fewer channels increases exposure — if Amazon or JD Sports face disruption, Nike's reach is restricted and it loses control of part of the customer journey.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, Nike's strategy has strong potential to drive success through loyalty, a better online experience and higher margins from D2C selling. Focusing on quality service through larger, trusted retailers gives more control and brand consistency. However, success depends on execution — managing the transition from smaller retailers and ensuring partners uphold Nike's standards. Compared with Adidas, which keeps a broader retail presence, Nike's focused strategy may deliver higher margins but risks losing accessibility — a trade-off it must monitor carefully. It is most likely to succeed if combined with strong logistics, ongoing innovation and marketing that encourages customers to embrace the new model.</p>`,
     fb:"Mr. Akram's exemplar (Nike, 20 — top band). Two developed benefits and two risks, all applied, with a judged conclusion plus the comparative Adidas point examiners wanted for full marks."}
  ],
  resources:[
    {label:"Place &amp; distribution channels — lesson notes (PDF)", file:"resources/1-3-3-5-distribution-notes.pdf"}
  ]
},
{
  code:"1.3.4.1", subtheme:"1.3.4", title:"Approaches to staffing",
  business:"Case studies: Sports Direct, Nestlé & Deutsche Bank", status:"live",
  notes:[
    {h:"Staff as an asset vs staff as a cost", html:`
      <p>Businesses take one of two opposing approaches to human resource management (HRM):</p>
      <ul>
        <li><b>Soft HRM — staff as an asset.</b> Workers are seen as a valuable resource that can contribute to and help achieve the firm's objectives, so the firm invests in training, good pay, promotion and involvement.</li>
        <li><b>Hard HRM — staff as a cost.</b> Workers are a resource to be managed tightly to control costs and output, with pay kept low and little job security.</li>
      </ul>
      <p>Professor <b>Charles Handy</b> argued firms would split staff into a <b>core</b> (well looked after — salaries, pensions, prospects) and a <b>peripheral</b> group (casual labour, few rights, little security). <b>Sports Direct</b> does exactly this: ~2,000 core staff get share options, while ~25,000 are on zero-hour contracts, many employed through outsourcing firms to minimise the company's legal obligations.</p>`},
    {h:"The flexible workforce & contracts", html:`
      <p>Firms build a <b>flexible workforce</b> to match staffing to demand:</p>
      <ul>
        <li><b>Zero-hour contracts</b> — staff are hired with <b>no guaranteed hours</b> and paid only when needed. They give the firm flexibility and low fixed costs (useful in tourism and hospitality), but leave workers with uncertain income — hard to get a mortgage or credit. Around 2.3% of UK workers were on them by 2014.</li>
        <li><b>Part-time, temporary and outsourced</b> labour — cut fixed wage costs and legal obligations.</li>
      </ul>
      <p><b>Dismissal vs redundancy:</b> <b>dismissal</b> is ending employment because of the worker's conduct or performance; <b>redundancy</b> is ending a role because the job itself is no longer needed. <span style="color:var(--muted)"><i>UAE note:</i> end-of-service gratuity and notice rules differ from UK statutory redundancy pay — a useful comparison for students.</span></p>`},
    {h:"Flexible working practices", html:`
      <p><b>Flexible working practices</b> are employment options that vary the <b>time, location or pattern</b> of work to balance employee needs with the firm's demand:</p>
      <ul>
        <li><b>Part-time &amp; full-time</b> — part-time gives guaranteed but fewer hours; useful for covering peaks.</li>
        <li><b>Temporary / fixed-term contracts</b> — cover short-term needs (e.g. a restaurant hiring a chef for a season).</li>
        <li><b>Flexible hours (flexitime)</b> — staff choose start/finish times (e.g. <b>Google</b> lets staff set hours around core meetings to boost well-being and innovation).</li>
        <li><b>Home / remote working</b> — cuts office costs and commuting, but can weaken collaboration — <b>Yahoo!</b>'s CEO banned it, arguing "speed and quality are often sacrificed when we work from home".</li>
        <li><b>Multi-skilling</b> — training staff in several roles so managers can move them where needed (e.g. <b>Carrefour</b> trains cashiers to help in the bakery or on the shop floor at busy times).</li>
        <li><b>Outsourcing</b> — contracting work to other firms (e.g. <b>Nike</b> makes most products in factories in Vietnam, Indonesia and China).</li>
      </ul>
      <p>Flexibility cuts fixed labour costs and helps match staffing to demand, but can reduce loyalty, commitment and control over quality if overused.</p>`},
    {h:"Employer/employee relationships", html:`
      <p>Good relationships matter: motivated, fairly-treated staff are more productive and less likely to strike. Pay and conditions can be set two ways:</p>
      <ul>
        <li><b>Individual bargaining</b> — each employee negotiates their own pay and terms directly with the employer.</li>
        <li><b>Collective bargaining</b> — a <b>trade union</b> negotiates pay and conditions on behalf of all its members at once. It gives workers more power, but can raise wage costs and set precedents.</li>
      </ul>
      <p>If talks fail, unions can use <b>industrial action</b> — strikes, overtime bans or work-to-rule — to pressure the employer. <span style="color:var(--muted)"><i>UAE note:</i> trade unions and strikes are not permitted in the UAE, so collective bargaining is mainly a UK/European feature — a strong point of contrast.</span></p>`}
  ],
  definitions:[
    {term:"Soft HRM", marks:2, body:`An approach that treats staff as a valuable asset who can help achieve the firm's objectives <span class="pt">1</span>; the firm invests in training, pay and involvement to raise motivation and productivity <span class="pt">2</span>.`},
    {term:"Hard HRM", marks:2, body:`An approach that treats staff as a cost to be controlled like any other resource <span class="pt">1</span>; pay is kept low and job security limited to minimise labour costs <span class="pt">2</span>.`},
    {term:"Zero-hour contract", marks:2, body:`A contract that hires a worker with no guarantee of hours, paying them only when needed <span class="pt">1</span>; it gives the employer flexibility and low fixed costs but leaves the worker with uncertain income <span class="pt">2</span>.`},
    {term:"Flexible working", marks:2, body:`Employment arrangements that vary the time, location or pattern of work, such as part-time, flexitime or home working <span class="pt">1</span>; they help a firm match staffing to demand and support work-life balance <span class="pt">2</span>.`},
    {term:"Outsourcing", marks:2, body:`Contracting work out to another business rather than doing it in-house <span class="pt">1</span>; it can cut costs and add flexibility but reduces the firm's control over quality <span class="pt">2</span>.`},
    {term:"Redundancy", marks:2, body:`Ending a worker's employment because their role is no longer needed, not because of their conduct <span class="pt">1</span>; affected staff are usually entitled to a redundancy payment <span class="pt">2</span>.`},
    {term:"Collective bargaining", marks:2, body:`Negotiation of pay and conditions by a trade union on behalf of all its members at once <span class="pt">1</span>; it gives workers greater bargaining power than negotiating individually <span class="pt">2</span>.`},
    {term:"Trade union", marks:2, body:`An organisation that represents workers and negotiates with employers on their behalf <span class="pt">1</span>; it aims to protect members' pay, conditions and job security <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'collective bargaining'.",
     model:`Collective bargaining is negotiation of pay and conditions by a trade union on behalf of all its members at once <span class="pt">1</span>; it gives workers more power than bargaining individually <span class="pt">2</span>.`,
     fb:"Union-negotiates-for-all plus the greater-power point — two developed points."},
    {marks:2, q:"Define the term 'redundancy'.",
     model:`Redundancy is ending a worker's employment because their role is no longer needed rather than for misconduct <span class="pt">1</span>; affected staff are normally entitled to a redundancy payment <span class="pt">2</span>.`,
     fb:"Role-no-longer-needed (distinct from dismissal) plus the payment entitlement."},
    {marks:2, q:"Define the term 'flexible working'.",
     model:`Flexible working means employment arrangements that vary the time, location or pattern of work, such as part-time, flexitime or home working <span class="pt">1</span>; it helps a firm match staffing to demand while supporting work-life balance <span class="pt">2</span>.`,
     fb:"Varying time/location/pattern plus the demand-matching and balance point."},
    {marks:4, q:"Explain one benefit to a business of treating its staff as an asset.",
     model:`Treating staff as an asset means investing in them through training and good pay <span class="pt">1</span>. This is because valued employees feel more motivated and loyal <span class="pt">2</span>. As a result, labour turnover falls <span class="pt">3</span>, cutting recruitment and training costs and helping maintain consistent service quality <span class="pt">4</span>.`,
     fb:"Names the approach, links to motivation/loyalty and chains to lower turnover and cost."}
  ],
  caseStudy:{
    business:"Sports Direct, Nestlé & Deutsche Bank",
    intro:`<p>Businesses used in the staffing questions.</p>
      <ul>
        <li><b>Sports Direct</b> — ~2,000 core staff on share options, ~25,000 on zero-hour contracts (many outsourced) — a clear core/peripheral split.</li>
        <li><b>Nestlé (KitKat factory)</b> — used <b>collective bargaining</b> after 94% of workers rejected earlier pay offers, agreeing a 3.25% rise plus a 1% safety-linked bonus.</li>
        <li><b>Deutsche Bank</b> — used collective bargaining with unions during 2019 restructuring that made 18,000 employees redundant.</li>
        <li><b>M&amp;S</b> — uses flexible working (part-time, job-share, career breaks) to support wellbeing and widen its talent pool.</li>
        <li><b>PwC</b> — its <b>Flexible Talent Network</b> lets people apply by skills and preferred hours; 2,000+ registered in the first two weeks, with benefits for those working 20+ hours.</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Discuss whether Sports Direct treats staff as an asset or as a cost. (8)", caseImg:"resources/casestudies/cs-1-3-4-1-sports-direct-asset-cost.png",
     model:`<p><span class="tag t-P">POINT</span>Sports Direct appears to treat a small part of its workforce as an asset. <span class="tag t-A">APPLY</span>It gives generous share options to around 2,000 core employees, making them feel valued and involved in the firm's long-term success. <span class="tag t-C">CHAIN</span>These staff are therefore more likely to work efficiently, stay loyal and take pride in their role, so Sports Direct benefits from higher productivity and lower labour turnover among core staff — reducing recruitment and training costs and maintaining service standards.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the remaining ~25,000 staff are treated as a cost: they are on zero-hour contracts and paid only when needed, with many outsourced to cut legal obligations. <span class="tag t-C">CHAIN</span>This gives no guaranteed income, so workers struggle to plan or access credit and may feel undervalued and insecure, harming motivation. As a result customer service may suffer and, if media or consumer pressure builds, the brand's reputation could be damaged.</p>`,
     fb:"Mr. Akram's exemplar (Sports Direct, 8). Asset (core, share options) vs cost (peripheral, zero-hours) — applied throughout, no conclusion needed for 8 marks."},
    {marks:8, q:"Analyse two possible benefits for Deutsche Bank of using collective bargaining to negotiate redundancy payments with its employees. (8)", caseImg:"resources/casestudies/cs-1-3-4-1-deutsche-bank.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is a reduction in legal disputes and unfair-dismissal claims. <span class="tag t-C">CHAIN</span>Because agreement is reached with union representatives, employees are more likely to see the process as transparent and fair, lowering the chance of costly legal action and bad publicity. <span class="tag t-A">APPLY</span>Deutsche Bank can therefore focus on restructuring efficiently without the distraction of legal challenges, protecting its long-term financial position.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is protecting the bank's reputation and stakeholder trust. <span class="tag t-A">APPLY</span>When 18,000 employees were made redundant in 2019, using collective bargaining showed the bank acting responsibly. <span class="tag t-C">CHAIN</span>This improves public perception and keeps remaining staff motivated as they see colleagues treated fairly, so the bank finds it easier to retain and attract skilled employees and support future performance.</p>`,
     fb:"Mr. Akram's exemplar (Deutsche Bank, 8). Two benefits, each with a developed chain and strong context (18,000 redundancies, 2019 restructuring)."},
    {marks:10, q:"Assess the impact of Nestlé using collective bargaining at its KitKat factory. (10)",
     model:`<p><span class="tag t-P">POINT</span>One impact is improved employee relations and motivation. <span class="tag t-C">CHAIN</span>By recognising the union and negotiating pay rather than imposing it, Nestlé makes workers feel heard and valued, raising trust and reducing conflict — so morale and productivity rise. <span class="tag t-A">APPLY</span>Nestlé could therefore enjoy a more stable workforce with reduced risk of industrial action and stronger long-term loyalty.</p>
     <p><span class="tag t-P">POINT</span>A second impact is avoiding strike action that would damage production and reputation. <span class="tag t-A">APPLY</span>Nestlé offered a 3.25% pay rise and a 1% safety-linked bonus after 94% of workers rejected earlier offers; without negotiation there could have been major disruption. <span class="tag t-C">CHAIN</span>So although short-term costs rose, Nestlé avoided delays to KitKat production and negative media attention, protecting customer satisfaction and revenue from one of its top products.</p>
     <p><span class="tag t-J">HOWEVER</span>However, agreeing to union demands raises labour costs and creates expectations — the rise and bonus increase the wage bill, and other sites may expect the same, making future negotiations more complex and expensive. <span class="tag t-J">CONCLUSION</span>Overall, collective bargaining likely helped Nestlé avoid strikes and improve satisfaction, protecting output and relations; but rising costs and the risk of setting a precedent could limit financial flexibility. The overall impact depends on whether the improved motivation delivers higher productivity and fewer disputes in future.</p>`,
     fb:"Mr. Akram's exemplar (Nestlé KitKat, 10 — top band). Two applied positive impacts, a costed drawback and a conditional judgement."},
    {marks:10, q:"Assess the benefits of using flexible working practices at M&S. (10)", caseImg:"resources/casestudies/cs-1-3-4-1-flexible-working-ms.png",
     model:`<p><span class="tag t-P">POINT</span>One major benefit of flexible working at M&amp;S is improved employee motivation and wellbeing. <span class="tag t-C">CHAIN</span>Letting staff balance personal and work responsibilities — through part-time roles, job-sharing or career breaks — reduces stress and raises job satisfaction. <span class="tag t-A">APPLY</span>This builds a loyal workforce and can lift productivity and customer service, which is essential in retail.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is stronger recruitment and retention. <span class="tag t-A">APPLY</span>M&amp;S can attract a broader range of applicants — working parents, carers and students — supporting a more diverse workforce and cutting turnover, saving on hiring and training and keeping experienced staff for consistent service.</p>
     <p><span class="tag t-J">HOWEVER</span>However, flexible contracts make scheduling and communication harder: managers may struggle to cover busy periods if many staff want time off together, and job-shares can cause handover gaps that hurt efficiency. <span class="tag t-J">CONCLUSION</span>Overall, flexible working offers M&amp;S real long-term gains in morale, talent and loyalty — especially valuable in high-turnover retail — but only if it invests in effective scheduling and communication; otherwise the flexibility could create more problems than it solves.</p>`,
     fb:"Mr. Akram's exemplar (M&S, 10). Two applied benefits (wellbeing, recruitment/retention) balanced by scheduling drawbacks, with a conditional judgement."},
    {marks:10, q:"Assess the likely impact on PwC of introducing its Flexible Talent Network. (10)", caseImg:"resources/casestudies/cs-1-3-4-1-pwc.png",
     model:`<p><span class="tag t-P">POINT</span>One key benefit is attracting a more diverse, skilled workforce. <span class="tag t-C">CHAIN</span>Candidates apply on their skills and preferred schedules rather than fixed roles, encouraging talented people who can't work full-time — parents, semi-retirees — to join. <span class="tag t-A">APPLY</span>Over 2,000 registered in the first two weeks, widening PwC's talent pool and sharpening its competitive edge in professional services.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is better retention and motivation. <span class="tag t-A">APPLY</span>Flexible hours cut stress and boost satisfaction, and staff working 20+ hours still qualify for benefits like pensions, making part-time roles attractive. <span class="tag t-C">CHAIN</span>In a high-pressure consultancy this reduces burnout and absenteeism and lifts productivity.</p>
     <p><span class="tag t-J">HOWEVER</span>However, flexible working at scale creates operational complexity: in a project-based consultancy, varied schedules make resource planning harder, risking skill gaps, delays, higher admin and weaker team cohesion if staff rarely overlap. <span class="tag t-J">CONCLUSION</span>Overall, the Flexible Talent Network could significantly strengthen PwC's ability to attract and retain talent and, long term, bring cost savings and a better brand image — but success depends on how well PwC manages project staffing and service quality; with clear communication and workload planning the strategic gains should outweigh the operational drawbacks.</p>`,
     fb:"Mr. Akram's exemplar (PwC, 10 — top band). Two benefits with figures (2,000 applicants, 20+ hrs) and a developed operational drawback, closing with conditional judgement."},
    {marks:20, q:"Sports Direct uses both zero-hour and part-time contracts. Evaluate the use of these flexible contracts for a retailer such as Sports Direct. (20)", caseImg:"resources/casestudies/cs-1-3-4-1-sports-direct-contracts.png",
     model:`<p><span class="tag t-P">POINT</span>Zero-hour contracts give Sports Direct the highest flexibility. <span class="tag t-C">CHAIN</span>With no guaranteed hours it can raise or cut labour to match footfall, which varies day to day in retail, running quiet periods with minimal staffing. <span class="tag t-A">APPLY</span>This reduces labour costs — essential for a low-margin model across 670 stores — and creates a pool of casual staff for extended opening hours.</p>
     <p><span class="tag t-J">HOWEVER</span>However, over-reliance on zero-hours can cause low morale and high turnover. <span class="tag t-C">CHAIN</span>Inconsistent hours and insecurity make it hard for staff to plan finances, harming motivation and customer service and inviting negative media or union pressure — as Sports Direct has faced — while constant recruitment and training add hidden costs.</p>
     <p><span class="tag t-P">POINT</span>Part-time contracts offer a middle ground. <span class="tag t-A">APPLY</span>Guaranteed hours improve retention and motivation, and experienced part-timers who know the store and stock can be scheduled for weekends and holidays, supporting stability and team culture. <span class="tag t-J">HOWEVER</span>However, they are less flexible — Sports Direct may pay wages in quiet periods and struggle to fill sudden gaps, and part-timers may still expect progression and benefits, raising costs.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, zero-hour contracts are likely more effective for Sports Direct in the short term, fitting its low-margin, fast-response model. But to limit the downsides it should manage them carefully with fair scheduling, clear communication and basic development. In the long term a <b>hybrid</b> approach is best — zero-hours for seasonal peaks and part-time for core roles needing consistency — meeting operational needs while protecting its brand image.</p>`,
     fb:"Mr. Akram's exemplar (Sports Direct, 20 — top band 19/20). Zero-hour vs part-time each developed with benefit and drawback, context (670 stores, low margins), and a hybrid judgement."}
  ],
  resources:[
    {label:"Approaches to staffing — lesson notes (PDF)", file:"resources/1-3-4-1-staffing-notes.pdf"},
    {label:"Flexible working practices — lesson notes (PDF)", file:"resources/1-3-4-1-flexible-working-notes.pdf"},
    {label:"Employer/employee relationships — lesson notes (PDF)", file:"resources/1-3-4-1-employer-employee-notes.pdf"}
  ]
},
{
  code:"1.3.4.2", subtheme:"1.3.4", title:"Recruitment, selection & training",
  business:"Case studies: PureNet, Tesla & Disney",
  status:"live",
  notes:[
    {h:"The recruitment & selection process", html:`
      <p><b>Recruitment</b> is the process of finding and hiring the right people for a job. It usually follows these stages:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 540 92" style="min-width:500px;width:100%;max-width:620px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <g font-size="8.5" font-weight="700" text-anchor="middle" fill="var(--ink)">
          <rect x="4" y="30" width="86" height="30" rx="6" fill="rgba(15,42,74,.08)" stroke="var(--navy)"/><text x="47" y="42">Identify</text><text x="47" y="53">vacancy</text>
          <rect x="112" y="30" width="86" height="30" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)"/><text x="155" y="42">Job description</text><text x="155" y="53">&amp; person spec</text>
          <rect x="220" y="30" width="86" height="30" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)"/><text x="263" y="48">Advertise</text>
          <rect x="328" y="30" width="86" height="30" rx="6" fill="rgba(245,166,35,.12)" stroke="var(--amber)"/><text x="371" y="48">Shortlist</text>
          <rect x="436" y="30" width="100" height="30" rx="6" fill="rgba(15,157,88,.12)" stroke="var(--emerald)"/><text x="486" y="42">Interview</text><text x="486" y="53">&amp; select</text>
        </g>
        <g stroke="var(--muted)" stroke-width="1.4" marker-end="url(#ra)">
          <line x1="90" y1="45" x2="110" y2="45"/><line x1="198" y1="45" x2="218" y2="45"/><line x1="306" y1="45" x2="326" y2="45"/><line x1="414" y1="45" x2="434" y2="45"/>
        </g>
        <defs><marker id="ra" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="var(--muted)"/></marker></defs>
      </svg>
      </div>
      <p>The <b>job description</b> lists the duties of the role; the <b>person specification</b> lists the skills and qualities the ideal candidate needs. A business then recruits <b>internally</b> or <b>externally</b>:</p>
      <ul>
        <li><b>Internal recruitment</b> — filling a vacancy from existing staff. Cheaper, faster, motivating (promotion), and the candidate is known — but limits new ideas and creates another vacancy to fill.</li>
        <li><b>External recruitment</b> — hiring from outside. Brings a larger pool, fresh ideas and new skills — but is more expensive, slower and the candidate's real track record is harder to know.</li>
      </ul>
      <p>Recruitment, selection and training all cost money (advertising, agencies, management time, induction), so getting the choice right matters — a poor hire is expensive to replace.</p>`},
    {h:"Training", html:`
      <p><b>Training</b> develops employees' skills. The three main types are:</p>
      <ul>
        <li><b>Induction training</b> — given to new staff to introduce the business, its people, procedures and health &amp; safety, so they settle in quickly.</li>
        <li><b>On-the-job training</b> — learning while doing the real role, usually from experienced colleagues (e.g. hotel and theme-park service roles). Cheap and practical, but can pass on bad habits and distract the trainer.</li>
        <li><b>Off-the-job training</b> — learning away from the workplace, e.g. a college course or external specialist. Better for complex or specialist skills, but costs more and the worker is away from the job.</li>
      </ul>
      <p>Training raises productivity, quality, motivation and retention, but it is a <b>cost</b>: replacing and retraining staff can run to thousands per worker, so firms weigh training spend against the benefit of a more skilled, loyal workforce.</p>`}
  ],
  definitions:[
    {term:"Recruitment", marks:2, body:`The process of finding and hiring the right people to fill a job vacancy <span class="pt">1</span>; it involves defining the role, attracting applicants and selecting the best candidate <span class="pt">2</span>.`},
    {term:"Internal recruitment", marks:2, body:`Filling a vacancy with someone already employed by the business <span class="pt">1</span>; it is cheaper and quicker and the candidate is known, but limits the inflow of new ideas <span class="pt">2</span>.`},
    {term:"External recruitment", marks:2, body:`Filling a vacancy with a candidate from outside the business <span class="pt">1</span>; it brings a wider pool and fresh skills but is more expensive and the candidate's track record is less certain <span class="pt">2</span>.`},
    {term:"Induction training", marks:2, body:`Training given to new employees to introduce the business, its procedures and people <span class="pt">1</span>; it helps new staff settle in and become productive more quickly <span class="pt">2</span>.`},
    {term:"On-the-job training", marks:2, body:`Training carried out in the workplace while doing the actual job, often from experienced colleagues <span class="pt">1</span>; it is cheap and practical but can pass on bad habits <span class="pt">2</span>.`},
    {term:"Off-the-job training", marks:2, body:`Training away from the workplace, such as a college course or external specialist <span class="pt">1</span>; it suits complex or specialist skills but costs more and takes the worker off the job <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'internal recruitment'.",
     model:`Internal recruitment is filling a vacancy with someone already employed by the business <span class="pt">1</span>; it is cheaper and quicker and the candidate is known, but limits the inflow of new ideas <span class="pt">2</span>.`,
     fb:"Hiring from within plus the cheaper/known vs fewer-new-ideas trade-off — two developed points."},
    {marks:2, q:"Define the term 'induction training'.",
     model:`Induction training is training given to new employees to introduce the business, its procedures and people <span class="pt">1</span>; it helps them settle in and become productive more quickly <span class="pt">2</span>.`,
     fb:"For new starters introducing the business, plus the settle-in benefit."},
    {marks:4, q:"Explain one benefit to a business of using internal recruitment.",
     model:`Internal recruitment is cheaper and faster than hiring externally <span class="pt">1</span>. This is because there is no need to pay for advertising or agencies and the candidate is already known <span class="pt">2</span>. As a result, the vacancy is filled quickly with less risk <span class="pt">3</span>, and the chance of promotion can motivate existing staff <span class="pt">4</span>.`,
     fb:"Names the benefit (cheaper/faster), explains why and chains to speed plus the motivation effect."}
  ],
  caseStudy:{
    business:"PureNet, Tesla & Disney",
    intro:`<p>Businesses used in the recruitment and training questions.</p>
      <ul>
        <li><b>PureNet</b> — a 43-person York e-commerce specialist with ambitious expansion plans, weighing <b>external recruitment</b> to bring in skills quickly.</li>
        <li><b>Tesla</b> — a fast-growing, innovative car and energy firm recruiting globally (e.g. a charging-specialist role in Tokyo), using both internal and external recruitment.</li>
        <li><b>Walt Disney</b> — relies heavily on <b>on-the-job training</b> for service roles across its global hotels and theme parks.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the likely impact on a business such as PureNet of using an external recruitment process when employing new staff. (10)", caseImg:"resources/casestudies/cs-1-3-4-2-purenet.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit of external recruitment is that it introduces new skills and fresh perspectives. <span class="tag t-C">CHAIN</span>New employees may have experience with advanced tools or have worked for successful competitors, bringing those insights to PureNet and generating more innovative ideas and better service — important in the fast-moving digital sector. <span class="tag t-A">APPLY</span>PureNet could therefore keep a strong competitive edge while expanding, offering better support to both its B2B and B2C clients. It may also lower training costs, as external candidates may already have the web-development skills needed.</p>
     <p><span class="tag t-J">HOWEVER</span>However, external recruitment may be more costly than promoting from within. <span class="tag t-C">CHAIN</span>PureNet must pay for advertising, agencies and application reviews, which take time and money — a real pressure for a small firm of only 43 employees. This could reduce the money available for other areas such as marketing its website-design service or innovation, limiting sustainable growth.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, external recruitment is likely to help PureNet in the short term by quickly closing skills gaps and bringing in talent. Success depends on how well it manages the process and balances new and existing staff — so it is recommended PureNet combines external recruitment with internal staff development to keep motivation and loyalty while still bringing in the fresh talent it needs to grow.</p>`,
     fb:"Mr. Akram's exemplar (PureNet, 10). External-recruitment benefit (skills/innovation) vs cost drawback, applied to a 43-person e-commerce firm, with a blended recommendation."},
    {marks:8, q:"Discuss the reasons why a business such as Tesla may use internal recruitment. (8)", caseImg:"resources/casestudies/cs-1-3-4-2-tesla.png",
     model:`<p><span class="tag t-P">POINT</span>One reason Tesla may recruit internally is that existing staff already understand its fast-paced, innovative culture. <span class="tag t-C">CHAIN</span>Promoting someone who knows Tesla's values and ways of working means less induction and a lower risk of a poor cultural fit, so they become productive quickly. <span class="tag t-A">APPLY</span>For a demanding, mission-driven firm like Tesla, this helps maintain momentum on complex projects such as its charging programme.</p>
     <p><span class="tag t-J">HOWEVER</span>However, internal recruitment has limits. <span class="tag t-C">CHAIN</span>It restricts the inflow of new ideas and skills, which a cutting-edge engineering firm relies on, and filling one post from within simply creates another vacancy. <span class="tag t-A">APPLY</span>For highly specialist roles — like the electrical-engineering expertise in the Tokyo charging role — Tesla may have no suitable internal candidate and must recruit externally. Overall, internal recruitment suits Tesla for roles where cultural fit and speed matter most, but it will still need external hiring for specialist and fast-growth needs.</p>`,
     fb:"Model answer (Tesla, 8). Two reasons for internal recruitment (culture fit, speed/cost) balanced against its limits for specialist roles, applied to Tesla."},
    {marks:10, q:"Discuss the use of on-the-job training for a business such as Walt Disney. (10)", caseImg:"resources/casestudies/cs-1-3-4-2-walt-disney-training.png",
     model:`<p><span class="tag t-P">POINT</span>One advantage of on-the-job training at Disney is that staff develop skills while doing their actual role. <span class="tag t-C">CHAIN</span>They are trained in the real environment by experienced colleagues, using real equipment and interacting with guests, so staff in housekeeping, hotels and food &amp; beverage gain practical customer-service experience without classroom sessions. <span class="tag t-A">APPLY</span>This trains people quickly and cheaply while keeping service running — and it is cheaper than external courses, letting Disney train staff globally in Paris or Shanghai without excessive cost.</p>
     <p><span class="tag t-J">HOWEVER</span>However, on-the-job training can be unreliable if trainers lack proper training themselves, passing on bad habits and causing inconsistent performance in roles needing high standards — which could dent guest satisfaction and the brand. <span class="tag t-C">CHAIN</span>Off-the-job training may be better for specialist skills in engineering, marketing or finance, where classroom or online learning gives deeper theory without workplace distractions.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, on-the-job training works well in Disney's practical, service-focused departments, offering cost-effective training and consistent service — but success depends on the quality of trainers. For technical or academic skills a blend is better, so it is recommended Disney adopts a <b>blended approach</b> combining on- and off-the-job training across its diverse global workforce.</p>`,
     fb:"Mr. Akram's exemplar (Disney, 10). On-the-job strengths (practical, cheap, global) vs reliability limits, with a blended-approach judgement."}
  ],
  resources:[
    {label:"Recruitment &amp; selection — lesson notes (PDF)", file:"resources/1-3-4-2-recruitment-notes.pdf"},
    {label:"Training — lesson notes (PDF)", file:"resources/1-3-4-2-training-notes.pdf"}
  ]
},
{
  code:"1.3.4.3", subtheme:"1.3.4", title:"Organisational design",
  business:"Case studies: Waterstones, Morley's, Nintendo & Tata",
  status:"live",
  notes:[
    {h:"Organisational structures: tall vs flat", html:`
      <p>An <b>organisational structure</b> is the way roles, responsibilities and authority are arranged in a business. Key terms:</p>
      <ul>
        <li><b>Hierarchy</b> — the layers of management from top to bottom.</li>
        <li><b>Chain of command</b> — the line of authority down which instructions pass.</li>
        <li><b>Span of control</b> — the number of subordinates a manager is directly responsible for.</li>
      </ul>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 520 210" style="min-width:460px;width:100%;max-width:600px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <g stroke="var(--muted)" stroke-width="1.3">
          <line x1="110" y1="38" x2="75" y2="70"/><line x1="110" y1="38" x2="145" y2="70"/>
          <line x1="75" y1="88" x2="55" y2="120"/><line x1="75" y1="88" x2="95" y2="120"/>
          <line x1="145" y1="88" x2="125" y2="120"/><line x1="145" y1="88" x2="165" y2="120"/>
          <line x1="400" y1="38" x2="320" y2="70"/><line x1="400" y1="38" x2="360" y2="70"/><line x1="400" y1="38" x2="400" y2="70"/><line x1="400" y1="38" x2="440" y2="70"/><line x1="400" y1="38" x2="480" y2="70"/>
        </g>
        <g fill="rgba(15,42,74,.10)" stroke="var(--navy)" stroke-width="1.3">
          <rect x="92" y="20" width="36" height="18" rx="3"/>
          <rect x="57" y="70" width="36" height="18" rx="3"/><rect x="127" y="70" width="36" height="18" rx="3"/>
          <rect x="39" y="120" width="32" height="16" rx="3"/><rect x="79" y="120" width="32" height="16" rx="3"/><rect x="109" y="120" width="32" height="16" rx="3"/><rect x="149" y="120" width="32" height="16" rx="3"/>
        </g>
        <g fill="rgba(245,166,35,.16)" stroke="var(--amber)" stroke-width="1.3">
          <rect x="382" y="20" width="36" height="18" rx="3"/>
          <rect x="302" y="70" width="36" height="16" rx="3"/><rect x="342" y="70" width="36" height="16" rx="3"/><rect x="382" y="70" width="36" height="16" rx="3"/><rect x="422" y="70" width="36" height="16" rx="3"/><rect x="462" y="70" width="36" height="16" rx="3"/>
        </g>
        <text x="110" y="162" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Tall structure</text>
        <text x="110" y="177" text-anchor="middle" font-size="8.5" fill="var(--muted)">many layers · narrow span · long chain</text>
        <text x="400" y="110" text-anchor="middle" font-size="11" font-weight="800" fill="var(--ink)">Flat structure</text>
        <text x="400" y="125" text-anchor="middle" font-size="8.5" fill="var(--muted)">few layers · wide span · short chain</text>
      </svg>
      </div>
      <ul>
        <li><b>Tall (hierarchical)</b> — many layers, narrow spans, a long chain of command. Clear promotion routes and close supervision, but slow communication and higher management costs.</li>
        <li><b>Flat</b> — few layers, wide spans, a short chain of command. Faster communication and lower costs, but managers stretched and fewer promotion rungs.</li>
      </ul>
      <p>Moving from tall to flat means <b>delayering</b> — removing a level of management (e.g. <b>Waitrose</b> removed its Head of Department layer to build a "whole shop" culture).</p>`},
    {h:"Centralisation vs decentralisation", html:`
      <p>This is about <b>where decisions are made</b>:</p>
      <ul>
        <li><b>Centralised</b> — head office or a few senior managers keep the major decisions. Gives tight control, consistency and economies of scale, but is slow and can demotivate local staff. <b>Fast-food chains like McDonald's</b> centralise to keep quality and the customer experience consistent across thousands of outlets.</li>
        <li><b>Decentralised</b> — decisions are spread to branches and lower-level managers. Faster, more locally responsive and motivating, but risks inconsistency and loss of brand identity. <b>Tesco</b>, hotel chains like <b>Hilton</b> and <b>Waterstones</b> decentralise so local managers tailor to their market.</li>
      </ul>
      <p>Many firms use a <b>hybrid</b> — centralising functions like accounting and purchasing to save cost, while decentralising decisions like recruitment or product range to local units.</p>`},
    {h:"Matrix structure", html:`
      <p>A <b>matrix structure</b> combines the usual functional departments with <b>project teams</b>. Staff work across teams as well as within their own function, so a new-product team might include engineers, designers, marketers and finance staff — each reporting to both a <b>functional manager</b> and a <b>project manager</b> (dual reporting).</p>
      <ul>
        <li><b>Advantages</b> — better cross-department collaboration, communication and innovation (e.g. <b>Google</b> uses it for AI and YouTube projects; useful for <b>Audi</b> or <b>Nintendo</b> product teams).</li>
        <li><b>Disadvantages</b> — dual reporting can cause confusion and conflicting priorities, slowing decisions and stressing staff if not managed well.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Organisational structure", marks:2, body:`The way roles, responsibilities and authority are arranged in a business <span class="pt">1</span>; it sets the chain of command and how decisions and communication flow <span class="pt">2</span>.`},
    {term:"Span of control", marks:2, body:`The number of subordinates a manager is directly responsible for <span class="pt">1</span>; a wide span means fewer managers and lower costs but less close supervision <span class="pt">2</span>.`},
    {term:"Chain of command", marks:2, body:`The line of authority along which instructions pass from the top of a business to the bottom <span class="pt">1</span>; a shorter chain speeds up communication and decisions <span class="pt">2</span>.`},
    {term:"Centralisation", marks:2, body:`When major decisions are kept by head office or a few senior managers <span class="pt">1</span>; it gives tight control and consistency but can be slow and demotivating for local staff <span class="pt">2</span>.`},
    {term:"Decentralisation", marks:2, body:`When decision-making is spread to branches and lower-level managers <span class="pt">1</span>; it speeds local responsiveness and motivation but risks inconsistency across the business <span class="pt">2</span>.`},
    {term:"Matrix structure", marks:2, body:`A structure combining functional departments with cross-department project teams, so staff report to both a function and a project manager <span class="pt">1</span>; it boosts collaboration but dual reporting can cause confusion <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'span of control'.",
     model:`Span of control is the number of subordinates a manager is directly responsible for <span class="pt">1</span>; a wider span means fewer managers and lower costs but less close supervision <span class="pt">2</span>.`,
     fb:"Number-of-subordinates plus the wide-span trade-off — two developed points."},
    {marks:2, q:"Define the term 'decentralisation'.",
     model:`Decentralisation is when decision-making is spread to branches and lower-level managers rather than kept at head office <span class="pt">1</span>; it speeds local responsiveness but risks inconsistency across the business <span class="pt">2</span>.`,
     fb:"Decisions-spread-to-local plus the responsiveness-vs-consistency trade-off."},
    {marks:4, q:"Explain one advantage to a business of a flat organisational structure.",
     model:`A flat structure speeds up communication <span class="pt">1</span>. This is because there are fewer layers for information to pass through between senior managers and staff <span class="pt">2</span>. As a result, the business can respond faster to problems <span class="pt">3</span>, and with fewer managers to pay it also lowers costs <span class="pt">4</span>.`,
     fb:"Names the advantage (faster communication), explains the fewer-layers mechanism and chains to speed and cost."}
  ],
  caseStudy:{
    business:"Waterstones, Morley's, Nintendo & Tata",
    intro:`<p>Businesses used in the organisational-design questions.</p>
      <ul>
        <li><b>Waterstones</b> — <b>decentralised</b> so local managers tailor each shop to its community (different books in Harrogate vs Kensington), scrapping uniforms to compete with online rivals.</li>
        <li><b>Morley's</b> — a South London chicken chain expanding nationally (Leeds, Newcastle, Brighton), weighing <b>centralised vs decentralised</b> to grow sales revenue.</li>
        <li><b>Nintendo</b> — uses a <b>matrix structure</b> to bring design and marketing together on products like the Switch.</li>
        <li><b>Tata Motors</b> — moving to a <b>flatter structure</b> under a turnaround plan to cut average costs and rebuild market share.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the suitability of using decentralisation for a firm such as Waterstones. (10)", caseImg:"resources/casestudies/cs-1-3-4-3-waterstones.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit of decentralisation for Waterstones is that local managers can make decisions reflecting their local market. <span class="tag t-C">CHAIN</span>Each store can stock books that appeal to the tastes of its community, so customers are more likely to find relevant titles, increasing sales. <span class="tag t-A">APPLY</span>Individual stores can therefore compete with online retailers by offering a personalised experience, raising customer satisfaction and loyalty locally.</p>
     <p><span class="tag t-J">HOWEVER</span>However, decentralisation may cause inconsistency between stores. <span class="tag t-C">CHAIN</span>Managers may interpret policies differently or offer varying service, so the brand image could become diluted or confusing for customers visiting several branches, and the firm may miss standardisation benefits like bulk buying and national promotions.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, decentralisation is highly suitable for Waterstones given its local customer base and need to compete with standardised online retailers. But to be effective it must keep some central control over training, branding and purchasing — success depends on balancing local flexibility with strategic oversight.</p>`,
     fb:"Mr. Akram's exemplar (Waterstones, 10). Benefit (local responsiveness) and drawback (inconsistency) applied, with a 'balance local and central' judgement."},
    {marks:10, q:"Assess the likely impact of a matrix organisational structure for a business such as Nintendo. (10)",
     model:`<p><span class="tag t-P">POINT</span>One benefit of a matrix structure for Nintendo is better collaboration between departments. <span class="tag t-C">CHAIN</span>Staff from areas like design and marketing work together on the same projects, strengthening communication and creativity. <span class="tag t-A">APPLY</span>Products like the Nintendo Switch can draw on combined expertise, so Nintendo reacts faster to market trends — improving innovation and competitiveness in global gaming.</p>
     <p><span class="tag t-J">HOWEVER</span>However, a matrix can reduce efficiency if poorly managed. <span class="tag t-C">CHAIN</span>Employees may report to both a department head and a project leader, so conflicting instructions cause confusion, stress and unclear responsibilities, delaying projects or lowering quality.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the matrix structure can significantly improve efficiency at Nintendo through innovation and teamwork, but success depends on how well communication and workloads are managed. It is recommended Nintendo clearly defines responsibilities and invests in coordination and leadership training so the structure delivers long-term benefits.</p>`,
     fb:"Mr. Akram's exemplar (Nintendo, 10). Collaboration benefit vs dual-reporting drawback, applied to the Switch, with a management-dependent judgement."},
    {marks:20, q:"Morley's is expanding across the UK to increase sales revenue and must choose between keeping its centralised structure or adopting a decentralised one. Evaluate these two options and recommend which would be better. (20)", caseImg:"resources/casestudies/cs-1-3-4-3-morleys.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit of a <b>decentralised</b> structure is meeting local customer needs across different cities. <span class="tag t-A">APPLY</span>Local managers gain autonomy over the menu and marketing, so stores in Brighton can differ from Leeds, improving local engagement. <span class="tag t-C">CHAIN</span>Customers may become more loyal and visit more often, lifting sales revenue as stores target their local market.</p>
     <p><span class="tag t-J">HOWEVER</span>However, decentralisation risks losing consistency across new branches. <span class="tag t-C">CHAIN</span>Different decisions on pricing, promotions and service create a fragmented brand, so customers in Newcastle may not get the London experience — making it harder to compete with KFC's nationwide consistency and risking lost growth.</p>
     <p><span class="tag t-P">POINT</span>By contrast, keeping a <b>centralised</b> structure lets Morley's retain full control of its brand. <span class="tag t-A">APPLY</span>Head office sets product range, pricing and marketing, ensuring consistency and a recognisable national brand customers trust. <span class="tag t-J">HOWEVER</span>However, centralised decisions can be slow and less responsive — head office may not understand regional tastes in Brighton or Leeds, missing chances to adapt and causing some stores to underperform.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, a decentralised structure is likely better for Morley's as it expands, because flexibility and local responsiveness drive footfall and loyalty in a competitive sector. I reject pure centralisation because it is too slow to adapt to new regions. Success depends on training local managers well and keeping enough brand control — so it is recommended Morley's decentralise, supported by strong central brand guidelines, to grow revenue without damaging the brand.</p>`,
     fb:"Mr. Akram's exemplar (Morley's, 20). Decentralised vs centralised each with benefit and drawback, applied to national expansion, with a justified recommendation and rejection."},
    {marks:20, q:"Tata Motors is moving to a flatter organisational structure as part of a turnaround plan. Evaluate whether this will improve efficiency and lower average costs. (20)", caseImg:"resources/casestudies/cs-1-3-4-3-tata.png",
     model:`<p><span class="tag t-P">POINT</span>One reason a flat structure may improve efficiency at Tata is faster decisions. <span class="tag t-C">CHAIN</span>Removing layers cuts the time for information to move between the CEO and the production line, so quality problems that had damaged Tata's reputation can be fixed quickly before cars leave the factory. <span class="tag t-A">APPLY</span>Fewer recalls and less reworking reduce waste, lowering average cost per vehicle.</p>
     <p><span class="tag t-P">POINT</span>Efficiency may also rise through higher motivation. <span class="tag t-A">APPLY</span>A flatter structure gives workers more responsibility, matching the CEO's turnaround plan to drive innovation. <span class="tag t-C">CHAIN</span>Staff feel trusted and contribute ideas, raising labour productivity so Tata spreads the cost of its large factories across more vehicles, lowering average costs and helping rebuild its fallen market share.</p>
     <p><span class="tag t-J">HOWEVER</span>However, efficiency could fall in the short term if delayering removes experienced managers, pushing responsibilities onto staff without support — slowing production and raising mistakes while output drops but costs stay fixed, so average costs rise temporarily. <span class="tag t-J">HOWEVER</span>There is also a risk of over-wide spans: with a huge workforce, fewer layers mean each manager supervises more people, weakening supervision and communication across international operations so problems take longer to fix.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the flat structure could improve efficiency and lower average costs if it speeds decisions and motivates staff, but success depends on how well the change is managed. With poor training and communication, average costs could rise from mistakes and disruption — so in the short term costs may increase, but if the turnaround plan is handled well, the flatter structure should make Tata more efficient long term.</p>`,
     fb:"Mr. Akram's exemplar (Tata Motors, 20). Two efficiency gains (speed, motivation) vs two risks (lost expertise, over-wide spans), linked to average costs with a managed-change judgement."}
  ],
  resources:[
    {label:"Organisational structures (tall, flat &amp; delayering) — notes (PDF)", file:"resources/1-3-4-3-structures-notes.pdf"},
    {label:"Centralisation &amp; decentralisation — notes (PDF)", file:"resources/1-3-4-3-centralisation-notes.pdf"},
    {label:"Matrix structure — notes (PDF)", file:"resources/1-3-4-3-matrix-notes.pdf"}
  ]
},
{
  code:"1.3.4.4", subtheme:"1.3.4", title:"Motivation in theory & practice",
  business:"Case studies: Barclays, Deliveroo & Nissan", status:"live",
  notes:[
    {h:"The four motivation theories", html:`
      <p>Motivation is the drive that makes employees work hard and well. Four classic theories explain it differently:</p>
      <ul>
        <li><b>Taylor (Scientific Management)</b> — workers are motivated mainly by <b>money</b>. Break jobs into simple tasks, train workers, and pay by output (<b>piece-rate</b>). Efficient, but treats people like machines and can cause boredom.</li>
        <li><b>Mayo (Human Relations)</b> — the Hawthorne studies showed workers are motivated by <b>social needs and attention</b>: teamwork, communication and manager involvement, not just pay.</li>
        <li><b>Maslow (Hierarchy of Needs)</b> — five levels of need; a worker is only motivated by the next level up once the one below is met. Firms offer different incentives to move staff up the hierarchy.</li>
        <li><b>Herzberg (Two-Factor)</b> — <b>motivators</b> (achievement, recognition, responsibility) come from the job itself and drive effort; <b>hygiene factors</b> (pay, conditions, security) only prevent dissatisfaction. Note: Herzberg saw <b>pay as a hygiene factor</b> — the opposite of Taylor.</li>
      </ul>
      <p>Maslow's five levels, from the bottom up:</p>
      <div style="overflow-x:auto">
      <svg viewBox="0 0 360 220" style="min-width:300px;width:100%;max-width:440px;height:auto;font-family:inherit" xmlns="http://www.w3.org/2000/svg">
        <polygon points="180,20 152,56 208,56" fill="rgba(245,166,35,.30)" stroke="var(--amber)" stroke-width="1.5"/>
        <polygon points="152,56 208,56 236,92 124,92" fill="rgba(15,42,74,.14)" stroke="var(--navy)" stroke-width="1.5"/>
        <polygon points="124,92 236,92 264,128 96,128" fill="rgba(245,166,35,.18)" stroke="var(--amber)" stroke-width="1.5"/>
        <polygon points="96,128 264,128 292,164 68,164" fill="rgba(15,42,74,.10)" stroke="var(--navy)" stroke-width="1.5"/>
        <polygon points="68,164 292,164 320,200 40,200" fill="rgba(245,166,35,.12)" stroke="var(--amber)" stroke-width="1.5"/>
        <g font-family="inherit" text-anchor="middle" fill="var(--ink)">
          <text x="180" y="50" font-size="7.5" font-weight="700">Self-actualisation</text>
          <text x="180" y="78" font-size="8.5" font-weight="700">Esteem</text>
          <text x="180" y="114" font-size="8.5" font-weight="700">Social</text>
          <text x="180" y="150" font-size="8.5" font-weight="700">Safety</text>
          <text x="180" y="186" font-size="8.5" font-weight="700">Physiological</text>
        </g>
      </svg>
      </div>`},
    {h:"Financial methods of motivation", html:`
      <p><b>Financial methods</b> use money to motivate (linked to Taylor):</p>
      <ul>
        <li><b>Piece-rate pay</b> — paid per unit produced; drives output in factories.</li>
        <li><b>Commission</b> — a % of each sale; common for sales staff (e.g. BMW showrooms).</li>
        <li><b>Bonus payments</b> — extra sums on top of basic pay (e.g. <b>Lidl</b> paid 25,000 staff a £200 "thank you" bonus during Covid, costing £5.5m).</li>
        <li><b>Profit share</b> — staff receive a slice of profits, aligning them with the firm.</li>
        <li><b>Employee share ownership</b> — staff own shares, so they gain when the firm succeeds.</li>
      </ul>
      <p>Financial rewards work best for money-motivated staff, but Herzberg warns they may only prevent dissatisfaction rather than drive long-term effort.</p>`},
    {h:"Non-financial methods of motivation", html:`
      <p><b>Non-financial methods</b> motivate through the job and workplace (linked to Mayo, Maslow and Herzberg):</p>
      <ul>
        <li><b>Delegation &amp; empowerment</b> — giving staff authority and trust to make decisions.</li>
        <li><b>Consultation</b> — involving staff in decisions (e.g. <b>Nissan</b> quality circles).</li>
        <li><b>Team working</b> — Nissan builds cars in teams of 25, with socialising, a free gym and family events.</li>
        <li><b>Job enrichment</b> (more challenging tasks), <b>job rotation</b> (switching tasks — Nissan workers rotate weekly and are multi-skilled) and <b>job enlargement</b> (more varied tasks at the same level).</li>
        <li><b>Flexible working</b> — flexible hours, home working (e.g. <b>Nestlé</b>'s flexible hours and dog-friendly HQ for work-life balance).</li>
      </ul>`}
  ],
  definitions:[
    {term:"Motivation", marks:2, body:`The internal drive that makes an employee work hard and well towards the firm's goals <span class="pt">1</span>; higher motivation tends to raise productivity, quality and staff retention <span class="pt">2</span>.`},
    {term:"Taylor's scientific management", marks:2, body:`The theory that workers are motivated mainly by money, so jobs are simplified and pay linked to output <span class="pt">1</span>; it raises efficiency but can make work boring and ignores social needs <span class="pt">2</span>.`},
    {term:"Herzberg's two-factor theory", marks:2, body:`The idea that motivators (achievement, recognition, responsibility) drive effort while hygiene factors (pay, conditions) only prevent dissatisfaction <span class="pt">1</span>; so improving pay alone will not motivate staff long term <span class="pt">2</span>.`},
    {term:"Piece-rate pay", marks:2, body:`Paying a worker a fixed amount for each unit they produce <span class="pt">1</span>; it encourages higher output but can reduce quality if staff rush <span class="pt">2</span>.`},
    {term:"Job enrichment", marks:2, body:`Giving employees more challenging, meaningful tasks and greater responsibility <span class="pt">1</span>; it can raise motivation through a sense of achievement but needs training and may not suit every worker <span class="pt">2</span>.`},
    {term:"Empowerment", marks:2, body:`Giving employees the authority and trust to make their own decisions at work <span class="pt">1</span>; it can boost motivation and speed up decisions but requires capable, well-trained staff <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'piece-rate pay'.",
     model:`Piece-rate pay is paying a worker a fixed amount for each unit they produce <span class="pt">1</span>; it encourages higher output but can reduce quality if staff rush to produce more <span class="pt">2</span>.`,
     fb:"Pay-per-unit plus the output/quality trade-off — two developed points."},
    {marks:2, q:"Define the term 'job enrichment'.",
     model:`Job enrichment means giving employees more challenging tasks and greater responsibility <span class="pt">1</span>; this can raise motivation through a sense of achievement, in line with Herzberg's motivators <span class="pt">2</span>.`,
     fb:"More responsibility/challenge plus the motivator link."},
    {marks:4, q:"Explain one non-financial method a business could use to motivate its workers.",
     model:`A business could use team working to motivate staff <span class="pt">1</span>. This is because, as Mayo found, employees are motivated by social interaction and feeling part of a group <span class="pt">2</span>. As a result, workers like those at Nissan feel more valued and engaged <span class="pt">3</span>, raising morale and productivity while lowering absenteeism <span class="pt">4</span>.`,
     fb:"Names a non-financial method, links to Mayo and chains to morale/productivity with context."}
  ],
  caseStudy:{
    business:"Barclays, Deliveroo & Nissan",
    intro:`<p>Businesses used in the motivation questions.</p>
      <ul>
        <li><b>Barclays</b> — switched from <b>sales-based bonuses</b> (which drove PPI mis-selling and over £1bn in fines) to <b>customer-service-based bonuses</b>, cutting bonus cost from ~£50m to ~£30m a year.</li>
        <li><b>Deliveroo</b> — gig-economy riders paid per delivery; a test case for Taylor's piece-rate vs Herzberg's motivators.</li>
        <li><b>Nissan (Sunderland)</b> — team working, job rotation, multi-skilling, quality circles and a flat salary — low absenteeism and high productivity.</li>
      </ul>`
  },
  exam:[
    {marks:18, q:"Evaluate the use of Taylor's and Herzberg's theories to improve the motivation of Deliveroo's riders. (18)", caseImg:"resources/casestudies/cs-1-3-4-4-deliveroo-riders.png",
     model:`<p><span class="tag t-P">POINT</span>One way to improve riders' motivation is <b>Taylor's scientific management</b>. <span class="tag t-C">CHAIN</span>Taylor believed workers are motivated by money and pay should be linked to output through piece-rates. <span class="tag t-A">APPLY</span>Deliveroo could offer a higher fee per delivery or bonuses for completing a set number in a time frame, encouraging riders to work faster and cut late orders — raising productivity, customer satisfaction and repeat use.</p>
     <p><span class="tag t-J">HOWEVER</span>However, Taylor may not fit this context: riders already face time-pressure and penalties for late deliveries, so extra pressure could cause dissatisfaction and burnout. <span class="tag t-C">CHAIN</span>Motivation might fall, raising turnover and recruitment costs and risking reputational damage if service drops.</p>
     <p><span class="tag t-P">POINT</span>Alternatively, <b>Herzberg's two-factor theory</b> separates hygiene factors (pay, conditions) from motivators (achievement, responsibility). <span class="tag t-A">APPLY</span>Deliveroo could add job rotation, training and rider recognition so riders feel valued and gain autonomy. <span class="tag t-C">CHAIN</span>They may become more loyal and productive, improving service and brand loyalty. <span class="tag t-J">HOWEVER</span>But riders are gig workers, not permanent staff, so training and progression are hard and costly to provide, meaning motivators may only lift motivation slightly without broader reform.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, Herzberg's theory is more likely to improve rider motivation in the long term because it goes beyond pay to respect, development and the job role itself; Taylor's piece-rate may raise speed but the pressure could harm morale and retention. Success depends on how Deliveroo balances flexibility with fairness. It is recommended Deliveroo adopt Herzberg's ideas — recognition and training — alongside better basic conditions, improving motivation sustainably and ethically.</p>`,
     fb:"Mr. Akram's exemplar (Deliveroo, 18). Taylor and Herzberg each developed with a benefit and limitation, applied to the gig model, with a reasoned recommendation."},
    {marks:20, q:"Barclays proposes to move from sales-based bonuses to a customer-service-based bonus system. Evaluate the effectiveness of using financial and non-financial techniques to motivate the employees of Barclays plc. (20)", caseImg:"resources/casestudies/cs-1-3-4-4-barclays.png",
     model:`<p><span class="tag t-P">POINT</span>Barclays' previous <b>financial</b> motivation — sales-based bonuses — encouraged high sales volumes and strong financial incentives for staff who hit targets. <span class="tag t-A">APPLY</span>This boosted revenue and short-term goals. <span class="tag t-C">CHAIN</span>However, tying bonuses to sales drove unethical practice — the mis-selling of PPI — leading to public distrust, regulatory fines over £1bn and a damaged brand. This shows purely sales-based financial motivation can compromise ethics.</p>
     <p><span class="tag t-P">POINT</span>The shift to a <b>customer-service-based</b> bonus aligns more with non-financial motivation, rewarding satisfaction and loyalty. <span class="tag t-C">CHAIN</span>This encourages a customer-focused culture, improving reputation, long-term loyalty and regulatory safety, and it cuts bonus cost from ~£50m to ~£30m a year. <span class="tag t-J">HOWEVER</span>However, it may lower sales and short-term profit, and staff used to high sales bonuses could feel demotivated, hurting retention.</p>
     <p><span class="tag t-A">APPLY</span>The service-based system supports ethical behaviour and fits <b>Herzberg's</b> view that intrinsic factors like feeling valued motivate staff. <span class="tag t-J">HOWEVER</span>But moving away from direct financial reward may not appeal to employees who, in <b>Taylor's</b> view, see pay as the main incentive — risking a dip in motivation among sales-focused staff.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, the most effective approach for Barclays is a <b>balanced</b> strategy that meets ethical standards while keeping staff motivated. By keeping some financial incentives alongside customer-service bonuses, Barclays can balance short-term performance with long-term reputation, ensuring sustainable growth and trust with both customers and employees.</p>`,
     fb:"Mr. Akram's exemplar (Barclays, 20). Financial vs non-financial weighed with PPI/fines context and Herzberg/Taylor, concluding on a balanced strategy."}
  ],
  resources:[
    {label:"Motivation theories — lesson notes (PDF)", file:"resources/1-3-4-4-motivation-theories-notes.pdf"},
    {label:"Financial &amp; non-financial methods — lesson notes (PDF)", file:"resources/1-3-4-4-motivation-methods-notes.pdf"}
  ]
},
{
  code:"1.3.4.5", subtheme:"1.3.4", title:"Leadership",
  business:"Case studies: Alibaba, Disney & a growing start-up",
  status:"live",
  notes:[
    {h:"Management vs leadership", html:`
      <p>The two overlap but differ:</p>
      <ul>
        <li><b>Leadership</b> — inspiring people: setting a vision, motivating and guiding, focused on the <b>future</b>, using influence, driving change and taking risks.</li>
        <li><b>Management</b> — organising work: planning and controlling to get tasks done, focused on the <b>present</b>, using authority and rules, seeking stability.</li>
      </ul>
      <p>A leader exercises authority through a <b>leadership style</b> — the way the functions of leadership are carried out.</p>`},
    {h:"The four leadership styles", html:`
      <ul>
        <li><b>Autocratic (authoritarian)</b> — leaders make all decisions and delegate little; communication is top-down with no feedback. Fast in a crisis, but can demotivate.</li>
        <li><b>Paternalistic</b> — still largely autocratic, but the leader acts in workers' best interests, like a caring "father figure" (e.g. <b>Jack Ma</b> at Alibaba). Builds loyalty, but staff still have little say.</li>
        <li><b>Democratic</b> — the leader consults the workforce before deciding. Raises motivation and draws on staff ideas, but is slower.</li>
        <li><b>Laissez-faire</b> — managers leave staff to get on with the job with little interference. Suits skilled, creative teams, but risks a lack of direction.</li>
      </ul>
      <p>The best style <b>depends on the situation</b> — the task, the staff and how fast decisions are needed. Many firms use a <b>hybrid</b>, varying style by department.</p>`},
    {h:"Moving from entrepreneur to leader", html:`
      <p>As a start-up grows, the founder must shift from <b>entrepreneur</b> (doing everything, making every decision) to <b>leader</b> (setting direction and getting work done through others). Common difficulties:</p>
      <ul>
        <li><b>Delegation</b> — an owner used to running everything may struggle to hand over control, slowing decisions and creating a bottleneck.</li>
        <li><b>Changing leadership style</b> — the early autocratic approach may no longer suit a larger team that expects more say, risking low morale and turnover.</li>
        <li><b>New skills &amp; responsibilities</b> — leading needs vision, communication and people-management rather than hands-on doing.</li>
      </ul>
      <p>These are easier to overcome in a <b>small team</b>, where the founder can delegate routine tasks while keeping major decisions, and where a founder who is open to change can adapt their style gradually.</p>`}
  ],
  definitions:[
    {term:"Leadership", marks:2, body:`The act of inspiring and guiding people towards a shared vision <span class="pt">1</span>; unlike management, it focuses on the future and uses influence and motivation rather than authority and rules <span class="pt">2</span>.`},
    {term:"Autocratic leadership", marks:2, body:`A style where the leader makes all decisions and delegates little, with top-down communication <span class="pt">1</span>; it allows fast decisions but can demotivate staff who have no say <span class="pt">2</span>.`},
    {term:"Paternalistic leadership", marks:2, body:`A largely top-down style where the leader makes decisions they believe are in employees' best interests, like a father figure <span class="pt">1</span>; it builds loyalty and trust but still gives staff little real input <span class="pt">2</span>.`},
    {term:"Democratic leadership", marks:2, body:`A style where the leader consults the workforce before making decisions <span class="pt">1</span>; it raises motivation and uses staff ideas but can slow decision-making <span class="pt">2</span>.`},
    {term:"Laissez-faire leadership", marks:2, body:`A style where managers leave employees to make their own decisions with little interference <span class="pt">1</span>; it suits skilled, creative staff but risks a lack of direction and coordination <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'autocratic leadership'.",
     model:`Autocratic leadership is a style where the leader makes all the decisions and delegates little, with top-down communication <span class="pt">1</span>; it allows fast decisions but can demotivate staff who have no say <span class="pt">2</span>.`,
     fb:"All-decisions/top-down plus the speed-vs-motivation trade-off — two developed points."},
    {marks:2, q:"Define the term 'democratic leadership'.",
     model:`Democratic leadership is a style where the leader consults the workforce before making decisions <span class="pt">1</span>; it raises motivation and draws on staff ideas but can slow decision-making <span class="pt">2</span>.`,
     fb:"Consults-before-deciding plus the motivation-vs-speed trade-off."},
    {marks:4, q:"Explain one difficulty an entrepreneur may face when becoming the leader of a growing business.",
     model:`One difficulty is delegation <span class="pt">1</span>. This is because an entrepreneur is used to making every decision themselves <span class="pt">2</span>. As a result, they may struggle to hand over control as the team grows <span class="pt">3</span>, creating a bottleneck that slows decisions and reduces efficiency <span class="pt">4</span>.`,
     fb:"Names the difficulty (delegation), explains the habit behind it and chains to the bottleneck effect."}
  ],
  caseStudy:{
    business:"Alibaba, Disney & a growing start-up",
    intro:`<p>Businesses used in the leadership questions.</p>
      <ul>
        <li><b>Alibaba (Jack Ma)</b> — a <b>paternalistic</b> leader who said it was his job to keep his team happy so they could keep customers happy, in a fast-moving tech sector.</li>
        <li><b>Disney World</b> — weighing a <b>paternalistic</b> vs <b>democratic</b> style to keep staff and customers satisfied at its theme parks.</li>
        <li><b>A growing start-up</b> — e.g. Ryan's 18-person digital-marketing firm, where the founder must move from entrepreneur to leader.</li>
      </ul>`
  },
  exam:[
    {marks:10, q:"Assess the potential of a paternalistic style of leadership for a business such as the Alibaba Group. (10)", caseImg:"resources/casestudies/cs-1-3-4-5-alibaba.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit of a paternalistic style at Alibaba is improved employee motivation and loyalty. <span class="tag t-C">CHAIN</span>Because decisions are made with employees' best interests in mind, staff feel valued and supported — Jack Ma's leadership focused on looking after employees while taking responsibility for the firm's success. <span class="tag t-A">APPLY</span>Workers feel more secure and respected, raising morale and productivity, so turnover falls, cutting recruitment costs and supporting long-term performance — important for a global company where staff satisfaction drives service quality and innovation.</p>
     <p><span class="tag t-J">HOWEVER</span>However, paternalistic leadership can limit innovation if decision-making is too centralised. <span class="tag t-C">CHAIN</span>If key decisions rest with one person, staff may feel their ideas are unheard and lack autonomy, so entrepreneurial, skilled workers become demotivated. <span class="tag t-A">APPLY</span>They may leave for firms offering more independence, reducing Alibaba's ability to attract and retain top talent and risking missed innovation in a fast-changing tech industry.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, paternalistic leadership can be effective for Alibaba in building trust, motivation and a strong culture during growth; but to stay competitive the style should evolve to include more staff input. Success depends on balancing employee support with empowerment — it is recommended Alibaba keeps the core of paternalism while introducing more collaborative practices to drive innovation and retain talent.</p>`,
     fb:"Mr. Akram's exemplar (Alibaba, 10 — top band). Benefit (loyalty/retention) and drawback (limited innovation) applied to Jack Ma and tech, with a balanced 'evolve the style' judgement."},
    {marks:10, q:"Assess the difficulties the founder of a growing business (e.g. Ryan's 18-person firm) may face in developing from an entrepreneur to a leader. (10)",
     model:`<p><span class="tag t-P">POINT</span>One difficulty is delegating tasks to others. <span class="tag t-C">CHAIN</span>Ryan is used to running the business himself and making all key decisions, so he may struggle to hand over control as it grows — trying to stay involved in everything could slow things down and reduce efficiency.</p>
     <p><span class="tag t-P">POINT</span>A second difficulty is changing his leadership style. <span class="tag t-C">CHAIN</span>Entrepreneurs often start out autocratic, but as the team expands staff expect more freedom and input, so failing to adapt risks lower morale, higher turnover and increased recruitment costs.</p>
     <p><span class="tag t-J">HOWEVER</span>However, these may not be as serious as they appear. <span class="tag t-A">APPLY</span>With only 18 staff, the team is small enough to manage directly, so Ryan may only need to delegate routine tasks while keeping major decisions and building trust gradually. He also appears open to change — the business has already adapted its services (e.g. updating SEO on customer feedback) — which suggests he will adapt his leadership style too. <span class="tag t-J">CONCLUSION</span>Overall, the difficulties are real but manageable given the firm's size and Ryan's willingness to adapt.</p>`,
     fb:"Mr. Akram's exemplar (entrepreneur→leader, 10). Two difficulties with developed chains, balanced by why the small team and an adaptable founder soften them."},
    {marks:20, q:"Disney World is considering a paternalistic or a democratic management style to raise customer satisfaction at its theme parks. Evaluate these two options and recommend which would be better. (20)", caseImg:"resources/casestudies/cs-1-3-4-5-disney-world.png",
     model:`<p><span class="tag t-P">POINT</span>One advantage of a <b>paternalistic</b> style is that it builds loyalty and a caring culture. <span class="tag t-C">CHAIN</span>Disney cast members who feel looked after are more motivated and stay longer, so the park keeps experienced, well-trained staff. <span class="tag t-A">APPLY</span>In a theme park where friendly, knowledgeable staff directly shape the guest experience, this supports consistent, high customer satisfaction.</p>
     <p><span class="tag t-J">HOWEVER</span>However, paternalism concentrates decisions at the top. <span class="tag t-C">CHAIN</span>Front-line staff who spot guest problems may lack the authority to fix them quickly, so issues escalate and satisfaction dips at the very moment it matters.</p>
     <p><span class="tag t-P">POINT</span>One advantage of a <b>democratic</b> style is that it empowers and motivates staff by valuing their input. <span class="tag t-A">APPLY</span>Cast members dealing with guests every day have the best ideas for improving the experience, and consulting them both improves service and makes them feel valued. <span class="tag t-J">HOWEVER</span>However, democratic decision-making is slower and, across a huge workforce, consulting widely on every issue is impractical and could produce inconsistent service between teams.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, for customer satisfaction a largely <b>democratic</b> style is likely better at Disney, because empowered, motivated front-line staff can respond to guests quickly and personally. I have rejected a purely paternalistic style because it risks slow problem-solving at the point of service. Success will depend on training and clear service standards so that empowerment does not become inconsistency — so it is recommended Disney empowers staff within a strong framework, keeping the supportive, caring elements of paternalism.</p>`,
     fb:"Model answer (Disney, 20). Paternalistic vs democratic each with a benefit and drawback, applied to front-line guest service, with a justified recommendation and rejection."}
  ],
  resources:[
    {label:"Leadership styles — lesson notes (PDF)", file:"resources/1-3-4-5-leadership-styles-notes.pdf"},
    {label:"Entrepreneur to leader — lesson notes (PDF)", file:"resources/1-3-4-5-entrepreneur-to-leader-notes.pdf"}
  ]
},
{
  code:"1.3.5.1", subtheme:"1.3.5", title:"Role of an entrepreneur",
  business:"Case studies: Sony PlayStation, Google & Little Dessert Shop",
  status:"live",
  notes:[
    {h:"What an entrepreneur does", html:`
      <p>An <b>entrepreneur</b> sets up and runs a business, taking on financial risk in the hope of profit. Their key roles are:</p>
      <ul>
        <li><b>Creating and setting up the business</b> — spotting a gap or opportunity and turning an idea into a working firm.</li>
        <li><b>Running and expanding it</b> — making the day-to-day and strategic decisions (product, price, location, marketing) and driving growth.</li>
        <li><b>Innovating</b> — developing new products, processes or ways of doing things to stay competitive.</li>
        <li><b>Bearing risk and uncertainty</b> — the entrepreneur is responsible for success or failure and may risk their own money.</li>
      </ul>`},
    {h:"Intrapreneurship", html:`
      <p><b>Intrapreneurship</b> is employees <i>within an existing business</i> using entrepreneurial skills — spotting opportunities and taking risks — to create new products or ventures. The <b>intrapreneur</b> innovates without risking their own money, because the company provides the investment.</p>
      <ul>
        <li><b>Gmail</b> came out of Google's "20% time" policy, which lets staff spend time on their own projects.</li>
        <li><b>The Sony PlayStation</b> began when junior Sony engineer <b>Ken Kutaragi</b> tinkered with his daughter's Nintendo. Backed by CEO Norio Ohga against most of senior management, Sony invested <b>$2.5bn</b>; the PlayStation went on to take over <b>70% of the console market</b> and provide <b>40% of Sony's operating profit</b> by 1998.</li>
      </ul>
      <p>Intrapreneurship brings innovation, new revenue and a more creative culture — but large bets on unproven ideas (like Sony's $2.5bn) carry big financial risk and can cause internal conflict if managers resist change.</p>`},
    {h:"Barriers to entrepreneurship", html:`
      <p>Many new businesses fail. Common <b>barriers</b> include:</p>
      <ul>
        <li><b>A poor business idea</b> — no real gap in the market or demand.</li>
        <li><b>Lack of finance</b> — difficulty raising start-up capital or managing cash flow.</li>
        <li><b>Lack of skills or experience</b> — weak management, financial or marketing know-how.</li>
        <li><b>Strong competition</b> — established rivals with brand loyalty and economies of scale.</li>
        <li><b>Legal and regulatory barriers</b> — licences, red tape and compliance costs.</li>
        <li><b>Fear of failure and risk</b> — which can stop people starting at all.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Entrepreneur", marks:2, body:`A person who sets up and runs a business, taking on financial risk in the hope of making a profit <span class="pt">1</span>; they organise the other factors of production and make the key business decisions <span class="pt">2</span>.`},
    {term:"Intrapreneurship", marks:2, body:`When employees within an existing business use entrepreneurial skills to develop new products or ventures <span class="pt">1</span>; the business provides the investment, so the intrapreneur innovates without risking their own money <span class="pt">2</span>.`},
    {term:"Intrapreneur", marks:2, body:`An employee within a business who takes risks and innovates to solve problems or create new opportunities <span class="pt">1</span>; they bring entrepreneurial behaviour into an established organisation <span class="pt">2</span>.`},
    {term:"Barriers to entrepreneurship", marks:2, body:`The obstacles that make it hard to start or succeed in business, such as lack of finance, skills or a poor idea <span class="pt">1</span>; they are a key reason many new businesses fail <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'entrepreneur'.",
     model:`An entrepreneur is a person who sets up and runs a business, taking on financial risk in the hope of profit <span class="pt">1</span>; they organise the factors of production and make the key decisions <span class="pt">2</span>.`,
     fb:"Sets up/takes risk for profit plus the organising-and-deciding role — two developed points."},
    {marks:2, q:"Define the term 'intrapreneurship'.",
     model:`Intrapreneurship is when employees within an existing business use entrepreneurial skills to develop new products or ventures <span class="pt">1</span>; the firm provides the investment, so they innovate without risking their own money <span class="pt">2</span>.`,
     fb:"Entrepreneurial behaviour inside a firm plus the firm-bears-the-risk point."},
    {marks:4, q:"Explain one barrier that may cause a new business to fail.",
     model:`One barrier is a lack of finance <span class="pt">1</span>. This is because new businesses often struggle to raise enough start-up capital or manage cash flow <span class="pt">2</span>. As a result, they may be unable to cover costs such as stock, rent and wages before sales build up <span class="pt">3</span>, forcing the business to close even if the idea was sound <span class="pt">4</span>.`,
     fb:"Names a barrier (finance), explains why and chains to cash-flow failure."}
  ],
  caseStudy:{
    business:"Sony, Google & Little Dessert Shop",
    intro:`<p>Businesses used in the role-of-the-entrepreneur questions.</p>
      <ul>
        <li><b>Sony PlayStation</b> — Ken Kutaragi's <b>intrapreneurial</b> venture, backed with $2.5bn, now ~70% of the console market.</li>
        <li><b>Google</b> — its "20% time" policy let an intrapreneur create <b>Gmail</b>.</li>
        <li><b>Live Well Ltd</b> — a health-tech firm relying on intrapreneurship to keep its app innovative.</li>
        <li><b>Little Dessert Shop</b> — a start-up where the entrepreneur makes all the key decisions and bears the risk.</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Assess the role of the entrepreneur in a start-up such as Little Dessert Shop. (8)",
     model:`<p><span class="tag t-P">POINT</span>One key role of the entrepreneur is decision-making — choosing the product range, pricing, location and marketing. <span class="tag t-A">APPLY</span>At Little Dessert Shop the entrepreneur might open in a busy retail area to attract footfall and offer creative dessert combinations to stand out. <span class="tag t-C">CHAIN</span>This lets the business respond quickly to changing tastes or local trends — seasonal items, limited-time offers — driving demand and loyalty, giving a competitive edge in a fast-moving food market.</p>
     <p><span class="tag t-J">HOWEVER</span>However, entrepreneurs also bear significant personal and financial risk. <span class="tag t-C">CHAIN</span>They are fully responsible for success or failure: if Little Dessert Shop invests heavily in décor or equipment and fails to attract enough customers, the entrepreneur faces cash-flow problems or personal loss. <span class="tag t-A">APPLY</span>The long hours managing staff, suppliers and service can also cause burnout and poor decisions over time, which may harm performance or limit growth.</p>`,
     fb:"Mr. Akram's exemplar (Little Dessert Shop, 8). Decision-making role vs risk/pressure, applied throughout, no conclusion needed for 8 marks."},
    {marks:10, q:"Assess the importance of intrapreneurship to the success of a business such as Sony. (10)", caseImg:"resources/casestudies/cs-1-3-5-1-sony-playstation.png",
     model:`<p><span class="tag t-P">POINT</span>One reason intrapreneurship is important to Sony is that it can lead to highly profitable innovation that transforms the company. <span class="tag t-A">APPLY</span>Ken Kutaragi's idea for a CD-ROM gaming system became the PlayStation; though gaming was not Sony's core business, his entrepreneurial persistence let Sony enter a fast-growing market. <span class="tag t-C">CHAIN</span>The PlayStation went on to dominate gaming, providing 40% of Sony's operating profit by 1998 — showing that giving employees freedom to explore ideas internally can create major commercial success and a more innovative culture.</p>
     <p><span class="tag t-J">HOWEVER</span>However, intrapreneurship carries real risk, especially when it needs large investment in unproven ideas. <span class="tag t-A">APPLY</span>Sony invested $2.5bn in the PlayStation — a venture many executives opposed; had it failed, Sony faced huge losses and reputational damage. <span class="tag t-C">CHAIN</span>Intrapreneurship can also cause internal conflict as traditional managers resist new ideas, slowing decisions and creating tension.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, intrapreneurship was critical to Sony's success through the PlayStation, enabling innovation from within and new revenue streams. However, the benefits depend heavily on the firm's willingness to invest, support creative staff and manage risk — so intrapreneurship is very important but must be carefully led.</p>`,
     fb:"Model answer (Sony, 10). Intrapreneurship benefit (transformative innovation) vs risk ($2.5bn bet, internal conflict), applied to the PlayStation, with a conditional judgement."}
  ],
  resources:[
    {label:"Intrapreneurship &amp; barriers to entrepreneurship — notes (PDF)", file:"resources/1-3-5-1-intrapreneurship-notes.pdf"}
  ]
},
{
  code:"1.3.5.2", subtheme:"1.3.5", title:"Entrepreneurial motives & characteristics",
  business:"Case studies: Richard Mille, Approved Food & Elon Musk",
  status:"live",
  notes:[
    {h:"Characteristics & skills of entrepreneurs", html:`
      <p>Successful entrepreneurs tend to share certain <b>characteristics</b>:</p>
      <ul>
        <li><b>Risk-taking</b> — willing to make decisions with uncertain outcomes (e.g. <b>Richard Mille</b> invests heavily in "risky" advanced materials and precision mechanics that must be perfect "or go in the bin").</li>
        <li><b>Innovation &amp; creativity</b> — generating new ideas and products that stand out.</li>
        <li><b>Determination &amp; perseverance</b> — pushing on through setbacks (e.g. <b>Elon Musk</b> persisting through early SpaceX and Tesla near-failures).</li>
        <li><b>Self-confidence and decisiveness</b> — backing their own judgement.</li>
      </ul>
      <p>They also need <b>skills</b> — financial, communication, organisation and leadership. Success is rarely down to the entrepreneur alone: experience, a strong team, finance and market conditions all matter too.</p>`},
    {h:"Motives for starting a business", html:`
      <p>Entrepreneurs start businesses for <b>financial</b> and <b>non-financial</b> reasons:</p>
      <ul>
        <li><b>Financial motives</b> — profit, a higher income than employment, and building personal wealth.</li>
        <li><b>Non-financial motives</b> — independence ("being your own boss"), pursuing a passion, a better work-life balance, or a social/ethical aim (e.g. reducing food waste).</li>
      </ul>
      <p>A key distinction in how profit is pursued:</p>
      <ul>
        <li><b>Profit maximisation</b> — making the greatest possible profit, reinvesting to grow (vital for a low-margin, high-volume firm like <b>Approved Food</b>).</li>
        <li><b>Profit satisficing</b> — making <i>enough</i> profit to be comfortable while pursuing other goals such as lifestyle, family time or ethics.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Risk-taking", marks:2, body:`When an entrepreneur makes decisions with uncertain outcomes, often involving financial or reputational consequences <span class="pt">1</span>; it is a core entrepreneurial trait that drives innovation but can lead to losses <span class="pt">2</span>.`},
    {term:"Profit maximisation", marks:2, body:`Running a business to make the greatest possible profit <span class="pt">1</span>; the profit can be reinvested to grow, but chasing it too hard can conflict with other objectives like reputation <span class="pt">2</span>.`},
    {term:"Profit satisficing", marks:2, body:`Aiming for enough profit to be satisfactory rather than the maximum possible <span class="pt">1</span>; it lets the owner pursue other goals such as work-life balance or ethical aims <span class="pt">2</span>.`},
    {term:"Financial motive", marks:2, body:`A money-based reason for starting a business, such as profit, higher income or building wealth <span class="pt">1</span>; it shapes decisions towards keeping costs low and revenue high <span class="pt">2</span>.`},
    {term:"Non-financial motive", marks:2, body:`A non-money reason for starting a business, such as independence, passion, work-life balance or a social aim <span class="pt">1</span>; it influences the objectives and values the business is run by <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'profit maximisation'.",
     model:`Profit maximisation is running a business to make the greatest possible profit <span class="pt">1</span>; the profit can then be reinvested to grow the business <span class="pt">2</span>.`,
     fb:"Greatest-possible-profit plus the reinvestment point — two developed points."},
    {marks:2, q:"Define the term 'profit satisficing'.",
     model:`Profit satisficing is aiming for enough profit to be satisfactory rather than the maximum possible <span class="pt">1</span>; it lets the owner pursue other goals such as work-life balance <span class="pt">2</span>.`,
     fb:"Enough-not-maximum profit plus the other-goals point."},
    {marks:4, q:"Explain one non-financial motive for starting a business.",
     model:`One non-financial motive is independence <span class="pt">1</span>. This is because many people want to be their own boss rather than work for someone else <span class="pt">2</span>. As a result, they set up a business to control their own decisions and working life <span class="pt">3</span>, which can increase their job satisfaction and drive to succeed <span class="pt">4</span>.`,
     fb:"Names a non-financial motive (independence), explains it and chains to satisfaction/drive."}
  ],
  caseStudy:{
    business:"Richard Mille, Approved Food & Little Dessert Shop",
    intro:`<p>Businesses used in the motives-and-characteristics questions.</p>
      <ul>
        <li><b>Richard Mille</b> — luxury watchmaker whose success rests on <b>risk-taking</b> and innovation (advanced materials, celebrity partners like Rafael Nadal, premium prices).</li>
        <li><b>Approved Food</b> — the UK's largest online retailer of food near its use-by date; a low-margin business where <b>profit maximisation</b> funds growth, balanced against its food-waste-reduction mission.</li>
        <li><b>Little Dessert Shop</b> — a start-up whose owner shows creativity and is driven by both profit and independence.</li>
      </ul>`
  },
  exam:[
    {marks:6, q:"Explain one characteristic and one motive of the entrepreneur behind a start-up such as Little Dessert Shop. (6)",
     model:`<p><span class="tag t-P">POINT</span>One characteristic of a successful entrepreneur is <b>creativity</b>. <span class="tag t-C">CHAIN</span>This allows them to develop unique dessert ideas or new flavours that attract customers and stand out from competitors. <span class="tag t-A">APPLY</span>This leads to increased customer interest and higher sales, supporting the objective of growth through brand recognition and repeat custom.</p>
     <p><span class="tag t-P">POINT</span>A common <b>motive</b> for starting a business is <b>profit</b>. <span class="tag t-C">CHAIN</span>The owner of Little Dessert Shop may want to earn more than in a regular job, especially after investing personal savings. <span class="tag t-A">APPLY</span>This leads them to make careful financial decisions to keep costs low and revenue high, helping achieve long-term stability and the ability to open more branches.</p>`,
     fb:"Mr. Akram's exemplar (Little Dessert Shop, 6). One characteristic (creativity) and one motive (profit), each explained and applied."},
    {marks:8, q:"Discuss the importance of profit maximisation to a business such as Approved Food. (8)",
     model:`<p><span class="tag t-P">POINT</span>Profit maximisation is important to Approved Food because it lets the business reinvest and grow. <span class="tag t-C">CHAIN</span>As a low-margin retailer it needs high sales volumes to stay competitive, and more profit per order can be reinvested in warehouse space, delivery systems and marketing. <span class="tag t-A">APPLY</span>This supports its expansion as the UK's largest online retailer of food near its use-by date and helps it maintain 60–70% savings for customers through lower costs per order.</p>
     <p><span class="tag t-J">HOWEVER</span>However, profit maximisation may not always be the most important goal, especially where it conflicts with other objectives. <span class="tag t-A">APPLY</span>Approved Food is also driven by ethical aims — reducing food waste and offering savings — so raising prices or cutting quality to chase profit could lose the value-conscious customers attracted to its mission. <span class="tag t-C">CHAIN</span>A focus on short-term profit could therefore damage long-term reputation, suggesting profit must be balanced with social and ethical values.</p>`,
     fb:"Mr. Akram's exemplar (Approved Food, 8). Profit maximisation for reinvestment vs conflict with the ethical mission, applied throughout."},
    {marks:10, q:"Assess the importance of risk-taking within Richard Mille's business. (10)", caseImg:"resources/casestudies/cs-1-3-5-2-richard-mille.png",
     model:`<p><span class="tag t-P">POINT</span>One reason risk-taking is important to Richard Mille is that it drives constant innovation and product uniqueness. <span class="tag t-A">APPLY</span>Mr Mille calls his watches "risky work", using advanced materials and precision mechanics that must be perfect or "go in the bin" — heavy R&D investment with no guaranteed return, producing standout products worn by elite athletes like Rafael Nadal. <span class="tag t-C">CHAIN</span>Without this bold approach RM would not stand out in the luxury market; risk-taking builds its identity as the most innovative brand, letting it command premium prices from niche high-end buyers.</p>
     <p><span class="tag t-J">HOWEVER</span>However, risk-taking alone is not enough. <span class="tag t-C">CHAIN</span>If high-risk designs fail to meet expectations, RM could lose reputation or waste costs on rejected products — serious given its small production runs and perfectionist standards. <span class="tag t-A">APPLY</span>Mille's experience at Seiko and as a CEO gave him the business knowledge and leadership to balance risk with sound decisions.</p>
     <p><span class="tag t-J">CONCLUSION</span>In conclusion, risk-taking has been essential in making RM bold and innovative — through unique materials, celebrity partnerships and perfectionist standards. But it succeeds because it is combined with strategic thinking, leadership experience and a strong brand vision, showing risk must be managed, not random, to be truly effective.</p>`,
     fb:"Mr. Akram's exemplar (Richard Mille, 10). Risk-taking as the source of innovation/premium pricing, balanced by the need to manage it with experience and strategy."}
  ],
  resources:[
    {label:"Entrepreneurial motives &amp; characteristics — notes (PDF)", file:"resources/1-3-5-2-motives-characteristics-notes.pdf"}
  ]
},
{
  code:"1.3.5.3", subtheme:"1.3.5", title:"Business objectives",
  business:"Case studies: Primark & Little Dessert Shop",
  status:"live",
  notes:[
    {h:"Corporate objectives & SMART", html:`
      <p><b>Corporate (strategic) objectives</b> are the clearly-defined targets a business sets itself; strategies are then the plans devised to achieve them. Setting objectives helps a business because it:</p>
      <ul>
        <li><b>Increases motivation</b> — staff and managers have clear targets to work towards.</li>
        <li><b>Makes decision-making easier</b> and quicker, as choices can be judged against the targets.</li>
        <li><b>Lets managers measure performance</b> against the objectives and adjust activities if needed.</li>
      </ul>
      <p>The most effective objectives are <b>SMART</b>: <b>S</b>pecific, <b>M</b>easurable, <b>A</b>chievable, <b>R</b>ealistic and <b>T</b>ime-bound.</p>`},
    {h:"Financial objectives", html:`
      <ul>
        <li><b>Survival</b> — staying in business; the first priority for a new or struggling firm (e.g. Sarah's new sandwich shop among established rivals).</li>
        <li><b>Profit maximisation</b> — making the greatest possible profit, often to satisfy shareholders (e.g. Titan Electronics, a dominant firm delivering higher returns each year).</li>
        <li><b>Sales / revenue maximisation</b> — growing total sales, sometimes ahead of profit.</li>
        <li><b>Market share</b> — the proportion of total market sales a firm holds; pursued through lower prices, advertising and sponsorship (e.g. Swift Shoes undercutting rivals).</li>
        <li><b>Cost efficiency</b> — minimising costs per unit to protect margins and prices.</li>
        <li><b>Profit satisficing</b> — making <i>enough</i> profit while pursuing other goals (e.g. Emma keeping her yoga studio small for work-life balance).</li>
      </ul>`},
    {h:"Non-financial objectives", html:`
      <ul>
        <li><b>Social objectives</b> — goals that benefit society, such as sourcing locally, eco-friendly packaging or donating to the community (e.g. GreenBite Café). They can build loyalty and a USP but may raise costs.</li>
        <li><b>Employee welfare</b> — looking after staff wellbeing, which can raise motivation and retention but adds cost.</li>
        <li><b>Ethical sourcing</b> — buying materials and labour that meet ethical standards (e.g. Primark's supplier Code of Conduct), protecting reputation but potentially raising costs.</li>
      </ul>
      <p>Firms often pursue <b>several objectives at once</b>, and these can conflict — chasing profit can clash with social or ethical aims, so priorities must be balanced.</p>`}
  ],
  definitions:[
    {term:"Corporate objective", marks:2, body:`A clearly-defined, measurable target that a business sets for itself to achieve <span class="pt">1</span>; it guides strategy, motivates staff and lets performance be measured <span class="pt">2</span>.`},
    {term:"SMART objectives", marks:2, body:`Objectives that are Specific, Measurable, Achievable, Realistic and Time-bound <span class="pt">1</span>; making targets SMART means progress can be tracked and the objective is realistic to reach <span class="pt">2</span>.`},
    {term:"Survival (as an objective)", marks:2, body:`An objective focused simply on keeping the business trading <span class="pt">1</span>; it is usually the first priority for a new or struggling firm before it aims for profit or growth <span class="pt">2</span>.`},
    {term:"Market share", marks:2, body:`The proportion of total sales in a market that one business holds, usually shown as a percentage <span class="pt">1</span>; a higher share can bring greater influence and economies of scale <span class="pt">2</span>.`},
    {term:"Social objectives", marks:2, body:`Business goals that aim to benefit society, such as protecting the environment or supporting the community <span class="pt">1</span>; they can build customer loyalty and a USP but may raise costs <span class="pt">2</span>.`},
    {term:"Employee welfare", marks:2, body:`An objective of looking after the wellbeing and working conditions of staff <span class="pt">1</span>; it can raise motivation and retention but adds to costs <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'corporate objective'.",
     model:`A corporate objective is a clearly-defined, measurable target a business sets for itself to achieve <span class="pt">1</span>; it guides strategy and lets the business measure its performance <span class="pt">2</span>.`,
     fb:"Defined target plus the guide-strategy/measure-performance point — two developed points."},
    {marks:2, q:"Define the term 'market share'.",
     model:`Market share is the proportion of total sales in a market held by one business, usually shown as a percentage <span class="pt">1</span>; a higher share can bring greater influence and economies of scale <span class="pt">2</span>.`,
     fb:"Proportion-of-market-sales plus the influence/scale benefit."},
    {marks:4, q:"Explain one benefit to a business of setting clear objectives.",
     model:`One benefit is higher motivation <span class="pt">1</span>. This is because staff and managers have clear targets to work towards <span class="pt">2</span>. As a result, effort is focused and decision-making is easier <span class="pt">3</span>, and managers can measure performance against the targets and adjust where needed <span class="pt">4</span>.`,
     fb:"Names a benefit (motivation), explains the clear-targets mechanism and chains to focus and performance measurement."}
  ],
  caseStudy:{
    business:"Primark & Little Dessert Shop",
    intro:`<p>Businesses used in the objectives questions.</p>
      <ul>
        <li><b>Primark</b> — a low-price fast-fashion retailer sourcing from 31 countries, which has made <b>ethical sourcing</b> an objective (a supplier Code of Conduct, 100+ monitoring staff) after past criticism of working conditions.</li>
        <li><b>Little Dessert Shop</b> — a start-up weighing <b>profit</b> as a main objective against quality and customer service.</li>
      </ul>`
  },
  exam:[
    {marks:8, q:"Discuss the importance to Primark of having ethical sourcing as a business objective. (8)", caseImg:"resources/casestudies/cs-1-3-5-3-primark-ethical.png",
     model:`<p><span class="tag t-P">POINT</span>Ethical sourcing is important to Primark because it protects its brand reputation in a competitive clothing market. <span class="tag t-A">APPLY</span>Primark has faced criticism over supply-chain conditions, including child labour and unsafe factories, so adopting ethical sourcing — a supplier Code of Conduct and spot checks — shows it is responding to public concern. <span class="tag t-C">CHAIN</span>This can raise consumer trust and loyalty, especially among ethically-aware younger shoppers, helping Primark protect or grow market share and reducing the risk of boycotts or bad publicity.</p>
     <p><span class="tag t-J">HOWEVER</span>However, ethical sourcing can also raise operating costs. <span class="tag t-A">APPLY</span>Primark must employ over 100 staff to monitor and audit suppliers across 31 countries, and may pass some cost on through higher prices. <span class="tag t-C">CHAIN</span>This could conflict with its cost-leadership strategy of low-priced fashion, so some price-sensitive customers might switch to cheaper rivals — meaning ethical sourcing must be balanced against keeping prices low and volumes high.</p>`,
     fb:"Mr. Akram's exemplar (Primark, 8). Reputation benefit vs cost/cost-leadership conflict, applied with real supply-chain detail."},
    {marks:10, q:"Assess the importance of profit as a main objective for a start-up such as Little Dessert Shop. (10)",
     model:`<p><span class="tag t-P">POINT</span>One benefit of making profit the main objective for Little Dessert Shop is that it gives the owner a clear financial focus. <span class="tag t-C">CHAIN</span>They will aim to keep costs low and boost sales through popular desserts and promotions, so the business is more likely to cover its costs and reinvest. <span class="tag t-A">APPLY</span>A steady profit in year one could fund a second branch or better equipment, supporting long-term growth.</p>
     <p><span class="tag t-J">HOWEVER</span>However, focusing too much on profit may cause short-term thinking, such as cutting corners or neglecting service. <span class="tag t-A">APPLY</span>In a service business like Little Dessert Shop, where customer loyalty is key, using cheaper ingredients to save money could bring poor reviews and reduce repeat sales. <span class="tag t-C">CHAIN</span>So while profit matters, it must be balanced with quality and customer value.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, profit is an important objective because it funds survival and growth for a new business, but for a start-up relying on reputation and repeat custom, success depends on balancing profit with quality and service — so profit should be the focus without sacrificing the customer experience.</p>`,
     fb:"Mr. Akram's exemplar (Little Dessert Shop, 10). Profit as a focus for growth vs the risk of short-term corner-cutting, with a balanced judgement."}
  ],
  resources:[
    {label:"Corporate objectives — lesson notes (PDF)", file:"resources/1-3-5-3-corporate-objectives-notes.pdf"}
  ]
},
{
  code:"1.3.5.4", subtheme:"1.3.5", title:"Business choices",
  business:"Case studies: Ape Snacks, Bambrew & Farmhopping",
  status:"live",
  notes:[
    {h:"Opportunity cost", html:`
      <p>Business resources are <b>scarce</b>, so firms must choose between alternatives — and every choice has a cost. <b>Opportunity cost</b> is the value of the <b>next best alternative given up</b> when a decision is made.</p>
      <p><b>Example:</b> a business with £50m can build a new factory <i>or</i> invest in product development. If it builds the factory, the opportunity cost is the product development it sacrificed. A zoo choosing a new lion attraction over a penguin one gives up the visitors the penguins would have drawn.</p>
      <p>The concept improves <b>decision-making</b>: by assessing each option's financial implications, a firm can pick the better one and knowingly sacrifice the rest. But it is only reliable if the information used — ideally detailed market research — is accurate.</p>`},
    {h:"Trade-offs", html:`
      <p>A <b>trade-off</b> occurs when two objectives cannot be fully achieved at once, so having more of one means having less of another.</p>
      <ul>
        <li><b>Ethics vs profit</b> — acting more ethically (fair wages, sustainable materials) often raises costs and cuts profit, at least in the short term.</li>
        <li><b>Growth vs profit</b> — expanding fast can mean lower short-term profit as money is reinvested.</li>
        <li><b>Price vs quality</b> — cheaper inputs lift margins but can lower quality.</li>
      </ul>
      <p>A trade-off is not always as sharp as it looks: an ethical or social stance can become a <b>USP</b> that attracts loyal customers, so behaving ethically may raise demand and <b>long-term</b> profit rather than reduce it.</p>`}
  ],
  definitions:[
    {term:"Opportunity cost", marks:2, body:`The value of the next best alternative given up when a choice is made <span class="pt">1</span>; it matters because business resources are scarce, so choosing one option means sacrificing another <span class="pt">2</span>.`},
    {term:"Trade-off", marks:2, body:`A situation where two objectives cannot both be fully achieved, so gaining more of one means accepting less of another <span class="pt">1</span>; it is a compromise, such as higher ethics for lower short-term profit <span class="pt">2</span>.`},
    {term:"Scarcity", marks:2, body:`When resources are limited relative to the wants they could satisfy <span class="pt">1</span>; scarcity forces businesses to make choices and therefore incur opportunity costs <span class="pt">2</span>.`},
    {term:"Ethical objective", marks:2, body:`A goal of operating in a morally responsible way, such as fair wages or sustainable sourcing <span class="pt">1</span>; it can raise costs in the short term but build reputation and loyalty over time <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'opportunity cost'.",
     model:`Opportunity cost is the value of the next best alternative given up when a choice is made <span class="pt">1</span>; because resources are scarce, choosing one option means sacrificing another <span class="pt">2</span>.`,
     fb:"Next-best-alternative-forgone plus the scarcity point — two developed points."},
    {marks:2, q:"Define the term 'trade-off'.",
     model:`A trade-off is where two objectives cannot both be fully achieved, so gaining more of one means accepting less of another <span class="pt">1</span>; for example, being more ethical can mean lower short-term profit <span class="pt">2</span>.`,
     fb:"Can't-have-both compromise plus a concrete example."},
    {marks:4, q:"Explain one trade-off a business may face when choosing to act more ethically.",
     model:`Acting more ethically often raises costs <span class="pt">1</span>. This is because fair wages and sustainable materials usually cost more than cheaper alternatives <span class="pt">2</span>. As a result, profit margins may fall in the short term <span class="pt">3</span>, so the business trades some immediate profit for a stronger ethical reputation <span class="pt">4</span>.`,
     fb:"Identifies the ethics-vs-profit trade-off, explains the cost mechanism and chains to the margin sacrifice."}
  ],
  caseStudy:{
    business:"Ape Snacks, Bambrew & Farmhopping",
    intro:`<p>Businesses used in the business-choices questions.</p>
      <ul>
        <li><b>Ape Snacks</b> — founder Zack chose to start the business over finishing university, so the opportunity cost was his degree and alternative career.</li>
        <li><b>Bambrew</b> — a sustainable-packaging firm facing a possible <b>ethics-vs-profit trade-off</b> (fair wages, biodegradable materials vs higher costs).</li>
        <li><b>Farmhopping</b> — an online marketplace whose farmers share its environmental social objectives, weighing those against profit.</li>
      </ul>`
  },
  exam:[
    {marks:6, q:"Explain the opportunity cost to Zack of setting up Ape Snacks. (6)",
     model:`<p><span class="tag t-P">POINT</span>Opportunity cost is the benefit given up when choosing one option over another. <span class="tag t-A">APPLY</span>In Zack's case, choosing to set up Ape Snacks meant the opportunity cost was the benefits of continuing his university education. <span class="tag t-C">CHAIN</span>This could have included earning a degree, gaining qualifications and improving his future career prospects in a more traditional job. <span class="tag t-A">APPLY</span>By focusing on starting the business, he gave up the potential income and experiences completing his studies might have brought — so the opportunity cost of launching Ape Snacks was the value of the opportunities he sacrificed by dropping out.</p>`,
     fb:"Mr. Akram's exemplar (Ape Snacks, 6). Defines opportunity cost and applies it precisely to Zack's university sacrifice with a developed chain."},
    {marks:8, q:"Discuss whether there is likely to be a trade-off between an ethical stance and profit for Bambrew. (8)", caseImg:"resources/casestudies/cs-1-3-5-4-bambrew.png",
     model:`<p><span class="tag t-P">POINT</span>There is likely to be a trade-off between ethics and profit. <span class="tag t-A">APPLY</span>Bambrew pays fair wages to local communities and avoids cheap chemicals, using natural biodegradable materials, which raises production costs and makes its products dearer than plastic alternatives. <span class="tag t-C">CHAIN</span>This lowers profit margins, and some price-sensitive customers may switch to cheaper, less ethical options, so Bambrew could lose sales and find it harder to compete on price.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the trade-off can be questioned if ethics become part of Bambrew's competitive advantage. <span class="tag t-A">APPLY</span>Many environmentally-aware consumers prefer ethical, sustainable products even at a higher price. <span class="tag t-C">CHAIN</span>This can raise demand and build brand loyalty, so its fair treatment of workers and eco-friendly production enhance reputation and attract new customers — meaning ethical behaviour could improve long-term profitability rather than harm it.</p>`,
     fb:"Mr. Akram's exemplar (Bambrew, 8). Trade-off (higher cost/lower margin) vs the case that ethics is a USP raising long-term profit, applied throughout."},
    {marks:10, q:"Assess whether there is a trade-off between social objectives and profit for farmers selling through Farmhopping. (10)", caseImg:"resources/casestudies/cs-1-3-5-4-farmhopping.png",
     model:`<p><span class="tag t-P">POINT</span>There is a potential trade-off between social objectives and profit. <span class="tag t-A">APPLY</span>Farmhopping's social objective is to be environmentally friendly, which its farmers must share — using recyclable packaging, avoiding pesticides and treating animals well. <span class="tag t-C">CHAIN</span>These practices push up farmers' costs, so they may have to charge higher prices, which could reduce demand and profitability if customers buy cheaper goods from supermarkets instead.</p>
     <p><span class="tag t-J">HOWEVER</span>However, there may not be a trade-off, because behaving ethically can attract customers. <span class="tag t-A">APPLY</span>Shoppers who share these values are likely to support the small farms on Farmhopping, and the social objectives create a USP that differentiates them from other retailers. <span class="tag t-C">CHAIN</span>This can raise demand and sales, and caring for the environment and avoiding chemicals may improve the farmland and farmers' income over the longer term.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, whether there is a trade-off depends on the market: if consumers are socially aware and willing to pay for environmental values, social objectives and profit can go together; but if price dominates buying decisions in the industry, the higher costs of farming ethically will reduce profit — so the outcome rests on customer attitudes and how far price drives demand.</p>`,
     fb:"Model answer (Farmhopping, 10), built on the exam board's indicative content. Trade-off (higher costs) vs no-trade-off (USP, loyalty, long-term land benefits), judged on whether consumers value ethics over price."}
  ],
  resources:[
    {label:"Business choices (opportunity cost &amp; trade-offs) — notes (PDF)", file:"resources/1-3-5-5-business-choices-notes.pdf"}
  ]
},
{
  code:"2.3.1.1", subtheme:"2.3.1", title:"Planning",
  business:"Content and uses of a business plan",
  status:"live",
  notes:[
    {h:"What a business plan contains", html:`
      <p>A <b>business plan</b> is a written document that sets out a business idea, its objectives and how they will be achieved. A typical plan includes:</p>
      <ul>
        <li><b>Executive summary</b> — a short overview of the idea and its aims.</li>
        <li><b>The business idea &amp; objectives</b> — what the business does and the SMART targets it is working towards.</li>
        <li><b>Market research &amp; target market</b> — evidence of demand, the customer segment and the competition.</li>
        <li><b>Marketing plan</b> — the planned marketing mix (product, price, place, promotion).</li>
        <li><b>Operations / production plan</b> — how the product or service will be made and delivered, premises, suppliers and staff.</li>
        <li><b>Financial plan</b> — start-up costs, a <b>cash-flow forecast</b>, a <b>break-even</b> calculation, projected profit and the <b>sources of finance</b> required.</li>
      </ul>`},
    {h:"Relevance and uses of a plan", html:`
      <p>A business plan is useful because it:</p>
      <ul>
        <li><b>Helps raise finance</b> — banks and investors usually require a plan before lending or investing, as it shows the idea has been thought through.</li>
        <li><b>Reduces risk</b> — forcing the entrepreneur to research the market and cost the idea helps spot problems before money is committed.</li>
        <li><b>Sets objectives and targets</b> — giving the owner something concrete to measure actual performance against.</li>
        <li><b>Acts as a roadmap</b> — guiding decisions and keeping the business focused as it grows.</li>
      </ul>
      <p><b>Limitations:</b> a plan is built on <b>forecasts</b> that may turn out wrong; it is time-consuming to produce; it can quickly become <b>out of date</b> in a dynamic market; and completing a plan is no guarantee of success.</p>`}
  ],
  definitions:[
    {term:"Business plan", marks:2, body:`A written document setting out a business idea, its objectives and how they will be achieved <span class="pt">1</span>; it is used to raise finance and to guide and measure the business <span class="pt">2</span>.`},
    {term:"Executive summary", marks:2, body:`A short overview at the start of a business plan summarising the idea, aims and key figures <span class="pt">1</span>; it lets a lender or investor grasp the proposal quickly <span class="pt">2</span>.`},
    {term:"Cash-flow forecast", marks:2, body:`A prediction of the money expected to flow into and out of a business over a future period <span class="pt">1</span>; it helps the owner spot when cash might run short <span class="pt">2</span>.`},
    {term:"Objective", marks:2, body:`A specific, measurable target a business sets itself to achieve <span class="pt">1</span>; objectives guide decisions and let performance be judged against them <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'business plan'.",
     model:`A business plan is a written document setting out a business idea, its objectives and how they will be achieved <span class="pt">1</span>; it is used to raise finance and to guide the business <span class="pt">2</span>.`,
     fb:"Written-document-of-idea-and-objectives plus a use (raise finance/guide) — two developed points."},
    {marks:4, q:"Explain one reason why a bank may want to see a business plan before lending.",
     model:`A bank wants to reduce the risk of not being repaid <span class="pt">1</span>. A business plan shows the market research, costs and projected cash flow behind the idea <span class="pt">2</span>. This lets the bank judge whether the business is likely to generate enough cash to repay the loan <span class="pt">3</span>, so it can decide whether to lend and on what terms <span class="pt">4</span>.`,
     fb:"Links the plan to the bank's need to assess repayment risk, with a clear chain."}
  ],
  caseStudy:{
    business:"Start-up business planning",
    intro:`<p>Questions here use a new start-up seeking finance. The plan brings together its market research, marketing mix, operations and — crucially — its financial forecasts (start-up costs, cash flow, break-even and the finance required).</p>`
  },
  exam:[
    {marks:8, q:"Discuss the usefulness of a business plan to an entrepreneur setting up a new business. (8)",
     model:`<p><span class="tag t-P">POINT</span>A business plan is useful because it helps the entrepreneur raise the finance needed to start up. <span class="tag t-A">APPLY</span>A new business usually has no trading record, so a bank or investor relies on the plan's market research and cash-flow forecast to judge the idea. <span class="tag t-C">CHAIN</span>A well-researched plan reassures the lender that the business can repay, making finance more likely and at a lower interest rate, so the entrepreneur can afford the premises and stock needed to launch.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the plan's value depends on how realistic its forecasts are. <span class="tag t-A">APPLY</span>A first-time entrepreneur may overestimate sales or underestimate costs, and in a fast-changing market the assumptions can quickly date. <span class="tag t-C">CHAIN</span>If the plan is over-optimistic it gives false confidence and poor decisions, so a plan is only as useful as the quality of the research behind it — it reduces risk rather than removing it.</p>`,
     fb:"Model answer (indicative content). Finance/risk-reduction benefit vs reliance on realistic forecasts, applied to a start-up throughout."}
  ],
  resources:[]
},
{
  code:"2.3.1.2", subtheme:"2.3.1", title:"Internal finance",
  business:"Owner's capital, retained profit & sale of assets",
  status:"live",
  notes:[
    {h:"Sources of internal finance", html:`
      <p><b>Internal finance</b> is money raised from <i>within</i> the business or from its owners, rather than from outside lenders or investors.</p>
      <ul>
        <li><b>Owner's capital (personal savings)</b> — money the owner puts in themselves. Cheap (no interest) and quick, with no loss of control, but it is limited to what the owner has and puts their own money at risk.</li>
        <li><b>Retained profit</b> — profit kept in the business from previous years rather than paid out to owners. It is free of interest and keeps control, but is only available to established, profitable firms and reduces the return to owners/shareholders.</li>
        <li><b>Sale of assets</b> — selling items the business no longer needs (e.g. spare machinery or property). It raises cash from idle resources, but takes time, there may be nothing spare to sell, and selling essential assets can harm operations (unless sold and leased back).</li>
      </ul>`},
    {h:"Suitability", html:`
      <p>Internal finance suits businesses that want to <b>avoid debt and keep control</b>, and is common for <b>small firms and established, profitable businesses</b>. Its main drawback is that the amounts available are usually <b>limited</b>, so large expansions often still need external finance.</p>`}
  ],
  definitions:[
    {term:"Internal finance", marks:2, body:`Finance raised from within the business or from its owners rather than from outside sources <span class="pt">1</span>; examples include owner's capital, retained profit and sale of assets <span class="pt">2</span>.`},
    {term:"Owner's capital", marks:2, body:`Money the owner invests in the business from their own personal savings <span class="pt">1</span>; it carries no interest and no loss of control but puts the owner's own money at risk <span class="pt">2</span>.`},
    {term:"Retained profit", marks:2, body:`Profit kept in the business from previous years rather than paid out to owners <span class="pt">1</span>; it is a free source of finance but is only available to profitable firms <span class="pt">2</span>.`},
    {term:"Sale of assets", marks:2, body:`Raising cash by selling resources the business no longer needs, such as spare equipment or property <span class="pt">1</span>; it turns idle assets into cash but may take time and reduce capacity if essential assets are sold <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'retained profit'.",
     model:`Retained profit is profit kept in the business from previous years rather than paid out to the owners <span class="pt">1</span>; it is a free internal source of finance <span class="pt">2</span>.`,
     fb:"Profit-kept-not-distributed plus the free/internal point."},
    {marks:4, q:"Explain one advantage of using retained profit rather than a bank loan.",
     model:`One advantage is that retained profit carries no interest <span class="pt">1</span>. Unlike a loan, the business does not have to make repayments with interest added <span class="pt">2</span>. This keeps costs lower and protects cash flow <span class="pt">3</span>, and the business keeps full control as no lender is involved <span class="pt">4</span>.`,
     fb:"Names the advantage (no interest/control), contrasts with a loan and chains to cash flow/control."}
  ],
  caseStudy:{
    business:"Financing from within",
    intro:`<p>Questions here involve a business choosing how to fund growth from its own resources — owner's savings, profit kept back from earlier years, or selling assets it no longer needs — weighed against borrowing externally.</p>`
  },
  exam:[
    {marks:8, q:"Discuss whether a small, profitable business should use retained profit rather than external finance to fund expansion. (8)",
     model:`<p><span class="tag t-P">POINT</span>Using retained profit can be a sensible choice because it is a low-cost source of finance. <span class="tag t-A">APPLY</span>As the business is profitable, it has built up profit from earlier years that can be reinvested without interest or repayments. <span class="tag t-C">CHAIN</span>This protects cash flow and keeps the owners in full control, since no bank or investor is involved, so more of the expansion's returns stay in the business.</p>
     <p><span class="tag t-J">HOWEVER</span>However, retained profit may not be enough on its own. <span class="tag t-A">APPLY</span>A small firm's accumulated profit is limited, and using it all leaves no reserve for emergencies. <span class="tag t-C">CHAIN</span>If the expansion is large, external finance such as a loan may be needed to fund it fully, so the best answer often depends on the size of the expansion and how much profit has actually been retained.</p>`,
     fb:"Model answer (indicative content). Low-cost/control benefit of retained profit vs its limited size, judged on the scale of expansion."},
    {marks:6, q:"Explain two advantages to Tesco of using sale and leaseback as a source of finance. (6)", caseImg:"resources/casestudies/cs-2-3-1-2-tesco-leaseback.png",
     model:`<p><span class="tag t-P">POINT</span>One advantage is that sale and leaseback releases a large amount of cash quickly. <span class="tag t-A">APPLY</span>Tesco raised about &pound;570m by selling a number of its store properties to investors and leasing them back. <span class="tag t-C">CHAIN</span>This gives Tesco immediate funds to improve cash flow and support future investment without taking on additional bank loans or interest.</p>
     <p><span class="tag t-P">POINT</span>A second advantage is that Tesco keeps trading from the same stores. <span class="tag t-A">APPLY</span>Under the agreement it sold the properties but leased them back, so it continues operating from the same prime locations. <span class="tag t-C">CHAIN</span>This means it raises finance from assets it no longer needs to own without disrupting its business or losing valuable sites.</p>`,
     fb:"Model answer (Tesco, 6). Two applied advantages &mdash; cash released and continuing to trade from the same stores. Sale and leaseback = selling an owned asset then renting it back."}
  ],
  resources:[]
},
{
  code:"2.3.1.3", subtheme:"2.3.1", title:"External finance",
  business:"Sources & methods of external finance",
  status:"live",
  notes:[
    {h:"Sources vs methods", html:`
      <p><b>External finance</b> comes from outside the business. It is useful to separate <b>sources</b> (who the money comes from) from <b>methods</b> (the form the finance takes).</p>`},
    {h:"Sources of external finance", html:`
      <ul>
        <li><b>Family and friends</b> — often cheap and flexible, but can strain relationships if the business struggles.</li>
        <li><b>Banks</b> — the main source for most firms, offering loans and overdrafts, but they charge interest and may require security.</li>
        <li><b>Peer-to-peer (P2P) funding</b> — borrowing from individuals through an online platform, often faster than a bank.</li>
        <li><b>Business angels</b> — wealthy individuals who invest their own money in return for a share of the business, often bringing expertise.</li>
        <li><b>Crowdfunding</b> — raising small amounts from many people online; good for publicity but it may fail to reach its target.</li>
        <li><b>Other businesses</b> — investment from another company, sometimes as part of a partnership or takeover.</li>
      </ul>`},
    {h:"Methods of external finance", html:`
      <ul>
        <li><b>Loans</b> — a fixed sum repaid with interest over time; predictable but adds a long-term cost.</li>
        <li><b>Share capital</b> — selling shares to investors; no repayment, but owners give up some control and a share of profits.</li>
        <li><b>Venture capital</b> — investment in higher-risk, high-growth firms in return for a stake and often a say in the business.</li>
        <li><b>Overdrafts</b> — a flexible facility to spend more than is in the account; good for short-term cash gaps but expensive if used heavily.</li>
        <li><b>Leasing</b> — renting an asset rather than buying it; spreads the cost but costs more overall than buying.</li>
        <li><b>Trade credit</b> — paying suppliers after an agreed period (e.g. 30 days); eases cash flow but missing payment damages relationships.</li>
      </ul>`},
    {h:"Suitability", html:`
      <p>The right choice depends on the <b>amount</b> needed, how <b>long</b> it is needed for, the <b>cost</b>, the business's <b>legal form</b> (only companies can sell shares) and whether the owner is willing to give up <b>control</b>. Short-term cash gaps suit overdrafts or trade credit; long-term investment suits loans or share capital.</p>`}
  ],
  definitions:[
    {term:"External finance", marks:2, body:`Finance raised from outside the business, such as from banks or investors <span class="pt">1</span>; it can provide larger sums than internal finance but usually has a cost or involves giving up some control <span class="pt">2</span>.`},
    {term:"Share capital", marks:2, body:`Money raised by selling shares in the company to investors <span class="pt">1</span>; it does not have to be repaid, but owners give up a share of profit and some control <span class="pt">2</span>.`},
    {term:"Venture capital", marks:2, body:`Finance invested in higher-risk, high-growth businesses in return for a share of the business <span class="pt">1</span>; investors often also provide expertise and expect a say in decisions <span class="pt">2</span>.`},
    {term:"Overdraft", marks:2, body:`An arrangement allowing a business to spend more than is in its bank account up to a limit <span class="pt">1</span>; it is flexible for short-term cash gaps but charges a high rate of interest <span class="pt">2</span>.`},
    {term:"Leasing", marks:2, body:`Renting an asset over a period instead of buying it outright <span class="pt">1</span>; it avoids a large upfront cost but works out more expensive over time than purchasing <span class="pt">2</span>.`},
    {term:"Trade credit", marks:2, body:`An agreement to pay a supplier a set period after receiving goods, such as 30 days <span class="pt">1</span>; it eases short-term cash flow but late payment can damage supplier relationships <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'share capital'.",
     model:`Share capital is money raised by selling shares in the company to investors <span class="pt">1</span>; it does not have to be repaid but means giving up a share of profit and control <span class="pt">2</span>.`,
     fb:"Money-from-selling-shares plus the no-repayment/loss-of-control point."},
    {marks:2, q:"Define the term 'trade credit'.",
     model:`Trade credit is an agreement to pay a supplier a set period after receiving goods, such as 30 days <span class="pt">1</span>; it helps short-term cash flow <span class="pt">2</span>.`,
     fb:"Pay-supplier-later plus the cash-flow benefit."},
    {marks:4, q:"Explain one reason why an overdraft may suit a business with a short-term cash shortage.",
     model:`An overdraft is flexible <span class="pt">1</span>. The business can draw on it only when it needs to and repay it quickly when cash comes in <span class="pt">2</span>. This covers a short gap, such as paying wages before customers pay <span class="pt">3</span>, and interest is only charged on the amount actually used <span class="pt">4</span>.`,
     fb:"Flexibility/short-term fit, with a cash-gap example and the interest-only-on-use point."}
  ],
  caseStudy:{
    business:"Choosing external finance",
    intro:`<p>Questions here ask a business to choose a source or method of external finance for a specific situation — a short-term cash gap, buying equipment, or funding a large expansion — weighing cost, time, control and the firm's legal form.</p>`
  },
  exam:[
    {marks:10, q:"Assess the most appropriate method of finance for a private limited company (Ltd) wanting to fund a large, long-term expansion. (10)",
     model:`<p><span class="tag t-P">POINT</span>A bank loan could be appropriate for funding the expansion. <span class="tag t-A">APPLY</span>As an established Ltd, the company can offer security and a trading record, so a bank is likely to lend a large sum repayable over several years. <span class="tag t-C">CHAIN</span>This matches long-term finance to a long-term asset, and repayments are predictable, so the owners keep full control of the company while spreading the cost.</p>
     <p><span class="tag t-J">HOWEVER</span>However, selling more share capital may be better for a very large expansion. <span class="tag t-A">APPLY</span>As a private limited company it can issue shares to new investors without a public flotation. <span class="tag t-C">CHAIN</span>Share capital does not have to be repaid and avoids adding interest costs, which protects cash flow, although existing owners give up a share of profit and some control.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the most appropriate method depends on how much control the owners are willing to give up and the size of the sum: a loan suits a manageable amount where owners want to keep control, while share capital suits a very large expansion where adding debt and interest would strain cash flow.</p>`,
     fb:"Model answer (indicative content). Loan (control, matched term) vs share capital (no repayment, but dilutes control), judged on size and control preference."},
    {marks:10, q:"Assess the importance to The Posh Pasty Company of using crowd funding as its main source of finance. (10)", caseImg:"resources/casestudies/cs-2-3-1-3-posh-pasty.png",
     model:`<p><span class="tag t-P">POINT</span>One reason crowd funding is important is that it lets a small business raise capital without relying on traditional loans. <span class="tag t-C">CHAIN</span>Platforms like Crowdfunder.co.uk let many individuals invest small amounts based on the idea or passion behind the business. <span class="tag t-A">APPLY</span>The Posh Pasty Company was able to raise the money to rent and equip a small factory in Fowey without meeting strict bank lending criteria, so it could start quickly as a new venture with lower financial pressure &mdash; freeing James and Holly to focus on quality and growth.</p>
     <p><span class="tag t-P">POINT</span>Another reason it matters is that it generates interest and support from the public. <span class="tag t-C">CHAIN</span>People who invest often feel emotionally connected to the brand and may become loyal customers. <span class="tag t-A">APPLY</span>The company gains a ready-made customer base in southern England, where its premium pasties sell to delicatessens and cafes, so crowd funding acts as both finance and marketing, building brand awareness and repeat sales from the start.</p>
     <p><span class="tag t-J">HOWEVER</span>However, relying heavily on crowd funding carries risks. <span class="tag t-A">APPLY</span>If a campaign fails to attract enough backers the business may receive no funding, so James and Holly might struggle to expand or maintain operations as needs grow. <span class="tag t-C">CHAIN</span>Depending only on crowd funding can limit future scalability &mdash; missed chances to upgrade equipment or open a second site &mdash; and slow growth if other sources are not considered.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, crowd funding has been very important to The Posh Pasty Company, especially early on when traditional finance was hard to access: it let the business start, build loyalty and keep control. But continued success depends on attracting enough investment in future campaigns, so it is recommended that the company combine crowd funding with other sources, such as reinvested profit, to reduce risk and support long-term growth.</p>`,
     fb:"Mr. Akram's exemplar (The Posh Pasty Company, 10). Crowd funding as low-pressure start-up finance and a marketing tool, balanced against its risks, with a supported recommendation."},
    {marks:20, q:"Assess whether the external sources of finance used by Unilever were the most appropriate for funding its expansion into the Indian market. (20)", caseImg:"resources/casestudies/cs-2-3-1-3-unilever-horlicks.png",
     model:`<p><span class="tag t-P">POINT</span>Using equity finance was appropriate because it avoided adding large debt. <span class="tag t-A">APPLY</span>The GSK Horlicks deal was worth about $3.8bn, and Unilever funded it partly by issuing shares and changing its ownership structure rather than relying only on bank loans. <span class="tag t-C">CHAIN</span>Equity does not have to be repaid and carries no interest, so Unilever protected its cash flow for day-to-day operations across 190 countries. <span class="tag t-J">NOW JUDGE</span>For a deal of this size this is significant, as heavy borrowing could have strained finances if the Indian expansion took time to pay off.</p>
     <p><span class="tag t-J">HOWEVER</span>However, issuing shares dilutes existing shareholders. <span class="tag t-A">APPLY</span>Some investors questioned whether new shares weakened their control and share of future profits. <span class="tag t-C">CHAIN</span>If enough shareholders object, it can be harder to raise equity again and may pressure the board. <span class="tag t-J">NOW JUDGE</span>This matters, but for an established multinational the dilution from one acquisition is likely small relative to the strategic gain.</p>
     <p><span class="tag t-P">POINT</span>Equity also suited the strategic, long-term nature of the investment. <span class="tag t-A">APPLY</span>Horlicks already had strong brand recognition and an established customer base in a fast-growing market with rising incomes and health awareness. <span class="tag t-C">CHAIN</span>Long-term equity matches a long-term asset like a brand, whereas a loan would demand fixed repayments before the acquisition generated returns. <span class="tag t-J">NOW JUDGE</span>This fit between the finance and the investment strengthens the case for equity over debt.</p>
     <p><span class="tag t-J">HOWEVER</span>Alternatives could have been cheaper or simpler. <span class="tag t-A">APPLY</span>As a highly profitable multinational, Unilever may have had internal funds or access to low-cost debt. <span class="tag t-C">CHAIN</span>Using some debt could have kept more control with existing owners, and in a low-interest period the cost might have been manageable. <span class="tag t-J">NOW JUDGE</span>So equity was not the only option; a blend of debt and internal funds might have reduced dilution.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the external equity-based finance was appropriate for a $3.8bn, long-term acquisition because it protected cash flow and matched the strategic investment, and the dilution was modest for a business of Unilever's size. The best answer, though, is likely a <b>balance</b>: using equity to avoid excessive debt while adding some low-cost borrowing or internal funds to limit dilution &mdash; so the external sources were appropriate, but not necessarily optimal on their own. It depends on interest rates at the time and how quickly the Indian expansion delivers returns.</p>`,
     fb:"Model answer (indicative content, 20). Equity/ownership-change finance vs debt and internal funds for a large acquisition, judged on control, cost, risk and the fit with a long-term investment."}
  ],
  resources:[]
},
{
  code:"2.3.1.4", subtheme:"2.3.1", title:"Forms of business",
  business:"Sole trader, partnership, Ltd, franchise & plc",
  status:"live",
  notes:[
    {h:"Unincorporated businesses", html:`
      <ul>
        <li><b>Sole trader</b> — one person owns and runs the business. Easy and cheap to set up, full control and keeps all profit, but has <b>unlimited liability</b>, can struggle to raise finance and faces heavy workload and risk.</li>
        <li><b>Partnership</b> — two or more owners share capital, skills and decisions. More finance and expertise than a sole trader, but profits are shared, decisions can cause disputes, and most partners have <b>unlimited liability</b>.</li>
      </ul>`},
    {h:"Incorporated businesses", html:`
      <ul>
        <li><b>Private limited company (Ltd)</b> — a separate legal entity owned by shareholders, whose shares cannot be sold to the public. Offers <b>limited liability</b> and easier access to finance, but involves more paperwork, legal duties and some loss of privacy.</li>
        <li><b>Public limited company (plc)</b> — a large company that can sell shares to the public on the <b>stock market</b> (a <b>flotation</b>). This can raise very large sums, but brings high costs, public scrutiny and the risk of losing control through a takeover.</li>
      </ul>`},
    {h:"Other forms", html:`
      <ul>
        <li><b>Franchising</b> — a franchisee buys the right to trade under an established brand's name and system. Lower risk and a known brand, but fees and royalties are paid and there is little independence.</li>
        <li><b>Social enterprise</b> — a business that trades to achieve a social or environmental aim, reinvesting most profit into that cause.</li>
        <li><b>Lifestyle business</b> — run to suit the owner's chosen way of life rather than to maximise growth or profit.</li>
        <li><b>Online business</b> — trades mainly over the internet, with low start-up costs and wide reach but intense competition.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Sole trader", marks:2, body:`A business owned and run by one person who keeps all the profit <span class="pt">1</span>; it is simple to set up but the owner has unlimited liability <span class="pt">2</span>.`},
    {term:"Partnership", marks:2, body:`A business owned by two or more people who share capital, decisions and profit <span class="pt">1</span>; it brings more finance and skills but usually unlimited liability and shared control <span class="pt">2</span>.`},
    {term:"Private limited company (Ltd)", marks:2, body:`An incorporated business owned by shareholders whose shares cannot be sold to the public <span class="pt">1</span>; it gives owners limited liability as a separate legal entity <span class="pt">2</span>.`},
    {term:"Public limited company (plc)", marks:2, body:`A company whose shares can be bought and sold by the public on the stock market <span class="pt">1</span>; flotation can raise large sums but brings public scrutiny and takeover risk <span class="pt">2</span>.`},
    {term:"Franchising", marks:2, body:`Buying the right to trade under an established business's brand name and systems <span class="pt">1</span>; it lowers risk but fees and royalties are paid and independence is limited <span class="pt">2</span>.`},
    {term:"Social enterprise", marks:2, body:`A business that trades mainly to achieve a social or environmental aim, reinvesting most of its profit into that cause <span class="pt">1</span>; profit is a means to the mission rather than the main goal <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'sole trader'.",
     model:`A sole trader is a business owned and run by one person who keeps all the profit <span class="pt">1</span>; it is simple to set up but the owner has unlimited liability <span class="pt">2</span>.`,
     fb:"One-owner-keeps-profit plus the unlimited-liability point."},
    {marks:2, q:"Define the term 'franchising'.",
     model:`Franchising is buying the right to trade under an established business's brand name and systems <span class="pt">1</span>; it lowers risk but fees and royalties must be paid <span class="pt">2</span>.`,
     fb:"Trade-under-established-brand plus the fees/lower-risk point."},
    {marks:4, q:"Explain one benefit to a growing business of becoming a private limited company (Ltd).",
     model:`One benefit is limited liability <span class="pt">1</span>. As a separate legal entity, the owners' personal assets are protected if the company cannot pay its debts <span class="pt">2</span>. This reduces the owners' personal risk as the business grows <span class="pt">3</span>, and makes it easier to attract investors and finance <span class="pt">4</span>.`,
     fb:"Names the benefit (limited liability), explains separate legal entity and chains to reduced risk/finance."}
  ],
  caseStudy:{
    business:"Choosing a form of business",
    intro:`<p>Questions here involve a business choosing or changing its legal form — for example a sole trader becoming an Ltd, or an Ltd floating as a plc — weighing liability, finance, control and cost.</p>`
  },
  exam:[
    {marks:10, q:"Assess whether a successful sole trader should change to a private limited company (Ltd). (10)",
     model:`<p><span class="tag t-P">POINT</span>Changing to an Ltd would give the owner limited liability. <span class="tag t-A">APPLY</span>As a sole trader they currently risk their personal assets, such as their home, if the business fails. <span class="tag t-C">CHAIN</span>Becoming a separate legal entity protects these assets and makes it easier to raise finance by selling shares, which could fund further growth.</p>
     <p><span class="tag t-J">HOWEVER</span>However, incorporation has drawbacks. <span class="tag t-A">APPLY</span>An Ltd must publish accounts, file more paperwork and meet legal duties, and the owner may have to share control with other shareholders. <span class="tag t-C">CHAIN</span>This reduces privacy and independence and adds cost, which a small, stable business may not need.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the change is worthwhile if the owner wants to grow, raise finance and protect personal assets; but if the business is small, low-risk and the owner values simplicity and control, remaining a sole trader may be the better choice.</p>`,
     fb:"Model answer (indicative content). Limited liability/finance benefits vs cost, paperwork and loss of control, judged on growth ambition and risk."},
    {marks:6, q:"Analyse two possible benefits of Amer floating Regal Foods on the stock exchange. (6)", caseImg:"resources/casestudies/cs-2-3-1-4-regal-foods.png",
     model:`<p><span class="tag t-P">POINT</span>One benefit is that flotation raises a large amount of capital. <span class="tag t-A">APPLY</span>By floating on the London Stock Exchange in 2009, Regal Foods issued shares to the public, raising millions in capital. <span class="tag t-C">CHAIN</span>This money can fund Amer's vision of manufacturing a wider product range and expanding internationally into the EU, supporting the growth objective.</p>
     <p><span class="tag t-P">POINT</span>A second benefit is a higher profile and credibility. <span class="tag t-A">APPLY</span>Becoming a plc helped Regal Foods get its products stocked by major supermarkets such as Tesco, Asda-Walmart and Wm Morrison. <span class="tag t-C">CHAIN</span>Greater visibility and trust make it easier to win retail listings and customers, helping the brand establish itself quickly across Europe.</p>`,
     fb:"Model answer (Regal Foods, 6). Two applied benefits of flotation &mdash; large capital for expansion, and profile/credibility that wins retail listings."},
    {marks:10, q:"Assess the benefits for Regal Foods of using its retained profits of $500,000 as a source of finance for expansion into Europe. (10)", caseImg:"resources/casestudies/cs-2-3-1-4-regal-foods.png",
     model:`<p><span class="tag t-P">POINT</span>Using retained profit is a low-cost way to fund the expansion. <span class="tag t-A">APPLY</span>Regal Foods has $500,000 of retained profit that Amer is in favour of reinvesting. <span class="tag t-C">CHAIN</span>Unlike a loan it carries no interest or repayments, and unlike issuing more shares it does not dilute ownership, so the company keeps control and protects its cash flow while expanding into Europe.</p>
     <p><span class="tag t-J">HOWEVER</span>However, $500,000 may not be enough for an international expansion. <span class="tag t-A">APPLY</span>Entering new European markets can be costly, and as a plc Regal Foods has other finance options available. <span class="tag t-C">CHAIN</span>Relying only on retained profit also has an opportunity cost &mdash; the money cannot be used elsewhere or returned to shareholders as dividends, which could disappoint investors.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, retained profit is a sensible first source because it is free and keeps control, and it suits funding part of the expansion. But for a large European expansion Regal Foods should probably combine it with external finance such as share capital or a loan &mdash; so the benefit depends on the scale of the expansion and how much it actually costs.</p>`,
     fb:"Model answer (Regal Foods, 10). Retained profit (free, keeps control) vs its limited size and opportunity cost, judged against combining it with external finance."}
  ],
  resources:[]
},
{
  code:"2.3.1.5", subtheme:"2.3.1", title:"Liability",
  business:"Limited vs unlimited liability",
  status:"live",
  notes:[
    {h:"Limited vs unlimited liability", html:`
      <p><b>Liability</b> is the legal responsibility for a business's debts.</p>
      <ul>
        <li><b>Unlimited liability</b> — the owner and the business are legally the same, so the owner is personally responsible for all debts. If the business cannot pay, the owner's personal assets (home, savings) can be taken. This applies to <b>sole traders</b> and most <b>partnerships</b>.</li>
        <li><b>Limited liability</b> — the business is a separate legal entity, so owners can only lose the money they invested. Personal assets are protected. This applies to <b>Ltd</b> and <b>plc</b> companies.</li>
      </ul>`},
    {h:"Advantages and disadvantages", html:`
      <p><b>Limited liability</b> reduces the owners' personal risk, encourages investment and makes raising finance easier — but requires incorporation, more paperwork and public accounts.</p>
      <p><b>Unlimited liability</b> is simpler and keeps affairs private and fully controlled — but exposes the owner's personal wealth, which can deter risk-taking and make lenders cautious.</p>`},
    {h:"Finance appropriate to each", html:`
      <p>An <b>unlimited liability</b> business (sole trader/partnership) tends to rely on <b>internal finance</b>, bank loans and overdrafts, as it cannot sell shares. A <b>limited liability</b> business (Ltd/plc) can also raise <b>share capital</b> and venture capital, giving it access to larger sums for growth.</p>`}
  ],
  definitions:[
    {term:"Liability", marks:2, body:`The legal responsibility for a business's debts <span class="pt">1</span>; whether it is limited or unlimited determines how much the owners can personally lose <span class="pt">2</span>.`},
    {term:"Unlimited liability", marks:2, body:`Where the owner is personally responsible for all the business's debts <span class="pt">1</span>; their personal assets can be taken if the business cannot pay <span class="pt">2</span>.`},
    {term:"Limited liability", marks:2, body:`Where owners can only lose the money they have invested in the business <span class="pt">1</span>; their personal assets are protected because the company is a separate legal entity <span class="pt">2</span>.`},
    {term:"Incorporation", marks:2, body:`The process of making a business a separate legal entity from its owners <span class="pt">1</span>; it gives the owners limited liability but brings legal duties such as publishing accounts <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'limited liability'.",
     model:`Limited liability is where owners can only lose the money they have invested in the business <span class="pt">1</span>; their personal assets are protected as the company is a separate legal entity <span class="pt">2</span>.`,
     fb:"Lose-only-what-you-invest plus the separate-legal-entity point."},
    {marks:2, q:"Define the term 'unlimited liability'.",
     model:`Unlimited liability is where the owner is personally responsible for all the business's debts <span class="pt">1</span>; their personal assets can be taken if the business cannot pay <span class="pt">2</span>.`,
     fb:"Owner-liable-for-all-debts plus the personal-assets-at-risk point."},
    {marks:4, q:"Explain one way limited liability may encourage someone to invest in a company.",
     model:`Limited liability caps the investor's risk <span class="pt">1</span>. They can only lose the amount they put in, not their personal assets <span class="pt">2</span>. This makes investing far less risky <span class="pt">3</span>, so people are more willing to buy shares and provide finance for the company to grow <span class="pt">4</span>.`,
     fb:"Capped risk → willingness to invest, with a clear chain to finance."}
  ],
  caseStudy:{
    business:"Liability and risk",
    intro:`<p>Questions here involve how the choice between limited and unlimited liability affects an owner's personal risk and the finance a business can raise.</p>`
  },
  exam:[
    {marks:8, q:"Discuss the implications of unlimited liability for the owner of a sole trader business. (8)",
     model:`<p><span class="tag t-P">POINT</span>Unlimited liability exposes the owner to serious personal financial risk. <span class="tag t-A">APPLY</span>As a sole trader is not a separate legal entity, the owner is responsible for all the business's debts. <span class="tag t-C">CHAIN</span>If the business fails owing money, creditors can claim the owner's personal assets such as their home or savings, which could leave them personally bankrupt.</p>
     <p><span class="tag t-J">HOWEVER</span>However, unlimited liability is not only a drawback. <span class="tag t-A">APPLY</span>Being a sole trader keeps set-up simple, private and fully under the owner's control, and lenders may see the owner's personal commitment positively. <span class="tag t-C">CHAIN</span>For a small, low-risk business the chance of large debts is limited, so the simplicity may outweigh the risk — though as the business grows, the case for incorporating to gain limited liability becomes stronger.</p>`,
     fb:"Model answer (indicative content). Personal-asset risk of unlimited liability vs the simplicity/control of a sole trader, judged on business size and risk."}
  ],
  resources:[]
},
{
  code:"2.3.2.1", subtheme:"2.3.2", title:"Sales, revenue & costs",
  business:"Calculating revenue, costs & ways to improve sales",
  status:"live",
  notes:[
    {h:"Revenue and costs", html:`
      <p><b>Sales volume</b> is the number of units sold; <b>sales revenue</b> is the money they bring in.</p>
      <ul>
        <li><b>Sales revenue = selling price &times; quantity sold</b></li>
        <li><b>Fixed costs</b> — costs that do not change with output (e.g. rent, salaries, insurance).</li>
        <li><b>Variable costs</b> — costs that rise and fall with output (e.g. raw materials). <b>Total variable cost = variable cost per unit &times; output</b>.</li>
        <li><b>Total costs = fixed costs + total variable costs</b></li>
        <li><b>Average cost = total cost &divide; output</b></li>
      </ul>
      <p><b>Worked example:</b> price &pound;20, 500 units sold &rarr; revenue = 20 &times; 500 = <b>&pound;10,000</b>. If fixed costs are &pound;3,000 and variable cost is &pound;8/unit, total cost = 3,000 + (8 &times; 500) = &pound;7,000, so average cost = 7,000 &divide; 500 = <b>&pound;14</b>.</p>`},
    {h:"Improving sales volume and revenue", html:`
      <ul>
        <li><b>Volume</b> — better promotion, lower price (if demand is price-elastic), wider distribution, improved product or customer service.</li>
        <li><b>Revenue</b> — raising price (if demand is price-inelastic), selling more units, encouraging repeat/larger purchases, or adding higher-value products.</li>
      </ul>
      <p>The right tactic depends on <b>price elasticity of demand</b>: cutting price raises revenue only if demand is elastic.</p>`}
  ],
  definitions:[
    {term:"Sales revenue", marks:2, body:`The money a business earns from selling its products, calculated as selling price &times; quantity sold <span class="pt">1</span>; it is the starting figure from which costs are deducted to find profit <span class="pt">2</span>.`},
    {term:"Fixed costs", marks:2, body:`Costs that do not change with the level of output, such as rent and salaries <span class="pt">1</span>; they must be paid even if nothing is produced <span class="pt">2</span>.`},
    {term:"Variable costs", marks:2, body:`Costs that rise and fall directly with output, such as raw materials <span class="pt">1</span>; total variable cost = variable cost per unit &times; output <span class="pt">2</span>.`},
    {term:"Total costs", marks:2, body:`The sum of fixed and total variable costs at a given level of output <span class="pt">1</span>; comparing total cost with revenue shows whether a profit is made <span class="pt">2</span>.`},
    {term:"Average cost", marks:2, body:`The cost of producing one unit, calculated as total cost &divide; output <span class="pt">1</span>; it usually falls as output rises and fixed costs are spread over more units <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'fixed costs'.",
     model:`Fixed costs are costs that do not change with the level of output, such as rent <span class="pt">1</span>; they must be paid even if nothing is produced <span class="pt">2</span>.`,
     fb:"Don't-change-with-output plus the paid-even-at-zero point."},
    {marks:2, q:"A business sells 800 units at &pound;15 each. Calculate its sales revenue.",
     model:`Sales revenue = selling price &times; quantity = &pound;15 &times; 800 = <b>&pound;12,000</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"Correct formula applied; 15 × 800 = £12,000."},
    {marks:4, q:"A firm has fixed costs of &pound;4,000, variable costs of &pound;6 per unit and makes 1,000 units. Calculate its total cost and average cost.",
     model:`Total variable cost = &pound;6 &times; 1,000 = &pound;6,000 <span class="pt">1</span>. Total cost = &pound;4,000 + &pound;6,000 = <b>&pound;10,000</b> <span class="pt">2</span>. Average cost = &pound;10,000 &divide; 1,000 = <b>&pound;10</b> <span class="pt">3</span><span class="pt">4</span>.`,
     fb:"Variable cost, total cost, then average cost — each step shown."}
  ],
  caseStudy:{
    business:"Revenue and cost calculations",
    intro:`<p>Questions here test calculating revenue, total and average costs, and judging how a business could raise its sales volume or revenue given its market.</p>`
  },
  exam:[
    {marks:8, q:"Assess the best way for a business to increase its sales revenue. (8)",
     model:`<p><span class="tag t-P">POINT</span>One way to increase revenue is to lower the price. <span class="tag t-A">APPLY</span>If the product has many substitutes, demand is likely to be price-elastic. <span class="tag t-C">CHAIN</span>A lower price then attracts proportionately more buyers, so the rise in quantity sold outweighs the lower price per unit and total revenue increases.</p>
     <p><span class="tag t-J">HOWEVER</span>However, cutting price does not always raise revenue. <span class="tag t-A">APPLY</span>If demand is price-inelastic — for example a product with a strong brand and few substitutes — a lower price reduces revenue per unit without winning many extra sales. <span class="tag t-C">CHAIN</span>Here, raising price or adding value through better quality or promotion would lift revenue instead.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the best method depends on the price elasticity of demand: price cuts suit elastic products, while branding, quality and promotion suit inelastic ones — so the business must know its market before deciding.</p>`,
     fb:"Model answer (indicative content). Price cut (elastic) vs value/price rise (inelastic), judged on price elasticity of demand."}
  ],
  resources:[]
},
{
  code:"2.3.2.2", subtheme:"2.3.2", title:"Sales forecasting",
  business:"Purpose, factors & difficulties of forecasting sales",
  status:"live",
  notes:[
    {h:"Purpose of sales forecasts", html:`
      <p>A <b>sales forecast</b> estimates future sales volumes and revenue. It helps a business <b>plan</b>: ordering the right stock, scheduling staff and production, preparing cash-flow forecasts and setting budgets and targets.</p>`},
    {h:"Factors affecting sales forecasts", html:`
      <ul>
        <li><b>Consumer trends</b> — changing tastes, fashions and lifestyles (e.g. a shift to healthier or more sustainable products).</li>
        <li><b>Economic variables</b> — incomes, interest rates, unemployment and the business cycle all affect how much customers will spend.</li>
        <li><b>Actions of competitors</b> — a rival's new product, price cut or marketing campaign can take sales the forecast assumed.</li>
      </ul>`},
    {h:"Difficulties of forecasting", html:`
      <p>Forecasts are <b>estimates</b> and can be wrong because the future is uncertain: unexpected events, changing trends and competitor moves are hard to predict, and past data may not repeat. The further ahead the forecast, and the more <b>dynamic</b> the market, the less reliable it becomes.</p>`}
  ],
  definitions:[
    {term:"Sales forecast", marks:2, body:`An estimate of a business's future sales volume and revenue over a period <span class="pt">1</span>; it is used to plan stock, staffing, cash flow and budgets <span class="pt">2</span>.`},
    {term:"Consumer trends", marks:2, body:`Patterns in how customers' tastes and buying habits change over time <span class="pt">1</span>; they affect demand and so must be built into a sales forecast <span class="pt">2</span>.`},
    {term:"Economic variables", marks:2, body:`Factors such as incomes, interest rates and the business cycle that affect spending <span class="pt">1</span>; changes in them can make a forecast too high or too low <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'sales forecast'.",
     model:`A sales forecast is an estimate of a business's future sales volume and revenue <span class="pt">1</span>; it is used to plan stock, staffing and cash flow <span class="pt">2</span>.`,
     fb:"Estimate-of-future-sales plus a planning use."},
    {marks:4, q:"Explain one factor that could make a sales forecast inaccurate.",
     model:`One factor is the actions of competitors <span class="pt">1</span>. A rival may launch a new product or cut its prices <span class="pt">2</span>. This can take away sales the forecast had assumed the business would make <span class="pt">3</span>, so actual sales come in below the forecast <span class="pt">4</span>.`,
     fb:"Names a factor (competitor action) and chains to why actual sales differ."}
  ],
  caseStudy:{
    business:"Forecasting future sales",
    intro:`<p>Questions here involve a business relying on a sales forecast to plan — and judging how useful that forecast is given consumer trends, the economy and competitors.</p>`
  },
  exam:[
    {marks:10, q:"Assess the usefulness of sales forecasting to a business operating in a fast-changing market. (10)",
     model:`<p><span class="tag t-P">POINT</span>Sales forecasting is useful because it supports planning. <span class="tag t-A">APPLY</span>A business in a fast-changing market still needs to order stock, schedule staff and prepare a cash-flow forecast. <span class="tag t-C">CHAIN</span>A forecast gives a basis for these decisions, helping avoid both stock-outs that lose sales and over-ordering that ties up cash.</p>
     <p><span class="tag t-J">HOWEVER</span>However, in a fast-changing market a forecast can quickly become inaccurate. <span class="tag t-A">APPLY</span>Consumer trends shift, competitors launch new products and economic conditions change, none of which past data reliably predicts. <span class="tag t-C">CHAIN</span>If the business plans around a forecast that proves wrong, it may hold the wrong stock or staffing, so the forecast must be treated with caution and updated often.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, forecasting is still worthwhile as a planning tool, but in a dynamic market its value depends on using up-to-date data, building in flexibility and not relying on it too heavily — it guides decisions rather than guaranteeing outcomes.</p>`,
     fb:"Model answer (indicative content). Planning benefit vs unreliability in a dynamic market, judged on how the forecast is used."}
  ],
  resources:[]
},
{
  code:"2.3.2.3", subtheme:"2.3.2", title:"Break-even",
  business:"Contribution, break-even & margin of safety",
  status:"live",
  notes:[
    {h:"Contribution and break-even", html:`
      <p><b>Contribution per unit</b> is what each sale contributes towards fixed costs and then profit.</p>
      <ul>
        <li><b>Contribution per unit = selling price &minus; variable cost per unit</b></li>
        <li><b>Break-even output = total fixed costs &divide; contribution per unit</b></li>
      </ul>
      <p>At the <b>break-even point</b>, total revenue exactly equals total costs — no profit, no loss.</p>
      <p><b>Worked example:</b> price &pound;25, variable cost &pound;15, fixed costs &pound;5,000. Contribution = 25 &minus; 15 = &pound;10. Break-even = 5,000 &divide; 10 = <b>500 units</b>.</p>`},
    {h:"Margin of safety & charts", html:`
      <p><b>Margin of safety = actual (or budgeted) output &minus; break-even output.</b> It shows how far sales can fall before the business makes a loss. In the example, if the firm sells 800 units the margin of safety is 800 &minus; 500 = <b>300 units</b>.</p>
      <p>On a <b>break-even chart</b>, the total revenue line crosses the total cost line at the break-even point; the gap between them beyond that point is profit, and before it, loss.</p>`},
    {h:"Limitations of break-even", html:`
      <ul>
        <li>Assumes everything produced is <b>sold</b> and that price and costs stay constant.</li>
        <li>Ignores that costs and selling price can change at different output levels.</li>
        <li>It is only as accurate as the <b>data</b> used, which may be estimated.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Contribution per unit", marks:2, body:`The selling price of a unit minus its variable cost <span class="pt">1</span>; it is the amount each sale contributes towards fixed costs and then profit <span class="pt">2</span>.`},
    {term:"Break-even point", marks:2, body:`The level of output at which total revenue exactly equals total costs, so there is neither profit nor loss <span class="pt">1</span>; it is found by dividing fixed costs by contribution per unit <span class="pt">2</span>.`},
    {term:"Margin of safety", marks:2, body:`The difference between actual (or planned) output and the break-even output <span class="pt">1</span>; it shows how far sales can fall before the business starts making a loss <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'contribution per unit'.",
     model:`Contribution per unit is the selling price of a unit minus its variable cost <span class="pt">1</span>; it is what each sale contributes to fixed costs and then profit <span class="pt">2</span>.`,
     fb:"Price-minus-variable-cost plus the towards-fixed-costs point."},
    {marks:4, q:"A product sells for &pound;30 with variable costs of &pound;18 per unit. Fixed costs are &pound;6,000. Calculate the break-even output.",
     model:`Contribution per unit = &pound;30 &minus; &pound;18 = &pound;12 <span class="pt">1</span><span class="pt">2</span>. Break-even = fixed costs &divide; contribution = &pound;6,000 &divide; &pound;12 = <b>500 units</b> <span class="pt">3</span><span class="pt">4</span>.`,
     fb:"Contribution (£12) then break-even (500 units) — both steps shown."},
    {marks:2, q:"A firm breaks even at 400 units and plans to sell 650. Calculate its margin of safety.",
     model:`Margin of safety = planned output &minus; break-even = 650 &minus; 400 = <b>250 units</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"Correct subtraction: 650 − 400 = 250 units."}
  ],
  caseStudy:{
    business:"Break-even analysis",
    intro:`<p>Questions here involve calculating and interpreting break-even and margin of safety for a business, and judging how useful break-even analysis is for its decisions.</p>`
  },
  exam:[
    {marks:10, q:"Assess the usefulness of break-even analysis to a new business planning its finances. (10)",
     model:`<p><span class="tag t-P">POINT</span>Break-even analysis is useful because it shows the minimum sales needed to avoid a loss. <span class="tag t-A">APPLY</span>A new business can calculate break-even output from its fixed costs and contribution per unit, and see its margin of safety. <span class="tag t-C">CHAIN</span>This helps set realistic sales targets, supports a loan application, and shows the effect of changing price or costs, reducing the risk of running out of cash.</p>
     <p><span class="tag t-J">HOWEVER</span>However, break-even relies on assumptions that may not hold. <span class="tag t-A">APPLY</span>It assumes all output is sold and that price and costs stay constant, which is unlikely for a new business in a changing market. <span class="tag t-C">CHAIN</span>If sales are lower than assumed or costs rise, the real break-even point is higher, so decisions based on the original figures could be wrong.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, break-even is a valuable planning and decision-making tool for a new business, but because it is only as reliable as its assumptions and data, it should be used alongside realistic forecasts and updated as actual figures come in.</p>`,
     fb:"Model answer (indicative content). Target-setting/risk benefit vs limiting assumptions, judged on the quality of the data."}
  ],
  resources:[]
},
{
  code:"2.3.2.4", subtheme:"2.3.2", title:"Cash flow",
  business:"Constructing & using cash-flow forecasts",
  status:"live",
  notes:[
    {h:"What a cash-flow forecast shows", html:`
      <p>A <b>cash-flow forecast</b> predicts the money flowing <b>into</b> (inflows) and <b>out of</b> (outflows) a business over a future period, usually month by month.</p>
      <ul>
        <li><b>Net cash flow = total inflows &minus; total outflows</b></li>
        <li><b>Closing balance = opening balance + net cash flow</b></li>
        <li>The closing balance for one month becomes the <b>opening balance</b> of the next.</li>
      </ul>
      <p><b>Worked example:</b> opening balance &pound;2,000; inflows &pound;8,000; outflows &pound;9,000. Net cash flow = 8,000 &minus; 9,000 = &minus;&pound;1,000. Closing balance = 2,000 + (&minus;1,000) = <b>&pound;1,000</b>.</p>`},
    {h:"Uses and limitations", html:`
      <p><b>Uses:</b> it identifies in advance when the business might run short of cash, so it can arrange an overdraft or delay spending; it supports loan applications; and it helps manage the timing of payments.</p>
      <p><b>Limitations:</b> it is based on <b>estimates</b> that may be wrong (e.g. customers paying late or sales being lower than expected); unexpected costs can arise; and it does not by itself solve a cash problem — the business must act on it.</p>`}
  ],
  definitions:[
    {term:"Cash flow", marks:2, body:`The movement of money into and out of a business over time <span class="pt">1</span>; a business can be profitable yet still fail if it runs out of cash <span class="pt">2</span>.`},
    {term:"Net cash flow", marks:2, body:`The difference between total cash inflows and total cash outflows in a period <span class="pt">1</span>; a negative figure means more cash left the business than came in <span class="pt">2</span>.`},
    {term:"Closing balance", marks:2, body:`The amount of cash a business has at the end of a period, found as opening balance + net cash flow <span class="pt">1</span>; it becomes the opening balance of the next period <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'cash flow'.",
     model:`Cash flow is the movement of money into and out of a business over time <span class="pt">1</span>; a profitable business can still fail if it runs out of cash <span class="pt">2</span>.`,
     fb:"Money-in-and-out plus the profit-vs-cash point."},
    {marks:4, q:"A business has an opening balance of &pound;3,000, inflows of &pound;10,000 and outflows of &pound;12,500. Calculate its net cash flow and closing balance.",
     model:`Net cash flow = &pound;10,000 &minus; &pound;12,500 = &minus;&pound;2,500 <span class="pt">1</span><span class="pt">2</span>. Closing balance = &pound;3,000 + (&minus;&pound;2,500) = <b>&pound;500</b> <span class="pt">3</span><span class="pt">4</span>.`,
     fb:"Net cash flow (−£2,500) then closing balance (£500) — both steps shown."}
  ],
  caseStudy:{
    business:"Managing cash flow",
    intro:`<p>Questions here involve a business using a cash-flow forecast to spot and manage cash shortages, and judging how far the forecast can be relied on.</p>`
  },
  exam:[
    {marks:8, q:"Discuss the value to a business of producing a cash-flow forecast. (8)",
     model:`<p><span class="tag t-P">POINT</span>A cash-flow forecast is valuable because it gives early warning of cash shortages. <span class="tag t-A">APPLY</span>By predicting inflows and outflows month by month, the business can see when its closing balance might go negative. <span class="tag t-C">CHAIN</span>This lets it act in advance — arranging an overdraft, chasing customer payments or delaying spending — so it can keep paying wages and suppliers and avoid running out of cash.</p>
     <p><span class="tag t-J">HOWEVER</span>However, the forecast is only an estimate. <span class="tag t-A">APPLY</span>Customers may pay later than assumed, sales may be lower, or unexpected costs may arise. <span class="tag t-C">CHAIN</span>If the figures are inaccurate, the forecast gives false reassurance, and it does not fix a shortage by itself — the business still has to take action.</p>`,
     fb:"Model answer (indicative content). Early-warning/planning value vs reliance on estimates, applied throughout."}
  ],
  resources:[]
},
{
  code:"2.3.2.5", subtheme:"2.3.2", title:"Budgets",
  business:"Purposes, types, variances & difficulties",
  status:"live",
  notes:[
    {h:"Purpose and types of budget", html:`
      <p>A <b>budget</b> is a financial plan setting out expected income and spending for a future period. Budgets help a business <b>plan</b> and <b>control</b> spending, <b>motivate</b> managers through targets, and <b>monitor</b> performance.</p>
      <ul>
        <li><b>Historical budgets</b> — based on last period's figures, adjusted for expected change. Quick and easy, but can repeat past mistakes.</li>
        <li><b>Zero-based budgets</b> — every cost must be justified from zero each period. More accurate and avoids waste, but is time-consuming.</li>
      </ul>`},
    {h:"Variance analysis", html:`
      <p>A <b>variance</b> is the difference between the budgeted figure and the actual figure.</p>
      <ul>
        <li><b>Favourable variance</b> — actual result is better than budget (higher revenue or lower cost).</li>
        <li><b>Adverse variance</b> — actual result is worse than budget (lower revenue or higher cost).</li>
      </ul>
      <p>Variance analysis shows managers <b>where</b> and <b>why</b> performance differed from plan so they can take corrective action.</p>`},
    {h:"Difficulties of budgeting", html:`
      <p>Budgets rely on <b>forecasts</b> that may be wrong; they can be time-consuming to set; rigid budgets may not suit a changing market; and poorly set budgets can <b>demotivate</b> staff if targets feel unfair or unrealistic.</p>`}
  ],
  definitions:[
    {term:"Budget", marks:2, body:`A financial plan of expected income and spending for a future period <span class="pt">1</span>; it is used to plan, control spending and monitor performance <span class="pt">2</span>.`},
    {term:"Zero-based budget", marks:2, body:`A budget where every cost must be justified from zero each period rather than based on the past <span class="pt">1</span>; it avoids waste but is time-consuming to prepare <span class="pt">2</span>.`},
    {term:"Variance", marks:2, body:`The difference between a budgeted figure and the actual figure <span class="pt">1</span>; it is favourable if the result is better than budget and adverse if worse <span class="pt">2</span>.`},
    {term:"Adverse variance", marks:2, body:`A variance where the actual result is worse than budgeted, such as higher costs or lower revenue <span class="pt">1</span>; it warns managers that corrective action may be needed <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'budget'.",
     model:`A budget is a financial plan of expected income and spending for a future period <span class="pt">1</span>; it is used to plan, control spending and monitor performance <span class="pt">2</span>.`,
     fb:"Financial-plan-of-income-and-spending plus a use."},
    {marks:2, q:"A cost was budgeted at &pound;8,000 but the actual cost was &pound;9,200. State the variance and whether it is favourable or adverse.",
     model:`Variance = &pound;9,200 &minus; &pound;8,000 = &pound;1,200, which is <b>adverse</b> because the actual cost is higher than budgeted <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"£1,200 adverse — higher cost than planned."},
    {marks:4, q:"Explain one benefit to a business of using variance analysis.",
     model:`One benefit is better control of performance <span class="pt">1</span>. Variance analysis shows where actual results differ from the budget <span class="pt">2</span>. This lets managers find the cause, such as rising material costs <span class="pt">3</span>, and take corrective action before the problem grows <span class="pt">4</span>.`,
     fb:"Names the benefit (control) and chains to finding the cause and acting."}
  ],
  caseStudy:{
    business:"Budgeting and variances",
    intro:`<p>Questions here involve a business setting budgets and using variance analysis to control costs and monitor performance, and the difficulties this can cause.</p>`
  },
  exam:[
    {marks:10, q:"Assess the usefulness of budgeting to a business trying to control its costs. (10)",
     model:`<p><span class="tag t-P">POINT</span>Budgeting is useful because it sets clear spending limits. <span class="tag t-A">APPLY</span>Each department is given a budget, and variance analysis compares actual spending against it. <span class="tag t-C">CHAIN</span>This makes managers accountable, helps spot overspending early through adverse variances, and lets the business act before costs get out of control.</p>
     <p><span class="tag t-J">HOWEVER</span>However, budgeting has drawbacks. <span class="tag t-A">APPLY</span>Budgets are based on forecasts that may be wrong, and a rigid budget may not suit a fast-changing market. <span class="tag t-C">CHAIN</span>Targets that feel unfair can also demotivate staff, and setting zero-based budgets takes significant management time, which has its own cost.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, budgeting is a valuable cost-control tool because it creates accountability and early warning, but it works best when budgets are realistic, reviewed regularly and set with staff involvement, so they motivate rather than demotivate.</p>`,
     fb:"Model answer (indicative content). Accountability/early-warning benefit vs forecast reliance and motivation risk, judged on how budgets are set."}
  ],
  resources:[]
},
{
  code:"2.3.3.1", subtheme:"2.3.3", title:"Profit",
  business:"Gross, operating & net profit and profitability",
  status:"live",
  notes:[
    {h:"Types of profit", html:`
      <p>Profit is measured at three levels on the <b>statement of comprehensive income</b> (profit and loss account):</p>
      <ul>
        <li><b>Gross profit = revenue &minus; cost of sales</b> (the direct cost of making the goods).</li>
        <li><b>Operating profit = gross profit &minus; operating expenses</b> (overheads such as rent, salaries and marketing).</li>
        <li><b>Profit for the year (net profit) = operating profit &minus; net finance costs</b> (e.g. interest) and tax.</li>
      </ul>
      <p><b>Worked example:</b> revenue &pound;100,000, cost of sales &pound;60,000 &rarr; gross profit &pound;40,000. Operating expenses &pound;25,000 &rarr; operating profit &pound;15,000. Interest &pound;3,000 &rarr; profit for the year &pound;12,000.</p>`},
    {h:"Profitability (margins)", html:`
      <p><b>Profitability</b> compares profit to revenue as a percentage, so firms of different sizes can be compared:</p>
      <ul>
        <li><b>Gross profit margin = (gross profit &divide; revenue) &times; 100</b></li>
        <li><b>Operating profit margin = (operating profit &divide; revenue) &times; 100</b></li>
        <li><b>Net profit margin = (profit for the year &divide; revenue) &times; 100</b></li>
      </ul>
      <p>In the example, gross margin = 40% and net margin = 12%.</p>`},
    {h:"Improving profit and profitability", html:`
      <ul>
        <li><b>Increase revenue</b> — raise price (if inelastic), sell more, or add higher-value products.</li>
        <li><b>Reduce costs</b> — cheaper suppliers, less waste, higher productivity — but without harming quality.</li>
      </ul>
      <p>A rising margin shows the business is keeping more of each &pound;1 of sales as profit.</p>`}
  ],
  definitions:[
    {term:"Gross profit", marks:2, body:`Revenue minus the cost of sales <span class="pt">1</span>; it shows the profit made before overheads such as rent and salaries are deducted <span class="pt">2</span>.`},
    {term:"Operating profit", marks:2, body:`Gross profit minus operating expenses (overheads) <span class="pt">1</span>; it shows the profit from the firm's normal trading activities <span class="pt">2</span>.`},
    {term:"Net profit margin", marks:2, body:`Profit for the year as a percentage of revenue, (profit for the year &divide; revenue) &times; 100 <span class="pt">1</span>; it shows how much of each &pound;1 of sales is kept as profit after all costs <span class="pt">2</span>.`},
    {term:"Profitability", marks:2, body:`How much profit a business makes relative to its revenue, shown as a margin <span class="pt">1</span>; unlike total profit, it allows firms of different sizes to be compared <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'gross profit'.",
     model:`Gross profit is revenue minus the cost of sales <span class="pt">1</span>; it is the profit before overheads such as rent and salaries are deducted <span class="pt">2</span>.`,
     fb:"Revenue-minus-cost-of-sales plus the before-overheads point."},
    {marks:4, q:"A business has revenue of &pound;80,000 and cost of sales of &pound;50,000. Calculate its gross profit and gross profit margin.",
     model:`Gross profit = &pound;80,000 &minus; &pound;50,000 = &pound;30,000 <span class="pt">1</span><span class="pt">2</span>. Gross profit margin = (&pound;30,000 &divide; &pound;80,000) &times; 100 = <b>37.5%</b> <span class="pt">3</span><span class="pt">4</span>.`,
     fb:"Gross profit (£30,000) then margin (37.5%) — both steps shown."},
    {marks:4, q:"Explain one way a business could improve its net profit margin.",
     model:`One way is to reduce operating costs <span class="pt">1</span>. For example, negotiating cheaper supplies or cutting waste lowers expenses <span class="pt">2</span>. With revenue unchanged, more of each sale is kept as profit <span class="pt">3</span>, so the net profit margin rises <span class="pt">4</span>.`,
     fb:"Names a method (cut costs) and chains to a higher margin."}
  ],
  caseStudy:{
    business:"Measuring profit",
    intro:`<p>Questions here involve calculating levels of profit and margins and judging how a business could raise its profitability.</p>`
  },
  exam:[
    {marks:8, q:"Assess the best way for a business to improve its profitability. (8)",
     model:`<p><span class="tag t-P">POINT</span>One way to improve profitability is to reduce costs. <span class="tag t-A">APPLY</span>Switching to cheaper suppliers or cutting waste lowers the cost of sales and overheads. <span class="tag t-C">CHAIN</span>With revenue unchanged, the gross and net margins rise, so the business keeps more of each &pound;1 of sales as profit.</p>
     <p><span class="tag t-J">HOWEVER</span>However, cutting costs can backfire. <span class="tag t-A">APPLY</span>Cheaper materials may lower quality, and cutting marketing may reduce sales. <span class="tag t-C">CHAIN</span>If customers notice and switch away, revenue falls and profitability could drop, so raising revenue through added value or higher prices (where demand is inelastic) may be safer.</p>`,
     fb:"Model answer (indicative content). Cost reduction vs the risk to quality/sales, judged on which protects the margin."}
  ],
  resources:[]
},
{
  code:"2.3.3.2", subtheme:"2.3.3", title:"Liquidity",
  business:"Current & acid-test ratios and working capital",
  status:"live",
  notes:[
    {h:"Profit is not cash", html:`
      <p><b>Liquidity</b> is a business's ability to pay its short-term debts as they fall due. A business can be <b>profitable but still run out of cash</b> — for example if customers pay late or too much cash is tied up in stock. Managing liquidity is about having enough cash, not just making a profit.</p>`},
    {h:"Liquidity ratios", html:`
      <p>Liquidity is measured from the <b>statement of financial position</b> (balance sheet):</p>
      <ul>
        <li><b>Current ratio = current assets &divide; current liabilities.</b> Around <b>1.5&ndash;2</b> is usually healthy.</li>
        <li><b>Acid-test ratio = (current assets &minus; inventory) &divide; current liabilities.</b> A stricter test, since inventory may not sell quickly; around <b>1</b> is comfortable.</li>
      </ul>
      <p><b>Worked example:</b> current assets &pound;60,000 (including &pound;20,000 inventory), current liabilities &pound;40,000. Current ratio = 60,000 &divide; 40,000 = <b>1.5</b>. Acid test = (60,000 &minus; 20,000) &divide; 40,000 = <b>1.0</b>.</p>`},
    {h:"Working capital and improving liquidity", html:`
      <p><b>Working capital = current assets &minus; current liabilities</b> — the cash available for day-to-day running. Ways to improve liquidity include: selling idle <b>assets</b>, negotiating longer <b>supplier credit terms</b>, <b>factoring</b> (selling unpaid invoices for immediate cash) and using <b>JIT inventory</b> to free up cash tied in stock. Too little liquidity risks failure; too much means cash is sitting idle rather than earning a return.</p>`}
  ],
  definitions:[
    {term:"Liquidity", marks:2, body:`A business's ability to pay its short-term debts as they fall due <span class="pt">1</span>; a profitable business can still fail if it lacks the cash to pay its bills <span class="pt">2</span>.`},
    {term:"Current ratio", marks:2, body:`A liquidity measure found by dividing current assets by current liabilities <span class="pt">1</span>; a figure of roughly 1.5 to 2 suggests the business can comfortably meet short-term debts <span class="pt">2</span>.`},
    {term:"Acid-test ratio", marks:2, body:`A stricter liquidity measure: (current assets &minus; inventory) &divide; current liabilities <span class="pt">1</span>; it excludes stock because stock may not be sold quickly for cash <span class="pt">2</span>.`},
    {term:"Working capital", marks:2, body:`The cash available for day-to-day running, calculated as current assets minus current liabilities <span class="pt">1</span>; too little risks failure while too much means cash sits idle <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'liquidity'.",
     model:`Liquidity is a business's ability to pay its short-term debts as they fall due <span class="pt">1</span>; a profitable business can still fail if it runs short of cash <span class="pt">2</span>.`,
     fb:"Ability-to-pay-short-term-debts plus the profit-vs-cash point."},
    {marks:4, q:"A business has current assets of &pound;50,000 (including &pound;15,000 inventory) and current liabilities of &pound;25,000. Calculate its current ratio and acid-test ratio.",
     model:`Current ratio = &pound;50,000 &divide; &pound;25,000 = <b>2.0</b> <span class="pt">1</span><span class="pt">2</span>. Acid test = (&pound;50,000 &minus; &pound;15,000) &divide; &pound;25,000 = &pound;35,000 &divide; &pound;25,000 = <b>1.4</b> <span class="pt">3</span><span class="pt">4</span>.`,
     fb:"Current ratio (2.0) then acid test (1.4) — both steps shown."},
    {marks:4, q:"Explain one way a business could improve its liquidity.",
     model:`One way is to negotiate longer credit terms with suppliers <span class="pt">1</span>. Paying suppliers after 60 days instead of 30 keeps cash in the business for longer <span class="pt">2</span>. This increases the cash available to meet other short-term bills <span class="pt">3</span>, improving the current and acid-test ratios <span class="pt">4</span>.`,
     fb:"Names a method (supplier credit/factoring/JIT) and chains to better ratios."}
  ],
  caseStudy:{
    business:"Managing liquidity",
    intro:`<p>Questions here involve a business measuring and improving its liquidity, and the distinction between being profitable and having enough cash.</p>`
  },
  exam:[
    {marks:10, q:"Assess the ways a business could improve its liquidity position. (10)",
     model:`<p><span class="tag t-P">POINT</span>One effective way is to use factoring. <span class="tag t-A">APPLY</span>The business sells its unpaid invoices to a finance company for most of their value immediately. <span class="tag t-C">CHAIN</span>This brings cash in straight away rather than waiting 30&ndash;60 days, raising current assets and improving the current and acid-test ratios so bills can be paid on time.</p>
     <p><span class="tag t-J">HOWEVER</span>However, each method has a cost. <span class="tag t-A">APPLY</span>Factoring means accepting less than the full invoice value, and using JIT to cut inventory risks stock-outs if a delivery is late. <span class="tag t-C">CHAIN</span>These reduce profit or increase risk, so improving liquidity can work against other objectives.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the best approach depends on the cause of the problem: factoring and chasing debtors suit a business owed a lot by customers, while longer supplier credit or JIT suit one with cash tied up in stock — and liquidity must be balanced against profitability so cash is not left idle.</p>`,
     fb:"Model answer (indicative content). Factoring/credit terms/JIT vs their costs, judged on the cause of the shortage."}
  ],
  resources:[]
},
{
  code:"2.3.3.3", subtheme:"2.3.3", title:"Business failure",
  business:"Internal & external causes of failure",
  status:"live",
  notes:[
    {h:"Internal causes of failure", html:`
      <p>Internal causes come from <b>within</b> the business, often from poor management:</p>
      <ul>
        <li><b>Poor cash-flow management</b> — running out of cash even while profitable.</li>
        <li><b>Overestimation of sales</b> — planning and spending for demand that never arrives.</li>
        <li><b>Overtrading</b> — expanding too fast without enough working capital to support it.</li>
        <li><b>Poor inventory control</b> — too much cash tied in stock, or stock-outs losing sales.</li>
        <li><b>Poor marketing</b> and <b>poor quality</b> — failing to attract or keep customers.</li>
      </ul>`},
    {h:"External causes of failure", html:`
      <p>External causes come from <b>outside</b> the business and are harder to control:</p>
      <ul>
        <li><b>Market conditions</b> and <b>competition</b> — falling demand or stronger rivals.</li>
        <li><b>Economic factors</b> — recession, rising <b>interest rates</b> or unfavourable <b>exchange rates</b>.</li>
        <li><b>Government regulations</b>, <b>supplier problems</b> and <b>natural phenomena</b> (e.g. floods or pandemics).</li>
      </ul>`},
    {h:"Why cash flow is central", html:`
      <p>Many failures come back to <b>cash</b>: a business that cannot pay wages, suppliers or lenders will fail even if it is profitable on paper. Managing cash flow, controlling costs and realistic forecasting are the main defences.</p>`}
  ],
  definitions:[
    {term:"Business failure", marks:2, body:`When a business can no longer continue trading, often because it cannot pay its debts <span class="pt">1</span>; causes can be internal (poor management) or external (the environment) <span class="pt">2</span>.`},
    {term:"Overtrading", marks:2, body:`When a business expands too quickly without enough working capital to support the growth <span class="pt">1</span>; it can run out of cash even though sales are rising <span class="pt">2</span>.`},
    {term:"Internal cause of failure", marks:2, body:`A reason for failure coming from within the business, such as poor cash-flow management or poor quality <span class="pt">1</span>; these are usually within the firm's control <span class="pt">2</span>.`},
    {term:"External cause of failure", marks:2, body:`A reason for failure coming from outside the business, such as recession or new competition <span class="pt">1</span>; these are harder for the firm to control <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'overtrading'.",
     model:`Overtrading is when a business expands too quickly without enough working capital to support the growth <span class="pt">1</span>; it can run out of cash even though sales are rising <span class="pt">2</span>.`,
     fb:"Expand-too-fast-without-working-capital plus the run-out-of-cash point."},
    {marks:4, q:"Explain one internal cause of business failure.",
     model:`One internal cause is poor cash-flow management <span class="pt">1</span>. If a business lets too much cash get tied up in stock or unpaid invoices, it may not have enough to pay wages and suppliers <span class="pt">2</span>. Even if it is profitable, it cannot meet its bills <span class="pt">3</span>, so it may be forced to stop trading <span class="pt">4</span>.`,
     fb:"Names an internal cause and chains to inability to pay bills."}
  ],
  caseStudy:{
    business:"Causes of failure",
    intro:`<p>Questions here involve identifying why a business might fail and judging whether internal or external causes are the greater threat.</p>`
  },
  exam:[
    {marks:10, q:"Assess whether internal or external factors are more likely to cause a small business to fail. (10)",
     model:`<p><span class="tag t-P">POINT</span>Internal factors are often the main cause of failure for a small business. <span class="tag t-A">APPLY</span>Many small firms fail through poor cash-flow management or overtrading, expanding faster than their working capital allows. <span class="tag t-C">CHAIN</span>These are within the owner's control, so better planning, realistic forecasts and cost control could have prevented the failure.</p>
     <p><span class="tag t-J">HOWEVER</span>However, external factors can be decisive and are harder to control. <span class="tag t-A">APPLY</span>A recession, a rise in interest rates or a powerful new competitor can cut demand sharply whatever the owner does. <span class="tag t-C">CHAIN</span>A small business with limited reserves may not survive such a shock even if it is well run.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, internal factors cause most small-business failures and are more preventable, but external shocks can finish off even a well-managed firm — so the greater threat depends on the strength of the business's finances and the stability of its market.</p>`,
     fb:"Model answer (indicative content). Internal (controllable) vs external (uncontrollable) causes, judged on finances and market stability."}
  ],
  resources:[]
},
{
  code:"2.3.4.1", subtheme:"2.3.4", title:"Production, productivity & efficiency",
  business:"Methods of production, productivity & efficiency",
  status:"live",
  notes:[
    {h:"Methods of production", html:`
      <ul>
        <li><b>Job</b> — one-off, made to a customer's specification (e.g. a wedding cake, a bespoke building). High quality and flexibility, but slow and costly per unit.</li>
        <li><b>Batch</b> — groups of identical items made together (e.g. a bakery's bread, then rolls). More efficient than job, but down-time between batches.</li>
        <li><b>Flow</b> — continuous mass production on a line (e.g. cars, bottled drinks). Low unit cost through economies of scale, but inflexible and high set-up cost.</li>
        <li><b>Cell</b> — production split into teams (cells) each completing a stage. Can raise motivation and quality through teamwork.</li>
      </ul>`},
    {h:"Productivity", html:`
      <p><b>Productivity</b> is output per unit of input per time period — most often <b>output per worker</b>. Higher productivity spreads fixed costs over more units, lowering average cost and improving <b>competitiveness</b>. It can be improved through training, better technology, motivation and efficient organisation of work.</p>`},
    {h:"Efficiency & intensity", html:`
      <p><b>Efficiency</b> means producing at the <b>minimum average cost</b>. It improves by cutting waste, raising productivity and using capacity well.</p>
      <p>Production can be <b>labour-intensive</b> (relies mainly on people — flexible, suits bespoke work) or <b>capital-intensive</b> (relies mainly on machinery — consistent, suits high-volume work). Short <b>product lead-in times</b> (getting new products to market quickly) can be a source of competitive advantage.</p>`}
  ],
  definitions:[
    {term:"Productivity", marks:2, body:`Output per unit of input per time period, such as output per worker <span class="pt">1</span>; higher productivity lowers average cost and improves competitiveness <span class="pt">2</span>.`},
    {term:"Efficiency", marks:2, body:`Producing at the minimum average cost per unit <span class="pt">1</span>; it is improved by cutting waste, raising productivity and using capacity fully <span class="pt">2</span>.`},
    {term:"Flow production", marks:2, body:`Continuous mass production of identical items on a production line <span class="pt">1</span>; it gives a low unit cost through economies of scale but is inflexible <span class="pt">2</span>.`},
    {term:"Labour-intensive production", marks:2, body:`Production that relies mainly on people rather than machinery <span class="pt">1</span>; it is flexible and suits bespoke work but can be costly and less consistent <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'productivity'.",
     model:`Productivity is output per unit of input per time period, such as output per worker <span class="pt">1</span>; higher productivity lowers average cost and improves competitiveness <span class="pt">2</span>.`,
     fb:"Output-per-input plus the lowers-cost/competitiveness point."},
    {marks:4, q:"Explain one way a business could increase its productivity.",
     model:`One way is to train its workers <span class="pt">1</span>. Training improves employees' skills so they can work faster and make fewer mistakes <span class="pt">2</span>. This raises output per worker <span class="pt">3</span>, lowering average cost and making the business more competitive <span class="pt">4</span>.`,
     fb:"Names a method (training/technology/motivation) and chains to output per worker and cost."},
    {marks:4, q:"Explain one benefit to a business of using flow production.",
     model:`One benefit is a lower unit cost <span class="pt">1</span>. Flow production makes large quantities continuously, gaining economies of scale <span class="pt">2</span>. This spreads fixed costs over many units <span class="pt">3</span>, so the business can price competitively or earn a higher margin <span class="pt">4</span>.`,
     fb:"Names the benefit (low unit cost via economies of scale) and chains to price/margin."}
  ],
  caseStudy:{
    business:"Production and productivity",
    intro:`<p>Questions here involve a business choosing a production method or seeking to raise productivity and efficiency to compete on cost or quality.</p>`
  },
  exam:[
    {marks:10, q:"Assess whether a manufacturer should switch from batch to flow production. (10)",
     model:`<p><span class="tag t-P">POINT</span>Switching to flow production could cut the unit cost. <span class="tag t-A">APPLY</span>Flow production runs continuously and in high volume, gaining economies of scale. <span class="tag t-C">CHAIN</span>This spreads fixed costs over more units and raises productivity, so the manufacturer can lower prices or widen its margin and compete more strongly.</p>
     <p><span class="tag t-J">HOWEVER</span>However, flow production is costly and inflexible. <span class="tag t-A">APPLY</span>It needs heavy investment in machinery and a reliable, high level of demand to be worthwhile, and it is hard to vary the product. <span class="tag t-C">CHAIN</span>If demand is uncertain or customers want variety, the business could be left with expensive idle capacity.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, flow production suits a firm with high, steady demand for a standardised product, but batch production is safer where demand is lower or variety matters — so the decision rests on the size and stability of demand.</p>`,
     fb:"Model answer (indicative content). Lower unit cost of flow vs cost/inflexibility, judged on demand level and variety."}
  ],
  resources:[]
},
{
  code:"2.3.4.2", subtheme:"2.3.4", title:"Capacity utilisation",
  business:"Under- & over-utilisation of capacity",
  status:"live",
  notes:[
    {h:"Measuring capacity utilisation", html:`
      <p><b>Capacity utilisation = (current output &divide; maximum possible output) &times; 100.</b> It shows how much of a business's potential is being used.</p>
      <p><b>Worked example:</b> a factory can make 10,000 units a month but makes 7,000. Utilisation = (7,000 &divide; 10,000) &times; 100 = <b>70%</b>.</p>`},
    {h:"Under- and over-utilisation", html:`
      <ul>
        <li><b>Under-utilisation (low %)</b> — fixed costs are spread over fewer units, so average cost rises; machinery and staff sit idle; but there is spare capacity to take on new orders.</li>
        <li><b>Over-utilisation (near 100%)</b> — fixed costs spread over many units, so average cost is low; but there is no room for new orders, staff and machines are under strain, quality and maintenance can suffer, and breakdowns cause delays.</li>
      </ul>`},
    {h:"Improving capacity utilisation", html:`
      <p>If <b>under-utilised</b>: increase demand (marketing), take on subcontracting work, or reduce capacity (e.g. lease out space, cut staff). If <b>over-utilised</b>: increase capacity (new machinery, overtime, outsourcing) or manage demand. The aim is a high but sustainable level, often around <b>90%</b>, leaving some room for new orders and maintenance.</p>`}
  ],
  definitions:[
    {term:"Capacity utilisation", marks:2, body:`The proportion of a business's maximum possible output that it is currently producing, (current output &divide; maximum output) &times; 100 <span class="pt">1</span>; higher utilisation spreads fixed costs over more units <span class="pt">2</span>.`},
    {term:"Under-utilisation", marks:2, body:`When a business is producing well below its maximum capacity <span class="pt">1</span>; fixed costs are spread over fewer units so average cost rises and resources sit idle <span class="pt">2</span>.`},
    {term:"Over-utilisation", marks:2, body:`When a business is producing at or very near its maximum capacity <span class="pt">1</span>; average cost is low but there is no room for new orders and staff and machinery are under strain <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"A business can produce 8,000 units but currently makes 6,000. Calculate its capacity utilisation.",
     model:`Capacity utilisation = (6,000 &divide; 8,000) &times; 100 = <b>75%</b> <span class="pt">1</span><span class="pt">2</span>.`,
     fb:"Correct formula: 6,000/8,000 × 100 = 75%."},
    {marks:4, q:"Explain one problem a business may face from operating at very high capacity utilisation.",
     model:`One problem is strain on staff and machinery <span class="pt">1</span>. Running near 100% leaves no time for maintenance or rest <span class="pt">2</span>. This raises the risk of breakdowns and mistakes <span class="pt">3</span>, which can delay orders and harm quality and customer satisfaction <span class="pt">4</span>.`,
     fb:"Names a problem (strain/no room for orders) and chains to breakdowns/quality."}
  ],
  caseStudy:{
    business:"Using capacity well",
    intro:`<p>Questions here involve a business judging the effects of operating with too much or too little spare capacity, and how to improve its utilisation.</p>`
  },
  exam:[
    {marks:8, q:"Discuss whether a business should aim to operate at 100% capacity utilisation. (8)",
     model:`<p><span class="tag t-P">POINT</span>Operating at 100% capacity can lower average costs. <span class="tag t-A">APPLY</span>Fixed costs are spread over the maximum number of units. <span class="tag t-C">CHAIN</span>This reduces the cost per unit, allowing lower prices or higher margins, and signals the business is using its resources fully.</p>
     <p><span class="tag t-J">HOWEVER</span>However, 100% leaves no slack. <span class="tag t-A">APPLY</span>There is no room to take on new orders, no time for maintenance, and staff and machines are under constant strain. <span class="tag t-C">CHAIN</span>This risks breakdowns, falling quality and lost customers, so a level around 90% is often better as it keeps costs low while leaving room to cope and grow.</p>`,
     fb:"Model answer (indicative content). Low unit cost of full utilisation vs the loss of slack, judged towards a sustainable ~90%."}
  ],
  resources:[]
},
{
  code:"2.3.4.3", subtheme:"2.3.4", title:"Inventory control",
  business:"Buffer stock, JIT & lean production",
  status:"live",
  notes:[
    {h:"The inventory control diagram", html:`
      <p>An <b>inventory (stock) control diagram</b> tracks stock over time. Stock is used up until it reaches the <b>re-order level</b>, when new stock is ordered; after the <b>lead time</b> it arrives and stock rises to the <b>maximum</b> again. The <b>buffer inventory</b> is the minimum kept as a safety net against delays or sudden demand.</p>`},
    {h:"Costs of poor inventory control", html:`
      <ul>
        <li><b>Too much stock</b> — ties up cash, costs money to store, and risks waste or obsolescence.</li>
        <li><b>Too little stock</b> — risks <b>stock-outs</b>, lost sales and disappointed customers, and halted production.</li>
      </ul>`},
    {h:"JIT and lean production", html:`
      <p><b>Just in time (JIT)</b> holds little or no stock, with materials arriving exactly when needed. It frees up cash and cuts storage and waste costs, but depends on <b>reliable suppliers</b> — any delay stops production.</p>
      <p><b>Lean production</b> and <b>waste minimisation</b> aim to cut all waste (time, materials, movement) from the process. Done well, lean production lowers costs and raises quality, giving a source of <b>competitive advantage</b>.</p>`}
  ],
  definitions:[
    {term:"Buffer inventory", marks:2, body:`A minimum level of stock held as a safety net against delivery delays or sudden rises in demand <span class="pt">1</span>; it helps avoid stock-outs but ties up some cash <span class="pt">2</span>.`},
    {term:"Just in time (JIT)", marks:2, body:`An inventory system where materials arrive exactly when needed, holding little or no stock <span class="pt">1</span>; it frees up cash and cuts storage costs but relies on very reliable suppliers <span class="pt">2</span>.`},
    {term:"Lean production", marks:2, body:`An approach that aims to cut all forms of waste from the production process <span class="pt">1</span>; it lowers costs and can raise quality, giving a competitive advantage <span class="pt">2</span>.`},
    {term:"Stock-out", marks:2, body:`When a business runs out of an item of stock <span class="pt">1</span>; it can halt production and lose sales and customers to rivals <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'just in time (JIT)'.",
     model:`JIT is an inventory system where materials arrive exactly when they are needed, holding little or no stock <span class="pt">1</span>; it frees up cash but relies on reliable suppliers <span class="pt">2</span>.`,
     fb:"Materials-arrive-when-needed plus the reliance-on-suppliers point."},
    {marks:4, q:"Explain one drawback of holding too much inventory.",
     model:`One drawback is that it ties up cash <span class="pt">1</span>. Money spent on stock sitting in a warehouse cannot be used elsewhere <span class="pt">2</span>. This worsens liquidity and adds storage costs <span class="pt">3</span>, and the stock may become damaged or obsolete before it sells <span class="pt">4</span>.`,
     fb:"Names a drawback (cash tied up/waste) and chains to liquidity and obsolescence."}
  ],
  caseStudy:{
    business:"Controlling inventory",
    intro:`<p>Questions here involve a business managing its stock levels — balancing the cost of holding stock against the risk of running out — and whether JIT or lean production would suit it.</p>`
  },
  exam:[
    {marks:10, q:"Assess whether a manufacturer should adopt a just-in-time (JIT) inventory system. (10)",
     model:`<p><span class="tag t-P">POINT</span>JIT could improve the manufacturer's finances. <span class="tag t-A">APPLY</span>By holding little stock and having materials delivered as needed, less cash is tied up in inventory and storage costs fall. <span class="tag t-C">CHAIN</span>This improves liquidity and cuts waste from unsold or obsolete stock, lowering average costs and freeing cash for other uses.</p>
     <p><span class="tag t-J">HOWEVER</span>However, JIT is risky. <span class="tag t-A">APPLY</span>With no buffer stock, a late delivery or supplier problem halts production immediately. <span class="tag t-C">CHAIN</span>This could stop the firm meeting orders and lose customers, so JIT only works with very reliable suppliers and dependable transport.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, JIT suits a manufacturer with reliable suppliers and steady production, where the cash and cost savings are real; but a business with unreliable supply or volatile demand may be safer holding buffer stock — so supplier reliability is the deciding factor.</p>`,
     fb:"Model answer (indicative content). Cash/cost savings of JIT vs supply risk, judged on supplier reliability."}
  ],
  resources:[]
},
{
  code:"2.3.4.4", subtheme:"2.3.4", title:"Quality management",
  business:"Quality control/assurance, TQM & Kaizen",
  status:"live",
  notes:[
    {h:"Approaches to quality", html:`
      <ul>
        <li><b>Quality control</b> — checking/inspecting products at the <b>end</b> of production to remove faulty ones. Simple, but waste is only caught after it is made.</li>
        <li><b>Quality assurance</b> — building quality in at <b>every stage</b> so faults are prevented, with each worker responsible for their part. Reduces waste but needs training and commitment.</li>
        <li><b>Quality circles</b> — groups of employees meeting to suggest quality improvements, using staff knowledge and raising motivation.</li>
      </ul>`},
    {h:"TQM and Kaizen", html:`
      <p><b>Total Quality Management (TQM)</b> makes quality the responsibility of <b>everyone</b> in the business, aiming to get things right first time with the customer at the centre.</p>
      <p><b>Continuous improvement (Kaizen)</b> seeks small, ongoing improvements from all staff over time. Together these can raise quality and cut waste, but require a culture change and training.</p>`},
    {h:"Quality as competitive advantage", html:`
      <p>Good quality management reduces waste and reworking costs, builds a strong <b>reputation</b>, encourages repeat custom and can justify a premium price — a source of <b>competitive advantage</b>. Poor quality raises costs and damages the brand.</p>`}
  ],
  definitions:[
    {term:"Quality control", marks:2, body:`Checking products at the end of production to identify and remove faulty ones <span class="pt">1</span>; it catches faults before they reach customers but only after waste has been made <span class="pt">2</span>.`},
    {term:"Quality assurance", marks:2, body:`Building quality in at every stage of production so faults are prevented rather than just detected <span class="pt">1</span>; each worker takes responsibility for quality, reducing waste <span class="pt">2</span>.`},
    {term:"Total Quality Management (TQM)", marks:2, body:`An approach making quality the responsibility of everyone in the business <span class="pt">1</span>; it aims to get things right first time with the customer at the centre <span class="pt">2</span>.`},
    {term:"Kaizen (continuous improvement)", marks:2, body:`Seeking small, ongoing improvements to processes from all staff over time <span class="pt">1</span>; the gains add up to lower costs and higher quality <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'quality assurance'.",
     model:`Quality assurance is building quality in at every stage of production so faults are prevented rather than just detected <span class="pt">1</span>; each worker takes responsibility for quality <span class="pt">2</span>.`,
     fb:"Prevent-faults-at-every-stage plus the worker-responsibility point."},
    {marks:4, q:"Explain one benefit to a business of good quality management.",
     model:`One benefit is a stronger reputation <span class="pt">1</span>. Consistently high quality means fewer faulty products reach customers <span class="pt">2</span>. This builds customer trust and repeat custom <span class="pt">3</span>, and can let the business charge a premium price and win market share <span class="pt">4</span>.`,
     fb:"Names a benefit (reputation/lower waste) and chains to repeat custom/price."}
  ],
  caseStudy:{
    business:"Managing quality",
    intro:`<p>Questions here involve a business choosing how to manage quality — inspection versus prevention, or adopting TQM/Kaizen — and the effect on costs, reputation and competitiveness.</p>`
  },
  exam:[
    {marks:10, q:"Assess the benefits to a business of adopting Total Quality Management (TQM). (10)",
     model:`<p><span class="tag t-P">POINT</span>TQM can reduce the cost of poor quality. <span class="tag t-A">APPLY</span>By making every employee responsible for getting things right first time, faults are prevented rather than fixed at the end. <span class="tag t-C">CHAIN</span>This cuts waste, reworking and returns, lowering costs, while consistent quality builds a reputation that wins repeat custom.</p>
     <p><span class="tag t-J">HOWEVER</span>However, TQM is demanding to introduce. <span class="tag t-A">APPLY</span>It requires a culture change, training for all staff and time before results show, which is costly. <span class="tag t-C">CHAIN</span>If staff are not committed, the system may not deliver, so the investment could be wasted in the short term.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, TQM offers real long-term benefits in cost and reputation where the business invests in training and builds a quality culture; but for a firm that cannot commit the time and money, simpler quality control may be more realistic — so success depends on commitment.</p>`,
     fb:"Model answer (indicative content). Waste/reputation benefits of TQM vs cost and culture change, judged on commitment."}
  ],
  resources:[]
},
{
  code:"2.3.5.1", subtheme:"2.3.5", title:"Economic influences",
  business:"Inflation, exchange & interest rates, the cycle",
  status:"live",
  notes:[
    {h:"Inflation, interest rates, tax & spending", html:`
      <ul>
        <li><b>Inflation</b> — a sustained rise in the general price level. It raises costs and prompts wage demands, and can reduce consumers' real spending power. Firms may respond by cutting costs, raising productivity or passing on price rises.</li>
        <li><b>Interest rates</b> — the cost of borrowing. Higher rates make loans and overdrafts dearer, discourage investment and cut consumer spending (especially on credit); lower rates do the reverse.</li>
        <li><b>Taxation &amp; government spending</b> — higher taxes reduce consumers' disposable income and firms' profits; government spending can raise demand in the economy. Changes affect sales, costs and investment decisions.</li>
      </ul>`},
    {h:"Exchange rates", html:`
      <p>The <b>exchange rate</b> is the price of one currency in terms of another.</p>
      <ul>
        <li><b>Appreciation</b> (currency stronger) — <b>exports dearer, imports cheaper</b>: good for importers, harder for exporters. (SPICED: Strong Pound = Imports Cheaper, Exports Dearer.)</li>
        <li><b>Depreciation</b> (currency weaker) — exports cheaper, imports dearer: good for exporters, harder for importers of raw materials.</li>
      </ul>
      <p>Firms respond by hedging, sourcing locally, or adjusting prices and markets.</p>`},
    {h:"The business cycle", html:`
      <p>The <b>business cycle</b> is the pattern of ups and downs in economic activity: <b>boom</b> (high demand, rising prices), <b>recession</b> (falling demand and output), <b>slump</b> (low activity) and <b>recovery</b>. Businesses adjust output, staffing and strategy to the stage of the cycle.</p>`}
  ],
  definitions:[
    {term:"Inflation", marks:2, body:`A sustained rise in the general level of prices in an economy <span class="pt">1</span>; it raises business costs and can reduce consumers' real spending power <span class="pt">2</span>.`},
    {term:"Exchange rate", marks:2, body:`The price of one currency in terms of another <span class="pt">1</span>; changes in it alter the price of a firm's exports and imports <span class="pt">2</span>.`},
    {term:"Interest rate", marks:2, body:`The cost of borrowing money, expressed as a percentage <span class="pt">1</span>; a rise makes loans dearer and tends to reduce borrowing, spending and investment <span class="pt">2</span>.`},
    {term:"Business cycle", marks:2, body:`The pattern of ups and downs in economic activity over time, through boom, recession, slump and recovery <span class="pt">1</span>; demand for most products changes with the stage of the cycle <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'inflation'.",
     model:`Inflation is a sustained rise in the general level of prices in an economy <span class="pt">1</span>; it raises business costs and can reduce consumers' real spending power <span class="pt">2</span>.`,
     fb:"Sustained-rise-in-prices plus the costs/spending-power point."},
    {marks:4, q:"Explain how a rise in interest rates could affect a business that sells on credit.",
     model:`Higher interest rates make borrowing dearer for customers <span class="pt">1</span>. Buying on credit therefore costs more, so some customers delay or cancel purchases <span class="pt">2</span>. This reduces the business's sales <span class="pt">3</span>, and its own loan repayments also rise, squeezing profit <span class="pt">4</span>.`,
     fb:"Links higher rates to lower customer demand and higher firm costs."},
    {marks:4, q:"Explain one effect on a UK exporter of a fall (depreciation) in the pound.",
     model:`A weaker pound makes the exporter's goods cheaper in foreign currency <span class="pt">1</span>. Overseas customers can buy more for the same money <span class="pt">2</span>. This tends to raise demand for the firm's exports <span class="pt">3</span>, increasing its sales and revenue abroad <span class="pt">4</span>.`,
     fb:"Depreciation → cheaper exports → higher overseas demand/revenue."}
  ],
  caseStudy:{
    business:"Responding to the economy",
    intro:`<p>Questions here involve a business judging how a change in inflation, interest rates, exchange rates or the business cycle affects it, and how best to respond.</p>`
  },
  exam:[
    {marks:10, q:"Assess how a business that imports its raw materials should respond to a depreciation of the pound. (10)",
     model:`<p><span class="tag t-P">POINT</span>A depreciation raises the cost of imported raw materials. <span class="tag t-A">APPLY</span>As the pound buys less foreign currency, the business pays more for the same inputs. <span class="tag t-C">CHAIN</span>This increases its costs and squeezes its margins, so one response is to pass the rise on through higher prices to protect profit.</p>
     <p><span class="tag t-J">HOWEVER</span>However, raising prices risks losing customers, especially if demand is price-elastic. <span class="tag t-A">APPLY</span>An alternative is to switch to domestic suppliers, whose prices are unaffected by the exchange rate. <span class="tag t-C">CHAIN</span>This protects costs but may mean lower quality or higher base prices, and switching takes time.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, the best response depends on how price-sensitive the firm's customers are and whether suitable local suppliers exist: passing on costs suits a firm with loyal, inelastic demand, while sourcing locally suits one in a competitive market — and hedging can reduce exposure to future swings.</p>`,
     fb:"Model answer (indicative content). Passing on costs vs local sourcing, judged on elasticity and supplier options."}
  ],
  resources:[]
},
{
  code:"2.3.5.2", subtheme:"2.3.5", title:"Legislation",
  business:"Consumer, employee & environmental law, and IP",
  status:"live",
  notes:[
    {h:"Areas of legislation", html:`
      <ul>
        <li><b>Consumer protection</b> — goods must be of satisfactory quality, as described and fit for purpose, with honest advertising. Protects customers but adds compliance cost.</li>
        <li><b>Employee protection</b> — rules on contracts, minimum wage, working hours, discrimination and unfair dismissal. Protects staff but raises labour costs and paperwork.</li>
        <li><b>Environmental protection</b> — limits on pollution, waste and emissions. Protects the environment but can raise production costs.</li>
        <li><b>Health and safety</b> — duty to provide a safe workplace, training and equipment. Reduces accidents but costs time and money.</li>
      </ul>`},
    {h:"Competition policy & intellectual property", html:`
      <p><b>Competition policy</b> stops firms abusing market power (e.g. price-fixing or unfair mergers), protecting consumers and smaller rivals.</p>
      <p><b>Intellectual property (IP) rights</b> protect a firm's creations:</p>
      <ul>
        <li><b>Copyright</b> — protects original works (writing, music, software).</li>
        <li><b>Patents</b> — protect new inventions, giving a period of exclusive use.</li>
        <li><b>Trademarks</b> — protect brand names, logos and symbols.</li>
      </ul>`},
    {h:"Overall effect on business", html:`
      <p>Legislation generally <b>raises costs and administration</b> for businesses, but it also builds <b>consumer trust</b>, protects reputation, creates a level playing field and, through IP, rewards innovation. Breaking the law risks fines, legal action and serious damage to reputation.</p>`}
  ],
  definitions:[
    {term:"Consumer protection", marks:2, body:`Laws ensuring goods are of satisfactory quality, as described and fit for purpose, with honest selling <span class="pt">1</span>; they protect customers but add compliance costs for firms <span class="pt">2</span>.`},
    {term:"Patent", marks:2, body:`A legal right protecting a new invention, giving the holder a period of exclusive use <span class="pt">1</span>; it lets a firm profit from innovation without immediate copying by rivals <span class="pt">2</span>.`},
    {term:"Trademark", marks:2, body:`A legal protection for a brand name, logo or symbol <span class="pt">1</span>; it stops others using the firm's brand identity and protects its reputation <span class="pt">2</span>.`},
    {term:"Health and safety legislation", marks:2, body:`Laws requiring businesses to provide a safe working environment, training and equipment <span class="pt">1</span>; it reduces accidents but adds cost and administration <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'patent'.",
     model:`A patent is a legal right protecting a new invention, giving the holder a period of exclusive use <span class="pt">1</span>; it lets a firm profit from innovation without immediate copying <span class="pt">2</span>.`,
     fb:"Protects-an-invention plus the exclusive-use/profit point."},
    {marks:4, q:"Explain one way consumer protection legislation affects a business.",
     model:`Consumer protection law requires goods to be of satisfactory quality and as described <span class="pt">1</span>. The business must check quality and advertise honestly, which adds cost <span class="pt">2</span>. However, meeting these standards builds customer trust <span class="pt">3</span>, protecting the firm's reputation and encouraging repeat custom <span class="pt">4</span>.`,
     fb:"Identifies the requirement and chains to both a cost and a trust/reputation benefit."}
  ],
  caseStudy:{
    business:"Operating within the law",
    intro:`<p>Questions here involve how a law — consumer, employee, environmental, health and safety, competition or IP — affects a business's costs, reputation and competitiveness.</p>`
  },
  exam:[
    {marks:8, q:"Discuss the impact on a business of tighter employee protection legislation. (8)",
     model:`<p><span class="tag t-P">POINT</span>Tighter employee protection raises a business's costs. <span class="tag t-A">APPLY</span>Rules on minimum wage, working hours and conditions mean higher pay and more administration. <span class="tag t-C">CHAIN</span>This increases labour costs and reduces flexibility, which can squeeze margins, especially for a labour-intensive firm.</p>
     <p><span class="tag t-J">HOWEVER</span>However, protecting employees can bring benefits. <span class="tag t-A">APPLY</span>Fair treatment and safe conditions tend to raise motivation and reduce staff turnover. <span class="tag t-C">CHAIN</span>This can improve productivity and quality and protect the firm's reputation as an employer, helping it attract and keep good staff — offsetting some of the extra cost.</p>`,
     fb:"Model answer (indicative content). Higher labour cost vs motivation/retention and reputation, applied throughout."}
  ],
  resources:[]
},
{
  code:"2.3.5.3", subtheme:"2.3.5", title:"The competitive environment",
  business:"Competitor numbers, size & behaviour",
  status:"live",
  notes:[
    {h:"How competition affects a business", html:`
      <p>The level and nature of competition shapes a firm's pricing, marketing and profit:</p>
      <ul>
        <li><b>Number of competitors</b> — many rivals (high competition) limits the price a firm can charge and squeezes margins; few rivals gives more pricing power.</li>
        <li><b>Size of competitors</b> — large rivals may enjoy economies of scale, lower costs and bigger marketing budgets, making it hard for small firms to compete on price.</li>
        <li><b>Behaviour of competitors</b> — price wars, aggressive promotion or rapid innovation force a firm to respond or lose customers.</li>
      </ul>`},
    {h:"How a small business can compete", html:`
      <p>A small business cannot usually win on price against large rivals, so it competes through:</p>
      <ul>
        <li><b>Excellent customer service</b> and personal relationships.</li>
        <li><b>Niche focus</b> — serving a specific segment larger firms ignore.</li>
        <li><b>Differentiation</b> — a unique product, quality or local identity (USP).</li>
        <li><b>Flexibility</b> — responding quickly to customer needs and market changes.</li>
      </ul>`}
  ],
  definitions:[
    {term:"Competitive environment", marks:2, body:`The nature and level of competition a business faces, including the number, size and behaviour of its rivals <span class="pt">1</span>; it shapes the firm's pricing, marketing and profit <span class="pt">2</span>.`},
    {term:"Competitive advantage", marks:2, body:`A feature that lets a business outperform its rivals, such as lower costs or a unique product <span class="pt">1</span>; it helps the firm win and keep customers <span class="pt">2</span>.`},
    {term:"Price war", marks:2, body:`When competing firms repeatedly cut prices to win customers from each other <span class="pt">1</span>; it can boost sales volume but badly damages everyone's margins and profit <span class="pt">2</span>.`}
  ],
  practice:[
    {marks:2, q:"Define the term 'competitive advantage'.",
     model:`Competitive advantage is a feature that lets a business outperform its rivals, such as lower costs or a unique product <span class="pt">1</span>; it helps the firm win and keep customers <span class="pt">2</span>.`,
     fb:"Outperform-rivals plus the win/keep-customers point."},
    {marks:4, q:"Explain one way a small business could compete against a large rival.",
     model:`One way is to offer excellent, personal customer service <span class="pt">1</span>. A small firm can build relationships and respond quickly to individual needs in a way a large rival cannot <span class="pt">2</span>. This creates customer loyalty <span class="pt">3</span>, so customers return and recommend the business rather than switching to a bigger competitor on price <span class="pt">4</span>.`,
     fb:"Names a method (service/niche/differentiation) and chains to loyalty."}
  ],
  caseStudy:{
    business:"Competing in the market",
    intro:`<p>Questions here involve a business judging how competition (the number, size and behaviour of rivals) affects it, and how a smaller firm can compete.</p>`
  },
  exam:[
    {marks:10, q:"Assess how a small business can best compete in a market dominated by large firms. (10)",
     model:`<p><span class="tag t-P">POINT</span>A small business can compete by focusing on a niche. <span class="tag t-A">APPLY</span>Rather than take on large firms across the whole market, it serves a specific segment they overlook or serve poorly. <span class="tag t-C">CHAIN</span>By tailoring its product and service to that segment, it builds loyalty and can charge a fair price without competing head-on on cost.</p>
     <p><span class="tag t-J">HOWEVER</span>However, a niche strategy has limits. <span class="tag t-A">APPLY</span>A niche is small, so sales potential is capped, and a large firm could enter the niche if it becomes profitable. <span class="tag t-C">CHAIN</span>The small business may then struggle against the rival's economies of scale and marketing budget, so it must keep differentiating through service and quality.</p>
     <p><span class="tag t-J">CONCLUSION</span>Overall, a small business competes best by combining a clear niche with strong service and differentiation rather than fighting on price; its success depends on staying flexible and keeping the loyalty of customers the large firms cannot serve as well.</p>`,
     fb:"Model answer (indicative content). Niche/service/differentiation vs limited scale and entry risk, judged on flexibility and loyalty."}
  ],
  resources:[]
},
];

window.EXAM_SKILLS = [
{
  marks:"2", command:"Define", ao:"Knowledge",
  tagline:"A complete definition in two parts",
  intro:`A 2-mark definition earns both marks only when it has <b>two clear elements</b>: first explain the term, then add the detail that completes its meaning. You do <b>not</b> need a business example or a chain of reasoning.`,
  approach:[
    "Explain the meaning of the term.",
    "Add the detail that completes it.",
    "Check you have <b>explained</b> the term, not just repeated it."
  ],
  example:{
    q:"Define the term 'brand'. (2)",
    weak:`&ldquo;A brand is a name or symbol.&rdquo;`,
    weaknote:`Identifies what a brand <i>is</i>, but not what it <i>does</i> — 1 mark at most.`,
    full:`A name or symbol used to identify a product <span class="mk">1</span> and distinguish it from competitors' products. <span class="mk">1</span>`,
    fullnote:`Mark 1 — a name/symbol that identifies a product. Mark 2 — it distinguishes the product from competitors.`
  },
  practice:{
    intro:`Give a complete meaning with two clear elements.`,
    qs:[
      "Define the term 'demand'. (2)",
      "Define the term 'supply'. (2)",
      "Define the term 'market segmentation'. (2)",
      "Define the term 'secondary market research'. (2)"
    ],
    samples:[
      {t:"Demand", a:`The quantity of a product consumers are willing and able to buy at a given price over a period of time.`},
      {t:"Supply", a:`The quantity of a product producers are willing and able to offer for sale at a given price over a period of time.`},
      {t:"Market segmentation", a:`Dividing a market into groups of customers with similar characteristics or needs.`},
      {t:"Secondary market research", a:`Using existing information previously collected for another purpose.`}
    ]
  }
},
{
  marks:"4", command:"Explain", ao:"Knowledge 1 · Application 2 · Analysis 1",
  tagline:"One point, two case details, one explained consequence",
  intro:`Build <b>one</b> clear point using a piece of knowledge, <b>two different</b> pieces of case evidence, and an explained consequence. A business name, or a single copied statistic, does <b>not</b> automatically earn application marks.`,
  approach:[
    "Identify one relevant point (the knowledge).",
    "Support it with <b>two different</b> details from the case.",
    "Explain why they matter: <i>this means… therefore…</i> the business impact.",
    "Develop the one consequence — no counterargument or conclusion needed."
  ],
  routine:`<b>Point or meaning</b> → <b>because</b> + case evidence → <b>this means</b> → <b>therefore</b> the business impact.`,
  caseName:"FreshSip",
  caseText:`FreshSip is a fruit-drink business with two shops near schools in Dubai. Its target customers are students aged 13&ndash;18. It sells drinks for AED 12, while nearby caf&eacute;s charge AED 15. It surveyed 80 existing customers and found 60% preferred mango. It did not survey customers of competing caf&eacute;s. It is also considering reusable bottles printed with customers' names, which cost more than its current packaging.`,
  example:{
    q:"Explain one benefit to FreshSip of using primary market research before launching its new drink. (4)",
    weak:`Primary research collects new, first-hand information. It can show which flavour customers prefer, helping the business choose a drink they are more likely to buy and increase sales.`,
    weaknote:`2/4 — knowledge and an explained consequence, but <b>no FreshSip evidence</b>. It could describe any drinks business.`,
    full:`Primary market research collects new, first-hand information for a specific purpose <span class="mk">K</span>. FreshSip found that 60% of respondents preferred mango <span class="mk">App</span>. As it targets students aged 13&ndash;18 <span class="mk">App</span>, it can choose a flavour suited to this group, making them more likely to buy the new drink and increasing FreshSip's sales <span class="mk">An</span>.`,
    fullnote:`4/4 — definition (K), <b>two</b> different case details (60% mango; students 13&ndash;18), and a developed consequence (An).`
  },
  practice:{
    intro:`Use the FreshSip case above. Write one developed paragraph for each.`,
    qs:[
      "Explain one limitation to FreshSip of surveying only its existing customers. (4)",
      "Explain one benefit to FreshSip of market segmentation. (4)",
      "Explain one benefit to FreshSip of differentiating its products through personalised reusable bottles. (4)",
      "Explain one reason why demand for FreshSip drinks may increase if nearby caf&eacute;s raise their prices. (4)"
    ],
    samples:[
      {t:"Surveying existing customers only", a:`A sample is a group selected to represent a wider population [K]. FreshSip surveyed 80 existing customers [App] but excluded people who buy from competing caf&eacute;s [App]. Those customers may prefer different flavours, so a drink based only on existing customers' views could fail to attract new buyers and limit the rise in sales [An].`},
      {t:"Market segmentation", a:`Segmentation divides customers into groups with similar characteristics or needs [K]. FreshSip targets students aged 13&ndash;18 [App] and operates near schools [App]. It can focus its promotion on these students, making advertising more relevant to likely buyers and increasing sales [An].`},
      {t:"Product differentiation", a:`Differentiation makes a product distinct from competing products [K]. FreshSip would offer reusable bottles [App] printed with customers' names [App]. Customers may value a bottle designed for them, giving a reason to choose FreshSip over competing caf&eacute;s and increasing sales [An].`},
      {t:"Competitors raising prices", a:`Substitute goods can be used in place of one another [K]. FreshSip sells at AED 12 [App] while nearby caf&eacute;s charge AED 15 [App]. If those caf&eacute;s raise prices, FreshSip becomes relatively cheaper, encouraging some customers to switch and increasing demand [An].`}
    ]
  }
},
{
  marks:"6", command:"Analyse (two)", ao:"Knowledge 2 · Application 2 · Analysis 2",
  tagline:"Two different points, each a full chain",
  intro:`Write <b>two different</b> points. For each one: a piece of knowledge, case evidence, and an explained consequence. Reporting a finding is <b>not</b> analysis — explain what the business can do with it and why that helps.`,
  approach:[
    "Point 1 → case evidence → explained consequence.",
    "Point 2 (different) → case evidence → explained consequence.",
    "Keep the two points distinct.",
    "No counterargument or conclusion is needed."
  ],
  routine:`Point → relevant case evidence → explained consequence. Then repeat with a <b>different</b> point. Knowledge is capped at 2 marks, so a definition does not create extra marks.`,
  caseName:"FreshSip",
  caseText:`FreshSip sells fruit drinks from two shops near schools in Dubai. It surveyed 80 existing customers: 60% preferred mango, and 70% said they would pay no more than AED 14. It did not question people who buy from competing caf&eacute;s. The research cost AED 5,000 of an AED 8,000 launch budget, leaving less for promotion.`,
  example:{
    q:"Analyse two benefits to FreshSip of using primary market research before launching its new drink. (6)",
    weak:`One benefit is finding out which flavour customers prefer: 60% preferred mango. A second benefit is finding out the price customers will pay: 70% would pay no more than AED 14.`,
    weaknote:`4/6 — two applied points, but neither is developed. Reporting the findings is not analysis.`,
    full:`One benefit is finding out which flavour customers prefer <span class="mk">K</span>. FreshSip found 60% preferred mango <span class="mk">App</span>. It can choose a flavour these customers want, making them more likely to buy and increasing sales <span class="mk">An</span>.<br><br>A second benefit is finding the price customers will pay <span class="mk">K</span>. FreshSip found 70% would pay no more than AED 14 <span class="mk">App</span>. Setting a price within this limit prevents customers rejecting the drink as too expensive, helping it sell more <span class="mk">An</span>.`,
    fullnote:`6/6 — two distinct, applied and developed chains (flavour choice; affordable price), each explaining why purchases could rise.`
  },
  practice:{
    intro:`Questions 1&ndash;2 use FreshSip. Questions 3&ndash;4 use ThreadUp (below) — select evidence from <i>that</i> case. ThreadUp sells casual clothes to students aged 16&ndash;18, with one shop closing at 6 pm, hoodies in school colours printed with names, and plans to sell online with delivery across Dubai (65% of customers would prefer to order online in the evening).`,
    qs:[
      "Analyse two benefits to FreshSip of using primary market research before launching its new drink. (6)",
      "Analyse two limitations to FreshSip of the primary market research it carried out. (6)",
      "Analyse two benefits to ThreadUp of product differentiation. (6)",
      "Analyse two benefits to ThreadUp of selling its clothes online. (6)"
    ],
    samples:[
      {t:"1 · FreshSip — benefits of research", a:`One benefit is identifying the preferred flavour [K]. 60% preferred mango [App], so choosing it matches customers' tastes, encouraging purchases and raising sales [An].<br>A second is finding an acceptable price [K]. 70% would pay no more than AED 14 [App], so pricing within this limit reduces rejection and helps increase sales [An].`},
      {t:"2 · FreshSip — limitations of research", a:`One limitation is an unrepresentative sample [K]. FreshSip did not question competitors' customers [App], whose preferences may differ, so the chosen flavour may fail to attract new buyers and limit sales growth [An].<br>A second is cost [K]. It spent AED 5,000 of its AED 8,000 budget [App], leaving less for promotion, so fewer customers hear about the launch and sales could be lower [An].`},
      {t:"3 · ThreadUp — differentiation", a:`One benefit is a reason to choose ThreadUp over rivals [K]. It prints customers' names on hoodies [App], so students who value personalisation choose it over a standard hoodie, increasing sales [An].<br>A second is loyalty [K]. It offers hoodies in school colours [App]; students may value matching their school identity and return for similar products, increasing repeat purchases [An].`},
      {t:"4 · ThreadUp — online selling", a:`One benefit is a wider market [K]. It would deliver across Dubai [App], so customers too far to visit can order from home, increasing potential buyers and sales [An].<br>A second is buying outside shop hours [K]. 65% prefer to order in the evening [App], so a website lets them buy at a convenient time, reducing missed purchases [An].`}
    ]
  }
},
{
  marks:"8", command:"Discuss", ao:"Balanced argument · best-fit levels",
  tagline:"A developed argument and a relevant counterargument",
  intro:`Develop an applied argument <b>and</b> a relevant counterargument on the <b>same</b> decision. Even when the question asks about benefits, explain why the benefit may be limited; for drawbacks, explain what could reduce the drawback. A one-sided answer cannot reach the top level.`,
  bands:`Level 1 = 1&ndash;2 · Level 2 = 3&ndash;5 · Level 3 = 6&ndash;8. Marked by <b>best fit</b>, not by adding skill marks.`,
  approach:[
    "State one argument and build a chain to a stated objective.",
    "Use <b>However…</b> to develop a counterargument with <i>different</i> evidence.",
    "Keep both sides on the same decision.",
    "End with what the outcome depends on (a conclusion is optional)."
  ],
  routine:`One benefit is… → <b>This is because…</b> (case detail) → <b>This means…</b> → <b>Therefore…</b> → <b>As a result…</b> (which objective it supports). Then: <b>However, this may be limited because…</b> (different evidence) → develop the consequence → <b>The extent depends on…</b>`,
  caseName:"FreshSip",
  caseText:`FreshSip wants to increase sales by 15% next term by launching a new flavour and attracting customers from competing caf&eacute;s. 60% of 80 surveyed existing customers preferred mango; competitors' customers were not surveyed. Recent student posts favour low-sugar drinks, but the survey asked about flavour, not sugar. Research cost AED 5,000 of an AED 8,000 budget.`,
  example:{
    q:"Discuss the benefits to FreshSip of using primary market research before launching its new drink. (8)",
    weak:`Primary research helps FreshSip choose a flavour customers want — 60% preferred mango, so choosing mango could match their tastes and increase sales. Research also costs money.`,
    weaknote:`3/8 (Level 2) — one developed side, but the counterpoint (cost) is undeveloped and there is no balance on the same decision.`,
    full:`Primary research could help FreshSip design a drink its student customers want. Since 60% of those surveyed preferred mango, it has evidence for choosing that flavour rather than guessing. The new drink is then more likely to match the tastes of its 13&ndash;18 target group, so these students may choose it near school, increasing purchases and supporting the 15% sales-growth target. Because the feedback comes from actual FreshSip customers, it is especially useful for encouraging current customers to try the launch.<br><br>However, the 80 respondents were all existing customers, so the findings may not represent students who use competing caf&eacute;s. If these potential new buyers have different preferences, mango may retain current customers without winning enough new purchases for 15% growth. Recent interest in low-sugar drinks also suggests flavour alone may not decide their choice, and the survey did not ask about sugar. This matters because AED 5,000 of the AED 8,000 budget is already spent, leaving only AED 3,000 to promote the launch. The research therefore supports a launch for current customers more than it supports attracting competitors' customers.`,
    fullnote:`7&ndash;8/8 (Level 3) — both sides applied and developed on the same objective; the balance tests who the sample represents, not a rule that 80 is &lsquo;too few&rsquo;.`
  },
  practice:{
    intro:`Plan a developed argument <b>and</b> counterargument for each.`,
    qs:[
      "Discuss the benefits to ThreadUp of selling its clothes online. (8)",
      "Discuss the drawbacks to ChillCup of using primary market research before opening its kiosk. (8)",
      "Discuss the benefits for a fast-food business of using emotional branding to promote its products. (8)"
    ],
    samples:[
      {t:"ThreadUp — online selling", a:`Online selling lets ThreadUp take orders after its shop closes at 6 pm. As 65% of its student customers prefer evening online shopping, the website matches their habits, so students buy at a convenient time rather than abandoning the purchase, and delivery across Dubai widens the market beyond those who can visit — supporting sales growth without another shop's rent.<br><br>However, attracting orders is not the same as profit. Delivery costs AED 12 per order: charged on, it may deter students with limited money, especially when a nearby seller offers similar clothes; absorbed, it cuts profit per order, so more orders are needed to recover the AED 18,000 website cost, and returns add cost. The benefit depends on reaching enough new customers who keep their purchases.`},
      {t:"ChillCup — drawbacks of research", a:`Research uses a large share of the launch money: AED 8,000 of AED 20,000 leaves only AED 12,000 for other needs, so less promotion near the college means fewer students try the kiosk and early sales are weaker. The three-week delay also misses the first week of term, when students form habits with rivals.<br><br>However, opening quickly matters little if the drink does not suit students. An earlier survey found 70% prefer low-sugar drinks; taste tests can identify which low-sugar flavour they enjoy, so ChillCup chooses a product they are more likely to buy again and avoids wasting ingredients. The drawback depends on whether better product choice brings enough repeat purchases to outweigh the cost and lost week.`},
      {t:"Fast food — emotional branding", a:`Emotional branding connects a brand with customers' feelings. Shared-meal adverts could link the food with friendship, and donations appeal to the 55% who like supporting charities, giving a reason to choose it beyond the meal itself — so customers may return with friends and recommend it, raising repeat purchases.<br><br>However, 65% say price is their main choice factor, and the meal costs AED 18 against a rival's AED 16. Price-sensitive students may keep buying the cheaper option, and the AED 1 donation cost either raises price (more switching) or cuts profit per meal. Emotional branding works best when it actually changes buying behaviour, not just what customers say they support.`}
    ]
  }
},
{
  marks:"10", command:"Assess", ao:"Competing arguments + supported judgement",
  tagline:"Weigh both sides, then judge",
  intro:`Develop competing arguments using case evidence, then finish with a <b>supported judgement</b>: what you choose, why, its likely effect, and the specific condition success depends on. &ldquo;It depends on demand&rdquo; is too general.`,
  bands:`Level 1 = 1&ndash;2 · Level 2 = 3&ndash;4 · Level 3 = 5&ndash;7 · Level 4 = 8&ndash;10. Best-fit marking.`,
  approach:[
    "Develop argument 1: point → evidence → what changes → why → effect on the objective.",
    "Develop the opposing argument to a similar depth.",
    "Judge: <b>choose</b>, give the strongest reason, the likely effect, and the <b>condition</b> for success.",
    "Pick the condition that actually limits <i>this</i> business and explain its effect."
  ],
  routine:`Conclusion = <b>Which?</b> (answer the exact question) · <b>Why?</b> (strongest evidence vs the alternative) · <b>What effect?</b> (on the stated objective) · <b>What does success depend on?</b> (a specific operational condition and how it enables the result).`,
  caseName:"FreshSip",
  caseText:`FreshSip wants to increase sales volume 15% next term. Nearby caf&eacute;s charge AED 15; it is considering AED 15 (competitive) or AED 12 (lower introductory). Variable cost is AED 8 per drink. 70% of 80 surveyed customers would pay no more than AED 14. It can make 100 drinks/day and sells 70. Fruit deliveries are sometimes late and queues occur after school. Promotion budget is limited.`,
  example:{
    q:"Assess the likely success of using competitive pricing for FreshSip's new drink. (10)",
    weak:`Competitive pricing means a price near rivals. FreshSip could charge AED 15 like nearby caf&eacute;s, so it is not more expensive, which could help it sell. Ingredients cost AED 8, so it gets AED 7 above cost. Overall, competitive pricing could work because the price is similar to rivals.`,
    weaknote:`3/10 (Level 2) — knowledge and evidence, but it doesn't weigh the survey against the price or justify a choice.`,
    full:`Competitive pricing at AED 15 gives AED 7 per drink above the AED 8 variable cost, vs AED 4 at AED 12 — more to cover other costs and fund promotion near the two schools, so more students become aware and try the drink, supporting the sales target; matching caf&eacute;s also avoids looking more expensive.<br><br>However, 70% of the 80 surveyed would pay no more than AED 14. AED 15 could put the drink beyond many students' limit, so fewer try it and 15% growth is harder, even with promotion. A temporary AED 12 price could encourage trial, though each sale then leaves less to cover costs.<br><br>Overall, I would choose the temporary AED 12 price because the survey shows affordability matters to these students; more trial purchases serve the volume objective more than extra contribution from fewer sales. This depends on reliable fruit supplies and quick after-school service so students can actually buy; FreshSip should review contribution before continuing the offer.`,
    fullnote:`8/10 (Level 4) — both sides developed and judged against the objective, with a clear choice, effect and a specific operational condition.`
  },
  practice:{
    intro:`Each conclusion should choose, justify, explain the effect and name a condition for success.`,
    qs:[
      "Assess the likely success of selling online in helping ThreadUp achieve its sales-growth objective. (10)",
      "Assess whether primary market research is the best way for ChillCup to identify customer needs before opening. (10)",
      "Assess the benefits to BiteBox of using emotional branding to increase repeat purchases. (10)"
    ],
    samples:[
      {t:"ThreadUp — online selling", a:`Online selling could grow ThreadUp without another branch: 65% prefer evening shopping, so a website captures purchases after 6 pm, and delivery across Dubai widens the market — supporting growth without extra rent.<br><br>However, AED 12 delivery may deter price-sensitive students if charged, or cut contribution if absorbed, so higher sales may give a smaller financial gain; returns and twice-weekly courier collections add cost and delay. Growth depends on reliable fulfilment, not just a website.<br><br>Overall I would support a controlled online launch because evening demand directly serves the objective, prioritising it over another branch. Success depends on accurate stock records (so it doesn't sell unavailable items) and more frequent courier collections; clear sizing would cut returns. Review delivery and return costs before committing beyond AED 18,000.`},
      {t:"ChillCup — research method", a:`Primary research can close ChillCup's knowledge gap: 70% want low-sugar drinks but the survey gave no flavour, so taste tests reveal the recipe students enjoy, making repeat purchases likely and cutting wasted ingredients — more relevant than a national report.<br><br>However, AED 8,000 is 40% of the budget, leaving less for promotion, and the three-week delay misses the first week of term, letting rivals win habits. The free national report is a quick starting point but can't confirm local tastes.<br><br>Overall I would use the report to narrow options, then run focused local taste tests, rather than secondary research alone. Local evidence best avoids an unpopular launch, but the full AED 8,000 is worth it only if it resolves a real uncertainty. Coordinate testing with the supplier's ten-day lead time so the chosen drink is ready to sell.`},
      {t:"BiteBox — emotional branding", a:`Emotional branding could give customers a reason to return beyond price: friendship adverts and donations appeal to the 55% who value supporting charities, so they may recommend BiteBox and return with friends, raising repeat purchases and loyalty.<br><br>However, 65% say price is their main factor, and BiteBox charges AED 18 vs a rival's AED 16; many may appreciate the message yet buy cheaper, and the AED 1 donation cost cuts profit or forces a price rise. A positive image doesn't automatically fund the commitment.<br><br>Overall, branding is likely to retain customers who value the charity message, but I would use it alongside good value and service, not alone. Success depends on recording each donation accurately and agreed charity collections; if promised meals aren't delivered, the trust the campaign relies on weakens. Check repeat buying and whether sales cover the donation cost before extending it.`}
    ]
  }
},
{
  marks:"12", command:"Assess", ao:"Developed evaluation + supported judgement", note:"Units 3 &amp; 4",
  tagline:"A wider-ranging, balanced assessment",
  intro:`The 12-mark <b>Assess</b> is common in Units 3 and 4. Develop a balanced, wider-ranging assessment: explain different effects, compare their significance, and use the business situation to support a judgement. It is <b>not</b> a 10-marker with two extra sentences &mdash; it gives more scope for a wider range of factors and a stronger comparison. Use PECAN throughout.`,
  bands:`Level 1 = 1&ndash;2 · Level 2 = 3&ndash;4 · Level 3 = 5&ndash;8 · Level 4 = 9&ndash;12. Best-fit marking.`,
  approach:[
    "Two <b>distinct</b> supporting arguments, each a full PECAN chain.",
    "One <b>substantial</b> counterargument or alternative (add a second if it improves the assessment).",
    "End each main paragraph with a <b>Now judge</b> sentence on its significance.",
    "Conclude: which matters most, why in <i>this</i> situation, why it outweighs the alternative, and what success depends on."
  ],
  routine:`<b>P</b>oint → <b>E</b>xplain → <b>C</b>hain → <b>A</b>pplication throughout → <b>N</b>ow judge. Conclusion = <b>Which</b> matters most? · <b>Why</b> strongest here? · <b>Why</b> the competing argument is less significant? · <b>What condition</b> could change the judgement?`,
  caseName:"NovaSport (Unit 3)",
  caseText:`NovaSport is a sportswear retailer with six stores and 12% local market share. It wants to raise this to 18% within two years. It could buy rival FitLine (four stores, 5% share) for AED 24m, financed mainly by borrowing. Both sell similar products in nearby areas, so some customers shop at both. FitLine has a successful online shop; NovaSport sells only in stores. FitLine uses different stock software and pays higher staff commission, and NovaSport's managers have limited experience of integrating another business.`,
  example:{
    q:"Assess the benefits to NovaSport of acquiring FitLine. (12)",
    weak:`Inorganic growth is expansion through a takeover. NovaSport could buy FitLine's four stores, making it bigger and increasing sales, and use FitLine's online shop. However, the takeover costs AED 24m and borrowing can be expensive. Overall it could help NovaSport grow, but this depends on managing the takeover well.`,
    weaknote:`4/12 (Level 2) — effects are asserted, not explained; the conclusion doesn't weigh benefits against integration and borrowing.`,
    full:`Acquiring FitLine gives NovaSport four stores without the delay of opening them, increasing customer access quickly and supporting the 18% target within two years &mdash; organic expansion would be slower. However, NovaSport's 12% and FitLine's 5% total only 17% before any growth, and overlapping customers mean the takeover need not create equivalent new demand. <b>Now judge:</b> faster access is significant, but store numbers alone don't prove the target is met.<br><br>FitLine's online shop offers a <i>different</i> growth route. As NovaSport depends on store visits, online ordering could capture purchases from outside the catchments or after hours; if fulfilled reliably, this adds sales beyond those transferred with the takeover. <b>Now judge:</b> online access may matter more for additional growth than nearby stores, but it depends on integrating the stock systems so advertised products are available.<br><br>However, borrowing AED 24m adds interest while integration may disrupt sales. Different software can cause stock errors and cancelled online orders &mdash; weakening the very benefit meant to drive growth &mdash; and unequal commission may dissatisfy staff. <b>Now judge:</b> these matter because managers have limited integration experience; a larger network with unreliable service could lose customers rather than gain share.<br><br>Overall, I would support the acquisition only with a funded integration plan. The strongest benefit is FitLine's established online channel, alongside faster physical expansion; I would not justify it by combining shares, since the starting total is below 18% and customers overlap. Success depends on aligning stock software and staff incentives before expanding promotion, and checking operating cash can cover borrowing. If these conditions can't be met within two years, staged organic growth may be more manageable despite being slower.`,
    fullnote:`10/12 (Level 4) — weighs different benefits, tests assumptions, and the judgement names the most important benefit, compares an alternative and sets context-specific success conditions.`
  },
  practice:{
    intro:`Question 1 is a Unit 3 case (AeroBuild); Question 2 is a Unit 4 case (PureGlow). Plan two different arguments and a developed counterargument, judge throughout, then conclude.`,
    qs:[
      "<b>Unit 3 · AeroBuild.</b> AeroBuild is building a new factory to cut production costs, scheduled for 20 weeks and due to finish before a large customer order in week 22. Critical-path activities have no float; some tasks have two weeks' float. A one-week delay costs AED 60,000 in temporary arrangements. The equipment supplier has missed delivery dates before, the manager updates the network only monthly, and extra specialist installers are hard to recruit. <br><i>Assess the benefits to AeroBuild of using critical path analysis to manage the factory project. (12)</i>",
      "<b>Unit 4 · PureGlow.</b> PureGlow sells skincare with the same packaging and advertising in every country. Entering Market Z, research found 68% prefer fragrance-free products and local-language packaging; its range is scented and local rivals already sell fragrance-free at lower prices. Adapting the formula and packaging costs AED 2m and adds six weeks to launch. PureGlow wants profitable growth and a consistent international brand; the distributor gives feedback but the supplier needs firm orders three months ahead. <br><i>Assess whether adapting its marketing mix is the best approach for PureGlow when entering Market Z. (12)</i>"
    ],
    samples:[
      {t:"AeroBuild (Unit 3) — CPA", a:`CPA identifies the activities that set the shortest completion time. AeroBuild can prioritise the no-float tasks so one delay doesn't push the project beyond 20 weeks, protecting the two-week gap before the week-22 order. <b>Now judge:</b> important, because late completion could disrupt the order and trigger AED 60,000 weekly temporary-production costs.<br><br>The network also shows tasks with two weeks' float, so AeroBuild can retime them or move suitable resources to urgent work, easing pressure. <b>Now judge:</b> a separate benefit from finding the finish date, though staff can only move to tasks matching their skills.<br><br>However, the network relies on reliable estimates and current information. The supplier has missed deliveries, so a critical activity may start late even with an accurate diagram; monthly updates could reveal slippage too late, and installers can't easily be added. <b>Now judge:</b> information is less useful when the firm can't respond &mdash; CPA doesn't itself make the supplier deliver.<br><br>Overall, CPA is valuable for prioritising work and preserving the gap before week 22, but needs active monitoring rather than monthly reporting. Its strongest benefit is showing where a delay threatens the order. Success depends on frequent updates, confirmed delivery dates and realistic installer contingencies; without them the plan describes the risk more than it controls it.`},
      {t:"PureGlow (Unit 4) — adapting the mix", a:`Adapting the formula could make the range suitable for Market Z. As 68% prefer fragrance-free, keeping scented products risks excluding much of the researched market; a fragrance-free version could encourage trial and repeat buying, supporting profitable growth. <b>Now judge:</b> product adaptation matters because customers may reject an unsuitable formula even when they know the brand.<br><br>Local-language packaging helps customers understand the product, reducing uncertainty and making retailers more willing to recommend it. <b>Now judge:</b> a distinct benefit from formula suitability &mdash; and brand colours and logo can be kept, so adaptation need not lose the international identity.<br><br>However, adaptation costs AED 2m and delays launch six weeks, so more sales are needed to recover it, while established rivals already sell fragrance-free at lower prices. Adaptation removes a disadvantage without necessarily creating a reason to choose PureGlow, and the three-month lead time makes rapid change hard. <b>Now judge:</b> local suitability is necessary but may not be enough if price and availability stay uncompetitive.<br><br>Overall, I would adapt the formula and essential packaging while keeping the core brand identity. The research gives a stronger reason to adapt than simply saving cost. Success depends on using distributor feedback to confirm the segment, ordering in time, and setting a price that covers adaptation without being unrealistic against rivals. A focused launch would test demand first; if the conditions can't support enough sales, PureGlow should delay entry rather than assume adaptation alone guarantees success.`}
    ]
  }
},

{
  marks:"20", command:"Evaluate", ao:"PECAN · five paragraphs · supported recommendation",
  tagline:"The 5×5 PECAN essay",
  intro:`Use <b>five paragraphs</b>: positive, negative, positive, negative, then a conclusion. Develop <b>different</b> arguments rather than repeating one benefit, and end each main paragraph on a judgement of how significant it is in this case.`,
  bands:`Level 1 = 1&ndash;4 · Level 2 = 5&ndash;8 · Level 3 = 9&ndash;14 · Level 4 = 15&ndash;20. Best-fit marking — neither length nor connective count guarantees a level.`,
  pecan:[
    {k:"P", l:"Point", c:"#1b4fd6", d:"Answer the question with a clear argument."},
    {k:"E", l:"Explain", c:"#0a7a5c", d:"Explain why, using business knowledge."},
    {k:"C", l:"Chain", c:"#b8730a", d:"Develop at least two connected consequences."},
    {k:"A", l:"Application", c:"#7b2fd6", d:"Use specific case evidence throughout."},
    {k:"N", l:"Now judge", c:"#c92a2a", d:"How significant is the argument — and what does it depend on?"}
  ],
  approach:[
    "Paragraphs 1&ndash;2: option A — a benefit, then a limitation.",
    "Paragraphs 3&ndash;4: option B — a benefit, then a limitation.",
    "End each main paragraph with a <b>Now judge</b> sentence on its significance.",
    "Paragraph 5: choose, justify, reject the alternative, and state what success depends on."
  ],
  routine:`Conclusion = the <b>4 Ws</b>: <b>Which</b> option? · <b>Why</b> this one (strongest evidence + objective)? · <b>Why reject</b> the alternative (the trade-off, not just its disadvantage)? · <b>What does success depend on</b> (a specific condition and its consequence)?`,
  caseName:"FreshSip",
  caseText:`FreshSip wants 15% sales-volume growth next term while covering operating costs. It could use competitive pricing at AED 15 (matching caf&eacute;s) or penetration pricing at AED 12 for a new mango drink. Variable cost is AED 8. 70% of 80 surveyed existing customers would pay no more than AED 14; rivals' customers were not surveyed. It makes 100 drinks/day and sells 70; queues occur after school and fruit is sometimes late.`,
  example:{
    q:"Evaluate whether FreshSip should use competitive pricing or penetration pricing to launch its new drink. (20)",
    weak:``,
    weaknote:`Plan: &para;1 competitive — benefit · &para;2 competitive — limitation · &para;3 penetration — benefit · &para;4 penetration — limitation · &para;5 conclusion.`,
    full:`<b>&para;1 (competitive — benefit):</b> At AED 15, FreshSip gets AED 7 per drink above its AED 8 cost vs AED 4 at AED 12. This extra AED 3 helps cover staffing and promotion when funds are limited, and advertising near the schools could raise trial. <b>Now judge:</b> this financial advantage matters for covering costs, but matching rivals alone gives students no reason to switch — the flavour must justify the price.<br><br><b>&para;2 (competitive — limitation):</b> 70% of 80 existing respondents would pay no more than AED 14, so AED 15 risks discouraging trial among the 13&ndash;18 target; fewer trials mean fewer repeat buyers, weakening 15% growth. <b>Now judge:</b> a strong limit for current customers, though the sample excludes rivals' buyers, so not all potential customers necessarily share this limit.<br><br><b>&para;3 (penetration — benefit):</b> AED 12 fits the surveyed budget and undercuts caf&eacute;s; if students like the flavour they may return and recommend it, raising volume. <b>Now judge:</b> a stronger route to the volume objective because it tackles the price barrier directly, though retention still depends on taste and service.<br><br><b>&para;4 (penetration — limitation):</b> AED 12 leaves only AED 4 contribution, so FreshSip needs 1.75&times; as many sales (7&divide;4) for the same contribution; a 15% rise alone won't offset this, and queues or late fruit could stop students buying. <b>Now judge:</b> the real issue is whether extra completed orders produce enough contribution to cover costs.<br><br><b>&para;5 (conclusion):</b> Overall I would choose a limited AED 12 introductory offer, then review orders, repeat buying and contribution. It serves the student-focused volume objective better than AED 15, but I would not assume 15% growth makes it worthwhile — AED 15 gives more contribution only if enough students accept it. Success depends on agreed fruit delivery times and faster after-school service so interested customers can buy; if the offer mainly discounts sales that would have happened anyway, FreshSip should adjust it.`,
    fullnote:`~14/20 (top of Level 3). To reach Level 4, sustain comparative judgement and explain which evidence should carry most weight and why the chosen option still wins despite its limitation.`
  },
  practice:{
    intro:`Use PECAN in each main paragraph and end each on a &lsquo;Now judge&rsquo; sentence. Allow about 30 minutes including reading and planning.`,
    qs:[
      "Evaluate whether ThreadUp should launch an online shop or open a kiosk to increase sales. (20)",
      "Evaluate whether ChillCup should use further primary research or rely on secondary research before opening. (20)"
    ],
    samples:[
      {t:"ThreadUp — online shop vs kiosk", a:`<b>&para;1:</b> An online shop reaches more students without another store — 65% prefer evening shopping and delivery across Dubai reaches distant customers, increasing sales beyond the local shop. <b>Now judge:</b> strong for reach, but the survey covers current customers only.<br><br><b>&para;2:</b> AED 12 delivery raises the price if passed on (students may buy nearby) or cuts the money kept per sale if absorbed; handwritten stock could oversell. <b>Now judge:</b> fulfilment accuracy matters more than website traffic.<br><br><b>&para;3:</b> A kiosk lets students try hoodies on, cutting returns, and reaches a new school catchment with no delivery charge. <b>Now judge:</b> good for confidence and service, but less geographic reach than online.<br><br><b>&para;4:</b> The kiosk needs two extra staff and closes at 6 pm, so costs continue and evening shoppers are missed; output can only rise from 45 to 60 hoodies/week. <b>Now judge:</b> either option disappoints buyers if orders exceed supply.<br><br><b>&para;5:</b> I would choose a controlled online launch because evening convenience and wider reach offer the stronger growth route; I would reject the kiosk initially as it misses evening demand and adds staffing cost. Success depends on accurate stock records, realistic delivery promises and enough production to meet confirmed orders — protecting ThreadUp's reliable-service reputation.`},
      {t:"ChillCup — further primary vs secondary research", a:`<b>&para;1:</b> Primary research can identify the low-sugar flavour local students enjoy — 70% want low sugar but no flavour is known, so taste tests close the gap and cut wasted ingredients. <b>Now judge:</b> directly useful, if the tests resolve the real gap rather than repeat known facts.<br><br><b>&para;2:</b> AED 8,000 is 40% of the budget and the three-week delay misses the first week of term, letting rivals form habits. <b>Now judge:</b> the full programme may cost more than the knowledge gained is worth.<br><br><b>&para;3:</b> Secondary research is free and immediate; the national report preserves the AED 8,000 and allows opening in week one, promoting while students choose where to buy. <b>Now judge:</b> timing is valuable because habits set early.<br><br><b>&para;4:</b> National trends may not match this college, so a widely popular flavour could sell weakly and waste ingredients, and correcting the recipe needs the ten-day supplier lead time. <b>Now judge:</b> fast opening is less useful if a poor product choice undermines repeat purchases.<br><br><b>&para;5:</b> I would use the national report to narrow the choices, then run focused local taste tests, rather than secondary research alone. Primary evidence is stronger for the specific flavour decision, but I would not automatically spend the whole AED 8,000. Success depends on testing representative local students promptly and coordinating the final recipe with the ten-day lead time, turning better knowledge into a drink students can actually buy.`}
    ]
  }
}
];

// Contact details — fill these in to switch the Contact page live.
// whatsapp: digits only incl. country code, no + or spaces (e.g. 9715XXXXXXXX). web3key: optional Web3Forms access key for inbox delivery.
window.CONTACT = { email:"mrakademy1@gmail.com", whatsapp:"", whatsappDisplay:"", web3key:"" };

