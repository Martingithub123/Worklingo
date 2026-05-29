import { useRef, useEffect } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Animated,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useApp } from '@/context/AppContext';
import { Colors, Spacing, Radius, FontSize } from '@/constants/theme';
import { ChevronLeft, FileText } from 'lucide-react-native';

const LAST_UPDATED = 'May 14, 2025';

interface Section {
  title: string;
  body: string;
}

const SECTIONS: Section[] = [
  {
    title: '1. Acceptance of Terms',
    body:
      'By downloading, installing, or using FluentBee ("the App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App. These terms apply to all users of the App, including free and premium subscribers.',
  },
  {
    title: '2. Description of Service',
    body:
      'FluentBee is a language-learning application that provides vocabulary lessons, interactive quizzes, workplace language training, and progress tracking. We offer both a free tier and paid subscription plans. Features and content may change over time without prior notice.',
  },
  {
    title: '3. User Accounts',
    body:
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must provide accurate and complete information when creating an account. You must be at least 13 years old to use the App. Notify us immediately of any unauthorized use of your account.',
  },
  {
    title: '4. Subscriptions & Billing',
    body:
      'FluentBee offers a free plan with access to core features. Premium subscriptions provide access to additional content and features. Subscriptions are billed in advance on a recurring basis. You may cancel your subscription at any time. Refunds are handled in accordance with the policies of the App Store or Google Play.',
  },
  {
    title: '5. Intellectual Property',
    body:
      'All content in the App — including text, graphics, audio, video, software, and curriculum — is owned by FluentBee or its licensors and is protected by copyright, trademark, and other applicable laws. You may not copy, reproduce, distribute, or create derivative works without our express written permission.',
  },
  {
    title: '6. Acceptable Use',
    body:
      'You agree not to: (a) use the App for any unlawful purpose; (b) attempt to gain unauthorized access to any part of the App or its systems; (c) transmit any harmful, offensive, or disruptive content; (d) use automated tools to scrape or extract content from the App; (e) reverse-engineer or decompile any part of the App.',
  },
  {
    title: '7. Privacy Policy',
    body:
      'Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Our Privacy Policy explains how we collect, use, and protect your personal data. By using the App, you consent to the data practices described in our Privacy Policy.',
  },
  {
    title: '8. User-Generated Content',
    body:
      'If the App allows you to submit or share content, you grant FluentBee a non-exclusive, worldwide, royalty-free license to use, display, and distribute that content within the App. You represent that you have the right to submit such content and that it does not violate any third-party rights.',
  },
  {
    title: '9. Disclaimer of Warranties',
    body:
      'The App is provided "as is" and "as available" without warranties of any kind, express or implied. FluentBee does not warrant that the App will be uninterrupted, error-free, or free of viruses. We do not guarantee any specific learning outcomes or language proficiency levels.',
  },
  {
    title: '10. Limitation of Liability',
    body:
      'To the fullest extent permitted by applicable law, FluentBee and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the App. Our total liability to you shall not exceed the amount you paid us in the 12 months preceding the claim.',
  },
  {
    title: '11. Termination',
    body:
      'We reserve the right to suspend or terminate your account at any time if you violate these Terms. Upon termination, your right to use the App will immediately cease. You may also terminate your account at any time through the App settings or by contacting our support team.',
  },
  {
    title: '12. Changes to These Terms',
    body:
      'We may update these Terms from time to time. We will notify you of significant changes by posting the new Terms in the App or via email. Your continued use of the App after changes become effective constitutes your acceptance of the revised Terms.',
  },
  {
    title: '13. Governing Law',
    body:
      'These Terms are governed by and construed in accordance with applicable laws. Any disputes arising under these Terms shall be resolved through binding arbitration or in the courts of competent jurisdiction, as determined by applicable law.',
  },
  {
    title: '14. Contact Us',
    body:
      'If you have questions about these Terms and Conditions, please contact us at support@fluentbee.app. We aim to respond to all inquiries within 5 business days.',
  },
];

