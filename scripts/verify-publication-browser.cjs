const assert=require('node:assert/strict'),fs=require('node:fs');
const {chromium}=require(process.env.CAREER_PLAYWRIGHT_MODULE||'playwright');
const origin=process.env.SITE_URL||'http://localhost:3106';
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try {
  for(const width of [1280,768,375,320]){
   const context=await browser.newContext({viewport:{width,height:900}});
   const page=await context.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));
   for(const route of ['/','/writing','/topics','/about','/resources','/careers','/topics/lifelong-learning','/writing/socrates-and-the-art-of-the-right-question']){
    const response=await page.goto(origin+route);assert.equal(response.status(),200,route);
    await page.locator('h1').waitFor();
    assert.equal(await page.locator('main').count(),1,route);
    assert.equal(await page.locator('h1').count(),1,route);
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),width+' overflow '+route);
    if(route==='/'){
     const nav=page.getByRole('navigation',{name:'Primary navigation',exact:true});
     if(width<=900){
      const toggle=page.getByRole('button',{name:'Menu'});await toggle.click();assert.equal(await toggle.getAttribute('aria-expanded'),'true');
      await nav.getByRole('link',{name:'Writing',exact:true}).focus();await page.keyboard.press('Escape');
      assert.equal(await toggle.getAttribute('aria-expanded'),'false');assert(await toggle.evaluate(el=>document.activeElement===el));
      await toggle.click();
     }
     assert.equal(await nav.getByRole('link',{name:'Subscribe'}).getAttribute('href'),'https://thinksriram.substack.com/subscribe');
     assert.equal(await nav.locator('a').count(),5);
     if(width<=900)await page.keyboard.press('Escape');
     await page.locator('.footer-primary-logo').scrollIntoViewIfNeeded();
     await page.locator('.footer-primary-logo').evaluate(el=>el.decode());
     await page.evaluate(()=>scrollTo(0,0));
     await page.screenshot({path:'backups/repositioning-2026-11-08/home-'+width+'.png',fullPage:true});
    }
   }
   await page.goto(origin+'/writing');
   await page.getByRole('combobox',{name:'Editorial pillar'}).selectOption('lifelong-learning');
   await page.getByRole('button',{name:'Search',exact:true}).click();await page.waitForURL('**/writing?**');
   assert(await page.locator('.editorial-card').count()>=1);
   assert((await page.locator('.editorial-card').allTextContents()).join(' ').includes('Socrates'));
   await page.goto(origin+'/contact?interest=career');
   assert.equal(await page.getByLabel('Subject',{exact:true}).inputValue(),'Career Intelligence resource question');
   assert((await page.getByLabel('Your message').inputValue()).includes('My current role'));
   assert.deepEqual(errors,[],JSON.stringify({width,errors}));
   await context.close();console.log('PASS: '+width+'px layouts, one main/H1, no horizontal overflow, menu Escape/focus, search filter, contact context.');
  }
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1});
