import React from "react";
import "./Vacination.css";
import cowImage from "../../assets/cow.jpeg";
import vac1 from "../../assets/vac1.jpeg";
import vac2 from "../../assets/vac2.jpeg";
import vac3 from "../../assets/vac3.jpg"
import vac4 from "../../assets/vac4.jpg"
import vac5 from "../../assets/vac5.jpg"

const vaccines = [
  {
    name: "FMD",
    text: "At four months of age and three times every year.",
  },
  {
    name: "LSD",
    text: "At four months of age and once at every 10 months of age.",
  },
  {
    name: "Brucellosis",
    text: "Four to eight months of age to all female calves.",
  },
  {
    name: "HS and BQ",
    text: "First vaccine at six months of age and once a year.",
  },
];

const healthCare = [
  {
    title: "Daily observation",
    text: "All cows and calves will be observed daily for feed and water intake, regular activity and behaviour.",
  },
  {
    title: "Illness check",
    text: "Lethargic cows with reduced activity will be checked for illness.",
  },
  {
    title: "Isolation and treatment",
    text: "Sick cows and calves will be isolated and treated.",
  },
  {
    title: "Deworming",
    text: "Calves will be dewormed at 15 and 30 days after birth and once in three months.",
  },
  {
    title: "Disease prevention",
    text: "Strict biosecurity measures like disinfection at the entrance of each shed, washing hands with sanitizers before entering the cow shed, tyre dip at the entrance of the farm.",
  },
];

// one group of slides; it is rendered twice so the loop never shows a gap
const slides = [vac1, vac2, vac3, vac4, vac5];

function Vacination() {
  return (
    <section className="vacination">
      <div className="container-fluid vacination-container">
        <div className="vacination-grid">
          {/* LEFT: heading + vaccination schedule */}
          <div className="vacination-left">
            <h2 className="section-heading">
              Cattle health and vaccination care
            </h2>

            <span className="vacination-label">Vaccination schedule</span>

            <div className="vacination-panel">
              {vaccines.map((item) => (
                <div className="vacination-item" key={item.name}>
                  <strong className="vacination-name">{item.name}</strong>
                  <p>{item.text}</p>
                </div>
              ))}

              {/* images scrolling from left to right */}
              <div className="vacination-marquee">
                <div className="vacination-track">
                  {[0, 1].map((group) => (
                    <div
                      className="vacination-group"
                      key={group}
                      aria-hidden={group === 1}
                    >
                      {slides.map((src, i) => (
                        <img
                          key={`${group}-${i}`}
                          src={src}
                          alt={group === 0 ? "Vaccination on the farm" : ""}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: image + health and prevention */}
          <div className="vacination-right">
            <div className="vacination-image">
              <img src={cowImage} alt="Cow on the farm" />
            </div>

            <div className="vacination-panel">
              <span className="vacination-label">Health and prevention</span>

              <ul className="vacination-list">
                {healthCare.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vacination;