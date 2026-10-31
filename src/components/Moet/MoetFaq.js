import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MoetFaq.css";

const faqList = [
  {
    question: "What is MOET technology in cattle?",
    answer:
      "MOET is a reproductive technology that helps multiply superior cattle genetics by producing and transferring multiple embryos from an elite donor cow.",
  },
  {
    question: "How does the MOET process work?",
    answer:
      "The donor cow receives hormonal stimulation, is inseminated with selected semen, and the developed embryos are collected and transferred to recipient cows.",
  },
  {
    question: "What are the benefits of MOET in dairy cattle?",
    answer:
      "MOET accelerates genetic improvement, increases the number of calves from elite donors and helps expand high-quality dairy herds.",
  },
  {
    question: "How many embryos can one donor cow produce?",
    answer:
      "The number varies with the donor's fertility, genetics and response to stimulation. Multiple transferable embryos can be collected in a single cycle.",
  },
  {
    question: "What is the difference between MOET and IVF?",
    answer:
      "MOET involves fertilisation inside the cow, while IVF involves fertilisation and early embryo development in a laboratory.",
  },
  {
    question: "What is the success rate of MOET in cattle?",
    answer:
      "Fresh, good-quality MOET embryos can achieve conception rates above 60% under well-managed conditions.",
  },
  {
    question: "Can sex-sorted semen be used in MOET?",
    answer:
      "Yes. Sex-sorted semen can be used to increase the likelihood of producing female calves, supporting faster growth of the milking herd.",
  },
  {
    question: "Can MOET embryos be frozen for future use?",
    answer:
      "Yes. Suitable MOET embryos can be frozen in liquid nitrogen and transferred later under appropriate conditions.",
  },
  {
    question: "What is the role of recipient cows in MOET?",
    answer:
      "Recipient cows carry embryos collected from genetically superior donor cows and support pregnancy until birth.",
  },
  {
    question: "How does MOET help improve milk production?",
    answer:
      "MOET helps multiply offspring from genetically superior dairy cows, supporting long-term improvement in the herd's milk production potential.",
  },
];

const leftColumnList = faqList.slice(0, 5);
const rightColumnList = faqList.slice(5, 10);

function MoetFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  function handleToggle(index) {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  }

  function renderItem(item, index, order) {
    const isOpen = openIndex === index;

    let itemClass = "moet-faq-item";
    if (isOpen) {
      itemClass = "moet-faq-item moet-faq-item-open";
    }

    return (
      <motion.div
        className={itemClass}
        key={item.question}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: order * 0.08, ease: "easeOut" }}
      >
        <button
          className="moet-faq-question"
          type="button"
          aria-expanded={isOpen}
          onClick={function () {
            handleToggle(index);
          }}
        >
          <span className="moet-faq-number">{index + 1}</span>
          <span className="moet-faq-question-text">{item.question}</span>
          <motion.span
            className="moet-faq-icon"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              className="moet-faq-answer"
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className=" moet-faq-answer-text">{item.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  return (
    <section className="moet-faq">
      <div className="moet-faq-inner">
        {/* ===================== HEADING ===================== */}
        <motion.div
          className="moet-faq-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </motion.div>

        {/* ===================== TWO COLUMNS ===================== */}
        <div className="moet-faq-columns">
          <div className="moet-faq-column">
            {leftColumnList.map(function (item, position) {
              return renderItem(item, position, position);
            })}
          </div>

          <div className="moet-faq-column">
            {rightColumnList.map(function (item, position) {
              return renderItem(item, position + 5, position);
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoetFaq;