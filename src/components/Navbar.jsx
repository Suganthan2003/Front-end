import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/filtered-data" className="navbar-link">Filtered Data</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
