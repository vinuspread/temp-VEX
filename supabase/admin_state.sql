create table if not exists public.admin_state (
  key text primary key,
  payload jsonb not null,
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.admin_state enable row level security;

drop policy if exists "service_role_manage_admin_state" on public.admin_state;
create policy "service_role_manage_admin_state"
  on public.admin_state
  for all
  to service_role
  using (true)
  with check (true);
