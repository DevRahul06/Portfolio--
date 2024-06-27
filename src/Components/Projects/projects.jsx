import React, {useEffect}from "react";
import uniqid from "uniqid";
import "./projects.css";
import { projects } from "../../../Projects.js";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects() {
  useEffect(()=>{
    AOS.init({
      duration:5000,
      easing:'ease-in-out',
    })
  },[])
  

  if (!projects.length) return null;

  return (
    <div className="section p-section">
      <div className="p-title">
        <h1 className="projects-title">Projects</h1>
      </div>

      <div className="project-grid">
        {projects.map((project) => {
          return (
            <div key={uniqid()} data-aos="fade-up" className="project-card">
              <div className="p-img">
                <img src={project.img} alt="" className="p-image" />
              </div>
              <div className="p-title">
                <p className="p-name">{project.name}</p>
              </div>
              <div className="p-description">
                <p className="p-desc">{project.description}</p>
              </div>
              <div className="btns p-btns">
                <a className="btn p-btn" href={project.sourceCode}>SourceCode</a>
                <a className="btn p-btn" href={project.livePreview}>LivePreview</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
