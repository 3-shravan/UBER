import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { removeRoleAndToken } from "../utils/LocalStorage";

const UserProtectedRoutes = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { auth, setAuth } = useAuth();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token && role == "captain") {
      navigate("/captainHome");
      return;
    }
    if (!token || role != "user") {
      navigate("/userLogin");
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status == 200) {
          setIsLoading(false);
          setAuth((prev) => ({
            ...prev,
            profile: response.data.user,
          }));
        }
      } catch (error) {
        if (role == "user") {
          removeRoleAndToken();
        }
        const errors =
          error.response?.data?.message ||
          error.response?.data?.error ||
          "Some Error Occured";
        alert(errors);
        navigate("/userLogin");
      }
    };

    fetchProfile();
  }, [token, role]);

  if (isLoading) {
    return <div className="mt-12 text-center font-semibold ">Loading...</div>;
  }

  return <>{children}</>;
};
export default UserProtectedRoutes;
