import { randomUUID } from "node:crypto";

import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import type {
  AdminStoreState,
  BackupSnapshot,
  RequestStatus,
  SortMode,
  TemplateItem,
  TemplateRequest,
  TemplateType,
  TemplateVisibility,
} from "@/lib/admin/types";
import {
  buildBackupName,
  normalizeSlugName,
  nowIso,
  parseCommaSeparatedTags,
  parseLineItems,
  randomSuffix,
} from "@/lib/admin/utils";

interface AdminMemoryStore {
  state: AdminStoreState;
  backups: BackupSnapshot[];
}

declare global {
  // eslint-disable-next-line no-var
  var __templateHubAdminStore__: AdminMemoryStore | undefined;
  // eslint-disable-next-line no-var
  var __templateHubAdminStoreHydrated__: boolean | undefined;
}

const STATE_KEY = "templatehub-admin-state";

const defaultTypeSeed = [
  { code: "promotional", label: "홍보형", sortOrder: 1 },
  { code: "shopping", label: "쇼핑몰형", sortOrder: 2 },
  { code: "business", label: "비즈니스형", sortOrder: 3 },
  { code: "personal", label: "개인형", sortOrder: 4 },
  { code: "management", label: "관리형", sortOrder: 5 },
] as const;

const hubTemplateSeed = [
  { name: "Airline", slug: "airline", summary: "Premium airline booking experience.", description: "항공 예약형 템플릿", previewPath: "/templates/static/airline/", jsType: "NEXT", typeCode: "business" },
  { name: "Car", slug: "car", summary: "Automotive brand showcase.", description: "자동차 브랜드 쇼케이스 템플릿", previewPath: "/templates/static/car/", jsType: "NEXT", typeCode: "promotional" },
  { name: "Cosmetic", slug: "cosmetic", summary: "Beauty & skincare brand site.", description: "뷰티/스킨케어 브랜드 템플릿", previewPath: "/templates/static/cosmetic/", jsType: "NEXT", typeCode: "shopping" },
  { name: "IR", slug: "ir", summary: "Investor relations platform.", description: "기업 IR 페이지 템플릿", previewPath: "/templates/static/ir/", jsType: "NEXT", typeCode: "business" },
  { name: "Magazine", slug: "magazine", summary: "Digital magazine layout.", description: "디지털 매거진 템플릿", previewPath: "/templates/static/magazine/", jsType: "NEXT", typeCode: "promotional" },
  { name: "Newspaper", slug: "newspaper", summary: "Online newspaper front page.", description: "온라인 신문 템플릿", previewPath: "/templates/static/newspaper/", jsType: "NEXT", typeCode: "promotional" },
] as const;

const defaultThumbnails = ["/images/hero_bg.png", "/images/hero_main.png", "/images/project-1.jpg"];

function getSeedThumbnailUrls(_slug: string): string[] {
  return defaultThumbnails;
}

function hasLegacyThumbnailSet(template: TemplateItem): boolean {
  return (
    template.thumbnailUrls.length === defaultThumbnails.length &&
    template.thumbnailUrls.every((item, index) => item === defaultThumbnails[index])
  );
}

function cloneState<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function createInitialStore(): AdminMemoryStore {
  const createdAt = nowIso();
  const templateTypes: TemplateType[] = defaultTypeSeed.map((type) => ({
    id: randomUUID(),
    code: type.code,
    label: type.label,
    isDefault: true,
    isActive: true,
    sortOrder: type.sortOrder,
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  }));

  const typeByCode = new Map(templateTypes.map((type) => [type.code, type.id]));

  const templates: TemplateItem[] = hubTemplateSeed.map((template, index) => {
    const templateTypeId = typeByCode.get(template.typeCode);
    if (!templateTypeId) throw new Error(`missing type for ${template.name}`);
    const thumbnailUrls = getSeedThumbnailUrls(template.slug);
    return {
      id: randomUUID(),
      name: template.name,
      slug: template.slug,
      templateTypeId,
      summary: template.summary,
      description: template.description,
      thumbnailUrls,
      coverThumbnailUrl: thumbnailUrls[0],
      jsType: template.jsType,
      visibility: "PUBLIC",
      applicationEnabled: true,
      sortOrder: index + 1,
      tags: ["웹", "템플릿"],
      revisions: ["v1.0.0 | 초기 등록"],
      pageInfo: { hasMainPage: true, subPageCount: 4 },
      previewPath: template.previewPath,
      createdAt,
      updatedAt: createdAt,
      deletedAt: null,
    };
  });

  return {
    state: {
      templateListSortMode: "LATEST",
      hubBgImageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000",
      templateTypes,
      templates,
      requests: [],
    },
    backups: [],
  };
}

