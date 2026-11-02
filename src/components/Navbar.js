import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const SOLUTION_PAGES = [
  "/agri-genomics",
  "/research-genomics",
  "/clinical-genomics",
  "/moet",
  "/chip",
];

const HERO_PAGES = ["/", ...SOLUTION_PAGES];

const Chevron = ({ size = 12, points = "6 9 12 15 18 9" }) => (
  <svg
    className="chevron"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points={points} />
  </svg>
);

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Desktop hover menus
  const [ddOpen, setDdOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  // Mobile accordions
  const [mobSolutionsOpen, setMobSolutionsOpen] = useState(false);
  const [mobAgriOpen, setMobAgriOpen] = useState(false);

  const { pathname } = useLocation();
  const lastScrollY = useRef(0);

  // Pages without a hero image need a dark navbar from the start
  const alwaysScrolled = !HERO_PAGES.includes(pathname);
  const isSolutionsActive = SOLUTION_PAGES.includes(pathname);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);

      if (y <= 20 || y < lastScrollY.current) setNavbarVisible(true);
      else if (y > lastScrollY.current) setNavbarVisible(false);

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On every route change: scroll to top and close all menus
  useEffect(() => {
    window.scrollTo(0, 0);
    setDdOpen(false);
    setSubOpen(false);
    setSidebarOpen(false);
  }, [pathname]);

  // Lock body scroll while sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeMenus = () => {
    setDdOpen(false);
    setSubOpen(false);
    setSidebarOpen(false);
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled || alwaysScrolled ? "scrolled" : ""} ${
          navbarVisible ? "navbar-visible" : "navbar-hidden"
        }`}
      >
        {/* LOGO */}
        <Link to="/" className="nav-logo">
          <img src={require("../assets/logo.png")} alt="Lead Genetics" />
        </Link>

        {/* CENTER LINKS */}
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            {/* SOLUTIONS DROPDOWN (hover only) */}
            <li
              className="has-dropdown"
              onMouseEnter={() => setDdOpen(true)}
              onMouseLeave={() => {
                setDdOpen(false);
                setSubOpen(false);
              }}
            >
              <span
                className={`dropdown-trigger ${isSolutionsActive ? "active" : ""} ${
                  ddOpen ? "open" : ""
                }`}
              >
                Solutions
                <Chevron />
              </span>

              <ul className={`dropdown ${ddOpen ? "show" : ""}`}>
                {/* Agri-genomics + flyout (hover only) */}
                <li
                  className="dropdown-item"
                  onMouseEnter={() => setSubOpen(true)}
                  onMouseLeave={() => setSubOpen(false)}
                >
                  <Link to="/agri-genomics" className="dropdown-link" onClick={closeMenus}>
                    Agri-genomics
                    <Chevron points="9 6 15 12 9 18" />
                  </Link>

                  <ul className={`submenu ${subOpen ? "show" : ""}`}>
                    <li>
                      <Link to="/moet" className="dropdown-link" onClick={closeMenus}>
                        MOET
                      </Link>
                    </li>
                    <li>
                      <Link to="/chip" className="dropdown-link" onClick={closeMenus}>
                        SNP Chip
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="dropdown-item">
                  <Link to="/research-genomics" className="dropdown-link" onClick={closeMenus}>
                    Research Genomics
                  </Link>
                </li>

                <li className="dropdown-item">
                  <Link to="/clinical-genomics" className="dropdown-link" onClick={closeMenus}>
                    Clinical Genomics
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/blog">Blogs</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* RIGHT - BUTTON + HAMBURGER */}
        <div className="nav-right">
          <Link to="/contact" className="common-btn nav-btn">
            <span>Get A Quote</span>
          </Link>

          <button
            className="hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? "active" : ""}`}
        onClick={closeMenus}
      />

      {/* SIDEBAR */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Link to="/" className="mobile-sidebar-logo" onClick={closeMenus}>
            <img src={require("../assets/logo.png")} alt="Lead Genetics" />
          </Link>

          <button className="close-btn" onClick={closeMenus} aria-label="Close navigation menu">
            ✕
          </button>
        </div>

        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={closeMenus}>Home</Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenus}>About</Link>
          </li>

          {/* SOLUTIONS ACCORDION */}
          <li>
            <button
              type="button"
              className={`sidebar-toggle ${mobSolutionsOpen ? "open" : ""}`}
              onClick={() => setMobSolutionsOpen((v) => !v)}
              aria-expanded={mobSolutionsOpen}
            >
              <span>Solutions</span>
              <Chevron size={14} />
            </button>

            <ul className={`sidebar-sub ${mobSolutionsOpen ? "open" : ""}`}>
              <li>
                <div className="sidebar-sub-row">
                  <Link to="/agri-genomics" onClick={closeMenus}>Agri-genomics</Link>
                  <button
                    type="button"
                    className={`sidebar-sub-toggle ${mobAgriOpen ? "open" : ""}`}
                    onClick={() => setMobAgriOpen((v) => !v)}
                    aria-expanded={mobAgriOpen}
                    aria-label="Toggle Agri-genomics submenu"
                  >
                    <Chevron size={14} />
                  </button>
                </div>

                <ul className={`sidebar-sub sidebar-sub-nested ${mobAgriOpen ? "open" : ""}`}>
                  <li>
                    <Link to="/moet" onClick={closeMenus}>MOET</Link>
                  </li>
                  <li>
                    <Link to="/chip" onClick={closeMenus}>SNP Chip</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/research-genomics" onClick={closeMenus}>Research Genomics</Link>
              </li>

              <li>
                <Link to="/clinical-genomics" onClick={closeMenus}>Clinical Genomics</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/blog" onClick={closeMenus}>Blogs</Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenus}>Contact</Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;