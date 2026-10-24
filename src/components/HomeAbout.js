import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FlaskConical,
  Microscope,
  Globe2,
  Award,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HomeAbout.css";

// Images
import aboutImg1 from "../assets/h-about1.png";
import aboutImg2 from "../assets/h-about2.png";

/* =========================================
   SLIDES (full images, shown one after another)
========================================= */

const SLIDES = [
  { src: aboutImg1, alt: "Leads Genetics laboratory" },
  { src: aboutImg2, alt: "Leads Genetics research" },
];

const SLIDE_DELAY = 4000; // ms between images

/* =========================================
   STATS
========================================= */

const STATS = [
  { icon: <FlaskConical size={16} />, value: 20, suffix: "+", label: "Research Projects" },
  { icon: <Microscope size={16} />, value: 1000, suffix: "+", label: "Samples Analysed" },
  { icon: <Globe2 size={16} />, value: 6, suffix: "+", label: "Global Collaborations" },
  { icon: <Award size={16} />, value: 15, suffix: "+", label: "Years of Expertise" },
];

/* =========================================
   ANIMATED COUNTER
========================================= */

function AnimatedCounter({ value, prefix = "", suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* =========================================
   HOME ABOUT
========================================= */

const HomeAbout = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  // change image automatically; restarts the timer when a dot is clicked
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, SLIDE_DELAY);

    return () => clearTimeout(timer);
  }, [active]);

  return (
    <section className="h-about-section">
      <Container fluid className="h-about-container">
        <Row className="align-items-center g-5">
          {/* ============ LEFT: FULL IMAGE SLIDER ============ */}
          <Col xl={6} lg={6} md={12}>
            <div className="h-about-slider">
              <div className="h-about-slides">
                {SLIDES.map((slide, index) => (
                  <img
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className={`h-about-slide ${index === active ? "active" : ""}`}
                  />
                ))}
              </div>

              <div className="h-about-dots">
                {SLIDES.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    className={`h-about-dot ${index === active ? "active" : ""}`}
                    onClick={() => setActive(index)}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Col>

          {/* ============ RIGHT: CONTENT ============ */}
          <Col xl={6} lg={6} md={12}>
            <div className="h-about-content">
              <p className="h-about-eyebrow">About Leads Genetics</p>

              <h2 className="h-about-title section-heading">
                Advancing Genomics
                <span className="h-about-title-accent section-heading">
                  Empowering Agriculture
                  <br />
                  Transforming Healthcare
                </span>
              </h2>

              <p className="h-about-text page-text">
                The story of Leads Genetics begins with a strong foundation built in genomics, 
                molecular diagnostics, and life-science research. For nearly a decade, the organization operated through its earlier identity, 
                GenePrint Labs , developing expertise in genetic testing,
                 next-generation sequencing, molecular diagnostics, and bioinformatics.
              </p>

              <p className="h-about-text page-text">
                A new chapter began as the business became part of the Leads / BL Agro ecosystem, bringing together established genomics capabilities with the scale, agricultural reach, and long-term vision of the BL Agro Group. This transition gave rise to Leads Genetics - 
                a genomics-focused organization designed to connect laboratory 
                science with real-world biological and agricultural outcomes.
              </p>

              <div className="h-about-stats-row">
                {STATS.map((item) => (
                  <div className="h-about-stat" key={item.label}>
                    <span className="h-about-stat-icon">{item.icon}</span>
                    <div>
                      <div className="h-about-stat-value">
                        <AnimatedCounter value={item.value} suffix={item.suffix} />
                      </div>
                      <div className="h-about-stat-label">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="h-about-btn"
                onClick={() => navigate("/about")}
              >
                <span>Know More About Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeAbout;