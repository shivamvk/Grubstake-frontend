import React from "react";
import { useParams } from "react-router-dom";
import CreateEventPageOne from "./sections/CreateEventPageOne";
import CreateEventPageTwo from "./sections/CreateEventPageTwo";
import CreateEventPageThree from "./sections/CreateEventPageThree";
import CreateEventPageFour from "./sections/CreateEventPageFour";
import CreateEventPageSix from "./sections/CreateEventPageSix";

const CreateEvent = (props) => {
  const page = useParams().page;
  switch (page) {
    case "1":
      return <CreateEventPageOne />;
    case "2":
      return <CreateEventPageTwo type={getUrlParameter("type")} />;
    case "3":
      return <CreateEventPageThree eventId={getUrlParameter("event-id")} />;
    case "4":
      return <CreateEventPageFour eventId={getUrlParameter("event-id")} />;
    case "6":
      return <CreateEventPageSix eventId={getUrlParameter("event-id")} />;
    default:
      return <h2>Fine till now!</h2>;
  }
};

const getUrlParameter = (name) => {
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};
export default CreateEvent;
