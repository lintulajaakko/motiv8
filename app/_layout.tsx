import "../global.css";
import tailwindConfig from "../tailwind.config"
import { Ionicons } from '@expo/vector-icons';


import { Stack, Tabs } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import  { useFonts } from 'expo-font';



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
  const tabBarBg = colors.brand[50]
  const headerBg = colors.neutral[0]


  return (
    <View className="flex-1 p-safe">
      <Tabs screenOptions={{
        tabBarStyle: { backgroundColor: tabBarBg, paddingBottom: 5, paddingTop: 5, height: 65, borderTopWidth: 0 },
        tabBarLabelStyle: { fontSize: 16, fontFamily: 'Jersey10-Regular' },
        tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />),
        tabBarInactiveTintColor: primaryColor,

        tabBarActiveTintColor: accentColor,
        headerStyle: { backgroundColor: headerBg, borderBottomWidth: 0},
        headerTitleStyle: { color: accentColor, fontWeight: 'bold', fontFamily: 'Jersey10-Regular', fontSize: 30 },
        headerTintColor: primaryColor,
      }}>
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </View>
  );
}
