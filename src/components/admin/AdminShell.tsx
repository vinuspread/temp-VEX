interface AdminShellProps {
  title: string;
  subtitle?: string;
  adminEmail: string;
  children: React.ReactNode;
}

const navItems = [
  { href: "/admin", label: "대시보드" },
  { href: "/admin/templates", label: "템플릿" },
  { href: "/admin/template-types", label: "카테고리" },
  { href: "/admin/requests", label: "신청" },
];

export function AdminShell({ title, subtitle, adminEmail, children }: AdminShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 py-8 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <div className="mb-8 space-y-2">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">TemplateHub Admin</p>
            <p className="text-sm text-zinc-300">{adminEmail}</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/auth/logout"
              className="mt-6 block rounded-lg border border-red-900/60 bg-red-950/30 px-3 py-2 text-sm text-red-300 transition hover:bg-red-900/40"
            >
              로그아웃
            </a>
          </nav>
        </aside>

        <section className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <header className="border-b border-zinc-800 pb-4">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            {subtitle ? <p className="mt-2 text-sm text-zinc-400">{subtitle}</p> : null}
          </header>
          {children}
        </section>
      </div>
    </div>
  );
}
