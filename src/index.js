import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: (
      <div style={{ color: "black" }}>
        Not Found. <Link to={"/"}>Back To Home</Link>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
