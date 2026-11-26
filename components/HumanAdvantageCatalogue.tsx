import Link from 'next/link';
import { capabilities, projectResources, isReleased, resourcePath, type HumanResource } from '@/lib/human-advantage';

export type CatalogueQuery = Record<string, string | string[] | undefined>;

function CatalogueRows({ resources }: { resources: HumanResource[] }) {
  return <ol className="ha-catalogue-list">
    {resources.map(resource => <li value={resource.sequence} key={resource.id}>
      <div className="ha-row-meta"><span>{resource.format}</span><span>{isReleased(resource) ? 'Available' : 'Coming soon'}</span></div>
      <h3>{isReleased(resource) ? <Link href={resourcePath(resource.slug)}>{resource.title}</Link> : resource.title}</h3>
      <p>{resource.summary}</p>
      {!isReleased(resource) && <small>Development status: {resource.development}</small>}
    </li>)}
  </ol>;
}

export function HumanAdvantageCatalogue({ query, path, resources = projectResources, compact = false }: {
  query: CatalogueQuery; path: string; resources?: HumanResource[]; compact?: boolean;
}) {
  const formats = [...new Set(resources.map(resource => resource.format))];
  const get = (key: string) => typeof query[key] === 'string' ? query[key].trim() : '';
  const q = get('q').slice(0, 160);
  const format = get('format');
  const capability = get('capability');
  const status = get('status');
  const action = compact ? path + '#founding' : path;
  const filtered = resources.filter(resource => {
    const searchable = [resource.title, resource.summary, ...capabilities.filter(item => resource.tags.some(tag => tag === item.slug)).map(item => item.title),
      ...(isReleased(resource) ? resource.release?.objectives ?? [] : [])].join(' ').toLowerCase();
    return q.toLowerCase().split(/\s+/).every(term => searchable.includes(term)) &&
      (!format || resource.format === format) && (!capability || resource.tags.some(tag => tag === capability)) &&
      (!status || (status === 'available' ? isReleased(resource) : status === 'coming-soon' && !isReleased(resource)));
  });
  return <div>
    <form className="ha-filters" action={action} role="search" aria-label="Search learning resources">
      <label className="ha-search">Search resources<input type="search" name="q" defaultValue={q} maxLength={160} placeholder="For example, worksheet" /></label>
      <label>Format<select aria-label="Format" name="format" defaultValue={format}><option value="">All formats</option>
        {formats.map(item => <option key={item}>{item}</option>)}
      </select></label>
      <label>Publication status<select aria-label="Publication status" name="status" defaultValue={status}>
        <option value="">All statuses</option><option value="available">Available</option><option value="coming-soon">Coming soon</option>
      </select></label>
      <label>Capability<select aria-label="Capability" name="capability" defaultValue={capability}><option value="">All capabilities</option>
        {capabilities.map(item => <option key={item.slug} value={item.slug}>{item.title}</option>)}
      </select></label>
      <div className="ha-filter-actions"><button className="brand-button">Apply filters</button><Link href={action}>Reset filters</Link></div>
    </form>
    <p className="ha-result-count" role="status">{filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}</p>
    {filtered.length === 0 ? <p>No resources match these filters. <Link href={action}>Show all resources</Link>.</p> : <>
      <CatalogueRows resources={compact ? filtered.slice(0, 6) : filtered} />
      {compact && filtered.length > 6 && <details className="ha-expand">
        <summary>{filtered.length === resources.length ? `Show all ${filtered.length} resources` : `Show all ${filtered.length} matching resources`}</summary>
        <CatalogueRows resources={filtered.slice(6)} />
      </details>}
    </>}
  </div>;
}
