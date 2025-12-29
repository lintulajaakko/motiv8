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
        <View className="overflow-hidden flex-1" style={{ borderRadius: outerRadius }}>
            <LinearGradient colors={colors || ["#00C9FF", "#92FE9D"]} style={{ padding: 1 }}>
                <View className={`bg-slate-800  ${className}`} style={{ borderRadius: innerRadius }}>
                    {children}
                </View>
            </LinearGradient>
        
        </View>
    );
}