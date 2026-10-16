import Link from "next/link";
import { site } from "@/lib/site";
import pages from "@/content/pages.json";
import { CopyText } from "@/components/CopyText";
import { ContactComposer } from "@/components/ContactComposer";
export const metadata = { title: "Contact", alternates: { canonical: "/contact" } };
export default function Contact() {
  return <div className="prose"><h1>{pages.contact.title}</h1><p>{pages.contact.body}</p>
    <h2>Email</h2><p><a href={`mailto:${site.email}`}>{site.email}</a></p><CopyText text={site.email} label="Copy email address" />
    <p>This is the address I use for this personal website. The sriramadvisory.com domain does not make the writing an organisational statement.</p>
    {site.linkedin && <p>You can also <a href={site.linkedin} rel="noopener noreferrer">find me on LinkedIn</a>.</p>}
    <p>For corrections, please include the article title and a source where possible. Replies depend on availability; there is no promised response time.</p>
    <ContactComposer email={site.email} />
    <p className="form-note">The composer keeps your draft in this browser page only. It is not stored by the website. Please avoid sending sensitive information. <Link href="/privacy">Read the privacy note</Link>.</p>
  </div>;
}
