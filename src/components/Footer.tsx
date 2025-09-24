"use client";
import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>CODOT®</h2>
          <p>contact@codot.com</p>
        </div>
        <div className="footer-links">
          <a href="/works">Works</a>
          <a href="/about">About</a>
          <a href="/pricing">Pricing</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="footer-info">
          <p>Yogyakarta, Indonesia</p>
          <p>Mon – Fri, 9am – 6pm</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Codot. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

