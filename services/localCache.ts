import AsyncStorage from '@react-native-async-storage/async-storage';

const KEYS = {
  PENDING: 'fluentbee_pending_progress',
  XP:      'fluentbee_xp_',
};

export interface PendingEntry {
  id:         string;
  user_id:    string;
  job_id:     string;
  sector_id:  string;
  level_id:   number;
  score:      number;
  total:      number;
  xp_earned:  number;
  created_at: string;
}

async function getPending(): Promise<PendingEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(KEYS.PENDING);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

async function savePending(entries: PendingEntry[]): Promise<void> {
  try {
    await AsyncStorage.setItem(KEYS.PENDING, JSON.stringify(entries));
  } catch {}
}

export const localCache = {
  async addProgress(entry: Omit<PendingEntry, 'id' | 'created_at'>): Promise<void> {
    const existing = await getPending();
    const newEntry: PendingEntry = {
      ...entry,
      id: `${Date.now()}_${Math.random().toString(36).slice(2)}`,
      created_at: new Date().toISOString(),
    };
    await savePending([...existing, newEntry]);
  },

  getPending,

  async removePending(id: string): Promise<void> {
    const existing = await getPending();
    await savePending(existing.filter(e => e.id !== id));
  },

  async pendingCount(): Promise<number> {
    return (await getPending()).length;
  },

  async getCachedXP(userId: string): Promise<number> {
    try {
      const raw = await AsyncStorage.getItem(KEYS.XP + userId);
      return raw ? parseInt(raw, 10) : 0;
    } catch {
      return 0;
    }
  },

  async incrementCachedXP(userId: string, amount: number): Promise<void> {
    try {
      const current = await this.getCachedXP(userId);
      await AsyncStorage.setItem(KEYS.XP + userId, String(current + amount));
    } catch {}
  },
};
