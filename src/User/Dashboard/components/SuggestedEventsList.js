import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import EventListItem from "./EventListItem";
import {
  AiOutlineRight as RightIcon,
  AiOutlineLeft as LeftIcon,
} from "react-icons/ai";

const SuggestedEventsList = (props) => {
  return (
    <ScrollMenu
      arrowLeft={<LeftIcon />}
      arrowRight={<RightIcon />}
      hideArrows={true}
      hideSingleArrow={true}
      transition="2"
      itemClass="menu-item-wrapper margin-horizontal-1 width-30"
      data={props.events.map((event) => {
        return (
          <EventListItem
            key={event.name}
            image="https://i.pinimg.com/originals/ca/4a/91/ca4a91129c614ffbd5e67e0509df36d4.png"
            title={event.name}
            description={event.description}
            startDate={event.startDate}
            location={event.location}
          />
        );
      })}
    />
  );
};

export default SuggestedEventsList;
