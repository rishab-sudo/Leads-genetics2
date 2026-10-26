import React, { useState } from "react";
import { FiHome, FiCloud, FiClipboard } from "react-icons/fi";
import "./FarmInfrastructure.css";

const infrastructureFeatures = [
  {
    icon: <FiHome />,
    title: "Animal Housing",
    description:
      "Dedicated housing for distinct groups and breeds, ensuring appropriate space allocation, stable social structures, and reduced physiological stress. Each housing area supports the specific needs of livestock at different stages of growth and reproduction.",
  },
  {
    icon: <FiCloud />,
    title: "Environmental Management",
    description:
      "Carefully managed ventilation, sloped drainage systems, anti-skid rubber flooring, and shaded structures help maintain a comfortable environment. These measures support animal welfare, hygiene, and effective day-to-day farm management.",
  },
  {
    icon: <FiClipboard />,
    title: "Daily Farm Operations",
    description:
      "Structured feed distribution, regular cleaning, digital animal identification, and scheduled health and estrus monitoring help maintain consistent farm operations and support the health and productivity of the herd.",
  },
];

const zones = [
  {
    key: "active",
    label: "Active Housing",
    description:
      "Milking herds, pregnancy wards, indigenous Punganur breed conservation, and breeding bulls.",
  },
  {
    key: "ivf",
    label: "IVF & Embryo Transfer",
    description:
      "Recipient heifers prepared for embryo transfer and specialized care for elite IVF calves.",
  },
  {
    key: "quarantine",
    label: "Quarantine / Treatment",
    description:
      "Veterinary isolation, treatment facilities, health observation, and biosecurity management.",
  },
];

const sheds = [
  {
    id: "vishnu",
    zone: "active",
    name: "Vishnu",
    badge: "PREGNANCY WARD",
    breed: "HF, Gir and Sahiwal",
    purpose: "First and second trimester pregnant cows",
    details:
      "Vishnu Shed houses Crossbred HF, Gir, and Sahiwal cattle during the first and second trimesters of pregnancy. Specialized gestation nutrition, routine veterinary supervision, and prenatal health management help support the well-being of pregnant cows.",
  },
  {
    id: "maa",
    zone: "active",
    name: "Maa",
    badge: "ADVANCED PREGNANCY",
    breed: "Crossbred HF",
    purpose: "Advanced pregnant cows",
    details:
      "Maa Shed is dedicated to advanced-pregnancy Crossbred HF cows. Maternity bedding, close pre-calving observation, transition ration management, and preparation for newborn care support cows during this important stage.",
  },
  {
    id: "priyanka",
    zone: "active",
    name: "Priyanka",
    badge: "MILKING & DRY",
    breed: "HF and Gir",
    purpose: "Milking and non-pregnant cows",
    details:
      "Priyanka Shed accommodates milking and non-pregnant cows of Crossbred HF and Gir breeds. Scheduled milking routines, udder hygiene monitoring, and appropriate lactation nutrition support daily dairy operations and animal welfare.",
  },
  {
    id: "ajay",
    zone: "active",
    name: "Ajay",
    badge: "BULLS & SIRES",
    breed: "HF, Sahiwal and Gir bulls",
    purpose: "Growing and adult bulls",
    details:
      "Ajay Shed houses growing and adult bulls representing HF, Sahiwal, and Gir lineages. Dedicated management supports breeding soundness, sire development, pedigree maintenance, and routine health evaluations.",
  },
  {
    id: "chotti",
    zone: "active",
    name: "Chotti",
    badge: "PUNGANUR HERD",
    breed: "Punganur cows and calves",
    purpose: "Punganur cows and calves",
    details:
      "Chotti Shed is dedicated to indigenous Punganur cows and calves, supporting breed conservation, maternal nursing, and breed-appropriate feeding practices. The facility helps maintain a specialized environment for this distinctive indigenous cattle breed.",
  },
  {
    id: "khushi",
    zone: "ivf",
    name: "Khushi",
    badge: "ET RECIPIENT",
    breed: "HF heifers",
    purpose: "Non-pregnant HF heifers prepared for embryo transfer",
    details:
      "Khushi Shed accommodates non-pregnant HF heifers prepared for IVF embryo transfer. Reproductive management includes estrus cycle monitoring, synchronization protocols, and reproductive ultrasound tracking to support recipient readiness.",
  },
  {
    id: "shubhadra",
    zone: "ivf",
    name: "Shubhadra",
    badge: "ET RECIPIENT",
    breed: "HF, Sahiwal and Gir",
    purpose: "Non-pregnant heifers prepared for embryo transfer",
    details:
      "Shubhadra Shed accommodates non-pregnant heifers across Crossbred HF, Sahiwal, and Gir breeds. The management approach focuses on reproductive monitoring and preparation for elite embryo transfer protocols.",
  },
  {
    id: "calf",
    zone: "ivf",
    name: "Calf Shed",
    badge: "BRAZIL GIR IVF",
    breed: "Brazil Gir IVF calves",
    purpose: "Specialized rearing of Brazil Gir IVF calves",
    details:
      "The Calf Shed provides a specialized rearing environment for elite Brazil Gir IVF calves. Care focuses on temperature-appropriate housing, colostrum management, calf starter nutrition, routine health monitoring, and genomic profiling.",
  },
  {
    id: "sudhir",
    zone: "quarantine",
    name: "Sudhir",
    badge: "ISOLATION & CARE",
    breed: "Crossbred HF",
    purpose: "Isolation and treatment ward",
    details:
      "Sudhir Shed serves as a veterinary isolation and treatment ward for Crossbred HF cattle. Diagnostic observation, convalescent care, veterinary supervision, and appropriate biosecurity practices support animal recovery and help limit the spread of disease.",
  },
  {
    id: "quarantine",
    zone: "quarantine",
    name: "Quarantine",
    badge: "BIOSECURITY",
    breed: "Newly purchased Gir cows",
    purpose: "Health screening and acclimatization",
    details:
      "The Quarantine Shed provides a controlled environment for newly purchased Gir cows before they join the main herd. Health screening, blood testing, veterinary assessment, deworming where appropriate, and acclimatization support responsible herd integration.",
  },
];

