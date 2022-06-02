import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";
import Scanner from "../../components/Scanner/Scanner";

const Scan = () => {
  return (
    <>
      <Navigation text="Election" />;
      <Scanner />
    </>
  );
};

export default Scan;
