import React from "react";
import { motion } from "framer-motion";
import "./ScientificLoop.css";

const loopSteps = ["Genotype", "Phenotype", "Genomic Evaluation", "Selection", "Breeding", "Next Generation", "Validation"];

export default function ScientificLoop() {
  return (
    <motion.div
      className="scientific-loop"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
    >
      <span className="loop-label">The Closed Scientific Loop</span>
      <div className="loop-steps">
        {loopSteps.map((step, i, arr) => (
          <React.Fragment key={step}>
            <motion.span
              className="loop-step"
              whileHover={{ scale: 1.08, backgroundColor: "rgba(255,255,255,0.28)" }}
              transition={{ type: "spring", stiffness: 320 }}
            >
              {step}
            </motion.span>
            {i < arr.length - 1 && <span className="loop-arrow" aria-hidden="true">→</span>}
          </React.Fragment>
        ))}
      </div>
      <p className="loop-caption">
        This enables genetic improvement to be evaluated not only computationally, but in the field.
      </p>
    </motion.div>
  );
}