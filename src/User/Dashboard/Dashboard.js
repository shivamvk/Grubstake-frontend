import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSection from "./sections/ProfileSection";
import DashboardSection from "./sections/DashboardSection";

const Dashboard = () => {
  const DUMMY_EVENTS = [];
  const DUMMY_BRANDS = [];
  const DUMMT_VENDORS = [];

  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <ProfileSection />
        </Col>
        <Col md={12} lg={8}>
          <DashboardSection
            events={DUMMY_EVENTS}
            brands={DUMMY_BRANDS}
            vendors={DUMMT_VENDORS}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
