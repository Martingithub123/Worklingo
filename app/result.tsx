import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { syncService } from '@/services/syncService';
import { LEVELS } from '@/data/levels';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { CircleCheck, CircleX, Trophy, RotateCcw, House } from 'lucide-react-native';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function ResultScreen() {
  const { colors } = useApp();
  const { user } = useAuth();
  const { jobId, sectorId, total, correct, incorrect, level } = useLocalSearchParams<{
    jobId: string;
    sectorId: string;
    total: string;
    correct: string;
    incorrect: string;
    level: string;
  }>();

  const totalNum = parseInt(total ?? '0', 10);
  const correctNum = parseInt(correct ?? '0', 10);
  const incorrectNum = parseInt(incorrect ?? '0', 10);
  const percentage = totalNum > 0 ? Math.round((correctNum / totalNum) * 100) : 0;
  const levelConfig = LEVELS.find(l => l.id === parseInt(level ?? '1', 10)) ?? LEVELS[0];

  const scoreScale = useRef(new Animated.Value(0)).current;
  const scoreOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animate score circle
    Animated.sequence([
      Animated.delay(200),
      Animated.parallel([
        Animated.spring(scoreScale, { toValue: 1, useNativeDriver: true, tension: 200, friction: 12 }),
        Animated.timing(scoreOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      ]),
    ]).start();

    // Save progress locally first, sync to Supabase in background
    if (user) {
      const xpEarned = Math.round((correctNum / (totalNum || 1)) * levelConfig.xpReward);
      syncService.saveProgress({
        userId:   user.id,
        jobId:    jobId ?? '',
        sectorId: sectorId ?? '',
        levelId:  parseInt(level ?? '1', 10),
        score:    correctNum,
        total:    totalNum,
        xpEarned,
      });
    }
  }, []);

  const getMessage = () => {
    if (percentage === 100) return { emoji: '🏆', text: 'Perfect Score!', sub: 'You nailed every single word!' };
    if (percentage >= 80) return { emoji: '🎉', text: 'Great Job!', sub: 'You\'re getting very fluent!' };
    if (percentage >= 60) return { emoji: '💪', text: 'Good Effort!', sub: 'Keep practicing to improve.' };
    return { emoji: '📚', text: 'Keep Learning!', sub: 'Review the words and try again.' };
  };

  const message = getMessage();

  const handleRetry = () => {
    router.replace({ pathname: '/quiz', params: { jobId, sectorId, level } });
  };

  const handleHome = () => {
    router.replace('/language');
  };

  const handleNewSector = () => {
    router.replace({ pathname: '/sectors', params: { jobId } });
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.topBar}>
        <ThemeToggle />
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topSection}>
          <Animated.View style={[styles.scoreCircle, { transform: [{ scale: scoreScale }], opacity: scoreOpacity }]}>
            <Text style={styles.scoreEmoji}>{message.emoji}</Text>
            <Text style={styles.scorePercent}>{percentage}%</Text>
            <Text style={styles.scoreLabel}>Score</Text>
          </Animated.View>

          <View style={styles.messageBox}>
            <Text style={[styles.messageTitle, { color: colors.text }]}>{message.text}</Text>
            <Text style={[styles.messageSub, { color: colors.textSecondary }]}>{message.sub}</Text>
          </View>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, { backgroundColor: '#0F2A0A', borderColor: Colors.success + '40' }]}>
            <CircleCheck size={24} color={Colors.success} strokeWidth={2} />
            <Text style={[styles.statNum, { color: Colors.success }]}>{correctNum}</Text>
            <Text style={[styles.statLabel, { color: Colors.success + 'AA' }]}>Correct</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: '#2A0A0A', borderColor: Colors.error + '40' }]}>
            <CircleX size={24} color={Colors.error} strokeWidth={2} />
            <Text style={[styles.statNum, { color: Colors.error }]}>{incorrectNum}</Text>
            <Text style={[styles.statLabel, { color: Colors.error + 'AA' }]}>Incorrect</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Trophy size={24} color="#FFC800" strokeWidth={2} />
            <Text style={[styles.statNum, { color: colors.text }]}>{totalNum}</Text>
            <Text style={[styles.statLabel, { color: colors.textSecondary }]}>Total</Text>
          </View>
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity
            style={styles.retryBtn}
            onPress={handleRetry}
            activeOpacity={0.85}
          >
            <RotateCcw size={18} color="#FFFFFF" strokeWidth={2.5} />
            <Text style={styles.retryBtnText}>Try Again</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryBtn, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
            onPress={handleNewSector}
            activeOpacity={0.85}
          >
            <Text style={[styles.secondaryBtnText, { color: colors.text }]}>New Sector</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.secondaryBtn, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
            onPress={handleHome}
            activeOpacity={0.85}
          >
            <House size={16} color={colors.textSecondary} strokeWidth={2} />
            <Text style={[styles.secondaryBtnText, { color: colors.textSecondary }]}>Home</Text>
          </TouchableOpacity>
        </View>

        {percentage < 100 && (
          <View style={[styles.tipCard, { backgroundColor: colors.card, borderColor: Colors.primary + '40' }]}>
            <Text style={[styles.tipTitle, { color: Colors.primary }]}>Pro Tip</Text>
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              Practice daily to build vocabulary faster. Try the same role again to strengthen your memory.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  topBar: { alignItems: 'flex-end', paddingHorizontal: 20, paddingTop: 8 },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xxl,
    paddingBottom: Spacing.xxl,
    gap: 24,
  },
  topSection: {
    alignItems: 'center',
    gap: 20,
  },
  scoreCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.primary + '18',
    borderWidth: 3,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 8,
  },
  scoreEmoji: {
    fontSize: 32,
  },
  scorePercent: {
    fontSize: 40,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    lineHeight: 46,
  },
  scoreLabel: {
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Medium',
    color: Colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  messageBox: {
    alignItems: 'center',
    gap: 4,
  },
  messageTitle: {
    fontSize: FontSize.xxl,
    fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.5,
  },
  messageSub: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 22,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: 16,
    alignItems: 'center',
    gap: 6,
  },
  statNum: {
    fontSize: FontSize.xxl,
    fontFamily: 'Poppins-ExtraBold',
    lineHeight: 32,
  },
  statLabel: {
    fontSize: FontSize.xs,
    fontFamily: 'Poppins-SemiBold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  actionsSection: {
    gap: 10,
  },
  retryBtn: {
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
  },
  retryBtnText: {
    color: '#FFFFFF',
    fontSize: FontSize.lg,
    fontFamily: 'Poppins-Bold',
  },
  secondaryBtn: {
    borderRadius: Radius.full,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    gap: 6,
  },
  secondaryBtnText: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-SemiBold',
  },
  tipCard: {
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: Spacing.md,
    gap: 6,
  },
  tipTitle: {
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  tipText: {
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
});
