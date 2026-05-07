import Link from "next/link";

import { AdminShell } from "@/components/admin/AdminShell";
import { DeleteTemplateButton } from "@/components/admin/DeleteTemplateButton";
import { requireAdminUser } from "@/lib/admin/auth";
import { listTemplateTypes, listTemplates } from "@/lib/admin/store";

export default async function AdminTemplatesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const templates = await listTemplates();
  const templateTypes = await listTemplateTypes();
  const typeMap = new Map(templateTypes.map((type) => [type.id, type.label]));
  const filteredTemplates = q
    ? templates.filter((template) => {
        const haystack = [template.name, template.summary, template.slug, typeMap.get(template.templateTypeId) ?? ""]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q.toLowerCase());
      })
    : templates;

  const formatCreatedAt = (value: string) =>
    new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(value));

  return (
    <AdminShell
      title="템플릿 관리"
      subtitle="등록/수정/삭제 및 노출/신청 상태 제어"
      adminEmail={admin.email}
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          총 {filteredTemplates.length}개{q ? ` (검색: ${q})` : ""}
        </p>
        <div className="flex items-center gap-2">
          <Link
            href="/admin/templates/new"
            className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            템플릿 추가
          </Link>
        </div>
      </div>

      <form method="get" className="flex items-center gap-2">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="템플릿명/요약/카테고리 검색"
          className="flex-1 rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100"
        />
        <button
          type="submit"
          className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          검색
        </button>
      </form>

      <div className="overflow-x-auto rounded-xl border border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-800 text-sm">
          <thead className="bg-zinc-900/80 text-zinc-400">
            <tr>
              <th className="px-3 py-2 text-left">이름</th>
              <th className="px-3 py-2 text-left">썸네일</th>
              <th className="px-3 py-2 text-left">유형</th>
              <th className="px-3 py-2 text-left">등록일자</th>
              <th className="px-3 py-2 text-left">노출</th>
              <th className="px-3 py-2 text-left">신청</th>
              <th className="px-3 py-2 text-left">수정</th>
              <th className="px-3 py-2 text-left">삭제</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800 bg-zinc-950/40">
            {filteredTemplates.map((template) => (
              <tr key={template.id}>
                <td className="px-3 py-3 text-zinc-100">
                  <a
                    href={template.previewPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white hover:underline"
                  >
                    {template.name}
                  </a>
                </td>
                <td className="px-3 py-3">
                  <a href={template.previewPath} target="_blank" rel="noopener noreferrer">
                    <img
                      src={template.coverThumbnailUrl || template.thumbnailUrls[0]}
                      alt={`${template.name} 썸네일`}
                      className="h-12 w-20 rounded object-cover transition hover:opacity-80"
                    />
                  </a>
                </td>
                <td className="px-3 py-3 text-zinc-300">{typeMap.get(template.templateTypeId) ?? "미분류"}</td>
                <td className="px-3 py-3 text-zinc-300">{formatCreatedAt(template.createdAt)}</td>
                <td className="px-3 py-3 text-zinc-300">{template.visibility}</td>
                <td className="px-3 py-3 text-zinc-300">{template.applicationEnabled ? "ON" : "OFF"}</td>
                <td className="px-3 py-3">
                  <Link
                    href={`/admin/templates/${template.id}`}
                    className="rounded border border-zinc-700 px-2 py-1 text-xs text-zinc-200 transition hover:bg-zinc-800"
                  >
                    수정
                  </Link>
                </td>
                <td className="px-3 py-3">
                  <DeleteTemplateButton id={template.id} />
                </td>
              </tr>
            ))}
            {!filteredTemplates.length ? (
              <tr>
                <td colSpan={8} className="px-3 py-8 text-center text-sm text-zinc-500">
                  검색 결과가 없습니다.
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
