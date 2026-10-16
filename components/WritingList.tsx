import Link from "next/link";
import { ContentItem, contentHref, formatDate } from "@/lib/content";
import { topicFor } from "@/lib/site";
import { articleKind } from "@/lib/discovery";
export function WritingList({ items, headingLevel = 3 }: { items: ContentItem[]; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return <div className="writing-list">{items.map(item => <article className="writing-row" key={item.slug}>
    <time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time>
    <div><span className="eyebrow">{articleKind(item)}{item.series ? ` · ${item.series} · Part ${item.seriesOrder}` : ` · ${topicFor(item).label}`}</span>
      <Heading className="writing-title"><Link href={contentHref(item)}>{item.title}</Link></Heading><p>{item.description}</p>
    </div><Link className="row-arrow" href={contentHref(item)} aria-label={"Read " + item.title}>→</Link>
  </article>)}</div>;
}
