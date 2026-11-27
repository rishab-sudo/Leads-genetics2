import React, { useEffect, useState } from "react";
import Button from "../Button";
import "./Pacbio.css";

import pacbio1 from "../../assets/Servicsimg/hifi.jpg";
import pacbio2 from "../../assets/Servicsimg/den.png";
import pacbio3 from "../../assets/Servicsimg/sa.jpg";
import pacbio4 from "../../assets/Servicsimg/wts.png";
import pacbio5 from "../../assets/Servicsimg/ttgs.jpg";
import pacbio6 from "../../assets/Servicsimg/gph.png";

import wtsImage from "../../assets/Servicsimg/wts.png";
import flowchartImage from "../../assets/flowchart3.jpg";
import ServiceBanner from "./ServiceBanner";

const services = [
  {
    id: 1,
    image: pacbio1,
    imageAlt:
      "PacBio HiFi whole genome sequencing service for accurate long-read genome characterization",
    title: "HiFi Whole Genome Sequencing",
    category: "Long-Read Sequencing",
    description:
      "Highly accurate long-read sequencing for comprehensive genome characterization and complex genomic regions.",
    bestFor:
      "De novo genome research, structural variation and high-quality genome characterization.",
    specifications: [
      "PacBio HiFi reads",
      "Long-read sequencing",
      "High-consensus accuracy",
    ],
    deliverables: [
      "HiFi read data",
      "Quality control report",
      "Genome assembly files",
      "Analysis summary",
    ],
  },
  {
    id: 2,
    image: pacbio2,
    imageAlt:
      "De novo genome assembly service building genome sequences from PacBio long reads",
    title: "De Novo Genome Assembly",
    category: "Genome Assembly",
    description:
      "Construction of genome sequences from long-read sequencing data without relying on a reference genome.",
    bestFor:
      "New species, reference genome development and complex genome research.",
    specifications: [
      "Long-read assembly",
      "Contig generation",
      "Assembly quality assessment",
    ],
    deliverables: [
      "Genome assembly",
      "Assembly statistics",
      "Quality assessment report",
    ],
  },
  {
    id: 3,
    image: pacbio3,
    imageAlt:
      "Structural variant analysis service detecting large genomic rearrangements with long reads",
    title: "Structural Variant Analysis",
    category: "Genome Analysis",
    description:
      "Identification of large genomic changes and complex structural variations using long-read sequencing.",
    bestFor:
      "Genome variation studies and complex rearrangement investigations.",
    specifications: [
      "Long-read alignment",
      "Structural variant detection",
      "Variant characterization",
    ],
    deliverables: [
      "Structural variant dataset",
      "Variant annotations",
      "Analysis report",
    ],
  },
  {
    id: 4,
    image: pacbio4,
    imageAlt:
      "Full-length transcript sequencing service for isoform and transcript structure analysis",
    title: "Full-Length Transcript Sequencing",
    category: "Transcriptomics",
    description:
      "Long-read sequencing of complete transcripts to characterize isoforms and transcript structures.",
    bestFor:
      "Alternative splicing, transcript discovery and isoform-level research.",
    specifications: [
      "Full-length transcript sequencing",
      "Isoform identification",
      "Transcript characterization",
    ],
    deliverables: [
      "Raw read data",
      "Transcript annotations",
      "Isoform dataset",
      "Analysis report",
    ],
  },
  {
    id: 5,
    image: pacbio5,
    imageAlt:
      "Targeted long-read sequencing service for selected genomic regions and complex loci",
    title: "Targeted Long-Read Sequencing",
    category: "Targeted Sequencing",
    description:
      "Focused long-read sequencing of selected genomic regions for detailed characterization.",
    bestFor:
      "Complex loci, repetitive regions and targeted genetic investigations.",
    specifications: [
      "Targeted region enrichment",
      "Long-read sequencing",
      "Variant characterization",
    ],
    deliverables: [
      "Raw read data",
      "Target sequence files",
      "Analysis report",
    ],
  },
  {
    id: 6,
    image: pacbio6,
    imageAlt:
      "Genome phasing and haplotyping service resolving the arrangement of genetic variants",
    title: "Genome Phasing and Haplotyping",
    category: "Genome Analysis",
    description:
      "Long-read based analysis to resolve haplotypes and understand the arrangement of genetic variants.",
    bestFor:
      "Allele-specific studies, inherited variation and genome architecture research.",
    specifications: [
      "Long-read phasing",
      "Haplotype reconstruction",
      "Variant assignment",
    ],
    deliverables: [
      "Phased variant dataset",
      "Haplotype files",
      "Analysis report",
    ],
  },
];

const faqs = [
  {
    question: "What is PacBio Vega sequencing?",
    answer:
      "PacBio Vega is a long-read sequencing platform that reads long continuous stretches of DNA or RNA. Its HiFi reads combine long read length with high accuracy, which makes it well suited to complex genomes and comprehensive genomic analysis.",
  },
  {
    question: "Which PacBio Vega services do you offer?",
    answer:
      "We offer HiFi Whole Genome Sequencing, De Novo Genome Assembly, Structural Variant Analysis, Full-Length Transcript Sequencing, Targeted Long-Read Sequencing, and Genome Phasing and Haplotyping.",
  },
  {
    question:
      "What is the difference between long-read and short-read sequencing?",
    answer:
      "Short-read sequencing reads small DNA fragments and is well suited to high-throughput, scalable analysis. Long-read sequencing reads much longer fragments, which helps resolve repetitive regions, large structural changes and complex parts of the genome that short reads can struggle with.",
  },
  {
    question: "When should I choose PacBio HiFi over Illumina?",
    answer:
      "Choose PacBio HiFi when your research involves de novo assembly, structural variation, haplotype phasing, full-length transcripts or complex and repetitive regions. Illumina is often a better fit for genome-wide variant discovery, expression profiling and large population studies.",
  },
  {
    question: "Can you assemble a genome without a reference?",
    answer:
      "Yes. Our De Novo Genome Assembly service builds genome sequences from long-read data without relying on a reference genome, which makes it suitable for new species and reference genome development.",
  },
  {
    question: "What data will I receive after sequencing?",
    answer:
      "Deliverables depend on the service. Projects can include HiFi or raw read data, quality control reports, genome assemblies with assembly statistics, structural variant datasets, isoform annotations or phased variant files, along with an analysis report.",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Sample Preparation",
    description:
      "DNA is isolated from the biological sample and assessed for quality and quantity. Samples may originate from bacterial, plant, animal or human sources.",
  },
  {
    number: "02",
    title: "Library Construction",
    description:
      "Genomic DNA quality assessment, size selection, DNA repair, end preparation, hairpin adaptor ligation and purification are performed to prepare SMRTbell templates.",
  },
  {
    number: "03",
    title: "Sequencing Reaction",
    description:
      "DNA polymerase processes the SMRTbell template in a sequencing environment where fluorescently labelled nucleotide incorporation events are detected in real time.",
  },
  {
    number: "04",
    title: "Data Analysis",
    description:
      "Sequencing output is processed into read data and further analysed for genome assembly, variant detection, transcript characterization or other research objectives.",
  },
  {
    number: "05",
    title: "Interpretation",
    description:
      "The resulting sequencing and analytical data are assessed and interpreted in the context of the research objectives.",
  },
];

