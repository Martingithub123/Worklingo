-- ============================================================
-- BeeFluent Vocabulary Schema
-- Run this FIRST in the Supabase SQL Editor
-- ============================================================

-- Jobs (top-level: Supermarket, Construction, etc.)
CREATE TABLE IF NOT EXISTS public.jobs (
  id         TEXT PRIMARY KEY,
  name       JSONB NOT NULL,
  icon       TEXT NOT NULL,
  image_url  TEXT,
  sort_order INTEGER DEFAULT 0
);

-- Sectors (e.g. Cashier, Bagger within Supermarket)
CREATE TABLE IF NOT EXISTS public.sectors (
  id         TEXT NOT NULL,
  job_id     TEXT NOT NULL REFERENCES public.jobs(id) ON DELETE CASCADE,
  name       JSONB NOT NULL,
  icon       TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  PRIMARY KEY (job_id, id)
);

-- Roles (e.g. Tools, Materials within a Sector)
CREATE TABLE IF NOT EXISTS public.roles (
  id         TEXT NOT NULL,
  job_id     TEXT NOT NULL,
  sector_id  TEXT NOT NULL,
  name       JSONB NOT NULL,
  icon       TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  PRIMARY KEY (job_id, sector_id, id),
  FOREIGN KEY (job_id, sector_id) REFERENCES public.sectors(job_id, id) ON DELETE CASCADE
);

-- Vocabulary items
CREATE TABLE IF NOT EXISTS public.vocabulary_items (
  id          TEXT PRIMARY KEY,
  job_id      TEXT NOT NULL,
  sector_id   TEXT NOT NULL,
  role_id     TEXT NOT NULL,
  local_image TEXT,
  image_url   TEXT,
  translations JSONB NOT NULL,
  sort_order  INTEGER DEFAULT 0,
  FOREIGN KEY (job_id, sector_id, role_id) REFERENCES public.roles(job_id, sector_id, id) ON DELETE CASCADE
);

-- ============================================================
-- Row Level Security — read-only for authenticated users
-- ============================================================
ALTER TABLE public.jobs             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sectors          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.roles            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "read_jobs"   ON public.jobs             FOR SELECT TO authenticated USING (true);
CREATE POLICY "read_sectors" ON public.sectors         FOR SELECT TO authenticated USING (true);
CREATE POLICY "read_roles"  ON public.roles            FOR SELECT TO authenticated USING (true);
CREATE POLICY "read_items"  ON public.vocabulary_items FOR SELECT TO authenticated USING (true);

-- ============================================================
-- RLS for profiles (upsert own row only)
-- ============================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "read_own_profile"   ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "insert_own_profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "update_own_profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- ============================================================
-- RLS for progress (insert/read own rows only)
-- ============================================================
ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "read_own_progress"   ON public.progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "insert_own_progress" ON public.progress FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- Secure increment_xp RPC — only allows user to update own XP
-- ============================================================
CREATE OR REPLACE FUNCTION public.increment_xp(p_user_id UUID, p_amount INTEGER)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS DISTINCT FROM p_user_id THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;
  UPDATE public.profiles
  SET xp = COALESCE(xp, 0) + p_amount
  WHERE id = p_user_id;
END;
$$;

REVOKE ALL ON FUNCTION public.increment_xp(UUID, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.increment_xp(UUID, INTEGER) TO authenticated;
