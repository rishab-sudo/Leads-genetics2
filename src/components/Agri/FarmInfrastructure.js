import React, { useState } from "react";
import { FiHome, FiCloud, FiClipboard } from "react-icons/fi";
import "./FarmInfrastructure.css";

const infrastructureFeatures = [
  {
    icon: <FiHome />,
    title: "Animal Housing",
    description:
      "Dedicated housing for distinct groups and breeds, ensuring optimum density control, social structure stability, and reduced baseline physiological stress.",
  },
  {
    icon: <FiCloud />,
    title: "Environmental Management",
    description:
      "Passive and active cross-ventilation, specialized sloped drainage systems, anti-skid ergonomic rubber flooring, and radiant heat reduction shade structures.",
  },
  {
    icon: <FiClipboard />,
    title: "Daily Farm Operations",
    description:
      "TMR ration distribution, automated alley cleaning, digital ear-tag identification, and scheduled health and estrus monitoring.",
  },
];

const shedData = [
  {
    id: 1,
    capacity: "40 Animals",
    badge: "HIGH YIELD",
    category: "Active Housing",
    breed: "Gir Breed Focus",
    code: "SEC-A",
    color: "blue",
    details:
      "Shed 1 Details: Capacity 40 animals. Dedicated housing for Gir cattle, with structured feeding, breed-specific monitoring, and daily health management.",
  },
  {
    id: 2,
    capacity: "40 Animals",
    badge: "HIGH YIELD",
    category: "Active Housing",
    breed: "Sahiwal Breed Focus",
    code: "SEC-A",
    color: "blue",
    details:
      "Shed 2 Details: Capacity 40 animals. Dedicated Sahiwal cattle housing with organized feeding schedules, health monitoring, and breeding management.",
  },
  {
    id: 3,
    capacity: "25 Elite Donors",
    badge: "IVF DONORS",
    category: "IVF Donor Holding",
    breed: "OPU Preparation Unit",
    code: "IVF-D",
    color: "green",
    details:
      "Shed 3 Details: Capacity 25 elite donor animals. Specialized IVF donor holding and preparation for ovum pick-up (OPU), with individual monitoring and reproductive management.",
  },
  {
    id: 4,
    capacity: "50 Animals",
    badge: "MILKING HERD",
    category: "Active Housing",
    breed: "Red Sindhi / Tharparkar",
    code: "SEC-B",
    color: "blue",
    details:
      "Shed 4 Details: Capacity 50 animals. Dedicated milking herd housing for Red Sindhi and Tharparkar cattle, supporting milk production, feeding routines, and udder health monitoring.",
  },
  {
    id: 5,
    capacity: "50 Animals",
    badge: "MILKING HERD",
    category: "Active Housing",
    breed: "Kankrej Breed Focus",
    code: "SEC-B",
    color: "blue",
    details:
      "Shed 5 Details: Capacity 50 animals. Dedicated Kankrej cattle housing with structured herd management, nutrition planning, and routine health assessments.",
  },
  {
    id: 6,
    capacity: "45 Recipients",
    badge: "RECIPIENTS",
    category: "IVF Donor Holding",
    breed: "Embryo Transfer Unit",
    code: "IVF-R",
    color: "blue",
    details:
      "Shed 6 Details: Capacity 45 recipient cows. Dedicated synchronization and Embryo Transfer (ET) wing, supporting reproductive scheduling, recipient preparation, and pregnancy monitoring.",
  },
  {
    id: 7,
    capacity: "35 Calves",
    badge: "YOUNG STOCK",
    category: "Active Housing",
    breed: "Heifer Rearing",
    code: "SEC-C",
    color: "blue",
    details:
      "Shed 7 Details: Capacity 35 calves. Dedicated heifer rearing facility focused on calf nutrition, vaccination schedules, growth tracking, and early-life health management.",
  },
  {
    id: 8,
    capacity: "35 Calves",
    badge: "YOUNG STOCK",
    category: "Active Housing",
    breed: "Pedigree Bulls / Sires",
    code: "SEC-C",
    color: "blue",
    details:
      "Shed 8 Details: Capacity 35 calves. Specialized young-stock housing for pedigree bulls and future sires, supporting growth, genetic selection, and individual animal records.",
  },
  {
    id: 9,
    capacity: "15 Isolation Beds",
    badge: "CARE & VET",
    category: "Quarantine / Care",
    breed: "Veterinary Care Unit",
    code: "VET-1",
    color: "grey",
    details:
      "Shed 9 Details: Capacity 15 isolation beds. Dedicated veterinary care and quarantine unit for animal observation, isolation, treatment, and biosecurity management.",
  },
];

