import { useState, useEffect, useRef, useCallback } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Animated, Dimensions, Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import * as Speech from 'expo-speech';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { getStrings } from '@/constants/i18n';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import {
  LEARN_LEVELS, generateLesson, dl,
  LessonStep, StepCard, StepQuiz,
} from '@/services/learnService';
import { supabase } from '@/lib/supabase';
import { X, Heart, Volume2 } from 'lucide-react-native';

// Map app lang codes → BCP-47 locale tags for TTS
const TTS_LOCALE: Record<string, string> = {
  en: 'en-US', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR',
  de: 'de-DE', it: 'it-IT', nl: 'nl-NL', ru: 'ru-RU',
  zh: 'zh-CN', ja: 'ja-JP',
};

function speakWord(word: string, langCode: string) {
  Speech.stop();
  Speech.speak(word, { language: TTS_LOCALE[langCode] ?? langCode, rate: 0.85 });
}

const { width } = Dimensions.get('window');
const MAX_HEARTS = 5;
const XP_PER_CORRECT = 10;
const XP_BONUS_COMPLETE = 50;

export default function LearnLessonScreen() {
  const { language, uiLanguage, colors } = useApp();
  const { user } = useAuth();
  const t = getStrings(uiLanguage);
  const params = useLocalSearchParams<{ levelIdx: string; topicIdx: string }>();

  const levelIdx = parseInt(params.levelIdx ?? '0', 10);
  const topicIdx = parseInt(params.topicIdx ?? '0', 10);
  const level    = LEARN_LEVELS[levelIdx];
  const topic    = level?.topics[topicIdx];

  const target = dl(language);

  const [steps]          = useState<LessonStep[]>(() => generateLesson(levelIdx, topicIdx, language, uiLanguage));
  const [stepIdx,  setStepIdx]  = useState(0);
  const [hearts,   setHearts]   = useState(MAX_HEARTS);
  const [xp,       setXp]       = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [phase,    setPhase]    = useState<'lesson' | 'complete' | 'gameover'>('lesson');

  // Animations
  const progressAnim  = useRef(new Animated.Value(0)).current;
  const cardAnim      = useRef(new Animated.Value(0)).current;
  const feedbackAnim  = useRef(new Animated.Value(0)).current;
  const heartAnim     = useRef(new Animated.Value(1)).current;
  const celebAnim     = useRef(new Animated.Value(0)).current;
  const xpBumpAnim    = useRef(new Animated.Value(0)).current;

  const currentStep = steps[stepIdx];
  const totalSteps  = steps.length;

  // Animate progress bar
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: stepIdx / totalSteps,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [stepIdx]);

  // Animate card entrance + auto-speak on card steps
  useEffect(() => {
    cardAnim.setValue(0);
    Animated.spring(cardAnim, { toValue: 1, useNativeDriver: true, speed: 8, bounciness: 8 }).start();
    if (currentStep?.type === 'card') {
      const word = (currentStep as StepCard).item.w[target];
      setTimeout(() => speakWord(word, target), 400);
    }
  }, [stepIdx]);

  // Animate completion
  useEffect(() => {
    if (phase === 'complete') {
      Animated.spring(celebAnim, { toValue: 1, useNativeDriver: true, speed: 4, bounciness: 14 }).start();
    }
  }, [phase]);

  const handleCardTap = useCallback(() => {
    if (stepIdx < totalSteps - 1) {
      setStepIdx(i => i + 1);
    } else {
      setPhase('complete');
    }
  }, [stepIdx, totalSteps]);

  const handleAnswer = useCallback((idx: number) => {
    if (selected !== null) return;
    const step = currentStep as StepQuiz;
    setSelected(idx);

    Animated.timing(feedbackAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();

    if (idx === step.correctIdx) {
      if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const earned = XP_PER_CORRECT;
      setXp(prev => prev + earned);
      xpBumpAnim.setValue(0);
      Animated.sequence([
        Animated.spring(xpBumpAnim, { toValue: 1, useNativeDriver: true, speed: 20, bounciness: 6 }),
        Animated.timing(xpBumpAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
      ]).start();
    } else {
      if (Platform.OS !== 'web') Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
      const next = hearts - 1;
      setHearts(next);
      Animated.sequence([
        Animated.timing(heartAnim, { toValue: 1.3, duration: 100, useNativeDriver: true }),
        Animated.timing(heartAnim, { toValue: 0.7, duration: 100, useNativeDriver: true }),
        Animated.spring(heartAnim, { toValue: 1,   useNativeDriver: true }),
      ]).start();
      if (next === 0) {
        setTimeout(() => setPhase('gameover'), 800);
      }
    }
  }, [selected, currentStep, hearts]);

  const handleContinue = useCallback(() => {
    if (phase !== 'lesson') return;
    setSelected(null);
    feedbackAnim.setValue(0);

    if (stepIdx < totalSteps - 1) {
      setStepIdx(i => i + 1);
    } else {
      const totalXp = xp + XP_BONUS_COMPLETE;
      setXp(totalXp);
      if (user) {
        (async () => {
          try { await supabase.rpc('increment_xp', { p_user_id: user.id, p_amount: totalXp }); } catch {}
        })();
      }
      setPhase('complete');
    }
  }, [phase, stepIdx, totalSteps, xp, user]);

  // Stop TTS when leaving
  useEffect(() => () => { Speech.stop(); }, []);

  const handleRetry = () => {
    Speech.stop();
    setStepIdx(0);
    setHearts(MAX_HEARTS);
    setXp(0);
    setSelected(null);
    feedbackAnim.setValue(0);
    cardAnim.setValue(0);
    setPhase('lesson');
  };

  const handleFinish = async () => {
    const subscribed = await AsyncStorage.getItem('isSubscribed');
    if (subscribed === 'true') {
      router.back();
    } else {
      router.replace('/subscription' as any);
    }
  };

  // ── Completion screen ───────────────────────────────────────────────
  if (phase === 'complete') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
        <View style={styles.completeHeader}>
          <ThemeToggle />
        </View>
        <Animated.View style={[
          styles.completeBody,
          { transform: [{ scale: celebAnim.interpolate({ inputRange: [0,1], outputRange: [0.8, 1] }) }], opacity: celebAnim },
        ]}>
          <Text style={styles.completeEmoji}>🎉</Text>
          <Text style={[styles.completeTitle, { color: colors.text }]}>{t.lessonComplete}</Text>
          <Text style={[styles.completeSub, { color: colors.textSecondary }]}>
            {topic?.title} · {level?.title}
          </Text>

          <View style={[styles.xpCard, { backgroundColor: Colors.primaryGlow + '22', borderColor: Colors.primaryGlow + '55' }]}>
            <Text style={styles.xpCardLabel}>{t.xpEarned}</Text>
            <Text style={styles.xpCardValue}>+{xp + XP_BONUS_COMPLETE}</Text>
          </View>

          <View style={styles.heartsRow}>
            {Array.from({ length: MAX_HEARTS }).map((_, i) => (
              <Heart
                key={i}
                size={24}
                color={i < hearts ? '#FF4B4B' : colors.cardBorder}
                fill={i < hearts ? '#FF4B4B' : 'transparent'}
                strokeWidth={2}
              />
            ))}
          </View>

          <TouchableOpacity
            style={[styles.primaryBtn, { backgroundColor: Colors.primaryGlow }]}
            onPress={handleFinish}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryBtnText}>{t.continue}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryBtn, { borderColor: colors.cardBorder }]}
            onPress={handleRetry}
            activeOpacity={0.85}
          >
            <Text style={[styles.secondaryBtnText, { color: colors.textSecondary }]}>
              {t.practiceAgain}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    );
  }

  // ── Game over screen ────────────────────────────────────────────────
  if (phase === 'gameover') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
        <View style={styles.completeHeader}>
          <ThemeToggle />
        </View>
        <View style={styles.completeBody}>
          <Text style={styles.completeEmoji}>💔</Text>
          <Text style={[styles.completeTitle, { color: colors.text }]}>{t.outOfHearts}</Text>
          <Text style={[styles.completeSub, { color: colors.textSecondary }]}>
            {t.dontGiveUp}
          </Text>
          <TouchableOpacity
            style={[styles.primaryBtn, { backgroundColor: '#FF4B4B' }]}
            onPress={handleRetry}
            activeOpacity={0.85}
          >
            <Text style={styles.primaryBtnText}>{t.tryAgain}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.secondaryBtn, { borderColor: colors.cardBorder }]}
            onPress={() => router.back()}
            activeOpacity={0.85}
          >
            <Text style={[styles.secondaryBtnText, { color: colors.textSecondary }]}>
              {t.backToLessons}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  // ── Lesson screen ───────────────────────────────────────────────────
  const isCard = currentStep?.type === 'card';
  const isQuiz = currentStep?.type === 'quiz';
  const step   = currentStep as StepQuiz;

  // Compute blank display for quiz
  const filledWord = selected !== null ? step?.options[selected] : null;
  const blankColor = selected !== null
    ? (selected === step?.correctIdx ? '#22C55E' : '#FF4B4B')
    : (level?.color ?? Colors.primaryGlow);
  const sentenceParts = step?.sentence?.split('___') ?? ['', ''];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={[styles.closeBtn, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <X size={18} color={colors.textSecondary} strokeWidth={2.5} />
        </TouchableOpacity>

        <View style={[styles.progressTrack, { backgroundColor: colors.cardBorder }]}>
          <Animated.View
            style={[
              styles.progressFill,
              {
                backgroundColor: level?.color ?? Colors.primaryGlow,
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>

        <View style={styles.topRight}>
          <Animated.View style={{ transform: [{ scale: heartAnim }] }}>
            <View style={styles.heartsSmall}>
              {Array.from({ length: hearts }).map((_, i) => (
                <Heart key={i} size={14} color="#FF4B4B" fill="#FF4B4B" strokeWidth={0} />
              ))}
              {Array.from({ length: MAX_HEARTS - hearts }).map((_, i) => (
                <Heart key={`e${i}`} size={14} color={colors.cardBorder} fill="transparent" strokeWidth={2} />
              ))}
            </View>
          </Animated.View>
          <ThemeToggle />
        </View>
      </View>

      {/* XP bump label */}
      <Animated.View
        style={[
          styles.xpBump,
          {
            opacity: xpBumpAnim,
            transform: [{ translateY: xpBumpAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -20] }) }],
          },
        ]}
      >
        <Text style={styles.xpBumpText}>+{XP_PER_CORRECT} XP</Text>
      </Animated.View>

      {/* Step counter */}
      <Text style={[styles.stepCounter, { color: colors.textSecondary }]}>
        {stepIdx + 1} / {totalSteps}
      </Text>

      {/* ── Card step ── */}
      {isCard && (() => {
        const card = currentStep as StepCard;
        return (
          <Animated.View
            style={[
              styles.cardArea,
              {
                opacity: cardAnim,
                transform: [{ scale: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [0.92, 1] }) }],
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.flashCard, { backgroundColor: colors.card, borderColor: level?.color + '55' }]}
              onPress={handleCardTap}
              activeOpacity={0.9}
            >
              <Text style={styles.flashEmoji}>{card.item.emoji}</Text>

              <Text style={[styles.flashTarget, { color: level?.color ?? Colors.primaryGlow }]}>
                {card.item.w[target]}
              </Text>

              {/* Speaker button */}
              <TouchableOpacity
                style={[styles.speakBtn, { backgroundColor: (level?.color ?? Colors.primaryGlow) + '22' }]}
                onPress={(e) => { e.stopPropagation?.(); speakWord(card.item.w[target], target); }}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Volume2 size={20} color={level?.color ?? Colors.primaryGlow} strokeWidth={2} />
              </TouchableOpacity>

              <View style={[styles.flashDivider, { backgroundColor: colors.cardBorder }]} />

              <Text style={[styles.flashHome, { color: colors.text }]}>
                {card.item.w[dl(uiLanguage)]}
              </Text>

              <View style={[styles.tapHint, { backgroundColor: colors.surface }]}>
                <Text style={[styles.tapHintText, { color: colors.textSecondary }]}>
                  {t.tapToContinue}
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })()}

      {/* ── Quiz step (fill-in-the-blank) ── */}
      {isQuiz && (
        <Animated.View
          style={[
            styles.quizArea,
            {
              opacity: cardAnim,
              transform: [{ translateY: cardAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
            },
          ]}
        >
          {/* Instruction label */}
          <Text style={[styles.instructionLabel, { color: colors.textSecondary }]}>
            {t.fillInBlank}
          </Text>

          {/* Sentence card with blank */}
          <View style={[styles.sentenceCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <View style={styles.sentenceTopRow}>
              <Text style={styles.sentenceEmoji}>{step.item.emoji}</Text>
              <TouchableOpacity
                style={[styles.speakBtnSmall, { backgroundColor: colors.surface }]}
                onPress={() => speakWord(step.item.w[target], target)}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              >
                <Volume2 size={16} color={colors.textSecondary} strokeWidth={2} />
              </TouchableOpacity>
            </View>
            <Text style={[styles.sentenceText, { color: colors.text }]}>
              {sentenceParts[0]}
              <Text
                style={[
                  styles.blankWord,
                  {
                    color: blankColor,
                    backgroundColor: blankColor + '18',
                  },
                ]}
              >
                {filledWord ?? '  _ _ _ _  '}
              </Text>
              {sentenceParts[1] ?? ''}
            </Text>
          </View>

          {/* Word tiles — 2×2 grid */}
          <View style={styles.tilesGrid}>
            {step.options.map((opt, i) => {
              const isCorrect  = i === step.correctIdx;
              const isSelected = i === selected;
              const answered   = selected !== null;

              let bg     = colors.card;
              let border = colors.cardBorder;
              let txtCol = colors.text;

              if (answered) {
                if (isCorrect) {
                  bg = '#22C55E22'; border = '#22C55E'; txtCol = '#22C55E';
                } else if (isSelected) {
                  bg = '#FF4B4B22'; border = '#FF4B4B'; txtCol = '#FF4B4B';
                }
              } else {
                // highlight selected tile while unanswered (pre-answer tap)
                if (isSelected) {
                  bg = (level?.color ?? Colors.primaryGlow) + '22';
                  border = level?.color ?? Colors.primaryGlow;
                }
              }

              return (
                <TouchableOpacity
                  key={i}
                  style={[styles.tile, { backgroundColor: bg, borderColor: border }]}
                  onPress={() => handleAnswer(i)}
                  activeOpacity={answered ? 1 : 0.78}
                  disabled={answered}
                >
                  <Text style={[styles.tileText, { color: txtCol }]} numberOfLines={2}>{opt}</Text>
                  {answered && isCorrect && (
                    <Text style={styles.tileCheck}>✓</Text>
                  )}
                  {answered && isSelected && !isCorrect && (
                    <Text style={styles.tileX}>✗</Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.View>
      )}

      {/* Continue button (quiz only, after answering) */}
      {isQuiz && selected !== null && (
        <Animated.View
          style={[
            styles.continueWrapper,
            { opacity: feedbackAnim },
          ]}
        >
          <View style={[
            styles.feedbackBanner,
            {
              backgroundColor: selected === step.correctIdx
                ? '#22C55E22' : '#FF4B4B22',
              borderColor: selected === step.correctIdx ? '#22C55E' : '#FF4B4B',
            },
          ]}>
            <Text style={[
              styles.feedbackText,
              { color: selected === step.correctIdx ? '#22C55E' : '#FF4B4B' },
            ]}>
              {selected === step.correctIdx
                ? `✓  ${t.correctLabel}! +${XP_PER_CORRECT} XP`
                : `✗  ${t.correctLabel.charAt(0)}${t.correctLabel.slice(1).toLowerCase()} answer: ${step.options[step.correctIdx]}`}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.continueBtn,
              { backgroundColor: selected === step.correctIdx ? Colors.primaryGlow : '#FF4B4B' },
            ]}
            onPress={handleContinue}
            activeOpacity={0.85}
          >
            <Text style={styles.continueBtnText}>{t.continueUpper}</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const TILE_W = (width - Spacing.lg * 2 - 12) / 2;

const styles = StyleSheet.create({
  safe: { flex: 1 },

  // Top bar
  topBar: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.sm, paddingBottom: Spacing.sm,
    gap: 10,
  },
  closeBtn: {
    width: 34, height: 34, borderRadius: 17,
    alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  progressTrack: {
    flex: 1, height: 10, borderRadius: 5, overflow: 'hidden',
  },
  progressFill:  { height: '100%', borderRadius: 5 },
  topRight:      { flexDirection: 'row', alignItems: 'center', gap: 6 },
  heartsSmall:   { flexDirection: 'row', gap: 2 },

  // XP bump
  xpBump: {
    position: 'absolute', right: 24, top: 60, zIndex: 10,
  },
  xpBumpText: {
    fontSize: 14, fontFamily: 'Poppins-Bold',
    color: Colors.primaryGlow,
  },

  // Step counter
  stepCounter: {
    textAlign: 'center', fontSize: 12,
    fontFamily: 'Poppins-SemiBold', marginBottom: 4,
  },

  // Flash card
  cardArea: {
    flex: 1, paddingHorizontal: Spacing.lg,
    justifyContent: 'center',
  },
  flashCard: {
    borderRadius: Radius.xxl, borderWidth: 2,
    padding: Spacing.xl, alignItems: 'center', gap: 12,
  },
  flashEmoji:   { fontSize: 72 },
  flashTarget:  { fontSize: 36, fontFamily: 'Poppins-ExtraBold', textAlign: 'center', letterSpacing: -0.5 },
  flashDivider: { width: 60, height: 2, borderRadius: 1 },
  flashHome:    { fontSize: 22, fontFamily: 'Poppins-SemiBold', textAlign: 'center' },
  tapHint: {
    borderRadius: Radius.full, paddingHorizontal: 16, paddingVertical: 6, marginTop: 8,
  },
  tapHintText:  { fontSize: 12, fontFamily: 'Poppins-Medium' },
  speakBtn: {
    width: 44, height: 44, borderRadius: 22,
    alignItems: 'center', justifyContent: 'center',
  },

  // Quiz — fill-in-the-blank
  quizArea: {
    flex: 1, paddingHorizontal: Spacing.lg, gap: 16,
  },
  instructionLabel: {
    fontSize: 13, fontFamily: 'Poppins-SemiBold',
    textAlign: 'center', letterSpacing: 0.3,
  },
  sentenceCard: {
    borderRadius: Radius.xl, borderWidth: 1.5,
    paddingVertical: Spacing.lg, paddingHorizontal: Spacing.lg,
    alignItems: 'center', gap: 10,
  },
  sentenceTopRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12,
  },
  sentenceEmoji: { fontSize: 44 },
  speakBtnSmall: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
  },
  sentenceText: {
    fontSize: 18, fontFamily: 'Poppins-SemiBold',
    textAlign: 'center', lineHeight: 28,
  },
  blankWord: {
    fontSize: 18, fontFamily: 'Poppins-ExtraBold',
    textDecorationLine: 'underline',
    borderRadius: 4,
    paddingHorizontal: 4,
  },

  // Word tiles
  tilesGrid: {
    flexDirection: 'row', flexWrap: 'wrap', gap: 10,
  },
  tile: {
    width: TILE_W,
    borderRadius: Radius.xl, borderWidth: 2,
    paddingVertical: 18, paddingHorizontal: 8,
    alignItems: 'center', justifyContent: 'center',
    minHeight: 64,
    flexDirection: 'row', gap: 6,
  },
  tileText: {
    flex: 1, fontSize: FontSize.md, fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  tileCheck: { fontSize: 16, fontFamily: 'Poppins-Bold', color: '#22C55E' },
  tileX:     { fontSize: 16, fontFamily: 'Poppins-Bold', color: '#FF4B4B' },

  // Continue
  continueWrapper: {
    paddingHorizontal: Spacing.lg, paddingBottom: Spacing.lg, gap: 10,
  },
  feedbackBanner: {
    borderRadius: Radius.xl, borderWidth: 1.5,
    padding: 12, alignItems: 'center',
  },
  feedbackText:  { fontSize: 14, fontFamily: 'Poppins-Bold' },
  continueBtn: {
    borderRadius: Radius.full, paddingVertical: 16, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2, shadowRadius: 8, elevation: 4,
  },
  continueBtnText: {
    fontSize: 15, fontFamily: 'Poppins-Bold',
    color: '#0B1A08', letterSpacing: 1.2,
  },

  // Complete / Game over
  completeHeader: {
    flexDirection: 'row', justifyContent: 'flex-end',
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.md,
  },
  completeBody: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: Spacing.xl, gap: 16,
  },
  completeEmoji: { fontSize: 72 },
  completeTitle: { fontSize: FontSize.xxxl, fontFamily: 'Poppins-ExtraBold', textAlign: 'center' },
  completeSub:   { fontSize: FontSize.md, fontFamily: 'Poppins-Regular', textAlign: 'center' },
  xpCard: {
    borderRadius: Radius.xl, borderWidth: 1.5,
    paddingVertical: 16, paddingHorizontal: 40, alignItems: 'center', gap: 4,
  },
  xpCardLabel: {
    fontSize: 11, fontFamily: 'Poppins-Bold',
    color: Colors.primaryGlow, letterSpacing: 1.2,
  },
  xpCardValue: {
    fontSize: 40, fontFamily: 'Poppins-ExtraBold',
    color: Colors.primaryGlow, lineHeight: 48,
  },
  heartsRow:   { flexDirection: 'row', gap: 8 },
  primaryBtn: {
    width: width - Spacing.xl * 2,
    borderRadius: Radius.full, paddingVertical: 18, alignItems: 'center',
    shadowColor: '#000', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2, shadowRadius: 12, elevation: 6,
  },
  primaryBtnText: {
    fontSize: 15, fontFamily: 'Poppins-Bold',
    color: '#0B1A08', letterSpacing: 1.2,
  },
  secondaryBtn: {
    width: width - Spacing.xl * 2,
    borderRadius: Radius.full, paddingVertical: 16,
    alignItems: 'center', borderWidth: 1.5,
  },
  secondaryBtnText: { fontSize: 14, fontFamily: 'Poppins-Bold', letterSpacing: 0.5 },
});
