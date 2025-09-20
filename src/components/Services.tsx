"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animation";
import "./services.css";

export default function Services(){
  const items = [
    {icon:"/images/logo-1.png", title:"Logo Systems", desc:"Flexible marks + lockups for scale."},
    {icon:"/images/logo-2.png", title:"Enterprise Branding", desc:"Positioning, voice & guidelines."},
    {icon:"/images/logo-3.png", title:"Design Ops", desc:"Tokens, libraries & handoff-ready assets."}
  ];
  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-grid">
          {items.map((s, i)=>(
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" className="service-item">
              <img src={s.icon} alt="" className="svc-icon" />
              <div>
                <h4>{s.title}</h4>
                <p className="muted small">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

