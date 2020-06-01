import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ProfileSectionGreeting from "../components/Greeting";
import {
  FiChevronRight as RightIcon,
  FiChevronDown as DownIcon,
  FiChevronUp as UpIcon,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Collapse from "react-bootstrap/Collapse";
import ListGroup from "react-bootstrap/ListGroup";

import "./ProfileSection.css";

const ProfileSection = (props) => {
  const [isEventListOpen, setIsEventListOpen] = useState(false);
  return (
    <>
      <Link to="/user/profile" className="remove-link-decoration">
        <>
          <Card className="profile-section__card">
            <ProfileSectionGreeting name="Satyam Jaiswal" />
            <RightIcon
              color="grey"
              className="profile-section__mobile_toggle pos-top-2"
            />
          </Card>
        </>
      </Link>
      <br></br>
      {props.events.length === 0 && window.innerWidth < 992 ? null : (
        <Card
          className="profile-section__card"
          onClick={() => setIsEventListOpen(!isEventListOpen)}
          aria-controls="eventList"
          aria-expanded={isEventListOpen}
        >
          <Card.Title className="text-align-left font-size-md color-dark-grey margin-1">
            Events
          </Card.Title>
          {isEventListOpen ? (
            <UpIcon
              color="grey"
              className="profile-section__mobile_toggle pos-top-1"
            />
          ) : (
            <DownIcon
              color="grey"
              className="profile-section__mobile_toggle pos-top-1"
            />
          )}
          <Collapse in={isEventListOpen}>
            <div id="eventList">
              <ListGroup variant="flush">
                {props.events.length === 0 ? (
                  <ListGroup.Item className="text-align-left">
                    No event created
                  </ListGroup.Item>
                ) : (
                  props.events.map((event) => {
                    return (
                      <Link className="remove-link-decoration color-grey" to={`/user/dashboard/event/${event.id}`}>
                        <ListGroup.Item className="text-align-left border-bottom">
                          {event.title}
                        </ListGroup.Item>
                      </Link>
                    );
                  })
                )}
              </ListGroup>
            </div>
          </Collapse>
        </Card>
      )}
    </>
  );
};

export default ProfileSection;
