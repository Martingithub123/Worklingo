import { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Animated, Dimensions, Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { getLocalizedLangName } from '@/constants/langNames';
import { ChevronRight, Settings } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ModeSelectScreen() {
  const { language, uiLanguage, colors } = useApp();
  const t = getStrings(uiLanguage);

  const langLabel = getLocalizedLangName(language, uiLanguage);

  const card1Anim = useRef(new Animated.Value(0)).current;
  const card2Anim = useRef(new Animated.Value(0)).current;
  const tipAnim   = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(120, [
      Animated.spring(card1Anim, { toValue: 1, useNativeDriver: true, speed: 6, bounciness: 10 }),
      Animated.spring(card2Anim, { toValue: 1, useNativeDriver: true, speed: 6, bounciness: 10 }),
      Animated.timing(tipAnim,   { toValue: 1, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const cardStyle = (anim: Animated.Value) => ({
    opacity: anim,
    transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [32, 0] }) }],
  });

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <Logo size={40} />
        <View style={styles.headerRight}>
          <ThemeToggle />
          <TouchableOpacity
            style={[styles.iconBtn, { backgroundColor: colors.surface }]}
            onPress={() => router.push('/settings' as any)}
            activeOpacity={0.8}
          >
            <Settings size={18} color={colors.text} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <View style={styles.titleBlock}>
          <Text style={[styles.title, { color: colors.text }]}>
            {t.howToLearnPrefix}{' '}
            <Text style={styles.titleAccent}>{langLabel}?</Text>
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t.chooseYourPath}
          </Text>
        </View>

        {/* Card 1 — Workplace */}
        <Animated.View style={cardStyle(card1Anim)}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
            onPress={() => router.push('/jobs' as any)}
            activeOpacity={0.88}
          >
            <View style={[styles.cardIconBg, { backgroundColor: 'rgba(61,184,44,0.12)' }]}>
              <Image
                source={require('@/assets/images/bee-icon-new.png')}
                style={styles.cardImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.cardBody}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>{t.workplaceTitle}</Text>
              <Text style={[styles.cardTitleAccent]}>{t.workplaceSubtitle}</Text>
              <Text style={[styles.cardDesc, { color: colors.textSecondary }]}>
                {t.workplaceDesc}
              </Text>
              <View style={styles.tagRow}>
                {[t.toolsTag, t.equipmentTag, t.workplaceTag].map(tag => (
                  <View key={tag} style={[styles.tag, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.tagText, { color: colors.textSecondary }]}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={[styles.arrowBadge, { backgroundColor: Colors.primaryGlow }]}>
              <ChevronRight size={18} color="#0B1A08" strokeWidth={3} />
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* Card 2 — Learn Language */}
        <Animated.View style={cardStyle(card2Anim)}>
          <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: Colors.primaryGlow + '55' }]}
            onPress={() => router.push('/learn' as any)}
            activeOpacity={0.88}
          >
            <View style={[styles.cardIconBg, { backgroundColor: 'rgba(28,176,246,0.12)' }]}>
              <View style={styles.beeConvo}>
                <View style={[styles.bubble, { backgroundColor: '#9B59B6' }]}>
                  <Text style={styles.bubbleText}>Hello!</Text>
                </View>
                <Image
                  source={require('@/assets/images/bee-icon-new.png')}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={[styles.bubble, styles.bubbleRight, { backgroundColor: '#F39C12' }]}>
                  <Text style={styles.bubbleText}>Hi!</Text>
                </View>
              </View>
              <View style={[styles.bubble, styles.bubbleBottom, { backgroundColor: Colors.primaryGlow }]}>
                <Text style={[styles.bubbleText, { color: '#0B1A08' }]}>Nice to meet you!</Text>
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>{t.learnTitle}</Text>
              <Text style={[styles.cardTitleAccent, { color: '#1CB0F6' }]}>{langLabel}</Text>
              <Text style={[styles.cardDesc, { color: colors.textSecondary }]}>
                {t.learnTitle} {langLabel} {t.learnDescSuffix}
              </Text>
              <View style={styles.tagRow}>
                {[t.speakingTag, t.vocabularyTag, t.listeningTag].map(tag => (
                  <View key={tag} style={[styles.tag, { backgroundColor: colors.surface }]}>
                    <Text style={[styles.tagText, { color: colors.textSecondary }]}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={[styles.arrowBadge, { backgroundColor: '#1CB0F6' }]}>
              <ChevronRight size={18} color="#FFFFFF" strokeWidth={3} />
            </View>
          </TouchableOpacity>
        </Animated.View>

        {/* Tip banner */}
        <Animated.View style={[cardStyle(tipAnim)]}>
          <View style={[styles.tipCard, { backgroundColor: colors.surface, borderColor: colors.cardBorder }]}>
            <Image
              source={require('@/assets/images/bee-icon-new.png')}
              style={styles.tipBee}
              resizeMode="contain"
            />
            <Text style={[styles.tipText, { color: colors.textSecondary }]}>
              {t.switchModesAnytime}
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe:   { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm,
  },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  iconBtn: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  scroll: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
    gap: 16,
  },
  titleBlock: { marginBottom: 4 },
  title: {
    fontSize: FontSize.xxl,
    fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.5,
    lineHeight: 36,
    marginTop: Spacing.sm,
  },
  titleAccent: {
    color: Colors.primaryGlow,
    fontFamily: 'Poppins-ExtraBold',
  },
  subtitle: {
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Regular',
    marginTop: 4,
  },

  // Cards
  card: {
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  cardIconBg: {
    width: width * 0.28,
    minHeight: 110,
    borderRadius: Radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardImage: { width: 72, height: 72 },
  beeConvo:  { alignItems: 'center', position: 'relative' },
  bubble: {
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: 'absolute',
    top: -6,
    left: -6,
  },
  bubbleRight: { left: 'auto' as any, right: -6 },
  bubbleBottom: { position: 'relative', marginTop: 4 },
  bubbleText: { fontSize: 9, fontFamily: 'Poppins-Bold', color: '#fff' },

  cardBody:  { flex: 1, gap: 4 },
  cardTitle: { fontSize: FontSize.lg, fontFamily: 'Poppins-ExtraBold', lineHeight: 22 },
  cardTitleAccent: {
    fontSize: FontSize.lg, fontFamily: 'Poppins-ExtraBold',
    color: Colors.primaryGlow, lineHeight: 22, marginTop: -4,
  },
  cardDesc:  { fontSize: 11, fontFamily: 'Poppins-Regular', lineHeight: 16, marginTop: 2 },
  tagRow:    { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 6 },
  tag:       { borderRadius: Radius.full, paddingHorizontal: 8, paddingVertical: 3 },
  tagText:   { fontSize: 10, fontFamily: 'Poppins-SemiBold' },

  arrowBadge: {
    width: 32, height: 32, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    alignSelf: 'center', flexShrink: 0,
  },

  // Tip
  tipCard: {
    borderRadius: Radius.xl, borderWidth: 1,
    padding: Spacing.md,
    flexDirection: 'row', alignItems: 'center', gap: 12,
  },
  tipBee:  { width: 40, height: 40 },
  tipText: { flex: 1, fontSize: 12, fontFamily: 'Poppins-Regular', lineHeight: 18 },
});
