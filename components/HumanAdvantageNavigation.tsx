'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function HumanAdvantageNavigation({ destinations }: { destinations: [string, string][] }) {
  const path = usePathname();
  if (path === destinations[0]?.[1]) return null;
  return <nav className="ha-subnav" aria-label="Human Advantage Project">
    {destinations.map(([label, href], index) => {
      const active = path === href || (index > 0 && path.startsWith(href + '/'));
      return <Link key={href} href={href} aria-current={active ? (path === href ? 'page' : 'location') : undefined}>{label}</Link>;
    })}
  </nav>;
}
