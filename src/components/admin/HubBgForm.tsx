"use client";

import { useActionState, useRef, useState } from "react";
import { updateHubBgAction, type SettingsActionState } from "@/app/admin/_actions/settings";

export function HubBgForm({ currentUrl }: { currentUrl: string }) {
  const [state, formAction, pending] = useActionState<SettingsActionState, FormData>(updateHubBgAction, null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <form action={formAction} className="space-y-4 max-w-lg">
      {state && "error" in state && (
        <p className="rounded border border-red-500/40 bg-red-950/40 px-3 py-2 text-sm text-red-300">{state.error}</p>
      )}
      {state && "ok" in state && (
        <p className="rounded border border-emerald-500/40 bg-emerald-950/40 px-3 py-2 text-sm text-emerald-300">배경 이미지가 업데이트되었습니다.</p>
      )}

      {/* 파일 업로드 */}
      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">파일 업로드</span>
        <input
          ref={fileRef}
          type="file"
          name="bgFile"
          accept="image/*"
          onChange={handleFile}
          className="block w-full text-sm text-zinc-400 file:mr-3 file:rounded file:border file:border-zinc-600 file:bg-zinc-800 file:px-3 file:py-1.5 file:text-xs file:text-zinc-200 file:transition file:hover:bg-zinc-700"
        />
      </label>

      {/* 파일 미리보기 */}
      {preview && (
        <div className="relative overflow-hidden rounded-lg border border-zinc-700 aspect-video">
          <img src={preview} alt="미리보기" className="h-full w-full object-cover opacity-60" />
          <span className="absolute bottom-2 left-2 text-[10px] text-white/50 uppercase tracking-widest">업로드 예정</span>
        </div>
      )}

      {/* URL 직접 입력 */}
      <label className="block space-y-2 text-sm">
        <span className="text-zinc-300">또는 이미지 URL 직접 입력</span>
        <input
          type="url"
          name="bgUrl"
          defaultValue={currentUrl}
          placeholder="https://..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100 text-sm"
        />
      </label>

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 disabled:opacity-50"
      >
        {pending ? "저장 중…" : "적용"}
      </button>
    </form>
  );
}
