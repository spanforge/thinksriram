import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import { getAllContent } from '@/lib/content';
import { pillars } from '@/lib/publication';
import { base } from '@/lib/site';
import { isStudioHost, listDrafts } from '@/lib/studio';
import { EssayStudio } from '@/components/EssayStudio';
import './studio.css';

export const metadata: Metadata = { title: 'Essay Studio', robots: { index: false, follow: false } };

export default async function StudioPage() {
  if (!isStudioHost((await headers()).get('host'))) notFound();
  const drafts = await listDrafts();
  const archive = getAllContent().map(({ title, slug, description }) => {
    const route = `/writing/${encodeURIComponent(slug)}`;
    return { title, summary: description, route, canonical: base + route };
  });
  return <EssayStudio initialDrafts={drafts} archive={archive} topics={pillars} />;
}
