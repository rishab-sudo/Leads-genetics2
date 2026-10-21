import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "swiper/css";
import "./LivestockCare.css";

const cattleBreeds = [
  {
    id: "01",
    name: "Gir",
    label: "Gir Phenotype",
    origin: "Gujarat, India",
    image: "/images/breeds/gir.jpg",
    description:
      "High heat tolerance and resilience with a distinct convex forehead and long pendulous ears. Renowned for rich milk fat composition.",
    nutrition: "High Roughage / Moderate Concentrates",
    reproductive: "Excellent Oocyte Yield for IVF",
    record: "LG-BRD-01",
  },
  {
    id: "02",
    name: "Sahiwal",
    label: "Sahiwal Lineage",
    origin: "Punjab, India",
    image: "/images/breeds/sahiwal.jpg",
    description:
      "Known for a docile temperament, reddish coat, heat tolerance and adaptability to warm climates.",
    nutrition: "Balanced Energy Dense Ration",
    reproductive: "Embryo Transfer Monitoring",
    record: "LG-BRD-02",
  },
  {
    id: "03",
    name: "Red Sindhi",
    label: "Red Sindhi",
    origin: "Sindh Region",
    image: "/images/breeds/red-sindhi.jpg",
    description:
      "Recognized for deep-red coloration and adaptability to hot climates, supporting structured dairy management.",
    nutrition: "High Forage Digestibility",
    reproductive: "Estrus Cycle Monitoring",
    record: "LG-BRD-03",
  },
  {
    id: "04",
    name: "Tharparkar",
    label: "Tharparkar",
    origin: "Thar Desert",
    image: "/images/breeds/tharparkar.jpg",
    description:
      "A hardy indigenous breed valued for its adaptability to arid conditions and limited-resource environments.",
    nutrition: "Balanced Forage and Energy Intake",
    reproductive: "Individual Breeding Records",
    record: "LG-BRD-04",
  },
  {
    id: "05",
    name: "Kankrej",
    label: "Kankrej Lineage",
    origin: "Gujarat, India",
    image: "/images/breeds/kankrej.jpg",
    description:
      "A robust indigenous breed valued for strength, adaptability and suitability for organized herd management.",
    nutrition: "Forage-Based Balanced Nutrition",
    reproductive: "Structured Breeding Management",
    record: "LG-BRD-05",
  },
  {
    id: "06",
    name: "Holstein Friesian",
    label: "HF Lineage",
    origin: "Europe",
    image: "/images/breeds/holstein-friesian.jpg",
    description:
      "A recognizable black-and-white dairy breed requiring balanced nutrition, thermal comfort and consistent herd monitoring.",
    nutrition: "Balanced Dairy Ration",
    reproductive: "Routine Fertility Monitoring",
    record: "LG-BRD-06",
  },
];

const LivestockCare = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="livestock-care-section">
      <Container>
        {/* Section Header */}
        <div className="livestock-care-header">
          <div className="livestock-care-intro">
            <span className="livestock-care-eyebrow">
              ZONE 2: LIVESTOCK CARE
            </span>

            <h2 className="livestock-care-title section-heading ">
              Cattle Diversity, Individualized Animal Management.
            </h2>

            <p className="livestock-care-description">
              Different cattle breeds may have different nutritional
              requirements, physiological characteristics and reproductive
              management needs. Leads Genetics' livestock programme
              encompasses six cattle breeds, providing the foundation for
              breed-aware animal care and recordkeeping.
            </p>
          </div>

          <div className="livestock-care-navigation">
            <button
              type="button"
              className="livestock-care-nav-btn"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous breed"
            >
              <FiChevronLeft />
            </button>

            <button
              type="button"
              className="livestock-care-nav-btn"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next breed"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Responsive Slider */}
        <Swiper
          className="livestock-care-slider"
          modules={[A11y]}
          onSwiper={setSwiperInstance}
          slidesPerView={1}
          spaceBetween={16}
          speed={500}
          watchOverflow
          grabCursor
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 18,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {cattleBreeds.map((breed) => (
            <SwiperSlide key={breed.id}>
              <article className="livestock-breed-card">
                <div className="livestock-breed-image-wrap">
                  <img
                    src={breed.image}
                    alt={`${breed.name} cattle breed`}
                    className="livestock-breed-image"
                    loading="lazy"
                  />

                  <span className="livestock-breed-origin">
                    Origin: {breed.origin}
                  </span>
                </div>

                <div className="livestock-breed-content">
                  <div className="livestock-breed-title-row">
                    <h3 className="livestock-breed-title">
                      Breed {breed.id}
                    </h3>

                    <span className="livestock-breed-label">
                      {breed.label}
                    </span>
                  </div>

                  <p className="livestock-breed-description">
                    {breed.description}
                  </p>

                  <div className="livestock-breed-specifications">
                    <div className="livestock-breed-spec-row">
                      <span className="livestock-breed-spec-label">
                        Nutritional Requirement:
                      </span>

                      <span className="livestock-breed-spec-value">
                        {breed.nutrition}
                      </span>
                    </div>

                    <div className="livestock-breed-spec-row">
                      <span className="livestock-breed-spec-label">
                        Reproductive Trait:
                      </span>

                      <span className="livestock-breed-spec-value">
                        {breed.reproductive}
                      </span>
                    </div>
                  </div>

                  <div className="livestock-breed-record">
                    Recordkeeping Tag: {breed.record}
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default LivestockCare;