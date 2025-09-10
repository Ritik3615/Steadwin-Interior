import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // temporary token for frontend testing
  const token = localStorage.getItem("token") || "frontend-pass"; 
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;