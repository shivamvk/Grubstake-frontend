import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import ProfileOptions from "./sections/ProfileOptions";
import ProfileGreeting from "./components/ProfileGreeting";
import Button from "../../shared/FormElements/Button";
import Footer from "../../shared/UIElements/Footer";
import { AuthContext } from "../../shared/context/auth-context";

import "./Profile.css";

const Profile = () => {
  const auth = useContext(AuthContext);
  const logoutClickHandler = (event) => {
    event.preventDefault();
    auth.logout();
  };
  return (
    <>
      <Container style={{ minHeight: "80vh" }}>
        <h2
          className={`color-grey font-weight-bolder ${
            window.innerWidth < 992 ? "text-align-center" : "text-align-left"
          }`}
        >
          Profile
        </h2>
        <br></br>
        <ProfileGreeting />
        <br></br>
        <br></br>
        <ProfileOptions />
        <br></br>
        <div className="text-align-right">
          <Button
            variant="main"
            width={window.innerWidth < 767 ? "max" : "med"}
            onClick={logoutClickHandler}
          >
            LOG OUT
          </Button>
        </div>  
        <br></br>
        <br></br>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
