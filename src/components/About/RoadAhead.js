import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, scaleIn } from "./Animations";
import "./RoadAhead.css";

const roadSteps = [
  { label: "Better Data", icon: "📊" },
  { label: "Better Selection", icon: "🎯" },
  { label: "Better Breeding", icon: "🔬" },
  { label: "Better Cattle", icon: "🐄" },
  { label: "Better Outcomes", icon: "🌾" },
];

export default function RoadAhead() {
  return (
    <section
      id="about-road-ahead"
      className="road-ahead-section"
      aria-labelledby="road-ahead-heading"
    >
      <motion.div
        className="road-ahead-inner"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
      >
        <motion.span className="road-ahead-tag" variants={fadeUp}>
          The Road Ahead
        </motion.span>

        <motion.h2 id="road-ahead-heading" variants={fadeUp}>
          Genomics translated into genetic gain.
        </motion.h2>

        <motion.p className="road-ahead-text" variants={fadeUp}>
          Leads Genetics is building toward a future where genomic selection
          becomes increasingly accessible across India's cattle-breeding
          ecosystem - from elite breeding programs and organized dairy
          operations to cooperatives and broader population-improvement
          initiatives.
        </motion.p>

        <motion.div
          className="road-steps-row"
          variants={stagger}
          role="group"
          aria-label="Long-term ambition"
        >
          {roadSteps.map((step, i) => (
            <React.Fragment key={step.label}>
              <motion.div
                className="road-step-card"
                variants={scaleIn}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                <span className="rsc-icon" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="rsc-label">{step.label}</span>
              </motion.div>

              {i < roadSteps.length - 1 && (
                <span className="road-connector" aria-hidden="true">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.p className="road-conclusion" variants={fadeUp}>
          That is the purpose behind Leads Genetics.{" "}
          <em>
            Not genomics for genomics' sake - but genomics translated into
            genetic gain.
          </em>
        </motion.p>
      </motion.div>
    </section>
  );
}