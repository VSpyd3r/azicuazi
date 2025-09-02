// Navbar.tsx
import { NavLink } from "react-router-dom"
import "./Navbar.css"

export default function BottomNav() {
  return (
    <nav className="navbar fixed-bottom bg-transparent text-white">
      <div className="container-fluid d-flex justify-content-around py-2">
        <NavLink 
        to="/home" 
        className={({ isActive }) => `text-white text-center Link ${isActive ? "active" : ""}`}>
          <i className="bi bi-house-door-fill fs-4 icon-light"></i><br /><small></small>
        </NavLink>
        <NavLink 
        to="/history" 
        className={({ isActive }) => `text-white text-center Link ${isActive ? "active" : ""}`}>
          <i className="bi bi-clock-history fs-4 icon-light"></i><br /><small></small>
        </NavLink>
        <NavLink 
        to="/user" 
        className={({ isActive }) => `text-white text-center Link ${isActive ? "active" : ""}`}>
          <i className="bi bi-person-circle fs-4 icon-light"></i><br /><small></small>
        </NavLink>
        <button id="darkToggle" className="btn btn-sm btn-outline-light">
          <i className="bi bi-moon-stars-fill icon-light"></i>
        </button>
      </div>
    </nav>
  );
}
