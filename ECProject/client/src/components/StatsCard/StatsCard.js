import React from "react";
import { Card, Container, Col } from "react-bootstrap";

const StatsCard = ({ partyName, voteCount }) => {
  return (
    <>
      <Col xl={4} className="qr_card">
        <Card className="text-center mt-5 p-5">
          <Card.Title className="mb-5">{partyName}</Card.Title>
          <h3>{voteCount} Votes</h3>
        </Card>
      </Col>
    </>
  );
};

export default StatsCard;
