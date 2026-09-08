import sharp from 'sharp';
import { readFile, mkdir } from 'node:fs/promises';
const snapshot = JSON.parse(await readFile('src/components/renewal/public-snapshot.json','utf8'));
const tall=process.argv.includes('--tall');
const tileHeight=tall?630:300;
await mkdir('output/playwright/renewal/review',{recursive:true});
for(const lang of ['ko','en']) {
 const items=snapshot[lang].templates;
 for(let start=0;start<items.length;start+=12){
  const layers=[];
  for(let i=start;i<Math.min(start+12,items.length);i++){
   const item=items[i]; const index=i-start; const left=(index%3)*480;const top=Math.floor(index/3)*(tileHeight+30);
   layers.push({input:await sharp(`public/renewal/${lang}-${item.slug}-${tall?'1440-preview':'1440x900'}.jpg`).resize(480,tileHeight,{fit:'contain',background:'#eee'}).toBuffer(),left,top});
   layers.push({input:Buffer.from(`<svg width="480" height="30"><rect width="480" height="30" fill="white"/><text x="8" y="20" font-size="16">${lang} ${item.slug}</text></svg>`),left,top:top+tileHeight});
  }
  await sharp({create:{width:1440,height:Math.ceil(Math.min(12,items.length-start)/3)*(tileHeight+30),channels:3,background:'#ddd'}}).composite(layers).png().toFile(`output/playwright/renewal/review/${lang}-${start}${tall?'-tall':''}.png`);
 }
}
