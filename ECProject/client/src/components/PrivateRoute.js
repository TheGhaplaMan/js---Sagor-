import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const AdmPrivateRoute = () => {
  const auth = localStorage.getItem("token");
  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export const VoterPrivateRoute = () => {
  const auth = localStorage.getItem("voterToken");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
