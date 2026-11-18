import React from "react";
import Button from "./Button";
import "./SectionSep.css";

const SectionSep = ({
  bgImage,
  title,
  description,
  buttonText = "Explore →",
  link = "/",
}) => {
  return (
    <div className="section-wrapperr">
      <section
        className="section-sep"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="section-overlay">
          <div className="section-content">
            <h2 className="section-heading">{title}</h2>

            <p>{description}</p>

            <Button to={link} variant="primary" size="medium" className="explore-btn">
              {buttonText}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionSep;