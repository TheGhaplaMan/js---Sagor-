import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import Navigation from "../../components/Navbar/Navbar";
import QRCard from "../../components/QRCard/QRCard";
import axios from "axios";

const VerifyVoter = () => {
  const [uData, setUData] = useState({});

  const params = useParams();
  const { id } = params;
  // console.log(id);

  const apiDaki = async () => {
    const omuk = await axios.get(`http://localhost:4000/api/v1/admin/${id}`);
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
        <h4 className="text-end mt-1 pt-1"> Room No {uData.roomNumber}</h4>

        <div className="text-center">
          <RedButton toPage={`/admin/dashboard/${id}`} btnName="Home" />
          <QRCard title="Scan here" imgSrc={uData.adminQR} />
        </div>
      </Container>
    </>
  );
};

export default VerifyVoter;
