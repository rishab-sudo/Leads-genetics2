import React from "react";
import { Link } from "react-router-dom";
import "./MoetCta.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const checkItems = [
  "Recipient health and reproductive assessment",
  "Appropriate synchronisation with embryo stage",
  "Careful embryo handling and transfer",
  "Follow-up and pregnancy monitoring",
];

const formulaItems = ["DONOR", "QUALITY EMBRYO", "SUITABLE RECIPIENT"];

function MoetCta() {
  return (
    <section className="moet-cta">
      {/* ===================== CARD 1: THE RECIPIENT MATTERS ===================== */}
      <div className="moet-cta-recipient">
        <div className="moet-cta-recipient-left">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Successful Embryo Transfer Needs the Right Recipient
          </motion.h2>

          <motion.p
            className="page-text moet-cta-recipient-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Embryo quality is only one part of a successful transfer. Recipient
            health, reproductive status and synchronisation with the embryo are
            important considerations.
          </motion.p>

          <div className="moet-cta-checklist">
            {checkItems.map((text, i) => (
              <motion.div
                key={i}
                className="moet-cta-check-item"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3 + i}
              >
                <span className="moet-cta-check-icon">✓</span>
                <p className="moet-cta-check-text">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="moet-cta-recipient-right"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <div className="moet-cta-formula">
            {formulaItems.map((item, i) => (
              <React.Fragment key={i}>
                <motion.p
                  className="moet-cta-formula-item"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {item}
                </motion.p>
                {i < formulaItems.length - 1 && (
                  <p className="moet-cta-formula-plus">+</p>
                )}
              </React.Fragment>
            ))}

            <motion.div
              className="moet-cta-formula-result"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <p className="moet-cta-formula-result-text">
                Planned genetic progress
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ===================== CARD 2: CALL TO ACTION ===================== */}
      <motion.div
        className="moet-cta-banner"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
      >
        <div className="moet-cta-banner-left">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Build a Genetically Superior Herd with MOET
          </motion.h2>

          <motion.p
            className="page-text moet-cta-banner-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Partner with LEADS Genetics for advanced reproductive solutions and
            planned dairy cattle genetic improvement.
          </motion.p>
        </div>

        <motion.div
          className="moet-cta-banner-right"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <Link className="moet-cta-button" to="/contact">
            <span className="moet-cta-button-text">Contact Us</span>
            <span className="moet-cta-button-arrow">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MoetCta;
