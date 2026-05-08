import { notFound } from "next/navigation";

import { submitTemplateRequestAction } from "@/app/_actions/requests";
import { getTemplateBySlug, getHubBgImageUrl } from "@/lib/admin/store";

export default async function ApplyPage({
  params,
  searchParams,
}: {
  params: Promise<{ templateSlug: string }>;
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { templateSlug } = await params;
  const query = await searchParams;

  const [template, bgImageUrl] = await Promise.all([
    getTemplateBySlug(templateSlug),
    getHubBgImageUrl(),
  ]);

  if (!template) notFound();

  const bg = (
    <div className="fixed inset-0 z-0">
      <img
        src={bgImageUrl}
        alt=""
        width={1440}
        height={900}
        fetchPriority="high"
        className="h-full w-full object-cover opacity-20"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.5) 40%, rgba(5,5,5,1) 65%)",
        }}
      />
    </div>
  );

  const header = (
    <header className="flex items-end justify-between pb-10 pt-16 md:pt-20">
      <div>
        <a
          href="/"
          className="mb-2 block text-3xl font-black lowercase tracking-tighter md:text-4xl"
        >
          vinuspread
        </a>
        <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
          Template Application
        </p>
      </div>
      <a
        href="/"
        className="rounded border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:border-white/60 hover:text-white"
      >
        목록
      </a>
    </header>
  );

  const footer = (
    <footer className="border-t border-white/5 pb-10 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
      &copy; 2026 vinuspread. Built for Excellence.
    </footer>
  );

  if (!template.applicationEnabled) {
    return (
      <main className="relative min-h-screen bg-[#050505] font-sans text-[#F0F0F0] selection:bg-white selection:text-black">
        {bg}
        <div className="relative z-10">
          <div className="mx-auto max-w-[1440px] px-6 md:px-12">
            {header}
            <div className="py-10">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">신청 불가</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">
                신청이 비활성화된 템플릿입니다
              </h2>
              <p className="mt-2 text-sm text-white/50">
                현재 관리자 설정으로 신청을 받을 수 없습니다.
              </p>
              <a
                href={template.previewPath}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:border-white/60 hover:text-white"
              >
                템플릿 미리보기
              </a>
            </div>
            {footer}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#050505] font-sans text-[#F0F0F0] selection:bg-white selection:text-black">
      {bg}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {header}

          <div className="mx-auto max-w-2xl pb-20">
            {/* 템플릿 정보 */}
            <div className="mb-8">
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">신청</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">{template.name}</h2>
              {template.summary && (
                <p className="mt-2 text-sm text-white/50">{template.summary}</p>
              )}
            </div>

            {/* 접수 완료 메시지 */}
            {query.submitted === "1" && (
              <div className="mb-8 rounded-sm border border-white/20 bg-white/[0.04] px-5 py-4 text-sm text-white/80 backdrop-blur-sm">
                신청이 접수되었습니다. 빠르게 검토 후 연락드리겠습니다.
              </div>
            )}

            {/* 신청 폼 */}
            <form
              action={submitTemplateRequestAction}
              className="space-y-7 rounded-sm border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-8"
            >
              <input type="hidden" name="templateSlug" value={template.slug} />

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  이름
                </span>
                <input
                  name="applicantName"
                  required
                  placeholder="홍길동"
                  className="mt-3 w-full border-b border-white/20 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  연락처
                </span>
                <input
                  name="applicantContact"
                  required
                  placeholder="이메일 또는 전화번호"
                  className="mt-3 w-full border-b border-white/20 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  회사 / 브랜드명{" "}
                  <span className="normal-case text-white/25">(선택)</span>
                </span>
                <input
                  name="companyName"
                  placeholder="vinuspread Inc."
                  className="mt-3 w-full border-b border-white/20 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                />
              </label>

              <label className="block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                  요청 내용
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="사용 목적, 커스터마이징 요청 사항 등을 자유롭게 작성해 주세요."
                  className="mt-3 w-full resize-none border-b border-white/20 bg-transparent pb-2.5 text-sm text-white placeholder:text-white/20 focus:border-white/60 focus:outline-none"
                />
              </label>

              <div className="flex items-center justify-between pt-1">
                <a
                  href={template.previewPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] uppercase tracking-[0.2em] text-white/30 transition hover:text-white/60"
                >
                  미리보기 →
                </a>
                <button
                  type="submit"
                  className="rounded border border-[#ED008C]/60 px-5 py-2 text-sm text-[#ED008C] transition hover:border-[#ED008C] hover:bg-[#ED008C]/10"
                >
                  신청 제출
                </button>
              </div>
            </form>
          </div>

          {footer}
        </div>
      </div>
    </main>
  );
}
