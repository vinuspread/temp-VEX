"use client";

import { deleteTemplateAction } from "@/app/admin/_actions/templates";

export function DeleteTemplateButton({ id }: { id: string }) {
  const handleSubmit = (e: React.SyntheticEvent) => {
    if (!confirm("정말 삭제하시겠습니까?")) {
      e.preventDefault();
    }
  };

  return (
    <form action={deleteTemplateAction} onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="cursor-pointer rounded border border-red-700/60 px-2 py-1 text-xs text-red-300 transition hover:bg-red-900/40"
      >
        삭제
      </button>
    </form>
  );
}
