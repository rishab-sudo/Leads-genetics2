import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Button";
import "./Transcriptomics.css";
import tsqImage from "../../assets/tsq.jpg";
import tsq2Image from "../../assets/tsq2.png";
import small from "../../assets/Servicsimg/small.png"
import brn from "../../assets/Servicsimg/Brn.png"
import poly from "../../assets/Servicsimg/poly.png"
import trn from "../../assets/Servicsimg/trn.png"
import kinn from "../../assets/Servicsimg/kinn.png"
import single from "../../assets/Servicsimg/rna.jpg";
import isoform from "../../assets/Servicsimg/isoform.png"
import kin from "../../assets/Servicsimg/kin.png"
import iso from "../../assets/Servicsimg/iso.png"
import alt2 from  "../../assets/Servicsimg/altsplice.jpg"
import ServiceBanner from "../../components/Research/ServiceBanner";


const pageData = {
  title: "Transcriptomics",
  summary:
    "Gene expression profiling, splicing and isoform analysis, full-length transcriptomics, and single-cell RNA sequencing.",
  platformNotes: [
    "Illumina NGS — RNA Applications: Every transcript. Every condition. Quantified.",
    "PacBio Long-Read (Vega) — RNA Applications: Full-length transcripts. No assembly. No guesswork.",
    "Input requirement for PacBio RNA applications: total RNA, RIN ≥ 8.0.",
  ],
  whatIs: {
    title: "What Is Transcriptome?",
    text:
      "The transcriptome is the complete set of RNA molecules expressed in a cell, tissue, or organism under specific conditions. It includes mRNA, rRNA, tRNA, and other non-coding RNAs involved in gene regulation and cellular processes. Transcriptomics is the high-throughput study of gene expression that helps researchers understand gene activity, transcript abundance, alternative splicing, RNA editing, and expression variations. It is widely used in developmental biology, disease research, biomarker discovery, functional genomics, and cellular differentiation studies.",
    imageAlt: "Overview of the transcriptome and RNA types within a cell",
    imageCaption:
      "Fig 1: The transcriptome includes mRNA, rRNA, tRNA, and non-coding RNAs expressed under specific conditions.",
  },
  procedure: {
    title: "Transcriptomics Study Procedures",
    text:
      "Transcriptomics studies begin with RNA extraction and quality assessment, followed by library preparation through poly-A selection or rRNA depletion, RNA fragmentation, cDNA synthesis, adapter ligation, and amplification. Prepared libraries are sequenced using platforms such as Illumina or PacBio SMRT, depending on the research requirements. Illumina supports high-throughput expression analysis, while PacBio enables full-length transcript and isoform characterization. The final bioinformatics workflow includes quality filtering, alignment or de novo assembly, transcript quantification, differential expression analysis, and functional annotation to identify meaningful biological insights.",
    imageAlt: "Transcriptomics workflow from RNA extraction to bioinformatics analysis",
    imageCaption:
      "Fig 2: Transcriptomics workflow from RNA extraction and library preparation to sequencing and bioinformatics analysis.",
  },
  servicesTitle: "Explore Our Transcriptomics Services",
  overviews: [
    {
      title: "Transcriptomics: RNA-Seq and mRNA-Seq",
      intro:
        "Transcriptomic profiling delivers genome-wide, quantitative insights into gene expression dynamics across tissues, breeds, developmental stages, and experimental conditions. Leads Genetics provides the full spectrum of transcriptomics services, from standard differential expression analysis through advanced single-cell approaches.",
      bullets: [
        "Bulk RNA-Seq for differential expression analysis across tissues, developmental stages, breeds, and treatment conditions",
        "mRNA-Seq with poly-A enrichment for focused coding transcriptome analysis with enhanced signal-to-noise",
        "Strand-specific library construction for antisense RNA characterization and lncRNA identification",
        "Differential expression analysis using DESeq2, edgeR, and limma-voom with multiple testing corrections",
        "Gene Ontology (GO), KEGG, and Reactome pathway enrichment; Gene Set Enrichment Analysis (GSEA)",
        "Alternative splicing analysis and isoform quantification using rMATS, STAR-Fusion, and Salmon",
        "Co-expression network analysis (WGCNA) for gene module identification and hub gene discovery",
        "Single-cell RNA-Seq (scRNA-Seq) including cell clustering, marker identification, and trajectory analysis",
      ],
    },
  ],
  groups: [
    {
      name: "Expression Profiling",
      overviews: [],
      cards: [
        {
          code: "B1",
          platform: "Illumina NGS — RNA Applications",
          title: "Bulk RNA-Seq (Differential Expression)",
          image: brn,
          imageAlt: "Bulk RNA-Seq differential expression workflow",
          whatItIs:
            "Genome-wide quantitative expression profiling across tissues, breeds, developmental stages and treatments — the workhorse of functional genomics.",
          bestFor: "Differential expression, biomarker screening, pathway analysis in any species.",
          keySpecs:
            "Stranded libraries, NovaSeq X; 20–30M reads/sample (standard) up to 100M+ (deep); poly-A enrichment or rRNA depletion.",
          deliverables:
            "Gene-count matrices · DESeq2/edgeR differential-expression tables · GO/KEGG/Reactome enrichment + GSEA · publication-ready figures.",
        },
        {
          code: "B2",
          platform: "Illumina NGS — RNA Applications",
          title: "mRNA-Seq (Poly-A Selected)",
          image: poly,
          imageAlt: "Poly-A selected mRNA-Seq library preparation",
          whatItIs: "Focused coding-transcriptome profiling with enhanced signal-to-noise for eukaryotic samples.",
          bestFor: "Budget-efficient expression studies where coding genes are the target.",
          keySpecs: "Poly-A capture; NovaSeq X; 15–25M reads/sample.",
          deliverables: "Count matrices · differential expression · enrichment reports.",
        },
        {
          code: "B3",
          platform: "Illumina NGS — RNA Applications",
          title: "Total RNA-Seq (rRNA-Depleted) & lncRNA",
          image: trn,
          imageAlt: "Total RNA-Seq with rRNA depletion for lncRNA analysis",
          whatItIs:
            "Whole-transcriptome sequencing retaining non-coding and partially degraded RNA — long non-coding RNAs included.",
          bestFor: "lncRNA discovery, antisense transcription, degraded-input studies.",
          keySpecs: "rRNA-depleted stranded libraries; NovaSeq X; 30–50M reads/sample.",
          deliverables: "Coding + non-coding quantification · novel lncRNA catalogue · strand-specific tracks.",
        },
        {
          code: "B4",
          platform: "Illumina NGS — RNA Applications",
          title: "Small RNA / miRNA-Seq",
          image: small,
          imageAlt: "Small RNA and miRNA sequencing",
          whatItIs: "Sequencing of small RNA species (miRNA, siRNA, piRNA) for regulatory-RNA biology.",
          bestFor:
            "miRNA discovery & quantification, stress-response regulation in plants and livestock, biomarker research.",
          keySpecs: "Size-selected small-RNA libraries; NovaSeq X; 10–20M reads/sample.",
          deliverables: "Known + novel miRNA calls · differential abundance · target prediction reports.",
        },
      ],
    },
    {
      name: "Splicing & Isoforms",
      overviews: [],
      cards: [
        {
          code: "B6",
          platform: "Illumina NGS — RNA Applications",
          title: "Alternative Splicing & Fusion Analysis",
          image: alt2,
          imageFit: "cover",
          imageAlt: "Alternative splicing events and fusion analysis",
          whatItIs:
            "Dedicated analysis layer on RNA-Seq data: isoform switching, splice events and gene-fusion detection.",
          bestFor: "Splice-variant biology, fusion-driven disease research, isoform-level trait studies.",
          keySpecs: "Recommended ≥ 50M reads/sample for robust splicing calls.",
          deliverables: "rMATS event tables · STAR-Fusion-class fusion calls · Salmon isoform quantification.",
        },
        {
          code: "D1",
          platform: "PacBio Long-Read (Vega) — RNA Applications",
          title: "Iso-Seq — Full-Length Transcriptome",
          image: iso,
          imageAlt: "PacBio Iso-Seq full-length transcript sequencing",
          whatItIs:
            "Single-molecule sequencing of intact cDNA molecules end-to-end — isoforms resolved without computational assembly.",
          bestFor: "Genome annotation evidence, isoform discovery, splice-variant biology, fusion detection in any species.",
          keySpecs: "Vega HiFi; library per Kinnex/Iso-Seq workflow; multi-tissue pooling strategies available.",
          deliverables:
            "High-quality full-length isoform catalogue (SQANTI3-classified) · novel gene/isoform discovery · annotation-ready GFF3.",
        },
        {
          code: "D2",
          platform: "PacBio Long-Read (Vega) — RNA Applications",
          title: "Kinnex Full-Length RNA (Quantitative Isoforms)",
          image: kinn,
          imageAlt: "Kinnex full-length RNA MAS-Seq concatenation workflow",
          whatItIs:
            "MAS-Seq concatenation for high-throughput full-length isoform sequencing — discovery AND quantification in one run.",
          bestFor:
            "Isoform-level differential expression, biomarker quantification, disease-relevant splice signatures.",
          keySpecs:
            "Kinnex full-length RNA kit on Vega; up to ~10 kb transcripts without length skew; spike-in (SIRV/ERCC) quantification controls available.",
          deliverables:
            "Isoform count matrices · differential-isoform reports · full-length tracks · quantification concordance vs. short-read RNA-Seq.",
        },
        {
          code: "D4",
          platform: "PacBio Long-Read (Vega) — RNA Applications",
          title: "Fusion & Allele-Specific Isoform Analysis",
          image: isoform,
          imageAlt: "Fusion transcripts and allele-specific isoform analysis",
          whatItIs:
            "Dedicated long-read analysis layer: gene fusions, allele-specific isoform expression, and imprinting at transcript level.",
          bestFor: "Fusion-driven disease research; parent-of-origin expression studies in breeding programs.",
          keySpecs: "Runs on Iso-Seq/Kinnex data; phased HiFi genome recommended for allele-specific work.",
          deliverables: "Fusion transcripts with full-length breakpoints · ASE tables · imprinted-isoform reports.",
        },
      ],
    },
    {
      name: "Single-Cell",
      overviews: [],
      cards: [
        {
          code: "B5",
          platform: "Illumina NGS — RNA Applications",
          title: "Single-Cell & Single-Nucleus RNA-Seq",
          image: single,
          imageFit: "cover",
          imageAlt: "Single-cell and single-nucleus RNA-Seq workflow",
          whatItIs:
            "Cell-by-cell expression profiling of complex tissues — resolving cell types, states and trajectories.",
          bestFor: "Immune profiling, tissue atlases, developmental biology, tumour micro-environment research.",
          keySpecs: "10x-class library prep on NovaSeq X; 3′ gene-expression (5′, VDJ and multiome options by agreement).",
          deliverables: "Cell-cluster maps (UMAP) · marker-gene tables · trajectory/pseudotime analysis · Seurat-ready objects.",
        },
        {
          code: "D3",
          platform: "PacBio Long-Read (Vega) — RNA Applications",
          title: "Kinnex Single-Cell RNA (Full-Length)",
          image: kin,
          imageAlt: "Kinnex single-cell full-length RNA workflow",
          whatItIs: "Full-length isoform resolution at single-cell resolution — cell-type-specific splicing made visible.",
          bestFor: "Cell-type isoform maps, immune-repertoire context, tumour heterogeneity research.",
          keySpecs:
            "Kinnex single-cell workflow on Vega; pairs with Illumina short-read scRNA-Seq (B5) for depth + completeness.",
          deliverables:
            "Per-cell full-length isoform matrices · cell-type-specific isoform usage reports · integrated short/long-read objects.",
        },
      ],
    },
  ],
};

