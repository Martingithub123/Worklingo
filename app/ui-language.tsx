import { useState, useMemo, useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TextInput, TouchableOpacity,
  FlatList, Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { Search, Check } from 'lucide-react-native';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import BeeMascot from '@/components/BeeMascot';
import { ThemeToggle } from '@/components/ThemeToggle';


interface CountryEntry {
  code: string;
  flag: string;
  native: string;
  country: string;
  search: string;
}

const COUNTRIES: CountryEntry[] = [
  { code: 'en',    flag: '🇺🇸', native: 'English',          country: 'United States',       search: 'english united states usa america' },
  { code: 'en',    flag: '🇬🇧', native: 'English (UK)',      country: 'United Kingdom',      search: 'english united kingdom uk britain' },
  { code: 'en',    flag: '🇦🇺', native: 'English (AU)',      country: 'Australia',           search: 'english australia' },
  { code: 'en',    flag: '🇨🇦', native: 'English (CA)',      country: 'Canada',              search: 'english canada' },
  { code: 'pt-BR', flag: '🇧🇷', native: 'Português',         country: 'Brasil',              search: 'portuguese brasil brazil' },
  { code: 'pt',    flag: '🇵🇹', native: 'Português (PT)',    country: 'Portugal',            search: 'portuguese portugal' },
  { code: 'es',    flag: '🇪🇸', native: 'Español',           country: 'España',              search: 'spanish spain espana' },
  { code: 'es',    flag: '🇲🇽', native: 'Español (MX)',      country: 'México',              search: 'spanish mexico' },
  { code: 'es',    flag: '🇦🇷', native: 'Español (AR)',      country: 'Argentina',           search: 'spanish argentina' },
  { code: 'es',    flag: '🇨🇴', native: 'Español (CO)',      country: 'Colombia',            search: 'spanish colombia' },
  { code: 'es',    flag: '🇨🇱', native: 'Español (CL)',      country: 'Chile',               search: 'spanish chile' },
  { code: 'es',    flag: '🇵🇪', native: 'Español (PE)',      country: 'Perú',                search: 'spanish peru' },
  { code: 'es',    flag: '🇻🇪', native: 'Español (VE)',      country: 'Venezuela',           search: 'spanish venezuela' },
  { code: 'fr',    flag: '🇫🇷', native: 'Français',          country: 'France',              search: 'french france' },
  { code: 'fr',    flag: '🇧🇪', native: 'Français (BE)',     country: 'Belgique',            search: 'french belgium belgique' },
  { code: 'fr',    flag: '🇨🇭', native: 'Français (CH)',     country: 'Suisse',              search: 'french switzerland suisse' },
  { code: 'fr',    flag: '🇨🇦', native: 'Français (CA)',     country: 'Canada (FR)',         search: 'french canada' },
  { code: 'de',    flag: '🇩🇪', native: 'Deutsch',           country: 'Deutschland',         search: 'german germany deutschland' },
  { code: 'de',    flag: '🇦🇹', native: 'Deutsch (AT)',      country: 'Österreich',          search: 'german austria osterreich' },
  { code: 'de',    flag: '🇨🇭', native: 'Deutsch (CH)',      country: 'Schweiz',             search: 'german switzerland schweiz' },
  { code: 'it',    flag: '🇮🇹', native: 'Italiano',          country: 'Italia',              search: 'italian italy italia' },
  { code: 'nl',    flag: '🇳🇱', native: 'Nederlands',        country: 'Nederland',           search: 'dutch netherlands nederland' },
  { code: 'nl',    flag: '🇧🇪', native: 'Nederlands (BE)',   country: 'België',              search: 'dutch belgium belgie' },
  { code: 'ru',    flag: '🇷🇺', native: 'Русский',           country: 'Россия',              search: 'russian russia rossiya' },
  { code: 'zh',    flag: '🇨🇳', native: '普通话',             country: '中国',                search: 'chinese mandarin china' },
  { code: 'zh',    flag: '🇹🇼', native: '繁體中文',           country: '台灣',                search: 'chinese taiwan traditional' },
  { code: 'ja',    flag: '🇯🇵', native: '日本語',             country: '日本',                search: 'japanese japan nihon' },
  { code: 'ko',    flag: '🇰🇷', native: '한국어',             country: '대한민국',             search: 'korean korea hanguk' },
  { code: 'ar',    flag: '🇸🇦', native: 'العربية',           country: 'السعودية',            search: 'arabic saudi arabia' },
  { code: 'ar',    flag: '🇦🇪', native: 'العربية (AE)',      country: 'الإمارات',            search: 'arabic uae emirates' },
  { code: 'ar',    flag: '🇪🇬', native: 'العربية (EG)',      country: 'مصر',                 search: 'arabic egypt masr' },
  { code: 'ar',    flag: '🇲🇦', native: 'العربية (MA)',      country: 'المغرب',              search: 'arabic morocco maroc' },
  { code: 'ar',    flag: '🇩🇿', native: 'العربية (DZ)',      country: 'الجزائر',             search: 'arabic algeria' },
  { code: 'hi',    flag: '🇮🇳', native: 'हिंदी',             country: 'भारत',               search: 'hindi india bharat' },
  { code: 'tr',    flag: '🇹🇷', native: 'Türkçe',            country: 'Türkiye',             search: 'turkish turkey turkiye' },
  { code: 'pl',    flag: '🇵🇱', native: 'Polski',            country: 'Polska',              search: 'polish poland polska' },
  { code: 'sv',    flag: '🇸🇪', native: 'Svenska',           country: 'Sverige',             search: 'swedish sweden sverige' },
  { code: 'sv',    flag: '🇳🇴', native: 'Norsk',             country: 'Norge',               search: 'norwegian norway norge' },
  { code: 'sv',    flag: '🇩🇰', native: 'Dansk',             country: 'Danmark',             search: 'danish denmark danmark' },
  { code: 'sv',    flag: '🇫🇮', native: 'Suomi',             country: 'Suomi',               search: 'finnish finland suomi' },
  { code: 'el',    flag: '🇬🇷', native: 'Ελληνικά',          country: 'Ελλάδα',              search: 'greek greece ellada' },
  { code: 'cs',    flag: '🇨🇿', native: 'Čeština',           country: 'Česká republika',     search: 'czech czech republic' },
  { code: 'ro',    flag: '🇷🇴', native: 'Română',            country: 'România',             search: 'romanian romania' },
  { code: 'hu',    flag: '🇭🇺', native: 'Magyar',            country: 'Magyarország',        search: 'hungarian hungary magyarorszag' },
  { code: 'uk',    flag: '🇺🇦', native: 'Українська',        country: 'Україна',             search: 'ukrainian ukraine ukraina' },
  { code: 'id',    flag: '🇮🇩', native: 'Bahasa Indonesia',  country: 'Indonesia',           search: 'indonesian indonesia' },
  { code: 'vi',    flag: '🇻🇳', native: 'Tiếng Việt',        country: 'Việt Nam',            search: 'vietnamese vietnam' },
  { code: 'vi',    flag: '🇹🇭', native: 'ภาษาไทย',           country: 'ประเทศไทย',           search: 'thai thailand' },
  { code: 'id',    flag: '🇲🇾', native: 'Bahasa Melayu',     country: 'Malaysia',            search: 'malay malaysia' },
  { code: 'id',    flag: '🇵🇭', native: 'Filipino',          country: 'Pilipinas',           search: 'filipino philippines pilipinas' },
  { code: 'uk',    flag: '🇧🇬', native: 'Български',         country: 'България',            search: 'bulgarian bulgaria' },
  { code: 'uk',    flag: '🇭🇷', native: 'Hrvatski',          country: 'Hrvatska',            search: 'croatian croatia hrvatska' },
  { code: 'uk',    flag: '🇷🇸', native: 'Српски',            country: 'Srbija',              search: 'serbian serbia srbija' },
  { code: 'uk',    flag: '🇸🇰', native: 'Slovenčina',        country: 'Slovensko',           search: 'slovak slovakia slovensko' },
  { code: 'uk',    flag: '🇸🇮', native: 'Slovenščina',       country: 'Slovenija',           search: 'slovenian slovenia' },
  { code: 'uk',    flag: '🇱🇹', native: 'Lietuvių',          country: 'Lietuva',             search: 'lithuanian lithuania lietuva' },
  { code: 'uk',    flag: '🇱🇻', native: 'Latviešu',          country: 'Latvija',             search: 'latvian latvia' },
  { code: 'uk',    flag: '🇪🇪', native: 'Eesti',             country: 'Eesti',               search: 'estonian estonia eesti' },
  { code: 'ar',    flag: '🇵🇰', native: 'اردو',              country: 'پاکستان',             search: 'urdu pakistan' },
  { code: 'ar',    flag: '🇧🇩', native: 'বাংলা',             country: 'বাংলাদেশ',            search: 'bengali bangladesh' },
  { code: 'ar',    flag: '🇮🇷', native: 'فارسی',             country: 'ایران',               search: 'persian farsi iran' },
  { code: 'ar',    flag: '🇮🇱', native: 'עברית',             country: 'ישראל',               search: 'hebrew israel' },
  { code: 'id',    flag: '🇰🇪', native: 'Kiswahili',         country: 'Kenya',               search: 'swahili kenya' },
  { code: 'en',    flag: '🇿🇦', native: 'Afrikaans',         country: 'South Africa',        search: 'afrikaans south africa' },
  { code: 'en',    flag: '🇳🇬', native: 'English (NG)',      country: 'Nigeria',             search: 'english nigeria' },
  { code: 'en',    flag: '🇬🇭', native: 'English (GH)',      country: 'Ghana',               search: 'english ghana' },
  { code: 'fr',    flag: '🇨🇮', native: 'Français (CI)',     country: "Côte d'Ivoire",       search: 'french ivory coast' },
  { code: 'fr',    flag: '🇸🇳', native: 'Français (SN)',     country: 'Sénégal',             search: 'french senegal' },
];

export default function UILanguageScreen() {
  const { uiLanguage, setUiLanguage, colors } = useApp();
  const [query, setQuery] = useState('');
  const [selectedUid, setSelectedUid] = useState<string>(() => {
    const match = COUNTRIES.find(c => c.code === uiLanguage);
    return match ? `${match.code}-${match.flag}` : '';
  });
  const btnOp = useRef(new Animated.Value(0)).current;
  const btnY  = useRef(new Animated.Value(16)).current;

  const t = getStrings(uiLanguage);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(btnOp, { toValue: 1, duration: 400, useNativeDriver: true }),
      Animated.timing(btnY,  { toValue: 0, duration: 400, useNativeDriver: true }),
    ]).start();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return COUNTRIES;
    return COUNTRIES.filter(c =>
      c.native.toLowerCase().includes(q) ||
      c.country.toLowerCase().includes(q) ||
      c.search.includes(q)
    );
  }, [query]);

  const handleSelect = (entry: CountryEntry) => {
    setSelectedUid(`${entry.code}-${entry.flag}`);
    setUiLanguage(entry.code);
  };

  const handleContinue = () => {
    router.push('/referral' as any);
  };

  const renderItem = ({ item }: { item: CountryEntry }) => {
    const isSelected = selectedUid === `${item.code}-${item.flag}`;
    return (
      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }, isSelected && styles.cardSelected]}
        onPress={() => handleSelect(item)}
        activeOpacity={0.8}
      >
        <Text style={styles.flag}>{item.flag}</Text>
        <View style={styles.cardText}>
          <Text style={[styles.nativeLabel, { color: colors.text }, isSelected && { color: '#5ED82B' }]} numberOfLines={1}>
            {item.native}
          </Text>
          <Text style={[styles.countryLabel, { color: colors.textMuted }]} numberOfLines={1}>{item.country}</Text>
        </View>
        {isSelected && (
          <View style={styles.checkBadge}>
            <Check size={12} color="#0B1A08" strokeWidth={3} />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.root, { backgroundColor: colors.background }]}>
      <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
        <View style={styles.topBar}>
          <BeeMascot size={46} />
          <ThemeToggle />
        </View>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>{t.whatsYourLanguage}</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>{t.selectToGetStarted}</Text>
        </View>

        {/* Search */}
        <View style={[styles.searchRow, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
          <Search size={16} color={colors.textMuted} strokeWidth={2} />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder={t.searchCountry}
            placeholderTextColor={colors.textMuted}
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        {/* List */}
        <FlatList
          data={filtered}
          keyExtractor={(item, i) => `${item.code}-${item.flag}-${i}`}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
        />

        {/* Continue */}
        <Animated.View style={[styles.footer, { opacity: btnOp, transform: [{ translateY: btnY }] }]}>
          <TouchableOpacity style={styles.continueBtn} onPress={handleContinue} activeOpacity={0.86}>
            <Text style={styles.continueBtnText}>{t.continue}</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-ExtraBold',
    color: '#FFFFFF',
    letterSpacing: -0.5,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.5)',
    marginTop: 2,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 24,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.10)',
    paddingHorizontal: 14,
    height: 48,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    height: '100%',
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    gap: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.10)',
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 14,
    position: 'relative',
  },
  cardSelected: {
    backgroundColor: 'rgba(94,216,43,0.14)',
    borderColor: '#5ED82B',
  },
  cardText: {
    flex: 1,
    gap: 2,
  },
  flag: {
    fontSize: 30,
  },
  nativeLabel: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
  countryLabel: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.45)',
  },
  checkBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#5ED82B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 8,
    paddingTop: 8,
  },
  continueBtn: {
    backgroundColor: '#5ED82B',
    borderRadius: 99,
    paddingVertical: 17,
    alignItems: 'center',
    shadowColor: '#5ED82B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.45,
    shadowRadius: 20,
    elevation: 10,
  },
  continueBtnText: {
    fontSize: 15,
    fontFamily: 'Poppins-ExtraBold',
    color: '#0A1C08',
    letterSpacing: 1.5,
  },
});
