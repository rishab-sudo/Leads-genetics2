
import React from "react";
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

const audienceCards = [
  {
    id: 1,
    type: "farmers",
    label: "FOR FARMERS & LIVESTOCK OWNERS",
    title: "Empowering Herd Potential",
    description:
      "Upgrade your herd genetics in a single generation. Access high-yield indigenous cattle IVF embryos, precision breeding support, and expert farm infrastructure guidance.",
    buttonText: "Explore Livestock Solutions",
    icon: "user",
  },
  {
    id: 2,
    type: "research",
    label: "FOR RESEARCH & SCIENTIFIC PARTNERS",
    title: "Collaborative Agri-Genomics",
    description:
      "Collaborating with universities, biotechnology firms, and agricultural research institutes on genomic selection trials, oocyte culture media optimization, and cryopreservation research.",
    buttonText: "Explore Research Partnerships",
    icon: "flask",
  },
];

const AudienceIcon = ({ type }) => {
  if (type === "user") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5.5 20v-2a6.5 6.5 0 0 1 13 0v2z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 3h6M10 3v6l-6 8a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-6-8V3" />
      <path d="M8 15h8M10 12h4" />
    </svg>
  );
};

const QualityAssurance = () => {
  return (
    <main className="quality-page">
      {/* Quality Assurance Section */}
      <section className="quality-assurance-section">
        <div className="container">
          <div className="quality-section-header">
            <span className="quality-eyebrow">
              QUALITY ASSURANCE
            </span>

            <h2 className="quality-main-heading">
              Documented Processes. Traceable
              <br className="quality-desktop-break" /> Operations.
            </h2>

            <p className="quality-section-description">
              Every procedure at Leads Genetics follows standardized
              operating protocols (SOPs) to maintain sample integrity,
              verifiable pedigree data, and audit compliance.
            </p>
          </div>

          <div className="row quality-modules-row">
            {qualityModules.map((module) => (
              <div
                className="col-12 col-sm-6 col-lg-3 quality-module-column"
                key={module.code}
              >
                <article className="quality-module-card">
                  <span className="quality-module-code">
                    {module.code}
                  </span>

                  <h3 className="quality-module-title">
                    {module.title}
                  </h3>

                  <p className="quality-module-description">
                    {module.description}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience / Partnership Section */}
      <section className="quality-audience-section">
        <div className="container">
          <div className="row quality-audience-row">
            {audienceCards.map((card) => (
              <div
                className="col-12 col-lg-6 quality-audience-column"
                key={card.id}
              >
                <article
                  className={`quality-audience-card quality-audience-card--${card.type}`}
                >
                  <div className="quality-audience-icon">
                    <AudienceIcon type={card.icon} />
                  </div>

                  <span className="quality-audience-label">
                    {card.label}
                  </span>

                  <h3 className="quality-audience-title">
                    {card.title}
                  </h3>

                  <p className="quality-audience-description">
                    {card.description}
                  </p>

                  <a
                    className="quality-audience-button"
                    href={
                      card.type === "farmers"
                        ? "/livestock-solutions"
                        : "/research"
                    }
                  >
                    {card.buttonText}
                    <span aria-hidden="true"> →</span>
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default QualityAssurance;
