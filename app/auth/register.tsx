import { authApi, MAuthRequest } from "@/api/auth";
import ThemedText from "@/components/themed-text";
import ThemedButton from "@/components/themedButton";
import ThemedInput from "@/components/themedInput";
import { useState } from "react";
import { View } from "react-native";
import { showToast } from "@/components/toast";
import GradientCard from "@/components/gradientCard";
import tailwindConfig from "@/tailwind.config";
import { Ionicons } from "@expo/vector-icons";
import { AuthRequest } from "expo-auth-session";

const colors = tailwindConfig.theme?.extend?.colors as any;

export default function RegisterTab() {

    const [data, setData] = useState<MAuthRequest>({
        email: "",
        password: "",
        username: ""
    });

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async () => {
        if (data.password !== confirmPassword) {
            showToast({ alertType: 'error', text1: 'Password Mismatch', text2: 'Please make sure your passwords match.' });
            return;
        }
        try {
            const user = await authApi.register(data);
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
                <ThemedInput placeholder="Username" icon={<Ionicons name="person-outline" color={"cyan"} size={20} />} value={data.username} onChangeText={(text) => setData({...data, username: text})} className="mb-4"/>
                <ThemedInput placeholder="Email" inputMode="email" icon={<Ionicons name="mail-outline" color={"cyan"} size={20} />} value={data.email} onChangeText={(text) => setData({...data, email: text})} className="mb-4"/>
                <ThemedInput placeholder="Password" secureTextEntry={true} icon={<Ionicons name="lock-closed-outline" color={"cyan"} size={20} />} value={data.password} onChangeText={(text) => setData({...data, password: text})} className="mb-4" />
                <ThemedInput placeholder="Confirm Password" secureTextEntry={true} icon={<Ionicons name="lock-closed-outline" color={"cyan"} size={20} />} className="mb-8" value={confirmPassword} onChangeText={setConfirmPassword}/>
                <ThemedButton onPress={handleRegister} text="Register" />
            </GradientCard>
        </View>
    );
}