import tailwindConfig from "@/tailwind.config";
import React from "react";
import { TextInput, View, TextInputProps } from "react-native";

const colors = tailwindConfig.theme?.extend?.colors as any;

//inherit TextInput props

type ThemedInputProps = TextInputProps & {
    icon?: React.ReactNode;
};

export default function ThemedInput( props: ThemedInputProps) {
    const { icon, className, placeholder, secureTextEntry, value, onChangeText, ...rest } = props;
    return (
        <View className={`relative ${className}`}>
            {icon && <View className="absolute left-3 top-1/2 -translate-y-1/2">{icon}</View>}
            <TextInput
                className={'rounded-sm p-3 bg-slate-900/50  text-neutral-950 ' + (icon ? 'ps-12' : 'ps-3')}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={{ fontFamily: 'Jersey10-Regular', fontSize: 20 }}
                placeholderTextColor={colors.neutral[400]}
                secureTextEntry={secureTextEntry}
            />
        </View>

    );
}