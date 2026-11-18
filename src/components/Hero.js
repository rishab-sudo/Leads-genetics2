import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Leaf, FlaskConical } from "lucide-react";
import "./Hero.css";

const slides = [
  {
    heading: "From Sequence to Solution",
    description:
      "India’s integrated genomics company combining advanced multi-omics laboratories, livestock genomics to transform genomic data into real-world impact.",
  },
  {
    heading: "One Genome<br />Multiple Possibilities",
    description:
      "From agriculture and livestock to research and clinical genomics, we bring sequencing, multi-omics, and scientific expertise together to deliver solutions that advance health, strengthen food systems, and accelerate discovery.",
  },
  {
    heading: "From Farm to Research",
    description:
      "Building India’s integrated genomics ecosystem across cattle and livestock, scientific research, and clinical genomics, connecting advanced sequencing and multi-omics with solutions designed for a healthier, smarter future.",
  },
];

const cards = [
  {
    title: "LiveStock",
    icon: <Leaf size={26} />,
    link: "/agri-genomics",
    color: "green",
  },
  {
    title: "Genomics",
    icon: <FlaskConical size={26} />,
    link: "/research-genomics",
    color: "blue",
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  /* HERO TEXT AUTO SLIDER */
  useEffect(() => {
    let swapTimeout;

    const interval = setInterval(() => {
      setAnimate(false);

      swapTimeout = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 600);
    }, 6500);

    return () => {
      clearInterval(interval);
      clearTimeout(swapTimeout);
    };
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="hero-video"
      >
        <source
          src={require("../assets/lead-video222.mp4")}
          type="video/mp4"
        />
      </video>

      {/* OVERLAY */}
      <div className="hero-overlay"></div>

      {/* CONTENT */}
      <div className="hero-container">
        {/* HERO TEXT */}
        <div className={`hero-text ${animate ? "show" : "hide"}`}>
          <h1
            className="hero-heading"
            dangerouslySetInnerHTML={{ __html: currentSlide.heading }}
          />

          <p className="hero-description">{currentSlide.description}</p>
        </div>

        {/* GENOMICS CARDS */}
        <div className="hero-cards">
          {cards.map((card) => (
            <Link
              key={card.link}
              to={card.link}
              className={`hero-card ${card.color}`}
            >
              <div className="hero-card-content">
                <div className={`hero-icon ${card.color}`}>{card.icon}</div>

                <div className="hero-card-text">
                  <h3>{card.title}</h3>
                  <span>Explore Services →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;