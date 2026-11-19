import React from "react";
import Button from "../components/Button";
import "./HomeProduct.css";

import embryo from "../assets/embroy1.jpeg";
import cow from "../assets/cow.jpeg";
import ngs from "../assets/pacbio.jpg";
import { Container } from "react-bootstrap";

const products = [
  {
    img: embryo,
    alt: "Elite Semen",
    badgeLeft: "100% Sexed & Conventional",
    badgeRight: "-196°C Cryo-Chain",
    title: "Elite Semen",
    desc: "Ultra-high fertility, genomically proven semen straws sourced for Indian Cows with elite indigenous lines.",
    features: [
      ["90%+ Female Ratio", "with gender-sorted sexed semen technology"],
      ["High TPI & Net Merit", "sires verified free of genetic recessives"],
      ["Unbroken Liquid Nitrogen", "traceability directly to your farm"],
    ],
    tags: ["A2 Gir & Sahiwal", "HF Purebred"],
    cta: "Request Sire Catalog",
    variant: "primary",
    to: "/contact",
  },
  {
    img: cow,
    alt: "Genetically Elite Calves",
    badgeLeft: "Pedigree Certified",
    badgeRight: "Live Herd Stock",
    title: "Genetically Breed Calves",
    desc: "Healthy, vaccinated, female calves & pregnant bred from imported sire lines-ready to accelerate your farm's next-generation milking herd.",
    features: [
      ["Verified 3-Generation Pedigree", "with DNA parentage certificates"],
      ["Tropical Heat Tolerance", "& superior feed-to-milk conversion"],
    ],
    tags: ["HF Female Calves","Gir", "Sahiwal"],
    cta: "Check Calf Availability",
    variant: "secondary",
    to: "/contact",
  },
  {
    img: ngs,
    alt: "High-Yield Cattle Genetics",
    badgeLeft: "Elite Genomic Index",
    badgeRight: "IVF & Embryo Transfer",
    title: "High-Yield Cattle Genes",
    desc: "Next-generation IVF embryos and genomic trait selection engineered for 35L–50L+ peak daily milk yield, A2A2 beta-casein purity, and mastitis resilience.",
    features: [
      ["A2A2 Beta-Casein & High Fat/SNF", "genetic marker selection"],
      ["On-Farm Embryo Transfer (ET)", "& genomic herd profiling support"],
    ],
    tags: ["IVF Embryos", "A2A2 Selection", "DNA Screening"],
    cta: "Consult Geneticist",
    variant: "primary",
    to: "/contact",
  },
];

const HomeProduct = () => {
  return (
    <section className="home-product">
<Container fluid className="h-container">
      <div className="home-product-heading">
        <span className="product-eyebrow">
          WHAT WE OFFER • CORE GENETIC PRODUCTS
        </span>

        <h2 className="section-heading">Cattle Genetics & Breeding Solutions</h2>

        <p>
          Scientifically verified, high-pedigree bovine genetics engineered for
          superior milk yield, disease resistance, and sustainable dairy
          profitability.
        </p>
      </div>

      <div className="home-product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.title}>
            <div className="product-image">
              <img src={p.img} alt={p.alt} />
              <span className="image-badge left">{p.badgeLeft}</span>
              <span className="image-badge right">{p.badgeRight}</span>

              <div className="product-image-content">
                <h3>{p.title}</h3>
              </div>
            </div>

            <div className="product-card-content">
              <p className="product-description">{p.desc}</p>

              <ul className="product-features">
                {p.features.map(([bold, text]) => (
                  <li key={bold}>
                    <span>✓</span>
                    <p>
                      <strong>{bold}</strong> {text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="product-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <div className="product-actions">
                <Button
                  to={p.to}
                  variant={p.variant}
                  size="small"
                  className="product-cta"
                >
                  {p.cta} <span aria-hidden="true">›</span>
                </Button>
                <Button
                  to={p.to}
                  variant="outline"
                  size="small"
                  className="product-spec"
                >
                  Specs
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </section>

  );
};

export default HomeProduct;