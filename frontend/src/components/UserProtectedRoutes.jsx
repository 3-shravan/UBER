import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const UserProtectedRoutes = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useAuth();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token || role !== "user") {
        navigate("/userLogin");
        return;
      }

      try {
        const response = await axios.get("http://localhost:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response);
        if (response.status == 200) {
          setIsLoading(false);
          setAuth((prev) => ({
            ...prev,
            profile: response.data.user,
          }));
        }
      } catch (error) {
        if (role == "user") {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
        }
        alert(
          error.response.data?.message ||
            error.response?.data?.error ||
            "Some Error Occured"
        );
        navigate("/userLogin");
      }
    };

    fetchProfile();
  }, [token, role]);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Loading...</h2>
      </div>
    );
  }

  return <>{children}</>;
};
export default UserProtectedRoutes;
