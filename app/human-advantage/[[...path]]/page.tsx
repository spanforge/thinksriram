import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookCover } from '@/components/BookReader';
import { HumanAdvantageCatalogue, type CatalogueQuery } from '@/components/HumanAdvantageCatalogue';
import { ProjectAudio, ProjectVideoPlayer } from '@/components/HumanAdvantageMedia';
import { bookPath, getBook, type Book } from '@/lib/books';
import { formatDate } from '@/lib/content';
import { capabilities, capabilityPath, companionAssets, humanAdvantageDescription, humanAdvantagePath, humanAdvantageTitle,
  isReleased, projectBookPath, projectBooks, projectCollectionPath, projectCollections, projectLibraryPath,
  projectResources, resourcePath, type BookReference, type HumanResource } from '@/lib/human-advantage';
import { episodes, videos } from '@/lib/human-advantage-media';
import { base } from '@/lib/site';

const root = humanAdvantagePath;
const resources = root + '/resources';
const podcastTitle = 'The Human Advantage Podcast';
const videoTitle = 'The Human Advantage Video Library';
type Props = { params: Promise<{ path?: string[] }>; searchParams: Promise<CatalogueQuery> };

function findPage(path: string[]) {
  const [section, slug] = path;
  if (path.length > 2) return;
  const canonical = path.length ? `${root}/${path.join('/')}` : root;
  if (!section) return { kind: 'overview', title: humanAdvantageTitle, description: humanAdvantageDescription, canonical } as const;
  if (section === 'books') {
    if (!slug) return { kind: 'books', title: 'Human Advantage books', description: 'Explore the books and their companion learning materials.', canonical } as const;
    const entry = projectBooks.find(item => item.slug === slug);
    const volume = entry && getBook(entry.slug);
    if (entry && volume) return { kind: 'book', title: volume.title, description: entry.blurb, canonical, entry, volume } as const;
  }
  if (section === 'resources') {
    if (!slug) return { kind: 'resources', title: 'Learning resources', description: 'Find practical resources by format, capability and availability.', canonical } as const;
    const resource = projectResources.find(item => item.slug === slug && isReleased(item));
    if (resource) return { kind: 'resource', title: resource.title, description: resource.summary, canonical, resource } as const;
  }
  if (section === 'capabilities') {
    if (!slug) return { kind: 'capabilities', title: 'Thinking capabilities', description: 'Explore eight ways to practise thinking and judgment.', canonical } as const;
    const capability = capabilities.find(item => item.slug === slug);
    if (capability) return { kind: 'capability', title: capability.title, description: capability.summary, canonical, capability } as const;
  }
  if (section === 'collections') {
    if (!slug) return { kind: 'collections', title: 'Learning collections', description: 'Browse collections from The Human Advantage Project.', canonical } as const;
    const collection = projectCollections.find(item => item.slug === slug);
    if (collection) return { kind: 'collection', title: collection.title, description: collection.description, canonical, collection } as const;
  }
  if (section === 'podcasts') {
    if (!slug) return { kind: 'podcasts', title: podcastTitle, description: 'Conversations and reflections on thinking, learning and judgment.', canonical, available: episodes().length > 0 } as const;
    const episode = episodes().find(item => item.slug === slug);
    if (episode) return { kind: 'episode', title: episode.title, description: episode.summary, canonical, episode } as const;
  }
  if (section === 'videos') {
    if (!slug) return { kind: 'videos', title: videoTitle, description: 'Watch explanations and practical demonstrations.', canonical, available: videos().length > 0 } as const;
    const video = videos().find(item => item.slug === slug);
    if (video) return { kind: 'video', title: video.title, description: video.summary, canonical, video } as const;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = findPage((await params).path ?? []);
  if (!page) return {};
  const image = page.kind === 'resource' ? page.resource.release?.image : undefined;
  return {
    title: page.title, description: page.description, alternates: { canonical: page.canonical },
    robots: 'available' in page && !page.available ? { index: false, follow: true } : undefined,
    openGraph: { title: page.title, description: page.description, url: page.canonical, type: 'website',
      siteName: 'Think Sriram', images: image
        ? [{ url: image.src, width: image.width, height: image.height, alt: image.alt }] : page.kind === 'book'
        ? [{ url: bookPath(page.volume, 'cover.png'), ...page.volume.cover, alt: `Cover of ${page.volume.title}` }]
        : [{ url: '/opengraph-image', width: 1200, height: 630 }] },
  };
}

function Breadcrumb({ title }: { title: string }) {
  return <nav className="ha-crumb" aria-label="Breadcrumb">
    <Link href={root}>Human Advantage</Link> <span aria-hidden="true">/</span> <span aria-current="page">{title}</span>
  </nav>;
}

function ChapterLink({ reference, includeBook = false }: { reference: BookReference; includeBook?: boolean }) {
  const volume = getBook(reference.bookSlug);
  const section = volume?.sections.find(item => item.slug === reference.sectionSlug);
  return volume && section ? <Link href={bookPath(volume, section.slug)}>
    {includeBook && `${volume.title}: `}{section.label}
  </Link> : null;
}

function ProjectBookCards() {
  return <div className="ha-book-grid">{projectBooks.map(entry => {
    const volume = getBook(entry.slug);
    if (!volume) return null;
    return <article className="ha-card ha-book ha-directory-book" key={entry.slug}>
      <BookCover book={volume} />
      <div><h2>{volume.title}</h2>
        <p>{entry.blurb}</p><div className="ha-links"><Link href={projectBookPath(volume.slug)}
          aria-label={`Explore this book: ${volume.title}`}>Explore this book</Link></div>
      </div>
    </article>;
  })}</div>;
}

function ProjectBookHub({ volume, entry, query }: { volume: Book; entry: typeof projectBooks[number]; query: CatalogueQuery }) {
  const collection = projectCollections.find(item => item.slug === entry.collectionSlug);
  const relatedMedia = [
    ...episodes().filter(item => item.bookSlugs?.includes(volume.slug)).map(item => ({ ...item, href: root + '/podcasts/' + item.slug })),
    ...videos().filter(item => item.bookSlugs?.includes(volume.slug)).map(item => ({ ...item, href: root + '/videos/' + item.slug })),
  ];
  return <>
    <header className="ha-book ha-hub-intro">
      <BookCover book={volume} />
      <div>
        <h1>{volume.title}</h1>
        <p className="ha-hub-byline">{volume.subtitle} · {volume.author}</p>
        <p>{entry.blurb}</p>
        <Link className="brand-button" href={bookPath(volume)}>Read the book for free</Link>
      </div>
    </header>
    {(entry.startingSections.length > 0 || entry.practiceSection) && <div className="ha-section ha-hub-actions">
      {entry.startingSections.length > 0 && <section>
        <h2>Start here</h2>
        <ol>{entry.startingSections.map(sectionSlug => <li key={sectionSlug}>
          <ChapterLink reference={{ bookSlug: volume.slug, sectionSlug }} />
        </li>)}</ol>
      </section>}
      {entry.practiceSection && <section>
        <h2>Put it into practice</h2>
        <p><ChapterLink reference={{ bookSlug: volume.slug, sectionSlug: entry.practiceSection }} /></p>
      </section>}
    </div>}
    {collection && <section className="ha-section" id="founding">
      <h2>{collection.title}</h2><p>{collection.description}</p>
      <HumanAdvantageCatalogue query={query} path={projectBookPath(volume.slug)} resources={collection.resources} compact />
      <div className="ha-links"><Link href={projectCollectionPath(collection.slug)}>Open the full collection</Link></div>
    </section>}
    {relatedMedia.length > 0 && <section className="ha-section"><h2>Listen and watch</h2>
      <ul>{relatedMedia.map(item => <li key={item.href}><Link href={item.href}>{item.title}</Link></li>)}</ul>
    </section>}
    <p className="ha-links"><Link href={projectLibraryPath}>All Human Advantage books</Link></p>
  </>;
}

function ProjectOverview() {
  return <div className="ha-directory">
    <h1>{humanAdvantageTitle}</h1>
    <ProjectBookCards />
  </div>;
}

function ResourceMaterial({ resource }: { resource: HumanResource }) {
  const release = resource.release;
  if (!release) return null;
  return <>
    {release.post?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    {release.image && <figure className="ha-resource-image">
      <Image {...release.image} sizes="(max-width: 760px) 90vw, 720px" />
      <figcaption><a href={release.image.src} aria-label={`Open full-size image for ${resource.title}`}>Open full-size image</a></figcaption>
    </figure>}
    {!!release.editions?.length && <section className="ha-resource-editions" aria-labelledby="worksheet-editions">
      <h2 id="worksheet-editions">Worksheet downloads</h2>
      <div className="ha-grid ha-edition-grid">{release.editions.map(edition => {
        const href = companionAssets + edition.filename;
        const label = `${edition.title}, ${edition.mode.toLowerCase()}`;
        return <article className="ha-card" key={edition.filename}>
          <h3>{edition.title} · {edition.mode}</h3>
          <p>{edition.pages} {edition.pages === 1 ? 'page' : 'pages'} · {(edition.bytes / 1024).toFixed(1)} KB · PDF · v{release.version}</p>
          <div className="ha-links">
            <a href={href} aria-label={`Open PDF: ${label}`}>Open PDF</a>
            <a href={href} download aria-label={`Download PDF: ${label}`}>Download PDF</a>
          </div>
        </article>;
      })}</div>
    </section>}
  </>;
}

function CompanionLinks({ resource }: { resource: HumanResource }) {
  const collection = projectCollections.find(item => item.resources.some(member => member.id === resource.id));
  const available = collection?.resources.filter(isReleased) ?? [];
  const index = available.findIndex(item => item.id === resource.id);
  const next = available[index + 1];
  return <div className="ha-links">
    {next && <Link href={resourcePath(next.slug)}>Next companion resource: {next.title}</Link>}
    {collection && <Link href={projectCollectionPath(collection.slug)}>Back to {collection.title}</Link>}
  </div>;
}

function schemaFor(page: NonNullable<ReturnType<typeof findPage>>) {
  const url = base + page.canonical;
  const properties = { name: page.title, description: page.description, url };
  if (page.kind === 'resource') return { '@type': 'LearningResource', ...properties, datePublished: page.resource.release?.publishedAt };
  if (page.kind === 'episode') return { '@type': 'PodcastEpisode', ...properties, datePublished: page.episode.publishedAt, partOfSeries: { '@type': 'PodcastSeries', name: podcastTitle } };
  if (page.kind === 'video') return { '@type': 'VideoObject', ...properties, uploadDate: page.video.publishedAt,
    thumbnailUrl: `https://i.ytimg.com/vi/${page.video.youtubeId}/hqdefault.jpg`, embedUrl: `https://www.youtube-nocookie.com/embed/${page.video.youtubeId}` };
  if (page.kind === 'podcasts' && page.available) return { '@type': 'PodcastSeries', ...properties };
  return { '@type': 'CollectionPage', ...properties };
}

export default async function ProjectPage({ params, searchParams }: Props) {
  const page = findPage((await params).path ?? []);
  if (!page) notFound();
  const query = await searchParams;
  const schema = { '@context': 'https://schema.org', '@graph': [
    schemaFor(page),
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Think Sriram', item: base },
      { '@type': 'ListItem', position: 2, name: humanAdvantageTitle, item: base + root },
      ...(page.kind === 'overview' ? [] : [{ '@type': 'ListItem', position: 3, name: page.title, item: base + page.canonical }]),
    ] },
  ] };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    {page.kind === 'overview' ? <ProjectOverview /> : <>
      <Breadcrumb title={page.title} />
      <div className={page.kind === 'book' ? 'ha-body ha-hub' : 'ha-body'}>
        {page.kind !== 'book' && <header className="page-heading">
          {page.kind === 'resource' && <p className="eyebrow">Companion resource {String(page.resource.sequence).padStart(2, '0')} · {page.resource.format}</p>}
          <h1>{page.title}</h1><p>{page.description}</p>
        </header>}
        {page.kind === 'books' && <ProjectBookCards />}
        {page.kind === 'book' && <ProjectBookHub volume={page.volume} entry={page.entry} query={query} />}
        {page.kind === 'resources' && <HumanAdvantageCatalogue query={query} path={page.canonical} />}
        {page.kind === 'collection' && <HumanAdvantageCatalogue query={query} path={page.canonical} resources={page.collection.resources} />}
        {page.kind === 'resources' && <p className="ha-links"><Link href={root + '/collections'}>Browse learning collections</Link></p>}
        {page.kind === 'collections' && <div className="ha-grid">{projectCollections.map(collection => <article className="ha-card" key={collection.slug}>
          <h2><Link href={projectCollectionPath(collection.slug)}>{collection.title}</Link></h2><p>{collection.description}</p>
        </article>)}</div>}
        {page.kind === 'capabilities' && <div className="ha-grid">{capabilities.map(capability => <article className="ha-card" key={capability.slug}>
          <h2><Link href={capabilityPath(capability.slug)}>{capability.title}</Link></h2><p>{capability.summary}</p>
        </article>)}</div>}
        {page.kind === 'capability' && <>
          <section className="ha-section"><h2>Start reading</h2><p><ChapterLink reference={page.capability.reference} includeBook /></p></section>
          <section className="ha-section"><h2>Explore related resources</h2><HumanAdvantageCatalogue query={query} path={page.canonical}
            resources={projectResources.filter(item => item.tags.some(tag => tag === page.capability.slug))} /></section>
        </>}
        {page.kind === 'resource' && page.resource.release && <>
          <p>Version {page.resource.release.version} · Published {formatDate(page.resource.release.publishedAt)} · Estimated time {page.resource.release.duration}</p>
          <ResourceMaterial resource={page.resource} />
          <h2>What you’ll learn</h2><ul>{page.resource.release.objectives.map(item => <li key={item}>{item}</li>)}</ul>
          <h2>How to use it</h2><ol>{page.resource.release.instructions.map(item => <li key={item}>{item}</li>)}</ol>
          <h2>Apply it</h2><p>{page.resource.release.example}</p>
          {!!page.resource.release.chapters.length && <>
            <h2>Explore next</h2>
            <ul>{page.resource.release.chapters.map(reference => <li key={`${reference.bookSlug}/${reference.sectionSlug}`}>
              <ChapterLink reference={reference} includeBook />
            </li>)}</ul>
          </>}
          <CompanionLinks resource={page.resource} />
        </>}
        {page.kind === 'podcasts' && (page.available ? <ul>{episodes().map(item => <li key={item.slug}><Link href={root + '/podcasts/' + item.slug}>{item.title}</Link></li>)}</ul> : <p>Episodes will be listed here when they are ready to listen to.</p>)}
        {page.kind === 'videos' && (page.available ? <ul>{videos().map(item => <li key={item.slug}><Link href={root + '/videos/' + item.slug}>{item.title}</Link></li>)}</ul> : <p>Videos will be listed here when they are ready to watch.</p>)}
        {(page.kind === 'episode' || page.kind === 'video') && (() => {
          const item = page.kind === 'episode' ? page.episode : page.video;
          return <>
            <p>{formatDate(item.publishedAt)} · {item.duration}</p>
            {page.kind === 'episode'
              ? <><p>Hosted by {page.episode.host}{page.episode.guests.length > 0 && ` with ${page.episode.guests.join(', ')}`}</p><ProjectAudio url={page.episode.audioUrl} /></>
              : <ProjectVideoPlayer id={page.video.youtubeId} title={page.video.title} />}
            <h2>Transcript</h2>{item.transcript.split(/\n\s*\n/).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            {!!item.references.length && <><h2>References</h2><ul>{item.references.filter(reference => reference.url.startsWith('https://')).map(reference => <li key={reference.url}><a href={reference.url}>{reference.title}</a></li>)}</ul></>}
            <p><Link href={resources}>Explore related learning resources</Link></p>
          </>;
        })()}
      </div>
    </>}
  </>;
}
