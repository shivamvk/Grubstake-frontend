import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div
        className={`lds-dual-ring ${
          props.margin ? "spinner__margin-" + props.margin : null
        }`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
