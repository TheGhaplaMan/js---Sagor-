//rface - app.js er fundamental code snippet

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//importing GLOBAL css
import "./Global.scss";
//Components

// adding react router dom
import { Routes, Route } from "react-router-dom";
// import Login from "./Pages/Login";
import Login from "./Pages/Admin/Login";
import Dashboard from "./Pages/Admin/Dashboard";
import VerifyVoter from "./Pages/Admin/VerifyVoter";
import VoteScreen from "./Pages/Admin/VoteScreen";
import Stats from "./Pages/Admin/Stats";
import VoterLogin from "./Pages/User/VoterLogin";
import OTP from "./Pages/User/OTP";
import UserInfo from "./Pages/User/UserInfo";
import Error from "./Pages/Error";
import Scan from "./Pages/User/Scan";
import Success from "./Pages/User/Success";
import VoteConfirm from "./Pages/User/VoteConfirm";

const App = () => {
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/verify-voter" element={<VerifyVoter />} />
        <Route path="/admin/vote" element={<VoteScreen />} />
        <Route path="/admin/stats" element={<Stats />} />

        {/* Voter End */}
        <Route path="/" element={<UserInfo />} />
        <Route path="/user/login" element={<VoterLogin />} />
        <Route path="/user/otp" element={<OTP />} />
        <Route path="/user/scan" element={<Scan />} />
        <Route path="/user/success" element={<Success />} />
        <Route path="/user/confirm-vote" element={<VoteConfirm />} />

        {/* hudai */}
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
