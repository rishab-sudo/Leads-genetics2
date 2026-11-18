
import React from "react";
import "./EpigenomicsBanner.css";
import Button from "../Button";

import epiBanner from "../../assets/EpiBan.png";

const EpigenomicsBanner = () => {
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

            <Button to="/research-genomics" variant="primary" size="large" >
              View Sample Guidelines
            </Button>

            <Button to="/contact" variant="outline" size="large" >
              Get a Quote
              
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EpigenomicsBanner;
