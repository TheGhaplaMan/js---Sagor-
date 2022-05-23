import React from "react";
import UserOTP from "../../components/UserLogin/UserOTP";
import Navigation from "../../components/Navbar/Navbar";

const OTP = () => {
  return (
    <>
      <Navigation text="Election" />
      <UserOTP />
    </>
  );
};

export default OTP;
