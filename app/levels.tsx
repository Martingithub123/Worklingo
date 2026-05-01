import React, { useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity,
  Modal, Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { dataService } from '@/services/dataService';
import { LEVELS } from '@/data/levels';
import { FontSize } from '@/constants/theme';
import { ChevronLeft, ChevronRight, X } from 'lucide-react-native';
import { ThemeToggle } from '@/components/ThemeToggle';

const POLITENESS_TIPS = [
  {
    emoji: '💬',
    phrase: 'Please',
    translation: { en: 'Please', pt: 'Por favor', es: 'Por favor', fr: 'S\'il vous plaît', de: 'Bitte', it: 'Per favore', nl: 'Alsjeblieft', zh: '请', ja: 'お願いします', ru: 'Пожалуйста' },
    example: { en: 'Can I have a coffee, please?', pt: 'Posso tomar um café, por favor?', es: '¿Me puede traer un café, por favor?', fr: 'Puis-je avoir un café, s\'il vous plaît ?', de: 'Kann ich bitte einen Kaffee haben?', it: 'Posso avere un caffè, per favore?', nl: 'Mag ik een koffie, alsjeblieft?', zh: '我可以要一杯咖啡吗？', ja: 'コーヒーをいただけますか？', ru: 'Можно мне кофе, пожалуйста?' },
  },
  {
    emoji: '🙏',
    phrase: 'Thank you',
    translation: { en: 'Thank you', pt: 'Obrigado(a)', es: 'Gracias', fr: 'Merci', de: 'Danke', it: 'Grazie', nl: 'Dank je', zh: '谢谢', ja: 'ありがとう', ru: 'Спасибо' },
    example: { en: 'Thank you for your help.', pt: 'Obrigado(a) pela sua ajuda.', es: 'Gracias por tu ayuda.', fr: 'Merci pour votre aide.', de: 'Danke für Ihre Hilfe.', it: 'Grazie per il tuo aiuto.', nl: 'Dank je voor je hulp.', zh: '谢谢你的帮助。', ja: '助けてくれてありがとう。', ru: 'Спасибо за вашу помощь.' },
  },
  {
    emoji: '🚶',
    phrase: 'Excuse me',
    translation: { en: 'Excuse me', pt: 'Com licença', es: 'Disculpe', fr: 'Excusez-moi', de: 'Entschuldigung', it: 'Mi scusi', nl: 'Pardon', zh: '打扰一下', ja: 'すみません', ru: 'Извините' },
    example: { en: 'Excuse me, where is the bathroom?', pt: 'Com licença, onde fica o banheiro?', es: 'Disculpe, ¿dónde está el baño?', fr: 'Excusez-moi, où sont les toilettes ?', de: 'Entschuldigung, wo ist die Toilette?', it: 'Mi scusi, dov\'è il bagno?', nl: 'Pardon, waar is het toilet?', zh: '打扰一下，洗手间在哪里？', ja: 'すみません、トイレはどこですか？', ru: 'Извините, где туалет?' },
  },
  {
    emoji: '😔',
    phrase: 'Sorry',
    translation: { en: 'Sorry', pt: 'Desculpa', es: 'Lo siento', fr: 'Désolé(e)', de: 'Entschuldigung', it: 'Mi dispiace', nl: 'Sorry', zh: '对不起', ja: 'ごめんなさい', ru: 'Извините' },
    example: { en: "Sorry, I'm late.", pt: 'Desculpa, estou atrasado(a).', es: 'Lo siento, llego tarde.', fr: 'Désolé(e), je suis en retard.', de: 'Entschuldigung, ich komme zu spät.', it: 'Mi dispiace, sono in ritardo.', nl: 'Sorry, ik ben laat.', zh: '对不起，我迟到了。', ja: 'ごめんなさい、遅刻しました。', ru: 'Извините, я опоздал(а).' },
  },
  {
    emoji: '🤝',
    phrase: 'Could you…?',
    translation: { en: 'Could you…?', pt: 'Poderia…?', es: '¿Podría…?', fr: 'Pourriez-vous…?', de: 'Könnten Sie…?', it: 'Potrebbe…?', nl: 'Kunt u…?', zh: '你能…吗？', ja: 'していただけますか？', ru: 'Не могли бы вы…?' },
    example: { en: 'Could you help me?', pt: 'Poderia me ajudar?', es: '¿Podría ayudarme?', fr: 'Pourriez-vous m\'aider ?', de: 'Könnten Sie mir helfen?', it: 'Potrebbe aiutarmi?', nl: 'Kunt u mij helpen?', zh: '你能帮我吗？', ja: '助けていただけますか？', ru: 'Не могли бы вы помочь мне?' },
  },
  {
    emoji: '🙋',
    phrase: 'Can I have…?',
    translation: { en: 'Can I have…?', pt: 'Posso ter…?', es: '¿Puedo tener…?', fr: 'Puis-je avoir…?', de: 'Kann ich … haben?', it: 'Posso avere…?', nl: 'Mag ik … hebben?', zh: '我可以要…吗？', ja: '…をもらえますか？', ru: 'Можно мне…?' },
    example: { en: 'Can I have the menu, please?', pt: 'Posso ver o cardápio, por favor?', es: '¿Me puede dar el menú, por favor?', fr: 'Puis-je avoir le menu, s\'il vous plaît ?', de: 'Kann ich bitte die Speisekarte haben?', it: 'Posso avere il menù, per favore?', nl: 'Mag ik het menu, alsjeblieft?', zh: '我可以要菜单吗？', ja: 'メニューをいただけますか？', ru: 'Можно мне меню, пожалуйста?' },
  },
  {
    emoji: '🚪',
    phrase: 'May I…?',
    translation: { en: 'May I…?', pt: 'Posso…?', es: '¿Puedo…?', fr: 'Puis-je…?', de: 'Darf ich…?', it: 'Posso…?', nl: 'Mag ik…?', zh: '我可以…吗？', ja: '…してもいいですか？', ru: 'Можно мне…?' },
    example: { en: 'May I come in?', pt: 'Posso entrar?', es: '¿Puedo entrar?', fr: 'Puis-je entrer ?', de: 'Darf ich hereinkommen?', it: 'Posso entrare?', nl: 'Mag ik binnenkomen?', zh: '我可以进来吗？', ja: '入ってもいいですか？', ru: 'Можно войти?' },
  },
  {
    emoji: '🌸',
    phrase: 'Would you mind…?',
    translation: { en: 'Would you mind…?', pt: 'Você se importaria…?', es: '¿Le importaría…?', fr: 'Cela vous dérangerait-il…?', de: 'Würde es Ihnen etwas ausmachen…?', it: 'Le dispiacerebbe…?', nl: 'Zou u het erg vinden…?', zh: '你介意…吗？', ja: '…していただけますか？', ru: 'Вы не против…?' },
    example: { en: 'Would you mind opening the window?', pt: 'Você se importaria de abrir a janela?', es: '¿Le importaría abrir la ventana?', fr: 'Cela vous dérangerait-il d\'ouvrir la fenêtre ?', de: 'Würden Sie das Fenster öffnen?', it: 'Le dispiacerebbe aprire la finestra?', nl: 'Zou u het raam willen openen?', zh: '你介意开一下窗吗？', ja: '窓を開けていただけますか？', ru: 'Вы не против открыть окно?' },
  },
  {
    emoji: '☕',
    phrase: "I'd like…",
    translation: { en: "I'd like…", pt: 'Eu gostaria…', es: 'Me gustaría…', fr: 'Je voudrais…', de: 'Ich hätte gern…', it: 'Vorrei…', nl: 'Ik zou graag…', zh: '我想要…', ja: '…がほしいのですが', ru: 'Я бы хотел(а)…' },
    example: { en: "I'd like a coffee, please.", pt: 'Eu gostaria de um café, por favor.', es: 'Me gustaría un café, por favor.', fr: 'Je voudrais un café, s\'il vous plaît.', de: 'Ich hätte gern einen Kaffee, bitte.', it: 'Vorrei un caffè, per favore.', nl: 'Ik zou graag een koffie willen, alsjeblieft.', zh: '我想要一杯咖啡，请。', ja: 'コーヒーをお願いします。', ru: 'Я бы хотел(а) кофе, пожалуйста.' },
  },
  {
    emoji: '💛',
    phrase: 'I appreciate it',
    translation: { en: 'I appreciate it', pt: 'Eu agradeço', es: 'Te lo agradezco', fr: "Je l'apprécie", de: 'Ich schätze das', it: 'Lo apprezzo', nl: 'Ik waardeer het', zh: '我很感激', ja: '感謝します', ru: 'Я ценю это' },
    example: { en: 'I really appreciate your help.', pt: 'Eu realmente aprecio a sua ajuda.', es: 'Realmente aprecio tu ayuda.', fr: 'J\'apprécie vraiment votre aide.', de: 'Ich schätze Ihre Hilfe wirklich.', it: 'Apprezzo davvero il tuo aiuto.', nl: 'Ik waardeer je hulp echt.', zh: '我真的很感激你的帮助。', ja: '本当に助かります。ありがとうございます。', ru: 'Я очень ценю вашу помощь.' },
  },
];

const TIP_LABELS: Record<string, Record<string, string>> = {
  title:   { en: 'Magic Words ✨', pt: 'Palavras Mágicas ✨', es: 'Palabras Mágicas ✨', fr: 'Mots Magiques ✨', de: 'Zauberwörter ✨', it: 'Parole Magiche ✨', nl: 'Toverwoorden ✨', zh: '魔法词汇 ✨', ja: '魔法の言葉 ✨', ru: 'Волшебные слова ✨' },
  subtitle:{ en: 'Say these on your first day and everyone will love you!', pt: 'Diga estas palavras no seu primeiro dia e todos vão te amar!', es: '¡Di estas palabras tu primer día y todos te amarán!', fr: 'Dites-les le premier jour et tout le monde vous aimera!', de: 'Sag diese am ersten Tag und alle werden dich mögen!', it: 'Dille il primo giorno e tutti ti ameranno!', nl: 'Zeg dit op je eerste dag en iedereen zal je mogen!', zh: '第一天说这些，所有人都会喜欢你！', ja: '初日に言えば、みんなに好かれます！', ru: 'Скажи это в первый день, и все тебя полюбят!' },
  example: { en: 'Example', pt: 'Exemplo', es: 'Ejemplo', fr: 'Exemple', de: 'Beispiel', it: 'Esempio', nl: 'Voorbeeld', zh: '例句', ja: '例文', ru: 'Пример' },
  tip:     { en: '💡 Pro tip: Please + Thank you = instant respect everywhere!', pt: '💡 Dica: Por favor + Obrigado = respeito imediato em qualquer lugar!', es: '💡 Consejo: Por favor + Gracias = respeto instantáneo en todas partes!', fr: '💡 Astuce: S\'il vous plaît + Merci = respect instantané partout!', de: '💡 Tipp: Bitte + Danke = sofortiger Respekt überall!', it: '💡 Consiglio: Per favore + Grazie = rispetto immediato ovunque!', nl: '💡 Tip: Alsjeblieft + Dank je = direct respect overal!', zh: '💡 小技巧：请 + 谢谢 = 在任何地方立即赢得尊重！', ja: '💡 コツ：お願いします + ありがとう = どこでも即座に尊敬されます！', ru: '💡 Совет: Пожалуйста + Спасибо = мгновенное уважение везде!' },
  close:      { en: 'Got it!', pt: 'Entendi!', es: '¡Entendido!', fr: 'Compris!', de: 'Verstanden!', it: 'Capito!', nl: 'Begrepen!', zh: '明白了！', ja: 'わかりました！', ru: 'Понял(а)!' },
  bannerSub:  { en: '10 polite phrases for your first day →', pt: '10 frases educadas para o seu primeiro dia →', es: '10 frases corteses para tu primer día →', fr: '10 expressions polies pour votre premier jour →', de: '10 höfliche Ausdrücke für Ihren ersten Tag →', it: '10 frasi gentili per il tuo primo giorno →', nl: '10 beleefde zinnen voor je eerste dag →', zh: '10个礼貌用语，助你第一天顺利 →', ja: '初日のための10の丁寧な表現 →', ru: '10 вежливых фраз для вашего первого дня →' },
  chooseLevel:{ en: 'Choose Level', pt: 'Escolha o Nível', es: 'Elige el Nivel', fr: 'Choisir le Niveau', de: 'Level wählen', it: 'Scegli il Livello', nl: 'Kies Niveau', zh: '选择关卡', ja: 'レベルを選ぶ', ru: 'Выберите уровень' },
  tenLevels:  { en: '10 Levels', pt: '10 Níveis', es: '10 Niveles', fr: '10 Niveaux', de: '10 Level', it: '10 Livelli', nl: '10 Niveaus', zh: '10个关卡', ja: '10レベル', ru: '10 уровней' },
  levelHint:  { en: 'Start from Level 1 and work your way up', pt: 'Comece pelo Nível 1 e vá subindo', es: 'Empieza desde el Nivel 1 y ve subiendo', fr: 'Commencez au Niveau 1 et progressez', de: 'Beginne mit Level 1 und arbeite dich hoch', it: 'Inizia dal Livello 1 e vai avanti', nl: 'Begin bij Niveau 1 en werk omhoog', zh: '从第1关开始，逐步提升', ja: 'レベル1から始めて上を目指そう', ru: 'Начните с уровня 1 и продвигайтесь вперёд' },
};

function PolitenessModal({ visible, onClose, language }: { visible: boolean; onClose: () => void; language: string }) {
  const lang = (language as keyof typeof TIP_LABELS.title) in TIP_LABELS.title ? language : 'en';

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet" onRequestClose={onClose}>
      <View style={modal.container}>
        {/* Handle bar */}
        <View style={modal.handle} />

        {/* Close button */}
        <TouchableOpacity style={modal.closeBtn} onPress={onClose} activeOpacity={0.7}>
          <X size={20} color="#888" strokeWidth={2.5} />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={modal.scroll} showsVerticalScrollIndicator={false}>
          <Text style={modal.title}>{TIP_LABELS.title[lang] ?? TIP_LABELS.title.en}</Text>
          <Text style={modal.subtitle}>{TIP_LABELS.subtitle[lang] ?? TIP_LABELS.subtitle.en}</Text>

          {POLITENESS_TIPS.map((tip, i) => (
            <View key={i} style={modal.card}>
              <View style={modal.cardHeader}>
                <Text style={modal.cardEmoji}>{tip.emoji}</Text>
                <View style={modal.cardHeaderText}>
                  <Text style={modal.phrase}>
                    {tip.translation[lang as keyof typeof tip.translation] ?? tip.phrase}
                  </Text>
                  {lang !== 'en' && (
                    <Text style={modal.translation}>→ {tip.phrase}</Text>
                  )}
                </View>
              </View>
              <View style={modal.exampleRow}>
                <Text style={modal.exampleLabel}>{TIP_LABELS.example[lang] ?? 'Example'}:</Text>
                <Text style={modal.exampleText}>"{tip.example[lang as keyof typeof tip.example] ?? tip.example.en}"</Text>
              </View>
            </View>
          ))}

          <View style={modal.proTip}>
            <Text style={modal.proTipText}>{TIP_LABELS.tip[lang] ?? TIP_LABELS.tip.en}</Text>
          </View>

          <TouchableOpacity style={modal.gotItBtn} onPress={onClose} activeOpacity={0.85}>
            <Text style={modal.gotItText}>{TIP_LABELS.close[lang] ?? 'Got it!'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default function LevelsScreen() {
  const { language, colors } = useApp();
  const { jobId, sectorId } = useLocalSearchParams<{ jobId: string; sectorId: string }>();
  const [tipsVisible, setTipsVisible] = useState(false);

  const sector = dataService.getSectorById(jobId, sectorId);

  const handleSelectLevel = (levelId: number) => {
    router.push({ pathname: '/training' as any, params: { jobId, sectorId, level: levelId } });
  };

  if (!sector) return null;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.surface }]} activeOpacity={0.8}>
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerSub, { color: colors.textSecondary }]}>{sector.icon} {sector.name[language]}</Text>
          <Text style={[styles.headerTitle, { color: colors.text }]}>{TIP_LABELS.chooseLevel[language] ?? TIP_LABELS.chooseLevel.en}</Text>
        </View>
        <ThemeToggle />
      </View>

      {/* Politeness tips banner */}
      <Pressable style={[styles.tipsBanner, { backgroundColor: '#1E7214' + '18', borderColor: '#1E7214' + '44' }]} onPress={() => setTipsVisible(true)}>
        <Text style={styles.tipsBannerEmoji}>💬</Text>
        <View style={styles.tipsBannerText}>
          <Text style={[styles.tipsBannerTitle, { color: '#1E7214' }]}>{TIP_LABELS.title[language] ?? TIP_LABELS.title.en}</Text>
          <Text style={[styles.tipsBannerSub, { color: colors.textSecondary }]}>{TIP_LABELS.bannerSub[language] ?? TIP_LABELS.bannerSub.en}</Text>
        </View>
      </Pressable>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: colors.text }]}>{TIP_LABELS.tenLevels[language] ?? TIP_LABELS.tenLevels.en}</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{TIP_LABELS.levelHint[language] ?? TIP_LABELS.levelHint.en}</Text>

        <View style={styles.list}>
          {LEVELS.map((level) => (
            <TouchableOpacity
              key={level.id}
              style={[styles.row, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
              onPress={() => handleSelectLevel(level.id)}
              activeOpacity={0.8}
            >
              {/* Number badge */}
              <View style={[styles.numBadge, { borderColor: colors.cardBorder }]}>
                <Text style={[styles.numText, { color: colors.text }]}>{level.id}</Text>
              </View>

              {/* Info */}
              <View style={styles.rowInfo}>
                <Text style={[styles.levelName, { color: colors.text }]}>{level.name[language] ?? level.name.en}</Text>
                <Text style={[styles.levelDesc, { color: colors.textSecondary }]} numberOfLines={1}>
                  {level.description[language] ?? level.description.en}
                </Text>
              </View>

              {/* Arrow */}
              <ChevronRight size={18} color={colors.textMuted} strokeWidth={2} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <PolitenessModal visible={tipsVisible} onClose={() => setTipsVisible(false)} language={language} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 8, gap: 12,
  },
  backBtn: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerSub: { fontSize: 11, fontFamily: 'Poppins-Medium', letterSpacing: 0.3 },
  headerTitle: { fontSize: FontSize.md, fontFamily: 'Poppins-SemiBold' },
  tipsBanner: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    marginHorizontal: 20, marginBottom: 4, marginTop: 2,
    borderRadius: 14, borderWidth: 1.5,
    paddingHorizontal: 16, paddingVertical: 12,
  },
  tipsBannerEmoji: { fontSize: 26 },
  tipsBannerText: { flex: 1 },
  tipsBannerTitle: { fontSize: FontSize.md, fontFamily: 'Poppins-Bold' },
  tipsBannerSub: { fontSize: FontSize.xs, fontFamily: 'Poppins-Regular', marginTop: 1 },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  title: { fontSize: 26, fontFamily: 'Poppins-ExtraBold', letterSpacing: -0.5, marginTop: 12 },
  subtitle: { fontSize: FontSize.sm, fontFamily: 'Poppins-Regular', marginTop: 4, marginBottom: 20 },
  list: { gap: 10 },
  row: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    borderRadius: 14, borderWidth: 1.5, padding: 14,
  },
  numBadge: {
    width: 40, height: 40, borderRadius: 20,
    borderWidth: 1.5, alignItems: 'center', justifyContent: 'center',
  },
  numText: { fontSize: FontSize.md, fontFamily: 'Poppins-Bold' },
  rowInfo: { flex: 1 },
  levelName: { fontSize: FontSize.md, fontFamily: 'Poppins-SemiBold' },
  levelDesc: { fontSize: FontSize.xs, fontFamily: 'Poppins-Regular', marginTop: 1 },
});

