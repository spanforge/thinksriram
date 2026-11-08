'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import config from '@/content/publication.json';
const links = [['Home', '/'], ['Writing', '/writing'], ['Topics', '/topics'], ['About', '/about']];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const current = usePathname();
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(() => setOpen(false), [current]);
  return <><a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && open) { setOpen(false); menu.current?.focus(); } }}>
      <div className="shell header-inner"><Link className="identity publication-identity" href="/" aria-label="Think Sriram home"><span className="brand-mark" aria-hidden="true"><Image src="/images/think-sriram-better-futures.png" alt="" width={128} height={128} sizes="128px" priority /></span><span>THINK SRIRAM</span></Link>
        <button ref={menu} className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>Menu <span aria-hidden="true">{open ? '−' : '+'}</span></button>
        <nav id="primary-nav" className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} aria-current={(href === '/' ? current === '/' : current.startsWith(href)) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="nav-subscribe" href={config.subscribeUrl}>Subscribe <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  </>;
}
