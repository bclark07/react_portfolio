import React from "react";

function Navbar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="/#about"
          onClick={() => props.handlePageChange("About")}
          className={
            props.currentPage === "About" ? "nav-link active" : "nav-link"
          }
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/#projects"
          onClick={() => props.handlePageChange("Projects")}
          className={
            props.currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="/#sayhello"
          onClick={() => props.handlePageChange("Contact")}
          className={
            props.currentPage === "Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
