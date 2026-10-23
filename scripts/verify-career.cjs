const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const ts = require('typescript');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function(name, parent, ...rest) {
  return resolve.call(this, name.startsWith('@/') ? path.join(root, name.slice(2)) : name, parent, ...rest);
};
require.extensions['.ts'] = (mod, filename) => mod._compile(ts.transpileModule(fs.readFileSync(filename,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText, filename);
const {NextRequest} = require('next/server');
const {getPaymentProduct} = require('../lib/career/paymentCatalog.ts');
const {guideSalesContent} = require('../lib/career/guideSalesContent.ts');
const {BUNDLE_SECTIONS} = require('../lib/career/bundlesCatalog.ts');
const {POST} = require('../app/api/create-order/route.ts');
const {GET} = require('../app/api/verify-order/route.ts');
const valid = {productName:'Career Intelligence Report - Pro',amount:999,name:'Test Buyer',email:'test@example.com',phone:'9876543210'};
const request = (body, extra={}) => new NextRequest('http://localhost:3000/api/create-order',{method:'POST',headers:{'content-type':'application/json',...extra},body:JSON.stringify(body)});
(async()=>{
  for(const guide of Object.values(guideSalesContent)) assert.equal(getPaymentProduct(guide.productName)?.amount,499);
  for(const section of BUNDLE_SECTIONS) for(const b of section.bundles) assert.equal(getPaymentProduct(b.name)?.amount,b.price);
  for(const folder of ['app/(career)','components/career']) {
    for(const file of fs.readdirSync(path.join(root,folder),{recursive:true})) {
      if(!file.endsWith('.tsx')) continue;
      const source=fs.readFileSync(path.join(root,folder,file),'utf8');
      for(const m of source.matchAll(/<CashfreeCheckout\s+productName="([^"]+)"\s+amount=\{(\d+)\}/g)) assert.equal(getPaymentProduct(m[1])?.amount,Number(m[2]),m[1]);
    }
  }
  assert.equal(getPaymentProduct('unknown'),undefined);
  assert.equal((await POST(request({...valid,amount:1}))).status,400);
  assert.equal((await POST(request({...valid,email:'bad'}))).status,400);
  assert.equal((await POST(request(valid,{origin:'https://other.example'}))).status,403);
  assert.equal((await GET(new NextRequest('http://localhost:3000/api/verify-order?order_id=bad'))).status,400);
  process.env.CASHFREE_APP_ID='test';process.env.CASHFREE_SECRET_KEY='test';process.env.NEXT_PUBLIC_BASE_URL='http://localhost:3000';
  global.fetch=async(url,options)=>{
    const order=JSON.parse(options.body);assert.equal(order.order_amount,999);assert.match(order.order_meta.return_url,/localhost:3000\/payment-status/);
    return Response.json({payment_session_id:'test-session'});
  };
  const order=await POST(request(valid));assert.equal(order.status,200);assert.equal((await order.json()).payment_session_id,'test-session');
  const check=()=>GET(new NextRequest('http://localhost:3000/api/verify-order?order_id=SA_1234567890123_abcde'));
  for(const [payments,expected] of [[[{payment_status:'SUCCESS'}],'PAID'],[[],'ACTIVE'],[[{payment_status:'PENDING'}],'ACTIVE'],[[{payment_status:'FAILED'}],'FAILED']]){
    global.fetch=async()=>Response.json(payments);assert.equal((await(await check()).json()).order_status,expected);
  }
  console.log('Career catalog and Cashfree contract checks passed (mocked gateway; no payments sent).');
})().catch(error=>{console.error(error);process.exitCode=1;});
