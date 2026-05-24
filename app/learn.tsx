import { useRef, useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Animated, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { LEARN_LEVELS, LEVEL_TITLES, TOPIC_TITLES, getLocalizedTitle } from '@/services/learnService';
import { getLocalizedLangName } from '@/constants/langNames';
import { ChevronLeft, ChevronDown, ChevronUp, Star, Zap } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function LearnScreen() {
  const { language, uiLanguage, colors } = useApp();
  const t = getStrings(uiLanguage);
  const langLabel = getLocalizedLangName(language, uiLanguage);

  // Which level is expanded (null = show all level cards closed)
  const [openLevel, setOpenLevel] = useState<number | null>(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }).start();
  }, []);

  const toggleLevel = (idx: number) => {
    setOpenLevel(prev => (prev === idx ? null : idx));
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.backBtn, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Logo size={32} />
        </View>
        <ThemeToggle />
      </View>

      {/* Title bar */}
      <View style={[styles.titleBar, { borderBottomColor: colors.cardBorder }]}>
        <View>
          <Text style={[styles.title, { color: colors.text }]}>
            {t.learnTitle} <Text style={styles.titleAccent}>{langLabel}</Text>
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t.chooseLevelTopic}
          </Text>
        </View>
        <View style={[styles.xpPill, { backgroundColor: Colors.primaryGlow + '22' }]}>
          <Zap size={13} color={Colors.primaryGlow} fill={Colors.primaryGlow} strokeWidth={0} />
          <Text style={styles.xpText}>XP</Text>
        </View>
      </View>

      <Animated.ScrollView
        style={{ opacity: fadeAnim }}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {LEARN_LEVELS.map((level, levelIdx) => {
          const isOpen = openLevel === levelIdx;
          return (
            <View key={level.level} style={styles.levelBlock}>
              {/* Level header — tap to expand/collapse */}
              <TouchableOpacity
                activeOpacity={0.82}
                onPress={() => toggleLevel(levelIdx)}
                style={[
                  styles.levelHeader,
                  {
                    backgroundColor: isOpen ? level.color + '28' : level.color + '18',
                    borderColor: isOpen ? level.color + '88' : level.color + '44',
                  },
                ]}
              >
                <Text style={styles.levelEmoji}>{level.emoji}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.levelBadge, { color: level.color }]}>
                    {t.levelLabel.toUpperCase()} {level.level}
                  </Text>
                  <Text style={[styles.levelTitle, { color: colors.text }]}>{getLocalizedTitle(LEVEL_TITLES[level.level], uiLanguage)}</Text>
                  <Text style={[styles.levelSub, { color: colors.textSecondary }]}>
                    {level.topics.length} {t.topics}
                  </Text>
                </View>
                <View style={[styles.levelChevron, { backgroundColor: level.color + '22' }]}>
                  {isOpen
                    ? <ChevronUp   size={18} color={level.color} strokeWidth={2.5} />
                    : <ChevronDown size={18} color={level.color} strokeWidth={2.5} />}
                </View>
              </TouchableOpacity>

              {/* Topic grid — only shown when level is open */}
              {isOpen && (
                <View style={styles.topicGrid}>
                  {level.topics.map((topic, topicIdx) => (
                    <TouchableOpacity
                      key={topic.id}
                      style={[
                        styles.topicCard,
                        { backgroundColor: colors.card, borderColor: colors.cardBorder },
                      ]}
                      onPress={() =>
                        router.push(
                          `/learn-lesson?levelIdx=${levelIdx}&topicIdx=${topicIdx}` as any,
                        )
                      }
                      activeOpacity={0.82}
                    >
                      <Text style={styles.topicEmoji}>{topic.emoji}</Text>
                      <Text style={[styles.topicTitle, { color: colors.text }]} numberOfLines={2}>
                        {getLocalizedTitle(TOPIC_TITLES[topic.id], uiLanguage)}
                      </Text>
                      <View style={[styles.startBadge, { backgroundColor: level.color }]}>
                        <Text style={styles.startText}>{t.start}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}

        {/* Bottom motivational note */}
        <View style={[styles.motivCard, { backgroundColor: colors.surface, borderColor: colors.cardBorder }]}>
          <Star size={16} color={Colors.warning} fill={Colors.warning} strokeWidth={0} />
          <Text style={[styles.motivText, { color: colors.textSecondary }]}>
            {t.earnXpMsg}
          </Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const CARD_W = (width - Spacing.lg * 2 - 12) / 2;

const styles = StyleSheet.create({
  safe:   { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm,
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 19,
    alignItems: 'center', justifyContent: 'center',
  },
  headerCenter: { flex: 1, alignItems: 'center' },

  titleBar: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingBottom: Spacing.md,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: FontSize.xl, fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.3,
  },
  titleAccent: { color: Colors.primaryGlow },
  subtitle:    { fontSize: 12, fontFamily: 'Poppins-Regular', marginTop: 1 },
  xpPill: {
    flexDirection: 'row', alignItems: 'center', gap: 3,
    borderRadius: Radius.full, paddingHorizontal: 10, paddingVertical: 4,
  },
  xpText: { fontSize: 12, fontFamily: 'Poppins-Bold', color: Colors.primaryGlow },

  scroll: { paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.xxl, gap: 14 },

  // Level block
  levelBlock: { gap: 10 },
  levelHeader: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    borderRadius: Radius.xl, borderWidth: 1.5,
    paddingVertical: 14, paddingHorizontal: 16,
  },
  levelEmoji:   { fontSize: 32 },
  levelBadge:   { fontSize: 10, fontFamily: 'Poppins-Bold', letterSpacing: 1 },
  levelTitle:   { fontSize: FontSize.md, fontFamily: 'Poppins-ExtraBold', lineHeight: 20 },
  levelSub:     { fontSize: 11, fontFamily: 'Poppins-Regular', marginTop: 1 },
  levelChevron: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
  },

  // Topic cards
  topicGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  topicCard: {
    width: CARD_W, borderRadius: Radius.xl, borderWidth: 1.5,
    padding: Spacing.md, alignItems: 'center', gap: 8,
    minHeight: 120, justifyContent: 'space-between',
  },
  topicEmoji: { fontSize: 32 },
  topicTitle: {
    fontSize: 12, fontFamily: 'Poppins-SemiBold',
    textAlign: 'center', lineHeight: 17,
  },
  startBadge: {
    borderRadius: Radius.full, paddingHorizontal: 14, paddingVertical: 4,
  },
  startText: { fontSize: 11, fontFamily: 'Poppins-Bold', color: '#fff' },

  motivCard: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    borderRadius: Radius.xl, borderWidth: 1,
    padding: Spacing.md,
  },
  motivText: { flex: 1, fontSize: 12, fontFamily: 'Poppins-Regular', lineHeight: 18 },
});
