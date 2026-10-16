import Link from "next/link";
import { Markdown } from "@/components/Markdown";
import { ArticleActions } from "@/components/ArticleActions";
import { ContentItem, contentHref, getAllContent, formatDate } from "@/lib/content";
import { topicFor, base } from "@/lib/site";
import { articleKind, relatedWriting, seriesFor, seriesSlug, seriesEntryLabel } from "@/lib/discovery";

export function ArticlePage({ item }: { item: ContentItem }) {
  const all = getAllContent(), topic = topicFor(item);
  const sequence = item.series ? seriesFor(all, item.series) : all.filter(post => !post.series && topicFor(post).slug === topic.slug);
  const index = sequence.findIndex(post => post.slug === item.slug);
  const previous = item.series ? sequence[index - 1] : sequence[index + 1];
  const next = item.series ? sequence[index + 1] : sequence[index - 1];
  const related = relatedWriting(all, item);
  const url = base + contentHref(item);
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.description,
    articleSection: [topic.label, item.subtopic].filter(Boolean), keywords: item.tags,
    datePublished: item.publishedAt, dateModified: item.updatedAt || item.publishedAt, author: { "@type": "Person", name: "Sriram", url: base + "/about" }, mainEntityOfPage: url };
  return <article className="article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className="article-header">
      <p className="eyebrow">{articleKind(item)} · <Link href={`/topics/${topic.slug}`}>{topic.label}</Link></p>
      <h1>{item.title}</h1>
      <div className="article-meta"><Link href="/about">By Sriram</Link><span>·</span><time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time><span>· {item.readingTime} min read</span></div>
      {item.updatedAt && <p className="updated-date">Updated <time dateTime={item.updatedAt}>{formatDate(item.updatedAt)}</time>{item.correction && " · Revision note below"}</p>}
      {item.series && <p className="series-position"><Link href={`/series/${seriesSlug(item.series)}`}>{item.series}: series index</Link><br />{seriesEntryLabel(item)}</p>}
      {item.subtopic && <p>Subtopic: <Link href={`/writing?q=${encodeURIComponent(item.subtopic)}`}>{item.subtopic}</Link></p>}
      {!!item.tags?.length && <p className="article-tags">Tags: {item.tags.map((tag, index) => <span key={tag}>{index > 0 && ", "}<Link href={`/writing?q=${encodeURIComponent(tag)}`}>{tag}</Link></span>)}</p>}
    </header>
    {item.editorialNote && <p className="editorial-label">{item.editorialNote}</p>}
    {item.series === "Bhaja Govindam" && <aside className="series-context"><p>New to Bhaja Govindam? This devotional text is traditionally associated with Adi Shankara. Govinda is a name for Krishna; the commentary here offers reflective readings, not research findings.</p><Link href={`/series/${seriesSlug(item.series)}`}>Read the context and begin at Part 1 →</Link></aside>}
    <div className="article-body"><Markdown body={item.body} />
      {!!item.sources?.length && <section><h2>Sources & further reading</h2><ul>{item.sources.filter(source => /^https?:\/\//.test(source)).map(source => <li key={source}><a href={source} rel="noopener noreferrer">{source.includes('gutenberg.org/ebooks/1656') ? 'Plato, Apology — English translation at Project Gutenberg' : source}</a></li>)}</ul></section>}
      {item.correction && <aside className="correction"><h2>Revision note</h2><p>{item.updatedAt && `${formatDate(item.updatedAt)}: `}{item.correction}</p></aside>}
    </div>
    {item.series === "Bhaja Govindam" && !next && <section className="series-next"><h2>What’s next?</h2><p>You have reached the end of this series. Revisit a part that stayed with you, or explore a different subject.</p><Link href="/writing?series=standalone">Read essays beyond this series →</Link></section>}
    {!!related.length && <section className="related-writing"><h2>Related reading</h2><ul>{related.map(post => <li key={post.slug}><Link href={contentHref(post)}>{post.title}</Link><p>{post.description}</p></li>)}</ul></section>}
    <ArticleActions url={url} />
    <p className="author-note">I’m Sriram. I write about technology, people, learning and the life around work. <Link href="/about">A little more about me →</Link><br /><Link href="/contact">Share a thought or suggest a correction</Link></p>
    <nav className="article-nav" aria-label={item.series ? "Series reading order" : "More writing on this topic"}>
      <div>{previous && <Link href={contentHref(previous)}>← {item.series ? seriesEntryLabel(previous) : "Previous on this topic"}<br />{previous.title}</Link>}</div>
      <div>{next && <Link href={contentHref(next)}>{item.series ? seriesEntryLabel(next) : "Next on this topic"} →<br />{next.title}</Link>}</div>
    </nav>
  </article>;
}
