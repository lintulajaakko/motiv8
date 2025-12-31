import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ColorValue, View } from "react-native";


type GradientCardProps = {
    className?: string;
    colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
    children?: React.ReactNode;
};

export default function GradientCard({ children, colors, className }: GradientCardProps) {
   const innerRadius = 13;
   const outerRadius = 14;

    return (
        <View className={`overflow-hidden ${className}`} style={{ borderRadius: outerRadius }} >
            <LinearGradient className="flex-row" end={{ x: 1, y: 0 }} colors={colors || ["#00C9FF", "#92FE9D"]} style={{ padding: 1 }}>
                <View className="h-full flex-1 bg-slate-800/95 p-6" style={{ borderRadius: innerRadius }}>
                    <View>
                        {children}  
                    </View>
                </View>
            </LinearGradient>
        
        </View>
    );
}