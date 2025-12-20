import React from "react";
import { View, ViewProps, Button, Pressable } from "react-native";
import ThemedText from "./themed-text";
import { Ionicons } from "@expo/vector-icons";

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
    /** Optional icon for title */
    titleIcon?: React.ReactNode;
};

/**
 * Reusable container with default styling. Accepts `children`, `className`,
 * and any `View` props (including `style`).
 */
export default function Card({ children, className = "", title = "Placeholder", titleIcon, buttonTitle = "Placeholder", onPress, style, ...rest }: CardProps) {
    const classes = `rounded-lg bg-neutral-50 border border-neutral-200 shadow-sm ${className}`.trim();

    //only render button if onPress is provided
    const renderButton = onPress ? (
        <View className="border-t border-neutral-200 p-4 flex flex-row justify-end">
            <Pressable onPress={onPress} className="bg-brand-800 text-brand-50 px-3 py-1 rounded-md">
                <ThemedText className="text-brand-50">{buttonTitle}</ThemedText>
            </Pressable>
        </View>

    ) : null;

    return (
        <View className={classes}>
            <View className="border-b border-neutral-200 p-5 font-semibold flex flex-row justify-between items-center">
                {titleIcon}
                <ThemedText className="text-neutral-950">{title}</ThemedText>
            </View>
            <View className="p-4" style={style} {...rest}>
                {children}
            </View>
            {renderButton}
        </View>

    );
}