import React from "react";
import AdminLogin from "../../components/AdminLogin/AdminLogin";
import Navigation from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <>
      <Navigation text="Election" />
      <AdminLogin />
    </>
  );
};

export default Login;
