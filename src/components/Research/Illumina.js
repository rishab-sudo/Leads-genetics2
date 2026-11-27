import React, { useEffect, useState } from "react";
import Button from "../Button";
import "./Illumina.css";

import flowchart2 from "../../assets/flowchart.jpg";
import flowchart1 from "../../assets/flowchart2.jpg";

import wgsImage from "../../assets/Servicsimg/wgs.jpg";
import wesImage from "../../assets/Servicsimg/wes.png";
import rnaImage from "../../assets/Servicsimg/rna.jpg";
import ampImage from "../../assets/Servicsimg/amp.jpg";
import gbsImage from "../../assets/Servicsimg/gbs.jpg";
import snpImage from "../../assets/Servicsimg/snp.jpg";
import msImage from "../../assets/Servicsimg/ms.jpg";

import ServiceBanner from "./ServiceBanner";

const services = [
  {
    id: 1,
    image: wgsImage,
    title: "Whole Genome Sequencing",
    category: "DNA Sequencing",
    description:
      "Comprehensive sequencing of the complete genome to investigate genetic variation and genomic architecture.",
    bestFor:
      "Genome-wide variant discovery, population studies and genetic research.",
    specifications: [
      "Whole-genome coverage",
      "Short-read sequencing",
      "Quality-controlled sequence data",
    ],
    deliverables: [
      "Raw FASTQ files",
      "Quality control report",
      "Aligned BAM files",
      "Variant VCF files",
    ],
  },
  {
    id: 2,
    image: wesImage,
    title: "Whole Exome Sequencing",
    category: "DNA Sequencing",
    description:
      "Targeted sequencing of protein-coding regions to identify variants associated with biological traits and conditions.",
    bestFor:
      "Coding-region variant analysis and focused genetic investigations.",
    specifications: [
      "Exome enrichment",
      "High-throughput sequencing",
      "Variant identification",
    ],
    deliverables: [
      "Raw FASTQ files",
      "Quality control report",
      "Alignment files",
      "Variant analysis files",
    ],
  },
  {
    id: 3,
    image: rnaImage,
    title: "RNA Sequencing",
    category: "Transcriptomics",
    description:
      "High-throughput transcriptome sequencing to study gene expression and understand biological activity.",
    bestFor:
      "Gene expression profiling, transcriptome analysis and differential expression studies.",
    specifications: [
      "RNA library preparation",
      "Transcriptome sequencing",
      "Expression analysis",
    ],
    deliverables: [
      "Raw FASTQ files",
      "Quality control report",
      "Expression matrix",
      "Differential expression results",
    ],
  },
  {
    id: 4,
    image: ampImage,
    title: "Amplicon Sequencing",
    category: "Targeted Sequencing",
    description:
      "Targeted sequencing of selected genomic regions for detailed investigation of specific genetic markers.",
    bestFor:
      "Targeted genetic studies, marker analysis and focused screening.",
    specifications: [
      "Target-specific amplification",
      "Multiplexed sequencing",
      "Sequence-level analysis",
    ],
    deliverables: [
      "Raw FASTQ files",
      "Quality control report",
      "Sequence data",
      "Analysis summary",
    ],
  },
  {
    id: 5,
    image: gbsImage,
    title: "Genotyping-by-Sequencing",
    category: "Genotyping",
    description:
      "Cost-effective, high-throughput genotyping for genetic diversity and population-level studies.",
    bestFor:
      "Crop and livestock breeding, population screening and genetic diversity research.",
    specifications: [
      "Reduced-representation sequencing",
      "SNP discovery",
      "Population-level analysis",
    ],
    deliverables: [
      "Raw sequencing data",
      "SNP dataset",
      "Genotype matrix",
      "Analysis report",
    ],
  },
  {
    id: 6,
    image: snpImage,
    title: "SNP Fingerprinting",
    category: "Genotyping",
    description:
      "Genetic fingerprinting using SNP markers for sample identification and genetic comparison.",
    bestFor:
      "Variety identification, seed purity testing and genetic identity assessment.",
    specifications: [
      "SNP marker profiling",
      "Genetic comparison",
      "Sample-level analysis",
    ],
    deliverables: [
      "SNP profile",
      "Genotype dataset",
      "Comparison report",
    ],
  },
  {
    id: 7,
    image: msImage,
    title: "Metagenomic Sequencing",
    category: "Microbiome",
    description:
      "Sequencing-based investigation of microbial communities and their genetic composition.",
    bestFor:
      "Microbial diversity, microbiome research and community profiling.",
    specifications: [
      "High-throughput sequencing",
      "Microbial profiling",
      "Taxonomic analysis",
    ],
    deliverables: [
      "Raw FASTQ files",
      "Taxonomic profile",
      "Diversity analysis",
      "Final report",
    ],
  },
];

