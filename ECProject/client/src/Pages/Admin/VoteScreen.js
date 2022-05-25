import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import { qrCardData } from "../../data/data";

const VoteScreen = () => {
  const [data, setData] = useState(qrCardData);
  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>

        <Row>
          {data.map((element) => {
            return <QRCard key={element.id} {...element} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default VoteScreen;
