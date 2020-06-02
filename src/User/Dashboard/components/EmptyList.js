import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../shared/FormElements/Button";
import { Link } from "react-router-dom";

import "../sections/DashboardSection.css";

const EmptyList = (props) => {
  return (
    <>
      <Card className="dashboard-section__card">
        <Card.Title className="color-white">{props.title}</Card.Title>
        <Card.Text className="color-white">{props.text}</Card.Text>
        <Link to="/create/event/1">
          <Button
            variant="inverse"
            width={window.innerWidth < 768 ? "max" : "med"}
          >
            {props.btnText}
          </Button>
        </Link>
      </Card>
    </>
  );
};

export default EmptyList;
