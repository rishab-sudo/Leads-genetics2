
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const SOLUTION_PAGES = [
  "/agri-genomics",
  "/research-genomics",
  "/clinical-genomics",
  "/moet",
  "/chip",
  "/genomics",
  "/epigenomics",
  "/technologies",
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

  // Desktop dropdowns
  const [ddOpen, setDdOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  const [researchSubOpen, setResearchSubOpen] = useState(false);

  // Mobile accordions
  const [mobSolutionsOpen, setMobSolutionsOpen] = useState(false);
  const [mobAgriOpen, setMobAgriOpen] = useState(false);
  const [mobResearchOpen, setMobResearchOpen] = useState(false);

  const { pathname } = useLocation();
  const lastScrollY = useRef(0);

  const alwaysScrolled = !HERO_PAGES.includes(pathname);
  const isSolutionsActive = SOLUTION_PAGES.includes(pathname);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      setScrolled(y > 20);

      if (y <= 20 || y < lastScrollY.current) {
        setNavbarVisible(true);
      } else if (y > lastScrollY.current) {
        setNavbarVisible(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setDdOpen(false);
    setSubOpen(false);
    setResearchSubOpen(false);
    setSidebarOpen(false);

    setMobSolutionsOpen(false);
    setMobAgriOpen(false);
    setMobResearchOpen(false);
  }, [pathname]);

  // Lock body scrolling while mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeMenus = () => {
    setDdOpen(false);
    setSubOpen(false);
    setResearchSubOpen(false);
    setSidebarOpen(false);

    setMobSolutionsOpen(false);
    setMobAgriOpen(false);
    setMobResearchOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav
        className={`navbar ${
          scrolled || alwaysScrolled ? "scrolled" : ""
        } ${
          navbarVisible
            ? "navbar-visible"
            : "navbar-hidden"
        }`}
      >
        {/* LOGO */}

        <Link to="/" className="nav-logo">
          <img
            src={require("../assets/logo.png")}
            alt="Leads Genetics"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            {/* SOLUTIONS DROPDOWN */}

            <li
              className="has-dropdown"
              onMouseEnter={() => setDdOpen(true)}
              onMouseLeave={() => {
                setDdOpen(false);
                setSubOpen(false);
                setResearchSubOpen(false);
              }}
            >
              <span
                className={`dropdown-trigger ${
                  isSolutionsActive ? "active" : ""
                } ${ddOpen ? "open" : ""}`}
              >
                Solutions
                <Chevron />
              </span>

              <ul className={`dropdown ${ddOpen ? "show" : ""}`}>

                {/* AGRI GENOMICS */}

                <li
                  className="dropdown-item"
                  onMouseEnter={() => {
                    setSubOpen(true);
                    setResearchSubOpen(false);
                  }}
                  onMouseLeave={() => setSubOpen(false)}
                >
                  <Link
                    to="/agri-genomics"
                    className="dropdown-link"
                    onClick={closeMenus}
                  >
                    Agri-genomics
                    <Chevron points="9 6 15 12 9 18" />
                  </Link>

                  <ul className={`submenu ${subOpen ? "show" : ""}`}>
                    <li>
                      <Link
                        to="/moet"
                        className="dropdown-link"
                        onClick={closeMenus}
                      >
                        MOET
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/chip"
                        className="dropdown-link"
                        onClick={closeMenus}
                      >
                        SNP Chip
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* RESEARCH GENOMICS */}

                <li
                  className="dropdown-item"
                  onMouseEnter={() => {
                    setResearchSubOpen(true);
                    setSubOpen(false);
                  }}
                  onMouseLeave={() => setResearchSubOpen(false)}
                >
                  <Link
                    to="/research-genomics"
                    className="dropdown-link"
                    onClick={closeMenus}
                  >
                    Research Genomics
                    <Chevron points="9 6 15 12 9 18" />
                  </Link>

                  <ul
                    className={`submenu ${
                      researchSubOpen ? "show" : ""
                    }`}
                  >
                                        <li>
                      <Link
                        to="/technologies"
                        className="dropdown-link"
                        onClick={closeMenus}
                      >
                        Research Technologies
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        to="/genomics"
                        className="dropdown-link"
                        onClick={closeMenus}
                      >
                        Genomic Sequencing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/epigenomics"
                        className="dropdown-link"
                        onClick={closeMenus}
                      >
                        Epigenomics
                      </Link>
                    </li>



                  </ul>
                </li>

                {/* CLINICAL GENOMICS */}

                <li className="dropdown-item">
                  <Link
                    to="/clinical-genomics"
                    className="dropdown-link"
                    onClick={closeMenus}
                  >
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

        {/* RIGHT SECTION */}

        <div className="nav-right">
          <Link to="/contact" className="common-btn nav-btn">
            <span>Get A Quote</span>
          </Link>

          <button
            type="button"
            className="hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={sidebarOpen}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}

      <div
        className={`sidebar-overlay ${
          sidebarOpen ? "active" : ""
        }`}
        onClick={closeMenus}
      />

      {/* ================= MOBILE SIDEBAR ================= */}

      <aside
        className={`sidebar ${sidebarOpen ? "open" : ""}`}
        aria-hidden={!sidebarOpen}
      >
        <div className="sidebar-header">
          <Link
            to="/"
            className="mobile-sidebar-logo"
            onClick={closeMenus}
          >
            <img
              src={require("../assets/logo.png")}
              alt="Leads Genetics"
            />
          </Link>

          <button
            type="button"
            className="close-btn"
            onClick={closeMenus}
            aria-label="Close navigation menu"
          >
            ✕
          </button>
        </div>

        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={closeMenus}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={closeMenus}>
              About
            </Link>
          </li>

          {/* MOBILE SOLUTIONS ACCORDION */}

          <li>
            <button
              type="button"
              className={`sidebar-toggle ${
                mobSolutionsOpen ? "open" : ""
              }`}
              onClick={() => setMobSolutionsOpen(v => !v)}
              aria-expanded={mobSolutionsOpen}
            >
              <span>Solutions</span>
              <Chevron size={14} />
            </button>

            <ul
              className={`sidebar-sub ${
                mobSolutionsOpen ? "open" : ""
              }`}
            >
              {/* AGRI GENOMICS */}

              <li>
                <div className="sidebar-sub-row">
                  <Link
                    to="/agri-genomics"
                    onClick={closeMenus}
                  >
                    Agri-genomics
                  </Link>

                  <button
                    type="button"
                    className={`sidebar-sub-toggle ${
                      mobAgriOpen ? "open" : ""
                    }`}
                    onClick={() => setMobAgriOpen(v => !v)}
                    aria-expanded={mobAgriOpen}
                    aria-label="Toggle Agri-genomics submenu"
                  >
                    <Chevron size={14} />
                  </button>
                </div>

                <ul
                  className={`sidebar-sub sidebar-sub-nested ${
                    mobAgriOpen ? "open" : ""
                  }`}
                >
                  <li>
                    <Link to="/moet" onClick={closeMenus}>
                      MOET
                    </Link>
                  </li>

                  <li>
                    <Link to="/chip" onClick={closeMenus}>
                      SNP Chip
                    </Link>
                  </li>
                </ul>
              </li>

              {/* RESEARCH GENOMICS */}

              <li>
                <div className="sidebar-sub-row">
                  <Link
                    to="/research-genomics"
                    onClick={closeMenus}
                  >
                    Research Genomics
                  </Link>

                  <button
                    type="button"
                    className={`sidebar-sub-toggle ${
                      mobResearchOpen ? "open" : ""
                    }`}
                    onClick={() => setMobResearchOpen(v => !v)}
                    aria-expanded={mobResearchOpen}
                    aria-label="Toggle Research Genomics submenu"
                  >
                    <Chevron size={14} />
                  </button>
                </div>

                <ul
                  className={`sidebar-sub sidebar-sub-nested ${
                    mobResearchOpen ? "open" : ""
                  }`}
                >

                                    <li>
                    <Link
                      to="/technologies"
                      onClick={closeMenus}
                    >
                      Research Technologies
                    </Link>
                  </li>

                  <li>
                    <Link to="/genomics" onClick={closeMenus}>
                      Genomic Sequencing
                    </Link>
                  </li>

                  <li>
                    <Link to="/epigenomics" onClick={closeMenus}>
                      Epigenomics
                    </Link>
                  </li>


                </ul>
              </li>

              {/* CLINICAL GENOMICS */}

              <li>
                <Link
                  to="/clinical-genomics"
                  onClick={closeMenus}
                >
                  Clinical Genomics
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/blog" onClick={closeMenus}>
              Blogs
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenus}>
              Contact
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
