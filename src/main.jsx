import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GlobalStyle } from "./Global.style.jsx";
import { AppRouter } from "./routes/AppRoutes.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
