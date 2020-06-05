import React, { useState } from "react";

import "./ToggleSwitch.scss";
import Row from "react-bootstrap/Row";

const ToggleSwitch = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const checkedWrapperClickHandler = () => {
    props.onChange(true);
    setChecked(true);
  };
  const uncheckedWrapperClickHandler = () => {
    props.onChange(false);
    setChecked(false);
  };
  return (
    <Row className={`toggle-switch__wrapper ${props.className}`}>
      <div
        onClick={uncheckedWrapperClickHandler}
        className={`toggle-switch__span_wrapper toggle-switch__margin-right ${
          checked ? null : "toggle-switch__checked"
        }`}
      >
        {props.uncheckedText}
      </div>
      <div
        onClick={checkedWrapperClickHandler}
        className={`toggle-switch__span_wrapper ${
          checked ? "toggle-switch__checked" : null
        }`}
      >
        {props.checkedText}
      </div>
    </Row>
  );
};

export default ToggleSwitch;
