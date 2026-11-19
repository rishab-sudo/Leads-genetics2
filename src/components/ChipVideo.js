import React from "react";
import "./ChipVideo.css";

const ChipVideo = () => {
  return (
    <section className="chip-video-section h-container">
        <div className="chip-video-heading">
        <span className="chip-video-eyebrow">
          <span className="chip-eyebrow-dot"></span>
          GENOMIC TECHNOLOGY • PRECISION BREEDING
        </span>

        <h2 className="section-heading">
          Bovine SNP Chip
        </h2>
      </div>
      
      <video
        className="chip-video"
        src= {require("../assets/chip-video.mp4")}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </section>
  );
};

export default ChipVideo;
