import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { updateTemplateSortModeAction } from "@/app/admin/_actions/templates";
import { createBackupAction, restoreBackupAction } from "@/app/admin/_actions/backups";
import { requireAdminUser } from "@/lib/admin/auth";
import { getDashboardStats, getTemplateListSortMode, listBackups } from "@/lib/admin/store";

export default async function AdminDashboardPage() {
  const admin = await requireAdminUser();
  if (!admin) {
    return null;
  }

  const stats = await getDashboardStats();
  const templateListSortMode = await getTemplateListSortMode();
  const backups = await listBackups();

  return (
    <AdminShell
      title="관리자 대시보드"
      subtitle="템플릿/신청 운영 현황"
      adminEmail={admin.email}
    >
      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">템플릿</p>
          <p className="mt-2 text-2xl font-semibold text-white">{stats.templateTotal}</p>
        </article>
        <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">신청</p>
          <p className="mt-2 text-2xl font-semibold text-white">{stats.requestTotal}</p>
        </article>
        <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <p className="text-xs text-zinc-400">처리중 신청</p>
          <p className="mt-2 text-2xl font-semibold text-white">{stats.requestByStatus.REVIEWING}</p>
        </article>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <h2 className="text-sm font-semibold text-white">리스트 정렬 기준</h2>
        <p className="mt-2 text-sm text-zinc-400">템플릿 리스트 전체에 공통으로 적용됩니다.</p>
        <form action={updateTemplateSortModeAction} className="mt-4 flex items-center gap-2">
          <select
            name="sortMode"
            defaultValue={templateListSortMode}
            className="rounded border border-zinc-700 bg-zinc-950 px-2 py-1 text-xs text-zinc-200"
          >
            <option value="LATEST">최신순</option>
            <option value="POPULAR">정렬순</option>
          </select>
          <button
            type="submit"
            className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            적용
          </button>
        </form>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white">사이트 설정</h2>
          <p className="mt-1 text-xs text-zinc-400">메인 배경 이미지 등 전체 설정을 관리합니다.</p>
        </div>
        <Link
          href="/admin/settings"
          className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
        >
          설정 열기
        </Link>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-white">수동 백업</h2>
          <p className="mt-2 text-sm text-zinc-400">
            백업 파일명은 backup_YYYYMMDD_HHMM 규칙으로 생성되며 최신 4개만 유지됩니다.
          </p>
          <form action={createBackupAction} className="mt-4">
            <button
              type="submit"
              className="rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
            >
              지금 백업 실행
            </button>
          </form>
        </article>

        <article className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-white">복구</h2>
          <p className="mt-2 text-sm text-zinc-400">백업 선택 후 1클릭 복구를 실행합니다.</p>
          <div className="mt-3 space-y-2">
            {backups.length ? (
              backups.map((backup) => (
                <form key={backup.id} action={restoreBackupAction} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm text-zinc-200">{backup.name}</p>
                    <p className="text-xs text-zinc-500">{backup.createdAt}</p>
                  </div>
                  <input type="hidden" name="backupId" value={backup.id} />
                  <button
                    type="submit"
                    className="rounded-lg border border-amber-700/60 bg-amber-950/50 px-3 py-1.5 text-xs text-amber-300 transition hover:bg-amber-900/50"
                  >
                    복구
                  </button>
                </form>
              ))
            ) : (
              <p className="text-sm text-zinc-500">아직 생성된 백업이 없습니다.</p>
            )}
          </div>
        </article>
      </section>
    </AdminShell>
  );
}
