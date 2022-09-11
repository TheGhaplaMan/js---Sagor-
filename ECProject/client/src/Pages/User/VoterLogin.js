import React, { useState } from "react";
import UserInput from "../../components/UserLogin/UserInput";
import Navigation from "../../components/Navbar/Navbar";
import RedButton from "../../components/Button/Redbutton";

const VoterLogin = () => {
  const [hide, setHide] = useState(false);

  return (
    <>
      <Navigation text="Election" />
      <UserInput />
      
    </>
  );
};

export default VoterLogin;
