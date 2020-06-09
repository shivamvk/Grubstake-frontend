import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSection from "./sections/ProfileSection";
import DashboardSection from "./sections/DashboardSection";
import Footer from "../../shared/UIElements/Footer";

const Dashboard = () => {
  let [DUMMY_EVENTS, setDummyEvents] = useState([]);
  const DUMMY_SPONSOR_APPLICATIONS = [];
  const addEventHandler = () => {
    setDummyEvents((DUMMY_EVENTS) => [
      ...DUMMY_EVENTS,
      {
        id: "e" + DUMMY_EVENTS.length,
        image:
          "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        title: "Event " + DUMMY_EVENTS.length,
        description: "Awesome event " + DUMMY_EVENTS.length,
      },
    ]);
    console.log(DUMMY_EVENTS);
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={12} lg={4}>
            <h2
              className={`color-grey font-weight-bolder ${
                window.innerWidth < 992
                  ? "text-align-center"
                  : "text-align-left"
              }`}
            >
              Dashboard
            </h2>
            <br></br>
            {window.innerWidth > 992 && (
              <ProfileSection
                events={DUMMY_EVENTS}
                sponsorApplications={DUMMY_SPONSOR_APPLICATIONS}
              />
            )}
          </Col>
          <Col md={12} lg={8}>
            {window.innerWidth > 992 && (
              <>
                <br></br>
                <br></br>
              </>
            )}
            <DashboardSection
              events={DUMMY_EVENTS}
              addEvent={addEventHandler}
            />
          </Col>
        </Row>
      </Container>
      <br></br>
      <Footer />
    </>
  );
};

export default Dashboard;
