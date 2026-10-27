import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeRight, stagger } from "./Animations";
import ScientificLoop from "./ScientificLoop";
import "./OurStory.css";

const platformItems = [
  "Genotyping",
  "Next-generation sequencing",
  "Long-read genomics",
  "Bioinformatics",
  "Reproductive technologies & IVF",
  "Infectious-disease screening",
  "Genomic selection",
];

export default function OurStory() {
  return (
    <section id="about-our-story" className="container-fluid our-story-section" aria-labelledby="our-story-heading">
      <motion.div className="section-header" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
        <motion.span className="tag" variants={fadeUp}>Our Story</motion.span>
        <motion.h2 id="our-story-heading" className="section-heading" variants={fadeUp}>
          Building the Genomics Platform for Cattle Improvement
        </motion.h2>
      </motion.div>

      <div className="story-grid">
        <motion.div className="story-text page-text page-text" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
          <motion.p variants={fadeUp}>
            Leads Genetics is the next chapter in the evolution of a long-standing agricultural enterprise rooted in the BL Agro / Leads Group of Companies. With deep experience in agriculture, food, dairy-linked value chains, and farmer-oriented businesses, the Group brings an understanding of Indian agriculture that extends beyond the laboratory - into farms, supply chains, producers, and the realities of improving productivity at scale.
          </motion.p>
          <motion.p variants={fadeUp}>
            The genomics operations of GenePrint Labs were merged into the Leads ecosystem, bringing established genomics, molecular diagnostics, sequencing, and bioinformatics capabilities into the organization.
          </motion.p>
          <motion.p variants={fadeUp}>
            Leads Genetics was created with a larger ambition: to combine the scale and agricultural understanding of the BL Agro ecosystem with modern genomics to address one of India's most important biological challenges - improving the productivity, health, fertility, and resilience of its cattle population.
          </motion.p>
        </motion.div>

        <motion.div className="story-highlight-box page-text" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeRight}>
          <div className="highlight-intro">
            <span className="highlight-label">Our Integrated Platform</span>
            <p>The organization brings together:</p>
          </div>
          <ul className="platform-list">
            {platformItems.map((item) => (
              <li key={item}><span className="list-bullet" aria-hidden="true">▸</span>{item}</li>
            ))}
          </ul>
          <div className="campus-note page-text">
            <span className="campus-icon" aria-hidden="true">📍</span>
            <p>At the centre is the <strong>Leads Genetics Livestock Campus in Bareilly</strong> - connecting genomics with a working research herd, elite germplasm, and continuously generated phenotypic information.</p>
          </div>
        </motion.div>
      </div>

      <ScientificLoop />
    </section>
  );
}