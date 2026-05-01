import React, { useEffect, useRef } from 'react';
import { Animated, Easing, Pressable } from 'react-native';
import Svg, { Circle, Ellipse, Path, Defs, ClipPath } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const VW = 140;
const VH = 124;
const VB = `-20 0 ${VW} ${VH}`;

export default function BeeMascot({ size = 80 }: { size?: number }) {
  const scale = size / VH;
  const W = VW * scale;
  const H = size;

  const floatY       = useRef(new Animated.Value(0)).current;
  const wingY        = useRef(new Animated.Value(0)).current;
  const squish       = useRef(new Animated.Value(1)).current;
  const tilt         = useRef(new Animated.Value(0)).current;
  const leftPupilCx  = useRef(new Animated.Value(40)).current;
  const rightPupilCx = useRef(new Animated.Value(62)).current;
  const leftShineCx  = useRef(new Animated.Value(37)).current;
  const rightShineCx = useRef(new Animated.Value(59)).current;

  useEffect(() => {
    // Float up and down
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatY, { toValue: -10, duration: 1400, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
        Animated.timing(floatY, { toValue: 0,   duration: 1400, easing: Easing.inOut(Easing.sin), useNativeDriver: true }),
      ])
    ).start();

    // Wing flutter — slower, natural pace
    Animated.loop(
      Animated.sequence([
        Animated.timing(wingY, { toValue: -8, duration: 120, useNativeDriver: true }),
        Animated.timing(wingY, { toValue:  4, duration: 120, useNativeDriver: true }),
      ])
    ).start();

    // Eyes look left → center → right → center (slow, lazy)
    const moveEyes = (lx: number, rx: number, ls: number, rs: number, dur: number) =>
      Animated.parallel([
        Animated.timing(leftPupilCx,  { toValue: lx, duration: dur, useNativeDriver: false }),
        Animated.timing(rightPupilCx, { toValue: rx, duration: dur, useNativeDriver: false }),
        Animated.timing(leftShineCx,  { toValue: ls, duration: dur, useNativeDriver: false }),
        Animated.timing(rightShineCx, { toValue: rs, duration: dur, useNativeDriver: false }),
      ]);

    Animated.loop(
      Animated.sequence([
        Animated.delay(2000),
        moveEyes(35, 57, 32, 54, 350),
        Animated.delay(1200),
        moveEyes(40, 62, 37, 59, 280),
        Animated.delay(600),
        moveEyes(45, 67, 42, 64, 350),
        Animated.delay(1200),
        moveEyes(40, 62, 37, 59, 280),
        Animated.delay(800),
      ])
    ).start();
  }, []);

  const handlePress = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(squish, { toValue: 0.78, useNativeDriver: true, speed: 60, bounciness: 0 }),
        Animated.timing(tilt,   { toValue: 18,   duration: 80,          useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.spring(squish, { toValue: 1.18, useNativeDriver: true, speed: 30, bounciness: 14 }),
        Animated.timing(tilt,   { toValue: -10,  duration: 100,         useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.spring(squish, { toValue: 1,  useNativeDriver: true, speed: 18, bounciness: 6 }),
        Animated.spring(tilt,   { toValue: 0,  useNativeDriver: true, speed: 18, bounciness: 6 }),
      ]),
    ]).start();
  };

  const rotation = tilt.interpolate({ inputRange: [-20, 20], outputRange: ['-20deg', '20deg'] });

  return (
    <Pressable onPress={handlePress} hitSlop={12}>
      <Animated.View
        style={{
          width: W, height: H,
          transform: [{ translateY: floatY }, { scale: squish }, { rotate: rotation }],
        }}
      >
        {/* ── Wings (flutter layer, behind body) ── */}
        <Animated.View
          style={{
            position: 'absolute', top: 0, left: 0, width: W, height: H,
            transform: [{ translateY: wingY }],
          }}
        >
          <Svg width={W} height={H} viewBox={VB}>
            {/* Left upper wing */}
            <Path
              d="M 28 72 Q 6 66 -10 50 Q -18 38 -12 24 Q -4 10 10 18 Q 22 26 26 44 Q 28 58 28 72 Z"
              fill="rgba(185,225,255,0.88)" stroke="rgba(55,145,215,0.75)" strokeWidth={1.3}
            />
            {/* Left lower wing */}
            <Path
              d="M 26 80 Q 8 78 -4 84 Q -12 90 -8 100 Q -4 106 10 104 Q 22 102 24 92 Q 26 86 26 80 Z"
              fill="rgba(185,225,255,0.80)" stroke="rgba(55,145,215,0.65)" strokeWidth={1.1}
            />
            {/* Right upper wing */}
            <Path
              d="M 72 72 Q 94 66 110 50 Q 118 38 112 24 Q 104 10 90 18 Q 78 26 74 44 Q 72 58 72 72 Z"
              fill="rgba(185,225,255,0.88)" stroke="rgba(55,145,215,0.75)" strokeWidth={1.3}
            />
            {/* Right lower wing */}
            <Path
              d="M 74 80 Q 92 78 104 84 Q 112 90 108 100 Q 104 106 90 104 Q 78 102 76 92 Q 74 86 74 80 Z"
              fill="rgba(185,225,255,0.80)" stroke="rgba(55,145,215,0.65)" strokeWidth={1.1}
            />
          </Svg>
        </Animated.View>

        {/* ── Body + Head ── */}
        <Svg width={W} height={H} viewBox={VB} style={{ position: 'absolute', top: 0, left: 0 }}>
          <Defs>
            <ClipPath id="bodyClip">
              <Ellipse cx={50} cy={93} rx={25} ry={27} />
            </ClipPath>
          </Defs>

          {/* Stinger */}
          <Path d="M 50 120 L 44 110 L 56 110 Z" fill="#CC8800" />

          {/* Body */}
          <Ellipse cx={50} cy={93} rx={25} ry={27} fill="#FFD700" />
          <Path d="M 25 83 H 75"  stroke="#111111" strokeWidth={8} clipPath="url(#bodyClip)" />
          <Path d="M 25 97 H 75"  stroke="#111111" strokeWidth={8} clipPath="url(#bodyClip)" />
          <Path d="M 25 111 H 75" stroke="#111111" strokeWidth={8} clipPath="url(#bodyClip)" />
          <Ellipse cx={50} cy={93} rx={25} ry={27} fill="none" stroke="#1A1200" strokeWidth={2} />

          {/* Head */}
          <Circle cx={50} cy={48} r={28} fill="#FFD700" stroke="#1A1200" strokeWidth={2} />

          {/* Blush */}
          <Circle cx={29} cy={58} r={10} fill="rgba(255,148,22,0.40)" />
          <Circle cx={71} cy={58} r={10} fill="rgba(255,148,22,0.40)" />

          {/* Eye whites */}
          <Circle cx={39} cy={46} r={11} fill="white" stroke="#1A1200" strokeWidth={1.5} />
          <Circle cx={61} cy={46} r={11} fill="white" stroke="#1A1200" strokeWidth={1.5} />

          {/* Smile */}
          <Path d="M 38 60 Q 50 70 62 60" stroke="#CC1E3C" strokeWidth={2.8} strokeLinecap="round" fill="none" />

          {/* Antennae */}
          <Path d="M 41 22 C 34 14 28 8 22 4" stroke="#1A1200" strokeWidth={2.5} strokeLinecap="round" fill="none" />
          <Circle cx={21} cy={3.5} r={4} fill="#FFD700" stroke="#1A1200" strokeWidth={1.5} />
          <Path d="M 59 22 C 66 14 72 8 78 4" stroke="#1A1200" strokeWidth={2.5} strokeLinecap="round" fill="none" />
          <Circle cx={79} cy={3.5} r={4} fill="#FFD700" stroke="#1A1200" strokeWidth={1.5} />
        </Svg>

        {/* ── Animated pupils + shine ── */}
        <Svg width={W} height={H} viewBox={VB} style={{ position: 'absolute', top: 0, left: 0 }}>
          <AnimatedCircle cx={leftPupilCx}  cy={47} r={6.5} fill="#111" />
          <AnimatedCircle cx={rightPupilCx} cy={47} r={6.5} fill="#111" />
          <AnimatedCircle cx={leftShineCx}  cy={43} r={2.8} fill="white" />
          <AnimatedCircle cx={rightShineCx} cy={43} r={2.8} fill="white" />
        </Svg>
      </Animated.View>
    </Pressable>
  );
}
