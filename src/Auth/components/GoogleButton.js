import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import Button from "react-bootstrap/Button";
import {AuthContext} from "../../shared/context/auth-context";

import "./GoogleButton.scss";

const GoogleButton = () => {
  const auth = useContext(AuthContext);

  const responseGoogleSuccess = (response) => {
    console.log(response);
    auth.login();
  };

  const responseGoogleFailure = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="622763529138-bq59pg9hs9it23b6fgagtbqji05u59ac.apps.googleusercontent.com"
      render={(renderProps) => (
        <Button onClick={renderProps.onClick} variant="light" size="sm">
          <img
            alt="google"
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          Continue with google
        </Button>
      )}
      onSuccess={responseGoogleSuccess}
      onFailure={responseGoogleFailure}
    />
  );
};

export default GoogleButton;
