import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        All Movies
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add">
        Add Movie
      </Link>
    </nav>
  );
}

export default Nav;
