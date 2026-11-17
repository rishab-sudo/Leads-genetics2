import React from "react";
import "./Epigenomics.css";

import AnalysisPipeline from "../../components/Research/AnalysisPipeline";
import EpigenomicsBanner from "../../components/Research/EpigenomicsBanner";

import epi1Image from "../../assets/epi1.jpg";

const pageData = {
  title: "Epigenomics",
  summary:
    "Explore the molecular mechanisms that regulate gene expression through DNA methylation, chromatin accessibility, histone modifications, and transcriptional regulation.",

  overview: {
    eyebrow: "EPIGENETIC RESEARCH",
    title: "Epigenomics and Methylation Studies",
    intro:
      "Epigenetic regulation plays a fundamental role in phenotypic plasticity, developmental programming, and heritable traits in both livestock and crop species. Leads Genetics offers comprehensive epigenomic profiling services at single-nucleotide to genome-wide resolution.",

    capabilities: [
      {
        number: "01",
        title: "Whole Genome Bisulfite Sequencing",
        abbreviation: "WGBS",
        description:
          "Single-base resolution DNA methylation mapping across CpG, CHG, and CHH contexts.",
        category: "METHYLATION MAPPING",
        icon: "dna",
      },
      {
        number: "02",
        title: "Reduced Representation Bisulfite Sequencing",
        abbreviation: "RRBS",
        description:
          "Cost-effective CpG island and promoter methylation analysis for targeted epigenetic profiling.",
        category: "TARGETED PROFILING",
        icon: "target",
      },
      {
        number: "03",
        title: "Chromatin Immunoprecipitation Sequencing",
        abbreviation: "ChIP-Seq",
        description:
          "Histone modification profiling and transcription factor occupancy mapping.",
        category: "HISTONE PROFILING",
        icon: "chromatin",
      },
      {
        number: "04",
        title: "Chromatin Accessibility Analysis",
        abbreviation: "ATAC-Seq",
        description:
          "Genome-wide chromatin accessibility profiling and regulatory element identification.",
        category: "CHROMATIN ACCESSIBILITY",
        icon: "activity",
      },
      {
        number: "05",
        title: "Differential Methylation Analysis",
        abbreviation: "DMR",
        description:
          "Identification of differentially methylated regions and correlation with transcript-level expression data.",
        category: "DATA INTEGRATION",
        icon: "analysis",
      },
      {
        number: "06",
        title: "Imprinting & Epigenetic Inheritance",
        abbreviation: "INHERITANCE",
        description:
          "Parent-of-origin analysis, imprinting studies, and transgenerational epigenetic inheritance research.",
        category: "INHERITANCE STUDIES",
        icon: "inheritance",
      },
    ],
  },

  cards: [
    {
      platform: "Illumina NGS — DNA Applications",
      title: "Epigenomics — WGBS & RRBS",
      whatItIs:
        "Bisulfite sequencing for DNA methylation: whole-genome single-base resolution (WGBS) or cost-effective CpG-island/promoter focus (RRBS).",
      bestFor:
        "Methylation–trait association, developmental programming, imprinting, transgenerational epigenetics in plants and animals.",
      keySpecs:
        "NovaSeq X; ≥ 30× WGBS / ≥ 50× RRBS recommended; bisulfite conversion ≥ 99% QC.",
      deliverables:
        "CpG/CHG/CHH methylation matrices · DMR calls · genome-browser tracks (bigWig) · integration-ready tables.",
    },
    {
      platform: "Illumina NGS — DNA Applications",
      title: "Epigenomics — ChIP-Seq & ATAC-Seq",
      whatItIs:
        "ChIP-Seq maps histone marks and transcription-factor binding; ATAC-Seq profiles open chromatin and regulatory elements.",
      bestFor:
        "Regulatory-element discovery, enhancer mapping, mechanism-of-action studies.",
      keySpecs:
        "NovaSeq X; ≥ 20M (ATAC) / ≥ 30M (ChIP) reads per sample; spike-in controls available.",
      deliverables:
        "Peak calls (MACS2-class) · motif enrichment · bigWig tracks · FRiP/QC metrics.",
    },
    {
      platform: "PacBio Long-Read (Vega) — DNA Applications",
      title: "Native Methylation Detection (5mC)",
      whatItIs:
        "Direct methylation calling from the sequencing signal itself — no bisulfite conversion required.",
      bestFor:
        "Imprinting and epiallele studies, and methylation profiling within suitable long-read sequencing projects.",
      keySpecs:
        "Platform-dependent native methylation detection; CpG-context calls where supported.",
      deliverables:
        "5mC bigWig tracks · region-level methylation summaries · DMR support.",
    },
  ],
};

