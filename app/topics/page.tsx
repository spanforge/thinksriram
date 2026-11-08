import Link from 'next/link';
import { pillars, editorialArticles } from '@/lib/publication';
export const metadata = { title: 'Topics', description: 'Explore the four editorial pillars of Think Sriram: Future of Careers, Career Intelligence, Lifelong Learning, and Better Life & Decisions.', alternates: { canonical: '/topics' } };
export default function Topics() {
  const all = editorialArticles();
  return <div className="shell page-content"><header className="page-heading"><p className="eyebrow">EXPLORE WHAT MATTERS</p><h1>Topics</h1><p>Four editorial pillars for understanding change and making better decisions, alongside an open archive of ideas and reflections.</p></header>
    <div className="pillar-grid topic-pillar-grid">{pillars.map(p => { const articles = all.filter(a => a.pillar === p.slug); return <section className="topic-section" key={p.slug}><h2><Link href={'/topics/' + p.slug}>{p.label}</Link></h2><p>{p.description}</p><p className="topic-count">{articles.length} {articles.length === 1 ? 'article' : 'articles'}</p>{articles.length > 0 && <ul className="topic-previews" aria-label={'Recent writing on ' + p.label}>{articles.slice(0, 3).map(a => <li key={a.url}><Link href={a.url}>{a.title}</Link></li>)}</ul>}<Link href={'/topics/' + p.slug}>Explore {p.label} →</Link></section>; })}</div>
  </div>;
}
