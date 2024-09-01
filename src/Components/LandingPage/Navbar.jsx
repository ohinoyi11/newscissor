import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">My URLs</Link>
        </li>
        <li>
          <a href="/about">Features</a>
        </li>
        <li>
          <a href="/services">Pricing</a>
        </li>
        <li>
          <a href="/services">Analytics</a>
        </li>
        <li>
          <a href="/contact">FAQs</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <button className="login-button">
          <NavLink to="login">Login</NavLink>
        </button>
        <button className="signup-button">
          <NavLink to="SignUp">Try for free</NavLink>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
