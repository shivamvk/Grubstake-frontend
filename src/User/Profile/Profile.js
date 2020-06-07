import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_FIXLENGTH,
} from "../../shared/util/validator";
import { FaExclamation as ExclamationIcon } from "react-icons/fa";
import Notify from "../../shared/UIElements/Notify";

const Profile = () => {
  const [showNotify, setShowNotify] = useState(false);
  const [notifyDescription, setNotifyDescription] = useState();
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "njkl",
        isValid: true,
      },
      email: {
        value: "",
        isValid: false,
      },
      mobile: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const initialFormData = {
    name: {
      value: "test",
      isValid: true,
    },
    email: {
      value: "test@test.com",
      isValid: true,
    },
    mobile: {
      value: "9876543210",
      isValid: true,
    },
  };

  const emailOrMobileChanged = () => {
    return (
      formState.inputs.email.value !== initialFormData.email.value ||
      formState.inputs.mobile.value !== initialFormData.mobile.value
    );
  };

  const valuesChanged = () => {
    return formState.inputs.name.value !== initialFormData.name.value;
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formState.isValid) {
      console.log("invalid inputs");
    } else if (emailOrMobileChanged()) {
      setNotifyDescription(
        "Seems like you entered developer tools. Actually I can't send it to backend yet ^_^!"
      );
      setShowNotify(true);
    } else if (!valuesChanged()) {
      setNotifyDescription(
        "Seems like you haven't changed anything. Please change some entries and try again!"
      );
      setShowNotify(true);
    } else {
      let inputs = {
        name: formState.inputs.name.value,
      };
      console.log(inputs);
    }
  };

  const closeNotifyHandler = () => {
    setShowNotify(false);
    setNotifyDescription(null);
  };

  return (
    <>
      <Notify
        open={showNotify}
        onClose={closeNotifyHandler}
        description={notifyDescription}
      />
      <Container>
        <h2
          className={`color-grey font-weight-bolder ${
            window.innerWidth < 992 ? "text-align-center" : "text-align-left"
          }`}
        >
          Profile
        </h2>
        <form onSubmit={formSubmitHandler}>
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            placeholder="Enter your name"
            onInput={inputHandler}
            value={initialFormData.name.value}
            isValid={initialFormData.name.isValid}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid name."
          />
          <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            placeholder="Enter your email address"
            value={initialFormData.email.value}
            isValid={initialFormData.email.isValid}
            onInput={inputHandler}
            disabled={true}
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
          />
          <p
            className="text-align-left"
            style={{ color: "red", marginLeft: "7px", fontWeight: "bold" }}
          >
            <ExclamationIcon />
            Click here to verify email
          </p>
          <Input
            id="mobile"
            element="input"
            type="number"
            label="Mobile"
            placeholder="Enter your mobile number"
            value={initialFormData.mobile.value}
            isValid={initialFormData.mobile.isValid}
            onInput={inputHandler}
            validators={[VALIDATOR_FIXLENGTH(10)]}
            disabled={true}
            errorText="Please enter a valid mobile number (10 digits only)."
          />
          <br></br>
          <br></br>
          <Button variant="main" type="submit" width="max">
            Save changes
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Profile;
