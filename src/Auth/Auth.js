import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Login from "./sections/Login";
import Signup from "./sections/Signup";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import "./Auth.scss";
import Social from "./sections/Social";

const Auth = () => {
  const [key, setKey] = useState("signup");

  return (
    <Container className="center">
      <Tab.Container defaultActiveKey={key}>
        <Tab.Content>
          <Tab.Pane eventKey="signup">
            <Signup />
          </Tab.Pane>
          <Tab.Pane eventKey="login">
            <Login />
          </Tab.Pane>
        </Tab.Content>
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="signup">Signup</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="login">Login</Nav.Link>
          </Nav.Item>
        </Nav>
      </Tab.Container>
      <hr className="hr-text" data-content="Or" />
      <Social />
    </Container>
  );
};

export default Auth;
