import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AuthErrorEventBus, AuthProvider } from "./context/authProvider";
import HttpClient from "./network/http";
import AuthService from "./service/authService";
import MyGenieService from "./service/genieService";
import TokenStorage from "./db/token";

// console.log(process.env.REACT_APP_BASE_URL);
const baseURL = process.env.REACT_APP_BASE_URL || "";
const authErrorEventBus = new AuthErrorEventBus();
const tokenStorage = new TokenStorage();

const httpClient = new HttpClient(baseURL, authErrorEventBus);
const authService = new AuthService(httpClient, tokenStorage);
const genieService = new MyGenieService(httpClient, tokenStorage);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App genieService={genieService} authService={authService} />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
