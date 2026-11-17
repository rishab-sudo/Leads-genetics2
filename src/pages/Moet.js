import React from "react";
import { Helmet } from "react-helmet-async";
import "./Moet.css";

import MoetHero from "../components/Moet/MoetHero";
import MoetAbout from "../components/Moet/MoetAbout";
import Working from "../components/Moet/Working";
import MoetIvf from "../components/Moet/MoetIvf";
import Semen from "../components/Moet/Semen";
import MoetCta from "../components/Moet/MoetCta";
import MoetFaq from "../components/Moet/MoetFaq.js";

export default function LeadsGeneticsPage() {
  return (
    <>
      <Helmet>
        <title>MOET Technology in Cattle | LEADS Genetics</title>
        <meta
          name="description"
          content="Explore Multiple Ovulation and Embryo Transfer (MOET), cattle breeding, embryo transfer and reproductive biotechnology solutions at LEADS Genetics."
        />
        <link rel="canonical" href="https://www.leadsgenetics.com/moet" />
        <meta property="og:title" content="MOET Technology in Cattle | LEADS Genetics" />
        <meta
          property="og:description"
          content="Discover MOET technology and advanced reproductive biotechnology for cattle breeding at LEADS Genetics."
        />
        <meta property="og:url" content="https://www.leadsgenetics.com/moet" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MOET Technology in Cattle | LEADS Genetics" />
        <meta
          name="twitter:description"
          content="Discover MOET technology and advanced reproductive biotechnology for cattle breeding at LEADS Genetics."
        />
      </Helmet>

      <main className="leads-genetics-page">
        <MoetHero />
        <MoetAbout />
        <Working />
        <MoetIvf />
        <Semen />
        <MoetCta />
        <MoetFaq />
      </main>
    </>
  );
}