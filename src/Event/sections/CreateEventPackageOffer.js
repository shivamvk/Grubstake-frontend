import React, { useState, useContext } from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "../../shared/FormElements/Button";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import Input from "../../shared/FormElements/Input";
import { useHistory } from "react-router-dom";
import { VALIDATOR_REQUIRE } from "../../shared/util/validator";
import { useForm } from "../../shared/hooks/form-hook";
import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
import ErrorToast from "../../shared/UIElements/ErrorToast";
import { useHttpClient } from "../../shared/hooks/http-hook";
import { AuthContext } from "../../shared/context/auth-context";

const DUMMY_OFFERS = [
  "Sales permission",
  "Social media",
  "Sampling",
  "Speaking opportunity",
  "Car/Bike display",
  "Cutom content creation",
  "Celebrity at event",
  "Guest at event",
  "Meet n Greet",
];

const CreateEventPackageOffer = (props) => {
  let history = useHistory();
  const [selectedOffers, setSelectedOffers] = useState([]);
  const auth = useContext(AuthContext);
  const [isLoading, error, sendRequest, clearError] = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      packageTitle: {
        value: "",
        isValid: false,
      },
      other: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (selectedOffers.length === 0) {
      error.setErrorMessage("Select alteast one of the given offers");
      return;
    }
    if (!formState.isValid) {
      error.setErrorMessage("Please enter a package title");
      return;
    }
    const INPUTS_FROM_PREVIOUS_PAGE = JSON.parse(
      localStorage.getItem("temp-package-details")
    );
    let inputs = {
      eventId: props.eventId,
      sponsorRequestDetails: INPUTS_FROM_PREVIOUS_PAGE.sponsorRequestDetails,
      sponsorOfferDetails: {
        offers: selectedOffers,
        title: formState.inputs.packageTitle.value,
        others: formState.inputs.others.value || null,
      },
    };
    console.log(inputs);
    try {
      const response = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/event/package/save`,
        "POST",
        JSON.stringify(inputs),
        {
          Authorization: "Bearer " + auth.token,
          "Content-Type": "application/json",
        }
      );
      if (response) {
        console.log(response);
        localStorage.removeItem("temp-package-details");
        history.replace("/create/event/packages?event-id=" + response.data.id);
      }
    } catch (err) {
      error.setErrorMessage(err.message);
    }
  };
  return (
    <>
      <CreateEventHeader />
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
        {isLoading ? (
          <LoadingSpinner margin="lg" />
        ) : (
          <>
            <p className="text-align-left">
              <span className="margin-2 color-dark-grey font-weight-normal font-size-md">
                Package details (Offering)<br></br>
              </span>
              <span className="margin-2 color-dark-grey font-weight-light">
                *Select the things you can provide to sponsors in return
              </span>
            </p>
            <br></br>
            {DUMMY_OFFERS.map((offer) => {
              return (
                <Badge
                  key={offer}
                  className={`create-event__pill ${
                    selectedOffers.includes(offer)
                      ? "create-event__pill-selected"
                      : null
                  }`}
                  pill
                  variant="light"
                  onClick={() => {
                    if (!selectedOffers.includes(offer))
                      setSelectedOffers([...selectedOffers, offer]);
                  }}
                >
                  {window.innerWidth < 768 ? (
                    <h6 className="color-grey font-weight-light">
                      {offer}{" "}
                      {selectedOffers.includes(offer) ? (
                        <CloseIcon
                          className="right-center-vertical"
                          onClick={() => {
                            setSelectedOffers(
                              selectedOffers.filter((value) => value !== offer)
                            );
                          }}
                        />
                      ) : null}
                    </h6>
                  ) : (
                    <h5 className="color-grey font-weight-light">
                      {offer}{" "}
                      {selectedOffers.includes(offer) ? (
                        <CloseIcon
                          className="right-center-vertical"
                          onClick={() => {
                            setSelectedOffers(
                              selectedOffers.filter((value) => value !== offer)
                            );
                          }}
                        />
                      ) : null}
                    </h5>
                  )}
                </Badge>
              );
            })}
            <br></br>
            <form onSubmit={formSubmitHandler}>
              <Input
                id="packageTitle"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[VALIDATOR_REQUIRE()]}
                label="Title"
                placeholder="Package title (Title sponsor, Food sponsor, General...)"
                errorText="Please provide a valid title."
              />
              <Input
                id="others"
                element="input"
                type="text"
                onInput={inputHandler}
                validators={[]}
                isValid={true}
                label="Others"
                placeholder="Others? (Please specify)"
              />
              <br></br>
              <br></br>
              <Button variant="main" width="max" type="submit">
                Save Package
              </Button>
            </form>
            <br></br>
            <br></br>
          </>
        )}
      </Container>
    </>
  );
};

export default CreateEventPackageOffer;
