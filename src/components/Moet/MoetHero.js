import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MoetHero.css";

import vacImage from "../../assets/vac1.jpeg";
import cowImage from "../../assets/Breed/gir-cow.jpg";
import ooctyleImage from "../../assets/Breed/ooctyle.png";
import embryoImage from "../../assets/embroy1.jpeg";

gsap.registerPlugin(ScrollTrigger);

// Background lines (SVG paths sweeping up and to the right)
const lines = [
  { d: "M -80 760 C 220 700, 420 900, 760 640 S 1180 300, 1520 120", width: 3.2, opacity: 0.85 },
  { d: "M -80 820 C 260 740, 480 930, 820 700 S 1240 380, 1520 210", width: 2.4, opacity: 0.7 },
  { d: "M -80 690 C 180 640, 400 800, 700 560 S 1120 230, 1520 40", width: 1.6, opacity: 0.6 },
  { d: "M -80 880 C 300 820, 560 940, 900 760 S 1300 470, 1520 330", width: 3.9, opacity: 0.75 },
  { d: "M -80 600 C 160 560, 380 700, 640 480 S 1060 160, 1520 -20", width: 1.2, opacity: 0.55 },
  { d: "M 120 920 C 400 860, 640 940, 980 780 S 1340 560, 1520 450", width: 2.0, opacity: 0.8 },
  { d: "M -80 520 C 200 470, 360 600, 600 400 S 980 90, 1400 -40", width: 2.8, opacity: 0.65 },
  { d: "M -80 740 C 340 640, 520 860, 880 600 S 1260 330, 1520 160", width: 1.4, opacity: 0.7 },
  { d: "M 300 940 C 560 880, 780 930, 1080 800 S 1380 640, 1520 580", width: 3.0, opacity: 0.6 },
  { d: "M -80 450 C 140 420, 330 520, 540 340 S 900 40, 1260 -60", width: 1.8, opacity: 0.75 },
  { d: "M -80 840 C 200 820, 420 880, 700 700 S 1160 420, 1520 270", width: 1.2, opacity: 0.55 },
  { d: "M 60 900 C 340 800, 600 900, 940 690 S 1300 400, 1520 300", width: 2.2, opacity: 0.85 },
  { d: "M -80 660 C 260 560, 460 780, 780 520 S 1200 200, 1520 80", width: 1.2, opacity: 0.6 },
  { d: "M 500 960 C 720 900, 920 900, 1160 820 S 1420 700, 1520 660", width: 2.6, opacity: 0.7 },
  { d: "M -80 380 C 120 350, 300 450, 500 290 S 840 0, 1160 -80", width: 3.5, opacity: 0.6 },
];

const cornerRadius = 28;

// Pill size (share of the hero) for each image after vac1.

// Large screens (992px and up)
const largeSizes = {
  cow: { width: 0.5, height: 0.5 },
  ooctyle: { width: 0.62, height: 0.62 },
  embryo: { width: 0.75, height: 0.75 },
};

// Medium screens (721px to 991px): a little wider, because the screen is narrower
const mediumSizes = {
  cow: { width: 0.6, height: 0.5 },
  ooctyle: { width: 0.72, height: 0.62 },
  embryo: { width: 0.85, height: 0.75 },
};

// Small screens (720px and below): width stays full, only the height grows
const smallSizes = {
  cow: { height: 0.5 },
  ooctyle: { height: 0.62 },
  embryo: { height: 0.75 },
};

const MoetHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroRef = useRef(null);
  const stripRef = useRef(null);
  const rowRef = useRef(null);
  const pillRef = useRef(null);
  const slideOneRef = useRef(null);
  const slideTwoRef = useRef(null);
  const slideThreeRef = useRef(null);
  const footerRef = useRef(null);
  const dotsRef = useRef(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;
    const strip = stripRef.current;
    const row = rowRef.current;
    const pill = pillRef.current;
    const slideOne = slideOneRef.current;
    const slideTwo = slideTwoRef.current;
    const slideThree = slideThreeRef.current;
    const footer = footerRef.current;
    const dots = dotsRef.current;
    const words = row.querySelectorAll(".moet-hero__word");
    const moWord = words[0];
    const etWord = words[1];

    // Center the row (done here so it does not clash with the animations)
    gsap.set(row, { xPercent: -50, yPercent: -50 });

    // The font size of the hero is the unit (1em) for the word and the pill
    const getFontSize = () => parseFloat(window.getComputedStyle(hero).fontSize);

    const mm = gsap.matchMedia();

    mm.add(
      {
        isLarge: "(min-width: 992px)",
        isMedium: "(min-width: 721px) and (max-width: 991px)",
        isSmall: "(max-width: 720px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { isLarge, isSmall, reduceMotion } = context.conditions;

        // Pick the sizes for the current screen
        let sizes = mediumSizes;

        if (isLarge) {
          sizes = largeSizes;
        } else if (isSmall) {
          sizes = smallSizes;
        }

        // Size of the pill when MOET has just opened (vac1 image)
        const getOpenWidth = () => getFontSize() * 3.62;
        const getOpenHeight = () => {
          if (isSmall) {
            return (hero.offsetWidth - 40) / 1.85;
          }

          return getFontSize() * 1.81;
        };

        // Gap between MO / pill / ET when MOET has opened
        const getOpenGap = () => {
          if (isSmall) {
            return getFontSize() * 0.1;
          }

          return getFontSize() * 0.085;
        };

        // On small screens only the row gap is animated (the column gap stays 0)
        const gapName = isSmall ? "rowGap" : "gap";

        // Small screens: MO moves to the centre, ET goes down below the pill
        const getMoX = () => etWord.offsetWidth / 2;
        const getEtX = () => -moWord.offsetWidth / 2;
        const getEtY = () => etWord.offsetHeight + getOpenGap() * 2 + getOpenHeight();
        const getRowY = () => -(etWord.offsetHeight + getOpenGap()) / 2;

        // Reduced motion: no scroll animation, just show the opened pill with the vac1 image
        if (reduceMotion) {
          if (isSmall) {
            gsap.set(pill, { height: getOpenHeight() });
            gsap.set(row, { rowGap: getOpenGap(), y: getRowY() });
            gsap.set(moWord, { x: getMoX() });
            gsap.set(etWord, { x: getEtX(), y: getEtY() });
          } else {
            gsap.set(pill, { width: getOpenWidth() });
            gsap.set(row, { gap: getOpenGap() });
          }

          return undefined;
        }

        const timeline = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // Stop at each of the 4 scrolls
            snap: {
              snapTo: [0, 0.25, 0.5, 0.75, 1],
              duration: { min: 0.2, max: 0.6 },
              delay: 0.1,
              ease: "power1.inOut",
            },
            onUpdate: (self) => {
              const step = self.progress * 4;

              if (step < 2) {
                setActiveSlide(0);
              } else if (step < 3) {
                setActiveSlide(1);
              } else {
                setActiveSlide(2);
              }
            },
          },
        });

        // Grows the pill to a bigger size (used for scroll 3 and scroll 4)
        const growPill = (size, position) => {
          if (isSmall) {
            timeline.to(
              pill,
              { height: () => hero.offsetHeight * size.height, duration: 1 },
              position
            );
          } else {
            timeline.to(
              pill,
              {
                width: () => hero.offsetWidth * size.width,
                height: () => hero.offsetHeight * size.height,
                duration: 1,
              },
              position
            );
          }
        };

        // SCROLL 1 (0 to 1): green strip leaves, MOET opens, vac1 image is inside the pill
        timeline.to(strip, { yPercent: -120, duration: 1 }, 0);
        timeline.to(row, { [gapName]: getOpenGap, duration: 1 }, 0);

        if (isSmall) {
          timeline.to(pill, { height: getOpenHeight, duration: 1 }, 0);

          // MOET is on one line, now ET goes down below the pill
          timeline.to(row, { y: getRowY, duration: 1 }, 0);
          timeline.to(moWord, { x: getMoX, duration: 1 }, 0);
          timeline.to(etWord, { x: getEtX, y: getEtY, duration: 1 }, 0);
        } else {
          timeline.to(pill, { width: getOpenWidth, duration: 1 }, 0);
        }

        // SCROLL 2 (1 to 2): pill grows bigger than vac1, gir cow image comes in
        if (isSmall) {
          timeline.fromTo(
            pill,
            {
              height: getOpenHeight,
              borderRadius: () => getOpenHeight() / 2,
            },
            {
              height: () => hero.offsetHeight * sizes.cow.height,
              borderRadius: cornerRadius,
              duration: 1,
              immediateRender: false,
            },
            1
          );
        } else {
          timeline.fromTo(
            pill,
            {
              width: getOpenWidth,
              height: getOpenHeight,
              borderRadius: () => getOpenHeight() / 2,
            },
            {
              width: () => hero.offsetWidth * sizes.cow.width,
              height: () => hero.offsetHeight * sizes.cow.height,
              borderRadius: cornerRadius,
              duration: 1,
              immediateRender: false,
            },
            1
          );
        }

        timeline.fromTo(
          slideOne,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
          1
        );

        // MO and ET fade out, footer leaves, dots appear
        timeline.to(words, { opacity: 0, duration: 0.6, ease: "power1.out" }, 1);
        timeline.to(footer, { opacity: 0, y: 40, duration: 0.6, ease: "power1.out" }, 1);
        timeline.to(dots, { opacity: 1, duration: 0.4 }, 1.6);

        // SCROLL 3 (2 to 3): pill grows bigger than gir, ooctyle image comes in
        growPill(sizes.ooctyle, 2);

        timeline.fromTo(
          slideTwo,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
          2
        );

        // SCROLL 4 (3 to 4): pill grows bigger than ooctyle, embryo image comes in
        growPill(sizes.embryo, 3);

        timeline.fromTo(
          slideThree,
          { clipPath: "inset(100% 0% 0% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1 },
          3
        );

        return undefined;
      }
    );

    // Re-measure once the font is loaded
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        ScrollTrigger.refresh();
      });
    }

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className="moet-hero" id="moet-hero" ref={heroRef}>
      <h1 className="moet-hero__sr-only">
        Multiple Ovulation &amp; Embryo Transfer (MOET)
      </h1>

      {/* Paper background with flowing white lines */}
      <div className="moet-hero__paper" aria-hidden="true">
        <svg
          className="moet-hero__lines"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          {lines.map((line, index) => (
            <path
              key={index}
              d={line.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={line.width}
              strokeOpacity={line.opacity}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>

      {/* Green strip behind the navbar */}
      <div className="moet-hero__strip" ref={stripRef} aria-hidden="true" />

      {/* MO | pill | ET */}
      <div className="moet-hero__row" ref={rowRef}>
        <span className="moet-hero__word" aria-hidden="true">MO</span>

        <div className="moet-hero__pill" ref={pillRef}>
          {/* Scroll 1: vac1 image, shown as soon as MOET opens */}
          <img
            src={vacImage}
            alt=""
            className="moet-hero__image moet-hero__image--base"
          />

          {/* Scroll 2: cow, label bottom left */}
          <div
            className="moet-hero__slide moet-hero__slide--first"
            ref={slideOneRef}
          >
            <img src={cowImage} alt="Elite donor cow" className="moet-hero__image" />
            <span className="moet-hero__label moet-hero__label--left">Elite Donor</span>
          </div>

          {/* Scroll 3: oocytes, label bottom right */}
          <div
            className="moet-hero__slide moet-hero__slide--second"
            ref={slideTwoRef}
          >
            <img src={ooctyleImage} alt="Embryo culture" className="moet-hero__image" />
            <span className="moet-hero__label moet-hero__label--right">Embryo Culture</span>
          </div>

          {/* Scroll 4: embryo, label bottom left */}
          <div
            className="moet-hero__slide moet-hero__slide--third"
            ref={slideThreeRef}
          >
            <img src={embryoImage} alt="Embryo flushing" className="moet-hero__image" />
            <span className="moet-hero__label moet-hero__label--left">Embryo Flushing</span>
          </div>
        </div>

        <span className="moet-hero__word" aria-hidden="true">ET</span>
      </div>

      {/* Progress dots */}
      <div className="moet-hero__dots" ref={dotsRef} aria-hidden="true">
        <span
          className={
            activeSlide === 0
              ? "moet-hero__dot moet-hero__dot--active"
              : "moet-hero__dot"
          }
        />
        <span
          className={
            activeSlide === 1
              ? "moet-hero__dot moet-hero__dot--active"
              : "moet-hero__dot"
          }
        />
        <span
          className={
            activeSlide === 2
              ? "moet-hero__dot moet-hero__dot--active"
              : "moet-hero__dot"
          }
        />
      </div>

      {/* Footer */}
      <div className="moet-hero__footer" ref={footerRef}>
        <div className="moet-hero__text">
          <span className="moet-hero__eyebrow">Multiple Ovulation &amp; Embryo Transfer</span>
          <p className="moet-hero__paragraph">
            Embark on a journey of faster genetic progress. MOET produces multiple
            naturally developed embryos from elite donor cows, so superior genetics
            reach your herd in a fraction of the time.
          </p>
        </div>

        <span className="moet-hero__rule" />

        <a href="#moet-overview" className="moet-hero__button">
          Discover MOET
        </a>
      </div>
    </section>
  );
};

export default MoetHero;