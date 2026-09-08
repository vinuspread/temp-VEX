import { chromium } from '@playwright/test';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const snapshot = JSON.parse(await readFile('src/components/renewal/public-snapshot.json', 'utf8'));
const published = JSON.parse(await readFile('src/components/renewal/preview-slugs.json', 'utf8'));
const targets = Object.entries(snapshot).flatMap(([lang, data]) => data.templates.filter(({slug})=>published[lang]?.includes(slug)).map(({slug}) => ({lang,slug})));
const selected = process.argv.slice(2);
const tasks = selected.length ? targets.filter(t => selected.includes(t.slug)) : targets;
const browser = await chromium.launch({channel:'chrome',headless:true});
const results=[];
let cursor=0;
await mkdir('public/renewal',{recursive:true});
await mkdir('output/playwright/renewal',{recursive:true});

// Scroll narratives cannot be flattened by forcing all past opacity states on.
// Capture real, settled desktop sections in document order, omitting the scroll
// travel distance and repeated fixed navigation. No template source is changed.
async function representativeCapture(page, slug) {
 const hero=await page.screenshot({type:'jpeg',quality:88});
 const parts=[hero];
 const adaptations=[];
 await page.addStyleTag({content:'nav,header{visibility:hidden!important}'});
 const selectors=slug==='OHMT025-wedding'
  ? ['main > section[style*="height"]:has(> div > div[style*="width"])']
  : ['section:has(button[aria-controls="usp-panel-0"])','section:has(.stat-value)'];
 for(const selector of selectors) {
  const section=page.locator(selector);
  if(await section.count()!==1)throw new Error(`Capture section changed: ${selector}`);
  await section.evaluate(el=>window.scrollTo(0,el.getBoundingClientRect().top+window.scrollY));
  await page.waitForTimeout(2500);
  const broken=await section.evaluate(el=>[...el.querySelectorAll('img')].filter(img=>{
   const r=img.getBoundingClientRect();return r.bottom>0 && r.top<innerHeight && r.right>0 && r.left<innerWidth && (!img.complete || !img.naturalWidth);
  }).map(img=>img.src));
  if(broken.length)throw new Error(`Broken section images: ${broken.join(', ')}`);
  const sectionHeight=await section.evaluate(el=>Math.round(el.getBoundingClientRect().height));
  const height=Math.min(900,sectionHeight);
  // A viewport capture retains one coherent sticky/horizontal animation state.
  const part=await page.screenshot({type:'jpeg',quality:88,clip:{x:0,y:0,width:1440,height}});
  parts.push(part);
  adaptations.push({selector,mode:'settled-section-viewport',height,sourceSectionHeight:sectionHeight});
 }
 let top=0;
 const composite=[];
 for(const input of parts){composite.push({input,left:0,top});top+=(await sharp(input).metadata()).height;}
 const long=await sharp({create:{width:1440,height:top,channels:3,background:'#fff'}}).composite(composite).jpeg({quality:88}).toBuffer();
 return {hero,long,height:top,adaptations:[{mode:'representative-sections',note:slug==='OHMT025-wedding'?'Hero + first desktop shooting-process panel; omit animated BrandStory collage and scroll travel.':'Hero + initial USP panel + complete Performance section; omit 600vh USP scroll travel and repeated fixed navigation.'},...adaptations]};
}

