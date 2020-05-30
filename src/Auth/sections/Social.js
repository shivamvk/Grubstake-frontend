import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleButton from "../components/GoogleButton";
import FacebookButton from "../components/FacebookButton";

const Social = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <GoogleButton />
          <br /><br/><br/>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center">
          <FacebookButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