const modal = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111111', paddingTop: 12 },
  handle: {
    width: 40, height: 4, borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignSelf: 'center', marginBottom: 12,
  },
  closeBtn: {
    position: 'absolute', top: 20, right: 20,
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center', justifyContent: 'center',
    zIndex: 10,
  },
  scroll: { paddingHorizontal: 20, paddingBottom: 40, paddingTop: 8 },
  title: {
    fontSize: 26, fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF', letterSpacing: -0.5, marginBottom: 6,
  },
  subtitle: {
    fontSize: 13, fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.5)', lineHeight: 20, marginBottom: 24,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16, borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 16, marginBottom: 10,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 },
  cardEmoji: { fontSize: 28 },
  cardHeaderText: { flex: 1 },
  phrase: { fontSize: 17, fontFamily: 'Poppins-Bold', color: '#FFFFFF' },
  translation: { fontSize: 14, fontFamily: 'Poppins-Medium', color: '#1E7214', marginTop: 1 },
  exampleRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  exampleLabel: { fontSize: 12, fontFamily: 'Poppins-SemiBold', color: 'rgba(255,255,255,0.4)' },
  exampleText: { fontSize: 13, fontFamily: 'Poppins-Regular', color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', flex: 1 },
  proTip: {
    backgroundColor: '#1E7214' + '22',
    borderRadius: 14, borderWidth: 1,
    borderColor: '#1E7214' + '55',
    padding: 16, marginTop: 8, marginBottom: 20,
  },
  proTipText: { fontSize: 13, fontFamily: 'Poppins-SemiBold', color: '#1E7214', lineHeight: 20 },
  gotItBtn: {
    backgroundColor: '#1E7214', borderRadius: 50,
    paddingVertical: 18, alignItems: 'center',
    shadowColor: '#1E7214', shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4, shadowRadius: 14, elevation: 8,
  },
  gotItText: { fontSize: 15, fontFamily: 'Poppins-Bold', color: '#1A1A1A', letterSpacing: 0.8 },
});
