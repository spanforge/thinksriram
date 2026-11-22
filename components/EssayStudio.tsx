'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { articleBlocks, Markdown } from '@/components/Markdown';
import type { validateEssay } from '@/lib/studio';

type Draft = ReturnType<typeof validateEssay>;
type Published = { title: string; summary: string; route: string; canonical: string; file?: string };

function newDraft(): Draft {
  return { id: '', title: '', slug: '', summary: '', body: '', genre: 'Essay', topic: 'ideas-and-perspectives' };
}

function slugFor(title: string) {
  const slug = title.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-/, '');
  return slug.slice(0, 120).replace(/[\uD800-\uDBFF-]$/, '');
}

function ShareCopy({ post }: { post: Published }) {
  const [status, setStatus] = useState('');
  const titleCharacters = [...post.title];
  const shortTitle = titleCharacters.length > 180 ? titleCharacters.slice(0, 179).join('') + '…' : post.title;
  const copies = [
    ['Canonical link', post.canonical],
    ['LinkedIn', `${post.summary}\n\nRead ${post.title} on Think Sriram.\n${post.canonical}`],
    ['Substack Notes', `${post.title}\n\n${post.summary}\n\n${post.canonical}`],
    ['X', `${shortTitle}\n${post.canonical}`],
  ];
  return <section className="studio-panel" aria-labelledby="studio-share">
    <h2 id="studio-share">Share {post.title}</h2>
    <p>Edit the prepared text before you copy it. Share the public link once your host has deployed the essay.</p>
    {copies.map(([channel, copy]) => <div className="studio-copy" key={channel}>
      <label>{channel}<textarea aria-label={channel} rows={channel === 'Canonical link' ? 2 : 4} defaultValue={copy} /></label>
      <button type="button" onClick={async event => {
        const field = event.currentTarget.parentElement?.querySelector('textarea');
        if (!field) return;
        try {
          await navigator.clipboard.writeText(field.value);
          setStatus(`${channel} copied.`);
        } catch {
          field.focus();
          field.select();
          setStatus('Text selected. Copy it with your keyboard.');
        }
      }}>Copy {channel}</button>
    </div>)}
    <p role="status">{status}</p>
  </section>;
}

