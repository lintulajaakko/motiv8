import { api } from "./client";

export const usersApi = {
  me() {
    return api("/api/users/me");
  },

  update(data: any) {
    return api("/api/users/me", {
      method: "PUT",
      body: JSON.stringify(data),
    });
  },
};