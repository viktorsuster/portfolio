import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

const Navbar = (props) => {
  return (
    <nav>
      <ul>
      <li>
          <NavLink to="/" href="#">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" href="#about">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills" href="#skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/contact" href="#contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar