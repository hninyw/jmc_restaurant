import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container py-1">
        <a className="navbar-brand" href="#">
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#order">
                Order
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-outline-secondary" href="#menu">
                Book Table
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
