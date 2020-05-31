import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={`btn-${props.variant} btn-${props.width}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
