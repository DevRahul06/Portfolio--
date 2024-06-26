import React from "react";
import aboutImage from "../../assets/images/about--svg.png";
import { FaInstagram, FaGithub, FaTwitter  } from "react-icons/fa";
import "./about.css";

export default function about() {
  return (
    <section className="section about-main">
      <div className="left">
        <div className="aboutimg">
          <img src={aboutImage} alt="" className="about-img" />
        </div>
      </div>
      <div className="right">
        <div>
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            Hello! I'm a frontend developer based in Ahmedabad, Gujarat, with
            one year of experience in creating user-friendly and responsive web
            designs. I am passionate about transforming ideas into digital
            realities, ensuring that every project I work on is visually
            appealing and easy to use. My goal is to craft engaging digital
            experiences with clean and efficient code. Let's bring your vision
            to life!
          </p>
          <div className="about-links">
            <a href="" className="resumebtn btn">
              Resume
            </a>
            <div className="about-social">
              <div className='about-social-icon social-icon'> <FaInstagram /></div>
              <div className='about-social-icon social-icon s-color'> <FaGithub /></div>
              <div className='about-social-icon social-icon'> <FaTwitter /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
