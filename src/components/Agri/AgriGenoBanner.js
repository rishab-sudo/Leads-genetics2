import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaWarehouse, FaListUl, FaFlask } from "react-icons/fa";
import "./AgriGenoBanner.css";

const AgriGenoBanner = () => {
  const livestockStats = [
  {
    id: 1,
    icon: <FaWarehouse />,
    title: "9 Livestock Sheds",
    subtitle: "DEDICATED PURPOSE HOUSING",
  },
  {
    id: 2,
    icon: <FaListUl />,
    title: "6 Cattle Breeds",
    subtitle: "INDIVIDUALIZED MANAGEMENT",
  },
  {
    id: 3,
    icon: <FaFlask />,
    title: "In-House IVF Laboratory",
    subtitle: "ADVANCED EMBRYO BIOTECH",
  },
];

  return (
    <>
    <section className="agri-geno-banner">
      {/* Background Video */}
      <video
        className="agri-geno-banner-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={require("../../assets/agri-video.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="agri-geno-banner-overlay"></div>

      {/* Banner Content */}
      <div className="agri-geno-banner-content">
        <span className="agri-geno-banner-subtitle">
          ADVANCING AGRICULTURE THROUGH GENOMICS
        </span>

        <h1>
          Agri-Genomics for a <br />
          <span>Sustainable Future</span>
        </h1>

        <p>
          Harnessing the power of genomics to improve crop productivity,
          strengthen livestock genetics, and build a more sustainable
          agricultural future through scientific innovation.
        </p>
      </div>
    </section>

    <section className="livestock-stats-section">
      <Container>
        <Row className="livestock-stats-row">
          {livestockStats.map((item) => (
            <Col md={4} xs={12} key={item.id}>
              <div className="livestock-stats-item">
                <div className="livestock-stats-icon">
                  {item.icon}
                </div>

                <div className="livestock-stats-content">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </>
  );
};

export default AgriGenoBanner;
