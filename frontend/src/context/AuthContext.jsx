import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getToken, getRole, removeRoleAndToken } from "../utils/LocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({
    token: getToken(),
    role: getRole(),
    profile: null,
  });

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:3000/logout", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      if (response.status === 200) {
        removeRoleAndToken();
        setAuth({
          token: null,
          role: null,
          profile: null,
        });
        navigate("/userLogin");
      }
    } catch (error) {
      const errors =
        error.response.data?.message ||
        error.response.data?.error ||
        "Something went wrong";
      alert(errors);
    }
  };

  const logoutCaptain = async () => {
    try {
      const response = await axios.get("http://localhost:3000/captain/logout", {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      if (response.status === 200) {
        removeRoleAndToken();
        setAuth({
          token: null,
          role: null,
          profile: null,
        });
        navigate("/captainLogin");
      }
    } catch (error) {
      const errors =
        error.response.data?.message ||
        error.response.data?.error ||
        "Something went wrong";
      alert(errors);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout, logoutCaptain }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
