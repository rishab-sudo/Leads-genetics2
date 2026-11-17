
import React from "react";
import "./GenomicBanner.css";
import genomicBannerImage from "../../assets/genomicbanner.png";

const GenomicBanner = () => {
  return (
    <section
      className="genomic-banner"
      style={{
        backgroundImage: `url(${genomicBannerImage})`,
      }}
      aria-label="Genomic Sequencing"
    >
      <div className="genomic-banner__overlay"></div>

      <div className="genomic-banner__container">
        <div className="genomic-banner__content">
          <h1 className="genomic-banner__title">
            Genomic <br></br>Sequencing
          </h1>

          <p className="genomic-banner__description">
            Every transcript. Every condition. Quantified
          </p>
        </div>
      </div>
    </section>
  );
};

export default GenomicBanner;
