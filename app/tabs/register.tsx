import { authApi } from "@/api/auth";
import Card from "@/components/card";
import ThemedText from "@/components/themed-text";
import ThemedButton from "@/components/themedButton";
import ThemedInput from "@/components/themedInput";
import { useState } from "react";
import { View } from "react-native";
import { showToast } from "@/components/toast";



export default function RegisterTab() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        // Handle register logic here
        console.log("Register button pressed");
        try {
            const user = await authApi.register({
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
        <View className="flex-1 justify-center items-center bg-neutral-0">
            <Card title="Register" className="w-11/12 max-w-md p-6">
                <ThemedText className="text-5xl font-bold text-center mb-4 text-brand-primary">Create Account</ThemedText>
                <ThemedText className="text-subtext-color text-center mb-6">Please register to continue</ThemedText>
                <ThemedInput placeholder="Email" value={email} onChangeText={setEmail} />
                <View className="h-4" />
                <ThemedInput placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
                <View className="h-6" />
                <ThemedButton onPress={handleRegister} text="Register" />
            </Card>
        </View>
    );
}