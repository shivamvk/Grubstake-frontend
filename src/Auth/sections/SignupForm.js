import React, { useContext } from "react";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_FIXLENGTH,
} from "../../shared/util/validator";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext} from "../../shared/context/auth-context";

import './form.scss';

const SignupForm = (props) => {
  const auth = useContext(AuthContext);

  const [formState, inputHandler] = useForm({
    name: {
      value: "",
      isValid: false,
    },
    email: {
      value: "",
      isValid: false,
    },
    mobile: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    }
  },false);

  const formSubmitHandler = event => {
    event.preventDefault();
    if(formState.isValid){
      console.log(formState.inputs);
      auth.login();
    } else {
      console.log("invalid inputs");
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Input
        id="name"
        element="input"
        type="text"
        label="Name"
        placeholder="Enter your name"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name."
      />
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
        id="mobile"
        element="input"
        type="number"
        label="Mobile"
        placeholder="Enter your mobile number"
        onInput={inputHandler}
        validators={[VALIDATOR_FIXLENGTH(10)]}
        errorText="Please enter a valid mobile number (10 digits only)."
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
      <br/><br/>
      <Button variant="main" width="max" type="submit">
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
