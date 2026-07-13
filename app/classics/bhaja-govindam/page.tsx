import Link from "next/link";
import { contentHref, getContentByType } from "@/lib/content";

export default function BhajaGovindamPage() {
  const articles = getContentByType("classic")
    .filter((item) => item.series === "Bhaja Govindam")
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
  const firstArticle = articles[0];

  return (
    <div className="shell page-hero series-home">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/classics">Classics</Link>
        <span>/</span>
        <span>Bhaja Govindam</span>
      </nav>

      <section className="series-hero">
        <div>
          <span className="badge">31-PART CLASSIC SERIES</span>
          <h1>Bhaja Govindam</h1>
          <p>
            A modern companion to Adi Shankaracharya's timeless verses: read in order, one part at a time,
            as a practical path from delusion toward clarity.
          </p>
          {firstArticle ? (
            <Link className="pill pill-primary" href={contentHref(firstArticle)}>
              Begin with Part 01
            </Link>
          ) : null}
        </div>
        <aside className="series-guide" aria-label="How to read this series">
          <span>How to read</span>
          <p>Start at Part 01 and move forward. Each article includes the verse, transliteration, translation, teaching, and a modern reflection.</p>
        </aside>
      </section>

      <section className="series-index" aria-labelledby="series-index-title">
        <div className="section-heading">
          <h2 id="series-index-title">Reading order</h2>
          <span>{articles.length} parts</span>
        </div>

        <div className="series-part-list">
          {articles.map((article) => (
            <Link href={contentHref(article)} className="series-part-card" key={article.slug}>
              <span>Part {String(article.seriesOrder ?? 0).padStart(2, "0")}</span>
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
