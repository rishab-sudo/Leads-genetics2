import React from 'react';
import './ResearchBanner.css';

const ResearchBanner = () => {
  return (
    <section className="research-banner">
      {/* Background Video */}
      <video
        className="research-banner-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/research-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="research-banner-overlay"></div>

      {/* Centered Content */}
      <div className="research-banner-content">
        <span className="research-banner-subtitle">
          SCIENCE • INNOVATION • DISCOVERY
        </span>

        <h1 className="research-banner-title">
          Advancing Science Through
          <span> Genomic Research</span>
        </h1>

        <p className="research-banner-description">
          Exploring the power of genomics to uncover new insights,
          advance scientific understanding, and create meaningful
          breakthroughs across agriculture, clinical science, and research.
        </p>
      </div>
    </section>
  );
};

export default ResearchBanner;