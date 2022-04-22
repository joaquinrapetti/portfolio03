import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.svg";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    // console.log("clicked");
    setClick((prevClick) => !prevClick);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} className="logo" alt="logo" />
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
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
          <button className="btn-download">Download CV</button>
        </li>
      </ul>
      <div onClick={handleClick} className="hamburguer">
        {click ? (
          <FaTimes size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
