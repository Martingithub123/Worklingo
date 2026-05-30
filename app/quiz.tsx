import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from 'react-native';

const SW = Dimensions.get('window').width;
const GRID_SIDE_PAD = 24 * 2; // content paddingHorizontal (Spacing.lg) × 2
const GRID_GAP = 10;
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Speech from 'expo-speech';
import images from '@/services/imageRegistry';
import { router, useLocalSearchParams } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useApp } from '@/context/AppContext';
import { dataService } from '@/services/dataService';
import { LEVELS } from '@/data/levels';
import { getSentenceTemplate, getFillBlankSentence } from '@/data/sentences';
import { QuizQuestion, QuizResult, LevelType, Language } from '@/types';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { ProgressBar } from '@/components/ProgressBar';
import { X, Volume2 } from 'lucide-react-native';
import { ThemeToggle } from '@/components/ThemeToggle';

const LANG_MAP: Record<string, string> = {
  en: 'en-US', es: 'es-ES', pt: 'pt-BR', fr: 'fr-FR', de: 'de-DE', it: 'it-IT',
  nl: 'nl-NL', zh: 'zh-CN', ja: 'ja-JP', ru: 'ru-RU',
};

const UI: Record<string, Record<string, string>> = {
  pressHold:  { en: 'Press & hold to see name', es: 'Mantén para ver el nombre', pt: 'Pressione para ver o nome', fr: 'Appuyez pour voir le nom', de: 'Halten zum Anzeigen', it: 'Tieni premuto per vedere', nl: 'Ingedrukt houden om te zien', zh: '长按查看名称', ja: '長押しで名前を表示', ru: 'Удерживай для просмотра' },
  typeWord:   { en: 'Type the word:', es: 'Escribe la palabra:', pt: 'Digite a palavra:', fr: 'Tapez le mot :', de: 'Wort eingeben:', it: 'Scrivi la parola:', nl: 'Typ het woord:', zh: '输入单词：', ja: '単語を入力：', ru: 'Напиши слово:' },
  typeAnswer: { en: 'Type your answer...', es: 'Escribe tu respuesta...', pt: 'Digite sua resposta...', fr: 'Tapez votre réponse...', de: 'Antwort eingeben...', it: 'Scrivi la tua risposta...', nl: 'Typ je antwoord...', zh: '输入你的答案...', ja: '答えを入力...', ru: 'Введи ответ...' },
  whatIsThis: { en: 'What is this?', es: '¿Qué es esto?', pt: 'O que é isso?', fr: "Qu'est-ce que c'est ?", de: 'Was ist das?', it: "Cos'è questo?", nl: 'Wat is dit?', zh: '这是什么？', ja: 'これは何ですか？', ru: 'Что это?' },
  check:      { en: 'Check ✓', es: 'Verificar ✓', pt: 'Verificar ✓', fr: 'Vérifier ✓', de: 'Prüfen ✓', it: 'Controlla ✓', nl: 'Controleer ✓', zh: '检查 ✓', ja: '確認 ✓', ru: 'Проверить ✓' },
  correct:    { en: '✓ Correct!', es: '✓ ¡Correcto!', pt: '✓ Correto!', fr: '✓ Correct !', de: '✓ Richtig!', it: '✓ Corretto!', nl: '✓ Correct!', zh: '✓ 正确！', ja: '✓ 正解！', ru: '✓ Верно!' },
  answer:     { en: '✗ Answer:', es: '✗ Respuesta:', pt: '✗ Resposta:', fr: '✗ Réponse :', de: '✗ Antwort:', it: '✗ Risposta:', nl: '✗ Antwoord:', zh: '✗ 答案：', ja: '✗ 答え：', ru: '✗ Ответ:' },
  tapListen:  { en: 'Tap to listen 🔊', es: 'Toca para escuchar 🔊', pt: 'Toque para ouvir 🔊', fr: 'Touchez pour écouter 🔊', de: 'Tippen zum Hören 🔊', it: 'Tocca per ascoltare 🔊', nl: 'Tik om te luisteren 🔊', zh: '点击收听 🔊', ja: 'タップして聴く 🔊', ru: 'Нажми для прослушивания 🔊' },
  tapReplay:  { en: 'Tap to replay 🔊', es: 'Toca para repetir 🔊', pt: 'Toque para repetir 🔊', fr: 'Touchez pour rejouer 🔊', de: 'Zum Wiederholen tippen 🔊', it: 'Tocca per riascoltare 🔊', nl: 'Tik om opnieuw te spelen 🔊', zh: '点击重播 🔊', ja: 'タップして再生 🔊', ru: 'Нажми для повтора 🔊' },
  listenThen: { en: 'Tap the speaker to hear the word, then select the correct image', es: 'Toca el altavoz y selecciona la imagen correcta', pt: 'Toque no alto-falante e selecione a imagem correta', fr: "Touchez le haut-parleur, puis sélectionnez l'image correcte", de: 'Lautsprecher antippen, dann richtiges Bild wählen', it: "Tocca l'altoparlante, poi seleziona l'immagine giusta", nl: 'Tik op de luidspreker en kies de juiste afbeelding', zh: '点击扬声器听单词，然后选择正确图片', ja: 'スピーカーをタップして正しい画像を選ぶ', ru: 'Нажми на динамик, затем выбери нужную картинку' },
};

