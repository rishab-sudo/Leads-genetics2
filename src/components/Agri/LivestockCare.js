import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./LivestockCare.css";

import holsteinImg from "../../assets/Breed/Holstein-cow.jpg";
import girImg from "../../assets/Breed/gir-cow.jpg";
import sahiwalImg from "../../assets/Breed/Sahiwal Cow in a Sunlit Farm Pasture.png";
import punganurImg from "../../assets/Breed/Punganur Cow in a Sunlit Field.png";

const cattleBreeds = [
  {
    id: "01",
    tab: "Crossbred HF",
    name: "Crossbred Holstein Friesian",
    type: "exotic",
    category: "Exotic Breed",
    label: "Crossbred Dairy Lineage",
    origin: "European Lineage (Adapted)",
    image: holsteinImg,
    sheds: ["Vishnu", "Khushi", "Shubhadra", "Maa", "Priyanka", "Ajay", "Sudhir"],
    description:
      "High-producing exotic crossbred dairy breed recognized for superior milk output and fertility monitoring. Key recipient stock for advanced embryo transfer (ET) and intensive lactation management.",
    nutrition: "High-Energy Dairy TMR (2.5 - 3% DMI)",
    reproductive: "Embryo Transfer Recipients & High Milk Yield",
    record: "LG-EXO-HF",
  },
  {
    id: "02",
    tab: "Gir",
    name: "Gir",
    type: "indigenous",
    category: "Indigenous Breed",
    label: "Indigenous Zebu Dairy Breed",
    origin: "Gujarat, India",
    image: girImg,
    sheds: [
      "Vishnu",
      "Shubhadra",
      "Priyanka",
      "Ajay",
      "Calf Shed (Brazil Gir)",
      "Quarantine",
    ],
    description:
      "Renowned indigenous dairy breed with exceptional heat tolerance, pest resistance, and rich A2 beta-casein milk fat. Prime donor breed for Ovum Pick-Up (OPU) and in-vitro fertilization (IVF) programs.",
    nutrition: "High Roughage & Balanced TMR (2.5 - 3% DMI)",
    reproductive: "Superior Oocyte Yield for IVF Programs",
    record: "LG-IND-GIR",
  },
  {
    id: "03",
    tab: "Sahiwal",
    name: "Sahiwal",
    type: "indigenous",
    category: "Indigenous Breed",
    label: "Indigenous Premium Dairy Breed",
    origin: "Punjab, India",
    image: sahiwalImg,
    sheds: ["Vishnu", "Shubhadra", "Ajay (Bulls)"],
    description:
      "Prized indigenous milch breed characterized by a docile temperament, distinctive reddish coat, thermal adaptability, and high butterfat yield. Central to purebred multiplication and recipient synchronization.",
    nutrition: "Balanced Energy-Dense TMR Ration",
    reproductive: "Embryo Transfer Synchronization & Breeding",
    record: "LG-IND-SAH",
  },
  {
    id: "04",
    tab: "Punganur",
    name: "Punganur",
    type: "indigenous",
    category: "Indigenous Breed",
    label: "Indigenous Miniature Breed",
    origin: "Chittoor, Andhra Pradesh, India",
    image: punganurImg,
    sheds: ["Chotti Shed (60 Cows & Calves)"],
    description:
      "One of the world's most compact dwarf dairy breeds, producing remarkably high-fat milk while maintaining superior feed efficiency, disease resistance, and resilience in low-input climates.",
    nutrition: "High Forage Digestibility & Moderate Concentrates",
    reproductive: "Selective Purebred Conservation & Maternal Care",
    record: "LG-IND-PUN",
  },
];

