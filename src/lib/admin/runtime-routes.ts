import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const STATIC_TEMPLATES_DIR = path.join(process.cwd(), "public", "templates", "static");

export interface TemplateRuntimeOption {
  key: string;
  name: string;
  runtimeRoute: string;
  sourcePath: string;
}

async function scanTemplateRoutes(): Promise<TemplateRuntimeOption[]> {
  const entries = await readdir(STATIC_TEMPLATES_DIR);
  const results: TemplateRuntimeOption[] = [];

  for (const entry of entries) {
    if (entry.startsWith(".")) continue;

    const fullPath = path.join(STATIC_TEMPLATES_DIR, entry);
    const info = await stat(fullPath);
    if (!info.isDirectory()) continue;

    results.push({
      key: entry,
      name: entry.charAt(0).toUpperCase() + entry.slice(1),
      runtimeRoute: `templates/static/${entry}/index.html`,
      sourcePath: `public/templates/static/${entry}`,
    });
  }

  return results;
}

export async function listTemplateRuntimeOptions(): Promise<TemplateRuntimeOption[]> {
  const options = await scanTemplateRoutes();
  return options.sort((a, b) => a.name.localeCompare(b.name));
}

export async function listTemplateRuntimeRoutes(): Promise<string[]> {
  const options = await listTemplateRuntimeOptions();
  return options.map((item) => item.runtimeRoute);
}

export async function isTemplateRuntimeRoute(route: string): Promise<boolean> {
  const normalized = route.trim().replace(/^\//, "");
  if (!normalized) return false;
  const routes = await listTemplateRuntimeRoutes();
  return routes.includes(normalized);
}
