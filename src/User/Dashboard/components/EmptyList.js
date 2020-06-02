import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../shared/FormElements/Button";

import "../sections/DashboardSection.css";

const EmptyList = (props) => {
  return (
    <>
      <Card className="dashboard-section__card">
        <Card.Title className="color-white">{props.title}</Card.Title>
        <Card.Text className="color-white">{props.text}</Card.Text>
        <Button
          onClick={props.addEvent}
          variant="inverse"
          width={window.innerWidth < 768 ? "max" : "med"}
        >
          {props.btnText}
        </Button>
      </Card>
    </>
  );
};

export default EmptyList;
