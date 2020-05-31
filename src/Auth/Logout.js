import React, { useContext, useState } from "react";
import { AuthContext } from "../shared/context/auth-context";
import { Redirect } from "react-router-dom";

const Logout = () => {
  const [redirect, setRedirect] = useState(null);
  const auth = useContext(AuthContext);
  auth.logout();

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  setRedirect("/");

  return <h4>Loading...</h4>;
};

export default Logout;
