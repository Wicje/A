"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animation";
import "./hero.css";

export default function Hero(){
  // typing text for subtitle
  const full = "We design scalable systems that behave predictably across teams and products.";
  const [txt, setTxt] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTxt(full.slice(0,i));
      if (i >= full.length) clearInterval(t);
    }, 22);
    return ()=>clearInterval(t);
  },[]);

  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* left small writeup above Codot */}
        <div className="hero-side-left">
          <p className="muted small">Studio</p>
          <a href="#projects" className="hero-side-image-link">
            <img src="/images/hero-side.jpg" alt="Side" />
          </a>
        </div>

        {/* main visual boxed to container */}
        <div className="hero-visual">
          <motion.img
            src="/images/hero-top.jpg"
            alt="Hero"
            className="hero-top"
            initial={{scale:1.05, opacity:0}}
            animate={{scale:1, opacity:1}}
            transition={{duration:0.9}}
          />

          {/* overlay text centered on image */}
          <motion.div className="hero-overlay" variants={fadeUp} initial="hidden" animate="show">
            <h1 className="hero-title">CODOT®</h1>
            <p className="hero-sub typing">{txt}</p>
          </motion.div>
        </div>

        {/* right column small: show little image that links to projects */}
        <div className="hero-side-right">
          <a href="#projects">
            <img src="/images/hero-side.jpg" alt="Projects link" />
          </a>
        </div>
      </div>
    </section>
  );
}

