import React, { useState } from "react";
import Alert from "../../components/alert/alert";
import Header from "../../components/header/header";
import { useAuth } from "../../context/authProvider";
import styles from "./signIn.module.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [signup, setSignup] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [timeoutId, setTimeoutId] = useState<null | NodeJS.Timeout>(null);
  const { signUp, signIn } = useAuth();
  const navigate = useNavigate();

  const onAlert = (message: string) => {
    setAlertMsg(message);
    const timeoutId = setTimeout(() => setAlertMsg(""), 3000);
    setTimeoutId(timeoutId);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signup) {
      if (password === confirmPassword) {
        signUp &&
          signUp(username, password)
            .then(() => navigate("/genieworld"))
            .catch((err) => onAlert(err.message));
      } else {
        onAlert("Password is not match");
      }
    } else {
      signIn &&
        signIn(username, password)
          .then(() => navigate("/genieworld"))
          .catch((err) => {
            console.error(err);
            onAlert("Check username or password");
          });
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case "username":
        return setUsername(value);
      case "password":
        return setPassword(value);
      case "confirmPassword":
        return setConfirmPassword(value);
      case "email":
        return setEmail(value);
      case "signup":
        return setSignup(checked);
      default:
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <form className={styles.form} onSubmit={onSubmit}>
        {alertMsg && (
          <Alert
            alertMsg={alertMsg}
            warning={true}
            onClose={() => {
              timeoutId && clearTimeout(timeoutId);
              setAlertMsg("");
            }}
          />
        )}
        <div className={styles.itemContainer}>
          <label className={styles.label} htmlFor="username">
            Username
          </label>
          <input
            className={styles.input}
            value={username}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={onChange}
            required
          />
        </div>
        <div className={styles.itemContainer}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            required
          />
        </div>
        {signup && (
          <>
            <div className={styles.itemContainer}>
              <label className={styles.label} htmlFor="confirmPassword">
                Confirm password
              </label>
              <input
                className={styles.input}
                value={confirmPassword}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Conform password"
                onChange={onChange}
                required
              />
            </div>
            <div className={styles.itemContainer}>
              <label className={styles.label} htmlFor="password">
                email
              </label>
              <input
                className={styles.input}
                value={email}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={onChange}
                required
              />
            </div>
          </>
        )}

        <button type="submit" className={styles.submit}>
          {signup ? "Sing up" : "Sign in"}
        </button>

        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            id="signup"
            name="signup"
            onChange={onChange}
            checked={signup}
          />
          <label className={styles.checkboxLabel} htmlFor="signup">
            create new account
          </label>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
