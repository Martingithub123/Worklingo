import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
  TouchableOpacity, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { dataService } from '@/services/dataService';
import { FontSize } from '@/constants/theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ChevronLeft } from 'lucide-react-native';

const { width } = Dimensions.get('window');
const COLS = 2;
const GAP = 14;
const CARD = (width - 40 - GAP) / COLS;

export default function SectorsScreen() {
  const { language, colors } = useApp();
  const { jobId } = useLocalSearchParams<{ jobId: string }>();

  const job = dataService.getJobById(jobId);
  const sectors = dataService.getSectorsForJob(jobId);

  if (!job) return null;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={[styles.backBtn, { backgroundColor: colors.surface }]} activeOpacity={0.8}>
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerStep, { color: colors.textSecondary }]}>STEP 2 OF 3</Text>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Choose Sector</Text>
        </View>
        <ThemeToggle />
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {/* Job breadcrumb */}
        <View style={[styles.breadcrumb, { backgroundColor: colors.surface }]}>
          <Text style={styles.breadcrumbIcon}>{job.icon}</Text>
          <Text style={[styles.breadcrumbText, { color: colors.textSecondary }]}>{job.name[language] ?? job.name.en}</Text>
        </View>

        <Text style={[styles.title, { color: colors.text }]}>Which sector?</Text>
        <Text style={[styles.subtitle, { color: colors.textSecondary }]}>Pick the area where you work</Text>

        {/* Grid 2 columns */}
        <View style={styles.grid}>
          {sectors.map((sector) => (
            <TouchableOpacity
              key={sector.id}
              style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
              onPress={() => router.push({ pathname: '/levels', params: { jobId, sectorId: sector.id } })}
              activeOpacity={0.8}
            >
              <Text style={styles.icon}>{sector.icon}</Text>
              <Text style={[styles.name, { color: colors.text }]} numberOfLines={2}>{sector.name[language] ?? sector.name.en}</Text>
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
    paddingHorizontal: 20, paddingTop: 8, paddingBottom: 8, gap: 12,
  },
  backBtn: { width: 38, height: 38, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  headerCenter: { flex: 1, alignItems: 'center' },
  headerStep: { fontSize: 10, fontFamily: 'Poppins-SemiBold', letterSpacing: 1, textTransform: 'uppercase' },
  headerTitle: { fontSize: FontSize.md, fontFamily: 'Poppins-SemiBold' },
  content: { paddingHorizontal: 20, paddingBottom: 40 },
  breadcrumb: {
    flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',
    borderRadius: 99, paddingHorizontal: 12, paddingVertical: 6, gap: 6, marginTop: 12, marginBottom: 16,
  },
  breadcrumbIcon: { fontSize: 14 },
  breadcrumbText: { fontSize: FontSize.sm, fontFamily: 'Poppins-Medium' },
  title: { fontSize: 26, fontFamily: 'Poppins-ExtraBold', letterSpacing: -0.5, lineHeight: 34 },
  subtitle: { fontSize: FontSize.sm, fontFamily: 'Poppins-Regular', marginTop: 4, marginBottom: 20 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: GAP },
  card: {
    width: CARD, height: CARD,
    borderRadius: 20, borderWidth: 1.5,
    alignItems: 'center', justifyContent: 'center',
    gap: 10, padding: 12,
  },
  icon: { fontSize: 38 },
  name: { fontSize: FontSize.sm, fontFamily: 'Poppins-SemiBold', textAlign: 'center', lineHeight: 18 },
});
