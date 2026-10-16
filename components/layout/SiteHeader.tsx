'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import {useState} from 'react';
import {site} from '@/lib/site';
const links=[['Home','/'],['Writing','/writing'],['Topics','/topics'],['About','/about']];
export function SiteHeader(){const [open,setOpen]=useState(false);const current=usePathname();return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();}}}><div className="shell header-inner"><Link className="identity" href="/" aria-label="Think Sriram home">{site.logo?<Image className="site-logo" src={site.logo} alt="Think Sriram" width={128} height={128} priority sizes="(max-width: 900px) 112px, 128px"/>:<span className="wordmark">{site.title}</span>}</Link><button className="menu-toggle" aria-expanded={open} aria-controls="primary-nav" onClick={()=>setOpen(!open)}>Menu <span aria-hidden="true">{open?'−':'+'}</span></button><nav id="primary-nav" className={open?'nav open':'nav'} aria-label="Primary navigation" onKeyDown={e=>{if(e.key==='Escape'){setOpen(false);document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus();}}}>{links.map(([label,href])=><Link key={href} href={href} aria-current={(href==='/'?current==='/':current.startsWith(href))?'page':undefined} onClick={()=>setOpen(false)}>{label}</Link>)}</nav></div></header></>}
