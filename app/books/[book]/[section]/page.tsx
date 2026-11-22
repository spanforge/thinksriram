import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookContents, BookText, ChallengeContents } from '@/components/BookReader';
import { RememberBookSection } from '@/components/BookReadingProgress';
import { bookMetadata, bookPath, getBook } from '@/lib/books';

type Props = { params: Promise<{ book: string; section: string }> };

export async function generateMetadata({ params }: Props) {
  const { book: slug, section: sectionSlug } = await params;
  const book = getBook(slug);
  const section = book?.sections.find(item => item.slug === sectionSlug);
  return book && section ? bookMetadata(book, section) : {};
}

export default async function ReaderPage({ params }: Props) {
  const { book: slug, section: sectionSlug } = await params;
  const book = getBook(slug);
  if (!book) notFound();
  const index = book.sections.findIndex(section => section.slug === sectionSlug);
  const section = book.sections[index];
  if (!section) notFound();
  const previous = book.sections[index - 1];
  const next = book.sections[index + 1];
  const contents = <BookContents book={book} active={section.slug} />;

  return <div className="shell book-page">
    <RememberBookSection book={book.slug} section={section.slug} />
    <p className="book-crumb"><Link href="/books">Books</Link> <span aria-hidden="true">/</span>{' '}
      <Link href={bookPath(book)}>{book.title}</Link></p>
    <div className="book-reader">
      <aside className="book-sidebar"><p className="book-series">Contents</p>{contents}</aside>
      <details className="book-mobile-toc"><summary>Contents</summary>{contents}</details>
      <article className="book-article">
        <header>
          <p className="book-series">{book.series}</p>
          <p className="book-byline">{section.prefix && `${section.prefix} · `}{book.author}</p>
          <h1>{section.title}</h1>
        </header>
        {section.slug === '30-day-challenge' && <ChallengeContents section={section} />}
        <BookText book={book} section={section} />
        {(section.slug === 'introduction' || section.slug.startsWith('chapter-')) &&
          book.sections.some(item => item.slug === 'references') && <p className="book-byline">
            <a href={`${bookPath(book, 'references')}#${section.slug}`}>Sources for this section</a>
          </p>}
        <nav className="book-sequence" aria-label="Reading navigation">
          {previous ? <Link rel="prev" href={bookPath(book, previous.slug)}>
            <span>Previous</span>{previous.label}
          </Link> : <Link href={bookPath(book)}>Book overview</Link>}
          {next ? <Link rel="next" href={bookPath(book, next.slug)}>
            <span>Next</span>{next.label}
          </Link> : <Link href={bookPath(book)}>Book overview</Link>}
        </nav>
      </article>
    </div>
  </div>;
}
