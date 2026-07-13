import Image from "next/image";
import Link from "next/link";
import { ContentItem, contentHref, readerNeeds } from "@/lib/content";

function bySlug(items: ContentItem[], slug: string) {
  return items.find((item) => item.slug === slug);
}

function contentLabel(item: ContentItem) {
  if (item.series) return item.series;
  if (item.contentType === "mental-model") return "Mental Model";
  return item.contentType.replace("-", " ");
}

export function HomePage({ items }: { items: ContentItem[] }) {
  const bhajaGovindam = items
    .filter((item) => item.series === "Bhaja Govindam")
    .sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0));
  const firstBhaja = bhajaGovindam[0];

  const examinedMachine = bySlug(items, "the-examined-machine");
  const examinedPath = [
    "socrates-and-the-art-of-the-right-question",
    "platos-cave-and-the-reality-we-are-building",
    "aristotle-and-the-judgment-that-cannot-be-automated",
    "epictetus-and-the-control-problem",
    "can-machines-learn-phronesis"
  ]
    .map((slug) => bySlug(items, slug))
    .filter((item): item is ContentItem => Boolean(item));

  const mentalModels = [
    "judgment-uncertainty-gap",
    "socrates-and-the-art-of-the-right-question",
    "aristotle-and-the-judgment-that-cannot-be-automated"
  ]
    .map((slug) => bySlug(items, slug))
    .filter((item): item is ContentItem => Boolean(item));

  const stories = items.filter((item) => item.contentType === "story").slice(0, 2);
  const availableNeedSlugs = new Set(items.flatMap((item) => item.readerNeeds));
  const availableReaderNeeds = readerNeeds.filter((need) => availableNeedSlugs.has(need.slug));

  return (
    <>
      <section className="shell hero">
        <div className="hero-copy">
          <h1>Timeless lessons.<br />Better lives.</h1>
          <span className="underline" aria-hidden="true" />
          <p>
            A reading library for people who want ancient wisdom, practical philosophy, and sharper judgment for modern life.
          </p>
          <div className="hero-actions">
            <Link className="pill pill-primary" href="/classics/bhaja-govindam">
              Start Bhaja Govindam <span aria-hidden="true">→</span>
            </Link>
            <Link className="pill pill-secondary" href={examinedMachine ? contentHref(examinedMachine) : "/ideas"}>
              Explore modern judgment
            </Link>
          </div>
        </div>
        <div className="hero-art" aria-label="Peaceful landscape with a tree and winding path">
          <div className="hero-image">
            <Image src="/images/hero-landscape.png" alt="" fill priority sizes="(max-width: 1080px) 100vw, 64vw" />
          </div>
          <p className="hand-note">Clarity comes<br />from stepping back.</p>
        </div>
      </section>

      <section className="shell home-series-section" aria-labelledby="home-series-title">
        <Link className="home-series-card" href="/classics/bhaja-govindam">
          <div>
            <span className="badge">31-PART CLASSIC SERIES</span>
            <h2 id="home-series-title">Bhaja Govindam</h2>
            <p>
              A modern companion to Adi Shankaracharya's verses on attachment, desire, time, relationships, and inner freedom.
            </p>
          </div>
          <div className="home-series-steps">
            <span>{bhajaGovindam.length} articles</span>
            {firstBhaja ? <strong>Begin with: {firstBhaja.title}</strong> : null}
            <em>Read in order, one part at a time.</em>
          </div>
        </Link>
      </section>

      {examinedMachine ? (
        <section className="shell home-focus-section" aria-labelledby="examined-machine-title">
          <div className="section-heading">
            <h2 id="examined-machine-title">Judgment, ethics, and the examined life</h2>
            <Link className="text-link" href="/ideas">View ideas <span aria-hidden="true">→</span></Link>
          </div>
          <div className="home-focus-grid">
            <article className="home-primary-essay">
              <Link className="home-primary-image" href={contentHref(examinedMachine)}>
                <Image
                  src={examinedMachine.cardImage ?? examinedMachine.heroImage ?? "/images/examined-machine/ch08-examined-machine.png"}
                  alt=""
                  fill
                  sizes="(max-width: 920px) 100vw, 50vw"
                />
              </Link>
              <div>
                <span className="eyebrow"><span className="dot" /> FEATURED ESSAY</span>
                <h3>{examinedMachine.title}</h3>
                <p>{examinedMachine.description}</p>
                <Link className="text-link" href={contentHref(examinedMachine)}>Read the essay <span aria-hidden="true">→</span></Link>
              </div>
            </article>

            <div className="home-path-list" aria-label="Related reading path">
              {examinedPath.map((item, index) => (
                <Link href={contentHref(item)} key={item.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="shell intent-section" aria-labelledby="reader-needs">
        <div className="section-heading">
          <h2 id="reader-needs">Browse by what you need today</h2>
          <Link className="text-link" href="/library">Explore library <span aria-hidden="true">→</span></Link>
        </div>
        <div className="intent-grid">
          {availableReaderNeeds.map((need) => (
            <Link className="intent" href={`/library?need=${need.slug}`} key={need.slug}>
              <span className="intent-icon" style={{ background: need.tint }} aria-hidden="true">{need.icon}</span>
              <span>{need.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell home-cards-section" aria-labelledby="home-models-title">
        <div className="section-heading">
          <h2 id="home-models-title">Mental models for better judgment</h2>
          <Link className="text-link" href="/mental-models">View mental models <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-card-grid">
          {mentalModels.map((item) => (
            <Link className="home-text-card" href={contentHref(item)} key={item.slug}>
              <span>{contentLabel(item)}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell home-cards-section" aria-labelledby="home-stories-title">
        <div className="section-heading">
          <h2 id="home-stories-title">Stories that make ideas easier to remember</h2>
          <Link className="text-link" href="/stories">View stories <span aria-hidden="true">→</span></Link>
        </div>
        <div className="home-story-grid">
          {stories.map((item) => (
            <Link className="home-story-card" href={contentHref(item)} key={item.slug}>
              <span className="home-story-image">
                <Image src={item.cardImage ?? item.heroImage ?? "/images/hero-landscape.png"} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="shell quote-section">
        <div className="quote-panel">
          <div className="sketch" aria-hidden="true">∴</div>
          <blockquote className="quote">
            We do not learn from experience...<br />we learn from reflecting on experience.
            <cite>— John Dewey</cite>
          </blockquote>
          <div className="new-reader">
            <h3>New here?</h3>
            <p>Start with the guided classics or browse by the kind of clarity you need today.</p>
            <Link className="text-link" href="/start-here">Begin now <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="shell newsletter-section">
        <div className="newsletter">
          <div className="envelope" aria-hidden="true">✉</div>
          <div>
            <h2>Get timeless lessons in your inbox</h2>
            <p>One thoughtful essay every month. No noise. Just clarity.</p>
          </div>
          <form>
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="seal" aria-hidden="true">THINK DEEPLY<br />LIVE WISELY</div>
        </div>
      </section>
    </>
  );
}
