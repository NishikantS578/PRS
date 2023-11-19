import React from "react";
import menu from "../assets/menu.png";
import { Link, NavLink } from "react-router-dom";
import back from "../assets/Arrow.png";

const toggleMenu = () => {
  const navItems = document.querySelector(".hamburger-container");
  navItems.style.display = "flex";
};

const toggleMenuClose = () => {
  const navItems = document.querySelector(".hamburger-container");
  navItems.style.display = "none";
};

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <a className="icon">Icon</a>
        <div className="nav-items">
          <NavLink className="Navlink" to="/">
            Home
          </NavLink>
          <NavLink className="Navlink" to="/about">
            About
          </NavLink>
          <NavLink className="Navlink" to="/login">
            Login
          </NavLink>
        </div>
        <div className="nav-items-2">
          <img
            className="hamburger-icon"
            src={menu}
            alt=""
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div className="hamburger-container">
        <div className="nav-items-mobile">
          <NavLink className="Navlink" to="/" onClick={toggleMenuClose}>
            Home
          </NavLink>
          <NavLink className="Navlink" to="/about" onClick={toggleMenuClose}>
            About
          </NavLink>
          <NavLink className="Navlink" to="/login" onClick={toggleMenuClose}>
            Login
          </NavLink>
          <img
            className="GoBackArrow"
            src={back}
            alt=""
            onClick={toggleMenuClose}
          />
        </div>
      </div>
    </div>
  );
};
export default Nav;