function getStore(): AdminMemoryStore {
  if (!globalThis.__templateHubAdminStore__) {
    globalThis.__templateHubAdminStore__ = createInitialStore();
  }
  return globalThis.__templateHubAdminStore__;
}

function isAdminMemoryStore(value: unknown): value is AdminMemoryStore {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Record<string, unknown>;
  if (!Array.isArray(candidate.backups)) return false;
  if (!candidate.state || typeof candidate.state !== "object") return false;
  const state = candidate.state as Record<string, unknown>;
  return Array.isArray(state.templateTypes) && Array.isArray(state.templates) && Array.isArray(state.requests);
}

async function persistStoreToSupabase(): Promise<void> {
  const client = getSupabaseAdminClient();
  if (!client) return;

  await client.from("admin_state").upsert({
    key: STATE_KEY,
    payload: getStore(),
    updated_at: nowIso(),
  });
}

async function hydrateStoreFromSupabase(): Promise<void> {
  if (globalThis.__templateHubAdminStoreHydrated__) return;

  const client = getSupabaseAdminClient();
  if (!client) {
    globalThis.__templateHubAdminStoreHydrated__ = true;
    return;
  }

  const { data, error } = await client.from("admin_state").select("payload").eq("key", STATE_KEY).maybeSingle();

  if (error) {
    globalThis.__templateHubAdminStoreHydrated__ = true;
    return;
  }

  if (isAdminMemoryStore(data?.payload)) {
    const hydrated = cloneState(data.payload);
    hydrated.state.templateListSortMode ??= "LATEST";
    hydrated.state.hubBgImageUrl ??= "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000";
    let migrated = false;
    hydrated.state.templates = hydrated.state.templates.map((template) => {
      if (!hasLegacyThumbnailSet(template)) {
        return template;
      }

      const thumbnailUrls = getSeedThumbnailUrls(template.slug);
      migrated = true;

      return {
        ...template,
        thumbnailUrls,
        coverThumbnailUrl: thumbnailUrls[0],
        updatedAt: nowIso(),
      };
    });
    globalThis.__templateHubAdminStore__ = hydrated;

    if (migrated) {
      await persistStoreToSupabase();
    }
  } else {
    await persistStoreToSupabase();
  }

  globalThis.__templateHubAdminStoreHydrated__ = true;
}

async function withMutation(mutator: (state: AdminStoreState) => void): Promise<void> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const next = cloneState(store.state);
  mutator(next);
  store.state = next;
  await persistStoreToSupabase();
}

