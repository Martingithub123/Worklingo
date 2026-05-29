import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Linking, Alert,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import { getStrings } from '@/constants/i18n';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import {
  ChevronLeft, ChevronRight, User, Star,
  Globe, FileText, Mail, LogOut, Smartphone,
} from 'lucide-react-native';

const APP_VERSION = '1.0.0';
const SUPPORT_EMAIL = 'support@fluentbee.app';

export default function SettingsScreen() {
  const { uiLanguage, colors } = useApp();
  const { user, signOut } = useAuth();
  const t = getStrings(uiLanguage);

  const displayName = user?.user_metadata?.full_name ?? user?.email?.split('@')[0] ?? '—';
  const displayEmail = user?.email ?? '—';
  const initials = displayName
    .split(' ')
    .map((w: string) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  const handleSignOut = () => {
    Alert.alert(
      t.signOut,
      '',
      [
        { text: t.back, style: 'cancel' },
        {
          text: t.signOut,
          style: 'destructive',
          onPress: async () => {
            await signOut();
            router.replace('/welcome' as any);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.backBtn, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>{t.settings}</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Avatar + name */}
        <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
          <View style={[styles.avatar, { backgroundColor: Colors.primaryGlow + '33' }]}>
            <Text style={styles.avatarText}>{initials || '?'}</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.text }]} numberOfLines={1}>
              {displayName}
            </Text>
            <Text style={[styles.profileEmail, { color: colors.textSecondary }]} numberOfLines={1}>
              {displayEmail}
            </Text>
          </View>
        </View>

        {/* Profile section */}
        <SectionLabel label={t.profileSection} colors={colors} />
        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
          <SettingsRow
            icon={<User size={18} color={Colors.primaryGlow} strokeWidth={2} />}
            label={displayName}
            sublabel={displayEmail}
            colors={colors}
            last
          />
        </View>

        {/* Subscription */}
        <SectionLabel label={t.subscription} colors={colors} />
        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
          <SettingsRow
            icon={<Star size={18} color="#F39C12" strokeWidth={2} fill="#F39C12" />}
            label={t.freePlan}
            badge="FREE"
            colors={colors}
            last
          />
        </View>

        {/* Preferences */}
        <SectionLabel label={t.changeNativeLanguage} colors={colors} />
        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
          <SettingsRow
            icon={<Globe size={18} color="#1CB0F6" strokeWidth={2} />}
            label={t.changeNativeLanguage}
            onPress={() => router.push('/ui-language' as any)}
            colors={colors}
            last
          />
        </View>

        {/* App */}
        <SectionLabel label="App" colors={colors} />
        <View style={[styles.group, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
          <SettingsRow
            icon={<Smartphone size={18} color={colors.textSecondary} strokeWidth={2} />}
            label={t.appVersion}
            sublabel={APP_VERSION}
            colors={colors}
          />
          <SettingsRow
            icon={<FileText size={18} color={colors.textSecondary} strokeWidth={2} />}
            label={t.termsConditions}
            onPress={() => router.push('/terms' as any)}
            colors={colors}
          />
          <SettingsRow
            icon={<Mail size={18} color={colors.textSecondary} strokeWidth={2} />}
            label={t.contactSupport}
            onPress={() => Linking.openURL(`mailto:${SUPPORT_EMAIL}`)}
            colors={colors}
            last
          />
        </View>

        {/* Sign out */}
        <TouchableOpacity
          style={[styles.signOutBtn, { backgroundColor: '#FF3B3022', borderColor: '#FF3B3044' }]}
          onPress={handleSignOut}
          activeOpacity={0.8}
        >
          <LogOut size={18} color="#FF3B30" strokeWidth={2} />
          <Text style={styles.signOutText}>{t.signOut}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionLabel({ label, colors }: { label: string; colors: any }) {
  return (
    <Text style={[styles.sectionLabel, { color: colors.textSecondary }]}>
      {label.toUpperCase()}
    </Text>
  );
}

interface RowProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  badge?: string;
  onPress?: () => void;
  colors: any;
  last?: boolean;
}

function SettingsRow({ icon, label, sublabel, badge, onPress, colors, last }: RowProps) {
  const Inner = (
    <View style={[styles.row, !last && { borderBottomWidth: 1, borderBottomColor: colors.cardBorder }]}>
      <View style={[styles.rowIconWrap, { backgroundColor: colors.surface }]}>{icon}</View>
      <View style={styles.rowBody}>
        <Text style={[styles.rowLabel, { color: colors.text }]}>{label}</Text>
        {sublabel ? (
          <Text style={[styles.rowSublabel, { color: colors.textSecondary }]}>{sublabel}</Text>
        ) : null}
      </View>
      {badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : onPress ? (
        <ChevronRight size={16} color={colors.textSecondary} strokeWidth={2} />
      ) : null}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.75}>
        {Inner}
      </TouchableOpacity>
    );
  }
  return Inner;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: Spacing.lg, paddingTop: Spacing.md, paddingBottom: Spacing.sm,
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 19,
    alignItems: 'center', justifyContent: 'center',
  },
  headerTitle: {
    flex: 1, textAlign: 'center',
    fontSize: FontSize.lg, fontFamily: 'Poppins-Bold',
  },
  headerSpacer: { width: 38 },

  scroll: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.xxl,
    gap: 8,
  },

  profileCard: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    borderRadius: Radius.xl, borderWidth: 1.5,
    padding: Spacing.md, marginBottom: 8,
  },
  avatar: {
    width: 56, height: 56, borderRadius: 28,
    alignItems: 'center', justifyContent: 'center',
  },
  avatarText: {
    fontSize: 22, fontFamily: 'Poppins-ExtraBold', color: Colors.primaryGlow,
  },
  profileInfo: { flex: 1 },
  profileName: { fontSize: FontSize.md, fontFamily: 'Poppins-Bold' },
  profileEmail: { fontSize: 12, fontFamily: 'Poppins-Regular', marginTop: 2 },

  sectionLabel: {
    fontSize: 10, fontFamily: 'Poppins-Bold', letterSpacing: 1.2,
    paddingHorizontal: 4, marginTop: 8, marginBottom: 4,
  },

  group: {
    borderRadius: Radius.xl, borderWidth: 1.5, overflow: 'hidden',
  },

  row: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    paddingHorizontal: Spacing.md, paddingVertical: 14,
  },
  rowIconWrap: {
    width: 34, height: 34, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center',
  },
  rowBody: { flex: 1 },
  rowLabel: { fontSize: FontSize.sm, fontFamily: 'Poppins-SemiBold' },
  rowSublabel: { fontSize: 11, fontFamily: 'Poppins-Regular', marginTop: 1 },

  badge: {
    backgroundColor: Colors.primaryGlow + '33',
    borderRadius: Radius.full,
    paddingHorizontal: 10, paddingVertical: 3,
  },
  badgeText: {
    fontSize: 10, fontFamily: 'Poppins-Bold', color: Colors.primaryGlow, letterSpacing: 0.5,
  },

  signOutBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10,
    borderRadius: Radius.xl, borderWidth: 1.5,
    paddingVertical: 16, marginTop: 12,
  },
  signOutText: {
    fontSize: FontSize.md, fontFamily: 'Poppins-Bold', color: '#FF3B30',
  },
});
