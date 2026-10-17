
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { FaArrowRight, FaArrowDown } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "./AnimalIVFWorkflow.css";

const ivfStages = [
  {
    number: "01",
    title: "1 Donor Selection & Assessment",
    description:
      "Genomic evaluation, pedigree verification, and ultrasound ovarian scanning.",
    stage: "STAGE 01: PRE-OPU",
    image: "/images/ivf-donor.jpg",
  },
  {
    number: "02",
    title: "2 Oocyte Collection (OPU)",
    description:
      "Ultrasound-guided transvaginal oocyte aspiration from donor cows.",
    stage: "STAGE 02: ASPIRATION",
    image: "/images/ivf-collection.jpg",
  },
  {
    number: "03",
    title: "3 Maturation & Fertilization",
    description:
      "24-hour maturation incubator cycle followed by IVF with elite sexed semen.",
    stage: "STAGE 03: LAB IVF",
    image: "/images/ivf-fertilization.jpg",
  },
  {
    number: "04",
    title: "4 Embryo Culture & Evaluation",
    description:
      "7-day culture in tri-gas incubators to blastocyst stage grading.",
    stage: "STAGE 04: BLASTOCYST",
    image: "/images/ivf-culture.jpg",
  },
  {
    number: "05",
    title: "5 Freezing / Fresh Preparation",
    description:
      "Direct-transfer (DT) vitrification or fresh load for immediate transfer.",
    stage: "STAGE 05: CRYO LAB",
    image: "/images/ivf-freezing.jpg",
  },
  {
    number: "06",
    title: "6 Embryo Transfer & Follow-Up",
    description:
      "Nonsurgical transfer into synchronized recipient cow and gestation checks.",
    stage: "STAGE 06: RECIPIENT",
    image: "/images/ivf-transfer.jpg",
  },
];

const AnimalIVFWorkflow = () => {
  return (
    <>
    <section className="animal-ivf-section">
      <div className="container">
        <div className="animal-ivf-heading">
          <span className="animal-ivf-eyebrow">
            ZONE 3: LABORATORY & REPRODUCTIVE BIOTECH
          </span>

          <h2>
            Advancing Animal Reproduction
            <br />
            Through In-House IVF
          </h2>

          <p>
            In-vitro fertilization enables fertilization to take place under
            controlled laboratory conditions rather than inside the animal's
            reproductive tract. Leads Genetics has a confirmed in-house animal
            IVF laboratory, with the stated scope covering oocyte collection,
            IVF and embryo culture, and embryo freezing and transfer.
          </p>
        </div>

        <div className="animal-ivf-subheading">
          <span className="animal-ivf-green-dot"></span>
          <h3>The 6-Stage Animal IVF Workflow</h3>
        </div>

        <div className="animal-ivf-slider-wrapper">
          <Swiper
            modules={[Navigation, Mousewheel]}
            className="animal-ivf-slider"
            slidesPerView={4}
            slidesPerGroup={1}
            spaceBetween={16}
            speed={600}
            grabCursor={true}
            navigation={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 14,
                navigation: false,
                mousewheel: false,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 18,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          >
            {ivfStages.map((item) => (
              <SwiperSlide key={item.number}>
                <article className="animal-ivf-card">
                  <div className="animal-ivf-image-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="animal-ivf-image"
                      loading="lazy"
                    />

                    <span className="animal-ivf-number">
                      {item.number}
                    </span>
                  </div>

                  <div className="animal-ivf-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <div className="animal-ivf-stage">
                    {item.stage}
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

    // 

        <section className="ivf-branch-section">
      <div className="container">
        <div className="ivf-branch-wrapper">
          <div className="ivf-branch-heading">
            <h3>Interactive IVF Reproductive Branch Diagram</h3>
            <p>
              Hover over diagram nodes to view exact biosecurity and
              incubation parameters.
            </p>
          </div>

          <div className="ivf-branch-flow">
            {/* Donor animal */}
            <div className="ivf-branch-node ivf-donor-node">
              <span className="ivf-node-badge">A</span>
              <h4>Donor Animal</h4>
              <p>Elite Genomic Pedigree</p>
              <span className="ivf-node-caption">
                OPU Collection
              </span>
            </div>

            <div className="ivf-branch-connector">
              <FaArrowRight className="ivf-arrow-desktop" />
              <FaArrowDown className="ivf-arrow-mobile" />
            </div>

            {/* IVF laboratory */}
            <div className="ivf-branch-node ivf-lab-node">
              <span className="ivf-node-badge">B</span>
              <h4>In-House IVF Laboratory</h4>
              <p>Class 10,000 Cleanroom &amp; CO2 Control</p>
              <div className="ivf-lab-process">
                Maturation&nbsp; • &nbsp;IVF&nbsp; • &nbsp;Culture
              </div>
            </div>

            <div className="ivf-branch-connector">
              <FaArrowRight className="ivf-arrow-desktop" />
              <FaArrowDown className="ivf-arrow-mobile" />
            </div>

            {/* Embryo outcomes */}
            <div className="ivf-branch-outcomes">
              <div className="ivf-outcome-card ivf-fresh-outcome">
                <span className="ivf-outcome-badge">C1</span>
                <div>
                  <h5>Fresh Embryo Transfer</h5>
                  <p>Direct recipient transfer on Day 7</p>
                </div>
              </div>

              <div className="ivf-outcome-card ivf-frozen-outcome">
                <span className="ivf-outcome-badge">C2</span>
                <div>
                  <h5>Cryopreserved Storage</h5>
                  <p>Liquid Nitrogen Tank (-196°C)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AnimalIVFWorkflow;
