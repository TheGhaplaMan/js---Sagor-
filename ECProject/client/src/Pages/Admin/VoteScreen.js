import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import { qrCardData } from "../../data/data";

const VoteScreen = () => {
  const [data, setData] = useState(qrCardData);

  const cardShuffle = data.sort(() => Math.random() - Math.random());

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>
        <div className="text-center">
          <RedButton toPage="/admin/dashboard" btnName="Home" />

          <Row>
            {cardShuffle.map((element) => {
              return <QRCard key={element.id} {...element} />;
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default VoteScreen;
