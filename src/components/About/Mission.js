import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Mission.css";

const MOBILE_QUERY = "(max-width: 768px), (max-height: 520px)";
const AUTOPLAY_MS = 4200;
const RESUME_AFTER_TOUCH_MS = 7000;

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

/* ---------- hooks ---------- */
const useMediaQuery = (query) => {
  const get = () =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia(query).matches
      : false;

  const [matches, setMatches] = useState(get);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener
      ? mql.addEventListener("change", onChange)
      : mql.addListener(onChange);
    return () => {
      mql.removeEventListener
        ? mql.removeEventListener("change", onChange)
        : mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
};

/* ---------- left column ---------- */
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

/* ---------- shared card inner ---------- */
const CardInner = ({ card }) => (
  <>
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
  </>
);

/* ---------- desktop: scroll-driven stack ---------- */
const StackCard = ({ card, index, progress }) => {
  // Vision finishes sliding in at 90% so there is no idle scroll at the end
  const y = useTransform(
    progress,
    [0, 0.9],
    index === 0 ? ["0%", "0%"] : ["110%", "0%"]
  );
  const opacity = useTransform(
    progress,
    [0, 0.1],
    index === 0 ? [1, 1] : [0, 1]
  );
  const scale = useTransform(
    progress,
    [0, 0.9],
    index === 0 ? [1, 0.96] : [1, 1]
  );

  return (
    <motion.article
      className={`foundation-card foundation-card--${card.theme}`}
      style={{ y, scale, opacity, zIndex: index + 1 }}
    >
      <CardInner card={card} />
    </motion.article>
  );
};

const DesktopStack = ({ progress }) => (
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
);

/* ---------- mobile: swipe + auto ping-pong carousel ---------- */
const MobileCarousel = () => {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const activeRef = useRef(0);
  const dirRef = useRef(1);
  const pausedUntilRef = useRef(0);
  const visibleRef = useRef(true);
  const [active, setActive] = useState(0);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const getTargets = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];
    const max = track.scrollWidth - track.clientWidth;
    return Array.from(track.children).map((el) =>
      Math.max(0, Math.min(el.offsetLeft, max))
    );
  }, []);

  const goTo = useCallback(
    (i, smooth = true) => {
      const track = trackRef.current;
      const targets = getTargets();
      if (!track || targets[i] === undefined) return;
      track.scrollTo({
        left: targets[i],
        behavior: smooth && !reduceMotion ? "smooth" : "auto",
      });
    },
    [getTargets, reduceMotion]
  );

  const pause = useCallback(() => {
    pausedUntilRef.current = Date.now() + RESUME_AFTER_TOUCH_MS;
  }, []);

  // Track which card is nearest (drives dots + autoplay position)
  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const targets = getTargets();
    let nearest = 0;
    let best = Infinity;
    targets.forEach((t, i) => {
      const d = Math.abs(t - track.scrollLeft);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    if (nearest !== activeRef.current) {
      activeRef.current = nearest;
      setActive(nearest);
    }
  }, [getTargets]);

  // Only autoplay while section is on screen
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Auto-slide right, then return left (ping-pong)
  useEffect(() => {
    if (reduceMotion || cards.length < 2) return;

    const id = setInterval(() => {
      if (!visibleRef.current || Date.now() < pausedUntilRef.current) return;

      let next = activeRef.current + dirRef.current;
      if (next >= cards.length || next < 0) {
        dirRef.current *= -1;
        next = activeRef.current + dirRef.current;
      }
      goTo(next);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [goTo, reduceMotion]);

  // Keep position correct on resize / rotate
  useEffect(() => {
    const onResize = () => goTo(activeRef.current, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [goTo]);

  return (
    <div className="foundation-carousel" ref={wrapRef}>
      <div
        className="foundation-track"
        ref={trackRef}
        onScroll={onScroll}
        onTouchStart={pause}
        onPointerDown={pause}
        onWheel={pause}
        role="region"
        aria-roledescription="carousel"
        aria-label="Mission and vision"
        tabIndex={0}
      >
        {cards.map((card) => (
          <article
            key={card.index}
            className={`foundation-card foundation-card--${card.theme}`}
          >
            <CardInner card={card} />
          </article>
        ))}
      </div>

      <div className="foundation-dots" role="tablist" aria-label="Choose card">
        {cards.map((card, i) => (
          <button
            key={card.index}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={`Show ${card.label.toLowerCase()}`}
            className={`foundation-dot${active === i ? " is-active" : ""}`}
            onClick={() => {
              pause();
              dirRef.current = i === 0 ? 1 : -1;
              goTo(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

/* ---------- section ---------- */
const Mission = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery(MOBILE_QUERY);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Smooths out wheel / trackpad jumps
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
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

          <div className="foundation-right-wrap">
            {isMobile ? <MobileCarousel /> : <DesktopStack progress={progress} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;