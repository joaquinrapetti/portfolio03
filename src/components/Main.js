import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Picture from "../assets/Picture.png";
import "./MainStyles.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left">
          <h1>junior developer</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy 
              text ever since the 1500s, when an unknown printer took a galley 
              of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into 
              electronic typesetting, remaining essentially unchanged.</p>
      </div>
      <div className="right">
        <img className="picture" src={Picture} alt="" />
      </div>
      <div className="social-bar">
          <h4>Say hi and meet me</h4>
        <ul>
          <li>
            <Link to="/">
              <FaLinkedin size={30} style={{ color: "#f8f8f8" }} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaGithub size={30} style={{ color: "#f8f8f8" }} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram size={30} style={{ color: "#f8f8f8" }} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Main;
