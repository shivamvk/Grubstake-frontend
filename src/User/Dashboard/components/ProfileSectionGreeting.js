import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "../../../shared/UIElements/Avatar";

const ProfileSectionGreeting = (props) => {
  return (
    <Row>
      <Col xs={2} md={3}>
        <Avatar image="/profile_image_temp.png" width="2.5rem" />
      </Col>
      <Col xs={10} md={9}>
        <p className="text-align-left margin-top-1">
          <span className="font-size-sm color-grey">Hello,</span>
          <br />
          <span className="font-size-md font-weight-bold color-dark-grey">
            {props.name}
          </span>
        </p>
      </Col>
    </Row>
  );
};

export default ProfileSectionGreeting;
