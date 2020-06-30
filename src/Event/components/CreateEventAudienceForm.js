import React, { useState, useContext } from "react";
import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import Badge from "react-bootstrap/Badge";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";

const DUMMY_AUDIENCE_TYPE = [
  "Senior management",
  "Entrepreneur and SME's",
  "Industry specific",
  "College students",
  "School students",
  "Housewives",
  "Working professionals",
  "Doctors",
  "Mostly women",
  "Mostly men",
];

const CreateEventAudienceForm = (props) => {
  const history = useHistory();
  const [selectedAudienceType, setSelectedAudienceType] = useState([]);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      footfall: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (selectedAudienceType.length === 0 || !formState.isValid) {
      console.log("invalid inputs");
      error.setErrorMessage("Please provide all details");
      return;
    }
    const inputs = {
      eventId: props.eventId,
      audienceDetails: {
        expectedFootfall: formState.inputs.footfall.value,
        audienceTypes: selectedAudienceType,
      },
    };
    console.log(inputs);
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/event/audienceDetails/upsert`,
        "POST",
        JSON.stringify(inputs),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
      if (response) {
        history.replace(
          "/create/event/pitch-details?event-id=" + props.eventId
        );
      }
    } catch (err) {
      error.setErrorMessage(err.message);
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
            id="footfall"
            element="input"
            type="number"
            label="Expected footfall"
            placeholder="No. of people expected in your event"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid number."
          />
          <br></br>
          <h5 className="text-align-left color-grey">
            Select tags that define your event audience best:
          </h5>
          {DUMMY_AUDIENCE_TYPE.map((audienceType) => {
            return (
              <Badge
                key={audienceType}
                className={`create-event__pill ${
                  selectedAudienceType.includes(audienceType)
                    ? "create-event__pill-selected"
                    : null
                }`}
                pill
                variant="light"
                onClick={() => {
                  if (!selectedAudienceType.includes(audienceType))
                    setSelectedAudienceType([
                      ...selectedAudienceType,
                      audienceType,
                    ]);
                }}
              >
                {window.innerWidth < 768 ? (
                  <h6 className="color-grey font-weight-light">
                    {audienceType}{" "}
                    {selectedAudienceType.includes(audienceType) ? (
                      <CloseIcon
                        className="right-center-vertical"
                        onClick={() => {
                          setSelectedAudienceType(
                            selectedAudienceType.filter(
                              (value) => value !== audienceType
                            )
                          );
                        }}
                      />
                    ) : null}
                  </h6>
                ) : (
                  <h5 className="color-grey font-weight-light">
                    {audienceType}{" "}
                    {selectedAudienceType.includes(audienceType) ? (
                      <CloseIcon
                        className="right-center-vertical"
                        onClick={() => {
                          setSelectedAudienceType(
                            selectedAudienceType.filter(
                              (value) => value !== audienceType
                            )
                          );
                        }}
                      />
                    ) : null}
                  </h5>
                )}
              </Badge>
            );
          })}
          <br></br>
          <br></br>
          <Button variant="main" type="submit" width="max">
            Save and continue
          </Button>
        </form>
      )}
    </>
  );
};

export default CreateEventAudienceForm;
