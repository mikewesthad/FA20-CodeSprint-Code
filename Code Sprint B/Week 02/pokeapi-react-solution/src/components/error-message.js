import React from "react";
import "./error-message.css";

function ErrorMessage(props) {
  const { children } = props;
  return <p className="error-message">{children}</p>;
}

export default ErrorMessage;
