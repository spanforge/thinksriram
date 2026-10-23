export type BundleBadge = "Most Popular" | "Best Value";

export type BundleItem = {
  name: string;
  price: string;
};

export type BundleRole =
  | "QA"
  | "Data"
  | "Java"
  | "BA"
  | "Platform"
  | "HR"
  | "BPO"
  | "FDE"
  | "All Roles";

export type BundleCard = {
  slug: string;
  role: BundleRole;
  name: string;
  price: number;
  priceLabel: string;
  savingsLabel: string;
  description: string;
  outcome: string;
  items: BundleItem[];
  note?: string;
  badge?: BundleBadge;
};

export type BundleSection = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  accentColor: string;
  tint: string;
  borderColor: string;
  bundles: BundleCard[];
};

export const BUNDLE_DELIVERY_NOTE =
  "All bundle contents delivered to your email within 30 minutes of payment.";

export const BUNDLE_PAGE_SUBTITLE =
  "Complete intelligence stacks for professionals who want more than one angle on their career decision.";

export const BUNDLE_ROLE_JUMPS: Array<{ role: BundleRole; slug: string; label: string }> = [
  { role: "QA", slug: "qa-modernization", label: "QA" },
  { role: "Data", slug: "data-career", label: "Data" },
  { role: "Java", slug: "java-modernization", label: "Java" },
  { role: "BA", slug: "analyst-to-product", label: "Business Analyst" },
  { role: "Platform", slug: "platform-engineering", label: "Platform / Cloud" },
  { role: "HR", slug: "hr-transition", label: "HR" },
  { role: "BPO", slug: "bpo-transition", label: "BPO / Support" },
  { role: "FDE", slug: "fde-intelligence", label: "FDE" },
  { role: "All Roles", slug: "full-sa-library", label: "All Roles" },
];

