import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { AuthContext } from "../../../shared/context/auth-context";
import { GrLocation as LocationIcon } from "react-icons/gr";
import { MdDateRange as DateIcon } from "react-icons/md";

const EventListItem = (props) => {
  const auth = useContext(AuthContext);
  return (
    <Link to={`/user/event/${props.id}`} className="remove-link-decoration">
      <Card className="dashboard-section__list-card">
        {auth.userId === props.creator && (
          <div className="dashboard-section__incomplete-event">
            Provide all details for maximum sponsor reach!
          </div>
        )}
        <Row>
          <Col xs={4} md={3} className="d-flex justify-content-start">
            <img src={props.image} alt={props.title} width="100" height="75" />
          </Col>
          <Col xs={8} md={9}>
            <Card.Title className="text-align-left color-dark-grey">
              {props.title}
              {props.orgName && (
                <span
                  style={{
                    marginLeft: "1rem",
                    color: "grey",
                    fontStyle: "italic",
                  }}
                >
                  by
                </span>
              )}
              <span style={{ marginLeft: "1rem" }} className="color-dark-grey">
                {props.orgName}
              </span>
            </Card.Title>
            <Card.Text className="text-align-left color-grey">
              <span
                style={{
                  backgroundColor: "#8bc2f2",
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
        <br></br>
        <span className="text-align-left color-dark-grey font-weight-light">
          {props.startDate && (
            <>
              <DateIcon />
              <Moment
                className="margin-left-1"
                date={props.startDate}
                format="dddd, MMMM Do"
              />
            </>
          )}
          {props.endDate && (
            <>
              <span className="color-dark-grey"> to </span>
              <Moment date={props.endDate} format="dddd, MMMM Do" />
            </>
          )}
        </span>
        <span className="text-align-left">
          {props.location && (
            <>
              <LocationIcon style={{ color: "red" }} />
              <span className="color-dark-grey margin-left-1">
                {props.location.address + ", " + props.location.city}
              </span>
            </>
          )}
        </span>
      </Card>
      <br></br>
    </Link>
  );
};

export default EventListItem;
