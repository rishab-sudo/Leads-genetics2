import React, { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import "./GenoSnp.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const workflowSteps = [
  {
    icon: "🐄",
    title: "Sample Collection",
    sub: "",
    text: "Animals / Plants",
  },
  {
    icon: "🧬",
    title: "Genotyping",
    sub: "(GBS / Panels)",
    text: "High-throughput analysis",
  },
  {
    icon: "📊",
    title: "Data Analysis",
    sub: "",
    text: "Reliable and accurate results",
  },
  {
    icon: "📋",
    title: "Actionable Insights",
    sub: "",
    text: "For better decisions",
  },
];

const solutions = [
  {
    icon: "🧬",
    title: "Genotyping-by-Sequencing (GBS)",
    text: "Cost-effective, high-throughput genetic analysis for crop and livestock species.",
  },
  {
    icon: "🌱",
    title: "Targeted Amplicon Panels",
    text: "Affordable, scalable purity and trait validation for seed companies and breeders.",
  },
  {
    icon: "◉",
    title: "SNP DNA Fingerprinting",
    text: "Rapid and standardized purity and hybridity testing for variety protection.",
  },
];

const bars = [
  { height: "35%", fillClass: "geno-snp-bar-fill geno-snp-bar-fill-one" },
  { height: "52%", fillClass: "geno-snp-bar-fill geno-snp-bar-fill-two" },
  { height: "68%", fillClass: "geno-snp-bar-fill geno-snp-bar-fill-three" },
  { height: "85%", fillClass: "geno-snp-bar-fill geno-snp-bar-fill-four" },
  { height: "100%", fillClass: "geno-snp-bar-fill geno-snp-bar-fill-five" },
];

const curvePath =
  "M8 105 C35 100, 42 55, 68 20 S112 18, 130 55 S155 98, 172 105";

