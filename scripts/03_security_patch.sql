-- ============================================================
-- Security Patch: increment_xp bounds check
-- Run this in Supabase Dashboard → SQL Editor BEFORE deploying
-- ============================================================

CREATE OR REPLACE FUNCTION public.increment_xp(p_user_id UUID, p_amount INTEGER)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only the authenticated user can update their own XP
  IF auth.uid() IS DISTINCT FROM p_user_id THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  -- Reject negative or unrealistically large XP amounts
  -- Max 500 XP per quiz session (matches client-side cap in syncService)
  IF p_amount < 0 OR p_amount > 500 THEN
    RAISE EXCEPTION 'Invalid XP amount: %', p_amount;
  END IF;

  UPDATE public.profiles
  SET xp = COALESCE(xp, 0) + p_amount
  WHERE id = p_user_id;
END;
$$;

REVOKE ALL ON FUNCTION public.increment_xp(UUID, INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.increment_xp(UUID, INTEGER) TO authenticated;
