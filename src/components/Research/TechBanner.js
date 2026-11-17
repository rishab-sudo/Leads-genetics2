
import React from "react";
import "./TechBanner.css";

import bannerImage from "../../assets/techbanner.png";

function TechBanner() {
  return (
    <section className="tech-banner">
      <img src={bannerImage} alt="" className="tech-banner-image" />
      <div className="tech-banner-overlay"></div>

      <div className="tech-banner-container">
        <h2 className="section-heading tech-banner-title">
          <span>Every Scale,</span>
          <span>One Laboratory,</span>
          <span>Every Read Verify.</span>
        </h2>

        <p className="tech-banner-description">
          From advanced sequencing to large-scale genomic research,
          our integrated platforms deliver precise
          insights, and research-ready solutions - all under one roof.
        </p>
      </div>
    </section>
  );
}

export default TechBanner;
