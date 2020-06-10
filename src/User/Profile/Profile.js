import React from "react";
import Container from "react-bootstrap/Container";
import ProfileOptions from "./sections/ProfileOptions";
import ProfileGreeting from "./components/ProfileGreeting";
import Button from "../../shared/FormElements/Button";
import Footer from "../../shared/UIElements/Footer";

import "./Profile.css";

const Profile = () => {
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
        <Button variant="main" width="max">
          LOG OUT
        </Button>
        <br></br><br></br>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
