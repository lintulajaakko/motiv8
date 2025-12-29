import { Platform } from "react-native";
import { ApiError, getToken, safeParse } from "./helpers";

const DEV_IP = '192-168.1.235';

const BASE_URL =
    Platform.OS === "web"
    ? "http://localhost:8080"
    : `http://${DEV_IP}:8080`;

type ApiOptions = RequestInit & {
  auth?: boolean;
};

export async function api(
  path: string,
  { auth = true, headers, ...options }: ApiOptions = {}
) {
  const token = auth ? await getToken() : null;

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  if (!res.ok) {
    const message = await safeParse(res);
    throw new ApiError(res.status, message);
  }

  if (res.status === 204) return null;

  return res.json();
}