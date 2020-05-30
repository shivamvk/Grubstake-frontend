import React from "react";
import Social from "./sections/Social";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import LoginForm from "./sections/LoginForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Auth.scss";

const Login = () => {
  if (window.innerWidth < 768) {
    return (
      <Container>
        <h1>Login</h1>
        <h6>
          New to Grubstake?{" "}
          <Link to="/signup">
            <span className="blue-text">Signup</span>
          </Link>
        </h6>
        <LoginForm />
        <hr class="hr-text" data-content="OR"></hr>
        <Social />
      </Container>
    );
  } else {
    return <Container>
      <h1>Login</h1>
      <h6>
        New to Grubstake?{" "}
        <Link to="/signup">
          <span className="blue-text">Signup</span>
        </Link>
      </h6>
      <Row>
        <Col md={5}>
          <LoginForm />
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
    </Container>;
  }
};

export default Login;
