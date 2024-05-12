import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import PortalPage from "./Pages/portalPage";
import DetailsPage from "./Pages/detailsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PortalPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  </BrowserRouter>
);
