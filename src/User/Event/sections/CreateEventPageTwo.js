import React from "react";

import Container from "react-bootstrap/Container";
import CreateEventHeader from "../components/CreateEventHeader";
import CreateEventBasicForm from "../components/CreateEventBasicForm";

const CreateEventPageTwo = (props) => {
  return (
    <>
      <CreateEventHeader />
      <Container>
        <p className="text-align-left">
          <span className="margin-2 color-dark-grey font-weight-light font-size-lg">
            Basic Details<br></br>
          </span>
          <span className="margin-2 color-dark-grey font-weight-light">*To ensure maximum sponsor reach please ensure to fill the form
          correctly.</span>
        </p>
        <CreateEventBasicForm type={props.type}/>
      </Container>
    </>
  );
};

export default CreateEventPageTwo;
