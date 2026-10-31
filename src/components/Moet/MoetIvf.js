import React from "react";
import "./MoetIvf.css";
import { motion } from "framer-motion";
import { Leaf, ChartLineUp, ShieldCheck, HeartStraight } from "@phosphor-icons/react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const advantageCards = [
  {
    number: "01",
    Icon: Leaf,
    title: "Naturally Developed Embryos",
    text: "Embryos develop inside the donor cow's reproductive tract, supporting good embryo quality.",
  },
  {
    number: "02",
    Icon: ChartLineUp,
    title: "Favourable Conception Outcomes",
    text: "Good-quality fresh MOET embryos can achieve conception rates exceeding 60% under well-managed field conditions.",
  },
  {
    number: "03",
    Icon: ShieldCheck,
    title: "Reduced Early Embryonic Loss",
    text: "MOET embryos have been reported to have a lower risk of early embryonic loss compared with IVF embryos.",
  },
  {
    number: "04",
    Icon: HeartStraight,
    title: "Lower Abortion Risk",
    text: "Reported advantages include a lower incidence of abortion and a lower risk of large offspring syndrome.",
  },
];

const tableRows = [
  { param: "Fertilisation", moet: "Inside the donor cow", ivf: "In the laboratory" },
  { param: "Embryo development", moet: "In the reproductive tract", ivf: "In a controlled laboratory environment" },
  { param: "Oocyte / embryo collection", moet: "Embryo flushing", ivf: "Ovum pick-up (OPU)" },
  { param: "Development method", moet: "Natural in-vivo embryo production", ivf: "In-vitro embryo production" },
  { param: "Key consideration", moet: "Donor response and recipient synchronisation", ivf: "Oocyte quality and laboratory culture conditions" },
];

function MoetIvf() {
  return (
    <div className="moet-ivf">
      {/* ===================== SECTION 1: ADVANTAGES ===================== */}
      <section className="moet-advantages">
        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          The Advantages of MOET
        </motion.h2>

        <motion.p
          className="page-text moet-advantages-intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          MOET offers important reproductive and genetic advantages when
          supported by appropriate donor selection and recipient management.
        </motion.p>

        <div className="advantage-cards">
          {advantageCards.map((card, i) => (
            <motion.div
              key={card.number}
              className="advantage-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              custom={i}
            >
              <span className="advantage-card-number">{card.number}</span>
              <div className="advantage-card-icon-box">
                <card.Icon
                  size={24}
                  weight="duotone"
                  color="#14885a"
                />
              </div>
              <h3 className="advantage-card-title">{card.title}</h3>
              <p className="page-text advantage-card-text">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="note-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h4 className="note-box-title">MOET and IVF embryos are not identical.</h4>
          <p className="page-text note-box-text">
            Published comparisons have reported favourable outcomes for MOET
            embryos in conception, early embryonic survival, abortion incidence
            and large offspring syndrome risk. Actual outcomes vary with embryo
            quality, protocols and management.
          </p>
        </motion.div>
      </section>

      {/* ===================== SECTION 2: MOET ALONGSIDE IVF ===================== */}
      <section className="moet-comparison">
        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          MOET Alongside IVF
        </motion.h2>

        <motion.p
          className="page-text moet-comparison-intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Both technologies support genetic improvement, but they differ in
          where fertilisation and embryo development take place.
        </motion.p>

        <div className="method-cards">
          {[
            {
              title: "MOET: In-vivo embryo production",
              text: "The donor is stimulated to ovulate multiple eggs. These are fertilised inside the cow, and the resulting embryos are collected through flushing.",
            },
            {
              title: "IVF: In-vitro embryo production",
              text: "Oocytes are collected through OPU, matured and fertilised in the laboratory, then cultured before transfer or freezing.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="method-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h3 className="method-card-title">{card.title}</h3>
              <p className="page-text method-card-text">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="comparison-table-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <table className="comparison-table">
            <thead>
              <tr className="comparison-table-head-row">
                <th className="comparison-table-head-cell">Parameter</th>
                <th className="comparison-table-head-cell">MOET</th>
                <th className="comparison-table-head-cell">IVF</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <motion.tr
                  key={i}
                  className="comparison-table-row"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  <td className="comparison-table-parameter">{row.param}</td>
                  <td className="comparison-table-cell">{row.moet}</td>
                  <td className="comparison-table-cell">{row.ivf}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className="note-box"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h4 className="note-box-title">Which approach is suitable?</h4>
          <p className="page-text note-box-text">
            The choice between MOET and IVF depends on donor characteristics,
            reproductive performance, genetic objectives and the overall
            breeding programme.
          </p>
        </motion.div>
      </section>
    </div>
  );
}

export default MoetIvf;
