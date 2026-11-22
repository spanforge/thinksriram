import { randomUUID } from 'node:crypto';
import { link, mkdir, readFile, readdir, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { archiveHasSlug } from '@/lib/content';
import { pillars } from '@/lib/publication';
import { base } from '@/lib/site';

const drafts = path.join(process.cwd(), '.studio-drafts');
const essays = path.join(process.cwd(), 'content', 'essays');
const idPattern = /^[a-f\d]{8}(?:-[a-f\d]{4}){3}-[a-f\d]{12}$/i;
const genres = ['Essay', 'Reflection', 'Thinking exercise', 'Story'];

export class StudioError extends Error {}

export function isStudioHost(host: string | null) {
  return process.env.NODE_ENV === 'development' &&
    /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host ?? '');
}

export async function listDrafts() {
  await mkdir(drafts, { recursive: true });
  const entries = await Promise.all((await readdir(drafts))
    .filter(file => file.endsWith('.json') && idPattern.test(file.slice(0, -5)))
    .map(async file => JSON.parse(await readFile(path.join(drafts, file), 'utf8')) as ReturnType<typeof validateEssay> & { updatedAt: string }));
  return entries.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export function validateEssay(input: unknown) {
  if (!input || typeof input !== 'object') throw new StudioError('Enter an essay first.');
  const fields = input as Record<string, unknown>;
  function read(key: string, limit: number) {
    const value = typeof fields[key] === 'string' ? fields[key].trim() : '';
    if (value.length > limit) throw new StudioError(`${key} is too long.`);
    return value;
  }
  const title = read('title', 160);
  const slug = read('slug', 120).normalize('NFKC').toLowerCase();
  const summary = read('summary', 320);
  const body = read('body', 200_000).replace(/\r\n?/g, '\n');
  const genre = read('genre', 30);
  const topic = read('topic', 60);
  const id = read('id', 36);
  if (!title) throw new StudioError('Enter a title.');
  if (id && !idPattern.test(id)) throw new StudioError('Invalid draft ID.');
  if (!/^[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*$/u.test(slug)) throw new StudioError('Enter a valid URL slug using letters, numbers, and hyphens.');
  if (/^(con|prn|aux|nul|com[1-9¹²³]|lpt[1-9¹²³])$/i.test(slug)) throw new StudioError('Choose a different URL slug.');
  if (!genres.includes(genre) || !pillars.some(pillar => pillar.slug === topic)) throw new StudioError('Choose a valid format and topic.');
  return { id, title, slug, summary, body, genre, topic };
}

export async function saveEssay(input: ReturnType<typeof validateEssay>) {
  await mkdir(drafts, { recursive: true });
  const id = input.id || randomUUID();
  const draft = { ...input, id, updatedAt: new Date().toISOString() };
  const pending = path.join(drafts, `.${randomUUID()}.tmp`);
  try {
    await writeFile(pending, JSON.stringify(draft), { flag: 'wx' });
    await rename(pending, path.join(drafts, `${id}.json`));
  } finally {
    await unlink(pending).catch(() => {});
  }
  return draft;
}

export async function publishEssay(input: ReturnType<typeof validateEssay>) {
  if (!input.body || !input.summary) throw new StudioError('Add a summary and essay body before publishing.');
  if (archiveHasSlug(input.slug)) throw new StudioError('That URL is already in the archive. Choose a different slug.');
  await mkdir(essays, { recursive: true });
  const fields = { title: input.title, slug: input.slug, description: input.summary,
    excerpt: input.summary, genre: input.genre, topic: input.topic, status: 'published',
    contentType: input.genre === 'Story' ? 'story' : 'idea', publishedAt: new Date().toISOString() };
  const frontmatter = Object.entries(fields).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n');
  const pending = path.join(essays, `.${randomUUID()}.tmp`);
  try {
    await writeFile(pending, `---\n${frontmatter}\n---\n\n${input.body}\n`, { flag: 'wx' });
    await link(pending, path.join(essays, `${input.slug}.mdx`));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'EEXIST') throw new StudioError('That URL is already in the archive. Choose a different slug.');
    throw error;
  } finally {
    await unlink(pending).catch(() => {});
  }
  const route = `/writing/${encodeURIComponent(input.slug)}`;
  return { route, canonical: base + route, file: `content/essays/${input.slug}.mdx` };
}
