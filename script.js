/* ============================================================ */
/* TRANSLATIONS                                                  */
/* ============================================================ */
const T = {
  en: {
    "brand.title": "Cyber Risk Map — Hail Municipality",
    "brand.sub": "Cybersecurity Risk Platform",
    "btn.login": "Login",
    "nav.home": "Home",
    "nav.assets": "Assets",
    "nav.map": "Risk Map",
    "nav.impact": "Impact Analysis",
    "nav.reports": "Reports",
    "nav.about": "About",
    "hero.title": "Cyber Risk Map",
    "card.impact.title": "Impact Analysis",
    "card.impact.desc": "Determine the scope of affected digital services and trace the effects of failing interconnected assets.",
    "card.map.title": "Risk Map",
    "card.map.desc": "Display relationships and dependencies between digital assets, and illustrate potential impact propagation paths.",
    "card.assets.title": "Asset Registry",
    "card.assets.desc": "Review digital assets and services, with their risk classification, criticality level, and associated dependencies.",
    "stat.assets": "Total Assets",
    "stat.assets.desc": "Registered assets across the municipality.",
    "stat.high": "High Risk",
    "stat.high.desc": "Assets rated High or Critical.",
    "stat.deps": "Dependencies",
    "stat.deps.desc": "Documented and proposed relationships.",
    "page.assets.title": "Asset Registry",
    "page.map.title": "Risk Map",
    "page.impact.title": "Impact Analysis",
    "page.reports.title": "Reports",
    "page.about.title": "About the Platform",
    "sidebar.assets.h": "Filter by Risk",
    "sidebar.assets.p": "Select a classification",
    "sidebar.impact.h": "Select an Asset",
    "sidebar.impact.p": "Choose to analyze impact",
    "content.assets.h": "Registered Assets",
    "content.assets.p": "Click any asset to view its full profile.",
    "risk.all": "All Assets",
    "risk.critical": "Critical",
    "risk.high": "High",
    "risk.medium": "Medium",
    "risk.low": "Low",
    "legend.title": "Legend",
    "legend.documented": "Documented",
    "legend.proposed": "Proposed",
    "report.h": "Asset Risk Levels and Recommended Actions",
    "report.card.critical": "Priority protection",
    "report.card.high": "Elevated monitoring",
    "report.card.medium": "Standard oversight",
    "report.card.total": "Total Assets",
    "report.card.total.hint": "Registered assets",
    "th.asset": "Asset", "th.category": "Category", "th.risk": "Risk Level",
    "th.score": "Score", "th.source": "Source", "th.threats": "Threats",
    "recs.h": "Recommended Actions",
    "recs.p": "Prioritized actions derived from the asset register and dependency analysis.",
    "recs.1.t": "Prioritize Critical and High-Risk Assets",
    "recs.1.d": "Ensure Critical and High-rated assets are covered by the highest-priority monitoring, isolated backups, and incident response routines.",
    "recs.2.t": "Strengthen Shared Dependencies",
    "recs.2.d": "Assets with multiple dependents produce the largest cascading impact. Redundancy and failover plans should be reviewed for these components.",
    "recs.3.t": "Enforce Multi-Factor Authentication",
    "recs.3.d": "Apply MFA across all administrative and employee-facing access points to reduce credential compromise risk.",
    "recs.4.t": "Schedule Periodic Risk Reviews",
    "recs.4.d": "Keep the registry aligned with infrastructure changes through recurring risk assessments and dependency audits.",
    "btn.export": "Export as PDF",
    "about.1.label": "Project Overview",
    "about.1.title": "A unified cyber risk view for Hail Municipality's digital assets",
    "about.2.label": "Scope and Methodology",
    "about.2.title": "How assets and dependencies are classified",
    "about.3.label": "Applications Covered",
    "about.3.title": "Public services included in the registry",
    "about.3.intro": "The registry currently includes the following public-facing services and platforms.",
    "about.4.label": "References and Data Sources",
    "about.4.title": "Frameworks and vulnerability databases",
    "about.4.intro": "The project draws on publicly available references for threat intelligence, cybersecurity guidance, and municipal service information. Each source serves a distinct role in the analysis.",
    "about.4.note": "These references are used to support threat analysis and terminology. They are not live data integrations. The asset data shown within the platform is illustrative and intended for modeling purposes.",
    "about.5.label": "Inquiries",
    "about.5.title": "Contact information",
    "about.c1": "Institution", "about.c1.v": "Hail Municipality",
    "about.c2": "Department", "about.c2.v": "Cybersecurity Unit",
    "about.c3": "Email",
    "about.app1": "Hail Municipality Portal",
    "about.app2": "Baladi Platform",
    "about.app3": "Forsah Platform",
    "about.app4": "Ministry of Municipalities",
    "about.ref1.t": "National Cybersecurity Authority (NCA)",
    "about.ref1.d": "Reference for cybersecurity controls and frameworks",
    "about.ref2.t": "National Vulnerability Database (NVD)",
    "about.ref2.d": "Reference for published vulnerability information",
    "about.ref3.t": "CISA KEV Catalog",
    "about.ref3.d": "Reference for confirmed exploited vulnerabilities",
    "about.ref4.t": "Digital Government Authority (DGA)",
    "about.ref4.d": "Reference for digital government frameworks",
    "footer.sub": "Hail Municipality",
    "footer.copy": "© 2026 Cyber Risk Map — Hail Municipality. All rights reserved.",
    "login.title": "Login",
    "login.user": "Username",
    "login.pass": "Password",
    "login.submit": "Sign In",
    "login.error": "Invalid username or password.",
    "logged.as": "Signed in as",
    "btn.logout": "Logout",
    "modal.type": "Type", "modal.risk": "Risk Level", "modal.score": "Impact Score", "modal.source": "Source",
    "modal.threats": "Threats", "modal.controls": "Controls",
    "modal.dependsOn": "Depends On", "modal.dependedBy": "Affected If This Fails",
    "impact.source": "Source Asset", "impact.direct": "Directly Affected", "impact.indirect": "Indirectly Affected",
    "impact.empty": "No directly affected assets",
    "about.p1a": "The Cyber Risk Map platform provides a unified digital environment for reviewing digital assets and services, analyzing security risks, and understanding interdependencies between them. It supports a clearer view of how potential risks can propagate across connected services.",
    "about.p1b": "The platform represents digital assets and their dependencies within an interactive map that allows users to explore relationships between components, identify the most critical assets, and analyze potential scenarios of service disruption or security incidents.",
    "about.p1c": "It also provides an organized asset registry, visual risk indicators, and consolidated reports containing analysis results and recommended actions. This integration improves information clarity, supports remediation prioritization, and facilitates risk tracking and data-driven decision-making.",
    "about.p1d": "The platform is designed as an analytical support tool for cyber risk management and does not replace official security monitoring systems or the authority's approved assessment tools.",
    "about.p2a": "The platform scope covers the organization of digital assets and services, the representation of dependency relationships, the classification of risk levels, the analysis of potential impacts, and the preparation of reports that document findings and prioritize remediation.",
    "about.p2b": "The methodology follows these stages:",
    "about.p2c": "Asset Inventory: Organize digital assets, services, and technical components within a unified registry.",
    "about.p2d": "Dependency Mapping: Represent relationships between assets and connected services based on available data.",
    "about.p2e": "Risk Assessment: Classify risks according to the assessment criteria adopted in the project model.",
    "about.p2f": "Impact Analysis: Identify services and assets that may be affected when a component fails or a risk scenario occurs.",
    "about.p2g": "Reporting: Document analysis results, risk levels, and recommended actions for review and follow-up.",
    "about.p2h": "Output accuracy depends on data completeness and correctness, and on verification of relationships between assets. When virtual or public data is used, results are presented as modeled outputs and do not represent an actual assessment of the municipality's internal technical environment."
  },
  ar: {
    "brand.title": "خريطة مخاطر الأمن السيبراني — أمانة منطقة حائل",
    "brand.sub": "منصة تحليل المخاطر السيبرانية",
    "btn.login": "تسجيل الدخول",
    "nav.home": "الرئيسية",
    "nav.assets": "سجل الأصول",
    "nav.map": "خريطة المخاطر",
    "nav.impact": "تحليل الأثر",
    "nav.reports": "التقارير",
    "nav.about": "عن المنصة",
    "hero.title": "خريطة مخاطر الأمن السيبراني",
    "card.impact.title": "تحليل الأثر",
    "card.impact.desc": "تحديد نطاق تأثر الخدمات الرقمية وتتبع الآثار الناتجة عن تعطل الأصول المترابطة.",
    "card.map.title": "خريطة المخاطر",
    "card.map.desc": "عرض العلاقات والاعتماديات بين الأصول الرقمية وتوضيح مسارات انتقال الأثر المحتملة.",
    "card.assets.title": "سجل الأصول",
    "card.assets.desc": "استعراض الأصول والخدمات الرقمية وتصنيفات المخاطر ومستوى الأهمية والاعتماديات المرتبطة بها.",
    "stat.assets": "إجمالي الأصول",
    "stat.assets.desc": "الأصول المسجلة على مستوى الأمانة.",
    "stat.high": "مخاطر مرتفعة",
    "stat.high.desc": "الأصول المصنفة كحرجة أو مرتفعة.",
    "stat.deps": "الاعتماديات",
    "stat.deps.desc": "علاقات موثقة ومقترحة.",
    "page.assets.title": "سجل الأصول",
    "page.map.title": "خريطة المخاطر",
    "page.impact.title": "تحليل الأثر",
    "page.reports.title": "التقارير",
    "page.about.title": "عن المنصة",
    "sidebar.assets.h": "تصفية حسب المخاطر",
    "sidebar.assets.p": "اختر التصنيف",
    "sidebar.impact.h": "اختر أصلًا",
    "sidebar.impact.p": "اختر لتحليل الأثر",
    "content.assets.h": "الأصول المسجلة",
    "content.assets.p": "اضغط على أي أصل لعرض ملفه الكامل.",
    "risk.all": "جميع الأصول",
    "risk.critical": "حرج",
    "risk.high": "مرتفع",
    "risk.medium": "متوسط",
    "risk.low": "منخفض",
    "legend.title": "مفتاح الخريطة",
    "legend.documented": "موثّق",
    "legend.proposed": "مقترح",
    "report.h": "مستويات مخاطر الأصول والإجراءات الموصى بها",
    "report.card.critical": "حماية ذات أولوية",
    "report.card.high": "مراقبة مكثفة",
    "report.card.medium": "متابعة اعتيادية",
    "report.card.total": "إجمالي الأصول",
    "report.card.total.hint": "الأصول المسجلة",
    "th.asset": "الأصل", "th.category": "التصنيف", "th.risk": "مستوى المخاطر",
    "th.score": "الدرجة", "th.source": "المصدر", "th.threats": "التهديدات",
    "recs.h": "الإجراءات الموصى بها",
    "recs.p": "إجراءات مرتبة حسب الأولوية مبنية على سجل الأصول وتحليل الاعتماديات.",
    "recs.1.t": "إعطاء الأولوية للأصول الحرجة والمرتفعة المخاطر",
    "recs.1.d": "ضمان أن الأصول الحرجة والمرتفعة المخاطر مشمولة بأعلى مستويات المراقبة والنسخ الاحتياطي المعزول وإجراءات الاستجابة للحوادث.",
    "recs.2.t": "تقوية الاعتماديات المشتركة",
    "recs.2.d": "الأصول التي تعتمد عليها أنظمة متعددة تنتج أعلى تأثير متسلسل. يجب مراجعة خطط التكرار والتحويل الاحتياطي لهذه المكونات.",
    "recs.3.t": "تطبيق المصادقة متعددة العوامل",
    "recs.3.d": "تطبيق المصادقة متعددة العوامل على جميع نقاط الوصول الإدارية والموجهة للموظفين لتقليل مخاطر اختراق البيانات الاعتمادية.",
    "recs.4.t": "جدولة مراجعات دورية للمخاطر",
    "recs.4.d": "الحفاظ على توافق السجل مع تغيرات البنية التحتية عبر تقييمات دورية للمخاطر وتدقيق الاعتماديات.",
    "btn.export": "تصدير بصيغة PDF",
    "about.1.label": "نبذة عن المشروع",
    "about.1.title": "رؤية موحدة لمخاطر الأصول الرقمية لأمانة منطقة حائل",
    "about.2.label": "النطاق والمنهجية",
    "about.2.title": "كيف يتم تصنيف الأصول والاعتماديات",
    "about.3.label": "التطبيقات المشمولة",
    "about.3.title": "الخدمات العامة المدرجة في السجل",
    "about.3.intro": "يشمل السجل حاليًا الخدمات والمنصات العامة التالية.",
    "about.4.label": "المراجع ومصادر البيانات",
    "about.4.title": "الأطر وقواعد بيانات الثغرات",
    "about.4.intro": "يعتمد المشروع على مراجع متاحة للجمهور لتحليل التهديدات والإرشادات السيبرانية ومعلومات الخدمات البلدية. لكل مصدر دور محدد في التحليل.",
    "about.4.note": "تُستخدم هذه المراجع لدعم تحليل التهديدات والمصطلحات. وهي ليست تكاملات بيانات مباشرة. بيانات الأصول المعروضة داخل المنصة توضيحية ومخصصة لأغراض النمذجة.",
    "about.5.label": "الاستفسارات",
    "about.5.title": "معلومات التواصل",
    "about.c1": "الجهة", "about.c1.v": "أمانة منطقة حائل",
    "about.c2": "الإدارة", "about.c2.v": "وحدة الأمن السيبراني",
    "about.c3": "البريد الإلكتروني",
    "about.app1": "بوابة أمانة منطقة حائل",
    "about.app2": "منصة بلدي",
    "about.app3": "منصة فرص",
    "about.app4": "وزارة البلديات والإسكان",
    "about.ref1.t": "الهيئة الوطنية للأمن السيبراني",
    "about.ref1.d": "مرجع للضوابط والأطر ذات الصلة بالأمن السيبراني",
    "about.ref2.t": "قاعدة بيانات الثغرات الوطنية",
    "about.ref2.d": "مرجع للمعلومات المنشورة عن الثغرات الأمنية",
    "about.ref3.t": "كتالوج الثغرات المستغلة المعروفة",
    "about.ref3.d": "مرجع للثغرات المرصود استغلالها فعليًا",
    "about.ref4.t": "هيئة الحكومة الرقمية",
    "about.ref4.d": "مرجع للأطر والإرشادات ذات الصلة بالحكومة الرقمية",
    "footer.sub": "أمانة منطقة حائل",
    "footer.copy": "© 2026 خريطة مخاطر الأمن السيبراني — أمانة منطقة حائل. جميع الحقوق محفوظة.",
    "login.title": "تسجيل الدخول",
    "login.user": "اسم المستخدم",
    "login.pass": "كلمة المرور",
    "login.submit": "تسجيل الدخول",
    "login.error": "اسم المستخدم أو كلمة المرور غير صحيحة.",
    "logged.as": "مسجّل كـ",
    "btn.logout": "خروج",
    "modal.type": "النوع", "modal.risk": "مستوى المخاطر", "modal.score": "درجة الأثر", "modal.source": "المصدر",
    "modal.threats": "التهديدات", "modal.controls": "الضوابط",
    "modal.dependsOn": "يعتمد على", "modal.dependedBy": "يتأثر عند التعطل",
    "impact.source": "الأصل المصدر", "impact.direct": "متأثر مباشرة", "impact.indirect": "متأثر بشكل غير مباشر",
    "impact.empty": "لا توجد أصول متأثرة مباشرة",
    "about.p1a": "توفّر منصة خريطة مخاطر الأمن السيبراني بيئة رقمية موحدة لاستعراض الأصول والخدمات الرقمية وتحليل المخاطر الأمنية والاعتماديات المتبادلة بينها، بما يسهم في فهم نطاق التأثير المحتمل للمخاطر على الخدمات المرتبطة.",
    "about.p1b": "تعتمد المنصة على تمثيل الأصول الرقمية وعلاقات الاعتماد بينها ضمن خريطة تفاعلية، تتيح استعراض الروابط بين المكونات، وتحديد الأصول ذات الأهمية الأعلى، وتحليل السيناريوهات المحتملة لتعطل الخدمات أو تأثرها بالمخاطر الأمنية.",
    "about.p1c": "كما توفر المنصة سجلًا منظمًا للأصول، ومؤشرات مرئية لمستويات المخاطر، وتقارير موحدة تتضمن نتائج التحليل والإجراءات المقترحة. ويساعد هذا التكامل على تحسين وضوح المعلومات، ودعم ترتيب أولويات المعالجة، وتسهيل متابعة المخاطر واتخاذ القرارات المبنية على البيانات المتاحة.",
    "about.p1d": "تم تصميم المنصة بوصفها نموذجًا تحليليًا داعمًا لإدارة المخاطر السيبرانية، ولا تُعد بديلًا عن أنظمة الرصد الأمني أو أدوات التقييم المعتمدة لدى الجهة.",
    "about.p2a": "يشمل نطاق المنصة تنظيم الأصول والخدمات الرقمية، وتمثيل علاقات الاعتماد بينها، وتصنيف مستويات المخاطر، وتحليل الآثار المحتملة، وإعداد تقارير تساعد على توثيق النتائج وتحديد أولويات المعالجة.",
    "about.p2b": "وتعتمد المنهجية على المراحل التالية:",
    "about.p2c": "حصر الأصول: تنظيم الأصول الرقمية والخدمات والمكونات التقنية ضمن سجل موحد.",
    "about.p2d": "تحديد الاعتماديات: تمثيل العلاقات بين الأصول والخدمات المرتبطة بها وفق البيانات المتاحة.",
    "about.p2e": "تقييم المخاطر: تصنيف المخاطر وفق معايير التقييم المعتمدة في نموذج المشروع.",
    "about.p2f": "تحليل الأثر: تحديد الخدمات والأصول التي قد تتأثر عند تعطل أحد المكونات أو تحقق سيناريو خطر.",
    "about.p2g": "إعداد التقارير: توثيق نتائج التحليل ومستويات المخاطر والإجراءات المقترحة للمراجعة والمتابعة.",
    "about.p2h": "تعتمد دقة المخرجات على اكتمال البيانات وصحتها، وعلى التحقق من العلاقات بين الأصول. وعند استخدام بيانات افتراضية أو عامة، تُعرض النتائج بوصفها مخرجات نموذجية وليست تقييمًا فعليًا للبيئة التقنية الداخلية للأمانة."
  }
};

