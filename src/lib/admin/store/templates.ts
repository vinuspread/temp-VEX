import { randomUUID } from "node:crypto";

import type { SortMode, TemplateItem, TemplateJsType, TemplateVisibility } from "@/lib/admin/types";
import { nowIso, parseCommaSeparatedTags, parseLineItems } from "@/lib/admin/utils";
import { cloneState, getStore, hydrateStoreFromSupabase, normalizeSlugName, randomSuffix, withMutation } from "./core";

export async function listTemplates(includeDeleted = false): Promise<TemplateItem[]> {
  await hydrateStoreFromSupabase();
  const { templates, templateListSortMode } = getStore().state;
  const filtered = includeDeleted ? templates : templates.filter((t) => !t.deletedAt);
  return templateListSortMode === "LATEST"
    ? filtered.slice().sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    : filtered.slice().sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function listPublicTemplates(): Promise<TemplateItem[]> {
  const templates = await listTemplates(false);
  return templates.filter((t) => t.visibility === "PUBLIC");
}

export async function getTemplateById(id: string): Promise<TemplateItem | null> {
  await hydrateStoreFromSupabase();
  return getStore().state.templates.find((t) => t.id === id) ?? null;
}

export async function getTemplateBySlug(slug: string): Promise<TemplateItem | null> {
  await hydrateStoreFromSupabase();
  return getStore().state.templates.find((t) => t.slug === slug && !t.deletedAt) ?? null;
}

export async function getTemplateListSortMode(): Promise<SortMode> {
  await hydrateStoreFromSupabase();
  return getStore().state.templateListSortMode;
}

export async function updateTemplateListSortMode(mode: SortMode): Promise<void> {
  await withMutation((state) => { state.templateListSortMode = mode; });
}

export async function getHubBgImageUrl(): Promise<string> {
  await hydrateStoreFromSupabase();
  return getStore().state.hubBgImageUrl ?? "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000";
}

export async function updateHubBgImageUrl(url: string): Promise<void> {
  await withMutation((state) => { state.hubBgImageUrl = url; });
}

export async function createTemplate(input: {
  name: string;
  summary: string;
  description: string;
  thumbnailRaw: string;
  jsType: TemplateJsType;
  visibility: TemplateVisibility;
  applicationEnabled: boolean;
  templateTypeId: string;
  tagsRaw: string;
  revisionsRaw: string;
  runtimeRoute: string;
}): Promise<TemplateItem> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const createdAt = nowIso();
  const runtimeRoute = input.runtimeRoute.trim().replace(/^\//, "");
  if (!runtimeRoute) throw new Error("실행 라우트를 선택해 주세요.");
  const previewPath = `/${runtimeRoute}`;

  if (store.state.templates.some((t) => !t.deletedAt && t.previewPath === previewPath)) {
    throw new Error("이미 등록된 템플릿 라우트입니다.");
  }

  const base = normalizeSlugName(input.name) || "template";
  let slug = "";
  for (let i = 0; i < 10; i += 1) {
    const candidate = `${base}-${randomSuffix(5)}`;
    if (!store.state.templates.some((t) => t.slug === candidate)) { slug = candidate; break; }
  }
  if (!slug) throw new Error("slug 생성 실패");

  const thumbnailUrls = parseLineItems(input.thumbnailRaw);
  const template: TemplateItem = {
    id: randomUUID(),
    name: input.name.trim(),
    slug,
    templateTypeId: input.templateTypeId,
    summary: input.summary.trim(),
    description: input.description.trim(),
    thumbnailUrls,
    coverThumbnailUrl: thumbnailUrls[0],
    jsType: input.jsType,
    visibility: input.visibility,
    applicationEnabled: input.applicationEnabled,
    sortOrder: store.state.templates.length + 1,
    tags: parseCommaSeparatedTags(input.tagsRaw),
    revisions: parseLineItems(input.revisionsRaw),
    previewPath,
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  };

  await withMutation((state) => { state.templates.push(template); });
  return template;
}

export async function updateTemplate(
  id: string,
  input: {
    name: string;
    summary: string;
    description: string;
    thumbnailRaw: string;
    jsType: TemplateJsType;
    visibility: TemplateVisibility;
    applicationEnabled: boolean;
    templateTypeId: string;
    tagsRaw: string;
    revisionsRaw: string;
    runtimeRoute: string;
  },
): Promise<TemplateItem> {
  const existing = await getTemplateById(id);
  if (!existing) throw new Error("수정할 템플릿을 찾을 수 없습니다.");

  const runtimeRoute = input.runtimeRoute.trim().replace(/^\//, "");
  if (!runtimeRoute) throw new Error("실행 라우트를 선택해 주세요.");
  const previewPath = `/${runtimeRoute}`;

  await hydrateStoreFromSupabase();
  if (getStore().state.templates.some((t) => t.id !== id && !t.deletedAt && t.previewPath === previewPath)) {
    throw new Error("이미 등록된 템플릿 라우트입니다.");
  }

  const thumbnailUrls = parseLineItems(input.thumbnailRaw);
  const updated: TemplateItem = {
    ...existing,
    name: input.name.trim(),
    summary: input.summary.trim(),
    description: input.description.trim(),
    thumbnailUrls,
    coverThumbnailUrl: thumbnailUrls[0],
    jsType: input.jsType,
    visibility: input.visibility,
    applicationEnabled: input.applicationEnabled,
    templateTypeId: input.templateTypeId,
    tags: parseCommaSeparatedTags(input.tagsRaw),
    revisions: parseLineItems(input.revisionsRaw),
    sortOrder: existing.sortOrder,
    previewPath,
    updatedAt: nowIso(),
  };

  await withMutation((state) => {
    const idx = state.templates.findIndex((t) => t.id === id);
    if (idx >= 0) state.templates[idx] = updated;
  });
  return updated;
}

export async function softDeleteTemplate(id: string): Promise<void> {
  await withMutation((state) => {
    const target = state.templates.find((t) => t.id === id);
    if (!target || target.deletedAt) return;
    target.deletedAt = nowIso();
    target.updatedAt = nowIso();
    target.visibility = "PRIVATE";
    target.applicationEnabled = false;
  });
}

export async function getTemplateTypeLabel(typeId: string): Promise<string> {
  await hydrateStoreFromSupabase();
  return getStore().state.templateTypes.find((t) => t.id === typeId)?.label ?? "미분류";
}
