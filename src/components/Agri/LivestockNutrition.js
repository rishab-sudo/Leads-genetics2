import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { FiCheckCircle, FiSliders, FiClock } from "react-icons/fi";
import "./LivestockNutrition.css";

import greenFodderImg from "../../assets/Breed/Green.jpg";
import dryFodderImg from "../../assets/Breed/Dry.jpg";
import concentrateImg from "../../assets/Breed/Concentrated.jpg";

const AUTOPLAY_MS = 3000;
const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const nutritionData = [
  {
    id: "01",
    title: "Green Fodder",
    subtitle: "Succulent Forage & Essential Carotene",
    ingredients: "Maize, Jowar",
    image: greenFodderImg,
    description:
      "Freshly cultivated succulent green forage comprising Maize and Jowar. Supplies essential cellular moisture, high palatability, natural carotenoids (Vitamin A precursors), and digestible fiber to support rumen microbial fermentation.",
    benefits: [
      "Maize & Jowar Crops",
      "Moisture Balance & Hydration",
      "Digestible Structural Fiber",
      "Natural Carotene & Vitamins",
    ],
  },
  {
    id: "02",
    title: "Dry Fodder",
    subtitle: "Physical Fiber & Rumen pH Buffering",
    ingredients: "Wheat Pusa",
    image: dryFodderImg,
    description:
      "High-grade cured Wheat Pusa (Bhoosa) providing physically effective neutral detergent fiber (peNDF). Essential for stimulating rumination, cud-chewing, and natural saliva secretion to maintain optimal rumen pH balance and prevent acidosis.",
    benefits: [
      "Wheat Pusa (Bhoosa)",
      "Rumen pH Buffer & Chewing",
      "Effective Structural Fiber",
      "Year-Round Feed Consistency",
    ],
  },
  {
    id: "03",
    title: "Concentrates & Feed Ingredients",
    subtitle: "Dense Energy, Bypass Protein & Mineral Matrix",
    ingredients: "Soya Doc, Maize, Wheat Bran & Rice Bran",
    image: concentrateImg,
    description:
      "Scientifically compounded concentrates combining Soya Doc (De-Oiled Cake) for high-quality rumen bypass protein, cracked Maize for glucogenic starch energy, along with wheat bran and rice bran for balanced phosphorus, digestible fiber, and trace minerals.",
    benefits: [
      "Soya Doc (High Bypass Protein)",
      "Maize (Glucogenic Energy)",
      "Wheat Bran & Rice Bran",
      "Customized Production Support",
    ],
  },
];

