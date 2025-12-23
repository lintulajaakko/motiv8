import Card from "@/components/card";
import { useState } from "react";
import { View, ScrollView } from "react-native";
import { User } from "@/consts/types";
import { Ionicons } from "@expo/vector-icons";
import ThemedText from "@/components/themed-text";
import PointsCard from "@/components/pointsCard";


export default function ProfileTab() {
    const [user, setUser] = useState<User | null>({
        id: "1",
        username: "johndoe",
        email: "johndoe@example.fi",
    });


    return (
        <ScrollView className="w-full flex-1 p-safe bg-white dark:bg-black">
            <Card className="mx-4 my-0 mb-4" title={user?.username || "Guest"} titleIcon={<Ionicons name="person-circle-outline" size={24} className="text-brand-primary" />}>
                <View className="mb-2 flex flex-row items-center">
                    <Ionicons name="mail-outline" size={20} className="text-brand-primary mr-2" />
                    <ThemedText className="text-lg font-medium mr-2 text-default-font">{user?.email || "-"}</ThemedText>
                
                </View>
            </Card>
            
            <PointsCard />


        </ScrollView>
    );
}