const zoneLabel = (key) =>
  zones.find((zone) => zone.key === key)?.label || "";

const ShedDetail = ({ shed }) => (
  <>
    <span className="farm-detail-zone">{zoneLabel(shed.zone)}</span>

    <div className="farm-detail-top">
      <h4 className="farm-detail-name">{shed.name}</h4>
    </div>

    <p className="farm-detail-text">{shed.details}</p>

    <dl className="farm-detail-meta">
      <div>
        <dt>Purpose</dt>
        <dd>{shed.purpose}</dd>
      </div>

      <div>
        <dt>Breeds Housed</dt>
        <dd>{shed.breed}</dd>
      </div>

      <div>
        <dt>Category</dt>
        <dd>{zoneLabel(shed.zone)}</dd>
      </div>
    </dl>
  </>
);

const FarmInfrastructure = () => {
  const [zoneFilter, setZoneFilter] = useState("active");
  const [selectedShed, setSelectedShed] = useState("vishnu");

  const visibleSheds = sheds.filter(
    (shed) => shed.zone === zoneFilter
  );

  const activeShed =
    visibleSheds.find((shed) => shed.id === selectedShed) ||
    visibleSheds[0];

  const activeZone = zones.find(
    (zone) => zone.key === zoneFilter
  );

  const handleZoneChange = (key) => {
    setZoneFilter(key);

    const firstShed = sheds.find((shed) => shed.zone === key);

    if (firstShed) {
      setSelectedShed(firstShed.id);
    }
  };

  return (
    <section className="farm-infrastructure-section">
      <div className="farm-infrastructure-container">
        <div className="farm-infrastructure-intro">
          <span className="farm-infrastructure-eyebrow">
            FARM INFRASTRUCTURE
          </span>

          <h2 className="farm-infrastructure-title section-heading">
            Infrastructure Designed for Structured
            <br className="farm-infrastructure-desktop-break" />
            Livestock Management
          </h2>

          <p className="farm-infrastructure-description page-text">
            Our livestock infrastructure is organized into dedicated
            animal housing facilities across three operational zones:
            Active Housing, IVF & Embryo Transfer, and Quarantine &
            Treatment. Each facility serves a defined reproductive,
            milking, rearing, or healthcare purpose for indigenous and
            exotic breeds. This structured approach supports animal
            welfare, reproductive management, biosecurity, and
            efficient daily farm operations.
          </p>
        </div>

        <div className="farm-infrastructure-features">
          {infrastructureFeatures.map((feature) => (
            <article
              className="farm-infrastructure-feature"
              key={feature.title}
            >
              <div className="farm-infrastructure-feature-icon">
                {feature.icon}
              </div>

              <h3 className="farm-infrastructure-feature-title">
                {feature.title}
              </h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="farm-layout">
          <div className="farm-layout-header">
            <h3 className="section-heading">
              Facility Layout & Shed Distribution
            </h3>

            <p>
              Explore our operational zones and select a facility
              to learn about its livestock, breeds, and purpose.
            </p>
          </div>

          <div
            className="farm-filters"
            role="group"
            aria-label="Select facility zone"
          >
            {zones.map((zone) => (
              <button
                type="button"
                key={zone.key}
                className={`farm-filter ${
                  zoneFilter === zone.key
                    ? "farm-filter-active"
                    : ""
                }`}
                data-zone={zone.key}
                onClick={() => handleZoneChange(zone.key)}
                aria-pressed={zoneFilter === zone.key}
              >
                <span className="farm-filter-label">
                  {zone.label}
                </span>
              </button>
            ))}
          </div>

          <p className="farm-filter-caption">
            {activeZone?.description}
          </p>

          <div className="farm-explorer">
            <ul className="farm-list">
              {visibleSheds.map((shed) => {
                const isSelected = activeShed.id === shed.id;

                return (
                  <li key={shed.id} data-zone={shed.zone}>
                    <button
                      type="button"
                      className={`farm-item ${
                        isSelected ? "farm-item-selected" : ""
                      }`}
                      onClick={() => setSelectedShed(shed.id)}
                      aria-pressed={isSelected}
                    >
                      <span className="farm-item-main">
                        <span className="farm-item-name">
                          {shed.name}
                        </span>

                        <span className="farm-item-breed">
                          {shed.breed}
                        </span>
                      </span>

                      <span className="farm-item-meta">
                        <span className="farm-item-badge">
                          {shed.badge}
                        </span>
                      </span>
                    </button>

                    {isSelected && (
                      <div
                        className="farm-detail farm-detail-inline"
                        data-zone={shed.zone}
                      >
                        <ShedDetail shed={shed} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <aside
              className="farm-detail farm-detail-side"
              data-zone={activeShed.zone}
              aria-live="polite"
              key={activeShed.id}
            >
              <ShedDetail shed={activeShed} />
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmInfrastructure;