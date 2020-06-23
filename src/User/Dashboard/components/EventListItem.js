import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { AuthContext } from "../../../shared/context/auth-context";

const EventListItem = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Link to={`/user/event/${props.id}`} className="remove-link-decoration">
      <Card className="dashboard-section__list-card">
        {auth.userId === props.creator && (
          <div className="dashboard-section__incomplete-event">
            Provide all details for maximum sponsor reach! Click to edit.
          </div>
        )}
        <Row>
          <Col xs={4} md={3} className="d-flex justify-content-start">
            <img src={props.image} alt={props.title} width="100" height="75" />
          </Col>
          <Col xs={8} md={9}>
            <Card.Title className="text-align-left color-dark-grey">
              {props.title}
            </Card.Title>
            <Card.Text className="text-align-left color-grey">
              {props.orgName && (
                <span style={{ marginRight: "1rem" }}>{props.orgName}</span>
              )}
              <span
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "0.3rem",
                  borderRadius: "1.5rem",
                }}
              >
                {props.type}
              </span>
            </Card.Text>
          </Col>
        </Row>
        <p className="text-align-left color-grey font-weight-light">
          {props.startDate && (
            <Moment date={props.startDate} format="dddd, MMMM Do" />
          )}
          {props.endDate && (
            <>
              <span className="color-dark-grey"> to </span>
              <Moment date={props.endDate} format="dddd, MMMM Do" />
            </>
          )}
          <br></br>
          {props.location}
        </p>
      </Card>
      <br></br>
    </Link>
  );
};

export default EventListItem;
