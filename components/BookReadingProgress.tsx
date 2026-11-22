'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const storageKey = (book: string) => `think-sriram:reading:${book}`;

export function RememberBookSection({ book, section }: { book: string; section: string }) {
  useEffect(() => {
    try {
      localStorage.setItem(storageKey(book), section);
    } catch {
      // The reader can still navigate when browser storage is unavailable.
    }
  }, [book, section]);
  return null;
}

type Destination = { slug: string; label: string };

export function BookReadingActions({ book, sections }: { book: string; sections: Destination[] }) {
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    try {
      setSaved(localStorage.getItem(storageKey(book)));
    } catch {
      setSaved(null);
    }
  }, [book]);

  const resume = sections.find(section => section.slug === saved);
  const start = sections[0];
  return <>
    {resume && <Link className="book-primary" href={`/books/${book}/${resume.slug}`}
      aria-label={`Continue reading: ${resume.label}`}>Continue reading</Link>}
    {(!resume || resume.slug !== start.slug) && <Link className={resume ? undefined : 'book-primary'}
      href={`/books/${book}/${start.slug}`}>Start reading</Link>}
  </>;
}
