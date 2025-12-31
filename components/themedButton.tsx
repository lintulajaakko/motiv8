import { ColorValue, Pressable, PressableProps, View } from "react-native";
import ThemedText from "./themed-text";
import { LinearGradient } from "expo-linear-gradient";
import tailwindConfig from "@/tailwind.config";

const twColors = tailwindConfig.theme?.extend?.colors as any;

type ThemedButtonProps = PressableProps & {
    text?: string;
    textColor?: string;
    icon?: React.ReactNode;
    colors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
};

export default function ThemedButton(props: ThemedButtonProps) {
    const { onPress, text, icon, colors, ...rest } = props;
    
    return (
        <LinearGradient colors={colors || [twColors.brand[800], "#06b6d4"]} start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} style={{ borderRadius: 8 }}>
            <Pressable className=" px-4 py-3 items-center" onPress={onPress} {...rest}>
                {icon && <View className="mb-2">{icon}</View>}
                <ThemedText className="text-2xl" >
                    {text}
                </ThemedText>
            </Pressable>
        </LinearGradient>

    );
}