/* ============================================================ */
/* ASSET DATABASE                                                */
/* ============================================================ */
const ASSETS = [
  { id:"hail-madinati", name:"Hail Madinati",  type:"Public Service", category:"Mobile App",
    criticality:"Medium", score:48, source:"Documented",
    threats:"Reverse engineering, Tampering, Data interception",
    controls:"Certificate pinning, Obfuscation, Secure transport" },
  { id:"baladi", name:"Baladi Platform", type:"Public Service", category:"National Platform",
    criticality:"Medium", score:45, source:"Documented",
    threats:"Third-party dependency, DDoS",
    controls:"SLA monitoring, Web Application Firewall" },
  { id:"forsah", name:"Forsah Platform", type:"Public Service", category:"Investment Platform",
    criticality:"Low", score:32, source:"Documented",
    threats:"Data exposure, Enumeration",
    controls:"Access control, Encryption" },
  { id:"portal", name:"Municipality Portal", type:"Public Service", category:"Web Portal",
    criticality:"High", score:58, source:"Documented",
    threats:"Content defacement, Enumeration, Phishing",
    controls:"WAF, CSP, HTTPS enforcement" },
  { id:"complaints", name:"Complaints Service", type:"Public Service", category:"Citizen Service",
    criticality:"Medium", score:42, source:"Documented",
    threats:"Spam submissions, Data leakage",
    controls:"Rate limiting, Input validation" },
  { id:"opendata", name:"Open Data Portal", type:"Public Service", category:"Data Platform",
    criticality:"Low", score:28, source:"Documented",
    threats:"Unauthorized scraping, Data exposure",
    controls:"Public access policy, Anonymization" },
  { id:"employees", name:"Employee Portal", type:"Public Service", category:"Internal Portal",
    criticality:"High", score:62, source:"Documented",
    threats:"Credential theft, Privilege escalation",
    controls:"MFA, IP restriction, Session monitoring" },
  { id:"identity", name:"Identity Service", type:"Analytical", category:"Auth Component",
    criticality:"Critical", score:78, source:"Proposed",
    threats:"Credential compromise, Session hijacking",
    controls:"MFA, Token rotation, Encryption" },
  { id:"api", name:"API Gateway", type:"Analytical", category:"Integration Layer",
    criticality:"High", score:65, source:"Proposed",
    threats:"Token leakage, Rate-limit exhaustion",
    controls:"Rate limiting, mTLS, API key rotation" },
  { id:"db", name:"Database", type:"Analytical", category:"Data Layer",
    criticality:"Critical", score:72, source:"Proposed",
    threats:"SQL injection, Data exfiltration",
    controls:"Encryption at rest, Row-level security" }
];

