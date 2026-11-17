import React from "react";
import "./GenoAbout.css";
import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import ngsImage from "../../assets/NGS.png";

/* Parent: staggers its children one after another */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

/* Child: fade and rise */
const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Green line above each heading: grows from the left */
const accentVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* Right-side blocks: slide in from the right */
const slideInVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* Checklist items inside the card */
const listItemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.35 },
  },
};

const viewportSettings = { once: true, amount: 0.2 };

const highlights = ["Genetic Variation", "Disease Insights", "Trait Understanding"];

function GenoAbout() {
  return (
    <section className="geno-about">
      <div className="geno-about-inner">
        {/* ===================== HEADER ===================== */}
        <motion.div
          className="geno-about-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.span className="geno-about-eyebrow" variants={itemVariants}>
            RESEARCH GENOMICS
          </motion.span>
          <motion.h1
            className="section-heading geno-about-title"
            variants={itemVariants}
          >
            Genomics
          </motion.h1>
          <motion.p
            className="page-text geno-about-lead"
            variants={itemVariants}
          >
            Genome sequencing and assembly, variant and structural variant
            analysis, genotyping and genomic selection, and metagenomics,
            across short-read and long-read platforms.
          </motion.p>
        </motion.div>

        <motion.div
          className="geno-about-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        ></motion.div>

        {/* ===================== WHAT IS GENOMIC DNA SEQUENCING ===================== */}
        {/* Top row: heading + first paragraph on the left, box on the right */}
        <div className="geno-about-row">
          <motion.div
            className="geno-about-text-block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.div
              className="geno-about-accent"
              variants={accentVariants}
            ></motion.div>
            <motion.h2
              className="section-heading geno-about-heading"
              variants={itemVariants}
            >
              What is Genomic DNA Sequencing?
            </motion.h2>
            <motion.p
              className="page-text geno-about-text"
              variants={itemVariants}
            >
              Genomic DNA sequencing is an advanced molecular biology technique
              used to determine the precise order of the four nucleotide bases
              — adenine (A), thymine (T), guanine (G), and cytosine (C) —
              across an organism's genomic DNA.
            </motion.p>
          </motion.div>

          <motion.div
            className="geno-about-card"
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.ul
              className="geno-about-card-list"
              variants={cardListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
            >
              {highlights.map((item) => (
                <motion.li
                  className="geno-about-card-item"
                  key={item}
                  variants={listItemVariants}
                >
                  <CheckCircle size={26} weight="fill" color="#14885a" />
                  <span className="geno-about-card-label">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Full-width text below the row */}
        <motion.div
          className="geno-about-more"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p
            className="page-text geno-about-text"
            variants={itemVariants}
          >
            Technology plays a vital role in biological and genomic research, providing a data-driven foundation for understanding the relationships between genes, diseases, and observable traits (phenotypes). Genomic DNA sequencing supports the investigation of biological functions, disease-associated genetic variations, inherited characteristics, and evolutionary relationships.
          </motion.p>
        </motion.div>

        {/* ===================== NEXT-GENERATION SEQUENCING ===================== */}
        {/* Top row: heading + first paragraph on the left, image on the right */}
        <div className="geno-about-row geno-about-row-spaced">
          <motion.div
            className="geno-about-text-block"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <motion.div
              className="geno-about-accent"
              variants={accentVariants}
            ></motion.div>
            <motion.h2
              className="section-heading geno-about-heading"
              variants={itemVariants}
            >
              Next-Generation Sequencing (NGS)
            </motion.h2>
            <motion.p
              className="page-text geno-about-text"
              variants={itemVariants}
            >
              Next-Generation Sequencing is an advanced high-throughput
              sequencing technology that enables the rapid and simultaneous
              analysis of millions of DNA fragments. Platforms such as Illumina
              have transformed modern genomics by delivering scalable,
              accurate, and cost-effective solutions for large-scale
              genetic studies.
            </motion.p>
          </motion.div>

          <motion.div
            className="geno-about-image-block"
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <img
              className="geno-about-image"
              src={ngsImage}
              alt="Next-Generation Sequencing reads aligned in parallel"
            />
          </motion.div>
        </div>

        {/* Full-width text below the row */}
        <motion.div
          className="geno-about-more"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
        >
          <motion.p
            className="page-text geno-about-text"
            variants={itemVariants}
          >
            NGS technology enables millions of sequencing reactions to be
            performed simultaneously, allowing nucleotide sequences to be
            identified through real-time detection of DNA synthesis. This
            parallel sequencing approach significantly increases data
            generation capacity while reducing the time and cost associated
            with large-scale genomic analysis.
          </motion.p>
          <motion.p
            className="page-text geno-about-text"
            variants={itemVariants}
          >
            Although NGS offers substantial advantages in throughput and
            sequencing efficiency, its relatively short read lengths can create
            computational challenges during genome assembly and downstream
            bioinformatics analysis. Continued improvements in sequencing
            platforms, data-processing algorithms, and computational pipelines
            are expanding the capabilities and applications of NGS technology.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default GenoAbout;