
import React from "react";
import { Link, useParams } from "react-router-dom";
import { getBlogBySlug } from "./Data";
import "./BlogDetails.css";

function BlogDetails() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <main className="blog-details-not-found">
        <span className="blog-details-eyebrow">ARTICLE NOT FOUND</span>
        <h1>We couldn't find that article.</h1>
        <p>The article may have moved or the link may be incorrect.</p>
        <Link className="blog-back-button" to="/blog">
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main className="blog-details-page">
      <div className="blog-details-top">
        <Link to="/blog" className="blog-details-back">
          <span>←</span> All Articles
        </Link>

        <span className="blog-details-brand">LEADS GENETICS</span>
      </div>

      <header className="blog-details-header">
        <span className="blog-details-eyebrow">{blog.category}</span>

        <h1>{blog.title}</h1>

        <p className="blog-details-intro">{blog.intro}</p>

        <div className="blog-details-meta">
          <span>{blog.date}</span>
          <span className="blog-meta-separator">•</span>
          <span>{blog.readTime}</span>
        </div>
      </header>

      <figure className="blog-details-cover">
        <img src={blog.image} alt={blog.imageAlt} />
      </figure>

      <div className="blog-details-layout">
        <aside className="blog-details-sidebar">
          <span className="blog-sidebar-label">IN THIS ARTICLE</span>

          <nav aria-label="Article sections">
            {blog.sections.map((section, index) => (
              <a key={section.heading} href={`#section-${index}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.heading}
              </a>
            ))}
          </nav>

          <div className="blog-sidebar-note">
            <span>LEADS GENETICS</span>
            <p>Better Data. Healthier Lives.</p>
          </div>
        </aside>

        <article className="blog-article-body">
          <div className="blog-article-lead">
            <span className="blog-article-lead-mark">“</span>
            <p>{blog.intro}</p>
          </div>

          {blog.sections.map((section, index) => (
            <section
              className="blog-article-section"
              id={`section-${index}`}
              key={section.heading}
            >
              <div className="blog-article-section-heading">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
              </div>

              {section.paragraphs?.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph}</p>
              ))}

              {section.bullets && (
                <ul className="blog-article-list">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="blog-article-end">
            <span className="blog-article-end-line" />
            <span>END OF ARTICLE</span>
            <span className="blog-article-end-line" />
          </div>

          <div className="blog-details-footer-nav">
            <div>
              <span className="blog-sidebar-label">EXPLORE MORE</span>
              <h3>Continue exploring genomics.</h3>
            </div>

            <Link to="/blog" className="blog-back-button">
              All Articles <span>→</span>
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}

export default BlogDetails;
