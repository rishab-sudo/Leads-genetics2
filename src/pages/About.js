import React from "react";
import { Helmet } from "react-helmet-async";
import "./About.css";

import AboutHero from "../components/About/AboutHero";
import AboutPageScroll from "../components/About/AboutPageScroll";
import OurHistory from "../components/About/OurHistory";
import OurStory from "../components/About/OurStory";
import Whyleads from "../components/Whyleads";
import RoadAhead from "../components/About/RoadAhead";
import Mission from "../components/About/Mission";

const About = () => {
  return (
    <main className="about-page">
      <Helmet>
        <title>About LEADS Genetics | Our Mission & Expertise</title>
        <meta
          name="description"
          content="Learn about LEADS Genetics, our mission, history, scientific expertise and work across agricultural, research and clinical genomics."
        />
        <link rel="canonical" href="https://www.leadsgenetics.com/about" />
        <meta property="og:title" content="About LEADS Genetics" />
        <meta
          property="og:description"
          content="Discover the story, mission and genomics expertise of LEADS Genetics."
        />
        <meta property="og:url" content="https://www.leadsgenetics.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About LEADS Genetics | Our Mission & Expertise" />
        <meta
          name="twitter:description"
          content="Discover the story, mission and genomics expertise of LEADS Genetics."
        />
      </Helmet>

      <AboutHero />
      <OurStory />
      <AboutPageScroll />
      <OurHistory />
      <Mission />
      <Whyleads />
      <RoadAhead />
    </main>
  );
};

export default About;