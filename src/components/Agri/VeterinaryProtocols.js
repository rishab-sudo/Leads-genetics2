import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiActivity,
  FiShield,
  FiClipboard,
  FiCheckCircle,
} from "react-icons/fi";
import "./VeterinaryProtocols.css";

const veterinaryProtocolsData = [
  {
    id: 1,
    icon: <FiActivity />,
    title: "Vaccination Management",
    description:
      "Scheduled immunization protocols covering FMD, HS, BQ, and Brucellosis with digital boosters tracking.",
  },
  {
    id: 2,
    icon: <FiShield />,
    title: "Disease Prevention",
    description:
      "Strict biosecurity measures, quarantine protocols for incoming stock, and daily foot-bath sanitization.",
  },
  {
    id: 3,
    icon: <FiClipboard />,
    title: "Veterinary Monitoring",
    description:
      "Regular clinical evaluations, reproductive tract scoring (RTS), and body condition scoring (BCS) by specialized vets.",
  },
  {
    id: 4,
    icon: <FiActivity />,
    title: "Diagnostic Testing",
    description:
      "Routine health screening, metabolic blood profiles, somatic cell counts, and PCR disease screening.",
  },
];

const VeterinaryProtocols = () => {
  return (
    <section className="veterinary-protocols-section">
      <Container>
        {/* Section Header */}
        <div className="veterinary-protocols-header">
          <span className="veterinary-protocols-eyebrow">
            VETERINARY PROTOCOLS
          </span>

          <h2 className="veterinary-protocols-title">
            Animal Health at the Centre of Livestock Management
          </h2>

          <p className="veterinary-protocols-description">
            Our confirmed healthcare scope includes vaccination, disease
            prevention, veterinary monitoring and diagnostic testing.
            Maintaining pristine herd health ensures biosecurity for embryo
            export and high reproductive efficiency.
          </p>
        </div>

        {/* Protocol Cards */}
        <Row className="veterinary-protocols-grid">
          {veterinaryProtocolsData.map((protocol) => (
            <Col
              key={protocol.id}
              xs={12}
              sm={6}
              lg={3}
              className="veterinary-protocols-column"
            >
              <article className="veterinary-protocol-card">
                <div className="veterinary-protocol-icon">
                  {protocol.icon}
                </div>

                <h3 className="veterinary-protocol-card-title">
                  {protocol.title}
                </h3>

                <p className="veterinary-protocol-card-description">
                  {protocol.description}
                </p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default VeterinaryProtocols;