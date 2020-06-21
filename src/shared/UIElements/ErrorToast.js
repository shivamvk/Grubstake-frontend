import React from "react";
import Toast from "react-bootstrap/Toast";
import { MdError } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ErrorToast.css";

const ErrorToast = (props) => {
  return (
    <Toast
      show={!!props.errorMessage}
      onClose={props.onClose}
      autohide={true}
      delay={5000}
      style={{ minWidth: "10rem", minHeight: "2rem" }}
    >
      <Row>
        <Col xs={3} style={{ backgroundColor: "red", minHeight: "2rem" }}>
          {
            <MdError
              style={{
                position: "absolute",
                left: "35%",
                top: "10%",
                fontSize: "1.7rem",
                color: "white",
              }}
            />
          }
        </Col>
        <Col style={{ minHeight: "2rem" }} className="d-flex justify-content-center" xs={9}>
          <p style={{ margin: "5px" }} className="text-align-center">{props.errorMessage || "Error"}</p>
        </Col>
      </Row>
    </Toast>
  );
};

export default ErrorToast;
