import React from "react";
import "./navbar.css";
import Brand from "../images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi"

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className="navbar">
      <div className="container">
        <div>
          <img className="navbar-logo" src={Brand} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <GiHamburgerMenu/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bio-cng">Bio-CNG</NavLink>
            </li>
            <li>
              <NavLink to="/solid-fertiliser">Solid Fertiliser</NavLink>
            </li>
            <li>
              <NavLink to="/liquid-fertiliser">Liquid Fertiliser</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
