import React from "react";

import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";
import Scanner from "../../components/Scanner/Scanner";
import { useNavigate } from "react-router-dom";

const Scan = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navigation text="Scan" />
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
        {/* <RedButton onclick=navigate(-1) btnName="Home" /> */}
      </div>
      <Scanner />
    </>
  );
};

export default Scan;
