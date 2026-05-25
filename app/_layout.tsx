import { useEffect, useRef, ReactNode } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { Stack, useSegments, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { useFonts } from 'expo-font';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { AppProvider } from '@/context/AppContext';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { syncService } from '@/services/syncService';
import { dataService } from '@/services/dataService';
import { supabase } from '@/lib/supabase';

const PROTECTED_SEGMENTS = new Set([
  'settings',
]);

function AuthGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    const current = segments[0] as string | undefined;
    if (!user && current && PROTECTED_SEGMENTS.has(current)) {
      router.replace('/welcome' as any);
    }
  }, [user, loading, segments]);

  return <>{children}</>;
}

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins-ExtraBold': Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Fetch latest vocabulary from Supabase on startup (falls back to local bundle)
  useEffect(() => {
    dataService.init();
  }, []);

  // Sync offline progress queue whenever app comes back to foreground
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const sub = AppState.addEventListener('change', async (next: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && next === 'active') {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          syncService.flush();
        }
      }
      appState.current = next;
    });
    return () => sub.remove();
  }, []);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <AppProvider>
        <AuthGuard>
        <Stack screenOptions={{ headerShown: false, animation: 'fade' }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="welcome" options={{ animation: 'fade' }} />
          <Stack.Screen name="login" options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name="signup" options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name="ui-language" options={{ animation: 'fade' }} />
          <Stack.Screen name="referral" options={{ animation: 'fade' }} />
          <Stack.Screen name="language" options={{ animation: 'fade' }} />
          <Stack.Screen name="settings" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="terms" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="mode-select" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="learn" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="learn-lesson" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="jobs" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="sectors" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="roles" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="levels" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="training" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="quiz" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="result" options={{ animation: 'slide_from_right' }} />
          <Stack.Screen name="subscription" options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        </AuthGuard>
        <StatusBar style="light" />
      </AppProvider>
    </AuthProvider>
  );
}
