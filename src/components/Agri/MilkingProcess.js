
import React from "react";
import "./MilkingProcess.css";

const milkingSteps = [
  {
    number: "1",
    title: "Pre-milking checks",
    description:
      "Teat sanitization, strip-cup examination and udder stimulation protocol.",
  },
  {
    number: "2",
    title: "Milking procedure",
    description:
      "Controlled claw attachment, regulated pulsation, and gentle automatic cluster drop off.",
  },
  {
    number: "3",
    title: "Cleaning & sanitation",
    description:
      "Post-milking teat dipping with barrier disinfectant and CIP pipeline wash.",
  },
  {
    number: "4",
    title: "Milk handling & records",
    description:
      "Immediate inline chilling to 4°C and individual animal yield digital logging.",
  },
  {
    number: "5",
    title: "Health follow-up",
    description:
      "Conductivity monitoring for early mastitis detection and recovery tracking.",
  },
];

const MilkingProcess = () => {
  return (
    <section className="milking-process-section">
      <div className="container">
        <div className="milking-process-heading">
          <span className="milking-process-eyebrow">
            HYGIENIC OPERATIONS
          </span>

          <h2>Hygienic Milking. Consistent Monitoring.</h2>

          <p>
            Machine milking is part of the confirmed livestock operations
            at Leads Genetics. Automated vacuum pulse control and
            closed-pipe milk lines preserve hygiene while providing
            real-time flow diagnostics.
          </p>
        </div>

        <div className="milking-process-timeline">
          <div className="milking-process-line" />

          {milkingSteps.map((step, index) => (
            <div className="milking-process-step" key={step.number}>
              <div
                className={`milking-process-number ${
                  index === milkingSteps.length - 1
                    ? "milking-process-number-active"
                    : ""
                }`}
              >
                {step.number}
              </div>

              <div className="milking-process-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilkingProcess;
