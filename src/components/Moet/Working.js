import React from "react";
import "./Working.css";
import agriMoetImage from "../../assets/agri_moet.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const listItems = [
  "FSH stimulation for approximately 4–5 days",
  "Insemination with genetically superior semen",
  "Natural fertilisation and embryo development",
  "Transcervical embryo collection through flushing",
  "Transfer to suitable recipient cows or heifers",
];

const steps = [
  { number: "1", title: "Elite donor", text: "Select a genetically superior, healthy donor." },
  { number: "2", title: "FSH stimulation", text: "Administer FSH for approximately 4–5 days." },
  { number: "3", title: "Insemination", text: "Use semen from a genetically superior bull." },
  { number: "4", title: "Embryo development", text: "Embryos develop naturally in the donor." },
  { number: "5", title: "Embryo flushing", text: "Collect embryos by transcervical flushing." },
  { number: "6", title: "Transfer", text: "Transfer to suitable, synchronised recipients." },
];

const Working = () => {
  return (
    <div className="working">

      {/* Section 1: How does MOET work? */}
      <section className="working__science" id="moet-working">
        <div className="working__science-container">

          <motion.div
            className="working__visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="working__card">
              <img
                src={agriMoetImage}
                alt="In-vivo embryo production in the donor cow"
                className="working__image"
              />

              <div className="working__card-overlay">
                <span className="working__card-label">
                  In-vivo embryo production
                </span>
                <p className="working__card-text">
                  Embryos develop naturally inside the donor cow.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="working__content">

            <motion.h2
              className="section-heading working__title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              How Does MOET Work?
            </motion.h2>

            <motion.p
              className="working__text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              An elite donor cow receives FSH treatment to stimulate multiple
              ovulations. Following insemination with superior semen, embryos
              develop inside the donor cow. They are then collected through
              embryo flushing and transferred to suitable recipients.
            </motion.p>

            <ul className="working__list">
              {listItems.map((text, i) => (
                <motion.li
                  key={i}
                  className="working__list-item"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={3 + i}
                >
                  <svg
                    className="working__check"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="12" fill="#14885a" />
                    <polyline
                      points="7 12.5 10.5 16 17 9"
                      fill="none"
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="working__list-text">{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: MOET process flow */}
      <section className="working__process" id="moet-process">
        <div className="working__process-container">

          <motion.div
            className="working__process-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <p className="working__process-intro">
              A coordinated sequence from donor stimulation to recipient transfer.
            </p>
          </motion.div>

          <ol className="working__steps">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                className="working__step"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                custom={i}
              >
                <span className="working__step-number">{step.number}</span>
                <h3 className="working__step-title">{step.title}</h3>
                <p className="working__step-text">{step.text}</p>
              </motion.li>
            ))}
          </ol>

        </div>
      </section>
    </div>
  );
};

export default Working;