const faqs = [
  {
    question: "What is the difference between RNA-Seq and mRNA-Seq?",
    answer:
      "Bulk RNA-Seq profiles gene expression across the transcriptome and can use poly-A enrichment or rRNA depletion. mRNA-Seq specifically uses poly-A capture to focus on coding transcripts with enhanced signal-to-noise, which makes it a budget-efficient choice when coding genes are the target.",
  },
  {
    question: "Which transcriptomics services do you offer?",
    answer:
      "We offer Bulk RNA-Seq, mRNA-Seq, Total RNA-Seq and lncRNA, Small RNA / miRNA-Seq, Alternative Splicing and Fusion Analysis, single-cell and single-nucleus RNA-Seq on Illumina, and PacBio Iso-Seq, Kinnex Full-Length RNA, Kinnex Single-Cell RNA and long-read fusion and allele-specific isoform analysis.",
  },
  {
    question: "When should I choose PacBio Iso-Seq over Illumina RNA-Seq?",
    answer:
      "Choose PacBio when you need full-length isoforms resolved without computational assembly, such as isoform discovery, genome annotation evidence or fusion detection. Illumina RNA-Seq is the better fit for quantitative expression profiling across many samples.",
  },
  {
    question: "What RNA input and quality do I need?",
    answer:
      "PacBio RNA applications require total RNA with RIN of 8.0 or higher. Illumina total RNA-Seq with rRNA depletion can retain non-coding and partially degraded RNA, so it suits degraded-input studies. Our team will review your sample details before the project starts.",
  },
  {
    question: "How many reads per sample do I need?",
    answer:
      "It depends on the service. Bulk RNA-Seq typically uses 20–30M reads per sample, going up to 100M+ for deep sequencing. mRNA-Seq uses 15–25M, total RNA-Seq 30–50M, and alternative splicing analysis is recommended at 50M or more reads per sample.",
  },
  {
    question: "What data will I receive after sequencing?",
    answer:
      "Deliverables depend on the service. Projects can include gene-count matrices, differential-expression tables, GO, KEGG and Reactome enrichment results, isoform catalogues, cell-cluster maps and publication-ready figures, along with an analysis report.",
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

function Transcriptomics() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeCardCode, setActiveCardCode] = useState(null);
  const [activeFaq, setActiveFaq] = useState(-1);

  const activeGroup = pageData.groups[activeGroupIndex];

  const totalServices = pageData.groups.reduce(
    (total, group) => total + group.cards.length,
    0
  );

  let selectedCard = null;
  let selectedGroupName = "";
  pageData.groups.forEach((group) => {
    group.cards.forEach((card) => {
      if (card.code === activeCardCode) {
        selectedCard = card;
        selectedGroupName = group.name;
      }
    });
  });

  const closeDetails = () => {
    setActiveCardCode(null);
  };

  const toggleFaq = (index) => {
    setActiveFaq((current) => (current === index ? -1 : index));
  };

  useEffect(() => {
    if (activeCardCode === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveCardCode(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCardCode]);

  const half = Math.ceil(faqs.length / 2);
  const firstColumn = faqs.slice(0, half);
  const secondColumn = faqs.slice(half);

  const renderOverview = (overview) => {
    return (
      <div className="tra-overview" key={overview.title}>
        <h3 className="section-heading">{overview.title}</h3>
        {overview.intro ? <p className="page-text">{overview.intro}</p> : null}
        {overview.bullets.length > 0 ? (
          <ul className="tra-bullet-list">
            {overview.bullets.map((bullet, bulletIndex) => (
              <li className="tra-bullet-item" key={bulletIndex}>
                <p className="page-text">{bullet}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };

  const renderCard = (card) => {
    return (
      <button
        type="button"
        key={card.code}
        className="tra-service-card"
        onClick={() => setActiveCardCode(card.code)}
      >
        <div className="tra-card-top">
          <span className="tra-card-dot"></span>
          <span className="tra-card-category">{activeGroup.name}</span>
          <span className="tra-card-arrow">↗</span>
        </div>

        <div
          className={
            card.image
              ? card.imageFit === "cover"
                ? "tra-card-visual tra-card-visual-has-image tra-card-visual-cover"
                : "tra-card-visual tra-card-visual-has-image"
              : "tra-card-visual"
          }
        >
          {card.image ? (
            <img
              className="tra-card-image"
              src={card.image}
              alt={card.imageAlt ? card.imageAlt : card.title}
              loading="lazy"
            />
          ) : (
            <span className="tra-card-visual-code">{card.code}</span>
          )}
        </div>

        <div className="tra-card-bottom">
          <span className="tra-card-platform">{card.platform}</span>
          <h4>{card.title}</h4>
          <p>{card.whatItIs}</p>
          <span className="tra-card-link">
            Explore service <span>→</span>
          </span>
        </div>
      </button>
    );
  };

  const renderFaq = (faq, index) => {
    const isOpen = activeFaq === index;

    return (
      <div
        key={faq.question}
        className={
          isOpen ? "tra-faq-item tra-faq-open" : "tra-faq-item"
        }
      >
        <h4 className="tra-faq-question-wrap">
          <button
            type="button"
            className="tra-faq-question"
            onClick={() => toggleFaq(index)}
            aria-expanded={isOpen}
            aria-controls={`tra-faq-answer-${index}`}
            id={`tra-faq-question-${index}`}
          >
            <span>{faq.question}</span>
            <span className="tra-faq-icon">+</span>
          </button>
        </h4>

        <div
          className="tra-faq-answer"
          id={`tra-faq-answer-${index}`}
          role="region"
          aria-labelledby={`tra-faq-question-${index}`}
        >
          <p>{faq.answer}</p>
        </div>
      </div>
    );
  };

  return (
    <>

    <ServiceBanner
  title={"Transcriptomics:\nRNA Sequencing"}
  description="Every transcript. Every condition. Quantified."
/>
 

      <div className="tra-page">
        <Helmet>
          <title>Transcriptomics & RNA Sequencing Services | Leads Genetics</title>
          <meta
            name="description"
            content="Comprehensive transcriptomics and RNA sequencing services at Leads Genetics: bulk RNA-Seq, mRNA-Seq, PacBio Iso-Seq full-length isoform sequencing, and single-cell RNA-Seq."
          />
          <link rel="canonical" href="https://www.leadsgenetics.com/transcriptomics" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Transcriptomics & RNA Sequencing Services | Leads Genetics" />
          <meta
            property="og:description"
            content="Comprehensive transcriptomics and RNA sequencing services at Leads Genetics: bulk RNA-Seq, mRNA-Seq, PacBio Iso-Seq, and single-cell RNA-Seq."
          />
          <meta property="og:url" content="https://www.leadsgenetics.com/transcriptomics" />
          <meta property="og:site_name" content="LEADS Genetics" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Transcriptomics & RNA Sequencing Services | Leads Genetics" />
          <meta
            name="twitter:description"
            content="Explore RNA sequencing and transcriptomics services at Leads Genetics."
          />
          <script type="application/ld+json">
            {JSON.stringify(faqsSchema)}
          </script>
        </Helmet>

        <div className="tra-container">
          {/* HEADER */}

          <div className="tra-header">
            <div className="tra-eyebrow">
              <span className="tra-eyebrow-line"></span>
              RNA SEQUENCING
            </div>
            <h1 className="section-heading">{pageData.title}</h1>
            <p className="page-text">{pageData.summary}</p>
          </div>

          <div className="tra-platform-notes">
            {pageData.platformNotes.map((note, noteIndex) => (
              <div className="tra-platform-note" key={noteIndex}>
                <p className="page-text">{note}</p>
              </div>
            ))}
          </div>

          {/* WHAT IS TRANSCRIPTOME */}

          <div className="tra-intro-section">
            <div className="tra-intro-text">
              <h2 className="section-heading">{pageData.whatIs.title}</h2>
              <p className="page-text">{pageData.whatIs.text}</p>
            </div>

            <div className="tra-intro-visual">
              <figure className="tra-figure">
                <img
                  className="tra-intro-image"
                  src={tsqImage}
                  alt={pageData.whatIs.imageAlt}
                  loading="lazy"
                />
                <figcaption className="tra-figcaption">
                  {pageData.whatIs.imageCaption}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* PROCEDURE */}

          <div className="tra-procedure-section">
            <h2 className="section-heading">{pageData.procedure.title}</h2>
            <p className="page-text">{pageData.procedure.text}</p>

            <div className="tra-procedure-visual">
              <figure className="tra-figure">
                <img
                  className="tra-procedure-image"
                  src={tsq2Image}
                  alt={pageData.procedure.imageAlt}
                  loading="lazy"
                />
                <figcaption className="tra-figcaption">
                  {pageData.procedure.imageCaption}
                </figcaption>
              </figure>
            </div>
          </div>

          {/* SERVICES */}

          <div className="tra-overview-list">
            {pageData.overviews.map(renderOverview)}
          </div>

          <div className="tra-services-heading">
            <div>
              <span className="tra-section-label">SERVICE CATALOG</span>
              <h2 className="section-heading">{pageData.servicesTitle}</h2>
            </div>

            <div className="tra-service-count">
              <strong>{totalServices}</strong>
              <span>Services available</span>
            </div>
          </div>

          <div className="tra-tab-bar">
            {pageData.groups.map((group, groupIndex) => (
              <button
                type="button"
                className={
                  groupIndex === activeGroupIndex
                    ? "tra-tab tra-tab-active"
                    : "tra-tab"
                }
                key={group.name}
                onClick={() => setActiveGroupIndex(groupIndex)}
              >
                {group.name}
              </button>
            ))}
          </div>

          <div className="tra-service-grid">
            {activeGroup.cards.map(renderCard)}
          </div>

          {/* FAQ */}

          <div className="tra-faq">
            <div className="tra-faq-heading">
              <h3 className="section-heading">Frequently Asked Questions</h3>
              <p>Common questions about our transcriptomics services.</p>
            </div>

            <div className="tra-faq-list">
              <div className="tra-faq-column">
                {firstColumn.map((faq, index) => renderFaq(faq, index))}
              </div>

              <div className="tra-faq-column">
                {secondColumn.map((faq, index) =>
                  renderFaq(faq, index + firstColumn.length)
                )}
              </div>
            </div>
          </div>

          {/* CTA */}

          <div className="tra-cta">
            <div className="tra-cta-copy">
              <span className="tra-cta-label">START YOUR PROJECT</span>
              <h3>Ready to plan your transcriptomics project?</h3>
              <p>
                Tell us about your samples and research goals, and our team
                will help you choose the right RNA sequencing service.
              </p>
            </div>

            <div className="tra-cta-action">
              <Button to="/contact" variant="primary" size="medium">
                Discuss your project
              </Button>
            </div>
          </div>
        </div>

        {/* DETAILS MODAL */}

        {selectedCard && (
          <div className="tra-detail-backdrop" onClick={closeDetails}>
            <div
              className="tra-detail-panel"
              role="dialog"
              aria-modal="true"
              aria-labelledby="tra-detail-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="tra-detail-header">
                <div>
                  <span className="tra-section-label">
                    {selectedCard.platform}
                  </span>
                  <h3 id="tra-detail-title">{selectedCard.title}</h3>
                  <span className="tra-detail-category">
                    {selectedCard.code} · {selectedGroupName}
                  </span>
                </div>

                <button
                  type="button"
                  className="tra-detail-close"
                  onClick={closeDetails}
                  aria-label="Close details"
                >
                  ×
                </button>
              </div>

              <div className="tra-detail-body">
                {selectedCard.image ? (
                  <div
                    className={
                      selectedCard.imageFit === "cover"
                        ? "tra-detail-image-wrap tra-detail-image-wrap-cover"
                        : "tra-detail-image-wrap"
                    }
                  >
                    <img
                      className="tra-detail-image"
                      src={selectedCard.image}
                      alt={selectedCard.imageAlt ? selectedCard.imageAlt : selectedCard.title}
                      loading="lazy"
                    />
                  </div>
                ) : null}

                <div className="tra-detail-description">
                  <span>OVERVIEW</span>
                  <p>{selectedCard.whatItIs}</p>
                </div>

                <div className="tra-detail-best">
                  <span>BEST SUITED FOR</span>
                  <p>{selectedCard.bestFor}</p>
                </div>

                <div className="tra-detail-columns">
                  <div className="tra-detail-block">
                    <h4>Key specifications</h4>
                    <p>{selectedCard.keySpecs}</p>
                  </div>

                  <div className="tra-detail-block">
                    <h4>Deliverables</h4>
                    <ul>
                      {selectedCard.deliverables
                        .split(" · ")
                        .map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="tra-detail-footer">
                <span>Have a specific research requirement?</span>
                <a href="/contact">
                  Discuss your project <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Transcriptomics;