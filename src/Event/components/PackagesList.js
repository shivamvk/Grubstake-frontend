import React from "react";
import EmptyPackagesList from "./EmptyPackagesList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaRupeeSign as RupeeSign } from "react-icons/fa";
import Button from "../../shared/FormElements/Button";

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
                    <span className="color-dark-grey font-size-md font-weight-light">
                      {p.sponsorOfferDetails.title}
                      <br></br><br></br>
                    </span>
                    <p className="text-align-left">
                      <span className="color-dark-grey font-weight-light">
                        <RupeeSign />
                        {p.sponsorRequestDetails.inCash.sponsorsAmountRange.min}{" - "}
                        {p.sponsorRequestDetails.inCash.sponsorsAmountRange.max}<br></br>
                      </span>
                    </p>
                    <p className="text-align-left">
                      <span className="color-grey">Goodies:</span>{" "}
                      <span className="color-dark-grey font-weight-bold">
                        {p.sponsorRequestDetails.inKind.goodiesRange.min}{" - "}
                        {p.sponsorRequestDetails.inKind.goodiesRange.max}<br></br>
                      </span>
                    </p>
                    <p className="text-align-left">
                    <span className="color-grey">Vouchers:</span>{" "}
                      <span className="color-dark-grey font-weight-bold">
                        {p.sponsorRequestDetails.inKind.vouchersRange.min}{" - "}
                        {p.sponsorRequestDetails.inKind.vouchersRange.max}<br></br>
                      </span>
                    </p>
                    <p className="text-align-left">
                    <span className="color-grey">Coupons:</span>{" "}
                      <span className="color-dark-grey font-weight-bold">
                        {p.sponsorRequestDetails.inKind.couponsRange.min}{" - "}
                        {p.sponsorRequestDetails.inKind.couponsRange.max}<br></br>
                      </span>
                    </p>
                    {p.sponsorOfferDetails.offers.map(offer=>{
                      return <div>{offer}</div>
                    })}
                    <br></br>
                    <Button variant="outline" width="max">Edit</Button>
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
