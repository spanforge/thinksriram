'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
// Opt-in aggregate events: no cookies, visitor IDs, queries, or personal details.
export function PublicationAnalytics() {
  const pathname = usePathname();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PUBLICATION_ANALYTICS !== 'true' || navigator.doNotTrack === '1') return;
    const send = (event: string) => {
      void fetch('/api/publication-events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event, path: pathname }), keepalive: true }).catch(() => {});
    };
    if (pathname.startsWith('/writing/')) send('article_view');
    const project = pathname === '/human-advantage' || pathname.startsWith('/human-advantage/');
    if (pathname === '/human-advantage') send('project_view');
    if (pathname.startsWith('/human-advantage/resources/')) send('resource_view');
    if (pathname.startsWith('/human-advantage/capabilities/')) send('capability_view');
    if (pathname.startsWith('/human-advantage/collections/')) send('collection_view');
    const clicked = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest('a');
      if (!link || event.defaultPrevented) return;
      const url = new URL(link.href);
      if (url.hostname === 'thinksriram.substack.com') send(url.pathname === '/subscribe' ? 'subscribe_click' : 'substack_click');
      if (project && url.origin === location.origin && url.pathname.startsWith('/books/think-beyond-ai')) send('book_click');
    };
    const searched = (event: SubmitEvent) => {
      if (project && event.target instanceof HTMLFormElement && event.target.classList.contains('ha-filters')) send('resource_search');
    };
    document.addEventListener('click', clicked, true);
    document.addEventListener('submit', searched);
    return () => {
      document.removeEventListener('click', clicked, true);
      document.removeEventListener('submit', searched);
    };
  }, [pathname]);
  return null;
}
