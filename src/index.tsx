import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import MyForm from "./components/Login";
import Home from "./components/Home";
import MyInfo from "./components/User"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/form" element={<MyForm />} />
      <Route path="/extra" element={<h1>Extra</h1>} />
      <Route path="/contact" element={<h1>Contact</h1 >} />
      <Route path="/me" element={<MyInfo />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
