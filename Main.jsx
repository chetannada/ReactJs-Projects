import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/Layout/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    {/* Any Changes will be done from AppLayout Component */}
    <AppLayout />
  </StrictMode>
);
