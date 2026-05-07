import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdminUser } from "@/lib/admin/auth";
import { getHubBgImageUrl } from "@/lib/admin/store";
import { HubBgForm } from "@/components/admin/HubBgForm";

export default async function SettingsPage() {
  const admin = await requireAdminUser();
  if (!admin) return null;

  const currentBgUrl = await getHubBgImageUrl();

  return (
    <AdminShell title="사이트 설정" subtitle="메인 페이지 배경 이미지 등 전체 설정" adminEmail={admin.email}>
      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 space-y-4">
        <div>
          <h2 className="text-sm font-semibold text-white">메인 배경 이미지</h2>
          <p className="mt-1 text-xs text-zinc-400">파일을 업로드하거나 이미지 URL을 직접 입력하세요.</p>
        </div>

        {/* 현재 배경 미리보기 */}
        <div className="relative overflow-hidden rounded-lg border border-zinc-700 aspect-video max-w-lg">
          <img src={currentBgUrl} alt="현재 배경" className="h-full w-full object-cover opacity-60" />
          <span className="absolute bottom-2 left-2 text-[10px] text-white/50 uppercase tracking-widest">현재 적용 중</span>
        </div>

        <HubBgForm currentUrl={currentBgUrl} />
      </section>
    </AdminShell>
  );
}
