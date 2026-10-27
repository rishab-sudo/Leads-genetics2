import React from "react";
import { Link } from "react-router-dom";
import "./QualityAssurance.css";

const qualityModules = [
  {
    code: "SOP-MOD-01",
    title: "Animal Management Records",
    description:
      "Complete individual history, pedigree, health logs, and daily feed intake tracking.",
  },
  {
    code: "SOP-MOD-02",
    title: "Laboratory Sample Traceability",
    description:
      "End-to-end barcode tracking from donor oocyte harvest to final transferred embryo.",
  },
  {
    code: "SOP-MOD-03",
    title: "Equipment & Process Controls",
    description:
      "Strict incubator gas calibration, biosecurity sterilization, and cleanroom air monitoring.",
  },
  {
    code: "SOP-MOD-04",
    title: "Performance Monitoring",
    description:
      "Continuous tracking of conception rates, blastocyst conversion, and lineage viability.",
  },
];

const QualityAssurance = () => {
  return (
    <main className="quality-page">
      {/* Quality Assurance */}
      <section className="quality-assurance-section">
        <div className="container">
          <div className="quality-section-header">
            <span className="quality-eyebrow">QUALITY ASSURANCE</span>

            <h2 className="quality-main-heading section-heading">
              Documented Processes. Traceable
              <br className="quality-desktop-break" /> Operations.
            </h2>

            <p className="quality-section-description">
              Every procedure at Leads Genetics follows standardized operating
              protocols (SOPs) to maintain sample integrity, verifiable
              pedigree data, and audit compliance.
            </p>
          </div>

          <div className="row quality-modules-row">
            {qualityModules.map((module) => (
              <div
                className="col-12 col-sm-6 col-lg-3 quality-module-column"
                key={module.code}
              >
                <article className="quality-module-card">
                  <span className="quality-module-code">{module.code}</span>
                  <h3 className="quality-module-title">{module.title}</h3>
                  <p className="quality-module-description">
                    {module.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="quality-cta-section">
        <div className="container">
          <div className="quality-cta-card">
            <div className="quality-cta-content">
              <span className="quality-cta-label">WORK WITH US</span>
              <h3 className="quality-cta-title">Partner With Leads Genetics</h3>
              <p className="quality-cta-text">
                Whether you are a farmer upgrading your herd genetics or a
                research partner exploring genomic selection trials, our team
                is ready to help.
              </p>
            </div>

            <Link to="/contact" className="quality-cta-button">
              Contact Us <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualityAssurance;