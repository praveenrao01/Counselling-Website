import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
      <div className="nav-smallscreen ">
        <HiMenu className="screen-menu" onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="nav-smallscreen-overlay">
            <HiOutlineX
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="nav-smallscreen-items">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>FAQ</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
