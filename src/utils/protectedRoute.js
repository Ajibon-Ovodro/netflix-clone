import React from "react";
import { checkAuth } from "./auth";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (checkAuth()) {
    return <Route {...props} />;
  }
  return <Redirect to={"/login"} />;
};

export default ProtectedRoute;
