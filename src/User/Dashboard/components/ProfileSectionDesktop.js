import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "../../../shared/FormElements/Button";
import { Link } from "react-router-dom";
import ProfileSectionGreeting from "./ProfileSectionGreeting";

const ProfileSectionDesktop = () => {
  return (
    <>
      <Card className="profile-section__card">
        <ProfileSectionGreeting name="Satyam Jaiswal" />
      </Card>
      <br></br>
      <Card className="profile-section__card">
        <ListGroup className="profile-section__card_list" variant="flush">
          <ListGroup.Item>Events created: 0</ListGroup.Item>
          <ListGroup.Item>Brands created: 0</ListGroup.Item>
          <ListGroup.Item>Vendors created: 0</ListGroup.Item>
        </ListGroup>
      </Card>
      <br></br>
      <Link to="/user/profile">
        <Button variant="main" width="max">
          Edit profile
        </Button>
      </Link>
    </>
  );
};

export default ProfileSectionDesktop;
