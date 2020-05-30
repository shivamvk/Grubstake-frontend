import React, { useContext, useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { Redirect } from "react-router-dom";

import "./FacebookButton.scss";

const FacebookButton = () => {
  const auth = useContext(AuthContext);
  const[redirect, setRedirect] = useState(null);

  if(redirect){
    return <Redirect to={redirect}/>
  }

  const responseFacebook = (response) => {
    console.log(response); //Figure out later how to verify response
    auth.login();
    setRedirect("/intermediate/after-auth");
  };

  return (
    <FacebookLogin
      appId="701728273978641"
      autoLoad={false}
      fields="name,email,picture"
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} variant="light" size="sm">
          <img
            alt="facebook"
            className="facebook-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          />
          Continue with facebook
        </Button>
      )}
      callback={responseFacebook}
    />
  );
};

export default FacebookButton;
