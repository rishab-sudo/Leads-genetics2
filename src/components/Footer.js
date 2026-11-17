import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Linkedin = ({ size = 18, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const genomicsLinks = [
  { label: "Agricultural", to: "/agri-genomics" },
  { label: "Research", to: "/research-genomics" },
  { label: "Clinical", to: "/clinical-genomics" },
  { label: "Animal & livestock", to: "/agri-genomics#facility-layout" },
  { label: "IVF & reproductive", to: "/agri-genomics#in-house-ivf" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Why choose us", to: "/about#why-choose" },
  { label: "News", to: "/#insights" },
  { label: "Trust & credibility", to: "/#trusted-institutions" },
  { label: "Careers", to: "/contact" },
];

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">
      <p className="footer-column-title">{title}</p>
      <ul className="footer-link-list">
        {links.map((link) => (
          <li key={link.to + link.label}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-logo">
              <img alt="lead-genetics-video" src={require("../assets/logo.png")} />
            </p>
            <p className="footer-tagline">
              Agricultural, research and clinical genomics under one
              premium, science-led brand.
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/leadsgenetics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LEADS Genetics on Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://x.com/Leadsgenetics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LEADS Genetics on X"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.youtube.com/@LeadsGenetics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LEADS Genetics on YouTube"
              >
                <FaYoutube size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/leads-genetics-1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LEADS Genetics on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:Info@leadsgenetics.com"
                aria-label="Email LEADS Genetics"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <FooterColumn title="Genomics" links={genomicsLinks} />
          <FooterColumn title="Company" links={companyLinks} />

          <div className="footer-column">
            <p className="footer-column-title">Contact</p>
            <ul className="footer-link-list">
              <li><Link to="/contact">Request consultation</Link></li>
              <li><Link to="/contact">Locations</Link></li>
              <li>
                <a href="mailto:Info@leadsgenetics.com" className="footer-contact-line">
                  <Mail size={14} /> Info@leadsgenetics.com
                </a>
              </li>
              <li>
                <a href="tel:+917311149681" className="footer-contact-line">
                  <Phone size={14} /> +91 73111 49681
                </a>
              </li>
              <li>
                <a href="tel:+916389913132" className="footer-contact-line">
                  <Phone size={14} /> +91 63899 13132
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {year} Leads Genetics. All rights reserved.
          </p>
          <ul className="footer-legal-list">
            <li><span className="footer-legal-text">Privacy policy</span></li>
            <li><span className="footer-legal-text">Terms of service</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
