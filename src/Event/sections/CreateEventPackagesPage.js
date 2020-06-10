import React, { useState } from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import PackagesList from "../components/PackagesList";
import Container from "react-bootstrap/Container";
import Button from "../../shared/FormElements/Button";
import Notify from "../../shared/UIElements/Notify";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DUMMY_PACKAGES = [
  {
    id: "p1",
    eventId: "e1",
    sponsorRequestDetails: {
      andOr: "AND",
      inCash: {
        sponsorsAmountRange: {
          max: 80000,
          min: 50000,
        },
      },
      inKind: {
        goodiesRange: {
          max: 1000,
          min: 500,
        },
        couponsRange: {
          max: 1000,
          min: 500,
        },
        vouchersRange: {
          max: 1000,
          min: 500,
        },
      },
    },
    sponsorOfferDetails: {
      offers: ["Guest at event", "Social media"],
      other: "",
      title: "Title sponsor",
    },
  },
];

const CreateEventPackagesPage = (props) => {
  const history = useHistory();
  const [showNotify, setShowNotify] = useState(false);
  const continueClickHandler = () => {
    if (DUMMY_PACKAGES.length === 0) {
      setShowNotify(true);
    } else {
      history.replace(
        "/create/event/audience-details?event-id=" + props.eventId
      );
    }
  };

  const notifyCancelHandler = () => {
    setShowNotify(false);
  };

  const notifyConfirmHandler = () => {
    setShowNotify(false);
    history.replace("/create/event/audience-details?event-id=" + props.eventId);
  };

  const createClickHandler = () => {
    history.push(
      "/create/event/create-package-request?event-id=" + props.eventId
    );
  };

  return (
    <>
      <Notify
        open={showNotify}
        title="Pacakges!"
        description="If you're looking for sponsors for your event, it's best to create packages now. Although you can skip for now and edit this later!"
        cancelText="Create Package"
        onCancel={notifyCancelHandler}
        confirmText="Skip for now"
        onConfirm={notifyConfirmHandler}
      />
      <CreateEventHeader />
      <Container>
        <PackagesList packages={DUMMY_PACKAGES} eventId={props.eventId} />
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Button variant="main" width="max" onClick={createClickHandler}>
              Add package
            </Button>
          </Col>
          <Col>
            <Button
              variant="main-color-iverse"
              width="max"
              onClick={continueClickHandler}
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateEventPackagesPage;
