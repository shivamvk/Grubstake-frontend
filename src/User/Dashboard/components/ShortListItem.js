import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ShortListItem = (props) => {
  return (
    <Link to={`/user/dashboard/event/${props.id}`} className="remove-link-decoration">
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
          <AiOutlineRight className="right-center-vetical color-grey" />
        </Row>
      </Card>
      <br></br>
    </Link>
  );
};

export default ShortListItem;
