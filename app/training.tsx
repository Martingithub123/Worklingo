import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { Asset } from 'expo-asset';
import { useApp } from '@/context/AppContext';
import { dataService } from '@/services/dataService';
import { LEVELS } from '@/data/levels';
import { Colors, FontSize } from '@/constants/theme';
import { ChevronLeft } from 'lucide-react-native';
import { ThemeToggle } from '@/components/ThemeToggle';
import BeeMascot from '@/components/BeeMascot';
import images from '@/services/imageRegistry';
import { VocabularyItem } from '@/types';

const MIN_DURATION = 3000; // always show at least 3 seconds

const UI_STRINGS: Record<string, { titleLoading: string; titleReady: string; barLoading: string; barReady: string }> = {
  en: { titleLoading: 'Preparing your training', titleReady: 'Ready to go!',        barLoading: 'Loading images...',          barReady: '✓ Ready!' },
  es: { titleLoading: 'Preparando tu entrenamiento', titleReady: '¡Listo para empezar!', barLoading: 'Cargando imágenes...',    barReady: '✓ ¡Listo!' },
  pt: { titleLoading: 'Preparando seu treino',    titleReady: 'Pronto para começar!', barLoading: 'Carregando imagens...',     barReady: '✓ Pronto!' },
  fr: { titleLoading: 'Préparation de l\'entraînement', titleReady: 'C\'est parti !', barLoading: 'Chargement des images...', barReady: '✓ Prêt !' },
  de: { titleLoading: 'Training wird vorbereitet', titleReady: 'Bereit loszulegen!', barLoading: 'Bilder werden geladen...',   barReady: '✓ Bereit!' },
  it: { titleLoading: 'Preparazione in corso',    titleReady: 'Pronti a partire!',   barLoading: 'Caricamento immagini...',   barReady: '✓ Pronto!' },
  nl: { titleLoading: 'Training voorbereiden',    titleReady: 'Klaar om te gaan!',   barLoading: 'Afbeeldingen laden...',     barReady: '✓ Klaar!' },
  zh: { titleLoading: '正在准备训练',              titleReady: '准备好了！',            barLoading: '加载图片中...',              barReady: '✓ 准备完毕！' },
  ja: { titleLoading: 'トレーニングを準備中',       titleReady: '準備完了！',            barLoading: '画像を読み込み中...',        barReady: '✓ 準備完了！' },
  ru: { titleLoading: 'Подготовка тренировки',    titleReady: 'Готово к старту!',    barLoading: 'Загрузка изображений...',   barReady: '✓ Готово!' },
};

const MESSAGES: Record<string, string[]> = {
  en: ['Get ready for your training! 💪', 'Focus and do your best! 🎯', "You're going to crush it! 🔥", 'Loading your vocabulary... 📚', 'Almost ready... 🚀'],
  es: ['¡Prepárate para tu entrenamiento! 💪', '¡Concéntrate y da lo mejor! 🎯', '¡Lo vas a romper! 🔥', 'Cargando tu vocabulario... 📚', 'Casi listo... 🚀'],
  pt: ['Prepare-se para o seu treino! 💪', 'Foque e dê o seu melhor! 🎯', 'Você vai arrasar! 🔥', 'Carregando seu vocabulário... 📚', 'Quase pronto... 🚀'],
  fr: ['Prépare-toi pour ton entraînement ! 💪', 'Concentre-toi et fais de ton mieux ! 🎯', 'Tu vas tout déchirer ! 🔥', 'Chargement du vocabulaire... 📚', 'Presque prêt... 🚀'],
  de: ['Mach dich bereit für dein Training! 💪', 'Konzentriere dich und gib alles! 🎯', 'Du wirst es rocken! 🔥', 'Vokabular wird geladen... 📚', 'Fast fertig... 🚀'],
  it: ['Preparati per il tuo allenamento! 💪', 'Concentrati e fai del tuo meglio! 🎯', 'Spaccerai tutto! 🔥', 'Caricamento vocabolario... 📚', 'Quasi pronto... 🚀'],
  nl: ['Maak je klaar voor je training! 💪', 'Focus en doe je best! 🎯', 'Je gaat het geweldig doen! 🔥', 'Woordenschat laden... 📚', 'Bijna klaar... 🚀'],
  zh: ['准备好训练了吗！💪', '专注并全力以赴！🎯', '你一定能做到！🔥', '正在加载词汇... 📚', '马上就好... 🚀'],
  ja: ['トレーニングの準備をしよう！💪', '集中して全力を尽くそう！🎯', 'きっとうまくいくよ！🔥', '語彙を読み込み中... 📚', 'もうすぐ準備完了... 🚀'],
  ru: ['Готовься к тренировке! 💪', 'Сосредоточься и старайся! 🎯', 'У тебя всё получится! 🔥', 'Загрузка словарного запаса... 📚', 'Почти готово... 🚀'],
};

