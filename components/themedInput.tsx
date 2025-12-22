import { TextInput } from "react-native";



export default function ThemedInput({ className, placeholder, secureTextEntry, value, onChangeText }: { className?: string; placeholder?: string; secureTextEntry?: boolean; value?: string; onChangeText?: (text: string) => void }) {
    return (
        <TextInput 
            className={`border border-neutral-300 rounded-md p-2 text-neutral-900 bg-neutral-50 ${className}`} 
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            style={{ fontFamily: 'Jersey10-Regular', fontSize: 20 }}
            secureTextEntry={secureTextEntry} 
        />
    );
}