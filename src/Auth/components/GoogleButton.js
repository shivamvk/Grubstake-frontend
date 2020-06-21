import React, { useContext } from "react";
import GoogleLogin from "react-google-login";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";

import "./GoogleButton.scss";

const GoogleButton = () => {
  const auth = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const responseGoogleSuccess = async (response) => {
    console.log(response.tokenId);
    try {
      const data = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/auth/google`,
        "POST",
        JSON.stringify({
          idToken: response.tokenId,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(data);
      if (data) {
        auth.login(
          data.data.token,
          data.data.id,
          data.data.name,
          data.data.email
        );
      }
    } catch (err) {
      console.log(err.message);
    }
    //auth.login();
  };

  const responseGoogleFailure = (response) => {
    error.setErrorMessage("Google auth failed!");
  };

  return (
    <>
      <div>
        <ErrorToast onClose={clearError} errorMessage={error.message} />
      </div>
      <GoogleLogin
        clientId="622763529138-bq59pg9hs9it23b6fgagtbqji05u59ac.apps.googleusercontent.com"
        render={(renderProps) =>
          isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button onClick={renderProps.onClick} variant="light" size="sm">
              <img
                alt="google"
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
              Continue with google
            </Button>
          )
        }
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
      />
    </>
  );
};

export default GoogleButton;
