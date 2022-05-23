import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../../components/Navbar/Navbar";

const VerifyVoter = () => {
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

export default VerifyVoter;
