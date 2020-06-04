import React, { useState } from "react";
import CreateEventHeader from "../components/CreateEventHeader";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Button from "../../../shared/FormElements/Button";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";
import Input from "../../../shared/FormElements/Input";
import { useHistory } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

const CreateEventPageFour = (props) => {
  let history = useHistory();
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
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [othersValue, setOthersValue] = useState(null);
  const [availableForStalls, setAvailableForStalls] = useState(false);

  const stallCheckboxClicked = (event) => {
    var target = event.target;
    if (target.checked) {
      setAvailableForStalls(true);
    } else {
      setAvailableForStalls(false);
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (selectedOffers.length === 0) {
      console.log("invalid inputs");
      return;
    }
    let inputs = {
      id: props.eventId,
      sponsorOfferDetails: {
        offers: selectedOffers,
        others: othersValue,
      },
    };
    console.log(inputs);
    if (availableForStalls) {
      history.push("/create/event/5?event-id=" + props.eventId);
    } else {
      history.push("/create/event/7?event-id=" + props.eventId);
    }
  };
  return (
    <>
      <CreateEventHeader />
      <Container>
        <p className="text-align-left">
          <span className="margin-2 color-dark-grey font-weight-light font-size-lg">
            Offer to sponsors<br></br>
          </span>
          <span className="margin-2 color-dark-grey font-weight-light">
            *Select the things you can provide to sponsors in return
          </span>
        </p>
        <br></br>
        {DUMMY_OFFERS.map((offer) => {
          return (
            <Badge
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
            id="others"
            element="input"
            type="text"
            onInput={(id, value) => {
              setOthersValue(value);
            }}
            validators={[]}
            isValid={true}
            label="Others"
            placeholder="Others? (Please specify)"
          />
          <br></br>
          <InputGroup>
            <InputGroup.Checkbox onClick={stallCheckboxClicked} />
            <span className="margin-left-1 color-grey">
              Check if you're open to stalls/vendors.
            </span>
          </InputGroup>
          <br></br>
          <Button variant="main" width="max" type="submit">
            Save and continue
          </Button>
        </form>
        <br></br>
        <br></br>
      </Container>
    </>
  );
};

export default CreateEventPageFour;
