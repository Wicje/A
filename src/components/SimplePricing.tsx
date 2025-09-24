// src/components/SimplePricing.tsx
"use client";

import React from "react";
import "./SimplePricing.css";

const SimplePricing: React.FC = () => {
  return (
    <section className="simple-pricing">
      <div className="pricing-header">
      <h2>Simple Pricing</h2>
      <p className="subtitle">Straightforward plans tailored to your needs.</p>
      <p className= "end">For Teams and Personal</p>
      </div>

      <div className="pricing-cards">
        {/* Card 1 */}
        <div className="pricing-card">
          <h3>Custom Project</h3>
          <p className="price">$990.00</p>
          <ul>
            <li>Branding design package</li>
            <li>Web design and strategy</li>
            <li>Up to 5 revisions</li>
          </ul>
          <button className="pricing-btn">Get Started</button>
        </div>

        {/* Card 2 */}
        <div className="pricing-card featured">
          <h3>Premium Package</h3>
          <p className="price">$1,049</p>
          <ul>
            <li>Everything in Custom Project</li>
            <li>Advanced brand strategy</li>
            <li>Dedicated project manager</li>
          </ul>
          <button className="pricing-btn">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default SimplePricing;

