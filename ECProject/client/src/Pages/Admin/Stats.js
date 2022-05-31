import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";

import Navigation from "../../components/Navbar/Navbar";
import StatsCard from "../../components/StatsCard/StatsCard";

const Stats = () => {
  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>

        <div className="text-center">
          <RedButton toPage="/admin/dashboard" btnName="Home" />
          <Row>
            <StatsCard
              linkBoshuk="/admin/dashboard"
              partyName="Party A"
              voteCount="176"
            />
            <StatsCard
              linkBoshuk="/admin/dashboard"
              partyName="Party B"
              voteCount="211"
            />
            <StatsCard
              linkBoshuk="/admin/dashboard"
              partyName="Party C"
              voteCount="121"
            />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Stats;
