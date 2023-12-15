import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-right">
    <App />
  </ToastProvider>
);
