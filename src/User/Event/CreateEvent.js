import React from "react";
import { useParams } from "react-router-dom";
import CreateEventPageOne from "./sections/CreateEventPageOne";

const CreateEvent = () => {
  const page = useParams().page;
  switch(page){
      case "1": return <CreateEventPageOne />
      default: return <h2>Error!</h2>
  };
};

export default CreateEvent;
