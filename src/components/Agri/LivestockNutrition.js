import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiCheckCircle } from "react-icons/fi";
import "./LivestockNutrition.css";

const nutritionData = [
  {
    id: "01",
    title: "Green Fodder",
    image: "/images/nutrition/green-fodder.jpg",
    description:
      "Provides moisture, fibre and nutrients, depending on the forage species, maturity and quality. Freshly harvested silage, Napier grass, and lucerne maintain essential gut flora and vitamin precursors.",
    benefits: [
      "Moisture Balance",
      "Essential Fibres",
      "Natural Carotene",
    ],
  },
  {
    id: "02",
    title: "Dry Fodder",
    image: "/images/nutrition/dry-fodder.jpg",
    description:
      "Provides fibre and supports rumen function as part of a balanced ration. Cured wheat straw, paddy straw, and leguminous hays support rumen function and maintain optimal rumination.",
    benefits: [
      "Rumen pH Buffer",
      "Structural Fibre",
      "Long-Term Storage",
    ],
  },
  {
    id: "03",
    title: "Concentrate Feed",
    image: "/images/nutrition/concentrate-feed.jpg",
    description:
      "Provides concentrated energy and protein to complement forage-based diets. The composition can be adjusted according to animal age, body condition, milk production and nutritional requirements.",
    benefits: [
      "Energy Support",
      "Protein Balance",
      "Production Support",
    ],
  },
];

const LivestockNutrition = () => {
  return (
    <section className="livestock-nutrition-section">
      <Container>
        <div className="livestock-nutrition-header">
          <span className="livestock-nutrition-eyebrow">
            SCIENTIFIC RATIONING
          </span>

          <h2 className="livestock-nutrition-title">
            A Structured Approach to Livestock Nutrition
          </h2>

          <p className="livestock-nutrition-description">
            Consistent nutrition is an important component of livestock
            health, body condition, growth, milk production and reproductive
            performance. Our feeding framework includes three key feed
            categories: green fodder, dry fodder and concentrate.
          </p>
        </div>

        <div className="livestock-nutrition-list">
          {nutritionData.map((item) => (
            <article
              className="livestock-nutrition-card"
              key={item.id}
            >
              <Row className="g-0 h-100">
                <Col
                  xs={12}
                  md={5}
                  className="livestock-nutrition-media-col"
                >
                  <div className="livestock-nutrition-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="livestock-nutrition-image"
                      loading="lazy"
                    />

                    <span className="livestock-nutrition-category">
                      Category {item.id}
                    </span>
                  </div>
                </Col>

                <Col
                  xs={12}
                  md={7}
                  className="livestock-nutrition-content-col"
                >
                  <div className="livestock-nutrition-content">
                    <h3 className="livestock-nutrition-card-title">
                      {item.title}
                    </h3>

                    <p className="livestock-nutrition-card-description">
                      {item.description}
                    </p>

                    <div className="livestock-nutrition-benefits">
                      {item.benefits.map((benefit) => (
                        <span
                          className="livestock-nutrition-benefit"
                          key={benefit}
                        >
                          <FiCheckCircle
                            className="livestock-nutrition-check"
                            aria-hidden="true"
                          />
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </Col>
              </Row>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LivestockNutrition;