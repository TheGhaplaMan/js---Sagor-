import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";
import Scanner from "../../components/Scanner/Scanner";

const Scan = () => {
  
  return (
    <>
      <Navigation text="Scan" />
      <div className="text-center mb-5 mt-5">

      <RedButton toPage="/" btnName="Home" />
      </div>
      <Scanner />
    </>
  );
};

export default Scan;
