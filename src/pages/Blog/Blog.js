import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./Data";
import reaBanner from "../../assets/Leads-Building.jpg";
import "./Blog.css";

function Blog() {
  return (
    <main className="leads-blog">
      <section
        className="blog-hero"
        style={{ backgroundImage: `url(${reaBanner})` }}
      >
        <div className="blog-hero-overlay"></div>

        <div className="blog-hero-content">
          <span className="blog-eyebrow">LEADS GENETICS / BLOG</span>

          <h1 className="section-heading ">
            Insights from the
            <br />
            World of Genomics
          </h1>

          <p>
            Explore research, genomic technologies and advances
            <br className="desktop-break" />
            in agricultural and human genomics.
          </p>

          <a href="#latest-articles" className="blog-hero-button">
            Explore Articles <span>↘</span>
          </a>
        </div>

        <div className="blog-hero-note">
          <span className="hero-note-dot"></span>
          SCIENCE. DATA. DISCOVERY.
        </div>
      </section>

      <section className="blog-listing" id="latest-articles">
        <div className="blog-section-heading">
          <div>
            <span className="blog-eyebrow blog-eyebrow-dark">KNOWLEDGE HUB</span>
            <h2>
              Latest Articles<span>.</span>
            </h2>
            <p>Research insights and perspectives from LEADS Genetics.</p>
          </div>

          <span className="blog-article-count">
            {String(blogs.length).padStart(2, "0")} ARTICLES
          </span>
        </div>

        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <article
              className="blog-card"
              key={blog.id}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link
                to={`/blog/${blog.slug}`}
                className="blog-card-image-link"
                aria-label={`Read ${blog.title}`}
              >
                <img
                  className="blog-card-image"
                  src={blog.image}
                  alt={blog.imageAlt}
                  loading="lazy"
                />
                <span className="blog-image-arrow">↗</span>
              </Link>

              <div className="blog-card-content">
                <div className="blog-card-meta-top">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>

                <h3>
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>

                <p className="blog-card-excerpt">{blog.excerpt}</p>

                <div className="blog-card-footer">
                  <span className="blog-date">
                    <span aria-hidden="true">◷</span> {blog.date}
                  </span>

                  <Link className="blog-read-more" to={`/blog/${blog.slug}`}>
                    Read Article <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-bottom-note">
          <span className="blog-bottom-line"></span>
          <p>Advancing knowledge through genomics, research and innovation.</p>
          <span className="blog-bottom-line"></span>
        </div>
      </section>

      <section className="blog-cta">
        <div className="blog-cta-mark" aria-hidden="true">
          DNA
        </div>

        <div className="blog-cta-copy">
          <span className="blog-eyebrow blog-eyebrow-dark">
            LET'S COLLABORATE
          </span>
          <h2>Have a research project in mind?</h2>
          <p>
            Let's explore how genomic insights can support your next discovery.
          </p>
        </div>

        <a className="blog-cta-button" href="/contact">
          Contact Us <span>↗</span>
        </a>
      </section>
    </main>
  );
}

export default Blog;