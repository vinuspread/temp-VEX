import { chromium } from '@playwright/test';
const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const lang of ['ko', 'en']) for (const width of [1440, 390]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
    await page.goto(`http://localhost:3000/${lang}/renewal`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: 'nextjs-portal{display:none!important}' });
    await page.evaluate(() => document.fonts.ready);
    await page.locator('#information').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `output/playwright/renewal/minimal/${lang}-information-${width}.png` });
    await page.locator('#pricing summary').first().click();
    await page.locator('#pricing').screenshot({ path: `output/playwright/renewal/minimal/${lang}-pricing-open-${width}.png` });
    await page.locator('#templates').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `output/playwright/renewal/minimal/${lang}-shadow-${width}.png` });
    console.log(`${lang} ${width}: captured`);
    await page.close();
  }
} finally { await browser.close(); }
