import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSection from "./sections/ProfileSection";
import DashboardSection from "./sections/DashboardSection";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col md={12} lg={4}>
          <ProfileSection />
        </Col>
        <Col md={12} lg={8}>
          <DashboardSection />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
