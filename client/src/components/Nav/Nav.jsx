import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <Link className="navbar-brand" to="/">
      New York Times Article Search
    </Link>
    <div className="navbar-nav">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ||
          window.location.pathname === "/home"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Home
      </Link>
      <Link
        to="/saved"
        className={
          window.location.pathname === "/saved" ? "nav-link active" : "nav-link"
        }
      >
        Saved
      </Link>
    </div>
  </nav>
);

export default Nav;
