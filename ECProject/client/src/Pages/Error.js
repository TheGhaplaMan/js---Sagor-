import React from "react";

import Navigation from "../components/Navbar/Navbar";
import RedButton from "../components/Button/Redbutton";

const Error = () => {
  return (
    <>
      <Navigation text="Error" />
      <div className="centerize">
        <h1 className="mb-5">NOT FOUNDDDDDDDD</h1>
        <RedButton toPage="/" btnName="Back To Home" />
      </div>
    </>
  );
};

export default Error;