export async function listTemplateTypes(): Promise<TemplateType[]> {
  await hydrateStoreFromSupabase();
  return getStore().state.templateTypes.slice().sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function listTemplates(includeDeleted = false): Promise<TemplateItem[]> {
  await hydrateStoreFromSupabase();
  const { templates, templateListSortMode } = getStore().state;
  const filtered = includeDeleted ? templates : templates.filter((item) => !item.deletedAt);
  if (templateListSortMode === "LATEST") {
    return filtered.slice().sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
  }
  return filtered.slice().sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getTemplateListSortMode(): Promise<SortMode> {
  await hydrateStoreFromSupabase();
  return getStore().state.templateListSortMode;
}

export async function updateTemplateListSortMode(mode: SortMode): Promise<void> {
  await withMutation((state) => {
    state.templateListSortMode = mode;
  });
}

export async function getHubBgImageUrl(): Promise<string> {
  await hydrateStoreFromSupabase();
  return getStore().state.hubBgImageUrl ?? "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000";
}

export async function updateHubBgImageUrl(url: string): Promise<void> {
  await withMutation((state) => {
    state.hubBgImageUrl = url;
  });
}

export async function listPublicTemplates(): Promise<TemplateItem[]> {
  const templates = await listTemplates(false);
  return templates.filter((template) => template.visibility === "PUBLIC");
}

export async function getTemplateById(id: string): Promise<TemplateItem | null> {
  await hydrateStoreFromSupabase();
  return getStore().state.templates.find((item) => item.id === id) ?? null;
}

export async function getTemplateBySlug(slug: string): Promise<TemplateItem | null> {
  await hydrateStoreFromSupabase();
  return getStore().state.templates.find((item) => item.slug === slug && !item.deletedAt) ?? null;
}

export async function createTemplate(input: {
  name: string;
  summary: string;
  description: string;
  thumbnailRaw: string;
  jsType: "NEXT" | "REACT";
  visibility: TemplateVisibility;
  applicationEnabled: boolean;
  templateTypeId: string;
  tagsRaw: string;
  revisionsRaw: string;
  subPageCount: number;
  runtimeRoute: string;
}): Promise<TemplateItem> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const createdAt = nowIso();
  const runtimeRoute = input.runtimeRoute.trim().replace(/^\//, "");
  if (!runtimeRoute) throw new Error("실행 라우트를 선택해 주세요.");
  const previewPath = `/${runtimeRoute}`;

  const duplicatedRoute = store.state.templates.some((item) => !item.deletedAt && item.previewPath === previewPath);
  if (duplicatedRoute) {
    throw new Error("이미 등록된 템플릿 라우트입니다.");
  }

  const base = normalizeSlugName(input.name) || "template";
  let slug = "";
  for (let i = 0; i < 10; i += 1) {
    const candidate = `${base}-${randomSuffix(5)}`;
    if (!store.state.templates.some((item) => item.slug === candidate)) {
      slug = candidate;
      break;
    }
  }
  if (!slug) throw new Error("slug 생성 실패");

  const thumbnailUrls = parseLineItems(input.thumbnailRaw);
  if (thumbnailUrls.length < 3) throw new Error("기본 썸네일은 최소 3장 필요합니다.");

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
    pageInfo: {
      hasMainPage: true,
      subPageCount: input.subPageCount,
    },
    previewPath,
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  };

  await withMutation((state) => {
    state.templates.push(template);
  });

  return template;
}

export async function updateTemplate(
  id: string,
  input: {
    name: string;
    summary: string;
    description: string;
    thumbnailRaw: string;
    jsType: "NEXT" | "REACT";
    visibility: TemplateVisibility;
    applicationEnabled: boolean;
    templateTypeId: string;
    tagsRaw: string;
    revisionsRaw: string;
    subPageCount: number;
    runtimeRoute: string;
  },
): Promise<TemplateItem> {
  const existing = await getTemplateById(id);
  if (!existing) throw new Error("수정할 템플릿을 찾을 수 없습니다.");

  const runtimeRoute = input.runtimeRoute.trim().replace(/^\//, "");
  if (!runtimeRoute) throw new Error("실행 라우트를 선택해 주세요.");
  const previewPath = `/${runtimeRoute}`;

  await hydrateStoreFromSupabase();
  const duplicatedRoute = getStore().state.templates.some(
    (item) => item.id !== id && !item.deletedAt && item.previewPath === previewPath,
  );
  if (duplicatedRoute) {
    throw new Error("이미 등록된 템플릿 라우트입니다.");
  }

  const thumbnailUrls = parseLineItems(input.thumbnailRaw);
  if (thumbnailUrls.length < 3) throw new Error("기본 썸네일은 최소 3장 필요합니다.");

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
    pageInfo: {
      hasMainPage: true,
      subPageCount: input.subPageCount,
    },
    previewPath,
    updatedAt: nowIso(),
  };

  await withMutation((state) => {
    const index = state.templates.findIndex((item) => item.id === id);
    if (index >= 0) state.templates[index] = updated;
  });

  return updated;
}

export async function softDeleteTemplate(id: string): Promise<void> {
  await withMutation((state) => {
    const target = state.templates.find((item) => item.id === id);
    if (!target || target.deletedAt) return;
    target.deletedAt = nowIso();
    target.updatedAt = nowIso();
    target.visibility = "PRIVATE";
    target.applicationEnabled = false;
  });
}

export async function createTemplateType(label: string): Promise<TemplateType> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const normalized = label.trim();
  if (!normalized) throw new Error("유형 이름을 입력해 주세요.");
  const duplicate = store.state.templateTypes.some(
    (type) => !type.deletedAt && type.label.toLowerCase() === normalized.toLowerCase(),
  );
  if (duplicate) throw new Error("중복된 유형명입니다.");

  const createdAt = nowIso();
  const type: TemplateType = {
    id: randomUUID(),
    code: `${normalizeSlugName(normalized)}-${randomSuffix(5)}`,
    label: normalized,
    isDefault: false,
    isActive: true,
    sortOrder: store.state.templateTypes.length + 1,
    createdAt,
    updatedAt: createdAt,
    deletedAt: null,
  };

  await withMutation((state) => {
    state.templateTypes.push(type);
  });

  return type;
}

export async function updateTemplateTypeLabel(id: string, label: string): Promise<void> {
  const normalized = label.trim();
  if (!normalized) throw new Error("유형 이름을 입력해 주세요.");

  await withMutation((state) => {
    const duplicate = state.templateTypes.some(
      (item) => item.id !== id && !item.deletedAt && item.label.toLowerCase() === normalized.toLowerCase(),
    );
    if (duplicate) throw new Error("중복된 유형명입니다.");

    const target = state.templateTypes.find((item) => item.id === id);
    if (!target) throw new Error("수정할 유형을 찾을 수 없습니다.");
    target.label = normalized;
    target.updatedAt = nowIso();
  });
}

