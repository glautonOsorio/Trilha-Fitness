import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GlobalStyle } from "./Global.style.jsx";
import { AppRouter } from "./routes/AppRoutes.jsx";
import { RouterProvider } from "react-router-dom";
import { TrailsContextProvider } from "./contexts/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TrailsContextProvider>
      <GlobalStyle />
      <RouterProvider router={AppRouter} />
    </TrailsContextProvider>
  </React.StrictMode>
);
