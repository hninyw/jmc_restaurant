import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          🍜 JMC Restaurant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#order">
                Order
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <a className="btn btn-outline-warning" href="#book">
                Book Table
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
