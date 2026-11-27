import React from "react";
import { Link } from "react-router-dom";
import "./GenoSer.css";

import ngsImage from "../../assets/novaseq.jpeg";
import pacImage from "../../assets/pacbio.jpg";

function GenoSer() {
  return (
    <section className="genoser-section">
      <div className="genoser-container">
        <div className="genoser-heading">
          <div className="genoser-eyebrow">
            <span className="genoser-eyebrow-line"></span>
            OUR CAPABILITIES
          </div>

          <h2 className="section-heading">Genomics Services</h2>

          <p className="page-text">
            Explore sequencing, assembly, genotyping, and metagenomics
            workflows designed around different research requirements.
          </p>
        </div>

        <div className="genoser-platform-grid">
          <Link
            to="/illumina"
            className="genoser-platform-card genoser-illumina"
          >
            <div className="genoser-platform-copy">
              <span className="genoser-platform-tag">
                SHORT-READ SEQUENCING
              </span>
              <h3>Illumina NGS</h3>
              <p>
                High-throughput sequencing for precise and scalable
                genomic analysis.
              </p>
              <span className="genoser-platform-action">
                Explore 7 services <span>↗</span>
              </span>
            </div>

            <div className="genoser-platform-art">
              <img
                src={ngsImage}
                alt=""
                aria-hidden="true"
                className="genoser-art-glow"
              />
              <img
                src={ngsImage}
                alt="Illumina NGS short-read sequencing"
                className="genoser-art-image"
              />
            </div>
          </Link>

          <Link
            to="/pacbio"
            className="genoser-platform-card genoser-pacbio"
          >
            <div className="genoser-platform-copy">
              <span className="genoser-platform-tag">
                LONG-READ SEQUENCING
              </span>
              <h3>PacBio Vega</h3>
              <p>
                Long-read sequencing for complex genomes and
                comprehensive genomic insights.
              </p>
              <span className="genoser-platform-action">
                Explore 6 services <span>↗</span>
              </span>
            </div>

            <div className="genoser-platform-art">
              <img
                src={pacImage}
                alt=""
                aria-hidden="true"
                className="genoser-art-glow"
              />
              <img
                src={pacImage}
                alt="PacBio Vega long-read sequencing"
                className="genoser-art-image"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GenoSer;