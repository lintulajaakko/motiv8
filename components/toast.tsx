import Toast, { BaseToast } from "react-native-toast-message";
import { ViewStyle } from 'react-native';

import ThemedText from '@/components/themed-text';
import { View } from 'react-native';
import tailwindConfig from "@/tailwind.config";

const colors = tailwindConfig.theme?.extend?.colors as any;

const successBg = colors.success[600];
const errorBg = colors.error[400];
const warningBg = colors.warning[600];

const baseStyle: ViewStyle = {
  height: 60,
  width: '100%',
  padding: 40,
  justifyContent: 'center',
  alignItems: 'center',
};


const toastConfig = {
  success: ({ text1, text2, props }: { text1?: string; text2?: string; props?: any }) => (
    
    <View style={{ ...baseStyle, backgroundColor: successBg } as ViewStyle}>
      <BaseToast text1={text1} text2={text2}  />
      <ThemedText className='text-default-font font-bold text-2xl'>
        {text1}
      </ThemedText>
      <ThemedText className='text-default-background text-xl'>
        {text2}
      </ThemedText>
    </View>
    
  ),
  error: ({ text1, text2, props }: { text1?: string; text2?: string; props?: any }) => (
    <View style={{ ...baseStyle, backgroundColor: errorBg }}>
      <ThemedText className='text-default-font font-bold text-2xl'>
        {text1}
      </ThemedText>
      <ThemedText className='text-default-background text-xl'>
        {text2}
      </ThemedText>
    </View>
  ),
  warning: ({ text1, text2, props }: { text1?: string; text2?: string; props?: any }) => (
    <View style={{ ...baseStyle, backgroundColor: warningBg } as ViewStyle}>
      <ThemedText className='text-default-font font-bold text-2xl'>
        {text1}
      </ThemedText>
      <ThemedText className='text-default-background text-xl'>
        {text2}
      </ThemedText>
    </View>
  ),

};


type ToastParams = {
    alertType?: 'success'| 'error' | 'warning';
    text1: string;
    text2?: string;
    position?: 'top' | 'bottom';
};

export function showToast (params: ToastParams) {
  console.log("Showing toast:", params);
    Toast.show({
        type: params.alertType || 'info',
        text1: params.text1,
        text2: params.text2,
        position: params.position || 'top',
    });
}

export default function ThemedToast() {
  return <Toast config={toastConfig}/>;
}