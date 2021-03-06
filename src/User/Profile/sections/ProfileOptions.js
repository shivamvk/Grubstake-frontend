import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileOption from "../components/ProfileOption";
import {
  MdDashboard as DashboardIcon,
  MdSecurity as SecurityIcon,
} from "react-icons/md";

const ProfileOptions = (props) => {
  return (
    <Row xs={1} lg={2}>
      <Col>
        <ProfileOption
          link="/user/dashboard/"
          icon={<DashboardIcon style={{ fontSize: "2rem", color: "deepskyblue" }} />}
          title="Dashboard"
          description="See your events and sponsor application status"
        />
        <br></br>
      </Col>
      <Col>
        <ProfileOption
          link="/"
          icon={<SecurityIcon style={{ fontSize: "2rem", color: "deepskyblue" }} />}
          title="Security"
          description="See your login details or change password"
        />
        <br></br>
      </Col>
    </Row>
  );
};

export default ProfileOptions;
