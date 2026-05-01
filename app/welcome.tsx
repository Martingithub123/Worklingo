import React, { useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, Dimensions,
  TouchableOpacity, Animated,
} from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import BeeMascot from '@/components/BeeMascot';

const { width } = Dimensions.get('window');
const BEE_SIZE  = Math.min(width * 0.50, 210);

export default function WelcomeScreen() {
  const mascotOp = useRef(new Animated.Value(0)).current;
  const mascotSc = useRef(new Animated.Value(0.78)).current;
  const textOp   = useRef(new Animated.Value(0)).current;
  const textY    = useRef(new Animated.Value(20)).current;
  const btnsOp   = useRef(new Animated.Value(0)).current;
  const btnsY    = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(120),
      Animated.parallel([
        Animated.timing(mascotOp, { toValue: 1, duration: 550, useNativeDriver: true }),
        Animated.spring(mascotSc, { toValue: 1, useNativeDriver: true, speed: 6, bounciness: 12 }),
      ]),
    ]).start();

    Animated.sequence([
      Animated.delay(520),
      Animated.parallel([
        Animated.timing(textOp, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(textY,  { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
    ]).start();

    Animated.sequence([
      Animated.delay(850),
      Animated.parallel([
        Animated.timing(btnsOp, { toValue: 1, duration: 480, useNativeDriver: true }),
        Animated.timing(btnsY,  { toValue: 0, duration: 480, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const handleGetStarted = async () => {
    await AsyncStorage.setItem('hasStarted', 'true');
    router.replace('/language' as any);
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>

        <View style={styles.hero}>
          <Animated.View style={{ opacity: mascotOp, transform: [{ scale: mascotSc }] }}>
            <BeeMascot size={BEE_SIZE} />
          </Animated.View>

          <Animated.View style={[styles.textBlock, { opacity: textOp, transform: [{ translateY: textY }] }]}>
            <Text style={styles.appName}>BeeFluent</Text>
            <Text style={styles.tagline}>Learn for free. Master your{'\n'}workplace language.</Text>
          </Animated.View>
        </View>

        <Animated.View style={[styles.btns, { opacity: btnsOp, transform: [{ translateY: btnsY }] }]}>
          <TouchableOpacity style={styles.primaryBtn} onPress={handleGetStarted} activeOpacity={0.88}>
            <Text style={styles.primaryBtnText}>GET STARTED</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => router.push('/login' as any)}
            activeOpacity={0.85}
          >
            <Text style={styles.secondaryBtnText}>I ALREADY HAVE AN ACCOUNT</Text>
          </TouchableOpacity>
        </Animated.View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#111827' },
  safe: { flex: 1 },

  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    gap: 0,
  },
  textBlock: {
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  appName: {
    fontSize: 54,
    fontFamily: 'Poppins-ExtraBold',
    color: '#1E7214',
    letterSpacing: -2,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.45)',
    textAlign: 'center',
    lineHeight: 23,
  },

  btns: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    gap: 12,
  },
  primaryBtn: {
    backgroundColor: '#1E7214',
    borderRadius: 99,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#1E7214',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 12,
  },
  primaryBtnText: {
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  secondaryBtn: {
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.18)',
    borderRadius: 99,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  secondaryBtnText: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: 'rgba(255,255,255,0.60)',
    letterSpacing: 1.2,
  },
});
