import Image from "next/image";
import Link from "next/link";
import { ReadingProgress } from "@/components/ReadingProgress";
import {
  ContentItem,
  contentHref,
  getAllContent,
  renderMarkdown
} from "@/lib/content";

export function ArticlePage({ item }: { item: ContentItem }) {
  const blocks = renderMarkdown(item.body);
  const rememberedQuote = blocks.find((block) => block.type === "quote")?.text;
  const allContent = getAllContent();
  const related = allContent
    .filter((candidate) => candidate.slug !== item.slug)
    .filter((candidate) => candidate.themes.some((theme) => item.themes.includes(theme)))
    .slice(0, 3);
  const mentalModel =
    related.find((candidate) => candidate.contentType === "mental-model") ??
    allContent.find((candidate) => candidate.contentType === "mental-model" && candidate.slug !== item.slug);
  const hasImage = Boolean(item.heroImage || item.cardImage);
  const seriesItems = item.series
    ? allContent
        .filter((candidate) => candidate.series === item.series)
        .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0))
    : [];
  const seriesIndex = seriesItems.findIndex((candidate) => candidate.slug === item.slug);
  const previousItem = seriesIndex > 0 ? seriesItems[seriesIndex - 1] : undefined;
  const nextItem = seriesIndex !== -1 ? seriesItems[seriesIndex + 1] : undefined;
  const isClassicSeries = item.contentType === "classic" || Boolean(item.series);
  const seriesPosition =
    item.series && item.seriesOrder
      ? `Part ${String(item.seriesOrder).padStart(2, "0")} of ${seriesItems.length}`
      : undefined;
  const navLabel = (prefix: string, candidate: ContentItem) =>
    `${prefix}: Part ${String(candidate.seriesOrder ?? 0).padStart(2, "0")} - ${candidate.title}`;

  return (
    <article className={`shell article-shell ${isClassicSeries ? "classic-article" : ""}`}>
      <ReadingProgress />
      <header className="article-header">
        <span className="badge">{isClassicSeries ? "CLASSIC" : item.contentType.replace("-", " ").toUpperCase()}</span>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="story-meta" style={{ justifyContent: "center" }}>
          {seriesPosition ? <span>{seriesPosition}</span> : null}
          {item.series ? <span>{item.series}</span> : null}
        </div>
      </header>

      {hasImage ? (
        <div className="article-hero-image">
          <Image src={item.heroImage ?? item.cardImage ?? "/images/hero-landscape.png"} alt="" fill priority sizes="(max-width: 1100px) 100vw, 1100px" />
        </div>
      ) : null}

      {seriesItems.length ? (
        <nav className="series-nav series-nav-top" aria-label={`${item.series} navigation`}>
          {previousItem ? <Link href={contentHref(previousItem)}>{navLabel("Previous", previousItem)}</Link> : <span>Start of series</span>}
          <Link href="/classics">{seriesPosition} / {item.series}</Link>
          {nextItem ? <Link href={contentHref(nextItem)}>{navLabel("Next", nextItem)}</Link> : <span>End of series</span>}
        </nav>
      ) : null}

      {!isClassicSeries ? (
        <aside className="knowledge-trail" aria-label="Connected reading trail">
        <span>This page connects to</span>
        {mentalModel ? <Link href={contentHref(mentalModel)}>{mentalModel.title}</Link> : null}
        {related[0] ? <Link href={contentHref(related[0])}>{related[0].title}</Link> : null}
        {related[1] ? <Link href={contentHref(related[1])}>{related[1].title}</Link> : null}
        </aside>
      ) : null}

      <div className="article-body">
        {blocks.map((block, index) => {
          if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
          if (block.type === "h3") return <h3 key={index}>{block.text}</h3>;
          if (block.type === "verse") {
            return (
              <div className="verse-block" key={index}>
                {block.text.split(/\r?\n/).map((line, lineIndex) => (
                  <span key={`${line}-${lineIndex}`}>{line}</span>
                ))}
              </div>
            );
          }
          if (block.type === "quote") return <blockquote key={index}>{block.text}</blockquote>;
          return <p key={index}>{block.text}</p>;
        })}

        {rememberedQuote && !isClassicSeries ? (
          <aside className="remember-card">
            <span>Worth remembering</span>
            <p>{rememberedQuote}</p>
          </aside>
        ) : null}

        {seriesItems.length ? (
          <nav className="series-nav series-nav-bottom" aria-label={`${item.series} navigation`}>
            {previousItem ? <Link href={contentHref(previousItem)}>{navLabel("Previous", previousItem)}</Link> : <span>Start of series</span>}
            <Link href="/classics">All classics</Link>
            {nextItem ? <Link href={contentHref(nextItem)}>{navLabel("Next", nextItem)}</Link> : <span>End of series</span>}
          </nav>
        ) : null}

        {!isClassicSeries ? (
          <div className="article-ending">
          <h2>The lesson</h2>
          <p>{item.excerpt}</p>
          <h2>The mental model</h2>
          <p>Pause long enough to name what is really happening, then choose from a wider frame instead of from the pressure of the moment.</p>
          <h2>Sit with this</h2>
          <p>Where would more distance give you a kinder and wiser view?</p>
          {related.length ? (
            <>
              <h2>Continue exploring</h2>
              {related.map((relatedItem) => (
                <p key={relatedItem.slug}>
                  <Link className="text-link" href={contentHref(relatedItem)}>
                    {relatedItem.title} <span aria-hidden="true">-&gt;</span>
                  </Link>
                </p>
              ))}
            </>
          ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
