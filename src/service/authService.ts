import HttpClient from "../network/http";
import TokenStorage from "../db/token";

export default class AuthService {
  private http: HttpClient;
  private tokenStorage: TokenStorage;
  constructor(http: HttpClient, tokenStorage: TokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signup(username: string, password: string) {
    const data = await this.http.fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async signin(username: string, password: string) {
    const data = await this.http.fetch("/auth/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async me() {
    const token = this.tokenStorage.getToken();
    return this.http.fetch("/auth/me", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async logout() {
    this.tokenStorage.clearToken();
  }
}