function localSrc(item: VocabularyItem): number | null {
  if (item?.localImage && images[item.localImage]) return images[item.localImage] as number;
  return null;
}

export default function TrainingScreen() {
  const { language, colors } = useApp();
  const { jobId, sectorId, level } = useLocalSearchParams<{ jobId: string; sectorId: string; level: string }>();

  const levelId = parseInt(level ?? '1', 10);
  const levelConfig = LEVELS.find(l => l.id === levelId) ?? LEVELS[0];
  const sector = dataService.getSectorById(jobId, sectorId);

  const ui = UI_STRINGS[language] ?? UI_STRINGS['en'];

  const [ready, setReady] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);

  const progressAnim = useRef(new Animated.Value(0)).current;
  const msgOpacity   = useRef(new Animated.Value(1)).current;
  const btnOpacity   = useRef(new Animated.Value(0)).current;
  const btnScale     = useRef(new Animated.Value(0.85)).current;
  const glowAnim     = useRef(new Animated.Value(0)).current;
  const beeOp        = useRef(new Animated.Value(0)).current;
  const beeSc        = useRef(new Animated.Value(0.7)).current;
  const currentProgress = useRef(0);

  const markReady = () => {
    // Animate bar to 100% then show button
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start(() => {
      setReady(true);
      Animated.parallel([
        Animated.spring(btnScale, { toValue: 1, useNativeDriver: true, speed: 8, bounciness: 12 }),
        Animated.timing(btnOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      ]).start(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(glowAnim, { toValue: 1, duration: 900, useNativeDriver: false }),
            Animated.timing(glowAnim, { toValue: 0, duration: 1100, useNativeDriver: false }),
          ])
        ).start();
      });
    });
  };

  useEffect(() => {
    // Bee entrance
    Animated.parallel([
      Animated.timing(beeOp, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(beeSc, { toValue: 1, useNativeDriver: true, speed: 6, bounciness: 14 }),
    ]).start();

    // Cycle messages
    const interval = setInterval(() => {
      Animated.timing(msgOpacity, { toValue: 0, duration: 300, useNativeDriver: true }).start(() => {
        setMsgIndex(i => (i + 1) % (MESSAGES[language] ?? MESSAGES['en']).length);
        Animated.timing(msgOpacity, { toValue: 1, duration: 400, useNativeDriver: true }).start();
      });
    }, 2200);

    // Preload all sector images + enforce minimum display time
    const allItems = dataService.getItemsForSector(jobId, sectorId);
    const srcs = allItems.map(localSrc).filter((s): s is number => s !== null);

    let imagesLoaded = false;
    let minTimePassed = false;

    const tryFinish = () => {
      if (imagesLoaded && minTimePassed) markReady();
    };

    // Minimum display timer
    const minTimer = setTimeout(() => {
      minTimePassed = true;
      tryFinish();
    }, MIN_DURATION);

    if (srcs.length === 0) {
      imagesLoaded = true;
      tryFinish();
    } else {
      let done = 0;
      const total = srcs.length;

      srcs.forEach(s => {
        Asset.fromModule(s).downloadAsync()
          .catch(() => {})
          .finally(() => {
            done++;
            const pct = done / total;
            // Animate bar to current real progress (capped at 0.95 until fully done)
            const target = done < total ? Math.min(pct * 0.95, 0.94) : 0.95;
            Animated.timing(progressAnim, {
              toValue: target,
              duration: 300,
              useNativeDriver: false,
            }).start();
            currentProgress.current = target;

            if (done >= total) {
              imagesLoaded = true;
              tryFinish();
            }
          });
      });
    }

    return () => {
      clearInterval(interval);
      clearTimeout(minTimer);
    };
  }, []);

  const handleStart = () => {
    router.replace({ pathname: '/quiz', params: { jobId, sectorId, level: levelId } });
  };

  if (!sector) return null;

  const itemCount = dataService.getItemsForSector(jobId, sectorId).length;
  const barWidth = progressAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] });

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <TouchableOpacity onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.surface }]} activeOpacity={0.8}>
        <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
      </TouchableOpacity>
      <View style={styles.themeBtn}>
        <ThemeToggle />
      </View>

      <View style={styles.center}>
        <Animated.View style={{ opacity: beeOp, transform: [{ scale: beeSc }] }}>
          <BeeMascot size={120} />
        </Animated.View>

        <Text style={[styles.title, { color: colors.text }]}>
          {ready ? ui.titleReady : ui.titleLoading}
        </Text>

        <Animated.Text style={[styles.message, { color: colors.textSecondary, opacity: msgOpacity }]}>
          {(MESSAGES[language] ?? MESSAGES['en'])[msgIndex]}
        </Animated.Text>

        <View style={styles.pills}>
          <View style={[styles.pill, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Text style={styles.pillEmoji}>{sector.icon}</Text>
            <Text style={[styles.pillText, { color: colors.text }]}>{sector.name[language] ?? sector.name.en}</Text>
          </View>
          <View style={[styles.pill, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Text style={styles.pillEmoji}>{levelConfig.emoji}</Text>
            <Text style={[styles.pillText, { color: colors.text }]}>Level {levelId}</Text>
          </View>
          <View style={[styles.pill, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Text style={styles.pillEmoji}>📝</Text>
            <Text style={[styles.pillText, { color: colors.text }]}>{itemCount > 0 ? 30 : 0} questions</Text>
          </View>
        </View>

        <View style={styles.barWrapper}>
          <View style={[styles.barBg, { backgroundColor: colors.surface }]}>
            <Animated.View style={[styles.barFill, { width: barWidth }]} />
          </View>
          <Text style={[styles.barLabel, { color: ready ? '#1E7214' : colors.textSecondary }]}>
            {ready ? ui.barReady : ui.barLoading}
          </Text>
        </View>

        <Animated.View style={[styles.btnWrapper, { opacity: btnOpacity, transform: [{ scale: btnScale }] }]}>
          <Animated.View style={[
            styles.glowWrapper,
            {
              shadowOpacity: glowAnim.interpolate({ inputRange: [0, 1], outputRange: [0.35, 0.85] }),
              shadowRadius:  glowAnim.interpolate({ inputRange: [0, 1], outputRange: [14, 32] }),
            },
          ]}>
            <TouchableOpacity style={styles.startBtn} onPress={handleStart} activeOpacity={0.85} disabled={!ready}>
              <Text style={styles.startBtnText}>START TRAINING</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  backBtn: {
    position: 'absolute', top: 56, left: 20, zIndex: 10,
    width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center',
  },
  themeBtn: { position: 'absolute', top: 56, right: 20, zIndex: 10 },
  center: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
    paddingHorizontal: 28, gap: 20,
  },
  title: { fontSize: 26, fontFamily: 'Poppins-ExtraBold', letterSpacing: -0.5, textAlign: 'center' },
  message: { fontSize: FontSize.sm, fontFamily: 'Poppins-Medium', textAlign: 'center', minHeight: 22 },
  pills: { flexDirection: 'row', gap: 8, flexWrap: 'wrap', justifyContent: 'center' },
  pill: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    borderRadius: 99, borderWidth: 1.5, paddingHorizontal: 14, paddingVertical: 8,
  },
  pillEmoji: { fontSize: 16 },
  pillText: { fontSize: FontSize.sm, fontFamily: 'Poppins-SemiBold' },
  barWrapper: { width: '100%', gap: 8, alignItems: 'center' },
  barBg: { width: '100%', height: 10, borderRadius: 99, overflow: 'hidden' },
  barFill: { height: '100%', borderRadius: 99, backgroundColor: '#1E7214' },
  barLabel: { fontSize: 12, fontFamily: 'Poppins-Medium' },
  btnWrapper: { width: '100%', marginTop: 8 },
  glowWrapper: {
    borderRadius: 99,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 0 },
    elevation: 10,
  },
  startBtn: {
    backgroundColor: Colors.primary,
    borderRadius: 99, paddingVertical: 18, alignItems: 'center',
  },
  startBtnText: { fontSize: 16, fontFamily: 'Poppins-Bold', color: '#FFFFFF', letterSpacing: 1.2 },
});
