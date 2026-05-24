import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { getStrings } from '@/constants/i18n';
import { dataService } from '@/services/dataService';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PressableCard } from '@/components/PressableCard';
import { ChevronLeft, BookOpen } from 'lucide-react-native';

export default function RolesScreen() {
  const { colors, uiLanguage } = useApp();
  const t = getStrings(uiLanguage);
  const { jobId, sectorId } = useLocalSearchParams<{ jobId: string; sectorId: string }>();

  const job = dataService.getJobById(jobId);
  const sector = dataService.getSectorById(jobId, sectorId);
  const roles = dataService.getRolesForSector(jobId, sectorId);

  const handleSelect = (roleId: string) => {
    router.push({ pathname: '/levels', params: { jobId, sectorId, roleId } });
  };

  if (!job || !sector) return null;

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={[styles.backBtn, { backgroundColor: colors.surface }]}
          activeOpacity={0.8}
        >
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Text style={[styles.headerLabel, { color: colors.textSecondary }]}>{t.step3of3}</Text>
          <Text style={[styles.headerTitle, { color: colors.text }]}>{t.roleLabel}</Text>
        </View>
        <ThemeToggle />
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.breadcrumbRow}>
            <View style={[styles.breadcrumb, { backgroundColor: colors.surface }]}>
              <Text style={styles.breadcrumbIcon}>{job.icon}</Text>
              <Text style={[styles.breadcrumbText, { color: colors.textSecondary }]}>
                {(job.name as any)[uiLanguage.split('-')[0]] ?? job.name.en}
              </Text>
            </View>
            <Text style={[styles.breadcrumbSep, { color: colors.textMuted }]}>›</Text>
            <View style={[styles.breadcrumb, { backgroundColor: colors.surface }]}>
              <Text style={styles.breadcrumbIcon}>{sector.icon}</Text>
              <Text style={[styles.breadcrumbText, { color: colors.textSecondary }]}>
                {(sector.name as any)[uiLanguage.split('-')[0]] ?? sector.name.en}
              </Text>
            </View>
          </View>

          <Text style={[styles.title, { color: colors.text }]}>
            {t.selectYourRole}
          </Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            {t.eachRoleHasVocab}
          </Text>
        </View>

        <View style={styles.list}>
          {roles.map((role) => {
            const itemCount = role.items.length;
            return (
              <View key={role.id}>
                <PressableCard
                  onPress={() => handleSelect(role.id)}
                  style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
                >
                  <View style={[styles.iconBox, { backgroundColor: Colors.primaryGlow + '18' }]}>
                    <Text style={styles.roleIcon}>{role.icon}</Text>
                  </View>
                  <View style={styles.cardText}>
                    <Text style={[styles.roleName, { color: colors.text }]}>
                      {(role.name as any)[uiLanguage.split('-')[0]] ?? role.name.en}
                    </Text>
                    <View style={styles.metaRow}>
                      <BookOpen size={13} color={colors.textSecondary} strokeWidth={2} />
                      <Text style={[styles.itemCount, { color: colors.textSecondary }]}>
                        {itemCount} {t.wordsToLearn}
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.startBtn, { backgroundColor: Colors.primaryGlow }]}>
                    <Text style={styles.startBtnText}>{t.start}</Text>
                  </View>
                </PressableCard>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
    gap: 12,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerLabel: {
    fontSize: FontSize.xs,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
  headerTitle: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-SemiBold',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  breadcrumbRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: Spacing.md,
    marginBottom: Spacing.md,
    flexWrap: 'wrap',
  },
  breadcrumb: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: Radius.full,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5,
  },
  breadcrumbIcon: { fontSize: 12 },
  breadcrumbText: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  breadcrumbSep: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  title: {
    fontSize: FontSize.xxl,
    fontFamily: 'Poppins-ExtraBold',
    letterSpacing: -0.5,
    lineHeight: 36,
  },
  subtitle: {
    fontSize: FontSize.md,
    fontFamily: 'Poppins-Regular',
    marginTop: Spacing.xs,
    marginBottom: Spacing.xl,
    lineHeight: 22,
  },
  list: { gap: 12 },
  card: {
    borderRadius: Radius.xl,
    borderWidth: 1.5,
    padding: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleIcon: { fontSize: 26 },
  cardText: { flex: 1 },
  roleName: {
    fontSize: FontSize.lg,
    fontFamily: 'Poppins-SemiBold',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  itemCount: {
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-Regular',
  },
  startBtn: {
    borderRadius: Radius.full,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  startBtnText: {
    color: '#0B1A08',
    fontSize: FontSize.sm,
    fontFamily: 'Poppins-SemiBold',
  },
});
