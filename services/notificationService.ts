import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// Motivational messages per UI language
const MESSAGES: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: '🐝 Time to buzz!', body: "Your English streak is waiting. Just 5 minutes today!" },
    { title: '📚 Don\'t lose your streak!', body: "You were on a roll. Come back and keep learning!" },
    { title: '🏆 Level up today!', body: "One lesson closer to fluent English. Let\'s go!" },
    { title: '⚡ Quick lesson?', body: "Your coworkers will be impressed. Practice now!" },
    { title: '🐝 FluentBee misses you!', body: "Come back and learn the English your job needs." },
    { title: '💪 Stay sharp!', body: "A quick quiz is all it takes. Open FluentBee now!" },
  ],
  'pt-BR': [
    { title: '🐝 Hora de aprender!', body: "Sua sequência de inglês está esperando. Só 5 minutos hoje!" },
    { title: '📚 Não perca sua sequência!', body: "Você estava indo bem. Volte e continue aprendendo!" },
    { title: '🏆 Sobe de nível hoje!', body: "Uma lição mais perto do inglês fluente. Vamos lá!" },
    { title: '⚡ Lição rápida?', body: "Seus colegas vão ficar impressionados. Pratique agora!" },
    { title: '🐝 O FluentBee está com saudades!', body: "Volte e aprenda o inglês que seu trabalho precisa." },
    { title: '💪 Mantenha o ritmo!', body: "Um quiz rápido é tudo que precisa. Abra o FluentBee!" },
  ],
  'pt-PT': [
    { title: '🐝 Hora de aprender!', body: "A tua sequência de inglês está à espera. Só 5 minutos hoje!" },
    { title: '📚 Não percas a sequência!', body: "Estavas a ir bem. Volta e continua a aprender!" },
    { title: '🏆 Sobe de nível hoje!', body: "Uma lição mais perto do inglês fluente. Vamos lá!" },
    { title: '⚡ Lição rápida?', body: "Os teus colegas vão ficar impressionados. Pratica agora!" },
    { title: '🐝 O FluentBee tem saudades!', body: "Volta e aprende o inglês que o teu trabalho precisa." },
    { title: '💪 Mantém o ritmo!', body: "Um quiz rápido é tudo o que precisas. Abre o FluentBee!" },
  ],
  es: [
    { title: '🐝 ¡Hora de aprender!', body: "Tu racha de inglés está esperando. ¡Solo 5 minutos hoy!" },
    { title: '📚 ¡No pierdas tu racha!', body: "Ibas muy bien. ¡Vuelve y sigue aprendiendo!" },
    { title: '🏆 ¡Sube de nivel hoy!', body: "Una lección más cerca del inglés fluido. ¡Vamos!" },
    { title: '⚡ ¿Una lección rápida?', body: "Tus compañeros quedarán impresionados. ¡Practica ahora!" },
    { title: '🐝 ¡FluentBee te extraña!', body: "Vuelve y aprende el inglés que necesita tu trabajo." },
    { title: '💪 ¡Mantente activo!', body: "Un quiz rápido es todo lo que necesitas. ¡Abre FluentBee!" },
  ],
  fr: [
    { title: '🐝 C\'est l\'heure d\'apprendre !', body: "Ta série anglaise t'attend. Juste 5 minutes aujourd'hui !" },
    { title: '📚 Ne perds pas ta série !', body: "Tu progressais bien. Reviens et continue à apprendre !" },
    { title: '🏆 Monte de niveau aujourd\'hui !', body: "Une leçon de plus vers l'anglais courant. Allez !" },
    { title: '⚡ Une leçon rapide ?', body: "Tes collègues seront impressionnés. Pratique maintenant !" },
    { title: '🐝 FluentBee te manque !', body: "Reviens et apprends l'anglais dont ton travail a besoin." },
    { title: '💪 Reste au top !', body: "Un quiz rapide, c'est tout ce qu'il faut. Ouvre FluentBee !" },
  ],
  de: [
    { title: '🐝 Zeit zum Lernen!', body: "Deine Englisch-Serie wartet. Nur 5 Minuten heute!" },
    { title: '📚 Verliere deine Serie nicht!', body: "Du warst auf einem guten Weg. Komm zurück und lerne weiter!" },
    { title: '🏆 Level up heute!', body: "Eine Lektion näher am fließenden Englisch. Los geht\'s!" },
    { title: '⚡ Eine schnelle Lektion?', body: "Deine Kollegen werden beeindruckt sein. Übe jetzt!" },
    { title: '🐝 FluentBee vermisst dich!', body: "Komm zurück und lerne das Englisch, das dein Job braucht." },
    { title: '💪 Bleib scharf!', body: "Ein schnelles Quiz reicht aus. Öffne FluentBee jetzt!" },
  ],
  it: [
    { title: '🐝 È ora di imparare!', body: "La tua serie di inglese ti aspetta. Solo 5 minuti oggi!" },
    { title: '📚 Non perdere la tua serie!', body: "Stavi andando bene. Torna e continua ad imparare!" },
    { title: '🏆 Sali di livello oggi!', body: "Una lezione più vicino all'inglese fluente. Andiamo!" },
    { title: '⚡ Una lezione veloce?', body: "I tuoi colleghi saranno impressionati. Pratica ora!" },
    { title: '🐝 FluentBee ti manca!', body: "Torna e impara l'inglese di cui ha bisogno il tuo lavoro." },
    { title: '💪 Resta in forma!', body: "Un quiz veloce è tutto ciò che serve. Apri FluentBee!" },
  ],
  nl: [
    { title: '🐝 Tijd om te leren!', body: "Je Engelse reeks wacht op je. Maar 5 minuten vandaag!" },
    { title: '📚 Verlies je reeks niet!', body: "Je deed het goed. Kom terug en blijf leren!" },
    { title: '🏆 Level up vandaag!', body: "Eén les dichter bij vloeiend Engels. Kom op!" },
    { title: '⚡ Een snelle les?', body: "Je collega\'s zullen onder de indruk zijn. Oefen nu!" },
    { title: '🐝 FluentBee mist je!', body: "Kom terug en leer het Engels dat je werk nodig heeft." },
    { title: '💪 Blijf scherp!', body: "Een snelle quiz is alles wat je nodig hebt. Open FluentBee!" },
  ],
  ru: [
    { title: '🐝 Время учиться!', body: "Твоя серия по английскому ждёт. Всего 5 минут сегодня!" },
    { title: '📚 Не теряй серию!', body: "Ты так хорошо шёл. Вернись и продолжай учиться!" },
    { title: '🏆 Повысь уровень сегодня!', body: "Ещё один урок ближе к свободному английскому. Вперёд!" },
    { title: '⚡ Быстрый урок?', body: "Коллеги будут впечатлены. Практикуйся сейчас!" },
    { title: '🐝 FluentBee скучает по тебе!', body: "Вернись и учи английский, который нужен твоей работе." },
    { title: '💪 Оставайся в форме!', body: "Быстрый тест — это всё, что нужно. Открой FluentBee!" },
  ],
  zh: [
    { title: '🐝 学习时间到了！', body: "你的英语连击在等你。今天只需5分钟！" },
    { title: '📚 别失去你的连击！', body: "你表现得很好。回来继续学习吧！" },
    { title: '🏆 今天升级！', body: "再一课就离流利英语更近一步。加油！" },
    { title: '⚡ 快速一课？', body: "你的同事会印象深刻的。现在就练习！" },
    { title: '🐝 FluentBee想你了！', body: "回来学习工作中需要的英语。" },
    { title: '💪 保持状态！', body: "一个快速测验就够了。现在打开FluentBee！" },
  ],
  ja: [
    { title: '🐝 学習の時間です！', body: "英語のストリークが待っています。今日はたった5分！" },
    { title: '📚 ストリークを失わないで！', body: "順調でしたね。戻って学習を続けましょう！" },
    { title: '🏆 今日レベルアップ！', body: "流暢な英語まであと一歩。さあ行きましょう！" },
    { title: '⚡ クイックレッスン？', body: "同僚が感動するでしょう。今すぐ練習！" },
    { title: '🐝 FluentBeeが恋しがっています！', body: "戻って仕事に必要な英語を学びましょう。" },
    { title: '💪 シャープに！', body: "クイッククイズだけで十分です。FluentBeeを開こう！" },
  ],
  ko: [
    { title: '🐝 학습 시간입니다!', body: "영어 스트릭이 기다리고 있어요. 오늘 5분만요!" },
    { title: '📚 스트릭을 잃지 마세요!', body: "잘 하고 있었잖아요. 돌아와서 계속 배우세요!" },
    { title: '🏆 오늘 레벨업!', body: "유창한 영어까지 한 걸음 더. 가자!" },
    { title: '⚡ 빠른 레슨?', body: "동료들이 감동받을 거예요. 지금 연습하세요!" },
    { title: '🐝 FluentBee가 보고 싶어해요!', body: "돌아와서 직업에 필요한 영어를 배우세요." },
    { title: '💪 날카롭게 유지!', body: "빠른 퀴즈면 충분해요. 지금 FluentBee를 여세요!" },
  ],
};

