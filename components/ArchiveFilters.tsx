import Link from "next/link";

export function ArchiveFilters({ query, topic, year, series, topics, years, seriesOptions }: {
  query: string; topic: string; year: string; series: string;
  topics: { slug: string; label: string }[]; years: string[]; seriesOptions: { slug: string; label: string }[];
}) {
  const selectedFilters = Number(!!topic) + Number(!!year) + Number(!!series);
  return <form className="filters archive-filters" action="/writing" role="search">
    <div className="archive-search">
      <label htmlFor="writing-search">Search articles
        <input id="writing-search" type="search" name="q" defaultValue={query} placeholder="Title or keyword" />
      </label>
      <button type="submit">Search</button>
    </div>
    <details className="archive-filter-details">
      <summary>Filters{selectedFilters > 0 && ` (${selectedFilters})`}</summary>
      <div className="archive-filter-fields">
        <label>Topic<select name="topic" defaultValue={topic}>
          <option value="">All topics</option>{topic && !topics.some(item => item.slug === topic) && <option value={topic}>Legacy topic: {topic.replaceAll('-', ' ')}</option>}{topics.map(item => <option key={item.slug} value={item.slug}>{item.label}</option>)}
        </select></label>
        <label>Year<select name="year" defaultValue={year}>
          <option value="">All years</option>{years.map(item => <option key={item}>{item}</option>)}
        </select></label>
        <label>Series<select name="series" defaultValue={series}>
          <option value="">All writing</option><option value="standalone">Outside a series</option>
          {seriesOptions.map(item => <option value={item.slug} key={item.slug}>{item.label}</option>)}
        </select></label>
      </div>
    </details>
    {(query || topic || year || series) && <Link href="/writing">Clear filters</Link>}
  </form>;
}
