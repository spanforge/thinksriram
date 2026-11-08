import Link from 'next/link';
import { latestThinking, pillars, publication } from '@/lib/publication';
import { EditorialCards } from '@/components/EditorialCards';
import { NewsletterSignup } from '@/components/NewsletterSignup';
export const metadata = { title: { absolute: 'Think Sriram | Better Careers, Brighter Futures' }, description: publication.description, alternates: { canonical: '/' } };
export default function Home() {
  return <>
    <section className="publication-hero"><div className="shell">
      <p className="eyebrow">AN INDEPENDENT PUBLICATION</p>
      <h1>Better Careers,<br />Brighter Futures.</h1>
      <p className="hero-deck">Understanding how work, technology, economics, and learning are changing our lives—and what those changes mean for the decisions we make.</p>
      <div className="publication-actions"><a className="brand-button" href={publication.substackUrl}>Read on Substack <span aria-hidden="true">↗</span></a><Link className="secondary-button" href="/writing">Explore the Writing <span aria-hidden="true">→</span></Link></div>
    </div></section>
    <div className="shell">
      <section className="publication-section"><div className="section-heading"><h2>Explore What Matters</h2><Link href="/topics">All topics →</Link></div>
        <div className="pillar-grid">{pillars.slice(0, 4).map((pillar, index) => <article className="pillar-card" key={pillar.slug}><span className="pillar-number" aria-hidden="true">0{index + 1}</span><div><h3><Link href={'/topics/' + pillar.slug}>{pillar.label}</Link></h3><p>{pillar.description}</p></div></article>)}</div>
      </section>
      <section className="publication-section"><div className="section-heading"><h2>Latest Thinking</h2><Link href="/writing">All writing →</Link></div><EditorialCards articles={latestThinking()} /></section>
      <section className="publication-section founder-note"><div><p className="eyebrow">THE PERSON BEHIND THE PUBLICATION</p><h2>A Note from Sriram</h2></div><div>
        <p>I have spent nearly three decades working across technology, business, and professional capability development.</p>
        <p>Through Think Sriram, I explore questions about the future of careers, the impact of technology, lifelong learning, economics, and the decisions that shape our lives.</p>
        <p>My aim is to make complex developments easier to understand, challenge assumptions, and share perspectives that help people think more independently about their futures.</p>
        <p>Think Sriram is an independent personal publication.</p><Link href="/about">More About Sriram →</Link>
      </div></section>
      <NewsletterSignup id="home-subscribe" />
    </div>
  </>;
}
