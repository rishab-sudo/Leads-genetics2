import React from "react";
import "./ServiceBanner.css";
import defaultBannerImage from "../../assets/genomicbanner.png";

/**
 * Common banner for all service pages.
 *
 * Props:
 *  - title        (string, required)  use "\n" for a line break
 *  - description  (string, optional)
 *  - image        (imported image, optional) defaults to genomicbanner.png
 */
const ServiceBanner = ({ title, description, image }) => {
  const lines = String(title || "").split("\n");

  return (
    <section
      className="service-banner"
      style={{ backgroundImage: `url(${image || defaultBannerImage})` }}
      aria-label={lines.join(" ")}
    >
      <div className="service-banner__overlay"></div>

      <div className="service-banner__container">
        <div className="service-banner__content">
          <h1 className="service-banner__title section-heading">
            {lines.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < lines.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </h1>

          {description ? (
            <p className="service-banner__description">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;