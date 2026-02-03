import { useEffect, useState } from "react";
import {NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navbarClass = `
    navbar
    ${isHome && !scrolled ? "transparent" : "white"}
  `;

  return (
    <nav className={navbarClass}>
      <div className="nav-container">
        <div className="nav-part"> 
          <img src={logo} className="logo-img" />
          <h2 className="logo">
            TRAMBAK <span>DEVELOPERS</span>
          </h2>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>


        {/* Mobile Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
    <X size={28} color={!isHome || scrolled ? "#5c5b5b" : "#fff"} />
  ) : (
    <Menu size={28} color={!isHome || scrolled ? "#5c5b5b" : "#fff"} />
  )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
