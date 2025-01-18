import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null,
    profile: null,
  });

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
