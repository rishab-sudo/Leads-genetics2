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

const zones = [
  {
    key: "active",
    label: "Active Housing",
    description:
      "Milking herd, pregnancy wards, purebred dwarf conservation, and sire bulls",
  },
  {
    key: "ivf",
    label: "IVF & Embryo Transfer",
    description: "Embryo transfer recipient heifers and elite IVF calves",
  },
  {
    key: "quarantine",
    label: "Quarantine / Treatment",
    description:
      "Veterinary medical isolation, treatment ward, and biosecurity observation",
  },
];

const sheds = [
  {
    id: 1,
    zone: "active",
    name: "Vishnu",
    strength: 146,
    capacity: "146 Cattle",
    badge: "PREGNANCY WARD",
    breed: "HF, Gir and Sahiwal",
    purpose: "First and second trimester Pregnant cows",
    code: "SHED-01",
    details:
      "Vishnu Shed: Cattle strength of 146 animals comprising Crossbred HF, Gir, and Sahiwal breeds. Purpose: First and second trimester pregnant cows, receiving specialized gestation nutrition and prenatal health management.",
  },
  {
    id: 4,
    zone: "active",
    name: "Maa",
    strength: 31,
    capacity: "31 Cows",
    badge: "ADVANCED PREGNANT",
    breed: "Crossbred HF",
    purpose: "Advanced pregnant cows",
    code: "SHED-04",
    details:
      "Maa Shed: Dedicated to 31 advanced pregnant Crossbred HF cows. Provides specialized maternity bedding, close pre-calving observation, transition ration management, and neonate preparation.",
  },
  {
    id: 5,
    zone: "active",
    name: "Priyanka",
    strength: 130,
    capacity: "130 Cows",
    badge: "MILKING & DRY",
    breed: "HF and Gir",
    purpose: "Milking and non-pregnant cows",
    code: "SHED-05",
    details:
      "Priyanka Shed: Cattle strength of 130 milking and non-pregnant cows (Crossbred HF and Gir), supporting scheduled daily milking routines, udder hygiene monitoring, and high-energy lactation rations.",
  },
  {
    id: 6,
    zone: "active",
    name: "Ajay",
    strength: 23,
    capacity: "23 Bulls",
    badge: "BULLS & SIRES",
    breed: "HF, Sahiwal, Gir Bulls",
    purpose: "Growing and adult bulls",
    code: "SHED-06",
    details:
      "Ajay Shed: Houses 23 growing and adult bulls representing HF, Sahiwal, and Gir lineages, managed for breeding soundness, pedigree sire development, and health evaluations.",
  },
  {
    id: 8,
    zone: "active",
    name: "Chotti",
    strength: 60,
    capacity: "60 Animals",
    badge: "PUNGANUR HERD",
    breed: "Punganur Cows & Calves",
    purpose: "Punganur cows and calves",
    code: "SHED-08",
    details:
      "Chotti Shed: Accommodates 60 indigenous Punganur cows and calves, dedicated to purebred dwarf breed conservation, maternal nursing, and breed-specific low-input feeding.",
  },
  {
    id: 2,
    zone: "ivf",
    name: "Khushi",
    strength: 150,
    capacity: "150 Heifers",
    badge: "ET RECIPIENT",
    breed: "HF Heifers",
    purpose: "Non-pregnant HF heifers ready for embryo transfer",
    code: "SHED-02",
    details:
      "Khushi Shed: Cattle strength of 150 non-pregnant HF heifers, synchronized and primed for the transfer of IVF embryos, with routine estrus cycle monitoring and reproductive ultrasound tracking.",
  },
  {
    id: 3,
    zone: "ivf",
    name: "Shubhadra",
    strength: 148,
    capacity: "148 Heifers",
    badge: "ET RECIPIENT",
    breed: "HF, Sahiwal, Gir",
    purpose: "Non-pregnant heifers ready for embryo transfer",
    code: "SHED-03",
    details:
      "Shubhadra Shed: Cattle strength of 148 non-pregnant heifers across Crossbred HF, Sahiwal, and Gir breeds, managed in preparation for elite embryo transfer protocols.",
  },
  {
    id: 9,
    zone: "ivf",
    name: "Calf Shed",
    strength: 10,
    capacity: "10 Calves",
    badge: "BRAZIL GIR IVF",
    breed: "Brazil Gir IVF Calves",
    purpose: "Brazil Gir IVF calves",
    code: "SHED-09",
    details:
      "Calf Shed: Specialized rearing unit for 10 elite Brazil Gir IVF calves, featuring temperature-regulated housing, colostrum and calf starter nutrition, and rigorous genomic profiling.",
  },
  {
    id: 7,
    zone: "quarantine",
    name: "Sudhir",
    strength: 31,
    capacity: "31 Animals",
    badge: "ISOLATION & CARE",
    breed: "Crossbred HF",
    purpose: "Isolation and treatment ward",
    code: "SHED-07",
    details:
      "Sudhir Shed: Veterinary isolation and treatment ward caring for 31 Crossbred HF cattle, equipped for diagnostic observation, convalescent care, and biosecurity containment.",
  },
  {
    id: 10,
    zone: "quarantine",
    name: "Quarantine",
    strength: 29,
    capacity: "29 Cows",
    badge: "BIOSECURITY",
    breed: "Newly Purchased Gir Cows",
    purpose: "Newly purchased cows",
    code: "SHED-10",
    details:
      "Quarantine Shed: Biosecurity facility housing 29 newly purchased Gir cows undergoing health screening, blood testing, prophylactic deworming, and acclimatization before herd integration.",
  },
];

