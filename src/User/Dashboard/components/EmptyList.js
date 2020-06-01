import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../shared/FormElements/Button";

import "../sections/DashboardSection.css";

const EmptyList = (props) => {
  let isDesktopScreen;
  if (window.innerWidth < 768) {
    isDesktopScreen = false;
  } else {
    isDesktopScreen = true;
  }
  return (
    <>
      <Card className="dashboard-section__card">
        <Card.Title className="color-white">{props.title}</Card.Title>
        <Card.Text className="color-white">{props.text}</Card.Text>
        <Button
          onClick={props.onClick}
          variant="inverse"
          width={isDesktopScreen ? "med" : "max"}
        >
          {props.btnText}
        </Button>
      </Card>
    </>
  );
};

export default EmptyList;
