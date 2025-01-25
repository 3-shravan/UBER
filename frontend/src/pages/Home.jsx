import React from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { auth, logout } = useAuth();
  const { fullname } = auth?.profile || "";
  return (
    <div>
      <h1>Welcome {fullname?.firstname} 👋</h1>
      <button
        onClick={logout}
        className="bg-red-400 p-2 rounded text-red-900 font-bold hover:bg-black"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
