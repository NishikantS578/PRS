import React from 'react'
import menu from "../assets/menu.png"

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <a className="icon">Icon</a>
        <div className="nav-items">
          <a href="/">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-items-2">
          <img src={menu} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nav
