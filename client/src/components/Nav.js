import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/discover" ? "active" : ""}>
      <Link to="/saved">Saved</Link>
    </li>
  </ul>;

export default Nav;