const faqs = [
  {
    question: "What is Illumina NGS?",
    answer:
      "Illumina NGS (next-generation sequencing) is a short-read sequencing technology that reads millions of short DNA or RNA fragments in parallel. It is widely used for precise, high-throughput and scalable genomic analysis.",
  },
  {
    question: "Which Illumina NGS services do you offer?",
    answer:
      "We offer Whole Genome Sequencing, Whole Exome Sequencing, RNA Sequencing, Amplicon Sequencing, Genotyping-by-Sequencing, SNP Fingerprinting and Metagenomic Sequencing.",
  },
  {
    question:
      "What is the difference between whole genome and whole exome sequencing?",
    answer:
      "Whole genome sequencing covers the complete genome and is suited to genome-wide variant discovery. Whole exome sequencing targets only the protein-coding regions, which makes it suitable for focused coding-region variant analysis.",
  },
  {
    question: "What data will I receive after sequencing?",
    answer:
      "Deliverables depend on the service. Most projects include raw FASTQ files and a quality control report, along with service-specific outputs such as alignment files, variant files, expression matrices, SNP datasets or taxonomic profiles.",
  },
  {
    question: "Can Illumina NGS be used for crop and livestock breeding?",
    answer:
      "Yes. Genotyping-by-Sequencing and SNP Fingerprinting are well suited to crop and livestock breeding, population screening, genetic diversity research, variety identification and seed purity testing.",
  },
  {
    question: "How do I choose the right sequencing service for my research?",
    answer:
      "The right service depends on your research question, sample type and the level of detail you need. Share your project requirements with our team and we will help you choose a suitable approach.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function Illumina() {
  const [activeService, setActiveService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(-1);

  const selectedService = services.find(
    (service) => service.id === activeService
  );

  const half = Math.ceil(faqs.length / 2);
  const firstColumn = faqs.slice(0, half);
  const secondColumn = faqs.slice(half);

  const selectService = (serviceId) => {
    setActiveService(serviceId);
  };

  const closeDetails = () => {
    setActiveService(null);
  };

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index));
  };

  useEffect(() => {
    if (activeService === null) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  const renderFaq = (faq, index) => {
    const isOpen = activeFaq === index;

    return (
      <div
        key={faq.question}
        className={
          isOpen
            ? "illumina-faq-item illumina-faq-open"
            : "illumina-faq-item"
        }
      >
        <h3 className="illumina-faq-question-wrap">
          <button
            type="button"
            className="illumina-faq-question"
            onClick={() => toggleFaq(index)}
            aria-expanded={isOpen}
            aria-controls={`illumina-faq-answer-${index}`}
            id={`illumina-faq-question-${index}`}
          >
            <span>{faq.question}</span>
            <span className="illumina-faq-icon">+</span>
          </button>
        </h3>

        <div
          className="illumina-faq-answer"
          id={`illumina-faq-answer-${index}`}
          role="region"
          aria-labelledby={`illumina-faq-question-${index}`}
        >
          <p>{faq.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <>
<ServiceBanner
title={"Illumina"}
description={"Next Generation Sequencing"}/>

      <section className="illumina-section">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="illumina-container">
          {/* Article heading */}

          <div className="illumina-heading">
            <div className="illumina-eyebrow">
              <span className="illumina-eyebrow-line"></span>
              SHORT-READ SEQUENCING
            </div>

            <h2 className="section-heading">
              Illumina Sequencing: Technology, Workflow & Applications
            </h2>
          </div>

          {/* Article and two flowchart images */}

          <div className="illumina-content-block">
            <div className="illumina-first-content">
              <div className="illumina-article illumina-article-first">
                <p className="page-text">
                  Illumina sequencing by synthesis (SBS) technology has become
                  one of the most widely adopted approaches in short-read
                  sequencing, supporting a broad range of genomic research
                  projects. Its combination of high accuracy, scalable
                  throughput, and a well-established sequencing ecosystem makes
                  it a preferred choice for applications ranging from targeted
                  amplicon panels and whole-exome sequencing to population-scale
                  whole-genome studies.
                </p>

                <p className="page-text">
                  However, a successful Illumina sequencing project involves more
                  than understanding the sequencing principle. Platform
                  selection, library preparation, sample quality, sequencing
                  parameters, and data interpretation all play an important role
                  in generating reliable and reproducible results. Careful
                  planning at each stage helps researchers minimize workflow
                  challenges and obtain meaningful sequencing data.
                </p>
              </div>

              <div className="illumina-flowchart illumina-flowchart-first">
                <img
                  src={flowchart1}
                  alt="Illumina sequencing workflow overview"
                  className="illumina-flowchart-image"
                />
              </div>
            </div>

            <div className="illumina-second-content">
              <h3 className="illumina-article-subheading section-heading">
                Why Illumina NGS Remains a
                <br />
                Leading Technology in Short-Read Sequencing
              </h3>

              <p className="page-text">
                Illumina's Sequencing by Synthesis (SBS) technology has played
                a significant role in advancing modern genomic research
                through continuous improvements in sequencing chemistry,
                throughput, and workflow efficiency. Over the years,
                advancements in SBS chemistry, including the introduction of
                XLEAP-SBS technology with the NovaSeq X Series, have
                contributed to improved sequencing performance, optimized run
                efficiency, and greater scalability.
              </p>

              <p className="page-text">
                These developments have made high-throughput sequencing
                increasingly accessible for a wide range of research
                applications, from individual genomic investigations to
                large-scale population studies. With its established workflow,
                broad application compatibility, and evolving platform
                capabilities, Illumina sequencing continues to support genomic
                research across diverse scientific disciplines.
              </p>

              <p className="page-text">
                This article provides an overview of Illumina NGS, including
                its underlying principles, sequencing platforms, project
                considerations, quality metrics, and data analysis workflows.
                It focuses on the practical aspects of sequencing projects,
                helping researchers understand the factors involved in
                selecting an appropriate platform, preparing sequencing
                libraries, evaluating data quality, and planning their
                projects effectively.
              </p>

              <div className="illumina-flowchart illumina-flowchart-second">
                <img
                  src={flowchart2}
                  alt="Illumina sequencing platforms: throughput versus read length"
                  className="illumina-flowchart-image"
                />
              </div>
            </div>
          </div>

          {/* Services */}

          <div className="illumina-services-heading">
            <div>
              <span className="illumina-section-label">SERVICE CATALOG</span>
              <h3 className="section-heading">Explore our Illumina services</h3>
            </div>

            <div className="illumina-service-count">
              <strong>{services.length}</strong>
              <span>Services available</span>
            </div>
          </div>

          <div className="illumina-service-grid">
            {services.map((service) => (
              <button
                type="button"
                key={service.id}
                className="illumina-service-card"
                onClick={() => selectService(service.id)}
              >
                <div className="illumina-card-top">
                  <span className="illumina-card-dot"></span>
                  <span className="illumina-card-category">
                    {service.category}
                  </span>
                  <span className="illumina-card-arrow">↗</span>
                </div>

                <div className="illumina-card-visual">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="illumina-service-image"
                    loading="lazy"
                  />
                </div>

                <div className="illumina-card-bottom">
                  <span className="illumina-card-platform">ILLUMINA NGS</span>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <span className="illumina-card-link">
                    Explore service <span>→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* FAQ */}

          <div className="illumina-faq">
            <div className="illumina-faq-heading">
              <h2 className="section-heading">Frequently asked questions</h2>
              <p>Common questions about our Illumina NGS services.</p>
            </div>

            <div className="illumina-faq-list">
              <div className="illumina-faq-column">
                {firstColumn.map((faq, index) => renderFaq(faq, index))}
              </div>

              <div className="illumina-faq-column">
                {secondColumn.map((faq, index) =>
                  renderFaq(faq, index + firstColumn.length)
                )}
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className="illumina-cta">
            <div className="illumina-cta-copy">
              <span className="illumina-cta-label">START YOUR PROJECT</span>
              <h3>Ready to plan your sequencing project?</h3>
              <p>
                Tell us about your samples and research goals, and our team
                will help you choose the right Illumina NGS service.
              </p>
            </div>

            <div className="illumina-cta-action">
              <Button to="/contact" variant="primary" size="medium">
                Discuss your project
              </Button>
            </div>
          </div>
        </div>

        {/* Service detail popup */}

        {selectedService && (
          <div className="illumina-detail-backdrop" onClick={closeDetails}>
            <div
              className="illumina-detail-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="illumina-detail-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="illumina-detail-header">
                <div>
                  <span className="illumina-section-label">ILLUMINA NGS</span>
                  <h3 id="illumina-detail-title">{selectedService.title}</h3>
                  <span className="illumina-detail-category">
                    {selectedService.category}
                  </span>
                </div>

                <button
                  type="button"
                  className="illumina-detail-close"
                  onClick={closeDetails}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>

              <div className="illumina-detail-body">
                <div className="illumina-detail-description">
                  <span>OVERVIEW</span>
                  <p>{selectedService.description}</p>
                </div>

                <div className="illumina-detail-best">
                  <span>BEST SUITED FOR</span>
                  <p>{selectedService.bestFor}</p>
                </div>

                <div className="illumina-detail-columns">
                  <div className="illumina-detail-block">
                    <h4>Key specifications</h4>
                    <ul>
                      {selectedService.specifications.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="illumina-detail-block">
                    <h4>Deliverables</h4>
                    <ul>
                      {selectedService.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="illumina-detail-footer">
                <span>Have a specific research requirement?</span>
                <a href="/contact">
                  Discuss your project <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Illumina;