-- BEMER Tudástár – lezárás kapcsoló: ha be van kapcsolva, csak admin látja a tudástárat.
-- Futtatás: Supabase → SQL Editor → New query → beillesztés → Run

-- 1) Egyetlen soros beállítás-tábla
create table if not exists public.site_settings (
  id         int primary key default 1 check (id = 1),
  locked     boolean not null default false,
  locked_at  timestamptz,
  locked_by  text
);

insert into public.site_settings (id, locked) values (1, false)
on conflict (id) do nothing;

-- 2) Jogosultság: engedélyezett fiók olvashatja (tudnia kell, zárva van-e), csak admin módosíthatja
alter table public.site_settings enable row level security;

drop policy if exists "engedelyezett olvas" on public.site_settings;
create policy "engedelyezett olvas" on public.site_settings
  for select to authenticated using (public.is_allowed());

drop policy if exists "admin modosit" on public.site_settings;
create policy "admin modosit" on public.site_settings
  for update to authenticated using (public.is_admin()) with check (public.is_admin());

revoke all on public.site_settings from anon;
