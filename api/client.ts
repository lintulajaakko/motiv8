import { Platform } from "react-native";
import { ApiError, getToken, safeParse } from "./helpers";

const BASE_URL = process.env.DB_URL || "http://192.168.1.235:8080";

type ApiOptions = RequestInit & {
  auth?: boolean;
};

export async function api(
  path: string,
  { auth = true, headers, ...options }: ApiOptions = {}
) {
  const token = auth ? await getToken() : null;

  //add console.log to see the full url being called
  console.log(`API Call: ${BASE_URL}${path}`);
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  //add console.log to see the response status
  console.log(`Response Status: ${res.status} for ${BASE_URL}${path}`);

  if (!res.ok) {
    const message = await safeParse(res);
    throw new ApiError(res.status, message);
  }

  if (res.status === 204) return null;

  return res.json();
}