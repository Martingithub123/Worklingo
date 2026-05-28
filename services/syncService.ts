import { supabase } from '@/lib/supabase';
import { localCache } from './localCache';

let syncing = false;

const MAX_XP_PER_ENTRY = 500;
const MAX_SCORE = 9999;
const MAX_PENDING_ENTRIES = 200;

export const syncService = {
  async saveProgress(params: {
    userId:   string;
    jobId:    string;
    sectorId: string;
    levelId:  number;
    score:    number;
    total:    number;
    xpEarned: number;
  }): Promise<void> {
    const { userId, jobId, sectorId, levelId } = params;

    // Clamp values to valid bounds before persisting
    const score    = Math.max(0, Math.min(params.score,    MAX_SCORE));
    const total    = Math.max(0, Math.min(params.total,    MAX_SCORE));
    const xpEarned = Math.max(0, Math.min(params.xpEarned, MAX_XP_PER_ENTRY));

    // Drop if queue is too large (prevents unbounded AsyncStorage growth)
    const count = await localCache.pendingCount();
    if (count >= MAX_PENDING_ENTRIES) return;

    await localCache.addProgress({
      user_id:   userId,
      job_id:    jobId,
      sector_id: sectorId,
      level_id:  levelId,
      score,
      total,
      xp_earned: xpEarned,
    });
    await localCache.incrementCachedXP(userId, xpEarned);

    this.flush();
  },

  async flush(): Promise<void> {
    if (syncing) return;
    syncing = true;

    try {
      const pending = await localCache.getPending();
      if (pending.length === 0) return;

      for (const entry of pending) {
        try {
          // Re-clamp on flush in case stale entries exist from older app versions
          const safeXp    = Math.max(0, Math.min(entry.xp_earned, MAX_XP_PER_ENTRY));
          const safeScore = Math.max(0, Math.min(entry.score,      MAX_SCORE));
          const safeTotal = Math.max(0, Math.min(entry.total,      MAX_SCORE));

          const { error } = await supabase.from('progress').insert({
            user_id:    entry.user_id,
            job_id:     entry.job_id,
            sector_id:  entry.sector_id,
            level_id:   entry.level_id,
            score:      safeScore,
            total:      safeTotal,
            xp_earned:  safeXp,
            created_at: entry.created_at,
          });

          if (!error) {
            const { error: xpError } = await supabase.rpc('increment_xp', {
              p_user_id: entry.user_id,
              p_amount:  safeXp,
            });
            if (!xpError) {
              await localCache.removePending(entry.id);
            }
          }
        } catch {
          // Network down — entry stays in queue, will retry next flush
        }
      }
    } finally {
      syncing = false;
    }
  },
};
