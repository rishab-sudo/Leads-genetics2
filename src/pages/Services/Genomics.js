
import React from "react";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";
import "./Genomics.css";

import GenomicsFAQ from "../../components/Research/GenomicsFAQ";
import GenomicBanner from "../../components/Research/GenomicBanner";
import GenoAbout from "../../components/Research/GenoAbout";
import GenoSnp from "../../components/Research/GenoSnp";
import GenoSer from "../../components/Research/GenoSer";
import GenoAdv from "../../components/Research/GenoAdv";

function Genomics() {
  return (
    <MotionConfig reducedMotion="user">
      <>
        <GenomicBanner />

        <GenoAbout />

        <GenoSnp />

        <GenoSer />

        <GenoAdv />

        <GenomicsFAQ />

        <section className="genomics-cta">
          <div className="genomics-cta-inner">

            <motion.div
              className="genomics-cta-content"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <span className="genomics-cta-eyebrow">
                LEADS GENETICS
              </span>

              <h2>
                Take Your Research
                <span> Further.</span>
              </h2>

              <p>
                Explore advanced sequencing technologies and
                genomics capabilities designed to support your
                next research breakthrough. Let's find the right
                solution for your project.
              </p>

              <div className="genomics-cta-actions">
                <Link
                  to="/technologies"
                  className="genomics-cta-primary"
                >
                  Explore Technologies
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  to="/contact"
                  className="genomics-cta-secondary"
                >
                  Get a Quote
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="genomics-cta-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="genomics-cta-orbit orbit-one"></div>
              <div className="genomics-cta-orbit orbit-two"></div>
              <div className="genomics-cta-orbit orbit-three"></div>

              <div className="genomics-cta-core">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 10C28 30 72 35 72 50C72 65 28 70 28 90"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M72 10C72 30 28 35 28 50C28 65 72 70 72 90"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M35 20H65M29 35H71M29 50H71M29 65H71M35 80H65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span className="genomics-cta-dot dot-one"></span>
              <span className="genomics-cta-dot dot-two"></span>
              <span className="genomics-cta-dot dot-three"></span>
            </motion.div>

          </div>
        </section>
      </>
    </MotionConfig>
  );
}

export default Genomics;
