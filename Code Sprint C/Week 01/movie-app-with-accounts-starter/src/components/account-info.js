import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./account-info.css";

function AccountInfo(props) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    // TODO: Sign in!
    setIsLoading(false);
  };

  const signOut = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    // TODO: Sign out!
    setIsLoading(false);
  };

  let contents = <p>TODO: display log in / log out here.</p>;

  return (
    <div className="account-container">
      <h1>Account Info</h1>
      <div className="login-form">
        <h2>Social Login</h2>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {contents}
      </div>
    </div>
  );
}

export default AccountInfo;
