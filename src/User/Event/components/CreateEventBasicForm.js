import React, { useState } from "react";

import Input from "../../../shared/FormElements/Input";
import { VALIDATOR_REQUIRE } from "../../../shared/util/validator";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import InputGroup from "react-bootstrap/InputGroup";

const CreateEventBasicForm = () => {
  const [showEndDateInput, setShowEndDateInput] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("05:00");

  const multiDayCheckboxClickHandler = (event) => {
    setShowEndDateInput(true);
  };

  const singleDayCheckboxClickHandler = (event) => {
    setShowEndDateInput(false);
  };

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        placeholder="Title of your event"
        onInput={() => {}}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
      />
      <Input
        id="org-name"
        element="input"
        type="text"
        label="Organization name"
        placeholder="Name of your organization"
        onInput={() => {}}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid organization name."
      />
      <br></br>
      <p className="text-align-left color-dark-grey font-size-md">Location</p>
      <Input
        id="loc-address"
        element="input"
        type="text"
        label="Address"
        placeholder="Location/Venue of your event"
        onInput={() => {}}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address."
      />
      <Input
        id="loc-city"
        element="input"
        type="text"
        label="City"
        placeholder="City of your event"
        onInput={() => {}}
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
              onChange={(date) => setStartDate(date)}
              value={startDate}
              clearIcon={null}
            />
          </span><br></br><br></br>
        </Col>
        <Col md={6} className="d-flex justify-content-left">
          {showEndDateInput ? null : (
            <>
              <InputGroup className="mb-3">
                <InputGroup.Checkbox onClick={multiDayCheckboxClickHandler} />
                <span className="margin-left-1">Is a multi day event</span>
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
              />
            </span><br></br><br></br>
          </Col>
          <Col md={6} className="d-flex justify-content-left">
            <InputGroup className="mb-3">
              <InputGroup.Checkbox onClick={singleDayCheckboxClickHandler} />
              <span className="margin-left-1">Is a single day event</span>
            </InputGroup>
          </Col>
        </Row>
      ) : null}
      <Row xs={1} className="margin-top-1">
        <Col  md={6} className="d-flex justify-content-left">
          <span className="color-grey font-size-md">
            Start Time:{" "}
            <TimePicker
              hourPlaceholder="hh"
              minutePlaceholder="mm"
              secondPlaceholder="ss"
              format="hh:mm"
              value={startTime}
              onChange={time => setStartTime(time)}
            />
          </span><br></br><br></br>
        </Col>
        <Col md={6} className="d-flex justify-content-left">
          <span className="color-grey font-size-md">
            End Time:{" "}
            <TimePicker
              hourPlaceholder="hh"
              minutePlaceholder="mm"
              secondPlaceholder="ss"
              format="hh:mm"
              value={endTime}
              onChange={time => setEndTime(time)}
            />
          </span>
        </Col>
      </Row>
    </form>
  );
};

export default CreateEventBasicForm;
