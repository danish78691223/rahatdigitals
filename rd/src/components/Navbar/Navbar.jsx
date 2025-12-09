import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="nav-left">
        <h2>RAHAT DIGITAL'S</h2>
      </div>

      {/* HAMBURGER BUTTON */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "bar bar1 open" : "bar bar1"}></span>
        <span className={open ? "bar bar2 open" : "bar bar2"}></span>
        <span className={open ? "bar bar3 open" : "bar bar3"}></span>
      </div>

      {/* NAV MENU */}
      <div className={open ? "nav-right show" : "nav-right"}>
        <a href="/" onClick={() => setOpen(false)}>Home</a>
        <a href="/services" onClick={() => setOpen(false)}>Services</a>

        {/* ⭐ NEW SHOP BUTTON */}
        <a href="/shop" onClick={() => setOpen(false)}>Shop</a>

        <a href="/about" onClick={() => setOpen(false)}>About</a>

        <a href="/contact" onClick={() => setOpen(false)} className="contact-btn">
          Contact
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
