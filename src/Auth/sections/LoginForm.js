import React from "react";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_FIXLENGTH,
} from "../../shared/util/validator";
import Button from "react-bootstrap/Button";

import './form.scss';

const SignupForm = (props) => {
  return (
    <form>
      <Input
        id="email"
        element="input"
        type="email"
        label="Email"
        placeholder="Enter your email address"
        onInput={() => {}}
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid email address."
      />
      <Input
        id="password"
        element="input"
        type="password"
        label="Password"
        placeholder="Enter your password"
        onInput={() => {}}
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a valid password (at least 6 characters)."
      />
      <Button variant="primary" size="md">
        Login
      </Button>
    </form>
  );
};

export default SignupForm;
