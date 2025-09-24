"use client";
import React from "react";
import { motion } from "framer-motion";
import "./selected-works.css";

/**
 * SelectedWorks.tsx
 * Self-contained, production-ready selected works section.
 *
 * Usage:
 *  import SelectedWorks from './components/SelectedWorks';
 *  ...
 *  <SelectedWorks />
 *
 * Replace placeholder image URLs with your real images in /public or CDN.
 */



const works = [
  {
    title: "Brand Strategy",
    description: "Crafting powerful positioning and unique narratives.",
    image: "/images/work1.jpg",
  },
  {
    title: "Visual Identity",
    description: "Design systems that elevate brand recognition.",
    image: "/images/work2.jpg",
  },
  {
    title: "Web Design",
    description: "Modern, scalable, responsive digital experiences.",
    image: "/images/work3.jpg",
  },
];

const SelectedWorks: React.FC = () => {
  return (
    <section className="selected-works">
      {/* Top Header Row */}
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

      {/* Works List */}
      <div className="works-list">
        {works.map((work, index) => (
          <div key={index} className="work-row">
            {/* Left Column Title + Description */}
            <div className="work-text">
              <h3>{work.title}</h3>
            </div>

            {/* Right Column Image */}
            <div className="work-image">
              <img src={work.image} alt={work.title} />
              <p>{work.description}</p>
            </div>
          </div>
        ))}
      </div>
 <hr className="divider" />


    </section>
  );
};

export default SelectedWorks;

