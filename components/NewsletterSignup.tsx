import { publication } from '@/lib/publication';
export function NewsletterSignup({ id = 'publication-subscribe' }: { id?: string }) {
  return <section className="newsletter" aria-labelledby={id + '-heading'}>
    <p className="eyebrow">THINK SRIRAM ON SUBSTACK</p>
    <h2 id={id + '-heading'}>Stay Curious. Keep Learning.</h2>
    <p>Follow Think Sriram on Substack for research-informed perspectives, original analysis, and practical ideas about careers, learning, and better decisions.</p>
    <a className="brand-button" href={publication.subscribeUrl}>Subscribe on Substack <span aria-hidden="true">↗</span></a>
    <p className="subscription-note">Subscriptions are managed by Substack. No email address is collected on this website.</p>
  </section>;
}
