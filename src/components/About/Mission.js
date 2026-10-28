import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Mission.css";

const cards = [
  {
    label: "OUR MISSION",
    index: "01",
    theme: "mission",
    title:
      "To accelerate the genetic improvement of Indian cattle through genomics.",
    text: "Our mission is to make genomic selection a practical and scalable tool for improving India's dairy and livestock populations — translating genetic data into better breeding decisions that shorten the improvement cycle for every generation.",
    stats: [
      {
        value: "1B+",
        label: "Cattle in India",
        detail: "One of the world's largest populations",
      },
      {
        value: "5+",
        label: "Key Traits Tracked",
        detail: "Milk · Fertility · Growth · Health · Adaptability",
      },
    ],
  },
  {
    label: "OUR VISION",
    index: "02",
    theme: "vision",
    title:
      "To build a genomically improved Indian cattle population — healthier, more productive, better adapted.",
    text: "Leads Genetics is a biotech company working at the intersection of genetics, genomics, artificial intelligence, and advanced research. The company develops innovative solutions across cattle, plants, and human genetics, translating advances in genomic science and AI into real-world applications across agriculture, livestock, and human health.",
  },
];

const Foundation = () => (
  <div className="foundation-content">
    <span className="foundation-eyebrow">LEADS GENETICS FOUNDATION</span>

    <h2 className="section-heading foundation-title">
      Strength rooted in agriculture, sharpened by science.
    </h2>

    <div className="foundation-copy">
      <p className="page-text">
        The strength of Leads Genetics is not only its technology. It is also
        the agricultural ecosystem in which that technology is being developed.
      </p>

      <p className="page-text">
        The BL Agro / Leads Group of Companies provides a foundation rooted in
        agriculture and the Indian food and dairy landscape. Cattle genomics
        must ultimately work within the realities of Indian farms, farmers,
        breeds, production systems, economics, and animal health.
      </p>

      <p className="page-text">
        Rather than treating cattle as sequencing samples, Leads Genetics views
        each animal as part of a larger production system — with a genome,
        phenotype, pedigree, health history, reproductive history, environment,
        and economic value.
      </p>
    </div>
  </div>
);

const StackCard = ({ card, index, progress }) => {
  // Mission stays in place and gently recedes.
  // Vision slides in over it during the first 80% of the scroll.
  const y = useTransform(
    progress,
    [0, 0.8],
    index === 0 ? ["0%", "0%"] : ["110%", "0%"]
  );

  const opacity = useTransform(
    progress,
    [0, 0.12],
    index === 0 ? [1, 1] : [0, 1]
  );

  const scale = useTransform(
    progress,
    [0, 0.8],
    index === 0 ? [1, 0.96] : [1, 1]
  );

  return (
    <motion.article
      className={`foundation-card foundation-card--${card.theme}`}
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
      }}
    >
      <header className="foundation-card-header">
        <span className="foundation-card-label">
          <span className="foundation-card-dot" />
          {card.label}
        </span>

        <span className="foundation-card-index">{card.index}</span>
      </header>

      <div className="foundation-card-content">
        <h3 className="foundation-card-title">{card.title}</h3>

        <p className="page-text foundation-card-description">{card.text}</p>

        {card.stats && (
          <div className="foundation-stats">
            {card.stats.map((stat) => (
              <div className="foundation-stat" key={stat.label}>
                <strong className="foundation-stat-value">{stat.value}</strong>

                <span className="foundation-stat-label">{stat.label}</span>

                <p className="foundation-stat-detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

const Mission = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooths out wheel / trackpad jumps
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <section className="foundation-section" ref={sectionRef}>
      <div className="foundation-pin">
        <div className="foundation-layout">
          <div className="foundation-left">
            <Foundation />
          </div>

          <div className="foundation-right">
            {cards.map((card, index) => (
              <StackCard
                key={card.index}
                card={card}
                index={index}
                progress={progress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;