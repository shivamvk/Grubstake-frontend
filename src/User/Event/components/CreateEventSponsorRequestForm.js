import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaRupeeSign as RupeeIcon } from "react-icons/fa";
import ToggleSwitch from "../../../shared/FormElements/ToggleSwitch";
import Button from "../../../shared/FormElements/Button";
import { useHistory } from "react-router-dom";

const CreateEventSponsorRequestForm = (props) => {
    let history = useHistory();
  const [sponsorsAmountRange, setSponsorsAmountRange] = useState({
    min: 0,
    max: 100,
  });
  const [goodiesRange, setGoodiesRange] = useState({
    min: 0,
    max: 100,
  });
  const [couponsRange, setCouponsRange] = useState({
    min: 0,
    max: 100,
  });
  const [vouchersRange, setVouchersRange] = useState({
    min: 0,
    max: 100,
  });
  const [andor, setAndOr] = useState("AND");
  const andOrCheckHandler = (checked) => {
    if (checked) {
      setAndOr("OR");
    } else {
      setAndOr("AND");
    }
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let inputs = {
      id: props.eventId,
      sponsorRequestDetails: {
        inCash: {
          sponsorsAmountRange: sponsorsAmountRange,
          sponsorsAmountUnit: "K",
        },
        andOr: andor,
        inKind: {
          goodiesRange: goodiesRange,
          couponsRange: couponsRange,
          vouchersRange: vouchersRange,
        },
      },
    };
    console.log(inputs);
    history.push("/create/event/4?event-id=" + props.eventId);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <h5 className="color-dark-grey text-align-left">In cash:</h5>
      <br></br>
      <Col className="d-flex justify-content-left">
        <p>
          <span className="color-grey">Amount range:</span>
          <span className="color-dark-grey">
            <RupeeIcon className="color-dark-grey" />
            {sponsorsAmountRange.min}K To {sponsorsAmountRange.max}K
          </span>
        </p>
      </Col>
      <Col>
        <InputRange
          minValue={0}
          maxValue={1000}
          formatLabel={(value) => `${value}K`}
          allowSameValues={false}
          value={sponsorsAmountRange}
          onChange={(value) => setSponsorsAmountRange(value)}
        />
      </Col>
      <br></br>
      <br></br>
      <Row className="justify-content-center">
        <ToggleSwitch
          onChange={(checked) => andOrCheckHandler(checked)}
          uncheckedText="And"
          checkedText="Or"
          checked={false}
        />
      </Row>
      <br></br>
      <br></br>
      <h5 className="color-dark-grey text-align-left">In kind:</h5>
      <br></br>
      <Col className="d-flex justify-content-left">
        <p>
          <span className="color-grey">Goodies range: </span>
          <span className="color-dark-grey">
            {goodiesRange.min} To {goodiesRange.max}
          </span>
        </p>
      </Col>
      <Col>
        <InputRange
          minValue={0}
          maxValue={1000}
          allowSameValues={false}
          value={goodiesRange}
          onChange={(value) => setGoodiesRange(value)}
        />
        <br></br>
      </Col>
      <Col className="d-flex justify-content-left">
        <p>
          <span className="color-grey">Coupons range: </span>
          <span className="color-dark-grey">
            {couponsRange.min} To {couponsRange.max}
          </span>
        </p>
      </Col>
      <Col>
        <InputRange
          minValue={0}
          maxValue={1000}
          allowSameValues={false}
          value={couponsRange}
          onChange={(value) => setCouponsRange(value)}
        />
        <br></br>
      </Col>
      <Col className="d-flex justify-content-left">
        <p>
          <span className="color-grey">Vaouchers range: </span>
          <span className="color-dark-grey">
            {vouchersRange.min} To {vouchersRange.max}
          </span>
        </p>
      </Col>
      <Col>
        <InputRange
          minValue={0}
          maxValue={1000}
          allowSameValues={false}
          value={vouchersRange}
          onChange={(value) => setVouchersRange(value)}
        />
        <br></br>
      </Col>
      <br></br>
      <br></br>
      <Button variant="main" type="submit" width="max">
        Save and continue
      </Button>
    </form>
  );
};

export default CreateEventSponsorRequestForm;
