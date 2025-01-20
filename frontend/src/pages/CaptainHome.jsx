import React from "react";
import { useAuth } from "../context/AuthContext";

const CaptainHome = () => {
  const [auth] = useAuth();
  const { fullname } = auth.profile;
  return <div>Welcome {fullname.firstname} 👋</div>;
};

export default CaptainHome;
