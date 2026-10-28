import React from "react";
import { motion } from "framer-motion";
import {
  Flask,
  Eyedropper,
  DotsNine,
  TreeStructure,
  TestTube,
  Virus,
} from "@phosphor-icons/react";
import { fadeUp, stagger } from "./Animations";
import ScientificLoop from "./ScientificLoop";
import leadBuilding from "../../assets/Leads-Building.jpg";
import researchBanner from "../../assets/clibanner.png";
import clinicalVideo from "../../assets/clinical_genomic.mp4";
import "./OurStory.css";

/* ============================================================
   DATA: SERVICES (banner cards)
   ============================================================ */
const services = [
  {
    id: "genotyping",
    icon: Flask,
    title: "Genotyping",
    desc: "Robust, reproducible PCR assays targeted to your SNPs of interest.",
  },
  {
    id: "ngs",
    icon: Eyedropper,
    title: "Next-generation sequencing",
    desc: "Quality-checked equipment and multiple QC steps for reliable data.",
  },
  {
    id: "long-read",
    icon: DotsNine,
    title: "Long-read genomics",
    desc: "Long-read sequencing on PacBio and ONT, matched to your project.",
  },
  {
    id: "bioinformatics",
    icon: TreeStructure,
    title: "Bioinformatics",
    desc: "Ph.D. and Master level scientists analysing genomics and transcriptomics data.",
  },
  {
    id: "ivf",
    icon: TestTube,
    title: "Reproductive technologies & IVF",
    desc: "Reproductive technologies to multiply elite germplasm.",
  },
  {
    id: "screening",
    icon: Virus,
    title: "Infectious-disease screening",
    desc: "Screening that supports healthier breeding herds.",
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function OurStory() {
  return (
    <>
      {/* ========================================================
          SECTION 1: OUR STORY
          prefix: os-story-
          Layout: image container left, text container right
          ======================================================== */}
      <section
        id="about-our-story"
        className="os-story"
        aria-labelledby="os-story-heading"
      >
        <div className="os-story-inner">
          <motion.div
            className="os-story-media"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <img
              className="os-story-image"
              src={leadBuilding}
              alt="Leads Genetics building"
            />
          </motion.div>

          <motion.div
            className="os-story-content"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.span className="os-story-eyebrow" variants={fadeUp}>
              Our Story
            </motion.span>
            <motion.h2
              id="os-story-heading"
              className="section-heading os-story-title"
              variants={fadeUp}
            >
              Building the Genomics Platform for Cattle Improvement
            </motion.h2>
            <motion.p className="page-text os-story-text" variants={fadeUp}>
              Leads Genetics is the next chapter in the evolution of a long-standing agricultural enterprise rooted in the BL Agro / Leads Group of Companies. With deep experience in agriculture, food, dairy-linked value chains, and farmer-oriented businesses, the Group brings an understanding of Indian agriculture that extends beyond the laboratory - into farms, supply chains, producers, and the realities of improving productivity at scale.
            </motion.p>
            <motion.p className="page-text os-story-text" variants={fadeUp}>
              The genomics operations of GenePrint Labs were merged into the Leads ecosystem, bringing established genomics, molecular diagnostics, sequencing, and bioinformatics capabilities into the organization.
            </motion.p>
            <motion.p className="page-text os-story-text" variants={fadeUp}>
              Leads Genetics was created with a larger ambition: to combine the scale and agricultural understanding of the BL Agro ecosystem with modern genomics to address one of India's most important biological challenges - improving the productivity, health, fertility, and resilience of its cattle population.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: RESEARCH BANNER + SERVICES
          prefix: os-banner-
          Layout: image banner with heading, dark services panel with video background
          overlapping the bottom edge of the banner
          ======================================================== */}
      <section
        id="about-services-banner"
        className="os-banner"
        aria-labelledby="os-banner-heading"
      >
        <div className="os-banner-hero">
          <img className="os-banner-bg" src={researchBanner} alt="" />
          <div className="os-banner-overlay" />
          <motion.div
            className="os-banner-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.h2
              id="os-banner-heading"
              className="section-heading os-banner-title"
              variants={fadeUp}
            >
              We Offer Solutions with the Intention of Fostering Trusting Relationships.
            </motion.h2>
            <motion.p className="page-text os-banner-text" variants={fadeUp}>
              Appropriate for your specific research, making it easy for you to have quality sequencing &amp; bioinformatics services.
            </motion.p>
          </motion.div>
        </div>

        <div className="os-banner-services-wrap">
          <div className="os-banner-panel">
            <video
              className="os-banner-panel-video"
              src={clinicalVideo}
              poster={researchBanner}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
            <div className="os-banner-panel-overlay" />
          <motion.ul
            className="os-banner-services"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {services.map((service) => (
              <motion.li
                key={service.id}
                className="os-banner-card"
                variants={fadeUp}
              >
                <service.icon
                  className="os-banner-card-icon"
                  size={28}
                  weight="regular"
                  aria-hidden="true"
                />
                <h3 className="os-banner-card-title">{service.title}</h3>
                <p className="page-text os-banner-card-text">{service.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: SCIENTIFIC LOOP
          Owned by ./ScientificLoop (own file, own styles)
          ======================================================== */}
      <section className="os-loop" aria-label="The closed scientific loop">
        <div className="os-loop-inner">
          <ScientificLoop />
        </div>
      </section>
    </>
  );
}