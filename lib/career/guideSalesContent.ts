export type GuideCard = {
  title: string;
  desc: string;
};

export type GuidePreview = {
  title: string;
  bullets: string[];
};

export type GuideStage = {
  stage: string;
  title: string;
  desc: string;
  color: string;
};

export type GuideTheme = {
  accent: string;
  accentSoft: string;
  accentStrong: string;
  heroGradient: string;
  heroText: string;
  sectionTint: string;
  sectionBorder: string;
  panelTint: string;
  finalGradient: string;
};

export type GuidePageContent = {
  category?: "role-guide" | "ai-literacy";
  productName: string;
  title: string;
  accentTitle: string;
  score: string;
  riskLabel: string;
  editionLabel: string;
  heroSummary: string;
  heroNote: string;
  outcomeBullets: string[];
  promiseBullets: string[];
  whatYouGet: GuideCard[];
  preview: GuidePreview[];
  stages: GuideStage[];
  forYou: string[];
  notForYou: string[];
  ctaTitle: string;
  ctaBody: string;
  faqDelivery: string;
  testimonials?: {
    quote: string;
    source: string;
    context?: string;
  }[];
  testimonial?: {
    quote: string;
    source: string;
    context?: string;
  };
  theme: GuideTheme;
};

const SHARED_FAQ_SCOPE =
  "This is a written career guide, not a course, bootcamp, or certification. It is meant to help you decide what to do next, what to stop doing, and how to present yourself more strongly in the market.";

const SHARED_FAQ_TRUST =
  "These guides are written for Indian professionals first. The emphasis is on role risk, salary context, GCC and product-market positioning, and practical next steps instead of generic global advice.";

export const FOUNDER_TRUST_NOTE =
  "Built for Indian professionals who need a sharper market read, a clearer next move, and practical positioning guidance instead of generic AI career content.";

export const BONUS_GUIDE_TITLE =
  "Bonus included: Agentic AI Field Guide.";

export const BONUS_GUIDE_NOTE =
  "A concise companion covering AI agents, tool use, memory, guardrails, observability, and where the frontier is headed.";

export const DELIVERY_NOTE =
  "Delivered to your inbox, typically within 30 minutes of payment.";

export const LIFETIME_UPDATES_TITLE =
  "Free lifetime updates included.";

export const LIFETIME_UPDATES_SHORT_NOTE =
  "Every Sriram Advisory guide comes with free lifetime upgrades for every customer. No repurchase. No upgrade fee. Ever.";

export const LIFETIME_UPDATES_BODY =
  "A commitment, made publicly and permanently: every Sriram Advisory guide comes with free lifetime upgrades for every customer, from the first to the last. When the market shifts, when data changes, when a better framework emerges, you get the updated version automatically. No repurchase. No upgrade fee. Ever.";

export const guideSalesContent: Record<string, GuidePageContent> = {
  "ai-literacy-absolute-beginners": {
    category: "ai-literacy",
    productName: "AI Literacy for Absolute Beginners",
    title: "AI Literacy for",
    accentTitle: "Absolute Beginners",
    score: "",
    riskLabel: "",
    editionLabel: "Foundations Handbook",
    heroSummary:
      "A plain-language AI foundations handbook for working professionals who want to understand AI before deciding what to do with it.",
    heroNote:
      "No coding, no jargon, no hype - just the mental models, tools, prompts, and workplace examples that make AI easier to use.",
    outcomeBullets: [
      "37 pages of practical AI foundations",
      "100 ready-to-use prompts",
      "6 tool tutorials and 7 role playbooks",
    ],
    promiseBullets: [
      "Understand what AI is, what it can do, and where the hype starts",
      "Learn how to use everyday AI tools without needing to code",
      "Translate AI literacy into practical workflows across HR, finance, sales, legal, and operations",
    ],
    whatYouGet: [
      {
        title: "Plain-language AI foundations",
        desc: "A clear explanation of modern AI concepts, written for working professionals instead of engineers.",
      },
      {
        title: "Prompting starter system",
        desc: "100 practical prompts you can adapt for writing, analysis, planning, research, and workplace decisions.",
      },
      {
        title: "Tool tutorials",
        desc: "Step-by-step guidance for using common AI tools with better judgment and less guesswork.",
      },
      {
        title: "Role playbooks",
        desc: "Workplace examples for HR, finance, sales, legal, operations, and other non-technical functions.",
      },
      {
        title: "AI without panic",
        desc: "A grounded view of what AI changes at work, what it does not replace, and how to learn without overwhelm.",
      },
      {
        title: "Beginner-friendly next steps",
        desc: "A practical path from basic understanding to confident experimentation in everyday work.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI tools are actually doing in plain English",
          "How prompts work and why better context improves results",
          "Where AI helps at work and where human judgment still matters",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A practical AI vocabulary",
          "Reusable prompts for common work situations",
          "A calmer way to evaluate AI tools and advice",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A coding course",
          "A machine-learning curriculum",
          "Hype-heavy predictions detached from real workplace use",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "AI Feels Abstract",
        desc: "You hear AI everywhere, but the terms, tools, and claims blur together.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "AI Becomes Usable",
        desc: "You understand the basics well enough to test tools, write better prompts, and judge outputs.",
        color: "#1a4fd6",
      },
      {
        stage: "Stage 3",
        title: "AI Fits Your Work",
        desc: "You can spot practical use cases in your own function without outsourcing your judgment to the tool.",
        color: "#0f4c81",
      },
    ],
    forYou: [
      "You are a working professional who wants to understand AI without learning to code.",
      "You work in HR, finance, sales, legal, operations, or another non-technical function.",
      "You want practical examples, prompts, and tool guidance instead of buzzwords.",
      "You feel behind on AI and want a calm, structured starting point.",
      "You want enough literacy to make better decisions before buying deeper role guides or services.",
    ],
    notForYou: [
      "You want a technical machine-learning or AI engineering course.",
      "You already build production AI systems and need advanced architecture guidance.",
      "You want hype, shortcuts, or guaranteed career outcomes.",
    ],
    ctaTitle: "Start with AI foundations before choosing your next move.",
    ctaBody:
      "Use this handbook to build practical AI literacy, then decide which tools, workflows, or career moves deserve your attention.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1a4fd6",
      accentSoft: "#86efac",
      accentStrong: "#0f4c81",
      heroGradient: "linear-gradient(135deg, #071713 0%, #0f2f4d 52%, #1a4fd6 100%)",
      heroText: "rgba(222,247,239,0.88)",
      sectionTint: "#f0fdf4",
      sectionBorder: "#bbf7d0",
      panelTint: "#f7fffb",
      finalGradient: "linear-gradient(160deg, #071713 0%, #0f2f4d 58%, #1a4fd6 100%)",
    },
  },
  "cloud-engineer-ai-survival-guide-2026": {
    productName: "Cloud Engineer AI Survival Guide 2026",
    title: "Cloud Engineer",
    accentTitle: "AI Survival Guide 2026",
    score: "3.8 / 10",
    riskLabel: "Low Replaceability When Repositioned Correctly",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Move from traditional cloud infrastructure work into AI-native cloud engineering by understanding what production AI systems actually need: GPU platform design, model-serving reliability, AI cost observability, vector infrastructure, and cloud architectures that can scale securely under real inference load.",
    heroNote:
      "Your infrastructure skills did not expire. They became the foundation every production AI system depends on.",
    outcomeBullets: [
      "A 90-day direction toward AI-native cloud engineering",
      "Clearer positioning around AI infrastructure reliability and scale",
      "India-first guidance for GCC, product, and AI platform teams",
    ],
    promiseBullets: [
      "Decode why traditional provisioning-heavy cloud work is being compressed and where premium demand is moving",
      "Reframe your experience around GPU platforms, model serving, cost engineering, and AI observability",
      "Build stronger portfolio, resume, and interview signal for AI cloud engineering roles",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for Cloud Engineers",
        desc: "A plain-English view of why routine infrastructure provisioning is getting cheaper while AI cloud engineering judgment is becoming more valuable.",
      },
      {
        title: "90-day transition playbook",
        desc: "A practical path to move from standard cloud engineering identity toward stronger AI-native infrastructure positioning.",
      },
      {
        title: "AI infrastructure lens",
        desc: "Guidance on GPU cluster sizing, model serving architecture, inference latency, autoscaling, AI platform security, and reliability design.",
      },
      {
        title: "GenAI infrastructure layer",
        desc: "A focused view of vector database deployment, LLM gateway design, token economics, prompt-serving infrastructure, and FinOps for AI workloads.",
      },
      {
        title: "Portfolio and proof direction",
        desc: "A structure for showing AI infrastructure design docs, cost-per-query thinking, observability plans, and production-readiness judgment.",
      },
      {
        title: "Resume, LinkedIn, and interview signal",
        desc: "Positioning approaches, hiring-manager evaluation criteria, red flags, and question-bank preparation for AI cloud engineering roles.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why traditional cloud engineering is still valuable but needs an AI infrastructure frame",
          "What AI Cloud Engineers actually own beyond application hosting and Terraform modules",
          "Where GPUs, model serving, AI observability, vector systems, and AI cost engineering fit into the role",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A clearer AI cloud engineering portfolio structure",
          "A stronger market story for GCC, product, and AI platform environments",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner cloud or Kubernetes course",
          "A full machine learning engineering curriculum",
          "Generic AI hype detached from production infrastructure reality",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Infrastructure Provisioner",
        desc: "Your profile is anchored to templated provisioning, standard cloud deployments, and repeatable platform execution.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Cloud Reliability / Platform Owner",
        desc: "You begin to signal stronger judgment around SLAs, platform reliability, cost controls, and infrastructure trade-offs.",
        color: "#1a4fd6",
      },
      {
        stage: "Stage 3",
        title: "AI-Native Cloud Engineer",
        desc: "You are positioned as the bridge between cloud platforms and AI systems, owning the infrastructure layer where production AI succeeds or fails.",
        color: "#0f4c81",
      },
    ],
    forYou: [
      "You are a Cloud Engineer in India and can see routine provisioning, platform setup, and maintenance work getting more automated.",
      "You want to move toward AI Cloud Engineer, MLOps platform, GenAI infrastructure, or adjacent AI platform roles.",
      "You already understand cloud infrastructure and want to apply that depth where AI teams have real scale, latency, and cost problems.",
      "You need a practical 90-day direction instead of vague advice to just learn AI.",
      "You want stronger resume, LinkedIn, portfolio, and interview positioning for AI infrastructure roles.",
    ],
    notForYou: [
      "You want a beginner AWS, Azure, Terraform, Kubernetes, or networking tutorial.",
      "You want a model-building, data science, or deep ML research curriculum.",
      "You already operate as a senior AI platform or MLOps lead with production GPU, model-serving, and AI cost governance ownership.",
    ],
    ctaTitle: "Move into the infrastructure layer where AI systems scale or fail.",
    ctaBody:
      "Use this guide to turn cloud engineering experience into stronger AI-native positioning, clearer proof, and a more durable market story.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1a4fd6",
      accentSoft: "#99f6e4",
      accentStrong: "#0f4c81",
      heroGradient: "linear-gradient(135deg, #061713 0%, #0b3b36 52%, #1a4fd6 100%)",
      heroText: "rgba(214,255,244,0.86)",
      sectionTint: "#ecfdf5",
      sectionBorder: "#99f6e4",
      panelTint: "#f7fffb",
      finalGradient: "linear-gradient(160deg, #061713 0%, #0b3b36 60%, #0f4c81 100%)",
    },
  },
  "data-engineer-ai-survival-guide-2026": {
    productName: "Data Engineer AI Survival Guide 2026",
    title: "Data Engineer",
    accentTitle: "AI Survival Guide 2026",
    score: "4.0 / 10",
    riskLabel: "Low Replaceability When Repositioned Correctly",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Move from traditional pipeline work into AI-native data engineering by understanding what AI teams actually need: trusted data, reliable features, embedding pipelines, feedback loops, drift monitoring, and data architecture that models can depend on.",
    heroNote:
      "Your pipeline skills did not expire. They became the reliability layer every serious AI team needs.",
    outcomeBullets: [
      "A 90-day direction toward AI-native data engineering",
      "Clearer positioning around data reliability for AI systems",
      "India-first guidance for GCC, product, and AI platform teams",
    ],
    promiseBullets: [
      "Decode why traditional DE work is being squeezed and where premium demand is moving",
      "Reframe your experience around model-ready data, feature quality, and production AI reliability",
      "Build stronger portfolio, resume, and interview signal for AI data engineering roles",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for Data Engineers",
        desc: "A plain-English view of why routine ETL and warehouse work is getting compressed while AI-native data judgment is becoming more valuable.",
      },
      {
        title: "90-day transition playbook",
        desc: "A practical path to move from traditional data engineering identity toward stronger AI data engineering positioning.",
      },
      {
        title: "AI data systems lens",
        desc: "Guidance on training-serving skew, data leakage, label quality, feature stores, embedding pipelines, drift, and feedback-loop data engineering.",
      },
      {
        title: "GenAI data engineering layer",
        desc: "A focused view of chunking strategy, retrieval quality, document freshness, metadata filtering, and access control for GenAI systems.",
      },
      {
        title: "Portfolio and proof direction",
        desc: "A structure for showing data quality contracts, leakage audits, monitoring designs, success metrics, and baseline improvements.",
      },
      {
        title: "Resume, LinkedIn, and interview signal",
        desc: "Positioning approaches, hiring-manager evaluation criteria, red flags, and question-bank preparation for AI data roles.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why traditional pipeline skills are still valuable but need a new AI-system frame",
          "What AI Data Engineers actually own beyond warehouses and dashboards",
          "Where feature stores, embeddings, drift, leakage, and feedback data fit into the role",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A clearer AI data engineering portfolio structure",
          "A stronger market story for GCC, product, and AI platform environments",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner data engineering course",
          "A full ML engineering curriculum",
          "Generic AI hype detached from production data reliability",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Traditional Pipeline Owner",
        desc: "Your profile is anchored to ETL, orchestration, warehouse maintenance, and repeatable data delivery patterns.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "AI Data Reliability Builder",
        desc: "You begin to signal stronger judgment around model-ready data, quality contracts, leakage, drift, and feedback loops.",
        color: "#0891b2",
      },
      {
        stage: "Stage 3",
        title: "AI-Native Data Engineer",
        desc: "You are positioned as the bridge between data systems and AI systems, owning the data layer where production models succeed or fail.",
        color: "#1a4fd6",
      },
    ],
    forYou: [
      "You are a Data Engineer in India and can see routine pipeline work becoming more automated or commoditized.",
      "You want to move toward AI Data Engineer, ML data platform, GenAI data systems, or adjacent AI platform roles.",
      "You already understand data systems and want to apply that depth where AI teams have real reliability problems.",
      "You need a practical 90-day direction instead of vague advice to just learn AI.",
      "You want stronger resume, LinkedIn, portfolio, and interview positioning for AI data roles.",
    ],
    notForYou: [
      "You want a beginner SQL, Python, Spark, or data engineering tutorial.",
      "You want a model-building or deep ML research curriculum.",
      "You already operate as a senior AI platform or ML infrastructure engineer with production feature-store, embedding, and feedback-loop ownership.",
    ],
    ctaTitle: "Move into the data layer where AI systems succeed or fail.",
    ctaBody:
      "Use this guide to turn data engineering experience into stronger AI-native positioning, clearer proof, and a more durable market story.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#0891b2",
      accentSoft: "#a5f3fc",
      accentStrong: "#1a4fd6",
      heroGradient: "linear-gradient(135deg, #06141a 0%, #083344 52%, #0891b2 100%)",
      heroText: "rgba(207,250,254,0.86)",
      sectionTint: "#ecfeff",
      sectionBorder: "#67e8f9",
      panelTint: "#f7feff",
      finalGradient: "linear-gradient(160deg, #06141a 0%, #083344 60%, #1a4fd6 100%)",
    },
  },
  "project-delivery-manager-survival-guide-2026": {
    productName: "Project Manager / Delivery Manager Survival Guide 2026",
    title: "Project Manager /",
    accentTitle: "Delivery Manager Survival Guide 2026",
    score: "5.9 / 10",
    riskLabel: "Moderate Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand what AI compresses in coordination-heavy project and delivery work, what higher-leverage judgment still compounds, and how to reposition around execution systems, cross-functional control, and business ownership instead of status reporting.",
    heroNote:
      "The market still needs orchestration. It pays more for judgment than for coordination theater.",
    outcomeBullets: [
      "A 60-day direction for stronger project and delivery positioning",
      "Clearer movement beyond tracker-heavy coordination work",
      "India-first guidance for GCC, SaaS, and transformation environments",
    ],
    promiseBullets: [
      "Decode which project and delivery tasks AI makes cheaper first",
      "Reframe your value around judgment, prioritization, and execution systems",
      "Build stronger market signal without pretending to be more technical than you are",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for project and delivery work",
        desc: "A direct explanation of what is getting compressed in meeting-heavy, reporting-heavy coordination roles and what still compounds when you own trade-offs and outcomes.",
      },
      {
        title: "60-day repositioning direction",
        desc: "A practical next-step path to move from tracker ownership toward clearer roadmap, execution, and business-value signal.",
      },
      {
        title: "future-of-work project and delivery lens",
        desc: "A grounded view of how AI changes planning, stakeholder updates, execution tracking, and delivery rhythm without removing the need for human judgment.",
      },
      {
        title: "Hiring signal and narrative guidance",
        desc: "Examples for sounding stronger in interviews, resumes, and LinkedIn when the market is filtering for sharper execution judgment and delivery control.",
      },
      {
        title: "GCC and product-side market context",
        desc: "India-first framing for how stronger project and delivery profiles are separating from generic coordination roles in the current hiring market.",
      },
      {
        title: "Compensation and ceiling framing",
        desc: "A more useful view of why your salary ceiling changes when you are seen as someone who drives decisions, not just someone who runs follow-ups.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which project and delivery tasks are becoming more automatable",
          "Why status-chasing work is turning into a ceiling",
          "What stronger execution and delivery signal looks like now",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day repositioning direction",
          "A sharper story for interviews and internal moves",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic project management certification substitute",
          "A promise that every delivery manager should change titles overnight",
          "US-market advice awkwardly copied into India realities",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Coordination-Heavy Operator",
        desc: "Your profile is anchored to follow-ups, trackers, and execution administration with limited visible decision ownership.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Execution Systems Owner",
        desc: "You start signaling better prioritization, cross-functional judgment, and clearer control over how work actually moves.",
        color: "#7c3aed",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Project / Delivery Leader",
        desc: "You are positioned around trade-offs, execution quality, delivery control, and business outcomes instead of coordination volume.",
        color: "#be123c",
      },
    ],
    forYou: [
      "You are a Project Manager, Program Manager, Scrum Master, or Delivery Manager in India and more of your work feels coordination-heavy.",
      "You can see AI shrinking the value of status reporting, documentation cleanup, and routine stakeholder updates.",
      "You want a stronger market story around prioritization, execution systems, and business judgment.",
      "You need a practical 60-day direction instead of vague advice to just become more strategic.",
      "You want better GCC, SaaS, or transformation-role positioning without inventing experience you do not have.",
    ],
    notForYou: [
      "You want a beginner project management course, Agile certification prep, or delivery framework tutorial.",
      "You already operate at a senior transformation or portfolio-delivery level with strong decision ownership.",
      "You want a broad global project-management market overview instead of India-first career positioning guidance.",
    ],
    ctaTitle: "Move beyond coordination-heavy project and delivery work.",
    ctaBody:
      "Use this guide to sharpen your market story, build stronger proof of judgment, and reposition toward roles that reward better execution and delivery leadership.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#7c3aed",
      accentSoft: "#d8b4fe",
      accentStrong: "#be123c",
      heroGradient: "linear-gradient(135deg, #13071d 0%, #2e1065 52%, #7c3aed 100%)",
      heroText: "rgba(233,213,255,0.85)",
      sectionTint: "#faf5ff",
      sectionBorder: "#d8b4fe",
      panelTint: "#fcfaff",
      finalGradient: "linear-gradient(160deg, #13071d 0%, #2e1065 60%, #7c3aed 100%)",
    },
  },
  "ba-to-ai-pm-guide-2026": {
    productName: "Business Analyst to AI Product Manager Career Transition Guide 2026",
    title: "Business Analyst to",
    accentTitle: "AI Product Manager Guide 2026",
    score: "3.5 / 10",
    riskLabel: "Low Replaceability When Repositioned Correctly",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See how your BA strengths translate into AI product ownership, what skill gaps actually matter, and how to move toward AI PM roles with stronger market credibility instead of vague upskilling.",
    heroNote:
      "Your BA skills did not expire. They moved up the value chain.",
    outcomeBullets: [
      "A 90-day BA-to-AI PM transition direction",
      "Clearer positioning around problem ownership and AI product judgment",
      "India-first context for GCC, product, and AI transformation roles",
    ],
    promiseBullets: [
      "Decode why BA problem-framing skills are becoming more valuable in AI teams",
      "Understand the exact gap between BA execution and AI PM ownership",
      "Build stronger proof, language, and career signal for AI PM-style roles",
    ],
    whatYouGet: [
      {
        title: "The BA-to-AI PM transition map",
        desc: "A practical view of where traditional BA work gets squeezed, where AI PM value begins, and how to move across that gap credibly.",
      },
      {
        title: "90-day transition playbook",
        desc: "A staged plan to build evidence, reposition your profile, and move from requirements-heavy identity toward product ownership signal.",
      },
      {
        title: "AI PM skill-gap clarity",
        desc: "A focused breakdown of what you already have as a BA, what you need to add, and what you do not need to overlearn.",
      },
      {
        title: "AI feasibility and product judgment lens",
        desc: "A more useful way to evaluate AI product ideas, trade-offs, error costs, and human-in-the-loop decisions without needing to become an ML engineer.",
      },
      {
        title: "Portfolio, resume, and LinkedIn direction",
        desc: "Examples and frameworks to help you present yourself closer to outcomes, prioritization, and product thinking.",
      },
      {
        title: "India-first market and compensation context",
        desc: "Grounded context on GCC, product, and AI role demand so your transition decisions are tied to real market movement.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why BA work is being renamed rather than disappearing",
          "What AI Product Managers actually own beyond documentation",
          "Where the real transition gap sits for experienced BAs",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A stronger market story for AI PM-style roles",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic PM certification substitute",
          "A promise that every BA should switch titles immediately",
          "A full public dump of the guide's frameworks and templates",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Requirements Documenter",
        desc: "Your profile is anchored to documentation, structured delivery, and lower-leverage execution work.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Business Problem Owner",
        desc: "You start defining the problem, shaping the options, and influencing what gets built before it reaches a backlog.",
        color: "#2563eb",
      },
      {
        stage: "Stage 3",
        title: "AI Product Manager",
        desc: "You are positioned around roadmap judgment, AI feasibility thinking, and measurable business outcomes.",
        color: "#0f4c81",
      },
    ],
    forYou: [
      "You are a Business Analyst or Senior BA who wants to move closer to product ownership in the future-of-work shift.",
      "You can already sense that documentation-heavy BA work is getting compressed and renamed.",
      "You want an India-first bridge into AI PM, AI Product Owner, or adjacent product roles.",
      "You need a concrete 90-day path, not generic advice to just learn product management.",
      "You want to turn existing BA judgment into stronger market leverage and salary upside.",
    ],
    notForYou: [
      "You want a full technical AI engineering curriculum or model-building course.",
      "You already operate as an experienced AI PM and mainly need advanced execution tactics.",
      "You want a broad global PM career overview instead of India-first transition guidance.",
    ],
    ctaTitle: "Move from BA execution to AI product ownership.",
    ctaBody:
      "Use this guide to build a sharper transition story, stronger proof of judgment, and a more credible path into AI PM-style roles.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#0f4c81",
      accentSoft: "#93c5fd",
      accentStrong: "#1d4ed8",
      heroGradient: "linear-gradient(135deg, #08111f 0%, #0d2746 52%, #0f4c81 100%)",
      heroText: "rgba(196,225,255,0.85)",
      sectionTint: "#f4f9ff",
      sectionBorder: "#bfdbfe",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #08111f 0%, #0d2746 60%, #0f4c81 100%)",
    },
  },
  "fde-career-transition-guide-2026": {
    productName: "FDE Career Transition Guide 2026",
    title: "FDE Career",
    accentTitle: "Transition Guide 2026",
    score: "2.5 / 10",
    riskLabel: "Lower Risk When Repositioned Deliberately",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand how FDE work is changing in an AI-shaped market, which execution-heavy patterns are becoming cheaper, and how to transition toward stronger engineering, product, and business-value signal without discarding your existing base.",
    heroNote:
      "The goal is not to abandon your background. The goal is to move it up the value chain.",
    outcomeBullets: [
      "A 90-day FDE transition direction built for working professionals",
      "Clearer movement beyond execution-only delivery",
      "India-first guidance for stronger GCC, product, and future-of-work engineering positioning",
    ],
    promiseBullets: [
      "Decode which parts of FDE work are getting commoditized fastest",
      "Reframe your experience around systems judgment, ownership, and product value",
      "Build stronger market signal without forcing a random stack or role pivot",
    ],
    whatYouGet: [
      {
        title: "A clearer FDE transition map",
        desc: "A practical breakdown of where execution-heavy FDE work loses leverage and where stronger demand starts rewarding judgment, architecture awareness, and sharper ownership.",
      },
      {
        title: "90-day career transition direction",
        desc: "A staged path to help you move from delivery-heavy identity toward a more durable and higher-upside engineering story.",
      },
      {
        title: "future-of-work leverage lens",
        desc: "A grounded view of how to use AI to increase output while keeping your credibility anchored in real problem-solving and decision quality.",
      },
      {
        title: "Resume, LinkedIn, and interview positioning",
        desc: "Examples for sounding closer to outcomes, trade-offs, and business relevance instead of task completion alone.",
      },
      {
        title: "India-first market context",
        desc: "A sharper read on how GCC, SaaS, and product teams are separating commodity implementation from stronger engineering profiles.",
      },
      {
        title: "Ceiling and compensation framing",
        desc: "A more useful way to understand why salary upside changes when your profile signals better judgment, ownership, and leverage.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI makes cheaper inside execution-heavy FDE work",
          "Why pure delivery throughput is becoming a weaker moat",
          "What stronger FDE signal looks like in the current market",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A sharper market story for better roles",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic software engineering tutorial",
          "A fake promise that every FDE should switch titles immediately",
          "Hype-heavy AI career advice detached from India realities",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Execution-Only FDE Identity",
        desc: "Your profile is valued mainly for implementation speed, delivery throughput, and completing assigned work.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Higher-Signal FDE Positioning",
        desc: "You begin to show stronger product awareness, systems thinking, and more visible ownership of trade-offs and outcomes.",
        color: "#db2777",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Career Transition",
        desc: "You are positioned for roles that reward better judgment, stronger engineering leverage, and closer alignment to business value.",
        color: "#9d174d",
      },
    ],
    forYou: [
      "You work as an FDE and can feel execution-heavy work becoming easier to compress with AI.",
      "You want a stronger path into higher-leverage engineering, product-adjacent, or AI-shaped roles without discarding your current experience.",
      "You need a practical 90-day transition direction instead of generic advice to just learn more tools.",
      "You want your resume and interviews to signal ownership, judgment, and systems thinking more clearly.",
      "You are targeting stronger GCC, SaaS, or product-team positioning in India.",
    ],
    notForYou: [
      "You want a beginner programming course or full-stack engineering tutorial.",
      "You already operate in a high-leverage engineering role with strong architecture and product ownership signal.",
      "You want a broad global software market overview instead of India-first career transition guidance.",
    ],
    ctaTitle: "Move beyond execution-only FDE work.",
    ctaBody:
      "Use this guide to sharpen your career transition story, build stronger proof of leverage, and reposition toward work that rewards better judgment and ownership.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#be185d",
      accentSoft: "#f9a8d4",
      accentStrong: "#9d174d",
      heroGradient: "linear-gradient(135deg, #2a0718 0%, #5b1234 52%, #be185d 100%)",
      heroText: "rgba(255,220,235,0.86)",
      sectionTint: "#fff5f8",
      sectionBorder: "#f9a8d4",
      panelTint: "#fff9fb",
      finalGradient: "linear-gradient(160deg, #2a0718 0%, #5b1234 60%, #be185d 100%)",
    },
  },
  "business-analyst-survival-guide-2026": {
    productName: "Business Analyst Survival Guide 2026",
    title: "Business Analyst",
    accentTitle: "Survival Guide 2026",
    score: "7.1 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See what is being compressed in BA work, what still compounds, and how to move from documentation-heavy delivery into stronger GCC and product-side analyst positioning.",
    heroNote:
      "The goal is not to sound more technical. The goal is to sound more valuable.",
    outcomeBullets: [
      "A 60-day upgrade direction built for working BAs",
      "Clearer positioning beyond documentation-heavy work",
      "India-first salary and market context for your next move",
    ],
    promiseBullets: [
      "Decode your SA-AIRS score in plain language",
      "Reframe your experience around problem framing and ownership",
      "Turn AI usage into visible career proof instead of vague upskilling",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for BA work",
        desc: "A practical breakdown of what is being compressed, what still matters, and how to interpret that without panic.",
      },
      {
        title: "60-day repositioning plan",
        desc: "A structured path to build stronger proof, not just consume more AI content.",
      },
      {
        title: "future-of-work workflow guidance",
        desc: "Where AI should accelerate your work, where judgment should stay human-led, and how to use both without hurting credibility.",
      },
      {
        title: "Resume and interview positioning",
        desc: "Examples and prompts to help you sound closer to outcomes, product thinking, and business value.",
      },
      {
        title: "India-specific market direction",
        desc: "Context for GCC and product-side analyst paths, including where higher-leverage BA demand is moving.",
      },
      {
        title: "Salary framing for stronger roles",
        desc: "A grounded view of what changes when your positioning improves and the work becomes less commodity-like.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which BA tasks are easiest to automate",
          "Why documentation alone is becoming a ceiling",
          "What better analyst signal looks like in India",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day plan to build visible proof",
          "A sharper way to describe your value",
          "A clearer GCC or product-side direction",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic BA certification playbook",
          "A fake promise that every BA should become a PM",
          "US-market advice awkwardly adapted for India",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Commodity BA Work",
        desc: "Documentation-heavy output with low strategic visibility.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "AI-Augmented BA",
        desc: "Faster execution plus early proof of stronger thinking.",
        color: "#2563eb",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Analyst",
        desc: "Problem framing, feature thinking, and stronger outcome ownership.",
        color: "#1a4fd6",
      },
    ],
    forYou: [
      "You are a Business Analyst or Senior BA in Indian IT services and the role feels documentation-heavy.",
      "You can feel AI compressing low-leverage work but you are not yet sure what to build next.",
      "You want to move toward GCC or product-side analyst work without pretending to be a PM overnight.",
      "You want a 60-day plan that turns AI usage into visible proof.",
      "You already have domain depth and want to turn it into a stronger moat.",
    ],
    notForYou: [
      "You want a technical training course on BA tools.",
      "You already operate like a product analyst with strong outcome ownership and AI feature design experience.",
      "You want a broad global BA market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Move beyond documentation-heavy BA work.",
    ctaBody:
      "Use this guide to build a clearer market story, stronger proof, and a more credible next-step plan.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1a4fd6",
      accentSoft: "#99f6e4",
      accentStrong: "#155e75",
      heroGradient: "linear-gradient(135deg, #08131f 0%, #0f2740 50%, #155e75 100%)",
      heroText: "rgba(190,235,240,0.88)",
      sectionTint: "#f0fdfa",
      sectionBorder: "#99f6e4",
      panelTint: "#f4fbfb",
      finalGradient: "linear-gradient(160deg, #07111d 0%, #0b1d31 60%, #0f3a4f 100%)",
    },
  },
  "data-analyst-career-guide-2026": {
    productName: "Data Analyst Career Guide 2026",
    title: "Data Analyst",
    accentTitle: "Career Guide 2026",
    score: "7.8 / 10",
    riskLabel: "Moderate-High Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand what is being automated in reporting-heavy analyst work, what higher-value analyst paths still compound, and how to reposition without guessing.",
    heroNote:
      "The future is not fewer analysts. It is fewer low-leverage analysts.",
    outcomeBullets: [
      "A 90-day blueprint for higher-value analyst positioning",
      "Clearer movement beyond dashboard dependence",
      "India-first guidance for GCC, SaaS, and product-facing analyst roles",
    ],
    promiseBullets: [
      "Decode where analyst work is being commoditized",
      "Build a stronger market story around insight and decision support",
      "Prioritize the next skills and proof that actually change your positioning",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for reporting-heavy work",
        desc: "A practical explanation of what is being automated and what becomes more valuable.",
      },
      {
        title: "90-day action direction",
        desc: "A structured next-step plan designed to create visible progress, not more random learning.",
      },
      {
        title: "Portfolio direction",
        desc: "Guidance on what kind of analyst proof feels stronger in the future-of-work shift.",
      },
      {
        title: "Positioning strategy",
        desc: "How to move from dashboard dependence toward insight, context, and business value.",
      },
      {
        title: "Sector-aware lens",
        desc: "A more useful view of where analyst demand deepens across SaaS, FinTech, and E-Commerce style environments.",
      },
      {
        title: "Salary and market framing",
        desc: "A grounded India-first view of how stronger analyst positioning changes your upside.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI makes cheaper in analyst work",
          "Why recurring reporting is under pressure",
          "What hiring managers value more now",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A stronger analyst story for the market",
          "A more deliberate 90-day plan",
          "A clearer direction for better proof and positioning",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A machine learning course",
          "A generic list of analytics certificates",
          "Advice that treats the India market like an afterthought",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Reporting Dependence",
        desc: "Your value is tied too tightly to recurring dashboards and standard analysis work.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Insight and Context",
        desc: "You begin to signal better problem framing, communication, and business awareness.",
        color: "#2563eb",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Analyst",
        desc: "You are positioned closer to decision support, product thinking, and strategic value creation.",
        color: "#1d4ed8",
      },
    ],
    forYou: [
      "You are a Reporting Analyst or BI Analyst and your current work feels easier to automate.",
      "You want to move toward more valuable analyst work without guessing your way through it.",
      "You want an India-first plan instead of generic global analytics career advice.",
      "You have limited weekly time and need higher-return next steps.",
      "You want stronger positioning, not just more certificates.",
    ],
    notForYou: [
      "You already operate as a Product Analyst or Analytics Engineer at a higher-leverage level.",
      "You want a technical ML or data science course instead of a career strategy guide.",
      "You want a global market analysis instead of India-first positioning guidance.",
    ],
    ctaTitle: "Move from reporting dependence to analyst leverage.",
    ctaBody:
      "Use this guide to build a clearer story, a better next-step plan, and a more durable analyst profile.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#2563eb",
      accentSoft: "#93c5fd",
      accentStrong: "#1338a8",
      heroGradient: "linear-gradient(135deg, #050d2e 0%, #0a1854 50%, #1338a8 100%)",
      heroText: "rgba(180,210,255,0.85)",
      sectionTint: "#eff6ff",
      sectionBorder: "#bfdbfe",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #050d2e 0%, #0a1854 60%, #1338a8 100%)",
    },
  },
  "qa-engineer-survival-guide-2026": {
    productName: "QA Engineer Survival Guide 2026",
    title: "QA Engineer",
    accentTitle: "Survival Guide 2026",
    score: "9.5 / 10",
    riskLabel: "High Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See exactly where manual QA is under pressure, what higher-value quality work still compounds, and how to reposition before the market hardens further.",
    heroNote:
      "The safer move is upward, not sideways.",
    outcomeBullets: [
      "A 90-day QA upgrade direction built for Indian IT roles",
      "Clearer movement toward higher-value quality ownership",
      "Interview and positioning help for stronger GCC-ready quality roles",
    ],
    promiseBullets: [
      "Decode why manual-only QA is narrowing so quickly",
      "Find your higher-value quality zone before the market fully resets",
      "Replace vague fear with a practical transition path",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for manual QA",
        desc: "A direct explanation of what is under pressure and what still benefits from human judgment.",
      },
      {
        title: "90-day repositioning path",
        desc: "A structured plan to move from manual-only identity toward stronger quality ownership.",
      },
      {
        title: "AI testing and workflow direction",
        desc: "A practical lens on where AI fits into testing work and how to stay relevant as execution gets cheaper.",
      },
      {
        title: "Hiring signal guidance",
        desc: "How stronger QA profiles communicate judgment, risk awareness, and ownership in the current market.",
      },
      {
        title: "GCC and salary context",
        desc: "A more grounded view of where higher-value quality roles sit and how the market rewards them.",
      },
      {
        title: "Examples and messaging support",
        desc: "Research tools to make your next move clearer in applications, interviews, and internal conversations.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What parts of QA are easiest to automate",
          "Why manual-only execution is narrowing fast",
          "Where stronger human-value quality work begins",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day transition direction",
          "A stronger story for interviews and internal moves",
          "A clearer path toward higher-value quality work",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Selenium course",
          "A generic fear-based AI hot take",
          "Advice that ignores how Indian QA hiring actually works",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Manual-Only Execution",
        desc: "Your value is tied too tightly to repetitive testing work that can increasingly be automated.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Stronger Quality Ownership",
        desc: "You begin to signal judgment, risk awareness, and the ability to think beyond checklist execution.",
        color: "#16a34a",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage QA Positioning",
        desc: "You are presented as someone who protects quality outcomes, not just someone who runs test cases.",
        color: "#1a4fd6",
      },
    ],
    forYou: [
      "You are a Manual QA Engineer or QA Lead in Indian IT services.",
      "Your team has started automation or AI tooling and you feel behind.",
      "You have tried applying to new QA roles and the market feels flat.",
      "You want a concrete plan instead of generic upskilling advice.",
      "You want to become harder to replace, not just more anxious.",
    ],
    notForYou: [
      "You are already an SDET or Quality Engineer actively using advanced AI testing workflows.",
      "You want a technical course on Selenium or automation fundamentals.",
      "You want a global QA market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Build a stronger direction for your QA career.",
    ctaBody:
      "Use this guide to replace vague uncertainty with a clearer plan, stronger positioning, and a more durable QA story.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1a4fd6",
      accentSoft: "#6ee7b7",
      accentStrong: "#0f5c3a",
      heroGradient: "linear-gradient(135deg, #071a14 0%, #0d3322 50%, #0f5c3a 100%)",
      heroText: "rgba(180,240,220,0.85)",
      sectionTint: "#f0fdf8",
      sectionBorder: "#bbf7d0",
      panelTint: "#f8faff",
      finalGradient: "linear-gradient(160deg, #071a14 0%, #0d3322 60%, #0f5c3a 100%)",
    },
  },
  "selenium-engineer-upgrade-guide-2026": {
    productName: "Selenium Engineer Upgrade Guide 2026",
    title: "Selenium Engineer",
    accentTitle: "Upgrade Guide 2026",
    score: "7.2 / 10",
    riskLabel: "Active Upgrade Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand how the automation market is splitting, what premium testing roles now expect, and how to move from Selenium-heavy comfort toward more modern relevance.",
    heroNote:
      "Your base is not the problem. Standing still is.",
    outcomeBullets: [
      "A 60-day upgrade direction toward Playwright and AI-shaped quality work",
      "Clearer GCC and product-side automation positioning",
      "A practical bridge from legacy automation comfort to stronger market relevance",
    ],
    promiseBullets: [
      "Decode the gap between legacy automation demand and premium automation demand",
      "Upgrade your positioning without discarding your existing experience",
      "Focus on the skills and signals that move your ceiling upward",
    ],
    whatYouGet: [
      {
        title: "Market split clarity",
        desc: "A more useful view of where Selenium still has value and where stronger demand has already moved on.",
      },
      {
        title: "60-day upgrade direction",
        desc: "A practical plan to move toward modern automation relevance instead of collecting disconnected tutorials.",
      },
      {
        title: "Playwright and future-of-work positioning lens",
        desc: "A clearer way to present your background as a foundation for stronger automation work.",
      },
      {
        title: "Hiring signal guidance",
        desc: "How stronger automation profiles communicate tooling currency, architecture awareness, and better long-term fit.",
      },
      {
        title: "Illustrative progression examples",
        desc: "An honest picture of what a stronger upgrade path can look like in GCC-style environments.",
      },
      {
        title: "India-first salary context",
        desc: "A grounded view of why your salary ceiling changes when your positioning changes.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why legacy automation comfort is becoming a ceiling",
          "What modern automation roles are rewarding",
          "How the market is splitting in India",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day upgrade direction",
          "A stronger automation story for the market",
          "A clearer next move beyond Selenium-only identity",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Selenium tutorial",
          "A fake claim that Selenium is dead overnight",
          "Generic QA advice with no upgrade lens",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Legacy Automation Comfort",
        desc: "Your profile is still too tightly tied to older automation expectations and familiar tooling.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Modern Automation Relevance",
        desc: "You begin to signal stronger architecture awareness, better tooling currency, and more future-ready thinking.",
        color: "#4f46e5",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Quality Positioning",
        desc: "You are seen as someone who can own stronger automation outcomes in a more AI-shaped environment.",
        color: "#1a4fd6",
      },
    ],
    forYou: [
      "You are a Selenium Automation Engineer and want to stay ahead of the shift.",
      "You have started seeing new automation expectations in job postings and need a clearer upgrade path.",
      "You want stronger GCC or product positioning without discarding your base experience.",
      "You want a practical roadmap instead of another testing tutorial.",
      "You want to move toward more durable automation relevance.",
    ],
    notForYou: [
      "You already operate at an advanced Playwright and AI evaluation level.",
      "You want a beginner automation course or hands-on Selenium tutorial.",
      "You want a global QA market analysis instead of India-first positioning guidance.",
    ],
    ctaTitle: "Upgrade before the market gap widens.",
    ctaBody:
      "Use this guide to turn Selenium experience into stronger modern relevance, better positioning, and a clearer upgrade path.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#4f46e5",
      accentSoft: "#a5b4fc",
      accentStrong: "#312e81",
      heroGradient: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 50%, #312e81 100%)",
      heroText: "rgba(199,210,254,0.85)",
      sectionTint: "#f5f3ff",
      sectionBorder: "#c7d2fe",
      panelTint: "#f8faff",
      finalGradient: "linear-gradient(135deg, #0a0a2e 0%, #1e1b4b 100%)",
    },
  },
  "python-developer-ai-leverage-guide-2026": {
    productName: "Python Developer AI Leverage Guide 2026",
    title: "Python Developer",
    accentTitle: "AI Leverage Guide 2026",
    score: "7.0 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand which parts of Python development are getting cheaper, where Python still compounds in future-of-work teams, and how to reposition beyond script-heavy execution toward automation judgment, backend ownership, data workflow reliability, and AI-assisted engineering leverage.",
    heroNote:
      "Python did not become less valuable. Low-context Python execution did.",
    outcomeBullets: [
      "A 60-day direction toward higher-leverage Python work",
      "Clearer positioning around automation, systems judgment, and AI tooling",
      "India-first guidance for GCC, product, data, and AI-adjacent teams",
    ],
    promiseBullets: [
      "Decode what is actually at risk in Python developer careers",
      "Move beyond script delivery into stronger engineering and automation ownership",
      "Use AI to increase leverage while building proof that hiring teams can trust",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for Python work",
        desc: "A direct explanation of why routine scripting, glue code, and simple CRUD work are easier to compress, and where Python judgment still matters.",
      },
      {
        title: "60-day leverage direction",
        desc: "A practical next-step path for building more visible proof around automation quality, backend reliability, data workflow thinking, and AI-assisted delivery.",
      },
      {
        title: "future-of-work Python positioning",
        desc: "Guidance on how to frame Python experience around tool use, workflow design, API integration, evaluation thinking, and production usefulness.",
      },
      {
        title: "Automation and systems lens",
        desc: "A clearer way to move from one-off scripts toward maintainable automation, observability, error handling, and business-aware engineering outcomes.",
      },
      {
        title: "Portfolio and proof direction",
        desc: "Examples of stronger proof assets: automation case studies, AI-assisted refactors, data pipeline reliability notes, and backend design decisions.",
      },
      {
        title: "Resume, LinkedIn, and interview signal",
        desc: "Positioning approaches that help your profile read as higher-leverage Python engineering, not only fast implementation or tool familiarity.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why basic Python scripting and repeatable implementation are under pressure",
          "What Python judgment is worth more now across automation, backend, data, and AI workflows",
          "How to use AI tools without sounding like someone who only prompts code into existence",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day leverage direction",
          "A stronger story for GCC, product, data, and AI-adjacent roles",
          "A clearer sense of what proof to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Python tutorial",
          "A full machine learning or data science curriculum",
          "Generic advice to just learn AI tools",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Script-Heavy Execution",
        desc: "Your profile is too tightly tied to quick scripts, simple automation, and repeatable implementation that AI can increasingly accelerate.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "AI-Augmented Python Delivery",
        desc: "You start using AI to increase output while signaling better review judgment, workflow design, test thinking, and maintainability.",
        color: "#1a4fd6",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Python Positioning",
        desc: "You are seen as someone who owns automation outcomes, backend trade-offs, data reliability, and future-of-work engineering decisions.",
        color: "#0f4c81",
      },
    ],
    forYou: [
      "You are a Python developer in India and routine scripts, APIs, or automation tasks feel easier to generate with AI.",
      "You want to use AI to increase leverage without abandoning Python or pretending to become an AI researcher overnight.",
      "You are targeting stronger GCC, product, data, automation, or AI-adjacent engineering roles.",
      "You need a practical 60-day direction instead of vague advice to just learn more tools.",
      "You want stronger resume, LinkedIn, portfolio, and interview positioning for Python work in an AI-shaped market.",
    ],
    notForYou: [
      "You want a beginner Python programming course.",
      "You want a deep ML research, data science, or model-building curriculum.",
      "You already operate as a senior AI platform, ML infrastructure, or staff-level Python engineering leader and mainly need specialized implementation depth.",
    ],
    ctaTitle: "Move up the Python value chain.",
    ctaBody:
      "Use this guide to turn Python experience into stronger future-of-work positioning, clearer proof, and a more durable market story.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1a4fd6",
      accentSoft: "#99f6e4",
      accentStrong: "#0f4c81",
      heroGradient: "linear-gradient(135deg, #051916 0%, #0b3b36 52%, #1a4fd6 100%)",
      heroText: "rgba(214,255,244,0.86)",
      sectionTint: "#ecfdf5",
      sectionBorder: "#99f6e4",
      panelTint: "#f7fffb",
      finalGradient: "linear-gradient(160deg, #051916 0%, #0b3b36 60%, #0f4c81 100%)",
    },
  },
  "java-developer-ai-leverage-guide-2026": {
    productName: "Java Developer AI Leverage Guide 2026",
    title: "Java Developer",
    accentTitle: "AI Leverage Guide 2026",
    score: "7.5 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "See what parts of Java work are getting cheaper, what still compounds inside the Java ecosystem, and how to move toward higher-leverage engineering identity instead of boilerplate dependence.",
    heroNote:
      "Let AI handle the repeatable work. Keep your time for what compounds.",
    outcomeBullets: [
      "A 60-day direction toward higher-leverage Java work",
      "Clearer positioning around architecture, judgment, and AI integration",
      "A better path into GCC and product-side roles without abandoning Java",
    ],
    promiseBullets: [
      "Decode what is actually at risk in Java careers",
      "Move up the value chain instead of sideways into panic",
      "Use AI to increase leverage while staying grounded in real engineering work",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for Java work",
        desc: "A direct explanation of what repetitive implementation work is losing value and what still compounds.",
      },
      {
        title: "60-day leverage direction",
        desc: "A practical roadmap for building more visible proof around judgment, ownership, and higher-value work.",
      },
      {
        title: "Architecture and domain lens",
        desc: "A clearer way to think about design judgment, diagnosis, and business-aware engineering as your moat.",
      },
      {
        title: "AI integration positioning",
        desc: "Guidance on how to sound stronger around future-of-work engineering without pretending to be an AI researcher.",
      },
      {
        title: "Hiring signal guidance",
        desc: "What makes a Java profile feel more future-ready in GCC and product settings.",
      },
      {
        title: "India-first salary context",
        desc: "A grounded view of why stronger engineering positioning changes your ceiling.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why boilerplate Java work is under pressure",
          "What design judgment is worth more now",
          "How to stay inside Java while getting more valuable",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day leverage direction",
          "A stronger story for GCC and product roles",
          "A clearer sense of what to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A beginner Java tutorial",
          "A hype-heavy promise that everyone should pivot stacks",
          "Generic advice to just learn AI",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Boilerplate Dependence",
        desc: "Your profile is too tightly tied to implementation speed and repeatable backend work.",
        color: "#78716c",
      },
      {
        stage: "Stage 2",
        title: "AI-Augmented Delivery",
        desc: "You start signaling stronger output, better judgment, and improved technical leverage.",
        color: "#b45309",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Java Positioning",
        desc: "You are seen as someone who owns design, trade-offs, and business-aware engineering decisions.",
        color: "#ea580c",
      },
    ],
    forYou: [
      "You are a Java or Spring Boot developer and repetitive implementation work feels easier to automate.",
      "You want to use AI to increase leverage without abandoning the Java ecosystem.",
      "You are targeting stronger GCC or product roles and want better positioning.",
      "You want a practical roadmap instead of generic advice to just learn AI.",
      "You want to move up the value chain, not sideways into panic.",
    ],
    notForYou: [
      "You already build advanced production AI features in Java and mainly need deep implementation help.",
      "You want a beginner Java course or full Spring Boot tutorial.",
      "You want a global Java market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Move up the Java value chain.",
    ctaBody:
      "Use this guide to become more visible, more trusted, and more durable as a Java developer in an AI-shaped market.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#b45309",
      accentSoft: "#fdba74",
      accentStrong: "#b45309",
      heroGradient: "linear-gradient(135deg, #1c0d05 0%, #5b2410 55%, #b45309 100%)",
      heroText: "rgba(255,230,200,0.86)",
      sectionTint: "#fff7ed",
      sectionBorder: "#fdba74",
      panelTint: "#fffaf5",
      finalGradient: "linear-gradient(135deg, #1c0d05 0%, #5b2410 100%)",
    },
  },
  "bpo-career-survival-guide-2026": {
    productName: "BPO & Customer Support Career Survival Guide 2026",
    title: "BPO & Customer Support",
    accentTitle: "Career Survival Guide 2026",
    score: "9.2 / 10",
    riskLabel: "High Exposure",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand where support work is being compressed fastest, what human-value work still matters, and how to reposition before AI-enabled service workflows reset the floor beneath you.",
    heroNote:
      "The goal is not panic. The goal is better positioning.",
    outcomeBullets: [
      "A 30-day repositioning direction for support professionals",
      "Clearer movement toward stronger exception-handling and oversight roles",
      "India-first guidance for one of the most disrupted large workforces",
    ],
    promiseBullets: [
      "Decode where AI is shrinking routine support work fastest",
      "See the higher-value support roles that open up as workflows change",
      "Turn existing support experience into stronger market relevance",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for BPO and support work",
        desc: "A plain-English explanation of where AI is applying the most pressure and what still needs human judgment.",
      },
      {
        title: "30-day repositioning path",
        desc: "A focused next-step direction for working professionals who need clarity, not panic.",
      },
      {
        title: "Five new future-of-work role directions",
        desc: "A practical view of where support experience can evolve as AI handles more tier-1 and tier-2 work.",
      },
      {
        title: "Profile and messaging support",
        desc: "Guidance to help your experience signal judgment, escalation value, and adaptability.",
      },
      {
        title: "Transition thinking",
        desc: "How to reframe support experience so it feels relevant in an AI-shaped service market.",
      },
      {
        title: "India-first market context",
        desc: "A grounded view of what this shift means for one of India largest employment categories.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which support work AI absorbs first",
          "Where the human moat begins",
          "How service workflows are changing in India",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 30-day repositioning direction",
          "A clearer sense of which roles to target",
          "A stronger way to present your support experience",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A coding or ML curriculum",
          "A generic 'learn AI' pep talk",
          "A global BPO overview detached from India realities",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Scripted Task Dependence",
        desc: "Your value is tied too closely to routine support execution that AI can increasingly absorb.",
        color: "#78716c",
      },
      {
        stage: "Stage 2",
        title: "Human Judgment and Escalation",
        desc: "You begin to signal exception handling, quality judgment, and stronger operational awareness.",
        color: "#d97706",
      },
      {
        stage: "Stage 3",
        title: "Higher-Leverage Support Positioning",
        desc: "You are presented as someone who improves the system, not just someone who works inside it.",
        color: "#b45309",
      },
    ],
    forYou: [
      "You work in a BPO, call centre, or customer support role in India.",
      "Your floor has started using AI tools and you feel your role shrinking.",
      "You want a concrete repositioning plan, not generic advice to just learn AI.",
      "You have support experience and want to leverage it rather than discard it.",
      "You want to understand how to stay relevant as service workflows change.",
    ],
    notForYou: [
      "You already work in an advanced AI operations or bot quality role.",
      "You want a technical AI engineering path involving coding or ML.",
      "You want a global BPO market analysis instead of India-first guidance.",
    ],
    ctaTitle: "Reposition before the market settles without you.",
    ctaBody:
      "Use this guide to replace fear with a clearer strategy, stronger signal, and a more durable version of your support experience.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#d97706",
      accentSoft: "#fcd34d",
      accentStrong: "#78350f",
      heroGradient: "linear-gradient(135deg, #1c0a00 0%, #3b1a00 50%, #78350f 100%)",
      heroText: "rgba(255,220,150,0.85)",
      sectionTint: "#fffbeb",
      sectionBorder: "#fde68a",
      panelTint: "#fffaf5",
      finalGradient: "linear-gradient(160deg, #1c0a00 0%, #3b1a00 60%, #78350f 100%)",
    },
  },
  "hr-recruiter-survival-guide-2026": {
    productName: "HR Recruiter Survival Guide 2026",
    title: "HR Recruiter",
    accentTitle: "Survival Guide 2026",
    score: "8.6 / 10",
    riskLabel: "High Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand which recruiting tasks AI is already automating, why the real danger is role narrowing rather than total elimination, and how to reposition toward judgment-heavy recruiting work that remains difficult to replace.",
    heroNote:
      "The defensible future in recruiting moves away from throughput and toward judgment, calibration, influence, and strategic partnership.",
    outcomeBullets: [
      "An 18-month repositioning path for HR Recruiters",
      "Clearer movement beyond transactional recruiting work",
      "India-first guidance for AI-shaped IT recruiting environments",
    ],
    promiseBullets: [
      "Decode what AI is already automating across screening, scheduling, matching, and offer workflows",
      "Reframe your value around stakeholder management, recruiter judgment, and recruiting-system calibration",
      "Build a stronger market story for higher-leverage HR and talent roles",
    ],
    whatYouGet: [
      {
        title: "SA-AIRS risk clarity for HR Recruiters",
        desc: "A direct explanation of why the HR Recruiter role scores 8.6/10 on the SA-AIRS framework and which parts of the work are under the most pressure.",
      },
      {
        title: "18-month repositioning playbook",
        desc: "A structured path to move from transactional recruiter identity toward more strategic, defensible recruiting work.",
      },
      {
        title: "AI recruiting workflow lens",
        desc: "A practical view of where resume screening, JD writing, candidate matching, scheduling, and offer processing are already being automated.",
      },
      {
        title: "Human judgment moat",
        desc: "Guidance on how to strengthen your signal around stakeholder negotiation, candidate quality judgment, hiring-manager advisory work, and exception handling.",
      },
      {
        title: "HR tech ecosystem orientation",
        desc: "A clearer picture of the vendor and workflow layer that modern recruiters must understand well enough to audit, calibrate, and use strategically.",
      },
      {
        title: "Career and salary positioning",
        desc: "India-first framing for how recruiter career ceilings change when you move from volume execution into higher-leverage talent intelligence and advisory work.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Which recruiter tasks are already widely automated and which still require human judgment",
          "Why the bigger risk is getting stuck in a lower-leverage version of the same role",
          "How AI changes recruiter value inside Indian IT hiring environments",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "An 18-month repositioning direction",
          "A sharper recruiting story for interviews and internal movement",
          "A clearer view of what proof, tools, and judgment signals to build next",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A generic HR certification substitute",
          "A hype-heavy claim that all recruiting disappears overnight",
          "Global HR advice copied into India without context",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Transactional Recruiter",
        desc: "Your profile is dominated by high-volume coordination, screening, follow-ups, and throughput work that AI systems increasingly compress.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Judgment-Led Recruiter",
        desc: "You begin to signal better evaluation judgment, stronger stakeholder handling, and more visible ownership over edge cases AI struggles with.",
        color: "#be185d",
      },
      {
        stage: "Stage 3",
        title: "Strategic Recruiting Advisor",
        desc: "You are positioned around advisory judgment, workflow calibration, influence, and business-aware talent decision support rather than pure process throughput.",
        color: "#831843",
      },
    ],
    forYou: [
      "You are an HR Recruiter in an Indian IT company and can already see AI changing sourcing, screening, shortlisting, scheduling, or offer workflows.",
      "You want to understand how to move up the value chain instead of being trapped in a narrowed version of the same role.",
      "You need a practical repositioning path toward stronger judgment, stakeholder management, and strategic recruiting signal.",
      "You want a sharper market read for the HR tech and talent acquisition layer rather than generic advice to just learn AI.",
      "You want better internal-growth and external-market positioning without pretending to be more technical than you are.",
    ],
    notForYou: [
      "You want a beginner HR operations course or ATS tool tutorial.",
      "You already operate at a senior talent advisory, people analytics, or HR transformation level and mainly need specialized execution help.",
      "You want a global HR market overview instead of India-first recruiting guidance.",
    ],
    ctaTitle: "Move beyond throughput before the role narrows around you.",
    ctaBody:
      "Use this guide to replace vague anxiety with a clearer recruiting strategy, stronger judgment signal, and a more defensible career path in an AI-shaped HR market.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#be185d",
      accentSoft: "#f9a8d4",
      accentStrong: "#831843",
      heroGradient: "linear-gradient(135deg, #260918 0%, #5e1132 55%, #be185d 100%)",
      heroText: "rgba(255,228,238,0.86)",
      sectionTint: "#fff1f7",
      sectionBorder: "#f9a8d4",
      panelTint: "#fff8fb",
      finalGradient: "linear-gradient(160deg, #260918 0%, #5e1132 60%, #831843 100%)",
    },
  },
  "fresher-ai-survival-guide": {
    productName: "Fresher AI Survival Guide",
    title: "Fresher",
    accentTitle: "AI Survival Guide",
    score: "Entry-Level",
    riskLabel: "High Competition, High Repositioning Upside",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand how AI is changing entry-level hiring, why generic fresher positioning is becoming weaker, and how to build a sharper first-job story around skills, proof, tools, projects, and business awareness.",
    heroNote:
      "The goal is not to compete as one more fresher with a copied resume. The goal is to look like someone already learning how modern work gets done.",
    outcomeBullets: [
      "A 90-day direction for first-job readiness",
      "Clearer positioning beyond generic fresher claims",
      "India-first guidance for future-of-work entry-level hiring",
    ],
    promiseBullets: [
      "Decode what AI changes in fresher hiring, screening, and expectations",
      "Build stronger proof through projects, tools, communication, and role clarity",
      "Create a sharper resume, LinkedIn, and interview story for early opportunities",
    ],
    whatYouGet: [
      {
        title: "future-of-work fresher hiring clarity",
        desc: "A direct explanation of why entry-level roles are becoming more selective and what employers now expect from freshers who want to stand out.",
      },
      {
        title: "90-day readiness direction",
        desc: "A practical path for building visible proof, role understanding, and market signal without getting lost in endless courses.",
      },
      {
        title: "First-job positioning guidance",
        desc: "Help turning projects, internships, academic work, certifications, and self-learning into a clearer career story.",
      },
      {
        title: "AI tool-use advantage",
        desc: "Guidance on using AI tools responsibly for learning, research, documentation, coding support, job search preparation, and better communication.",
      },
      {
        title: "Resume and LinkedIn signal",
        desc: "A practical view of what makes an early-career profile look sharper than a generic template-based fresher profile.",
      },
      {
        title: "Interview and role-readiness lens",
        desc: "How to talk about what you know, what you built, how you learn, and where you can contribute without overclaiming.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "Why entry-level hiring is getting tougher in the future-of-work shift",
          "What makes a fresher profile look generic or credible",
          "How to use AI as a learning and execution advantage without sounding fake",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 90-day first-job readiness direction",
          "A clearer resume and LinkedIn positioning lens",
          "A stronger way to explain projects, internships, and self-learning",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A guaranteed job promise",
          "A technical course or certification substitute",
          "Generic motivation that ignores the Indian fresher market",
        ],
      },
    ],
    stages: [
      {
        stage: "Stage 1",
        title: "Generic Fresher",
        desc: "Your profile depends on degree, keywords, copied projects, and broad claims that many other candidates also use.",
        color: "#64748b",
      },
      {
        stage: "Stage 2",
        title: "Proof-Building Candidate",
        desc: "You begin to show projects, tool fluency, communication, role understanding, and clearer evidence of learning speed.",
        color: "#0f4c81",
      },
      {
        stage: "Stage 3",
        title: "AI-Ready Early Professional",
        desc: "You are positioned as someone who can learn faster, use modern tools well, and contribute with better clarity from day one.",
        color: "#1a4fd6",
      },
    ],
    forYou: [
      "You are a fresher, final-year student, recent graduate, or early-career professional in India.",
      "You are worried that AI is reducing entry-level openings or making basic skills less valuable.",
      "You want a practical direction for building proof instead of collecting random courses.",
      "You need a stronger resume, LinkedIn, project, and interview story for your first serious opportunity.",
      "You want to understand how to use AI tools without becoming dependent on shortcuts.",
    ],
    notForYou: [
      "You want a guaranteed placement promise or job referral service.",
      "You want a full technical training program in coding, data, testing, cloud, or AI engineering.",
      "You already have a strong specialized portfolio and only need advanced senior-level career strategy.",
    ],
    ctaTitle: "Stop looking like every other fresher.",
    ctaBody:
      "Use this guide to build a clearer first-job story, stronger proof, and a practical future-of-work direction for entering the market.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#0f4c81",
      accentSoft: "#93c5fd",
      accentStrong: "#1a4fd6",
      heroGradient: "linear-gradient(135deg, #06111f 0%, #0f2f4d 55%, #0f4c81 100%)",
      heroText: "rgba(220,238,255,0.86)",
      sectionTint: "#eff6ff",
      sectionBorder: "#93c5fd",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #06111f 0%, #0f2f4d 60%, #1a4fd6 100%)",
    },
  },
  "devops-survival-guide-2026": {
    productName: "DevOps Survival Guide 2026",
    title: "DevOps",
    accentTitle: "Survival Guide 2026",
    score: "6.8 / 10",
    riskLabel: "Active Risk",
    editionLabel: "India 2026 Edition",
    heroSummary:
      "Understand which parts of DevOps work are getting cheaper, what production judgment still compounds, and how to move toward platform, reliability, and AI infrastructure relevance.",
    heroNote:
      "The moat is no longer writing more YAML. It is better production judgment.",
    outcomeBullets: [
      "A 60-day direction toward platform and reliability leverage",
      "Clearer movement beyond pipeline-heavy execution",
      "India-first context for GCC and product-side DevOps upside",
    ],
    promiseBullets: [
      "Decode what active risk means for DevOps engineers",
      "Reposition beyond repetitive delivery mechanics",
      "Turn production scar tissue into stronger market signal",
    ],
    whatYouGet: [
      {
        title: "Role-risk clarity for DevOps work",
        desc: "A sharper explanation of what AI accelerates in DevOps and what it does not replace.",
      },
      {
        title: "60-day upgrade direction",
        desc: "A practical roadmap to build visible proof around stronger production judgment and platform thinking.",
      },
      {
        title: "Reliability and platform lens",
        desc: "A better way to frame your experience around systems trade-offs, ownership, and production outcomes.",
      },
      {
        title: "AI infrastructure relevance",
        desc: "Guidance on where DevOps experience still compounds in an AI-shaped engineering market.",
      },
      {
        title: "Portfolio and interview signal",
        desc: "How to present your production work so stronger teams see platform thinking instead of only maintenance work.",
      },
      {
        title: "India-first salary context",
        desc: "A grounded view of why stronger platform-oriented roles command better upside.",
      },
    ],
    preview: [
      {
        title: "You will get clarity on",
        bullets: [
          "What AI makes cheaper in DevOps",
          "Why pipeline-only identity is weakening",
          "Where platform and reliability work still compounds",
        ],
      },
      {
        title: "You will leave with",
        bullets: [
          "A 60-day repositioning direction",
          "A stronger production story for the market",
          "A clearer route toward higher-leverage platform work",
        ],
      },
      {
        title: "You will not get",
        bullets: [
          "A tool-specific certification course",
          "A hype-heavy claim that DevOps disappears",
          "Generic advice to collect more tools",
        ],
      },
    ],
    stages: [
      {
        stage: "Before",
        title: "Execution-Heavy DevOps",
        desc: "Your market story is dominated by setup, maintenance, and repetitive delivery mechanics.",
        color: "#64748b",
      },
      {
        stage: "After",
        title: "Higher-Leverage Platform Signal",
        desc: "You are seen as someone who can think about reliability, systems trade-offs, and stronger production outcomes.",
        color: "#1d4ed8",
      },
    ],
    forYou: [
      "You are a DevOps, SRE, or platform-leaning engineer in India and more of your work is becoming boilerplate.",
      "You are strong in CI/CD, Terraform, Docker, or Kubernetes, but want a better path than competing on YAML speed.",
      "You want to reposition toward GCC or product roles with stronger reliability, platform, or AI infrastructure ownership.",
      "You need a practical 60-day direction, not another vague prompt to learn AI.",
      "You have real production experience and want to turn that scar tissue into a market advantage.",
    ],
    notForYou: [
      "You want a deep technical certification course on one DevOps tool rather than a career guide.",
      "You already operate as a staff-level platform architect with strong SLO, FinOps, and AI infrastructure ownership.",
      "You want a broad global market analysis instead of India-first positioning guidance.",
    ],
    ctaTitle: "Move beyond pipeline maintenance.",
    ctaBody:
      "Use this guide to turn DevOps experience into a stronger platform story, a clearer transition plan, and a more defensible role.",
    faqDelivery: DELIVERY_NOTE,
    theme: {
      accent: "#1d4ed8",
      accentSoft: "#bfdbfe",
      accentStrong: "#1d4ed8",
      heroGradient: "linear-gradient(135deg, #07111d 0%, #0d1b2a 50%, #1d4ed8 100%)",
      heroText: "rgba(210,225,255,0.86)",
      sectionTint: "#eff6ff",
      sectionBorder: "#bfdbfe",
      panelTint: "#f8fbff",
      finalGradient: "linear-gradient(160deg, #07111d 0%, #0d1b2a 60%, #1d4ed8 100%)",
    },
  },
};

export const SHARED_FAQ = [
  {
    question: "What exactly is this?",
    answer: SHARED_FAQ_SCOPE,
  },
  {
    question: "Why pay for this instead of reading free AI career content?",
    answer: SHARED_FAQ_TRUST,
  },
  {
    question: "Do I get future updates?",
    answer: LIFETIME_UPDATES_BODY,
  },
  {
    question: "When do I receive the guide?",
    answer: DELIVERY_NOTE,
  },
];
