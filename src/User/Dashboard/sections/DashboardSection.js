import React from "react";
import CreateEventCard from "../components/CreateEventCard";
import UserEventsList from "../components/UserEventsList";
import SuggestedEventsList from "../components/SuggestedEventsList";

import "./DashboardSection.css";

const DUMMY_SUGGESTED_EVENTS = [
  {
    id: "e1",
    basicDetails: {
      basics: {
        orgName: "JIIT, Noida",
        title: "Impressions",
        type: "College fest",
      },
      date: {
        startDate: new Date().toISOString(),
        // endDate: new Date(
        //   new Date().getTime() + 1000 * 60 * 60 * 24
        // ).toISOString(),
        endDate: null
      },
      links: {
        website: "blabla.com",
        facebook: "fb.com/blabla",
        instagram: "ig.com/blabla",
      },
      location: {
        address: "JIIT, Sector 62",
        city: "Noida",
      },
      time: {
        startTime: "10:00",
        endTime: "5:00",
      },
    },
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
          title="Your events"
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