const LINKS = [
  { from:"hail-madinati", to:"portal",     status:"documented" },
  { from:"baladi",        to:"portal",     status:"documented" },
  { from:"forsah",        to:"portal",     status:"documented" },
  { from:"portal",        to:"complaints", status:"documented" },
  { from:"portal",        to:"opendata",   status:"documented" },
  { from:"hail-madinati", to:"identity",   status:"documented" },
  { from:"baladi",        to:"identity",   status:"documented" },
  { from:"employees",     to:"identity",   status:"documented" },
  { from:"complaints", to:"api",       status:"proposed" },
  { from:"opendata",   to:"api",       status:"proposed" },
  { from:"employees",  to:"api",       status:"proposed" },
  { from:"forsah",     to:"api",       status:"proposed" },
  { from:"portal",     to:"api",       status:"proposed" },
  { from:"api",        to:"db",        status:"proposed" },
  { from:"identity",   to:"db",        status:"proposed" }
];

const NODE_POS = {
  "baladi":        { x:450, y:80  },
  "hail-madinati": { x:200, y:180 },
  "forsah":        { x:700, y:180 },
  "portal":        { x:450, y:250 },
  "identity":      { x:200, y:400 },
  "api":           { x:450, y:400 },
  "db":            { x:700, y:400 },
  "complaints":    { x:200, y:560 },
  "opendata":      { x:450, y:560 },
  "employees":     { x:700, y:560 }
};

