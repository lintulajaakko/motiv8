import { View } from "react-native";
import Card from "./card";
import ThemedText from "./themed-text";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

export default function PointsCard() {

    const [ todaysPoints, setTodaysPoints ] = useState(0);
    const [ monthlyPoints, setMonthlyPoints ] = useState(0);

    useEffect(() => {
        
        //Fetch point data and animate to the values

        let todaysTarget = 75;
        let monthlyTarget = 1200;

        let todaysInterval = setInterval(() => {
            setTodaysPoints((prev) => {
                if (prev < todaysTarget) {
                    return prev + 5;
                } else {
                    clearInterval(todaysInterval);
                    return prev;
                }
            });
        }, 50);

        let monthlyInterval = setInterval(() => {
            setMonthlyPoints((prev) => {
                if (prev < monthlyTarget) {
                    return prev + 20;
                } else {
                    clearInterval(monthlyInterval);
                    return prev;
                }
            });
        }, 50);

        return () => {
            clearInterval(todaysInterval);
            clearInterval(monthlyInterval);
        };
    }, []);


  return (
    <Card className="m-4" title="Points Summary" titleIcon={<Ionicons name="trophy" size={24} className="text-yellow-600 mr-2" />} >
      <View className="p-2">
        <View className="flex flex-row justify-between items-center mb-4">
          <View>
            <ThemedText className="text-default-font font-semibold text-lg">Today's Points</ThemedText>
            <ThemedText className="text-3xl font-bold text-brand-800">{todaysPoints}</ThemedText>
          </View>
          <View className="flex items-center justify-center">
            <ThemedText className="text-subtext-color">+15% from yesterday</ThemedText>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <View>
            <ThemedText className="text-default-font font-semibold text-lg">Monthly Points</ThemedText>
            <ThemedText className="text-3xl font-bold text-yellow-600">{monthlyPoints}</ThemedText>
          </View>
          <View className="flex items-center justify-center">
            <ThemedText className="text-subtext-color">+10% from last month</ThemedText>
          </View>
        </View>
      </View>
    </Card>
  );
}