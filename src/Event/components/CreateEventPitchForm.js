import React from "react";
import { VALIDATOR_MINLENGTH } from "../../shared/util/validator";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { useHistory } from "react-router-dom";

const CreateEventPitchForm = (props) => {
  const history = useHistory();
  const [formState, inputHandler] = useForm(
    {
      aboutEvent: {
        value: "",
        isValid: false,
      },
      sponsorPitch: {
        value: "",
        isValid: false,
      },
      creatorDescription: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (formState.isValid) {
      const inputs = {
        id: props.eventId,
        pitchDetails: {
          aboutEvent: formState.inputs.aboutEvent.value,
          sponsorPitch: formState.inputs.sponsorPitch.value,
          creatorDescription: formState.inputs.creatorDescription.value,
        },
      };
      console.log(inputs);
      history.replace("/user/dashboard");
    } else {
      console.log("invalid inputs");
    }
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <Input
          id="aboutEvent"
          element="textarea"
          type="text"
          label="About event"
          placeholder="What is the event about?"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid description (at least 10 characters)."
        />
        <Input
          id="sponsorPitch"
          element="textarea"
          type="text"
          label="Sponsor pitch"
          placeholder="What should a sponsor support your event?"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid answer (at least 10 characters)."
        />
        <Input
          id="creatorDescription"
          element="textarea"
          type="text"
          label="Organizer details"
          placeholder="Tell us about yourself!"
          onInput={inputHandler}
          validators={[VALIDATOR_MINLENGTH(10)]}
          errorText="Please enter a valid answer (at least 10 characters)."
        />
        <br></br>
        <br></br>
        <Button variant="main" type="submit" width="max">
          Save and finish
        </Button>
      </form>
    </>
  );
};

export default CreateEventPitchForm;
