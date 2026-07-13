import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell page-hero">
      <h1>You took a path that ends here.</h1>
      <p>Some wrong turns still help us find our way back.</p>
      <Link className="pill pill-primary" href="/library">Return to the library</Link>
    </div>
  );
}
