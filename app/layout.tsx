import type { Metadata } from 'next';import './globals.css';import {SiteHeader} from '@/components/layout/SiteHeader';import {SiteFooter} from '@/components/layout/SiteFooter';import {site,base} from '@/lib/site';
export const dynamic="force-dynamic";
export const metadata:Metadata={metadataBase:new URL(base),title:{default:site.title+' — A personal notebook',template:'%s | Think Sriram'},description:site.tagline,alternates:{types:{'application/rss+xml':'/rss.xml'}},openGraph:{siteName:site.title,type:'website',locale:'en_IN'},twitter:{card:'summary_large_image'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteHeader/><main id="main" tabIndex={-1}>{children}</main><SiteFooter/></body></html>}
