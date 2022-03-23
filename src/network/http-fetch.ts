import { AuthErrorEventBus } from "../context/authProvider";

export default class HttpClient {
  private baseURL: string;
  private authErrorEventBus: AuthErrorEventBus;
  constructor(baseURL: string, authErrorEventBus: AuthErrorEventBus) {
    this.baseURL = baseURL;
    this.authErrorEventBus = authErrorEventBus;
  }

  async fetch(url: string, options: any) {
    const response = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: { "Content-Type": "application/json", ...options.headers },
    });
    let data: any;
    try {
      data = await response.json();
    } catch (error) {
      console.error(error);
    }

    if (response.status > 299 || response.status < 200) {
      const message =
        data && data.message ? data.message : "something went wrong!";
      const error = new Error(message);
      if (response.status === 401) {
        this.authErrorEventBus.notify(error);
        return;
      }
      throw error;
    }
    return data;
  }
}
