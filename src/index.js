import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import LoginPage from "./Pages/LoginPage";
import { routes } from "./Routes/routes";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(routes);
root.render(
  <NextUIProvider>
    <RouterProvider router={router} />
  </NextUIProvider>
);
