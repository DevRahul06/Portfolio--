import React from 'react'
import { FaInstagram, FaGithub, FaTwitter  } from "react-icons/fa";
import './header.css'
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {

  // const [isOpen, setIsClose] = useState(flase)

  // const toggle = () =>{
  //   isOpen == true ? setIsClose(false) : setIsClose(true);
  // }
  
  return (
    <header className='header'>
        <div className='logo'>
            <a href="/" className='logo-text'><span className='title-c'>Dev</span>Rahul</a><span className='logo-t'>.</span>
        </div>
        <nav className='navbar'>
            <ul className="nav-list">
                <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
        </nav>
        <div className="social">
           <div className='social-icon'> <FaInstagram /></div>
           <div className='social-icon s-color'> <FaGithub /></div>
           <div className='social-icon'> <FaTwitter /></div>
        </div>
        <div className='menu-icon'>
            <RiMenu3Line />
        </div>
        
    </header>
  )
}
