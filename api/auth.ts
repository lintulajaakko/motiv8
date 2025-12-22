import { api } from "./client";

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