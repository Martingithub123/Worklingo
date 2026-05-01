import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BeeMascot from './BeeMascot';

interface LogoProps {
  size?: number;
  showText?: boolean;
}

export function Logo({ size = 80, showText = false }: LogoProps) {
  return (
    <View style={styles.container}>
      <BeeMascot size={size} />
      {showText && (
        <Text style={[styles.logoText, { fontSize: size * 0.3 }]}>BeeFluent</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 12,
  },
  logoText: {
    color: '#FFB800',
    fontFamily: 'Poppins-Bold',
    letterSpacing: -0.5,
  },
});
