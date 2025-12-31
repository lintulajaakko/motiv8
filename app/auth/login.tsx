import Card from "@/components/card";
import GradientCard from "@/components/gradientCard";
import ThemedText from "@/components/themed-text";
import ThemedButton from "@/components/themedButton";
import ThemedInput from "@/components/themedInput";
import tailwindConfig from "@/tailwind.config";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Redirect, useFocusEffect, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

const colors = tailwindConfig.theme?.extend?.colors as any;

export default function LoginTab() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const router = useRouter();



    const handleLogin = () => {
        // Handle login logic here
        console.log("Login button pressed");
    }

    const handleRegisterNavigation = () => {
        console.log("Navigate to register");
        router.navigate("/auth/register");
    }


    return (
        <View className="flex-1 p-6 align-center justify-center">
            <GradientCard colors={["#06b6d4", colors.brand[800]]} >
                <ThemedText className="text-5xl text-center mb-6 text-brand-800">Continue Your Adventure!</ThemedText>
                
                <ThemedInput placeholder="Email" inputMode="email" icon={<Ionicons name="mail-outline" color={"cyan"} size={20} />} value={email} onChangeText={setEmail} className="mb-4"/>
                <ThemedInput placeholder="Password" secureTextEntry={true} icon={<Ionicons name="lock-closed-outline" color={"cyan"} size={20} />} value={password} onChangeText={setPassword} className="mb-8" />
                <ThemedButton onPress={handleLogin} text="Login"/>
                <Pressable  onPress={handleRegisterNavigation}>
                    <ThemedText className="text-center text-brand-800 mt-6 underline">Don't have an account? Register</ThemedText>
                </Pressable>
            </GradientCard>
        </View>
    );
}