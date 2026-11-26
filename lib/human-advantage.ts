export const humanAdvantagePath = '/human-advantage';
export const humanAdvantageTitle = 'The Human Advantage Project';
export const humanAdvantageDescription = 'Develop independent thinking, sound judgment and better decision-making through free reading and practical learning from Think Sriram.';

export type BookReference = { bookSlug: string; sectionSlug: string };

export const capabilities = [
  { slug: 'independent-thinking', title: 'Independent thinking', summary: 'Form a view you can explain and revise.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-3' } },
  { slug: 'evidence-evaluation', title: 'Evidence evaluation', summary: 'Check what supports a claim and what would change your mind.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-1' } },
  { slug: 'judgment', title: 'Judgment', summary: 'Weigh trade-offs and take responsibility for your conclusions.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-8' } },
  { slug: 'decision-making', title: 'Decision-making', summary: 'Make considered choices when information is incomplete.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-7' } },
  { slug: 'better-questions', title: 'Better questions', summary: 'Frame the problem before looking for an answer.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-4' } },
  { slug: 'learning-and-understanding', title: 'Learning and understanding', summary: 'Build knowledge you can apply in unfamiliar situations.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-10' } },
  { slug: 'systems-thinking', title: 'Systems thinking', summary: 'Look at relationships, feedback and delays that shape an outcome.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-6' } },
  { slug: 'responsible-ai-use', title: 'Responsible AI use', summary: 'Use AI assistance while keeping your own reasoning in view.', reference: { bookSlug: 'think-beyond-ai', sectionSlug: 'chapter-9' } },
] as const;

type Capability = typeof capabilities[number]['slug'];
type Entry = [string, string, string, Capability[], string];
const entries: Entry[] = [
  ['intellectual-capability-gap', 'The Intellectual Capability Gap', 'Infographic', ['independent-thinking', 'responsible-ai-use'], 'Compare what you can produce with help and what you can explain or do independently.'],
  ['five-stages-of-responsible-ai-use', 'Five Stages of Responsible AI Use', 'Infographic', ['responsible-ai-use', 'judgment'], 'Use the Think, Consult, Challenge, Verify and Own method.'],
  ['before-you-trust-an-ai-answer', 'Before You Trust an AI Answer', 'Checklist', ['evidence-evaluation', 'responsible-ai-use'], 'Check evidence, assumptions and alternatives before relying on an AI answer.'],
  ['independent-thinking-worksheet', 'The Independent Thinking Worksheet', 'Worksheet', ['independent-thinking', 'evidence-evaluation', 'decision-making'], 'Use a quick or comprehensive worksheet to form and test an independent view.'],
  ['ai-time-dividend-calculator', 'AI Time Dividend Calculator', 'Interactive tool', ['responsible-ai-use', 'learning-and-understanding'], 'Estimate the time AI saves after review and rework.'],
  ['three-intellectual-dividends', 'Three Intellectual Dividends', 'Infographic', ['learning-and-understanding', 'responsible-ai-use'], 'Compare using saved time for output, rest and learning.'],
  ['capability-gap-explorer', 'Capability Gap Explorer', 'Interactive tool', ['independent-thinking', 'responsible-ai-use'], 'Examine where assisted performance runs ahead of independent capability.'],
  ['intellectual-dividend-planner', 'Intellectual Dividend Planner', 'Planning tool', ['learning-and-understanding'], 'Decide how to reinvest time in deliberate learning.'],
  ['30-day-journey', '30-Day Journey', 'Infographic', ['learning-and-understanding'], 'See the sequence of skills and practices in the 30-day programme.'],
  ['30-day-challenge', '30-Day Challenge', 'Web app', ['independent-thinking', 'learning-and-understanding'], 'Build a practice around the book’s 30-day challenge.'],
  ['knowledge-understanding-judgment', 'Knowledge → Understanding → Judgment', 'Infographic', ['learning-and-understanding', 'judgment'], 'Distinguish knowing a fact, understanding it and deciding how to act.'],
  ['thinking-or-producing', 'Thinking or Producing?', 'Checklist', ['independent-thinking', 'responsible-ai-use'], 'Check whether an activity is developing your understanding or producing an output.'],
  ['important-decision', 'Important Decision', 'Checklist', ['decision-making', 'judgment'], 'Review the essentials before making an important decision.'],
  ['decision-under-uncertainty-canvas', 'Decision Under Uncertainty Canvas', 'Worksheet', ['decision-making', 'judgment'], 'Set out your options, assumptions and reasons to revisit a decision.'],
  ['better-questions-canvas', 'Better Questions Canvas', 'Worksheet', ['better-questions'], 'Turn an initial question into one worth working on.'],
  ['anatomy-of-a-better-question', 'Anatomy of a Better Question', 'Infographic', ['better-questions'], 'Identify what makes a question more precise and useful.'],
  ['weekly-intellectual-growth-journal', 'Weekly Intellectual Growth Journal', 'Journal', ['learning-and-understanding', 'independent-thinking'], 'Reflect on what changed in your thinking this week.'],
  ['better-learning-habit', 'Better Learning Habit', 'Checklist', ['learning-and-understanding'], 'Choose a small change that makes deliberate learning easier to repeat.'],
  ['question-reframing-lab', 'Question Reframing Lab', 'Interactive lab', ['better-questions'], 'Compare different ways to frame the same situation.'],
  ['decision-lab', 'Decision Lab', 'Interactive lab', ['decision-making', 'judgment'], 'Practise weighing trade-offs in a decision scenario.'],
  ['10-minute-lessons', '10-Minute Lessons', 'Microlearning', ['learning-and-understanding'], 'Explore a thinking concept in a short lesson.'],
  ['complicated-vs-complex', 'Complicated vs Complex', 'Infographic', ['systems-thinking', 'judgment'], 'Recognise when a situation calls for a systems approach.'],
  ['systems-thinking-canvas', 'Systems Thinking Canvas', 'Worksheet', ['systems-thinking'], 'Map relationships, feedback and delays around a recurring problem.'],
  ['facilitator-kit', 'Facilitator Kit', 'Teaching resource', ['better-questions', 'learning-and-understanding'], 'Guide a group through practical thinking activities.'],
  ['systems-thinking-playground', 'Systems Thinking Playground', 'Interactive lab', ['systems-thinking'], 'Explore how changing one part of a system can affect the rest.'],
];

