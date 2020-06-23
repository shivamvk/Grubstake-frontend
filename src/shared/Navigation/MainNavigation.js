import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";
import { FaUser as UserIcon } from "react-icons/fa";
import "./MainNavigation.css";
import Avatar from "../UIElements/Avatar";
import { AuthContext } from "../context/auth-context";

const MainNavigation = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const auth = useContext(AuthContext);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <React.Fragment>
      {isDrawerOpen ? <Backdrop onClick={closeDrawer} /> : null}
      <SideDrawer show={isDrawerOpen} onClick={closeDrawer}>
        <nav className="main-navigation__drawer-nav">
          <Link to="/" className="main-navigation__side-nav-logo">
            <img src="/g_logo.jpg" className="main-navigation__logo" alt="g" />
            <span className="main-navigation__title-text">Grubstake</span>
          </Link>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>
        <div
          className={`main-navigation__title ${
            window.innerWidth < 768 && "main-navigation__title_center"
          }`}
        >
          <Link to="/">
            <img src="/g_logo.jpg" className="main-navigation__logo" alt="g" />
            {window.innerWidth > 768 && (
              <span className="main-navigation__title-text">Grubstake</span>
            )}
          </Link>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <Link to={auth.isLoggedIn ? "/user/profile" : "/login"}>
          <div className="pos-right-1-top-1">
            {/* <Avatar image="/profile_image_temp.png" alt="image" /> */}
            <UserIcon fontSize="2rem" color="grey"/>
          </div>
        </Link>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
