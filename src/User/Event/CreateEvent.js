import React from "react";
import { useParams } from "react-router-dom";
import CreateEventPageOne from "./sections/CreateEventPageOne";
import CreateEventPageTwo from "./sections/CreateEventPageTwo";

const CreateEvent = ({match, location}) => {
  const page = useParams().page;
  switch(page){
      case "1": return <CreateEventPageOne />
      case "2": return <CreateEventPageTwo />
      default: return <h2>Error!</h2>
  };
};

export default CreateEvent;
