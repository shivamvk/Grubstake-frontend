import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const ToolTip = (props) => {
  return (
    <OverlayTrigger
      placement={props.placement}
      overlay={<Tooltip>{props.text}.</Tooltip>}
    >
      {props.children}
    </OverlayTrigger>
  );
};

export default ToolTip;
