import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUser as UserIcon } from "react-icons/fa";
import Button from "../../../shared/FormElements/Button";
import { Link } from "react-router-dom";

const ProfileGreeting = (props) => {
  return (
    <div className="profile__greeting-wrapper">
      <Row>
        <Col xs={2}>
          <UserIcon className="profile__greeting-temp-user-image" />
        </Col>
        <Col xs={6} className="d-flex justify-content-left">
          <p className="text-align-left">
            <span className="profile__greeting-user-hello">Hello,</span>
            <br></br>
            <span className="profile__greeting-user-name">Satyam Jaiswal</span>
          </p>
        </Col>
        <Col xs={4}>
          <div className="profile__greeting-right-icon ">
            <Link to="/user/profile/edit">
              <Button variant="outline" padding="p-min">
                Edit profile
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileGreeting;
