import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import {
  FaHome,
  FaRocket,
  FaTools,
  FaEnvelope,
  FaPlayCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY > lastScrollY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/features", label: "Features", icon: FaRocket },
    { path: "/upcoming-tools", label: "Tools", icon: FaTools },
    { path: "/support/contact", label: "Contact", icon: FaEnvelope },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`navbar ${hidden ? "navbar-hidden" : ""} ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">

        {/* LEFT: Logo */}
        <Link to="/" className="nav-brand">
          <div className="logo-container">
            <img src="/ddfinal.png" alt="Drag & Drop ERP Logo - Business Management Software" className="navbar-logo-img" />
            <div className="brand-text">
              <span className="brand-name">Drag & Drop</span>
              <span className="brand-tagline">Software Tools</span>
            </div>
          </div>
        </Link>

        {/* RIGHT: Desktop Links */}
        <div className="desktop-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? "active" : ""}`}
              >
                <Icon className="nav-link-icon" />
                <span>{item.label}</span>
              </Link>
            );
          })}
          <a
            href="https://youtube.com/@dragdrop-8223"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            <FaPlayCircle className="nav-link-icon" />
            <span>Watch Video</span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'hidden' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars />
        </button>

        {/* MOBILE OVERLAY */}
        {mobileMenuOpen && (
          <div className="nav-overlay active" onClick={() => setMobileMenuOpen(false)}>
            <div id="mobile-menu" className="nav-links active" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <h2 className="mobile-menu-title">Menu</h2>
                <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
                  <FaTimes />
                </button>
              </div>

              <div className="nav-links-content">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav-link ${isActive(item.path) ? "active" : ""}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ "--delay": `${i * 0.05}s` }}
                    >
                      <Icon className="nav-link-icon" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}

                <a
                  href="https://youtube.com/@dragdrop-8223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FaPlayCircle className="nav-link-icon" />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
