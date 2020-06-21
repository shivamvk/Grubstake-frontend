import React, { useContext } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../shared/context/auth-context";
import ErrorToast from "../../shared/UIElements/ErrorToast";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./FacebookButton.scss";

const FacebookButton = () => {
  const auth = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();

  const responseFacebook = async (response) => {
    console.log(response.accessToken);
    if(response.accessToken){
      try {
        const data = await sendRequest(
          `${process.env.REACT_APP_BACKEND_URL}/auth/facebook`,
          "POST",
          JSON.stringify({
            access_token: response.accessToken,
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
    } else {
      error.setErrorMessage("Facebook auth failed!");
    }
    //auth.login();
  };

  return (
    <>
      <div>
        <ErrorToast onClose={clearError} errorMessage={error.message} />
      </div>
      <FacebookLogin
        appId="701728273978641"
        autoLoad={false}
        fields="name,email,picture"
        render={(renderProps) =>
          isLoading ? (
            <LoadingSpinner />
          ) : (
            <Button onClick={renderProps.onClick} variant="light" size="sm">
              <img
                alt="facebook"
                className="facebook-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
              />
              Continue with facebook
            </Button>
          )
        }
        callback={responseFacebook}
      />
    </>
  );
};

export default FacebookButton;
