import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import "./GenoAdv.css";

const advantages = [
  {
    icon: "shield",
    label: "QUALITY STANDARDS",
    title: "Commitment to Excellence",
    text: "Adherence to the highest standards in providing complete genomics solutions.",
  },
  {
    icon: "dna",
    label: "TECHNICAL EXPERTISE",
    title: "End-to-End Sequencing Expertise",
    text: "Expertise in various aspects of sequencing such as experiment design, target enrichment library construction, and customized bioinformatics analysis.",
  },
  {
    icon: "target",
    label: "RELIABLE RESULTS",
    title: "Accuracy & Affordability",
    text: "Delivery of fast, accurate, reliable, and affordable sequencing services.",
  },
  {
    icon: "layers",
    label: "MULTI-SAMPLE CAPABILITY",
    title: "Wide Sample Compatibility",
    text: "Capability to provide genomic sequencing services for a wide range of samples including human, mouse, plant, animal and microbe.",
  },
  {
    icon: "microscope",
    label: "RESEARCH-DRIVEN",
    title: "Advancing Genomics Research",
    text: "Mission to facilitate genomics research by providing access to the latest technologies in the field.",
  },
  {
    icon: "settings",
    label: "CUSTOMIZED SOLUTIONS",
    title: "Flexible Project Design",
    text: "Flexibility to customize services to fit individual project needs and provide specifically tailored analysis.",
  },
  {
    icon: "users",
    label: "EXPERT GUIDANCE",
    title: "Consultative Approach",
    text: "A consultative approach to identify the best and most economical solutions to meet specific research needs.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const introStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function AdvantageIcon({ type }) {
  const commonProps = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "dna":
      return (
        <svg {...commonProps}>
          <path d="M7 3c0 4 10 6 10 10s-10 6-10 8" />
          <path d="M17 3c0 4-10 6-10 10s10 6 10 8" />
          <path d="M8 6h8M7 12h10M8 18h8" />
        </svg>
      );

    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" />
          <path d="m16 8 5-5" />
        </svg>
      );

    case "layers":
      return (
        <svg {...commonProps}>
          <path d="m12 3 9 5-9 5-9-5 9-5z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );

    case "microscope":
      return (
        <svg {...commonProps}>
          <path d="m6 18 6-6" />
          <path d="m9 3 5 5" />
          <path d="m7 5 5-5" />
          <path d="m14 8 3-3" />
          <path d="M12 12a6 6 0 1 0 9 5" />
          <path d="M5 21h15" />
          <path d="M17 17h4" />
        </svg>
      );

    case "settings":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.7a8 8 0 0 1-1.6.9l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.6-.9l-1.7.7-1.4-2.4 1.4-1.1a8 8 0 0 1 0-1.9l-1.4-1.2 1.4-2.4 1.7.7a8 8 0 0 1 1.6-.9l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.6.9l1.7-.7 1.4 2.4-1.4 1.2a8 8 0 0 1 0 1.9z" />
        </svg>
      );

    case "users":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20v-1.5a6.5 6.5 0 0 1 13 0V20z" />
          <path d="M16 5a3.5 3.5 0 0 1 0 7" />
          <path d="M18 14a5 5 0 0 1 3.5 4.5V20H18" />
        </svg>
      );

    default:
      return null;
  }
}

function GenoAdv() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <MotionConfig reducedMotion="user">
      <section className="geno-adv-section">
        <div className="geno-adv-container">
          <div className="geno-adv-layout">
            {/* Left: intro */}
            <motion.div
              className="geno-adv-intro"
              variants={introStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >

              <motion.h2 className="section-heading geno-adv-title" variants={fadeUp}>
                Advantages of Our DNA Sequencing Services
              </motion.h2>

              <motion.p className="page-text geno-adv-description" variants={fadeUp}>
                Comprehensive genomics solutions backed by scientific expertise,
                advanced technologies, and a commitment to reliable research
                outcomes.
              </motion.p>

              <motion.div className="geno-adv-statement" variants={fadeUp}>
                <motion.div
                  className="geno-adv-statement-icon"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <AdvantageIcon type="dna" />
                </motion.div>

                <p className="page-text geno-adv-statement-text">
                  Precision science. Reliable sequencing. Research-driven
                  solutions.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: advantage list */}
            <div className="geno-adv-list">
              {advantages.map(function (item, index) {
                const isHovered = index === hoveredIndex;
                const isLast = index === advantages.length - 1;

                return (
                  <motion.div
                    className="geno-adv-row"
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    onMouseEnter={function () {
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={function () {
                      setHoveredIndex(-1);
                    }}
                  >
                    {isHovered ? (
                      <motion.div
                        className="geno-adv-pill"
                        layoutId="geno-adv-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      />
                    ) : null}

                    {!isLast ? (
                      <div className="geno-adv-track">
                        <motion.div
                          className="geno-adv-track-fill"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.9, ease: "easeInOut", delay: 0.2 }}
                        />
                      </div>
                    ) : null}

                    <motion.div
                      className="geno-adv-marker"
                      initial={{
                        backgroundColor: "#ffffff",
                        color: "#168e83",
                      }}
                      whileInView={{
                        backgroundColor: "#0a9b73",
                        color: "#ffffff",
                        scale: [0.85, 1.1, 1],
                      }}
                      viewport={{ once: true, amount: 1, margin: "0px 0px -20% 0px" }}
                      transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                      <AdvantageIcon type={item.icon} />
                    </motion.div>

                    <div className="geno-adv-body">
                      <span className="geno-adv-label">{item.label}</span>

                      <h3 className="page-text geno-adv-row-title">{item.title}</h3>

                      <p className="page-text geno-adv-row-text">{item.text}</p>
                    </div>

                    <span className="geno-adv-number">{padNumber(index + 1)}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default GenoAdv;