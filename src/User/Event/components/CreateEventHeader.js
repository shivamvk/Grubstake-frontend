import React from "react";
import { FiChevronLeft as LeftIcon } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

const CreateEventHeader = () => {
  let history = useHistory();
  return (
    <>
      <LeftIcon
        onClick={() => history.goBack()}
        className="font-size-lg back-icon-pos"
      />
      <div className="main-navigation__title main-navigation__title_center top-center">
        <Link to="/">
          <img src="/g_logo.jpg" className="main-navigation__logo" alt="g" />
          {window.innerWidth < 768 ? null : (
            <span className="main-navigation__title-text">Grubstake</span>
          )}
        </Link>
      </div>
    </>
  );
};

export default CreateEventHeader;