const LivestockNutrition = () => {
  const stageRef = useRef(null);
  const trackRef = useRef(null);

  const [active, setActive] = useState(0);
  const [isCarousel, setIsCarousel] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  /* Track viewport mode (mobile carousel vs desktop scroll stack) and motion preference */
  useEffect(() => {
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);

    const sync = () => {
      setIsCarousel(mobileQuery.matches);
      setReducedMotion(motionQuery.matches);
    };

    sync();
    mobileQuery.addEventListener("change", sync);
    motionQuery.addEventListener("change", sync);

    return () => {
      mobileQuery.removeEventListener("change", sync);
      motionQuery.removeEventListener("change", sync);
    };
  }, []);

  /* Carousel: which slide is centred (IntersectionObserver, no scroll listeners) */
  useEffect(() => {
    if (!isCarousel || !trackRef.current) return undefined;

    const track = trackRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { root: track, threshold: 0.6 }
    );

    Array.from(track.children).forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [isCarousel]);

  /* Carousel: only autoplay while the section is on screen */
  useEffect(() => {
    if (!isCarousel || !stageRef.current) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    observer.observe(stageRef.current);
    return () => observer.disconnect();
  }, [isCarousel]);

  const goTo = useCallback(
    (index) => {
      const track = trackRef.current;
      const slide = track?.children[index];
      if (!slide) return;

      track.scrollTo({
        left: slide.offsetLeft,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    },
    [reducedMotion]
  );

  /* Carousel: advance one card every 3 seconds, left to right, then loop */
  useEffect(() => {
    if (!isCarousel || !inView || paused || reducedMotion) return undefined;

    const timer = setTimeout(() => {
      goTo((active + 1) % nutritionData.length);
    }, AUTOPLAY_MS);

    return () => clearTimeout(timer);
  }, [active, isCarousel, inView, paused, reducedMotion, goTo]);

  return (
    <section className="ln-section">
      <Container>
        {/* Section Header */}
        <div className="ln-header">
          <span className="ln-eyebrow">ZONE 3: FODDER & LIVESTOCK NUTRITION</span>

          <h2 className="ln-title section-heading">
            Scientific Rationing & Nutritional Management
          </h2>

          <p className="ln-description">
            Consistent nutrition is an important component of livestock health,
            body condition, growth, milk production, and reproductive success.
            Our feeding framework is anchored on three core categories: Green
            Fodder (Maize, Jowar), Dry Fodder (Wheat Pusa), and Concentrates
            (Soya Doc, Maize, wheat and rice bran), scientifically blended for
            optimal metabolic performance across all 758 cattle.
          </p>
        </div>

        {/* Feed categories: stacking scroll on desktop, auto carousel on mobile */}
        <div
          className="ln-stage"
          ref={stageRef}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          onTouchCancel={() => setPaused(false)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ul
            className="ln-stack"
            ref={trackRef}
            aria-label="Feed categories"
          >
            {nutritionData.map((item, index) => (
              <li
                className="ln-slide"
                key={item.id}
                data-index={index}
                style={{ "--i": index }}
              >
                <article className="ln-card">
                  <header className="ln-card-bar">
                    <span className="ln-card-num">{item.id}</span>
                    <h3 className="ln-card-title">{item.title}</h3>
                    <span className="ln-card-tag">Feed Category {item.id}</span>
                  </header>

                  <div className="ln-card-body">
                    <div className="ln-card-media">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="ln-card-image"
                        loading="lazy"
                      />
                    </div>

                    <div className="ln-card-content">
                      <p className="ln-card-subtitle">{item.subtitle}</p>

                      <p className="ln-ingredients">
                        <strong>Ingredients:</strong> {item.ingredients}
                      </p>

                      <p className="ln-card-text">{item.description}</p>

                      <ul className="ln-benefits">
                        {item.benefits.map((benefit) => (
                          <li key={benefit}>
                            <FiCheckCircle aria-hidden="true" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {/* Carousel position (mobile only) */}
          <div className="ln-dots" role="group" aria-label="Choose feed category">
            {nutritionData.map((item, index) => (
              <button
                type="button"
                key={item.id}
                className={`ln-dot ${active === index ? "ln-dot-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Show ${item.title}`}
                aria-current={active === index}
              >
                <span />
              </button>
            ))}
          </div>
        </div>

        {/* Feed Preparation and Nutritional Management */}
        <div className="ln-prep">
          <div className="ln-prep-header">
            <span className="ln-eyebrow">
              FEED PREPARATION & NUTRITIONAL PROTOCOLS
            </span>
            <h3 className="ln-prep-title section-heading">
              Feed Preparation & Management Protocol
            </h3>
            <p className="ln-prep-description">
              Ration formulation is customized according to individual animal body
              weight, physiological status, lactation stage, and growth targets
              across all 10 sheds.
            </p>
          </div>

          <div className="ln-prep-grid">
            <div className="ln-prep-col">
              <div className="ln-prep-icon">
                <FiSliders aria-hidden="true" />
              </div>
              <span className="ln-prep-tag">SCIENTIFIC DMI FORMULATION</span>
              <p className="ln-prep-heading">
                Dry Matter Intake (DMI): 2.5% – 3% of Body Weight
              </p>
              <p className="ln-prep-text">
                Feed ingredients are mixed strictly on the basis of Dry Matter
                Intake (DMI) calculated at{" "}
                <strong>2.5 – 3 percent of total body weight</strong>.
                Formulations are dynamically balanced based on:
              </p>
              <ul className="ln-checklist">
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>
                    <strong>Milk Production Yield:</strong> Calibrated for peak
                    lactation and high milk fat.
                  </span>
                </li>
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>
                    <strong>Pregnancy Trimesters:</strong> Specialized gestation
                    rationing for 1st & 2nd trimester cows (Vishnu) and transition
                    rations for advanced pregnant cows (Maa).
                  </span>
                </li>
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>
                    <strong>Growing Calves & Heifers:</strong> Nutrient-dense
                    growth rations for IVF calves (Calf Shed) and heifers ready
                    for embryo transfer (Khushi & Shubhadra).
                  </span>
                </li>
              </ul>
            </div>

            <div className="ln-prep-col">
              <div className="ln-prep-icon">
                <FiClock aria-hidden="true" />
              </div>
              <span className="ln-prep-tag">TMR EQUIPMENT & SCHEDULE</span>
              <p className="ln-prep-heading">
                Total Mixed Ration (TMR) & Twice-Daily Supply
              </p>
              <p className="ln-prep-text">
                To optimize digestive efficiency, maintain uniform rumen
                fermentation, and prevent selective sorting by cattle:
              </p>
              <ul className="ln-checklist">
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>
                    <strong>Total Mixed Ration Equipment:</strong> Green fodder
                    (Maize, Jowar), dry fodder (Wheat Pusa), and concentrates
                    (Soya Doc, Maize, wheat and rice bran) are thoroughly blended
                    into a homogenous mix.
                  </span>
                </li>
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>
                    <strong>Twice-Daily Manger Supply:</strong> Freshly prepared
                    TMR is supplied{" "}
                    <strong>twice daily at the manger in each shed</strong>,
                    ensuring consistent dry matter consumption and zero feed
                    waste.
                  </span>
                </li>
                <li>
                  <FiCheckCircle aria-hidden="true" />
                  <span>
                    <strong>Hydration & Health Monitoring:</strong> 24/7
                    ad-libitum clean drinking water and scheduled Body Condition
                    Score (BCS) evaluations across all 758 animals.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LivestockNutrition;