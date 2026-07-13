import Link from "next/link";

const navItems = [
  ["Stories", "/stories"],
  ["Ideas", "/ideas"],
  ["Mental Models", "/mental-models"],
  ["Classics", "/classics"],
  ["Library", "/library"],
  ["About", "/about"]
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" aria-label="ThinkSriram home">
          <strong className="wordmark">ThinkSriram<span>.</span></strong>
          <span className="tagline">TIMELESS LESSONS FOR BETTER LIVES</span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/library" className="search-pill" aria-label="Search the library">
            <span>Search the library...</span>
          </Link>
          <Link href="/library" className="icon-button mobile-menu" aria-label="Open library">
            Menu
          </Link>
        </div>
      </div>
    </header>
  );
}