async function capture({lang,slug}) {
 const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1,reducedMotion:'no-preference'});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 try {
  const response=await page.goto(`http://localhost:3000/${lang}/templates/${slug}?preview=raw`,{waitUntil:'networkidle',timeout:120000});
  if(!response.ok()) throw new Error(`HTTP ${response.status()}`);
  await page.addStyleTag({content:'nextjs-portal{display:none!important} html{scroll-behavior:auto!important} [data-capture-revealed]{opacity:1!important}'});
  await page.evaluate(async()=>{
   await document.fonts.ready;
   for(const img of document.images) img.loading='eager';
   await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
  });
  // Some local template data contains a language prefix in public asset URLs.
  // Resolve only to the matching, existing public file for capture; no source
  // template or production page is changed.
  const assetRepairs=await page.evaluate(async()=>{
   const repairs=[];
   for(const img of document.images) {
    if(img.naturalWidth) continue;
    const url=new URL(img.currentSrc || img.src,location.href);
    const original=url.searchParams.get('url') || url.pathname;
    const fixed=original.replace(/^\/templates\/(ko|en)\//,'/templates/');
    if(fixed===original || !fixed.startsWith('/templates/')) continue;
    const check=await fetch(fixed,{method:'HEAD'});
    if(!check.ok || !check.headers.get('content-type')?.startsWith('image/'))continue;
    img.removeAttribute('srcset');img.src=fixed;
    await img.decode();repairs.push({original,fixed});
   }
   return repairs;
  });
  // React loaders and delayed Framer Motion entrances outlive networkidle.
  await page.waitForTimeout(4000);
  const media=await page.evaluate(async()=>Promise.all([...document.querySelectorAll('video')].map(async video=>{
   const ready=()=>video.readyState>=2 && video.videoWidth>0;
   const deadline=Date.now()+25000;
   video.muted=true;
   video.play().catch(()=>{});
   while(!ready() && !video.error && Date.now()<deadline) await new Promise(r=>setTimeout(r,200));
   if(ready()) {
    await new Promise(r=>setTimeout(r,1200));
    video.pause();
   }
   return {src:video.currentSrc,ready:ready(),error:video.error?.message};
  })));
  if(media.some(v=>!v.ready)) throw new Error(`Video not rendered: ${JSON.stringify(media)}`);
  const adaptations=[];
  if(slug==='OHMT014-docs') {
   await page.locator('main.overflow-y-auto').evaluate(main=>{
    const shell=main.parentElement.parentElement;
    shell.style.height='auto';shell.style.minHeight='100vh';shell.style.overflow='visible';
    main.style.overflow='visible';main.style.flex='none';
   });
   adaptations.push({mode:'expand-nested-scroll',selector:'main.overflow-y-auto',note:'Expand document shell and main to natural content height; preserve all page content.'});
  }
  const representative=['OHMT025-wedding','OHMT028-ev'].includes(slug);
  let height=await page.evaluate(()=>Math.min(2700,Math.max(900,document.documentElement.scrollHeight)));
  if(!representative) {
  for(let top=0;top<Math.max(height,2700);top+=600) {
   await page.evaluate(y=>window.scrollTo(0,y),top);
   await page.waitForTimeout(1000);
   // Preserve already-revealed content for a multi-viewport still. Hidden
   // dialogs/preloaders are not made visible; template source is untouched.
   await page.evaluate(()=>{
    for(const el of document.querySelectorAll('[style]')) {
     const rect=el.getBoundingClientRect();const css=getComputedStyle(el);
     if(rect.bottom>0 && rect.top<innerHeight && el.style.opacity && Number(css.opacity)>=0.99 && css.position!=='fixed') el.setAttribute('data-capture-revealed','');
    }
   });
  }
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.waitForTimeout(1500);
  }
  const broken=await page.evaluate(height=>[...document.images].filter(img=>{
   const rect=img.getBoundingClientRect();return rect.width>0 && rect.height>0 && rect.top<height && (!img.complete || !img.naturalWidth);
  }).map(img=>img.currentSrc),height);
  if(broken.length) throw new Error(`Broken images: ${broken.join(', ')}`);
  if(errors.length) throw new Error(errors.join('\n'));
  const special=representative?await representativeCapture(page,slug):null;
  const hero=special?.hero ?? await page.screenshot({type:'jpeg',quality:88});
  const stats=await sharp(hero).stats();
  if(stats.channels.every(c=>c.stdev<2)) throw new Error('Blank or loading-overlay capture');
  const long=special?.long ?? await page.screenshot({type:'jpeg',quality:88,fullPage:true,clip:{x:0,y:0,width:1440,height}});
  if(special){height=special.height;adaptations.push(...special.adaptations);}
  const dimensions=await sharp(long).metadata();
  if(dimensions.width!==1440 || dimensions.height!==height) throw new Error(`Unexpected screenshot dimensions: ${dimensions.width}x${dimensions.height}`);
  await writeFile(`public/renewal/${lang}-${slug}-1440x900.jpg`,hero);
  await writeFile(`public/renewal/${lang}-${slug}-1440-preview.jpg`,long);
  results.push({lang,slug,width:1440,height,status:'success',media,assetRepairs,adaptations});
  console.log(`${lang}/${slug}: verified, 1440 x ${height}`);
 } catch(error) {
  results.push({lang,slug,status:'failed',error:error.message});
  console.error(`${lang}/${slug}: ${error.message}`);
 } finally {await page.close();}
}
try {
 await Promise.all(Array.from({length:2},async()=>{while(cursor<tasks.length){const target=tasks[cursor++];await capture(target);}}));
}finally{
 const manifest={expected:tasks.length,success:results.filter(r=>r.status==='success').length,failed:results.filter(r=>r.status==='failed').length,results};
 await writeFile('output/playwright/renewal/asset-manifest.json',JSON.stringify(manifest,null,2));
 await writeFile(`output/playwright/renewal/asset-manifest-${selected.length?selected.map(s=>s.match(/OHMT\d+/)[0]).join('-'):'all'}.json`,JSON.stringify(manifest,null,2));
 await browser.close();
 if(manifest.failed)process.exitCode=1;
}
