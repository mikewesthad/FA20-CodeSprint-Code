import React from "react";
import "./loading-spinner.css";

function LoadingSpinner(props) {
  const {
    size = "10rem",
    spinnerColor = "#6224f5",
    backgroundColor = "rgba(98, 36, 245, 0.2)",
  } = props;

  const loaderStyle = {
    width: size,
    height: size,
    borderColor: backgroundColor,
    borderLeftColor: spinnerColor,
  };

  return (
    <div className="loader" style={loaderStyle}>
      Loading...
    </div>
  );
}

export default LoadingSpinner;
