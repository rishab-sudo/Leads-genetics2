import React from "react";
import { Helmet } from "react-helmet-async";

import ResearchBanner from "../components/ResearchBanner";
import InHouse from "../components/Research/InHouse";
import Advance from "../components/Research/Advance";
import Technology from "../components/Research/Technology";
import Services from "../components/Services";
import SampleRequirements from "../components/SampleRequirements";

import "./Research.css";
import Flow from "../components/Research/Flow";
import Bio from "../components/Research/Bio";

const Research = () => {
  return (
    <div>
      <Helmet>
        {/* Primary SEO */}
        <title>Genomics, NGS & Bioinformatics Solutions | Leads Genetics</title>

        <meta
          name="description"
          content="Explore advanced genomics research solutions at Leads Genetics, including whole genome sequencing, RNA sequencing, epigenomics, genotyping and bioinformatics for scientific discovery and research innovation."
        />

        <meta name="robots" content="index, follow, max-image-preview:large" />

        <link
          rel="canonical"
          href="https://www.leadsgenetics.com/research-genomics"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Research Genomics Services | LEADS Genetics"
        />
        <meta
          property="og:description"
          content="Advanced sequencing, multi-omics research, sample processing and bioinformatics services for genomics-driven scientific discovery."
        />
        <meta
          property="og:url"
          content="https://www.leadsgenetics.com/research-genomics"
        />
        <meta property="og:site_name" content="LEADS Genetics" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Research Genomics Services | LEADS Genetics"
        />
        <meta
          name="twitter:description"
          content="Explore advanced sequencing, multi-omics and bioinformatics research services at LEADS Genetics."
        />
      </Helmet>

      <ResearchBanner />
      <InHouse />
            <Flow/>


      <Advance />


      <Technology />
      
      <Services />
      <Bio/>
      <SampleRequirements />


    </div>
  );
};

export default Research;