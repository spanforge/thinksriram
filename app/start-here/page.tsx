import type { Metadata } from 'next';
import Link from 'next/link';
import { BookCover } from '@/components/BookReader';
import { bookPath, getBook } from '@/lib/books';
import { contentHref, getAllContent } from '@/lib/content';
import { articleKind } from '@/lib/discovery';
import { readingPath } from '@/lib/reading-path';

export const metadata: Metadata = {
  title: 'Start Here',
  description: 'Five short reads and two free books from Think Sriram on how to think clearly, work with others, and make better decisions.',
  alternates: { canonical: '/start-here' },
};

export default function StartHere() {
  const articles = getAllContent();
  const longerReads = [
    { slug: 'think-beyond-ai', blurb: 'Choose this if you want to use AI while developing your own reasoning and judgment. Includes a 30-day practice challenge.' },
    { slug: 'before-you-reach-a-conclusion', blurb: 'Choose this if you want to examine your beliefs, weigh evidence, and make decisions under uncertainty. Includes two practical appendices.' },
  ];
  return <div className="shell page-content start-here">
    <header className="page-heading">
      <h1>Start Here</h1>
      <p>Begin with five pieces on how we work together, ask better questions, and make decisions when the answer is uncertain.</p>
    </header>
    <ol className="reading-path" aria-label="Five starting reads">
      {readingPath.map(pick => {
        const article = articles.find(item => item.slug === pick.slug);
        if (!article) return null;
        return <li key={pick.slug}>
          <p className="eyebrow">{articleKind(article)} · {article.readingTime} min read</p>
          <h2><Link href={contentHref(article)}>{article.title}</Link></h2>
          <p>{pick.lead}</p>
        </li>;
      })}
    </ol>
    <section aria-labelledby="longer-reads">
      <h2 id="longer-reads">Longer reads</h2>
      <div className="start-here-books">
        {longerReads.map(({ slug, blurb }) => {
          const book = getBook(slug);
          if (!book) return null;
          return <article key={slug} className="home-feature home-book start-here-book">
            <BookCover book={book} />
            <div>
              <h3><Link href={bookPath(book)}>{book.title}</Link></h3>
              <p className="home-feature-description">{blurb}</p>
              <Link className="home-feature-link" href={bookPath(book, 'introduction')}
                aria-label={`Read the introduction to ${book.title}`}>Read the introduction</Link>
            </div>
          </article>;
        })}
      </div>
    </section>
    <p className="start-here-archive"><Link href="/writing">Browse the full writing archive</Link></p>
  </div>;
}
