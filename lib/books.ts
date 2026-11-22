import type { Metadata } from 'next';
import thinkBeyondAI from '@/content/books/think-beyond-ai.json';

export type BookRun = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  sup?: boolean;
  href?: string;
};

export type TextBlock = {
  type: 'p' | 'h2' | 'h3' | 'quote' | 'ol' | 'ul';
  runs: BookRun[];
  number?: number;
  id?: string;
};

export type BookBlock = TextBlock | {
  type: 'figure';
  src: string;
  width: number;
  height: number;
  caption: string;
  description: string[];
} | { type: 'table'; rows: string[][] };

export type BookSection = {
  slug: string;
  label: string;
  prefix: string;
  title: string;
  blocks: BookBlock[];
};

type Book = {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  series: string;
  description: string;
  blurb: string[];
  backCoverTitle: string;
  backCoverCredit: string[];
  pdf: string;
  cover: { width: number; height: number };
  sections: BookSection[];
};

export const books = [thinkBeyondAI as Book];

export function getBook(slug: string) {
  return books.find(book => book.slug === slug);
}

export function bookPath(book: Book, section?: string) {
  return `/books/${book.slug}${section ? '/' + section : ''}`;
}

export function challengeDay(block: BookBlock) {
  if (block.type !== 'h3') return;
  const heading = block.runs.map(run => run.text).join('');
  const match = heading.match(/^DAY (\d+) \/ (.+)$/);
  if (match) return { id: `day-${match[1]}`, number: Number(match[1]), title: match[2] };
}

export function bookMetadata(book: Book, section?: BookSection): Metadata {
  const title = section ? `${section.title} · ${book.title}` : `${book.title}: ${book.subtitle}`;
  const firstParagraph = section?.blocks.find(block => block.type === 'p');
  const excerpt = firstParagraph && 'runs' in firstParagraph
    ? firstParagraph.runs.map(run => run.text).join('').match(/^.{1,158}(?=\s|$)/)?.[0]
    : undefined;
  const description = excerpt
    ? excerpt + (excerpt.length < 120 || /[.!?]$/.test(excerpt) ? '' : '…')
    : section ? `Read ${section.label} in ${book.title} by ${book.author}.` : book.description;
  const url = bookPath(book, section?.slug);
  const images = [{ url: bookPath(book, 'cover.png'), ...book.cover, alt: `${book.title} book cover` }];
  return {
    title, description, alternates: { canonical: url },
    openGraph: { title, description, url, images, type: 'website', siteName: 'Think Sriram' },
    twitter: { card: 'summary_large_image', title, description, images: images.map(image => image.url) },
  };
}

export type { Book };
