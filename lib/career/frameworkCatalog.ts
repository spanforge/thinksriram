export type FrameworkItem = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  problem: string;
  concept: string;
  whatItExplains: string[];
  applications: string[];
  caseStudy: string;
  limitations: string[];
  downloadTitle: string;
  exampleUse: string;
  evolution: string;
  faq: { question: string; answer: string }[];
  relatedHref: string;
  relatedLabel: string;
};

export const FRAMEWORK_ITEMS: FrameworkItem[] = [
  {
    slug: "sa-airs",
    title: "SA-AIRS(TM)",
    shortTitle: "SA-AIRS",
    eyebrow: "Role Exposure Framework",
    summary:
      "SA-AIRS is Sriram Advisory's structured lens for interpreting role exposure, career durability, and the pressure a profession may face as AI and automation reshape work.",
    problem:
      "Most AI-risk commentary treats a job title as if it has one clear future. In reality, risk sits inside tasks, markets, team structures, hiring filters, and the visible proof a professional can show.",
    concept:
      "SA-AIRS organizes these signals into a role-exposure view. It asks where work is repeatable, where human judgment still matters, and where a professional needs stronger repositioning.",
    whatItExplains: [
      "Which parts of a role are more exposed to automation or compression",
      "Why two similar job titles can carry different levels of career risk",
      "How market pressure, skill signal, and human judgment interact",
      "Where a professional may need stronger proof of value",
    ],
    applications: [
      "Role-risk reports",
      "Career intelligence assessments",
      "Workforce exposure mapping",
      "Manager and team capability conversations",
    ],
    caseStudy:
      "In a QA career analysis, SA-AIRS separates script execution, defect judgment, quality ownership, product context, and business accountability instead of treating QA as one uniform role.",
    limitations: [
      "It does not predict whether a specific person will lose a specific job.",
      "It should be read as an exposure and repositioning lens, not a deterministic score.",
      "It depends on current market signals and must be updated as roles change.",
    ],
    downloadTitle: "SA-AIRS public framework note",
    exampleUse:
      "A QA engineer, business analyst, recruiter, and data analyst may all face AI pressure, but the source of exposure is different. SA-AIRS helps separate repeatable task risk from market positioning risk and judgment value.",
    evolution:
      "The framework began as a role-risk lens for AI-era career reports and now supports broader workforce exposure analysis across Indian IT, GCCs, and business functions.",
    faq: [
      {
        question: "Is SA-AIRS a public scoring template?",
        answer:
          "No. The public site explains the purpose and interpretation lens. Detailed scoring rubrics are used inside reports, assessments, and advisory work.",
      },
      {
        question: "Does the framework predict job loss?",
        answer:
          "No. It helps interpret pressure, exposure, and repositioning options. It is not a guarantee about any individual job or employer.",
      },
    ],
    relatedHref: "/products/ai-risk-rankings-india-2026",
    relatedLabel: "See AI Risk Rankings India 2026",
  },
  {
    slug: "replaceability-curve",
    title: "Replaceability Curve(TM)",
    shortTitle: "Replaceability Curve",
    eyebrow: "Work Value Framework",
    summary:
      "The Replaceability Curve explains how professional value can erode gradually when parts of work become easier, cheaper, faster, or less dependent on human ownership.",
    problem:
      "Professionals often look for sudden disruption. The more common pattern is quieter: the role remains visible, but the market gradually values older work patterns less.",
    concept:
      "The Replaceability Curve maps value erosion as work moves from scarce human expertise toward cheaper execution, reusable systems, automation, or lower-trust oversight.",
    whatItExplains: [
      "Why careers rarely become obsolete in a single moment",
      "How value shifts from execution to judgment, context, and accountability",
      "Where work is being compressed before job titles visibly change",
      "Why senior professionals can become vulnerable when their value signal is unclear",
    ],
    applications: [
      "Mid-career risk analysis",
      "Expertise-trap research",
      "Role repositioning decisions",
      "Leadership conversations about capability renewal",
    ],
    caseStudy:
      "A senior professional may still be busy, but if the work is mostly coordination, templated judgment, or legacy execution, the market may begin discounting that experience before the person notices.",
    limitations: [
      "It does not claim all older skills lose value.",
      "It cannot replace role-specific research or market context.",
      "It is strongest when combined with evidence from hiring, tools, and organization behavior.",
    ],
    downloadTitle: "Replaceability Curve public framework note",
    exampleUse:
      "A role may remain in demand while the market pays less for its older execution pattern. The curve helps explain that quiet erosion before it appears as a dramatic career event.",
    evolution:
      "The framework developed from research on expertise traps, mid-career vulnerability, and the gap between experience held and value recognized by the market.",
    faq: [
      {
        question: "Is this only about AI?",
        answer:
          "No. AI is one accelerator. The curve also considers cost pressure, delivery models, organizational design, hiring filters, and changing expectations.",
      },
      {
        question: "What is the practical use?",
        answer:
          "It helps professionals ask where their current work is being commoditized and where higher-value positioning may be needed.",
      },
    ],
    relatedHref: "/products/why-expertise-becomes-a-trap",
    relatedLabel: "Read Why Expertise Becomes a Trap",
  },
  {
    slug: "ai-leverage-ladder",
    title: "AI Leverage Ladder(TM)",
    shortTitle: "AI Leverage Ladder",
    eyebrow: "Human Leverage Framework",
    summary:
      "The AI Leverage Ladder describes the progression from basic tool usage to stronger professional leverage through judgment, workflow ownership, and decision influence.",
    problem:
      "Many professionals mistake tool adoption for future readiness. But using AI to move faster at the same old work does not always improve career durability.",
    concept:
      "The ladder shows how professionals can move from basic AI usage toward higher leverage: workflow redesign, better decisions, stronger ownership, and broader business impact.",
    whatItExplains: [
      "Why prompt usage alone is not a durable career advantage",
      "How professionals move from using tools to redesigning workflows",
      "Where human judgment and accountability become more valuable",
      "How AI literacy can become career leverage instead of tool familiarity",
    ],
    applications: [
      "AI literacy programs",
      "Career guide design",
      "Manager capability planning",
      "Professional development roadmaps",
    ],
    caseStudy:
      "A business analyst who uses AI only to draft documents gains speed. A business analyst who uses AI to improve problem framing, decision options, and stakeholder clarity gains leverage.",
    limitations: [
      "It is not a technical syllabus.",
      "Different roles climb the ladder in different ways.",
      "Tool familiarity must be connected to role ownership and judgment to create durable value.",
    ],
    downloadTitle: "AI Leverage Ladder public framework note",
    exampleUse:
      "A developer, analyst, manager, or recruiter can all use AI tools. The difference is whether they use AI only to finish tasks faster or to own higher-value decisions and systems.",
    evolution:
      "The ladder evolved from career-guide research showing that the strongest professionals do not merely adopt tools; they use tools to raise the level of work they can own.",
    faq: [
      {
        question: "Is this a learning path?",
        answer:
          "It can inform a learning path, but it is primarily a career leverage model. It focuses on what the professional can own after AI enters the workflow.",
      },
      {
        question: "Does everyone need to become technical?",
        answer:
          "No. The point is to build appropriate leverage for the role: better judgment, workflow fluency, and stronger decision contribution.",
      },
    ],
    relatedHref: "/ai-literacy/absolute-beginners",
    relatedLabel: "Explore AI Literacy",
  },
  {
    slug: "career-positioning-audit",
    title: "Career Positioning Audit",
    shortTitle: "Career Positioning Audit",
    eyebrow: "Professional Signal Framework",
    summary:
      "The Career Positioning Audit is a structured way to evaluate how clearly a professional profile communicates value, depth, direction, and market relevance.",
    problem:
      "Strong professionals often look weaker than they are because their resume and LinkedIn profile describe tasks instead of value, judgment, ownership, and direction.",
    concept:
      "The audit reads a professional profile as a market signal. It looks for clarity gaps, weak positioning, missing proof, and places where experience needs sharper framing.",
    whatItExplains: [
      "Why strong professionals can still look generic in the market",
      "Where a resume or LinkedIn profile undersells experience",
      "How weak positioning can hide judgment, ownership, and specialization",
      "Which improvements can make professional signal clearer",
    ],
    applications: [
      "Resume and LinkedIn audits",
      "Career transition planning",
      "Mid-career repositioning",
      "Professional narrative repair",
    ],
    caseStudy:
      "A delivery manager may have led complex work, but if the profile reads like status tracking and coordination, the market may miss the deeper judgment and business ownership.",
    limitations: [
      "It is not a guarantee of interviews or job outcomes.",
      "It diagnoses signal and positioning, not every skill gap.",
      "Its usefulness depends on the accuracy of the profile and supporting career evidence.",
    ],
    downloadTitle: "Career Positioning Audit public framework note",
    exampleUse:
      "A mid-career professional may have meaningful experience but a profile that reads like task history. The audit identifies where the market signal needs sharper framing.",
    evolution:
      "The audit grew from repeated career research patterns: many professionals were not only facing skill gaps, but also signal gaps in how their work was presented.",
    faq: [
      {
        question: "Is this resume writing?",
        answer:
          "No. It is a positioning diagnosis. It identifies clarity gaps and suggests stronger framing, but it is not a full resume-writing service.",
      },
      {
        question: "Who is it for?",
        answer:
          "It is most useful for professionals whose experience is real but not being recognized clearly by recruiters, managers, or hiring systems.",
      },
    ],
    relatedHref: "/services/career-positioning-audit",
    relatedLabel: "Book the Career Positioning Audit",
  },
];

export function getFrameworkBySlug(slug: string) {
  return FRAMEWORK_ITEMS.find((item) => item.slug === slug);
}
