const assert=require('node:assert/strict');
const origin=process.env.SITE_URL||'http://localhost:3106';
async function html(route){const r=await fetch(origin+route);assert.equal(r.status,200,route);return (await r.text()).replace(/<!--.*?-->/g,'');}
(async()=>{
  const home=await html('/');
  for(const text of ['AN INDEPENDENT PUBLICATION','Better Careers,','Brighter Futures.','Explore What Matters','Latest Thinking','A Note from Sriram','Stay Curious. Keep Learning.'])assert(home.includes(text),text);
  assert(!home.includes('<fieldset'));assert(!home.includes('buttondown'));assert(!home.includes('Signup coming soon'));
  assert(home.includes('https://thinksriram.substack.com/subscribe'));
  assert(home.includes('https://thinksriram.substack.com/p/ai-is-making-work-faster-but-where'));
  assert(home.includes('https://thinksriram.substack.com/p/why-earning-more-money-doesnt-always'));
  const nav=home.match(/<nav id="primary-nav"[\s\S]*?<\/nav>/)[0];
  assert(!nav.includes('/careers'));assert(!nav.includes('/series'));
  for(const p of ['future-of-careers','career-intelligence','lifelong-learning','better-life-and-decisions','ideas-and-perspectives']){
    const topic=await html('/topics/'+p);assert(topic.includes('Read Article'));assert((await html('/writing?topic='+p)).includes('Read Article'));
  }
  assert((await html('/topics/careers')).includes('Careers'));
  assert((await html('/resources')).includes('Commercial Resources'));
  assert((await html('/about')).includes('About Think Sriram'));
  assert((await html('/writing?q=training+programme')).includes('socrates-and-the-art-of-the-right-question'));
  assert((await html('/writing?q=unfindableword7723')).includes('No articles match'));
  assert((await html('/writing?series=bhaja-govindam&page=2')).includes('Page 2 of 4'));
  assert((await html('/careers')).includes('Commercial resources'));
  const title=(await html('/careers')).match(/<title>(.*?)<\/title>/)[1];assert.equal((title.match(/Think Sriram/g)||[]).length,1);
  for(const path of ['/icon','/apple-icon','/opengraph-image','/writing/socrates-and-the-art-of-the-right-question/opengraph-image']){const r=await fetch(origin+path);assert.equal(r.status,200,path);assert(r.headers.get('content-type').startsWith('image/png'));}
  const sitemap=await html('/sitemap.xml');assert(sitemap.includes('/resources'));assert(sitemap.includes('/topics/future-of-careers'));
  const privacy=await html('/privacy');assert(privacy.includes('Substack subscriptions'));assert(!privacy.includes('Buttondown'));
  console.log('PASS: publication homepage, navigation, five pillar filters, legacy topics, search, pagination, resources, titles, sharing images, sitemap and privacy.');
})().catch(error=>{console.error(error);process.exitCode=1;});