const zoneLabel = (key) => zones.find((z) => z.key === key)?.label;
const maxStrength = Math.max(...sheds.map((s) => s.strength));

const zoneTabs = zones.map((zone) => {
  const list = sheds.filter((s) => s.zone === zone.key);
  return {
    ...zone,
    count: list.length,
    animals: list.reduce((total, s) => total + s.strength, 0),
  };
});

/* Shared detail content (desktop side panel + mobile inline panel) */
const ShedDetail = ({ shed }) => (
  <>
    <span className="farm-detail-zone">{zoneLabel(shed.zone)}</span>

    <div className="farm-detail-top">
      <p className="farm-detail-name">{shed.name}</p>
      <span className="farm-detail-code">{shed.code}</span>
    </div>

    <p className="farm-detail-strength">
      <strong>{shed.strength}</strong>
      <span>{shed.capacity}</span>
    </p>

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
  const [selectedShed, setSelectedShed] = useState(1);

  const visibleSheds = sheds.filter((s) => s.zone === zoneFilter);
  const activeShed =
    visibleSheds.find((s) => s.id === selectedShed) || visibleSheds[0];
  const activeZone = zoneTabs.find((z) => z.key === zoneFilter);

  const handleZoneChange = (key) => {
    setZoneFilter(key);
    setSelectedShed(sheds.find((s) => s.zone === key).id);
  };

  return (
    <section className="farm-infrastructure-section">
      <div className="farm-infrastructure-container">
        {/* Section Introduction */}
        <div className="farm-infrastructure-intro">
          <span className="farm-infrastructure-eyebrow">
            ZONE 1: FARM INFRASTRUCTURE
          </span>

          <h2 className="farm-infrastructure-title section-heading">
            Infrastructure Designed for Structured
            <br className="farm-infrastructure-desktop-break section-heading" />
            Livestock Management
          </h2>

          <p className="farm-infrastructure-description page-text">
            Our livestock infrastructure is organized around 10 dedicated animal
            housing sheds arranged across three operational zones: Active Housing,
            IVF & Embryo Transfer, and Quarantine & Treatment. Each shed serves a
            defined reproductive, milking, rearing, or health purpose across
            indigenous and exotic breeds.
          </p>
        </div>

        {/* Infrastructure Features */}
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

        {/* Facility Explorer */}
        <div className="farm-layout">
          <div className="farm-layout-header">
            <h3 className="section-heading">Facility Layout & Shed Distribution</h3>
            <p>
              Choose an operational zone, then select a shed to view its herd,
              breeds, and purpose.
            </p>
          </div>

          {/* Zone tabs */}
          <div className="farm-filters" role="group" aria-label="Select shed zone">
            {zoneTabs.map((zone) => (
              <button
                type="button"
                key={zone.key}
                className={`farm-filter ${
                  zoneFilter === zone.key ? "farm-filter-active" : ""
                }`}
                data-zone={zone.key}
                onClick={() => handleZoneChange(zone.key)}
                aria-pressed={zoneFilter === zone.key}
              >
                <span className="farm-filter-label">{zone.label}</span>
                <span className="farm-filter-meta">
                  {zone.count} Sheds · {zone.animals} Animals
                </span>
              </button>
            ))}
          </div>

          <p className="farm-filter-caption">{activeZone.description}</p>

          <div className="farm-explorer">
            {/* Shed list */}
            <ul className="farm-list">
              {visibleSheds.map((shed) => {
                const isSelected = activeShed.id === shed.id;

                return (
                  <li key={shed.id} data-zone={shed.zone}>
                    <button
                      type="button"
                      className={`farm-item ${isSelected ? "farm-item-selected" : ""}`}
                      onClick={() => setSelectedShed(shed.id)}
                      aria-pressed={isSelected}
                      aria-label={`Select Shed ${shed.id}: ${shed.name}`}
                    >
                      <span className="farm-item-main">
                        <span className="farm-item-name">{shed.name}</span>
                        <span className="farm-item-breed">{shed.breed}</span>
                      </span>

                      <span className="farm-item-meta">
                        <span className="farm-item-badge">{shed.badge}</span>
                        <span className="farm-item-code">{shed.code}</span>
                      </span>

                      <span className="farm-item-count">
                        <strong>{shed.strength}</strong>
                        <span
                          className="farm-item-bar"
                          style={{ "--fill": `${(shed.strength / maxStrength) * 100}%` }}
                          aria-hidden="true"
                        />
                      </span>
                    </button>

                    {/* Inline detail: shown under the shed on tablet/mobile */}
                    {isSelected && (
                      <div className="farm-detail farm-detail-inline">
                        <ShedDetail shed={shed} />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Side detail: shown on desktop */}
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