import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { FiChevronLeft as LeftIcon } from "react-icons/fi";

import "../CreateEvent.css";

const CreateEventPageOne = () => {
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

  return (
    <>
      <LeftIcon className="font-size-lg back-icon-pos" />
      <img src="/g_logo.jpg" className="main-navigation__logo logo-center-pos" alt="g" />{" "}
      <Container>
        <h1 className="margin-2 color-dark-grey font-weight-lighter font-size-xl">
          What kind of event do you want to create?
        </h1>
        <br></br>
        {EVENT_TYPES.map((type) => {
          return (
            <Badge className="create-event__pill" pill variant="light">
              {window.innerWidth < 768 ? (
                <h5 className="color-grey font-weight-light">{type}</h5>
              ) : (
                <h4 className="color-grey font-weight-light">{type}</h4>
              )}
            </Badge>
          );
        })}
      </Container>
    </>
  );
};

export default CreateEventPageOne;
