import React from "react";
import Card from "react-bootstrap/Card";

const EmptyPackagesList = props => {

  return (
    <div style={{minHeight: "70vh"}}>
      <br></br><br></br>
      <Card
        style={{
          width: "20rem",
          padding: "2rem 1rem",
          alignSelf: "center",
          margin: "1rem auto",
          backgroundColor: "whitesmoke",
          borderRadius: "0",
          //   boxShadow:
          //     "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        <Card.Text>
          <span className="color-grey font-size-md">Packages (ex. Title Sponsor, Food Sponsor, General)<br></br><br></br></span>
          <span className="color-dark-grey">
            Packages are shown to sponsors when they are interested in sponsoring your event. 
            Please note that the amounts and offers you create here are not final and just for an idea purpose. 
            Final deal will be made later. 
          </span>
        </Card.Text>
      </Card>
    </div>
  );
};

export default EmptyPackagesList;
