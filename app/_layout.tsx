import "../global.css";
import tailwindConfig from "../tailwind.config"

import { Stack } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts } from 'expo-font';
import ThemedToast from "@/components/toast";
import { useEffect, useState } from "react";
import { getToken } from "@/api/helpers";
import ThemedText from "@/components/themed-text";

export default function RootLayout() {

  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  const [fontsLoaded] = useFonts({
    'Jersey10-Regular': require('../assets/fonts/Jersey10_Regular/Jersey10-Regular.ttf'),
  });


  const colors = tailwindConfig.theme?.extend?.colors as any;

  const primaryColor = colors.brand[500];
  const accentColor = colors.brand[800];
  const tabBarBg = colors.brand[50];
  const headerBg = colors.neutral[0];

  useEffect(() => {
    async function checkToken() {
      const token = await getToken();
      setIsLoggedIn(!!token);
    }
    checkToken();
  }, [])

  if(!fontsLoaded || isLoggedIn === null) {
    return <ThemedText>Loading...</ThemedText>
  }


  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: 'transparent' }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} >
        <LinearGradient
          colors={[
            '#0a0a1f', '#1b1a3a', '#24206a', '#1b1a3a', '#0a0a1f'
          ]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />

        <Stack screenOptions={{headerShown: false, contentStyle: { backgroundColor: 'transparent' }}}>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="auth/login"/>
            <Stack.Screen name="auth/register" />
          </Stack.Protected>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="tabs/index" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack>
        
    
        <ThemedToast />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
