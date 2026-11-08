import Link from 'next/link';
export const metadata = { title: 'Commercial Resources', description: 'Existing Career Intelligence guides, assessments, reports, and bundles, separate from Think Sriram editorial writing.', alternates: { canonical: '/resources' } };
const resources = [
  { title: 'Career Intelligence', body: 'An introduction to the collection and where to begin.', href: '/careers' },
  { title: 'Assessments', body: 'Compare structured reviews of role exposure and career positioning.', href: '/assessments' },
  { title: 'Guides', body: 'Role-specific resources for skills, relevance, and your next move.', href: '/guides' },
  { title: 'Reports', body: 'Explore existing career and labour-market research reports.', href: '/reports' },
  { title: 'Bundles', body: 'Compare related resources offered together.', href: '/bundles' },
  { title: 'Free resources', body: 'Start with a free guide or the AI exposure check.', href: '/free' }
];
export default function Resources() {
  return <div className="shell page-content"><header className="page-heading"><p className="eyebrow">A SEPARATE RESOURCE COLLECTION</p><h1>Commercial Resources</h1><p>Existing Career Intelligence guides, assessments, and reports by Sriram Advisory, available through Think Sriram. Some resources are paid; prices, delivery details, and terms are shown on their pages.</p><p>For independent editorial perspectives, visit <Link href="/topics/career-intelligence">Career Intelligence writing</Link>.</p></header>
    <div className="editorial-grid">{resources.map(resource => <article className="editorial-card" key={resource.href}><h2>{resource.title}</h2><p>{resource.body}</p><Link href={resource.href}>Explore {resource.title.toLowerCase()} →</Link></article>)}</div>
    <aside className="collection-note"><h2>Before purchasing</h2><p>Review what is included, how delivery works, and whether a resource fits your needs. Assessments support judgment and do not guarantee career outcomes.</p><div className="inline-links"><Link href="/refund">Delivery &amp; refunds</Link><Link href="/purchase-terms">Purchase terms</Link><Link href="/contact?interest=career">Ask a resource question</Link></div></aside>
  </div>;
}
