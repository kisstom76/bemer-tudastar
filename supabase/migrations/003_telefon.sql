-- BEMER Tudástár – partner telefonszáma (a saját bemutató-linkhez)
-- Futtatás: Supabase → SQL Editor → New query → beillesztés → Run

-- 1) Telefonszám az engedélylistán
alter table public.allowed_emails
  add column if not exists phone text check (phone is null or length(phone) <= 30);

-- 2) A partner a saját nevét és számát maga is beírhatja (csak a saját sorát, csak ezt a két mezőt)
create or replace function public.set_own_contact(p_name text, p_phone text)
returns void language sql security definer set search_path = public
as $$
  update public.allowed_emails
     set name  = coalesce(nullif(trim(p_name), ''), name),
         phone = nullif(trim(p_phone), '')
   where email = public.current_email();
$$;
revoke all on function public.set_own_contact(text, text) from public, anon;
grant execute on function public.set_own_contact(text, text) to authenticated;

-- 3) Kezdő érték: Tamás és az iroda-fiók
update public.allowed_emails set phone = '+36 30 681 5233'
 where email in ('kisstom@gmail.com', 'bterapia.office@gmail.com') and phone is null;
