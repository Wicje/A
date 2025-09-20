"use client";
import React from "react";
import "./footer.css";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-cta">
          <h2 className="cta">Let's work together.</h2>
          <p className="muted">Get in touch to start your project.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Studio</h4>
            <a>About</a>
            <a>Work</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a>hello@studio.example</a>
            <a>+234 800 000 000</a>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <a>X</a>
            <a>Instagram</a>
          </div>
        </div>

        <div className="arch-note muted">Dev stack: React + TypeScript + Framer Motion • Dev OS: Arch Linux</div>
      </div>
    </footer>
  )
}

