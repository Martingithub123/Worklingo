import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, ThemeMode } from '@/types';
import { Colors } from '@/constants/theme';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  colors: typeof Colors.dark;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<ThemeMode>('dark');

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));
  const colors = theme === 'dark' ? Colors.dark : Colors.light;

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, colors }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
