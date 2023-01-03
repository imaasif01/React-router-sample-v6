import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/"
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/about"
        >
          <li>About</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/services"
        >
          <li>Services</li>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          to="/contact"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
