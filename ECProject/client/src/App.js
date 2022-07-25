//rface - app.js er fundamental code snippet

import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//importing GLOBAL css
import "./Global.scss";
//Components

// adding react router dom
import { Routes, Route, Navigate } from "react-router-dom";
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
import CreateAdmin from "./Pages/Admin/CreateAdmin";
import axios from "axios";

const App = () => {
  // console.log(localStorage.getItem("token"));
  const tokko = localStorage.getItem("token");
  return (
    <>
      <Routes>
        {/* Admin */}
        <Route
          path="/admin/dashboard/:id"
          element={tokko ? <Dashboard /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/create"
          element={tokko ? <CreateAdmin /> : <Navigate to="/admin/login" />}
        />
        <Route path="/admin/login" element={<Login />} />
        <Route
          path="/admin/verify-voter/:id"
          element={tokko ? <VerifyVoter /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/vote/:id"
          element={tokko ? <VoteScreen /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/stats/:id"
          element={tokko ? <Stats /> : <Navigate to="/admin/login" />}
        />

        {/* Voter End */}
        <Route path="/" element={<UserInfo />} />
        <Route path="/user/login" element={<VoterLogin />} />
        <Route path="/user/otp" element={<OTP />} />
        <Route path="/user/scan" element={<Scan />} />
        <Route path="/user/success" element={<Success />} />
        <Route path="/user/confirm-vote" element={<VoteConfirm />} />
        {/* hudai */}
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </>
  );
};

export default App;
