"use client";
import { motion } from "framer-motion";
import "./casestudies.css";

export default function CaseStudies() {
  return (
   <motion.section 
   className="case-studies"
   initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
  {/* Row 1: Title + Discover side by side */}
  <motion.div 
  className="case-studies-header"
   initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <h2>Our Case Studies</h2>
    <p>
      Discover how we transform ambitious brands into market leaders
      through design, strategy, and storytelling.
    </p>
    <h3>Featured Case Study</h3>
  </motion.div>

  {/* Row 2: Brand logo + name */}
  <motion.div 
  className="case-studies-brand"
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
  >
    <img src="/brand-logo.png" alt="Brand Logo" />
    <span>Brand Name</span>
  </motion.div>

  {/* Row 3i: Highlight + image */}
  <motion.div 
  className="case-studies-content"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  >
    <motion.div 
    className="case-studies-text"
    variants={{
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  >
          <p>Best case study 2024</p>
      <h3>Enlighten Branding and Package Design</h3>
      <p>
        We partnered with ArchStack to reinvent their digital presence and
        unlock exponential growth in their category. And this lead to over 
        100x Pace improvement in Seo optimization and leads Generation
      </p>
      <motion.a href="/case-studies/brand-x"
       whileHover={{ x: 6 }}
  transition={{ duration: 0.2, ease: "easeOut" }}
  >
  View Case Study →
  </motion.a>
    </motion.div>

    <motion.div 
    className="case-studies-image"
    variants={{
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <img src="/case-study-image.jpg" alt="Case Study Preview" />
    </motion.div>
  </motion.div>
</motion.section>
  )};
