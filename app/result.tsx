import { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import { syncService } from '@/services/syncService';
import { LEVELS } from '@/data/levels';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { CircleCheck, CircleX, Trophy, RotateCcw, House, ChevronRight, Compass } from 'lucide-react-native';
import { ThemeToggle } from '@/components/ThemeToggle';

const { width, height } = Dimensions.get('window');
const MASCOT_SIZE = Math.min(width * 0.38, 155);
const CIRCLE_SIZE = Math.min(width * 0.50, 200);

const CONFETTI_COLORS = [
  '#5ED82B', '#FFD700', '#FF6B6B', '#00D4FF', '#FF8C42',
  '#C77DFF', '#FFFFFF', '#7DDE4A', '#FFB800', '#FF4DA6',
];

interface ConfettiPiece {
  x: Animated.Value;
  y: Animated.Value;
  rot: Animated.Value;
  op: Animated.Value;
  color: string;
  size: number;
  shape: 'square' | 'circle' | 'rect';
}

function useConfetti(active: boolean) {
  const pieces = useRef<ConfettiPiece[]>(
    Array.from({ length: 40 }, (_, i) => ({
      x:     new Animated.Value(Math.random() * width),
      y:     new Animated.Value(-40 - Math.random() * 200),
      rot:   new Animated.Value(0),
      op:    new Animated.Value(1),
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      size:  6 + Math.random() * 8,
      shape: (['square', 'circle', 'rect'] as const)[Math.floor(Math.random() * 3)],
    }))
  ).current;

  useEffect(() => {
    if (!active) return;
    const anims = pieces.map((p, i) =>
      Animated.sequence([
        Animated.delay(600 + i * 55),
        Animated.parallel([
          Animated.timing(p.y,   { toValue: height * 0.75, duration: 2200 + Math.random() * 1000, useNativeDriver: true }),
          Animated.timing(p.rot, { toValue: 720 + Math.random() * 360, duration: 2400, useNativeDriver: true }),
          Animated.sequence([
            Animated.timing(p.op, { toValue: 1, duration: 200, useNativeDriver: true }),
            Animated.delay(1800),
            Animated.timing(p.op, { toValue: 0, duration: 600, useNativeDriver: true }),
          ]),
        ]),
      ])
    );
    Animated.parallel(anims).start();
  }, [active]);

  return pieces;
}

export default function ResultScreen() {
  const { colors, uiLanguage } = useApp();
  const t = getStrings(uiLanguage);
  const { user: authUser } = useAuth();
  const { jobId, sectorId, total, correct, incorrect, level } = useLocalSearchParams<{
    jobId: string;
    sectorId: string;
    total: string;
    correct: string;
    incorrect: string;
    level: string;
  }>();

  const totalNum     = parseInt(total      ?? '0', 10);
  const correctNum   = parseInt(correct    ?? '0', 10);
  const incorrectNum = parseInt(incorrect  ?? '0', 10);
  const percentage   = totalNum > 0 ? Math.round((correctNum / totalNum) * 100) : 0;
  const levelConfig  = LEVELS.find(l => l.id === parseInt(level ?? '1', 10)) ?? LEVELS[0];
  const passed       = percentage >= 60;

  const mascotOp   = useRef(new Animated.Value(0)).current;
  const mascotY    = useRef(new Animated.Value(-24)).current;
  const scoreScale = useRef(new Animated.Value(0)).current;
  const scoreOp    = useRef(new Animated.Value(0)).current;
  const glowPulse  = useRef(new Animated.Value(0.4)).current;
  const contentOp  = useRef(new Animated.Value(0)).current;
  const contentY   = useRef(new Animated.Value(28)).current;

  const confetti = useConfetti(passed);

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.parallel([
        Animated.timing(mascotOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.spring(mascotY,  { toValue: 0, useNativeDriver: true, speed: 6, bounciness: 12 }),
      ]),
    ]).start();

    Animated.sequence([
      Animated.delay(400),
      Animated.parallel([
        Animated.spring(scoreScale, { toValue: 1, useNativeDriver: true, tension: 180, friction: 10 }),
        Animated.timing(scoreOp,    { toValue: 1, duration: 450, useNativeDriver: true }),
      ]),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glowPulse, { toValue: 1.0,  duration: 1600, useNativeDriver: true }),
        Animated.timing(glowPulse, { toValue: 0.35, duration: 1600, useNativeDriver: true }),
      ])
    ).start();

    Animated.sequence([
      Animated.delay(700),
      Animated.parallel([
        Animated.timing(contentOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(contentY,  { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();

    if (authUser) {
      const xpEarned = Math.round((correctNum / (totalNum || 1)) * levelConfig.xpReward);
      syncService.saveProgress({
        userId:   authUser.id,
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
    if (percentage === 100) return { emoji: '🏆', title: t.resultTitle100, sub: t.resultSub100 };
    if (percentage >= 80)   return { emoji: '🎉', title: t.resultTitle80,  sub: t.resultSub80  };
    if (percentage >= 60)   return { emoji: '💪', title: t.resultTitle60,  sub: t.resultSub60  };
    return                         { emoji: '📚', title: t.resultTitle0,   sub: t.resultSub0   };
  };

  const { emoji, title, sub } = getMessage();
  const accentColor = percentage >= 60 ? Colors.primaryGlow : Colors.warning;

  const handleNextLevel = () => {
    const next = Math.min((parseInt(level ?? '1', 10) + 1), LEVELS.length);
    router.replace({ pathname: '/quiz', params: { jobId, sectorId, level: String(next) } });
  };
  const handleRetry     = () => router.replace({ pathname: '/quiz', params: { jobId, sectorId, level } });
  const handleNewSector = () => router.replace({ pathname: '/sectors', params: { jobId } });
  const handleHome      = () => router.replace({ pathname: '/levels', params: { jobId: jobId ?? '', sectorId: sectorId ?? '' } } as any);

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      {/* Confetti */}
      {passed && confetti.map((p, i) => {
        const rot = p.rot.interpolate({ inputRange: [0, 720], outputRange: ['0deg', '720deg'] });
        return (
          <Animated.View
            key={i}
            pointerEvents="none"
            style={{
              position: 'absolute', left: 0, top: 0, zIndex: 99,
              transform: [{ translateX: p.x }, { translateY: p.y }, { rotate: rot }],
              opacity: p.op,
              width:  p.shape === 'rect' ? p.size * 0.5 : p.size,
              height: p.shape === 'rect' ? p.size * 1.6 : p.size,
              borderRadius: p.shape === 'circle' ? p.size / 2 : 2,
              backgroundColor: p.color,
            }}
          />
        );
      })}

      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={styles.topBar}><ThemeToggle /></View>

        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

          {/* Mascot */}
          <Animated.View style={{ opacity: mascotOp, transform: [{ translateY: mascotY }], alignItems: 'center' }}>
            <View style={styles.mascotCircle}>
              <Image source={require('@/assets/images/bee-icon-new.png')} style={{ width: MASCOT_SIZE, height: MASCOT_SIZE }} resizeMode="cover" />
            </View>
          </Animated.View>

          {/* Score circle */}
          <View style={[styles.circleWrap, { width: CIRCLE_SIZE + 48, height: CIRCLE_SIZE + 48 }]}>
            <Animated.View style={{
              position: 'absolute',
              width: CIRCLE_SIZE + 48, height: CIRCLE_SIZE + 48,
              borderRadius: (CIRCLE_SIZE + 48) / 2,
              backgroundColor: accentColor,
              opacity: glowPulse,
            }} />
            <Animated.View style={[styles.scoreCircle, {
              width: CIRCLE_SIZE, height: CIRCLE_SIZE,
              borderRadius: CIRCLE_SIZE / 2,
              borderColor: accentColor, shadowColor: accentColor,
              backgroundColor: colors.card,
              transform: [{ scale: scoreScale }], opacity: scoreOp,
            }]}>
              <Text style={styles.scoreEmoji}>{emoji}</Text>
              <Text style={[styles.scorePercent, { color: accentColor }]}>{percentage}%</Text>
              <Text style={[styles.scoreLabel, { color: colors.textSecondary }]}>{t.scoreLabel}</Text>
            </Animated.View>
          </View>

          {/* Message */}
          <Animated.View style={[styles.msgBlock, { opacity: contentOp, transform: [{ translateY: contentY }] }]}>
            <View style={styles.msgRow}>
              <Text style={[styles.msgAccent, { color: accentColor }]}>{title}</Text>
            </View>
            <Text style={[styles.msgSub, { color: colors.textSecondary }]}>{sub}</Text>
          </Animated.View>

          {/* Stats */}
          <Animated.View style={[styles.statsRow, { opacity: contentOp, transform: [{ translateY: contentY }] }]}>
            <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: Colors.success + '40' }]}>
              <CircleCheck size={26} color={Colors.success} strokeWidth={2} />
              <Text style={[styles.statNum, { color: Colors.success }]}>{correctNum}</Text>
              <Text style={[styles.statLbl, { color: Colors.success + 'BB' }]}>{t.correctLabel}</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: Colors.error + '40' }]}>
              <CircleX size={26} color={Colors.error} strokeWidth={2} />
              <Text style={[styles.statNum, { color: Colors.error }]}>{incorrectNum}</Text>
              <Text style={[styles.statLbl, { color: Colors.error + 'BB' }]}>{t.incorrectLabel}</Text>
            </View>
            <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
              <Trophy size={26} color="#FFC800" strokeWidth={2} />
              <Text style={[styles.statNum, { color: colors.text }]}>{totalNum}</Text>
              <Text style={[styles.statLbl, { color: colors.textSecondary }]}>{t.totalLabel}</Text>
            </View>
          </Animated.View>

          {/* Actions */}
          <Animated.View style={[styles.actions, { opacity: contentOp, transform: [{ translateY: contentY }] }]}>
            <TouchableOpacity style={[styles.primaryBtn, { shadowColor: accentColor }]} onPress={handleNextLevel} activeOpacity={0.86}>
              <Trophy size={22} color="#0B1A08" strokeWidth={2.5} />
              <View style={styles.btnTexts}>
                <Text style={styles.primaryBtnText}>{t.nextLevel}</Text>
                <Text style={styles.primaryBtnSub}>{t.continueProgress}</Text>
              </View>
              <ChevronRight size={22} color="#0B1A08" strokeWidth={2.5} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.secondaryBtn, { backgroundColor: colors.card, borderColor: colors.cardBorder }]} onPress={handleRetry} activeOpacity={0.85}>
              <RotateCcw size={20} color={colors.textSecondary} strokeWidth={2} />
              <View style={styles.btnTexts}>
                <Text style={[styles.secondaryBtnText, { color: colors.text }]}>{t.tryAgain}</Text>
                <Text style={[styles.secondaryBtnSub,  { color: colors.textSecondary }]}>{t.repeatLevel}</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.tertiaryRow}>
              <TouchableOpacity style={[styles.tertiaryBtn, { backgroundColor: colors.card, borderColor: colors.cardBorder }]} onPress={handleNewSector} activeOpacity={0.85}>
                <Compass size={16} color={colors.textSecondary} strokeWidth={2} />
                <Text style={[styles.tertiaryText, { color: colors.text }]}>{t.newSector}</Text>
                <ChevronRight size={14} color={colors.textMuted} strokeWidth={2} />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.tertiaryBtn, { backgroundColor: colors.card, borderColor: colors.cardBorder }]} onPress={handleHome} activeOpacity={0.85}>
                <House size={16} color={colors.textSecondary} strokeWidth={2} />
                <Text style={[styles.tertiaryText, { color: colors.text }]}>{t.home}</Text>
                <ChevronRight size={14} color={colors.textMuted} strokeWidth={2} />
              </TouchableOpacity>
            </View>
          </Animated.View>

          {percentage < 100 && (
            <Animated.View style={[styles.tipCard, { backgroundColor: colors.card, borderColor: Colors.primary + '40', opacity: contentOp }]}>
              <Text style={[styles.tipTitle, { color: Colors.primaryGlow }]}>💡  PRO TIP</Text>
              <Text style={[styles.tipText, { color: colors.textSecondary }]}>
                Practice daily to build vocabulary faster. Try the same role again to strengthen your memory.
              </Text>
            </Animated.View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root:   { flex: 1 },
  safe:   { flex: 1 },
  topBar: { alignItems: 'flex-end', paddingHorizontal: 20, paddingTop: 8 },
  scroll: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xxl,
    gap: 20,
    alignItems: 'center',
  },

  mascotCircle: {
    width: MASCOT_SIZE, height: MASCOT_SIZE,
    borderRadius: MASCOT_SIZE / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'rgba(94,216,43,0.35)',
  },

  circleWrap: { alignItems: 'center', justifyContent: 'center' },
  scoreCircle: {
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.55,
    shadowRadius: 28,
    elevation: 12,
  },
  scoreEmoji:   { fontSize: 34, lineHeight: 42 },
  scorePercent: { fontSize: 56, fontFamily: 'Poppins-ExtraBold', lineHeight: 62 },
  scoreLabel:   { fontSize: FontSize.xs, fontFamily: 'Poppins-SemiBold', letterSpacing: 2.5, marginTop: -4 },

  msgBlock: { alignItems: 'center', gap: 4 },
  msgRow:   { flexDirection: 'row', alignItems: 'baseline' },
  msgAccent:{ fontSize: 32, fontFamily: 'Poppins-ExtraBold', letterSpacing: -0.5 },
  msgSub:   { fontSize: FontSize.md, fontFamily: 'Poppins-Regular', textAlign: 'center', lineHeight: 22 },

  statsRow: { flexDirection: 'row', gap: 10, width: '100%' },
  statCard: {
    flex: 1,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    paddingVertical: 18,
    paddingHorizontal: 8,
    alignItems: 'center',
    gap: 5,
  },
  statNum: { fontSize: 34, fontFamily: 'Poppins-ExtraBold', lineHeight: 38 },
  statLbl: { fontSize: 9, fontFamily: 'Poppins-Bold', letterSpacing: 1 },

  actions: { width: '100%', gap: 10 },

  primaryBtn: {
    backgroundColor: Colors.primaryGlow,
    borderRadius: Radius.xl,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.55,
    shadowRadius: 22,
    elevation: 12,
  },
  btnTexts:       { flex: 1 },
  primaryBtnText: { fontSize: FontSize.lg, fontFamily: 'Poppins-Bold',   color: '#0B1A08' },
  primaryBtnSub:  { fontSize: FontSize.xs, fontFamily: 'Poppins-Medium', color: 'rgba(11,26,8,0.6)' },

  secondaryBtn: {
    borderRadius: Radius.xl,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    gap: 14,
  },
  secondaryBtnText: { fontSize: FontSize.md, fontFamily: 'Poppins-SemiBold' },
  secondaryBtnSub:  { fontSize: FontSize.xs, fontFamily: 'Poppins-Regular' },

  tertiaryRow: { flexDirection: 'row', gap: 10 },
  tertiaryBtn: {
    flex: 1,
    borderRadius: Radius.xl,
    paddingVertical: 14,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    gap: 8,
  },
  tertiaryText: { flex: 1, fontSize: FontSize.sm, fontFamily: 'Poppins-SemiBold' },

  tipCard: {
    width: '100%',
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: Spacing.md,
    gap: 6,
  },
  tipTitle: { fontSize: FontSize.sm, fontFamily: 'Poppins-Bold', letterSpacing: 0.5 },
  tipText:  { fontSize: FontSize.sm, fontFamily: 'Poppins-Regular', lineHeight: 20 },
});
