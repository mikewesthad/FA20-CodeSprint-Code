import React from "react";
import "./loading-spinner.css";

function LoadingSpinner(props) {
  const { size = "10rem" } = props;
  const loaderStyle = { width: size, height: size };
  return (
    <div className="loader" style={loaderStyle}>
      Loading...
    </div>
  );
}

export default LoadingSpinner;
