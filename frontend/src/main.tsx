import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Contacts from "./routes/contacts";
import About from "./routes/about";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="about" element={<About />} />
    </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
