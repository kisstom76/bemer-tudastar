-- BEMER Tudástár – alapséma: belépési engedélylista + aktivitásnapló
-- Futtatás: Supabase → SQL Editor → New query → beillesztés → Run

-- 1) Engedélyezett Google-fiókok
create table if not exists public.allowed_emails (
  email       text primary key check (email = lower(email)),
  name        text,
  role        text not null default 'partner' check (role in ('partner', 'admin')),
  note        text,
  created_at  timestamptz not null default now(),
  created_by  text
);

-- 2) Aktivitásnapló (belépés + oldalmegtekintés)
create table if not exists public.activity_log (
  id          bigint generated always as identity primary key,
  email       text not null,
  event       text not null check (event in ('belepes', 'oldal')),
  path        text not null,
  created_at  timestamptz not null default now()
);
create index if not exists activity_log_email_time on public.activity_log (email, created_at desc);
create index if not exists activity_log_time on public.activity_log (created_at desc);

-- 3) Segédfüggvények (security definer: az RLS-ellenőrzés ne hívja önmagát körbe)
create or replace function public.current_email()
returns text language sql stable
as $$ select lower(coalesce(auth.jwt() ->> 'email', '')) $$;

create or replace function public.is_allowed()
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.allowed_emails where email = public.current_email()) $$;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.allowed_emails where email = public.current_email() and role = 'admin') $$;

-- 4) Sorszintű jogosultság (RLS) – névtelen (anon) látogató semmit nem lát
alter table public.allowed_emails enable row level security;
alter table public.activity_log  enable row level security;

drop policy if exists "sajat sor vagy admin olvas" on public.allowed_emails;
create policy "sajat sor vagy admin olvas" on public.allowed_emails
  for select to authenticated
  using (email = public.current_email() or public.is_admin());

drop policy if exists "admin felvesz" on public.allowed_emails;
create policy "admin felvesz" on public.allowed_emails
  for insert to authenticated with check (public.is_admin());

drop policy if exists "admin modosit" on public.allowed_emails;
create policy "admin modosit" on public.allowed_emails
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin torol" on public.allowed_emails;
create policy "admin torol" on public.allowed_emails
  for delete to authenticated using (public.is_admin() and email <> public.current_email());

drop policy if exists "engedelyezett sajat naplot ir" on public.activity_log;
create policy "engedelyezett sajat naplot ir" on public.activity_log
  for insert to authenticated
  with check (email = public.current_email() and public.is_allowed());

drop policy if exists "admin naplot olvas" on public.activity_log;
create policy "admin naplot olvas" on public.activity_log
  for select to authenticated using (public.is_admin());

revoke all on public.allowed_emails, public.activity_log from anon;

-- 5) Kezdő adminok
insert into public.allowed_emails (email, name, role, note, created_by) values
  ('kisstom@gmail.com',          'Kiss Tamás',                      'admin', 'tulajdonos', 'migracio'),
  ('bterapia.office@gmail.com',  'Kiss Tamás & Karkis Katalin (iroda)', 'admin', 'közös iroda-fiók', 'migracio')
on conflict (email) do nothing;
