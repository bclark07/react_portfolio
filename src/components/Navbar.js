import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    // <nav class="nav">
    <div class="container">
      <ul className="nav nav-tabs d-flex flex-row py-3">
        <li className="nav-item">
          <Link to="/" className="nav-item m-3">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-item m-3">
            Projects
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contactme" className="nav-item m-3">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
