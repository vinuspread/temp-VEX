import Link from "next/link";

import { listPublicTemplates, listTemplateTypes, getHubBgImageUrl } from "@/lib/admin/store";
import { ThumbnailSlider } from "@/components/ThumbnailSlider";

function getLangBadge(previewPath: string): "EN" | "KR" | null {
  if (/_en(\/|$)/i.test(previewPath)) return "EN";
  if (/_kr(\/|$)/i.test(previewPath)) return "KR";
  return null;
}

export default async function HubPage() {
  const [templates, templateTypes, bgImageUrl] = await Promise.all([
    listPublicTemplates(),
    listTemplateTypes(),
    getHubBgImageUrl(),
  ]);
  const typeMap = new Map(templateTypes.map((type) => [type.id, type.label]));

  return (
    <main className="relative min-h-screen bg-[#050505] font-sans text-[#F0F0F0] selection:bg-white selection:text-black">

      {/* 배경 이미지 */}
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

      {/* 콘텐츠 */}
      <div className="relative z-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">

          <header className="flex items-end justify-between pb-10 pt-16 md:pt-20">
            <div>
              <h1 className="mb-2 text-3xl font-black lowercase tracking-tighter md:text-4xl">
                vinuspread
              </h1>
              <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">
                Archive v2.1.0 / Production Hub
              </p>
            </div>
            <Link
              href="/admin"
              className="rounded border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:border-white/60 hover:text-white"
            >
              Admin
            </Link>
          </header>

          <div className="h-[35vh]" />

          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {templates.map((template, index) => {
              const badge = getLangBadge(template.previewPath);
              return (
                <article
                  key={template.id}
                  className="group relative overflow-hidden rounded-sm bg-white/[0.04] backdrop-blur-sm"
                >
                  <ThumbnailSlider urls={template.thumbnailUrls} alt={template.name} />

                  <div className="p-5">
                    <div className="mb-3 flex items-start justify-between">
                      <span className="font-mono text-[10px] text-white/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="rounded border border-white/15 px-2 py-0.5 text-[11px] text-white/50">
                          {typeMap.get(template.templateTypeId) ?? "미분류"}
                        </span>
                        {badge && (
                          <span className="rounded border border-sky-500/50 px-1.5 py-0.5 text-[10px] font-bold text-sky-400">
                            {badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <h2 className="text-xl font-black tracking-tight">{template.name}</h2>
                    <p className="mt-1.5 line-clamp-2 text-sm text-white/60">{template.summary}</p>

                    <div className="mt-4 flex gap-2">
                      <a
                        href={template.previewPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded border border-white/30 px-3 py-1.5 text-sm text-white transition hover:border-white"
                      >
                        미리보기
                      </a>
                      {template.applicationEnabled ? (
                        <a
                          href={`/${template.slug}/apply`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded border border-[#ED008C]/60 px-3 py-1.5 text-sm text-[#ED008C] transition hover:border-[#ED008C]"
                        >
                          신청하기
                        </a>
                      ) : (
                        <span className="cursor-not-allowed rounded border border-white/15 px-3 py-1.5 text-sm text-white/30">
                          신청하기
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </section>

          <footer className="mt-20 border-t border-white/5 pb-10 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
            &copy; 2026 vinuspread. Built for Excellence.
          </footer>

        </div>
      </div>
    </main>
  );
}
