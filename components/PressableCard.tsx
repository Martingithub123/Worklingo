import React, { ReactNode, useRef } from 'react';
import { Animated, TouchableOpacity, ViewStyle } from 'react-native';

interface PressableCardProps {
  onPress: () => void;
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
  disabled?: boolean;
}

export function PressableCard({ onPress, children, style, disabled }: PressableCardProps) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, { toValue: 0.96, useNativeDriver: true, speed: 50, bounciness: 4 }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 50, bounciness: 4 }).start();
  };

  return (
    <Animated.View style={[{ transform: [{ scale }] }, style]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
        disabled={disabled}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
}
