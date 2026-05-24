import { useState, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput,
  ScrollView, Animated, KeyboardAvoidingView, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import BeeMascot from '@/components/BeeMascot';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Check } from 'lucide-react-native';


interface Source {
  id: string;
  icon: string;
  label: string;
}

const SOURCES: Source[] = [
  { id: 'instagram',  icon: '📸', label: 'Instagram'  },
  { id: 'tiktok',     icon: '🎵', label: 'TikTok'     },
  { id: 'facebook',   icon: '👥', label: 'Facebook'   },
  { id: 'youtube',    icon: '▶️', label: 'YouTube'    },
  { id: 'google',     icon: '🔍', label: 'Google'     },
  { id: 'friend',     icon: '🤝', label: 'Friend'     },
  { id: 'news',       icon: '📰', label: 'News / Blog'},
  { id: 'appstore',   icon: '📱', label: 'App Store'  },
  { id: 'twitter',    icon: '🐦', label: 'Twitter / X'},
  { id: 'reddit',     icon: '🤖', label: 'Reddit'     },
  { id: 'linkedin',   icon: '💼', label: 'LinkedIn'   },
  { id: 'podcast',    icon: '🎙️', label: 'Podcast'    },
  { id: 'email',      icon: '📧', label: 'Email'      },
  { id: 'whatsapp',   icon: '💬', label: 'WhatsApp'   },
  { id: 'other',      icon: '✨', label: 'Other'      },
];

export default function ReferralScreen() {
  const { uiLanguage, setReferralSource, colors } = useApp();
  const t = getStrings(uiLanguage);

  const [selected, setSelected] = useState<string>('');
  const [otherText, setOtherText] = useState('');

  const titleOp = useRef(new Animated.Value(0)).current;
  const titleY  = useRef(new Animated.Value(20)).current;
  const cardsOp = useRef(new Animated.Value(0)).current;
  const cardsY  = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.parallel([
        Animated.timing(titleOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(titleY,  { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();
    Animated.sequence([
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(cardsOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(cardsY,  { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const handleContinue = () => {
    const finalSource = selected === 'other' && otherText.trim()
      ? `other: ${otherText.trim()}`
      : selected;
    setReferralSource(finalSource);
    router.replace('/language' as any);
  };

  const canContinue = selected !== '' && (selected !== 'other' || otherText.trim().length > 0);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={styles.topBar}>
          <BeeMascot size={46} />
          <ThemeToggle />
        </View>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
          <ScrollView
            contentContainerStyle={styles.scroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            {/* Header */}
            <Animated.View style={[styles.header, { opacity: titleOp, transform: [{ translateY: titleY }] }]}>
              <Text style={[styles.title, { color: colors.text }]}>{t.howDidYouFindUs}</Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{t.helpUsGrow}</Text>
            </Animated.View>

            {/* Source list */}
            <Animated.View style={[styles.list, { opacity: cardsOp, transform: [{ translateY: cardsY }] }]}>
              {SOURCES.map(src => {
                const isSelected = selected === src.id;
                const isOther = src.id === 'other';
                return (
                  <TouchableOpacity
                    key={src.id}
                    style={[styles.sourceCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }, isSelected && styles.sourceCardSelected]}
                    onPress={() => setSelected(src.id)}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.sourceIcon}>{src.icon}</Text>
                    <Text style={[styles.sourceLabel, { color: colors.textSecondary }, isSelected && styles.sourceLabelSelected]} numberOfLines={1}>
                      {isOther ? t.other : src.label}
                    </Text>
                    {isSelected && (
                      <View style={styles.checkBadge}>
                        <Check size={12} color="#0B1A08" strokeWidth={3} />
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </Animated.View>

            {/* Other text input */}
            {selected === 'other' && (
              <Animated.View style={[styles.otherBox, { opacity: cardsOp, backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
                <TextInput
                  style={[styles.otherInput, { color: colors.text }]}
                  placeholder={t.tellUsMore}
                  placeholderTextColor={colors.textMuted}
                  value={otherText}
                  onChangeText={setOtherText}
                  multiline
                  numberOfLines={3}
                  maxLength={200}
                  autoFocus
                />
              </Animated.View>
            )}

            {/* Skip */}
            <TouchableOpacity onPress={() => router.replace('/language' as any)} style={styles.skipBtn}>
              <Text style={[styles.skipText, { color: colors.textMuted }]}>{t.skipForNow}</Text>
            </TouchableOpacity>
          </ScrollView>

          {/* Continue button */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[styles.continueBtn, !canContinue && styles.continueBtnDisabled]}
              onPress={handleContinue}
              activeOpacity={canContinue ? 0.86 : 1}
              disabled={!canContinue}
            >
              <Text style={[styles.continueBtnText, !canContinue && { opacity: 0.5 }]}>
                {t.continue}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  scroll: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: -0.4,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
  },
  list: {
    gap: 10,
  },
  sourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.10)',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  sourceCardSelected: {
    backgroundColor: 'rgba(94,216,43,0.14)',
    borderColor: '#5ED82B',
  },
  sourceIcon: {
    fontSize: 24,
  },
  sourceLabel: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: 'rgba(255,255,255,0.75)',
  },
  sourceLabelSelected: {
    color: '#5ED82B',
  },
  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#5ED82B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherBox: {
    marginTop: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(94,216,43,0.35)',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  otherInput: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    minHeight: 72,
    textAlignVertical: 'top',
  },
  skipBtn: {
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  skipText: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.35)',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 8,
    paddingTop: 8,
  },
  continueBtn: {
    backgroundColor: '#5ED82B',
    borderRadius: 99,
    paddingVertical: 17,
    alignItems: 'center',
    shadowColor: '#5ED82B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 10,
  },
  continueBtnDisabled: {
    backgroundColor: 'rgba(94,216,43,0.3)',
    shadowOpacity: 0,
    elevation: 0,
  },
  continueBtnText: {
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    color: '#0A1C08',
    letterSpacing: 1.5,
  },
});
