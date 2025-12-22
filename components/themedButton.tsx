import { Pressable } from "react-native";
import ThemedText from "./themed-text";

export default function ThemedButton({ onPress, text }: { onPress?: () => void; text: String }) {
    return <Pressable className="bg-brand-primary rounded-md px-4 py-3 items-center" onPress={onPress}><ThemedText className="text-2xl">{text}</ThemedText></Pressable>;
}
