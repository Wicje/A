"use client";
import React, { useEffect, useState } from "react";
import "./metrics.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function useCounter(to: number, start: boolean, duration = 1200) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const step = Math.max(1, Math.round(to / (duration / 16)));

    const timer = setInterval(() => {
      current += step;
      if (current >= to) {
        setVal(to);
        clearInterval(timer);
      } else {
        setVal(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [to, start, duration]);

  return val;
}

export default function Metrics(){
   const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
const projects = useCounter(106, isInView);
const years = useCounter(8, isInView);
const clients = useCounter(60, isInView);
const value = useCounter(4, isInView);
   return (
    <motion.section 
    className="metrics"
     ref={ref}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  >
  <div className="metrics-container">
    <motion.div 
    className="metrics-grid"
    nitial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  }}
  >
      <motion.div 
      className="metric"
      variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  >
        <div className="metric-number">{projects}</div>
        <div className="metric-label">Projects Completed</div>
      </motion.div>
      <motion.div 
      className="metric"
      variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  >
        <div className="metric-number">{years.toString().padStart(2, "0")}</div>
        <div className="metric-label">Years of Experience</div>
      </motion.div>
      <motion.div 
      className="metric"
      variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  >
        <div className="metric-number">{clients}+</div>
        <div className="metric-label">Clients Worldwide</div>
      </motion.div>
      <motion.div 
      className="metric"
      variants={{
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  }}
  transition={{ duration: 0.4, ease: "easeOut" }}
  >
        <div className="metric-number">${value}M</div>
        <div className="metric-label">Value Generated</div>
      </motion.div>
    </motion.div>
  </div>
</motion.section>
  )
}

