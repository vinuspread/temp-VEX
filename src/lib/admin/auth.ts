import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/lib/supabase/server";

export interface AdminUser {
  id: string;
  email: string;
}

export function getAdminAllowlist(): string[] {
  return (process.env.ADMIN_ALLOWLIST_EMAILS ?? "")
    .split(",")
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
}

export function isAuthConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export async function getCurrentAdminUser(): Promise<AdminUser | null> {
  if (!isAuthConfigured()) {
    return null;
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return null;
  }

  const email = user.email.trim().toLowerCase();
  const allowlist = getAdminAllowlist();
  if (!allowlist.includes(email)) {
    await supabase.auth.signOut();
    return null;
  }

  return {
    id: user.id,
    email,
  };
}

export async function requireAdminUser() {
  const admin = await getCurrentAdminUser();
  if (!admin) {
    redirect("/admin/login");
  }
  return admin;
}
