import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = sessionStorage.getItem("token"); // check sessionStorage
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
