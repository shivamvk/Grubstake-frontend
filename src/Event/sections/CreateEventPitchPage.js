import React from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import Container from "react-bootstrap/Container";
import CreateEventPitchForm from "../components/CreateEventPitchForm";

const CreateEventPitchPage = (props) => {
  return (
    <>
      <CreateEventHeader />
      <Container>
        <p className="text-align-left">
          <span className="margin-2 color-dark-grey font-weight-light font-size-lg">
            Your pitch<br></br>
          </span>
          <span className="margin-2 color-dark-grey font-weight-light">
            *Please make sure to fill the following details professionally
          </span>
        </p>
        <br></br>
        <CreateEventPitchForm eventId={props.eventId} />
      </Container>
    </>
  );
};

export default CreateEventPitchPage;
