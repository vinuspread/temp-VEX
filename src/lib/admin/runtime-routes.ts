import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const TEMPLATES_DIR = path.join(process.cwd(), "templates");

export interface TemplateRuntimeOption {
  key: string;
  name: string;
  runtimeRoute: string;
  sourcePath: string;
}

async function scanTemplateRoutes(): Promise<TemplateRuntimeOption[]> {
  const entries = await readdir(TEMPLATES_DIR);
  const results: TemplateRuntimeOption[] = [];

  for (const entry of entries) {
    if (entry.startsWith(".")) continue;

    const fullPath = path.join(TEMPLATES_DIR, entry);
    const info = await stat(fullPath);
    if (!info.isDirectory()) continue;

    results.push({
      key: entry,
      name: entry.charAt(0).toUpperCase() + entry.slice(1),
      runtimeRoute: entry,
      sourcePath: `templates/${entry}`,
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
