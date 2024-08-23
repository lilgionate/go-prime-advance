import React from 'react';
import './Navbar.css';
import logo from '../assets/biz-funder-logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
