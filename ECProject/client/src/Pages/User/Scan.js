import React, { useEffect, useState } from "react";

import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";
import QRscanner from "../../components/Scanner/Scanner";
import { get } from "../../apis/bebakApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Scan = () => {
  const navigate = useNavigate();
  const [uData, setUData] = useState({});
  const [centData, setCData] = useState({});
  const params = useParams();
  // console.log(params, "hudai");

  const { id } = params;
  // console.log(params)

  useEffect(() => {
    const pailam = async () => {
      const vData = await get(
        `https://banglaec.herokuapp.com/api/v1/voter/profile/${id}`
      );
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(data.findAdmin);
      console.log(vData);
      setUData(vData.findVoter);

      if (vData.findVoter.voteStatus.status == true) {
        window.alert("YOU HAVE ALREADY VOTED FOR THIS ELECTION");
        const divOff = true;
      }

      const cId = vData.findVoter.centerId;

      const cenn = await get(
        `https://banglaec.herokuapp.com/api/v1/center/${cId}`
      );
      // const data = await get(`http://theghaplaman.herokuapp.com/api/v1/admin/${id}`);
      // console.log(cenn);
      setCData(cenn);
    };
    pailam();
  }, []);

  return (
    <>
      <Navigation text="Scan" />
      <div className="mt-2 text-end">
        {/* <RedButton toPage="/user/alternative" btnName="Alternative" /> */}
      </div>
      <div className="text-center mb-5 mt-5">
        <button
          className="btn_shadow"
          style={{
            backgroundColor: "#CF8181",
            color: "#000",
          }}
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <Container>
        <div className="text-center">
          <QRscanner />
        </div>
      </Container>
    </>
  );
};

export default Scan;
