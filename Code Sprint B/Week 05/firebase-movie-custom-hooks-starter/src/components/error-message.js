import React from "react";
import "./error-message.css";

function ErrorMessage(props) {
  const { children, displayAsCard = false, className, ...otherProps } = props;
  const classes =
    "error-message" + (displayAsCard ? " error-message--card" : "") + (className ? className : "");
  return (
    <p className={classes} {...otherProps}>
      {children}
    </p>
  );
}

export default ErrorMessage;
