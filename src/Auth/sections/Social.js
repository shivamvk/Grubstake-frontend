import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";

import "./Social.scss";

const Social = () => {
  let element;
  if (window.innerWidth < 768) {
    element = (
      <Row>
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <GoogleButton />
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center">
          <FacebookButton />
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
    );
  } else {
    element = (
      <div className="social-buttons-desktop">
        <div className="vertical-center">
          <GoogleButton />
          <FacebookButton />
        </div>
      </div>
    );
  }

  return (
    <Container className="text-center">
      {element}
      <p className="text-muted">
        *By continuing you agree to our{" "}
        <span className="blue-text">Terms of service </span>
        and acknowledge that you read our
        <span className="blue-text"> privary policy</span>
      </p>
    </Container>
  );
};

export default Social;
