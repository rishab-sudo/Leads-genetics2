
import React, { useState, useEffect, useRef } from "react";
import "./AnalysisPipeline.css";
import epi2 from "../../assets/epi2.jpg";

const VERTICAL_BREAKPOINT = 768;

/* =====================================
   HORIZONTAL LAYOUT - DESKTOP
===================================== */

const horizontalLayout = {
  width: 1716,
  height: 360,
  bracket: { x: 1226, y: 20, width: 230, height: 320 },

  nodes: [
    { label: "Raw Data", x: 12, y: 150, width: 120, height: 60 },
    { label: "Quality Control", x: 168, y: 150, width: 160, height: 60 },
    { label: "Remove Adapter", x: 376, y: 72, width: 190, height: 76 },
    { label: "Remove Low-quality Reads", x: 376, y: 212, width: 190, height: 76 },
    { label: "Clean Data", x: 614, y: 150, width: 130, height: 60 },
    { label: "Mapping to Genome", x: 780, y: 150, width: 180, height: 60 },
    { label: "Peak Calling / Region Detection", x: 996, y: 142, width: 190, height: 76 },
    { label: "Differential Analysis", x: 1256, y: 46, width: 170, height: 76 },
    { label: "Methylation Analysis", x: 1256, y: 142, width: 170, height: 76 },
    { label: "Accessibility Analysis", x: 1256, y: 238, width: 170, height: 76 },
    { label: "Functional Annotation", x: 1490, y: 46, width: 210, height: 76 },
    { label: "Pathway Enrichment", x: 1490, y: 142, width: 210, height: 76 },
    { label: "Integration with Biological Databases", x: 1490, y: 238, width: 210, height: 76 },
  ],

  wires: [
    "M132 180 L168 180",
    "M328 180 L352 180 L352 110 L376 110",
    "M328 180 L352 180 L352 250 L376 250",
    "M566 110 L590 110 L590 180 L614 180",
    "M566 250 L590 250 L590 180 L614 180",
    "M744 180 L780 180",
    "M960 180 L996 180",
    "M1186 180 L1210 180 L1210 84 L1256 84",
    "M1186 180 L1256 180",
    "M1186 180 L1210 180 L1210 276 L1256 276",
    "M1426 84 L1490 84",
    "M1426 180 L1490 180",
    "M1426 276 L1490 276",
  ],
};

/* =====================================
   VERTICAL LAYOUT - MOBILE
===================================== */

const verticalLayout = {
  width: 446,
  height: 950,
  bracket: { x: 32, y: 650, width: 176, height: 276 },

  nodes: [
    { label: "Raw Data", x: 143, y: 16, width: 160, height: 52 },
    { label: "Quality Control", x: 133, y: 108, width: 180, height: 52 },
    { label: "Remove Adapter", x: 14, y: 216, width: 180, height: 76 },
    { label: "Remove Low-quality Reads", x: 252, y: 216, width: 180, height: 76 },
    { label: "Clean Data", x: 153, y: 348, width: 140, height: 52 },
    { label: "Mapping to Genome", x: 133, y: 440, width: 180, height: 52 },
    { label: "Peak Calling / Region Detection", x: 113, y: 532, width: 220, height: 76 },
    { label: "Differential Analysis", x: 44, y: 668, width: 150, height: 64 },
    { label: "Methylation Analysis", x: 44, y: 758, width: 150, height: 64 },
    { label: "Accessibility Analysis", x: 44, y: 848, width: 150, height: 64 },
    { label: "Functional Annotation", x: 224, y: 668, width: 206, height: 64 },
    { label: "Pathway Enrichment", x: 224, y: 758, width: 206, height: 64 },
    { label: "Integration with Biological Databases", x: 224, y: 848, width: 206, height: 64 },
  ],

  wires: [
    "M223 68 L223 108",
    "M223 160 L223 186 L104 186 L104 216",
    "M223 160 L223 186 L342 186 L342 216",
    "M104 292 L104 318 L223 318 L223 348",
    "M342 292 L342 318 L223 318 L223 348",
    "M223 400 L223 440",
    "M223 492 L223 532",
    "M223 608 L223 636 L18 636 L18 700 L44 700",
    "M223 608 L223 636 L18 636 L18 790 L44 790",
    "M223 608 L223 636 L18 636 L18 880 L44 880",
    "M194 700 L224 700",
    "M194 790 L224 790",
    "M194 880 L224 880",
  ],
};

/* =====================================
   MAIN COMPONENT
===================================== */

