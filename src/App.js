import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ClinicalGenomics from "./pages/ClinicalGenomics";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Research from "./pages/Research";
import AgriGenomics from "./pages/AgriGenomics";
import Moet from "./pages/Moet";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/Blog/BlogDetails";

import RegistrationPopup from "./components/RegistrationPopup";

import ScrollTop from "./components/ScrollTop";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { Chip } from "./pages/Chip";
import Technologies from "./pages/Technologies";
import Genomics from "./pages/Services/Genomics";
import Epigenomics from "./pages/Services/Epigenomics";
import Transcriptomics from "./pages/Services/Transcriptomics";
import Illumina from "./components/Research/Illumina";
import PacBio from "./components/Research/Pacbio";

function App() {
  return (
    <div className="App">
      {/* Navbar always visible */}
      <Navbar />

      {/* Scroll to top whenever route/page changes */}
      <ScrollToTop />

      <RegistrationPopup />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Research Genomics Page */}
        <Route
          path="/research-genomics"
          element={<Research />}
        />

        {/* Agri Genomics Page */}
        <Route
          path="/agri-genomics"
          element={<AgriGenomics />}
        />

        <Route
          path="/moet"
          element={<Moet />}
        />

        {/* Clinical Genomics Page */}
        <Route
          path="/clinical-genomics"
          element={<ClinicalGenomics />}
        />
        <Route
          path="/chip"
          element={<Chip />}
        />
        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/blog"
          element={<Blog />}
        />

        {/* Blog Article Detail Page */}
        <Route
          path="/blog/:slug"
          element={<BlogDetails />}
        />

        <Route
          path="/genomics"
          element={<Genomics />}
        />
        <Route
          path="/Genomics"
          element={<Genomics />}
        />

        <Route
          path="/Illumina"
          element={<Illumina />}
        />
        <Route
          path="/illumina"
          element={<Illumina />}
        />
        <Route
          path="/pacbio"
          element={<PacBio />}
        />
                <Route
          path="/Pacbio"
          element={<PacBio />}
        />


        <Route
          path="/epigenomics"
          element={<Epigenomics />}
        />
        <Route
          path="/Epigenomics"
          element={<Epigenomics />}
        />
        <Route
          path="/transcriptomics"
          element={<Transcriptomics />}
        />
        <Route
          path="/Transcriptomics"
          element={<Transcriptomics />}
        />

        <Route
          path="/technologies"
          element={<Technologies />}
        />
      </Routes>

      {/* Footer */}
      <Footer />

      {/* Fixed Scroll Top Button */}
      <ScrollTop />
    </div>
  );
}

export default App;
