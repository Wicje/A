"use client";
import React from "react";
import { motion } from "framer-motion";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="footer-top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
      >
        <motion.div
          className="footer-brand"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2>ENLIGHTEN®</h2>
          <p>contact@enlighten.com</p>
        </motion.div>

        <motion.div
          className="footer-links"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <motion.a href="/works" whileHover={{ y: -2 }}>
            Works
          </motion.a>
          <motion.a href="/about" whileHover={{ y: -2 }}>
            About
          </motion.a>
          <motion.a href="/pricing" whileHover={{ y: -2 }}>
            Pricing
          </motion.a>
          <motion.a href="/faq" whileHover={{ y: -2 }}>
            FAQ
          </motion.a>
        </motion.div>

        <motion.div
          className="footer-info"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>Nsukka, Nigeria</p>
          <p>Mon – Fri, 9am – 6pm</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p>© {new Date().getFullYear()} Enlighten. All Rights Reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;

