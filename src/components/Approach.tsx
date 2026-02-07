"use client";
import { motion } from "framer-motion";
import "./approach.css";

export default function Approach() {
  return (
    <motion.section 
    className="approach"
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
      <motion.div 
      className="approach-left"
      initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  >
        <h2 className="section-title">Our <span>Approach</span></h2>
        <motion.div 
        className="approach-images"
        initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  >
          <motion.img 
          src="/images/gallery1.jpg" 
          alt="Project 1" 
          className="rect" 
          variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  />
          <motion.img 
          src="/images/gallery2.jpg" 
          alt="Project 2" 
          className="rect" 
          variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  />
          <motion.img 
          src="/images/gallery3.jpg" 
          alt="Project 3" 
          className="circle" 
          variants={{
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  />
        </motion.div>
      </motion.div>

      <motion.div 
      className="approach-right"
      initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
  >
        <h3 className="approach-heading">
          Where Brands’ Integrity Meets Design
        </h3>
        <p className="approach-text">
          We combine strategy, design, and storytelling to deliver timeless
          brand identities that resonate across cultures and industries.
        </p>
        <motion.a 
        href="/approach" 
        className="approach-link"
        whileHover={{ x: 6 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
  >
           Learn More About Our Studio →
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

