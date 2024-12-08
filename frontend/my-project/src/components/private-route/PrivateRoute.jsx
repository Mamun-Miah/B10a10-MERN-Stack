import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextProvider } from "../../AuthContex";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContextProvider); 

  
  if (loading) {
    return <div>Loading...</div>; 
  }

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

 
  return children;
};

export default PrivateRoute;
