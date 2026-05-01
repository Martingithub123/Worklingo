import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Sun, Moon } from 'lucide-react-native';
import { useApp } from '@/context/AppContext';

export function ThemeToggle() {
  const { theme, toggleTheme, colors } = useApp();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[styles.btn, { backgroundColor: colors.surface }]}
      activeOpacity={0.8}
    >
      {theme === 'dark'
        ? <Sun size={18} color="#FFC800" strokeWidth={2} />
        : <Moon size={18} color="#4A5D72" strokeWidth={2} />
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
