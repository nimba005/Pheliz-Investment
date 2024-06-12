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
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </header>
  );
}

export default Header;