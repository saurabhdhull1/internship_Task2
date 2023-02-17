import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <Link to="/">India</Link>
          </li>
          <li>
            <Link to="/usa">USA</Link>
          </li>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
          <li>
            <Link to="/bbc">BCC News</Link>
          </li>
          <li>
            <Link to="/bitcoin">Bitcoin</Link>
          </li>
        </ul>
        <h1 className="logo">Taza Khabar</h1>
      </div>
    </nav>
  );
};

export default Navbar;
