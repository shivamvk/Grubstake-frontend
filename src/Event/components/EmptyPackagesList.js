import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../../shared/FormElements/Button";
import { useHistory } from "react-router-dom";

const EmptyPackagesList = props => {
  const history = useHistory();
  const createClickHandler = () => {
    history.push("/create/event/create-package-request?event-id=" + props.eventId);
  };

  return (
    <div>
      <Card
        style={{
          width: "20rem",
          padding: "4rem 1rem",
          alignSelf: "center",
          margin: "3rem auto",
          backgroundColor: "whitesmoke",
          borderRadius: "10px",
          //   boxShadow:
          //     "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        <Card.Text className="color-dark-grey font-weight-light">
          Create packages if you're lokking for sponsors!
        </Card.Text>
        <Button
          variant="main"
          width="med"
          padding="p-min"
          onClick={createClickHandler}
        >
          Create package
        </Button>
      </Card>
    </div>
  );
};

export default EmptyPackagesList;