const LivestockCare = () => {
  const [activeBreedId, setActiveBreedId] = useState(cattleBreeds[0].id);

  const activeIndex = cattleBreeds.findIndex((b) => b.id === activeBreedId);
  const breed = cattleBreeds[activeIndex];


  const handleTabKeyDown = (event) => {
    const forward = ["ArrowRight", "ArrowDown"].includes(event.key);
    const backward = ["ArrowLeft", "ArrowUp"].includes(event.key);
    if (!forward && !backward) return;

    event.preventDefault();
    const step = forward ? 1 : -1;
    const next =
      cattleBreeds[(activeIndex + step + cattleBreeds.length) % cattleBreeds.length];
    setActiveBreedId(next.id);
    document.getElementById(`breed-tab-${next.id}`)?.focus();
  };

  return (
    <section className="lc-section">
      <Container>
        {/* Section Header */}
        <div className="lc-intro">
          <span className="lc-eyebrow">ZONE 2: CATTLE BREEDS & LIVESTOCK CARE</span>

          <h2 className="lc-title section-heading">
            Cattle Breeds, Genetic Categories & Herd Distribution
          </h2>

          <p className="lc-description">
            Our dairy genetics facility maintains available indigenous breeds
            (Gir, Sahiwal, and Punganur) alongside exotic crossbred genetics
            (Crossbred Holstein Friesian). With an active herd strength of 758
            cattle (as on October 22, 2026), our housing and management protocols
            are tailored to each breed's physiological, nutritional, and reproductive
            requirements.
          </p>
        </div>

        {/* Breed Classification */}
        <div className="lc-classes">
          <div className="lc-class" data-type="indigenous">
            <span className="lc-class-tag">Indigenous Breeds</span>
            <p className="lc-class-name">Gir, Sahiwal, Punganur</p>
            <p>
              Thermal resilience, tick tolerance, superior A2 milk composition, and
              exceptional IVF oocyte yield.
            </p>
          </div>

          <div className="lc-class" data-type="exotic">
            <span className="lc-class-tag">Exotic Breeds</span>
            <p className="lc-class-name">Crossbred Holstein Friesian</p>
            <p>
              High lactation output, rapid growth genetics, and structured embryo
              transfer recipient management.
            </p>
          </div>
        </div>

        {/* Interactive Breed Explorer */}
        <div className="lc-breeds">
          <div
            className="lc-tabs"
            role="tablist"
            aria-label="Cattle breeds"
            onKeyDown={handleTabKeyDown}
          >
            {cattleBreeds.map((item) => {
              const isActive = item.id === activeBreedId;

              return (
                <button
                  type="button"
                  role="tab"
                  key={item.id}
                  id={`breed-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls="breed-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={`lc-tab ${isActive ? "lc-tab-active" : ""}`}
                  data-type={item.type}
                  onClick={() => setActiveBreedId(item.id)}
                >
                  <span className="lc-tab-num">{item.id}</span>
                  <span className="lc-tab-name">{item.tab}</span>
                  <span className="lc-tab-cat">{item.category}</span>
                </button>
              );
            })}
          </div>

          <article
            className="lc-panel"
            id="breed-panel"
            role="tabpanel"
            aria-labelledby={`breed-tab-${breed.id}`}
            data-type={breed.type}
            key={breed.id}
          >
            <div className="lc-panel-media">
              <img
                src={breed.image}
                alt={`${breed.name} cattle breed`}
                className="lc-panel-image"
                loading="lazy"
              />
              <span className="lc-panel-category">{breed.category}</span>
            </div>

            <div className="lc-panel-body">
              <span className="lc-panel-label">{breed.label}</span>
              <p className="lc-panel-name">{breed.name}</p>
              <p className="lc-panel-text">{breed.description}</p>

              <dl className="lc-specs">
                <div>
                  <dt>Origin</dt>
                  <dd>{breed.origin}</dd>
                </div>
                <div>
                  <dt>Nutritional Requirement</dt>
                  <dd>{breed.nutrition}</dd>
                </div>
                <div>
                  <dt>Reproductive Trait</dt>
                  <dd>{breed.reproductive}</dd>
                </div>
              </dl>

              <div className="lc-panel-sheds">
                <span className="lc-panel-sheds-label">Shed Distribution</span>
                <ul>
                  {breed.sheds.map((shed) => (
                    <li key={shed}>{shed}</li>
                  ))}
                </ul>
              </div>

              <p className="lc-panel-record">
                Recordkeeping Tag: <strong>{breed.record}</strong>
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default LivestockCare;