"use client";
import React from "react";
import "./trusted.css";

export default function Trusted(){
  const logos = ["/images/logo-1.png","/images/logo-2.png","/images/logo-3.png","/images/logo-4.png"];
  return (
    <section id="trusted" className="section trusted-section">
      <div className="container trusted-inner">
        <div className="trusted-left">
          <h3 className="section-heading">Trusted by leading brands</h3>
          <p className="muted">We partner with global teams to ship consistent identity systems.</p>
        </div>
        <div className="trusted-right">
          <div className="logos-grid">
            {logos.map((l, i)=> <img key={i} src={l} alt={`logo-${i}`} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

