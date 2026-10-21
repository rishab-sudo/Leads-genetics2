import React from 'react'
import './Technology.css'
import illuexplode from '../../assets/illuexplode.mp4';

/* Advanced Research Infrastructure.
   Renders an <h2> section — place it under a page that owns the single <h1>. */

const ResearchInfrastructure = () => {
  return (
    <section className="ari-section-fluid" aria-labelledby="ari-title">
      <div className="ari-bg-pattern" aria-hidden="true" />

      <header className="ari-header">
        <h2 className="ari-heading" id="ari-title">Research infrastructure &amp; capabilities</h2>
        <p className="ari-subheading">
          State-of-the-art technology powering genomic discoveries.
        </p>
      </header>

      <div className="ari-layout">
        <div className="ari-column ari-column-left">
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 19h11M12 16v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 9l2.5 3L11 9l2 3 2.5-3.5L18 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3>High Throughput Sequencers</h3>
            <p>Latest NGS platforms for high accuracy.</p>
          </div>

          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M18.5 5.5l-2 2M7.5 16.5l-2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <h3>AI Computing Cluster</h3>
            <p>High performance computing for AI analysis.</p>
          </div>

          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <circle cx="7" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7 8v4l6 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 14l4-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="18" cy="10" r="1.8" fill="currentColor" />
                <rect x="4.5" y="15.5" width="8" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M6.5 18h1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <h3>Robotic Sample Processing</h3>
            <p>Automated systems for precision and speed.</p>
          </div>
        </div>

        <div className="ari-illustration-wrap">
          <video
            className="ari-illustration-video"
            src={illuexplode}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="Exploded view of an Illumina sequencing instrument"
          />
        </div>

        <div className="ari-column ari-column-right">
          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M7 17a4 4 0 010-8 5 5 0 019.6-1.6A3.5 3.5 0 0117.5 17H7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 20l2-2.5M13 20l1.5-2M11 21l1-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <h3>Cloud Analytics</h3>
            <p>Secure cloud infrastructure for scalable analysis.</p>
          </div>

          <div className="ari-card">
            <span className="ari-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 3l7 3v5c0 5-3.2 8.4-7 10-3.8-1.6-7-5-7-10V6l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <h3>Data Security</h3>
            <p>End-to-end data encryption and compliance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResearchInfrastructure