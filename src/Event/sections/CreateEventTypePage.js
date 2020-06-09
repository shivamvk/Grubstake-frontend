import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { useHistory } from "react-router-dom";
import CreateEventHeader from "../components/CreateEventHeader";

import "../CreateEvent.css";

const EVENT_TYPES = [
  "Concert",
  "Training or workshop",
  "Conference",
  "Convention",
  "Dinner or grill",
  "College fest",
  "Exhibition",
  "Festival or fair",
  "Gaming",
  "Seminar or talk",
  "Screening",
  "Party",
];

const CreateEventTypePage = () => {
  const history = useHistory();
  return (
    <>
      <CreateEventHeader />
      <Container>
        <h1 className="margin-2 color-dark-grey font-weight-lighter font-size-xl">
          What kind of event do you want to create?
        </h1>
        <br></br>
        {EVENT_TYPES.map((type) => {
          return (
            <Badge
              key={type}
              onClick={() => {
                history.replace("/create/event/basic-form?type=" + type);
              }}
              className="create-event__pill"
              pill
              variant="light"
            >
              {window.innerWidth < 768 ? (
                <h6 className="color-grey font-weight-light">{type}</h6>
              ) : (
                <h5 className="color-grey font-weight-light">{type}</h5>
              )}
            </Badge>
          );
        })}
      </Container>
    </>
  );
};

export default CreateEventTypePage;
