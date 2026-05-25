import { useEffect, useRef, useState } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Dimensions,
  Animated, Image, ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { Colors, Spacing, Radius, Shadow } from '@/constants/theme';
import { Check, Zap, X } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const PERKS = [
  'Unlimited vocabulary levels',
  'All job sectors & roles',
  'Offline access',
  'Progress tracking & XP',
  'Priority updates & new content',
];

export default function SubscriptionScreen() {
  const { colors } = useApp();
  const { returnJobId, returnSectorId } = useLocalSearchParams<{
    returnJobId?: string;
    returnSectorId?: string;
  }>();

  const [selected, setSelected] = useState<'monthly' | 'annual'>('annual');

  const beeOp    = useRef(new Animated.Value(0)).current;
  const beeY     = useRef(new Animated.Value(-30)).current;
  const cardOp   = useRef(new Animated.Value(0)).current;
  const cardY    = useRef(new Animated.Value(30)).current;
  const glow     = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.parallel([
        Animated.spring(beeY,  { toValue: 0, useNativeDriver: true, speed: 6, bounciness: 14 }),
        Animated.timing(beeOp, { toValue: 1, duration: 450, useNativeDriver: true }),
      ]),
    ]).start();

    Animated.sequence([
      Animated.delay(350),
      Animated.parallel([
        Animated.timing(cardOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(cardY,  { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, { toValue: 1,   duration: 1800, useNativeDriver: true }),
        Animated.timing(glow, { toValue: 0.3, duration: 1800, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const handleSubscribe = () => router.replace('/signup' as any);
  const handleSkip = () => {
    if (returnJobId && returnSectorId) {
      router.replace({
        pathname: '/levels',
        params: { jobId: returnJobId, sectorId: returnSectorId },
      } as any);
    } else {
      router.replace('/language' as any);
    }
  };

  const glowOpacity = glow.interpolate({ inputRange: [0, 1], outputRange: [0.3, 0.7] });

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Glow orb */}
          <Animated.View style={[styles.glowOrb, { opacity: glowOpacity }]} />

          {/* Header */}
          <View style={styles.header}>
            <Animated.View style={{ opacity: beeOp, transform: [{ translateY: beeY }] }}>
              <View style={styles.beeWrap}>
                <Image
                  source={require('@/assets/images/bee-icon-new.png')}
                  style={styles.bee}
                  resizeMode="contain"
                />
                <View style={styles.zapBadge}>
                  <Zap size={14} color="#fff" fill="#fff" />
                </View>
              </View>
            </Animated.View>

            <Animated.View style={[styles.titleWrap, { opacity: beeOp, transform: [{ translateY: beeY }] }]}>
              <Text style={[styles.title, { color: colors.text }]}>Unlock FluentBee</Text>
              <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
                Keep learning. Unlock all future content and courses.
              </Text>
            </Animated.View>
          </View>

          {/* Plan cards */}
          <Animated.View style={[styles.plans, { opacity: cardOp, transform: [{ translateY: cardY }] }]}>
            {/* Annual */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setSelected('annual')}
              style={[
                styles.planCard,
                { backgroundColor: colors.card, borderColor: colors.cardBorder },
                selected === 'annual' && styles.planCardSelected,
              ]}
            >
              {/* Best value badge */}
              <View style={styles.badge}>
                <Text style={styles.badgeText}>50% OFF</Text>
              </View>

              <View style={styles.planRadio}>
                <View style={[
                  styles.radioOuter,
                  selected === 'annual' && styles.radioOuterSelected,
                ]}>
                  {selected === 'annual' && <View style={styles.radioInner} />}
                </View>
              </View>

              <Text style={[styles.planLabel, { color: colors.text }]}>Annual</Text>
              <Text style={[styles.planPrice, { color: Colors.primaryGlow }]}>
                $59<Text style={styles.planCents}>.90</Text>
              </Text>
              <Text style={[styles.planPer, { color: colors.textSecondary }]}>/year</Text>
              <Text style={[styles.planEquiv, { color: colors.textMuted }]}>
                ~$4.99/month
              </Text>
            </TouchableOpacity>

            {/* Monthly */}
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => setSelected('monthly')}
              style={[
                styles.planCard,
                { backgroundColor: colors.card, borderColor: colors.cardBorder },
                selected === 'monthly' && styles.planCardSelected,
              ]}
            >
              <View style={styles.planRadio}>
                <View style={[
                  styles.radioOuter,
                  selected === 'monthly' && styles.radioOuterSelected,
                ]}>
                  {selected === 'monthly' && <View style={styles.radioInner} />}
                </View>
              </View>

              <Text style={[styles.planLabel, { color: colors.text }]}>Monthly</Text>
              <Text style={[styles.planPrice, { color: colors.text }]}>
                $9<Text style={styles.planCents}>.90</Text>
              </Text>
              <Text style={[styles.planPer, { color: colors.textSecondary }]}>/month</Text>
              <Text style={[styles.planEquiv, { color: colors.textMuted }]}> </Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Perks */}
          <Animated.View style={[styles.perks, { opacity: cardOp }]}>
            {PERKS.map((perk) => (
              <View key={perk} style={styles.perkRow}>
                <View style={styles.checkWrap}>
                  <Check size={13} color="#fff" strokeWidth={3} />
                </View>
                <Text style={[styles.perkText, { color: colors.textSecondary }]}>{perk}</Text>
              </View>
            ))}
          </Animated.View>

          {/* Subscribe CTA */}
          <Animated.View style={[styles.ctaWrap, { opacity: cardOp }]}>
            <TouchableOpacity
              activeOpacity={0.88}
              style={styles.subscribeBtn}
              onPress={handleSubscribe}
            >
              <Zap size={18} color="#000" fill="#000" />
              <Text style={styles.subscribeBtnText}>
                {selected === 'annual' ? 'Get Annual – $59.90/yr' : 'Get Monthly – $9.90/mo'}
              </Text>
            </TouchableOpacity>

            <Text style={[styles.legalText, { color: colors.textMuted }]}>
              Cancel anytime · No hidden fees
            </Text>

            <TouchableOpacity onPress={handleSkip} style={styles.skipBtn} activeOpacity={0.7}>
              <Text style={[styles.skipText, { color: colors.textMuted }]}>
                Skip for now
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const CARD_W = (width - Spacing.lg * 2 - Spacing.md) / 2;

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  scroll: { paddingHorizontal: Spacing.lg, paddingBottom: 32, alignItems: 'center' },

  glowOrb: {
    position: 'absolute',
    top: -80,
    alignSelf: 'center',
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: Colors.primary,
    opacity: 0.12,
  },

  header: { alignItems: 'center', paddingTop: 28, paddingBottom: 16, gap: 14 },
  beeWrap: { position: 'relative', alignItems: 'center', justifyContent: 'center' },
  bee: { width: 90, height: 90 },
  zapBadge: {
    position: 'absolute',
    bottom: 0,
    right: -4,
    backgroundColor: Colors.primary,
    borderRadius: Radius.full,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0F1210',
  },
  titleWrap: { alignItems: 'center', gap: 6 },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 12,
  },

  plans: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: 8,
    width: '100%',
  },
  planCard: {
    width: CARD_W,
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: Spacing.md,
    alignItems: 'center',
    gap: 3,
    position: 'relative',
    overflow: 'visible',
    ...Shadow.md,
  },
  planCardSelected: {
    borderColor: Colors.primaryGlow,
    borderWidth: 2,
    ...Shadow.glow,
  },
  badge: {
    position: 'absolute',
    top: -13,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: Radius.full,
  },
  badgeText: {
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    letterSpacing: 0.5,
  },
  planRadio: { marginBottom: 6, marginTop: 8 },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#556E4E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioOuterSelected: { borderColor: Colors.primaryGlow },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryGlow,
  },
  planLabel: { fontSize: 13, fontFamily: 'Poppins-SemiBold' },
  planPrice: { fontSize: 30, fontFamily: 'Poppins-ExtraBold', letterSpacing: -1 },
  planCents: { fontSize: 18, fontFamily: 'Poppins-Bold' },
  planPer: { fontSize: 12, fontFamily: 'Poppins-Regular', marginTop: -4 },
  planEquiv: { fontSize: 11, fontFamily: 'Poppins-Regular', marginTop: 2 },

  perks: {
    width: '100%',
    marginTop: 20,
    gap: 10,
  },
  perkRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  checkWrap: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  perkText: { fontSize: 13.5, fontFamily: 'Poppins-Regular', flex: 1 },

  ctaWrap: { width: '100%', marginTop: 24, alignItems: 'center', gap: 10 },
  subscribeBtn: {
    width: '100%',
    backgroundColor: Colors.primaryGlow,
    paddingVertical: 16,
    borderRadius: Radius.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    ...Shadow.glow,
  },
  subscribeBtnText: {
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    letterSpacing: 0.2,
  },
  legalText: { fontSize: 11, fontFamily: 'Poppins-Regular' },
  skipBtn: { paddingVertical: 10, paddingHorizontal: 20 },
  skipText: { fontSize: 13, fontFamily: 'Poppins-Medium', textDecorationLine: 'underline' },
});