const NODE_ICONS = {
  "hail-madinati": '<rect x="6" y="1" width="16" height="26" rx="3"/><circle cx="14" cy="22" r="1"/>',
  "baladi":        '<path d="M2 6 L15 2 L28 6 L15 10 Z"/><path d="M2 14 L15 18 L28 14 M2 22 L15 26 L28 22"/>',
  "forsah":        '<path d="M4 20 L12 10 L20 20 Z"/><path d="M14 6 L20 6 L20 12"/>',
  "portal":        '<circle cx="15" cy="15" r="12"/><path d="M3 15 h24 M15 3 v24"/>',
  "complaints":    '<path d="M4 4 h22 v18 H8 l-4 4 Z"/><path d="M10 10 h12 M10 15 h8"/>',
  "opendata":      '<ellipse cx="15" cy="7" rx="11" ry="4"/><path d="M4 7 v16 a11 4 0 0 0 22 0 V7 M4 15 a11 4 0 0 0 22 0"/>',
  "employees":     '<circle cx="15" cy="11" r="5"/><path d="M6 26 c0-5 4-9 9-9 s9 4 9 9"/>',
  "identity":      '<path d="M12 2 L20 6 V13 C20 17.5 16.5 20.5 12 22 C7.5 20.5 4 17.5 4 13 V6 Z"/>',
  "api":           '<path d="M12 3 L18 3 L18 9 M6 3 L3 3 L3 9 M18 15 L18 21 L12 21 M3 15 L3 21 L6 21"/><path d="M9 12 L15 12"/>',
  "db":            '<ellipse cx="14" cy="6" rx="11" ry="4"/><path d="M3 6 v18 a11 4 0 0 0 22 0 V6 M3 15 a11 4 0 0 0 22 0"/>'
};

const NS = 'http://www.w3.org/2000/svg';
const $  = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const badgeClass = c => 'badge--' + c.toLowerCase();
const critColor = c => ({
  Critical:'#B91C1C',
  High:'#C2410C',
  Medium:'#B45309',
  Low:'#047857'
}[c] || '#047857');

let _mapEdges = [];

const state = {
  lang: localStorage.getItem('crm-lang') || 'en',
  user: JSON.parse(localStorage.getItem('crm-user') || 'null')
};

function t(key){ return (T[state.lang] && T[state.lang][key]) || key; }

