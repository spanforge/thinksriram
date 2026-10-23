const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
// Install Playwright for browser checks, or point CAREER_PLAYWRIGHT_MODULE at an existing installation.
const { chromium } = require(process.env.CAREER_PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const original = Module._resolveFilename;
Module._resolveFilename = function(name, parent, ...rest) {
 return original.call(this, name.startsWith('@/') ? path.join(root, name.slice(2)) : name, parent, ...rest);
};
require.extensions['.ts'] = (mod, file) => mod._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }).outputText, file);
const { guideSalesContent } = require('../lib/career/guideSalesContent.ts');
const { getPaymentProduct } = require('../lib/career/paymentCatalog.ts');
const routes = [...require('../lib/career/routes.json').filter(p => p.startsWith('/products/') || p.startsWith('/services/') || p === '/bundles' || p.endsWith('/sa-airs-pro') || p.endsWith('/absolute-beginners')), ...Object.entries(guideSalesContent).filter(([,c])=>c.category!=='ai-literacy').map(([s])=>'/guides/'+s)];
const origin = process.env.CAREER_TEST_ORIGIN || 'http://localhost:3004';
(async()=>{
 const browser=await chromium.launch({headless:true});
 let checked=0;
 try {
  for(const viewport of [{width:1280,height:800},{width:375,height:667}]) {
   const context=await browser.newContext({viewport});
   await context.addInitScript(()=>{
    window.__checkoutCalls=[];
    window.Cashfree=()=>({checkout:async options=>{window.__checkoutCalls.push(options);return {};}});
   });
   const page=await context.newPage();
   const errors=[];page.on('pageerror',e=>errors.push(e.message));
   let failNext=false;let submitted=[];
   await page.route('**/api/create-order',async route=>{
    const body=route.request().postDataJSON();
    assert.equal(getPaymentProduct(body.productName)?.amount,body.amount);
    submitted.push(body);
    await route.fulfill({status:failNext?503:200,contentType:'application/json',body:JSON.stringify(failNext?{error:'Test gateway unavailable'}:{payment_session_id:'test-session',order_id:'SA_1234567890123_abcde'})});
    failNext=false;
   });
   // Follow a catalog link with client navigation, rather than only loading URLs directly.
   await page.goto(origin+'/products');
   await page.getByRole('link',{name:'View audit',exact:true}).first().click();
   await page.waitForURL('**/products/airs-assessment');
   for(const route of routes) {
    const response=await page.goto(origin+route);assert.equal(response.status(),200,route);
    const buttons=page.locator('[data-checkout-product]');assert.ok(await buttons.count(),`Missing checkout: ${route}`);
    for(let i=0;i<await buttons.count();i++) {
     const button=buttons.nth(i);if(!await button.isVisible())continue;
     await button.click();
     const dialog=page.getByRole('dialog');await dialog.waitFor({state:'visible'});
     const layout=await dialog.evaluate(el=>({background:getComputedStyle(el).backgroundColor,backdrop:getComputedStyle(el.parentElement).backgroundColor,top:el.getBoundingClientRect().top,bottom:el.getBoundingClientRect().bottom,viewport:innerHeight}));
     assert.equal(layout.background,'rgb(255, 255, 255)',route);
     assert.notEqual(layout.backdrop,'rgba(0, 0, 0, 0)',route);
     assert.ok(layout.top>=0 && layout.bottom<=layout.viewport,JSON.stringify({route,layout}));
     await dialog.getByLabel('Full Name',{exact:true}).fill('Test Buyer');
     await dialog.getByLabel('Email Address',{exact:true}).fill('test@example.com');
     await dialog.getByLabel('Mobile Number',{exact:true}).fill('9876543210');
     if(checked===0) {
      failNext=true;
      await dialog.getByRole('button',{name:/Pay Rs/}).click();
      await dialog.getByRole('alert').filter({hasText:'Test gateway unavailable'}).waitFor();
     }
     const before=await page.evaluate(()=>window.__checkoutCalls.length);
     await dialog.getByRole('button',{name:/Pay Rs/}).click();
     await page.waitForFunction(before=>window.__checkoutCalls.length>before,before);
     assert.equal(await page.evaluate(()=>window.__checkoutCalls.at(-1).paymentSessionId),'test-session');
     const order=submitted.at(-1);
     assert.equal(order.productName,await button.getAttribute('data-checkout-product'));
     assert.equal(order.amount,Number(await button.getAttribute('data-checkout-amount')));
     await page.keyboard.press('Escape');await dialog.waitFor({state:'detached'});
     assert.equal(await button.evaluate(el=>document.activeElement===el),true,'Focus must return to Buy button');
     checked++;
    }
    assert.deepEqual(errors,[],`Browser error: ${route}`);
   }
   console.log(`Passed product navigation and checkout: ${routes.length} product/guide/bundle pages at ${viewport.width}px.`);
   await context.close();
  }
  console.log(`Passed ${checked} checkout buttons, including form submission, retry, SDK handoff, scrolling and keyboard close. Gateway mocked; no payments sent.`);
 } finally {await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});
