import React from "react";
import EmptyList from "../components/EmptyList";

import "./DashboardSection.css";

const DashboardSection = (props) => {
  return (
    <>
      <h2>Satyam's dashboard</h2>
      <br></br>
      {props.events.length === 0 ? (
        <EmptyList
          title="Events"
          text="Want sponsors for your event?"
          btnText="CREATE EVENT"
        />
      ) : null}
      <br></br><br></br>
      {props.brands.length === 0 ? (
        <EmptyList
          title="Brands"
          text="Looking for audience to market your brand?"
          btnText="CREATE BRAND"
        />
      ) : null}
      <br></br><br></br>
      {props.vendors.length === 0 ? (
        <EmptyList
          title="Vendors/Stalls"
          text="Want to put your stall in a public event?"
          btnText="CREATE STALL"
        />
      ) : null}
      <br></br><br></br>
    </>
  );
};

export default DashboardSection;
