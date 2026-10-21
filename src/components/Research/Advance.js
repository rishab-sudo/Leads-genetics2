import React from 'react'
import './Advance.css'

/* Technology Showcase (flow diagram + capabilities).
   Renders an <h2> section — place it under a page that owns the single <h1>. */

const TechnologyShowcase = () => {
  return (
    <section className="tss-section-fluid" aria-labelledby="tss-title">
      <div className="tss-bg-pattern" aria-hidden="true" />

      <header className="tss-header">
        <h2 className="tss-heading" id="tss-title">Sequencing technology platforms</h2>
        <p className="tss-subheading">
          From raw sample to actionable insight, powered by industry-leading
          sequencing platforms.
        </p>
      </header>

      <div className="tss-diagram-wrap">
        <svg
          className="tss-diagram"
          viewBox="0 0 1000 320"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Flowchart showing a biological sample being processed by Illumina, Oxford Nanopore, and PacBio sequencing platforms, converging into data analytics and insights."
        >
          <defs>
            <marker
              id="tss-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 Z" className="tss-arrowhead" />
            </marker>
          </defs>

          {/* sample -> platforms */}
          <path className="tss-edge" d="M132,160 C220,160 240,60 360,60" markerEnd="url(#tss-arrow)" />
          <path className="tss-edge" d="M132,160 C220,160 260,160 360,160" markerEnd="url(#tss-arrow)" />
          <path className="tss-edge" d="M132,160 C220,160 240,260 360,260" markerEnd="url(#tss-arrow)" />

          {/* platforms -> analytics */}
          <path className="tss-edge" d="M640,60 C740,60 760,160 828,160" markerEnd="url(#tss-arrow)" />
          <path className="tss-edge" d="M640,160 C740,160 760,160 828,160" markerEnd="url(#tss-arrow)" />
          <path className="tss-edge" d="M640,260 C740,260 760,160 828,160" markerEnd="url(#tss-arrow)" />

          {/* Sample */}
          <g className="tss-node tss-node-sample">
            <circle cx="90" cy="160" r="42" />
            <path className="tss-icon-line" d="M76,132 C90,142 90,150 76,160 C90,170 90,178 76,188" fill="none" />
            <path className="tss-icon-line" d="M104,132 C90,142 90,150 104,160 C90,170 90,178 104,188" fill="none" />
            <path className="tss-icon-rung" d="M79,138 L101,138 M76,150 L104,150 M79,162 L101,162 M76,174 L104,174 M79,182 L101,182" />
            <circle cx="79" cy="138" r="1.6" className="tss-icon-dot" />
            <circle cx="101" cy="138" r="1.6" className="tss-icon-dot" />
            <circle cx="76" cy="150" r="1.6" className="tss-icon-dot" />
            <circle cx="104" cy="150" r="1.6" className="tss-icon-dot" />
            <circle cx="79" cy="162" r="1.6" className="tss-icon-dot" />
            <circle cx="101" cy="162" r="1.6" className="tss-icon-dot" />
          </g>
          <text x="90" y="222" className="tss-node-label">Biological Sample</text>

          {/* Illumina */}
          <g className="tss-node tss-node-platform">
            <rect x="360" y="20" width="280" height="80" rx="16" />
            <circle cx="398" cy="60" r="18" className="tss-icon-bg" />
            <circle cx="391" cy="53" r="2.1" className="tss-icon-dot" />
            <circle cx="398" cy="53" r="2.1" className="tss-icon-dot" />
            <circle cx="405" cy="53" r="2.1" className="tss-icon-dot" />
            <circle cx="391" cy="60" r="2.1" className="tss-icon-dot-accent" />
            <circle cx="398" cy="60" r="2.1" className="tss-icon-dot" />
            <circle cx="405" cy="60" r="2.1" className="tss-icon-dot" />
            <circle cx="391" cy="67" r="2.1" className="tss-icon-dot" />
            <circle cx="398" cy="67" r="2.1" className="tss-icon-dot-accent" />
            <circle cx="405" cy="67" r="2.1" className="tss-icon-dot" />
            <text x="428" y="55" className="tss-node-title">Illumina</text>
            <text x="428" y="74" className="tss-node-sub">Short-read, high-throughput sequencing</text>
          </g>

          {/* Oxford Nanopore */}
          <g className="tss-node tss-node-platform">
            <rect x="360" y="120" width="280" height="80" rx="16" />
            <circle cx="398" cy="160" r="18" className="tss-icon-bg" />
            <circle cx="398" cy="160" r="9" className="tss-icon-pore" fill="none" />
            <path className="tss-icon-line" d="M382,160 C387,152 391,168 396,160 C400,152 405,168 409,160 C412,155 413,157 415,160" fill="none" />
            <text x="428" y="155" className="tss-node-title">Oxford Nanopore</text>
            <text x="428" y="174" className="tss-node-sub">Long-read, real-time sequencing</text>
          </g>

          {/* PacBio */}
          <g className="tss-node tss-node-platform">
            <rect x="360" y="220" width="280" height="80" rx="16" />
            <circle cx="398" cy="260" r="18" className="tss-icon-bg" />
            <circle cx="398" cy="260" r="2.4" className="tss-icon-dot-accent" />
            <circle cx="398" cy="252" r="2" className="tss-icon-dot" />
            <circle cx="405" cy="256" r="2" className="tss-icon-dot" />
            <circle cx="405" cy="264" r="2" className="tss-icon-dot" />
            <circle cx="398" cy="268" r="2" className="tss-icon-dot" />
            <circle cx="391" cy="264" r="2" className="tss-icon-dot" />
            <circle cx="391" cy="256" r="2" className="tss-icon-dot" />
            <text x="428" y="255" className="tss-node-title">PacBio</text>
            <text x="428" y="274" className="tss-node-sub">HiFi long-read accuracy</text>
          </g>

          {/* Analytics */}
          <g className="tss-node tss-node-analytics">
            <circle cx="880" cy="160" r="52" />
            <path className="tss-icon-bar" d="M858,182 v-20 M871,182 v-32 M884,182 v-14 M897,182 v-24" />
            <path className="tss-icon-line" d="M855,150 L868,138 L881,145 L903,120" fill="none" />
            <circle cx="903" cy="120" r="2.4" className="tss-icon-dot-accent" />
          </g>
          <text x="880" y="230" className="tss-node-label">Data Analytics &amp; Insights</text>
        </svg>
      </div>

      <div className="tss-capabilities">
        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M7 2c0 4 10 4 10 8s-10 4-10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M17 2c0 4-10 4-10 8s10 4 10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M8.3 6h7.4M7 10h10M8.3 14h7.4M7 18h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>
          <h3>WGS</h3>
          <p>Whole genome sequencing for comprehensive variant discovery.</p>
        </div>

        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4.5 8c1.5-1.5 2.5 1.5 4 1.5S10 6.5 11.5 8s2.5 1.5 4 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M13 13l6.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <h3>WES</h3>
          <p>Whole exome sequencing focused on protein-coding regions.</p>
        </div>

        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M3 14c3-5 6 5 9 0s6-5 9 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="9" y1="10.3" x2="9" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="9" cy="4" r="2" fill="currentColor" />
              <line x1="15" y1="10.3" x2="15" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="15" cy="6" r="1.4" fill="currentColor" opacity="0.55" />
            </svg>
          </span>
          <h3>Epigenetics</h3>
          <p>Mapping gene expression and regulatory modifications.</p>
        </div>

        <div className="tss-capability">
          <span className="tss-cap-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="2.6" y="9.4" width="18.8" height="7.2" rx="3.6" transform="rotate(-38 12 12)" stroke="currentColor" strokeWidth="1.5" />
              <line x1="9.1" y1="16.4" x2="14.9" y2="7.6" stroke="currentColor" strokeWidth="1.4" transform="rotate(-38 12 12)" opacity="0.7" />
              <path d="M6 15.5c0-1 .8-1.4 1.4-.9s1 .9 1.6.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" transform="rotate(-38 12 12)" />
            </svg>
          </span>
          <h3>Pharmacogenomics</h3>
          <p>Personalizing drug response using genomic markers.</p>
        </div>
      </div>
    </section>
  )
}

export default TechnologyShowcase