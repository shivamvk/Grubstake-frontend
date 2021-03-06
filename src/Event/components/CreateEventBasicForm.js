import React, { useState, useContext } from "react";
import Input from "../../shared/FormElements/Input";
import ImageUpload from "../../shared/FormElements/ImageUpload";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";
import firebase from "firebase";
import { v4 as uuid } from "uuid";

const CreateEventBasicForm = (props) => {
  const [showEndDateInput, setShowEndDateInput] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("05:00");
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const auth = useContext(AuthContext);
  let history = useHistory();

  const multiDayCheckboxClickHandler = (event) => {
    setShowEndDateInput(true);
  };

  const singleDayCheckboxClickHandler = (event) => {
    setShowEndDateInput(false);
  };

  const [formState, inputHandler] = useForm(
    {
      image: {
        value: null,
        isValid: false,
      },
      title: {
        value: "",
        isValid: false,
      },
      orgName: {
        value: "",
        isValid: false,
      },
      locationAddress: {
        value: "",
        isValid: false,
      },
      locationCity: {
        value: "",
        isValid: false,
      },
      linksWebsite: {
        value: "",
        isValid: true,
      },
      linksFb: {
        value: "",
        isValid: true,
      },
      linksIg: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      console.log("invalid inputs");
      error.setErrorMessage("Please provide all required details");
    } else {
      firebase.initializeApp({
        storageBucket: "gs://shivamvk-grubstake.appspot.com",
      });
      const logoRef = firebase
        .storage()
        .ref()
        .child(`events/${props.eventId}/logo/${uuid()}`);
      const snapshot = await logoRef.put(formState.inputs.image.value);
      const logoUrl = await snapshot.ref.getDownloadURL();
      console.log(logoUrl);
      let inputs = {
        eventId: props.eventId,
        basicDetails: {
          basics: {
            logo: logoUrl,
            type: props.type,
            title: formState.inputs.title.value,
            orgName: formState.inputs.orgName.value,
          },
          location: {
            address: formState.inputs.locationAddress.value,
            city: formState.inputs.locationCity.value,
          },
          date: {
            startDate: startDate.toISOString(),
            endDate: showEndDateInput ? endDate.toISOString() : null,
          },
          time: {
            startTime: startTime,
            endTime: endTime,
          },
          links: {
            website:
              formState.inputs.linksWebsite.value === ""
                ? null
                : formState.inputs.linksWebsite.value,
            facebook:
              formState.inputs.linksFb.value === ""
                ? null
                : formState.inputs.linksFb.value,
            instagram:
              formState.inputs.linksIg.value === ""
                ? null
                : formState.inputs.linksIg.value,
          },
        },
      };
      console.log(inputs);
      try {
        const response = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/event/basicDetails/upsert`,
          "POST",
          JSON.stringify(inputs),
          {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token,
          }
        );
        if (response) {
          history.replace(
            "/create/event/packages?event-id=" + response.data.id
          );
        }
      } catch (err) {
        error.setErrorMessage(err.message);
      }
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
          <ImageUpload
            id="image"
            onInput={inputHandler}
            placeholderText="Pick a logo"
            errorText="Plesae provide a logo"
          />
          <br></br>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            placeholder="Title of your event"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
          />
          <Input
            id="orgName"
            element="input"
            type="text"
            label="Organization name"
            placeholder="Name of your organization"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid organization name."
          />
          <br></br>
          <p className="text-align-left color-dark-grey font-size-md">
            Location
          </p>
          <Input
            id="locationAddress"
            element="input"
            type="text"
            label="Address"
            placeholder="Location/Venue of your event"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid address."
          />
          <Input
            id="locationCity"
            element="input"
            type="text"
            label="City"
            placeholder="City of your event"
            onInput={inputHandler}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid city name."
          />
          <br></br>
          <p className="text-align-left color-dark-grey font-size-md">
            Date and Time
          </p>
          <Row xs={1}>
            <Col md={6} className="d-flex justify-content-left">
              <span className="color-grey font-size-sm">
                {showEndDateInput ? "Start" : null} Date:{" "}
                <DatePicker
                  className="create-event__date-picker-border"
                  onChange={(date) => setStartDate(date)}
                  value={startDate}
                  clearIcon={null}
                  calendarIcon={null}
                />
              </span>
              <br></br>
              <br></br>
            </Col>
            <Col md={6} className="d-flex justify-content-left">
              {showEndDateInput ? null : (
                <>
                  <InputGroup className="mb-3">
                    <InputGroup.Checkbox
                      onClick={multiDayCheckboxClickHandler}
                    />
                    <span className="margin-left-1 color-grey">
                      Is a multi day event
                    </span>
                  </InputGroup>
                </>
              )}
            </Col>
          </Row>
          {showEndDateInput ? (
            <Row xs={1} className="margin-top-1">
              <Col md={6} className="d-flex justify-content-left">
                <span className="color-grey font-size-sm">
                  End Date:{" "}
                  <DatePicker
                    onChange={(date) => setEndDate(date)}
                    value={endDate}
                    clearIcon={null}
                    calendarIcon={null}
                  />
                </span>
                <br></br>
                <br></br>
              </Col>
              <Col md={6} className="d-flex justify-content-left">
                <InputGroup className="mb-3">
                  <InputGroup.Checkbox
                    onClick={singleDayCheckboxClickHandler}
                  />
                  <span className="margin-left-1 color-grey">
                    Is a single day event
                  </span>
                </InputGroup>
              </Col>
            </Row>
          ) : null}
          <Row xs={1} className="margin-top-1">
            <Col md={6} className="d-flex justify-content-left">
              <span className="color-grey font-size-sm">
                Start Time:{" "}
                <TimePicker
                  clearIcon={null}
                  clockIcon={null}
                  format="hh:mm a"
                  value={startTime}
                  onChange={(time) => setStartTime(time)}
                />
              </span>
              <br></br>
              <br></br>
            </Col>
            <Col md={6} className="d-flex justify-content-left">
              <span className="color-grey font-size-sm">
                End Time:{" "}
                <TimePicker
                  clearIcon={null}
                  clockIcon={null}
                  format="hh:mm a"
                  value={endTime}
                  onChange={(time) => setEndTime(time)}
                />
              </span>
            </Col>
          </Row>
          <br></br>
          <p className="text-align-left color-dark-grey font-size-md">Links</p>
          <Input
            id="linksWebsite"
            element="input"
            type="text"
            label="Website"
            placeholder="Website (www.your-event.com)"
            onInput={inputHandler}
            validators={[]}
            isValid={true}
          />
          <Input
            id="linksFb"
            element="input"
            type="text"
            label="Facebook link"
            placeholder="Facebook page link (fb.com/your-event)"
            onInput={inputHandler}
            validators={[]}
            isValid={true}
          />
          <Input
            id="linksIg"
            element="input"
            type="text"
            label="Instagram link"
            placeholder="Instagram page link (ig.com/your-event)"
            onInput={inputHandler}
            validators={[]}
            isValid={true}
          />
          <br></br>
          <br></br>
          <Button variant="main" width="max" type="submit">
            Save and continue
          </Button>
          <br></br>
          <br></br>
        </form>
      )}
    </>
  );
};

export default CreateEventBasicForm;
