"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/animation";
import "./approach.css";

export default function Approach(){
  return (
    <section id="approach" className="section approach-section">
      <div className="container">
        <motion.div initial="hidden" whileInView="show" variants={stagger} viewport={{once:true}}>
          <motion.h2 variants={fadeUp} className="section-heading">Our Approach</motion.h2>
          <motion.p variants={fadeUp} className="muted">Where brand integrity meets digital possibility.</motion.p>

          <div className="approach-cards">
            <motion.div variants={fadeUp} className="card-curved">
              <img src="/images/approach-1.jpg" alt="" />
              <h4>Discovery</h4>
              <p className="muted small">Research & audit</p>
            </motion.div>

            <motion.div variants={fadeUp} className="card-curved">
              <img src="/images/approach-2.jpg" alt="" />
              <h4>Strategy</h4>
              <p className="muted small">Positioning & voice</p>
            </motion.div>

            <motion.div variants={fadeUp} className="card-circle">
              <img src="/images/approach-circle.jpg" alt="" />
            </motion.div>
          </div>

          <a href="#trusted" className="learn-more">Learn more →</a>
        </motion.div>
      </div>
    </section>
  );
}

