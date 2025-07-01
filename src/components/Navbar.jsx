import React from "react"
import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"



const Navbar=()=>{
    return(
        <nav className="navbar">
            <div className="navbar-container">
        <ul className="navbar-links">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
          <li><NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>Team</NavLink></li>
          <li><NavLink to="/events" className={({ isActive }) => isActive ? "active" : ""}>Events</NavLink></li>
          <li><NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink></li>
          <li><NavLink to="/alumni" className={({ isActive }) => isActive ? "active" : ""}>Alumni</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
        </ul>
      </div>
        </nav>
    )
}
export default Navbar