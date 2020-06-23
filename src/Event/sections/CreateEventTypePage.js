import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import { useHistory } from "react-router-dom";
import CreateEventHeader from "../components/CreateEventHeader";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";
import "../CreateEvent.css";

const EVENT_TYPES = [
  "Concert",
  "Training or workshop",
  "Conference",
  "Convention",
  "Dinner or grill",
  "College fest",
  "Exhibition",
  "Festival or fair",
  "Gaming",
  "Seminar or talk",
  "Screening",
  "Party",
];

const CreateEventTypePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const createEventAndProceed = async (type) => {
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/event/create`,
        "POST",
        JSON.stringify({ createdBy: auth.userId, type: type }),
        {
          "Content-Type": "application/json",
          "Authorization" : "Bearer " + auth.token
        }
      );
      if(response){
        history.replace("/create/event/basic-form?event-id=" + response.data.id);
      }
    } catch (err) {
      error.setErrorMessage("Failed!");
    }
  };
  return (
    <>
      <CreateEventHeader />
      {isLoading ? (
        <LoadingSpinner asOverlay/>
      ) : (
        <Container>
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
          <h1 className="margin-2 color-dark-grey font-weight-lighter font-size-xl">
            What kind of event do you want to create?
          </h1>
          <br></br>
          {EVENT_TYPES.map((type) => {
            return (
              <Badge
                key={type}
                onClick={()=>{
                  createEventAndProceed(type);
                }}
                className="create-event__pill"
                pill
                variant="light"
              >
                {window.innerWidth < 768 ? (
                  <h6 className="color-grey font-weight-light">{type}</h6>
                ) : (
                  <h5 className="color-grey font-weight-light">{type}</h5>
                )}
              </Badge>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default CreateEventTypePage;
