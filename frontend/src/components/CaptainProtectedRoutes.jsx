import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const CaptainProtectedRoutes = ({ children }) => {
  const [auth, setAuth] = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  useEffect(() => {
    if (token && role == "user") {
      navigate("/home");
      return;
    }
    if (!token || role != "captain") {
      navigate("/captainLogin");
      return;
    }
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/captain/profile ",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          setIsLoading(false);
          setAuth((prev) => ({
            ...prev,
            profile: response.data.captain,
          }));
        }
      } catch (error) {
        if (role == "captain") {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
        }
        alert(
          error.response?.data?.message ||
            error.response?.data?.error ||
            "Some Error Occured"
        );
        navigate("/captainLogin");
      }
    };

    return () => {
      fetchProfile();
    };
  }, [token, role]);
  if (isLoading) {
    return <div className="mt-12 text-center font-semibold ">Loading...</div>;
  }

  return <>{children}</>;
};

export default CaptainProtectedRoutes;
