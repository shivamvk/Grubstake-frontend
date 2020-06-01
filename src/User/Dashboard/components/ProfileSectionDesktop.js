import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { MdEmail, MdPhone } from "react-icons/md";
import Button from '../../../shared/FormElements/Button';

const ProfileSectionDesktop = () => {
  return (
    <Card className="profile-section__card">
      <Card.Img variant="top" src="/profile_image_temp.png" />
      <Card.Body>
        <Card.Title>Satyam Jaiswal</Card.Title>
        <Card.Text className="profile-section__card_contacts">
          <MdEmail /> satyamjaiswal@gmail.com
          <br />
          <MdPhone /> 8130583124
        </Card.Text>
        <ListGroup className="profile-section__card_list" variant="flush">
          <ListGroup.Item>Events created: 0</ListGroup.Item>
          <ListGroup.Item>Brands created: 0</ListGroup.Item>
          <ListGroup.Item>Vendors created: 0</ListGroup.Item>
        </ListGroup>
        <br></br>
        <br></br>
        <Button variant="main" width="max">
          Edit profile
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProfileSectionDesktop;
