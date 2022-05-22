//rface - app.js er fundamental code snippet

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//importing GLOBAL css
import "./Global.scss";
//Components

// adding react router dom
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import VerifyVoter from "./Pages/VerifyVoter";
import VoteScreen from "./Pages/Vote Screen";
import Stats from "./Pages/Stats";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/verify-voter" element={<VerifyVoter />} />
        <Route path="/vote" element={<VoteScreen />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </>
  );
};

export default App;
