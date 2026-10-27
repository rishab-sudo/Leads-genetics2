import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeLeft, stagger, scaleIn } from "./Animations";
import "./Mission.css";

const missionStats = [
  { value: "1B+", label: "Cattle in India", sub: "One of the world's largest populations" },
  { value: "5+", label: "Key Traits Tracked", sub: "Milk · Fertility · Growth · Health · Adaptability" },
  { value: "1×", label: "Shorter Genetic Cycle", sub: "Through precision genomic selection" },
];

const visionPoints = [
  { icon: "🧬", text: "Early-life genomic evaluation" },
  { icon: "🏆", text: "Superior breeding animals identified with confidence" },
  { icon: "📊", text: "Genomic breeding values complement selection" },
  { icon: "🔬", text: "Elite germplasm multiplied via reproductive tech" },
  { icon: "🛡️", text: "Disease resistance as a breeding objective" },
  { icon: "🌿", text: "Genetic diversity monitored and managed" },
  { icon: "🔗", text: "Genotype continuously linked to real-world phenotype" },
  { icon: "🌾", text: "Genomic selection reaches commercial herds nationwide" },
];

export default function MissionVision() {
  const [activeVision, setActiveVision] = useState(null);

  return (
    <section id="about-mission-vision" className="container-fluid mission-vision-section" aria-label="Mission and Vision">
      {/* Mission */}
      <motion.div className="mv-mission-wrap" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={stagger}>
        <motion.div className="mv-mission-text" variants={fadeLeft}>
          <span className="tag">Our Mission</span>
          <h2>To accelerate the genetic improvement of Indian cattle through genomics.</h2>
          <p className="page-text">
            Our mission is to make genomic selection a practical and scalable tool for improving India's dairy and livestock populations - translating genetic data into better breeding decisions that shorten the improvement cycle for every generation.
          </p>
        </motion.div>
        <motion.div className="mv-mission-stats" variants={stagger}>
          {missionStats.map((s) => (
            <motion.div
              key={s.label}
              className="mission-stat-card"
              variants={scaleIn}
              whileHover={{ y: -6, boxShadow: "0 16px 40px -16px rgba(37,99,184,0.25)" }}
              transition={{ type: "spring", stiffness: 280 }}
            >
              <span className="ms-value">{s.value}</span>
              <strong className="ms-label">{s.label}</strong>
              <span className="ms-sub">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="mv-divider" aria-hidden="true" />

      {/* Vision */}
      <motion.div className="mv-vision-wrap" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div className="mv-vision-header" variants={fadeUp}>
          <span className="tag">Our Vision</span>
          <h2>To build a genomically improved Indian cattle population - healthier, more productive, better adapted.</h2>
          <p className="page-text">
            Leads Genetics is a biotech company working at the intersection of genetics, genomics, artificial intelligence, and advanced research. The company focuses on developing innovative solutions across three key domains-cattle, plants, and human genetics-with the aim of leveraging genomic science and AI to improve productivity, health, sustainability, and outcomes. Through its focus on core research, technology, and innovation, Leads Genetics is working towards translating advances in genomics into real-world applications across agriculture, livestock, and human health
          </p>
        </motion.div>
        <motion.div className="vision-chip-grid" variants={stagger}>
          {visionPoints.map((pt, i) => (
            <motion.button
              key={i}
              className={`vision-chip ${activeVision === i ? "vision-chip--active" : ""}`}
              onClick={() => setActiveVision(activeVision === i ? null : i)}
              variants={scaleIn}
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="vc-icon">{pt.icon}</span>
              <span className="vc-text">{pt.text}</span>
            </motion.button>
          ))}
        </motion.div>
        <motion.p className="vision-conclusion" variants={fadeUp}>
          Ultimately, the goal is not simply to sequence more animals.&nbsp;
          <strong>The goal is to improve the animal.</strong>
        </motion.p>
      </motion.div>
    </section>
  );
}