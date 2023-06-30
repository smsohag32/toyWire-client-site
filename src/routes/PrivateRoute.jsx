import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  const location = useLocation();
  if (loading) {
    return <Spinner />;
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }
};

export default PrivateRoute;
