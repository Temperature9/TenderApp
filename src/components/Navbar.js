// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Sugar.png" alt="Sugar Associations Logo" />
        <span>Sugar Associations</span>
      </div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/team">Team</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
