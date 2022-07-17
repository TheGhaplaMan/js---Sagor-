import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import { qrCardData } from "../../data/data";

const VoteScreen = () => {
  
  const [data, setData] = useState(qrCardData);
  
  const cardShuffle = data.sort(() => Math.random() - Math.random());

  const [uData, setUData] = useState({});
  
  const params = useParams();
  console.log(params + "hudai");
  const { id } = params;
  console.log(id);

  const getAdmin = async () => {
    const res = await fetch(`http://localhost:4000/api/v1/admin/${id}`, {
    // const res = await fetch(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data.findAdmin);
    setUData(data.findAdmin);
  }
  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">{uData.userName}</h2>
        <h4 className="text-end mt-1 pt-1">Room No  {uData.roomNumber}</h4>
        <div className="text-center">
          <RedButton toPage="/admin/dashboard/:id" btnName="Home" />

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
