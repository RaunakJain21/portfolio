import React from 'react'
// import {
//     Nav,
//     NavLink,
//     Bars,
//     NavMenu,
//     NavBtn,
//     NavBtnLink,
//   } from './NavbarElements';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
    <div className="logo">Shopio</div>
     <ul className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/">logo</Link>
        <Link to="/projects">Projects</Link>
     </ul>
  </div>
  );
}


export default Navbar;