import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import axios from "axios";
import { get } from "../../apis/bebakApi";

const VerifyVoter = () => {
  const [uData, setUData] = useState({});
  const [centData, setCData] = useState({});

  const params = useParams();
  const { id } = params;
  // console.log(id);

  useEffect(() => {
    const pailam = async () => {
      const data = await get(`http://localhost:4000/api/v1/admin/${id}`);
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
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

    pailam();
  }, []);

  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">{uData.userName}</h2>
        <h4 className="text-end mt-1 pt-1"> Room No {uData.roomNumber}</h4>

        <div className="text-center">
          <RedButton toPage={`/admin/dashboard/${id}`} btnName="Home" />
          <QRCard title="Scan here" imgSrc={uData.adminQR} />
        </div>
        <h6 className="text-center display-3 fw-bold mt-3 pt-5">
          {centData.centerName}
        </h6>
      </Container>
    </>
  );
};

export default VerifyVoter;
