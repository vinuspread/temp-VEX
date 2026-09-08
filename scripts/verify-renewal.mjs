import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const directory = 'output/playwright/renewal/minimal';
await mkdir(directory, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const results = [];
try {
  for (const lang of ['ko', 'en']) {
    for (const width of (process.argv.includes('--quick') ? [1440, 390] : [1440, 768, 390, 375])) {
      const page = await browser.newPage({ viewport: { width, height: 1000 }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      const response = await page.goto(`http://localhost:3000/${lang}/renewal`, { waitUntil: 'networkidle', timeout: 90000 });
      await page.addStyleTag({ content: 'nextjs-portal { display:none!important; }' });
      await page.evaluate(async () => { await document.fonts.ready; for (const img of document.images) img.loading = 'eager'; await Promise.all([...document.images].map(img => img.decode().catch(() => {}))); });
      const choices = page.getByRole('group', { name: lang === 'ko' ? '미리 볼 템플릿 선택' : 'Choose a template preview' }).getByRole('button');
      const heroImage = page.locator('section[aria-labelledby="feature-title"] img');
      const originalPreview = await heroImage.getAttribute('src');
      await choices.nth(1).click();
      assert.notEqual(await heroImage.getAttribute('src'), originalPreview);
      assert.equal(await choices.nth(1).getAttribute('aria-pressed'), 'true');
      await choices.first().click();
      await heroImage.evaluate(img => img.decode());
      const packageSummary = page.locator('#pricing summary').first();
      await packageSummary.click();
      assert.equal(await page.locator('#pricing details[open]').count(), 1);
      await packageSummary.click();
      await page.evaluate(() => window.scrollTo(0, 0));
      assert.equal(await page.locator('#templates article img').count(), await page.locator('#templates article').count(), 'Every template must have a verified screenshot, not a fallback');
      const typography = await page.locator('#templates article h2').evaluateAll(headings => headings.every(h => Number(getComputedStyle(h).fontWeight) >= 700));
      assert.ok(typography, 'Portfolio titles must be bold');
      const decorativeBorders = await page.locator('#templates article, #templates article a > div:first-child, #information, #pricing, #faq, #faq details, footer').evaluateAll(elements => elements.some(el => ['borderTopWidth','borderBottomWidth','borderLeftWidth','borderRightWidth'].some(key => parseFloat(getComputedStyle(el)[key]) > 0)));
      assert.equal(decorativeBorders, false, 'Structure uses spacing, not separator strokes');
      const previews = await page.locator('main img[src*="/renewal/"]').evaluateAll(images => images.map(img => {
        const rect = img.getBoundingClientRect();
        const parent = img.parentElement.getBoundingClientRect();
        return { width: img.naturalWidth, height: img.naturalHeight, ratio: rect.width / rect.height, contained: rect.left >= parent.left - 1 && rect.right <= parent.right + 1 && rect.top >= parent.top - 1 && rect.bottom <= parent.bottom + 1, transform: getComputedStyle(img).transform };
      }));
      assert.ok(previews.length > 0);
      for (const preview of previews) {
        assert.equal(preview.width, 1440); assert.ok(preview.height >= 900 && preview.height <= 2700);
        assert.ok(Math.abs(preview.ratio - preview.width / preview.height) < 0.01); assert.ok(preview.contained); assert.equal(preview.transform, 'none');
      }
      assert.equal(await page.locator('svg path[fill="#F1B100"]').count(), 0);
      await page.screenshot({ path: `${directory}/${lang}-renewal-${width}x1000.png`, fullPage: true });
      await page.screenshot({ path: `${directory}/${lang}-renewal-${width}-first-screen.png` });
      if (width === 1440) await page.screenshot({ path: `${directory}/${lang}-renewal-first-screen.png` });
      const cards = page.locator('#templates article');
      const count = await cards.count();
      assert.ok(count > 0, 'Published templates must load');
      const firstName = await cards.first().locator('h2').textContent();
      const firstLink = await cards.first().locator('a').getAttribute('href');
      assert.ok(firstLink.startsWith(`/${lang}/templates/`));
      const search = page.getByRole('searchbox');
      await search.fill(firstName);
      assert.ok(await cards.count() > 0);
      await search.fill('zzzz-no-template-match-9876');
      assert.equal(await cards.count(), 0);
      await page.getByRole('button', { name: lang === 'ko' ? '검색과 분류 초기화' : 'Clear search and filters' }).click();
      assert.equal(await cards.count(), count);
      const options = await page.locator('select option').count();
      if (options > 1) { await page.locator('select').selectOption({ index: 1 }); assert.ok(await cards.count() > 0); await page.locator('select').selectOption(''); }
      if (await page.locator('#faq summary').count()) { await page.locator('#faq summary').first().click(); assert.equal(await page.locator('#faq details[open]').count(), 1); }
      const check = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth > innerWidth, broken: [...document.images].filter(img => !img.complete || !img.naturalWidth).length, h1Size: parseFloat(getComputedStyle(document.querySelector('h1')).fontSize), noindex: document.querySelector('meta[name="robots"]')?.content.includes('noindex'), inventedControls: document.querySelectorAll('input[autocomplete="organization"],#make-it-yours').length }));
      assert.equal(check.overflow, false); assert.equal(check.broken, 0); assert.ok(check.h1Size <= 20); assert.ok(check.noindex); assert.equal(check.inventedControls, 0); assert.equal(errors.length, 0);
      results.push({ lang, width, status: response.status(), templates: count, search: true, filter: true, ...check, errors });
      console.log(`${lang} ${width}: ${count} templates, passed`);
      await page.close();
    }
  }
} finally { await browser.close(); }
await writeFile(`${directory}/manifest.json`, JSON.stringify(results, null, 2));
console.log('All minimal renewal checks passed.');
