import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// 🔹 Sync CSS variable → meta theme-color
const themeColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--color-brand-teal")
  .trim();

const metaTheme = document.querySelector('meta[name="theme-color"]');
if (metaTheme && themeColor) {
  metaTheme.setAttribute("content", themeColor);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
