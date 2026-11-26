import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookContents, BookCover } from '@/components/BookReader';
import { BookReadingActions } from '@/components/BookReadingProgress';
import { bookMetadata, bookPath, getBook } from '@/lib/books';
import { projectBooks, projectBookPath } from '@/lib/human-advantage';

type Props = { params: Promise<{ book: string }> };

export async function generateMetadata({ params }: Props) {
  const book = getBook((await params).book);
  return book ? bookMetadata(book) : {};
}

export default async function BookPage({ params }: Props) {
  const book = getBook((await params).book);
  if (!book) notFound();
  return <div className="shell book-page">
    <p className="book-crumb"><Link href="/books">Books</Link></p>
    <header className="book-hero">
      <BookCover book={book} />
      <div>
        <p className="book-series">{book.series}</p>
        <h1>{book.title}</h1>
        <p className="book-subtitle">{book.subtitle}</p>
        <p className="book-byline">{book.author}</p>
        <p>{book.blurb[0]}</p>
        <p>{book.blurb[1]}</p>
        <p>{book.blurb[2]}</p>
        <div className="book-actions">
          <BookReadingActions book={book.slug} sections={book.sections.map(({ slug, label }) => ({ slug, label }))} />
          <a href={bookPath(book, book.pdf)} download>Download PDF</a>
        </div>
      </div>
    </header>
    {projectBooks.some(entry => entry.slug === book.slug) && <section className="book-contents" aria-labelledby="book-project">
      <h2 id="book-project">Explore The Human Advantage Project</h2>
      <p>Explore this book’s companion materials and recommended reading through the free learning initiative.</p>
      <Link href={projectBookPath(book.slug)}>Explore this book’s learning hub</Link>
    </section>}
    <section className="book-contents" aria-labelledby="book-contents">
      <h2 id="book-contents">Contents</h2>
      <BookContents book={book} />
    </section>
    <section className="book-contents book-back-cover">
      <h2>{book.backCoverTitle}</h2>
      {book.backCoverCredit.map(line => <p key={line}>{line}</p>)}
    </section>
  </div>;
}
