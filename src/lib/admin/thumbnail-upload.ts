import { randomUUID } from "node:crypto";

import { getSupabaseAdminClient } from "@/lib/supabase/admin";

const DEFAULT_BUCKET = "template-thumbnails";

function sanitizeSegment(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getFileExtension(file: File): string {
  const fromName = file.name.split(".").pop()?.toLowerCase();
  if (fromName && /^[a-z0-9]{1,10}$/.test(fromName)) {
    return fromName;
  }

  if (file.type === "image/png") return "png";
  if (file.type === "image/jpeg") return "jpg";
  if (file.type === "image/webp") return "webp";
  if (file.type === "image/gif") return "gif";
  return "bin";
}

export async function uploadThumbnailFiles(files: File[], templateName: string): Promise<string[]> {
  if (!files.length) {
    return [];
  }

  const client = getSupabaseAdminClient();
  if (!client) {
    throw new Error("썸네일 업로드를 위한 Supabase 관리자 설정이 누락되었습니다.");
  }

  const bucket = process.env.TEMPLATE_THUMBNAIL_BUCKET ?? DEFAULT_BUCKET;
  const folder = `${sanitizeSegment(templateName) || "template"}-${Date.now()}`;
  const uploadedUrls: string[] = [];

  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    if (!file.type.startsWith("image/")) {
      throw new Error("이미지 파일만 업로드할 수 있습니다.");
    }

    const extension = getFileExtension(file);
    const filePath = `${folder}/${String(index + 1).padStart(2, "0")}-${randomUUID()}.${extension}`;
    const body = new Uint8Array(await file.arrayBuffer());

    const { error } = await client.storage.from(bucket).upload(filePath, body, {
      contentType: file.type,
      upsert: false,
    });

    if (error) {
      throw new Error(`썸네일 업로드 실패: ${error.message} (bucket: ${bucket})`);
    }

    const {
      data: { publicUrl },
    } = client.storage.from(bucket).getPublicUrl(filePath);

    uploadedUrls.push(publicUrl);
  }

  return uploadedUrls;
}
