import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../../../shared/UIElements/Avatar";
import { FaUser as UserIcon } from "react-icons/fa";

const Greeting = (props) => {
  return (
    <Row>
      <Col xs={2} md={3}>
        <UserIcon fontSize="2rem" color="grey" style={{ marginTop: "1.5rem", marginLeft: "1rem"}}/>
      </Col>
      <Col xs={10} md={9}>
        <p className="text-align-left margin-top-1">
          <span className="font-size-sm color-grey">Hello,</span>
          <br />
          <span className="font-size-sm font-weight-bold color-dark-grey">
            {props.name}
          </span>
        </p>
      </Col>
    </Row>
  );
};

export default Greeting;
