import React from "react";
import EmptyPackagesList from "./EmptyPackagesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaRupeeSign as RupeeSign } from "react-icons/fa";
import { BsCheckAll as CheckIcon } from "react-icons/bs";
import { FiEdit2 as EditIcon } from "react-icons/fi";
import { AiOutlineDelete as DeleteIcon } from "react-icons/ai";

const PackagesList = (props) => {
  return (
    <>
      {props.packages.length === 0 ? (
        <EmptyPackagesList eventId={props.eventId} />
      ) : (
        <Row xs={1} md={2} lg={3}>
          {props.packages.map((p) => {
            return (
              <Col>
                <Card
                  style={{
                    padding: "1rem",
                    boxShadow:
                      "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
                  }}
                >
                  <Card.Text>
                    <span
                      style={{ color: "deeppink" }}
                      className="font-size-md"
                    >
                      {p.sponsorOfferDetails.title}
                      <br></br>
                      <br></br>
                    </span>
                    {p.sponsorRequestDetails.inCash && (
                      <p className="text-align-left">
                        <span
                          className="color-dark-grey"
                          style={{ fontSize: "1rem" }}
                        >
                          Starting from{" "}
                        </span>
                        <span
                          className="font-weight-bold"
                          style={{ color: "lightskyblue", fontSize: "2rem" }}
                        >
                          <RupeeSign style={{ fontWeight: "lighter" }} />
                          {p.sponsorRequestDetails.inCash.min}
                        </span>
                      </p>
                    )}
                    {p.sponsorRequestDetails.inKind && (
                      <p className="text-align-left">
                        <span
                          className="color-dark-grey"
                          style={{ fontSize: "1rem" }}
                        >
                          In kind{" "}
                        </span>
                        <span
                          className="font-weight-bold"
                          style={{ color: "lightskyblue", fontSize: "2rem" }}
                        >
                          <CheckIcon style={{ fontWeight: "lighter" }} />
                        </span>
                      </p>
                    )}
                    <p className="text-align-left">
                      <span
                        className="color-dark-grey"
                        style={{ fontSize: "1rem" }}
                      >
                        Offering{" "}
                      </span>
                      {p.sponsorOfferDetails.offers.map((offer) => {
                        return (
                          <div
                            style={{
                              backgroundColor: "lightskyblue",
                              width: "fit-content",
                              borderRadius: "1rem",
                              paddingTop: "0.3rem",
                              paddingBottom: "0.3rem",
                              paddingRight: "0.5rem",
                              paddingLeft: "0.5rem",
                              margin: "0.3rem",
                              fontSize: "0.8rem"
                            }}
                          >
                            {offer}
                          </div>
                        );
                      })}
                    </p>
                    <br></br>
                    <p className="text-align-right">
                      <EditIcon style={{ color: "green", cursor: "pointer" }} />{" "}
                      <DeleteIcon style={{ color: "red", cursor: "pointer" }} />
                    </p>
                  </Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default PackagesList;
