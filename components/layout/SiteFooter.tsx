import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { publication } from '@/lib/publication';
export function SiteFooter() {
  return <footer className="site-footer"><div className="shell">
    <div className="footer-top"><div className="footer-brand"><Link href="/" aria-label="Think Sriram home"><Image className="footer-primary-logo" src={site.logo} alt="Think Sriram — Better Careers, Brighter Futures." width={224} height={224} sizes="224px" /></Link><p className="footer-slogan">Better Careers, Brighter Futures.</p></div>
      <div className="footer-editorial"><p>Independent perspectives for understanding change and making better decisions.</p><nav aria-label="Footer navigation">{[['Home', '/'], ['Writing', '/writing'], ['Topics', '/topics'], ['About', '/about']].map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<a href={publication.substackUrl}>Substack</a><a href={site.linkedin}>LinkedIn</a></nav><p className="independence-note">Think Sriram reflects the author’s independent perspectives and does not represent an employer.</p><a href="https://www.thinksriram.com">www.thinksriram.com</a></div>
    </div>
    <div className="footer-secondary"><Link href="/resources">Commercial resources</Link><Link href="/series">Series archive</Link><Link href="/contact">Contact</Link><Link href="/editorial-notes">Editorial notes</Link><Link href="/privacy">Privacy</Link><Link href="/rss.xml">RSS</Link></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Think Sriram</span><span>An independent publication.</span></div>
  </div></footer>;
}
