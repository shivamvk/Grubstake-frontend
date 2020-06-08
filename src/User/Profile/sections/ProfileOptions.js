import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileOption from "../components/ProfileOption";
import {
  MdDashboard as DashboardIcon,
  MdSecurity as SecurityIcon,
} from "react-icons/md";
import { BsBookmarksFill as SavedIcon } from "react-icons/bs";

const ProfileOptions = (props) => {
  return (
    <Row xs={1} lg={3}>
      <Col>
        <ProfileOption
          link="/user/dashboard/"
          icon={<DashboardIcon style={{ fontSize: "2rem", color: "grey" }} />}
          title="Dashboard"
          description="See your events and sponsor application status"
        />
        <br></br>
      </Col>
      <Col>
        <ProfileOption
          link="/"
          icon={<SavedIcon style={{ fontSize: "2rem", color: "grey" }} />}
          title="Saved events"
          description="See your saved/marked events"
        />
        <br></br>
      </Col>
      <Col>
        <ProfileOption
          link="/"
          icon={<SecurityIcon style={{ fontSize: "2rem", color: "grey" }} />}
          title="Security"
          description="See your login details or change password"
        />
        <br></br>
      </Col>
    </Row>
  );
};

export default ProfileOptions;
