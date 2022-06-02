import React from "react";
import { Container } from "react-bootstrap";

import AdminCreate from "../../components/CreateAdmin/AdminCreate";
import Navigation from "../../components/Navbar/Navbar";

const CreateAdmin = () => {
  return (
    <>
      <Navigation text="Election" />
      <AdminCreate />
    </>
  );
};

export default CreateAdmin;
