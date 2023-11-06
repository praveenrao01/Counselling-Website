import React from 'react';
import './navbar.css';

const navbar = () => {
  return (
    <div className="nav">
      <h2>Therapist</h2>
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>FAQ</li>
      </ul>
      <div className="navbar-login">
        <a href="">Sign Up</a>
        <a href="">Login</a>
      </div>
    </div>
  );
};

export default navbar;
