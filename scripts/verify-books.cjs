const assert = require('node:assert/strict');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const books = [
  require('../content/books/think-beyond-ai.json'),
  require('../content/books/before-you-reach-a-conclusion.json'),
];

const origin = process.env.SITE_URL || 'http://localhost:3000';

async function request(route) {
  const response = await fetch(origin + route);
  assert.equal(response.status, 200, route);
  return response;
}

async function html(route) {
  return (await (await request(route)).text()).replace(/<!--.*?-->/g, '');
}

async function verifyBook(book, library, sitemap) {
  const bookUrl = '/books/' + book.slug;
  const overview = await html(bookUrl);
  assert(library.includes(`href="${bookUrl}"`));
  assert(overview.includes('Start reading'));

  let references;
  for (const [index, section] of book.sections.entries()) {
    const route = `${bookUrl}/${section.slug}`;
    const page = await html(route);
    assert(overview.includes(`href="${route}"`), `Missing contents link for ${route}`);
    assert(page.includes(`rel="canonical" href="https://thinksriram.com${route}"`), route);
    assert(sitemap.includes(`<loc>https://thinksriram.com${route}</loc>`), route);

    for (const [offset, rel] of [[-1, 'prev'], [1, 'next']]) {
      const adjacent = book.sections[index + offset];
      if (adjacent) assert(page.includes(`rel="${rel}" href="${bookUrl}/${adjacent.slug}"`), route);
    }

    if (section.slug === 'references') references = page;
    if (section.slug.startsWith('appendix-')) {
      assert(page.includes('<table>'), route);
      const table = section.blocks.find(block => block.type === 'table');
      assert.equal(table.rows.length, section.slug === 'appendix-a' ? 11 : 9);
    }
    if (section.slug === '30-day-challenge') {
      for (let day = 1; day <= 30; day++) {
        assert(page.includes(`href="#day-${day}"`), `Missing jump link for day ${day}`);
        const heading = page.match(new RegExp(`<h3 id="day-${day}">([^]*?)</h3>`))?.[1];
        assert(heading?.replace(/<[^>]*>/g, '').startsWith(`DAY ${day} /`), `Missing heading for day ${day}`);
      }
    }
  }

  assert(references);
  const sourceTargets = book.slug === 'think-beyond-ai' ? new Map([
    ['Bastani et al. (2025)', 'Bastani, H.'],
    ['Lee et al. (2025)', 'Lee, H.-P.'],
    ['Becker et al. (2025)', 'Becker, J., Rush, N., Barnes'],
    ['Becker et al. (2026)', 'Becker, J., Rush, N., Cunningham'],
    ['Kahneman &amp; Klein (2009)', 'Kahneman, D., &amp; Klein'],
    ['Brynjolfsson, Li &amp; Raymond (2025)', 'Brynjolfsson, E.'],
    ['Nicomachean Ethics', 'Aristotle.'],
  ]) : new Map();
  for (const [label, author] of sourceTargets) {
    const citation = [...references.matchAll(/href="[^"]*\/references#(source-\d+)">([^<]+)<\/a>/g)]
      .find(([, , name]) => name === label);
    assert(citation, `Missing citation link for ${label}`);
    assert(references.includes(`id="${citation[1]}">${author}`), `Wrong source for ${label}`);
  }
  for (const [, id] of references.matchAll(/href="[^"]*\/references#(source-\d+)"/g)) {
    assert(references.includes(`id="${id}"`), `Missing bibliography entry #${id}`);
  }
  if (book.slug === 'think-beyond-ai') assert(references.includes('href="https://doi.org/10.3102/0034654314551063"'));
  if (book.slug === 'before-you-reach-a-conclusion') {
    for (let chapter = 1; chapter <= 15; chapter++) assert(references.includes(`id="chapter-${chapter}"`));
    assert(references.includes('href="https://quoteinvestigator.com/2011/07/22/keynes-change-mind/"'));
  }

  const pdfPath = `${bookUrl}/${book.pdf}`;
  assert(overview.includes(`href="${pdfPath}" download=""`));
  const pdf = await request(pdfPath);
  assert.match(pdf.headers.get('content-type'), /^application\/pdf\b/);
  const original = await readFile(path.join(__dirname, '..', book.pdf));
  assert.deepEqual(Buffer.from(await pdf.arrayBuffer()), original);

  console.log(`PASS: ${book.title}, section links, canonical URLs, sitemap, references, and original PDF.`);
}

async function verify() {
  const [home, library, sitemap] = await Promise.all(['/', '/books', '/sitemap.xml'].map(html));
  assert(home.includes('href="/books"'));
  for (const book of books) await verifyBook(book, library, sitemap);
}

verify().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