function speak(word: string, language: string) {
  try { Speech.speak(word, { language: LANG_MAP[language] ?? 'en-US', rate: 0.85, pitch: 1.0 }); } catch (_) {}
}

type AnswerState = 'idle' | 'correct' | 'wrong';

function imgSrc(item: any): any {
  if (item?.localImage && images[item.localImage]) return images[item.localImage];
  if (item?.imageUrl) return { uri: item.imageUrl };
  return null;
}

// Maps each question type to the sentence-template level number used in sentences.ts
const TYPE_TO_SENTENCE_LEVEL: Partial<Record<LevelType, number>> = {
  sentence_to_image:  4,
  scenario:           5,
  action_sentence:    6,
  task_sentence:      7,
  sentence_fill_blank: 9,
  image_fill_blank:   10,
};

export default function QuizScreen() {
  const { language, colors } = useApp();
  const { jobId, sectorId, level: levelParam } = useLocalSearchParams<{
    jobId: string;
    sectorId: string;
    level: string;
  }>();

  const levelId = parseInt(levelParam ?? '1', 10);
  const levelConfig = LEVELS.find(l => l.id === levelId) ?? LEVELS[0];

  // Build 30-question quiz: all sector items cycle in random order,
  // every question uses the same type defined by the selected level.
  const [questions] = useState<QuizQuestion[]>(() => {
    const allItems = dataService.getItemsForSector(jobId, sectorId);
    return dataService.buildQuiz(allItems, language, levelConfig.type);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [optionStates, setOptionStates] = useState<Record<string, AnswerState>>({});
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState<QuizResult['answers']>([]);
  const [imageKey, setImageKey] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState('');
  const [typeState, setTypeState] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const currentQuestion = questions[currentIndex];
  const currentItem = currentQuestion?.item;

  const lang = language as Language;
  const itemName = currentItem?.translations[lang] ?? currentItem?.translations['en'] ?? '';
  // Each question carries its own type — drives which layout renders
  const questionType: LevelType = currentQuestion?.type ?? 'word_to_image';
  const sentenceLevel = TYPE_TO_SENTENCE_LEVEL[questionType] ?? 4;

  // Memoised per question — Math.random() inside must not re-run on every keystroke
  const sentence = useMemo(
    () => currentItem ? getSentenceTemplate(sentenceLevel, lang, itemName) : '',
    [currentIndex],
  );
  const fillSentence = useMemo(() => getFillBlankSentence(sentenceLevel, lang), [currentIndex]);


  useEffect(() => {
    // audio_to_image requires manual tap — never auto-speak
    if (!currentItem || questionType === 'audio_to_image') return;
    const isSentenceLevel = ['sentence_to_image', 'action_sentence', 'task_sentence', 'scenario'].includes(questionType);
    const textToSpeak = isSentenceLevel ? sentence : itemName;
    const timeout = setTimeout(() => speak(textToSpeak, language), 400);
    return () => {
      clearTimeout(timeout);
      try { Speech.stop(); } catch (_) {}
    };
  }, [currentIndex]);

  const advance = useCallback(
    (isCorrect: boolean, selected: string) => {
      setAnswered(true);
      const newResults = [
        ...results,
        { item: currentItem, selected, correct: isCorrect },
      ];

      setTimeout(() => {
        if (currentIndex + 1 >= questions.length) {
          const correct = newResults.filter(r => r.correct).length;
          const resultParams = {
            jobId: String(jobId ?? ''),
            sectorId: String(sectorId ?? ''),
            total: String(questions.length),
            correct: String(correct),
            incorrect: String(questions.length - correct),
            level: String(levelId),
            xp: String(isCorrect ? levelConfig.xpReward : 0),
          };
          AsyncStorage.getItem('isSubscribed').then(subscribed => {
            if (subscribed === 'true') {
              router.replace({ pathname: '/result', params: resultParams });
            } else {
              router.replace({ pathname: '/subscription' as any, params: { ...resultParams, fromQuiz: 'true' } });
            }
          });
        } else {
          setCurrentIndex(i => i + 1);
          setOptionStates({});
          setAnswered(false);
          setImageKey(k => k + 1);
          setTypedAnswer('');
          setTypeState('idle');
          setResults(newResults);
        }
      }, 1100);
    },
    [answered, currentItem, currentIndex, questions, results, levelId],
  );

  const handleMultipleChoice = useCallback(
    (selected: string) => {
      if (answered) return;
      const isCorrect = selected === currentQuestion.correctAnswer;
      const newStates: Record<string, AnswerState> = {};
      currentQuestion.options.forEach(opt => {
        if (opt === currentQuestion.correctAnswer) newStates[opt] = 'correct';
        else if (opt === selected && !isCorrect) newStates[opt] = 'wrong';
        else newStates[opt] = 'idle';
      });
      setOptionStates(newStates);
      advance(isCorrect, selected);
    },
    [answered, currentQuestion, advance],
  );

  const handleTypeSubmit = useCallback(() => {
    if (answered || !typedAnswer.trim()) return;
    const correct = currentItem.translations[language as Language] ?? currentItem.translations['en'];
    const isCorrect = typedAnswer.trim().toLowerCase() === correct.toLowerCase();
    setTypeState(isCorrect ? 'correct' : 'wrong');
    advance(isCorrect, typedAnswer.trim());
  }, [answered, typedAnswer, currentItem, language, advance]);

  if (questions.length === 0) {
    router.back();
    return null;
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[styles.closeBtn, { backgroundColor: colors.surface }]}
            activeOpacity={0.8}
          >
            <X size={18} color={colors.textSecondary} strokeWidth={2.5} />
          </TouchableOpacity>
          <View style={styles.progressContainer}>
            <ProgressBar current={currentIndex} total={questions.length} isDark={colors === Colors.dark} />
          </View>
          <ThemeToggle />
        </View>

        {/* Level badge — centered */}
        <View style={styles.levelBadgeRow}>
          <View style={[styles.levelPill, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Text style={[styles.levelPillText, { color: colors.text }]}>Level {levelId}</Text>
          </View>
        </View>

        <View key={currentIndex} style={styles.content}>
          {questionType === 'word_to_image' && (
            <WordToImageLayout
              word={itemName}
              question={currentQuestion}
              optionStates={optionStates}
              answered={answered}
              imageKey={imageKey}
              colors={colors}
              onAnswer={handleMultipleChoice}
              hint={levelConfig.hint[lang] ?? levelConfig.hint.en}
            />
          )}

          {questionType === 'word_to_image_visual' && (
            <WordToImageVisual
              word={itemName}
              question={currentQuestion}
              optionStates={optionStates}
              answered={answered}
              imageKey={imageKey}
              colors={colors}
              onAnswer={handleMultipleChoice}
            />
          )}

          {questionType === 'tap_reveal_type' && (
            <TapRevealType
              item={currentItem}
              typedAnswer={typedAnswer}
              setTypedAnswer={setTypedAnswer}
              typeState={typeState}
              answered={answered}
              onSubmit={handleTypeSubmit}
              colors={colors}
              imageKey={imageKey}
              lang={lang}
              ui={UI}
            />
          )}

          {(questionType === 'sentence_to_image' || questionType === 'action_sentence' || questionType === 'task_sentence' || questionType === 'scenario') && (
            <SentenceToImageLayout
              sentence={sentence}
              question={currentQuestion}
              optionStates={optionStates}
              answered={answered}
              imageKey={imageKey}
              colors={colors}
              levelColor={levelConfig.color}
              onAnswer={handleMultipleChoice}
            />
          )}

          {(questionType === 'image_fill_blank' || questionType === 'sentence_fill_blank') && (
            <FillBlankLayout
              item={currentItem}
              sentence={questionType === 'sentence_fill_blank' ? fillSentence : undefined}
              typedAnswer={typedAnswer}
              setTypedAnswer={setTypedAnswer}
              typeState={typeState}
              answered={answered}
              onSubmit={handleTypeSubmit}
              colors={colors}
              imageKey={imageKey}
              lang={lang}
              ui={UI}
            />
          )}

          {questionType === 'audio_to_image' && (
            <AudioToImageLayout
              word={itemName}
              question={currentQuestion}
              optionStates={optionStates}
              answered={answered}
              imageKey={imageKey}
              colors={colors}
              levelColor={levelConfig.color}
              onAnswer={handleMultipleChoice}
              language={language}
              lang={lang}
              ui={UI}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

function WordToImageLayout({ word, question, optionStates, answered, imageKey, colors, onAnswer, hint }: any) {
  return (
    <>
      <View style={[styles.wordCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
        <Text style={[styles.wordHint, { color: colors.textSecondary }]}>{hint}</Text>
        <Text style={[styles.wordBig, { color: colors.text }]}>{word}</Text>
      </View>
      <ImageGrid question={question} optionStates={optionStates} answered={answered} imageKey={imageKey} onAnswer={onAnswer} colors={colors} />
    </>
  );
}

function WordToImageVisual({ word, question, optionStates, answered, imageKey, onAnswer, colors }: any) {
  return (
    <>
      <View style={[styles.wordCardBig, { backgroundColor: Colors.primary + '18' }]}>
        <Text style={[styles.wordMega, { color: Colors.primary }]}>{word}</Text>
      </View>
      {/* 6 options need 3 columns so 2 rows fit on screen */}
      <ImageGrid question={question} optionStates={optionStates} answered={answered} imageKey={imageKey} onAnswer={onAnswer} cols={3} colors={colors} />
    </>
  );
}

function TapRevealType({ item, typedAnswer, setTypedAnswer, typeState, answered, onSubmit, colors, imageKey, lang, ui }: any) {
  const [pressing, setPressing] = useState(false);
  const borderColor = typeState === 'correct' ? '#4CAF50' : typeState === 'wrong' ? '#FF4B4B' : colors.cardBorder;

  return (
    <>
      <Pressable
        style={[styles.imageCard, { backgroundColor: '#FFFFFF', borderColor: colors.cardBorder }]}
        onPressIn={() => setPressing(true)}
        onPressOut={() => setPressing(false)}
      >
        <SafeImage src={imgSrc(item)} imageKey={imageKey} />
        {!pressing && (
          <View style={styles.tapOverlay}>
            <Text style={styles.tapOverlayText}>{ui.pressHold[lang] ?? ui.pressHold.en}</Text>
          </View>
        )}
        {pressing && (
          <View style={styles.imageOverlay}>
            <Text style={styles.revealedWord}>{item.translations[lang] ?? item.translations.en}</Text>
          </View>
        )}
      </Pressable>

      {!pressing && (
        <View style={styles.typeContainer}>
          <Text style={[styles.typeLabel, { color: colors.textSecondary }]}>{ui.typeWord[lang] ?? ui.typeWord.en}</Text>
          <TextInput
            style={[styles.textInput, { borderColor, color: colors.text, backgroundColor: colors.card }]}
            value={typedAnswer}
            onChangeText={setTypedAnswer}
            placeholder={ui.typeAnswer[lang] ?? ui.typeAnswer.en}
            placeholderTextColor={colors.textMuted}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!answered}
            onSubmitEditing={onSubmit}
            returnKeyType="done"
          />
          {!answered && (
            <TouchableOpacity style={[styles.submitBtn, { backgroundColor: Colors.primary }]} onPress={onSubmit}>
              <Text style={styles.submitBtnText}>{ui.check[lang] ?? ui.check.en}</Text>
            </TouchableOpacity>
          )}
          {answered && (
            <Text style={[styles.feedbackText, { color: typeState === 'correct' ? '#4CAF50' : '#FF4B4B' }]}>
              {typeState === 'correct' ? (ui.correct[lang] ?? ui.correct.en) : `${ui.answer[lang] ?? ui.answer.en} ${item.translations[lang] ?? item.translations.en}`}
            </Text>
          )}
        </View>
      )}
    </>
  );
}

function SentenceToImageLayout({ sentence, question, optionStates, answered, imageKey, colors, levelColor, onAnswer }: any) {
  return (
    <>
      <View style={[styles.sentenceCard, { backgroundColor: levelColor + '18', borderColor: levelColor + '44' }]}>
        <Text style={[styles.sentenceText, { color: colors.text }]}>{sentence}</Text>
      </View>
      <ImageGrid question={question} optionStates={optionStates} answered={answered} imageKey={imageKey} onAnswer={onAnswer} colors={colors} />
    </>
  );
}

function FillBlankLayout({ item, sentence, typedAnswer, setTypedAnswer, typeState, answered, onSubmit, colors, imageKey, lang, ui }: any) {
  const borderColor = typeState === 'correct' ? '#4CAF50' : typeState === 'wrong' ? '#FF4B4B' : colors.cardBorder;
  return (
    <>
      {!sentence ? (
        /* Level 10: image only */
        <View style={[styles.imageCard, { backgroundColor: '#FFFFFF', borderColor: colors.cardBorder }]}>
          <SafeImage src={imgSrc(item)} imageKey={imageKey} />
          <View style={styles.imageOverlay} />
          <View style={styles.imageBadge}>
            <Text style={styles.imageBadgeText}>{ui.whatIsThis[lang] ?? ui.whatIsThis.en}</Text>
          </View>
        </View>
      ) : (
        /* Level 9: sentence + image so user knows what word to write */
        <>
          <View style={[styles.sentenceCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Text style={[styles.sentenceText, { color: colors.text }]}>{sentence}</Text>
          </View>
          <View style={[styles.imageCard, { backgroundColor: '#FFFFFF', borderColor: colors.cardBorder }]}>
            <SafeImage src={imgSrc(item)} imageKey={imageKey} />
          </View>
        </>
      )}
      <View style={styles.typeContainer}>
        <TextInput
          style={[styles.textInput, { borderColor, color: colors.text, backgroundColor: colors.card }]}
          value={typedAnswer}
          onChangeText={setTypedAnswer}
          placeholder={ui.typeAnswer[lang] ?? ui.typeAnswer.en}
          placeholderTextColor={colors.textMuted}
          autoCapitalize="none"
          autoCorrect={false}
          editable={!answered}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
        />
        {!answered && (
          <TouchableOpacity style={[styles.submitBtn, { backgroundColor: Colors.primary }]} onPress={onSubmit}>
            <Text style={styles.submitBtnText}>{ui.check[lang] ?? ui.check.en}</Text>
          </TouchableOpacity>
        )}
        {answered && (
          <Text style={[styles.feedbackText, { color: typeState === 'correct' ? '#4CAF50' : '#FF4B4B' }]}>
            {typeState === 'correct' ? (ui.correct[lang] ?? ui.correct.en) : `${ui.answer[lang] ?? ui.answer.en} ${item.translations[lang] ?? item.translations.en}`}
          </Text>
        )}
      </View>
    </>
  );
}

function AudioToImageLayout({ word, question, optionStates, answered, imageKey, colors, levelColor, onAnswer, language, lang, ui }: any) {
  const [played, setPlayed] = useState(false);

  const handleListen = () => {
    setPlayed(true);
    speak(word, language);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.audioCard, { backgroundColor: levelColor + '18', borderColor: levelColor }]}
        onPress={handleListen}
        activeOpacity={0.8}
      >
        <Volume2 size={48} color={levelColor} strokeWidth={1.5} />
        <Text style={[styles.audioLabel, { color: colors.textSecondary }]}>
          {played ? (ui.tapReplay[lang] ?? ui.tapReplay.en) : (ui.tapListen[lang] ?? ui.tapListen.en)}
        </Text>
      </TouchableOpacity>
      {played && (
        <View style={{ flex: 1 }}>
          <ImageGrid question={question} optionStates={optionStates} answered={answered} imageKey={imageKey} onAnswer={onAnswer} colors={colors} />
        </View>
      )}
      {!played && (
        <View style={[styles.audioHintBox, { backgroundColor: colors.surface }]}>
          <Text style={[styles.audioHintBoxText, { color: colors.textSecondary }]}>
            {ui.listenThen[lang] ?? ui.listenThen.en}
          </Text>
        </View>
      )}
    </>
  );
}


// Full-size image for large single-image cards (tap_reveal, fill-blank).
// flex:1 on the wrapper fills whatever flex parent it sits in (imageCard is flex:1).
// flex:1 on the Image fills the wrapper. width/height undefined lets RN scale correctly.
// This avoids the absoluteFill + percentage-height ambiguity in nested flex trees.
function SafeImage({ src, imageKey }: { src: any; imageKey: number }) {
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => { setLoading(true); setError(false); }, [imageKey]);

  if (!src || error) {
    return (
      <View style={[{ flex: 1 }, styles.placeholderImg]}>
        <Text style={styles.placeholderIcon}>📷</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
      <Image
        key={imageKey}
        source={src}
        style={{ flex: 1, width: undefined, height: undefined }}
        resizeMode="contain"
        onLoad={() => setLoading(false)}
        onError={() => { setError(true); setLoading(false); }}
      />
      {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loadingOverlay]}>
          <ActivityIndicator size="small" color="#888" />
        </View>
      )}
    </View>
  );
}

// Square grid cell image with explicit pixel dimensions — avoids absoluteFill + flex conflicts.
function GridImage({ src, imageKey, idx, size }: { src: any; imageKey: number; idx: number; size: number }) {
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(false);

  useEffect(() => { setLoading(true); setError(false); }, [imageKey]);

  const cellStyle = { width: size, height: size, backgroundColor: '#FFFFFF' } as const;

  if (!src || error) {
    return (
      <View style={[cellStyle, styles.placeholderImg]}>
        <Text style={styles.placeholderIcon}>?</Text>
      </View>
    );
  }

  return (
    <View style={cellStyle}>
      <Image
        key={`${imageKey}-${idx}`}
        source={src}
        // Explicit pixel dimensions eliminate the absoluteFill + overflow:hidden zoom bug
        style={{ width: size, height: size }}
        resizeMode="contain"
        onLoad={() => setLoading(false)}
        onError={() => { setError(true); setLoading(false); }}
      />
      {loading && (
        <View style={[StyleSheet.absoluteFill, styles.loadingOverlay]}>
          <ActivityIndicator size="small" color="#888" />
        </View>
      )}
    </View>
  );
}

function ImageGrid({ question, optionStates, answered, onAnswer, cols = 2, imageKey = 0, colors }: any) {
  // Compute explicit pixel size so aspectRatio percentage-width bugs don't affect layout
  const itemSize = Math.floor((SW - GRID_SIDE_PAD - GRID_GAP * (cols - 1)) / cols);

  const stateBorder = (opt: string): { borderColor: string; borderWidth: number } => {
    const s = optionStates[opt];
    if (s === 'correct') return { borderColor: '#4CAF50', borderWidth: 3 };
    if (s === 'wrong')   return { borderColor: '#FF4B4B', borderWidth: 3 };
    return { borderColor: colors?.cardBorder ?? '#3A3A3A', borderWidth: 1.5 };
  };

  return (
    <View style={styles.imageGrid}>
      {question.options.map((opt: string, idx: number) => {
        const item = question.optionItems?.[idx] ?? question.item;
        return (
          <TouchableOpacity
            key={idx}
            style={[
              styles.imageGridItem,
              { width: itemSize, height: itemSize, ...stateBorder(opt) },
            ]}
            onPress={() => onAnswer(opt)}
            disabled={answered}
            activeOpacity={0.8}
          >
            <GridImage src={imgSrc(item)} imageKey={imageKey} idx={idx} size={itemSize} />
            {optionStates[opt] === 'correct' && <View style={styles.checkOverlay}><Text style={styles.checkIcon}>✓</Text></View>}
            {optionStates[opt] === 'wrong' && <View style={styles.checkOverlay}><Text style={styles.checkIcon}>✗</Text></View>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
    gap: 12,
  },
  closeBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: { flex: 1 },
  levelBadgeRow: {
    paddingHorizontal: Spacing.lg,
    marginBottom: 8,
    alignItems: 'center',
  },
  levelPill: {
    borderRadius: Radius.full,
    borderWidth: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  levelPillText: { fontSize: FontSize.sm, fontFamily: 'Poppins-Bold', letterSpacing: 0.5 },
  content: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.lg,
    gap: 14,
  },
  wordCard: {
    borderRadius: Radius.xxl,
    borderWidth: 1.5,
    padding: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  wordHint: { fontSize: FontSize.sm, fontFamily: 'Poppins-Medium' },
  wordBig: { fontSize: 36, fontFamily: 'Poppins-ExtraBold', letterSpacing: -1 },
  wordCardBig: {
    borderRadius: Radius.xxl,
    padding: Spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wordMega: { fontSize: 44, fontFamily: 'Poppins-ExtraBold', letterSpacing: -2 },
  imageCard: {
    flex: 1,
    borderRadius: Radius.xxl,
    borderWidth: 1,
    overflow: 'hidden',
    maxHeight: 300,
    minHeight: 200,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  revealedWord: { color: '#FFFFFF', fontSize: 22, fontFamily: 'Poppins-Bold' },
  tapOverlay: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tapOverlayText: { color: '#FFFFFF', fontSize: 16, fontFamily: 'Poppins-SemiBold' },
  imageBadge: {
    position: 'absolute',
    bottom: 14,
    left: 14,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: Radius.full,
    paddingHorizontal: 12,
    paddingVertical: 5,
  },
  imageBadgeText: { color: 'rgba(255,255,255,0.8)', fontSize: FontSize.sm, fontFamily: 'Poppins-Medium' },
  sentenceCard: {
    borderRadius: Radius.xxl,
    borderWidth: 1.5,
    padding: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sentenceText: {
    fontSize: FontSize.lg,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    lineHeight: 28,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    flex: 1,
    alignContent: 'flex-start',
  },
  imageGridItem: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
    position: 'relative',
  },
  checkOverlay: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIcon: { color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins-Bold' },
  typeContainer: { gap: 10 },
  typeLabel: { fontSize: FontSize.sm, fontFamily: 'Poppins-Medium' },
  textInput: {
    borderWidth: 2,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.lg,
    paddingVertical: 14,
    fontSize: FontSize.lg,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  submitBtn: {
    borderRadius: Radius.full,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#1A1A1A',
    fontSize: FontSize.md,
    fontFamily: 'Poppins-Bold',
    letterSpacing: 0.5,
  },
  feedbackText: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginTop: 4,
  },
  audioCard: {
    borderRadius: Radius.xxl,
    borderWidth: 2,
    padding: Spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  audioLabel: { fontSize: FontSize.xl, fontFamily: 'Poppins-SemiBold' },
  audioHintBox: {
    borderRadius: Radius.xl,
    padding: Spacing.lg,
    alignItems: 'center',
  },
  audioHintBoxText: {
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 20,
  },
  placeholderImg: {
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderIcon: {
    fontSize: 22,
    opacity: 0.4,
  },
  loadingOverlay: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
