import Link from 'next/link';
import { formatDate } from '@/lib/content';
import { EditorialArticle, pillars } from '@/lib/publication';
export function EditorialCards({ articles, headingLevel = 3 }: { articles: EditorialArticle[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3';
  return <div className="editorial-grid">{articles.map(article => <article className="editorial-card" key={article.url}>
    <p className="eyebrow">{pillars.find(p => p.slug === article.pillar)?.label}</p>
    <Heading><Link href={article.url}>{article.title}</Link></Heading>
    <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
    <p>{article.description}</p>
    <Link className="article-read" href={article.url} aria-label={`Read article: ${article.title}`}>Read Article <span aria-hidden="true">→</span>{article.url.startsWith('https:') && <span className="external-note"> on Substack</span>}</Link>
  </article>)}</div>;
}
