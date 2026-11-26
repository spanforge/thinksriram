const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

require.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(
  fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS } },
).outputText, filename);

const { capabilities, companionAssets, foundingResources, isReleased, humanAdvantageRoutes, projectBooks, projectCollections, resourcePath } = require('../lib/human-advantage.ts');
const { episodes, videos } = require('../lib/human-advantage-media.ts');
const capabilitySlugs = new Set(capabilities.map(item => item.slug));
const bookSections = new Map();
assert.equal(foundingResources.length, 25);
assert.equal(new Set(foundingResources.map(item => item.slug)).size, foundingResources.length);
assert.equal(capabilitySlugs.size, capabilities.length);
assert.equal(new Set(projectBooks.map(item => item.slug)).size, projectBooks.length);
assert.equal(new Set(projectCollections.map(item => item.slug)).size, projectCollections.length);
for (const entry of projectBooks) {
  const volume = require(`../content/books/${entry.slug}.json`);
  const sections = new Set(volume.sections.map(section => section.slug));
  bookSections.set(entry.slug, sections);
  assert(entry.blurb.trim(), entry.slug);
  assert(entry.startingSections.every(slug => sections.has(slug)), entry.slug);
  assert(!entry.practiceSection || sections.has(entry.practiceSection), entry.slug);
  assert(!entry.collectionSlug || projectCollections.some(collection => collection.slug === entry.collectionSlug), entry.slug);
}
const validChapter = ({ bookSlug, sectionSlug }) => bookSections.get(bookSlug)?.has(sectionSlug);
for (const item of capabilities) assert(validChapter(item.reference), item.title);
for (const [index, item] of foundingResources.entries()) {
  assert.equal(item.sequence, index + 1);
  assert.equal(item.id, 'hap-' + String(index + 1).padStart(3, '0'));
  assert(item.tags.length && item.tags.every(tag => capabilitySlugs.has(tag)), item.title);
  if (!item.release) continue;
  const release = item.release;
  assert(Number.isFinite(Date.parse(release.publishedAt)), item.title);
  assert(/^\d+\.\d+$/.test(release.version), item.title);
  assert(release.duration.trim() && release.example.trim(), item.title);
  assert(release.objectives.length && release.objectives.every(entry => entry.trim()), item.title);
  assert(release.instructions.length && release.instructions.every(entry => entry.trim()), item.title);
  assert(release.chapters.length && release.chapters.every(validChapter), item.title);
  if (release.image) {
    assert(release.image.alt && release.image.width > 0 && release.image.height > 0, item.title);
    assert(fs.existsSync(path.join('public', release.image.src)), release.image.src);
  }
  for (const edition of release.editions ?? []) {
    assert.equal(fs.statSync(path.join('public', companionAssets, edition.filename)).size, edition.bytes);
  }
}

const origin = process.env.SITE_URL || 'http://localhost:3000';
const root = '/human-advantage';

async function html(route, status = 200) {
  const response = await fetch(origin + route);
  assert.equal(response.status, status, route);
  return (await response.text()).replace(/<!--.*?-->/g, '');
}

async function verify() {
  const overview = await html(root);
  const library = await html(root + '/books');
  const hub = await html(root + '/books/think-beyond-ai');
  const collection = await html(root + '/collections/think-beyond-ai-companion');
  const sitemap = await html('/sitemap.xml');
  const bookPage = await html('/books/think-beyond-ai');
  assert(overview.includes('href="/human-advantage/books/think-beyond-ai"'));
  const directory = overview.match(/class="ha-directory">([\s\S]*?)<\/main>/)?.[1];
  assert(directory && directory.includes('Explore this book'));
  assert.equal((directory.match(/<article /g) ?? []).length, projectBooks.length);
  assert.equal((directory.match(/<a /g) ?? []).length, projectBooks.length);
  assert(!directory.includes('<section') && !directory.includes('<form'));
  assert(library.includes('href="/human-advantage/books/think-beyond-ai"'));
  assert(hub.includes('href="/books/think-beyond-ai"'));
  assert(bookPage.includes('href="/human-advantage/books/think-beyond-ai"'));
  assert(!overview.includes('Show all 25 resources'));
  assert(hub.includes('Show all 25 resources'));
  assert(hub.indexOf('href="/books/think-beyond-ai/30-day-challenge"') > 0);
  assert(hub.indexOf('href="/books/think-beyond-ai/30-day-challenge"') < hub.indexOf('id="founding"'));
  for (const item of capabilities) {
    const detail = await html(root + '/capabilities/' + item.slug);
    assert(detail.includes(`href="/books/${item.reference.bookSlug}/${item.reference.sectionSlug}"`), item.title);
  }
  assert.equal((hub.match(/<li value="\d+"/g) ?? []).length, 25);
  assert.equal((collection.match(/<li value="\d+"/g) ?? []).length, 25);
  const filtered = await html(root + '/resources?q=worksheet&format=Worksheet&capability=independent-thinking');
  assert(filtered.includes('The Independent Thinking Worksheet'));
  assert(!filtered.includes('Systems Thinking Canvas'));
  assert((await html(root + '/books/think-beyond-ai?q=nomatchingresource')).includes('No resources match'));
  const available = await html(root + '/books/think-beyond-ai?status=available');
  for (const item of foundingResources.slice(0, 4)) {
    assert(isReleased(item), item.title);
    const route = resourcePath(item.slug);
    assert(hub.includes(`href="${route}"`), route);
    assert(collection.includes(`href="${route}"`), route);
    assert(available.includes(`href="${route}"`), route);
    const detail = await html(route);
    const release = item.release;
    assert(detail.includes('What you’ll learn') && detail.includes('How to use it'), route);
    if (release.image) {
      assert(detail.includes(`href="${release.image.src}"`), route);
      const res = await fetch(origin + release.image.src);
      assert.equal(res.status, 200, release.image.src);
      assert.match(res.headers.get('content-type'), /^image\//, release.image.src);
    }
    if (item.sequence === 4) assert.equal(release.editions.length, 4);
    for (const edition of release.editions ?? []) {
      const href = companionAssets + edition.filename;
      assert(detail.includes(`href="${href}" download=""`), href);
      const res = await fetch(origin + href);
      assert.equal(res.status, 200, href);
      assert.match(res.headers.get('content-type'), /^application\/pdf\b/, href);
      assert.deepEqual(Buffer.from(await res.arrayBuffer()), fs.readFileSync(path.join('content', 'ThinkBeyondAI', edition.filename)));
    }
  }
  for (const route of humanAdvantageRoutes()) assert(sitemap.includes(`<loc>https://thinksriram.com${route}</loc>`), route);
  for (const item of foundingResources.filter(item => !isReleased(item))) {
    const route = resourcePath(item.slug);
    assert(!hub.includes(`href="${route}"`));
    assert(!sitemap.includes(`<loc>https://thinksriram.com${route}</loc>`));
    await html(route, 404);
  }
  for (const [slug, items] of [['podcasts', episodes()], ['videos', videos()]]) {
    if (!items.length) {
      assert(!overview.includes(`href="${root}/${slug}"`));
      assert(!sitemap.includes(`<loc>https://thinksriram.com${root}/${slug}</loc>`));
    }
  }
  console.log('PASS: project library, book hub and reader links, collection sequence, hub expansion, filters, planned route exclusion and sitemap.');
}

verify().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
