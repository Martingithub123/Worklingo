import { useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, Dimensions,
  TouchableOpacity, Animated, Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const PARTICLES = [
  { x: 0.08, y: 0.10, s: 7,  dur: 3200, d: 0     },
  { x: 0.88, y: 0.08, s: 5,  dur: 2800, d: 400   },
  { x: 0.05, y: 0.28, s: 9,  dur: 3600, d: 200   },
  { x: 0.92, y: 0.24, s: 6,  dur: 3000, d: 800   },
  { x: 0.14, y: 0.68, s: 5,  dur: 2600, d: 600   },
  { x: 0.86, y: 0.72, s: 8,  dur: 3400, d: 1000  },
  { x: 0.04, y: 0.82, s: 6,  dur: 2900, d: 300   },
  { x: 0.90, y: 0.86, s: 5,  dur: 3100, d: 900   },
  { x: 0.50, y: 0.05, s: 4,  dur: 3300, d: 700   },
  { x: 0.72, y: 0.42, s: 5,  dur: 2700, d: 500   },
];

function Particle({ x, y, size, dur, delay }: {
  x: number; y: number; size: number; dur: number; delay: number;
}) {
  const floatY = useRef(new Animated.Value(0)).current;
  const op     = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.parallel([
          Animated.timing(floatY, { toValue: -12, duration: dur, useNativeDriver: true }),
          Animated.timing(op,     { toValue: 0.8, duration: dur / 2, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(floatY, { toValue: 0, duration: dur, useNativeDriver: true }),
          Animated.timing(op,     { toValue: 0.3, duration: dur / 2, useNativeDriver: true }),
        ]),
      ])
    );
    loop.start();
    return () => loop.stop();
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        left: width * x,
        top: height * y,
        width: size,
        height: size,
        borderRadius: 2,
        backgroundColor: '#7DDE4A',
        opacity: op,
        transform: [{ translateY: floatY }, { rotate: '45deg' }],
      }}
    />
  );
}

