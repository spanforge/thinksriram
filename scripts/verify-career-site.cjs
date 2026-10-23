const fs=require('node:fs');
const path=require('node:path');
const Module=require('node:module');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const original=Module._resolveFilename;
Module._resolveFilename=function(name,parent,...rest){return original.call(this,name.startsWith('@/')?path.join(root,name.slice(2)):name,parent,...rest);};
require.extensions['.ts']=(mod,file)=>mod._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,esModuleInterop:true}}).outputText,file);
(async()=>{
 const {guideSalesContent}=require('../lib/career/guideSalesContent.ts');
 const routes=[...require('../lib/career/routes.json'),...Object.entries(guideSalesContent).filter(([,c])=>c.category!=='ai-literacy').map(([slug])=>'/guides/'+slug),'/','/writing','/sitemap.xml'];
 const origin=process.env.CAREER_TEST_ORIGIN||'http://localhost:3047';
 for(const route of routes){
  const response=await fetch(origin+route);
  if(!response.ok)throw Error(`${route}: HTTP ${response.status}`);
  const html=await response.text();
  if(route!='/sitemap.xml'&&(html.match(/<main\b/g)||[]).length!==1)throw Error(`Expected one main landmark: ${route}`);
 }
 console.log(`HTTP smoke checks passed for ${routes.length} routes, including all guides and existing writing.`);
})().catch(error=>{console.error(error);process.exitCode=1;});
