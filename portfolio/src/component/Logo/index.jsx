import React from 'react'
import "./Logo.css"
import { NavLink } from 'react-router-dom'
// import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <NavLink to="/" className="logo">Portfolio</NavLink>
    </>
  )
}

export default Logo