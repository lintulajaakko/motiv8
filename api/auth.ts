import { api } from "./client";
import * as AuthSession from 'expo-auth-session';
import { discovery } from "expo-auth-session/build/providers/Google";
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'motiv8',
  path: 'oauth/callback',
});

export function useFusionAuth() {
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: '<FUSIONAUTH_CLIENT_ID>',
      redirectUri,
      responseType: 'code',
      scopes: ['openid', 'profile', 'email'],
    },
    discovery
  );

  return { request, response, promptAsync };
}

export const authApi = {
  login(email: string, password: string) {
    return api("/api/auth/login", {
      method: "POST",
      auth: false,
      body: JSON.stringify({ email, password }),
    });
  },

  register(data: any) {
    return api("/api/auth/register", {
      method: "POST",
      auth: false,
      body: JSON.stringify(data),
    });
  },
};