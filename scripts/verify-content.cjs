const fs = require('fs'), vm = require('vm'), ts = require('typescript'), assert = require('node:assert/strict'), path = require('path');
const contentRoot = path.join(process.cwd(), 'content');
const source = ts.transpileModule(fs.readFileSync('lib/content.ts', 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText;
function load(mockFs) {
  const exports = {};
  vm.runInNewContext(source, { exports, require: n => n === 'node:fs' && mockFs ? mockFs : require(n), process, Date, Intl, console });
  return exports;
}
function files(items) {
  const relative = p => path.relative(contentRoot, p).split(path.sep).join('/');
  return load({
    existsSync: p => { const dir = relative(p); return Object.keys(items).some(key => !dir || key.startsWith(dir + '/')); },
    readdirSync: p => {
      const dir = relative(p), prefix = dir ? dir + '/' : '';
      const names = [...new Set(Object.keys(items).filter(key => key.startsWith(prefix)).map(key => key.slice(prefix.length).split('/')[0]))];
      return names.map(name => { const directory = Object.keys(items).some(key => key.startsWith(prefix + name + '/')); return { name, isDirectory: () => directory, isFile: () => !directory }; });
    },
    readFileSync: p => items[relative(p)],
    statSync: () => ({ mtime: new Date('2026-01-01T08:00:00Z') })
  });
}
function mdxFiles(dir) { return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? mdxFiles(path.join(dir, e.name)) : /\.mdx$/i.test(e.name) ? [path.join(dir, e.name)] : []); }
const content = load(), posts = content.getAllContent(), existing = mdxFiles(contentRoot);
assert.equal(new Set(posts.map(p => p.slug)).size, posts.length);
for (const file of existing) { const slug = fs.readFileSync(file, 'utf8').match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m)[1]; assert(posts.some(p => p.slug === slug), 'Existing MDX not public: ' + file); }
assert(posts.every(p => p.status === 'published' && +new Date(p.publishedAt) <= Date.now()));
assert(posts.every((p, i) => i === 0 || +new Date(posts[i - 1].publishedAt) >= +new Date(p.publishedAt)));
assert(posts.every(p => content.contentHref(p) === '/writing/' + p.slug));
const fixture = (status, date) => `---\ntitle: "Private fixture"\nslug: "private-fixture"\nstatus: "${status}"\npublishedAt: "${date}"\nexcerpt: "Private"\n---\nUnpublished body.`;
for (const [status, date, expected] of [['draft', '2020-01-01', 0], ['scheduled', '2020-01-01', 0], ['published', '2999-01-01', 0], ['published', 'bad-date', 0], ['published', '2020-01-01', 1]]) assert.equal(files({ 'any/deep/folder/fixture.mdx': fixture(status, date) }).getAllContent().length, expected, status + '/' + date);
const folded = fixture('published', '2020-01-01').replace('excerpt: "Private"', 'excerpt: >-\n  A folded\n  description.\nsources:\n  - https://example.org/source');
const yaml = files({ 'fixture.mdx': folded }).getAllContent()[0]; assert.equal(yaml.excerpt, 'A folded description.'); assert.equal(yaml.sources[0], 'https://example.org/source');
const plain = files({ 'my-first-note.txt': '\uFEFFMy first note\r\n\r\nA paragraph written in plain text.\r\n\r\nAnother paragraph.' }).getAllContent()[0];
assert.equal(plain.title, 'My first note'); assert.equal(plain.slug, 'my-first-note'); assert.equal(plain.excerpt, 'A paragraph written in plain text.'); assert.equal(plain.publishedAt, '2026-01-01T08:00:00.000Z');
assert.equal(files({ '_private.txt': 'Private\nSecret.', '_drafts/secret.mdx': fixture('published','2020-01-01'), '.hidden/secret.txt':'Hidden\nSecret.', 'empty.txt': '', 'title-only.txt': 'Only a title' }).getAllContent().length, 0);
const nested = files({ 'new/deep/note.mdx': '# A new MDX article\n\nNo frontmatter required.', 'another/text-note.txt':'Another note\n\nText still works.', 'new/partial.mdx':'---\ntitle: "Minimal metadata"\n---\nA complete article body.' }).getAllContent();
assert.equal(nested.length, 3); assert(nested.some(p => p.title === 'A new MDX article' && p.body === 'No frontmatter required.')); assert(nested.some(p => p.title === 'Minimal metadata' && p.body === 'A complete article body.'));
assert.equal(files({ '2026-01-02-a-note.txt':'A note\nThe body.', '2999-01-01-future.txt':'Future\nHidden.' }).getAllContent().length, 1);
assert(files({ '\u0b92\u0bb0\u0bc1.txt':'Unicode title\nA reflection.' }).getAllContent()[0].slug.length > 0);
assert.throws(() => files({ 'one note.txt':'First\nFirst body.', 'nested/one-note.txt':'Second\nSecond body.' }).getAllContent(), /same URL/);
const blocks = content.renderMarkdown('First paragraph.\r\nSame paragraph.\r\n\r\n## A heading\r\nNext paragraph.\r\n- First item\r\n- Second item\r\n1. Step one\r\n2. Step two'); assert.equal(blocks[0].text, 'First paragraph. Same paragraph.'); assert.equal(blocks[1].type, 'h2'); assert.equal(blocks[3].type, 'ul'); assert.equal(blocks[4].type, 'ol');
console.log(`PASS: all ${existing.length} existing MDX articles are published; recursive MDX/text discovery, optional metadata, private/draft/future protection, unique URLs and readable formatting.`);
