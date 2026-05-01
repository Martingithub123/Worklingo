import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView,
  Animated, Dimensions,
} from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { Spacing, Radius, FontSize } from '@/constants/theme';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');
const IMG = width * 0.62;

export default function LoginScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Animations
  const mascotOp  = useRef(new Animated.Value(0)).current;
  const mascotSc  = useRef(new Animated.Value(0.8)).current;
  const floatY    = useRef(new Animated.Value(0)).current;
  const wingScale = useRef(new Animated.Value(1)).current;
  const eyeX      = useRef(new Animated.Value(0)).current;
  const formOp    = useRef(new Animated.Value(0)).current;
  const formY     = useRef(new Animated.Value(20)).current;
  const btnScale  = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(100),
      Animated.parallel([
        Animated.timing(mascotOp, { toValue: 1, duration: 700, useNativeDriver: true }),
        Animated.spring(mascotSc, { toValue: 1, useNativeDriver: true, speed: 7, bounciness: 12 }),
      ]),
    ]).start(() => {
      Animated.loop(Animated.sequence([
        Animated.timing(floatY, { toValue: -10, duration: 950, useNativeDriver: true }),
        Animated.timing(floatY, { toValue: 0,   duration: 950, useNativeDriver: true }),
      ])).start();

      Animated.loop(Animated.sequence([
        Animated.timing(wingScale, { toValue: 1.07, duration: 110, useNativeDriver: true }),
        Animated.timing(wingScale, { toValue: 0.93, duration: 110, useNativeDriver: true }),
        Animated.timing(wingScale, { toValue: 1.05, duration: 90,  useNativeDriver: true }),
        Animated.timing(wingScale, { toValue: 0.95, duration: 90,  useNativeDriver: true }),
        Animated.timing(wingScale, { toValue: 1,    duration: 90,  useNativeDriver: true }),
        Animated.delay(700),
      ])).start();

      Animated.loop(Animated.sequence([
        Animated.delay(1200),
        Animated.timing(eyeX, { toValue: -5, duration: 340, useNativeDriver: true }),
        Animated.delay(500),
        Animated.timing(eyeX, { toValue: 5,  duration: 500, useNativeDriver: true }),
        Animated.delay(500),
        Animated.timing(eyeX, { toValue: 0,  duration: 300, useNativeDriver: true }),
        Animated.delay(1800),
      ])).start();
    });

    Animated.sequence([
      Animated.delay(500),
      Animated.parallel([
        Animated.timing(formOp, { toValue: 1, duration: 600, useNativeDriver: true }),
        Animated.timing(formY,  { toValue: 0, duration: 600, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const handleLogin = async () => {
    Animated.sequence([
      Animated.spring(btnScale, { toValue: 0.96, useNativeDriver: true, speed: 50, bounciness: 4 }),
      Animated.spring(btnScale, { toValue: 1,    useNativeDriver: true, speed: 50, bounciness: 4 }),
    ]).start();

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.'); return;
    }
    setLoading(true); setError('');
    const { error } = await signIn(email.trim(), password);
    setLoading(false);
    if (error) setError(error);
    else router.replace('/language' as any);
  };

  return (
    <View style={styles.container}>
      {/* Background glow */}
      <View style={styles.glow} />

      {/* Dots */}
      {[
        { t: 0.10, l: 0.07, s: 7 }, { t: 0.07, r: 0.11, s: 5 },
        { t: 0.17, r: 0.04, s: 4 }, { b: 0.11, l: 0.14, s: 5 },
        { b: 0.07, r: 0.19, s: 4 }, { t: 0.44, r: 0.05, s: 4 },
      ].map((d: any, i) => (
        <View key={i} style={[styles.dot, {
          top:    d.t ? height * d.t : undefined,
          bottom: d.b ? height * d.b : undefined,
          left:   d.l ? width  * d.l : undefined,
          right:  d.r ? width  * d.r : undefined,
          width: d.s, height: d.s, borderRadius: d.s / 2,
        }]} />
      ))}

      <KeyboardAvoidingView style={{ flex: 1, width: '100%' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">

          {/* Bee mascot */}
          <Animated.View style={[styles.mascotWrapper, {
            opacity: mascotOp,
            transform: [{ scale: mascotSc }, { translateY: floatY }, { scaleX: wingScale }],
          }]}>
            {/* Use existing PNG if available, otherwise show emoji */}
            <Text style={styles.beeEmoji}>🐝</Text>

            {/* Eye overlays */}
            <Animated.View style={[styles.pupil, styles.pupilLeft,  { transform: [{ translateX: eyeX }] }]} />
            <Animated.View style={[styles.pupil, styles.pupilRight, { transform: [{ translateX: eyeX }] }]} />
          </Animated.View>

          {/* Title */}
          <Text style={styles.title}>BeeFluent</Text>
          <Text style={styles.tagline}>Welcome back! Log in to continue.</Text>

          {/* Form */}
          <Animated.View style={[styles.form, { opacity: formOp, transform: [{ translateY: formY }] }]}>
            <View style={styles.inputRow}>
              <Mail size={18} color="rgba(255,255,255,0.4)" strokeWidth={2} />
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="rgba(255,255,255,0.35)"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCorrect={false}
              />
            </View>

            <View style={styles.inputRow}>
              <Lock size={18} color="rgba(255,255,255,0.4)" strokeWidth={2} />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.35)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPass}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity onPress={() => setShowPass(v => !v)}>
                {showPass
                  ? <EyeOff size={18} color="rgba(255,255,255,0.4)" strokeWidth={2} />
                  : <Eye    size={18} color="rgba(255,255,255,0.4)" strokeWidth={2} />}
              </TouchableOpacity>
            </View>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            {/* Login button */}
            <Animated.View style={{ transform: [{ scale: btnScale }] }}>
              <TouchableOpacity
                style={[styles.primaryBtn, loading && { opacity: 0.7 }]}
                onPress={handleLogin}
                activeOpacity={0.85}
                disabled={loading}
              >
                <Text style={styles.primaryBtnText}>{loading ? 'LOGGING IN...' : 'LOG IN'}</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Sign up link */}
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => router.replace('/signup' as any)}
              activeOpacity={0.85}
            >
              <Text style={styles.secondaryBtnText}>CREATE AN ACCOUNT</Text>
            </TouchableOpacity>
          </Animated.View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111', alignItems: 'center' },
  glow: {
    position: 'absolute', top: height * 0.02,
    width: width * 0.9, height: width * 0.9, borderRadius: width * 0.45,
    backgroundColor: 'rgba(88,204,2,0.06)',
  },
  dot: { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.18)' },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: height * 0.06,
    paddingBottom: 40,
  },
  mascotWrapper: {
    width: IMG * 0.7,
    height: IMG * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  beeEmoji: { fontSize: IMG * 0.55 },
  pupil: {
    position: 'absolute',
    width: 10, height: 10, borderRadius: 5,
    backgroundColor: 'transparent',
  },
  pupilLeft:  { left: '28%', top: '30%' },
  pupilRight: { right: '28%', top: '30%' },
  title: {
    fontSize: 46,
    fontFamily: 'Poppins-ExtraBold',
    color: '#1E7214',
    letterSpacing: -1,
    textAlign: 'center',
    marginBottom: 6,
  },
  tagline: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
    paddingHorizontal: 12,
  },
  form: { width: '100%', gap: 14 },
  inputRow: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: Radius.xl, borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 16, height: 56,
  },
  input: {
    flex: 1, color: '#FFFFFF',
    fontSize: FontSize.md,
    fontFamily: 'Poppins-Regular',
    height: '100%',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  primaryBtn: {
    backgroundColor: '#1E7214',
    borderRadius: 50, paddingVertical: 18,
    alignItems: 'center', marginTop: 4,
    shadowColor: '#1E7214',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45, shadowRadius: 16, elevation: 10,
  },
  primaryBtnText: {
    fontSize: 15, fontFamily: 'Poppins-Bold',
    color: '#1A1A1A', letterSpacing: 1.2,
  },
  secondaryBtn: {
    borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.25)',
    borderRadius: 50, paddingVertical: 18, alignItems: 'center',
  },
  secondaryBtnText: {
    fontSize: 13, fontFamily: 'Poppins-Bold',
    color: '#1E7214', letterSpacing: 1,
  },
});
