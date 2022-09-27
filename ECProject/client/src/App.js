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
import { AdmPrivateRoute, VoterPrivateRoute } from "./components/PrivateRoute";
import VoterCreate from "./Pages/User/CreateVoter/VoterCreate";
// import Alternative from "./Pages/User/Alternative";

const App = () => {
  // console.log(localStorage.getItem("token"));
  const tokko = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/login" />} />
        {/* Admin */}
        <Route exact path="/admin" element={<AdmPrivateRoute />}>
          <Route exact path="/admin/dashboard/:id" element={<Dashboard />} />
          <Route exact path="/admin/stats/:id" element={<Stats />} />
          <Route exact path="/admin/vote/:id" element={<VoteScreen />} />
          <Route exact path="/admin/create" element={<CreateAdmin />} />
          <Route
            exact
            path="/admin/verify-voter/:id"
            element={<VerifyVoter />}
          />
        </Route>

        <Route path="/admin/login" element={<Login />} />

        {/* Voter End */}
        <Route path="/login" element={<VoterLogin />} />
        <Route path="/user/create" element={<VoterCreate />} />

        <Route exact path="/user" element={<VoterPrivateRoute />}>
          <Route path="/user/:id" element={<UserInfo />} />
          <Route path="/user/otp" element={<OTP />} />
          <Route path="/user/scan/:id" element={<Scan />} />
          {/* <Route path="/user/alternative" element={<Alternative />} /> */}
          <Route path="/user/success" element={<Success />} />
          <Route path="/user/confirm/:id" element={<VoteConfirm />} />
          {/* hudai */}
        </Route>

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
