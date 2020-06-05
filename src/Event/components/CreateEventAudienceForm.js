import React, { useState } from "react";
import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import Badge from "react-bootstrap/Badge";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";

const CreateEventAudienceForm = (props) => {
  const DUMMY_AUDIENCE_TYPE = [
    "Senior management",
    "Entrepreneur and SME's",
    "Industry specific",
    "College students",
    "School students",
    "Housewives",
    "working professionals",
    "Doctors",
    "Mostly women",
    "Mostly men",
  ];

  const [selectedAudienceType, setSelectedAudienceType] = useState([]);

  const [formState, inputHandler] = useForm(
    {
      footfall: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubmitHandler = event => {
      event.preventDefault();
      if(selectedAudienceType.length === 0){
          console.log("invalid inputs");
          return;
      }
      const inputs = {
          id: props.eventId,
          audienceDetails: {
              expectedFootfall: formState.inputs.footfall.value,
              audienceTypes: selectedAudienceType
          }
      };
      console.log(inputs);
  };

  return (
    <>
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
    </>
  );
};

export default CreateEventAudienceForm;
