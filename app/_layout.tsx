import "../global.css";
import tailwindConfig from "../tailwind.config"
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';

import { Tabs } from "expo-router";
import { View, Platform, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import  { useFonts } from 'expo-font';
import ThemedToast from "@/components/toast"; 

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'Jersey10-Regular': require('../assets/fonts/Jersey10_Regular/Jersey10-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }

  const colors = tailwindConfig.theme?.extend?.colors as any;

  const primaryColor = colors.brand[500];
  const accentColor = colors.brand[800];
  const tabBarBg = colors.brand[50];
  const headerBg = colors.neutral[0];


  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: 'transparent' }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }} >
          <LinearGradient colors={["#020617", "#1e1b4b", "#020617"]} style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}/>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
         <Tabs 
            screenOptions={{
            tabBarStyle: { backgroundColor: tabBarBg, borderTopWidth: 0, height: 70, paddingBottom: 10, paddingTop: 10 },
            tabBarLabelStyle: { fontSize: 16, fontFamily: 'Jersey10-Regular' },
            tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />),
            tabBarInactiveTintColor: primaryColor,

            tabBarActiveTintColor: accentColor,
            headerShown: false,
          }}>
            <Tabs.Screen name="index" options={{ title: "Home", sceneStyle: { backgroundColor: 'transparent' } }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
          </Tabs>

          <ThemedToast />
          </ScrollView>
         
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
