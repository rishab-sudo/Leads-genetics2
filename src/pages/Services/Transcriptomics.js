import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Transcriptomics.css";

const pageData = {
  title: "Transcriptomics",
  summary:
    "Gene expression profiling, splicing and isoform analysis, full-length transcriptomics, and single-cell RNA sequencing.",
  platformNotes: [
    "Illumina NGS — RNA Applications: Every transcript. Every condition. Quantified.",
    "PacBio Long-Read (Vega) — RNA Applications: Full-length transcripts. No assembly. No guesswork.",
    "Input requirement for PacBio RNA applications: total RNA, RIN ≥ 8.0.",
  ],
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
          whatItIs: "Focused coding-transcriptome profiling with enhanced signal-to-noise for eukaryotic samples.",
          bestFor: "Budget-efficient expression studies where coding genes are the target.",
          keySpecs: "Poly-A capture; NovaSeq X; 15–25M reads/sample.",
          deliverables: "Count matrices · differential expression · enrichment reports.",
        },
        {
          code: "B3",
          platform: "Illumina NGS — RNA Applications",
          title: "Total RNA-Seq (rRNA-Depleted) & lncRNA",
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
  matrix: null,
};


function Transcriptomics() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const activeGroup =
    pageData.groups.length > 0 ? pageData.groups[activeGroupIndex] : null;

  const renderOverview = (overview) => {
    return (
      <div className="tra-overview" key={overview.title}>
        <h2 className="section-heading">{overview.title}</h2>
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
        {overview.link ? (
          <a className="page-text" href={overview.link}>
            {overview.linkLabel}
          </a>
        ) : null}
      </div>
    );
  };

  const renderCard = (card) => {
    return (
      <div className="tra-card" key={card.title}>
        <div className="tra-card-top">
          {card.code ? (
            <div className="tra-card-code">
              <p className="page-text">{card.code}</p>
            </div>
          ) : null}
          <h3 className="section-heading">{card.title}</h3>
        </div>
        {card.platform ? (
          <p className="page-text">
            <em>{card.platform}</em>
          </p>
        ) : null}
        {card.description ? <p className="page-text">{card.description}</p> : null}
        {card.whatItIs ? (
          <p className="page-text">
            <strong>What it is:</strong> {card.whatItIs}
          </p>
        ) : null}
        {card.bestFor ? (
          <p className="page-text">
            <strong>Best for:</strong> {card.bestFor}
          </p>
        ) : null}
        {card.keySpecs ? (
          <p className="page-text">
            <strong>Key specs:</strong> {card.keySpecs}
          </p>
        ) : null}
        {card.deliverables ? (
          <p className="page-text">
            <strong>Deliverables:</strong> {card.deliverables}
          </p>
        ) : null}
      </div>
    );
  };

  return (
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
      </Helmet>

      <div className="tra-container">
        <div className="tra-header">
          <h1 className="section-heading">{pageData.title}</h1>
          <p className="page-text">{pageData.summary}</p>
        </div>

        {pageData.platformNotes.length > 0 ? (
          <div className="tra-platform-notes">
            {pageData.platformNotes.map((note, noteIndex) => (
              <div className="tra-platform-note" key={noteIndex}>
                <p className="page-text">{note}</p>
              </div>
            ))}
          </div>
        ) : null}

        {pageData.overviews.length > 0 ? (
          <div className="tra-overview-list">
            {pageData.overviews.map(renderOverview)}
          </div>
        ) : null}

        {pageData.groups.length > 1 ? (
          <div className="tra-tab-bar">
            {pageData.groups.map((group, groupIndex) => (
              <button
                type="button"
                className={
                  groupIndex === activeGroupIndex
                    ? "tra-tab-active"
                    : "tra-tab"
                }
                key={group.name}
                onClick={() => setActiveGroupIndex(groupIndex)}
              >
                <span className="page-text">{group.name}</span>
              </button>
            ))}
          </div>
        ) : null}

        {activeGroup ? (
          <div className="tra-group">
            {activeGroup.overviews.length > 0 ? (
              <div className="tra-overview-list">
                {activeGroup.overviews.map(renderOverview)}
              </div>
            ) : null}
            {activeGroup.cards.length > 0 ? (
              <div className="tra-card-grid">
                {activeGroup.cards.map(renderCard)}
              </div>
            ) : null}
          </div>
        ) : null}

        {pageData.matrix ? (
          <div className="tra-matrix">
            <h2 className="section-heading">{pageData.matrix.title}</h2>
            <div className="tra-matrix-header-row">
              {pageData.matrix.columns.map((column) => (
                <div className="tra-matrix-header-cell" key={column}>
                  <p className="page-text">
                    <strong>{column}</strong>
                  </p>
                </div>
              ))}
            </div>
            {pageData.matrix.rows.map((row) => (
              <div className="tra-matrix-row" key={row[0]}>
                {row.map((cell, cellIndex) => (
                  <div className="tra-matrix-cell" key={cellIndex}>
                    <p className="page-text">{cell}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Transcriptomics;