const FarmInfrastructure = () => {
  const [selectedShed, setSelectedShed] = useState(6);

  const activeShed = shedData.find(
    (shed) => shed.id === selectedShed
  );

  return (
    <section className="farm-infrastructure-section">
      <div className="farm-infrastructure-container">
        {/* Section Introduction */}
        <div className="farm-infrastructure-intro">
          <span className="farm-infrastructure-eyebrow">
            ZONE 1: FARM INFRASTRUCTURE
          </span>

          <h2 className="farm-infrastructure-title section-heading ">
            Infrastructure Designed for Structured
            <br className="farm-infrastructure-desktop-break section-heading" />
            Livestock Management
          </h2>

          <p className="farm-infrastructure-description page-text ">
            Our livestock infrastructure is organized around dedicated
            animal housing and day-to-day farm management. With nine sheds
            accommodating six cattle breeds, the facility provides a
            foundation for systematic animal care, feeding operations,
            health monitoring and reproductive management.
          </p>
        </div>

        {/* Infrastructure Feature Cards */}
        <div className="farm-infrastructure-features">
          {infrastructureFeatures.map((feature, index) => (
            <article
              className="farm-infrastructure-feature-card"
              key={feature.title}
            >
              <div className="farm-infrastructure-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        {/* Interactive Facility Layout */}
        <div className="farm-layout-panel">
          <div className="farm-layout-header">
            <div className="farm-layout-heading">
              <h3>Facility Layout Diagram</h3>
              <p>
                Schematic representation of the 9 dedicated livestock
                housing sheds. Click a shed to highlight its details.
              </p>
            </div>

            <div className="farm-layout-legend">
              <span>
                <i className="farm-legend-dot farm-legend-blue" />
                Active Housing
              </span>

              <span>
                <i className="farm-legend-dot farm-legend-green" />
                IVF Donor Holding
              </span>

              <span>
                <i className="farm-legend-dot farm-legend-grey" />
                Quarantine / Care
              </span>
            </div>
          </div>

          <div className="farm-layout-grid">
            {shedData.map((shed) => {
              const isSelected = selectedShed === shed.id;

              return (
                <button
                  type="button"
                  key={shed.id}
                  className={`farm-shed-card farm-shed-${shed.color} ${
                    isSelected ? "farm-shed-selected" : ""
                  }`}
                  onClick={() => setSelectedShed(shed.id)}
                  aria-pressed={isSelected}
                  aria-label={`Select Shed ${shed.id}: ${shed.breed}`}
                >
                  <div className="farm-shed-card-header">
                    <h4>Shed {shed.id}</h4>

                    <span className="farm-shed-badge">
                      {shed.badge}
                    </span>
                  </div>

                  <p className="farm-shed-capacity">
                    Capacity: {shed.capacity}
                  </p>

                  <div className="farm-shed-card-footer">
                    <span>{shed.breed}</span>
                    <span className="farm-shed-code">{shed.code}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Shed Details */}
          <div
            className="farm-layout-details"
            aria-live="polite"
            key={activeShed.id}
          >
            <span className="farm-layout-status-dot" />

            <p>
              <strong>Selected Layout Details (Shed {activeShed.id}):</strong>{" "}
              {activeShed.details}
            </p>

            <span className="farm-layout-version">
              LEADS INFRASTRUCTURE MAP V2.4
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmInfrastructure;