import React, { useState } from "react";
import {  Container, Row, Col } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";

import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import StatsCard from "../../components/StatsCard/StatsCard";
import { qrCardData } from "../../data/data";

const Stats = () => {

  const [data, setData] = useState(qrCardData)
  const cardShuffle = data.sort(() => Math.random() - Math.random());
  
  
  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>
        
        <div className="text-center">
          <RedButton toPage="/" btnName="Home" />
          <Row >
        
            {/* <StatsCard linkBoshuk="/" partyName="Party A" voteCount="176" />
            <StatsCard linkBoshuk="/" partyName="Party B" voteCount="211" />
            <StatsCard linkBoshuk="/" partyName="Party C" voteCount="121" /> */}

{cardShuffle.map((element) => {
            return <StatsCard  partyName={element.title} {...element} />;
          })}
         
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Stats;
