import { Text as RNText } from "react-native";



export default function ThemedText({ className, children }: { className?: string; children: React.ReactNode }) {
    return <RNText className={className} style={[{ fontFamily: "Jersey10-Regular", fontSize: 20 }]}> {children}</RNText>;
}