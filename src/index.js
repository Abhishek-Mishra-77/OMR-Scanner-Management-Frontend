import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
 import "animate.css"
import { ToastContainer } from "react-toastify";
import reportWebVitals from "./reportWebVitals";
import DataProvider from "./Store/DataProvider.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataProvider>
      <App />
      <ToastContainer />
    </DataProvider>
  </React.StrictMode>
);

reportWebVitals();
