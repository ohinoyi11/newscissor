import React from "react";
import NavBar from "./Navbar";
import "./Scissor.css";

import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SignUp from "./SignUp";
import CustomPricing from "./Custom-Pricing";

function Scissor() {
  return (
    <div className="scissor">
      <center>
        <div>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Custom-Pricing" element={<CustomPricing />} />
          </Routes>
        </div>
      </center>
    </div>
  );
}

export default Scissor;
