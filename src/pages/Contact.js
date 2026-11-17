import React from "react";
import { Helmet } from "react-helmet-async";
import ContactBanner from "../components/ContactBanner";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Get in Touch with Leads Genetics | Research & Genomics</title>
        <meta
          name="description"
          content="Contact LEADS Genetics to learn more about agricultural genomics, clinical genomics, research services, livestock genetics and genomic technologies."
        />
        <link rel="canonical" href="https://www.leadsgenetics.com/contact" />
        <meta property="og:title" content="Contact LEADS Genetics" />
        <meta
          property="og:description"
          content="Connect with LEADS Genetics for information about our genomics services and solutions."
        />
        <meta property="og:url" content="https://www.leadsgenetics.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact LEADS Genetics | Get in Touch" />
        <meta
          name="twitter:description"
          content="Connect with LEADS Genetics for information about our genomics services and solutions."
        />
      </Helmet>

      <ContactBanner />
      <ContactForm />
    </div>
  );
};

export default Contact;