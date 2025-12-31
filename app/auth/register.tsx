import { authApi } from "@/api/auth";
import ThemedText from "@/components/themed-text";
import ThemedButton from "@/components/themedButton";
import ThemedInput from "@/components/themedInput";
import { useState } from "react";
import { View } from "react-native";
import { showToast } from "@/components/toast";
import GradientCard from "@/components/gradientCard";
import tailwindConfig from "@/tailwind.config";
import { Ionicons } from "@expo/vector-icons";

const colors = tailwindConfig.theme?.extend?.colors as any;

export default function RegisterTab() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const handleRegister = async () => {
        // Handle register logic here
        console.log("Register button pressed");
        try {
            const user = await authApi.register({
                username: username,
                email: email,
                password: password
            });
            showToast({ alertType: 'success', text1: 'Registration Successful', text2: 'You can now log in.' });
            console.log("Registered user:", user);  
        } catch (error) {
            console.error("Registration failed:", error);
            showToast({ alertType: 'error', text1: 'Registration Failed', text2: 'Please try again.' });
        }
    }

    return (
        <View className="flex-1 p-6 align-center justify-center">
            <GradientCard colors={["#06b6d4", colors.brand[800]]} >
                <ThemedText className="text-5xl text-center mb-4 text-brand-800">Start Your Adventure!</ThemedText>
                <ThemedText className="text-subtext-color text-center mb-6">Please register to continue</ThemedText>
                <ThemedInput placeholder="Username" icon={<Ionicons name="person-outline" color={"cyan"} size={20} />} value={username} onChangeText={setUsername} className="mb-4"/>
                <ThemedInput placeholder="Email" inputMode="email" icon={<Ionicons name="mail-outline" color={"cyan"} size={20} />} value={email} onChangeText={setEmail} className="mb-4"/>
                <ThemedInput placeholder="Password" secureTextEntry={true} icon={<Ionicons name="lock-closed-outline" color={"cyan"} size={20} />} value={password} onChangeText={setPassword} className="mb-4" />
                <ThemedInput placeholder="Confirm Password" secureTextEntry={true} icon={<Ionicons name="lock-closed-outline" color={"cyan"} size={20} />} className="mb-8"/>
                <ThemedButton onPress={handleRegister} text="Register" />
            </GradientCard>
        </View>
    );
}