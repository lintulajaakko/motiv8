import Card from "@/components/card";
import ThemedText from "@/components/themed-text";
import ThemedButton from "@/components/themedButton";
import ThemedInput from "@/components/themedInput";
import { Pressable, View } from "react-native";

export default function LoginTab() {


    const handleLogin = () => {
        // Handle login logic here
        console.log("Login button pressed");
    }


    return (
        <View className="flex-1 justify-center items-center bg-neutral-0">
            <Card title="Login" className="w-11/12 max-w-md p-6">
                <ThemedText className="text-5xl font-bold text-center mb-4 text-brand-primary">Welcome Back!</ThemedText>
                <ThemedText className="text-subtext-color text-center mb-6">Please log in to continue</ThemedText>
                <ThemedInput placeholder="Email" />
                <View className="h-4" />
                <ThemedInput placeholder="Password" secureTextEntry={true} />
                <View className="h-6" />
                <ThemedButton onPress={handleLogin} text="Login" />
            </Card>
        </View>
    );
}