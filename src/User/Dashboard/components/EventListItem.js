import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const ShortListItem = (props) => {
  return (
    <Link to={`/user/event/${props.id}`} className="remove-link-decoration">
      <Card className="dashboard-section__list-card">
        <Row>
          <Col xs={4} md={3} className="d-flex justify-content-start">
            <img src={props.image} alt={props.title} width="100" />
          </Col>
          <Col xs={8} md={9}>
            <Card.Title className="text-align-left color-dark-grey">
              {props.title}
            </Card.Title>
            <Card.Text className="text-align-left color-grey">
              {props.description}
            </Card.Text>
          </Col>
        </Row>
        <p className="text-align-left color-grey font-weight-light">
          <Moment date={props.startDate} format="dddd, MMMM Do"/>
          <br></br>
          {props.location}
        </p>
      </Card>
      <br></br>
    </Link>
  );
};

export default ShortListItem;
