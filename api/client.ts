import { ApiError, getToken, setToken } from "./helpers";

const BASE_URL = process.env.DB_URL_ANDROID || "http://localhost:8080";

type ApiOptions = RequestInit & {
  auth?: boolean;
};

export async function api(
  path: string,
  { auth = true, headers, ...options }: ApiOptions = {}
) {

  //get token if auth is required
  const token = auth ? await getToken() : null;

  //call api
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  });

  if (res.status === 204) return null;

  const data = await res.json();

  if(data.token) await setToken(data.token);

  if (!res.ok) throw new ApiError(res.status, data);

  return data;
}