import ReactDOM from "react-dom/client";
import React, { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main"

import "./index.css";

const App = () => {

  return <BrowserRouter>
    <Main />
  </BrowserRouter>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)