import { Fragment, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { bookPath, challengeDay, type Book, type BookBlock, type BookRun, type BookSection } from '@/lib/books';

export function BookCover({ book }: { book: Book }) {
  return <Image className="book-cover" src={bookPath(book, 'cover.png')} {...book.cover}
    sizes="(max-width: 520px) 185px, 265px" alt={`Cover of ${book.title}`} />;
}

export function BookContents({ book, active }: { book: Book; active?: string }) {
  const groups: { heading: BookSection; children: BookSection[] }[] = [];
  let part: (typeof groups)[number] | undefined;
  for (const section of book.sections) {
    if (part && (/^chapter-/.test(section.slug) || section.slug === '30-day-challenge')) {
      part.children.push(section);
    } else {
      const group = { heading: section, children: [] };
      groups.push(group);
      part = section.slug.startsWith('part-') ? group : undefined;
    }
  }
  const sectionLink = (section: BookSection, heading = false) =>
    <Link className={heading ? 'book-toc-label' : undefined} href={bookPath(book, section.slug)}
      aria-current={active === section.slug ? 'page' : undefined}>{section.label}</Link>;
  return <nav aria-label="Book contents" className="book-toc"><ul>
    {groups.map(({ heading, children }) => <li className="book-toc-group" key={heading.slug}>
      {sectionLink(heading, children.length > 0)}
      {children.length > 0 && <ul>{children.map(section => <li key={section.slug}>{sectionLink(section)}</li>)}</ul>}
    </li>)}
  </ul></nav>;
}

type References = {
  citations: Map<string, string>;
  inline: RegExp;
};

const specialSources = [
  ['Aristotle. Metaphysics', 'Metaphysics'],
  ['Aristotle. Nicomachean Ethics', 'Nicomachean Ethics'],
  ['The Bhagavadgītā', 'Bhagavad Gita'],
  ['Mata v. Avianca', 'Mata v. Avianca, Inc. (2023)'],
  ['Mata v. Avianca', 'Mata v. Avianca'],
  ['Plato. Apology', 'Apology'],
  ['Plato. Phaedrus', 'Phaedrus'],
  ['Thiruvalluvar.', 'Tirukkural'],
] as const;

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function makeReferences(book: Book): References {
  const citations = new Map<string, string>();
  const patterns = new Set<string>();
  for (const block of book.sections.find(section => section.slug === 'references')?.blocks ?? []) {
    if (!('runs' in block) || !block.id) continue;
    const text = block.runs.map(run => run.text).join('');
    const href = `${bookPath(book, 'references')}#${block.id}`;
    const aliases = specialSources.filter(([start]) => text.startsWith(start));
    if (aliases.length) {
      for (const [, alias] of aliases) {
        citations.set(alias.toLowerCase(), href);
        patterns.add(escapeRegex(alias));
      }
      continue;
    }
    const author = text.split(',')[0];
    const year = text.match(/\(((?:18|19|20)\d{2})[),]/)?.[1];
    if (!year) continue;
    citations.set(`${author.toLowerCase()} ${year}`, href);
    patterns.add(`${escapeRegex(author)}(?: et al\\.|[^().;]{0,55})? \\(${year}\\)`);
  }
  return {
    citations,
    inline: new RegExp(`(?<![\\p{L}])(?:Chapter \\d+|https?://[^\\s]+|${[...patterns].join('|')})(?![\\p{L}])`, 'giu'),
  };
}

function citationHref(text: string, references: References) {
  const exact = references.citations.get(text.toLowerCase());
  if (exact) return exact;
  const year = text.match(/\((\d{4})\)$/)?.[1];
  if (!year) return undefined;
  const author = text.split(/[ ,]/)[0];
  return references.citations.get(`${author.toLowerCase()} ${year}`);
}

function linkText(text: string, book: Book, references: References): ReactNode[] {
  const parts: ReactNode[] = [];
  let offset = 0;
  for (const match of text.matchAll(references.inline)) {
    const index = match.index ?? 0;
    const label = match[0].replace(/^(https?:\/\/\S+?)[.,;]+$/, '$1');
    const chapter = label.match(/^Chapter (\d+)$/i)?.[1];
    const href = /^https?:\/\//i.test(label) ? label
      : chapter && book.sections.some(section => section.slug === `chapter-${chapter}`)
        ? bookPath(book, `chapter-${chapter}`)
        : citationHref(label, references);
    parts.push(text.slice(offset, index));
    parts.push(href ? <a key={index} href={href}>{label}</a> : label);
    offset = index + label.length;
  }
  parts.push(text.slice(offset));
  return parts;
}

function BookInline({ runs, book, references }: { runs: BookRun[]; book: Book; references: References }) {
  return runs.map((run, index) => {
    let text: ReactNode = run.href ? <a href={run.href}>{run.text}</a> : linkText(run.text, book, references);
    if (run.sup) text = <sup>{text}</sup>;
    if (run.italic) text = <em>{text}</em>;
    if (run.bold) text = <strong>{text}</strong>;
    return <Fragment key={index}>{text}</Fragment>;
  });
}

export function BookText({ book, section }: { book: Book; section: BookSection }) {
  const references = makeReferences(book);
  const inline = (runs: BookRun[]) => <BookInline runs={runs} book={book} references={references} />;
  const elements: ReactNode[] = [];
  for (let index = 0; index < section.blocks.length; index++) {
    const block: BookBlock = section.blocks[index];
    if (block.type === 'table') {
      const [header, ...rows] = block.rows;
      elements.push(<div className="book-table" key={index} tabIndex={0} role="region" aria-label={header.join(', ')}><table>
        <thead><tr>{header.map((cell, column) => <th scope="col" key={column}>{cell}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, column) =>
          column === 0 ? <th scope="row" key={column}>{cell}</th> : <td key={column}>{linkText(cell, book, references)}</td>
        )}</tr>)}</tbody>
      </table></div>);
    } else if (block.type === 'figure') {
      elements.push(<figure key={index}>
        <Image src={bookPath(book, block.src)} width={block.width} height={block.height}
          sizes="(max-width: 760px) 90vw, 600px" alt={block.description[0] ?? block.caption} />
        <figcaption>{block.caption}</figcaption>
        <details className="book-figure-text"><summary>Diagram text</summary>
          {block.description.map((line, lineIndex) => <p key={lineIndex}>{line}</p>)}
        </details>
      </figure>);
    } else if (block.type === 'ol' || block.type === 'ul') {
      const start = index;
      const items = [];
      while (index < section.blocks.length) {
        const item = section.blocks[index];
        if (!('runs' in item) || item.type !== block.type) break;
        if (item.type === 'ol' && items.length && item.number !== (block.number ?? 1) + items.length) break;
        const sourceGroup = section.slug === 'references'
          ? item.runs.map(run => run.text).join('').match(/^(Introduction|Chapter \d+):/)?.[1]
          : undefined;
        items.push(<li key={index} id={sourceGroup?.toLowerCase().replace(' ', '-')}>{inline(item.runs)}</li>);
        index++;
      }
      index--;
      elements.push(block.type === 'ol'
        ? <ol key={start} start={block.number}>{items}</ol> : <ul key={start}>{items}</ul>);
    } else {
      const Tag = block.type === 'quote' ? 'blockquote' : block.type;
      const day = section.slug === '30-day-challenge' ? challengeDay(block) : undefined;
      elements.push(<Tag key={index} id={day?.id ?? block.id}>{inline(block.runs)}</Tag>);
    }
  }
  return <div className="book-text">{elements}</div>;
}

export function ChallengeContents({ section }: { section: BookSection }) {
  const days = section.blocks.flatMap(block => {
    const day = challengeDay(block);
    return day ? [day] : [];
  });
  return <nav className="book-challenge-contents" aria-labelledby="challenge-days">
    <h2 id="challenge-days">Jump to a day</h2>
    <ul>{days.map(({ id, number, title }) => <li key={id}>
      <a href={`#${id}`} aria-label={`Day ${number} — ${title}`}>{number}</a>
    </li>)}</ul>
  </nav>;
}
