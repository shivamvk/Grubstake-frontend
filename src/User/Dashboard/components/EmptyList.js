import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../../shared/FormElements/Button";

import "../sections/DashboardSection.css";

const EmptyList = props => {
  let isDesktopScreen;
  if (window.innerWidth < 768) {
    isDesktopScreen = false;
  } else {
    isDesktopScreen = true;
  }
  return (
    <>
      <h5>{props.title}</h5>
      <Card className="dashboard-section__card">
  <Card.Text>{props.text}</Card.Text>
        <Button variant="main" width={isDesktopScreen ? "med" : "max"}>
          {props.btnText}
        </Button>
      </Card>
    </>
  );
};

export default EmptyList;
