import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserLogin from "./pages/user/UserLogin";
import UserRegister from "./pages/user/UserRegister";
import CaptainLogin from "./pages/captain/CaptainLogin";
import CaptainRegister from "./pages/captain/CaptainRegister";
import Home from "./pages/Home";
import CaptainHome from "./pages/CaptainHome";
import UnprotectedRoutes from "./components/UnprotectedRoutes";
import UserProtectedRoutes from "./components/UserProtectedRoutes";
import CaptainProtectedRoutes from "./components/CaptainProtectedRoutes";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<UnprotectedRoutes />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/captainLogin" element={<CaptainLogin />} />
          <Route path="/captainRegister" element={<CaptainRegister />} />
        </Route>

        <Route
          path="/home"
          element={
            <UserProtectedRoutes>
              <Home />
            </UserProtectedRoutes>
          }
        />
        <Route
          path="/captainHome"
          element={
            <CaptainProtectedRoutes>
              <CaptainHome />
            </CaptainProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
