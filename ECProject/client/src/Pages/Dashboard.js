import React from "react";
import { Button, Container } from "react-bootstrap";
import RedButton from "../components/Button/Redbutton";
import Navigation from "../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>
        <div className="text-center mt-5 pt-5">
          <RedButton btnName="Vote Screen" />
          <br /> <br />
          <RedButton btnName="Voter Verification" />
          <br /> <br />
          <RedButton btnName="Center Stats" />
          <br /> <br />
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
