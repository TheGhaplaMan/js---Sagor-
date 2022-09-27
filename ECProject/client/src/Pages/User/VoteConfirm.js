import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";
import { useParams } from "react-router-dom";
import { get } from "../../apis/bebakApi";
import { useNavigate } from "react-router-dom";

const VoteConfirm = () => {
  const navigate = useNavigate();

  // const [uData, setUData] = useState({});
  const [centData, setCData] = useState({});
  const params = useParams();
  // console.log(params, "hudai");

  const { id } = params;

  useEffect(() => {
    const pailam = async () => {
      const data = await get(`http://localhost:4000/api/v1/candidate/${id}`);
      console.log(data);
      // setUData(data.findAdmin);
    };
    pailam();
  }, []);
  return (
    <>
      <Navigation text="Election" />;
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
      <div className="text-center">
        <h1 className="mb-5">Hold the Button to confirm your vote</h1>
        <RedButton btnName="CONFIRM" />
      </div>
    </>
  );
};

export default VoteConfirm;
