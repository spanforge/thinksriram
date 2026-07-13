import Link from "next/link";
import Image from "next/image";
import { ContentItem, ContentType, contentHref, readerNeeds } from "@/lib/content";

export function ContentCollection({
  title,
  intro,
  items,
  query = "",
  need = ""
}: {
  title: string;
  intro: string;
  items: ContentItem[];
  type?: ContentType;
  query?: string;
  need?: string;
}) {
  const isClassics = title === "Classics";
  const isLibrary = title === "Library";
  const showCardBadge = isClassics || isLibrary || !["Ideas", "Mental Models", "Stories"].includes(title);
  const availableNeedSlugs = new Set(items.flatMap((item) => item.readerNeeds));
  const availableReaderNeeds = readerNeeds.filter((readerNeed) => availableNeedSlugs.has(readerNeed.slug));
  const normalizedQuery = query.trim().toLowerCase();
  const filteredByNeed = need ? items.filter((item) => item.readerNeeds.includes(need)) : items;
  const visibleItems = normalizedQuery
    ? filteredByNeed.filter((item) =>
        [
          item.title,
          item.description,
          item.excerpt,
          item.contentType,
          ...item.themes,
          ...item.readerNeeds
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery)
      )
    : filteredByNeed;
  const seriesCounts = visibleItems.reduce<Record<string, number>>((counts, item) => {
    if (item.series) counts[item.series] = (counts[item.series] ?? 0) + 1;
    return counts;
  }, {});
  const seriesPosition = (item: ContentItem) =>
    item.series && item.seriesOrder
      ? `Part ${String(item.seriesOrder).padStart(2, "0")} of ${seriesCounts[item.series] ?? 31}`
      : undefined;

  return (
    <div className={`shell page-hero ${isClassics ? "classics-page" : ""}`}>
      <h1>{title}</h1>
      <p>{intro}</p>

      {isLibrary ? (
        <form className="library-search" action="/library" aria-label="Library discovery">
          <label htmlFor="library-search">Search the library</label>
          <input id="library-search" name="q" type="search" defaultValue={query} placeholder="Search doubt, courage, clarity, regret..." />
          <div>
            {availableReaderNeeds.map((readerNeed) => (
              <Link href={`/library?need=${readerNeed.slug}`} key={readerNeed.slug}>
                Today I want to {readerNeed.label.toLowerCase()}
              </Link>
            ))}
          </div>
        </form>
      ) : null}

      {isClassics ? (
        <section className="classics-intro" aria-label="Classics introduction">
          <span>Reading path</span>
          <p>Begin with Part 01 and move forward. The Bhaja Govindam series is arranged as a 31-part companion, each article building on the last.</p>
        </section>
      ) : null}

      <div className="collection-grid">
        {!visibleItems.length ? (
          <div className="empty-state">
            <h2>No matching pieces yet</h2>
            <p>The library is still growing. Try a broader search or another reader need.</p>
          </div>
        ) : null}
        {visibleItems.map((item) => (
          <Link className={`list-card ${item.classic ? "classic-card" : ""} ${!item.cardImage && !item.heroImage ? "text-only-card" : ""}`} href={contentHref(item)} key={item.slug}>
            {item.cardImage || item.heroImage ? (
              <span className="list-card-image">
                <Image src={item.cardImage ?? item.heroImage ?? "/images/hero-landscape.png"} alt="" fill sizes="(max-width: 720px) 100vw, 33vw" />
              </span>
            ) : null}
            <div>
              {showCardBadge ? (
                <span className="badge">{item.contentType.replace("-", " ").toUpperCase()}</span>
              ) : null}
              {item.series && item.seriesOrder ? (
                <span className="series-kicker">
                  {seriesPosition(item)}
                </span>
              ) : null}
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            {item.series ? (
              <div className="story-meta">
                <span>{item.series}</span>
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