/* ============================================================ */
/* AUTH GUARD + INIT                                             */
/* ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const isLoginPage = page === 'login.html';
  const user = JSON.parse(localStorage.getItem('crm-user') || 'null');
  const isLoggedIn = user && user.username;

  if(!isLoginPage && !isLoggedIn){
    window.location.href = 'login.html';
    return;
  }
  if(isLoginPage && isLoggedIn){
    window.location.href = 'index.html';
    return;
  }

  if(isLoginPage){
    initLoginPage();
    initBackground();
    return;
  }

  initDrawer();
  initLanguage();
  initLoginModal();
  renderStats();
  renderAssetFilterCounts();
  renderAssets();
  renderMap();
  renderImpact();
  renderReports();
  applyLanguage();
  initBackground();
});

/* ============================================================ */
/* LOGIN PAGE                                                    */
/* ============================================================ */
function initLoginPage(){
  const langBtn = document.getElementById('loginLangBtn');
  if(langBtn){
    langBtn.addEventListener('click', () => {
      state.lang = state.lang === 'en' ? 'ar' : 'en';
      localStorage.setItem('crm-lang', state.lang);
      applyLoginLanguage();
    });
  }

  const eyeBtn = document.getElementById('loginEye');
  const passInput = document.getElementById('loginPass');
  if(eyeBtn && passInput){
    eyeBtn.addEventListener('click', () => {
      passInput.type = passInput.type === 'password' ? 'text' : 'password';
    });
  }

  const form = document.getElementById('loginForm');
  if(form) form.addEventListener('submit', handleLogin);

  ['loginUser','loginPass'].forEach(id => {
    const el = document.getElementById(id);
    if(el){
      el.addEventListener('input', () => {
        const err = document.getElementById('loginError');
        if(err) err.classList.remove('show');
      });
    }
  });

  applyLoginLanguage();
}

function applyLoginLanguage(){
  const isAr = state.lang === 'ar';
  document.body.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', state.lang);

  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if(el) el.textContent = txt;
  };

  setText('loginLangLabel', isAr ? 'English' : 'عربي');
  setText('loginBrand', isAr ? 'خريطة مخاطر الأمن السيبراني' : 'Cyber Risk Map');
  setText('loginTitle', isAr ? 'تسجيل الدخول' : 'Login');
  setText('loginUserLabel', isAr ? 'اسم المستخدم' : 'Username');
  setText('loginPassLabel', isAr ? 'كلمة المرور' : 'Password');
  setText('loginSubmit', isAr ? 'تسجيل الدخول' : 'Sign In');
  setText('loginError', isAr ? 'اسم المستخدم أو كلمة المرور غير صحيحة.' : 'Invalid username or password.');
  setText('loginFoot', isAr
    ? '© 2026 خريطة مخاطر الأمن السيبراني — أمانة منطقة حائل'
    : '© 2026 Cyber Risk Map — Hail Municipality');
}

function handleLogin(e){
  e.preventDefault();
  const userEl = document.getElementById('loginUser');
  const passEl = document.getElementById('loginPass');
  const errEl  = document.getElementById('loginError');
  if(!userEl || !passEl) return;

  const u = userEl.value.trim();
  const p = passEl.value.trim();

  if(u === 'admin' && p === 'admin'){
    state.user = { username:'admin', role:'Administrator' };
    localStorage.setItem('crm-user', JSON.stringify(state.user));
    window.location.href = 'index.html';
  } else {
    if(errEl) errEl.classList.add('show');
  }
}

/* ============================================================ */
/* LOGIN MODAL (for logout button inside app)                    */
/* ============================================================ */
function initLoginModal(){
  const loginBtn = document.getElementById('loginBtn');
  const form = document.getElementById('loginForm');
  const modal = document.getElementById('loginModal');
  if(loginBtn && modal) loginBtn.addEventListener('click', () => modal.classList.add('is-open'));
  if(form) form.addEventListener('submit', handleLogin);
  $$('[data-login-close]').forEach(el => el.addEventListener('click', closeLogin));
}

function closeLogin(){
  const modal = document.getElementById('loginModal');
  if(modal) modal.classList.remove('is-open');
  const err = document.getElementById('loginError');
  if(err) err.classList.remove('show');
}

function logout(){
  state.user = null;
  localStorage.removeItem('crm-user');
  window.location.href = 'login.html';
}

function renderLoginState(){
  const actions = document.querySelector('.header__actions');
  if(!actions) return;
  const existing = actions.querySelector('.hdr-user');
  if(existing) existing.remove();
  const loginBtn = document.getElementById('loginBtn');
  if(state.user){
    if(loginBtn) loginBtn.style.display = 'none';
    const chip = document.createElement('div');
    chip.className = 'hdr-user';
    chip.innerHTML = `
      <span class="hdr-user__dot"></span>
      <span>${t('logged.as')} <strong>${state.user.username}</strong></span>
      <button class="hdr-btn" id="logoutBtn" style="height:26px;padding:0 .55rem;font-size:.72rem;margin-inline-start:.35rem;">
        ${t('btn.logout')}
      </button>
    `;
    actions.appendChild(chip);
    document.getElementById('logoutBtn').addEventListener('click', logout);
  } else {
    if(loginBtn) loginBtn.style.display = '';
  }
}

/* ============================================================ */
/* LANGUAGE                                                      */
/* ============================================================ */
function initLanguage(){
  const btn = document.getElementById('langBtn');
  if(!btn) return;
  btn.addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('crm-lang', state.lang);
    applyLanguage();
  });
}

function applyLanguage(){
  document.body.setAttribute('dir', state.lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', state.lang);

  const langLabel = document.getElementById('langLabel');
  if(langLabel) langLabel.textContent = state.lang === 'ar' ? 'EN' : 'عربي';

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(val && val !== key) el.textContent = val;
  });

  renderAboutText();
  renderReports();
  renderAssets();
  renderImpact();
  renderMap();

  const fc = document.getElementById('footerCopy');
  if(fc) fc.textContent = t('footer.copy');

  renderLoginState();
}

/* ============================================================ */
/* ABOUT TEXT                                                    */
/* ============================================================ */
function renderAboutText(){
  const p1 = document.getElementById('about-text-1');
  const p2 = document.getElementById('about-text-2');
  if(p1){
    p1.innerHTML = `
      <p>${t('about.p1a')}</p>
      <p>${t('about.p1b')}</p>
      <p>${t('about.p1c')}</p>
      <p>${t('about.p1d')}</p>
    `;
  }
  if(p2){
    const steps = [t('about.p2c'), t('about.p2d'), t('about.p2e'), t('about.p2f'), t('about.p2g')];
    p2.innerHTML = `
      <p>${t('about.p2a')}</p>
      <p>${t('about.p2b')}</p>
      <ul>${steps.map(s => {
        const parts = s.split(':');
        const label = parts[0];
        const rest = parts.slice(1).join(':');
        return `<li><strong>${label}:</strong>${rest}</li>`;
      }).join('')}</ul>
      <p>${t('about.p2h')}</p>
    `;
  }
}

