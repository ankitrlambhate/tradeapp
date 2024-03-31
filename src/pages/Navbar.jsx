import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">Trade App</div>
        <div className="navbar-links">
          <div className="centered-link">
            <Link to={`/addTrade`} className="nav-link btn-outline-success">Add Stock</Link>
          </div>
        </div>
        <button className="toggle-button">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}
