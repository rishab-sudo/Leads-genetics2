import React from "react";
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
    <div className="moet-about" id="moet-overview">
      <div className="moet-about__container">
        {/* ===================== ROW 1: WHAT IS MOET? (text left, number right) ===================== */}
        <section className="moet-about__row moet-about__row--reverse">
          <motion.div
            className="moet-about__row-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <span className="moet-about__number" aria-hidden="true">
              01
            </span>
            <span className="moet-about__eyebrow">01 / Understanding MOET</span>
            <h2 className="section-heading moet-about__title">What is MOET?</h2>
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
              Multiple Ovulation and Embryo Transfer (MOET) is an advanced
              reproductive technology used for rapid genetic improvement in
              dairy cattle. It enables an elite donor cow to produce multiple
              embryos in a single reproductive cycle. These embryos develop
              naturally inside the donor cow and can then be transferred to
              suitable recipient cows.
            </motion.p>

            <ul className="moet-about__steps">
              {steps.map((step, i) => (
                <motion.li
                  key={step}
                  className="moet-about__step"
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <span className="moet-about__step-number">{i + 1}</span>
                  <span className="moet-about__step-label">{step}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===================== ROW 2: WHY MOET IN INDIA? (number left, text right) ===================== */}
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
          </div>

          {/* Full-width highlight banner */}
          <motion.div
            className="moet-about__banner"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
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