"use client";
import { motion } from "framer-motion";
import "./hero.css";


export default function Hero() {
  return (
    <section className="hero">
      {/* Hero Image */}
      <div className="hero-image">
        <img src="/hero-bg.jpg" alt="Hero background" />
        <h1 className="hero-title">
        ENLiGHTN®
        </h1>
      </div>

      {/* Below Hero - Logo & Write-up */}
      <motion.div 
      className="hero-content"
       initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.9, ease: "easeOut" }}
      >

        <div className="hero-logo">
          <img src="/logo.svg" alt="Codot logo" />
        </div>
        <div className="hero-text">
          <p>
            We are a multidisciplinary design studio rooted in the cultural
            heart of Nsukka. Our passion is to craft visionary solutions for
            ambitious brands — blending local insights with global perspectives.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

