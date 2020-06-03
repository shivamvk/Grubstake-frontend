import React from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import Container from "react-bootstrap/Container";
import CreateEventSponsorRequestForm from "../components/CreateEventSponsorRequestForm";

const CreateEventPageThree = (props) => {
  return (
    <>
      <CreateEventHeader />
      <Container>
        <p className="text-align-left">
          <span className="margin-2 color-dark-grey font-weight-light font-size-lg">
            Looking for sponsors<br></br>
          </span>
          <span className="margin-2 color-dark-grey font-weight-light">
            *Select an appropriate range right now and make a final deal later
          </span>
        </p>
        <br></br>
        <CreateEventSponsorRequestForm eventId={props.eventId}/>
        <br></br>
      </Container>
    </>
  );
};

export default CreateEventPageThree;
