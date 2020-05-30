import React from "react";
import Social from "./sections/Social";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import LoginForm from './sections/LoginForm';

import "./Auth.scss";

const Login = () => {
  return (
    <Container>
      <h1>Login</h1>
      <h6>
        New to Grubstake?{" "}
        <Link to="/signup"><span className="blue-text">Signup</span></Link>
      </h6>
      <LoginForm />
      <hr class="hr-text" data-content="OR"></hr>
      <Social />
    </Container>
  );
};

export default Login;
