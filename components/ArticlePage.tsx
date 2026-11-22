import Link from "next/link";
import { articleBlocks, Markdown } from "@/components/Markdown";
import { ArticleActions } from "@/components/ArticleActions";
import { ContentItem, contentHref, getAllContent, formatDate } from "@/lib/content";
import { authorName, base } from "@/lib/site";
import { pillarFor } from "@/lib/publication";
import { articleKind, relatedWriting, seriesFor, seriesSlug, seriesEntryLabel } from "@/lib/discovery";
import { readNext, readingPath } from "@/lib/reading-path";

export function ArticlePage({ item }: { item: ContentItem }) {
  const all = getAllContent(), topic = pillarFor(item);
  const sequence = item.series ? seriesFor(all, item.series) : all.filter(post => !post.series && pillarFor(post).slug === topic.slug);
  const index = sequence.findIndex(post => post.slug === item.slug);
  const previous = item.series ? sequence[index - 1] : sequence[index + 1];
  const next = item.series ? sequence[index + 1] : sequence[index - 1];
  const pick = readingPath.find(entry => entry.slug === item.slug);
  const recommendations = pick ? readNext(pick, all) : [];
  const related = recommendations.length ? [] : relatedWriting(all, item);
  const blocks = articleBlocks(item.body);
  const headings = blocks.filter(block => block.type === 'h2' && block.id);
  const sources = (item.sources ?? []).filter(href => /^https?:\/\//.test(href));
  const url = base + contentHref(item);
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: item.title, description: item.description,
    articleSection: [topic.label, item.subtopic].filter(Boolean), keywords: item.tags,
    datePublished: item.publishedAt, dateModified: item.updatedAt || item.publishedAt, author: { "@type": "Person", "@id": base + "/about#sriram", name: authorName, url: base + "/about" }, mainEntityOfPage: url };
  return <article className="article-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header className="article-header">
      <p className="eyebrow">{articleKind(item)} · <Link href={`/topics/${topic.slug}`}>{topic.label}</Link></p>
      <h1>{item.title}</h1>
      {pick && <p className="article-deck">{pick.lead}</p>}
      <div className="article-meta"><Link href="/about">By {authorName}</Link><span>·</span><time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time><span>· {item.readingTime} min read</span></div>
      {item.updatedAt && <p className="updated-date">Updated <time dateTime={item.updatedAt}>{formatDate(item.updatedAt)}</time>{item.correction && <> · <a href="#revision-note">Revision note</a></>}</p>}
      {item.series && <p className="series-position"><Link href={`/series/${seriesSlug(item.series)}`}>{item.series}</Link> · {seriesEntryLabel(item)}</p>}
    </header>
    {item.editorialNote && <p className="editorial-label">{item.editorialNote}</p>}
    {item.series === "Bhaja Govindam" && <aside className="series-context"><p>New to Bhaja Govindam? This devotional text is traditionally associated with Adi Shankara. Govinda is a name for Krishna; the commentary here offers reflective readings, not research findings.</p><Link href={`/series/${seriesSlug(item.series)}`}>Read the context and begin at Part 1 →</Link></aside>}
    {item.readingTime >= 3 && headings.length >= 3 && <details className="article-contents">
      <summary>On this page</summary>
      <nav aria-label="Article contents"><ul>{headings.map(heading => <li key={heading.id}>
        <a href={`#${heading.id}`}>{heading.label}</a>
      </li>)}</ul></nav>
    </details>}
    <div className="article-body"><Markdown blocks={blocks} />
      {sources.length > 0 && <section><h2>Sources &amp; further reading</h2><ul>{sources.map(href =>
        <li key={href}><a href={href} rel="noopener noreferrer">{item.sourceLabels?.[href] ?? href}</a></li>)}</ul></section>}
      {item.correction && <aside className="correction" id="revision-note"><h2>Revision note</h2><p>{item.updatedAt && <><time dateTime={item.updatedAt}>{formatDate(item.updatedAt)}</time>{' · '}</>}{item.correction}</p></aside>}
    </div>
    {item.series === "Bhaja Govindam" && !next && <section className="series-next"><h2>What’s next?</h2><p>You have reached the end of this series. Revisit a part that stayed with you, or explore a different subject.</p><Link href="/writing?series=standalone">Read essays beyond this series →</Link></section>}
    {!!related.length && <section className="related-writing"><h2>Related reading</h2><ul>{related.map(post => <li key={post.slug}><Link href={contentHref(post)}>{post.title}</Link><p>{post.description}</p></li>)}</ul></section>}
    {recommendations.length > 0 && <section className="related-writing read-next" aria-labelledby="read-next">
      <h2 id="read-next">Read next</h2>
      <ul>{recommendations.map(({ title, href, reason }) => <li key={href}><Link href={href}>{title}</Link><p>{reason}</p></li>)}</ul>
      <Link href="/start-here">See the full reading path</Link>
    </section>}
    <ArticleActions url={url} />
    {(item.subtopic || !!item.tags?.length) && <div className="article-discovery">
      {item.subtopic && <p>Subtopic: <Link href={`/writing?q=${encodeURIComponent(item.subtopic)}`}>{item.subtopic}</Link></p>}
      {!!item.tags?.length && <p>Tags: {item.tags.map((tag, index) => <span key={tag}>{index > 0 && ", "}<Link href={`/writing?q=${encodeURIComponent(tag)}`}>{tag}</Link></span>)}</p>}
    </div>}
    <p className="author-note"><Link href="/about">{authorName}</Link> writes about technology, people, learning and the life around work.<br /><Link href="/contact">Share a thought or suggest a correction</Link></p>
    <nav className="article-nav" aria-label={item.series ? "Series reading order" : "More writing on this topic"}>
      <div>{previous && <Link href={contentHref(previous)}>← {item.series ? seriesEntryLabel(previous) : "Previous on this topic"}<br />{previous.title}</Link>}</div>
      <div>{next && <Link href={contentHref(next)}>{item.series ? seriesEntryLabel(next) : "Next on this topic"} →<br />{next.title}</Link>}</div>
    </nav>
  </article>;
}
