import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "../../../shared/UIElements/Footer";
import ProfileEditForm from "../components/ProfileEditForm";

const ProfileEditPage = (props) => {
  return (
    <>
      <Container style={{ minHeight: "80vh" }}>
        <h2
          className={`color-grey font-weight-bolder ${
            window.innerWidth < 992 ? "text-align-center" : "text-align-left"
          }`}
        >
          Edit profile
        </h2>
        <br></br>
        <ProfileEditForm />
      </Container>
      <Footer />
    </>
  );
};

export default ProfileEditPage;
