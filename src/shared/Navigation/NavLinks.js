import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  let list;

  const auth = useContext(AuthContext);

  if (auth.isLoggedIn) {
    list = (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Contact us</NavLink>
        </li>
        <li>
          <NavLink to="/user/dashboard">Dashboard</NavLink>
        </li>
      </ul>
    );
  } else {
    list = (
      <ul className="nav-links">
        <li>
          <NavLink to="/">Contact us</NavLink>
        </li>
      </ul>
    );
  }

  return list;
};

export default NavLinks;
