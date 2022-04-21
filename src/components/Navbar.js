import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact">Contact Me</Link>
            </li>
            <li>
              <Link to="/">Download CV</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
