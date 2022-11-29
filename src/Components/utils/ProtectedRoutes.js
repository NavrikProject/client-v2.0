import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let location = useLocation();
  console.log(currentUser, isAuthenticated);
  if (isAuthenticated === false && !currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
