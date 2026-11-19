import React from "react";
import "./Flow.css";

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

const Flow = () => {
  return (
    <section className="lgflow-section">
      <div className="lgflow-wrap">
        <header className="lgflow-intro">
          <span className="lgflow-eyebrow">WORKFLOW</span>

          <h2 className="section-heading lgflow-heading">
            One partner for the whole workflow
          </h2>

          <p className="lgflow-subheading">
            Validated, sample-specific protocols at the bench, version-controlled
            pipelines at the end. Every project follows the same path.
          </p>
        </header>

        <div className="lgflow-timeline">
          {workflowSteps.map((step) => (
            <article className="lgflow-step" key={step.number}>
              <div className={`lgflow-step-number lgflow-number-${step.color}`}>
                {step.number}
              </div>

              <h3 className="lgflow-step-title">{step.title}</h3>

              <p className="lgflow-step-desc">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flow;