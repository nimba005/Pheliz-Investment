import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Pheliz Investment</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </header>
  );
}

export default Header;