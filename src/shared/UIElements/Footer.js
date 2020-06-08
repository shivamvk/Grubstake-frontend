import React from "react";
import Container from "react-bootstrap/Container";
import { AiFillHeart as LoveIcon } from "react-icons/ai";


const Footer = (props) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#0f0f0f",
          //backgroundImage: "linear-gradient(to bottom, whitesmoke, black)",
          padding: "1rem",
          width: "100%",
        }}
      >
        <Container>
          <h6 style={{ color: "white" }}>
            {/* Contact us in case of any query
            <Row>
              <Col style={{ padding: "0rem" }}>
                <p className="text-align-right">support@grubstake.com</p>
              </Col>
              <Col style={{ padding: "0rem" }} xs={1}>
                |
              </Col>
              <Col
                style={{ padding: "0rem" }}
                className="d-flex justify-content-left"
              >
                +919876543210
              </Col>
            </Row> */}
            Made with <LoveIcon style={{ color: "red" }} /> in India<br></br>
            <span style={{ color: "grey" }}>Copyright © 2020 Grubstake</span>
          </h6>
        </Container>
      </div>
    </>
  );
};

export default Footer;
