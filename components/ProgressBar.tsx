import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Colors } from '@/constants/theme';

interface ProgressBarProps {
  current: number;
  total: number;
  isDark?: boolean;
}

export function ProgressBar({ current, total, isDark = true }: ProgressBarProps) {
  const progress = useRef(new Animated.Value(0)).current;
  const percentage = total > 0 ? (current / total) * 100 : 0;

  useEffect(() => {
    Animated.spring(progress, {
      toValue: percentage,
      useNativeDriver: false,
      tension: 60,
      friction: 10,
    }).start();
  }, [percentage]);

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const bg = isDark ? Colors.dark.cardBorder : Colors.light.cardBorder;

  return (
    <View style={[styles.track, { backgroundColor: bg }]}>
      <Animated.View style={[styles.fill, { width }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    width: '100%',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
});
