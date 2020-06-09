import React from "react";
import Card from "react-bootstrap/Card";

const EmptyPackagesList = props => {

  return (
    <div style={{minHeight: "70vh"}}>
      <br></br><br></br>
      <Card
        style={{
          width: "20rem",
          padding: "4rem 1rem",
          alignSelf: "center",
          margin: "3rem auto",
          backgroundColor: "whitesmoke",
          borderRadius: "0",
          //   boxShadow:
          //     "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        <Card.Text className="color-dark-grey font-weight-light">
          Create packages if you're lokking for sponsors!
        </Card.Text>
      </Card>
    </div>
  );
};

export default EmptyPackagesList;
