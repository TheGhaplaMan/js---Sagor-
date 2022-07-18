import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import { qrCardData } from "../../data/data";
import axios from "axios";

const VoteScreen = () => {
  const [data, setData] = useState(qrCardData);

  const cardShuffle = data.sort(() => Math.random() - Math.random());

  const [uData, setUData] = useState({});

  const params = useParams();
  const { id } = params;
  // console.log(id);

  const apiDaki = async () => {
    // const omuk = await axios.get(`http://localhost:4000/api/v1/admin/${id}`, {Authorization: `Bearer ${localStorage.getItem("token")}`,});
    const omuk = await axios.get(
      `http://theghaplaman.herokuapp.com/api/v1/admin/${id}`,
      { Authorization: `Bearer ${localStorage.getItem("token")}` }
    );
    // console.log(omuk.data.findAdmin);
    setUData(omuk.data.findAdmin);
  };

  useEffect(() => {
    apiDaki();
  }, []);

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">{uData.userName}</h2>
        <h4 className="text-end mt-1 pt-1">Room No {uData.roomNumber}</h4>
        <div className="text-center">
          <RedButton toPage={`/admin/dashboard/${id}`} btnName="Home" />

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
