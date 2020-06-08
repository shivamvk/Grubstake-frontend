import React from "react";
import Input from "../../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validator";
import { useForm } from "../../../shared/hooks/form-hook";

const ProfileHomeForm = (props) => {
  const [formState, inputHandler] = useForm({
      name: {
          value: "",
          isValid: false
      },
      profession: {
          value: "",
          isValid: false
      }
  });

  return (
    <form>
      <Input
        id="name"
        element="input"
        type="text"
        label="Name"
        placeholder="Enter your name"
        value="test"
        isValid={true}
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid name."
      />
      <Input
        id="profession"
        element="input"
        type="text"
        label="Profession"
        placeholder="Enter your profession"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid profession."
      />
    </form>
  );
};

export default ProfileHomeForm;
