//rface - app.js er fundamental code snippet

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//importing GLOBAL css
import "./Global.scss";
//Components
import AdminLogin from "./components/AdminLogin/AdminLogin";

// adding react router dom
import { Routes, Route } from "react-router-dom";
import AdminInput from "./components/AdminInput/AdminInput";

const App = () => {
  return (
    <>
      <AdminLogin text="Election" />
      <AdminInput text="Admin" />
    </>
  );
};

export default App;
