import React from "react";
import { Container } from "react-bootstrap";
import RedButton from "../../components/Button/Redbutton";
import Navigation from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navigation text="Election" />
      <Container>
        <div className="text-end mt-3">
          <RedButton toPage="/admin/create" btnName="Create New" />
        </div>

        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>
        <div className="text-center mt-5 pt-5">
          <br /> <br />
          <RedButton toPage="/admin/vote" btnName="Vote Screen" />
          <br /> <br />
          <RedButton
            toPage="/admin/verify-voter"
            btnName="Voter Verification"
          />
          <br /> <br />
          <RedButton toPage="/admin/stats" btnName="Center Stats" />
          <br /> <br />
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
