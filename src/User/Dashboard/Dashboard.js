import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSection from "./sections/ProfileSection";
import DashboardSection from "./sections/DashboardSection";
import Footer from "../../shared/UIElements/Footer";

const DUMMY_EVENTS = [
  {
    id: "e1",
    basicDetails: {
      basics: {
        orgName: "JIIT, Noida",
        title: "Impressions",
        type: "College fest",
      },
      date: {
        startDate: new Date().toISOString(),
        // endDate: new Date(
        //   new Date().getTime() + 1000 * 60 * 60 * 24
        // ).toISOString(),
        endDate: null,
      },
      links: {
        website: "blabla.com",
        facebook: "fb.com/blabla",
        instagram: "ig.com/blabla",
      },
      location: {
        address: "JIIT, Sector 62",
        city: "Noida",
      },
      time: {
        startTime: "10:00",
        endTime: "5:00",
      },
    },
  },
];
const DUMMY_SPONSOR_APPLICATIONS = [];

const Dashboard = () => {
  const addEventHandler = () => {
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
