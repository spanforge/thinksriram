import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { NewsletterSignup } from "@/components/NewsletterSignup";
export function SiteFooter() {
  return <footer className="site-footer shell"><div className="footer-top">
    <div><Link className="identity" href="/" aria-label="Think Sriram home"><Image className="site-logo footer-logo" src={site.logo} alt="Think Sriram" width={112} height={112} sizes="112px" /></Link><p>{site.tagline}</p></div>
    <nav aria-label="Footer navigation">{[["About", "/about"], ["Archive", "/writing"], ["Series", "/series"], ["Contact", "/contact"], ["Editorial notes", "/editorial-notes"], ["Privacy", "/privacy"], ["RSS", "/rss.xml"]].map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}{site.linkedin && <a href={site.linkedin} rel="noopener noreferrer">LinkedIn</a>}</nav>
  </div><NewsletterSignup /><div className="footer-bottom"><span>© 2026 - ThinkSriram.com</span><span>Written with curiosity. Read at your own pace.</span></div></footer>;
}
