export type NavItem = {
  label: string;
  footerLabel?: string;
  href: string;
};

export type ReportItem = {
  badge: string;
  title: string;
  subtitle: string;
  blurb: string;
  publicationDate: string;
  format: string;
  methodologyNote: string;
  keyFindings: string[];
  price: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  bullets: string[];
};

export type GuideItem = {
  badge?: string;
  title: string;
  subtitle: string;
  blurb: string;
  price: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  role: string;
  timeline: string;
  riskScore: string;
  focus: string;
};

export type AiLiteracyItem = {
  title: string;
  description: string;
  price: string | null;
  badge: "New" | "Bestseller" | null;
  ctaLabel: "View guide";
  href: string;
};

export type ServiceItem = {
  badge: string;
  title: string;
  subtitle: string;
  blurb: string;
  price: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  bullets: string[];
};

export type FreeResourceItem = {
  badge: string;
  title: string;
  subtitle: string;
  blurb: string;
  price: string;
  href: string;
  accentColor: string;
  bgGradient: string;
  borderColor: string;
  bullets: string[];
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools/free-ai-exposure-check" },
  { label: "Guides", href: "/guides" },
  { label: "Bundles", href: "/bundles" },
  { label: "Reports", href: "/reports" },
  { label: "Assessments", href: "/assessments" },
  { label: "About", href: "/about" },
];

export const REPORTS: ReportItem[] = [
  {
    badge: "New - June 2026",
    title: "Why Expertise Becomes a Trap",
    subtitle: "automation pressure. Competency traps. Professional reinvention.",
    blurb:
      "The first Sriram Advisory Intelligence Series report on why skilled professionals can become vulnerable during technological transitions, and why AI is making that pattern faster and broader.",
    publicationDate: "June 2026",
    format: "Research Report",
    methodologyNote: "Built from historical technology-shift patterns, current AI capability signals, and professional reinvention analysis.",
    keyFindings: [
      "Expertise can become fragile when the market changes what it rewards",
      "AI accelerates older disruption patterns rather than replacing them entirely",
      "Reinvention requires new proof of value, not just more experience",
    ],
    price: "Rs 499",
    href: "/products/why-expertise-becomes-a-trap",
    accentColor: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
    borderColor: "#d8b4fe",
    bullets: [
      "Explains why expertise alone is not a durable future-of-work moat",
      "Connects historical disruption patterns with current AI pressure",
      "Built for senior professionals, managers, HR/L&D, founders, and consultants",
    ],
  },
  {
    badge: "New",
    title: "AI Futures 2026",
    subtitle: "India-first AI career scenarios. Strategic signals. Practical adaptation lens.",
    blurb:
      "A forward-looking intelligence report for professionals who want a clearer view of how AI may reshape work, careers, and leverage in India over the next phase.",
    publicationDate: "June 2026",
    format: "Future Outlook",
    methodologyNote: "Uses scenario framing, technology capability signals, and India-focused career-market interpretation.",
    keyFindings: [
      "AI impact will differ sharply by role context and organizational adoption",
      "Professionals need scenario awareness, not one-line predictions",
      "Career leverage depends on judgment, workflow ownership, and visible adaptability",
    ],
    price: "Rs 799",
    href: "/products/ai-futures-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f2fbf8 0%, #dcfce7 100%)",
    borderColor: "#bbf7d0",
    bullets: [
      "Signals and scenario framing, not recycled hype headlines",
      "Built to help professionals think ahead without panic",
      "A premium report built for strategic clarity",
    ],
  },
  {
    badge: "New",
    title: "State of QA Careers India 2026",
    subtitle: "Testing careers. AI pressure points. Strategic repositioning.",
    blurb:
      "A focused intelligence report for QA professionals who want a clearer reading of how testing roles are changing in India, where the pressure is rising, and what stronger positioning looks like next.",
    publicationDate: "June 2026",
    format: "Role Outlook",
    methodologyNote: "Combines QA task analysis, automation pressure, AI testing capability shifts, and Indian technology-career context.",
    keyFindings: [
      "Execution-heavy QA work faces stronger compression pressure",
      "Quality judgment, product context, and automation strategy remain valuable",
      "Repositioning depends on moving from testing tasks to quality ownership",
    ],
    price: "Rs 799",
    href: "/products/state-of-qa-careers-india-2026",
    accentColor: "#0f6cbd",
    bgGradient: "linear-gradient(135deg, #f2f8ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    bullets: [
      "Built for QA professionals, not general-tech audiences",
      "Maps role shifts, pressure points, and adaptation direction",
      "A premium report for people who want sharper career clarity",
    ],
  },
  {
    badge: "New - May 2026",
    title: "AI Risk Rankings India 2026",
    subtitle: "Top 25 high-risk careers. 4 risk bands. 100+ pages.",
    blurb:
      "A market-intelligence report for professionals who want to understand which careers are under the most AI pressure in India, why, and what adaptation paths look like.",
    publicationDate: "May 2026",
    format: "Career Risk Index",
    methodologyNote: "Uses role-level exposure analysis, task patterns, AI capability signals, and practical adaptation pathways.",
    keyFindings: [
      "AI pressure is uneven across roles, tasks, seniority, and market context",
      "Repeatable execution is more exposed than judgment-heavy ownership",
      "Risk rankings are useful only when paired with adaptation direction",
    ],
    price: "Rs 999",
    href: "/products/ai-risk-rankings-india-2026",
    accentColor: "#dc2626",
    bgGradient: "linear-gradient(135deg, #fff5f5 0%, #fee2e2 100%)",
    borderColor: "#fecaca",
    bullets: [
      "Top 25 careers ranked with role-level context",
      "Task exposure bands instead of hand-wavy predictions",
      "Adaptation direction for professionals who need next steps",
    ],
  },
];

