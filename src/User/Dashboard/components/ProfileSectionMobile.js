import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "../../../shared/FormElements/Button";
import {
  FiChevronDown as DownIcon,
  FiChevronUp as UpIcon,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileSectionGreeting from "./ProfileSectionGreeting";

const ProfileSectionMobile = () => {
  const [isDeatailOpen, setIsDetailOpen] = useState(false);
  const openDeatils = () => {
    setIsDetailOpen(true);
  };
  const closeDetails = () => {
    setIsDetailOpen(false);
  };

  return (
    <>
      <Card className="profile-section__card">
        <ProfileSectionGreeting name="Satyam Jaiswal" />
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
            <ListGroup
              horizontal
              className="profile-section__card_list margin-1"
            >
              <ListGroup.Item>Events created: 0</ListGroup.Item>
              <ListGroup.Item>Brands created: 0</ListGroup.Item>
              <ListGroup.Item>Vendors created: 0</ListGroup.Item>
            </ListGroup>
            <br></br>
            <br></br>
            <Link to="/user/profile">
              <Button variant="main" width="med">
                Edit profile
              </Button>
            </Link>
            <br></br>
            <br></br>
          </div>
        </Collapse>
      </Card>
    </>
  );
};

export default ProfileSectionMobile;
