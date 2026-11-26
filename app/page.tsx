import Link from 'next/link';
import { editorialArticles, latestThinking, pillars, publication } from '@/lib/publication';
import { EditorialCards } from '@/components/EditorialCards';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { BookCover } from '@/components/BookReader';
import { bookPath, getBook } from '@/lib/books';
import { formatDate } from '@/lib/content';
export const metadata = { title: { absolute: 'Think Sriram | Better Careers, Brighter Futures' }, description: publication.description, alternates: { canonical: '/' } };
export default function Home() {
  const latest = latestThinking();
  const featured = latest.find(article => article.url.startsWith('/')) ?? editorialArticles().find(article => article.url.startsWith('/'));
  const book = getBook('before-you-reach-a-conclusion');
  return <>
    <section className="publication-hero"><div className="shell">
      <p className="eyebrow">AN INDEPENDENT PUBLICATION</p>
      <h1>Better Careers, Brighter Futures.</h1>
      <p className="hero-deck">Independent writing on how work, technology, economics, and learning shape the decisions we make.</p>
      <div className="home-features">
        {featured && <article className="home-feature home-essay">
          <p className="eyebrow">Featured essay</p>
          <h2><Link href={featured.url}>{featured.title}</Link></h2>
          <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time>
          <p className="home-feature-description">{featured.description}</p>
          <Link className="home-feature-link" href={featured.url}>Read the essay</Link>
        </article>}
        {book && <article className="home-feature home-book">
          <BookCover book={book} />
          <div>
            <p className="eyebrow">New book</p>
            <h2>{book.title}</h2>
            <p className="home-feature-description">Explore how beliefs take shape, how evidence can mislead, and when you’ve examined a conclusion enough to act.</p>
            <div className="home-book-actions">
              <Link className="home-feature-link" href={bookPath(book)}>Read free online</Link>
              <Link href="/books">Browse all books</Link>
            </div>
          </div>
        </article>}
      </div>
      <p className="home-reading-path"><Link href="/start-here">Start with five selected reads</Link></p>
    </div></section>
    <div className="shell">
      <section className="publication-section"><div className="section-heading"><h2>Latest Thinking</h2><Link href="/writing">All writing →</Link></div><EditorialCards articles={latest.filter(article => article !== featured)} /></section>
      <section className="publication-section"><div className="section-heading"><h2>Explore What Matters</h2><Link href="/topics">All topics →</Link></div>
        <div className="pillar-grid">{pillars.slice(0, 4).map(pillar => <article className="pillar-card" key={pillar.slug}><div><h3><Link href={'/topics/' + pillar.slug}>{pillar.label}</Link></h3><p>{pillar.description}</p></div></article>)}</div>
      </section>
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
