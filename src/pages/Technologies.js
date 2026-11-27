import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Technologies.css";

import nova from "../../src/assets/novaseq.jpeg";
import miseq from "../../src/assets/miseq.jpg";
import iscan from "../../src/assets/iscan.jpg";
import pacbio from "../../src/assets/pacbio.jpg"
import promethion from "../../src/assets/promethion.jpg"
import onlink from "../../src/assets/onlink.jpg"
import TechBanner from "../components/Research/TechBanner";
import Button from "../components/Button";

const serviceMicroarray = {
  label: "Illumina Microarray (iScan)",
  text: "High-throughput, cost-effective genotyping on the complete Infinium BeadChip portfolio. Human: Infinium Global Diversity Array-8 (~1.8M markers, 4,800+ gene coverage), PRS-content, Carrier-Screening (602 genes) and Enhanced PGx versions, plus methylation arrays for EWAS. Agri: BovineSNP50 v3 (~54K SNPs), BovineHD (777,962 SNPs), GGP low-density panels, crop consortia arrays, and custom iSelect designs. Throughput up to 5,670 samples per week; call rate ≥ 98%; turnaround from 2–3 weeks.",
};

const serviceShortRead = {
  label: "Illumina NGS (NovaSeq X · MiSeq i100)",
  text: "Short-read sequencing at any scale: whole-genome and exome sequencing, resequencing, stranded RNA-Seq, genotyping-by-sequencing (GBS) for genomic selection, amplicon panels, targeted resequencing and 16S/ITS metagenomics. NovaSeq X delivers population-scale output; MiSeq i100 gives rapid, economical targeted runs for marker validation and diagnostics-style panels.",
};

const serviceLongRead = {
  label: "PacBio Long-Read (Vega) + ONT PromethION",
  text: "When short reads structurally cannot answer the question: telomere-to-telomere (T2T) gapless assemblies, pangenome and graph-genome construction, structural-variant discovery, full-length isoform sequencing (Iso-Seq / Kinnex), haplotype phasing, and native 5mC methylation without bisulfite conversion. Vega delivers ~60–90 Gb of HiFi reads per run with ≥ 15 kb read lengths.",
};

const platforms = [
  {
    image: nova,
    alt: "Illumina NovaSeq X sequencing lab",
    pill: "Short-Read Sequencing",
    label: "Population Scale",
    title: "Illumina NovaSeq X",
    text: "High-output population-scale short-read sequencing. Powers high-depth WGS, WES, stranded RNA-Seq, GBS, and Olink Explore HT proteomics readouts.",
    specs: "Paired-end 150 bp · High Q30 output · Multi-terabyte run capacity",
    service: serviceShortRead,
    route: "/illumina",
  },
  {
    image: miseq,
    alt: "Illumina MiSeq i100 targeted sequencing",
    pill: "Targeted & Diagnostics",
    label: "Rapid Turnaround",
    title: "Illumina MiSeq i100",
    text: "Economical, rapid targeted runs for marker validation, custom amplicon panels, 16S/ITS metagenomics, and diagnostics-style validation.",
    specs: "Fast run times · Target confirmation · Up to 384-plex amplicon pooling",
    service: {
      label: "Targeted & Diagnostics",
      text: "Illumina MiSeq i100 is an advanced DNA sequencing system that helps researchers read and study genetic information quickly and accurately. It is ideal for analysing genes, identifying microorganisms, and supporting research in genetics, healthcare, and life sciences.",
    },
  },
  {
    image: iscan,
    alt: "Illumina iScan microarray genotyping",
    pill: "High-Throughput Genotyping",
    label: "Up to 5,670 samples/wk",
    title: "Illumina Microarray (iScan)",
    text: "High-throughput genotyping on complete Infinium BeadChips: Human GDA-8 (~1.8M markers), Carrier-Screening (602 genes), BovineSNP50 v3, BovineHD 777k.",
    specs: "Throughput up to 5,670 samples/week · Call rate ≥ 98% · Turnaround 2–3 weeks",
    service: serviceMicroarray,
  },
  {
    image: pacbio,
    alt: "PacBio Vega HiFi long-read sequencing",
    pill: "HiFi Long-Read",
    label: "High-Accuracy HiFi",
    title: "PacBio Long-Read (Vega)",
    text: "Delivers ~60–90 Gb of HiFi reads per run with ≥ 15 kb read lengths at Q30+ accuracy. Ideal for structural variants, Iso-Seq, and haplotype phasing.",
    specs: "~60-90 Gb HiFi / run · ≥ 15 kb read length · Q30+ single-molecule accuracy",
    service: serviceLongRead,
    route: "/pacbio",
  },
  {
    image: promethion,
    alt: "ONT PromethION ultra-long read sequencing",
    pill: "Ultra-Long Read",
    label: "Gapless Assemblies",
    title: "ONT PromethION",
    text: "Ultra-long reads for telomere-to-telomere (T2T) gapless assemblies, pangenome graphs, and direct native 5mC methylation without bisulfite conversion.",
    specs: "Ultra-long reads (>100 kb) · Direct 5mC calling · Centromere / rDNA array resolution",
    service: {
      label: "Ultra-Long Read",
      text: "ONT PromethION is a high-throughput, nanopore-based sequencing platform by Oxford Nanopore Technologies, enabling real-time, long-read DNA and RNA sequencing. It supports advanced genomic research, whole-genome sequencing, transcriptomics, structural variant detection, and large-scale population genomics with high-throughput capabilities.",
    },
  },
  {
    image: onlink,
    alt: "Olink proteomics platform",
    pill: "Spatial & High-Plex Proteomics",
    label: "5,400+ Proteins",
    title: "Olink Proteomics Platform",
    text: "Proximity Extension Assay (PEA) proteomics spanning Targeted (48/96) to Explore HT (5,400+ proteins), read out on our own NovaSeq X system.",
    specs: "Explore HT up to 5,400+ proteins · ~1 µL sample input · Single-sample multi-layer integration",
    service: {
      label: "Spatial & High-Plex Proteomics",
      text: "Olink Proteomics Platform enables comprehensive protein profiling to uncover molecular insights into biological processes and disease mechanisms. Its advanced technology facilitates precise biomarker identification, protein expression analysis, and large-scale proteomic research, supporting discoveries in precision medicine and life sciences.",
    },
  },
];

