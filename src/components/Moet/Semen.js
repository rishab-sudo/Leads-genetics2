import React from "react";
import "./Semen.css";
import embryoImage from "../../assets/lab_gr.jpeg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const semenItems = [
  {
    badge: "A",
    title: "Indigenous lines",
    text: "Gir and Sahiwal sires for local adaptation and dependable, affordable genetic uplift.",
  },
  {
    badge: "B",
    title: "Imported lines",
    text: "Elite Gir genetics accessed through our partnership with EMBRAPA, Brazil, for ambitious breed improvement.",
  },
  {
    badge: "C",
    title: "In development · Sex-sorted semen",
    text: "Aims to raise the share of female calves, helping farms grow their milking herd by plan, not chance. A dedicated semen station with sex-sorted production is part of our expansion plan.",
  },
];

const checkpoints = [
  { number: "01", title: "Genomic merit", text: "Sires selected on DNA-based breeding value." },
  { number: "02", title: "Verified parentage", text: "Pedigree confirmed through genotyping." },
  { number: "03", title: "Deep-frozen storage", text: "Semen frozen and held in liquid nitrogen." },
  { number: "04", title: "Batch traceability", text: "Every batch is traceable to its sire." },
];

function Semen() {
  return (
    <section className="semen">
      {/* ===================== TOP: HEADING, LIST AND IMAGE ===================== */}
      <div className="semen-top">
        <div className="semen-left">
          <motion.h2
            className="section-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Semen &amp; sire{" "}
            <span className="section-heading-accent">excellence.</span>
          </motion.h2>

          <motion.p
            className="page-text semen-intro"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Semen from sires selected on genomic merit and verified parentage,
            so you start improving your herd from the moment the straw is used.
          </motion.p>

          <div className="semen-list">
            {semenItems.map((item, i) => (
              <motion.div
                key={item.badge}
                className="semen-item"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3 + i}
              >
                <span className="semen-item-badge">{item.badge}</span>
                <div className="semen-item-body">
                  <h3 className="semen-item-title">{item.title}</h3>
                  <p className="semen-item-text">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="semen-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            className="semen-image"
            src={embryoImage}
            alt="Superior germplasm"
          />
          <div className="semen-image-card">
            <p className="semen-image-card-label">GENETIC POTENTIAL</p>
            <p className="semen-image-card-title">Every straw has a lineage.</p>
          </div>
        </motion.div>
      </div>

      {/* ===================== BOTTOM: FOUR CHECKPOINTS ===================== */}
      <div className="semen-checkpoints">
        <motion.div
          className="semen-checkpoints-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <p className="semen-checkpoints-label">WHAT STANDS BEHIND EVERY STRAW</p>
          <p className="page-text semen-checkpoints-note">
            Four checkpoints. One traceable source of genetic value.
          </p>
        </motion.div>

        <div className="semen-checkpoint-cards">
          {checkpoints.map((cp, i) => (
            <motion.div
              key={cp.number}
              className="semen-checkpoint-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i}
            >
              <span className="semen-checkpoint-number">{cp.number}</span>
              <h3 className="semen-checkpoint-title">{cp.title}</h3>
              <p className="page-text semen-checkpoint-text">{cp.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Semen;
