import { useContext } from "react";
import { AuthContex } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
  const { user, lodding } = useContext(AuthContex)
  if (lodding) {
    return <>
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </>
  }
  if (user) {
    return children
  }
  return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;