import React, { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Flask,
  Eyedropper,
  DotsNine,
  TreeStructure,
  TestTube,
  Virus,
} from "@phosphor-icons/react";
import ScientificLoop from "./ScientificLoop";
import leadBuilding from "../../assets/Leads-Building.jpg";
import researchBanner from "../../assets/clibanner.png";
import clinicalVideo from "../../assets/clinical_genomic.mp4";
import "./OurStory.css";

/* ============================================================
   MOTION CONFIG
   ============================================================ */
const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.15 };
const EARLY = { once: true, amount: 0, margin: "0px 0px -8% 0px" };

const makeVariants = (reduce) => ({
  stagger: {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: reduce ? 0 : 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.8, ease: EASE },
    },
  },
  imageReveal: {
    hidden: {
      opacity: 0,
      x: reduce ? 0 : -40,
      clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 12% 0%)",
    },
    show: {
      opacity: 1,
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: { duration: reduce ? 0.01 : 0.9, ease: EASE },
    },
  },
  panel: {
    hidden: { opacity: 0, y: reduce ? 0 : 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0.01 : 0.6,
        ease: EASE,
        staggerChildren: reduce ? 0 : 0.07,
      },
    },
  },
  card: {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.01 : 0.5, ease: EASE },
    },
  },
});

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
  const reduce = useReducedMotion();
  const v = makeVariants(reduce);

  /* ---- Story image parallax ---- */
  const storyRef = useRef(null);
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storySmooth = useSpring(storyProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const storyY = useTransform(
    storySmooth,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-7%", "7%"]
  );

  /* ---- Banner background parallax ---- */
  const heroRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const heroSmooth = useSpring(heroProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const heroY = useTransform(
    heroSmooth,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-8%", "8%"]
  );
  const heroScale = useTransform(
    heroSmooth,
    [0, 1],
    reduce ? [1, 1] : [1.15, 1.05]
  );

  return (
    <>
      {/* ========================================================
          SECTION 1: OUR STORY
          ======================================================== */}
      <section
        id="about-our-story"
        className="os-story"
        aria-labelledby="os-story-heading"
        ref={storyRef}
      >
        <motion.div
          className="os-story-inner"
          initial="hidden"
          whileInView="show"
          viewport={EARLY}
          variants={v.stagger}
        >
          <motion.div className="os-story-media" variants={v.imageReveal}>
            <motion.img
              className="os-story-image"
              src={leadBuilding}
              alt="Leads Genetics building"
              style={{ y: storyY, scale: reduce ? 1 : 1.18 }}
            />
          </motion.div>

          <motion.div className="os-story-content" variants={v.stagger}>
            <motion.span className="os-story-eyebrow" variants={v.fadeUp}>
              Our Story
            </motion.span>
            <motion.h2
              id="os-story-heading"
              className="section-heading os-story-title"
              variants={v.fadeUp}
            >
              Building the Genomics Platform for Cattle Improvement
            </motion.h2>
            <motion.p className="page-text os-story-text" variants={v.fadeUp}>
              Leads Genetics is the next chapter in the evolution of a long-standing agricultural enterprise rooted in the BL Agro / Leads Group of Companies. With deep experience in agriculture, food, dairy-linked value chains, and farmer-oriented businesses, the Group brings an understanding of Indian agriculture that extends beyond the laboratory - into farms, supply chains, producers, and the realities of improving productivity at scale.
            </motion.p>
            <motion.p className="page-text os-story-text" variants={v.fadeUp}>
              The genomics operations of GenePrint Labs were merged into the Leads ecosystem, bringing established genomics, molecular diagnostics, sequencing, and bioinformatics capabilities into the organization.
            </motion.p>
            <motion.p className="page-text os-story-text" variants={v.fadeUp}>
              Leads Genetics was created with a larger ambition: to combine the scale and agricultural understanding of the BL Agro ecosystem with modern genomics to address one of India's most important biological challenges - improving the productivity, health, fertility, and resilience of its cattle population.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================================
          SECTION 2: RESEARCH BANNER + SERVICES
          ======================================================== */}
      <section
        id="about-services-banner"
        className="os-banner"
        aria-labelledby="os-banner-heading"
      >
        <div className="os-banner-hero" ref={heroRef}>
          <motion.img
            className="os-banner-bg"
            src={researchBanner}
            alt=""
            style={{ y: heroY, scale: heroScale }}
          />
          <div className="os-banner-overlay" />
          <motion.div
            className="os-banner-copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={v.stagger}
          >
            <motion.h2
              id="os-banner-heading"
              className="section-heading os-banner-title"
              variants={v.fadeUp}
            >
              We Offer Solutions with the Intention of Fostering Trusting Relationships.
            </motion.h2>
            <motion.p className="page-text os-banner-text" variants={v.fadeUp}>
              Appropriate for your specific research, making it easy for you to have quality sequencing &amp; bioinformatics services.
            </motion.p>
          </motion.div>
        </div>

        <div className="os-banner-services-wrap">
          <motion.div
            className="os-banner-panel"
            initial="hidden"
            whileInView="show"
            viewport={EARLY}
            variants={v.panel}
          >
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

            <ul className="os-banner-services">
              {services.map((service) => (
                <motion.li
                  key={service.id}
                  className="os-banner-card"
                  variants={v.card}
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -6,
                          backgroundColor: "rgba(255, 255, 255, 0.12)",
                          borderColor: "rgba(255, 255, 255, 0.7)",
                          transition: { duration: 0.3, ease: EASE },
                        }
                  }
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <motion.span
                    className="os-banner-card-icon-wrap"
                    variants={{
                      hidden: { scale: reduce ? 1 : 0.4, rotate: reduce ? 0 : -20 },
                      show: {
                        scale: 1,
                        rotate: 0,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 16,
                          delay: 0.1,
                        },
                      },
                    }}
                  >
                    <service.icon
                      className="os-banner-card-icon"
                      size={28}
                      weight="regular"
                      aria-hidden="true"
                    />
                  </motion.span>
                  <h3 className="os-banner-card-title">{service.title}</h3>
                  <p className="os-banner-card-text">{service.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: SCIENTIFIC LOOP
          ======================================================== */}
      <section className="os-loop" aria-label="The closed scientific loop">
        <motion.div
          className="os-loop-inner"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          variants={v.fadeUp}
        >
          <ScientificLoop />
        </motion.div>
      </section>
    </>
  );
}