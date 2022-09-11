import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import { useParams } from "react-router-dom";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import { qrCardData } from "../../data/data";
import axios from "axios";
import { get } from "../../apis/bebakApi";

const VoteScreen = () => {
  const [data, setData] = useState(qrCardData);

  const cardShuffle = data.sort(() => Math.random() - Math.random());

  const [uData, setUData] = useState({});
  const [centData, setCData] = useState({});

  const params = useParams();
  const { id } = params;
  // console.log(id);

  const apiDaki = async () => {
    // const omuk = await axios.get(`http://localhost:4000/api/v1/admin/${id}`, {Authorization: `Bearer ${localStorage.getItem("token")}`,});
    // const omuk = await axios.get(
    //   `http://theghaplaman.herokuapp.com/api/v1/admin/${id}`,
    //   { Authorization: `Bearer ${localStorage.getItem("token")}` }
    // );

    const res = await fetch(`http://localhost:4000/api/v1/admin/${id}`, {
      // const res = await fetch(
      //   `http://theghaplaman.herokuapp.com/api/v1/admin/${id}`,
      //   {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await res.json();
    // console.log(data.findAdmin);
    setUData(data.findAdmin);

    const cId = data.findAdmin.centerId;

    // console.log(omuk.data.findAdmin);
    // setUData(omuk.data.findAdmin);
    const cenn = await get(`http://localhost:4000/api/v1/center/${cId}`);
    // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
    // console.log(cenn);
    setCData(cenn);
  };

  useEffect(() => {
    apiDaki();
  }, []);

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-3 pt-3">{uData.userName}</h2>
        <h4 className="text-end mt-1 pt-1">Room No {uData.roomNumber}</h4>
        <div className="text-center">
          <RedButton toPage={`/admin/dashboard/${id}`} btnName="Home" />

          <Row>
            {cardShuffle.map((element) => {
              return <QRCard key={element.id} {...element} />;
            })}
          </Row>
          <h6 className="text-center display-3 fw-bold mt-3 pt-5">
            {centData.centerName}
          </h6>
        </div>
      </Container>
    </>
  );
};

export default VoteScreen;
