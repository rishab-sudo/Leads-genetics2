import React from "react";
import { Link } from "react-router-dom";
import "./MoetAbout.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.15, ease: "easeOut" },
  }),
};

const steps = [
  "Multiple ovulations",
  "Natural embryo development",
  "Embryo transfer",
];

const MoetAbout = () => {
  return (
    <div className="moet-about">
      <div className="moet-about__inner">
        {/* ===================== ROW 1: WHAT IS MOET? (text left, steps right) ===================== */}
        <section className="moet-about__row moet-about__row--first">
          <div className="moet-about__row-head">
            <span className="moet-about__number" aria-hidden="true">
              01
            </span>
            <span className="moet-about__eyebrow">01 / Technology Overview</span>
            <h2 className="section-heading moet-about__title">
              What is Multiple Ovulation &amp; Embryo Transfer (MOET)?
            </h2>
            <p className="page-text moet-about__text">
              Multiple Ovulation and Embryo Transfer (MOET) is an advanced
              reproductive technology that multiplies the contribution of
              genetically superior female cattle.
            </p>
            <p className="page-text moet-about__text">
              Hormonal treatment stimulates the donor cow to release multiple
              eggs in one cycle. After artificial insemination, several embryos
              develop inside the donor, which are then recovered nonsurgically
              and transferred to recipient cows.
            </p>
          </div>

          <div className="moet-about__steps-card">
            <h3 className="moet-about__steps-title">Key Steps in MOET</h3>
            <ul className="moet-about__steps-list">
              {steps.map((step, index) => (
                <motion.li
                  className="moet-about__step-item"
                  key={step}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={index}
                >
                  <span className="moet-about__step-badge">{index + 1}</span>
                  <span className="moet-about__step-name">{step}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===================== ROW 2: WHY MOET IN INDIA? (heading left, text right) ===================== */}
        <section className="moet-about__row moet-about__row--second">
          <motion.div
            className="moet-about__row-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <span className="moet-about__number" aria-hidden="true">
              02
            </span>
            <span className="moet-about__eyebrow">02 / Indian Dairy Sector</span>
            <h2 className="section-heading moet-about__title">
              Why MOET in India?
            </h2>
          </motion.div>

          <div className="moet-about__row-body">
            <motion.p
              className="page-text moet-about__text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={1}
            >
              Artificial insemination is widely adopted in India, but advanced
              reproductive technologies have not yet reached most farmers and
              remain at an early stage of adoption.
            </motion.p>

            <motion.p
              className="page-text moet-about__text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={2}
            >
              Sustainable improvement in milk production potential depends on
              genetic improvement. Technologies such as MOET and IVF can
              accelerate this progress by multiplying the contribution of
              genetically superior animals.
            </motion.p>

            <motion.p
              className="page-text moet-about__text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={3}
            >
              Learn more about our{" "}
              <Link to="/agri-genomics" className="moet-about__link">
                Agricultural Genomics
              </Link>{" "}
              programs and how our indigenous{" "}
              <Link to="/chip" className="moet-about__link">
                Zebu Cattle SNP Chip
              </Link>{" "}
              supports precise genomic evaluation and breeding decisions.
            </motion.p>
          </div>

          {/* Full-width highlight banner */}
          <motion.div
            className="moet-about__banner"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
          >
            <span className="moet-about__banner-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                width="26"
                height="26"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 17 9 11 13 15 21 7" />
                <polyline points="15 7 21 7 21 13" />
              </svg>
            </span>
            <div className="moet-about__banner-body">
              <h3 className="moet-about__banner-title">
                Faster genetic progress
              </h3>
              <p className="moet-about__banner-text">
                Through planned multiplication of elite genetics.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default MoetAbout;