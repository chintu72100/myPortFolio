import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>Chintu</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#myprojects">My Projects</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/thakshila-bandara-2791b9214"><BsLinkedin/></a>
          <a href="https://github.com/Thakshila-Bandara"><BsGithub/></a>
          <a href="https://leetcode.com/u/Chintu7210055/"><SiLeetcode/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Thakshila Bandara. All rightts reserved.</small>
        </div>
    </footer>
  )
}

export default Footer