type Release = {
  publishedAt: string;
  version: string;
  duration: string;
  chapters: BookReference[];
  objectives: string[];
  instructions: string[];
  example: string;
  post?: string[];
  image?: { src: string; width: number; height: number; alt: string };
  editions?: { filename: string; title: string; mode: 'Printable' | 'Fillable'; pages: number; bytes: number }[];
};

export const companionAssets = '/human-advantage/think-beyond-ai/';
const publicationDate = '2026-11-26';
const chapter = (sectionSlug: string): BookReference => ({ bookSlug: 'think-beyond-ai', sectionSlug });
const releases: Record<string, Release> = {
  'intellectual-capability-gap': {
    publishedAt: publicationDate, version: '1.0', duration: '5 min',
    post: [
      'An AI-assisted draft can be better than anything you could have written in the same amount of time. That says something about the output. A different test is whether you can explain the reasoning, check it and adapt it when the situation changes.',
      'The book calls the distance between assisted output and independent capability the intellectual capability gap. The diagram is a way to think about the difference. Use some of the time AI saves to practise the part you want to do better on your own.',
    ],
    image: { src: '/books/think-beyond-ai/diagram-6-1.png', width: 1008, height: 464,
      alt: 'Diagram comparing AI-assisted output with what a person can explain, evaluate, transfer or decide independently.' },
    objectives: ['Distinguish the quality of an output from your ability to explain and defend it.'],
    instructions: ['Choose a recent AI-assisted task.', 'Explain the main conclusion in your own words and identify one part you could practise unaided.'],
    example: 'After using AI to compare suppliers, close the draft and explain which assumption most affects your recommendation. Then check whether changing that assumption would change your choice.',
    chapters: [chapter('introduction'), chapter('chapter-2')],
  },
  'five-stages-of-responsible-ai-use': {
    publishedAt: publicationDate, version: '1.0', duration: '5–10 min',
    post: ['When an AI-assisted decision has real consequences, work through five stages. Start by defining what success looks like. Use the tool to explore options, then test its assumptions and verify its claims before you decide.'],
    image: { src: companionAssets + 'five-stages-of-responsible-ai-use.png', width: 1199, height: 1312,
      alt: 'Infographic showing Think, Consult, Challenge, Verify and Own, with an insurance pilot as the example.' },
    objectives: ['Use the five stages to keep responsibility for an AI-assisted decision.'],
    instructions: [
      'Think. Define the problem and what a good outcome would look like before using AI.',
      'Consult. Ask AI for an analysis, several options and the trade-offs between them.',
      'Challenge. Question assumptions and ask whose needs or evidence the analysis might overlook.',
      'Verify. Check the claims that matter against reliable sources or original records.',
      'Own. Make the decision, explain your reasons and review the outcome.',
    ],
    example: 'For an insurance service pilot, ask what the pilot should achieve, which options the results support and which customers might be overlooked. Review actual service records before deciding where automation should expand and where human support should remain.',
    chapters: [chapter('chapter-9')],
  },
  'before-you-trust-an-ai-answer': {
    publishedAt: publicationDate, version: '1.0', duration: '5 min',
    post: ['Use this checklist before acting on an AI answer. Spend the most time checking claims that could change your decision or cause harm if they are wrong.'],
    image: { src: companionAssets + 'before-you-trust-an-ai-answer.png', width: 1254, height: 1254,
      alt: 'Checklist with five questions to ask before relying on an AI answer.' },
    objectives: ['Identify which parts of an AI answer need independent verification.'],
    instructions: [
      'Is it accurate? Verify important facts, figures and references against independent sources.',
      'What is it assuming? Identify the key assumptions and check whether they apply.',
      'What is missing? Look for overlooked information, context and alternative perspectives.',
      'Does it apply to my situation? Check whether the answer is practical and appropriate for your circumstances.',
      'What if it is wrong? Consider the consequences before acting on it.',
    ],
    example: 'If AI recommends changing a team’s work schedule, check the staffing figures and ask whose work pattern the answer assumes. Consider which teams it leaves out and what would happen if the recommendation increased delays.',
    chapters: [chapter('chapter-3'), chapter('chapter-9')],
  },
  'independent-thinking-worksheet': {
    publishedAt: publicationDate, version: '1.0', duration: '5–10 min for the quick edition',
    post: [
      'Use the one-page Quick Thinking Worksheet for an everyday decision or claim. Use the three-page Independent Thinking Worksheet when you need more room to assess evidence, compare explanations and record your reasoning.',
      'Choose Printable if you prefer to work on paper. To type your answers, download the Fillable edition, open it in a PDF reader that supports forms, and save a copy.',
    ],
    editions: [
      { filename: 'Independent_Thinking_Worksheet_V1.0_Print.pdf', title: 'Independent Thinking Worksheet', mode: 'Printable', pages: 3, bytes: 20123 },
      { filename: 'Independent_Thinking_Worksheet_V1.0_Fillable.pdf', title: 'Independent Thinking Worksheet', mode: 'Fillable', pages: 3, bytes: 31067 },
      { filename: 'Quick_Thinking_Worksheet_V1.0_Print.pdf', title: 'Quick Thinking Worksheet', mode: 'Printable', pages: 1, bytes: 15080 },
      { filename: 'Quick_Thinking_Worksheet_V1.0_Fillable.pdf', title: 'Quick Thinking Worksheet', mode: 'Fillable', pages: 1, bytes: 19718 },
    ],
    objectives: ['Separate what you know from what you assume and decide what evidence could change your view.'],
    instructions: [
      'Define what you are trying to understand or decide and what a useful outcome would look like.',
      'Check the evidence, its sources and the assumptions that matter most.',
      'Compare your initial view, the status quo and a credible opposing view where relevant.',
      'State a provisional conclusion, your confidence and what could change your mind.',
      'Choose what you will do or verify next and when you will review it.',
    ],
    example: 'Before adopting a new tool at work, record the evidence that it solves your actual problem. Compare adopting it now, running a small trial and keeping the current process. Decide what a trial would have to show before you commit.',
    chapters: [chapter('chapter-3'), chapter('chapter-7')],
  },
};

