import React from "react";
import Button from "../../../shared/FormElements/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ShortListItem from "./ShortListItem";

const ShortList = (props) => {
  return (
    <>
      <Row>
        <Col xs={5} md={8} className="d-flex justify-content-start">
          <h5 className="center-vertical">{props.title}</h5>
        </Col>
        <Col xs={7} md={4} className="d-flex justify-content-end">
          <Button
            onClick={props.onClick}
            variant="main"
            width="max"
            padding="p-min"
          >
            CREATE EVENT
          </Button>
        </Col>
      </Row>
      <br></br>
      {props.events.map((event) => (
        <ShortListItem
          key={event.id}
          image={event.image}
          title={event.title}
          description={event.description}
        />
      ))}
    </>
  );
};

export default ShortList;
