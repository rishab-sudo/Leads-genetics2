
import React from "react";
import { useNavigate } from "react-router-dom";
import "./EpigenomicsBanner.css";

import epiBanner from "../../assets/EpiBan.png";

const EpigenomicsBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="epigenomics-banner">

      {/* Background Image */}
      <div className="epigenomics-banner-bg">
        <img
          src={epiBanner}
          alt="Epigenomics and genomic research"
          className="epigenomics-banner-image"
        />
        <div className="epigenomics-banner-overlay"></div>
      </div>

      {/* Banner Content */}
      <div className="epigenomics-banner-container">

        <div className="epigenomics-banner-content">

          <h1 className="section-heading">
            Epigenomics
          </h1>

          <p className="epigenomics-banner-description">
            Explore the molecular mechanisms that regulate gene expression
            beyond DNA sequences. Our epigenomics solutions provide insights
            into DNA methylation, chromatin accessibility, histone
            modifications, and transcriptional regulation.
          </p>

          {/* Action Buttons */}
          <div className="epigenomics-banner-actions">

            <button
              className="epigenomics-btn epigenomics-btn-primary"
              onClick={() => navigate("/research-genomics")}
            >
              View Sample Guidelines
              <span className="epigenomics-btn-arrow">↗</span>
            </button>

            <button
              className="epigenomics-btn epigenomics-btn-outline"
              onClick={() => navigate("/contact")}
            >
              Get a Quote
              <span className="epigenomics-btn-arrow">↗</span>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EpigenomicsBanner;
