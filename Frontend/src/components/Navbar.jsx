import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
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

          <h2 className="logo">
            TRAMBAK <span>DEVELOPERS</span>
          </h2>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={() => setMenuOpen(false)}><Link to="/">Home</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/about">About</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/projects">Projects</Link></li>
        <li onClick={() => setMenuOpen(false)}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
