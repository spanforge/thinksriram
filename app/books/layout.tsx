import './books.css';

export default function BooksLayout({ children }: { children: React.ReactNode }) {
  return <div className="books-section">{children}</div>;
}
