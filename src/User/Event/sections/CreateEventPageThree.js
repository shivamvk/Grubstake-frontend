import React from "react";
import CreateEventHeader from "../components/CreateEventHeader";

const CreateEventPageThree = (props) => {
  return (
    <>
      <CreateEventHeader />
      <h3>event id: {props.eventId}</h3>
    </>
  );
};

export default CreateEventPageThree;
