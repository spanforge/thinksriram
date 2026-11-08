import Link from 'next/link';
import { editorialArticles, pillars } from '@/lib/publication';
import { getAllContent, contentHref } from '@/lib/content';
import { topicFor } from '@/lib/site';
import { matchesSearch, seriesSlug } from '@/lib/discovery';
import { EditorialCards } from '@/components/EditorialCards';
import { ArchiveFilters } from '@/components/ArchiveFilters';
export const metadata = { title: 'Writing', description: 'Explore Think Sriram articles on careers, technology, lifelong learning, and better decisions. Search the complete editorial archive.', alternates: { canonical: '/writing' } };
export default async function Writing({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const raw = await searchParams;
  const value = (key: string) => (Array.isArray(raw[key]) ? raw[key][0] : raw[key]) || '';
  const query = value('q'), topic = value('topic'), year = value('year'), series = value('series');
  const local = getAllContent();
  const localByUrl = new Map(local.map(item => [contentHref(item), item]));
  const all = editorialArticles();
  const filtered = all.filter(article => {
    const item = localByUrl.get(article.url);
    return (!topic || article.pillar === topic || !!item && topicFor(item).slug === topic) && (!year || article.publishedAt.startsWith(year)) &&
      (!series || (series === 'standalone' ? !item?.series : !!item?.series && seriesSlug(item.series) === series)) &&
      (item ? matchesSearch(item, query) : query.toLowerCase().trim().split(/\s+/).every(word => [article.title, article.description, pillars.find(p => p.slug === article.pillar)?.label].join(' ').toLowerCase().includes(word)));
  });
  const pages = Math.max(1, Math.ceil(filtered.length / 10));
  const page = Math.min(pages, Math.max(1, Math.floor(Number(value('page'))) || 1));
  const href = (number: number) => '/writing?' + new URLSearchParams({ q: query, topic, year, series, page: String(number) });
  const seriesOptions = [...new Set(local.map(p => p.series).filter((s): s is string => !!s))].map(label => ({ label, slug: seriesSlug(label) }));
  return <div className="shell page-content"><header className="page-heading"><p className="eyebrow">THE EDITORIAL ARCHIVE</p><h1>Writing</h1><p>Research-informed perspectives, practical ideas, and reflective essays. Original publication dates are retained; new Substack pieces link to the original.</p><Link href="/series">Explore series in reading order →</Link></header>
    <ArchiveFilters query={query} topic={topic} year={year} series={series} topics={pillars} years={[...new Set(all.map(a => a.publishedAt.slice(0, 4)))]} seriesOptions={seriesOptions} />
    <p className="result-count" role="status">{filtered.length} {filtered.length === 1 ? 'article' : 'articles'}{query && ' matching “' + query + '”'}</p>
    {filtered.length ? <EditorialCards headingLevel={2} articles={filtered.slice((page - 1) * 10, page * 10)} /> : <div className="empty-note"><p>No articles match these choices.</p><Link href="/writing">View all writing</Link></div>}
    {filtered.length > 0 && <nav className="pagination" aria-label="Archive pages">{page > 1 ? <Link href={href(page - 1)} rel="prev">← Newer writing</Link> : <span />}<span>Page {page} of {pages}</span>{page < pages ? <Link href={href(page + 1)} rel="next">Older writing →</Link> : <span />}</nav>}
  </div>;
}
