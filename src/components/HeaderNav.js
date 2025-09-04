import React, { useState, useEffect } from "react";
import "./HeaderNav.css";

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- Top Header Bar (Hide after scroll) --- */}
      {!scrolled && (
        <div className="top-header py-2 text-white">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <span>📞 +81 123-456-789</span>
              <span>✉️ info@jmc-restaurant.com</span>
            </div>
            <div>
              <span>⏰ Open Hours: Mon-Sun 8:00AM - 9:00PM</span>
            </div>
          </div>
        </div>
      )}

      {/* --- Navbar --- */}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "navbar-dark bg-dark shadow-sm" : "navbar-dark"
        }`}
        style={{
          transition: "all 0.3s ease",
          height: scrolled ? "9vh" : "11vh",
        }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero">
            🍜 JMC Restaurant
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2">
                <a className="nav-link" href="#menu">Menu</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#order">Order</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item mx-2">
                <a className="btn btn-outline-warning" href="#book">Book Table</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