export const BUNDLE_SECTIONS: BundleSection[] = [
  {
    id: "tier-1",
    eyebrow: "Role Bundles",
    title: "Start with your role",
    tagline: "Two assets. One clearer next move.",
    accentColor: "#1a4fd6",
    tint: "linear-gradient(135deg, #f2fbf8 0%, #dcfce7 100%)",
    borderColor: "#bbf7d0",
    bundles: [
      {
        slug: "qa-modernization",
        role: "QA",
        name: "The Quality Modernization Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description: "Move from manual execution pressure to stronger automation and future-of-work quality positioning.",
        outcome: "See where QA work is shifting and what to strengthen next.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "Selenium Engineer Upgrade Guide 2026", price: "Rs 499" },
        ],
        badge: "Most Popular",
      },
      {
        slug: "data-career",
        role: "Data",
        name: "The Data Career Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description: "Get a cleaner view of analyst risk and the data engineering direction that matters now.",
        outcome: "Know which data path fits your next move before you waste effort.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "Data Engineer AI Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "java-modernization",
        role: "Java",
        name: "The Java Modernization Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description: "Bridge core Java experience into platform, DevOps, and higher-leverage future-of-work work.",
        outcome: "Turn Java experience into a stronger modernization story.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "analyst-to-product",
        role: "BA",
        name: "The Analyst to Product Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description: "Understand your BA risk now and the practical path toward AI product ownership.",
        outcome: "Know your risk and your transition path in one purchase.",
        items: [
          { name: "Business Analyst Survival Guide 2026", price: "Rs 499" },
          { name: "BA to AI PM Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "platform-engineering",
        role: "Platform",
        name: "The Platform Engineering Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 199",
        description: "Connect cloud infrastructure experience to the platform work AI teams increasingly need.",
        outcome: "See how to reposition from infra support into platform leverage.",
        items: [
          { name: "Cloud Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "hr-transition",
        role: "HR",
        name: "The HR Transition Bundle",
        price: 799,
        priceLabel: "Rs 799",
        savingsLabel: "You save Rs 699",
        description: "Pair HR market context with direct positioning guidance before your role gets squeezed.",
        outcome: "Get clarity on both role risk and how you present yourself next.",
        items: [
          { name: "HR Recruiter Survival Guide 2026", price: "Rs 499" },
          { name: "Career Positioning Audit", price: "Rs 999" },
        ],
        note: "Career Positioning Audit delivery is 48 to 72 hours as per standard service terms.",
      },
    ],
  },
  {
    id: "tier-2",
    eyebrow: "Role + Report Bundles",
    title: "Add market context",
    tagline: "Role direction plus the wider signal around your market.",
    accentColor: "#1a4fd6",
    tint: "linear-gradient(135deg, #f0f5ff 0%, #dbeafe 100%)",
    borderColor: "#bfdbfe",
    bundles: [
      {
        slug: "qa-intelligence",
        role: "QA",
        name: "The QA Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description: "Pair role-specific QA guidance with the market data behind the pressure you're feeling.",
        outcome: "Know what is changing in QA and what to do about it.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "State of QA Careers India 2026", price: "Rs 799" },
        ],
        badge: "Most Popular",
      },
      {
        slug: "java-intelligence",
        role: "Java",
        name: "The Java Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 499",
        description: "Combine Java-specific repositioning guidance with a broader read on India IT risk.",
        outcome: "Understand your role risk and the leverage points worth building.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
        ],
      },
      {
        slug: "data-intelligence",
        role: "Data",
        name: "The Data Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 499",
        description: "See both your career path and where data roles sit in the broader AI risk landscape.",
        outcome: "Get direction for your next move with market context behind it.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
        ],
      },
      {
        slug: "ba-strategy",
        role: "BA",
        name: "The BA Strategy Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description: "Go beyond current BA execution and understand where AI is moving enterprise decision work.",
        outcome: "Get a sharper view of both present risk and future direction.",
        items: [
          { name: "Business Analyst Survival Guide 2026", price: "Rs 499" },
          { name: "AI Futures 2026", price: "Rs 799" },
        ],
      },
      {
        slug: "bpo-transition",
        role: "BPO",
        name: "The BPO Transition Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 499",
        description: "Use urgent risk clarity to make a practical next-step decision instead of staying stuck.",
        outcome: "See the pressure clearly and choose your next move faster.",
        items: [
          { name: "BPO & Customer Support Career Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
        ],
      },
      {
        slug: "fde-intelligence",
        role: "FDE",
        name: "The FDE Intelligence Bundle",
        price: 999,
        priceLabel: "Rs 999",
        savingsLabel: "You save Rs 299",
        description: "Understand your transition path as client-facing engineering roles change under AI pressure.",
        outcome: "Know your risk. Know your next move. In one purchase.",
        items: [
          { name: "FDE Career Transition Guide 2026", price: "Rs 499" },
          { name: "AI Futures 2026", price: "Rs 799" },
        ],
      },
    ],
  },
  {
    id: "tier-3",
    eyebrow: "Deep Dive Bundles",
    title: "Go deeper on one role",
    tagline: "Everything you need on one role, without buying piece by piece.",
    accentColor: "#7c3aed",
    tint: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
    borderColor: "#d8b4fe",
    bundles: [
      {
        slug: "qa-deep-dive",
        role: "QA",
        name: "The QA Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 498",
        description: "Get role risk, transition direction, automation modernization, and market context in one QA stack.",
        outcome: "Stop piecing QA answers together and get the full picture at once.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "Selenium Engineer Upgrade Guide 2026", price: "Rs 499" },
          { name: "State of QA Careers India 2026", price: "Rs 799" },
        ],
        badge: "Most Popular",
      },
      {
        slug: "data-deep-dive",
        role: "Data",
        name: "The Data Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 698",
        description: "Bring analyst positioning, engineering transition, and India market risk into one data view.",
        outcome: "Get a more complete data-career decision before you commit time elsewhere.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "Data Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
        ],
      },
      {
        slug: "java-deep-dive",
        role: "Java",
        name: "The Java Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 698",
        description: "Pull together role leverage, platform direction, and market risk so your Java next step is clearer.",
        outcome: "See the bigger Java transition picture before you make the wrong upgrade bet.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
        ],
      },
      {
        slug: "ba-deep-dive",
        role: "BA",
        name: "The BA Deep Dive",
        price: 1299,
        priceLabel: "Rs 1,299",
        savingsLabel: "You save Rs 498",
        description: "Combine current-role risk, transition planning, and future AI product context in one BA stack.",
        outcome: "Get a sharper BA-to-product decision without buying three times.",
        items: [
          { name: "Business Analyst Survival Guide 2026", price: "Rs 499" },
          { name: "BA to AI PM Guide 2026", price: "Rs 499" },
          { name: "AI Futures 2026", price: "Rs 799" },
        ],
      },
    ],
  },
  {
    id: "tier-4",
    eyebrow: "Flagship Bundles",
    title: "Get the full stack",
    tagline: "The highest-context path for buyers who want the whole picture.",
    accentColor: "#b45309",
    tint: "linear-gradient(135deg, #fff8f0 0%, #ffedd5 100%)",
    borderColor: "#fdba74",
    bundles: [
      {
        slug: "complete-qa-stack",
        role: "QA",
        name: "The Complete QA Stack",
        price: 1999,
        priceLabel: "Rs 1,999",
        savingsLabel: "You save Rs 1,296",
        description: "Bring together role guidance, market intelligence, rankings, and platform-adjacent modernization for QA.",
        outcome: "Get the complete QA guide-and-report stack in one decision.",
        items: [
          { name: "QA Engineer Survival Guide 2026", price: "Rs 499" },
          { name: "Selenium Engineer Upgrade Guide 2026", price: "Rs 499" },
          { name: "State of QA Careers India 2026", price: "Rs 799" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "complete-data-stack",
        role: "Data",
        name: "The Complete Data Stack",
        price: 1999,
        priceLabel: "Rs 1,999",
        savingsLabel: "You save Rs 1,296",
        description: "Combine role guidance, market context, future scenarios, and adjacent Python leverage in one data stack.",
        outcome: "Get the full data-career picture before your next commitment.",
        items: [
          { name: "Data Analyst Career Guide 2026", price: "Rs 499" },
          { name: "Data Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
          { name: "AI Futures 2026", price: "Rs 799" },
          { name: "Python Developer AI Leverage Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "complete-java-stack",
        role: "Java",
        name: "The Complete Java Stack",
        price: 1999,
        priceLabel: "Rs 1,999",
        savingsLabel: "You save Rs 996",
        description: "Bring leverage, platform direction, cloud context, market risk data, and adjacent Python automation into one stack.",
        outcome: "Get a full Java modernization view without mixing in custom assessment work.",
        items: [
          { name: "Java Developer AI Leverage Guide 2026", price: "Rs 499" },
          { name: "DevOps Survival Guide 2026", price: "Rs 499" },
          { name: "Cloud Engineer AI Survival Guide 2026", price: "Rs 499" },
          { name: "AI Risk Rankings India 2026", price: "Rs 999" },
          { name: "Python Developer AI Leverage Guide 2026", price: "Rs 499" },
        ],
      },
      {
        slug: "full-sa-library",
        role: "All Roles",
        name: "The Full SA Library",
        price: 3999,
        priceLabel: "Rs 3,999",
        savingsLabel: "You save Rs 6,582",
        description: "Get every currently published SA guide and report in one purchase for the widest possible view.",
        outcome: "Buy once and access the complete published SA intelligence library.",
        items: [
          { name: "All 15 guides", price: "Rs 7,485 total" },
          { name: "All 4 reports", price: "Rs 3,096 total" },
          { name: "Total individual value", price: "Rs 10,581" },
        ],
        note: "New guides and reports added after purchase are not included automatically. Buyers receive what is published at time of purchase.",
        badge: "Best Value",
      },
    ],
  },
];
