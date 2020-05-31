import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import Avatar from "../../../shared/UIElements/Avatar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "../../../shared/FormElements/Button";
import {
  FiChevronDown as DownIcon,
  FiChevronUp as UpIcon,
} from "react-icons/fi";

import { MdEmail, MdPhone } from "react-icons/md";

const ProfileSectionMobile = () => {
  const [isDeatailOpen, setIsDetailOpen] = useState(false);
  const openDeatils = () => {
    setIsDetailOpen(true);
  };
  const closeDetails = () => {
    setIsDetailOpen(false);
  };

  return (
    <Card className="profile-section__card">
      <Card.Title className="text-align-left margin-1">Profile stats</Card.Title>
      {isDeatailOpen ? (
        <UpIcon
          className="profile-section__mobile_toggle"
          onClick={closeDetails}
          aria-controls="profile-details"
          aria-expanded={isDeatailOpen}
        />
      ) : (
        <DownIcon
          className="profile-section__mobile_toggle"
          onClick={openDeatils}
          aria-controls="profile-details"
          aria-expanded={isDeatailOpen}
        />
      )}
      <Collapse in={isDeatailOpen}>
        <div id="profile-details">
          <Row>
            <Col xs={3} md={3} className="d-flex justify-content-center">
              <Avatar
                image="/profile_image_temp.png"
                width="5rem"
                height="5rem"
                className="profile-section__mobile_image"
              />
            </Col>
            <Col xs={9} md={9} style={{ width: "100%" }}>
              <Card.Title className="text-align-left">
                Satyam Jaiswal
              </Card.Title>
              <Card.Text className="profile-section__card_contacts">
                <MdEmail /> satyamjaiswal@gmail.com
                <br />
                <MdPhone /> 8130583124
              </Card.Text>
            </Col>
          </Row>
          <br></br>
          <ListGroup
            horizontal
            className="profile-section__card_list margin-1"
          >
            <ListGroup.Item>Created events: 0</ListGroup.Item>
            <ListGroup.Item>Created brands: 0</ListGroup.Item>
            <ListGroup.Item>Created vendors: 0</ListGroup.Item>
          </ListGroup>
          <br></br>
          <br></br>
          <Button variant="outline" width="med">
            Edit profile
          </Button>
          <br></br><br></br>
        </div>
      </Collapse>
    </Card>
  );
};

export default ProfileSectionMobile;