export default function TermsScreen() {
  const { colors } = useApp();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, { toValue: 1, duration: 400, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { borderBottomColor: colors.cardBorder }]}>
        <TouchableOpacity
          style={[styles.backBtn, { backgroundColor: colors.surface }]}
          onPress={() => router.back()}
          activeOpacity={0.8}
        >
          <ChevronLeft size={20} color={colors.text} strokeWidth={2.5} />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <View style={[styles.headerIcon, { backgroundColor: Colors.primaryGlow + '22' }]}>
            <FileText size={16} color={Colors.primaryGlow} strokeWidth={2} />
          </View>
          <Text style={[styles.headerTitle, { color: colors.text }]}>Terms & Conditions</Text>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <Animated.ScrollView
        style={{ opacity: fadeAnim }}
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Intro banner */}
        <View style={[styles.banner, { backgroundColor: Colors.primaryGlow + '14', borderColor: Colors.primaryGlow + '33' }]}>
          <Text style={[styles.bannerTitle, { color: Colors.primaryGlow }]}>FluentBee</Text>
          <Text style={[styles.bannerSub, { color: colors.textSecondary }]}>
            Last updated: {LAST_UPDATED}
          </Text>
          <Text style={[styles.bannerBody, { color: colors.textSecondary }]}>
            Please read these Terms and Conditions carefully before using our App. They govern your use of FluentBee and outline your rights and obligations.
          </Text>
        </View>

        {/* Sections */}
        {SECTIONS.map((s, i) => (
          <View
            key={i}
            style={[styles.section, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
          >
            <Text style={[styles.sectionTitle, { color: colors.text }]}>{s.title}</Text>
            <Text style={[styles.sectionBody, { color: colors.textSecondary }]}>{s.body}</Text>
          </View>
        ))}

        {/* Footer */}
        <View style={[styles.footer, { borderTopColor: colors.cardBorder }]}>
          <Text style={[styles.footerText, { color: colors.textMuted }]}>
            © 2025 FluentBee. All rights reserved.
          </Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },

  header: {
    flexDirection: 'row', alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
  },
  backBtn: {
    width: 38, height: 38, borderRadius: 19,
    alignItems: 'center', justifyContent: 'center',
  },
  headerCenter: {
    flex: 1, flexDirection: 'row', alignItems: 'center',
    justifyContent: 'center', gap: 8,
  },
  headerIcon: {
    width: 28, height: 28, borderRadius: 8,
    alignItems: 'center', justifyContent: 'center',
  },
  headerTitle: {
    fontSize: FontSize.md, fontFamily: 'Poppins-Bold',
  },
  headerSpacer: { width: 38 },

  scroll: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.lg,
    paddingBottom: 48,
    gap: 12,
  },

  banner: {
    borderRadius: Radius.xl, borderWidth: 1.5,
    padding: Spacing.lg, gap: 6, marginBottom: 4,
  },
  bannerTitle: {
    fontSize: FontSize.xl, fontFamily: 'Poppins-ExtraBold', letterSpacing: -0.3,
  },
  bannerSub: {
    fontSize: 11, fontFamily: 'Poppins-Regular',
  },
  bannerBody: {
    fontSize: 13, fontFamily: 'Poppins-Regular', lineHeight: 20, marginTop: 4,
  },

  section: {
    borderRadius: Radius.xl, borderWidth: 1.5,
    padding: Spacing.md, gap: 8,
  },
  sectionTitle: {
    fontSize: 13, fontFamily: 'Poppins-Bold', lineHeight: 18,
  },
  sectionBody: {
    fontSize: 12, fontFamily: 'Poppins-Regular', lineHeight: 19,
  },

  footer: {
    borderTopWidth: 1, paddingTop: Spacing.lg, alignItems: 'center',
  },
  footerText: {
    fontSize: 11, fontFamily: 'Poppins-Regular',
  },
});
