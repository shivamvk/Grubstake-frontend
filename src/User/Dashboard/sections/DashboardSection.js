import React from "react";
import EmptyList from "../components/EmptyList";
import ShortList from "../components/ShortList";

import "./DashboardSection.css";

const DashboardSection = (props) => {
  return (
    <>
      <br></br>
      {props.events.length === 0 ? (
        <EmptyList
          title="Events"
          text="Want sponsors for your event?"
          btnText="CREATE EVENT"
          onClick={props.addEvent}
        />
      ) : (
        <ShortList
          title="Events"
          onClick={props.addEvent}
          events={props.events}
        />
      )}
      <br></br>
      <br></br>
      {props.brands.length === 0 ? (
        <EmptyList
          title="Brands"
          text="Looking for audience to market your brand?"
          btnText="CREATE BRAND"
        />
      ) : null}
      <br></br>
      <br></br>
      {props.vendors.length === 0 ? (
        <EmptyList
          title="Vendors/Stalls"
          text="Want to put your stall in a public event?"
          btnText="CREATE STALL"
        />
      ) : null}
      <br></br>
      <br></br>
    </>
  );
};

export default DashboardSection;
