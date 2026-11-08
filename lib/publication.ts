import config from '@/content/publication.json';
import { ContentItem, getAllContent, contentHref } from '@/lib/content';
import { topicFor } from '@/lib/site';

export const publication = config;
export const pillars = [
  { slug: 'future-of-careers', label: 'Future of Careers', description: 'How artificial intelligence, automation, economic change, and evolving business models are reshaping jobs and the future of work.' },
  { slug: 'career-intelligence', label: 'Career Intelligence', description: 'Practical perspectives on employability, professional capabilities, skills, salaries, career mobility, and navigating career transitions.' },
  { slug: 'lifelong-learning', label: 'Lifelong Learning', description: 'Understanding how people learn, develop expertise, adapt to change, and continue growing throughout their lives.' },
  { slug: 'better-life-and-decisions', label: 'Better Life & Decisions', description: 'Research-informed ideas about personal finance, psychology, decision-making, wellbeing, and the choices that shape our lives.' },
  { slug: 'ideas-and-perspectives', label: 'Ideas & Perspectives', description: 'Philosophy, history, reflective essays, and questions that invite a different perspective.' }
];
export function pillarFor(item: ContentItem) {
  if (pillars.some(p => p.slug === item.topic)) return pillars.find(p => p.slug === item.topic)!;
  const override = (config.pillarOverrides as Record<string, string>)[item.slug];
  if (override && pillars.some(p => p.slug === override)) return pillars.find(p => p.slug === override)!;
  const topic = topicFor(item).slug;
  const slug = item.series === 'Bhaja Govindam' || item.contentType === 'classic' || item.contentType === 'story' ? 'ideas-and-perspectives'
    : /decision|regret|judgment-uncertainty|first-principles|mental-model/.test(item.slug + ' ' + item.contentType) ? 'better-life-and-decisions'
    : topic === 'ai-and-people' ? 'future-of-careers'
    : ['careers', 'professional-life', 'work-and-organizations'].includes(topic) ? 'career-intelligence'
    : topic === 'education-and-learning' ? 'lifelong-learning'
    : 'ideas-and-perspectives';
  return pillars.find(p => p.slug === slug)!;
}
export type EditorialArticle = { title: string; url: string; publishedAt: string; description: string; pillar: string };
export function editorialArticles(): EditorialArticle[] {
  const external = (config.articles as EditorialArticle[]).filter(a => {
    try { return new URL(a.url).origin === new URL(config.substackUrl).origin && !!a.title && !!a.description && pillars.some(p => p.slug === a.pillar) && Number.isFinite(+new Date(a.publishedAt)) && +new Date(a.publishedAt) <= Date.now(); } catch { return false; }
  });
  const summaries = config.summaries as Record<string, string>;
  return [...external, ...getAllContent().map(item => ({ title: item.title, url: contentHref(item), publishedAt: item.publishedAt, description: summaries[item.slug] || item.description, pillar: pillarFor(item).slug }))]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}
export function latestThinking() {
  const all = editorialArticles();
  const selected = config.latestSlugs as string[];
  return (selected.length ? all.filter(a => selected.some(slug => a.url.endsWith('/' + slug))) : all).slice(0, 3);
}
