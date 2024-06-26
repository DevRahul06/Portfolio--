import React from 'react'
import { FaInstagram, FaGithub, FaTwitter  } from "react-icons/fa";
import './footer.css'

export default function Footer() {
  return (
    <section className="f-section">
        
      <div className="f-title">
        <a href="/" className='f-text'><span className='title-f'>Dev</span>Rahul</a><span className='footer-t'>.</span>
      </div>
      <div className="f-copyright">
        <p className='copy-text'>Copyright &copy; 2024 Dev<span> Rahul </span>.</p>
      </div>
      <div className="footer-social">
        <a href='' className='footer-social-icon'> <FaInstagram /></a>
        <a href='https://github.com/DevRahul06'target='_blank' className='footer-social-icon f-color'> <FaGithub /></a>
        <a href='' className='footer-social-icon'> <FaTwitter /></a>
      </div>
       
    </section>
  )
}