export const GUIDES: GuideItem[] = [
  {
    title: "Cloud Engineer AI Survival Guide 2026",
    subtitle: "3.8/10 repositioned score. 90-day direction. AI cloud infrastructure path.",
    blurb:
      "For Cloud Engineers who want to move from traditional infrastructure provisioning into AI-native cloud engineering, GPU platform design, model-serving reliability, and stronger AI infrastructure positioning.",
    price: "Rs 499",
    href: "/guides/cloud-engineer-ai-survival-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f0fdf9 0%, #d9fbe8 100%)",
    borderColor: "#99f6e4",
    role: "Cloud Engineer",
    timeline: "90-day direction",
    riskScore: "Repositioned score 3.8/10",
    focus: "AI infrastructure",
  },
  {
    badge: "New",
    title: "Data Engineer AI Survival Guide 2026",
    subtitle: "4.0/10 repositioned score. 90-day direction. AI-native data engineering path.",
    blurb:
      "For Data Engineers who want to move from traditional pipeline work into AI-native data engineering, model data reliability, GenAI data systems, and stronger AI team positioning.",
    price: "Rs 499",
    href: "/guides/data-engineer-ai-survival-guide-2026",
    accentColor: "#0891b2",
    bgGradient: "linear-gradient(135deg, #f0fdff 0%, #cffafe 100%)",
    borderColor: "#67e8f9",
    role: "Data Engineer",
    timeline: "90-day direction",
    riskScore: "Repositioned score 4.0/10",
    focus: "AI data reliability",
  },
  {
    badge: "New",
    title: "Project Manager / Delivery Manager Survival Guide 2026",
    subtitle: "5.9/10 risk score. 60-day direction. Higher-leverage project/delivery path.",
    blurb:
      "For Project Managers and Delivery Managers who need to move beyond coordination-heavy work and build stronger positioning around prioritization, execution systems, and business judgment.",
    price: "Rs 499",
    href: "/guides/project-delivery-manager-survival-guide-2026",
    accentColor: "#7c3aed",
    bgGradient: "linear-gradient(135deg, #faf5ff 0%, #efe4ff 100%)",
    borderColor: "#d8b4fe",
    role: "Project / Delivery",
    timeline: "60-day direction",
    riskScore: "Risk score 5.9/10",
    focus: "Execution systems",
  },
  {
    badge: "New",
    title: "DevOps Survival Guide 2026",
    subtitle: "6.8/10 risk score. 60-day direction. Platform and reliability path.",
    blurb:
      "For DevOps engineers who want to move beyond pipeline-heavy execution and build stronger platform, reliability, and AI infrastructure positioning.",
    price: "Rs 499",
    href: "/guides/devops-survival-guide-2026",
    accentColor: "#1d4ed8",
    bgGradient: "linear-gradient(135deg, #f8fbff 0%, #e6efff 100%)",
    borderColor: "#bfdbfe",
    role: "DevOps",
    timeline: "60-day direction",
    riskScore: "Risk score 6.8/10",
    focus: "Platform and reliability",
  },
  {
    title: "Business Analyst Survival Guide 2026",
    subtitle: "7.1/10 risk score. 60-day direction. GCC and product-side path.",
    blurb:
      "For Business Analysts who need to move beyond documentation-heavy work and reposition around problem framing, business value, and stronger analyst signal.",
    price: "Rs 499",
    href: "/guides/business-analyst-survival-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f4fffd 0%, #dffaf3 100%)",
    borderColor: "#99f6e4",
    role: "Business Analyst",
    timeline: "60-day direction",
    riskScore: "Risk score 7.1/10",
    focus: "Problem framing",
  },
  {
    badge: "New",
    title: "Business Analyst to AI Product Manager Guide 2026",
    subtitle: "3.5/10 repositioned score. 90-day direction. AI PM transition path.",
    blurb:
      "For Business Analysts who want to move from documentation-heavy delivery into AI product ownership, stronger problem framing, and better outcome-led positioning.",
    price: "Rs 499",
    href: "/guides/ba-to-ai-pm-guide-2026",
    accentColor: "#0f4c81",
    bgGradient: "linear-gradient(135deg, #f4faff 0%, #dceeff 100%)",
    borderColor: "#93c5fd",
    role: "Business Analyst",
    timeline: "90-day direction",
    riskScore: "Repositioned score 3.5/10",
    focus: "AI product transition",
  },
  {
    badge: "New",
    title: "FDE Career Transition Guide 2026",
    subtitle: "2.5/10 repositioned score. 90-day direction. Higher-leverage FDE path.",
    blurb:
      "For FDEs who want to move beyond execution-only delivery and build stronger positioning around product judgment, systems thinking, and future-of-work engineering leverage.",
    price: "Rs 499",
    href: "/guides/fde-career-transition-guide-2026",
    accentColor: "#be185d",
    bgGradient: "linear-gradient(135deg, #fff6fb 0%, #ffe3f0 100%)",
    borderColor: "#f9a8d4",
    role: "FDE",
    timeline: "90-day direction",
    riskScore: "Repositioned score 2.5/10",
    focus: "Career transition",
  },
  {
    title: "QA Engineer Survival Guide 2026",
    subtitle: "9.5/10 risk score. 90-day direction. Higher-value QA path.",
    blurb:
      "For QA professionals under the sharpest AI pressure who want a clearer path toward stronger quality ownership and more durable relevance.",
    price: "Rs 499",
    href: "/guides/qa-engineer-survival-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f5fff9 0%, #e3faec 100%)",
    borderColor: "#bbf7d0",
    role: "QA",
    timeline: "90-day direction",
    riskScore: "Risk score 9.5/10",
    focus: "Quality ownership",
  },
  {
    badge: "New",
    title: "BPO & Customer Support Career Survival Guide 2026",
    subtitle: "9.2/10 risk score. 30-day direction. future-of-work support paths.",
    blurb:
      "For support professionals who want to understand what AI compresses first and how to reposition toward more durable human-value work.",
    price: "Rs 499",
    href: "/guides/bpo-career-survival-guide-2026",
    accentColor: "#d97706",
    bgGradient: "linear-gradient(135deg, #fffdf4 0%, #fef1c8 100%)",
    borderColor: "#fde68a",
    role: "BPO / Support",
    timeline: "30-day direction",
    riskScore: "Risk score 9.2/10",
    focus: "future-of-work support paths",
  },
  {
    title: "Python Developer AI Leverage Guide 2026",
    subtitle: "7.0/10 risk score. 60-day direction. Higher-leverage Python path.",
    blurb:
      "For Python developers who want to use AI to move beyond script-heavy execution and build stronger positioning around automation, backend judgment, data workflows, and AI-assisted engineering leverage.",
    price: "Rs 499",
    href: "/guides/python-developer-ai-leverage-guide-2026",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f2fffb 0%, #d8f5ec 100%)",
    borderColor: "#99f6e4",
    role: "Python Developer",
    timeline: "60-day direction",
    riskScore: "Risk score 7.0/10",
    focus: "AI leverage",
  },
  {
    title: "Java Developer AI Leverage Guide 2026",
    subtitle: "7.5/10 risk score. 60-day direction. Higher-leverage Java path.",
    blurb:
      "For Java developers who want to move up the value chain using AI without abandoning the Java ecosystem or drifting into vague upskilling.",
    price: "Rs 499",
    href: "/guides/java-developer-ai-leverage-guide-2026",
    accentColor: "#b45309",
    bgGradient: "linear-gradient(135deg, #fff8f0 0%, #ffe0b8 100%)",
    borderColor: "#fdba74",
    role: "Java Developer",
    timeline: "60-day direction",
    riskScore: "Risk score 7.5/10",
    focus: "AI leverage",
  },
  {
    title: "Selenium Engineer Upgrade Guide 2026",
    subtitle: "7.2/10 risk score. 60-day direction. Modern automation path.",
    blurb:
      "For Selenium engineers who want to bridge into more modern automation relevance and avoid getting stuck in legacy comfort.",
    price: "Rs 499",
    href: "/guides/selenium-engineer-upgrade-guide-2026",
    accentColor: "#4f46e5",
    bgGradient: "linear-gradient(135deg, #f8f6ff 0%, #ede9fe 100%)",
    borderColor: "#c7d2fe",
    role: "Selenium / Automation",
    timeline: "60-day direction",
    riskScore: "Risk score 7.2/10",
    focus: "Modern automation",
  },
  {
    badge: "New",
    title: "Data Analyst Career Guide 2026",
    subtitle: "7.8/10 risk score. 90-day direction. Higher-value analyst path.",
    blurb:
      "For analysts who want to move beyond dashboard dependence and build stronger positioning around insight, context, and business value.",
    price: "Rs 499",
    href: "/guides/data-analyst-career-guide-2026",
    accentColor: "#2563eb",
    bgGradient: "linear-gradient(135deg, #f7faff 0%, #e2eeff 100%)",
    borderColor: "#bfdbfe",
    role: "Data Analyst",
    timeline: "90-day direction",
    riskScore: "Risk score 7.8/10",
    focus: "Insight and business value",
  },
  {
    badge: "New",
    title: "HR Recruiter Survival Guide 2026",
    subtitle: "8.6/10 SA-AIRS score. 18-month repositioning path. Higher-leverage recruiting future.",
    blurb:
      "HR is being asked to manage AI's impact on the workforce while being disrupted by AI itself. This guide helps recruiters move beyond repeatable execution and reposition toward judgment, business context, stakeholder influence, and higher-leverage HR value.",
    price: "Rs 499",
    href: "/guides/hr-recruiter-survival-guide-2026",
    accentColor: "#be185d",
    bgGradient: "linear-gradient(135deg, #fff6fb 0%, #ffe4f0 100%)",
    borderColor: "#f9a8d4",
    role: "HR / Talent",
    timeline: "18-month repositioning path",
    riskScore: "SA-AIRS score 8.6/10",
    focus: "future-of-work HR leverage",
  },
  {
    badge: "New",
    title: "Fresher AI Survival Guide",
    subtitle: "Entry-level future-of-work career clarity. 90-day direction. First-job positioning.",
    blurb:
      "For freshers and early-career professionals who want to understand what AI changes in entry-level hiring, how to avoid generic fresher positioning, and how to build stronger proof for the first serious opportunity.",
    price: "Rs 499",
    href: "/guides/fresher-ai-survival-guide",
    accentColor: "#0f4c81",
    bgGradient: "linear-gradient(135deg, #f4faff 0%, #dceeff 100%)",
    borderColor: "#93c5fd",
    role: "Fresher / Early Career",
    timeline: "90-day direction",
    riskScore: "Entry-level exposure",
    focus: "First-job positioning",
  },
];

