// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/Screen/Home/Home";
import { Grid } from "@mui/material";
import "./App.css";
import NavbarCompo from "./app/Component/Navbar";
import Follow from "./app/Component/Follow";

function App() {
  return (
    <>
      <Router>
        <NavbarCompo />

        <Follow />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
