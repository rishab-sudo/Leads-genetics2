
import React, { useState } from "react";
import "./AgriFAQs.css";

const faqData = [
  {
    id: 1,
    question: "What livestock facilities does Leads Genetics provide?",
    answer:
      "Leads Genetics maintains an active cattle strength of 758 animals (as on October 22, 2026) housed across 10 specialized sheds: Vishnu, Khushi, Shubhadra, Maa, Priyanka, Ajay, Sudhir, Chotti, Calf shed, and Quarantine. Facilities cater to indigenous breeds (Gir, Sahiwal, Punganur) and exotic crossbred Holstein Friesian cattle, supported by an in-house IVF laboratory, biosecurity protocols, and veterinary isolation wards.",
  },
  {
    id: 2,
    question: "How does your in-house animal IVF laboratory work?",
    answer:
      "Our animal IVF processes involve oocyte collection, laboratory maturation, fertilization, embryo culture, and embryo transfer. Each stage follows established protocols to support traceability, quality control, and reproductive outcomes.",
  },
  {
    id: 3,
    question: "What feeding framework is followed for livestock?",
    answer:
      "Feed ingredients including Green Fodder (Maize, Jowar), Dry Fodder (Wheat Pusa), and Concentrates (Soya Doc, Maize, wheat and rice bran) are scientifically mixed based on dry matter intake (DMI) of 2.5 – 3% of total body weight. The ration is dynamically adjusted for milk yield, pregnancy trimesters, and growing calves/heifers, blended using Total Mixed Ration (TMR) equipment, and supplied twice daily at mangers across each shed.",
  },
  {
    id: 4,
    question: "How do you maintain animal health and hygiene?",
    answer:
      "Animal health management includes routine observation, hygienic housing, appropriate sanitation, vaccination planning, and veterinary support. Preventive care practices help reduce disease risks and support animal welfare.",
  },
  {
    id: 5,
    question: "What biosecurity standards are followed at your facilities?",
    answer:
      "Biosecurity measures may include controlled access, equipment sanitation, cleaning and disinfection schedules, animal health screening, and isolation procedures when required.",
  },
  {
    id: 6,
    question: "Can farmers access breeding and genetic improvement support?",
    answer:
      "Farmers and livestock owners can explore breeding support, reproductive technologies, genetic improvement opportunities, and herd management guidance based on their livestock and farm requirements.",
  },
  {
    id: 7,
    question: "How is laboratory sample traceability maintained?",
    answer:
      "Samples can be tracked through documented identification, labeling, handling records, and controlled laboratory workflows. These procedures help maintain sample integrity and improve record accuracy.",
  },
  {
    id: 8,
    question: "Can research institutions collaborate with Leads Genetics?",
    answer:
      "Research institutions and scientific partners can explore collaboration opportunities in agri-genomics, livestock reproduction, embryo technologies, and related research projects.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  const answerId = `faq-answer-${faq.id}`;
  const questionId = `faq-question-${faq.id}`;

  return (
    <article className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button
        className="faq-question"
        type="button"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq-question-text">{faq.question}</span>

        <span className="faq-toggle-icon" aria-hidden="true">
          <span className="faq-toggle-horizontal" />
          <span className="faq-toggle-vertical" />
        </span>
      </button>

      <div
        className="faq-answer-wrapper"
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="faq-answer-inner">
          <p className="faq-answer">{faq.answer}</p>
        </div>
      </div>
    </article>
  );
};

const AgriFAQs = () => {
  // Only one FAQ can be open at a time.
  // null means all FAQs are closed.
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ((previousId) => (previousId === id ? null : id));
  };

  return (
    <section className="common-faq-section" id="faqs">
      <div className="container">
        {/* Section Heading */}
        <div className="common-faq-header">
          <span className="common-faq-eyebrow">
            COMMON INQUIRIES
          </span>

          <h2 className="common-faq-heading section-heading">
            Frequently Asked Questions
          </h2>

          <p className="common-faq-description">
            Detailed information regarding our livestock facilities,
            in-house animal IVF laboratory, feeding frameworks, and
            biosecurity standards.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="row common-faq-grid">
          {faqData.map((faq) => (
            <div
              className="col-12 col-lg-6 common-faq-column"
              key={faq.id}
            >
              <FAQItem
                faq={faq}
                isOpen={openFAQ === faq.id}
                onToggle={() => toggleFAQ(faq.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgriFAQs;
