import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import UserContext from "./context/userContext.jsx";
import CaptainContext from "./context/captianContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserContext>
          <CaptainContext>
            <App />
          </CaptainContext>
        </UserContext>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