/* ============================================================ */
/* DRAWER                                                        */
/* ============================================================ */
function initDrawer(){
  const burger = $('#burger'), drawer = $('#drawer'), overlay = $('#overlay'), closeBtn = $('#drawerClose');
  if(!burger) return;
  burger.addEventListener('click', () => {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
  });
  const close = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
  };
  if(closeBtn) closeBtn.addEventListener('click', close);
  if(overlay) overlay.addEventListener('click', close);
}

/* ============================================================ */
/* STATS                                                         */
/* ============================================================ */
function renderStats(){
  const s = $('#stat-assets'), h = $('#stat-high'), d = $('#stat-deps');
  if(!s) return;
  s.textContent = String(ASSETS.length).padStart(2,'0');
  h.textContent = String(ASSETS.filter(a => a.criticality === 'Critical' || a.criticality === 'High').length).padStart(2,'0');
  d.textContent = String(LINKS.length).padStart(2,'0');
}

function renderAssetFilterCounts(){
  const counts = { all: ASSETS.length, critical:0, high:0, medium:0, low:0 };
  ASSETS.forEach(a => counts[a.criticality.toLowerCase()]++);
  const set = (id, v) => { const el = document.getElementById(id); if(el) el.textContent = v; };
  set('count-all', counts.all);
  set('count-critical', counts.critical);
  set('count-high', counts.high);
  set('count-medium', counts.medium);
  set('count-low', counts.low);
}

