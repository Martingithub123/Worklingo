// Localized names for the 10 target languages, in each of the 20 UI languages
const LANG_NAMES: Record<string, Record<string, string>> = {
  en: { en:'English','pt-BR':'Inglês',pt:'Inglês',es:'Inglés',fr:'Anglais',de:'Englisch',it:'Inglese',nl:'Engels',ru:'Английский',zh:'英语',ja:'英語',ko:'영어',ar:'الإنجليزية',hi:'अंग्रेज़ी',tr:'İngilizce',pl:'Angielski',id:'Bahasa Inggris',vi:'Tiếng Anh',uk:'Англійська',sv:'Engelska' },
  es: { en:'Spanish','pt-BR':'Espanhol',pt:'Espanhol',es:'Español',fr:'Espagnol',de:'Spanisch',it:'Spagnolo',nl:'Spaans',ru:'Испанский',zh:'西班牙语',ja:'スペイン語',ko:'스페인어',ar:'الإسبانية',hi:'स्पेनिश',tr:'İspanyolca',pl:'Hiszpański',id:'Bahasa Spanyol',vi:'Tiếng Tây Ban Nha',uk:'Іспанська',sv:'Spanska' },
  pt: { en:'Portuguese','pt-BR':'Português',pt:'Português',es:'Portugués',fr:'Portugais',de:'Portugiesisch',it:'Portoghese',nl:'Portugees',ru:'Португальский',zh:'葡萄牙语',ja:'ポルトガル語',ko:'포르투갈어',ar:'البرتغالية',hi:'पुर्तगाली',tr:'Portekizce',pl:'Portugalski',id:'Bahasa Portugis',vi:'Tiếng Bồ Đào Nha',uk:'Португальська',sv:'Portugisiska' },
  fr: { en:'French','pt-BR':'Francês',pt:'Francês',es:'Francés',fr:'Français',de:'Französisch',it:'Francese',nl:'Frans',ru:'Французский',zh:'法语',ja:'フランス語',ko:'프랑스어',ar:'الفرنسية',hi:'फ्रेंच',tr:'Fransızca',pl:'Francuski',id:'Bahasa Prancis',vi:'Tiếng Pháp',uk:'Французька',sv:'Franska' },
  de: { en:'German','pt-BR':'Alemão',pt:'Alemão',es:'Alemán',fr:'Allemand',de:'Deutsch',it:'Tedesco',nl:'Duits',ru:'Немецкий',zh:'德语',ja:'ドイツ語',ko:'독일어',ar:'الألمانية',hi:'जर्मन',tr:'Almanca',pl:'Niemiecki',id:'Bahasa Jerman',vi:'Tiếng Đức',uk:'Німецька',sv:'Tyska' },
  it: { en:'Italian','pt-BR':'Italiano',pt:'Italiano',es:'Italiano',fr:'Italien',de:'Italienisch',it:'Italiano',nl:'Italiaans',ru:'Итальянский',zh:'意大利语',ja:'イタリア語',ko:'이탈리아어',ar:'الإيطالية',hi:'इतालवी',tr:'İtalyanca',pl:'Włoski',id:'Bahasa Italia',vi:'Tiếng Ý',uk:'Італійська',sv:'Italienska' },
  nl: { en:'Dutch','pt-BR':'Holandês',pt:'Holandês',es:'Holandés',fr:'Néerlandais',de:'Niederländisch',it:'Olandese',nl:'Nederlands',ru:'Нидерландский',zh:'荷兰语',ja:'オランダ語',ko:'네덜란드어',ar:'الهولندية',hi:'डच',tr:'Hollandaca',pl:'Holenderski',id:'Bahasa Belanda',vi:'Tiếng Hà Lan',uk:'Нідерландська',sv:'Holländska' },
  zh: { en:'Mandarin','pt-BR':'Mandarim',pt:'Mandarim',es:'Mandarín',fr:'Mandarin',de:'Mandarin',it:'Mandarino',nl:'Mandarijn',ru:'Мандаринский',zh:'普通话',ja:'中国語',ko:'중국어',ar:'الماندرين',hi:'मंदारिन',tr:'Mandarin',pl:'Mandaryński',id:'Bahasa Mandarin',vi:'Tiếng Quan Thoại',uk:'Мандаринська',sv:'Mandarin' },
  ja: { en:'Japanese','pt-BR':'Japonês',pt:'Japonês',es:'Japonés',fr:'Japonais',de:'Japanisch',it:'Giapponese',nl:'Japans',ru:'Японский',zh:'日语',ja:'日本語',ko:'일본어',ar:'اليابانية',hi:'जापानी',tr:'Japonca',pl:'Japoński',id:'Bahasa Jepang',vi:'Tiếng Nhật',uk:'Японська',sv:'Japanska' },
  ru: { en:'Russian','pt-BR':'Russo',pt:'Russo',es:'Ruso',fr:'Russe',de:'Russisch',it:'Russo',nl:'Russisch',ru:'Русский',zh:'俄语',ja:'ロシア語',ko:'러시아어',ar:'الروسية',hi:'रूसी',tr:'Rusça',pl:'Rosyjski',id:'Bahasa Rusia',vi:'Tiếng Nga',uk:'Російська',sv:'Ryska' },
};

export function getLocalizedLangName(targetLang: string, uiLang: string): string {
  const names = LANG_NAMES[targetLang];
  if (!names) return targetLang.toUpperCase();
  return names[uiLang] ?? names[uiLang.split('-')[0]] ?? names.en ?? targetLang.toUpperCase();
}