export default function WelcomeScreen() {
  const mascotOp = useRef(new Animated.Value(0)).current;
  const mascotY  = useRef(new Animated.Value(30)).current;
  const mascotSc = useRef(new Animated.Value(0.82)).current;
  const glowOp   = useRef(new Animated.Value(0.4)).current;
  const glowSc   = useRef(new Animated.Value(0.9)).current;
  const textOp   = useRef(new Animated.Value(0)).current;
  const textY    = useRef(new Animated.Value(22)).current;
  const btnsOp   = useRef(new Animated.Value(0)).current;
  const btnsY    = useRef(new Animated.Value(28)).current;
  const tagOp    = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Mascot entrance
    Animated.sequence([
      Animated.delay(150),
      Animated.parallel([
        Animated.timing(mascotOp, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.spring(mascotY,  { toValue: 0, useNativeDriver: true, speed: 5, bounciness: 10 }),
        Animated.spring(mascotSc, { toValue: 1, useNativeDriver: true, speed: 5, bounciness: 12 }),
      ]),
    ]).start();

    // Glow pulse loop
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(glowOp, { toValue: 0.7, duration: 1800, useNativeDriver: true }),
          Animated.timing(glowSc, { toValue: 1.08, duration: 1800, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(glowOp, { toValue: 0.35, duration: 1800, useNativeDriver: true }),
          Animated.timing(glowSc, { toValue: 0.92, duration: 1800, useNativeDriver: true }),
        ]),
      ])
    ).start();

    // Text entrance
    Animated.sequence([
      Animated.delay(550),
      Animated.parallel([
        Animated.timing(textOp, { toValue: 1, duration: 560, useNativeDriver: true }),
        Animated.timing(textY,  { toValue: 0, duration: 560, useNativeDriver: true }),
      ]),
    ]).start();

    // Tagline
    Animated.sequence([
      Animated.delay(800),
      Animated.timing(tagOp, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();

    // Buttons entrance
    Animated.sequence([
      Animated.delay(950),
      Animated.parallel([
        Animated.timing(btnsOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(btnsY,  { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const handleGetStarted = async () => {
    await AsyncStorage.setItem('hasStarted', 'true');
    router.replace('/ui-language' as any);
  };

  const MASCOT_SIZE = Math.min(width * 0.72, 300);

  return (
    <LinearGradient
      colors={['#0A1C08', '#113A0C', '#1A5412', '#0F2A09']}
      locations={[0, 0.3, 0.6, 1]}
      style={styles.root}
    >
      {/* Ambient glow behind mascot */}
      <Animated.View
        style={[styles.glow, {
          opacity: glowOp,
          transform: [{ scale: glowSc }],
        }]}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} x={p.x} y={p.y} size={p.s} dur={p.dur} delay={p.d} />
      ))}

      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={styles.hero}>

          {/* Mascot */}
          <Animated.View style={[styles.mascotWrap, {
            opacity: mascotOp,
            transform: [{ translateY: mascotY }, { scale: mascotSc }],
          }]}>
            <Image
              source={require('@/assets/images/bee-icon-new.png')}
              style={{ width: MASCOT_SIZE, height: MASCOT_SIZE }}
              resizeMode="contain"
            />
          </Animated.View>

          {/* Brand + tagline */}
          <Animated.View style={[styles.textBlock, {
            opacity: textOp,
            transform: [{ translateY: textY }],
          }]}>
            <View style={styles.titleRow}>
              <Text style={styles.titleBee}>Fluent</Text>
              <Text style={styles.titleFluent}>Bee</Text>
            </View>
            <Text style={styles.tagline}>
              Learn for free. Master your{'\n'}workplace language.
            </Text>
          </Animated.View>

          {/* Tag badge */}
          <Animated.View style={[styles.tagRow, { opacity: tagOp }]}>
            <View style={styles.tagDot} />
            <Text style={styles.tagText}>Ready to buzz!</Text>
            <View style={styles.tagDot} />
          </Animated.View>
        </View>

        {/* Buttons */}
        <Animated.View style={[styles.btns, {
          opacity: btnsOp,
          transform: [{ translateY: btnsY }],
        }]}>
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={handleGetStarted}
            activeOpacity={0.86}
          >
            <Text style={styles.primaryBtnText}>GET STARTED</Text>
            <View style={styles.arrowWrap}>
              <Text style={styles.arrow}>→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => router.push('/login' as any)}
            activeOpacity={0.82}
          >
            <Text style={styles.secondaryBtnText}>I ALREADY HAVE AN ACCOUNT</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const GLOW_SIZE = width * 1.1;

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },

  glow: {
    position: 'absolute',
    top: height * 0.1,
    left: (width - GLOW_SIZE) / 2,
    width: GLOW_SIZE,
    height: GLOW_SIZE,
    borderRadius: GLOW_SIZE / 2,
    backgroundColor: '#3DB82C',
  },

  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 6,
  },

  mascotWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },

  textBlock: {
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  titleBee: {
    fontSize: 58,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    letterSpacing: -2,
  },
  titleFluent: {
    fontSize: 58,
    fontFamily: 'Poppins-ExtraBold',
    color: '#7DDE4A',
    letterSpacing: -2,
  },
  tagline: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.60)',
    textAlign: 'center',
    lineHeight: 24,
  },

  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 6,
  },
  tagDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#7DDE4A',
  },
  tagText: {
    fontSize: 13,
    fontFamily: 'Poppins-SemiBold',
    color: '#7DDE4A',
    letterSpacing: 0.3,
  },

  btns: {
    paddingHorizontal: 20,
    paddingBottom: 16,
    gap: 12,
  },

  primaryBtn: {
    backgroundColor: '#5ED82B',
    borderRadius: 99,
    paddingVertical: 18,
    paddingHorizontal: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    shadowColor: '#5ED82B',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.55,
    shadowRadius: 24,
    elevation: 14,
  },
  primaryBtnText: {
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    color: '#0A1C08',
    letterSpacing: 2,
    flex: 1,
    textAlign: 'center',
  },
  arrowWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0,0,0,0.18)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 18,
    color: '#0A1C08',
    fontFamily: 'Poppins-ExtraBold',
  },

  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.22)',
    borderRadius: 99,
    paddingVertical: 18,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.06)',
  },
  secondaryBtnText: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: 'rgba(255,255,255,0.65)',
    letterSpacing: 1.4,
  },
});
