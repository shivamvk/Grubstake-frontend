import React, { useState } from "react";

import Input from "../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";

const CreateEventBasicForm = (props) => {
  const [showEndDateInput, setShowEndDateInput] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("05:00");
  let history = useHistory();

  const multiDayCheckboxClickHandler = (event) => {
    setShowEndDateInput(true);
  };

  const singleDayCheckboxClickHandler = (event) => {
    setShowEndDateInput(false);
  };

  const [formState, inputHandler] = useForm(
    {
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

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      console.log("invalid inputs");
    } else {
      let inputs = {
        id: uuid(),
        basicDetails: {
          basics: {
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
            website: formState.inputs.linksWebsite.value,
            facebook: formState.inputs.linksFb.value,
            instagram: formState.inputs.linksIg.value,
          },
        },
      };
      console.log(inputs); //send this to backend later
      history.push("/create/event/3?event-id=" + inputs.id);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
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
      <p className="text-align-left color-dark-grey font-size-md">Location</p>
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
          <span className="color-grey font-size-md">
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
                <InputGroup.Checkbox onClick={multiDayCheckboxClickHandler} />
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
            <span className="color-grey font-size-md">
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
              <InputGroup.Checkbox onClick={singleDayCheckboxClickHandler} />
              <span className="margin-left-1 color-grey">
                Is a single day event
              </span>
            </InputGroup>
          </Col>
        </Row>
      ) : null}
      <Row xs={1} className="margin-top-1">
        <Col md={6} className="d-flex justify-content-left">
          <span className="color-grey font-size-md">
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
          <span className="color-grey font-size-md">
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
        onInput={() => {}}
        validators={[]}
        isValid={true}
      />
      <Input
        id="linksFb"
        element="input"
        type="text"
        label="Facebook link"
        placeholder="Facebook page link (fb.com/your-event)"
        onInput={() => {}}
        validators={[]}
        isValid={true}
      />
      <Input
        id="linksIg"
        element="input"
        type="text"
        label="Instagram link"
        placeholder="Instagram page link (ig.com/your-event)"
        onInput={() => {}}
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
  );
};

export default CreateEventBasicForm;
