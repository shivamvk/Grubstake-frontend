import React from "react";
import Button from "../../../shared/FormElements/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EventListItem from "./EventListItem";
import { Link } from "react-router-dom";

const UserEventsList = (props) => {
  return (
    <>
      <Row>
        <Col xs={5} md={8} className="d-flex justify-content-start">
          <h5 className="center-vertical color-dark-grey">{props.title}</h5>
        </Col>
        <Col xs={7} md={4} className="d-flex justify-content-end">
          <Link to="/create/event/event-type">
            <Button variant="main" width="max" padding="p-min">
              CREATE EVENT
            </Button>
          </Link>
        </Col>
      </Row>
      <br></br>
      {props.events.map((event) => (
        <EventListItem
          key={event.id}
          id={event.id}
          isActive={event.isActive}
          creator={event.creator}
          image={
            event.basicDetails.logo ||
            "https://www.albertaaviationmuseum.com/wp-content/uploads/2014/11/logo-placeholder-generic.200x200.png"
          }
          type={event.basicDetails.basics.type}
          title={event.basicDetails.basics.title || `Event ${event.id}`}
          orgName={event.basicDetails.basics.orgName || null}
          startDate={event.basicDetails.date.startDate || null}
          endDate={event.basicDetails.date.endDate || null}
          location={event.basicDetails.location}
        />
      ))}
    </>
  );
};

export default UserEventsList;