function getMessages(lang: string) {
  return MESSAGES[lang] ?? MESSAGES['en'];
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const notificationService = {
  async requestPermission(): Promise<boolean> {
    if (Platform.OS === 'web') return false;

    const { status: existing } = await Notifications.getPermissionsAsync();
    if (existing === 'granted') return true;

    const { status } = await Notifications.requestPermissionsAsync();
    return status === 'granted';
  },

  async scheduleDailyReminder(hour = 20, minute = 0, uiLang = 'en'): Promise<void> {
    await Notifications.cancelAllScheduledNotificationsAsync();

    const granted = await this.requestPermission();
    if (!granted) return;

    const messages = getMessages(uiLang);

    // Schedule 7 days of varied messages so it doesn't feel repetitive
    for (let day = 1; day <= 7; day++) {
      const msg = messages[(day - 1) % messages.length];
      const trigger = new Date();
      trigger.setDate(trigger.getDate() + day);
      trigger.setHours(hour, minute, 0, 0);

      await Notifications.scheduleNotificationAsync({
        content: {
          title: msg.title,
          body: msg.body,
          sound: true,
          badge: 1,
          data: { screen: 'language' },
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date: trigger,
        },
      });
    }
  },

  // Call when user opens the app — cancel pending, reschedule from tomorrow
  async onAppOpen(hour = 20, minute = 0, uiLang = 'en'): Promise<void> {
    await Notifications.setBadgeCountAsync(0);
    await this.scheduleDailyReminder(hour, minute, uiLang);
  },

  async cancelAll(): Promise<void> {
    await Notifications.cancelAllScheduledNotificationsAsync();
    await Notifications.setBadgeCountAsync(0);
  },

  async getSavedHour(): Promise<number> {
    return 20;
  },
};
