import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [auth] = useAuth();
  const { fullname } = auth.profile;
  return <div>Welcome {fullname.firstname} 👋</div>;
};

export default Home;
