import React from "react";
import { Button, Container } from "react-bootstrap";
import RedButton from "../components/Button/Redbutton";
import Navigation from "../components/Navbar/Navbar";

const Stats = () => {
  return (
    <>
      <Navigation text="Election" />
      <Container>
        <h2 className="text-center mt-5 pt-5">Admin</h2>
        <h4 className="text-end mt-1 pt-1">Room No 103</h4>
      </Container>
    </>
  );
};

export default Stats;
