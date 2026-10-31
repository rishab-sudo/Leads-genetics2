import React from "react";
import "./MoetHero.css";
import embryoImage from "../../assets/embroy1.jpeg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stripSlide = {
  hidden: { y: "-100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const MoetHero = () => {
  return (
    <section className="moet-hero" id="moet-hero">
      {/* Green strip behind the navbar */}
      <motion.div
        className="moet-hero__strip"
        variants={stripSlide}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      />

      <div className="moet-hero__container">
        {/* Left: content */}
        <div className="moet-hero__content">
          <motion.h1
            className="section-heading moet-hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="moet-hero__title-dark">
              Multiple Ovulation &amp;
            </span>{" "}
            <span className="moet-hero__title-blue">
              Embryo Transfer (MOET)
            </span>
          </motion.h1>

          <motion.h2
            className="moet-hero__subtitle"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Accelerating Genetic Improvement
          </motion.h2>

          <motion.p
            className="moet-hero__description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            A powerful reproductive technology that enables rapid dairy cattle
            genetic improvement through the production of multiple naturally
            developed embryos from genetically superior donor cows.
          </motion.p>

          <motion.div
            className="moet-hero__actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href="#moet-overview" className="moet-hero__btn moet-hero__btn--primary">
              <span>Discover MOET</span>
              <svg
                className="moet-hero__btn-icon"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#moet-process" className="moet-hero__btn moet-hero__btn--secondary">
              <span>Explore the Process</span>
              <svg
                className="moet-hero__btn-icon"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="7" x2="17" y2="17" />
                <polyline points="17 7 17 17 7 17" />
              </svg>
            </a>
          </motion.div>

          <motion.p
            className="moet-hero__tagline"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <span className="moet-hero__dot" aria-hidden="true"></span>
            Naturally developed embryos. Genetically superior outcomes.
          </motion.p>
        </div>

        {/* Right: image card */}
        <motion.div
          className="moet-hero__visual"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="moet-hero__card">
            <img
              src={embryoImage}
              alt="MOET technology - from elite donor to superior herd"
              className="moet-hero__image"
            />
            <span className="moet-hero__badge">MOET</span>

            <div className="moet-hero__card-overlay">
              <span className="moet-hero__card-label">MOET Technology</span>
              <p className="moet-hero__card-text">From elite donor to superior herd</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MoetHero;