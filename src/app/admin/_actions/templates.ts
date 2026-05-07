"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createTemplate, softDeleteTemplate, updateTemplate, updateTemplateListSortMode } from "@/lib/admin/store";
import { isTemplateRuntimeRoute } from "@/lib/admin/runtime-routes";
import { uploadThumbnailFiles } from "@/lib/admin/thumbnail-upload";
import type { SortMode, TemplateJsType, TemplateVisibility } from "@/lib/admin/types";

function getThumbnailFiles(formData: FormData): File[] {
  return formData
    .getAll("thumbnailFiles")
    .filter((value): value is File => value instanceof File && value.size > 0);
}

function parseTemplateInput(formData: FormData) {
  return {
    name: String(formData.get("name") ?? ""),
    summary: String(formData.get("summary") ?? ""),
    description: String(formData.get("description") ?? ""),
    thumbnailRaw: String(formData.get("thumbnailRaw") ?? ""),
    jsType: String(formData.get("jsType") ?? "NEXT") as TemplateJsType,
    visibility: String(formData.get("visibility") ?? "PUBLIC") as TemplateVisibility,
    applicationEnabled: true,
    templateTypeId: String(formData.get("templateTypeId") ?? ""),
    tagsRaw: String(formData.get("tagsRaw") ?? ""),
    revisionsRaw: String(formData.get("revisionsRaw") ?? ""),
    subPageCount: 4,
    runtimeRoute: String(formData.get("runtimeRoute") ?? ""),
  };
}

export async function updateTemplateSortModeAction(formData: FormData) {
  const sortMode = String(formData.get("sortMode") ?? "LATEST") as SortMode;
  await updateTemplateListSortMode(sortMode);

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath("/admin/templates");
  redirect("/admin");
}

export type ActionState = { error: string } | null;

export async function createTemplateAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const input = parseTemplateInput(formData);
  if (!(await isTemplateRuntimeRoute(input.runtimeRoute))) {
    return { error: "실행 라우트를 다시 선택해 주세요." };
  }

  const files = getThumbnailFiles(formData);
  if (files.length < 3) {
    return { error: "기본 썸네일은 최소 3장 필요합니다." };
  }

  const thumbnailUrls = await uploadThumbnailFiles(files, input.name);

  await createTemplate({
    ...input,
    thumbnailRaw: thumbnailUrls.join("\n"),
  });

  revalidatePath("/");
  revalidatePath("/admin/templates");
  redirect("/admin/templates");
}

export async function updateTemplateAction(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  const id = String(formData.get("id") ?? "");
  if (!id) {
    return { error: "템플릿 ID가 필요합니다." };
  }

  const input = parseTemplateInput(formData);
  if (!(await isTemplateRuntimeRoute(input.runtimeRoute))) {
    return { error: "실행 라우트를 다시 선택해 주세요." };
  }

  const files = getThumbnailFiles(formData);
  let thumbnailRaw = String(formData.get("existingThumbnailRaw") ?? "");

  if (files.length > 0) {
    if (files.length < 3) {
      return { error: "썸네일을 교체할 때는 최소 3장을 업로드해 주세요." };
    }
    const thumbnailUrls = await uploadThumbnailFiles(files, input.name);
    thumbnailRaw = thumbnailUrls.join("\n");
  }

  if (!thumbnailRaw.trim()) {
    return { error: "기본 썸네일은 최소 3장 필요합니다." };
  }

  await updateTemplate(id, { ...input, thumbnailRaw });

  revalidatePath("/");
  revalidatePath("/admin/templates");
  revalidatePath(`/admin/templates/${id}`);
  redirect("/admin/templates");
}

export async function deleteTemplateAction(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  if (!id) {
    throw new Error("템플릿 ID가 필요합니다.");
  }

  await softDeleteTemplate(id);

  revalidatePath("/");
  revalidatePath("/admin/templates");
  redirect("/admin/templates");
}
