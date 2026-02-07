"use client";
import { motion } from "framer-motion";
import "./trusted.css";

export default function Trusted() {
  return (
    <motion.section 
    className="trusted"
    initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  >
      {/* Left side */}
      <motion.div 
      className="trusted-left"
      initial={{ opacity: 0, x: -24 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  >
        <h2>Trusted By</h2>
        <p>Leading brands we’ve partnered with</p>
      </motion.div>

      {/* Right side: logo grid */}
      <motion.div 
      className="logo-grid"
       initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }}
  >
        <motion.img 
        src="/images/logo1.png" 
        alt="Logo 1" 
        variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  />
        <motion.img 
        src="/images/logo2.png" 
        alt="Logo 2" 
        variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  />
        <motion.img 
        src="/images/logo3.png" 
        alt="Logo 3" 
        variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  />
        <motion.img 
        src="/images/logo4.png" 
        alt="Logo 4" 
        variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  />
        <motion.img 
        src="/images/logo5.png" 
        alt="Logo 5" 
        variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  />
        <motion.img 
        src="/images/logo6.png" 
        alt="Logo 6" 
        variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  whileHover={{ y: -2 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  />
      </motion.div>
    </motion.section>
  );
}

