import Link from "next/link";

const secondaryLinks = [
  ["Start Here", "/start-here"],
  ["Privacy", "/privacy"],
  ["Terms", "/terms"],
  ["Contact", "mailto:hello@thinksriram.com"]
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div>
          <strong className="wordmark">ThinkSriram<span>.</span></strong>
          <span className="tagline">TIMELESS LESSONS FOR BETTER LIVES</span>
          <p>Think deeply. Live wisely.</p>
          <p>&copy; {new Date().getFullYear()} ThinkSriram.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {secondaryLinks.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
