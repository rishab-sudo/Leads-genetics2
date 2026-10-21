import React from 'react'
import ResearchBanner from '../components/ResearchBanner'
import Advance from '../components/Research/Advance';
import Technology from '../components/Research/Technology';
import "./Research.css"
import SampleRequirements from '../components/SampleRequirements';


const Research = () => {
  const workflowSteps = [
{
number: "1",
title: "Sample intake",
description:
"Tissue, blood, plasma, FFPE, soil, rumen, water and feed. Low-input and degraded samples accepted.",
color: "green",
},
{
number: "2",
title: "Extraction & QC",
description:
"Spin-column, bead and salting-out DNA; total RNA with RIN, Qubit, NanoDrop, Bioanalyzer.",
color: "blue",
},
{
number: "3",
title: "Sequencing",
description:
"Short reads on NovaSeq X and MiSeq i100, long reads on PacBio Vega and PromethION.",
color: "yellow",
},
{
number: "4",
title: "Bioinformatics",
description:
"Snakemake and Nextflow pipelines following FAIR principles, documented and reproducible.",
color: "red",
},
{
number: "5",
title: "Report & data",
description:
"FASTQ to VCF, QC dashboards, enrichment and publication-ready figures.",
color: "dark",
},
];
// 
const multiOmicsPoints = [
"Olink PEA proteomics, from Target 48/96 to Reveal and Explore HT (5,400+ proteins)",
"Multi-block integration with MOFA+, DIABLO (mixOmics) and FactoMineR",
"Network integration with WGCNA, STRING PPI and gene regulatory networks",
"Genotype-to-phenotype mapping across layers using mediation analysis",
"Microbiome data integrated with host genomic and metabolomic profiles",
];

const bioinformaticsPoints = [
"Assembly with hifiasm and Verkko, structural and functional annotation",
"GWAS, population stratification, PCA and genomic relationship matrices",
"Graph genotyping with vg and Pangenie",
"Mixed models for complex traits using GCTA, ASReml and BLUPF90",
"Machine-learning phenotype prediction and biomarker feature selection (LASSO, elastic net, random forest, SVM)",
"Custom Snakemake, Nextflow and CWL pipelines; R Shiny dashboards",
"Statistical consultation: study design, sample size and power",
];

const omicsLayers = [
"Genome",
"Epigenome",
"Transcriptome",
"Proteome",
"Metabolome",
];
// 

  return (
    <div>
      <ResearchBanner/>
      {/*  */}
   
<section className="workflow-section">
<div className="workflow-container h-container">
{/* Section heading and subheading */}
<div className="workflow-intro">
<h2 className="section-heading workflow-heading">
One partner for the whole workflow
</h2>

      <p className="page-text subheading workflow-subheading">
        Validated, sample-specific protocols at the bench,
        version-controlled pipelines at the end. Every project follows
        the same path.
      </p>
    </div>

    {/* Horizontal workflow */}
    <div className="workflow-timeline">
      {workflowSteps.map((step) => (
        <article className="workflow-step" key={step.number}>
          <div
            className={`workflow-step-number workflow-number-${step.color}`}
          >
            {step.number}
          </div>

          <h3 className="workflow-step-title">{step.title}</h3>

          <p className="page-text workflow-step-description">
            {step.description}
          </p>
        </article>
      ))}
    </div>
  </div>
  </section>


  <Advance/>
  {/*----------------------*/}
  <section className="omics-section">
<div className="omics-container h-container">
{/* Section heading */}
<div className="omics-intro">
<h2 className="section-heading omics-heading">
Multi-omics and bioinformatics
</h2>

      <p className="page-text subheading omics-subheading">
        Integrate genomics, transcriptomics, epigenomics, proteomics and
        metabolomics for systems-level interpretation of complex
        phenotypes.
      </p>
    </div>

    {/* Multi-omics card */}
    <div className="omics-card omics-card-primary">
      <h3 className="omics-card-title">Multi-omics</h3>

      <p className="page-text omics-card-description">
        Four layers on the same samples, with modular designs and NGS
        readout on NovaSeq X.
      </p>

      <ul className="omics-list">
        {multiOmicsPoints.map((point, index) => (
          <li className="omics-list-item" key={index}>
            {point}
          </li>
        ))}
      </ul>

      <div className="omics-layer-tags">
        {omicsLayers.map((layer) => (
          <span className="omics-layer-tag" key={layer}>
            {layer}
          </span>
        ))}
      </div>
    </div>

    {/* Bioinformatics card */}
    <div className="omics-card omics-card-secondary">
      <h3 className="omics-card-title">Bioinformatics</h3>

      <p className="page-text omics-card-description">
        Reusable, version-controlled pipelines and FAIR reports.
      </p>

      <ul className="omics-list">
        {bioinformaticsPoints.map((point, index) => (
          <li className="omics-list-item" key={index}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>

<Technology/>

{/*  */}
<SampleRequirements/>
{/*  */}
    </div>
  )
}

export default Research