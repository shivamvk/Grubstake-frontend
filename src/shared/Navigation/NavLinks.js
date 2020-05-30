import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "../UIElements/Avatar";

import "./NavLinks.css";
import ToolTip from "../UIElements/ToolTip";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="/">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Login</NavLink>
      </li>
      <li>
        <NavLink to="/">
          <ToolTip placement="bottom" text="Profile">
            <Avatar image="https://www.mykhel.com/img/2018/10/viratkohli-cropped_enb1383spzof1285xkhtckgld.jpg"></Avatar>
          </ToolTip>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
