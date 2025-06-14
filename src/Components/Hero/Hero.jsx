import React from "react";
import "./hero.css";
import heroImage from "../../assets/images/hero-img.svg";
import About from "../About/about.jsx";
import Skills from "../Skills/skills.jsx";
import Projects from "../Projects/projects.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
// import AOS from 'aos';
// import "aos/dist/aos.css";

export default function Hero() {
  
  return (
    <div className="all-section">
      <main className="section main">
        <div className="hero-left">
          <h1 className="hero-title">
            Hi, I'm &nbsp; <span className="tc">DevRahul</span>
          </h1>
          <p className="hero-subtitle">
            <span className="stc">Front</span>end Developer
          </p>
          <p className="hero-text">
            Ahmedabad based Frontend developer creating user-friendly and
            responsive web designs. Turning ideas into digital realities.
          </p>
          <div className="btns">
            <a href="#contact" className="btn hero-btn">
              Get In Touch
            </a>
            <a href="#projects" className="btn hero-btn">
              Browse Projects
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="heroimg">
            <img className="hero-img" src={heroImage} alt="Image" />
          </div>
        </div>
      </main>
      <section id="about">
        <About className='about' />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {/* <footer> */}
        <Footer/>
      {/* </footer> */}
    </div>
  );
}
