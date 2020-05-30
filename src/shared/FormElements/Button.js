import React from "react";

import "./Button.css";

const Button = (props) => {
    let element;
  switch (props.variant) {
    case "main":
      element = <button type={props.type} disabled={props.disabled} className="btn-main">{props.children}</button>;
      break;
    default:
      element = <button type={props.type} disabled={props.disabled} className="btn-main">{props.children}</button>;
  }
  return element
};

export default Button;
