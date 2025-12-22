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
  // Expo SecureStore or AsyncStorage
  return localStorage.getItem("token"); // web example
}