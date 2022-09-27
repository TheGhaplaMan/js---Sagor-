import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation text="Election" />
      <div className="centerize">
        <h1 className="mb-5">Successssssss!</h1>
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
      </div>
    </>
  );
};

export default Success;
