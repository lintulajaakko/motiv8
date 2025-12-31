import tailwindConfig from "@/tailwind.config";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const colors = tailwindConfig.theme?.extend?.colors as any;

const primaryColor = colors.brand[500];
const accentColor = colors.brand[800];
const tabBarBg = colors.brand[50];
const headerBg = colors.neutral[0];

export default function TabsLayout() {
    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: 'transparent' }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
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
                </Tabs>
            </SafeAreaView>
        </SafeAreaProvider>


    );
}