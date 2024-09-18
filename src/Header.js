import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-bs-tertiary-color">
      <a className="navbar-brand text-light ps-3" href="codelingual.netlify.app">
        FlickerNode
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-light" href="codelingual.netlify.app">
              Home <span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="codelingual.netlify.app">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="codelingual.netlify.app">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="codelingual.netlify.app">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
