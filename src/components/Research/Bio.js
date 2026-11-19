import React from "react";
import "./Bio.css";

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

const Bio = () => {
  return (
    <section className="lgomics-section">
      <div className="lgomics-wrap">
        <header className="lgomics-intro">
          <span className="lgomics-eyebrow">MULTI-OMICS</span>

          <h2 className="section-heading lgomics-heading">
            Multi-omics and bioinformatics
          </h2>

          <p className="lgomics-subheading">
            Integrate genomics, transcriptomics, epigenomics, proteomics and
            metabolomics for systems-level interpretation of complex phenotypes.
          </p>
        </header>

        <div className="lgomics-grid">
          <article className="lgomics-card">
            <h3 className="lgomics-card-title">Multi-omics</h3>

            <p className="lgomics-card-desc">
              Four layers on the same samples, with modular designs and NGS
              readout on NovaSeq X.
            </p>

            <ul className="lgomics-list">
              {multiOmicsPoints.map((point) => (
                <li className="lgomics-list-item" key={point}>
                  {point}
                </li>
              ))}
            </ul>

            <div className="lgomics-tags">
              {omicsLayers.map((layer) => (
                <span className="lgomics-tag" key={layer}>
                  {layer}
                </span>
              ))}
            </div>
          </article>

          <article className="lgomics-card">
            <h3 className="lgomics-card-title">Bioinformatics</h3>

            <p className="lgomics-card-desc">
              Reusable, version-controlled pipelines and FAIR reports.
            </p>

            <ul className="lgomics-list">
              {bioinformaticsPoints.map((point) => (
                <li className="lgomics-list-item" key={point}>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Bio;