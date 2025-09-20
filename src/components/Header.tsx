"use client";
import React, { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  // time / location display
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(t);
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="left">
          <div className="brand">
            <div className="logo-swatch" aria-hidden/>
            <div className="brand-name">GraphicsEnterprise</div>
          </div>
        </div>

        <div className="center nav-center">
          <nav className="nav" aria-label="Primary">
            <a href="#approach">Approach</a>
            <a href="#trusted">Trusted</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
          </nav>
        </div>

        <div className="right header-meta">
          <div className="meta-time">{time.toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>
          <div className="meta-location">Lagos, NG</div>
          <button className="hamburger" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  );
}

