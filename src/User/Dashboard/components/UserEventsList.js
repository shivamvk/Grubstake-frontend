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
          image="https://i.pinimg.com/originals/ca/4a/91/ca4a91129c614ffbd5e67e0509df36d4.png"
          title={event.basicDetails.basics.title}
          orgName={event.basicDetails.basics.orgName}
          startDate={event.basicDetails.date.startDate}
          endDate={event.basicDetails.date.endDate}
          location={
            event.basicDetails.location.address +
            ", " +
            event.basicDetails.location.city
          }
        />
      ))}
    </>
  );
};

export default UserEventsList;
