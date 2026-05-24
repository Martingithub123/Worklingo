import { useState, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform, ScrollView,
  Animated, Dimensions, Image,
} from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import { Radius, FontSize } from '@/constants/theme';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function LoginScreen() {
  const { signIn } = useAuth();
  const { uiLanguage } = useApp();
  const t = getStrings(uiLanguage);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Animations
  const formOp   = useRef(new Animated.Value(0)).current;
  const formY    = useRef(new Animated.Value(20)).current;
  const btnScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.'); return;
    }
    setLoading(true); setError('');
    const { error } = await signIn(email.trim(), password);
    setLoading(false);
    if (error) setError(error);
    else router.replace('/ui-language' as any);
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
          <Image
            source={require('@/assets/images/bee-icon-new.png')}
            style={{ width: width * 0.45, height: width * 0.45 }}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={styles.title}>FluentBee</Text>
          <Text style={styles.tagline}>{t.welcomeBack}</Text>

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
                maxLength={254}
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
                maxLength={128}
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
                <Text style={styles.primaryBtnText}>{loading ? t.loggingIn : t.logIn}</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Sign up link */}
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={() => router.replace('/signup' as any)}
              activeOpacity={0.85}
            >
              <Text style={styles.secondaryBtnText}>{t.createAccountCta}</Text>
            </TouchableOpacity>
          </Animated.View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1A08', alignItems: 'center' },
  glow: {
    position: 'absolute', top: height * 0.02,
    width: width * 0.9, height: width * 0.9, borderRadius: width * 0.45,
    backgroundColor: 'rgba(61,184,44,0.08)',
  },
  dot: { position: 'absolute', backgroundColor: 'rgba(255,255,255,0.18)' },
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: height * 0.06,
    paddingBottom: 40,
  },
  title: {
    fontSize: 46,
    fontFamily: 'Poppins-ExtraBold',
    color: '#5ED82B',
    letterSpacing: -1,
    textAlign: 'center',
    marginBottom: 6,
    marginTop: 8,
  },
  workRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 6 },
  workDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#5ED82B', opacity: 0.7 },
  workText: {
    fontSize: 42,
    fontFamily: 'Poppins-ExtraBold',
    color: '#5ED82B',
    letterSpacing: -1,
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
    borderColor: 'rgba(255,255,255,0.12)',
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
    backgroundColor: '#5ED82B',
    borderRadius: 50, paddingVertical: 18,
    alignItems: 'center', marginTop: 4,
    shadowColor: '#5ED82B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45, shadowRadius: 16, elevation: 10,
  },
  primaryBtnText: {
    fontSize: 15, fontFamily: 'Poppins-Bold',
    color: '#0B1A08', letterSpacing: 1.2,
  },
  secondaryBtn: {
    borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.22)',
    borderRadius: 50, paddingVertical: 18, alignItems: 'center',
  },
  secondaryBtnText: {
    fontSize: 13, fontFamily: 'Poppins-Bold',
    color: '#5ED82B', letterSpacing: 1,
  },
});
