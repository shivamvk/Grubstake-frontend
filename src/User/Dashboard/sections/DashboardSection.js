import React from "react";
import CreateEventCard from "../components/CreateEventCard";
import UserEventsList from "../components/UserEventsList";
import SuggestedEventsList from "../components/SuggestedEventsList";

import "./DashboardSection.css";

const DUMMY_SUGGESTED_EVENTS = [
  {
    name: "Impressions",
    description: "Annual cultural fest of JIIT.",
    startDate: new Date().toISOString(),
    location: "Noida",
  },
  {
    name: "Cool event",
    description:
      "Some very long description. nkvcjdfsnkjvn nljnld nljkcndjlfnl nlkcmdlfnml nlkmdlkfm lknmljnjbuv hybgygyewqe dbyrqywerqwr cefu cvefubi cquqeic biuiefcn iusf.",
    startDate: new Date().toISOString(),
    endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 2),
    location: "New Delhi",
  },
  {
    name: "bla bla event",
    description: "A super awesome techno event",
    startDate: new Date().toISOString(),
    endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 4),
    location: "Bangalore",
  },
  {
    name: "test event",
    description: "A super awesome techno event",
    startDate: new Date().toISOString(),
    location: "Pune",
  },
];

const DashboardSection = (props) => {
  return (
    <>
      <br></br>
      {props.events.length === 0 ? (
        <CreateEventCard
          title="Events"
          text="Want sponsors for your event?"
          btnText="CREATE EVENT"
          addEvent={props.addEvent}
        />
      ) : (
        <UserEventsList
          title="Events"
          addEvent={props.addEvent}
          events={props.events}
        />
      )}
      <br></br>
      <br></br>
      <h5 className="text-align-left color-dark-grey">
        Top events in the upcoming week looking for sponsors:
      </h5>
      <br></br>
      <SuggestedEventsList events={DUMMY_SUGGESTED_EVENTS} />
      <br></br>
      <br></br>
      <h5 className="text-align-left color-dark-grey">
        Top events in the upcoming week open for vendors:
      </h5>
      <br></br>
      <SuggestedEventsList events={DUMMY_SUGGESTED_EVENTS} />
    </>
  );
};

export default DashboardSection;
