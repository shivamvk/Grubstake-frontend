import React from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const eventId = useParams().eventId;
  return <h2>Event id: {eventId}</h2>;
};

export default Event;
