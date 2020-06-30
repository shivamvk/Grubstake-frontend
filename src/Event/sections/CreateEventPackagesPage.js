import React, { useState, useEffect, useContext } from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import PackagesList from "../components/PackagesList";
import Container from "react-bootstrap/Container";
import Button from "../../shared/FormElements/Button";
import Notify from "../../shared/UIElements/Notify";
import { useHistory } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHttpClient } from "../../shared/hooks/http-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";
import { AuthContext } from "../../shared/context/auth-context";

const DUMMY_PACKAGES = [];

const CreateEventPackagesPage = (props) => {
  const history = useHistory();
  const [showNotify, setShowNotify] = useState(false);
  const [packages, setPackages] = useState([]);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const auth = useContext(AuthContext);
  const continueClickHandler = () => {
    if (packages.length === 0) {
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

  useEffect(() => {
    const getPackagesByEventId = async () => {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/event/package/byEventId?eventId=${props.eventId}`,
        "GET",
        null,
        {
          "Authorization": "Bearer " + auth.token
        }
      );
      setPackages(response.data);
    };
    getPackagesByEventId();
  }, [sendRequest, auth.token, props.eventId]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "4rem",
          right: "2rem",
          zIndex: "100",
        }}
      >
        <ErrorToast onClose={clearError} errorMessage={error.message} />
      </div>
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
        {isLoading ? (
          <LoadingSpinner margin="lg" />
        ) : (
          <>
            <PackagesList packages={packages} eventId={props.eventId} />
            <br></br>
            <br></br>
          </>
        )}
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
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default CreateEventPackagesPage;
