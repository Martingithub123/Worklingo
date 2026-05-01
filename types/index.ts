export type Language = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'it' | 'nl' | 'zh' | 'ja' | 'ru';

export interface Translations {
  en: string;
  es: string;
  pt: string;
  fr: string;
  de: string;
  it: string;
  nl?: string;
  zh?: string;
  ja?: string;
  ru?: string;
}

export interface VocabularyItem {
  id: string;
  imageUrl?: string;
  localImage?: string;
  translations: Translations;
}

export interface Role {
  id: string;
  name: Translations;
  icon: string;
  items: VocabularyItem[];
}

export interface Sector {
  id: string;
  name: Translations;
  icon: string;
  roles: Role[];
}

export interface Job {
  id: string;
  name: Translations;
  icon: string;
  imageUrl: string;
  sectors: Sector[];
}

export interface QuizQuestion {
  item: VocabularyItem;
  options: string[];
  correctAnswer: string;
  optionItems: VocabularyItem[];
  type: LevelType;
}

export interface QuizResult {
  total: number;
  correct: number;
  incorrect: number;
  answers: { item: VocabularyItem; selected: string; correct: boolean }[];
}

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

export type ThemeMode = 'dark' | 'light';

export type LevelType =
  | 'word_to_image'
  | 'word_to_image_visual'
  | 'tap_reveal_type'
  | 'sentence_to_image'
  | 'image_fill_blank'
  | 'action_sentence'
  | 'task_sentence'
  | 'audio_to_image'
  | 'sentence_fill_blank'
  | 'scenario';

export interface LevelConfig {
  id: number;
  name: Translations;
  description: Translations;
  hint: Translations;
  type: LevelType;
  emoji: string;
  color: string;
  xpReward: number;
}
