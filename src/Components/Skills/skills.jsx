import React from "react";
import "./skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Skills() {
  

  return (
    <div className="section skill-section">
      <div className="s-title">
        <h1 className="skills-title"> Skills</h1>
      </div>
      <div className="s-section">
        <div className="skills-left">
          <div className="html s-card">
            <FaHtml5 className="s-icon" />
            <p className="s-name">HTML</p>
          </div>

          <div className="css s-card">
            <FaCss3Alt className="s-icon" />
            <p className="s-name">CSS</p>
          </div>

          <div className="js s-card">
            <IoLogoJavascript className="s-icon" />
            <p className="s-name">JavaScript</p>
          </div>

          <div className="react s-card">
            <FaReact className="react-icon s-icon" />
            <p className="s-name">React</p>
          </div>

          <div className="bootstrap s-card">
            <FaBootstrap className="s-icon" />
            <p className="s-name">Bootstrap</p>
          </div>

          <div className="tailwind s-card">
            <RiTailwindCssFill className="s-icon" />
            <p className="s-name">Tailwind</p>
          </div>

          <div className="python s-card">
            <FaPython className="s-icon" />
            <p className="s-name">Python</p>
          </div>

          <div className="django s-card">
            <SiDjango className="s-icon" />
            <p className="s-name">Django</p>
          </div>

        </div>
        <div className="skills-right">
          <div className="html s-line">
            <p className="s-name">HTML</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={90} />
          </div>
          <div className="css s-line">
            <p className="s-name">CSS</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={70} />
          </div>
          <div className="js s-line">
            <p className="s-name">JavaScript</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={70} />
          </div>

          <div className="react s-line">
            <p className="s-name">React</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={60} />
          </div>

          <div className="bootstrap s-line">
            <p className="s-name">Bootstrap</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={80} />
          </div>

          <div className="tailwind s-line">
            <p className="s-name">Tailwind</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={50} />
          </div>

          <div className="python s-line">
            <p className="s-name">Python</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={68} />
          </div>

          <div className="django s-line">
            <p className="s-name">Django</p>
            <ProgressBar className="progress-line" animateOnRender={true} borderRadius='5px'  bgColor='var(--gradient-color)' completed={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
