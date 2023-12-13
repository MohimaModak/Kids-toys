import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation()
  if (loading) {
    return (
      <p className="text-center text-4xl justify-center items-center mt-48">
        Loading
      </p>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/singin" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
