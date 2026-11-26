import type { Metadata } from 'next';
import Link from 'next/link';
import { BookCover } from '@/components/BookReader';
import { bookPath, books } from '@/lib/books';

export const metadata: Metadata = {
  title: 'Books',
  description: 'Read books by Sriram Srinivasan online for free, including Think Beyond AI and Before You Reach a Conclusion.',
  alternates: { canonical: '/books' },
};

export default function BooksPage() {
  return <div className="shell book-page">
    <h1>Books</h1>
    {books.map(book => <article className="book-hero" key={book.slug}>
      <Link href={bookPath(book)}><BookCover book={book} /></Link>
      <div>
        <p className="book-series">{book.series}</p>
        <h2>{book.title}</h2>
        <p className="book-subtitle">{book.subtitle}</p>
        <p className="book-byline">{book.author}</p>
        <p>{book.description}</p>
        <div className="book-actions"><Link className="book-primary" href={bookPath(book)}
          aria-label={`Explore the book: ${book.title}`}>Explore the book</Link></div>
      </div>
    </article>)}
  </div>;
}
