import React from "react";
import GoogleLogin from "react-google-login";
import Button from "react-bootstrap/Button";

import "./GoogleButton.scss";

const GoogleButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="787282077899-3f6bj3k9q0bdk6q4bkm3lv82smrsekgs.apps.googleusercontent.com"
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
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  );
};

export default GoogleButton;
