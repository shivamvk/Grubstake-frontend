import React from "react";
import Social from "./sections/Social";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import SignupForm from './sections/SignupForm';

import "./Auth.scss";

const Signup = () => {
  return (
    <Container>
      <h1>Signup</h1>
      <h6>
        Already have a Grubstake Account?{" "}
        <Link to="/login"><span className="blue-text">Login</span></Link>
      </h6>
      <SignupForm />
      <hr class="hr-text" data-content="OR"></hr>
      <Social />
    </Container>
  );
};

export default Signup;
