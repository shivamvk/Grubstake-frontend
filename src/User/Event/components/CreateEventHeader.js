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
      <Link to="/">
        <img
          src="/g_logo.jpg"
          className="main-navigation__logo logo-center-pos"
          alt="g"
        />{" "}
      </Link>
    </>
  );
};

export default CreateEventHeader;
