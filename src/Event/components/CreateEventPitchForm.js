import React, { useContext } from "react";
import { VALIDATOR_MINLENGTH } from "../../shared/util/validator";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";

const CreateEventPitchForm = (props) => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
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

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (formState.isValid) {
      const inputs = {
        eventId: props.eventId,
        pitchDetails: {
          aboutEvent: formState.inputs.aboutEvent.value,
          sponsorPitch: formState.inputs.sponsorPitch.value,
          creatorDescription: formState.inputs.creatorDescription.value,
        },
      };
      console.log(inputs);
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/event/pitchDetails/upsert`,
          "POST",
          JSON.stringify(inputs),
          {
            Authorization: "Bearer " + auth.token,
            "Content-Type": "application/json",
          }
        );
        if (response) {
          history.replace("/user/dashboard");
        }
      } catch (err) {
        console.log(err.message);
        error.setErrorMessage(err.message);
      }
    } else {
      error.setErrorMessage("Please provide all details");  
    }
  };

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
      {isLoading ? (
        <LoadingSpinner margin="lg" />
      ) : (
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
      )}
    </>
  );
};

export default CreateEventPitchForm;
