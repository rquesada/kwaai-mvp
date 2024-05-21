// src/components/NavBar.tsx
import React from "react";
import { FaBell } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">My bots</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/Face"><FaBell /></Link>
        </li>
        <li className="navbar-item">
          <FaRegUserCircle />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
