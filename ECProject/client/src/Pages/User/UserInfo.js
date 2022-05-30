import React from "react";
import Navigation from "../../components/Navbar/Navbar";
import InfoCard from "../../components/InfoCard/InfoCard";

const UserInfo = () => {
  return (
    <>
      <Navigation text="Election" />
      <InfoCard linkBoshuk="/user/scan" />
    </>
  );
};

export default UserInfo;
