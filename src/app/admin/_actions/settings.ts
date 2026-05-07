"use server";

import { revalidatePath } from "next/cache";

import { updateHubBgImageUrl } from "@/lib/admin/store";
import { getSupabaseAdminClient } from "@/lib/supabase/admin";
import { randomUUID } from "node:crypto";

export type SettingsActionState = { error: string } | { ok: true } | null;

async function uploadBgFile(file: File): Promise<string> {
  const client = getSupabaseAdminClient();
  if (!client) throw new Error("Supabase 설정이 누락되었습니다.");

  const bucket = process.env.TEMPLATE_THUMBNAIL_BUCKET ?? "template-thumbnails";
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const filePath = `hub-bg/${randomUUID()}.${ext}`;
  const body = new Uint8Array(await file.arrayBuffer());

  const { error } = await client.storage.from(bucket).upload(filePath, body, {
    contentType: file.type,
    upsert: true,
  });
  if (error) throw new Error(`업로드 실패: ${error.message}`);

  const { data: { publicUrl } } = client.storage.from(bucket).getPublicUrl(filePath);
  return publicUrl;
}

export async function updateHubBgAction(
  _prev: SettingsActionState,
  formData: FormData,
): Promise<SettingsActionState> {
  const file = formData.get("bgFile");
  const urlInput = String(formData.get("bgUrl") ?? "").trim();

  let finalUrl = urlInput;

  if (file instanceof File && file.size > 0) {
    if (!file.type.startsWith("image/")) {
      return { error: "이미지 파일만 업로드할 수 있습니다." };
    }
    finalUrl = await uploadBgFile(file);
  }

  if (!finalUrl) {
    return { error: "이미지 파일 또는 URL을 입력해 주세요." };
  }

  await updateHubBgImageUrl(finalUrl);
  revalidatePath("/");

  return { ok: true };
}
