
import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./GenoSer.css";

const platforms = [
  {
    id: "all",
    name: "All Services",
    subtitle: "Explore our complete genomics portfolio",
    count: 13,
  },
  {
    id: "illumina",
    name: "Illumina NGS",
    subtitle: "Short-read sequencing",
    count: 7,
  },
  {
    id: "pacbio",
    name: "PacBio Vega",
    subtitle: "Long-read sequencing",
    count: 6,
  },
];

const services = [
  {
    id: 1,
    platform: "illumina",
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
    platform: "illumina",
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
    platform: "illumina",
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
    platform: "illumina",
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
    platform: "illumina",
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
    platform: "illumina",
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
    platform: "illumina",
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
  {
    id: 8,
    platform: "pacbio",
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
    id: 9,
    platform: "pacbio",
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
    id: 10,
    platform: "pacbio",
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
    id: 11,
    platform: "pacbio",
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
    id: 12,
    platform: "pacbio",
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
    id: 13,
    platform: "pacbio",
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

function GenoSer() {
  const [activePlatform, setActivePlatform] = useState("all");
  const [activeService, setActiveService] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesPlatform =
        activePlatform === "all" ||
        service.platform === activePlatform;

      const searchContent = [
        service.title,
        service.category,
        service.description,
        service.bestFor,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchContent.includes(
        searchTerm.toLowerCase().trim()
      );

      return matchesPlatform && matchesSearch;
    });
  }, [activePlatform, searchTerm]);

  const selectedService = services.find(
    (service) => service.id === activeService
  );

  const selectPlatform = (platform) => {
    setActivePlatform(platform);
    setActiveService(null);
  };

  const selectService = (serviceId) => {
    setActiveService((current) =>
      current === serviceId ? null : serviceId
    );
  };

  const closeDetails = () => setActiveService(null);

  return (
    <section className="genoser-section">
      <div className="genoser-container">

        <div className="genoser-heading">
          <div className="genoser-eyebrow">
            <span className="genoser-eyebrow-line"></span>
            OUR CAPABILITIES
          </div>

          <h2 className="section-heading">Genomics Services</h2>

          <p className="page-text">
            Explore sequencing, assembly, genotyping, and metagenomics
            workflows designed around different research requirements.
          </p>
        </div>

        <div className="genoser-platform-heading">
          <div>
            <span className="genoser-section-label">
              TECHNOLOGY PLATFORMS
            </span>
            <h3>Explore our sequencing platforms</h3>
          </div>
          <span className="genoser-platform-note">
            Two technologies. Multiple possibilities.
          </span>
        </div>

        <div className="genoser-platform-grid">
          <button
            type="button"
            className={`genoser-platform-card genoser-illumina ${
              activePlatform === "illumina" ? "active" : ""
            }`}
            onClick={() => selectPlatform("illumina")}
          >
            <div className="genoser-platform-copy">
              <span className="genoser-platform-tag">
                SHORT-READ SEQUENCING
              </span>
              <h3>Illumina NGS</h3>
              <p>
                High-throughput sequencing for precise and scalable
                genomic analysis.
              </p>
              <span className="genoser-platform-action">
                Explore 7 services <span>↗</span>
              </span>
            </div>

            <div className="genoser-platform-art genoser-illumina-art">
              <div className="genoser-art-ring"></div>
              <div className="genoser-art-ring ring-two"></div>
              <div className="genoser-art-core"></div>
              <span className="genoser-art-label">NGS</span>
            </div>
          </button>

          <button
            type="button"
            className={`genoser-platform-card genoser-pacbio ${
              activePlatform === "pacbio" ? "active" : ""
            }`}
            onClick={() => selectPlatform("pacbio")}
          >
            <div className="genoser-platform-copy">
              <span className="genoser-platform-tag">
                LONG-READ SEQUENCING
              </span>
              <h3>PacBio Vega</h3>
              <p>
                Long-read sequencing for complex genomes and
                comprehensive genomic insights.
              </p>
              <span className="genoser-platform-action">
                Explore 6 services <span>↗</span>
              </span>
            </div>

            <div className="genoser-platform-art genoser-pacbio-art">
              <div className="genoser-wave wave-one"></div>
              <div className="genoser-wave wave-two"></div>
              <div className="genoser-wave wave-three"></div>
              <span className="genoser-art-label">HiFi</span>
            </div>
          </button>
        </div>

        <div className="genoser-explorer" id="genoser-explorer">
          <div className="genoser-explorer-heading">
            <div>
              <span className="genoser-section-label">
                SERVICE CATALOG
              </span>
              <h3>Explore our services</h3>
              <p>
                Find the right sequencing approach for your research.
              </p>
            </div>

            <div className="genoser-service-count">
              <strong>{filteredServices.length}</strong>
              <span>Services available</span>
            </div>
          </div>

          <div className="genoser-toolbar">
            <div className="genoser-filters">
              {platforms.map((platform) => (
                <button
                  type="button"
                  key={platform.id}
                  className={`genoser-filter ${
                    activePlatform === platform.id ? "active" : ""
                  }`}
                  onClick={() => selectPlatform(platform.id)}
                >
                  {platform.name}
                  <span>{platform.count}</span>
                </button>
              ))}
            </div>

            <div className="genoser-search">
              <span className="genoser-search-icon">⌕</span>
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search services..."
                aria-label="Search genomics services"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          <div className="genoser-content">
            <motion.div
              className="genoser-service-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${activePlatform}-${searchTerm}`}
            >
              {filteredServices.map((service) => (
                <motion.button
                  type="button"
                  variants={cardVariants}
                  key={service.id}
                  className={`genoser-service-card ${
                    activeService === service.id ? "selected" : ""
                  }`}
                  onClick={() => selectService(service.id)}
                >
                  <div className="genoser-card-top">
                    <span
                      className={`genoser-card-dot ${service.platform}`}
                    ></span>
                    <span className="genoser-card-category">
                      {service.category}
                    </span>
                    <span className="genoser-card-arrow">↗</span>
                  </div>

                  <div className="genoser-card-visual">
                    <div className="genoser-visual-circle circle-one"></div>
                    <div className="genoser-visual-circle circle-two"></div>
                    <div className="genoser-visual-line"></div>
                    <div className="genoser-visual-node"></div>
                    <span className="genoser-visual-caption">
                      {service.platform === "illumina" ? "DNA" : "HiFi"}
                    </span>
                  </div>

                  <div className="genoser-card-bottom">
                    <span className="genoser-card-platform">
                      {service.platform === "illumina"
                        ? "ILLUMINA NGS"
                        : "PACBIO VEGA"}
                    </span>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <span className="genoser-card-link">
                      Explore service <span>→</span>
                    </span>
                  </div>
                </motion.button>
              ))}
            </motion.div>

            {filteredServices.length === 0 && (
              <div className="genoser-empty">
                <span>⌕</span>
                <h4>No matching services found</h4>
                <p>Try another search term or select a different platform.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setActivePlatform("all");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              className="genoser-detail-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDetails}
            >
              <motion.div
                className="genoser-detail-panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby="genoser-detail-title"
                initial={{ opacity: 0, y: 35, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="genoser-detail-header">
                  <div>
                    <span className="genoser-section-label">
                      {selectedService.platform === "illumina"
                        ? "ILLUMINA NGS"
                        : "PACBIO VEGA"}
                    </span>
                    <h3 id="genoser-detail-title">
                      {selectedService.title}
                    </h3>
                    <span className="genoser-detail-category">
                      {selectedService.category}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="genoser-detail-close"
                    onClick={closeDetails}
                    aria-label="Close details"
                  >
                    ×
                  </button>
                </div>

                <div className="genoser-detail-body">
                  <div className="genoser-detail-description">
                    <span>OVERVIEW</span>
                    <p>{selectedService.description}</p>
                  </div>

                  <div className="genoser-detail-best">
                    <span>BEST SUITED FOR</span>
                    <p>{selectedService.bestFor}</p>
                  </div>

                  <div className="genoser-detail-columns">
                    <div className="genoser-detail-block">
                      <h4>Key specifications</h4>
                      <ul>
                        {selectedService.specifications.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="genoser-detail-block">
                      <h4>Deliverables</h4>
                      <ul>
                        {selectedService.deliverables.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="genoser-detail-footer">
                  <span>Have a specific research requirement?</span>
                  <a href="/contact">Discuss your project <span>↗</span></a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default GenoSer;
