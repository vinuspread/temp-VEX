import { randomUUID } from "node:crypto";

import type { TemplateType } from "@/lib/admin/types";
import { nowIso, normalizeSlugName, randomSuffix } from "@/lib/admin/utils";
import { getStore, hydrateStoreFromSupabase, withMutation } from "./core";

export async function listTemplateTypes(): Promise<TemplateType[]> {
  await hydrateStoreFromSupabase();
  return getStore().state.templateTypes.slice().sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function createTemplateType(label: string): Promise<TemplateType> {
  await hydrateStoreFromSupabase();
  const store = getStore();
  const normalized = label.trim();
  if (!normalized) throw new Error("유형 이름을 입력해 주세요.");
  if (store.state.templateTypes.some((t) => !t.deletedAt && t.label.toLowerCase() === normalized.toLowerCase())) {
    throw new Error("중복된 유형명입니다.");
  }

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

  await withMutation((state) => { state.templateTypes.push(type); });
  return type;
}

export async function updateTemplateTypeLabel(id: string, label: string): Promise<void> {
  const normalized = label.trim();
  if (!normalized) throw new Error("유형 이름을 입력해 주세요.");

  await withMutation((state) => {
    if (state.templateTypes.some((t) => t.id !== id && !t.deletedAt && t.label.toLowerCase() === normalized.toLowerCase())) {
      throw new Error("중복된 유형명입니다.");
    }
    const target = state.templateTypes.find((t) => t.id === id);
    if (!target) throw new Error("수정할 유형을 찾을 수 없습니다.");
    target.label = normalized;
    target.updatedAt = nowIso();
  });
}

export async function deactivateTemplateType(id: string): Promise<void> {
  await withMutation((state) => {
    const target = state.templateTypes.find((t) => t.id === id);
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
