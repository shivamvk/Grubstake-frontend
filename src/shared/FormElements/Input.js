import React, { useReducer, useEffect } from "react";

import { validate } from "../util/validator";
import "./Input.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "BLUR":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.value || "",
    isValid: props.isValid || false,
    isTouched: false,
  });
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validators: props.validators,
    });
  };

  const blurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={inputState.value}
        className={`${!inputState.isValid && inputState.isTouched? "error-border": null}`}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={blurHandler}
        value={inputState.value}
      />
    );

  return (
    <>
      <label htmlFor={props.id}>
        {element}
        <span>{props.label}</span>
      </label>
      {!inputState.isValid && inputState.isTouched ? (
        <p>{props.errorText}</p>
      ) : null}
    </>
  );
};

export default Input;
