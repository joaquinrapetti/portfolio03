import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaArrowDown } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Picture from "../assets/Picture.png";
import "./MainStyles.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left">
        <Link to="/about">Welcome! I'm</Link>
        <h1>Joaquin Rapetti</h1>
        <h4>Junior Developer.</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="right">
        <img className="picture" src={Picture} alt="" />
      </div>
      <div className="social-bar">
        <div className="social-content">
          <h4>Say hi and meet me:</h4>
          <ul>
            <li>
              <Link to="/https://www.linkedin.com/in/joaquin-rapetti-pozzoli/">
                <FaLinkedin size={30} style={{ color: "#d52d3f" }} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaGithub size={30} style={{ color: "#d52d3f" }} />
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaInstagram size={30} style={{ color: "#d52d3f" }} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="scroll-down">
          <h5>Scroll Down</h5>
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Main;
