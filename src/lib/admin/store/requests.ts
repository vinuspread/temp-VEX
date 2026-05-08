import { randomUUID } from "node:crypto";

import type { RequestStatus, TemplateRequest } from "@/lib/admin/types";
import { nowIso } from "@/lib/admin/utils";
import { getStore, hydrateStoreFromSupabase, withMutation } from "./core";
import { getTemplateById } from "./templates";

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

  await withMutation((state) => { state.requests.push(request); });
  return request;
}

export async function listTemplateRequests(options?: {
  status?: RequestStatus | "ALL";
  keyword?: string;
}): Promise<TemplateRequest[]> {
  await hydrateStoreFromSupabase();
  return getStore().state.requests
    .filter((r) => {
      if (options?.status && options.status !== "ALL" && r.status !== options.status) return false;
      if (!options?.keyword) return true;
      const kw = options.keyword.toLowerCase();
      return [r.applicantName, r.applicantContact, r.message, r.companyName ?? ""].join(" ").toLowerCase().includes(kw);
    })
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
}

export async function getTemplateRequestById(id: string): Promise<TemplateRequest | null> {
  await hydrateStoreFromSupabase();
  return getStore().state.requests.find((r) => r.id === id) ?? null;
}

export async function updateTemplateRequestStatus(id: string, status: RequestStatus, memo: string): Promise<void> {
  await withMutation((state) => {
    const target = state.requests.find((r) => r.id === id);
    if (!target) throw new Error("신청 정보를 찾을 수 없습니다.");
    target.status = status;
    target.adminMemo = memo.trim() || null;
    target.updatedAt = nowIso();
    target.history.push({ at: nowIso(), status, memo: target.adminMemo });
  });
}
