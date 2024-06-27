import React,{useEffect} from "react";
import "./contact.css";
import contact from "../../assets/images/digital-contract.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {

  useEffect(()=>{
    AOS.init({    
      duration : 5000
    })
  },[])
  return (
    <React.Fragment>
      <div className="section con">
        <div className="contact-left" >
          <div className="contactimg">
            <img src={contact} data-aos="fade-left" alt="" className="contact-img" />
          </div>
        </div>
        <div className="contact-right">
          <div className="container" >
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-text">
              If you have any questions or want to discuss a project, please
              fill out the form below and I will get back to you as soon as
              possible.
            </p>
            <form className="contact-form">
              <div className="fileds">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input type="text" className="input" placeholder="Enter Name" />
              </div>

              <div className="fileds">
                <label htmlFor="name" className="label">
                  Email
                </label>
                <input
                  type="email"
                  className="input"
                  placeholder="abc@gmail.com"
                />
              </div>

              <div className="fileds">
                <label htmlFor="name" className="label">
                  Message
                </label>
                <textarea
                  type="text"
                  rows="8"
                  className="input"
                  placeholder="Type something here...."
                />
              </div>

              <div className="btns">
                <a href="" className="submit">
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
