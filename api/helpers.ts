import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export async function safeParse(res: Response) {
  try {
    const json = await res.json();
    return json.message || JSON.stringify(json);
  } catch {
    return res.statusText;
  }
}

export async function getToken(): Promise<string | null> {
  if (Platform.OS === 'web') return null; // Web fallback
  return await SecureStore.getItemAsync('token');
}

export async function setToken(token: string) {
  if (Platform.OS === 'web') return;
  await SecureStore.setItemAsync('token', token);
}

export async function removeToken() {
  if (Platform.OS === 'web') return;
  await SecureStore.deleteItemAsync('token');
}