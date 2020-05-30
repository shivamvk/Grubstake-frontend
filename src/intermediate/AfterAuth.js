import React, { useContext } from "react";
import { AuthContext } from "../shared/context/auth-context";

const AfterAuth = () => {
  const auth = useContext(AuthContext);
  if(auth.isLoggenIn){
      return <h1>sign in success!</h1>
  } else{
      return <h1>sign in error!</h1>
  }
};

export default AfterAuth;
