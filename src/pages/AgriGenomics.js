import React from "react";
import { Helmet } from "react-helmet-async";

import AgriGenoBanner from "../components/Agri/AgriGenoBanner";
import FarmInfrastructure from "../components/Agri/FarmInfrastructure";
import LivestockCare from "../components/Agri/LivestockCare";
import LivestockNutrition from "../components/Agri/LivestockNutrition";
import AnimalIVFWorkflow from "../components/Agri/AnimalIVFWorkflow";
import QualityAssurance from "../components/Agri/QualityAssurance";
import AgriFAQs from "../components/Agri/AgriFAQs";
import Vacination from "../components/Agri/Vacination";
import ReproductiveBiotech from "../components/Agri/Reproductivebiotech";

const AgriGenomics = () => {
  return (
    <div>
      <Helmet>
        <title>Livestock Genetics & Advanced Animal Breeding Solutions | Leads Genetics</title>
        <meta
          name="description"
          content="Advance livestock breeding with Leads Genetics through animal genomics, reproductive biotechnology, IVF and MOET solutions. Driving genetic improvement and better breeding outcomes through science-led innovation."
        />
        <link
          rel="canonical"
          href="https://www.leadsgenetics.com/agri-genomics"
        />
        <meta
          property="og:title"
          content="Agri Genomics | LEADS Genetics"
        />
        <meta
          property="og:description"
          content="Discover livestock genomics, cattle breeding and agricultural biotechnology solutions at LEADS Genetics."
        />
        <meta
          property="og:url"
          content="https://www.leadsgenetics.com/agri-genomics"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agricultural & Livestock Genomics | LEADS Genetics" />
        <meta
          name="twitter:description"
          content="Discover livestock genomics, cattle breeding and agricultural biotechnology solutions at LEADS Genetics."
        />
      </Helmet>

      <AgriGenoBanner />
      <FarmInfrastructure />
      <LivestockCare />
      <LivestockNutrition />
      <Vacination />
      <AnimalIVFWorkflow />
      <ReproductiveBiotech />
      <QualityAssurance />
      <AgriFAQs />
    </div>
  );
};

export default AgriGenomics;