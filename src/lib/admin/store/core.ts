import { randomUUID } from "node:crypto";

import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import type { AdminStoreState, BackupSnapshot, TemplateItem, TemplateType } from "@/lib/admin/types";
import { buildBackupName, nowIso, randomSuffix, normalizeSlugName } from "@/lib/admin/utils";

export interface AdminMemoryStore {
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

// ─── 시드 데이터 ────────────────────────────────────────────────────────────

const defaultTypeSeed = [
  { code: "promotional", label: "홍보형", sortOrder: 1 },
  { code: "shopping",    label: "쇼핑몰형", sortOrder: 2 },
  { code: "business",   label: "비즈니스형", sortOrder: 3 },
  { code: "personal",   label: "개인형",   sortOrder: 4 },
  { code: "management", label: "관리형",   sortOrder: 5 },
] as const;

const hubTemplateSeed = [
  { name: "Airline",   slug: "airline_a_en",   summary: "Premium airline booking experience.",   description: "항공 예약형 템플릿",         previewPath: "/templates/static/airline_a_en/index.html",   jsType: "STATIC", typeCode: "business"    },
  { name: "Car",       slug: "car_a_en",        summary: "Automotive brand showcase.",            description: "자동차 브랜드 쇼케이스 템플릿", previewPath: "/templates/static/car_a_en/index.html",        jsType: "STATIC", typeCode: "promotional" },
  { name: "Cosmetic",  slug: "cosmetic_a_en",   summary: "Beauty & skincare brand site.",         description: "뷰티/스킨케어 브랜드 템플릿",  previewPath: "/templates/static/cosmetic_a_en/index.html",   jsType: "STATIC", typeCode: "shopping"    },
  { name: "IR",        slug: "ir_a_en",         summary: "Investor relations platform.",          description: "기업 IR 페이지 템플릿",        previewPath: "/templates/static/ir_a_en/index.html",         jsType: "STATIC", typeCode: "business"    },
  { name: "Magazine",  slug: "magazine_a_en",   summary: "Digital magazine layout.",              description: "디지털 매거진 템플릿",          previewPath: "/templates/static/magazine_a_en/index.html",   jsType: "STATIC", typeCode: "promotional" },
  { name: "Newspaper", slug: "newspaper_a_en",  summary: "Online newspaper front page.",          description: "온라인 신문 템플릿",            previewPath: "/templates/static/newspaper_a_en/index.html",  jsType: "STATIC", typeCode: "promotional" },
] as const;

const defaultThumbnails = ["/images/hero_bg.png", "/images/hero_main.png", "/images/project-1.jpg"];

function getSeedThumbnailUrls(_slug: string): string[] {
  return defaultThumbnails;
}

export function hasLegacyThumbnailSet(template: TemplateItem): boolean {
  return (
    template.thumbnailUrls.length === defaultThumbnails.length &&
    template.thumbnailUrls.every((url, i) => url === defaultThumbnails[i])
  );
}

// ─── 인메모리 스토어 ─────────────────────────────────────────────────────────

export function cloneState<T>(value: T): T {
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

  const typeByCode = new Map(templateTypes.map((t) => [t.code, t.id]));

  const templates: TemplateItem[] = hubTemplateSeed.map((seed, index) => {
    const templateTypeId = typeByCode.get(seed.typeCode);
    if (!templateTypeId) throw new Error(`missing type for ${seed.name}`);
    const thumbnailUrls = getSeedThumbnailUrls(seed.slug);
    return {
      id: randomUUID(),
      name: seed.name,
      slug: seed.slug,
      templateTypeId,
      summary: seed.summary,
      description: seed.description,
      thumbnailUrls,
      coverThumbnailUrl: thumbnailUrls[0],
      jsType: seed.jsType,
      visibility: "PUBLIC",
      applicationEnabled: true,
      sortOrder: index + 1,
      tags: ["웹", "템플릿"],
      revisions: ["v1.0.0 | 초기 등록"],
      previewPath: seed.previewPath,
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

export function getStore(): AdminMemoryStore {
  if (!globalThis.__templateHubAdminStore__) {
    globalThis.__templateHubAdminStore__ = createInitialStore();
  }
  return globalThis.__templateHubAdminStore__;
}

// ─── Supabase 영속성 ──────────────────────────────────────────────────────────

function isAdminMemoryStore(value: unknown): value is AdminMemoryStore {
  if (!value || typeof value !== "object") return false;
  const c = value as Record<string, unknown>;
  if (!Array.isArray(c.backups)) return false;
  if (!c.state || typeof c.state !== "object") return false;
  const s = c.state as Record<string, unknown>;
  return Array.isArray(s.templateTypes) && Array.isArray(s.templates) && Array.isArray(s.requests);
}

export async function persistStoreToSupabase(): Promise<void> {
  const client = getSupabaseAdminClient();
  if (!client) return;
  const { error } = await client.from("admin_state").upsert({
    key: STATE_KEY,
    payload: getStore(),
    updated_at: nowIso(),
  });
  if (error) console.error("[store] persist 실패:", error.message);
}

export async function hydrateStoreFromSupabase(): Promise<void> {
  if (globalThis.__templateHubAdminStoreHydrated__) return;

  const client = getSupabaseAdminClient();
  if (!client) {
    globalThis.__templateHubAdminStoreHydrated__ = true;
    return;
  }

  const { data, error } = await client
    .from("admin_state")
    .select("payload")
    .eq("key", STATE_KEY)
    .maybeSingle();

  if (error) {
    console.error("[store] hydrate 실패:", error.message);
    globalThis.__templateHubAdminStoreHydrated__ = true;
    return;
  }

  if (isAdminMemoryStore(data?.payload)) {
    const hydrated = cloneState(data.payload);
    hydrated.state.templateListSortMode ??= "LATEST";
    hydrated.state.hubBgImageUrl ??= "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000";

    let migrated = false;
    hydrated.state.templates = hydrated.state.templates.map((template) => {
      if (!hasLegacyThumbnailSet(template)) return template;
      const thumbnailUrls = getSeedThumbnailUrls(template.slug);
      migrated = true;
      return { ...template, thumbnailUrls, coverThumbnailUrl: thumbnailUrls[0], updatedAt: nowIso() };
    });

    globalThis.__templateHubAdminStore__ = hydrated;
    if (migrated) await persistStoreToSupabase();
  } else {
    await persistStoreToSupabase();
  }

  globalThis.__templateHubAdminStoreHydrated__ = true;
}

export async function withMutation(mutator: (state: AdminStoreState) => void): Promise<void> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const next = cloneState(store.state);
  mutator(next);
  store.state = next;
  await persistStoreToSupabase();
}

// buildBackupName, normalizeSlugName, randomSuffix re-export for domain files
export { buildBackupName, normalizeSlugName, randomSuffix };
