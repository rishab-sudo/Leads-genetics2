import React from "react";
import "./About.css";

import AboutHero from "../components/About/AboutHero";
import AboutPageScroll from "../components/About/AboutPageScroll";
import OurHistory from "../components/About/OurHistory";
import OurStory from "../components/About/OurStory";
import Mission from "../components/About/Mission";


const About = () => {
  return (
    <main className="about-page">
      <AboutHero />
      <OurStory/>
      <AboutPageScroll />
      <OurHistory />
      <Mission/>

    </main>
  );
};

export default About;
