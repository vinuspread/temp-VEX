const { cp, readdir, rm, stat } = require("node:fs/promises");
const path = require("node:path");

const TEMPLATES_DIR = path.join(__dirname, "..", "templates");
const APP_DIR = path.join(__dirname, "..", "src", "app");

const PROTECTED = new Set([
  "_actions",
  "[templateSlug]",
  "admin",
  "api",
  "auth",
  "not-authorized",
]);

async function syncTemplates() {
  const templateEntries = new Set(await readdir(TEMPLATES_DIR));
  const appEntries = await readdir(APP_DIR);

  // templates/에 없는 폴더는 src/app/에서 삭제
  for (const entry of appEntries) {
    if (PROTECTED.has(entry)) continue;
    if (entry.startsWith(".")) continue;

    const info = await stat(path.join(APP_DIR, entry));
    if (!info.isDirectory()) continue;

    if (!templateEntries.has(entry)) {
      await rm(path.join(APP_DIR, entry), { recursive: true, force: true });
      console.log(`✗ removed: ${entry}`);
    }
  }

  // templates/ 폴더를 src/app/으로 복사
  for (const entry of templateEntries) {
    if (entry.startsWith(".")) continue;

    const src = path.join(TEMPLATES_DIR, entry);
    const dest = path.join(APP_DIR, entry);

    const info = await stat(src);
    if (!info.isDirectory()) continue;

    await cp(src, dest, { recursive: true, force: true });
    console.log(`✓ synced: ${entry}`);
  }

  console.log("Template sync complete.");
}

syncTemplates().catch((err) => {
  console.error("Template sync failed:", err);
  process.exit(1);
});
