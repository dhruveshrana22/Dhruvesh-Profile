// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/Screen/Home/Home";
import { Grid } from "@mui/material";
import "./App.css";
import NavbarCompo from "./app/Component/Navbar";
import Follow from "./app/Component/Follow";
import About from "./app/Screen/About";
import Contect from "./app/Screen/Contect/Index";
import Portfolio from "./app/Screen/Portfolio";
import DetailScreen from "./app/Screen/DetailScreen";

function App() {
  return (
    <>
      <Router>
        <NavbarCompo />

        {/* <Follow /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contect" element={<Contect />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/DetailScreen" element={<DetailScreen />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
