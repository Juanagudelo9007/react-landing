import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextP from "./Context/ContextP.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextP>
      <App />
    </ContextP>
  </StrictMode>
);
