import React, { useRef } from "react";
import contactImage from "../../assets/images/contact-img.svg";
import "./contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const formref = useRef()

  const serviceId = "service_e926qeo";
  const templateId = "template_2swgx0i";
  const publicKey = "G3PCGRetAKvAunpX2";

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(serviceId, templateId, formref.current, {
      publicKey: publicKey,
    })
    .then(
      () => {
        
      },
      (error) => {
        
      },
    );

    e.target.reset()
  };

  return (
    <React.Fragment>
      <section className="contact" id="contact">
        <div className="contact-container">
          <div className="contact-content">
            <h1 className="contact-title">Contact Me</h1>
            <p className="contact-text">
              If you have any questions or want to discuss a project, please
              fill out the form below and I will get back to you as soon as
              possible.
            </p>
            <form ref={formref}
              onSubmit={sendEmail}
              className="contact-form"
              data-aos="fade-up"
            >
              <div className="fileds">
                <label htmlFor="from_name" className="label">
                  Name
                </label>
                <input type="text" required className="input" name="from_name" placeholder="Enter Name" 
                />
              </div>

              <div className="fileds">
                <label htmlFor="from_email" className="label">
                  Email
                </label>
                <input required type="email" className="input" name="from_email" placeholder="abc@gmail.com" 
                />
              </div>

              <div className="fileds">
                <label htmlFor="name" className="label">
                  Message
                </label>
                <textarea type="text" rows="8" name="message" className="input" placeholder="Type something here...." 
                        
                />
              </div>

              <div className="c-btns">
                <button className="c-btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <figure className="contact-banner" data-aos="flip-down">
            <img
              src={contactImage}
              loading="lazy"
              alt="contact-banner"
              className="w-100 contact-img"
            />
          </figure>
        </div>
      </section>
    </React.Fragment>
  );
}
