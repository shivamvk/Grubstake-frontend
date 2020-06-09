import React from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import Container from "react-bootstrap/Container";
import CreateEventAudienceForm from "../components/CreateEventAudienceForm";

const CreateEventAudiencePage = (props) => {
  return (
    <>
      <CreateEventHeader />
      <Container>
        <p className="text-align-left">
          <span className="margin-2 color-dark-grey font-weight-light font-size-lg">
            Audience details<br></br>
          </span>
          <span className="margin-2 color-dark-grey font-weight-light">
            *To ensure maximum sponsor reach please ensure to fill the form
            correctly.
          </span>
        </p>
        <br></br>
        <CreateEventAudienceForm eventId={props.eventId} />
      </Container>
    </>
  );
};

export default CreateEventAudiencePage;
