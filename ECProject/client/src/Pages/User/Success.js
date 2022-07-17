import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";

const Success = () => {
  return (
    <>
      <Navigation text="Election" />
      <div className="centerize">
        <h1 className="mb-5">Successssssss!</h1>
        <RedButton toPage="/" btnName="Home" />
      </div>
    </>
  );
};

export default Success;