const faqsSchema = {
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

function PacBio() {
  const [activeService, setActiveService] = useState(null);
  const [activeFaq, setActiveFaq] = useState(-1);

  const selectedService = services.find(
    (service) => service.id === activeService
  );

  const closeDetails = () => {
    setActiveService(null);
  };

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index));
  };

  useEffect(() => {
    if (activeService === null) return undefined;

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

  const half = Math.ceil(faqs.length / 2);
  const firstColumn = faqs.slice(0, half);
  const secondColumn = faqs.slice(half);

  const renderFaq = (faq, index) => {
    const isOpen = activeFaq === index;

    return (
      <div
        key={faq.question}
        className={
          isOpen
            ? "pacbio-faq-item pacbio-faq-open"
            : "pacbio-faq-item"
        }
      >
        <h4 className="pacbio-faq-question-wrap">
          <button
            type="button"
            className="pacbio-faq-question"
            onClick={() => toggleFaq(index)}
            aria-expanded={isOpen}
            aria-controls={`pacbio-faq-answer-${index}`}
            id={`pacbio-faq-question-${index}`}
          >
            <span>{faq.question}</span>
            <span className="pacbio-faq-icon">+</span>
          </button>
        </h4>

        <div
          className="pacbio-faq-answer"
          id={`pacbio-faq-answer-${index}`}
          role="region"
          aria-labelledby={`pacbio-faq-question-${index}`}
        >
          <p>{faq.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <>

      <ServiceBanner
title={"PacBio:"}
description={"Long-Read Sequencing"}/>

      <section className="pacbio-section">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqsSchema),
          }}
        />

        <div className="pacbio-container">
          {/* OVERVIEW */}

          <div className="pacbio-heading">
            <div className="pacbio-eyebrow">
              <span className="pacbio-eyebrow-line"></span>
              LONG-READ SEQUENCING
            </div>

            <h2 className="section-heading">
              Overview of PacBio Sequencing
            </h2>

            <div className="pacbio-article">
              <p className="page-text">
                Pacific Biosciences (PacBio) sequencing is a
                third-generation sequencing technology based on
                Single Molecule Real-Time (SMRT) sequencing.
                Unlike conventional sequencing methods that often
                rely on DNA amplification, PacBio enables the
                sequencing of individual DNA molecules in real
                time, providing long-read sequencing capabilities
                that support comprehensive genomic analysis.
              </p>

              <p className="page-text">
                PacBio&apos;s SMRT technology utilizes Zero-Mode
                Waveguides (ZMWs) to observe DNA synthesis at
                the single-molecule level. This approach enables
                the generation of long sequencing reads, making
                it particularly valuable for complex genomic
                regions, structural variation analysis and
                genome assembly.
              </p>

              <p className="page-text">
                PacBio sequencing has expanded applications
                across genome assembly, genetic variation,
                transcriptome analysis and the study of complex
                genomic structures.
              </p>
            </div>
          </div>

          {/* SMRT PRINCIPLE */}

          <section className="pacbio-principle">
            <div className="pacbio-principle-heading">
              <div className="pacbio-eyebrow">
                <span className="pacbio-eyebrow-line"></span>
                SEQUENCING TECHNOLOGY
              </div>

              <h2 className="section-heading">
                Principle of PacBio SMRT Sequencing
              </h2>
            </div>

            <div className="pacbio-principle-layout">
              <div className="pacbio-principle-content">
                <p className="page-text">
                  PacBio Single Molecule Real-Time (SMRT)
                  sequencing is based on DNA polymerase
                  activity and the real-time detection of
                  nucleotide incorporation. During sequencing,
                  DNA polymerase binds to the DNA template
                  and incorporates nucleotides during DNA
                  synthesis. Fluorescent signals associated
                  with nucleotide incorporation are detected
                  as sequencing progresses.
                </p>

                <p className="page-text">
                  The SMRT sequencing approach uses
                  specialized sequencing environments to
                  monitor DNA synthesis at the single-molecule
                  level. Incorporation of fluorescently
                  labelled nucleotides generates signals
                  that are detected and processed to identify
                  the sequence of the DNA template.
                </p>

                <p className="page-text">
                  Long-read sequencing capability is
                  supported by the continuous activity of
                  the DNA polymerase during the sequencing
                  process. Read length can depend on factors
                  including template quality, polymerase
                  performance and sequencing conditions.
                </p>
              </div>

              <div className="pacbio-principle-visual">
                <figure className="pacbio-figure">
                  <img
                    src={wtsImage}
                    alt="Illustration of PacBio SMRT long-read sequencing showing DNA polymerase reading a DNA template in real time"
                    loading="lazy"
                  />

                  <figcaption className="pacbio-figcaption">
                    <strong>Fig 1:</strong> Principle of PacBio SMRT
                    sequencing, where DNA polymerase incorporates
                    fluorescently labelled nucleotides and each
                    incorporation event is detected in real time.
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="pacbio-smrtbell">
              <h3>SMRTbell Library Construction</h3>

              <p className="page-text">
                PacBio library construction involves the
                preparation of double-stranded DNA
                fragments and the ligation of hairpin
                adaptors to both ends of the DNA. This
                produces a circular DNA template known
                as a SMRTbell library.
              </p>

              <p className="page-text">
                The SMRTbell structure allows the
                sequencing polymerase to process the
                template through continuous sequencing
                activity. Fluorescent signals generated
                during nucleotide incorporation are
                detected and used to produce sequencing
                data for downstream analysis.
              </p>
            </div>

            <div className="pacbio-principle-points">
              <div className="pacbio-principle-point">
                <span>01</span>
                <h4>Single-Molecule Detection</h4>
                <p>
                  DNA synthesis is monitored at the
                  individual molecule level.
                </p>
              </div>

              <div className="pacbio-principle-point">
                <span>02</span>
                <h4>Real-Time Sequencing</h4>
                <p>
                  Nucleotide incorporation events are
                  detected as synthesis occurs.
                </p>
              </div>

              <div className="pacbio-principle-point">
                <span>03</span>
                <h4>Long Reads</h4>
                <p>
                  Long DNA templates support the
                  characterization of complex genomic
                  regions.
                </p>
              </div>

              <div className="pacbio-principle-point">
                <span>04</span>
                <h4>SMRTbell Templates</h4>
                <p>
                  Hairpin adaptors form circular
                  sequencing templates for SMRT
                  sequencing.
                </p>
              </div>
            </div>
          </section>

          {/* SMRT WORKFLOW */}

          <section className="pacbio-workflow">
            <div className="pacbio-workflow-heading">
              <div className="pacbio-eyebrow">
                <span className="pacbio-eyebrow-line"></span>
                SEQUENCING PROCESS
              </div>

              <h2 className="section-heading">
                Workflow of PacBio SMRT Sequencing
              </h2>

              <p className="page-text">
                PacBio SMRT sequencing involves a series of
                steps from sample preparation and library
                construction to sequencing, data analysis and
                interpretation.
              </p>
            </div>

            <div className="pacbio-workflow-image">
              <figure className="pacbio-figure">
                <img
                  src={flowchartImage}
                  alt="Flowchart of the PacBio SMRT sequencing workflow from sample preparation and SMRTbell library construction to sequencing, data analysis and interpretation"
                  loading="lazy"
                />

                <figcaption className="pacbio-figcaption">
                  <strong>Fig 2:</strong> Workflow of PacBio SMRT
                  sequencing, from sample preparation and SMRTbell
                  library construction through sequencing to data
                  analysis and interpretation.
                </figcaption>
              </figure>
            </div>

            <div className="pacbio-workflow-grid">
              {workflowSteps.map((step) => (
                <div
                  className="pacbio-workflow-step"
                  key={step.number}
                >
                  <span className="pacbio-workflow-number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICE HEADING */}

          <div className="pacbio-services-heading">
            <div>
              <span className="pacbio-section-label">
                SERVICE CATALOG
              </span>

              <h3 className="section-heading">Explore our PacBio services</h3>
            </div>

            <div className="pacbio-service-count">
              <strong>{services.length}</strong>
              <span>Services available</span>
            </div>
          </div>

          {/* SERVICES */}

          <div className="pacbio-service-grid">
            {services.map((service) => (
              <button
                type="button"
                key={service.id}
                className="pacbio-service-card"
                onClick={() => setActiveService(service.id)}
              >
                <div className="pacbio-card-top">
                  <span className="pacbio-card-dot"></span>

                  <span className="pacbio-card-category">
                    {service.category}
                  </span>

                  <span className="pacbio-card-arrow">↗</span>
                </div>

                <div className="pacbio-card-visual">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="pacbio-service-image"
                    loading="lazy"
                  />
                </div>

                <div className="pacbio-card-bottom">
                  <span className="pacbio-card-platform">
                    PACBIO VEGA
                  </span>

                  <h4>{service.title}</h4>

                  <p>{service.description}</p>

                  <span className="pacbio-card-link">
                    Explore service <span>→</span>
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* FAQ */}

          <div className="pacbio-faq">
            <div className="pacbio-faq-heading">
              <span className="pacbio-section-label">
                FAQ
              </span>

              <h3 className="section-heading">
                Frequently asked questions
              </h3>

              <p>
                Common questions about our PacBio Vega services.
              </p>
            </div>

            <div className="pacbio-faq-list">
              <div className="pacbio-faq-column">
                {firstColumn.map((faq, index) =>
                  renderFaq(faq, index)
                )}
              </div>

              <div className="pacbio-faq-column">
                {secondColumn.map((faq, index) =>
                  renderFaq(faq, index + firstColumn.length)
                )}
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className="pacbio-cta">
            <div className="pacbio-cta-copy">
              <span className="pacbio-cta-label">
                START YOUR PROJECT
              </span>

              <h3>
                Ready to plan your long-read sequencing project?
              </h3>

              <p>
                Tell us about your samples and research goals,
                and our team will help you choose the right
                PacBio Vega service.
              </p>
            </div>

            <div className="pacbio-cta-action">
              <Button to="/contact" variant="primary" size="medium">
                Discuss your project
              </Button>
            </div>
          </div>
        </div>

        {/* SERVICE DETAILS MODAL */}

        {selectedService && (
          <div
            className="pacbio-detail-backdrop"
            onClick={closeDetails}
          >
            <div
              className="pacbio-detail-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="pacbio-detail-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="pacbio-detail-header">
                <div>
                  <span className="pacbio-section-label">
                    PACBIO VEGA
                  </span>

                  <h3 id="pacbio-detail-title">
                    {selectedService.title}
                  </h3>

                  <span className="pacbio-detail-category">
                    {selectedService.category}
                  </span>
                </div>

                <button
                  type="button"
                  className="pacbio-detail-close"
                  onClick={closeDetails}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>

              <div className="pacbio-detail-body">
                <div className="pacbio-detail-description">
                  <span>OVERVIEW</span>
                  <p>{selectedService.description}</p>
                </div>

                <div className="pacbio-detail-best">
                  <span>BEST SUITED FOR</span>
                  <p>{selectedService.bestFor}</p>
                </div>

                <div className="pacbio-detail-columns">
                  <div className="pacbio-detail-block">
                    <h4>Key specifications</h4>

                    <ul>
                      {selectedService.specifications.map(
                        (item) => (
                          <li key={item}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="pacbio-detail-block">
                    <h4>Deliverables</h4>

                    <ul>
                      {selectedService.deliverables.map(
                        (item) => (
                          <li key={item}>{item}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pacbio-detail-footer">
                <span>
                  Have a specific research requirement?
                </span>

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

export default PacBio;