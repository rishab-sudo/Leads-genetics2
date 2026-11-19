
import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css";

import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import HomeAbout from "../components/HomeAbout";
import Team from "../components/Team";
import NewsEvents from "../components/NewsEvents";
import SectionSep from "../components/SectionSep";

import cliImg from "../assets/clibanner.png";
import agrImg from "../assets/agr-img.png";

import FAQ from "../components/FAQ";
import Credentials from "../components/Credentials";
import WhyUs from "../components/WhyUs";
import SectionDivider from "../components/SectionDivider";
import Partners from "../components/Partners";
import ChipVideo from "../components/ChipVideo";
import HomeProduct from "../components/HomeProduct";

const Home = () => {
  return (
    <>
      <Helmet>

        <link
          rel="canonical"
          href="https://www.leadsgenetics.com/"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Leads Genetics | Advancing Genomics & Genetic Research"
        />
        <meta
          property="og:description"
          content="Advancing agricultural, research and clinical genomics through scientific innovation, advanced sequencing and genetic research."
        />
        <meta
          property="og:url"
          content="https://www.leadsgenetics.com/"
        />
        <meta
          property="og:site_name"
          content="Leads Genetics"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Leads Genetics | Advancing Genomics & Genetic Research"
        />
        <meta
          name="twitter:description"
          content="Explore Leads Genetics' agricultural, research and clinical genomics capabilities."
        />
      </Helmet>

      <Hero />

      <Reveal>
        <HomeAbout />
      </Reveal>

      <Reveal>
        <Team />
      </Reveal>
<Reveal>

<HomeProduct/>
</Reveal>



      <Reveal>
        <ChipVideo />
      </Reveal>

      <Reveal>
        <NewsEvents />
      </Reveal>

      <Reveal>
        <Partners />
      </Reveal>

      <Reveal>
        <SectionSep
          bgImage={agrImg}
          title="Advancing Agriculture Through Genomics"
          description="Our research capabilities bring together genomics, bioinformatics, and agricultural science to generate insights that support stronger crops, better breeding, and more resilient agriculture."
          buttonText="EXPLORE AGRICULTURAL RESEARCH →"
          link="/agri-genomics"
        />
      </Reveal>

      <Reveal>
        <Credentials />
      </Reveal>

      <Reveal>
        <SectionSep
          bgImage={cliImg}
          title="Advancing Precision Care Through Genomics"
          description="Combining advanced sequencing, molecular diagnostics, and genomic analysis to support informed clinical decisions across inherited, rare, reproductive, and oncological conditions."
          buttonText="EXPLORE CLINICAL GENOMICS →"
          link="/clinical-genomics"
        />
      </Reveal>

      <Reveal>
        <FAQ />
      </Reveal>

      <SectionDivider />

      <Reveal>
        <WhyUs />
      </Reveal>
    </>
  );
};

export default Home;
