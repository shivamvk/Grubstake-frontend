import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser as UserIcon } from "react-icons/fa";
import { AiOutlineRight as RightIcon } from "react-icons/ai";

const ProfileGreeting = (props) => {
  return (
    <div className="profile__greeting-wrapper">
      <Row>
        <Col xs={2}>
          <UserIcon className="profile__greeting-temp-user-image" />
        </Col>
        <Col xs={9} className="d-flex justify-content-left">
          <p className="text-align-left">
            <span className="profile__greeting-user-hello">Hello,</span>
            <br></br>
            <span className="profile__greeting-user-name">Satyam Jaiswal</span>
          </p>
        </Col>
        <Col xs={1}>
          <div className="profile__greeting-right-icon ">
            <RightIcon />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileGreeting;
