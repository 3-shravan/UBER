import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const UnprotectedRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  useEffect(() => {
    if (token && role == "user") {
      navigate("/home");
      return;
    }
    if (token && role == "captain") {
      navigate("captainHome");
      return;
    }
  }, [token, role]);

  return <Outlet/>
};

export default UnprotectedRoutes;
