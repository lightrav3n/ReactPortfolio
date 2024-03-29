// 1. install react-router
import React from "react";
import ReactDOM from "react-dom/client";
// 2. import BrowserRouter
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
