import { authApi, MAuthRequest } from "@/api/auth";
import Card from "@/components/card";
import GradientCard from "@/components/gradientCard";
import ThemedText from "@/components/themed-text";
import ThemedButton from "@/components/themedButton";
import ThemedInput from "@/components/themedInput";
import { showToast } from "@/components/toast";
import tailwindConfig from "@/tailwind.config";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Redirect, useFocusEffect, useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";

const colors = tailwindConfig.theme?.extend?.colors as any;

export default function LoginTab() {

    const [formData, setFormData] = useState<MAuthRequest>({
        email: "",
        password: "",
        username: ""
    });

    const router = useRouter();

    const handleLogin = async () => {

        try {
            const user = await authApi.login(formData);
            showToast({ alertType: 'success', text1: 'Login successful', text2: 'You can now log in.' });
            console.log("User:", user);
        } catch (error) {
            console.error("Login failed:", error);
            showToast({ alertType: 'error', text1: 'Login Failed', text2: 'Please try again.' });
        }
    }

    return (
        <View className="flex-1 p-6 align-center justify-center">
            <GradientCard colors={["#06b6d4", colors.brand[800]]} >
                <ThemedText className="text-5xl text-center mb-6 text-brand-800">Continue Your Adventure!</ThemedText>

                <ThemedInput placeholder="Email" inputMode="email" icon={<Ionicons name="mail-outline" color={"cyan"} size={20} />} value={formData.email} onChangeText={(value) => setFormData({...formData, email: value})} className="mb-4" />
                <ThemedInput placeholder="Password" secureTextEntry={true} icon={<Ionicons name="lock-closed-outline" color={"cyan"} size={20} />} value={formData.password} onChangeText={(value) => setFormData({...formData, password: value})} className="mb-8" />
                <ThemedButton onPress={handleLogin} text="Login" />
                <Pressable onPress={() => {router.navigate("/auth/register")}}>
                    <ThemedText className="text-center text-brand-800 mt-6 underline">Don't have an account? Register</ThemedText>
                </Pressable>
            </GradientCard>
        </View>
    );
}