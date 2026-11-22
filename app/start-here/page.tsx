import type { Metadata } from 'next';
import Link from 'next/link';
import { BookCover } from '@/components/BookReader';
import { bookPath, books } from '@/lib/books';
import { contentHref, getAllContent } from '@/lib/content';
import { articleKind } from '@/lib/discovery';
import { readingPath } from '@/lib/reading-path';

export const metadata: Metadata = {
  title: 'Start Here',
  description: 'Five short reads from Think Sriram on how to think clearly, work with others, and make better decisions.',
  alternates: { canonical: '/start-here' },
};

export default function StartHere() {
  const articles = getAllContent();
  const book = books[0];
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
    <section className="home-feature home-book start-here-book" aria-labelledby="longer-read">
      <BookCover book={book} />
      <div>
        <p className="eyebrow">The longer read</p>
        <h2 id="longer-read"><Link href={bookPath(book)}>{book.title}</Link></h2>
        <p>Develop your own reasoning and judgment with ten chapters and a 30-day practice challenge.</p>
        <Link className="home-feature-link" href={bookPath(book, 'introduction')}>Read the introduction</Link>
      </div>
    </section>
    <p className="start-here-archive"><Link href="/writing">Browse the full writing archive</Link></p>
  </div>;
}
