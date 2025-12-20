import React from "react";
import { View, ViewProps, Button, Pressable } from "react-native";
import ThemedText from "./themed-text";

export type CardProps = ViewProps & {
    /** Extra Tailwind class names to apply */
    className?: string;
    /** Card content */
    children?: React.ReactNode;
    /** Card title */
    title?: React.ReactNode;
    /** Button title */
    buttonTitle?: string;
    /** Button onPress handler */
    onPress?: () => void;
};

/**
 * Reusable container with default styling. Accepts `children`, `className`,
 * and any `View` props (including `style`).
 */
export default function Card({ children, className = "", title = "Placeholder", buttonTitle = "Placeholder", onPress, style, ...rest }: CardProps) {
    const classes = `rounded-lg bg-neutral-50 border border-neutral-200 shadow-sm ${className}`.trim();

    return (
        <View className={classes}>
            <View className="border-b border-neutral-200 p-5 font-semibold flex flex-row justify-between items-center">
                <ThemedText className="text-neutral-950">{title}</ThemedText>
                <Pressable onPress={onPress} className="bg-brand-800 text-brand-50 px-3 py-1 rounded-md">
                    <ThemedText className="text-brand-50">{buttonTitle}</ThemedText>
                </Pressable>
            </View>
            <View className="p-4" style={style} {...rest}>
                {children}
            </View>
        </View>

    );
}