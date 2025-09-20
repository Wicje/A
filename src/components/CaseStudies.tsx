"use client";
import React from "react";
import "./casestudies.css";

export default function CaseStudies(){
  return (
    <section className="section casestudies-section">
      <div className="container">
        <h2 className="section-heading">Featured Case Studies</h2>
        <div className="case-grid">
          <article className="case-card">
            <img src="/images/case-1.jpg" alt="case1" />
            <h4>Project Alpha</h4>
            <p className="muted">Enterprise identity & system</p>
          </article>

          <article className="case-card">
            <img src="/images/case-2.jpg" alt="case2" />
            <h4>Project Beta</h4>
            <p className="muted">Global logo suite</p>
          </article>
        </div>
      </div>
    </section>
  )
}

