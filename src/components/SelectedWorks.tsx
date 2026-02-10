"use client";
import React from "react";
import { motion } from "framer-motion";
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
    
<motion.section
  className="selected-works"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
      {/* Header */}
      
<motion.div
  className="selected-works-header"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
        <h2>Selected Works</h2>
        <p>
          Showcasing our portfolio of creative solutions that drive real impact.
        </p>
        <a href="/works" className="view-all">
          View All
        </a>
      </motion.div>

     
<motion.hr
  className="divider"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  style={{ transformOrigin: "left" }}
/>

      {/* Work Rows */}
      
<motion.div
  className="works-list"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>

        {works.map((work, index) => (
          
<motion.div
  key={index}
  className="work-row"
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }}
>
            {/* Left Column */}
            
<motion.div
  className="work-text"
  variants={{
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
>

              <h3>{work.title}</h3>
            </motion.div>

            {/* Right Column → Masonry Image Grid */}
            
<motion.div
  className="work-images-grid"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
>
              {work.images.map((img, idx) => (
                
<motion.div
  key={idx}
  className="work-image-card"
  variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  <img src={img.src} alt={img.title} />
  <h4>{img.title}</h4>
  <span>{img.category}</span>
</motion.div> 
              ))}
            </motion.div>

            {/* Divider per row */}
           
<motion.hr
  className="divider full-width"
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  style={{ transformOrigin: "left" }}
/>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default SelectedWorks;

