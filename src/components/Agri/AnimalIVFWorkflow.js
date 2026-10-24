import React, { useEffect, useRef } from "react";
import "./AnimalIVFWorkflow.css";

import donorImg from "../../assets/Breed/donor.png";
import opuImg from "../../assets/Breed/ooctyle.png";
import fertilizationImg from "../../assets/vac7.jpg";
import embryoCultureImg from "../../assets/embroy1.jpeg";
import freezingImg from "../../assets/Breed/freezing.jpg";
import embryoTransferImg from "../../assets/Breed/embroy tranfer.jpg";

const steps = [
  {
    number: "01",
    title: "Donor Selection & Assessment",
    description:
      "Genomic evaluation, pedigree verification, and ultrasound ovarian scanning.",
    image: donorImg,
  },
  {
    number: "02",
    title: "Oocyte Collection (OPU)",
    description:
      "Ultrasound-guided transvaginal oocyte aspiration from donor cows.",
    image: opuImg,
  },
  {
    number: "03",
    title: "Maturation & Fertilization",
    description:
      "24-hour maturation incubator cycle followed by IVF with elite sexed semen.",
    image: fertilizationImg,
  },
  {
    number: "04",
    title: "Embryo Culture & Evaluation",
    description:
      "7-day culture in tri-gas incubators to blastocyst stage grading.",
    image: embryoCultureImg,
  },
  {
    number: "05",
    title: "Freezing / Fresh Preparation",
    description:
      "Direct-transfer (DT) vitrification or fresh load for immediate transfer.",
    image: freezingImg,
  },
  {
    number: "06",
    title: "Embryo Transfer & Follow-Up",
    description:
      "Nonsurgical transfer into synchronized recipient cow and gestation checks.",
    image: embryoTransferImg,
  },
];

const RADIUS = 24; // rounded corner size of the line
const LEFT = 2; // line x position (half of the 4px stroke)

/* Builds the line from the real position of each step. */
function buildPath(items, width, zigzag) {
  const rows = items.map((li) => [li.offsetTop, li.offsetTop + li.offsetHeight]);
  const endY = rows[rows.length - 1][1];

  let x = LEFT;
  let d = `M ${x} ${rows[0][0]}`;

  if (zigzag) {
    for (let i = 0; i < rows.length - 1; i++) {
      const turnY = (rows[i][1] + rows[i + 1][0]) / 2; // middle of the gap
      const nextX = x === LEFT ? width / 2 : LEFT;
      const dir = nextX > x ? 1 : -1;

      d += ` V ${turnY - RADIUS}`;
      d += ` A ${RADIUS} ${RADIUS} 0 0 ${dir === 1 ? 0 : 1} ${x + dir * RADIUS} ${turnY}`;
      d += ` H ${nextX - dir * RADIUS}`;
      d += ` A ${RADIUS} ${RADIUS} 0 0 ${dir === 1 ? 1 : 0} ${nextX} ${turnY + RADIUS}`;
      x = nextX;
    }
  }

  d += ` V ${endY}`;
  return { d, endX: x, endY, startY: rows[0][0] };
}

function StepsFlow() {
  const boxRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    const dot = dotRef.current;
    const items = Array.from(box.querySelectorAll("li"));
    let total = 0;
    let startY = 0;
    let endY = 0;

    // fills the line according to scroll position
    const draw = () => {
      const tip = window.innerHeight * 0.6 - box.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, (tip - startY) / (endY - startY)));

      bar.style.strokeDashoffset = total * (1 - progress);
      bar.style.opacity = progress > 0 ? 1 : 0;
      dot.classList.toggle("on", progress >= 1);
    };

    // rebuilds the line whenever the layout changes
    const layout = () => {
      const zigzag = window.matchMedia("(min-width: 1024px)").matches;
      const path = buildPath(items, box.clientWidth, zigzag);

      track.setAttribute("d", path.d);
      bar.setAttribute("d", path.d);
      dot.setAttribute("cx", path.endX);
      dot.setAttribute("cy", path.endY);

      total = bar.getTotalLength();
      bar.style.strokeDasharray = total;
      startY = path.startY;
      endY = path.endY;
      draw();
    };

    const observer = new ResizeObserver(layout);
    observer.observe(box);
    window.addEventListener("scroll", draw, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", draw);
    };
  }, []);

  return (
    <section className="ivf">
      <div className="ivf-wrap">
        <h2>Advancing Animal Reproduction Through In-House IVF</h2>
        <p>
          In-vitro fertilization enables fertilization to take place under
          controlled laboratory conditions rather than inside the animal's
          reproductive tract. Leads Genetics has a confirmed in-house animal
          IVF laboratory, with the stated scope covering oocyte collection, IVF
          and embryo culture, and embryo freezing and transfer.
        </p>

        <div className="ivf-box" ref={boxRef}>
          <svg className="ivf-line" aria-hidden="true">
            <path className="ivf-track" ref={trackRef} />
            <path className="ivf-bar" ref={barRef} />
            <circle className="ivf-dot" r="7" ref={dotRef} />
          </svg>

          <ol className="ivf-list">
            {steps.map((step) => (
              <li className="ivf-step" key={step.number}>
                <div className="ivf-text">
                  <span className="ivf-num">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <img
                  src={step.image}
                  alt={step.title}
                  width="320"
                  height="190"
                  loading="lazy"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default StepsFlow;