import Link from "next/link";

import { listPublicTemplates, listTemplateTypes } from "@/lib/admin/store";

export default async function HubPage() {
  const templates = await listPublicTemplates();
  const templateTypes = await listTemplateTypes();
  const typeMap = new Map(templateTypes.map((type) => [type.id, type.label]));

  return (
    <main className="min-h-screen bg-[#050505] p-6 font-sans text-[#F0F0F0] selection:bg-white selection:text-black md:p-12 lg:p-24">
      <div className="mx-auto max-w-[1400px]">
        <header className="mb-20 flex flex-col gap-4 border-b border-white/5 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="mb-2 text-3xl font-black tracking-tighter lowercase md:text-4xl">vinuspread</h1>
            <p className="text-[9px] uppercase tracking-[0.4em] text-white/30">Archive v2.1.0 / Production Hub</p>
          </div>
          <Link
            href="/admin"
            className="rounded border border-white/20 px-3 py-2 text-[10px] uppercase tracking-[0.25em] text-white/70 transition hover:border-white/60 hover:text-white"
          >
            Admin
          </Link>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {templates.map((template, index) => (
            <article key={template.id} className="relative overflow-hidden rounded-[2px] border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-4 flex items-start justify-between">
                <span className="font-mono text-[10px] text-white/30">{String(index + 1).padStart(2, "0")}</span>
                <span className="rounded border border-white/15 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-white/60">
                  {typeMap.get(template.templateTypeId) ?? "미분류"}
                </span>
              </div>
              <h2 className="text-2xl font-serif tracking-tight">{template.name}</h2>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-white/40">{template.summary}</p>

              <div className="mt-5 flex gap-2">
                <Link
                  href={template.previewPath}
                  className="rounded border border-white/30 px-3 py-2 text-xs text-white transition hover:border-white"
                >
                  미리보기
                </Link>
                <Link
                  href={`/${template.slug}/apply`}
                  className={`rounded border px-3 py-2 text-xs transition ${
                    template.applicationEnabled
                      ? "border-[#ED008C]/60 text-[#ED008C] hover:border-[#ED008C]"
                      : "cursor-not-allowed border-white/15 text-white/30"
                  }`}
                  aria-disabled={!template.applicationEnabled}
                >
                  신청하기
                </Link>
              </div>
            </article>
          ))}
        </section>

        <footer className="mt-20 border-t border-white/5 pt-8 text-[10px] uppercase tracking-[0.3em] text-white/30">
          &copy; 2026 vinuspread. Built for Excellence.
        </footer>
      </div>
    </main>
  );
}
