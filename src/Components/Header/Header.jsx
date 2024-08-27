import React, { useRef } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import "./header.css";

import { Link } from "react-router-dom";
export default function Header() {
  const navbarRef = useRef();

  const showNavbar = () => {
    navbarRef.current.classList.toggle("active");
  };

  const hideNavbar = () => {
    navbarRef.current.classList.remove("active");
  };

  return (
    <header className="header">
      <div>
        <a href="/" className="logo-text">
          <span className="title-c">Dev</span>Rahul
          <span className="logo-t">.</span>
        </a>
      </div>
      <nav ref={navbarRef} className="navbar">
        <ul onClick={hideNavbar} className="nav-lsit">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="#skills" className="nav-link">
              Skills
            </a>
          </li>

          <li className="nav-item">
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <button className="btn btn-close" onClick={hideNavbar}>
          <RiCloseLargeLine />
        </button>
        <div className="nav-social">
          <a
            href="https://www.instagram.com/devwithrahul"
            target="_blank"
            className="social-icon"
          >
            {" "}
            <FaInstagram />
          </a>
          <a
            href="https://github.com/DevRahul06"
            target="_blank"
            className="social-icon s-color"
          >
            {" "}
            <FaGithub />
          </a>
          <a
            href="https://x.com/devwithrahul"
            target="_blank"
            className="social-icon"
          >
            {" "}
            <FaTwitter />
          </a>
        </div>
      </nav>
      <div className="social">
        <a
          href="https://www.instagram.com/devwithrahul"
          target="_blank"
          className="social-icon"
        >
          {" "}
          <FaInstagram />
        </a>
        <a
          href="https://github.com/DevRahul06"
          target="_blank"
          className="social-icon s-color"
        >
          {" "}
          <FaGithub />
        </a>
        <a
          href="https://x.com/devwithrahul"
          target="_blank"
          className="social-icon"
        >
          {" "}
          <FaTwitter />
        </a>
      </div>
      <button className="btn btn-menu" onClick={showNavbar}>
        <RiMenu3Line />
      </button>
    </header>
  );
}
