import React, { useCallback, useState } from "react";
import AuthService from "../service/authService";
import { useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthContextInterface {
  username: string;
  token: string;
  id: string;
  signUp: ((username: string, password: string) => Promise<void>) | null;
  signIn: ((username: string, password: string) => Promise<void>) | null;
  signOut: (() => Promise<void>) | null;
}

export const authContextDefaults: AuthContextInterface = {
  username: "genie",
  token: "",
  id: "",
  signUp: null,
  signIn: null,
  signOut: null,
};

const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefaults);

interface AuthProviderProps {
  authService: AuthService;
  authErrorEventBus: AuthErrorEventBus;
  children?: React.ReactNode;
}

export function AuthProvider({
  authService,
  authErrorEventBus,
  children,
}: AuthProviderProps) {
  const [username, setUsername] = useState("genie");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    authErrorEventBus.listen((err: any) => {
      //if authentication error occurs, set context value as default and display login page
      console.log(err);
      setUsername("genie");
      setToken("");
      setId("");
      authContextDefaults.username = "genie";
      authContextDefaults.token = "";
      authContextDefaults.id = "";
      navigate("/signin");
    });
  }, [authErrorEventBus]);

  const signUp = useCallback(
    async (username: string, password: string) =>
      authService.signup(username, password).then((data) => {
        const { username, token, id } = data;
        setUsername(username);
        setToken(token);
        setId(id);
        authContextDefaults.username = username;
        authContextDefaults.token = token;
        authContextDefaults.id = id;
      }),
    [authService]
  );

  const signIn = useCallback(
    async (username: string, password: string) =>
      authService.signin(username, password).then((data) => {
        const { username, token, id } = data;
        setUsername(username);
        setToken(token);
        setId(id);
        authContextDefaults.username = username;
        authContextDefaults.token = token;
        authContextDefaults.id = id;
      }),
    [authService]
  );

  const signOut = useCallback(
    async () =>
      authService.logout().then(() => {
        setUsername("genie");
        setToken("");
        authContextDefaults.username = "genie";
        authContextDefaults.token = "";
        navigate("/");
      }),
    [authService, navigate]
  );

  const context = useMemo(
    () => ({
      username,
      token,
      id,
      signUp,
      signIn,
      signOut,
    }),
    [username, token, signUp, signIn, signOut]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

export class AuthErrorEventBus {
  callback: ((error: any) => void) | undefined;
  listen(callback: (error: any) => void) {
    this.callback = callback;
  }
  notify(error: any) {
    this.callback && this.callback(error);
  }
}

export default AuthContext;
// export const fetchToken = () => tokenRef.current;
// export const fetchCsrfToken = () => csrfRef.current;
export const useAuth = () => useContext(AuthContext);
