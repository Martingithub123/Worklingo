import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { Language, LanguageOption } from '@/types';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PressableCard } from '@/components/PressableCard';
import { Check } from 'lucide-react-native';

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English',    nativeLabel: 'English',    flag: '🇬🇧' },
  { code: 'es', label: 'Spanish',    nativeLabel: 'Español',    flag: '🇪🇸' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português',  flag: '🇧🇷' },
  { code: 'fr', label: 'French',     nativeLabel: 'Français',   flag: '🇫🇷' },
  { code: 'de', label: 'German',     nativeLabel: 'Deutsch',    flag: '🇩🇪' },
  { code: 'it', label: 'Italian',    nativeLabel: 'Italiano',   flag: '🇮🇹' },
  { code: 'nl', label: 'Dutch',      nativeLabel: 'Nederlands', flag: '🇳🇱' },
  { code: 'zh', label: 'Mandarin',   nativeLabel: '普通话',      flag: '🇨🇳' },
  { code: 'ja', label: 'Japanese',   nativeLabel: '日本語',      flag: '🇯🇵' },
  { code: 'ru', label: 'Russian',    nativeLabel: 'Русский',    flag: '🇷🇺' },
];

export default function LanguageScreen() {
  const { language, setLanguage, colors } = useApp();

  const handleSelect = (code: Language) => {
    setLanguage(code);
  };

  const handleContinue = () => {
    router.push('/jobs');
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Logo size={44} />
        <ThemeToggle />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
            What language do you{'\n'}want to learn?
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Select your target language to get started
          </Text>
        </View>

        <View style={styles.grid}>
          {LANGUAGES.map((lang) => {
            const selected = language === lang.code;
            return (
              <View key={lang.code} style={styles.cardWrapper}>
                <PressableCard
                  onPress={() => handleSelect(lang.code)}
                  style={[
                    styles.card,
                    {
                      backgroundColor: selected ? Colors.primary : colors.card,
                      borderColor: selected ? Colors.primary : colors.cardBorder,
                    },
                  ]}
                >
                  <Text style={styles.flag}>{lang.flag}</Text>
                  <Text
                    style={[
                      styles.langLabel,
                      { color: selected ? '#FFFFFF' : colors.text },
                    ]}
                  >
                    {lang.nativeLabel}
                  </Text>
                  <Text
                    style={[
                      styles.langSub,
                      { color: selected ? 'rgba(255,255,255,0.75)' : colors.textSecondary },
                    ]}
                  >
                    {lang.label}
                  </Text>
                  {selected && (
                    <View style={styles.checkBadge}>
                      <Check size={12} color="#1E7214" strokeWidth={3} />
                    </View>
                  )}
                </PressableCard>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          style={styles.continueBtn}
          onPress={handleContinue}
          activeOpacity={0.85}
        >
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  title: {
    fontSize: FontSize.xxl,
    fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.5,
    marginTop: Spacing.md,
    lineHeight: 38,
  },
  subtitle: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-Regular',
    marginTop: Spacing.xs,
    marginBottom: Spacing.xl,
    lineHeight: 22,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  cardWrapper: {
    width: '47%',
  },
  card: {
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: Spacing.md,
    alignItems: 'center',
    gap: 6,
    minHeight: 110,
    justifyContent: 'center',
    position: 'relative',
  },
  flag: {
    fontSize: 36,
  },
  langLabel: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  langSub: {
    fontSize: FontSize.xs,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  checkBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    paddingTop: Spacing.md,
  },
  continueBtn: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  continueBtnText: {
    color: '#FFFFFF',
    fontSize: FontSize.lg,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.2,
  },
});
