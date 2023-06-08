import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  let location = useLocation();
  if (isAuthenticated === false && !currentUser) {
    return (
      toast.error("Login in to continue.......", {
        position: "top-center",
      }),
      (<Navigate to="/login" state={{ from: location }} replace />)
    );
  }
  return children;
};

export default ProtectedRoute;
