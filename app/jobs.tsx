import {
  View, Text, StyleSheet, ScrollView, Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import { dataService } from '@/services/dataService';
import { FontSize } from '@/constants/theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';

const CARD_HEIGHT = 170;

export default function JobsScreen() {
  const { colors, uiLanguage } = useApp();
  const t = getStrings(uiLanguage);
  const jobs = dataService.getAllJobs();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: colors.background }]}>
        <TouchableOpacity onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.surface }]} activeOpacity={0.8}>
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerStep, { color: colors.textSecondary }]}>{t.step1of3}</Text>
          <Text style={[styles.headerTitle, { color: colors.text }]}>{t.jobCategory}</Text>
        </View>
        <ThemeToggle />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={[styles.pageTitle, { color: colors.text }]}>{t.chooseWorkplace}</Text>
        <Text style={[styles.pageSubtitle, { color: colors.textSecondary }]}>{t.learnVocabEnv}</Text>

        <View style={styles.list}>
          {jobs.map((job) => (
            <TouchableOpacity
              key={job.id}
              style={styles.card}
              onPress={() => router.push({ pathname: '/sectors', params: { jobId: job.id } })}
              activeOpacity={0.85}
            >
              <Image source={{ uri: job.imageUrl }} style={styles.cardBg} resizeMode="cover" />
              <View style={styles.cardOverlay} />
              <View style={styles.cardBody}>
                <View>
                  <Text style={styles.cardIcon}>{job.icon}</Text>
                  <Text style={styles.cardName}>{(job.name as any)[uiLanguage.split('-')[0]] ?? job.name.en}</Text>
                  <Text style={styles.cardSub}>
                    {job.sectors.length} role{job.sectors.length !== 1 ? 's' : ''}
                  </Text>
                </View>
                <View style={styles.arrowBtn}>
                  <ChevronRight size={18} color="#FFFFFF" strokeWidth={2.5} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingTop: 12, paddingBottom: 8, gap: 12,
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 19,
    alignItems: 'center', justifyContent: 'center',
  },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerStep: {
    fontSize: 11, fontFamily: 'Poppins-SemiBold',
    letterSpacing: 1, textTransform: 'uppercase',
  },
  headerTitle: {
    fontSize: FontSize.md, fontFamily: 'Poppins-SemiBold',
  },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 40 },
  pageTitle: {
    fontSize: 32, fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.5, marginTop: 16, lineHeight: 40,
  },
  pageSubtitle: {
    fontSize: FontSize.sm, fontFamily: 'Poppins-Regular',
    marginTop: 6, marginBottom: 24, lineHeight: 20,
  },
  list: { gap: 14 },
  card: {
    height: CARD_HEIGHT, borderRadius: 18, overflow: 'hidden',
    position: 'relative',
  },
  cardBg: {
    position: 'absolute', top: 0, left: 0,
    width: '100%', height: '100%',
  },
  cardOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.52)',
  },
  cardBody: {
    flex: 1, flexDirection: 'row', alignItems: 'flex-end',
    justifyContent: 'space-between', padding: 18,
  },
  cardIcon: { fontSize: 26, marginBottom: 2 },
  cardName: {
    fontSize: FontSize.xl, fontFamily: 'Poppins-Bold', color: '#FFFFFF',
    lineHeight: 28,
  },
  cardSub: {
    fontSize: FontSize.sm, fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,0.6)',
  },
  arrowBtn: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: '#5ED82B',
    alignItems: 'center', justifyContent: 'center',
    alignSelf: 'flex-end',
  },
});
