import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "../shared/FormElements/Button";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import { Redirect } from "react-router-dom";

import "./AfterAuth.css";

const AfterAuth = () => {
  const [redirect, setRedirect] = useState(null);

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  const closeClickHandler = (event) => {
    event.preventDefault();
    setRedirect("/user/dashboard");
  };

  const proceedClickHandler = (event) => {
    event.preventDefault();
    setRedirect("/user/profile");
  }

  return (
    <React.Fragment>
      <CloseIcon className="close" onClick={closeClickHandler} />
      <Container className="after-auth__conatiner">
        <h2>There are a few more things we need from you to</h2>
        <h3>complete your profile!</h3>
        <br></br>
        <br></br>
        <Button variant="main" width="med" onClick={proceedClickHandler}>Proceed to profile</Button>
        <br></br>
        <br></br>
        <Button variant="outline" width="med" onClick={closeClickHandler}>
          Skip for now
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default AfterAuth;
