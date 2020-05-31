import React, { useContext, useState } from "react";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";

import "./form.scss";
import { Redirect } from "react-router-dom";

const SignupForm = (props) => {
  const auth = useContext(AuthContext);
  const [redirect, setRedirect] = useState(null); 

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  if(redirect){
    return <Redirect to={redirect}/>
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      console.log(formState.inputs);
      auth.login();
      setRedirect("/intermediate/after-auth");
    } else {
      console.log("invalid inputs");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        id="email"
        element="input"
        type="email"
        label="Email"
        placeholder="Enter your email address"
        onInput={inputHandler}
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email address."
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        placeholder="Enter your password"
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid password (at least 6 characters)."
      />
      <br />
      <br />
      <Button variant="main" width="max" type="submit">
        Login
      </Button>
    </form>
  );
};

export default SignupForm;
