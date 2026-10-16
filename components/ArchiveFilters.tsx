"use client";
import Link from "next/link";

export function ArchiveFilters({ query, topic, year, series, topics, years, seriesOptions }: {
  query: string; topic: string; year: string; series: string;
  topics: { slug: string; label: string }[]; years: string[]; seriesOptions: { slug: string; label: string }[];
}) {
  return <form className="filters" action="/writing" role="search">
    <label className="search-field" htmlFor="writing-search">Search articles
      <input id="writing-search" type="search" name="q" defaultValue={query} placeholder="Title, subject or words in an article" />
    </label>
    <label>Topic<select name="topic" defaultValue={topic} onChange={event => event.currentTarget.form?.requestSubmit()}>
      <option value="">All topics</option>{topics.map(item => <option key={item.slug} value={item.slug}>{item.label}</option>)}
    </select></label>
    <label>Year<select name="year" defaultValue={year} onChange={event => event.currentTarget.form?.requestSubmit()}>
      <option value="">All years</option>{years.map(item => <option key={item}>{item}</option>)}
    </select></label>
    <label>Series<select name="series" defaultValue={series} onChange={event => event.currentTarget.form?.requestSubmit()}>
      <option value="">All writing</option><option value="standalone">Outside a series</option>
      {seriesOptions.map(item => <option value={item.slug} key={item.slug}>{item.label}</option>)}
    </select></label>
    <button type="submit">Search</button>
    {(query || topic || year || series) && <Link href="/writing">Clear filters</Link>}
  </form>;
}