function CapabilityIcon({ type }) {
  const paths = {
    dna: (
      <>
        <path d="M7 3c0 4 10 6 10 10s-4 8-4 8" />
        <path d="M17 3c0 4-10 6-10 10s4 8 4 8" />
        <path d="M8 6h8M7 12h10M8 18h8" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    chromatin: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
        <circle cx="7" cy="7" r="2" />
        <circle cx="15" cy="12" r="2" />
        <circle cx="10" cy="17" r="2" />
      </>
    ),
    activity: <path d="M3 12h4l3-7 4 14 3-7h4" />,
    analysis: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-4 3 2 5-6" />
      </>
    ),
    inheritance: (
      <>
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <path d="M12 7.5v4M12 11.5l-6 4M12 11.5l6 4" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type] || paths.dna}
    </svg>
  );
}

function Epigenomics() {
  const renderCard = (card, index) => (
    <article className="epi-service-card" key={card.title}>
      <div className="epi-service-card-top">
        <div className="epi-service-card-heading">
          <span className="epi-service-platform">
            <span className="epi-platform-dot" />
            {card.platform}
          </span>

          <h3>{card.title}</h3>
          <span className="epi-service-accent" />
        </div>

        <span className="epi-service-index">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="epi-service-details">
        <div className="epi-detail">
          <h4>What it is</h4>
          <p>{card.whatItIs}</p>
        </div>

        <div className="epi-detail">
          <h4>Research applications</h4>
          <p>{card.bestFor}</p>
        </div>

        <div className="epi-detail">
          <h4>Key specifications</h4>
          <p>{card.keySpecs}</p>
        </div>

        <div className="epi-detail">
          <h4>Deliverables</h4>
          <p>{card.deliverables}</p>
        </div>
      </div>
    </article>
  );

  return (
    <>
      <EpigenomicsBanner />

      <main className="epi-page">
        <div className="epi-container">

          {/* PAGE INTRODUCTION */}

          <header className="epi-header">
            <span className="epi-eyebrow">
              RESEARCH GENOMICS / EPIGENOMICS
            </span>

            <h1 className="epi-main-title">
              {pageData.title}
            </h1>

            <p className="page-text">
              {pageData.summary}
            </p>
          </header>

          {/* OVERVIEW */}

          <section
            className="epi-overview-section"
            aria-label="Epigenomics and methylation studies"
          >
            <div className="epi-overview-heading">
              <span className="epi-eyebrow">
                {pageData.overview.eyebrow}
              </span>

              <h2 className="section-heading">
                {pageData.overview.title}
              </h2>

              <p className="page-text">
                {pageData.overview.intro}
              </p>
            </div>

            {/* CAPABILITY BENTO GRID */}

            <div className="epi-capability-grid">
              {pageData.overview.capabilities.map((item) => (
                <article
                  className="epi-capability-card"
                  key={item.number}
                >
                  <div className="epi-capability-top">
                    <span className="epi-capability-icon">
                      <CapabilityIcon type={item.icon} />
                    </span>

                    <span className="epi-capability-number">
                      {item.number}
                    </span>
                  </div>

                  <div className="epi-capability-content">
                    <span className="epi-capability-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>
                  </div>

                  <div className="epi-capability-footer">
                    <span>{item.abbreviation}</span>
                    <span className="epi-capability-arrow">
                      ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* EPI 1 VISUAL — below capability grid, borderless */}

            <figure className="epi-overview-visual">
              <img
                src={epi1Image}
                alt="Epigenomic DNA methylation sequencing workflow"
                loading="lazy"
              />
              <figcaption>
                <span>DNA METHYLATION AND EPIGENETIC PROFILING</span>
              </figcaption>
            </figure>
          </section>

          {/* ANALYSIS PIPELINE */}

          <section
            className="epi-pipeline-section"
            aria-label="Epigenomics analysis pipeline"
          >
            <div className="epi-pipeline-card">

              {/* Original component heading retained only once */}

              <div className="epi-pipeline-content">
                <AnalysisPipeline />
              </div>
              </div>
              </section>
          {/* SERVICES */}

          <section
            className="epi-services-section"
            aria-label="Epigenomics services"
          >
            <div className="epi-services-header">
              <div>
                <span className="epi-eyebrow">
                  OUR CAPABILITIES
                </span>

                <h2 className="section-heading">
                  Epigenomics Services
                </h2>

                <p className="page-text">
                  Explore our methylation profiling, chromatin analysis,
                  and native methylation detection solutions.
                </p>
              </div>

              <span className="epi-services-count">
                {String(pageData.cards.length).padStart(2, "0")} SERVICES
              </span>
            </div>

            <div className="epi-service-list">
              {pageData.cards.map(renderCard)}
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

export default Epigenomics;