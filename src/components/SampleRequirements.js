
import React from "react";
import "./SampleRequirements.css";

const sampleRequirements = [
  {
    application: "WGS / WES (Illumina)",
    input: "gDNA",
    minimum: "≥ 1 µg (PCR-free) / ≥ 200 ng (PCR)",
    qc: "DIN ≥ 7; OD260/280 1.8–2.0",
  },
  {
    application: "Targeted / amplicon / GBS",
    input: "gDNA",
    minimum: "≥ 100–500 ng",
    qc: "OD260/280 1.8–2.0",
  },
  {
    application: "16S / shotgun metagenomics",
    input: "Environmental DNA",
    minimum: "≥ 100 ng / ≥ 500 ng",
    qc: "Inhibitor-free",
  },
  {
    application: "RNA-Seq (all)",
    input: "Total RNA",
    minimum: "≥ 1 µg",
    qc: "RIN ≥ 8.0",
  },
  {
    application: "PacBio WGS / SV",
    input: "HMW gDNA",
    minimum: "≥ 5 µg",
    qc: "N50 ≥ 50 kb",
  },
  {
    application: "PacBio T2T / pangenome",
    input: "HMW gDNA",
    minimum: "≥ 10–15 µg",
    qc: "N50 ≥ 100 kb, ≥ 90% mass > 50 kb",
  },
  {
    application: "Iso-Seq / Kinnex",
    input: "Total RNA",
    minimum: "≥ 1–5 µg",
    qc: "RIN ≥ 8.0",
  },
  {
    application: "Microarray (human & agri)",
    input: "gDNA",
    minimum: "≥ 1 µg (≥ 50 ng/µL)",
    qc: "HMW, RNA-free",
  },
  {
    application: "Olink proteomics",
    input: "Plasma / serum / lysate",
    minimum: "~1 µL per assay",
    qc: "Per Olink sample guidance",
  },
];

const SampleRequirements = () => {
  return (
    <section className="sampleRequire">
      <div className="sampleRequire-container h-container">
        <div className="sampleRequire-header">
          <h2 className="sampleRequire-title">
            Sample requirements
          </h2>

          <p className="sampleRequire-subtitle">
            Minimum input and the QC gate each sample must pass
            before library preparation.
          </p>
        </div>

        <div className="sampleRequire-table-wrapper">
          <table className="sampleRequire-table">
            <thead>
              <tr>
                <th>Application</th>
                <th>Input</th>
                <th>Minimum</th>
                <th>Key QC gate</th>
              </tr>
            </thead>

            <tbody>
              {sampleRequirements.map((sample, index) => (
                <tr key={index}>
                  <td className="sampleRequire-application">
                    {sample.application}
                  </td>
                  <td>{sample.input}</td>
                  <td>{sample.minimum}</td>
                  <td>{sample.qc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="sampleRequire-note">
          Unsure whether your sample qualifies? Low-input, FFPE
          and degraded samples can often be processed with
          adapted protocols. Ask before shipping.
        </p>
      </div>
    </section>
  );
};

export default SampleRequirements;