export async function deactivateTemplateType(id: string): Promise<void> {
  await withMutation((state) => {
    const target = state.templateTypes.find((item) => item.id === id);
    if (!target) throw new Error("비활성화할 유형을 찾을 수 없습니다.");
    target.isActive = false;
    target.deletedAt = nowIso();
    target.updatedAt = nowIso();

    state.templates.forEach((template) => {
      if (template.templateTypeId === id && !template.deletedAt) {
        template.visibility = "PRIVATE";
        template.applicationEnabled = false;
        template.updatedAt = nowIso();
      }
    });
  });
}

export async function createTemplateRequest(input: {
  templateId: string;
  applicantName: string;
  applicantContact: string;
  companyName?: string;
  message: string;
}): Promise<TemplateRequest> {
  const template = await getTemplateById(input.templateId);
  if (!template || template.deletedAt) throw new Error("요청할 템플릿을 찾을 수 없습니다.");
  if (template.visibility !== "PUBLIC") throw new Error("비공개 템플릿은 신청할 수 없습니다.");
  if (!template.applicationEnabled) throw new Error("현재 신청이 비활성화된 템플릿입니다.");

  const createdAt = nowIso();
  const request: TemplateRequest = {
    id: randomUUID(),
    templateId: template.id,
    applicantName: input.applicantName.trim(),
    applicantContact: input.applicantContact.trim(),
    companyName: input.companyName?.trim() || null,
    message: input.message.trim(),
    status: "RECEIVED",
    adminMemo: null,
    history: [{ at: createdAt, status: "RECEIVED", memo: null }],
    createdAt,
    updatedAt: createdAt,
  };

  await withMutation((state) => {
    state.requests.push(request);
  });

  return request;
}

export async function listTemplateRequests(options?: {
  status?: RequestStatus | "ALL";
  keyword?: string;
}): Promise<TemplateRequest[]> {
  await hydrateStoreFromSupabase();
  const requests = getStore().state.requests;
  return requests
    .filter((request) => {
      if (options?.status && options.status !== "ALL" && request.status !== options.status) return false;
      if (!options?.keyword) return true;
      const keyword = options.keyword.toLowerCase();
      return [request.applicantName, request.applicantContact, request.message, request.companyName ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(keyword);
    })
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
}

export async function getTemplateRequestById(id: string): Promise<TemplateRequest | null> {
  await hydrateStoreFromSupabase();
  return getStore().state.requests.find((request) => request.id === id) ?? null;
}

export async function updateTemplateRequestStatus(id: string, status: RequestStatus, memo: string): Promise<void> {
  await withMutation((state) => {
    const target = state.requests.find((item) => item.id === id);
    if (!target) throw new Error("신청 정보를 찾을 수 없습니다.");
    target.status = status;
    target.adminMemo = memo.trim() || null;
    target.updatedAt = nowIso();
    target.history.push({ at: nowIso(), status, memo: target.adminMemo });
  });
}

export async function createBackupSnapshot(): Promise<BackupSnapshot> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const backup: BackupSnapshot = {
    id: randomUUID(),
    name: buildBackupName(),
    createdAt: nowIso(),
    data: cloneState(store.state),
  };

  store.backups = [backup, ...store.backups].slice(0, 4);
  await persistStoreToSupabase();
  return backup;
}

export async function listBackups(): Promise<BackupSnapshot[]> {
  await hydrateStoreFromSupabase();
  return getStore().backups.slice();
}

export async function restoreBackupSnapshot(backupId: string): Promise<void> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const target = store.backups.find((item) => item.id === backupId);
  if (!target) throw new Error("복구할 백업 파일을 찾을 수 없습니다.");

  const rollbackSnapshot: BackupSnapshot = {
    id: randomUUID(),
    name: `${buildBackupName()}_rollback`,
    createdAt: nowIso(),
    data: cloneState(store.state),
  };

  store.backups = [rollbackSnapshot, ...store.backups].slice(0, 4);
  store.state = cloneState(target.data);
  await persistStoreToSupabase();
}

export async function getDashboardStats(): Promise<{
  requestTotal: number;
  requestByStatus: Record<RequestStatus, number>;
  templateTotal: number;
}> {
  await hydrateStoreFromSupabase();
  const state = getStore().state;
  const requestByStatus: Record<RequestStatus, number> = {
    RECEIVED: 0,
    REVIEWING: 0,
    DONE: 0,
    ON_HOLD: 0,
  };

  state.requests.forEach((request) => {
    requestByStatus[request.status] += 1;
  });

  return {
    requestTotal: state.requests.length,
    requestByStatus,
    templateTotal: state.templates.filter((template) => !template.deletedAt).length,
  };
}

export async function getTemplateTypeLabel(typeId: string): Promise<string> {
  await hydrateStoreFromSupabase();
  return getStore().state.templateTypes.find((item) => item.id === typeId)?.label ?? "미분류";
}
