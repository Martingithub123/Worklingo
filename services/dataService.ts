import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '@/lib/supabase';
import { JOBS as LOCAL_JOBS } from '@/data/vocabularyData';
import { Job, Sector, Role, VocabularyItem, QuizQuestion, Language, LevelType } from '@/types';

const CACHE_KEY = 'beefluent_vocab_v2';

function fisherYates<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// In-memory store — starts with local bundle, updated by init()
let JOBS: Job[] = LOCAL_JOBS;

// Build a lookup map from item id → localImage using the bundled local data
// This ensures Supabase data never overwrites the correct local image paths
function buildLocalImageMap(): Map<string, string | undefined> {
  const map = new Map<string, string | undefined>();
  for (const job of LOCAL_JOBS) {
    for (const sector of job.sectors) {
      for (const role of sector.roles) {
        for (const item of role.items) {
          map.set(item.id, item.localImage);
        }
      }
    }
  }
  return map;
}

// Reconstruct nested Job[] from 4 flat Supabase tables
function buildJobTree(
  jobs: any[],
  sectors: any[],
  roles: any[],
  items: any[],
): Job[] {
  const localImageMap = buildLocalImageMap();
  return jobs
    .sort((a, b) => a.sort_order - b.sort_order)
    .map(j => ({
      id: j.id,
      name: j.name,
      icon: j.icon,
      imageUrl: j.image_url,
      sectors: sectors
        .filter(s => s.job_id === j.id)
        .sort((a, b) => a.sort_order - b.sort_order)
        .map(s => ({
          id: s.id,
          name: s.name,
          icon: s.icon,
          roles: roles
            .filter(r => r.job_id === j.id && r.sector_id === s.id)
            .sort((a, b) => a.sort_order - b.sort_order)
            .map(r => ({
              id: r.id,
              name: r.name,
              icon: r.icon,
              items: items
                .filter(i => i.job_id === j.id && i.sector_id === s.id && i.role_id === r.id)
                .sort((a, b) => a.sort_order - b.sort_order)
                .map(i => ({
                  id: i.id,
                  // Prefer bundled localImage paths (always correct) over Supabase local_image
                  localImage: localImageMap.has(i.id) ? localImageMap.get(i.id) : i.local_image,
                  imageUrl: i.image_url,
                  translations: i.translations,
                })),
            })),
        })),
    }));
}

export const dataService = {
  // Call once on app start — currently uses bundled local data only.
  // Supabase sync is disabled until the remote DB is updated with correct local_image paths.
  async init(): Promise<void> {
    // JOBS is already initialized from LOCAL_JOBS; nothing to do.
  },

  async _fetchFromSupabase(): Promise<void> {
    const [jobsRes, sectorsRes, rolesRes, itemsRes] = await Promise.all([
      supabase.from('jobs').select('*'),
      supabase.from('sectors').select('*'),
      supabase.from('roles').select('*'),
      supabase.from('vocabulary_items').select('*'),
    ]);

    if (jobsRes.error || sectorsRes.error || rolesRes.error || itemsRes.error) return;
    if (!jobsRes.data?.length) return;

    const fresh = buildJobTree(jobsRes.data, sectorsRes.data ?? [], rolesRes.data ?? [], itemsRes.data ?? []);
    if (fresh.length > 0) {
      JOBS = fresh;
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify({ data: fresh, ts: Date.now() }));
    }
  },

  getAllJobs(): Job[] {
    return JOBS;
  },

  getJobById(jobId: string): Job | undefined {
    return JOBS.find(j => j.id === jobId);
  },

  getSectorsForJob(jobId: string): Sector[] {
    return JOBS.find(j => j.id === jobId)?.sectors ?? [];
  },

  getSectorById(jobId: string, sectorId: string): Sector | undefined {
    return JOBS.find(j => j.id === jobId)?.sectors.find(s => s.id === sectorId);
  },

  getRolesForSector(jobId: string, sectorId: string): Role[] {
    return JOBS.find(j => j.id === jobId)?.sectors.find(s => s.id === sectorId)?.roles ?? [];
  },

  getRoleById(jobId: string, sectorId: string, roleId: string): Role | undefined {
    return JOBS.find(j => j.id === jobId)
      ?.sectors.find(s => s.id === sectorId)
      ?.roles.find(r => r.id === roleId);
  },

  getItemsForRole(jobId: string, sectorId: string, roleId: string): VocabularyItem[] {
    return this.getRoleById(jobId, sectorId, roleId)?.items ?? [];
  },

  getItemsForSector(jobId: string, sectorId: string): VocabularyItem[] {
    const sector = this.getSectorById(jobId, sectorId);
    return sector?.roles.flatMap(r => r.items) ?? [];
  },

  getTranslation(item: VocabularyItem, language: Language): string {
    return item.translations[language] ?? item.translations['en'];
  },

  buildQuiz(allItems: VocabularyItem[], language: Language, levelType: LevelType): QuizQuestion[] {
    const QUIZ_LENGTH = 30;
    if (allItems.length === 0) return [];

    const optionCount = levelType === 'word_to_image_visual' ? 6 : 4;

    const itemPool: VocabularyItem[] = [];
    while (itemPool.length < QUIZ_LENGTH) {
      itemPool.push(...fisherYates([...allItems]));
    }
    const quizItems = itemPool.slice(0, QUIZ_LENGTH);

    return quizItems.map(item => {
      const otherItems = allItems.filter(i => i.id !== item.id);
      const distractors = fisherYates([...otherItems]).slice(0, optionCount - 1);
      const allOptionItems = fisherYates([...distractors, item]);
      const options = allOptionItems.map(i => this.getTranslation(i, language));
      return {
        item,
        options,
        correctAnswer: this.getTranslation(item, language),
        optionItems: allOptionItems,
        type: levelType,
      };
    });
  },
};