const ownedRows = [
  {
    platform: "Illumina NovaSeq X",
    keySpec: "Population-scale output; dual flow cells up to ~16–21 Tb/run",
    answers: "WGS/WES, RNA-Seq, GBS, metagenomics at cohort scale",
  },
  {
    platform: "Illumina MiSeq i100",
    keySpec: "Rapid, economical targeted runs",
    answers: "Amplicon panels, marker validation, small genomes",
  },
  {
    platform: "Illumina iScan",
    keySpec: "Up to 5,670 samples/week; 1.25 min/sample scan",
    answers: "Human & agri BeadChip genotyping, methylation arrays",
  },
  {
    platform: "PacBio Vega",
    keySpec: "~60–90 Gb HiFi/run; reads ≥ 15 kb; native 5mC",
    answers: "T2T, structural variants, Iso-Seq/Kinnex full-length RNA",
  },
  {
    platform: "ONT PromethION",
    keySpec: "Ultra-long reads (N50 ≥ 100 kb); R10.4.1 Q20+ chemistry",
    answers: "Centromere-spanning reads, T2T & pangenome backbone",
  },
  {
    platform: "Olink (PEA)",
    keySpec: "Up to 5,400+ proteins from ~1 µL; dual-antibody specificity",
    answers: "Proteomics for multiomics, biomarker discovery & validation",
  },
];

const faqs = [
  {
    question: "Are all services performed in-house?",
    answer:
      "Yes. Every service runs entirely at the Greater Noida Genomics Campus, under one chain of custody and one QC framework, and ends in analysis-ready deliverables.",
  },
  {
    question: "What is the microarray turnaround time?",
    answer: "Illumina iScan microarray turnaround starts from 2–3 weeks.",
  },
  {
    question: "How many samples can you genotype per week?",
    answer:
      "Our iScan platform handles up to 5,670 samples per week with a call rate of ≥ 98%.",
  },
  {
    question: "Which arrays do you offer for livestock?",
    answer:
      "BovineSNP50 v3 (~54K SNPs), BovineHD (777,962 SNPs), GGP low-density panels, and custom iSelect designs.",
  },
  {
    question: "Long-read or short-read: which to choose?",
    answer:
      "Choose long reads when short reads structurally cannot answer the question: T2T gapless assemblies, pangenome and graph-genome construction, structural-variant discovery, Iso-Seq isoforms, haplotype phasing, and native 5mC methylation without bisulfite conversion.",
  },
  {
    question: "NovaSeq X vs MiSeq i100: key difference?",
    answer:
      "NovaSeq X delivers population-scale output for WGS, WES, and RNA-Seq. MiSeq i100 gives rapid, economical targeted runs for marker validation, amplicon panels, and diagnostics-style validation.",
  },
  {
    question: "What do you offer for proteomics?",
    answer:
      "Olink Proximity Extension Assay (PEA) proteomics, from Targeted (48/96) panels to Explore HT with 5,400+ proteins, read out on our own NovaSeq X system.",
  },
  {
    question: "Read lengths on Vega and PromethION?",
    answer:
      "PacBio Vega delivers ~60–90 Gb of HiFi reads per run with ≥ 15 kb read lengths at Q30+ accuracy. ONT PromethION delivers ultra-long reads with N50 ≥ 100 kb.",
  },
];

