import React from "react";
import { useParams } from "react-router-dom";
import CreateEventTypePage from "./sections/CreateEventTypePage";
import CreateEventBasicFormPage from "./sections/CreateEventBasicFormPage";
import CreateEventPackageRequest from "./sections/CreateEventPackageRequest";
import CreateEventPackageOffer from "./sections/CreateEventPackageOffer";
import CreateEventAudiencePage from "./sections/CreateEventAudiencePage";
import CreateEventPageSeven from "./sections/CreateEventPageSeven";
import CreateEventPackagesPage from "./sections/CreateEventPackagesPage";

const CreateEvent = (props) => {
  const page = useParams().page;
  switch (page) {
    case "event-type":
      return <CreateEventTypePage />;
    case "basic-form":
      return <CreateEventBasicFormPage type={getUrlParameter("type")} />;
    case "packages":
      return <CreateEventPackagesPage eventId={getUrlParameter("event-id")} />;
    case "create-package-request":
      return <CreateEventPackageRequest eventId={getUrlParameter("event-id")} />;
    case "create-package-offer":
      return <CreateEventPackageOffer eventId={getUrlParameter("event-id")} />;
    case "audience-details":
      return <CreateEventAudiencePage eventId={getUrlParameter("event-id")} />;
    case "7":
      return <CreateEventPageSeven eventId={getUrlParameter("event-id")} />;
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
