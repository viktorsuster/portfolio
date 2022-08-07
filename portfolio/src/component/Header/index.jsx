import React from 'react'
import './header.css'
import Navbar from '../Navbar';
import Logo from '../Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="left">
      <Logo />
      </div>
      <div className="right">
      <Navbar />
      </div>
      </header>
  )
}

export default Header