export const AI_LITERACY_PRODUCTS: AiLiteracyItem[] = [
  {
    title: "AI Literacy for Absolute Beginners",
    description:
      "The complete foundations handbook - 37 pages, 100 ready-to-use prompts, 6 tool tutorials, 7 role playbooks.",
    price: "Rs 499",
    badge: "New",
    ctaLabel: "View guide",
    href: "/ai-literacy/absolute-beginners",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    badge: "Core Service",
    title: "Career Intelligence Report - SA-AIRS Pro",
    subtitle: "5-dimension AI risk score. Role benchmarks. 90-day reassessment.",
    blurb:
      "A structured diagnostic for professionals who want their own role scored across the SA-AIRS framework, with a transparent composite score, placement, and benchmarks.",
    price: "Rs 999",
    href: "/career-intelligence-report/sa-airs-pro",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f0f4ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    bullets: [
      "Personal role score, not just market commentary",
      "5-dimension SA-AIRS framework applied to your case",
      "Built for professionals who want diagnostic clarity",
    ],
  },
  {
    badge: "New",
    title: "Career Positioning Audit",
    subtitle: "Resume clarity. LinkedIn framing. Positioning gaps. Delivered as a concise PDF.",
    blurb:
      "A structured audit of how your career reads to the market today, including weak signals, positioning gaps, and the highest-leverage fixes for your resume and LinkedIn.",
    price: "Rs 999",
    href: "/services/career-positioning-audit",
    accentColor: "#b45309",
    bgGradient: "linear-gradient(135deg, #fff9f2 0%, #ffedd5 100%)",
    borderColor: "#fed7aa",
    bullets: [
      "Positioning score with your top 3 gaps identified",
      "Suggested headline and professional summary rewrites",
      "1-page PDF findings report delivered in 48 to 72 hours",
    ],
  },
];

export const FREE_RESOURCES: FreeResourceItem[] = [
  {
    badge: "Free Guide",
    title: "Reel Lessons Part 1",
    subtitle: "Lessons and reflections drawn from Hollywood movies, collected into a free downloadable guide.",
    blurb:
      "A compact collection of lessons drawn from Hollywood movies, paired with reflections and practical takeaways. Here, 'Reel' means cinema, stories, characters, and scenes that leave behind something useful to think about.",
    price: "Free",
    href: "/free/reel-lessons-part1-v1-release",
    accentColor: "#1a4fd6",
    bgGradient: "linear-gradient(135deg, #f3fffb 0%, #dcfce7 100%)",
    borderColor: "#86efac",
    bullets: [
      "Lessons inspired by Hollywood movies and memorable scenes",
      "Short reflections with practical takeaways you can revisit",
      "A strong first entry in the free Sriram Advisory library",
    ],
  },
];
