import { notFound } from 'next/navigation';
import Link from 'next/link';
import { topics, topicFor } from '@/lib/site';
import { pillars, editorialArticles } from '@/lib/publication';
import { getAllContent } from '@/lib/content';
import { WritingList } from '@/components/WritingList';
import { EditorialCards } from '@/components/EditorialCards';
const findTopic = (slug: string) => pillars.find(p => p.slug === slug) || topics.find(p => p.slug === slug);
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const topic = findTopic(slug);
  if (!topic) return {};
  return { title: topic.label, description: topic.description, alternates: { canonical: '/topics/' + slug } };
}
export default async function Topic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const topic = findTopic(slug);
  if (!topic) notFound();
  const isPillar = pillars.some(p => p.slug === slug);
  const articles = editorialArticles().filter(a => a.pillar === slug);
  const legacy = getAllContent().filter(p => topicFor(p).slug === slug);
  return <div className="shell page-content"><header className="page-heading"><Link href="/topics">Back to all topics</Link><h1>{topic.label}</h1><p>{topic.description}</p></header>
    {slug === 'career-intelligence' && <aside className="collection-note"><h2>Looking for a practical resource?</h2><p>This page contains editorial writing. Paid guides, assessments, and reports are available separately.</p><Link href="/resources">Explore commercial resources →</Link></aside>}
    {isPillar ? articles.length ? <><h2>Recent &amp; recommended reading</h2><EditorialCards headingLevel={3} articles={articles} /></> : <div className="empty-note"><p>Writing in this collection will appear here as it is published.</p><Link href="/writing">Explore the full writing archive →</Link></div> : <WritingList headingLevel={2} items={legacy} />}
  </div>;
}
