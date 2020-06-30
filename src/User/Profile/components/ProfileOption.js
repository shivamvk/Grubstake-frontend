import React from "react";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";

const ProfileOption = (props) => {
  const history = useHistory();
  const cardClickHandler = () => {
    history.push(props.link);
  };
  return (
    <Card className="profile__options-card" onClick={cardClickHandler}>
      <Card.Text>
        {props.icon}
        <h5 style={{ color: "lightskyblue", fontWeight: "bold" }}>{props.title}</h5>
        <h6 className="text-muted">{props.description}</h6>
      </Card.Text>
    </Card>
  );
};

export default ProfileOption;
