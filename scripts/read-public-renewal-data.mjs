import { chromium } from '@playwright/test';
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const result = {};
try {
 for (const lang of ['ko','en']) {
  const page = await browser.newPage();
  await page.goto(`https://ohmt.site/${lang}`, {waitUntil:'networkidle',timeout:90000});
  const read = () => page.locator('#templates').evaluate(s => [...s.querySelectorAll('a[href*="/templates/OHMT"]')].map(a => {
   const c = a.closest('.group') ?? a.parentElement;
   return {slug:a.getAttribute('href').split('/').pop(),name:c.querySelector('h4')?.textContent.trim(),description:c.querySelector('p.line-clamp-1')?.textContent.trim() ?? '',thumbnail_url:c.querySelector('img')?.getAttribute('src'),categories:[],hashtags:[]};
  }).filter(t=>t.name));
  const templates = await read();
  for (const category of ['retail','service','media','corporate','portfolio','lifestyle','hospitality','creative']) {
   const b=page.locator('#templates').getByRole('button',{name:category,exact:true});
   if(await b.count()) {await b.click();await page.waitForTimeout(150);for(const t of await read()){let known=templates.find(x=>x.slug===t.slug);if(!known){templates.push(t);known=t;}known.categories.push(category);}}
  }
  const packages=await page.locator('#pricing').evaluate((s,lang)=>[...s.querySelectorAll('h3')].map((h,i)=>{
   const c=h.closest('.shrink-0');const p=c?.querySelector('.text-3xl');
   return {id:`public-${lang}-${i}`,slug:h.textContent.trim().toLowerCase(),lang,name:h.textContent.trim(),description:c?.querySelector('p')?.textContent.trim()??'',price:p?.textContent.trim()??'',duration:p?.nextElementSibling?.textContent.trim()??'',features:[...(c?.querySelectorAll('li')??[])].map(l=>l.textContent.replace(/^✓/,'').trim()),is_recommended:i===1,is_active:true,sort_order:i,created_at:'',updated_at:''};
  }),lang);
  const faqs=[];const buttons=page.locator('#faq button');
  for(let i=0;i<await buttons.count();i++){const b=buttons.nth(i);const question=await b.innerText();await b.click();const answer=await b.evaluate(b=>[...b.parentElement.children].filter(e=>e!==b).map(e=>e.textContent.trim()).join('\n'));faqs.push({id:`public-${lang}-${i}`,question,answer});}
  result[lang]={templates,packages,faqs,unavailable:false};await page.close();
 }
 console.log(JSON.stringify(result));
}finally{await browser.close();}