export const foundingResources = entries.map(([slug, title, format, tags, summary], index) => ({
  id: `hap-${String(index + 1).padStart(3, '0')}`, sequence: index + 1,
  slug, title, format, tags, summary, development: index < 4 ? 'Developed' : 'Planned',
  release: releases[slug] as Release | undefined,
}));

export type HumanResource = typeof foundingResources[number];
export const projectCollections = [
  { slug: 'think-beyond-ai-companion', title: 'Think Beyond AI Companion Collection',
    description: 'The 25 founding resources that accompany Think Beyond AI, in their original sequence.', resources: foundingResources },
];
type ProjectBook = { slug: string; collectionSlug?: string; blurb: string; startingSections: string[]; practiceSection?: string };
export const projectBooks: ProjectBook[] = [
  { slug: 'think-beyond-ai', collectionSlug: 'think-beyond-ai-companion',
    blurb: 'Develop independent reasoning and judgment in a world where AI can help you produce more than you can explain on your own.',
    startingSections: ['introduction', 'chapter-3'], practiceSection: '30-day-challenge' },
  { slug: 'before-you-reach-a-conclusion',
    blurb: 'Explore how beliefs take shape, how evidence can mislead, and how to examine a conclusion before you act on it.',
    startingSections: ['introduction', 'chapter-1'], practiceSection: 'appendix-a' },
];
export const projectLibraryPath = humanAdvantagePath + '/books';
export const projectBookPath = (slug: string) => projectLibraryPath + '/' + slug;
export const projectCollectionPath = (slug: string) => humanAdvantagePath + '/collections/' + slug;
export const projectResources = [...new Map(projectCollections.flatMap(collection => collection.resources).map(item => [item.id, item])).values()];
export const resourcePath = (slug: string) => `${humanAdvantagePath}/resources/${slug}`;
export const capabilityPath = (slug: string) => `${humanAdvantagePath}/capabilities/${slug}`;
export const isReleased = (resource: HumanResource) => !!resource.release &&
  Number.isFinite(Date.parse(resource.release.publishedAt)) && Date.parse(resource.release.publishedAt) <= Date.now();

export function humanAdvantageRoutes() {
  return [
    humanAdvantagePath, humanAdvantagePath + '/resources', humanAdvantagePath + '/collections',
    projectLibraryPath, ...projectBooks.map(book => projectBookPath(book.slug)),
    ...projectCollections.map(collection => projectCollectionPath(collection.slug)), humanAdvantagePath + '/capabilities',
    ...capabilities.map(capability => capabilityPath(capability.slug)),
    ...projectResources.filter(isReleased).map(resource => resourcePath(resource.slug)),
  ];
}
