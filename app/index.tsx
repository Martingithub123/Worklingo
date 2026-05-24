import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing, Image } from 'react-native';
import { router } from 'expo-router';

import { useAuth } from '@/context/AuthContext';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const { user, loading } = useAuth();
  const authRef = useRef({ user, loading });

  const mascotOp = useRef(new Animated.Value(0)).current;
  const mascotY  = useRef(new Animated.Value(-50)).current;
  const textOp   = useRef(new Animated.Value(0)).current;
  const textY    = useRef(new Animated.Value(24)).current;
  const ring1    = useRef(new Animated.Value(0)).current;
  const ring2    = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    authRef.current = { user, loading };
  }, [user, loading]);

  useEffect(() => {
    // Ripple rings from center
    const ripple = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, { toValue: 1, duration: 1600, easing: Easing.out(Easing.exp), useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0, duration: 0, useNativeDriver: true }),
        ])
      ).start();

    ripple(ring1, 0);
    ripple(ring2, 800);

    // Bee entrance
    Animated.sequence([
      Animated.delay(200),
      Animated.parallel([
        Animated.spring(mascotY, { toValue: 0, useNativeDriver: true, speed: 5, bounciness: 14 }),
        Animated.timing(mascotOp, { toValue: 1, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();

    // Text entrance
    Animated.sequence([
      Animated.delay(600),
      Animated.parallel([
        Animated.timing(textOp, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(textY,  { toValue: 0, duration: 600, easing: Easing.out(Easing.back(1.5)), useNativeDriver: true }),
      ]),
    ]).start();

    const timer = setTimeout(() => {
      const { user: u, loading: l } = authRef.current;
      if (!l && u) {
        router.replace('/ui-language' as any);
        return;
      }
      router.replace('/welcome' as any);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const ringStyle = (anim: Animated.Value) => ({
    opacity: anim.interpolate({ inputRange: [0, 0.3, 1], outputRange: [0, 0.35, 0] }),
    transform: [{ scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 2.2] }) }],
  });

  return (
    <View style={styles.container}>
      {/* Gradient-like background circles */}
      <View style={styles.bgTop} />
      <View style={styles.bgBottom} />

      {/* Decorative dots */}
      {[
        { t: 0.06, l: 0.07, s: 10 }, { t: 0.04, l: 0.42, s: 6 },
        { t: 0.09, r: 0.08, s: 8  }, { t: 0.16, r: 0.04, s: 6 },
        { t: 0.13, l: 0.03, s: 5  }, { t: 0.64, l: 0.05, s: 7 },
        { t: 0.72, r: 0.07, s: 6  }, { t: 0.77, l: 0.30, s: 5 },
        { t: 0.82, r: 0.20, s: 4  }, { t: 0.20, l: 0.88, s: 5 },
      ].map((d: any, i) => (
        <View key={i} style={[styles.dot, {
          top: height * d.t,
          left:  d.l ? width * d.l : undefined,
          right: d.r ? width * d.r : undefined,
          width: d.s, height: d.s, borderRadius: d.s / 2,
        }]} />
      ))}

      {/* Ripple rings */}
      <Animated.View style={[styles.ring, ringStyle(ring1)]} />
      <Animated.View style={[styles.ring, ringStyle(ring2)]} />

      {/* Bee */}
      <Animated.View style={{ opacity: mascotOp, transform: [{ translateY: mascotY }] }}>
        <Image
          source={require('@/assets/images/bee-icon-new.png')}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      </Animated.View>

      {/* Text */}
      <Animated.View style={[styles.textBlock, { opacity: textOp, transform: [{ translateY: textY }] }]}>
        <Text style={styles.title}>FluentBee</Text>
        <View style={styles.tagRow}>
          <View style={styles.tagDot} />
          <Text style={styles.subtitle}>Ready to buzz!</Text>
          <View style={styles.tagDot} />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E7214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgTop: {
    position: 'absolute', top: -width * 0.4, left: -width * 0.2,
    width: width * 1.4, height: width * 1.4, borderRadius: width * 0.7,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  bgBottom: {
    position: 'absolute', bottom: -width * 0.5, right: -width * 0.2,
    width: width * 1.2, height: width * 1.2, borderRadius: width * 0.6,
    backgroundColor: 'rgba(0,0,0,0.07)',
  },
  dot: { position: 'absolute', backgroundColor: 'rgba(0,0,0,0.14)' },
  ring: {
    position: 'absolute',
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.5)',
  },
  textBlock: { alignItems: 'center', marginTop: 8, gap: 10 },
  title: {
    fontSize: 50,
    fontFamily: 'Poppins-ExtraBold',
    color: '#111111',
    letterSpacing: -1.5,
    textShadowColor: 'rgba(0,0,0,0.08)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
  workRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  workDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#111111', opacity: 0.5 },
  workText: {
    fontSize: 42,
    fontFamily: 'Poppins-ExtraBold',
    color: '#111111',
    letterSpacing: -1,
  },
  tagRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  tagDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: '#111111', opacity: 0.4 },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: 'rgba(15,33,103,0.6)',
    letterSpacing: 0.5,
  },
});
