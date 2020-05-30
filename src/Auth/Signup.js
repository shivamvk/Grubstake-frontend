import React, { useState } from "react";
import Social from "./sections/Social";
import Container from "react-bootstrap/Container";
import { Link, Redirect } from "react-router-dom";
import SignupForm from "./sections/SignupForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

import "./Auth.scss";

const Signup = () => {
  const [redirect, setRedirect] = useState(null);

  if (redirect) {
    return <Redirect to="/" />;
  }

  const closeClickHandler = () => {
    setRedirect("/");
  }
  if (window.innerWidth < 768) {
    return (
      <Container>
        <CloseIcon className="close" onClick={closeClickHandler}/>
        <h1>Signup</h1>
        <h6>
          Already have a Grubstake Account?{" "}
          <Link to="/login">
            <span className="blue-text">Login</span>
          </Link>
        </h6>
        <SignupForm />
        <hr className="hr-text" data-content="OR"></hr>
        <Social />
      </Container>
    );
  } else {
    return (
      <Container>
        <CloseIcon  className="close" onClick={closeClickHandler}/>
        <h1>Signup</h1>
        <h6>
          Already have a Grubstake Account?{" "}
          <Link to="/login">
            <span className="blue-text">Login</span>
          </Link>
        </h6>
        <Row>
          <Col md={5}>
            <SignupForm />
          </Col>
          <Col md={2} className="d-flex justify-content-center">
            <div class="wrapper">
              <div class="line"></div>
              <div class="wordwrapper">
                <div class="word">OR</div>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <Social />
          </Col>
        </Row>
      </Container>
    );
  }
};

export default Signup;
