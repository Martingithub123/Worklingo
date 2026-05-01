import { supabase } from '@/lib/supabase';
import { localCache } from './localCache';

let syncing = false;

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
    const { userId, jobId, sectorId, levelId, score, total, xpEarned } = params;

    // 1. Save locally immediately — never lost even if offline
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

    // 2. Try to sync now in background — errors are silently queued
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
          const { error } = await supabase.from('progress').insert({
            user_id:    entry.user_id,
            job_id:     entry.job_id,
            sector_id:  entry.sector_id,
            level_id:   entry.level_id,
            score:      entry.score,
            total:      entry.total,
            xp_earned:  entry.xp_earned,
            created_at: entry.created_at,
          });

          if (!error) {
            const { error: xpError } = await supabase.rpc('increment_xp', {
              p_user_id: entry.user_id,
              p_amount: entry.xp_earned,
            });
            // Only remove from queue after both writes succeed
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
