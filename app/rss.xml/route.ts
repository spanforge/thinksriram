import { editorialArticles } from '@/lib/publication';
import { base, site } from '@/lib/site';

export const dynamic = 'force-dynamic';

function xml(value: string) {
  const entities: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
  return value.replace(/[&<>"']/g, character => entities[character]);
}

export function GET() {
  const items = editorialArticles().map(article => {
    const url = xml(new URL(article.url, base).href);
    return `<item><title>${xml(article.title)}</title><link>${url}</link><guid>${url}</guid>`
      + `<pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>`
      + `<description>${xml(article.description)}</description></item>`;
  }).join('');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(site.title)}</title>`
    + `<link>${base}</link><description>${xml(site.tagline)}</description>${items}</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } },
  );
}
