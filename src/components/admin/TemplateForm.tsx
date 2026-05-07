"use client";

import { useActionState } from "react";

import type { TemplateItem, TemplateType } from "@/lib/admin/types";
import type { TemplateRuntimeOption } from "@/lib/admin/runtime-routes";
import type { ActionState } from "@/app/admin/_actions/templates";

import { ThumbnailDropzone } from "@/components/admin/ThumbnailDropzone";

interface TemplateFormProps {
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  templateTypes: TemplateType[];
  runtimeOptions: TemplateRuntimeOption[];
  initial?: TemplateItem;
}

function textAreaJoin(values: string[]): string {
  return values.join("\n");
}

export function TemplateForm({ action, templateTypes, runtimeOptions, initial }: TemplateFormProps) {
  const initialRoute = initial?.previewPath?.replace(/^\//, "") ?? runtimeOptions[0]?.runtimeRoute ?? "";
  const [state, formAction] = useActionState(action, null);

  return (
    <form action={formAction} className="space-y-6">
      {initial ? <input type="hidden" name="id" value={initial.id} /> : null}

      {state?.error ? (
        <div className="rounded-lg border border-red-500/40 bg-red-950/40 px-4 py-3 text-sm text-red-300">
          {state.error}
        </div>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-zinc-300">템플릿명</span>
          <input
            name="name"
            required
            defaultValue={initial?.name ?? ""}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-zinc-300">유형</span>
          <select
            name="templateTypeId"
            required
            defaultValue={initial?.templateTypeId ?? templateTypes.find((item) => item.isActive)?.id}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          >
            {templateTypes
              .filter((type) => type.isActive)
              .map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
          </select>
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-zinc-300">JS 유형</span>
          <select
            name="jsType"
            defaultValue={initial?.jsType ?? "NEXT"}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          >
            <option value="NEXT">Next.js</option>
            <option value="REACT">React.js</option>
          </select>
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-zinc-300">노출 상태</span>
          <select
            name="visibility"
            defaultValue={initial?.visibility ?? "PUBLIC"}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          >
            <option value="PUBLIC">공개</option>
            <option value="PRIVATE">비공개</option>
          </select>
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-zinc-300">템플릿연결</span>
          <select
            name="runtimeRoute"
            required
            defaultValue={initialRoute}
            className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          >
            {runtimeOptions.map((option) => (
              <option key={option.key || option.runtimeRoute} value={option.runtimeRoute}>
                {option.name} (/{option.runtimeRoute})
              </option>
            ))}
          </select>
          <p className="text-xs text-zinc-500">template-sources/catalog.json 기준으로 GitHub 소스를 선택/매핑합니다.</p>
        </label>

      </div>

      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">한 줄 요약</span>
        <input
          name="summary"
          required
          maxLength={80}
          defaultValue={initial?.summary ?? ""}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">상세 설명</span>
        <textarea
          name="description"
          required
          maxLength={300}
          defaultValue={initial?.description ?? ""}
          className="min-h-24 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">기본 썸네일 3장 이상 (드래그앤드롭 가능)</span>
        <ThumbnailDropzone name="thumbnailFiles" minimumCount={3} />
        {initial ? <input type="hidden" name="existingThumbnailRaw" value={textAreaJoin(initial.thumbnailUrls)} /> : null}
        {initial?.thumbnailUrls.length ? (
          <div className="grid grid-cols-3 gap-2">
            {initial.thumbnailUrls.map((url, index) => (
              <img key={`${url}-${index}`} src={url} alt={`기존 썸네일 ${index + 1}`} className="h-20 w-full rounded object-cover" />
            ))}
          </div>
        ) : null}
        <p className="text-xs text-zinc-500">수정 화면에서 새 이미지를 업로드하면 기존 썸네일이 교체됩니다.</p>
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">태그 (콤마 구분)</span>
        <input
          name="tagsRaw"
          defaultValue={initial?.tags.join(", ") ?? ""}
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </label>

      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">버전/개정 메모 (1줄 1항목)</span>
        <textarea
          name="revisionsRaw"
          defaultValue={initial ? textAreaJoin(initial.revisions) : ""}
          className="min-h-24 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
        />
      </label>

      <button
        type="submit"
        className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
      >
        저장
      </button>
    </form>
  );
}
