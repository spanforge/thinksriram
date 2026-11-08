import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { site, base } from '@/lib/site';
import { publication } from '@/lib/publication';
import { PublicationAnalytics } from '@/components/PublicationAnalytics';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: { default: 'Think Sriram | Better Careers, Brighter Futures', template: '%s | Think Sriram' },
  description: publication.description,
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  openGraph: { siteName: site.title, title: site.title, description: publication.description, type: 'website', locale: 'en_IN', images: [{ url: '/opengraph-image', width: 1200, height: 630 }] },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] }
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'Person', '@id': base + '/about#sriram', name: 'Sriram', url: base + '/about', sameAs: [site.linkedin] },
      { '@type': 'WebSite', '@id': base + '/#website', name: site.title, url: base, description: publication.description, author: { '@id': base + '/about#sriram' } }
    ]
  };
  return <html lang="en"><body><SiteHeader /><main id="main" tabIndex={-1}>{children}</main><SiteFooter /><PublicationAnalytics /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} /></body></html>;
}
