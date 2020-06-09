import React, { useState } from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import PackagesList from "../components/PackagesList";
import Container from "react-bootstrap/Container";
import Button from "../../shared/FormElements/Button";
import Notify from "../../shared/UIElements/Notify";
import { useHistory } from "react-router-dom";

const DUMMY_PACKAGES = [];

const CreateEventPackagesPage = (props) => {
  const history = useHistory();
    const [showNotify, setShowNotify] = useState(false);
  const continueClickHandler = () => {
    if (DUMMY_PACKAGES.length === 0) {
      setShowNotify(true);
    }
  };

  const notifyCancelHandler = () => {
    setShowNotify(false);
  };

  const notifyConfirmHandler = () => {
    setShowNotify(false);
    history.push("/create/event/audience-details?event-id=" + props.eventId);
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
        <PackagesList packages={DUMMY_PACKAGES} eventId={props.eventId}/>
        <br></br>
        <br></br>
        <Button variant="main" width="max" onClick={continueClickHandler}>
          Save and continue
        </Button>
      </Container>
    </>
  );
};

export default CreateEventPackagesPage;
