import React from "react";
import { Card, Container, Col } from "react-bootstrap";


const StatsCard = ({partyName, voteCount}) => {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center"
        id="infoCard"
      >
        <Container>
        <Col xl={4} className="qr_card mx-auto">
        <Card className="text-center p-5">
          <Card.Title className="mb-5">{partyName}</Card.Title>
          <h3>{voteCount} Votes</h3>
        </Card>
      </Col>
        </Container>
      </section>
    </>
  )
}

export default StatsCard;
