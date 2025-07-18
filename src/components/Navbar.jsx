import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State to manage whether the sidebar is open or closed
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar's state
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to close the sidebar (useful for link clicks)
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* This is the menu icon (hamburger) that shows only on mobile */}
        <div className="menu-icon" onClick={toggleSidebar}>
          {isSidebarOpen ? "✕" : "☰"}
        </div>

        <div className="navbar-container">
          {/* The 'active' class is added conditionally based on the sidebar state.
            This is what our CSS will use to show/hide the sidebar.
          */}
          <ul className={isSidebarOpen ? "navbar-links active" : "navbar-links"}>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Home</NavLink></li>
            <li><NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Team</NavLink></li>
            <li><NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Events</NavLink></li>
            <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Blogs</NavLink></li>
            <li><NavLink to="/alumni" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Alumni</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeSidebar}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;