
import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import "./GenomicsFAQ.css";

const faqData = [
  {
    question: "What is genomic sequencing?",
    answer:
      "Genomic sequencing determines the DNA sequence of an organism, helping researchers identify genetic variations, mutations and biological traits.",
  },
  {
    question: "What is the difference between WGS and WES?",
    answer:
      "WGS examines the entire genome, including coding and non-coding regions. WES focuses mainly on protein-coding regions.",
  },
  {
    question: "When is RNA sequencing used?",
    answer:
      "RNA sequencing analyses gene expression, helping researchers understand how genes respond to different conditions and biological states.",
  },
  {
    question: "Which samples are suitable for sequencing?",
    answer:
      "Common samples include blood, tissue, plant material, cultured cells and extracted DNA or RNA, depending on the application.",
  },
  {
    question: "Which sequencing platform should I choose?",
    answer:
      "Platform selection depends on read length, accuracy, genome complexity, throughput and the specific research objectives.",
  },
  {
    question: "What bioinformatics analysis is included?",
    answer:
      "Analysis may include quality control, genome assembly, read alignment, variant calling, gene expression and functional annotation.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

function GenomicsFAQ() {
  const [activeItems, setActiveItems] = useState([0]);

  function toggleItem(index) {
    setActiveItems(function (previous) {
      if (previous.includes(index)) {
        return previous.filter(function (item) {
          return item !== index;
        });
      }

      return previous.concat(index);
    });
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="gen-faq">
        <div className="gen-faq-container">

          <motion.div
            className="gen-faq-heading"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="gen-faq-eyebrow"
              variants={fadeUp}
            >
              KNOW MORE ABOUT GENOMICS
            </motion.span>

            <motion.h2
              className="section-heading gen-faq-title"
              variants={fadeUp}
            >
              Frequently Asked Questions
            </motion.h2>

            <motion.p
              className="page-text gen-faq-description"
              variants={fadeUp}
            >
              Find answers to common questions about sequencing,
              research technologies and genomic analysis.
            </motion.p>
          </motion.div>

          <motion.div
            className="gen-faq-list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {faqData.map(function (item, index) {
              const isOpen = activeItems.includes(index);

              return (
                <motion.div
                  className={
                    isOpen
                      ? "gen-faq-item gen-faq-item-open"
                      : "gen-faq-item"
                  }
                  key={item.question}
                  variants={itemVariants}
                >
                  <button
                    className="gen-faq-question"
                    type="button"
                    onClick={function () {
                      toggleItem(index);
                    }}
                    aria-expanded={isOpen}
                    aria-controls={"gen-faq-answer-" + index}
                  >
                    <span
                      className={
                        isOpen
                          ? "page-text gen-faq-question-text gen-faq-question-text-open"
                          : "page-text gen-faq-question-text"
                      }
                    >
                      {item.question}
                    </span>

                    <motion.span
                      className="gen-faq-icon"
                      animate={{
                        backgroundColor: isOpen
                          ? "#2563b8"
                          : "#ffffff",
                        boxShadow: isOpen
                          ? "0px 0px 0px 1px #2563b8"
                          : "0px 0px 0px 1px #d6e2f3",
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      <span
                        className="gen-faq-icon-bar"
                        style={{
                          backgroundColor: isOpen
                            ? "#ffffff"
                            : "#2563b8",
                        }}
                      />

                      <motion.span
                        className="gen-faq-icon-bar"
                        animate={{
                          rotate: isOpen ? 0 : 90,
                          backgroundColor: isOpen
                            ? "#ffffff"
                            : "#2563b8",
                        }}
                        transition={{ duration: 0.25 }}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="gen-faq-answer"
                        id={"gen-faq-answer-" + index}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: "easeInOut",
                        }}
                      >
                        <p className="page-text gen-faq-answer-text">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </MotionConfig>
  );
}

export default GenomicsFAQ;
