import Link from "next/link";
import { getAllContent } from "@/lib/content";
import { topics, topicFor } from "@/lib/site";
import { matchesSearch, seriesSlug } from "@/lib/discovery";
import { WritingList } from "@/components/WritingList";
import { ArchiveFilters } from "@/components/ArchiveFilters";

export const metadata = { title: "Writing", description: "Search and browse Sriram's essays, reflections and stories.", alternates: { canonical: "/writing" } };
export default async function Writing({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const raw = await searchParams;
  const value = (key: string) => (Array.isArray(raw[key]) ? raw[key][0] : raw[key]) || "";
  const query = value("q"), topic = value("topic"), year = value("year"), series = value("series");
  const all = getAllContent();
  const seriesOptions = [...new Set(all.map(post => post.series).filter((name): name is string => !!name))].map(name => ({ slug: seriesSlug(name), label: name }));
  const filtered = all.filter(post => (!topic || topicFor(post).slug === topic) && (!year || post.publishedAt.startsWith(year)) &&
    (!series || (series === "standalone" ? !post.series : !!post.series && seriesSlug(post.series) === series)) && matchesSearch(post, query));
  const pages = Math.max(1, Math.ceil(filtered.length / 10));
  const page = Math.min(pages, Math.max(1, Math.floor(Number(value("page"))) || 1));
  const href = (number: number) => "/writing?" + new URLSearchParams({ q: query, topic, year, series, page: String(number) }).toString();
  return <div className="shell page-content">
    <header className="page-heading"><h1>Writing</h1><p>Essays, reflections and stories, with their original publication dates.</p>
      <Link href="/series">Browse series in reading order →</Link>
    </header>
    <ArchiveFilters query={query} topic={topic} year={year} series={series} topics={topics} years={[...new Set(all.map(post => post.publishedAt.slice(0, 4)))]} seriesOptions={seriesOptions} />
    <p className="result-count" role="status">{filtered.length} {filtered.length === 1 ? "article" : "articles"}{query && <> matching “{query}”</>}</p>
    {filtered.length ? <WritingList headingLevel={2} items={filtered.slice((page - 1) * 10, page * 10)} /> : <div className="empty-note"><p>No articles match these choices. Try fewer words or clear a filter.</p><Link href="/writing">View all writing</Link></div>}
    {filtered.length > 0 && <nav className="pagination" aria-label="Archive pages">
      {page > 1 ? <Link href={href(page - 1)} rel="prev">← Newer writing</Link> : <span />}
      <span>Page {page} of {pages}</span>
      {page < pages ? <Link href={href(page + 1)} rel="next">Older writing →</Link> : <span />}
    </nav>}
  </div>;
}
