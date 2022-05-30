import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";

const VoteConfirm = () => {
  return (
    <>
      <Navigation text="Election" />;
      <div className="centerize">
        <h1 className="mb-5">Hold the Button to confirm your vote</h1>
        <RedButton btnName="CONFIRM" />
      </div>
    </>
  );
};

export default VoteConfirm;
