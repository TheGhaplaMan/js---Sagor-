import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import InfoCard from "../../components/InfoCard/InfoCard";
import RedButton from "../../components/Button/Redbutton";

const UserInfo = () => {
  return (
    <>
      <Navigation text="Election" />
      <div className="text-center mt-5">

      </div>
      <InfoCard linkBoshuk="/user/scan" />
    </>
  );
};

export default UserInfo;
