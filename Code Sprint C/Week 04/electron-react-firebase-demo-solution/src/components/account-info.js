import React, { useState } from "react";
import ErrorMessage from "./error-message";
import { auth } from "../data/firebase";
import "./account-info.css";

function AccountInfo(props) {
  const { user } = props;
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await auth.createUserWithEmailAndPassword(username, password);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setErrorMessage(
          "That password is too weak. Please try a more secure password with at least 6 characters."
        );
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("That email isn't valid. Please try a valid email address.");
      } else if (error.code === "auth/operation-not-allowed") {
        setErrorMessage(
          "Password log in hasn't been enabled. If you are dev, make sure to enable it in your Firebase Console."
        );
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMessage("That email is already in use.");
      } else {
        setErrorMessage("Something went wrong. Please try logging in again.");
      }
      console.error(error);
    }
    setIsLoading(false);
  };

  const signIn = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await auth.signInWithEmailAndPassword(username, password);
    } catch (error) {
      if (error.code === "auth/user-disabled") {
        setErrorMessage("That account has been disabled.");
      } else if (error.code === "auth/user-not-found") {
        setErrorMessage("The email or password is incorrect.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("The email or password is incorrect.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("That email isn't valid. Please try a valid email address.");
      } else {
        setErrorMessage("Something went wrong. Please try logging in again.");
      }
      console.error(error);
    }
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      await auth.signOut();
    } catch (error) {
      setErrorMessage("Something went wrong. Please try logging out again.");
      console.error(error);
    }
    setIsLoading(false);
  };

  let contents;
  if (user) {
    contents = (
      <>
        <p>Welcome back! You can log out below.</p>
        <button className="login-form__button" onClick={signOut} disabled={isLoading}>
          {isLoading ? "Logging Out..." : "Log Out"}
        </button>
      </>
    );
  } else {
    contents = (
      <>
        <p>You can log in or create a new account below using your email address.</p>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <fieldset className="login-form__fieldset" disabled={isLoading}>
            <div className="login-form__controls">
              <label htmlFor="username">Email:</label>
              <input
                id="username"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="login-form__button" onClick={createAccount}>
              Create User
            </button>
            <button className="login-form__button" onClick={signIn}>
              Log In User
            </button>
          </fieldset>
        </form>
      </>
    );
  }

  return (
    <div className="account-container">
      <h1>Account Info</h1>
      <div className="login-container">
        <h2>Social Login</h2>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {contents}
      </div>
    </div>
  );
}

export default AccountInfo;
