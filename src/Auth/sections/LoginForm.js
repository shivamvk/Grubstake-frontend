import React, { useContext } from "react";
import Input from "../../shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validator";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";

import "./form.scss";

const SignupForm = (props) => {
  const auth = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
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

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (formState.isValid) {
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/auth/email/login`,
          "POST",
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            "Content-Type": "application/json",
          }
        );
        console.log(data);
        if (data) {
          auth.login(
            data.data.token,
            data.data.id,
            data.data.name,
            data.data.email
          );
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      error.setErrorMessage("Invalid inputs");
    }
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner margin="md" />
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          right: "2rem",
          zIndex: "100",
        }}
      >
        <ErrorToast onClose={clearError} errorMessage={error.message} />
      </div>
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
    </>
  );
};

export default SignupForm;
