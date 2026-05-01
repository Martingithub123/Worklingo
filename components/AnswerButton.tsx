import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Colors, Radius, FontSize } from '@/constants/theme';

type AnswerState = 'idle' | 'correct' | 'wrong';

interface AnswerButtonProps {
  label: string;
  state: AnswerState;
  onPress: () => void;
  disabled: boolean;
  isDark: boolean;
}

export function AnswerButton({ label, state, onPress, disabled, isDark }: AnswerButtonProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (state === 'correct') {
      Animated.sequence([
        Animated.spring(scale, { toValue: 1.05, useNativeDriver: true, speed: 40, bounciness: 8 }),
        Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 40, bounciness: 8 }),
      ]).start();
    } else if (state === 'wrong') {
      Animated.sequence([
        Animated.timing(translateX, { toValue: -8, duration: 50, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: 8, duration: 50, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: -8, duration: 50, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: 8, duration: 50, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();
    }
  }, [state]);

  const colors = isDark ? Colors.dark : Colors.light;
  const bg = state === 'correct' ? Colors.success : state === 'wrong' ? Colors.error : colors.card;
  const border = state === 'correct' ? Colors.success : state === 'wrong' ? Colors.error : colors.cardBorder;
  const textColor = state !== 'idle' ? '#FFFFFF' : colors.text;

  return (
    <Animated.View style={{ flex: 1, transform: [{ scale }, { translateX }] }}>
      <TouchableOpacity
        style={[styles.btn, { backgroundColor: bg, borderColor: border }]}
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.85}
      >
        <Text style={[styles.label, { color: textColor }]} numberOfLines={2}>
          {label}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    minHeight: 56,
    borderRadius: Radius.lg,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  label: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