/* ============================================================ */
/* ASSETS                                                        */
/* ============================================================ */
function renderAssets(){
  const grid = $('#assets-grid'); if(!grid) return;
  const filters = $('#assets-filters');
  let current = 'all';
  if(filters){
    const active = filters.querySelector('.workspace__item.active');
    if(active) current = active.dataset.filter;
  }

  grid.innerHTML = '';
  ASSETS.filter(a => current === 'all' || a.criticality.toLowerCase() === current).forEach(a => {
    const card = document.createElement('div');
    card.className = 'asset-card';
    const sourceLabel = a.source === 'Documented'
      ? (state.lang === 'ar' ? 'موثّق' : 'Documented')
      : (state.lang === 'ar' ? 'مقترح' : 'Proposed');
    card.innerHTML = `
      <div class="asset-card__bar" style="background:${critColor(a.criticality)}"></div>
      <div class="asset-card__body">
        <div class="asset-card__head">
          <div class="asset-card__icon">
            <svg viewBox="0 0 30 30" stroke-linejoin="round" stroke-linecap="round">${NODE_ICONS[a.id] || ''}</svg>
          </div>
          <div>
            <div class="asset-card__name">${a.name}</div>
            <div class="asset-card__type">${a.category}</div>
          </div>
        </div>
        <div class="asset-card__badges">
          <span class="badge ${badgeClass(a.criticality)}">${t('risk.' + a.criticality.toLowerCase())}</span>
          <span class="badge ${a.source === 'Documented' ? 'badge--doc' : 'badge--prop'}">${sourceLabel}</span>
        </div>
        <div class="asset-card__meta">
          <div><div class="val">${a.score}</div><div class="lbl">${state.lang === 'ar' ? 'الدرجة' : 'Score'}</div></div>
          <div><div class="val">${a.threats.split(',').length}</div><div class="lbl">${state.lang === 'ar' ? 'التهديدات' : 'Threats'}</div></div>
          <div><div class="val">${a.controls.split(',').length}</div><div class="lbl">${state.lang === 'ar' ? 'الضوابط' : 'Controls'}</div></div>
        </div>
      </div>`;
    card.addEventListener('click', () => openAssetModal(a));
    grid.appendChild(card);
  });

  if(filters && !filters.dataset.bound){
    filters.dataset.bound = '1';
    filters.querySelectorAll('.workspace__item').forEach(btn => {
      btn.addEventListener('click', () => {
        filters.querySelectorAll('.workspace__item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderAssets();
      });
    });
  }
}

/* ============================================================ */
/* MAP                                                           */
/* ============================================================ */
function renderMap(){
  const svg = $('#networkMap'); if(!svg) return;
  svg.innerHTML = '';
  _mapEdges = [];

  const defs = document.createElementNS(NS, 'defs');
  defs.innerHTML = `
    <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="#94A3B8"/>
    </marker>
    <marker id="arrowGreen" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0 L10 5 L0 10 z" fill="#008F76"/>
    </marker>`;
  svg.appendChild(defs);

  LINKS.forEach(link => {
    const from = NODE_POS[link.from], to = NODE_POS[link.to];
    if(!from || !to) return;
    const fromNode = ASSETS.find(a => a.id === link.from);
    const toNode = ASSETS.find(a => a.id === link.to);
    const rFrom = fromNode.criticality === 'Critical' ? 46 : 42;
    const rTo = toNode.criticality === 'Critical' ? 46 : 42;

    const dx = to.x - from.x, dy = to.y - from.y;
    const len = Math.sqrt(dx*dx + dy*dy);
    const ux = dx/len, uy = dy/len;
    const x1 = from.x + ux * rFrom;
    const y1 = from.y + uy * rFrom;
    const x2 = to.x - ux * (rTo + 14);
    const y2 = to.y - uy * (rTo + 14);

    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', link.status === 'documented' ? '#008F76' : '#94A3B8');
    line.setAttribute('stroke-width', link.status === 'documented' ? 1.8 : 1.4);
    line.setAttribute('opacity', link.status === 'documented' ? .55 : .45);
    line.setAttribute('marker-end', 'url(#arrow)');
    line.classList.add('edge', link.status === 'documented' ? 'edge--documented' : 'edge--proposed');
    line.dataset.from = link.from;
    line.dataset.to = link.to;
    svg.appendChild(line);
    _mapEdges.push({ el: line, from: link.from, to: link.to });
  });

  ASSETS.forEach(a => {
    const pos = NODE_POS[a.id]; if(!pos) return;
    const r = a.criticality === 'Critical' ? 46 : 42;

    const g = document.createElementNS(NS, 'g');
    g.classList.add('node');
    g.dataset.id = a.id;

    const circle = document.createElementNS(NS, 'circle');
    circle.setAttribute('cx', pos.x); circle.setAttribute('cy', pos.y); circle.setAttribute('r', r);
    circle.setAttribute('fill', a.source === 'Proposed' ? '#F8FAFC' : '#fff');
    circle.setAttribute('stroke', critColor(a.criticality));
    circle.setAttribute('stroke-width', '3');
    if(a.source === 'Proposed') circle.setAttribute('stroke-dasharray', '8 5');
    circle.classList.add('main');
    g.appendChild(circle);

    const icon = document.createElementNS(NS, 'g');
    icon.setAttribute('transform', `translate(${pos.x - 15}, ${pos.y - 15 - 8})`);
    icon.innerHTML = `<g stroke="#008F76" fill="none" stroke-width="1.8">${NODE_ICONS[a.id] || ''}</g>`;
    g.appendChild(icon);

    const name = document.createElementNS(NS, 'text');
    name.setAttribute('x', pos.x); name.setAttribute('y', pos.y + r + 18);
    name.setAttribute('text-anchor', 'middle');
    name.setAttribute('font-size', '12');
    name.setAttribute('font-weight', '600');
    name.setAttribute('fill', '#0A1E28');
    name.textContent = a.name;
    g.appendChild(name);

    const cat = document.createElementNS(NS, 'text');
    cat.setAttribute('x', pos.x); cat.setAttribute('y', pos.y + r + 33);
    cat.setAttribute('text-anchor', 'middle');
    cat.setAttribute('font-size', '10');
    cat.setAttribute('fill', '#64748B');
    cat.textContent = a.category;
    g.appendChild(cat);

    g.addEventListener('mouseenter', () => highlightOnly(a.id));
    g.addEventListener('mouseleave', () => clearHighlight());
    g.addEventListener('click', e => {
      e.stopPropagation();
      highlightOnly(a.id);
      openAssetModal(a, false);
    });

    svg.appendChild(g);
  });
}

function highlightOnly(centerId){
  const svg = $('#networkMap'); if(!svg) return;
  const connected = new Set([centerId]);
  const activeIdx = new Set();

  _mapEdges.forEach((edge, i) => {
    if(edge.from === centerId || edge.to === centerId){
      activeIdx.add(i);
      connected.add(edge.from);
      connected.add(edge.to);
    }
  });

  _mapEdges.forEach((edge, i) => {
    const isActive = activeIdx.has(i);
    edge.el.classList.toggle('active', isActive);
    edge.el.classList.toggle('dim', !isActive);
    if(isActive){
      edge.el.setAttribute('stroke', '#008F76');
      edge.el.setAttribute('marker-end', 'url(#arrowGreen)');
    }
  });
  svg.querySelectorAll('.node').forEach(n => {
    const isConn = connected.has(n.dataset.id);
    n.classList.toggle('dim', !isConn);
    n.classList.toggle('active', n.dataset.id === centerId);
  });
}

function clearHighlight(){
  const svg = $('#networkMap'); if(!svg) return;
  _mapEdges.forEach(edge => {
    edge.el.classList.remove('active', 'dim');
    const isDoc = edge.el.classList.contains('edge--documented');
    edge.el.setAttribute('stroke', isDoc ? '#008F76' : '#94A3B8');
    edge.el.setAttribute('marker-end', 'url(#arrow)');
  });
  svg.querySelectorAll('.node').forEach(n => n.classList.remove('dim', 'active'));
}

/* ============================================================ */
/* ASSET MODAL                                                   */
/* ============================================================ */
function openAssetModal(asset, clearOnClose = true){
  const modal = $('#systemModal');
  const box = $('#modalBox');
  if(!modal || !box) return;

  const dependsOn = LINKS.filter(l => l.from === asset.id)
    .map(l => ASSETS.find(a => a.id === l.to)?.name).filter(Boolean);
  const dependedBy = LINKS.filter(l => l.to === asset.id)
    .map(l => ASSETS.find(a => a.id === l.from)?.name).filter(Boolean);
  const sourceLabel = asset.source === 'Documented'
    ? (state.lang === 'ar' ? 'موثّق' : 'Documented')
    : (state.lang === 'ar' ? 'مقترح' : 'Proposed');

  box.innerHTML = `
    <div class="modal__header">
      <button class="modal__close" data-close>&times;</button>
      <div class="modal__title">${asset.name}</div>
      <div class="modal__type">${asset.category}</div>
    </div>
    <div class="modal__body">
      <div class="modal__row"><span class="modal__label">${t('modal.type')}</span><span class="modal__value">${asset.type}</span></div>
      <div class="modal__row"><span class="modal__label">${t('modal.risk')}</span>
        <span class="badge ${badgeClass(asset.criticality)}">${t('risk.' + asset.criticality.toLowerCase())}</span></div>
      <div class="modal__row"><span class="modal__label">${t('modal.score')}</span>
        <span class="modal__value">${asset.score} / 100</span></div>
      <div class="modal__row"><span class="modal__label">${t('modal.source')}</span>
        <span class="badge ${asset.source === 'Documented' ? 'badge--doc' : 'badge--prop'}">${sourceLabel}</span></div>
      <div class="modal__section"><h4>${t('modal.threats')}</h4><p>${asset.threats}</p></div>
      <div class="modal__section"><h4>${t('modal.controls')}</h4><p>${asset.controls}</p></div>
      ${dependsOn.length ? `<div class="modal__section"><h4>${t('modal.dependsOn')}</h4>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.4rem;">
          ${dependsOn.map(n => `<span class="chip">${n}</span>`).join('')}</div></div>` : ''}
      ${dependedBy.length ? `<div class="modal__section"><h4>${t('modal.dependedBy')}</h4>
        <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.4rem;">
          ${dependedBy.map(n => `<span class="chip">${n}</span>`).join('')}</div></div>` : ''}
    </div>`;
  modal.classList.add('is-open');

  const closeModal = () => {
    modal.classList.remove('is-open');
    if(clearOnClose) clearHighlight();
  };
  modal.addEventListener('click', e => {
    if(e.target.closest('[data-close]')) closeModal();
  }, { once:true });
  document.addEventListener('keydown', function esc(e){
    if(e.key === 'Escape'){ closeModal(); document.removeEventListener('keydown', esc); }
  });
}

/* ============================================================ */
/* IMPACT                                                        */
/* ============================================================ */
function renderImpact(){
  const picker = $('#impact-picker');
  const chain  = $('#impact-chain');
  if(!picker || !chain) return;

  const activeId = picker.querySelector('.workspace__item.active')?.dataset.id || ASSETS[0].id;

  picker.innerHTML = '';
  ASSETS.forEach(a => {
    const btn = document.createElement('button');
    btn.className = 'workspace__item' + (a.id === activeId ? ' active' : '');
    btn.dataset.id = a.id;
    btn.innerHTML = `
      <span class="workspace__item-dot" style="background:${critColor(a.criticality)}"></span>
      <span>${a.name}</span>
    `;
    btn.addEventListener('click', () => {
      picker.querySelectorAll('.workspace__item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildChain(a.id);
    });
    picker.appendChild(btn);
  });

  function buildChain(sourceId){
    const source = ASSETS.find(a => a.id === sourceId);
    if(!source) return;

    const direct = LINKS.filter(l => l.to === sourceId)
      .map(l => ASSETS.find(a => a.id === l.from))
      .filter(Boolean);

    const directIds = new Set(direct.map(d => d.id));
    const indirect = [];
    LINKS.forEach(l => {
      if(directIds.has(l.to) && l.from !== sourceId && !directIds.has(l.from)){
        const a = ASSETS.find(x => x.id === l.from);
        if(a && !indirect.find(x => x.id === a.id)) indirect.push(a);
      }
    });

    let html = `
      <div class="impact-origin-card">
        <div class="impact-origin-card__badge">${t('impact.source')}</div>
        <div class="impact-origin-card__name">${source.name}</div>
        <div class="impact-origin-card__type">${source.category}</div>
      </div>

      <div class="impact-section">
        <div class="impact-section__head">
          <span class="impact-section__dot" style="background:#C2410C"></span>
          <span class="impact-section__title">${t('impact.direct')}</span>
          <span class="impact-section__count">${direct.length}</span>
        </div>
        <div class="impact-section__body">
          ${direct.length
            ? direct.map(a => `<span class="impact-pill impact-pill--${a.criticality.toLowerCase()}">${a.name}</span>`).join('')
            : `<span class="impact-empty">${t('impact.empty')}</span>`}
        </div>
      </div>
    `;

    if(indirect.length){
      html += `
        <div class="impact-section">
          <div class="impact-section__head">
            <span class="impact-section__dot" style="background:#B45309"></span>
            <span class="impact-section__title">${t('impact.indirect')}</span>
            <span class="impact-section__count">${indirect.length}</span>
          </div>
          <div class="impact-section__body">
            ${indirect.map(a => `<span class="impact-pill impact-pill--${a.criticality.toLowerCase()}">${a.name}</span>`).join('')}
          </div>
        </div>
      `;
    }
    chain.innerHTML = html;
  }

  buildChain(activeId);
}

/* ============================================================ */
/* REPORTS                                                       */
/* ============================================================ */
function renderReports(){
  const tbody = document.querySelector('#report-tbody');
  if(!tbody) return;

  tbody.innerHTML = '';
  ASSETS.forEach(a => {
    const sourceLabel = a.source === 'Documented'
      ? (state.lang === 'ar' ? 'موثّق' : 'Documented')
      : (state.lang === 'ar' ? 'مقترح' : 'Proposed');
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${a.name}</strong></td>
      <td>${a.category}</td>
      <td><span class="badge ${badgeClass(a.criticality)}">${t('risk.' + a.criticality.toLowerCase())}</span></td>
      <td>${a.score}</td>
      <td><span class="badge ${a.source === 'Documented' ? 'badge--doc' : 'badge--prop'}">${sourceLabel}</span></td>
      <td>${a.threats}</td>`;
    tbody.appendChild(tr);
  });

  const counts = { Critical:0, High:0, Medium:0, Low:0 };
  ASSETS.forEach(a => counts[a.criticality]++);
  const set = (id, v) => {
    const el = document.querySelector(id);
    if(el) el.textContent = String(v).padStart(2,'0');
  };
  set('#rep-critical', counts.Critical);
  set('#rep-high', counts.High);
  set('#rep-medium', counts.Medium);
  set('#rep-total', ASSETS.length);

  const btn = document.querySelector('#export-pdf');
  if(btn && !btn.dataset.bound){
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => window.print());
  }
}

/* ============================================================ */
/* BACKGROUND                                                    */
/* ============================================================ */
function initBackground(){
  const canvas = document.getElementById('bg-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, DPR;
  const particles = [];
  const COUNT = 60, MAX_DIST = 135;
  const mouse = { x:-9999, y:-9999 };

  function resize(){
    DPR = window.devicePixelRatio || 1;
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * DPR; canvas.height = H * DPR;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(DPR,0,0,DPR,0,0);
  }
  resize();
  window.addEventListener('resize', resize);

  for(let i = 0; i < COUNT; i++){
    particles.push({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3,
      r: 1.3 + Math.random()*1
    });
  }
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });

  function animate(){
    ctx.clearRect(0,0,W,H);
    for(const p of particles){
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > W) p.vx *= -1;
      if(p.y < 0 || p.y > H) p.vy *= -1;
    }
    for(let i = 0; i < particles.length; i++){
      const a = particles[i];
      for(let j = i+1; j < particles.length; j++){
        const b = particles[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if(d < MAX_DIST){
          const alpha = (1 - d/MAX_DIST)*.28;
          ctx.strokeStyle = `rgba(0,143,118,${alpha})`;
          ctx.lineWidth = .6;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
    }
    for(const p of particles){
      const mdx = p.x-mouse.x, mdy = p.y-mouse.y;
      const md = Math.sqrt(mdx*mdx + mdy*mdy);
      const near = md < 150;
      const t2 = near ? 1 - md/150 : 0;
      if(near){
        ctx.strokeStyle = `rgba(45,212,191,${t2*.45})`;
        ctx.lineWidth = .7;
        ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke();
        const g = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,16);
        g.addColorStop(0, `rgba(45,212,191,${t2*.8})`);
        g.addColorStop(1, 'rgba(45,212,191,0)');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(p.x,p.y,16,0,Math.PI*2); ctx.fill();
      }
      ctx.fillStyle = near ? `rgba(45,212,191,${.5+t2*.5})` : 'rgba(0,143,118,0.4)';
      ctx.beginPath(); ctx.arc(p.x,p.y, p.r + (near ? t2*1.1 : 0), 0, Math.PI*2); ctx.fill();
    }
    requestAnimationFrame(animate);
  }
  animate();
}