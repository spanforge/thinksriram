const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const base=process.env.SITE_URL||'http://localhost:3104';
(async()=>{
for(const route of ['/','/writing','/topics','/reading','/about','/contact','/privacy','/editorial-notes','/rss.xml','/sitemap.xml','/robots.txt']){const r=await fetch(base+route);assert.equal(r.status,200,route);const text=await r.text();assert(!text.includes('/writing/_example'),route+' private template leak');assert(!text.includes('Iâ'),route+' encoding');if(route==='/contact')assert(text.includes('sriram@sriramadvisory.com'));}
for(const slug of ['socrates-and-the-art-of-the-right-question','the-examined-machine','bhaja-govindam-the-discipline-of-enough']){assert.equal((await fetch(base+'/writing/'+slug)).status,200);const img=await fetch(base+'/writing/'+slug+'/opengraph-image');assert.equal(img.status,200);assert(img.headers.get('content-type').startsWith('image/png'));}
assert.equal((await fetch(base+'/writing/clarity-comes-from-stepping-back')).status,200);assert.equal((await fetch(base+'/writing/clarity-comes-from-stepping-back/opengraph-image')).status,200);
const redirect=await fetch(base+'/ideas/the-examined-machine',{redirect:'manual'});assert.equal(redirect.status,308);assert.equal(redirect.headers.get('location'),'/writing/the-examined-machine');
const filtered=await (await fetch(base+'/writing?topic=ai-and-people')).text();assert(filtered.includes('The Examined Machine'));assert(!filtered.includes('href="/writing/bhaja-govindam-the-discipline-of-enough"'));const older=await (await fetch(base+'/writing?page=2')).text();assert(older.replace(/<!--.*?-->/g,'').includes('Page 2 of 5'));
for(const route of ['/admin','/admin/index.html','/admin/config.yml'])assert.equal((await fetch(base+route)).status,404,route+' removed CMS');
const logo=await fetch(base+'/images/think-sriram-logo.png');assert.equal(logo.status,200);assert(logo.headers.get('content-type').startsWith('image/png'));
console.log('PASS: approved logo, removed CMS, public routes, contact, three social images, newly published articles, redirect, topic filter and pagination.');
if(new URL(base).hostname==='localhost') {
 const slug='2020-01-01-text-publishing-check-'+process.pid;
 const fixture=path.join(process.cwd(),'content',slug+'.txt');
 const privateFile=path.join(process.cwd(),'content','_'+slug+'.txt');
 try{
  fs.writeFileSync(fixture,'Text publishing check\n\nA paragraph from a newly uploaded text file.\n\n## A clear heading\nA paragraph under the heading.\n\n1. First step\n2. Second step',{flag:'wx'});
  fs.writeFileSync(privateFile,'A private note\n\nThis should never be public.',{flag:'wx'});
  const response=await fetch(base+'/writing/'+slug);assert.equal(response.status,200);const html=await response.text();assert(html.includes('A paragraph from a newly uploaded text file.'));assert(html.includes('<h2>A clear heading</h2>'));assert(html.includes('<ol'));assert(html.includes('<li>First step</li>'));
  assert((await (await fetch(base+'/writing?year=2020')).text()).includes('/writing/'+slug));
  for(const route of ['/rss.xml','/sitemap.xml'])assert((await (await fetch(base+route)).text()).includes('/writing/'+slug));
  assert.equal((await fetch(base+'/writing/_'+slug)).status,404);
  fs.appendFileSync(fixture,'\n\nA change made after publication.');assert((await (await fetch(base+'/writing/'+slug)).text()).includes('A change made after publication.'));
 }finally{if(fs.existsSync(fixture))fs.unlinkSync(fixture);if(fs.existsSync(privateFile))fs.unlinkSync(privateFile)}
 assert.equal((await fetch(base+'/writing/'+slug)).status,404);
 console.log('PASS: a text file added after build appears in article/archive/RSS/sitemap; headings/lists render, edits appear immediately, private files stay hidden, removal returns 404.');
}
})().catch(e=>{console.error(e);process.exitCode=1});
