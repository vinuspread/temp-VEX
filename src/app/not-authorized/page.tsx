import Link from "next/link";

export default function NotAuthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-zinc-100">
      <section className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 text-center">
        <h1 className="text-2xl font-semibold text-white">접근 권한이 없습니다</h1>
        <p className="mt-3 text-sm text-zinc-400">
          관리자 allowlist에 등록된 Google 계정만 관리자 페이지에 접근할 수 있습니다.
        </p>
        <div className="mt-6 space-y-2">
          <Link
            href="/admin/login"
            className="block rounded-lg border border-zinc-700 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            로그인 페이지로 이동
          </Link>
          <Link
            href="/"
            className="block rounded-lg border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:bg-zinc-800"
          >
            홈으로 이동
          </Link>
        </div>
      </section>
    </main>
  );
}
