"use client";
import React from "react";
import "./selected-works.css";

type WorkImage = {
  src: string;
  title: string;
  category: string;
};

type Work = {
  title: string;
  images: WorkImage[];
};

const works: Work[] = [
  {
    title: "Brand Strategy",
    images: [
      { src: "/images/work1a.jpg", title: "Fintech Rebrand", category: "Fintech" },
      { src: "/images/work1b.jpg", title: "Mobile App UI", category: "App Design" },
      { src: "/images/work1c.jpg", title: "Startup Identity", category: "Branding" },
    ],
  },
  {
    title: "Visual Identity",
    images: [
      { src: "/images/work2a.jpg", title: "Luxury Logo", category: "Logo Design" },
      { src: "/images/work2b.jpg", title: "E-commerce Store", category: "E-Commerce" },
      { src: "/images/work2c.jpg", title: "Packaging Concept", category: "Packaging" },
    ],
  },
  {
    title: "Web Design",
    images: [
      { src: "/images/work3a.jpg", title: "Portfolio Website", category: "Creative" },
      { src: "/images/work3b.jpg", title: "SaaS Landing Page", category: "SaaS" },
      { src: "/images/work3c.jpg", title: "Corporate Site", category: "Enterprise" },
    ],
  },
];

const SelectedWorks: React.FC = () => {
  return (
    <section className="selected-works">
      {/* Header */}
      <div className="selected-works-header">
        <h2>Selected Works</h2>
        <p>
          Showcasing our portfolio of creative solutions that drive real impact.
        </p>
        <a href="/works" className="view-all">
          View All
        </a>
      </div>

      <hr className="divider" />

      {/* Work Rows */}
      <div className="works-list">
        {works.map((work, index) => (
          <div key={index} className="work-row">
            {/* Left Column */}
            <div className="work-text">
              <h3>{work.title}</h3>
            </div>

            {/* Right Column → Masonry Image Grid */}
            <div className="work-images-grid">
              {work.images.map((img, idx) => (
                <div key={idx} className="work-image-card">
                  <img src={img.src} alt={img.title} />
                  <h4>{img.title}</h4>
                  <span>{img.category}</span>
                </div>
              ))}
            </div>

            {/* Divider per row */}
            <hr className="divider full-width" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWorks;

