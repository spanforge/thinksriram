import Link from "next/link";
import { contentHref, getContentByType } from "@/lib/content";

export default function ClassicsPage() {
  const classics = getContentByType("classic");
  const bhajaGovindam = classics.filter((item) => item.series === "Bhaja Govindam");
  const standaloneClassics = classics.filter((item) => item.series !== "Bhaja Govindam");
  const firstPart = bhajaGovindam[0];

  return (
    <div className="shell page-hero classics-page">
      <h1>Classics</h1>
      <p>Enduring works and guides designed to be read slowly, returned to often, and used in ordinary life.</p>

      {bhajaGovindam.length ? (
        <Link className="series-feature-card" href="/classics/bhaja-govindam">
          <div>
            <span className="badge">CLASSIC SERIES</span>
            <h2>Bhaja Govindam</h2>
            <p>A 31-part modern companion to Adi Shankaracharya's verses on clarity, attachment, purpose, and inner freedom.</p>
          </div>
          <div className="series-feature-meta">
            <span>{bhajaGovindam.length} articles</span>
            {firstPart ? <span>Start with: {firstPart.title}</span> : null}
          </div>
        </Link>
      ) : null}

      {standaloneClassics.length ? (
        <>
          <section className="classics-intro" aria-label="Standalone classics">
            <span>Standalone reads</span>
            <p>Single pieces from the library that are built to last.</p>
          </section>

          <div className="collection-grid">
            {standaloneClassics.map((item) => (
              <Link className="list-card classic-card text-only-card" href={contentHref(item)} key={item.slug}>
                <div>
                  <span className="badge">{item.contentType.replace("-", " ").toUpperCase()}</span>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