function Technologies() {
  const [openIndex, setOpenIndex] = useState(-1);

  function toggleFaq(index) {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  }

  const half = Math.ceil(faqs.length / 2);
  const firstColumn = faqs.slice(0, half);
  const secondColumn = faqs.slice(half);

  function renderFaq(faq, index) {
    const isOpen = openIndex === index;
    return (
      <div
        className={
          isOpen ? "tech-faq-item tech-faq-item-open" : "tech-faq-item"
        }
        key={faq.question}
      >
        <button
          type="button"
          className="tech-faq-button"
          aria-expanded={isOpen}
          aria-controls={"tech-faq-panel-" + index}
          onClick={function () {
            toggleFaq(index);
          }}
        >
          <span className="tech-faq-question">{faq.question}</span>
          <span
            className={
              isOpen ? "tech-faq-icon tech-faq-icon-open" : "tech-faq-icon"
            }
          >
            +
          </span>
        </button>
        <div
          id={"tech-faq-panel-" + index}
          className={
            isOpen
              ? "tech-faq-answer-wrap tech-faq-answer-wrap-open"
              : "tech-faq-answer-wrap"
          }
        >
          <p className="tech-faq-answer">{faq.answer}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="tech-page">
      <Helmet>
        <title>Research Technologies & Platform Fleet | Leads Genetics</title>
        <meta
          name="description"
          content="Explore state-of-the-art genomic sequencing technologies at Leads Genetics, including Illumina NovaSeq X, MiSeq i100, iScan Microarray, PacBio Vega HiFi long-read, ONT PromethION, and Olink Proteomics."
        />
        <link rel="canonical" href="https://www.leadsgenetics.com/technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Research Technologies & Platform Fleet | Leads Genetics" />
        <meta
          property="og:description"
          content="Explore state-of-the-art genomic sequencing technologies at Leads Genetics, including Illumina NovaSeq X, MiSeq i100, iScan, PacBio Vega, and ONT PromethION."
        />
        <meta property="og:url" content="https://www.leadsgenetics.com/technologies" />
        <meta property="og:site_name" content="LEADS Genetics" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Research Technologies & Platform Fleet | Leads Genetics" />
        <meta
          name="twitter:description"
          content="Explore advanced sequencing platforms and technology fleet at Leads Genetics."
        />
      </Helmet>

      <TechBanner/>
      <section className="tech-header">
        <div className="tech-container">
          <h1 className="section-heading tech-title">Platform Fleet Hub</h1>
          <p className="tech-subtitle">
            Complete multi-platform facility operating directly within the
            Greater Noida Genomics Campus.
          </p>
        </div>
      </section>

      <section className="tech-fleet">
        <div className="tech-container">
          <div className="tech-grid">
            {platforms.map(function (platform) {
              return (
                <article className="tech-flip" key={platform.title} tabIndex={0}>
                  <div className="tech-flip-inner">
                    <div className="tech-flip-front">
                      <div className="tech-card-image-wrap">
                        <img
                          src={platform.image}
                          alt={platform.alt}
                          className="tech-card-image"
                        />
                      </div>
                      <div className="tech-card-body">
                        <div className="tech-card-meta">
                          <span className="tech-card-pill">{platform.pill}</span>
                          <span className="tech-card-label">{platform.label}</span>
                        </div>
                        <h2 className="tech-card-title">{platform.title}</h2>
                        <p className="tech-card-text">{platform.text}</p>
                      </div>
                      <div className="tech-card-specs">
                        <span className="tech-card-specs-label">Specs:</span>{" "}
                        {platform.specs}
                      </div>
                    </div>

                    <div className="tech-flip-back">
                      <span className="tech-back-tag">Owned, not outsourced</span>
                      <h2 className="tech-back-title">{platform.title}</h2>
                      <span className="tech-back-label">
                        {platform.service.label}
                      </span>
                      <p className="tech-back-text">{platform.service.text}</p>
                      {platform.route && (
                        <div className="tech-back-action">
                          <Button
                            to={platform.route}
                            variant="primary"
                            size="small"
                          >
                            Know more services
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tech-owned">
        <div className="tech-container">
          <h2 className="section-heading tech-owned-title">
            Owned, not outsourced.
          </h2>
          <p className="tech-owned-intro">
            Six production platforms operated by our own team at the Greater
            Noida Genomics Campus — no outsourced hand-offs, no broken chain of
            custody.
          </p>

          <div className="tech-table-wrap">
            <table className="tech-table">
              <thead>
                <tr>
                  <th className="tech-table-head-cell">Platform</th>
                  <th className="tech-table-head-cell">Key spec</th>
                  <th className="tech-table-head-cell">What it answers</th>
                </tr>
              </thead>
              <tbody>
                {ownedRows.map(function (row) {
                  return (
                    <tr key={row.platform}>
                      <td className="tech-table-cell-name">{row.platform}</td>
                      <td className="tech-table-cell">{row.keySpec}</td>
                      <td className="tech-table-cell">{row.answers}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="tech-faq">
        <div className="tech-container">
          <h2 className="section-heading tech-faq-title">
            Frequently asked questions
          </h2>
          <div className="tech-faq-list">
            <div className="tech-faq-column">
              {firstColumn.map(function (faq, index) {
                return renderFaq(faq, index);
              })}
            </div>
            <div className="tech-faq-column">
              {secondColumn.map(function (faq, index) {
                return renderFaq(faq, index + firstColumn.length);
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Technologies;