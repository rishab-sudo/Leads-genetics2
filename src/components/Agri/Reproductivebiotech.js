import React from "react";
import { Link } from "react-router-dom";
import "./Reproductivebiotech.css";

import moetImg from "../../assets/embroy1.jpeg";
// import chipImg from "../../assets/chip-popup-img.jpeg";

const items = [
  {
    id: "moet",
    imageFirst: true,
    image: moetImg,
    alt: "MOET embryo technology",
    route: "/moet",
    title: "(MOET) Technology: A Method for Rapid Genetic Improvement",
    text: [
      "Multiple Ovulation and Embryo Transfer (MOET) technology is an advanced reproductive technology that enables rapid genetic improvement in dairy cattle through the production of naturally developed in vivo embryos. In India, although artificial insemination has been widely adopted, advanced reproductive technologies have not yet reached the majority of farmers and remain at a relatively early stage of adoption",
    ],
  },
//   {
//     id: "chip",
//     imageFirst: false,
//     image: chipImg,
//     alt: "Zebu Cattle SNP Chip",
//     route: "/chip",
//     title: "Introducing India's First Zebu Cattle SNP Chip",
//     text: [
//       "Leads Genetics proudly presents India's first indigenous Zebu Cattle SNP Chip — a purpose-built genomic genotyping platform designed to accelerate scientific breed improvement in India's native cattle populations.",
//       "Launched at the Cattle Genomics Summit 2026, Bareilly, this chip marks a foundational milestone in bringing precision genomics to Indian dairy farming — enabling data-driven genomic selection for Gir, Sahiwal, and other indigenous Bos indicus breeds at a scale never before possible in the country.",
//     ],
//   },
];

export default function ReproductiveBiotech() {
  return (
    <section className="repro-section" aria-labelledby="repro-eyebrow">
      <div className="container-fluid">
        <p className="repro-eyebrow" id="repro-eyebrow">
          Reproductive Biotechnology &amp; Genomic Tools
        </p>

        {items.map((item) => {
          const media = (
            <div className="repro-media">
              <img src={item.image} alt={item.alt} loading="lazy" />
            </div>
          );

          const text = (
            <div className="repro-text">
              <h2 className="section-heading">{item.title}</h2>
              {item.text.map((para, i) => (
                <p key={i} className="page-text">
                  {para}
                </p>
              ))}
              <Link to={item.route} className="repro-btn">
                Know more →
              </Link>
            </div>
          );

          return (
            <div key={item.id} className="repro-row">
              {item.imageFirst ? media : text}
              {item.imageFirst ? text : media}
            </div>
          );
        })}
      </div>
    </section>
  );
}