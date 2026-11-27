import React from "react";
import { Link } from "react-router-dom";
import "./InHouse.css";

import iscan from "../../assets/iscan.jpg";
import miseq from "../../assets/miseq.jpg";
import pacbio from "../../assets/pacbio.jpg";

function InHouse() {
  return (
    <section className="inhouse-section">
      <div className="inhouse-container">
        <div className="inhouse-top">
          <div className="inhouse-top-left">
            <span className="inhouse-eyebrow">In House Technologies</span>
            <h2 className="section-heading inhouse-title">
              Genomics Technology 
            </h2>
          </div>

          <Link to="/technologies" className="inhouse-hub-link">
            View Full Technology Hub
            <span className="inhouse-hub-arrow">→</span>
          </Link>
        </div>

        <div className="inhouse-grid">
          <article className="inhouse-card">
            <div className="inhouse-card-image-wrap">
              <img
                src={iscan}
                alt="Illumina iScan microarray genotyping"
                className="inhouse-card-image"
              />
            </div>
            <div className="inhouse-card-body">
              <div className="inhouse-card-meta">
                <span className="inhouse-card-pill">Microarray Genotyping</span>
                <span className="inhouse-card-label">High Throughput</span>
              </div>
              <h3 className="inhouse-card-title">Illumina Microarray (iScan)</h3>
              <p className="inhouse-card-text">
                High-throughput, cost-effective genotyping on the complete
                Infinium BeadChip portfolio. Human and agri arrays, up to 5,670
                samples per week, call rate ≥ 98%.
              </p>
            </div>
          </article>

          <article className="inhouse-card">
            <div className="inhouse-card-image-wrap">
              <img
                src={miseq}
                alt="Illumina NGS short-read sequencing"
                className="inhouse-card-image"
              />
            </div>
            <div className="inhouse-card-body">
              <div className="inhouse-card-meta">
                <span className="inhouse-card-pill">Short-Read NGS</span>
                <span className="inhouse-card-label">Any Scale</span>
              </div>
              <h3 className="inhouse-card-title">
                Illumina NGS (NovaSeq X · MiSeq i100)
              </h3>
              <p className="inhouse-card-text">
                Short-read sequencing at any scale. WGS, exome, stranded
                RNA-Seq, GBS, amplicon panels and 16S/ITS metagenomics.
              </p>
            </div>
          </article>

          <article className="inhouse-card">
            <div className="inhouse-card-image-wrap">
              <img
                src={pacbio}
                alt="PacBio and ONT long-read sequencing"
                className="inhouse-card-image"
              />
            </div>
            <div className="inhouse-card-body">
              <div className="inhouse-card-meta">
                <span className="inhouse-card-pill">HiFi Long-Read</span>
                <span className="inhouse-card-label">High-Accuracy HiFi</span>
              </div>
              <h3 className="inhouse-card-title">
                PacBio Long-Read (Vega) + ONT PromethION
              </h3>
              <p className="inhouse-card-text">
                For T2T assemblies, structural variants, Iso-Seq and haplotype
                phasing. ~60–90 Gb of HiFi reads per run with ≥ 15 kb read
                lengths.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default InHouse;