export function EssayStudio({ initialDrafts, archive, topics }: {
  initialDrafts: Draft[]; archive: Published[]; topics: { slug: string; label: string }[];
}) {
  const [drafts, setDrafts] = useState(initialDrafts);
  const [essay, setEssay] = useState<Draft>(newDraft);
  const [posts, setPosts] = useState(archive);
  const [selected, setSelected] = useState('');
  const [file, setFile] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [dirty, setDirty] = useState(false);
  const [customSlug, setCustomSlug] = useState(false);
  const [mode, setMode] = useState<'edit' | 'preview'>('edit');
  const [confirmPublish, setConfirmPublish] = useState(false);
  const post = posts.find(item => item.route === selected);
  const published = posts.some(item => item.route === `/writing/${encodeURIComponent(essay.slug)}`);

  useEffect(() => {
    if (!dirty) return;
    const preventLoss = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = true;
    };
    window.addEventListener('beforeunload', preventLoss);
    return () => window.removeEventListener('beforeunload', preventLoss);
  }, [dirty]);

  function edit(field: keyof Draft, value: string) {
    setEssay(current => ({
      ...current, [field]: value,
      ...(field === 'title' && !customSlug ? { slug: slugFor(value) } : {}),
    }));
    if (field === 'slug') setCustomSlug(true);
    setDirty(true);
    setConfirmPublish(false);
  }

  function openDraft(id: string) {
    if (dirty && !window.confirm('Switch drafts and discard your unsaved changes?')) return;
    setEssay(drafts.find(item => item.id === id) ?? newDraft());
    setCustomSlug(Boolean(id));
    setDirty(false);
    setConfirmPublish(false);
    setMode('edit');
    setStatus('');
    setError('');
    setFile('');
  }

  async function write(action: 'save' | 'publish') {
    setBusy(true);
    setStatus('');
    setError('');
    try {
      const response = await fetch('/api/studio', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, essay }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Could not save the essay.');
      if (action === 'save') {
        setEssay(result);
        setCustomSlug(true);
        setDrafts(current => [result, ...current.filter(item => item.id !== result.id)]);
        setStatus('Draft saved locally.');
      } else {
        const published = { ...result, title: essay.title, summary: essay.summary };
        setPosts(current => [published, ...current]);
        setSelected(result.route);
        setFile(result.file);
        setStatus('Published to the local archive. Deploy the essay file before sharing the public link.');
      }
      setDirty(false);
      setConfirmPublish(false);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Could not save the essay.');
    } finally {
      setBusy(false);
    }
  }

  return <div className="shell book-page studio">
    <header className="page-heading"><h1>Essay Studio</h1>
      <p>Write here, publish the full essay to Think Sriram, then share its link wherever your readers are.</p>
    </header>
    <div className="studio-layout">
      <section className="studio-panel" aria-labelledby="studio-editor">
        <h2 id="studio-editor">Write an essay</h2>
        <fieldset disabled={busy} className="studio-fields">
          <label>Draft<select aria-label="Draft" value={essay.id} onChange={event => openDraft(event.target.value)}>
            <option value="">New essay</option>
            {drafts.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
          </select></label>
          <label>Title<input value={essay.title} maxLength={160} onChange={event => edit('title', event.target.value)} /></label>
          <label>URL slug<input value={essay.slug} maxLength={120} onChange={event => edit('slug', event.target.value)} aria-describedby="studio-slug" /></label>
          <small id="studio-slug">Generated from your title. Keep it stable after publishing.</small>
          <div className="studio-row">
            <label>Topic<select aria-label="Topic" value={essay.topic} onChange={event => edit('topic', event.target.value)}>
              {topics.map(topic => <option key={topic.slug} value={topic.slug}>{topic.label}</option>)}
            </select></label>
            <label>Format<select aria-label="Format" value={essay.genre} onChange={event => edit('genre', event.target.value)}>
              {['Essay', 'Reflection', 'Thinking exercise', 'Story'].map(genre => <option key={genre}>{genre}</option>)}
            </select></label>
          </div>
          <label>Short summary<textarea rows={3} maxLength={320} value={essay.summary} onChange={event => edit('summary', event.target.value)} /></label>
          <button type="button" className="studio-preview-toggle" aria-pressed={mode === 'preview'} onClick={() => setMode(mode === 'edit' ? 'preview' : 'edit')}>{mode === 'edit' ? 'Preview essay' : 'Edit body'}</button>
          {mode === 'edit' ? <label>Essay body<textarea rows={16} maxLength={200_000} value={essay.body} onChange={event => edit('body', event.target.value)} aria-describedby="studio-formatting" />
            <small id="studio-formatting">Leave a blank line between paragraphs. Use Markdown for headings, lists, emphasis, and links.</small>
          </label> : <div className="article-body studio-preview">
            <h3>{essay.title || 'Untitled essay'}</h3>
            {essay.body.trim() ? <Markdown blocks={articleBlocks(essay.body)} /> : <p>Your essay will appear here.</p>}
          </div>}
          <div className="studio-row">
            <button type="button" onClick={() => write('save')}>Save draft</button>
            <button type="button" disabled={published} onClick={() => setConfirmPublish(true)}>Publish to local archive</button>
          </div>
          {confirmPublish && <div className="studio-confirm">
            <p>This creates a public essay file in your workspace that will go live when deployed.</p>
            <button type="button" onClick={() => write('publish')}>Confirm publish</button>{' '}
            <button type="button" onClick={() => setConfirmPublish(false)}>Cancel</button>
          </div>}
        </fieldset>
        {published && <p>This URL is in the local archive. Open it from the sharing panel.</p>}
        {error && <p role="alert">{error}</p>}
        {status && <p role="status">{status}</p>}
        {file && <p>Deploy <code>{file}</code> through your normal hosting workflow.</p>}
      </section>
      <div>
        <section className="studio-panel" aria-labelledby="studio-posts">
          <h2 id="studio-posts">Published essays</h2>
          <label>Choose an essay to share<select aria-label="Choose an essay to share" value={selected} onChange={event => setSelected(event.target.value)}>
            <option value="">Select an essay</option>
            {posts.map(item => <option key={item.route} value={item.route}>{item.title}</option>)}
          </select></label>
          {post && <Link href={post.route}>Open essay on localhost</Link>}
        </section>
        {post && <ShareCopy key={post.route} post={post} />}
      </div>
    </div>
  </div>;
}
