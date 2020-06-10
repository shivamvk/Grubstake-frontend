import React from "react";
import Input from "../../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validator";
import Button from "../../../shared/FormElements/Button";
import { useForm } from "../../../shared/hooks/form-hook";

const ProfileEditForm = (props) => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      profession: {
        value: "",
        isValid: false,
      },
      company: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      console.log("invalid inputs");
    } else {
      console.log(formState.inputs);
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
        value="Satyam Jaiswal"
        isValid={true}
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        id="profession"
        element="input"
        type="text"
        label="Profession"
        placeholder="Current job (Event Manager, PR Lead...)"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        id="company"
        element="input"
        type="text"
        label="Company"
        placeholder="Name of your company"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
      />
      <p className="text-align-left color-grey font-size-sm font-weight-light">
        This will show on your profile as Event Manager @ XYZ-Company
      </p>
      <br></br>
      <br></br>
      <Button variant="main" width="max">
        Save
      </Button>
    </form>
  );
};

export default ProfileEditForm;
