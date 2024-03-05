import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import Logo from "../images/logo.png"

const Navbar = () => {
  return (
   <>
   <nav id="navbar">
    <div className="container">
      <div className="nav_wrapper">
        <div className="logo">
          <a href="#">
            <picture>
              <img src={Logo} alt="Not Found"/>
            </picture>
          </a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="nav_btn">
          <a href="#" className="common_btn">Get Started</a>
        </div>
      </div>
    </div>
  </nav>
   </>
  )
}

export default Navbar
