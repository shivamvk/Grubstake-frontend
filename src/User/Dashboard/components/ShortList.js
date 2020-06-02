import React from "react";
import Button from "../../../shared/FormElements/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShortListItem from "./ShortListItem";
import { Link } from "react-router-dom";

const ShortList = (props) => {
  return (
    <>
      <Row>
        <Col xs={5} md={8} className="d-flex justify-content-start">
          <h5 className="center-vertical color-dark-grey">{props.title}</h5>
        </Col>
        <Col xs={7} md={4} className="d-flex justify-content-end">
          <Link to="/create/event/1">
            <Button variant="main" width="max" padding="p-min">
              CREATE EVENT
            </Button>
          </Link>
        </Col>
      </Row>
      <br></br>
      {props.events.map((event) => (
        <ShortListItem
          key={event.id}
          id={event.id}
          image={event.image}
          title={event.title}
          description={event.description}
        />
      ))}
    </>
  );
};

export default ShortList;