function AnalysisPipeline() {
  const viewportRef = useRef(null);
  const [panelWidth, setPanelWidth] = useState(0);

  useEffect(() => {
    const viewportElement = viewportRef.current;

    if (!viewportElement) return;

    const updateWidth = () => {
      setPanelWidth(viewportElement.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(viewportElement);

    return () => observer.disconnect();
  }, []);

  const isVertical = panelWidth < VERTICAL_BREAKPOINT;

  const layout = isVertical ? verticalLayout : horizontalLayout;

  const scale =
    panelWidth > 0
      ? Math.min(1, panelWidth / layout.width)
      : 1;

  return (
    <section className="analysis-pipeline">

      <div className="analysis-container">

        {/* SINGLE PIPELINE HEADING */}

        <div className="analysis-header">

          <span className="analysis-eyebrow">
            FROM SEQUENCING TO INSIGHT
          </span>

          <h2 className="analysis-title">
            Analysis Pipeline
          </h2>

          <p className="analysis-description">
            An integrated workflow for processing, analysing, and
            interpreting epigenetic data to uncover regulatory
            patterns and biological insights.
          </p>

        </div>

        {/* BLUE FLOWCHART PANEL */}

        <div
          className={`flow-panel ${
            isVertical ? "vertical-mode" : "horizontal-mode"
          }`}
        >

          <div className="flow-viewport" ref={viewportRef}>

            <div
              className="flow-scale-box"
              style={{
                width: `${layout.width * scale}px`,
                height: `${layout.height * scale}px`,
              }}
            >

              <div
                className="flow-canvas"
                style={{
                  width: `${layout.width}px`,
                  height: `${layout.height}px`,
                  transform: `scale(${scale})`,
                }}
              >

                {/* SVG WIRES */}

                <svg
                  className="flow-wires"
                  width={layout.width}
                  height={layout.height}
                  viewBox={`0 0 ${layout.width} ${layout.height}`}
                  aria-hidden="true"
                >

                  <defs>

                    <filter
                      id="pipelineGlow"
                      filterUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width={layout.width}
                      height={layout.height}
                    >
                      <feGaussianBlur
                        stdDeviation="3"
                        result="blurred"
                      />

                      <feMerge>
                        <feMergeNode in="blurred" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    <marker
                      id="pipelineArrow"
                      markerUnits="userSpaceOnUse"
                      markerWidth="12"
                      markerHeight="12"
                      refX="10"
                      refY="6"
                      orient="auto"
                    >
                      <path
                        className="wire-arrow"
                        d="M0 0 L12 6 L0 12 Z"
                      />
                    </marker>

                  </defs>

                  {/* BRACKET */}

                  <rect
                    className="bracket-box"
                    x={layout.bracket.x}
                    y={layout.bracket.y}
                    width={layout.bracket.width}
                    height={layout.bracket.height}
                    rx="10"
                    ry="10"
                  />

                  {/* CONNECTING WIRES */}

                  {layout.wires.map((pathData, pathIndex) => (
                    <g key={pathData}>

                      <path
                        className="wire-base"
                        d={pathData}
                        markerEnd="url(#pipelineArrow)"
                      />

                      <path
                        className="wire-glow"
                        d={pathData}
                        style={{
                          animationDelay: `${pathIndex * 0.25}s`,
                        }}
                      />

                      <path
                        className="wire-spark"
                        d={pathData}
                        style={{
                          animationDelay: `${pathIndex * -0.18}s`,
                        }}
                      />

                    </g>
                  ))}

                </svg>

                {/* FLOW NODES */}

                {layout.nodes.map((node, nodeIndex) => (
                  <div
                    className="flow-node"
                    key={node.label}
                    style={{
                      left: `${node.x}px`,
                      top: `${node.y}px`,
                      width: `${node.width}px`,
                      height: `${node.height}px`,
                      animationDelay: `${nodeIndex * 0.4}s`,
                    }}
                  >

                    <p>{node.label}</p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* EPI2 IMAGE - INSIDE BLUE PANEL */}

          <div className="flow-insight">

            <div className="flow-insight-image">

              <img
                src = {epi2}
                alt="Epigenomic data analysis and molecular research visualization"
                loading="lazy"
              />

            </div>

            <div className="flow-insight-content">

              <span className="flow-insight-label">
                BEYOND SEQUENCING
              </span>

              <h3>
                From Molecular Data to Biological Understanding
              </h3>

              <p>
                Epigenomic analysis connects DNA methylation,
                chromatin accessibility, and regulatory patterns
                to reveal how biological processes are controlled.
                Integrated interpretation helps researchers identify
                meaningful molecular changes and their potential
                relationship with phenotypic traits.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AnalysisPipeline;