function GenoSnp() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(
    function () {
      if (isPaused) {
        return undefined;
      }

      const timer = setInterval(function () {
        setActiveStep(function (previous) {
          return (previous + 1) % workflowSteps.length;
        });
      }, 2800);

      return function () {
        clearInterval(timer);
      };
    },
    [isPaused]
  );

  return (
    <MotionConfig reducedMotion="user">
      <section className="geno-snp-section">
        <div className="geno-snp-container">
          {/* Intro */}
          <motion.div
            className="geno-snp-intro"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="geno-snp-label" variants={fadeUp}>
              GENOMICS SERVICES
            </motion.span>

            <motion.h2 className="section-heading geno-snp-title" variants={fadeUp}>
              Genotyping-by-Sequencing and SNP Fingerprinting
            </motion.h2>

            <motion.p className="page-text geno-snp-intro-text" variants={fadeUp}>
              Leads Genetics offers cost-effective, high-throughput genotyping
              solutions for seed purity testing, variety identification, trait
              validation, and large-scale population screening — accessible to
              both research institutions and commercial breeding programs.
            </motion.p>
          </motion.div>

          {/* Workflow + Solutions together */}
          <motion.div
            className="geno-snp-block geno-snp-combined"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="geno-snp-combined-grid">
              {/* Left: workflow stepper */}
              <div
                className="geno-snp-workflow-col"
                onMouseEnter={function () {
                  setIsPaused(true);
                }}
                onMouseLeave={function () {
                  setIsPaused(false);
                }}
              >
                <motion.h3 className="section-heading geno-snp-block-heading" variants={fadeUp}>
                  Our Genotyping Workflow
                </motion.h3>

                <div className="geno-snp-flow">
                  {workflowSteps.map(function (step, index) {
                    const isActive = index === activeStep;

                    return (
                      <motion.div
                        className="geno-snp-flow-row"
                        key={step.title}
                        variants={fadeUp}
                        onClick={function () {
                          setActiveStep(index);
                        }}
                      >
                        {isActive ? (
                          <motion.div
                            className="geno-snp-flow-pill"
                            layoutId="geno-snp-active-pill"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        ) : null}

                        {index < workflowSteps.length - 1 ? (
                          <div className="geno-snp-track">
                            <motion.div
                              className="geno-snp-track-fill"
                              initial={false}
                              animate={{ scaleY: index < activeStep ? 1 : 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                          </div>
                        ) : null}

                        <motion.div
                          className="geno-snp-flow-icon"
                          initial={false}
                          animate={{
                            scale: isActive ? 1.12 : 1,
                            boxShadow: isActive
                              ? "0px 0px 0px 3px #3fbf96"
                              : "0px 0px 0px 2px #c9e9e2",
                          }}
                          transition={{ duration: 0.35 }}
                        >
                          {step.icon}
                        </motion.div>

                        <div className="geno-snp-flow-body">
                          <p className="page-text geno-snp-item-title">{step.title}</p>

                          {step.sub ? (
                            <p className="page-text geno-snp-step-sub">{step.sub}</p>
                          ) : null}

                          <p className="page-text geno-snp-item-text">{step.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Right: solutions */}
              <div className="geno-snp-solutions-col">
                <motion.h3 className="section-heading geno-snp-block-heading" variants={fadeUp}>
                  Our Solutions
                </motion.h3>

                <div className="geno-snp-solution-list">
                  {solutions.map(function (item) {
                    return (
                      <motion.div
                        className="geno-snp-solution-card"
                        key={item.title}
                        variants={fadeUp}
                        whileHover={{ x: 6 }}
                      >
                        <motion.div
                          className="geno-snp-solution-icon"
                          whileHover={{ rotate: 8, scale: 1.08 }}
                        >
                          {item.icon}
                        </motion.div>

                        <div className="geno-snp-solution-body">
                          <p className="page-text geno-snp-item-title">{item.title}</p>
                          <p className="page-text geno-snp-item-text">{item.text}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div
            className="geno-snp-capabilities"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 className="section-heading geno-snp-capabilities-heading" variants={fadeUp}>
              Advanced Genotyping Capabilities
            </motion.h3>

            <div className="geno-snp-capability-grid">
              {/* Bar chart */}
              <motion.div
                className="geno-snp-capability-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="geno-snp-visual geno-snp-chart">
                  {bars.map(function (bar, index) {
                    return (
                      <motion.div
                        className="geno-snp-bar"
                        key={bar.height}
                        initial={{ height: "0%" }}
                        whileInView={{ height: bar.height }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.9,
                          ease: "easeOut",
                          delay: 0.3 + index * 0.12,
                        }}
                      >
                        <motion.div
                          className={bar.fillClass}
                          animate={{ scaleY: [1, 0.88, 1] }}
                          transition={{
                            duration: 2.4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1.4 + index * 0.2,
                          }}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="geno-snp-capability-content">
                  <p className="page-text geno-snp-item-title">SNP Array Genotyping</p>
                  <p className="page-text geno-snp-item-text">
                    Mid-density (50K) and high-density (700K) SNP array
                    genotyping for livestock genomic evaluation.
                  </p>
                </div>
              </motion.div>

              {/* Curve */}
              <motion.div
                className="geno-snp-capability-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="geno-snp-visual geno-snp-curve">
                  <svg
                    className="geno-snp-curve-svg"
                    viewBox="0 0 180 120"
                    role="img"
                    aria-label="Genotyping distribution curve"
                  >
                    <motion.path
                      d={curvePath + " L172 110 L8 110 Z"}
                      fill="#12a891"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 0.1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 1 }}
                    />

                    <motion.path
                      d={curvePath}
                      fill="none"
                      stroke="#12a891"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                    />

                    <motion.circle
                      cx="68"
                      cy="20"
                      r="4"
                      fill="#12a891"
                      animate={{ r: [4, 6.5, 4] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.circle
                      cx="42"
                      cy="55"
                      r="3"
                      fill="#12a891"
                      animate={{ r: [3, 5, 3] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    />
                    <motion.circle
                      cx="130"
                      cy="55"
                      r="3"
                      fill="#12a891"
                      animate={{ r: [3, 5, 3] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    />
                  </svg>
                </div>

                <div className="geno-snp-capability-content">
                  <p className="page-text geno-snp-item-title">Low-Density Panels</p>
                  <p className="page-text geno-snp-item-text">
                    Low-density panel design with imputation to reference
                    density for cost-effective routine genotyping.
                  </p>
                </div>
              </motion.div>

              {/* Pedigree */}
              <motion.div
                className="geno-snp-capability-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="geno-snp-visual geno-snp-pedigree">
                  <motion.div
                    className="geno-snp-person"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ●
                  </motion.div>

                  <svg
                    className="geno-snp-pedigree-svg"
                    viewBox="0 0 100 30"
                    role="img"
                    aria-label="Pedigree lines"
                  >
                    <motion.path
                      d="M50 0 V10 M50 10 H20 V30 M50 10 H80 V30"
                      fill="none"
                      stroke="#28b98f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
                    />
                  </svg>

                  <div className="geno-snp-pedigree-children">
                    <motion.span
                      className="geno-snp-pedigree-child"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      🐄
                    </motion.span>
                    <motion.span
                      className="geno-snp-pedigree-child"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    >
                      🌿
                    </motion.span>
                  </div>
                </div>

                <div className="geno-snp-capability-content">
                  <p className="page-text geno-snp-item-title">Parentage &amp; Pedigree</p>
                  <p className="page-text geno-snp-item-text">
                    Parentage and pedigree verification; breed composition
                    and admixture estimation in crossbred populations.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default GenoSnp;