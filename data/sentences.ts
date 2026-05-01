export interface SentenceTemplate {
  en: string;
  es: string;
  pt: string;
  fr: string;
  de: string;
  it: string;
  nl: string;
  zh: string;
  ja: string;
  ru: string;
}

export const SENTENCE_TEMPLATES: Record<string, SentenceTemplate[]> = {
  level4: [
    { en: 'Find the {item}', es: 'Encuentra el {item}', pt: 'Encontre o {item}', fr: 'Trouvez le {item}', de: 'Finde den {item}', it: 'Trova il {item}', nl: 'Vind de {item}', zh: '找到{item}', ja: '{item}を見つけてください', ru: 'Найди {item}' },
    { en: 'Where is the {item}?', es: '¿Dónde está el {item}?', pt: 'Onde está o {item}?', fr: 'Où est le {item}?', de: 'Wo ist der {item}?', it: 'Dove è il {item}?', nl: 'Waar is de {item}?', zh: '{item}在哪里？', ja: '{item}はどこですか？', ru: 'Где {item}?' },
    { en: 'Pick up the {item}', es: 'Recoge el {item}', pt: 'Pegue o {item}', fr: 'Prenez le {item}', de: 'Nimm den {item}', it: 'Prendi il {item}', nl: 'Pak de {item}', zh: '拿起{item}', ja: '{item}を取ってください', ru: 'Возьми {item}' },
    { en: 'Show me the {item}', es: 'Muéstrame el {item}', pt: 'Mostre-me o {item}', fr: 'Montrez-moi le {item}', de: 'Zeig mir den {item}', it: 'Mostrami il {item}', nl: 'Laat me de {item} zien', zh: '给我看{item}', ja: '{item}を見せてください', ru: 'Покажи мне {item}' },
    { en: 'Point to the {item}', es: 'Señala el {item}', pt: 'Aponte para o {item}', fr: 'Indiquez le {item}', de: 'Zeig auf den {item}', it: 'Indica il {item}', nl: 'Wijs de {item} aan', zh: '指向{item}', ja: '{item}を指してください', ru: 'Укажи на {item}' },
    { en: 'I need the {item}', es: 'Necesito el {item}', pt: 'Eu preciso do {item}', fr: "J'ai besoin du {item}", de: 'Ich brauche den {item}', it: 'Ho bisogno del {item}', nl: 'Ik heb de {item} nodig', zh: '我需要{item}', ja: '{item}が必要です', ru: 'Мне нужен {item}' },
  ],
  level5: [
    { en: 'Your supervisor says: "Get the {item} now!"', es: 'Tu supervisor dice: "¡Trae el {item} ahora!"', pt: 'Seu supervisor diz: "Pegue o {item} agora!"', fr: 'Votre superviseur dit: "Prenez le {item} maintenant!"', de: 'Dein Vorgesetzter sagt: "Hol den {item} jetzt!"', it: 'Il tuo supervisore dice: "Prendi il {item} adesso!"', nl: 'Je leidinggevende zegt: "Haal de {item} nu!"', zh: '你的主管说："现在去拿{item}！"', ja: '上司が言います：「今すぐ{item}を持ってきて！」', ru: 'Руководитель говорит: «Принеси {item} сейчас!»' },
    { en: 'A new employee asks: "What is a {item}?"', es: 'Un nuevo empleado pregunta: "¿Qué es un {item}?"', pt: 'Um novo funcionário pergunta: "O que é um {item}?"', fr: 'Un nouvel employé demande: "Qu\'est-ce qu\'un {item}?"', de: 'Ein neuer Mitarbeiter fragt: "Was ist ein {item}?"', it: 'Un nuovo dipendente chiede: "Cos\'è un {item}?"', nl: 'Een nieuwe medewerker vraagt: "Wat is een {item}?"', zh: '新员工问："什么是{item}？"', ja: '新入社員が聞きます：「{item}とは何ですか？」', ru: 'Новый сотрудник спрашивает: «Что такое {item}?»' },
    { en: 'The job requires a {item}. Can you find it?', es: 'El trabajo requiere un {item}. ¿Puedes encontrarlo?', pt: 'O trabalho requer um {item}. Você consegue encontrá-lo?', fr: 'Le travail nécessite un {item}. Pouvez-vous le trouver?', de: 'Die Arbeit erfordert einen {item}. Kannst du ihn finden?', it: 'Il lavoro richiede un {item}. Riesci a trovarlo?', nl: 'Het werk vereist een {item}. Kun je het vinden?', zh: '这项工作需要{item}。你能找到吗？', ja: '作業には{item}が必要です。見つけられますか？', ru: 'Для работы нужен {item}. Можешь найти?' },
    { en: 'The customer asked for the {item}. Which one is it?', es: 'El cliente pidió el {item}. ¿Cuál es?', pt: 'O cliente pediu o {item}. Qual é?', fr: 'Le client a demandé le {item}. Lequel est-ce?', de: 'Der Kunde bat um den {item}. Welches ist es?', it: 'Il cliente ha chiesto il {item}. Qual è?', nl: 'De klant vroeg om de {item}. Welke is het?', zh: '客户要求{item}。是哪一个？', ja: 'お客様が{item}を求めました。どれですか？', ru: 'Клиент попросил {item}. Который из них?' },
    { en: 'Time to start! Grab the {item} first.', es: '¡Es hora de empezar! Primero toma el {item}.', pt: 'Hora de começar! Pegue o {item} primeiro.', fr: "Il est temps de commencer! Prenez d'abord le {item}.", de: 'Zeit anzufangen! Nimm zuerst den {item}.', it: 'È ora di iniziare! Prima prendi il {item}.', nl: 'Tijd om te beginnen! Pak eerst de {item}.', zh: '开始了！先拿{item}。', ja: '始める時間です！まず{item}を取ってください。', ru: 'Пора начинать! Сначала возьми {item}.' },
  ],
  level6: [
    { en: 'Use the {item}', es: 'Usa el {item}', pt: 'Use o {item}', fr: 'Utilisez le {item}', de: 'Benutze den {item}', it: 'Usa il {item}', nl: 'Gebruik de {item}', zh: '使用{item}', ja: '{item}を使ってください', ru: 'Используй {item}' },
    { en: 'Grab the {item}', es: 'Agarra el {item}', pt: 'Pegue o {item}', fr: 'Saisissez le {item}', de: 'Greif den {item}', it: 'Afferra il {item}', nl: 'Pak de {item}', zh: '抓住{item}', ja: '{item}をつかんでください', ru: 'Схвати {item}' },
    { en: 'Hand me the {item}', es: 'Pásame el {item}', pt: 'Me dê o {item}', fr: 'Donnez-moi le {item}', de: 'Reich mir den {item}', it: 'Passami il {item}', nl: 'Geef me de {item}', zh: '把{item}递给我', ja: '{item}を渡してください', ru: 'Передай мне {item}' },
    { en: 'Put the {item} down', es: 'Deja el {item}', pt: 'Coloque o {item}', fr: 'Posez le {item}', de: 'Leg den {item} ab', it: 'Metti giù il {item}', nl: 'Leg de {item} neer', zh: '放下{item}', ja: '{item}を置いてください', ru: 'Положи {item}' },
    { en: 'Pass the {item} to your colleague', es: 'Pasa el {item} a tu compañero', pt: 'Passe o {item} para seu colega', fr: 'Passez le {item} à votre collègue', de: 'Gib den {item} an deinen Kollegen', it: 'Passa il {item} al tuo collega', nl: 'Geef de {item} aan je collega', zh: '把{item}传给你的同事', ja: '{item}を同僚に渡してください', ru: 'Передай {item} коллеге' },
    { en: 'Store the {item} in the right place', es: 'Guarda el {item} en el lugar correcto', pt: 'Guarde o {item} no lugar certo', fr: 'Rangez le {item} au bon endroit', de: 'Verstaue den {item} am richtigen Ort', it: 'Riponi il {item} nel posto giusto', nl: 'Bewaar de {item} op de juiste plaats', zh: '把{item}放在正确的地方', ja: '{item}を正しい場所に収納してください', ru: 'Положи {item} на правильное место' },
  ],
  level7: [
    { en: 'Please bring the {item} to the work area', es: 'Por favor trae el {item} al área de trabajo', pt: 'Por favor traga o {item} para a área de trabalho', fr: "Veuillez apporter le {item} à l'espace de travail", de: 'Bitte bring den {item} zum Arbeitsbereich', it: "Per favore porta il {item} all'area di lavoro", nl: 'Breng de {item} alstublieft naar de werkruimte', zh: '请把{item}带到工作区', ja: '作業エリアに{item}を持ってきてください', ru: 'Пожалуйста, принеси {item} в рабочую зону' },
    { en: 'Could you get the {item} for me, please?', es: '¿Podrías traerme el {item}, por favor?', pt: 'Poderia me pegar o {item}, por favor?', fr: 'Pourriez-vous me chercher le {item}, s\'il vous plaît?', de: 'Könntest du mir bitte den {item} holen?', it: 'Potresti prendermi il {item}, per favore?', nl: 'Zou je de {item} voor me kunnen halen, alsjeblieft?', zh: '你能帮我拿一下{item}吗，请？', ja: '{item}を取ってもらえますか？', ru: 'Не могли бы вы принести мне {item}, пожалуйста?' },
    { en: 'Make sure the {item} is ready before we start', es: 'Asegúrate de que el {item} esté listo antes de empezar', pt: 'Certifique-se de que o {item} está pronto antes de começar', fr: 'Assurez-vous que le {item} est prêt avant de commencer', de: 'Stelle sicher, dass der {item} bereit ist, bevor wir anfangen', it: "Assicurati che il {item} sia pronto prima di iniziare", nl: 'Zorg ervoor dat de {item} klaar is voordat we beginnen', zh: '开始前确保{item}已准备好', ja: '始める前に{item}が準備できているか確認してください', ru: 'Убедись, что {item} готов перед началом работы' },
    { en: 'Where did you put the {item}?', es: '¿Dónde pusiste el {item}?', pt: 'Onde você colocou o {item}?', fr: 'Où avez-vous mis le {item}?', de: 'Wo hast du den {item} hingelegt?', it: 'Dove hai messo il {item}?', nl: 'Waar heb je de {item} neergelegd?', zh: '你把{item}放哪了？', ja: '{item}はどこに置きましたか？', ru: 'Куда ты положил {item}?' },
    { en: 'The team needs the {item} right now', es: 'El equipo necesita el {item} ahora mismo', pt: 'A equipe precisa do {item} agora mesmo', fr: "L'équipe a besoin du {item} maintenant", de: 'Das Team braucht den {item} jetzt sofort', it: 'Il team ha bisogno del {item} adesso', nl: 'Het team heeft de {item} nu nodig', zh: '团队现在需要{item}', ja: 'チームは今すぐ{item}が必要です', ru: 'Команде нужен {item} прямо сейчас' },
  ],
  level9: [
    { en: 'Bring the ___ to the work area', es: 'Lleva el ___ al área de trabajo', pt: 'Traga o ___ para a área de trabalho', fr: 'Apportez le ___ à l\'espace de travail', de: 'Bring den ___ zum Arbeitsbereich', it: "Porta il ___ all'area di lavoro", nl: 'Breng de ___ naar de werkruimte', zh: '把___带到工作区', ja: '___を作業エリアに持ってきてください', ru: 'Принеси ___ в рабочую зону' },
    { en: 'The worker needs a ___', es: 'El trabajador necesita un ___', pt: 'O trabalhador precisa de um ___', fr: "L'ouvrier a besoin d'un ___", de: 'Der Arbeiter braucht einen ___', it: 'Il lavoratore ha bisogno di un ___', nl: 'De medewerker heeft een ___ nodig', zh: '工人需要一个___', ja: '作業員は___が必要です', ru: 'Работнику нужен ___' },
    { en: 'Please store the ___ safely', es: 'Por favor guarda el ___ con seguridad', pt: 'Por favor guarde o ___ com segurança', fr: 'Veuillez ranger le ___ en sécurité', de: 'Bitte den ___ sicher verstauen', it: 'Per favore riponi il ___ in modo sicuro', nl: 'Bewaar de ___ veilig alstublieft', zh: '请安全存放___', ja: '___を安全に保管してください', ru: 'Пожалуйста, храни ___ в безопасном месте' },
    { en: 'Hand the ___ to your supervisor', es: 'Entrega el ___ a tu supervisor', pt: 'Entregue o ___ ao seu supervisor', fr: 'Remettez le ___ à votre superviseur', de: 'Gib den ___ an deinen Vorgesetzten', it: 'Dai il ___ al tuo supervisore', nl: 'Geef de ___ aan je leidinggevende', zh: '将___交给你的主管', ja: '___を上司に渡してください', ru: 'Передай ___ своему руководителю' },
    { en: 'Could you pass me the ___?', es: '¿Podrías pasarme el ___?', pt: 'Poderia me passar o ___?', fr: 'Pourriez-vous me passer le ___?', de: 'Könntest du mir den ___ reichen?', it: 'Potresti passarmi il ___?', nl: 'Zou je me de ___ kunnen aangeven?', zh: '能把___递给我吗？', ja: '___を渡していただけますか？', ru: 'Не могли бы вы передать мне ___?' },
  ],
  level10: [
    { en: 'This is a ___', es: 'Esto es un ___', pt: 'Isso é um ___', fr: "C'est un ___", de: 'Das ist ein ___', it: 'Questo è un ___', nl: 'Dit is een ___', zh: '这是一个___', ja: 'これは___です', ru: 'Это ___' },
    { en: 'I need a ___', es: 'Necesito un ___', pt: 'Eu preciso de um ___', fr: "J'ai besoin d'un ___", de: 'Ich brauche einen ___', it: 'Ho bisogno di un ___', nl: 'Ik heb een ___ nodig', zh: '我需要一个___', ja: '___が必要です', ru: 'Мне нужен ___' },
    { en: 'Can you pass the ___?', es: '¿Puedes pasar el ___?', pt: 'Pode me passar o ___?', fr: 'Pouvez-vous passer le ___?', de: 'Kannst du den ___ reichen?', it: 'Puoi passarmi il ___?', nl: 'Kun je de ___ aangeven?', zh: '能把___递给我吗？', ja: '___を渡していただけますか？', ru: 'Можешь передать ___?' },
  ],
};

export function getSentenceTemplate(level: number, language: keyof SentenceTemplate, itemName: string): string {
  const key = `level${level}`;
  const templates = SENTENCE_TEMPLATES[key];
  if (!templates || templates.length === 0) return itemName;
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template[language].replace('{item}', itemName);
}

export function getFillBlankSentence(level: number, language: keyof SentenceTemplate): string {
  const key = `level${level}`;
  const templates = SENTENCE_TEMPLATES[key];
  if (!templates || templates.length === 0) return '___';
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template[language];
}
