import React from "react";
import { useAuth } from "../context/AuthContext";

const CaptainHome = () => {
  const [auth] = useAuth();
  const { fullname } = auth.profile;
  console.log(auth.profile.fullname.firstname);
  return <div>Welcome {fullname.firstname} 👋</div>;
};

export default CaptainHome;
